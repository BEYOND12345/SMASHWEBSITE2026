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

/** GSC Batch 2 voice survivors — must exist as static HTML in dist/ (not SPA 404). */
const gscVoiceSurvivors: { slug: string; label: string }[] = [
  { slug: 'beyond-chatgpt-dedicated-voice-invoicing', label: 'Beyond ChatGPT voice post' },
  { slug: 'stop-admin-sundays-voice-invoicing', label: 'Stop Admin Sundays' },
  { slug: 'the-60-second-invoice-voice-to-invoice', label: '60-second invoice' },
  { slug: 'fastest-way-to-send-invoice-2026', label: 'Fastest way 2026' },
  { slug: 'fastest-voice-invoice-generator-gmail', label: 'Fastest voice Gmail' },
  { slug: 'invoice-without-typing', label: 'Invoice without typing' },
  { slug: 'is-voice-invoicing-accurate', label: 'Voice accuracy' },
];

function fail(msg: string): never {
  console.error(`✗ verify:blog-deploy — ${msg}`);
  process.exit(1);
}

if (!fs.existsSync(distBlog)) {
  fail('dist/blog/ missing — Vite build did not copy public/blog/. Bolt deploy will 5xx blog URLs.');
}

const distPostCount = fs
  .readdirSync(distBlog)
  .filter((d) => fs.existsSync(path.join(distBlog, d, 'index.html'))).length;
if (distPostCount < 150) {
  fail(`dist/blog/ has only ${distPostCount} posts (expected ≥150). sync:blog-dist may have failed.`);
}
console.log(`✓ dist/blog/ — ${distPostCount} static posts`);

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
  if (!html.includes('VideoObject')) {
    fail(`${slug}/index.html has no VideoObject schema — GSC video/rich-result errors`);
  }
  if (!html.includes('"reviewCount":"15"')) {
    fail(`${slug}/index.html missing Chrome Web Store reviewCount 15 in JSON-LD`);
  }
  if (!html.includes('Chrome Web Store reviews')) {
    fail(`${slug}/index.html missing visible Chrome Web Store rating text`);
  }
  console.log(`✓ ${slug} — embed + VideoObject + Chrome rating OK`);
}

for (const { slug, label } of gscVoiceSurvivors) {
  const file = path.join(distBlog, slug, 'index.html');
  if (!fs.existsSync(file)) {
    fail(`missing dist/blog/${slug}/index.html (${label}). GSC will 404 this URL.`);
  }
  const html = fs.readFileSync(file, 'utf-8');
  if (html.includes('<div id="root">') && !html.includes('<article')) {
    fail(`${slug}/index.html looks like SPA shell, not static blog HTML`);
  }
  if (!html.includes(`<link rel="canonical" href="https://smashinvoices.com/blog/${slug}"`)) {
    fail(`${slug}/index.html canonical tag missing or wrong`);
  }
  console.log(`✓ ${slug} — GSC voice survivor OK`);
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
