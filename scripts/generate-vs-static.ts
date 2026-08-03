/**
 * Pre-render /vs-* and /alternatives as static HTML for crawlers.
 * Humans still get React via edge bot-split (see vs-alternatives-route).
 * Run: npm run generate:vs-static
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { allVsPages, type VsPageData } from '../src/data/vs-page-data.ts';
import { buildFaqSchema, esc, ld, writeStaticPage } from './lib/static-page-template.ts';
import { loadViteEnv } from './lib/load-vite-env.ts';
import { metaPixelClickTrackingHtml, metaPixelHeadHtml } from './meta-pixel-snippet.ts';
import { googleAdsHeadHtml } from './google-ads-snippet.ts';

loadViteEnv();

const SITE = 'https://smashinvoices.com';
const APP_STORE = 'https://apps.apple.com/au/app/smash-invoices/id6759475079';
const CHROME_STORE =
  'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');

/** Convert markdown [label](/path) to absolute HTML links; escape the rest. */
function mdToHtml(text: string): string {
  const parts: string[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    parts.push(esc(text.slice(last, m.index)));
    const href = m[2].startsWith('http') ? m[2] : `${SITE}${m[2]}`;
    parts.push(`<a href="${esc(href)}">${esc(m[1])}</a>`);
    last = m.index + m[0].length;
  }
  parts.push(esc(text.slice(last)));
  return parts.join('');
}

function paragraphsHtml(body: string): string {
  return body
    .split(/\n\n+/)
    .map((p) => `<p>${mdToHtml(p)}</p>`)
    .join('\n');
}

function buildVsHtml(data: VsPageData): string {
  const canonical = `${SITE}/${data.slug}`;
  const themCol = data.tableColumns?.them ?? data.competitorShort;
  const rows = data.tableRows
    .map(
      (r) =>
        `<tr><th scope="row">${esc(r.label)}</th><td>${esc(r.smash)}</td><td>${esc(r.them)}</td>${
          data.tableColumns?.themAlt ? `<td>${esc(r.themAlt ?? '—')}</td>` : ''
        }</tr>`,
    )
    .join('');

  const sections = data.contentSections
    .map((s) => `<section><h2>${esc(s.heading)}</h2>${paragraphsHtml(s.body)}</section>`)
    .join('\n');

  const features = data.featureSections
    .map((s) => `<h3>${esc(s.title)}</h3><p>${mdToHtml(s.body)}</p>`)
    .join('\n');

  const bullets = data.whenThemBullets.map((b) => `<li>${esc(b)}</li>`).join('');

  const faqHtml = data.faqs
    .map(
      (f) => `<details style="border-bottom:1px solid #e2e8f0;padding:14px 0;">
<summary style="cursor:pointer;font-weight:700;">${esc(f.q)}</summary>
<p style="color:#475569;margin:10px 0 0;">${esc(f.a)}</p></details>`,
    )
    .join('');

  const moreLinks = allVsPages
    .filter((p) => p.slug !== data.slug)
    .map((p) => `<a href="${SITE}/${p.slug}" style="margin-right:12px;">SMASH vs ${esc(p.competitorShort)}</a>`)
    .join('\n');

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.articleHeadline,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: { '@type': 'Organization', name: 'SMASH Invoices' },
    publisher: { '@type': 'Organization', name: 'SMASH Invoices', url: SITE },
    mainEntityOfPage: canonical,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Comparisons', item: `${SITE}/alternatives` },
      { '@type': 'ListItem', position: 3, name: `SMASH vs ${data.competitorShort}`, item: canonical },
    ],
  };

  const faqLd = buildFaqSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a })));

  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(data.metaTitle)}</title>
  <meta name="description" content="${esc(data.metaDescription)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta property="og:site_name" content="SMASH Invoices">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${esc(data.metaTitle)}">
  <meta property="og:description" content="${esc(data.ogDescription)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${esc(data.ogImage)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(data.metaTitle)}">
  <meta name="twitter:description" content="${esc(data.ogDescription)}">
  <meta property="article:published_time" content="${data.datePublished}">
  <meta property="article:modified_time" content="${data.dateModified}">
  <script type="application/ld+json">${ld(articleLd)}</script>
  <script type="application/ld+json">${ld(breadcrumbLd)}</script>
  <script type="application/ld+json">${ld(faqLd)}</script>
${metaPixelHeadHtml(process.env.VITE_META_PIXEL_ID)}
${googleAdsHeadHtml(process.env.VITE_GOOGLE_ADS_ID)}
  <style>
    body{font-family:system-ui,sans-serif;max-width:720px;margin:0 auto;padding:24px;line-height:1.6;color:#0f172a}
    h1{font-size:1.75rem;line-height:1.15;margin:0 0 12px}
    h2{font-size:1.35rem;margin:32px 0 12px}
    h3{font-size:1.1rem;margin:20px 0 8px}
    table{width:100%;border-collapse:collapse;font-size:0.9rem;margin:16px 0 28px}
    th,td{border-bottom:1px solid #e2e8f0;padding:10px 8px;text-align:left;vertical-align:top}
    .cta{display:inline-block;background:#DFFF00;color:#0f172a;padding:12px 20px;border-radius:999px;font-weight:700;text-decoration:none;margin:8px 8px 0 0}
    .meta{color:#64748b;font-size:0.85rem}
    .box{background:#f8fafc;border:1px solid #e2e8f0;padding:16px;border-radius:12px;margin:24px 0}
  </style>
</head>
<body>
  <nav><a href="${SITE}/">Home</a> · <a href="${SITE}/alternatives">Alternatives</a> · <a href="${canonical}">This page</a></nav>
  <p class="meta">Comparison · Pricing checked ${esc(data.pricingChecked)}</p>
  <h1>${esc(data.h1)}</h1>
  <p>${esc(data.intro)}</p>
  <h2>SMASH vs ${esc(data.competitorShort)}: quick comparison</h2>
  <table>
    <thead><tr><th></th><th>SMASH</th><th>${esc(themCol)}</th>${
      data.tableColumns?.themAlt ? `<th>${esc(data.tableColumns.themAlt)}</th>` : ''
    }</tr></thead>
    <tbody>${rows}</tbody>
  </table>
  ${sections}
  <section>
    <h2>${esc(data.pricingHeading)}</h2>
    ${paragraphsHtml(data.pricingBody)}
  </section>
  <section>
    <h2>Who SMASH is right for</h2>
    <p>${esc(data.whoSmashFor)}</p>
  </section>
  <section class="box">
    <h2>${esc(data.whenThemHeading)}</h2>
    ${data.whenThemIntro ? `<p>${esc(data.whenThemIntro)}</p>` : ''}
    <ul>${bullets}</ul>
    ${data.whenThemClosing ? `<p>${esc(data.whenThemClosing)}</p>` : ''}
  </section>
  <section>
    <h2>Feature detail</h2>
    ${features}
  </section>
  <section>
    <h2>FAQ</h2>
    ${faqHtml}
  </section>
  <p><strong>${esc(data.ctaPreamble)} ${esc(data.ctaLine)}</strong></p>
  <p>
    <a class="cta" href="${APP_STORE}">Start Free</a>
    <a class="cta" href="${CHROME_STORE}">Add to Chrome — Free</a>
  </p>
  <section>
    <h2>More comparisons</h2>
    <p>${moreLinks}</p>
    <p><a href="${SITE}/smash-vs-quickbooks">SMASH vs QuickBooks</a> · <a href="${SITE}/smash-vs-fergus">SMASH vs Fergus</a> · <a href="${SITE}/voice-invoicing">Voice to invoice</a></p>
  </section>
  <p><small>Updated ${esc(data.dateModified.slice(0, 10))}</small></p>
${metaPixelClickTrackingHtml(process.env.VITE_META_PIXEL_ID)}
</body>
</html>`;
}

function buildAlternativesHtml(): string {
  const canonical = `${SITE}/alternatives`;
  const links = allVsPages
    .map(
      (p) =>
        `<li style="margin-bottom:14px;"><a href="${SITE}/${p.slug}"><strong>SMASH vs ${esc(p.competitorShort)}</strong></a><br><span style="color:#64748b;">${esc(p.metaDescription)}</span></li>`,
    )
    .join('\n');

  const faqs = [
    {
      question: 'What is the fastest invoicing app for tradies?',
      answer:
        'SMASH sends a priced, tax-ready invoice in under 60 seconds — by voice on iPhone before you leave the job, or from Gmail in Chrome at your desk.',
    },
    {
      question: 'Is SMASH a Xero or QuickBooks replacement?',
      answer:
        'No. SMASH is the speed layer for quoting and invoicing. Xero and QuickBooks handle accounting. Paid plans sync invoices so you do not retype line items.',
    },
  ];

  const title = 'SMASH Invoices Alternatives — Fastest Way to Send an Invoice';
  const description =
    'Compare SMASH to Invoice Simple, QuoteMate, Joist, Wave, FreshBooks, Square, Zoho Invoice, Xero, Tradify, ServiceM8, Invoice2go and more. Voice or Gmail — under 60 seconds.';

  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta property="og:site_name" content="SMASH Invoices">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <script type="application/ld+json">${ld(buildFaqSchema(faqs))}</script>
${metaPixelHeadHtml(process.env.VITE_META_PIXEL_ID)}
${googleAdsHeadHtml(process.env.VITE_GOOGLE_ADS_ID)}
  <style>
    body{font-family:system-ui,sans-serif;max-width:720px;margin:0 auto;padding:24px;line-height:1.6;color:#0f172a}
    h1{font-size:1.85rem;line-height:1.15}
    .cta{display:inline-block;background:#DFFF00;color:#0f172a;padding:12px 20px;border-radius:999px;font-weight:700;text-decoration:none;margin:8px 8px 0 0}
  </style>
</head>
<body>
  <nav><a href="${SITE}/">Home</a> · <a href="${canonical}">Alternatives</a></nav>
  <h1>The fastest alternative when typing is the bottleneck</h1>
  <p>SMASH turns a finished job into a priced invoice in under 60 seconds — voice on iPhone or Gmail in Chrome. Compare SMASH to the basic apps and suites your ICP already uses.</p>
  <p>
    <a class="cta" href="${APP_STORE}">Start Free</a>
    <a class="cta" href="${CHROME_STORE}">Add to Chrome — Free</a>
  </p>
  <h2>Compare SMASH to your current app</h2>
  <ul style="list-style:none;padding:0;">${links}</ul>
  <h2>Also</h2>
  <p>
    <a href="${SITE}/smash-vs-quickbooks">SMASH vs QuickBooks</a> ·
    <a href="${SITE}/smash-vs-fergus">SMASH vs Fergus</a> ·
    <a href="${SITE}/voice-invoicing">Voice to invoice</a> ·
    <a href="${SITE}/ai-estimates">AI estimates</a>
  </p>
${metaPixelClickTrackingHtml(process.env.VITE_META_PIXEL_ID)}
</body>
</html>`;
}

for (const page of allVsPages) {
  const out = path.join(publicDir, page.slug, 'index.html');
  writeStaticPage(out, buildVsHtml(page));
  console.log(`✓ /${page.slug}`);
}

writeStaticPage(path.join(publicDir, 'alternatives', 'index.html'), buildAlternativesHtml());
console.log('✓ /alternatives');
console.log(`Done — ${allVsPages.length} vs pages + alternatives hub`);
