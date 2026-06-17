/**
 * Generate static HTML for Level 1 main pages (crawler-grade).
 * Run: npm run generate:main-pages-static
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  mainPages,
  countryPageTitles,
  countryAnswerBlock,
  SITE,
} from '../src/data/main-pages-seo.ts';
import { countries } from '../src/data/country-data.ts';
import { buildFaqSchema, buildStaticPage, writeStaticPage } from './lib/static-page-template.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');

const routes: { key: keyof typeof mainPages; dir: string }[] = [
  // /chrome-extension — full React landing (netlify force → index.html; not this stub)
  // /b2b-gmail-quoting — full React landing (netlify force → index.html; not this stub)
  { key: 'pricing', dir: 'pricing' },
];

for (const { key, dir } of routes) {
  const page = mainPages[key];
  const out = path.join(publicDir, dir, 'index.html');
  writeStaticPage(out, buildStaticPage(page));
  console.log(`✓ /${dir}`);
}

for (const c of countries.filter((x) => x.slug !== 'au')) {
  const title = countryPageTitles[c.slug as keyof typeof countryPageTitles];
  const taxWord = c.taxLabel.split('(')[0].trim();
  const page = {
    path: c.path,
    title,
    description: `Send a priced quote or invoice in under 60 seconds in ${c.name}. Voice on iPhone or Gmail in Chrome — ${taxWord}, local currency, Xero and QuickBooks. Free to start.`,
    h1: `Send the quote before they call someone else.`,
    brandLine: 'You do the work. SMASH does the rest.',
    answerBlock: countryAnswerBlock(c.demonym.toLowerCase() + ' contractors and service businesses', taxWord),
    cta: 'both' as const,
    faqs: c.faqs.map((f) => ({ question: f.q, answer: f.a })),
  };
  const out = path.join(publicDir, c.slug, 'index.html');
  writeStaticPage(out, buildStaticPage(page));
  console.log(`✓ ${c.path}`);
}

const HOMEPAGE_FAQ_MARKER = 'Structured data: FAQPage (homepage';
const faqBlockPattern = /    <!-- Structured data: FAQPage \(homepage[\s\S]*?<\/script>\n\n/g;
const indexPath = path.join(root, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
const homeFaqs = mainPages.home.faqs ?? [];
const faqJson = JSON.stringify(buildFaqSchema(homeFaqs), null, 2)
  .split('\n')
  .map((line, i) => (i === 0 ? line : `    ${line}`))
  .join('\n');
const faqBlock = `    <!-- ${HOMEPAGE_FAQ_MARKER} — synced from main-pages-seo.ts) -->\n    <script type="application/ld+json">\n    ${faqJson}\n    </script>\n\n`;
indexHtml = indexHtml.replace(faqBlockPattern, '');
indexHtml = indexHtml.replace(
  '    <link rel="preconnect" href="https://fonts.googleapis.com">',
  `${faqBlock}    <link rel="preconnect" href="https://fonts.googleapis.com">`
);
fs.writeFileSync(indexPath, indexHtml);
console.log(`✓ / (homepage FAQPage in index.html — ${homeFaqs.length} questions)`);

console.log(`\n✅ Main page static HTML written under ${publicDir}`);
console.log(`   Pillars /voice-invoicing and /gmail-invoice: run generate:voice-static + generate:gmail-static`);
