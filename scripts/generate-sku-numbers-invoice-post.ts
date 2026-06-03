/**
 * Generates static HTML for the SKU matching invoice demo article.
 * Run: node --experimental-strip-types scripts/generate-sku-numbers-invoice-post.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

marked.setOptions({ gfm: true, breaks: false });

const SITE_URL = 'https://smashinvoices.com';
const APP_STORE_URL = 'https://apps.apple.com/au/app/smash-invoices/id6759475079';
const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';
const VIDEO_ID = 'M4zQQeICeyE';

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m] ?? m);
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
}

function renderJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function inlineStyles(): string {
  return `
    :root{--bg:#0A0A0A;--bg-soft:#111;--surface:rgba(255,255,255,0.04);--surface-strong:rgba(255,255,255,0.08);--border:rgba(255,255,255,0.1);--text:#F5F5F5;--text-muted:rgba(255,255,255,0.65);--text-dim:rgba(255,255,255,0.45);--accent:#D9F99D;--accent-ink:#0A0A0A;}
    *,*::before,*::after{box-sizing:border-box;}
    html{-webkit-text-size-adjust:100%;}
    body{margin:0;background:var(--bg);color:var(--text);font-family:'Plus Jakarta Sans',system-ui,-apple-system,'Segoe UI',sans-serif;font-size:17px;line-height:1.65;-webkit-font-smoothing:antialiased;}
    a{color:var(--accent);text-decoration:none;}a:hover{text-decoration:underline;}
    img{max-width:100%;height:auto;display:block;}
    .container{max-width:780px;margin:0 auto;padding:0 24px;}
    .nav{position:sticky;top:0;z-index:10;background:rgba(10,10,10,0.85);backdrop-filter:saturate(140%) blur(10px);-webkit-backdrop-filter:saturate(140%) blur(10px);border-bottom:1px solid var(--border);}
    .nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:14px 24px;}
    .nav-brand{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:800;letter-spacing:0.02em;color:#fff;font-size:22px;text-transform:uppercase;}
    .nav-links{display:none;gap:28px;}
    .nav-links a{color:var(--text-muted);font-size:14px;font-weight:500;}
    .nav-links a:hover{color:#fff;text-decoration:none;}
    .nav-cta{background:var(--accent);color:var(--accent-ink);padding:9px 16px;border-radius:999px;font-size:13px;font-weight:700;}
    .nav-cta:hover{filter:brightness(0.95);text-decoration:none;}
    @media(min-width:860px){.nav-links{display:flex;}}
    main{padding:48px 0 64px;}
    .back-link{display:inline-flex;align-items:center;gap:6px;color:var(--accent);font-size:14px;font-weight:600;margin-bottom:28px;}
    h1.post-title{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:900;font-size:clamp(34px,5.5vw,60px);line-height:1.02;letter-spacing:-0.015em;margin:0 0 20px;color:#fff;text-transform:uppercase;}
    .post-meta{display:flex;flex-wrap:wrap;gap:14px 22px;color:var(--text-muted);font-size:14px;font-weight:500;margin-bottom:28px;}
    .post-meta span{display:inline-flex;align-items:center;gap:6px;}
    .takeaways{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:24px 28px;margin:0 0 40px;}
    .takeaways h2{font-family:'Barlow Condensed',system-ui,sans-serif;font-size:20px;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 12px;color:var(--accent);}
    .takeaways ul{margin:0;padding-left:20px;}
    .takeaways li{margin:6px 0;color:var(--text);}
    .prose h2{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:800;font-size:clamp(24px,3.4vw,34px);line-height:1.12;letter-spacing:-0.01em;margin:48px 0 16px;color:#fff;text-transform:uppercase;}
    .prose h3{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:800;font-size:23px;margin:32px 0 12px;color:#fff;text-transform:uppercase;}
    .prose p{margin:0 0 18px;color:rgba(255,255,255,0.85);}
    .prose ul,.prose ol{margin:0 0 18px;padding-left:22px;}
    .prose li{margin:8px 0;color:rgba(255,255,255,0.85);}
    .prose strong{color:#fff;}
    .prose blockquote{margin:24px 0;padding:12px 20px;border-left:3px solid var(--accent);background:var(--surface);color:rgba(255,255,255,0.85);border-radius:0 10px 10px 0;}
    .prose table{width:100%;border-collapse:collapse;margin:24px 0;font-size:14px;}
    .prose th{background:var(--surface-strong);color:#fff;font-weight:700;padding:10px 14px;text-align:left;border:1px solid var(--border);}
    .prose td{padding:10px 14px;border:1px solid var(--border);color:rgba(255,255,255,0.8);vertical-align:top;}
    .prose tr:nth-child(even) td{background:var(--surface);}
    .video-embed{position:relative;padding-bottom:56.25%;height:0;margin:28px 0;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.1);box-shadow:0 0 60px rgba(217,249,157,0.06);}
    .video-embed iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:none;}
    .callout{margin:40px 0;padding:28px 32px;background:linear-gradient(135deg,rgba(217,249,157,0.12),rgba(217,249,157,0.04));border:1px solid rgba(217,249,157,0.3);border-radius:16px;text-align:center;}
    .callout p:first-child{font-size:20px;font-weight:800;color:#fff;margin:0 0 8px;letter-spacing:-0.01em;}
    .callout p{color:rgba(255,255,255,0.65);margin:0 0 20px;font-size:15px;}
    .callout a,.cta-btn{display:inline-block;background:var(--accent);color:var(--accent-ink);padding:12px 28px;border-radius:999px;font-weight:700;font-size:15px;text-decoration:none;}
    .faq{margin:56px 0 0;}
    .faq h2{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:800;font-size:clamp(26px,3.8vw,34px);margin:0 0 20px;color:#fff;text-transform:uppercase;}
    .faq details{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 20px;margin-bottom:10px;}
    .faq summary{cursor:pointer;font-weight:600;color:#fff;font-size:16px;list-style:none;}
    .faq summary::-webkit-details-marker{display:none;}
    .faq summary::after{content:'+';float:right;color:var(--accent);font-weight:700;}
    .faq details[open] summary::after{content:'-';}
    .faq details[open] summary{margin-bottom:8px;}
    .faq p{color:var(--text-muted);margin:8px 0 0;}
    .cta-card{margin:56px 0 0;background:linear-gradient(135deg,rgba(217,249,157,0.12),rgba(217,249,157,0.04));border:1px solid rgba(217,249,157,0.25);border-radius:20px;padding:32px;text-align:center;}
    .cta-card h3{font-family:'Barlow Condensed',system-ui,sans-serif;font-size:30px;font-weight:800;margin:0 0 10px;color:#fff;text-transform:uppercase;}
    .cta-card p{color:var(--text-muted);margin:0 0 20px;}
    .author-card{margin:48px 0 0;padding:20px;border-top:1px solid var(--border);color:var(--text-muted);font-size:15px;}
    .author-card strong{color:#fff;}
    footer{margin-top:80px;padding:40px 24px;border-top:1px solid var(--border);color:var(--text-dim);font-size:14px;text-align:center;}
    footer a{color:var(--text-muted);margin:0 10px;}
    footer a:hover{color:#fff;text-decoration:none;}
  `;
}

const slug = 'how-to-add-sku-numbers-to-invoice';
const publishedAt = '2026-06-03T00:00:00.000Z';
const title = 'How to Add SKU Numbers to an Invoice From a Customer Parts List';
const metaTitle = 'How to Add SKU Numbers to an Invoice From a Parts List | SMASH';
const metaDescription =
  'Learn how to turn a messy customer parts list or purchase order into an itemized, SKU-matched invoice draft from Gmail without rebuilding rows in QuickBooks or Xero.';
const keywords =
  'how to add sku numbers to invoice, add sku to invoice, convert purchase order to invoice, parts and labor invoice template, sku matching invoice, itemized invoice from parts list, gmail invoice extension, b2b quoting software';

const faqData = [
  {
    question: 'How do I add SKU numbers to an invoice?',
    answer:
      'Start with a catalog or price sheet that maps product descriptions to SKU numbers, prices, and units. Then match each customer-requested item to the correct catalog row before creating the invoice. SMASH speeds this up inside Gmail by parsing the customer email, matching descriptions to your uploaded catalog, and building the itemized draft for review.',
  },
  {
    question: 'Can I convert a purchase order to an invoice from Gmail?',
    answer:
      'Yes. If the purchase order or parts list is in a Gmail thread, SMASH can read the line items, match them to your catalog, and prepare a quote or invoice draft that you verify before sending or syncing to Xero or QuickBooks Online.',
  },
  {
    question: 'Do customers need to write exact SKUs?',
    answer:
      'No. The safer workflow is description matching with human verification. Customers often write shorthand, old part names, or messy descriptions. SMASH fuzzy-matches those descriptions to your catalog and flags uncertain rows for review.',
  },
  {
    question: 'What is a parts and labor invoice template?',
    answer:
      'A parts and labor invoice template separates inventory items, quantities, SKUs, unit prices, and labor charges into clear rows. This helps customers verify the order and helps your accounting system track what was sold.',
  },
  {
    question: 'Does SKU matching prevent pricing leakage?',
    answer:
      'It helps. When staff manually retype part names and prices, old rates and near-miss products can slip through. Matching against a controlled catalog keeps the draft closer to your current price sheet, while human review catches low-confidence lines.',
  },
];

const keyTakeaways = [
  'The fastest SKU invoice workflow starts with the customer email, PO, or parts list - not a blank invoice screen.',
  'Customers rarely type perfect SKUs. Description fuzzy-matching plus human verification is safer than SKU-only matching.',
  'The goal is not zero oversight. The goal is to turn manual data entry into a fast verification pass.',
  'SMASH is built for B2B distributors and AR desks using Gmail, Xero, and QuickBooks Online.',
  'A good parts-and-labor invoice keeps SKU, description, quantity, unit price, labor, and totals visible in separate rows.',
];

const content = `If a customer emails a parts list like this:

> "Can you quote 20 x 15mm copper elbows, 5 brass ball valves, 100m blue PEX pipe, and the usual mixed fittings?"

...you have two jobs.

First, understand what they meant. Second, turn that messy request into an itemized invoice or quote with the right **SKU numbers, quantities, and current prices**.

That is where most B2B invoicing time disappears. Not in the final invoice PDF. In the translation step between customer language and your catalog.

This guide shows how to add SKU numbers to an invoice from a customer parts list without rebuilding every line by hand.

## Watch: SKU Matching From Gmail to Invoice Draft

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/${VIDEO_ID}"
    title="How to add SKU numbers to an invoice from a customer parts list - SMASH"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

In the video, SMASH takes a customer item list inside Gmail, matches the descriptions against a catalog, flags uncertain rows, and turns the request into a structured draft. It is the same workflow B2B distributors use when a purchase order, RFQ, or "can you price this up?" email lands in the inbox.

## Why SKU Invoicing Breaks Down

Most invoicing tools assume the data is already clean.

They give you fields like:

- SKU
- Description
- Quantity
- Unit price
- Tax
- Total

That is fine once you know the exact product. It does not help when the customer writes the request in their own language.

Real inbox requests look more like:

- "15 mil elbows"
- "blue pipe, the 100 metre roll"
- "same valves as last time"
- "the fittings bundle"
- "PO attached - convert to invoice"

Your team then has to search the catalog, guess the product, check the price, copy the row into Xero or QuickBooks, and hope nothing changed since the last order.

That is inventory pricing leakage: not dramatic, just a few wrong rows, old prices, or forgotten add-ons across hundreds of emails.

## The Manual Way to Add SKU Numbers to an Invoice

The old workflow usually looks like this:

| Step | Manual action | Risk |
| --- | --- | --- |
| 1. Read the request | Scan the email, PO, or customer item list | Miss a line or misunderstand shorthand |
| 2. Search the catalog | Look up each item in a spreadsheet or inventory tool | Pick the wrong near-match |
| 3. Copy SKU and price | Rebuild rows in QuickBooks, Xero, or a template | Structural typos and stale pricing |
| 4. Add labor or freight | Manually add handling, labor, delivery, or call-out rows | Forgotten margin |
| 5. Send for approval | Attach or sync the final document | More tab-switching |

That is fine for one invoice. It is painful when your AR or operations desk is doing it all morning.

## The SMASH Way: Description Match First, SKU Second

The better workflow is not "force every customer to type a perfect SKU."

The better workflow is:

1. Let the customer write naturally.
2. Parse the email or purchase order.
3. Match descriptions to your catalog.
4. Pull the SKU, price, and unit from your controlled price sheet.
5. Flag uncertain lines for human verification.
6. Push the verified draft into your accounting workflow.

That is what SMASH is built for inside Gmail.

The sidebar reads the open customer thread, compares the item descriptions against your uploaded price sheet, and builds the draft while your team stays in the inbox. If a line is ambiguous, it does not pretend to be magic. It flags the row so a person can check it.

<div class="callout">
  <p>Messy parts list in. SKU-matched draft out.</p>
  <p>Install SMASH for Gmail and turn item lookup into a verification pass.</p>
  <a href="${CHROME_STORE_URL}" rel="nofollow">Add SMASH to Chrome - Free</a>
</div>

## Example: Parts and Labor Invoice Rows

A clean parts-and-labor invoice should separate the customer's request into rows your customer and accountant can both understand:

| Invoice row | SKU | Description | Quantity | Type |
| --- | --- | --- | --- | --- |
| 1 | CU-ELB-15-90 | 90 degree copper elbow, 15mm | 20 | Part |
| 2 | BV-BRASS-1IN | Brass ball valve, 1 inch | 5 | Part |
| 3 | PEXB-BLUE-100M | PEX-B pipe roll, blue | 1 | Part |
| 4 | LAB-PICK-PACK | Pick, pack, and order handling | 1 | Labor/service |

That structure matters because parts and labor behave differently:

- Parts need SKU, inventory, and pricing control.
- Labor needs time, rate, or service-package control.
- Freight and handling often need their own margin.
- Ambiguous customer language needs review before sending.

SMASH does not remove your judgment. It removes the repetitive lookup and row-building.

## Convert Purchase Order to Invoice Without ERP Complexity

Large ERP systems can do SKU matching, but they are often too heavy for independent distributors, trade suppliers, and office teams that mostly live in Gmail.

If your customer sends a PO by email, the bottleneck is usually not accounting. It is extraction:

- Which lines are actually products?
- Which products map to live SKUs?
- Are the quantities units, boxes, metres, or rolls?
- Is labor, delivery, or handling missing?
- Which rows are low confidence?

SMASH handles that first-pass structure in the Gmail sidebar, then your team verifies the draft before pushing it into Xero or QuickBooks Online.

That is the difference between automation theatre and a usable AR workflow: the software does the grunt work, and the human keeps control.

## When You Should Not Auto-Match SKUs Blindly

SKU matching can go wrong when:

- Customer terminology is outdated.
- Two products have similar names.
- A supplier changed packaging units.
- Pricing differs by customer, region, or contract.
- The line says "same as last time" but the last order had substitutions.

That is why the SMASH workflow is a verification pass, not a black box. Low-confidence rows should stand out before the quote or invoice leaves your business.

## Related Reading

- [B2B Gmail quoting for AR teams](/b2b-gmail-quoting) - RFQ to verified draft in Gmail
- [SMASH Chrome extension](/chrome-extension) - the full Gmail sidebar workflow
- [Gmail invoice extension overview](/gmail-invoice) - invoice from Gmail without tab switching
- [Gmail + Xero quote builder](/integrations/gmail-xero-quote-builder) - push quote drafts to Xero
- [Gmail + QuickBooks estimates](/integrations/gmail-quickbooks-estimate-generator) - build estimates from Gmail
`;

const url = `${SITE_URL}/blog/${slug}`;
const publishedIso = new Date(publishedAt).toISOString();

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: metaDescription,
    image: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
    datePublished: publishedIso,
    dateModified: publishedIso,
    author: { '@type': 'Person', name: 'Dan Neale' },
    publisher: {
      '@type': 'Organization',
      name: 'SMASH Invoices',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords,
    inLanguage: 'en-AU',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'How to add SKU numbers to an invoice from a customer parts list',
    description:
      'Desktop Gmail walkthrough: parse a customer parts list, match descriptions to SKU rows, verify low-confidence items, and create a structured quote or invoice draft with SMASH.',
    thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
    uploadDate: '2026-06-03T00:00:00+10:00',
    contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`,
    embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
    publisher: { '@type': 'Organization', name: 'SMASH Invoices', url: SITE_URL },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SMASH Quotes & RFQs for Gmail',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Chrome',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'AUD',
      description: 'Free up to 5 invoices/month. Paid plans from $15/month.',
    },
    url: `${SITE_URL}/b2b-gmail-quoting`,
    downloadUrl: CHROME_STORE_URL,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  },
];

const contentHtml = (marked.parse(content) as string).replace(/<h1>/g, '<h2>').replace(/<\/h1>/g, '</h2>');
const takeawaysHtml = `<aside class="takeaways"><h2>Key Takeaways</h2><ul>${keyTakeaways.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul></aside>`;
const faqHtml = `<section class="faq"><h2>Frequently Asked Questions</h2>${faqData.map((f) => `<details><summary>${escapeHtml(f.question)}</summary><p>${escapeHtml(f.answer)}</p></details>`).join('')}</section>`;

const html = `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(metaTitle)}</title>
  <meta name="description" content="${escapeHtml(metaDescription)}">
  <meta name="keywords" content="${escapeHtml(keywords)}">
  <meta name="author" content="Dan Neale">
  <link rel="canonical" href="${url}">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="alternate" hreflang="x-default" href="${url}">
  <link rel="alternate" hreflang="en-AU" href="${url}">
  <link rel="alternate" hreflang="en-NZ" href="${url}">
  <link rel="alternate" hreflang="en-GB" href="${url}">
  <link rel="alternate" hreflang="en-US" href="${url}">
  <link rel="alternate" hreflang="en-CA" href="${url}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta property="og:site_name" content="SMASH Invoices"><meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(metaTitle)}">
  <meta property="og:description" content="${escapeHtml(metaDescription)}">
  <meta property="og:url" content="${url}"><meta property="og:image" content="https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg">
  <meta property="og:locale" content="en_AU"><meta property="article:published_time" content="${publishedIso}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(metaTitle)}">
  <meta name="twitter:description" content="${escapeHtml(metaDescription)}">
  <meta name="twitter:image" content="https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>${inlineStyles()}</style>
${schemas.map((s) => `  <script type="application/ld+json">${renderJsonLd(s)}</script>`).join('\n')}
</head>
<body>
  <nav class="nav"><div class="nav-inner">
    <a href="/" class="nav-brand">SMASH<span style="color:#D9F99D">.</span></a>
    <div class="nav-links">
      <a href="/features">Features</a><a href="/pricing">Pricing</a>
      <a href="/chrome-extension">Chrome Extension</a><a href="/blog">Blog</a>
    </div>
    <a href="${CHROME_STORE_URL}" class="nav-cta" rel="nofollow">Add to Chrome - Free</a>
  </div></nav>

  <main><article class="container">
    <a href="/blog" class="back-link">← All Articles</a>
    <header>
      <h1 class="post-title">${escapeHtml(title)}</h1>
      <div class="post-meta">
        <span>By Dan Neale</span>
        <span><time datetime="${publishedIso}">${formatDate(publishedAt)}</time></span>
        <span>8 min read</span>
      </div>
    </header>

    ${takeawaysHtml}
    <div class="prose">${contentHtml}</div>
    ${faqHtml}

    <aside class="cta-card">
      <h3>Turn messy parts lists into SKU-matched drafts</h3>
      <p>SMASH lives in Gmail, matches customer descriptions to your catalog, and flags uncertain rows before you send.</p>
      <a href="${CHROME_STORE_URL}" class="cta-btn" rel="nofollow">Add SMASH to Chrome - Free</a>
    </aside>

    <div class="author-card">
      <strong>About Dan Neale</strong><br>Dan is the founder of SMASH Invoices. He built SMASH to kill the data-entry grind between customer emails, quotes, invoices, and accounting software.
    </div>
  </article></main>

  <footer>
    <div>
      <a href="/">Home</a><a href="/blog">Blog</a><a href="/chrome-extension">Chrome Extension</a>
      <a href="/b2b-gmail-quoting">B2B Gmail Quoting</a><a href="/pricing">Pricing</a><a href="/features">Features</a>
      <a href="/gmail-invoice">Gmail Invoice</a>
      <a href="/integrations/gmail-xero-quote-builder">Xero</a><a href="/integrations/gmail-quickbooks-estimate-generator">QuickBooks</a>
      <a href="/privacy">Privacy</a><a href="/terms">Terms</a>
    </div>
    <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
      <a href="${APP_STORE_URL}" rel="nofollow" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;border-radius:999px;background:#ffffff;color:#0a0a0a;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;font-size:13px;text-decoration:none;">iOS App</a>
      <a href="${CHROME_STORE_URL}" rel="nofollow" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;border-radius:999px;background:rgba(255,255,255,0.1);color:#ffffff;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;font-size:13px;text-decoration:none;border:1px solid rgba(255,255,255,0.15);">Chrome Extension</a>
    </div>
    <div style="margin-top:14px;">Live in <a href="/">Australia</a>, <a href="/nz">New Zealand</a>, <a href="/uk">UK</a>, <a href="/us">US</a> and <a href="/ca">Canada</a></div>
    <div style="margin-top:14px;">© ${new Date().getFullYear()} SMASH Invoices · smashinvoices.com</div>
  </footer>
</body></html>`;

const postDir = path.join(__dirname, '..', 'public', 'blog', slug);
fs.mkdirSync(postDir, { recursive: true });
fs.writeFileSync(path.join(postDir, 'index.html'), html, 'utf-8');
console.log(`✓ Generated: /blog/${slug}/index.html`);

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
const loc = `${SITE_URL}/blog/${slug}`;
if (!sitemap.includes(loc)) {
  const today = new Date().toISOString().split('T')[0];
  const entry = `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
  sitemap = sitemap.replace('</urlset>', `${entry}\n</urlset>`);
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
  console.log('✓ Added to sitemap.xml');
} else {
  console.log('ℹ Already in sitemap.xml');
}
