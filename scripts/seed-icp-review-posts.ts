/**
 * Upsert the ICP honest-review pilot posts into Supabase blog_posts.
 * Safe to re-run (onConflict: slug).
 *
 *   node --experimental-strip-types scripts/seed-icp-review-posts.ts
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function loadEnv() {
  for (const name of ['.env', '.env.production', '.env.local']) {
    const p = path.join(root, name);
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
      const m = line.match(/^([^#=][^=]*)=(.*)$/);
      if (!m) continue;
      const k = m[1].trim();
      const v = m[2].trim().replace(/^["']|["']$/g, '');
      if (process.env[k] === undefined) process.env[k] = v;
    }
  }
}

loadEnv();

const url = process.env.VITE_SUPABASE_URL;
const key =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SERVICE_ROLE_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Missing VITE_SUPABASE_URL and a Supabase key');
  process.exit(1);
}

const supabase = createClient(url, key);

const SLUGS = [
  'invoice-simple-review-for-tradies',
  'joist-review-for-tradies',
  'wave-invoicing-review-for-tradies',
];

const dir = path.join(root, 'scripts', 'pilot-blog-posts');

for (const slug of SLUGS) {
  const raw = JSON.parse(fs.readFileSync(path.join(dir, `${slug}.json`), 'utf8'));
  const row = {
    slug: raw.slug,
    title: raw.title,
    content: raw.content,
    excerpt: raw.excerpt,
    featured_image: raw.featured_image,
    featured_image_alt: raw.featured_image_alt,
    primary_keyword: raw.primary_keyword,
    secondary_keywords: raw.secondary_keywords,
    meta_title: raw.meta_title,
    meta_description: raw.meta_description,
    author: raw.author,
    author_bio: raw.author_bio,
    published_at: raw.published_at,
    updated_at: raw.updated_at,
    last_reviewed: raw.last_reviewed,
    reading_time: raw.reading_time,
    key_takeaways: raw.key_takeaways,
    faq_data: raw.faq_data,
    published: true,
  };

  const { error } = await supabase.from('blog_posts').upsert(row, { onConflict: 'slug' });
  if (error) {
    console.error(`✗ ${slug}: ${error.message}`);
  } else {
    console.log(`✓ Upserted /blog/${slug}`);
  }
}
