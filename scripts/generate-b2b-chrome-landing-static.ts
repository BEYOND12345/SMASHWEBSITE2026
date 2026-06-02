/**
 * Static HTML for B2B Chrome outreach landing (Bolt-safe crawlers).
 * Run: node --experimental-strip-types scripts/generate-b2b-chrome-landing-static.ts
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { B2B_CHROME_LANDING } from '../src/data/b2b-chrome-landing.ts';

const c = B2B_CHROME_LANDING;
const CHROME = c.chromeStoreUrl;

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (m) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m] ?? m
  );
}

function renderJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

const comparisonRows = c.comparison.rows
  .map(
    ([stage, manual, smash]) =>
      `<tr><td style="padding:12px 16px;font-weight:600;border:1px solid #e2e8f0;">${escapeHtml(stage)}</td><td style="padding:12px 16px;border:1px solid #e2e8f0;color:#475569;">${escapeHtml(manual)}</td><td style="padding:12px 16px;border:1px solid #e2e8f0;">${escapeHtml(smash)}</td></tr>`
  )
  .join('');

const featureCards = c.features
  .map(
    (f) =>
      `<div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:24px;"><h3 style="margin:0 0 12px;font-size:18px;color:#0f172a;">${escapeHtml(f.title)}</h3><p style="margin:0;color:#475569;font-size:14px;line-height:1.6;">${escapeHtml(f.body)}</p></div>`
  )
  .join('');

const faqHtml = c.faqs
  .map(
    (f) =>
      `<details style="border-bottom:1px solid #e2e8f0;padding:14px 0;"><summary style="cursor:pointer;font-weight:700;color:#0f172a;">${escapeHtml(f.q)}</summary><p style="color:#475569;margin:12px 0 0;">${escapeHtml(f.a)}</p></details>`
  )
  .join('');

const trustBadges = c.trustBadges.map((b) => `<span style="font-size:12px;color:#64748b;margin-right:16px;">✓ ${escapeHtml(b)}</span>`).join('');

const html = `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(c.seo.title)}</title>
  <meta name="description" content="${escapeHtml(c.seo.description)}" />
  <meta name="keywords" content="${escapeHtml(c.seo.keywords)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${c.canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${c.canonical}" />
  <meta property="og:title" content="${escapeHtml(c.seo.ogTitle)}" />
  <meta property="og:description" content="${escapeHtml(c.seo.ogDescription)}" />
  <meta property="og:image" content="https://smashinvoices.com/og-default.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    body{margin:0;font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:#f8f9fa;color:#0f172a;line-height:1.6;}
    a{color:#1a73e8;}main{max-width:900px;margin:0 auto;padding:32px 24px 64px;}
    .nav{display:flex;justify-content:space-between;align-items:center;padding:14px 24px;background:#fff;border-bottom:1px solid #e2e8f0;}
    .cta{display:inline-block;background:#1a73e8;color:#fff;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;margin-right:12px;}
    table{width:100%;border-collapse:collapse;font-size:14px;margin-top:24px;}
    th{background:#f1f5f9;padding:12px 16px;text-align:left;border:1px solid #e2e8f0;font-size:12px;text-transform:uppercase;}
  </style>
  <script type="application/ld+json">${renderJsonLd({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: c.breadcrumbs.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.name, item: b.url })) })}</script>
  <script type="application/ld+json">${renderJsonLd({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })}</script>
  <script type="application/ld+json">${renderJsonLd({ '@context': 'https://schema.org', '@type': 'VideoObject', name: c.demoVideo.title, description: c.demoVideo.subheadline, thumbnailUrl: `https://i.ytimg.com/vi/${c.demoVideo.id}/maxresdefault.jpg`, uploadDate: c.demoVideo.uploadDate, embedUrl: `https://www.youtube.com/embed/${c.demoVideo.id}`, contentUrl: `https://www.youtube.com/watch?v=${c.demoVideo.id}` })}</script>
  <script type="application/ld+json">${renderJsonLd({ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: c.productName, applicationCategory: 'BusinessApplication', operatingSystem: 'Chrome', offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' }, url: 'https://smashinvoices.com/chrome-extension', downloadUrl: CHROME })}</script>
</head>
<body>
  <header class="nav"><a href="/" style="font-weight:800;text-decoration:none;color:#0f172a;">SMASH</a><a class="cta" href="${CHROME}" rel="nofollow">Add to Chrome — Free</a></header>
  <main>
    <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#64748b;">${escapeHtml(c.hero.eyebrow)}</p>
    <h1 style="font-size:clamp(28px,5vw,40px);line-height:1.1;margin:12px 0 20px;">${escapeHtml(c.hero.h1)}</h1>
    <p style="font-size:18px;color:#475569;max-width:640px;">${escapeHtml(c.hero.subheadline)}</p>
    <p style="margin:28px 0;"><a class="cta" href="${CHROME}" rel="nofollow">${escapeHtml(c.hero.primaryCta)}</a><a href="#workflow-demo">${escapeHtml(c.hero.secondaryCta)}</a></p>
    <p style="margin:24px 0;padding-top:20px;border-top:1px solid #e2e8f0;">${trustBadges}</p>
    <h2 style="margin-top:48px;font-size:24px;">${escapeHtml(c.economicHook.title)}</h2>
    <blockquote style="border-left:4px solid #1a73e8;background:#f1f5f9;padding:16px 20px;margin:20px 0;border-radius:0 8px 8px 0;"><strong>The Operational Overhead Drain:</strong> ${escapeHtml(c.economicHook.body)}</blockquote>
    <table><thead><tr>${c.comparison.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${comparisonRows}</tbody></table>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin:48px 0;">${featureCards}</div>
    <section id="workflow-demo"><h2 style="font-size:24px;">${escapeHtml(c.demoVideo.headline)}</h2>
    <p style="color:#475569;max-width:640px;">${escapeHtml(c.demoVideo.subheadline)}</p>
    <div style="position:relative;padding-bottom:56.25%;height:0;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;margin:20px 0;">
      <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" src="https://www.youtube.com/embed/${c.demoVideo.id}" title="${escapeHtml(c.demoVideo.title)}" allowfullscreen loading="lazy"></iframe>
    </div></section>
    <section style="margin-top:48px;"><h2>FAQ</h2>${faqHtml}</section>
    <section style="margin-top:56px;background:#0a0a0a;color:#fff;padding:40px 28px;border-radius:16px;text-align:center;">
      <h2 style="color:#fff;margin:0 0 12px;">${escapeHtml(c.footerCta.headline)}</h2>
      <p style="color:rgba(255,255,255,0.65);">${escapeHtml(c.footerCta.subheadline)}</p>
      <p style="margin:24px 0;"><a class="cta" href="${CHROME}" rel="nofollow" style="background:#D9F99D;color:#0a0a0a;">${escapeHtml(c.footerCta.primaryCta)}</a></p>
      <p style="font-size:12px;color:rgba(255,255,255,0.4);">${escapeHtml(c.footerCta.subtext)}</p>
    </section>
  </main>
  <footer style="text-align:center;padding:32px;color:#64748b;font-size:14px;"><a href="/">Home</a> · <a href="/chrome-extension">Chrome Extension</a> · <a href="/b2b-gmail-quoting">Quotes &amp; RFQs</a></footer>
</body>
</html>`;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'b2b-gmail-quoting');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
console.log(`✓ ${path.join(outDir, 'index.html')}`);

// Sitemap
const sitemapPath = path.join(root, 'public', 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
if (!sitemap.includes(c.canonical)) {
  const today = new Date().toISOString().split('T')[0];
  const entry = `  <url>
    <loc>${c.canonical}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.92</priority>
  </url>`;
  sitemap = sitemap.replace('</urlset>', `${entry}\n</urlset>`);
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
  console.log('✓ Added to sitemap.xml');
}
