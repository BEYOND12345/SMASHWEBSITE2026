/**
 * Step 5 QA checklist — run before production pSEO deploy.
 * Usage: node --experimental-strip-types scripts/verify-pseo.ts
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pseoPageRegistry, pseoPagesForDirectory, PSEO_DIRECTORY_MAX_LINKS } from '../src/data/pseo/registry.ts';
import { buildPersonaHreflang } from '../src/lib/pseo/hreflang.ts';
import { pseoNiches } from '../src/data/pseo/niches.ts';
import { PSEO_SITE } from '../src/lib/pseo/urls.ts';
import { PSEO_COUNTRY_CODES } from '../src/data/pseo/regional-mapping.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

let failed = 0;

function pass(msg: string) {
  console.log(`  ✓ ${msg}`);
}

function fail(msg: string) {
  console.error(`  ✗ ${msg}`);
  failed++;
}

console.log('\n[pSEO QA]\n');

// Variable consistency — scan generated static stubs
console.log('Variable consistency (static HTML):');
const placeholderPattern = /\{(tax_name|currency_symbol|country_name|niche)\}/;
let scanned = 0;
for (const page of pseoPageRegistry.slice(0, 20)) {
  const file = path.join(root, 'public', page.path.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, 'utf-8');
  scanned++;
  if (placeholderPattern.test(html)) fail(`raw placeholder in ${page.path}`);
}
if (scanned > 0) pass(`no raw placeholders in ${scanned} sampled static files`);
else fail('no static pSEO files found — run generate:pseo-static first');

// Hreflang reciprocity for persona cluster
console.log('\nHreflang reciprocity (persona sample):');
const sampleNiche = pseoNiches[0]?.slug ?? 'handyman';
const alts = buildPersonaHreflang(sampleNiche);
const hrefSet = new Set(alts.map((a) => a.href));
if (alts.length === 6) pass(`persona "${sampleNiche}" has 6 hreflang tags (x-default + 5 countries)`);
else fail(`expected 6 hreflang tags, got ${alts.length}`);
for (const alt of alts) {
  if (!alt.href.startsWith(PSEO_SITE)) fail(`invalid href ${alt.href}`);
}
if (hrefSet.size === alts.length) pass('all hreflang URLs unique');

// Chrome store UTM
console.log('\nChrome Store UTM (source files):');
const layoutSrc = fs.readFileSync(path.join(root, 'src/lib/pseo/chrome-url.ts'), 'utf-8');
if (layoutSrc.includes("'pseo'") && layoutSrc.includes('utm_source')) pass('pseoChromeStoreUrl uses utm_source=pseo');
else fail('missing utm_source=pseo in chrome-url.ts');

// Directory link cap
console.log('\nDirectory index link cap:');
const categories = ['for', 'alternatives', 'tool'] as const;
let maxListing = 0;
for (const c of [...PSEO_COUNTRY_CODES, 'x-default' as const]) {
  for (const cat of categories) {
    maxListing = Math.max(maxListing, pseoPagesForDirectory(c, cat).length);
  }
}
if (maxListing <= PSEO_DIRECTORY_MAX_LINKS) pass(`max single directory listing: ${maxListing} links (≤ ${PSEO_DIRECTORY_MAX_LINKS})`);
else fail(`directory listing exceeds ${PSEO_DIRECTORY_MAX_LINKS}: ${maxListing}`);

console.log(failed === 0 ? '\n✅ All pSEO QA checks passed.\n' : `\n❌ ${failed} check(s) failed.\n`);
process.exit(failed === 0 ? 0 : 1);
