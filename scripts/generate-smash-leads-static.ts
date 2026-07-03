/**
 * Pre-render Smash Leads CRM pages as static HTML in public/.
 * Run: node --experimental-strip-types scripts/generate-smash-leads-static.ts
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { smashLeadsPages, type SmashLeadsPageConfig } from '../src/data/smash-leads-pages.ts';
import { smashLeadsChromeUrl } from '../src/data/smash-leads-constants.ts';

const SITE = 'https://smashinvoices.com';

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (m) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m] ?? m
  );
}

function renderJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function sectionHtml(c: SmashLeadsPageConfig): string {
  const parts: string[] = [];

  if (c.featureBlocks) {
    parts.push(`<h2>${escapeHtml(c.featureBlocks.sectionTitle)}</h2>`);
    for (const b of c.featureBlocks.blocks) {
      parts.push(`<h3>${escapeHtml(b.title)}</h3><p>${escapeHtml(b.body)}</p>`);
    }
  }
  if (c.pricingComparison) {
    const p = c.pricingComparison;
    parts.push(
      `<h2>${escapeHtml(p.title)}</h2><p>${escapeHtml(p.body)}</p>`,
      `<p><strong>${escapeHtml(p.expensiveLabel)}</strong> ${escapeHtml(p.expensivePoints)}</p>`,
      `<p><strong>${escapeHtml(p.smashLabel)}</strong> ${escapeHtml(p.smashPoints)}</p>`
    );
  }
  if (c.comparisonMatrix) {
    parts.push(`<h2>${escapeHtml(c.comparisonMatrix.title)}</h2><table><tbody>`);
    for (const row of c.comparisonMatrix.rows) {
      parts.push(
        `<tr><td>${escapeHtml(row.feature)}</td><td>${escapeHtml(row.legacy)}</td><td>${escapeHtml(row.smash)}</td></tr>`
      );
    }
    parts.push('</tbody></table>');
  }
  if (c.narrativeBlock) {
    parts.push(`<h2>${escapeHtml(c.narrativeBlock.title)}</h2><p>${escapeHtml(c.narrativeBlock.body)}</p>`);
  }
  if (c.bulletHighlights) {
    const b = c.bulletHighlights;
    parts.push(`<h2>${escapeHtml(b.title)}</h2><p>${escapeHtml(b.intro)}</p><ul>`);
    for (const item of b.bullets) parts.push(`<li>${escapeHtml(item)}</li>`);
    parts.push('</ul>');
  }
  if (c.useCases) {
    parts.push(`<h2>${escapeHtml(c.useCases.title)}</h2>`);
    for (const u of c.useCases.cases) {
      parts.push(`<h3>${escapeHtml(u.title)}</h3><p>${escapeHtml(u.body)}</p>`);
    }
  }
  return parts.join('\n');
}

function buildPage(c: SmashLeadsPageConfig): string {
  const canonical = `${SITE}${c.path}`;
  const cta = smashLeadsChromeUrl(c.hero.ctaMedium);
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const faqHtml = c.faqs
    .map(
      (f) =>
        `<details><summary>${escapeHtml(f.q)}</summary><p>${escapeHtml(f.a)}</p></details>`
    )
    .join('');
  const related = c.relatedPages
    .map((l) => `<li><a href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a></li>`)
    .join('');

  const h1 =
    escapeHtml(c.hero.h1Line1) +
    (c.hero.h1Accent ? ` <span style="color:#D9F99D">${escapeHtml(c.hero.h1Accent)}</span>` : '');

  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(c.seo.title)}</title>
  <meta name="description" content="${escapeHtml(c.seo.description)}" />
  <meta name="keywords" content="${escapeHtml(c.seo.keywords)}" />
  <link rel="canonical" href="${canonical}" />
  <style>
    body{margin:0;background:#0A0A0A;color:#f5f5f5;font-family:system-ui,sans-serif;line-height:1.6;padding:0 24px 48px;}
    a{color:#D9F99D;} h1{font-size:2.2rem;line-height:1.1;} table{width:100%;border-collapse:collapse;margin:1rem 0;}
    td,th{border:1px solid rgba(255,255,255,0.15);padding:8px;text-align:left;}
  </style>
  <script type="application/ld+json">${renderJsonLd(faqLd)}</script>
</head>
<body>
  <header style="padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;">
    <a href="/" style="color:#fff;font-weight:800;text-transform:uppercase;">SMASH</a>
    <a href="${cta}" rel="nofollow" style="background:#D9F99D;color:#0A0A0A;padding:10px 18px;border-radius:999px;font-weight:700;">${escapeHtml(c.hero.ctaLabel)}</a>
  </header>
  <main style="max-width:800px;margin:0 auto;padding-top:32px;">
    <h1>${h1}</h1>
    <p>${escapeHtml(c.hero.subcopy)}</p>
    <p><a href="${cta}" rel="nofollow">${escapeHtml(c.hero.ctaLabel)}</a> — ${escapeHtml(c.hero.ctaMicrocopy)}</p>
    <img src="/smash-leads/placeholders/gmail-crm-pipeline-board.svg" alt="Smash Leads AI CRM kanban board overlay inside Gmail inbox tab" width="1200" height="720" style="max-width:100%;height:auto;margin:24px 0;border-radius:12px;" />
    <p style="font-size:12px;color:rgba(255,255,255,0.4);">Placeholder — replace with final gmail-crm-pipeline-board.png or .gif</p>
    ${sectionHtml(c)}
    <h2>FAQ</h2>${faqHtml}
    <h2>${escapeHtml(c.finalCta.headline)}</h2>
    <p>${escapeHtml(c.finalCta.subcopy)}</p>
    <p><a href="${smashLeadsChromeUrl(c.finalCta.ctaMedium)}" rel="nofollow">${escapeHtml(c.finalCta.ctaLabel)}</a></p>
    <h3>Related</h3><ul>${related}</ul>
  </main>
</body>
</html>`;
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
for (const config of Object.values(smashLeadsPages)) {
  const relDir = config.path.replace(/^\//, '');
  const outDir = path.join(root, 'public', relDir);
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, 'index.html');
  fs.writeFileSync(outFile, buildPage(config), 'utf-8');
  console.log(`✓ ${outFile}`);
}
