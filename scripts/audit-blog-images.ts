/**
 * Audit blog featured images in Supabase — flags SEO gaps before bulk update.
 *
 * Usage:
 *   npm run audit:blog-images
 *   npm run audit:blog-images -- --csv
 *   npm run audit:blog-images -- --apply-default   # sets branded default + alt on legacy/missing only
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  BLOG_DEFAULT_OG_ALT,
  BLOG_DEFAULT_OG_PATH,
  isLegacyOrEmptyFeaturedImage,
  resolveBlogFeaturedImageAlt,
} from '../src/data/blog-seo-assets.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return;
  fs.readFileSync(envPath, 'utf-8')
    .split('\n')
    .forEach((line) => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        process.env[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, '');
      }
    });
}

loadEnv();

type Row = {
  slug: string;
  title: string;
  primary_keyword: string | null;
  featured_image: string | null;
  featured_image_alt: string | null;
  published: boolean;
};

type Issue =
  | 'missing_image'
  | 'legacy_hero_image'
  | 'missing_alt'
  | 'broken_local_path'
  | 'external_stock';

const STOCK_HOSTS = ['pexels.com', 'unsplash.com', 'images.pexels.com'];

function classify(row: Row): Issue[] {
  const issues: Issue[] = [];
  const img = row.featured_image?.trim() ?? '';

  if (isLegacyOrEmptyFeaturedImage(img)) {
    issues.push(img ? 'legacy_hero_image' : 'missing_image');
  }

  if (!row.featured_image_alt?.trim()) {
    issues.push('missing_alt');
  }

  if (img.startsWith('/') && !img.startsWith('http')) {
    const localPath = path.join(process.cwd(), 'public', img.replace(/^\//, ''));
    if (!fs.existsSync(localPath)) {
      issues.push('broken_local_path');
    }
  }

  if (STOCK_HOSTS.some((h) => img.includes(h))) {
    issues.push('external_stock');
  }

  return issues;
}

async function main() {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.VITE_SUPABASE_ANON_KEY;
  const writeCsv = process.argv.includes('--csv');
  const applyDefault = process.argv.includes('--apply-default');

  if (!url || !key) {
    console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env');
    process.exit(1);
  }

  const supabase = createClient(url, key);
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug, title, primary_keyword, featured_image, featured_image_alt, published')
    .eq('published', true)
    .order('slug');

  if (error) {
    console.error('Supabase error:', error.message);
    process.exit(1);
  }

  const rows = (data ?? []) as Row[];
  const flagged = rows
    .map((row) => ({ row, issues: classify(row) }))
    .filter(({ issues }) => issues.length > 0);

  const counts: Record<Issue, number> = {
    missing_image: 0,
    legacy_hero_image: 0,
    missing_alt: 0,
    broken_local_path: 0,
    external_stock: 0,
  };

  for (const { issues } of flagged) {
    for (const issue of issues) counts[issue]++;
  }

  console.log(`\nBlog image audit — ${rows.length} published posts\n`);
  console.log(`  Missing featured image:     ${counts.missing_image}`);
  console.log(`  Legacy hero_image.png:      ${counts.legacy_hero_image}`);
  console.log(`  Missing alt text:           ${counts.missing_alt}`);
  console.log(`  Broken local path:          ${counts.broken_local_path}`);
  console.log(`  External stock photo:       ${counts.external_stock}`);
  console.log(`  Posts with any flag:        ${flagged.length}\n`);

  if (writeCsv) {
    const outPath = path.join(process.cwd(), 'seo-analysis', 'blog-image-audit.csv');
    const header = 'slug,issues,featured_image,featured_image_alt,primary_keyword\n';
    const body = flagged
      .map(({ row, issues }) =>
        [
          row.slug,
          issues.join('|'),
          JSON.stringify(row.featured_image ?? ''),
          JSON.stringify(row.featured_image_alt ?? ''),
          JSON.stringify(row.primary_keyword ?? ''),
        ].join(','),
      )
      .join('\n');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, header + body);
    console.log(`Wrote ${outPath}\n`);
  }

  if (applyDefault) {
    const toUpdate = flagged.filter(({ row, issues }) =>
      issues.some((i) => i === 'missing_image' || i === 'legacy_hero_image' || i === 'missing_alt'),
    );

    let updated = 0;
    for (const { row } of toUpdate) {
      const needsImage = isLegacyOrEmptyFeaturedImage(row.featured_image);
      const needsAlt = !row.featured_image_alt?.trim();
      if (!needsImage && !needsAlt) continue;

      const patch: Record<string, string> = {};
      if (needsImage) patch.featured_image = BLOG_DEFAULT_OG_PATH;
      if (needsAlt) {
        patch.featured_image_alt = resolveBlogFeaturedImageAlt(row.featured_image_alt, {
          title: row.title,
          primaryKeyword: row.primary_keyword,
        });
      }

      const { error: updateError } = await supabase
        .from('blog_posts')
        .update(patch)
        .eq('slug', row.slug);

      if (updateError) {
        console.error(`  ✗ ${row.slug}: ${updateError.message}`);
      } else {
        updated++;
        console.log(`  ✓ ${row.slug}`);
      }
    }

    console.log(`\nUpdated ${updated} posts. Run npm run prerender to refresh static HTML.\n`);
    return;
  }

  if (flagged.length > 0) {
    console.log('Sample flagged posts:');
    flagged.slice(0, 12).forEach(({ row, issues }) => {
      console.log(`  • ${row.slug} [${issues.join(', ')}]`);
    });
    if (flagged.length > 12) console.log(`  … and ${flagged.length - 12} more`);
    console.log('\nNext: npm run audit:blog-images -- --apply-default');
    console.log('Then: npm run prerender\n');
  }
}

main();
