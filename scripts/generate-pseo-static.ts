/**
 * Append pSEO URLs to public/sitemap.xml and emit static HTML stubs for crawlers.
 * Run: node --experimental-strip-types scripts/generate-pseo-static.ts
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pseoPageRegistry } from '../src/data/pseo/registry.ts';

const SITE = 'https://smashinvoices.com';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const today = new Date().toISOString().split('T')[0];

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (m) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m] ?? m
  );
}

function minimalStaticHtml(pathname: string, label: string): string {
  const url = `${SITE}${pathname}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(label)} | SMASH Invoices</title>
  <link rel="canonical" href="${url}" />
  <meta http-equiv="refresh" content="0;url=${url}" />
</head>
<body>
  <p><a href="${url}">${escapeHtml(label)}</a></p>
</body>
</html>`;
}


let written = 0;
for (const page of pseoPageRegistry) {
  const rel = page.path.replace(/^\//, '');
  const outDir = path.join(root, 'public', rel);
  const outFile = path.join(outDir, 'index.html');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, minimalStaticHtml(page.path, page.label), 'utf-8');
  written++;
}

// Merge into sitemap.xml
const sitemapPath = path.join(root, 'public', 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
const closing = '</urlset>';
if (!sitemap.includes('<!-- pseo:auto -->')) {
  const entries = pseoPageRegistry
    .map(
      (p) => `  <url>
    <loc>${SITE}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>`
    )
    .join('\n');
  sitemap = sitemap.replace(closing, `  <!-- pseo:auto -->\n${entries}\n${closing}`);
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
  console.log(`✓ appended ${pseoPageRegistry.length} pSEO URLs to sitemap.xml`);
} else {
  console.log('ℹ pSEO sitemap block already present — skipping duplicate append');
}

console.log(`✓ wrote ${written} static pSEO HTML stubs`);
