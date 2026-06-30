/**
 * Optional crawler HTML for /b2b-gmail-quoting — NOT used in production deploy.
 * Live route is React SPA (B2bChromeLandingPage). Do not commit output to public/.
 * Run manually only if needed: npm run generate:b2b-chrome-static
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { B2B_CHROME_LANDING } from '../src/data/b2b-chrome-landing.ts';
import { mainPages, HREFLANG_LINKS, DATE_MODIFIED } from '../src/data/main-pages-seo.ts';
import { SMASH_LOGO_NAV_IMG } from './brand-logo.ts';

const c = B2B_CHROME_LANDING;
const CHROME = c.chromeStoreUrl;
const SITE = 'https://smashinvoices.com';
const answer = mainPages.b2bGmailQuoting.answerBlock;

function esc(text: string): string {
  return text.replace(/[&<>"']/g, (m) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m] ?? m
  );
}

function ld(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

const hreflang = HREFLANG_LINKS.map(
  (l) => `  <link rel="alternate" hreflang="${l.hreflang}" href="${esc(l.href)}">`
).join('\n');

const valueBullets = c.hero.valueBullets
  .map(
    (b) =>
      `<li><strong>${esc(b.from)}</strong> → <span class="accent">${esc(b.to)}</span></li>`
  )
  .join('');

const stats = c.statement.stats
  .map(
    (s) =>
      `<div class="stat"><p class="stat-val">${esc(s.value)}</p><p class="stat-label">${esc(s.label)}</p></div>`
  )
  .join('');

const dualCols = c.dualMode.columns
  .map(
    (col) =>
      `<div class="card light"><p class="eyebrow dark">${esc(col.tag)}</p><h3>${esc(col.title)}</h3><p>${esc(col.body)}</p></div>`
  )
  .join('');

const painItems = c.painResolution.items
  .map((item) => `<div class="card dark"><h3>${esc(item.title)}</h3><p>${esc(item.body)}</p></div>`)
  .join('');

const matrixItems = c.featureMatrix.items
  .map((item) => `<div class="card light"><h3>${esc(item.title)}</h3><p>${esc(item.body)}</p></div>`)
  .join('');

const plans = c.pricing.plans
  .map(
    (p) =>
      `<div class="plan${p.featured ? ' featured' : ''}"><h3>${esc(p.name)}</h3><p class="price">${esc(p.price)}</p><p class="note">${esc(p.priceNote)}</p><p>${esc(p.body)}</p></div>`
  )
  .join('');

const faqHtml = c.faqs
  .map(
    (f) =>
      `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`
  )
  .join('');

const trustBadges = c.trustBadges.map((b) => `<span class="badge">✓ ${esc(b)}</span>`).join('');

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: c.seo.title,
    description: c.seo.description,
    url: c.canonical,
    dateModified: DATE_MODIFIED,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: c.breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: b.url,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: c.demoVideo.title,
    description: c.demoVideo.subheadline,
    thumbnailUrl: `https://i.ytimg.com/vi/${c.demoVideo.id}/maxresdefault.jpg`,
    uploadDate: `${c.demoVideo.uploadDate}T00:00:00.000Z`,
    embedUrl: `https://www.youtube.com/embed/${c.demoVideo.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${c.demoVideo.id}`,
    publisher: { '@type': 'Organization', name: 'SMASH Invoices', url: SITE },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: c.productName,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Chrome',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'AUD',
      description: 'Free up to 5 invoices/month. Paid plans from $15/month.',
    },
    url: `${SITE}/chrome-extension`,
    downloadUrl: CHROME,
  },
];

const html = `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(c.seo.title)}</title>
  <meta name="description" content="${esc(c.seo.description)}">
  <link rel="canonical" href="${c.canonical}">
${hreflang}
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta property="og:site_name" content="SMASH Invoices">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(c.seo.ogTitle)}">
  <meta property="og:description" content="${esc(c.seo.ogDescription)}">
  <meta property="og:url" content="${c.canonical}">
  <meta property="og:image" content="${SITE}/hero_image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(c.seo.ogTitle)}">
  <meta name="twitter:description" content="${esc(c.seo.ogDescription)}">
  <meta property="article:modified_time" content="${DATE_MODIFIED}T00:00:00.000Z">
${schemas.map((s) => `  <script type="application/ld+json">${ld(s)}</script>`).join('\n')}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root{--brand:#0F172A;--accent:#DFFF00;--muted:rgba(255,255,255,.65)}
    *{box-sizing:border-box}body{margin:0;font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:var(--brand);color:#fff;line-height:1.6}
    h1,h2,h3{font-family:'Barlow Condensed',system-ui,sans-serif;text-transform:uppercase;letter-spacing:.02em;line-height:.92;font-weight:900}
    a{color:var(--accent)}.wrap{max-width:960px;margin:0 auto;padding:0 24px 64px}
    .nav{display:flex;justify-content:space-between;align-items:center;padding:16px 24px;border-bottom:1px solid rgba(255,255,255,.1)}
    .nav-logo{display:inline-block;line-height:0;font-weight:900;color:#fff;text-decoration:none;letter-spacing:.08em}
    .cta{display:inline-block;background:var(--accent);color:var(--brand);padding:14px 26px;border-radius:999px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;text-decoration:none}
    .cta-outline{display:inline-block;border:2px solid #fff;color:#fff;padding:12px 24px;border-radius:999px;font-weight:700;text-transform:uppercase;text-decoration:none;margin-left:10px}
    .hero{padding:48px 0 32px}.eyebrow{font-size:11px;text-transform:uppercase;letter-spacing:.2em;color:var(--accent);font-weight:800;margin:0 0 12px}
    .eyebrow.dark{color:rgba(15,23,42,.45)}.accent{color:var(--accent)}
    h1{font-size:clamp(36px,7vw,64px);margin:0 0 20px}.hero ul{list-style:none;padding:0;margin:0 0 20px}
    .hero li{margin:8px 0;font-size:15px}.badges{margin:20px 0;padding-top:16px;border-top:1px solid rgba(255,255,255,.12)}
    .badge{display:inline-block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:rgba(255,255,255,.45);margin:4px 14px 4px 0}
    .answer{background:rgba(255,255,255,.06);border-left:4px solid var(--accent);padding:18px 20px;margin:28px 0;border-radius:0 12px 12px 0;color:var(--muted)}
    section{padding:40px 0;border-top:1px solid rgba(255,255,255,.08)}
    .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-top:24px}
    .stat{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:20px;text-align:center}
    .stat-val{font-family:'Barlow Condensed',sans-serif;font-size:36px;font-weight:900;color:var(--accent);margin:0 0 6px;line-height:1}
    .stat-label{font-size:13px;color:var(--muted);margin:0}
    .grid-2{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-top:20px}
    .card{border-radius:20px;padding:24px}.card.dark{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1)}
    .card.light{background:#fff;color:var(--brand)}.card h3{font-size:22px;margin:0 0 12px}.card p{margin:0;font-size:15px;line-height:1.55}
    .card.light p{color:#475569}.plans{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-top:20px}
    .plan{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:22px}
    .plan.featured{border-color:var(--accent)}.price{font-family:'Barlow Condensed',sans-serif;font-size:32px;font-weight:900;color:var(--accent);margin:8px 0}
    .note{font-size:12px;color:rgba(255,255,255,.45);margin:0 0 10px}
    .video{position:relative;padding-bottom:56.25%;height:0;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,.12);margin:20px 0}
    .video iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0}
    details{border-bottom:1px solid rgba(255,255,255,.12);padding:14px 0}summary{cursor:pointer;font-weight:800}details p{color:var(--muted);margin:10px 0 0}
    footer{text-align:center;padding:32px;color:rgba(255,255,255,.4);font-size:14px;border-top:1px solid rgba(255,255,255,.1)}
  </style>
</head>
<body>
  <header class="nav">
    <a class="nav-logo" href="${SITE}/">${SMASH_LOGO_NAV_IMG}</a>
    <a class="cta" href="${CHROME}" rel="noopener noreferrer">Add to Chrome — Free</a>
  </header>
  <main class="wrap">
    <section class="hero">
      <p class="eyebrow">${esc(c.hero.eyebrow)}</p>
      <h1><span style="color:#fff">${esc(c.hero.h1Lead)}</span> <span class="accent">${esc(c.hero.h1Accent)}</span></h1>
      <ul>${valueBullets}</ul>
      <p style="font-style:italic;color:rgba(255,255,255,.45);font-size:14px">${esc(c.hero.valueBulletsTail)}</p>
      <p style="margin:24px 0">
        <a class="cta" href="${CHROME}" rel="noopener noreferrer">${esc(c.hero.primaryCta)}</a>
        <a class="cta-outline" href="#workflow-demo">${esc(c.hero.secondaryCta)}</a>
      </p>
      <div class="badges">${trustBadges}</div>
      <div class="answer"><strong>Short answer:</strong> ${esc(answer)}</div>
    </section>

    <section>
      <p class="eyebrow">${esc(c.statement.eyebrow)}</p>
      <h2 style="font-size:28px;color:#fff;margin:0 0 12px">${esc(c.statement.lead)} <span class="accent">${esc(c.statement.leadAccent)}</span></h2>
      <p style="color:var(--muted);max-width:720px">${esc(c.statement.body)}</p>
      <div class="stats">${stats}</div>
    </section>

    <section>
      <p class="eyebrow">${esc(c.dualMode.eyebrow)}</p>
      <h2 style="font-size:32px;margin:0 0 8px">${esc(c.dualMode.title)}</h2>
      <p style="color:var(--muted);max-width:640px">${esc(c.dualMode.intro)}</p>
      <div class="grid-2">${dualCols}</div>
    </section>

    <section>
      <p class="eyebrow">${esc(c.painResolution.eyebrow)}</p>
      <h2 style="font-size:32px;margin:0 0 16px">${esc(c.painResolution.title)}</h2>
      <div class="grid-2">${painItems}</div>
    </section>

    <section>
      <h2 style="font-size:28px;margin:0 0 12px">${esc(c.deRisking.title)}</h2>
      <p style="color:var(--muted);max-width:720px">${esc(c.deRisking.body)}</p>
    </section>

    <section>
      <p class="eyebrow">${esc(c.featureMatrix.eyebrow)}</p>
      <h2 style="font-size:32px;margin:0 0 16px">${esc(c.featureMatrix.title)}</h2>
      <div class="grid-2">${matrixItems}</div>
    </section>

    <section>
      <p class="eyebrow">${esc(c.pricing.eyebrow)}</p>
      <h2 style="font-size:32px;margin:0 0 8px">${esc(c.pricing.title)}</h2>
      <div class="plans">${plans}</div>
    </section>

    <section id="workflow-demo">
      <p class="eyebrow">Demo video</p>
      <h2 style="font-size:32px;margin:0 0 8px">${esc(c.demoVideo.headline)}</h2>
      <p style="color:var(--muted);max-width:640px">${esc(c.demoVideo.subheadline)}</p>
      <div class="video">
        <iframe src="https://www.youtube.com/embed/${c.demoVideo.id}" title="${esc(c.demoVideo.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
      </div>
      <p style="font-size:14px;color:rgba(255,255,255,.45)">${esc(c.demoVideo.caption)}</p>
    </section>

    <section>
      <h2 style="font-size:32px;margin:0 0 12px">FAQ</h2>
      ${faqHtml}
    </section>

    <section style="text-align:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:40px 28px">
      <h2 style="font-size:36px;margin:0 0 12px">${esc(c.footerCta.headline)}</h2>
      <p style="color:var(--muted)">${esc(c.footerCta.subheadline)}</p>
      <p style="margin:24px 0"><a class="cta" href="${CHROME}" rel="noopener noreferrer">${esc(c.footerCta.primaryCta)}</a></p>
      <p style="font-size:13px;color:rgba(255,255,255,.4)">${esc(c.footerCta.subtext)}</p>
    </section>
  </main>
  <footer>
    <a href="${SITE}/">Home</a> · <a href="${SITE}/chrome-extension">Chrome Extension</a> · <a href="${c.canonical}">Quotes &amp; RFQs</a>
    <p style="margin-top:12px"><small>Updated ${DATE_MODIFIED}</small></p>
  </footer>
</body>
</html>`;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'b2b-gmail-quoting');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'index.html');
fs.writeFileSync(outPath, html, 'utf-8');
console.log(`✓ ${outPath} (${html.length} bytes)`);
