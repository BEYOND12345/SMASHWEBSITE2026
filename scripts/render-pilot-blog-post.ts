/**
 * Render a single blog post from scripts/pilot-blog-posts/<slug>.json
 * into public/blog/<slug>/index.html (offline — no Supabase required).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderPost, type BlogPost } from './prerender-blog.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const slug = process.argv[2];

if (!slug) {
  console.error('Usage: node --experimental-strip-types scripts/render-pilot-blog-post.ts <slug>');
  process.exit(1);
}

const jsonPath = path.join(__dirname, 'pilot-blog-posts', `${slug}.json`);
if (!fs.existsSync(jsonPath)) {
  console.error(`Missing pilot file: ${jsonPath}`);
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf-8')) as BlogPost & { slug: string };
const post: BlogPost = {
  id: raw.id ?? slug,
  slug: raw.slug,
  title: raw.title,
  content: raw.content,
  excerpt: raw.excerpt,
  featured_image: raw.featured_image ?? '/hero_image.png',
  featured_image_alt: raw.featured_image_alt ?? raw.title,
  primary_keyword: raw.primary_keyword,
  secondary_keywords: raw.secondary_keywords ?? [],
  meta_title: raw.meta_title ?? null,
  meta_description: raw.meta_description,
  author: raw.author ?? 'SMASH Team',
  author_bio: raw.author_bio ?? null,
  published_at: raw.published_at ?? new Date().toISOString(),
  updated_at: raw.updated_at ?? new Date().toISOString(),
  last_reviewed: raw.last_reviewed ?? raw.updated_at ?? null,
  reading_time: raw.reading_time ?? 6,
  key_takeaways: raw.key_takeaways ?? null,
  faq_data: raw.faq_data ?? null,
};

const html = renderPost(post);
const outDir = path.join(process.cwd(), 'public', 'blog', slug);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), html);
console.log(`✓ Wrote public/blog/${slug}/index.html`);
