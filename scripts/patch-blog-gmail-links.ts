/**
 * Add internal links from key static blog posts to Gmail SEO landing pages.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const blogRoot = path.join(root, 'public', 'blog');

const patches: { slug: string; insert: string }[] = [
  {
    slug: 'quickbooks-estimates-from-gmail',
    insert:
      '<li><a href="/integrations/gmail-quickbooks-estimate-generator">Gmail + QuickBooks estimate generator (product page)</a></li>',
  },
  {
    slug: 'xero-quote-builder-gmail-extension',
    insert:
      '<li><a href="/integrations/gmail-xero-quote-builder">Gmail + Xero quote builder (product page)</a></li>',
  },
  {
    slug: 'gmail-email-to-invoice-20-seconds',
    insert: '<li><a href="/gmail-invoice">Gmail invoice extension (product page)</a></li>',
  },
  {
    slug: 'gmail-quickbooks-xero-bridge',
    insert: `<li><a href="/integrations/gmail-quickbooks-estimate-generator">QuickBooks estimates from Gmail</a></li>
<li><a href="/integrations/gmail-xero-quote-builder">Xero quotes from Gmail</a></li>
<li><a href="/gmail-invoice">Gmail invoice extension</a></li>`,
  },
  {
    slug: 'gmail-to-xero-invoice-no-typing',
    insert:
      '<li><a href="/integrations/gmail-xero-quote-builder">Gmail + Xero quote builder (product page)</a></li>',
  },
  {
    slug: 'fastest-voice-invoice-generator-gmail',
    insert: '<li><a href="/gmail-invoice">Gmail invoice extension (product page)</a></li>',
  },
  {
    slug: 'photographer-wedding-quote-gmail-60-seconds',
    insert: '<li><a href="/gmail-invoice">Gmail invoice extension (product page)</a></li>',
  },
  {
    slug: 'shipping-container-quote-builder-gmail',
    insert:
      '<li><a href="/integrations/gmail-quickbooks-estimate-generator">Gmail + QuickBooks estimates (product page)</a></li>',
  },
];

const marker = '<h2>Related Reading</h2>';

for (const { slug, insert } of patches) {
  const file = path.join(blogRoot, slug, 'index.html');
  if (!fs.existsSync(file)) {
    console.warn(`skip (missing): ${slug}`);
    continue;
  }
  let html = fs.readFileSync(file, 'utf-8');
  if (html.includes(insert)) {
    console.log(`skip (already patched): ${slug}`);
    continue;
  }
  const idx = html.indexOf(marker);
  if (idx === -1) {
    console.warn(`skip (no Related Reading): ${slug}`);
    continue;
  }
  const ulStart = html.indexOf('<ul>', idx);
  if (ulStart === -1) continue;
  const insertAt = ulStart + 4;
  html = html.slice(0, insertAt) + insert + html.slice(insertAt);
  fs.writeFileSync(file, html, 'utf-8');
  console.log(`✓ patched ${slug}`);
}
