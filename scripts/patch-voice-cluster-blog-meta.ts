/**
 * Refresh meta titles/descriptions on high-value voice/speed blog posts.
 * Problem-solution register — no tradie pigeonholing in SERP snippets.
 * Safe to re-run. Updates committed static HTML in public/blog/.
 *
 * Run: npm run patch:voice-blog-meta
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MODIFIED = '2026-06-12T00:00:00.000Z';

type Patch = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
};

export const VOICE_CLUSTER_PATCHES: Patch[] = [
  {
    slug: 'the-60-second-invoice-voice-to-invoice',
    title: 'Voice to Invoice in 60 Seconds — Talk, Verify, Send | SMASH',
    description:
      'Finished the job? Describe it out loud. SMASH builds a priced invoice from your catalog in under a minute — nothing guessed. Watch the full workflow.',
    keywords:
      'voice to invoice, send invoice after job, fastest way to invoice, invoice without typing, on the job invoice',
  },
  {
    slug: 'fastest-way-to-send-invoice-2026',
    title: 'Fastest Way to Send an Invoice in 2026 — 60 Second Demo | SMASH',
    description:
      'Watch SMASH turn a job description into a priced, send-ready invoice in 60 seconds. Voice or Gmail — your catalog, your prices. Start free.',
    keywords:
      'fastest way to send an invoice, invoice in 60 seconds, send invoice after job, voice to invoice, quick invoice',
  },
  {
    slug: 'stop-admin-sundays-voice-invoicing',
    title: 'Stop Sunday-Night Invoicing — Send Before You Leave the Job | SMASH',
    description:
      'Admin after hours costs you hours every week. Send the invoice from the van in 30 seconds — talk, verify against your catalog, send.',
    keywords:
      'send invoice after job, sunday night invoicing, voice to invoice, invoice from phone, fastest invoice',
  },
  {
    slug: 'invoice-without-typing',
    title: 'How to Send an Invoice Without Typing | SMASH',
    description:
      'No keyboard, no spreadsheet. Describe the job out loud or scan a Gmail request — SMASH prices it from your catalog. Verify and send in under a minute.',
    keywords:
      'invoice without typing, voice to invoice, send invoice fast, invoice from phone',
  },
  {
    slug: 'is-voice-invoicing-accurate',
    title: 'Is Voice Invoicing Accurate? Catalog Matching Explained | SMASH',
    description:
      'Voice invoicing only works if prices come from your data. How SMASH matches your catalog, flags unknowns, and lets you verify before send.',
    keywords: 'is voice invoicing accurate, voice to invoice, catalog pricing invoice',
  },
  {
    slug: 'how-long-to-send-invoice-after-job-australia',
    title: 'How Long Should You Wait to Send an Invoice After a Job? | SMASH',
    description:
      'The best time to invoice is before you leave the site. Why waiting until tonight loses detail — and how to send in under 60 seconds.',
    keywords:
      'how long to send invoice after job, send invoice immediately, fastest way to invoice australia',
  },
  {
    slug: 'word-vs-excel-vs-app-for-invoices',
    title: 'Word vs Excel vs App for Invoices — Or Talk for 30 Seconds | SMASH',
    description:
      'Templates take 15+ minutes. Apps still mean typing. Compare Word, Excel, and invoicing apps — plus the fastest path: describe the job out loud.',
    keywords:
      'word vs excel invoice, invoicing app, fastest way to send invoice, invoice without typing',
  },
  {
    slug: 'beyond-chatgpt-dedicated-voice-invoicing',
    title: 'Why a Dedicated Invoicing Tool Beats ChatGPT for Sending Invoices | SMASH',
    description:
      'ChatGPT can draft text — it cannot price from your catalog, send a compliant invoice, or take payment. What you need after the job is done.',
    keywords: 'chatgpt invoice, voice to invoice, dedicated invoicing app, send invoice fast',
  },
  {
    slug: 'gmail-email-to-invoice-20-seconds',
    title: 'Turn a Gmail Email Into a Sent Invoice in 20 Seconds | SMASH',
    description:
      'Work request in your inbox? SMASH reads the open thread in Gmail, matches your catalog, and builds a priced quote — verify and send without leaving email.',
    keywords:
      'email to invoice, gmail invoice, send invoice from gmail, invoice from email',
  },
  {
    slug: 'gmail-to-xero-invoice-no-typing',
    title: 'Gmail to Xero Invoice Without Typing | SMASH',
    description:
      'RFQ lands in Gmail. SMASH extracts line items, prices from your catalog, and pushes to Xero when you are ready — no re-keying.',
    keywords: 'gmail xero invoice, email to invoice, no typing invoice, xero gmail',
  },
];

function patchFile(filePath: string, p: Patch): boolean {
  if (!fs.existsSync(filePath)) {
    console.warn(`  skip (missing): ${p.slug}`);
    return false;
  }
  let html = fs.readFileSync(filePath, 'utf-8');
  const replaceMeta = (name: string, content: string) => {
    const re = new RegExp(
      `<meta\\s+(?:name|property)="${name}"\\s+content="[^"]*"\\s*/?>`,
      'i'
    );
    const tag = name.startsWith('og:') || name.startsWith('article:')
      ? `<meta property="${name}" content="${content.replace(/"/g, '&quot;')}">`
      : `<meta name="${name}" content="${content.replace(/"/g, '&quot;')}">`;
    if (re.test(html)) html = html.replace(re, tag);
  };

  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${p.title}</title>`);
  replaceMeta('description', p.description);
  replaceMeta('keywords', p.keywords);
  replaceMeta('og:title', `${p.title}`);
  replaceMeta('og:description', p.description);
  replaceMeta('twitter:title', p.title);
  replaceMeta('twitter:description', p.description);

  if (html.includes('article:modified_time')) {
    replaceMeta('article:modified_time', MODIFIED);
  } else if (html.includes('article:published_time')) {
    html = html.replace(
      /(<meta property="article:published_time"[^>]+>)/i,
      `$1\n  <meta property="article:modified_time" content="${MODIFIED}">`
    );
  }

  // Ensure pillar link in footer nav if present
  if (html.includes('href="/voice-invoicing"') && html.includes('>Voice Invoicing<')) {
    html = html.replace(/>Voice Invoicing</g, '>Send invoice fast<');
  }

  fs.writeFileSync(filePath, html, 'utf-8');
  return true;
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) ===
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'patch-voice-cluster-blog-meta.ts');

if (isMain) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  let n = 0;
  for (const p of VOICE_CLUSTER_PATCHES) {
    const filePath = path.join(root, 'public', 'blog', p.slug, 'index.html');
    if (patchFile(filePath, p)) {
      console.log(`✓ ${p.slug}`);
      n++;
    }
  }
  console.log(`Patched ${n}/${VOICE_CLUSTER_PATCHES.length} blog meta files.`);
}
