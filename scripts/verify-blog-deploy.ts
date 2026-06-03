/**
 * Post-build check: priority video blog pages must exist in dist/ with VideoObject schema.
 * Fails the build loudly if Bolt would serve 5xx/SPA shells to Google for these URLs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distBlog = path.join(root, 'dist', 'blog');

const priorityPosts: { slug: string; label: string }[] = [
  { slug: 'wave-invoicing-alternative-gmail', label: 'Wave invoicing alternative' },
  { slug: 'photographer-wedding-quote-gmail-60-seconds', label: 'Photographer wedding quote' },
  { slug: 'fastest-voice-invoice-generator-gmail', label: 'Fastest voice invoice' },
  { slug: 'quickbooks-gmail-invoice-shortcut', label: 'QuickBooks Gmail shortcut' },
  { slug: 'how-to-add-sku-numbers-to-invoice', label: 'SKU numbers invoice' },
];

const videoPosts: { slug: string }[] = [
  { slug: 'gmail-email-to-invoice-20-seconds' },
  { slug: 'gmail-to-xero-invoice-no-typing' },
  { slug: 'gmail-quickbooks-xero-bridge' },
  { slug: 'quickbooks-gmail-chrome-extension-missing' },
  { slug: 'quickbooks-gmail-sidebar-tab-switching' },
  { slug: 'fastest-way-to-send-invoice-2026' },
  { slug: 'pest-control-invoicing-gmail-csv-pricing' },
];

function fail(msg: string): never {
  console.error(`✗ verify:blog-deploy — ${msg}`);
  process.exit(1);
}

if (!fs.existsSync(distBlog)) {
  fail('dist/blog/ missing — Vite build did not copy public/blog/. Bolt deploy will 5xx blog URLs.');
}

for (const { slug, label } of priorityPosts) {
  const file = path.join(distBlog, slug, 'index.html');
  if (!fs.existsSync(file)) {
    fail(`missing dist/blog/${slug}/index.html (${label}). Regenerate with npm run generate:video-blog-static`);
  }
  const html = fs.readFileSync(file, 'utf-8');
  if (html.length < 8000) {
    fail(`${slug}/index.html is suspiciously small (${html.length} bytes)`);
  }
  if (!html.includes('VideoObject')) {
    fail(`${slug}/index.html has no VideoObject schema`);
  }
  if (!html.includes('application/ld+json')) {
    fail(`${slug}/index.html has no JSON-LD`);
  }
  if (!html.includes(`<link rel="canonical" href="https://smashinvoices.com/blog/${slug}"`)) {
    fail(`${slug}/index.html canonical tag missing or wrong`);
  }
  if (html.includes('<div id="root">') && !html.includes('<article')) {
    fail(`${slug}/index.html looks like SPA shell, not static blog HTML`);
  }
  console.log(`✓ ${slug} — static HTML + VideoObject OK`);
}

for (const { slug } of videoPosts) {
  const file = path.join(distBlog, slug, 'index.html');
  if (!fs.existsSync(file)) {
    fail(`missing dist/blog/${slug}/index.html (original YouTube demo batch)`);
  }
  const html = fs.readFileSync(file, 'utf-8');
  if (!html.includes('youtube.com/embed')) {
    fail(`${slug}/index.html has no YouTube embed`);
  }
  console.log(`✓ ${slug} — embed present`);
}

const redirects = path.join(root, 'dist', '_redirects');
if (!fs.existsSync(redirects)) {
  fail('dist/_redirects missing — blog rewrite rules will not apply on Netlify/Bolt');
}
const rules = fs.readFileSync(redirects, 'utf-8');
if (!rules.includes('/blog/:slug')) {
  fail('dist/_redirects missing /blog/:slug rewrite');
}

console.log('');
console.log('✅ Blog deploy verification passed — safe to request GSC indexing after Bolt build is green');
