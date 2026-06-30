/**
 * Pre-render Gmail SEO landing pages as static HTML in public/
 * so Bolt/Netlify crawlers get full content without waiting on the SPA.
 *
 * Run: npx tsx scripts/generate-gmail-landing-static.ts
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  gmailLandingPages,
  type GmailLandingConfig,
} from '../src/data/gmail-landing-pages.ts';

const SITE = 'https://smashinvoices.com';
const CHROME_STORE =
  'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (m) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m] ?? m
  );
}

function renderJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function styles(): string {
  return `
    :root{--bg:#0A0A0A;--surface:rgba(255,255,255,0.04);--border:rgba(255,255,255,0.1);--text:#F5F5F5;--muted:rgba(255,255,255,0.65);--accent:#D9F99D;--accent-ink:#0A0A0A;}
    *,*::before,*::after{box-sizing:border-box;}
    body{margin:0;background:var(--bg);color:var(--text);font-family:'Plus Jakarta Sans',system-ui,sans-serif;font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased;}
    a{color:var(--accent);text-decoration:none;}a:hover{text-decoration:underline;}
    .nav{position:sticky;top:0;z-index:10;background:rgba(10,10,10,0.9);border-bottom:1px solid var(--border);}
    .nav-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:14px 24px;}
    .nav-brand{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:800;color:#fff;font-size:22px;text-transform:uppercase;}
    .nav-cta{background:var(--accent);color:var(--accent-ink);padding:9px 16px;border-radius:999px;font-size:13px;font-weight:700;}
  `;
}

function buildPage(c: GmailLandingConfig): string {
  const canonical = `${SITE}${c.path}`;
  const ogImage = `${SITE}/og-default.png`;

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: c.breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: b.url,
    })),
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const videoLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: c.youtubeTitle,
    description: c.youtubeDescription,
    thumbnailUrl: `https://i.ytimg.com/vi/${c.youtubeVideoId}/maxresdefault.jpg`,
    uploadDate: c.youtubeUploadDate,
    embedUrl: `https://www.youtube.com/embed/${c.youtubeVideoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${c.youtubeVideoId}`,
  };

  const appLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SMASH Invoices — Gmail Chrome Extension',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Chrome',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'AUD',
      description: 'Free up to 5 invoices/month. Paid plans from $15/month.',
    },
    url: `${SITE}/chrome-extension`,
    downloadUrl: CHROME_STORE,
  };

  const comparisonRows = c.comparison.rows
    .map(
      ([a, b, d]) =>
        `<tr><td>${escapeHtml(a)}</td><td>${escapeHtml(b)}</td><td>${escapeHtml(d)}</td></tr>`
    )
    .join('');

  const capabilityCards = c.capabilities
    .map(
      (cap) =>
        `<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px 18px;"><h3 style="margin:0 0 8px;font-size:16px;color:#fff;">${escapeHtml(cap.title)}</h3><p style="margin:0;color:var(--muted);font-size:14px;">${escapeHtml(cap.body)}</p></div>`
    )
    .join('');

  const storyBlocks = c.stories
    .map((s) => {
      const bullets = s.bullets
        .map(
          ([title, body]) =>
            `<li><strong>${escapeHtml(title)}</strong> — ${escapeHtml(body)}</li>`
        )
        .join('');
      return `<section style="margin:40px 0;padding:28px;border-radius:16px;border:1px solid var(--border);${s.dark ? 'background:#111;' : ''}"><p style="text-transform:uppercase;letter-spacing:0.08em;font-size:12px;color:var(--accent);margin:0 0 8px;">${escapeHtml(s.eyebrow)}</p><h2 style="font-family:'Barlow Condensed',system-ui,sans-serif;font-size:28px;margin:0 0 12px;white-space:pre-line;">${escapeHtml(s.title)}</h2><p style="color:var(--muted);margin:0 0 16px;">${escapeHtml(s.body)}</p><ul style="margin:0;padding-left:20px;">${bullets}</ul></section>`;
    })
    .join('');

  const faqHtml = c.faqs
    .map(
      (f) =>
        `<details style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 18px;margin-bottom:10px;"><summary style="cursor:pointer;font-weight:600;color:#fff;">${escapeHtml(f.q)}</summary><p style="color:var(--muted);margin:12px 0 0;">${escapeHtml(f.a)}</p></details>`
    )
    .join('');

  const relatedPages = c.relatedPages
    .map((l) => `<li><a href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a></li>`)
    .join('');
  const relatedBlog = c.relatedBlog
    .map((l) => `<li><a href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a></li>`)
    .join('');

  const breadcrumbNav = c.breadcrumbs
    .map((b, i) => {
      const isLast = i === c.breadcrumbs.length - 1;
      const href = b.url.replace(SITE, '');
      return isLast
        ? `<span style="color:var(--muted);">${escapeHtml(b.name)}</span>`
        : `<a href="${escapeHtml(href)}">${escapeHtml(b.name)}</a>`;
    })
    .join(' <span style="color:var(--muted);">/</span> ');

  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(c.seo.title)}</title>
  <meta name="description" content="${escapeHtml(c.seo.description)}" />
  ${c.seo.keywords ? `<meta name="keywords" content="${escapeHtml(c.seo.keywords)}" />` : ''}
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:title" content="${escapeHtml(c.seo.ogTitle)}" />
  <meta property="og:description" content="${escapeHtml(c.seo.ogDescription)}" />
  <meta property="og:image" content="${ogImage}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(c.seo.ogTitle)}" />
  <meta name="twitter:description" content="${escapeHtml(c.seo.ogDescription)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>${styles()}</style>
  <script type="application/ld+json">${renderJsonLd(breadcrumbLd)}</script>
  <script type="application/ld+json">${renderJsonLd(faqLd)}</script>
  <script type="application/ld+json">${renderJsonLd(videoLd)}</script>
  <script type="application/ld+json">${renderJsonLd(appLd)}</script>
</head>
<body>
  <header class="nav">
    <div class="nav-inner">
      <a href="/" class="nav-brand">SMASH</a>
      <a href="${CHROME_STORE}" class="nav-cta" rel="nofollow">Add to Chrome — Free</a>
    </div>
  </header>
  <main style="max-width:900px;margin:0 auto;padding:32px 24px 80px;">
    <nav style="font-size:13px;margin-bottom:24px;">${breadcrumbNav}</nav>
    <p style="text-transform:uppercase;letter-spacing:0.1em;font-size:12px;color:var(--accent);margin:0 0 8px;">${escapeHtml(c.hero.eyebrow)}</p>
    <p style="font-size:13px;font-weight:700;letter-spacing:0.06em;color:var(--muted);margin:0 0 12px;">${escapeHtml(c.hero.preHeadline)}</p>
    <h1 style="font-family:'Barlow Condensed',system-ui,sans-serif;font-size:clamp(36px,6vw,56px);line-height:1.05;margin:0 0 20px;">
      <span style="color:#fff;">${escapeHtml(c.hero.h1White)}</span>
      <span style="color:var(--accent);"> ${escapeHtml(c.hero.h1Accent)}</span>
    </h1>
    <p style="font-size:18px;color:var(--muted);max-width:720px;">${escapeHtml(c.hero.subcopy)}</p>
    <p style="font-size:14px;color:rgba(255,255,255,0.45);margin-top:12px;">${escapeHtml(c.hero.strapline)}</p>
    <p style="margin:28px 0;">
      <a href="${CHROME_STORE}" style="display:inline-block;background:var(--accent);color:var(--accent-ink);padding:14px 28px;border-radius:999px;font-weight:700;" rel="nofollow">Install SMASH for Gmail — Free</a>
      <a href="/chrome-extension" style="margin-left:16px;color:var(--muted);">Full feature tour →</a>
    </p>
    <section style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:20px 24px;margin:32px 0;">
      <p style="margin:0 0 8px;font-weight:700;color:#fff;">${escapeHtml(c.answerStrip.question)}</p>
      <p style="margin:0;color:var(--muted);">${escapeHtml(c.answerStrip.answer)}</p>
    </section>
    <p style="text-align:center;font-weight:600;margin:32px 0;">${escapeHtml(c.integrationStrap)}</p>
    ${c.integrationStrapSub ? `<p style="text-align:center;font-size:14px;color:var(--muted);margin:-16px 0 32px;">${escapeHtml(c.integrationStrapSub)}</p>` : ''}
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:16px;border:1px solid var(--border);margin:32px 0;">
      <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" src="https://www.youtube.com/embed/${c.youtubeVideoId}" title="${escapeHtml(c.youtubeTitle)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
    </div>
    <blockquote style="border-left:3px solid var(--accent);margin:32px 0;padding:12px 20px;background:var(--surface);border-radius:0 12px 12px 0;">
      <p style="margin:0 0 8px;font-style:italic;">"${escapeHtml(c.featuredTestimonial.quote)}"</p>
      <cite style="font-size:14px;color:var(--muted);font-style:normal;">— ${escapeHtml(c.featuredTestimonial.attribution)}</cite>
    </blockquote>
    <h2 style="font-family:'Barlow Condensed',system-ui,sans-serif;font-size:32px;margin:48px 0 8px;">${escapeHtml(c.comparison.title)}</h2>
    <p style="color:var(--muted);margin:0 0 20px;">${escapeHtml(c.comparison.subtitle)}</p>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead><tr>
        <th style="text-align:left;padding:10px;border:1px solid var(--border);background:rgba(255,255,255,0.06);">${escapeHtml(c.comparison.headers[0])}</th>
        <th style="text-align:left;padding:10px;border:1px solid var(--border);background:rgba(255,255,255,0.06);">${escapeHtml(c.comparison.headers[1])}</th>
        <th style="text-align:left;padding:10px;border:1px solid var(--border);background:rgba(255,255,255,0.06);">${escapeHtml(c.comparison.headers[2])}</th>
      </tr></thead>
      <tbody>${comparisonRows}</tbody>
    </table>
    ${storyBlocks}
    <h2 style="font-family:'Barlow Condensed',system-ui,sans-serif;font-size:28px;margin:48px 0 16px;">${escapeHtml(c.capabilityTitle)}</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px;">${capabilityCards}</div>
    <section style="margin:56px 0 0;"><h2 style="font-family:'Barlow Condensed',system-ui,sans-serif;font-size:28px;">Frequently asked questions</h2>${faqHtml}</section>
    <section style="margin:56px 0 0;text-align:center;padding:40px 28px;border-radius:20px;border:1px solid rgba(217,249,157,0.25);background:linear-gradient(135deg,rgba(217,249,157,0.1),transparent);">
      <h2 style="font-family:'Barlow Condensed',system-ui,sans-serif;font-size:32px;margin:0 0 12px;">${escapeHtml(c.finalCta.headline)}</h2>
      <p style="color:var(--muted);margin:0 0 24px;">${escapeHtml(c.finalCta.subcopy)}</p>
      <a href="${CHROME_STORE}" style="display:inline-block;background:var(--accent);color:var(--accent-ink);padding:14px 28px;border-radius:999px;font-weight:700;" rel="nofollow">Add SMASH to Chrome — Free</a>
    </section>
    <section style="margin:48px 0 0;display:grid;grid-template-columns:1fr 1fr;gap:24px;">
      <div><h3 style="font-size:16px;">Related product pages</h3><ul>${relatedPages}</ul></div>
      <div><h3 style="font-size:16px;">Related articles</h3><ul>${relatedBlog}</ul></div>
    </section>
  </main>
  <footer style="text-align:center;padding:40px 24px;border-top:1px solid var(--border);color:rgba(255,255,255,0.45);font-size:14px;">
    <a href="/">Home</a> · <a href="/blog">Blog</a> · <a href="/chrome-extension">Add to Chrome</a> · <a href="/pricing">Pricing</a>
    <div style="margin-top:14px;">© 2026 SMASH Invoices</div>
  </footer>
  <noscript><p style="text-align:center;padding:12px;">Enable JavaScript for the interactive demo, or install from the <a href="${CHROME_STORE}">Chrome Web Store</a>.</p></noscript>
</body>
</html>`;
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

for (const config of Object.values(gmailLandingPages)) {
  const relDir = config.path.replace(/^\//, '');
  const outDir = path.join(root, 'public', relDir);
  const outFile = path.join(outDir, 'index.html');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, buildPage(config), 'utf-8');
  console.log(`✓ ${outFile}`);
}

console.log(`Generated ${Object.keys(gmailLandingPages).length} Gmail landing static pages.`);
