/**
 * Generates static HTML for the QuickBooks Gmail invoice shortcut demo article.
 * Run: node --experimental-strip-types scripts/generate-quickbooks-gmail-shortcut-post.ts
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
const VIDEO_ID = '1DYbkEkx2ko';

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
    .container{max-width:760px;margin:0 auto;padding:0 24px;}
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
    h1.post-title{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:900;font-size:clamp(34px,5.5vw,58px);line-height:1.02;letter-spacing:-0.015em;margin:0 0 20px;color:#fff;}
    .post-meta{display:flex;flex-wrap:wrap;gap:14px 22px;color:var(--text-muted);font-size:14px;font-weight:500;margin-bottom:28px;}
    .post-meta span{display:inline-flex;align-items:center;gap:6px;}
    .takeaways{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:24px 28px;margin:0 0 40px;}
    .takeaways h2{font-family:'Barlow Condensed',system-ui,sans-serif;font-size:20px;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 12px;color:var(--accent);}
    .takeaways ul{margin:0;padding-left:20px;}
    .takeaways li{margin:6px 0;color:var(--text);}
    .prose h2{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:800;font-size:clamp(24px,3.4vw,32px);line-height:1.15;letter-spacing:-0.01em;margin:48px 0 16px;color:#fff;}
    .prose h3{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:700;font-size:21px;margin:32px 0 12px;color:#fff;}
    .prose p{margin:0 0 18px;color:rgba(255,255,255,0.85);}
    .prose ul,.prose ol{margin:0 0 18px;padding-left:22px;}
    .prose li{margin:8px 0;color:rgba(255,255,255,0.85);}
    .prose strong{color:#fff;}
    .prose blockquote{margin:24px 0;padding:12px 20px;border-left:3px solid var(--accent);background:var(--surface);color:rgba(255,255,255,0.85);border-radius:0 10px 10px 0;}
    .prose table{width:100%;border-collapse:collapse;margin:24px 0;font-size:14px;}
    .prose th{background:var(--surface-strong);color:#fff;font-weight:700;padding:10px 14px;text-align:left;border:1px solid var(--border);}
    .prose td{padding:10px 14px;border:1px solid var(--border);color:rgba(255,255,255,0.8);}
    .prose tr:nth-child(even) td{background:var(--surface);}
    .prose a{border-bottom:1px solid rgba(217,249,157,0.4);}
    .prose a:hover{text-decoration:none;border-bottom-color:var(--accent);}
    .video-embed{position:relative;padding-bottom:56.25%;height:0;margin:28px 0;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.1);box-shadow:0 0 60px rgba(217,249,157,0.06);}
    .video-embed iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:none;}
    .faq{margin:56px 0 0;}
    .faq h2{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:800;font-size:clamp(26px,3.8vw,34px);margin:0 0 20px;color:#fff;}
    .faq details{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 20px;margin-bottom:10px;}
    .faq summary{cursor:pointer;font-weight:600;color:#fff;font-size:16px;list-style:none;}
    .faq summary::-webkit-details-marker{display:none;}
    .faq summary::after{content:'+';float:right;color:var(--accent);font-weight:700;}
    .faq details[open] summary::after{content:'−';}
    .faq details[open] summary{margin-bottom:8px;}
    .faq p{color:var(--text-muted);margin:8px 0 0;}
    .cta-card{margin:56px 0 0;background:linear-gradient(135deg,rgba(217,249,157,0.12),rgba(217,249,157,0.04));border:1px solid rgba(217,249,157,0.25);border-radius:20px;padding:32px;text-align:center;}
    .cta-card h3{font-family:'Barlow Condensed',system-ui,sans-serif;font-size:28px;font-weight:800;margin:0 0 10px;color:#fff;}
    .cta-card p{color:var(--text-muted);margin:0 0 20px;}
    .cta-btn{display:inline-block;background:var(--accent);color:var(--accent-ink);padding:12px 24px;border-radius:999px;font-weight:700;font-size:15px;}
    .cta-btn:hover{filter:brightness(0.95);text-decoration:none;}
    .author-card{margin:48px 0 0;padding:20px;border-top:1px solid var(--border);color:var(--text-muted);font-size:15px;}
    .author-card strong{color:#fff;}
    footer{margin-top:80px;padding:40px 24px;border-top:1px solid var(--border);color:var(--text-dim);font-size:14px;text-align:center;}
    footer a{color:var(--text-muted);margin:0 10px;}
    footer a:hover{color:#fff;text-decoration:none;}
  `;
}

const slug = 'quickbooks-gmail-invoice-shortcut';
const publishedAt = '2026-06-02T00:00:00.000Z';

const faqData = [
  {
    question: 'Can SMASH replace QuickBooks Online for invoicing?',
    answer:
      'SMASH replaces the painful part — drafting estimates, quotes, and invoices from Gmail in seconds. It is not a full ledger. Many freelancers downgrade QuickBooks to a lighter plan for their accountant, send client billing from SMASH in Gmail, and sync completed documents back to QuickBooks or Xero when the job is won.',
  },
  {
    question: 'How do I send an invoice from Gmail on desktop?',
    answer:
      'Install the SMASH Chrome extension, open the client thread in Gmail, and click SMASH in the sidebar. Use From Email to scan the enquiry, or voice-to-quote to describe the job. SMASH maps your catalog rates, builds a branded PDF with a Stripe pay link, writes the cover email, and inserts everything into your reply — without opening QuickBooks.',
  },
  {
    question: 'Does SMASH work with QuickBooks and Xero together?',
    answer:
      'Yes. SMASH is built for speed inside Gmail. When you need the books updated, export or sync the completed quote or invoice to QuickBooks Online or Xero in the background — no retyping line items into a second dashboard.',
  },
  {
    question: 'What is the difference between a quote, estimate, and invoice in SMASH?',
    answer:
      'Quotes and estimates are for client approval before work starts — the customer can review line items and approve online. Invoices are for payment collection with a Stripe checkout link. SMASH keeps the document types distinct so you are not mixing pre-job approvals with post-job billing.',
  },
  {
    question: 'How fast can I send a quote after setup?',
    answer:
      'Once your service catalog and rates are loaded, most operators send a priced quote in 8–10 seconds using voice or From Email. The demo in the video walks through both workflows on desktop Gmail.',
  },
  {
    question: 'Is the SMASH Gmail invoice extension free?',
    answer:
      'You can install SMASH for free and send up to five invoices or quotes per month at no cost. Paid plans from $15/month unlock unlimited documents and accounting sync — often less than paying for QuickBooks tiers you only use to push PDFs.',
  },
];

const keyTakeaways = [
  'QuickBooks and Xero are built for accountants — not for firing off a quote from an open Gmail thread.',
  'Voice-to-quote: describe the job in plain English; SMASH maps hours, call-out fees, and treatments from your catalog.',
  'From Email scans the enquiry and pulls smarter line items from the original brief — fewer wrong rows.',
  'Insert Reply drops a cover letter, PDF, and Stripe payment portal link into the same Gmail thread.',
  'Keep QuickBooks for the ledger if you need it — send client billing from Gmail and sync when done.',
];

const content = `If you are an independent contractor running estimates, quotes, and invoices through QuickBooks, Xero, or a similar cloud ledger, you are probably paying a **software tax** you do not need.

You are not slow because you lack features. You are slow because the product is built for reconciliation, tax reporting, and accountant workflows — not for answering a client email with a priced PDF in under ten seconds.

This guide walks through a **QuickBooks Gmail invoice shortcut**: bill from your inbox, keep the ledger optional, and stop treating every quote like a mini accounting project.

## Watch: QuickBooks Gmail Invoice Shortcut — Full Desktop Demo

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/${VIDEO_ID}"
    title="Tired of QuickBooks Overcomplicating Your Invoices? Try This Gmail Shortcut — SMASH"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

In the video, we demo **[SMASH Invoices](/chrome-extension)** inside desktop Gmail: voice-to-quote, **From Email** scanning, branded PDF generation, Stripe pay links, and **Insert Reply** — start to priced send in about 8–10 seconds once your catalog is set.

## The Hidden Cost of Accounting Software Bloat

QuickBooks Online and Xero are critical financial backbones. They are also **heavy**.

When your daily work is mostly:

- Drafting estimates from client emails
- Sending quotes before a job starts
- Chasing payment on completed work

…you end up paying monthly fees for bank feeds, payroll modules, and reporting layers your accountant uses — not you.

That friction shows up as **tab-switching**: copy the client name from Gmail, log into QuickBooks, rebuild line items from memory, export a PDF, write a cover email, attach, send. Repeat tomorrow.

SMASH flips the workflow. **You are already in Gmail.** The extension lives in the sidebar and turns unstructured enquiry text into a tax-ready document without opening another dashboard.

## Workflow 1: Voice-to-Quote in Gmail

Open Gmail and click **SMASH** in the toolbar.

Instead of typing line items, hit record and talk through the job — the demo uses a pest-control style example:

> *"Hi Sarah — around 8 hours work, one pest control treatment, and a call-out fee included as well."*

Stop recording. SMASH matches your words against **Pricing DNA** — the rates, SKUs, and packages you uploaded when you set up. It drops in hours, treatments, and call-out fees as separate rows. You review, tweak if needed, then send.

Works the same whether you are a photographer, art director, animator, or tradie — any business with repeatable services and flat rates.

From there you can:

- **Copy a payment portal link** (Stripe checkout)
- **Attach a branded PDF**
- **Sync to QuickBooks or Xero** when the client approves

<div style="margin:40px 0;padding:28px 32px;background:linear-gradient(135deg,rgba(217,249,157,0.12),rgba(217,249,157,0.04));border:1px solid rgba(217,249,157,0.3);border-radius:16px;text-align:center;">
  <p style="font-size:20px;font-weight:800;color:#fff;margin:0 0 8px;letter-spacing:-0.01em;">Still rebuilding every quote inside QuickBooks?</p>
  <p style="color:rgba(255,255,255,0.65);margin:0 0 20px;font-size:15px;">Install SMASH in Gmail — free tier, no credit card. Full demo in the video above.</p>
  <a href="${CHROME_STORE_URL}" rel="nofollow" style="display:inline-block;background:#D9F99D;color:#0A0A0A;padding:12px 28px;border-radius:999px;font-weight:700;font-size:15px;text-decoration:none;">Add SMASH to Chrome — Free</a>
</div>

## Workflow 2: From Email — Scan the Thread, Not Your Memory

Voice is fast when you know the scope. **From Email** is faster when the client already wrote the brief.

Open the enquiry thread in Gmail. Click SMASH → **From Email**.

The extension reads the open message — including earlier quotes or scope notes in the thread — and pre-fills line items that match what was actually agreed. In the demo, that means dropping the extra "8 hours labour" row when the job is treatment-only. Less cleanup, fewer wrong totals.

You still get the same outputs: PDF, payment link, and optional sync to **[QuickBooks](/integrations/gmail-quickbooks-estimate-generator)** or **[Xero](/integrations/gmail-xero-quote-builder)**.

## Insert Reply: Cover Letter + Quote in One Click

The step most people miss: SMASH writes the **cover email** for you.

Hit **Insert Reply**. The extension places a professional message in your Gmail compose window — editable before you send — with the quote or invoice attached or linked.

Your client opens a clean portal where they can:

- **Approve an estimate or quote** before work starts
- **Pay an invoice** via Stripe when the job is done
- **Download the PDF** for their records

Quotes, estimates, and invoices stay distinct. That matters when you are running approvals separately from payment collection.

## Keep QuickBooks — Just Stop Living Inside It

You do not have to rip out your accounting stack.

A common setup:

| Role | Tool |
| --- | --- |
| Client conversations + fast quotes | **SMASH in Gmail** |
| Ledger, BAS, accountant handoff | **QuickBooks or Xero** (lighter tier) |
| Online payment | **Stripe link** embedded in the SMASH document |

Send billing from the inbox in seconds. Let your accountant keep the books in QuickBooks. Sync when the document is final — not before you have even replied to the email.

<div style="margin:40px 0;padding:28px 32px;background:linear-gradient(135deg,rgba(217,249,157,0.12),rgba(217,249,157,0.04));border:1px solid rgba(217,249,157,0.3);border-radius:16px;text-align:center;">
  <p style="font-size:20px;font-weight:800;color:#fff;margin:0 0 8px;letter-spacing:-0.01em;">Send invoices from Gmail in under 10 seconds</p>
  <p style="color:rgba(255,255,255,0.65);margin:0 0 20px;font-size:15px;">Free Chrome install. Works on desktop Gmail in minutes.</p>
  <a href="${CHROME_STORE_URL}" rel="nofollow" style="display:inline-block;background:#D9F99D;color:#0A0A0A;padding:12px 28px;border-radius:999px;font-weight:700;font-size:15px;text-decoration:none;">Install SMASH for Gmail — Free</a>
</div>

## Related Reading

- [Gmail invoice extension overview](/gmail-invoice) — send quotes without leaving your inbox  
- [Create QuickBooks estimates from Gmail](/blog/quickbooks-estimates-from-gmail)  
- [QuickBooks Gmail sidebar — stop juggling tabs](/blog/quickbooks-gmail-sidebar-tab-switching)  
- [Wave invoicing alternative for Gmail](/blog/wave-invoicing-alternative-gmail)  
- [Turn a Gmail email into a sent invoice in 20 seconds](/blog/gmail-email-to-invoice-20-seconds)  
`;

const url = `${SITE_URL}/blog/${slug}`;
const publishedIso = new Date(publishedAt).toISOString();
const title = 'QuickBooks Overcomplicating Invoices? Send From Gmail in 10 Seconds';
const metaTitle = 'QuickBooks Gmail Invoice Shortcut — Free Desktop Demo | SMASH';
const metaDescription =
  'Paying for QuickBooks bloat just to send quotes? See voice + From Email workflows in Gmail — PDF, Stripe link, and QBO/Xero sync in under 10 seconds.';
const keywords =
  'quickbooks gmail invoice shortcut, quickbooks online alternative for billing, send invoice from gmail desktop, quickbooks alternative for freelancers, gmail invoice extension chrome, speed invoicing tool, stripe invoice gmail, smash invoices demo';

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: metaDescription,
    image: `${SITE_URL}/hero_image.png`,
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
    name: 'Tired of QuickBooks Overcomplicating Your Invoices? Try This Gmail Shortcut!',
    description:
      'Desktop Gmail demo: voice-to-quote, From Email scanning, branded PDF + Stripe pay link, Insert Reply cover letter, and optional QuickBooks/Xero sync — under 10 seconds per send.',
    thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
    uploadDate: '2026-06-01T21:59:20-07:00',
    duration: 'PT3M44S',
    contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`,
    embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
    publisher: { '@type': 'Organization', name: 'SMASH Invoices', url: SITE_URL },
  },
  {
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
    url: `${SITE_URL}/chrome-extension`,
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
      <a href="/chrome-extension">Add to Chrome</a><a href="/blog">Blog</a>
    </div>
    <a href="${CHROME_STORE_URL}" class="nav-cta" rel="nofollow">Add to Chrome — Free</a>
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
      <h3>Stop paying for QuickBooks bloat — bill from Gmail</h3>
      <p>Install SMASH, scan the client email, and send a priced quote with a Stripe link in the same thread. Free to start.</p>
      <a href="${CHROME_STORE_URL}" class="cta-btn" rel="nofollow">Add SMASH to Chrome — Free</a>
    </aside>

    <div class="author-card">
      <strong>About Dan Neale</strong><br>Dan is the founder of SMASH Invoices. He built SMASH after years on the tools because he was tired of the tab-switching tax every time a client email needed a quote.
    </div>
  </article></main>

  <footer>
    <div>
      <a href="/">Home</a><a href="/blog">Blog</a><a href="/chrome-extension">Add to Chrome</a>
      <a href="/pricing">Pricing</a><a href="/features">Features</a>
      <a href="/gmail-invoice">Gmail Invoice</a>
      <a href="/integrations-xero">Xero</a><a href="/integrations-quickbooks">QuickBooks</a>
      <a href="/voice-invoicing">Send invoice fast</a><a href="/gmail-invoice">Gmail invoice</a><a href="/faq">FAQ</a>
      <a href="/privacy">Privacy</a><a href="/terms">Terms</a>
    </div>
    <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
      <a href="${APP_STORE_URL}" rel="nofollow" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;border-radius:999px;background:#ffffff;color:#0a0a0a;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;font-size:13px;text-decoration:none;">Download the iOS app</a>
      <a href="${CHROME_STORE_URL}" rel="nofollow" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;border-radius:999px;background:rgba(255,255,255,0.1);color:#ffffff;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;font-size:13px;text-decoration:none;border:1px solid rgba(255,255,255,0.15);">Add to Chrome</a>
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
