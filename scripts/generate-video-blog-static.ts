/**
 * Regenerates the three YouTube-first blog posts with full VideoObject schema.
 * Committed output lives in public/blog/ and is copied to dist/ by Vite on Bolt.
 */
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const node = 'node --experimental-strip-types';

const scripts = [
  'scripts/generate-wave-invoicing-post.ts',
  'scripts/generate-photographer-post.ts',
  'scripts/generate-shorts-post.ts',
  'scripts/generate-quickbooks-gmail-shortcut-post.ts',
  'scripts/generate-sku-numbers-invoice-post.ts',
  'scripts/generate-youtube-posts-static.ts',
];

for (const script of scripts) {
  execSync(`${node} ${script}`, { cwd: root, stdio: 'inherit' });
}

console.log('✓ All video blog static pages regenerated');
