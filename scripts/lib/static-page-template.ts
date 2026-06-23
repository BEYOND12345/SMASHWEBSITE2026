/**
 * Minimal static HTML shell for crawler-grade Level 1 pages.
 */
import fs from 'node:fs';
import path from 'node:path';
import { HREFLANG_LINKS, DATE_MODIFIED, type MainPageSeo } from '../../src/data/main-pages-seo.ts';

const SITE = 'https://smashinvoices.com';
const CHROME_STORE =
  'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';
const APP_STORE = 'https://apps.apple.com/au/app/smash-invoices/id6759475079';

export function esc(t: string): string {
  return t.replace(/[&<>"']/g, (m) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m] ?? m
  );
}

export function ld(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export function buildFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

function hreflangTags(): string {
  return HREFLANG_LINKS.map(
    (l) => `  <link rel="alternate" hreflang="${l.hreflang}" href="${esc(l.href)}">`
  ).join('\n');
}

function ctaHtml(mode: MainPageSeo['cta']): string {
  if (mode === 'ios') {
    return `<a class="cta" href="${APP_STORE}">Start Free</a>`;
  }
  if (mode === 'chrome') {
    return `<a class="cta" href="${CHROME_STORE}">Add to Chrome — Free</a>`;
  }
  return `<a class="cta" href="${APP_STORE}">Start Free</a><a class="cta" href="${CHROME_STORE}">Add to Chrome — Free</a>`;
}

export function buildStaticPage(page: MainPageSeo, extraBody = ''): string {
  const canonical = `${SITE}${page.path}`;
  const faqLd = page.faqs?.length ? buildFaqSchema(page.faqs) : null;
  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: canonical,
    dateModified: DATE_MODIFIED,
  };

  const faqHtml = (page.faqs ?? [])
    .map(
      (f) => `<details style="border-bottom:1px solid #e2e8f0;padding:14px 0;">
<summary style="cursor:pointer;font-weight:700;">${esc(f.question)}</summary>
<p style="color:#475569;margin:10px 0 0;">${esc(f.answer)}</p></details>`
    )
    .join('');

  const stepsHtml = (page.steps ?? [])
    .map(
      (s, i) => `<li style="margin-bottom:16px;"><strong>Step ${i + 1}: ${esc(s.title)}</strong><br><span style="color:#475569;">${esc(s.body)}</span></li>`
    )
    .join('');

  const linksHtml = (page.relatedLinks ?? [])
    .map((l) => `<a href="${SITE}${l.href}" style="margin-right:12px;">${esc(l.label)}</a>`)
    .join('');

  const bodyExtras = [
    stepsHtml ? `<section><h2>How it works</h2><ol style="padding-left:20px;">${stepsHtml}</ol></section>` : '',
    linksHtml ? `<section><h2>Related</h2><p>${linksHtml}</p></section>` : '',
    extraBody,
  ].join('');

  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${canonical}">
${hreflangTags()}
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta property="og:site_name" content="SMASH Invoices">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${SITE}/hero_image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(page.title)}">
  <meta name="twitter:description" content="${esc(page.description)}">
  <meta property="article:modified_time" content="${DATE_MODIFIED}T00:00:00.000Z">
  <script type="application/ld+json">${ld(webPageLd)}</script>
  ${faqLd ? `<script type="application/ld+json">${ld(faqLd)}</script>` : ''}
  <style>
    body{font-family:system-ui,sans-serif;max-width:720px;margin:0 auto;padding:24px;line-height:1.6;color:#0f172a}
    h1{font-size:2rem;line-height:1.15;margin:0 0 8px}
    .brand{color:#64748b;font-weight:600;margin:0 0 20px}
    .answer{background:#f8fafc;border-left:4px solid #DFFF00;padding:16px;margin:24px 0}
    nav a{margin-right:12px}
    .cta{display:inline-block;background:#DFFF00;color:#0f172a;padding:12px 20px;border-radius:999px;font-weight:700;text-decoration:none;margin:8px 8px 0 0}
  </style>
</head>
<body>
  <nav><a href="${SITE}/">Home</a>${page.path !== '/' ? ` <a href="${canonical}">This page</a>` : ''}</nav>
  <h1>${esc(page.h1)}</h1>
  ${page.brandLine ? `<p class="brand">${esc(page.brandLine)}</p>` : ''}
  <div class="answer"><strong>Short answer:</strong> ${esc(page.answerBlock)}</div>
  ${bodyExtras}
  <p>${ctaHtml(page.cta)}</p>
  ${faqHtml ? `<section><h2>FAQ</h2>${faqHtml}</section>` : ''}
  <p><small>Updated ${DATE_MODIFIED}</small></p>
</body>
</html>`;
}

export function writeStaticPage(outPath: string, html: string): void {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
}
