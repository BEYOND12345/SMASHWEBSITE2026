/**
 * Pre-render pSEO pages as crawlable static HTML in public/ (Bolt-safe).
 * Includes canonical, reciprocal hreflang, PAS body copy, and schema.
 * Run: node --experimental-strip-types scripts/generate-pseo-static.ts
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pseoPageRegistry, type PseoPageEntry } from '../src/data/pseo/registry.ts';
import { nicheBySlug } from '../src/data/pseo/niches.ts';
import { softwareBySlug } from '../src/data/pseo/software-alternatives.ts';
import { regionalMapping, type PseoCountryCode } from '../src/data/pseo/regional-mapping.ts';
import { SMASH_LOGO_NAV_LINK_INLINE } from './brand-logo.ts';
import {
  buildAlternativePageContent,
  buildPersonaPageContent,
  buildTaxToolPageContent,
} from '../src/lib/pseo/content.ts';
import {
  buildAlternativeHreflang,
  buildPersonaHreflang,
  buildTaxToolHreflang,
} from '../src/lib/pseo/hreflang.ts';
import { pseoChromeCampaign, pseoChromeStoreUrl } from '../src/lib/pseo/chrome-url.ts';
import { pseoAbsoluteUrl } from '../src/lib/pseo/urls.ts';

const SITE = 'https://smashinvoices.com';
const CHROME_BASE =
  'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const today = new Date().toISOString().split('T')[0];

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (m) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m] ?? m
  );
}

function renderJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function hreflangTags(alts: { hreflang: string; href: string }[]): string {
  return alts
    .map((a) => `<link rel="alternate" hreflang="${escapeHtml(a.hreflang)}" href="${escapeHtml(a.href)}" />`)
    .join('\n  ');
}

function nicheSlugFromPath(pagePath: string): string | null {
  const m = pagePath.match(/\/for\/([^/]+)$/);
  return m?.[1] ?? null;
}

function softwareSlugFromPath(pagePath: string): string | null {
  const m = pagePath.match(/\/alternatives\/([^/]+)$/);
  return m?.[1] ?? null;
}

function buildStaticHtml(page: PseoPageEntry): string {
  const canonical = pseoAbsoluteUrl(page.path);
  let title = page.label;
  let description = 'SMASH Invoices — fast invoicing from Gmail.';
  let headline = page.label;
  let subheadline = '';
  let bodySections = '';
  let hreflangs: { hreflang: string; href: string }[] = [];
  let currencyCode = 'USD';
  let campaign = 'pseo_static';

  if (page.category === 'for') {
    const nicheSlug = nicheSlugFromPath(page.path);
    const niche = nicheSlug ? nicheBySlug[nicheSlug] : undefined;
    if (!niche) throw new Error(`missing niche for ${page.path}`);
    const regionCountry: PseoCountryCode = page.country === 'x-default' ? 'au' : (page.country as PseoCountryCode);
    const region = regionalMapping[regionCountry];
    const content = buildPersonaPageContent(niche, region);
    title = content.title;
    description = content.metaDescription;
    headline = content.headline;
    subheadline = content.subheadline;
    bodySections = `<h2>${escapeHtml(content.agitation.title)}</h2><p>${escapeHtml(content.agitation.body)}</p>
<h2>${escapeHtml(content.solution.title)}</h2><p>${escapeHtml(content.solution.body)}</p>
<p><strong>Sample line item:</strong> ${escapeHtml(niche.defaultLineItem)} · ${escapeHtml(region.tax_name)} · ${escapeHtml(region.currency_code)}</p>`;
    hreflangs = buildPersonaHreflang(niche.slug);
    currencyCode = region.currency_code;
    campaign = pseoChromeCampaign(page.country === 'x-default' ? 'default' : page.country!, niche.slug);
  } else if (page.category === 'alternatives') {
    const softwareSlug = softwareSlugFromPath(page.path);
    const software = softwareSlug ? softwareBySlug[softwareSlug] : undefined;
    if (!software || !page.country || page.country === 'x-default') throw new Error(`bad alternative page ${page.path}`);
    const region = regionalMapping[page.country];
    const content = buildAlternativePageContent(software, region);
    title = content.title;
    description = content.metaDescription;
    headline = content.headline;
    subheadline = content.subheadline;
    bodySections = `<h2>${escapeHtml(content.agitation.title)}</h2><p>${escapeHtml(content.agitation.body)}</p>
<h2>${escapeHtml(content.solution.title)}</h2><p>${escapeHtml(content.solution.body)}</p>`;
    hreflangs = buildAlternativeHreflang(software.slug);
    currencyCode = region.currency_code;
    campaign = pseoChromeCampaign(page.country, software.slug.replace(/-gmail-not-working$/, ''));
  } else if (page.category === 'tool') {
    if (!page.country || page.country === 'x-default') throw new Error(`bad tool page ${page.path}`);
    const region = regionalMapping[page.country];
    const content = buildTaxToolPageContent(region);
    title = content.title;
    description = content.metaDescription;
    headline = content.headline;
    subheadline = content.subheadline;
    bodySections = `<p>${escapeHtml(content.conversionHook)}</p>`;
    hreflangs = buildTaxToolHreflang();
    currencyCode = region.currency_code;
    campaign = pseoChromeCampaign(page.country, 'tax_tool');
  }

  const chromeUrl = pseoChromeStoreUrl(campaign);
  const appLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Smash Invoices',
    operatingSystem: 'Chrome OS, macOS, Windows, Linux',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: currencyCode },
    downloadUrl: CHROME_BASE,
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${canonical}" />
  ${hreflangTags(hreflangs)}
  <meta property="og:url" content="${canonical}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <script type="application/ld+json">${renderJsonLd(appLd)}</script>
  <style>
    body{margin:0;background:#0f172a;color:#f5f5f5;font-family:system-ui,sans-serif;line-height:1.6;padding:0 24px 48px;}
    a{color:#DFFF00;} main{max-width:720px;margin:0 auto;padding-top:32px;}
    h1{font-size:2rem;line-height:1.15;color:#fff;} .cta{display:inline-block;background:#DFFF00;color:#0f172a;padding:12px 24px;border-radius:999px;font-weight:700;text-decoration:none;margin:16px 8px 0 0;}
    .cta-ghost{background:transparent;color:#fff;border:2px solid rgba(255,255,255,0.25);}
    header{border-bottom:1px solid rgba(255,255,255,0.1);}
  </style>
</head>
<body>
  <header style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;">
    ${SMASH_LOGO_NAV_LINK_INLINE}
    <a href="${chromeUrl}" rel="nofollow" class="cta">Add to your browser</a>
  </header>
  <main>
    <h1>${escapeHtml(headline)}</h1>
    <p>${escapeHtml(subheadline)}</p>
    ${bodySections}
    <a href="${chromeUrl}" rel="nofollow" class="cta">Add to your browser</a>
    <a href="/voice-invoicing" class="cta cta-ghost">SMASH for iPhone</a>
    <p style="font-size:13px;color:rgba(255,255,255,0.45);margin-top:16px;"><a href="/chrome-extension">See the full Gmail extension →</a></p>
    <p style="font-size:13px;color:rgba(255,255,255,0.45);margin-top:32px;">
      <a href="/sitemap-directory">pSEO directory</a>
    </p>
  </main>
</body>
</html>`;
}

const DIRECTORY_URLS = [
  '/sitemap-directory',
  ...['us', 'uk', 'ca', 'au', 'nz', 'default'].flatMap((c) => [
    `/sitemap-directory/${c}`,
    `/sitemap-directory/${c}/for`,
    `/sitemap-directory/${c}/alternatives`,
    `/sitemap-directory/${c}/tool`,
  ]),
];

let written = 0;
for (const page of pseoPageRegistry) {
  const rel = page.path.replace(/^\//, '');
  const outDir = path.join(root, 'public', rel);
  const outFile = path.join(outDir, 'index.html');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, buildStaticHtml(page), 'utf-8');
  written++;
}

const sitemapPath = path.join(root, 'public', 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
const closing = '</urlset>';

function urlEntry(loc: string) {
  return `  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${loc.includes('sitemap-directory') ? '0.6' : '0.75'}</priority>
  </url>`;
}

if (!sitemap.includes('<!-- pseo:auto -->')) {
  const entries = [
    ...pseoPageRegistry.map((p) => urlEntry(p.path)),
    ...DIRECTORY_URLS.map((p) => urlEntry(p)),
  ].join('\n');
  sitemap = sitemap.replace(closing, `  <!-- pseo:auto -->\n${entries}\n${closing}`);
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
  console.log(`✓ appended ${pseoPageRegistry.length + DIRECTORY_URLS.length} pSEO URLs to sitemap.xml`);
} else if (!sitemap.includes('<!-- pseo:directory -->')) {
  const dirEntries = DIRECTORY_URLS.map((p) => urlEntry(p)).join('\n');
  sitemap = sitemap.replace(closing, `  <!-- pseo:directory -->\n${dirEntries}\n${closing}`);
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
  console.log(`✓ appended ${DIRECTORY_URLS.length} directory hub URLs to sitemap.xml`);
} else {
  console.log('ℹ pSEO sitemap blocks already present');
}

console.log(`✓ wrote ${written} static pSEO HTML pages (with hreflang + PAS content)`);
