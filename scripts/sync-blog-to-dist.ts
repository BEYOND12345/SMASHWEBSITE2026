/**
 * Copy public/blog → dist/blog after post-prerender patches.
 * Vite only copies public/ at build time; prerender/patch run after that.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcRoot = path.join(root, 'public', 'blog');
const destRoot = path.join(root, 'dist', 'blog');

if (!fs.existsSync(srcRoot)) {
  console.warn('sync-blog-to-dist: public/blog missing — skip');
  process.exit(0);
}

if (!fs.existsSync(path.join(root, 'dist'))) {
  console.warn('sync-blog-to-dist: dist/ missing — run vite build first');
  process.exit(0);
}

let n = 0;
for (const slug of fs.readdirSync(srcRoot)) {
  const src = path.join(srcRoot, slug, 'index.html');
  if (!fs.existsSync(src)) continue;
  const destDir = path.join(destRoot, slug);
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(src, path.join(destDir, 'index.html'));
  n++;
}

console.log(`✓ sync-blog-to-dist: ${n} posts public/blog → dist/blog`);
