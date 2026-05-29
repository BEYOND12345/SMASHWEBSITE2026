/**
 * Generates static HTML for the Wave invoicing alternative Gmail demo article.
 * Run: node --experimental-strip-types scripts/generate-wave-invoicing-post.ts
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
const VIDEO_ID = 'MNXprMhipJw';

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

const slug = 'wave-invoicing-alternative-gmail';
const publishedAt = '2026-05-28T00:00:00.000Z';

const faqData = [
  {
    question: 'Is Wave Accounting still free in 2026?',
    answer:
      'Wave still offers a free Starter plan for manual invoice creation, but automated bank syncing, AI transaction matching, payment reminders, and full CSV ledger exports are gated behind the paid Pro plan (around $16–$19 USD per month). You can send basic invoices at $0, but background automation is no longer included on the free tier.',
  },
  {
    question: 'What is the best free alternative to Wave for Gmail users?',
    answer:
      'SMASH Invoices is a free Chrome extension that runs inside Gmail. It scans client emails, maps line items from your saved service catalog, generates branded PDF invoices with payment links, and inserts them into your reply — without opening a separate accounting dashboard. It syncs to Xero or QuickBooks when you need ledger updates.',
  },
  {
    question: 'Can SMASH replace Wave for full bookkeeping?',
    answer:
      'SMASH is built for fast client invoicing and quoting from your inbox, not corporate tax ledgers or bank reconciliation. Many freelancers use SMASH for billing speed and keep Xero or QuickBooks for the books. Completed invoices can export or sync to your main accounting system.',
  },
  {
    question: 'How does SMASH read client details from email?',
    answer:
      'Open the client thread in Gmail, click SMASH in the sidebar, and use From Email. The extension scans the open message, extracts buyer details, and pre-fills the customer profile so you are not retyping names and addresses into another app.',
  },
  {
    question: 'Does the SMASH Gmail extension cost money?',
    answer:
      'You can install SMASH for free and send up to five invoices or quotes per month at no cost. Paid plans from $15/month unlock unlimited documents and accounting sync — still far below paying for Wave Pro plus a separate invoicing workflow.',
  },
  {
    question: 'Will Wave remove the free tier completely?',
    answer:
      'Wave has not removed free access entirely, but the free tier is increasingly manual. If your workflow depended on automated bank feeds, reminders, or exports, you should plan for either Wave Pro fees or a Gmail-native billing tool that keeps automation without a monthly invoice software tax.',
  },
];

const keyTakeaways = [
  'Wave’s free Starter plan still exists, but automation (bank sync, reminders, full exports) moved to Pro at ~$19/month.',
  'Manual free tiers create an “admin tax” — hours retyping client details and chasing late payers.',
  'SMASH runs inside Gmail: scan the email, drop in your catalog, send a PDF invoice with pay link in the same thread.',
  'Built for freelancers and VAs who bill from email — not a full corporate ledger replacement.',
  'Free Chrome install. Optional sync to Xero or QuickBooks when the job is won.',
];

const content = `If you are a freelancer, virtual assistant, or solo business owner, you have likely spent years relying on Wave Accounting's free tier for client billing. It is a solid product that has served independent operators well. If you have logged into your dashboard recently, you have probably noticed the ground shifting under the free plan.

Legacy platforms change their models as they scale. This guide explains what shifted on Wave's pricing plans and how to keep client invoicing automated at **$0/month** — without the admin tax.

## Watch: Best Wave Invoicing Alternative for Gmail (Full Demo)

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/${VIDEO_ID}"
    title="Wave Invoicing Changes? Best Free Alternative for Gmail (Full Demo) — SMASH"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

In the video, we walk through what Wave removed from the free tier and demo **SMASH Invoices** inside Gmail: scan a client email, map your services, generate a branded PDF with a payment link, and send from the same thread in about 60 seconds.

## Starter vs. Pro: What Actually Changed in Wave?

To be fair to Wave, they have not deleted free access entirely. You can still log in, build an estimate or invoice manually, and send it to a client without a monthly fee.

The rules changed. Wave split the platform into a **free Starter plan** and a **paid Pro plan** (roughly **$16–$19 USD per month**). The gap is mostly **automation**.

The free tier lost the background features solo operators rely on:

| Feature / capability | Wave free Starter ($0/mo) | Wave paid Pro (~$19/mo) |
| --- | --- | --- |
| Invoice creation | Manual only | Manual only |
| Bank feed syncing | Manual statement upload | Automatic background imports |
| Transaction matching | Manual sorting | Automated AI merge and categorization |
| Late payment chasing | Manual follow-up emails | Automated reminder schedules |
| Data portability | Limited summary reporting | Full transaction-level CSV exports |

For anyone juggling multiple clients, losing automated bank sync, receipt capture, and payment reminders adds real bookkeeping drag — even if sending a one-off invoice stays free.

## The Hidden Cost of the "Admin Tax"

When automation gets gated, you pay with **time**, not line items on a receipt.

Without background bank sync, automated receipt capture, and payment reminders, solo operators often spend **10–15 hours a week** on context switching: jumping tabs, copy-pasting customer names from email, double-checking totals, and retyping rates into another dashboard.

Every hour fighting admin software is an hour you cannot bill or ship work. A "free" manual tier is not free if it costs your Friday night.

## Introducing SMASH: Invoicing Built for Your Inbox

You do not need a heavy corporate accounting suite just to send professional invoices and collect payment cleanly.

**[SMASH Invoices](/chrome-extension)** is a lightweight Chrome extension for operators who run client work through email. It lives in the **Gmail sidebar** — no tab hop to paste the same customer into another product.

SMASH is not a full tax ledger. It is built to do one job well: **turn email into sent, paid-ready invoices fast**. When you still want balance sheets in **[QuickBooks](/integrations/gmail-quickbooks-estimate-generator)** or **[Xero](/integrations/gmail-xero-quote-builder)**, sync and export keep the ledger updated without double entry.

<div style="margin:40px 0;padding:28px 32px;background:linear-gradient(135deg,rgba(217,249,157,0.12),rgba(217,249,157,0.04));border:1px solid rgba(217,249,157,0.3);border-radius:16px;text-align:center;">
  <p style="font-size:20px;font-weight:800;color:#fff;margin:0 0 8px;letter-spacing:-0.01em;">Still typing invoices into Wave by hand?</p>
  <p style="color:rgba(255,255,255,0.65);margin:0 0 20px;font-size:15px;">Install SMASH in Gmail — free tier, no credit card. Demo in the video above.</p>
  <a href="${CHROME_STORE_URL}" rel="nofollow" style="display:inline-block;background:#D9F99D;color:#0A0A0A;padding:12px 28px;border-radius:999px;font-weight:700;font-size:15px;text-decoration:none;">Add SMASH to Chrome — Free</a>
</div>

## How It Works: From Email to Paid in Under 60 Seconds

Operating beside active Gmail threads turns unstructured enquiries into line-item invoices quickly.

### 1. Zero-typing client mapping

A client asks for a quote or bill. Open the thread, open SMASH in the sidebar, and press **From Email**. SMASH reads the message, pulls buyer details, and pre-fills the customer profile.

### 2. Instant service catalogs

Skip retyping descriptions and tax line by line. Open your preloaded product directory in the sidebar and drop in flat-rate packages, milestones, or saved SKUs in one click.

### 3. Native PDF and secure checkout

SMASH builds a branded PDF with your logo, terms, and an online pay link. Hit **Insert Reply** and the invoice attaches to the Gmail thread. Clients can pay a deposit or clear the balance online.

## Take Back Your Workflow

You should not have to choose between an unexpected **$19/month** software bill and drowning in manual entry.

Move billing to where client conversations already live. Cut application hopping, copy-paste mistakes, and monthly overhead.

<div style="margin:40px 0;padding:28px 32px;background:linear-gradient(135deg,rgba(217,249,157,0.12),rgba(217,249,157,0.04));border:1px solid rgba(217,249,157,0.3);border-radius:16px;text-align:center;">
  <p style="font-size:20px;font-weight:800;color:#fff;margin:0 0 8px;letter-spacing:-0.01em;">Keep automation free — bill from Gmail</p>
  <p style="color:rgba(255,255,255,0.65);margin:0 0 20px;font-size:15px;">Install the SMASH Chrome extension from the store. Works in minutes.</p>
  <a href="${CHROME_STORE_URL}" rel="nofollow" style="display:inline-block;background:#D9F99D;color:#0A0A0A;padding:12px 28px;border-radius:999px;font-weight:700;font-size:15px;text-decoration:none;">Install SMASH for Gmail — Free</a>
</div>

## Related Reading

- [Gmail invoice extension overview](/gmail-invoice) — send quotes and invoices without leaving your inbox  
- [Turn a Gmail email into a sent invoice in 20 seconds](/blog/gmail-email-to-invoice-20-seconds)  
- [Fastest voice invoice generator for Gmail](/blog/fastest-voice-invoice-generator-gmail)  
- [Create QuickBooks estimates from Gmail](/blog/quickbooks-estimates-from-gmail)  
- [SMASH vs Rounded — honest comparison](/smash-vs-rounded)  
`;

const url = `${SITE_URL}/blog/${slug}`;
const publishedIso = new Date(publishedAt).toISOString();
const title = 'Wave Invoicing Alternative: Free Gmail Shortcut (Skip the $19/mo Pro Plan)';
const metaTitle = 'Wave Invoicing Alternative for Gmail — Free Demo (2026) | SMASH';
const metaDescription =
  'Wave free tier lost bank sync and payment reminders. Compare Starter vs Pro, avoid the admin tax, and see a free Wave invoicing alternative for Gmail — full SMASH demo.';
const keywords =
  'wave invoicing alternative, wave accounting alternative, wave accounting free tier 2026, wave starter vs pro, wave pro alternative, free invoice gmail, freelancer invoicing gmail, virtual assistant billing, smash invoices chrome extension, wave accounting replacement';

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
    name: 'Wave Invoicing Changes? Best Free Alternative for Gmail (Full Demo)',
    description:
      'Full demo: what changed on Wave free vs Pro, and how to invoice from Gmail with SMASH — scan emails, catalog line items, PDF + pay link, no Wave Pro subscription.',
    thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
    uploadDate: '2026-05-28T00:00:00.000Z',
    duration: 'PT5M0S',
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
      <a href="/chrome-extension">Chrome Extension</a><a href="/blog">Blog</a>
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
      <h3>Skip Wave Pro — bill from Gmail instead</h3>
      <p>Install SMASH, scan the client email, and send a priced invoice with a pay link in the same thread. Free to start.</p>
      <a href="${CHROME_STORE_URL}" class="cta-btn" rel="nofollow">Add SMASH to Chrome — Free</a>
    </aside>

    <div class="author-card">
      <strong>About Dan Neale</strong><br>Dan is the founder of SMASH Invoices. He built SMASH after years on the tools because he was tired of the tab-switching tax every time a client email needed a quote.
    </div>
  </article></main>

  <footer>
    <div>
      <a href="/">Home</a><a href="/blog">Blog</a><a href="/chrome-extension">Chrome Extension</a>
      <a href="/pricing">Pricing</a><a href="/features">Features</a>
      <a href="/gmail-invoice">Gmail Invoice</a>
      <a href="/integrations-xero">Xero</a><a href="/integrations-quickbooks">QuickBooks</a>
      <a href="/voice-invoicing">Voice Invoicing</a><a href="/faq">FAQ</a>
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

// Append sitemap entry
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
