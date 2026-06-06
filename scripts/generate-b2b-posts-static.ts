/**
 * Generates static HTML files for the 10 B2B SEO articles.
 * Run with: node --import tsx/esm scripts/generate-b2b-posts-static.ts
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
const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';

const chromeCTA = `
<div style="margin:40px 0;padding:28px 32px;background:linear-gradient(135deg,rgba(217,249,157,0.12),rgba(217,249,157,0.04));border:1px solid rgba(217,249,157,0.3);border-radius:16px;text-align:center;">
  <p style="font-size:20px;font-weight:800;color:#fff;margin:0 0 8px;letter-spacing:-0.01em;">Stop switching tabs. Start smashing quotes.</p>
  <p style="color:rgba(255,255,255,0.65);margin:0 0 20px;font-size:15px;">Free to install. No credit card. Live inside Gmail in 2 minutes.</p>
  <a href="${CHROME_STORE_URL}" rel="nofollow" style="display:inline-block;background:#D9F99D;color:#0A0A0A;padding:12px 28px;border-radius:999px;font-weight:700;font-size:15px;text-decoration:none;">Add SMASH to Chrome — Free</a>
</div>
`;

const equation = (label: string, formula: string, description: string) =>
  `<div style="background:rgba(217,249,157,0.07);border:1px solid rgba(217,249,157,0.2);border-radius:10px;padding:18px 22px;margin:20px 0;font-family:'JetBrains Mono',monospace;font-size:13px;line-height:1.6;">
  <span style="color:#D9F99D;font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;">${label}</span><br>
  <span style="color:#fff;font-size:15px;font-weight:600;">${formula}</span><br>
  <span style="color:rgba(255,255,255,0.55);font-size:12px;">${description}</span>
</div>`;

interface FAQItem { question: string; answer: string }

interface Post {
  slug: string;
  title: string;
  meta_title: string;
  meta_description: string;
  excerpt: string;
  primary_keyword: string;
  secondary_keywords: string[];
  author: string;
  author_bio: string;
  published_at: string;
  reading_time: number;
  key_takeaways: string[];
  faq_data: FAQItem[];
  content: string;
}

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m] ?? m));
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
    .prose img{border-radius:12px;margin:24px 0;}
    .prose table{width:100%;border-collapse:collapse;margin:24px 0;font-size:14px;}
    .prose th{background:var(--surface-strong);color:#fff;font-weight:700;padding:10px 14px;text-align:left;border:1px solid var(--border);}
    .prose td{padding:10px 14px;border:1px solid var(--border);color:rgba(255,255,255,0.8);}
    .prose tr:nth-child(even) td{background:var(--surface);}
    .prose a{border-bottom:1px solid rgba(217,249,157,0.4);}
    .prose a:hover{text-decoration:none;border-bottom-color:var(--accent);}
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

function renderPost(post: Post): string {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const publishedIso = new Date(post.published_at).toISOString();
  const keywords = [post.primary_keyword, ...post.secondary_keywords].join(', ');
  const contentHtml = (marked.parse(post.content) as string)
    .replace(/<h1>/g, '<h2>').replace(/<\/h1>/g, '</h2>');

  const takeaways = post.key_takeaways.length > 0
    ? `<aside class="takeaways"><h2>Key Takeaways</h2><ul>${post.key_takeaways.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul></aside>`
    : '';
  const faqBlock = post.faq_data.length > 0
    ? `<section class="faq"><h2>Frequently Asked Questions</h2>${post.faq_data.map(f => `<details><summary>${escapeHtml(f.question)}</summary><p>${escapeHtml(f.answer)}</p></details>`).join('')}</section>`
    : '';

  const schemas = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.meta_description, image: `${SITE_URL}/hero_image.png`, datePublished: publishedIso, dateModified: publishedIso, author: { '@type': 'Person', name: post.author }, publisher: { '@type': 'Organization', name: 'SMASH Invoices', logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` } }, mainEntityOfPage: { '@type': 'WebPage', '@id': url }, keywords, inLanguage: 'en-AU' },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` }, { '@type': 'ListItem', position: 3, name: post.title, item: url }] },
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'SMASH Invoices — Gmail Chrome Extension', applicationCategory: 'BusinessApplication', operatingSystem: 'Chrome', offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD', description: 'Free up to 5 invoices/month. Paid plans from $15/month.' }, url: `${SITE_URL}/chrome-extension`, downloadUrl: CHROME_STORE_URL },
    ...(post.faq_data.length > 0 ? [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: post.faq_data.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }] : []),
  ];

  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(post.meta_title)}</title>
  <meta name="description" content="${escapeHtml(post.meta_description)}">
  <meta name="keywords" content="${escapeHtml(keywords)}">
  <meta name="author" content="${escapeHtml(post.author)}">
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
  <meta property="og:title" content="${escapeHtml(post.meta_title)}">
  <meta property="og:description" content="${escapeHtml(post.meta_description)}">
  <meta property="og:url" content="${url}"><meta property="og:image" content="${SITE_URL}/hero_image.png">
  <meta property="og:locale" content="en_AU"><meta property="article:published_time" content="${publishedIso}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(post.meta_title)}">
  <meta name="twitter:description" content="${escapeHtml(post.meta_description)}">
  <meta name="twitter:image" content="${SITE_URL}/hero_image.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>${inlineStyles()}</style>
${schemas.map(s => `  <script type="application/ld+json">${renderJsonLd(s)}</script>`).join('\n')}
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
      <h1 class="post-title">${escapeHtml(post.title)}</h1>
      <div class="post-meta">
        <span>By ${escapeHtml(post.author)}</span>
        <span><time datetime="${publishedIso}">${formatDate(post.published_at)}</time></span>
        <span>${post.reading_time} min read</span>
      </div>
    </header>
    ${takeaways}
    <div class="prose">${contentHtml}</div>
    ${faqBlock}
    <aside class="cta-card">
      <h3>Your inbox is full of quotes waiting to happen.</h3>
      <p>SMASH turns customer emails into priced, professional quotes in under 60 seconds — right inside Gmail. Syncs to Xero and QuickBooks. Free to install.</p>
      <a href="${CHROME_STORE_URL}" class="cta-btn" rel="nofollow">Add SMASH to Chrome — Free</a>
    </aside>
    <div class="author-card"><strong>About ${escapeHtml(post.author)}</strong><br>${escapeHtml(post.author_bio)}</div>
  </article></main>
  <footer>
    <div>
      <a href="/">Home</a><a href="/blog">Blog</a><a href="/chrome-extension">Add to Chrome</a>
      <a href="/pricing">Pricing</a><a href="/features">Features</a>
      <a href="/integrations-xero">Xero Integration</a><a href="/integrations-quickbooks">QuickBooks Integration</a>
      <a href="/voice-invoicing">Voice Invoicing</a><a href="/faq">FAQ</a>
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
}

// ─── Article data ─────────────────────────────────────────────────────────────

const eq1 = equation('Time Recovery Equation', 'T_saved = N × (T_manual − T_smash)', 'Where N = monthly quote volume, T_manual = 10–15 min per quote (manual), T_smash = under 60 seconds (SMASH)');
const eq2 = equation('Revenue Leakage Equation', 'R_leak = N × (1 − Win_Rate) × AOV × delay_factor', 'Where AOV = average order value ($2,000–$15,000+), delay_factor = probability loss per minute of quoting delay');

const posts: Post[] = [

// ─── Article 1 ───────────────────────────────────────────────────────────────
{
  slug: 'quickbooks-estimates-from-gmail',
  title: 'How to Create QuickBooks Estimates From Gmail — Without the 5-Tab Nightmare',
  meta_title: 'QuickBooks CSV Import Blocked? Gmail Estimate Workaround | SMASH Blog',
  meta_description: 'QuickBooks Online blocks CSV estimate imports across all tiers. SMASH bypasses this — scan a customer email in Gmail and push a complete QBO estimate in under 60 seconds.',
  excerpt: "QuickBooks Online has a native blocker on importing estimates. No CSV, no Excel, no IIF — across every tier including Advanced. Here's the workaround that actually works.",
  primary_keyword: 'create quickbooks estimates from gmail',
  secondary_keywords: ['import estimate into quickbooks online', 'quickbooks online estimate chrome extension', 'quickbooks gmail integration', 'quickbooks estimate from email', 'qbo estimate automation'],
  author: 'Dan Neale',
  author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman and trade supplier because he was sick of the tab-switching tax every time a job request landed in his inbox.',
  published_at: '2026-05-25T07:00:00.000Z',
  reading_time: 8,
  key_takeaways: [
    'QuickBooks Online natively blocks importing estimates using CSV, Excel, or IIF files — even on the Advanced tier.',
    'The typical manual quoting workflow from Gmail involves 5 separate browser tabs and 10–15 minutes of work per quote.',
    'SMASH bypasses the import restriction entirely by acting as an AI parser directly inside Gmail.',
    'Your QBO customer directory and live SKU catalog sync to the SMASH sidebar via secure OAuth 2.0.',
    'The "Line Lock" feature prevents QBO from overwriting your custom description text when you change a SKU.',
  ],
  faq_data: [
    { question: "Can I import estimates into QuickBooks Online from a CSV or Excel file?", answer: "No — QuickBooks Online natively blocks direct import of estimate transactions using IIF, Excel, or CSV files across all subscription tiers, including QBO Advanced. SMASH bypasses this by acting as a browser-native data extractor. It reads the unstructured text from your email thread, maps line items to your active QBO catalog, and pushes a completed estimate straight to your account via the official API." },
    { question: "What is the 'Line Lock' feature and why does it matter?", answer: "When you manually change a product SKU on a QBO invoice or estimate, QuickBooks automatically overwrites your custom description text — reverting it to the default catalog wording. This is a known, long-standing QBO behaviour. SMASH's Line Lock lets you freeze your custom description and quantity while toggling the underlying ledger SKU. Your negotiated specs and project notes stay exactly as you typed them." },
    { question: "Does SMASH store my QuickBooks financial data?", answer: "No. SMASH is built on a local-storage architecture. All QuickBooks integrations authenticate via official Intuit OAuth 2.0. We request read-only access to your email thread to scan content — we don't read your inbox. We never store, share, or sell your financial records, customer profiles, or transaction histories." },
    { question: "How does SMASH handle the QBO branded email problem?", answer: "In early 2026, QuickBooks rolled out uneditable Intuit-branded email templates that many customers report look spammy to corporate procurement departments. SMASH sends invoices and estimates directly from your Gmail account using Google OAuth 2.0 — completely bypassing Intuit's email formatting. Your customer sees a clean, branded email from your actual address." },
    { question: "Does this work for wholesalers and distributors, not just tradies?", answer: "Yes. SMASH is built for any business that receives unstructured quote requests by email and needs to turn them into formatted QBO estimates quickly. That includes B2B wholesalers, specialty suppliers, timber merchants, building materials distributors, and equipment dealers." },
  ],
  content: `If your sales desk runs on QuickBooks Online and Gmail, here is a frustrating fact you may have already discovered: QuickBooks Online natively blocks the import of estimates using CSV, Excel, or IIF files — across every subscription tier, including Advanced.

That means every quote request that lands in your inbox becomes a manual job. You have to leave Gmail, log into QBO, navigate to the right customer, open a new estimate, and type everything in by hand. For a business processing 20 to 50 inbound requests a day, that's a serious operational drag.

The average manual quoting sequence from Gmail to a sent QBO estimate involves five separate browser tabs and takes 10 to 15 minutes per quote.

${eq1}

For a distributor handling 30 custom RFQs per day, that equation works out to 5 to 7 hours of front-office labour consumed purely by tab-switching and data re-entry — every single day.

## The Five-Tab Click-Tax

Here's what the standard flow looks like when a builder emails your yard asking for a quote:

**Tab 1 — Gmail:** Open the customer's email, read the request, copy the delivery address.

**Tab 2 — Google Maps:** Paste the address, calculate the delivery distance or freight zone.

**Tab 3 — Your price book:** Find the matching SKUs, check stock, note the base price and applicable freight surcharge.

**Tab 4 — QuickBooks Online:** Log in, navigate to the Customer Hub, create a new estimate, enter contact details, add line items manually, check tax codes, save.

**Tab 5 — Back to Gmail:** Write a covering email, export the PDF, attach it, send.

| Workflow | Time per quote | Tabs | Data entry |
|---|---|---|---|
| Manual QBO via Gmail | 10–15 minutes | 5+ | 100% manual |
| SMASH sidebar in Gmail | Under 60 seconds | 0 extra | AI-assisted |

## How SMASH Bypasses the QBO Estimate Import Block

SMASH doesn't import estimates. It generates them directly inside Gmail and pushes the result to QBO via the official API — completely sidestepping the CSV import restriction.

**Step 1 — Install and connect.** Add SMASH from the Chrome Web Store. Click Connect QuickBooks Online in the sidebar and complete the OAuth authentication. Your customer directory and live SKU catalog sync immediately.

**Step 2 — Open the customer's email and scan it.** A quote request lands in your inbox. Click the SMASH button. The AI reads the email body — customer name, delivery address, requested items, quantities — and maps them to your QBO product list in real time.

**Step 3 — Review and push.** Check the line items. If the freight zone is correct and the SKUs look right, click Export to QuickBooks. The estimate appears in QBO — correctly categorised, tax-mapped, and attached to the right customer — in under 60 seconds.

## The Line Description Problem (And How SMASH Fixes It)

There's a second QBO pain point that affects estimators heavily. When you manually change a product or service SKU on an active QBO estimate, the system automatically overwrites your custom description text — reverting it to whatever's in the default catalog. Project notes, negotiated specs, custom measurements: all gone.

Power users currently pay for third-party extensions specifically to get around this. SMASH includes this functionality natively. The Line Lock button freezes your description and quantity fields independently of the SKU you have selected. You can swap the underlying ledger code without losing a single word of your custom scope.

## The QBO Email Problem (Also Fixed)

In early 2026, QuickBooks Online introduced uneditable Intuit-branded email wrappers. Customers and forum posts on Reddit describe the resulting emails as looking spammy — the rigid blue Intuit box formatting triggers spam filters in corporate procurement inboxes.

SMASH sends quotes and invoices directly from your Gmail account via Google OAuth 2.0. Your customer receives a clean, branded email from your actual address. No Intuit wrappers. No deliverability risk.

## What B2B Sales Desks Are Saying

> *"We distribute custom building materials across Victoria, and builders send messy cutting lists via email. Rekeying every piece into QBO used to take hours. SMASH reads the email, maps the items, and generates the estimate inside Gmail. It's the fastest quoting tool our team has ever used."*
> **— Rohan T., General Manager, SDS Building Supplies**

> *"The Line Lock feature alone is worth it. I can't count how many times QBO wiped out my custom project descriptions when I changed a SKU. That's fixed now."*
> **— Claire B., Estimator, Hardwood Direct**

> *"We were already in Gmail all day. The fact that SMASH just sits in the sidebar and connects to our QBO account without any extra software is exactly what we needed."*
> **— James F., Sales Manager, Precision Steel Distributors**

${chromeCTA}

## Who This Is Built For

SMASH is most useful for businesses where:
- Most quote requests arrive via email (20+ per day)
- Pricing involves configurable items, freight zones, or custom specifications
- You use QuickBooks Online for accounting but find native quoting slow
- Your sales team is already working from a desktop in Chrome

That covers B2B wholesalers, specialty suppliers, building materials distributors, equipment dealers, and any operation that runs a busy sales desk from Gmail.

## Related Reading

- [The Gmail to QuickBooks Bridge Your Accounting Software Forgot to Build](/blog/gmail-quickbooks-xero-bridge)
- [What QuickBooks Doesn't Have (And Why I Built It)](/blog/quickbooks-gmail-chrome-extension-missing)
- [Stop Juggling Tabs: The QuickBooks Sidebar for Gmail](/blog/quickbooks-gmail-sidebar-tab-switching)
- [SMASH QuickBooks Integration](/integrations-quickbooks)
`,
},

// ─── Article 2 ───────────────────────────────────────────────────────────────
{
  slug: 'xero-quote-builder-gmail-extension',
  title: 'The Fastest Xero Quote Builder for Gmail (And Why Hubdoc Won\'t Help You)',
  meta_title: 'Fastest Xero Quote Builder for Gmail — Chrome Extension | SMASH',
  meta_description: "Hubdoc handles incoming bills. It can't build outgoing quotes. If you're on Xero and quoting from Gmail, SMASH builds a complete, branded Xero quote in under 60 seconds.",
  excerpt: "Hubdoc is included with most Xero plans and it's great — for processing supplier bills. It does nothing for outgoing quotes. Here's what fills that gap.",
  primary_keyword: 'xero quote builder gmail',
  secondary_keywords: ['xero gmail sidebar extension', 'how to quote faster in xero', 'quote builder xero chrome extension', 'xero gmail integration', 'xero quote from email'],
  author: 'Dan Neale',
  author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman and trade supplier because he was sick of the tab-switching tax every time a job request landed in his inbox.',
  published_at: '2026-05-25T08:00:00.000Z',
  reading_time: 7,
  key_takeaways: [
    "Hubdoc (free with most Xero plans) is an accounts payable tool — it processes incoming supplier bills, not outgoing client quotes.",
    "Xero's native email-to-bills feature only handles tax-inclusive imports and ignores plain-text email bodies.",
    "SMASH is the accounts receivable layer Xero doesn't have — it builds outgoing quotes from Gmail in under 60 seconds.",
    "Xero has no native follow-up engine for unaccepted quotes. SMASH includes an automated quote-chaser.",
    "Reconciling multiple payments against one customer in Xero requires tedious manual matching. SMASH includes a bulk reconciliation helper.",
  ],
  faq_data: [
    { question: "How is SMASH different from Hubdoc?", answer: "Hubdoc is owned by Xero and included free with most Xero Business plans. It's an accounts payable document capture tool — it scans and processes incoming vendor bills and receipts. It cannot create, edit, or send outgoing client quotes or estimates. SMASH is an accounts receivable workflow tool. It lives in your Gmail sidebar, converts inbound client emails into draft quotes and invoices, and syncs them to Xero in under 60 seconds." },
    { question: "Can SMASH follow up on outstanding quotes automatically?", answer: "Yes. Xero has automated invoice reminders but no native system for following up on issued quotations. SMASH includes a quote-chasing engine that monitors sent quotes and sends polite, customisable follow-up emails to prospects before their quote expires." },
    { question: "Can I reconcile multiple payments at once?", answer: "Yes. When a single customer payment covers multiple outstanding invoices, SMASH includes a reconciliation helper that lets you enter multiple invoice numbers or upload a CSV remittance file to auto-reconcile them in one action — instead of matching them one at a time in Xero's banking screen." },
    { question: "What's wrong with Xero's native email-to-bills feature?", answer: "Xero's email-to-bills forces all imported documents to be tax-inclusive, overrides your organisation's default tax settings, ignores plain-text HTML email bodies, and fails to extract complex multi-line items. You still have to manually assign Chart of Accounts codes and tax rates before approval. It's an A/P shortcut with significant limitations — and it only covers bills coming in, not quotes going out." },
    { question: "Does SMASH replace Xero?", answer: "No. SMASH works alongside your existing Xero setup. Your accountant logs into Xero as normal. Chart of accounts, tax codes, payment terms, and customer records are all preserved. SMASH is purely the quote-generation layer that sits between Gmail and Xero — the piece Xero itself never built." },
  ],
  content: `If your business handles five to twenty quotes a day on a desktop, the time lost switching between your Gmail inbox and your Xero account adds up fast. Context-switching between applications can cost 20 to 40% more time than staying in a single workflow — which means a quote that should take 3 minutes ends up taking 12.

Xero is excellent accounting software. But it wasn't built to handle the moment a customer emails asking for a price. That specific workflow — inbox to priced quote to sent — is where the friction lives.

${eq1}

For a timber merchant or specialty supplier processing 25 custom RFQs per day, cutting $T_{manual}$ from 12 minutes to under 60 seconds recovers more than 180 hours of front-office labour per month.

## The Hubdoc Confusion

Xero includes Hubdoc with most business plans at no extra cost, and it's easy to assume it handles the quoting problem. It doesn't.

Hubdoc is an **accounts payable** tool. It scans and processes incoming supplier bills and receipts. It does nothing for outgoing client quotes or estimates. It cannot create a quote, send a quote, or push a draft estimate to Xero's quote queue.

Xero also has a native email-to-bills feature, but it only handles tax-inclusive imports, ignores plain-text HTML email bodies, fails on multi-line items, and requires manual Chart of Accounts assignment before approval. It's a limited A/P shortcut — and again, it only works for bills coming in.

| Tool | What it handles | Outgoing quotes? |
|---|---|---|
| Hubdoc | Incoming supplier bills and receipts | ✗ |
| Xero email-to-bills | Tax-inclusive document imports | ✗ |
| Native Xero quoting | Quotes built manually in Xero dashboard | Slow — requires tab-switching |
| **SMASH** | Gmail inbox → Xero quote in one flow | ✓ — under 60 seconds |

## How SMASH Builds Xero Quotes From Gmail

**Connect once.** Authenticate with Xero via OAuth. Your customer contacts and live product/service SKU catalog sync to the SMASH sidebar immediately.

**Open the email, scan it.** A quote request arrives in Gmail. Click the SMASH button in your sidebar. The AI reads the email — customer name, job description, items requested — and maps them to your Xero catalog.

**Review and push.** Check line items, adjust margins if needed, confirm the tax code. Click Export to Xero. The quote appears in Xero under the correct customer record. If they're new to your books, their contact is created automatically.

**Send and chase.** Drop the quote into your Gmail reply or generate a portal link. SMASH's quote-chasing engine sends polite follow-ups before the quote expires — automatically, without you remembering to do it.

## The Quote Follow-Up Problem (Also Fixed)

Xero has automated reminders for unpaid invoices. It has nothing for unaccepted quotes. This forces businesses to manually track open proposals, dig through sent email history, and write follow-up messages by hand.

SMASH's quote-chaser runs automatically after a quote is sent. It monitors the status, and if no acceptance comes in before expiry, it sends a short, professional follow-up from your Gmail account on your behalf. No manual tracking. No forgotten quotes.

## Bulk Reconciliation

One more long-standing Xero pain point: when a single customer payment covers multiple outstanding invoices, Xero requires you to match them individually in the banking screen. High-volume businesses end up clicking OK hundreds of times a month.

SMASH includes a reconciliation helper. Enter multiple invoice numbers, or upload a simple CSV remittance advice file, and SMASH matches them in a single action.

## What Xero Users Are Saying

> *"We run a high-volume custom timber mill. Builders send cutting lists by email and matching those to our Xero inventory codes was a nightmare. SMASH reads the email, matches our SKUs, and drafts a priced quote instantly. Our front-office time has dropped by more than half."*
> **— Dawie O., Operations Lead, Gowan Lea Timbers**

> *"The quote chaser is the feature I didn't know I needed. We were losing jobs because quotes were going cold and we weren't following up in time. That's not happening anymore."*
> **— Sarah M., Business Development, Freshwater Landscaping Supply**

> *"I thought Hubdoc covered this. It doesn't — it's a completely different thing. Once I understood that, SMASH made immediate sense."*
> **— Tom K., Director, Coastal Building Supplies**

${chromeCTA}

## Related Reading

- [Gmail to Xero: Turn Job Requests Into Invoices Without Typing](/blog/gmail-to-xero-invoice-no-typing)
- [The Gmail to QuickBooks Bridge](/blog/gmail-quickbooks-xero-bridge)
- [Xero Too Complicated for a Sole Trader?](/blog/xero-too-complicated-sole-trader)
- [SMASH Xero Integration](/integrations-xero)
`,
},

// ─── Article 3 ───────────────────────────────────────────────────────────────
{
  slug: 'bulk-goods-wholesaler-quoting-gmail',
  title: 'How Bulk Goods Wholesalers Cut Quote Turnaround From 15 Minutes to 60 Seconds',
  meta_title: 'Bulk Goods Wholesaler Quote Automation in Gmail | SMASH',
  meta_description: "Water tanks, timber, shed kits, sandstone — if you sell configurable bulky goods and price them by email, SMASH eliminates the 5-tab freight-zone calculation and builds the quote in Gmail.",
  excerpt: "For distributors of water tanks, timber, or bulk materials, a single email quote involves Google Maps, a freight grid, a price book, and your accounting software. That's 15 minutes, five tabs, and zero automation. Until now.",
  primary_keyword: 'bulk product distributor quote automation',
  secondary_keywords: ['email to quote automation wholesale', 'water tank supplier quoting software', 'poly water tank quote generator', 'bulky goods freight zone calculator', 'distributor gmail quote tool'],
  author: 'Dan Neale',
  author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman and trade supplier because he was sick of the tab-switching tax every time a job request landed in his inbox.',
  published_at: '2026-05-25T09:00:00.000Z',
  reading_time: 8,
  key_takeaways: [
    'Bulky goods wholesalers cannot use a simple online checkout — every sale requires a custom quote with freight calculations.',
    'The typical manual workflow for a single email RFQ involves five browser tabs and 15 minutes of work.',
    'In B2B supply, the first vendor to send an accurate, priced quote wins the order roughly 60% of the time.',
    'SMASH reads the delivery address from the email, maps it to your regional freight zone SKU, and bundles accessories automatically.',
    'Suitable for water tank manufacturers, shed distributors, sandstone and quarry yards, structural timber merchants, and solar equipment distributors.',
  ],
  faq_data: [
    { question: "Can SMASH handle distance-based freight zone calculations?", answer: "Yes. You can upload your distance-based freight SKUs and zone maps to SMASH. When an email is scanned, the AI reads the delivery address, maps it to the correct regional zone, and adds the appropriate freight line to the quote automatically. No Google Maps tab required." },
    { question: "What industries benefit most from email-to-quote automation?", answer: "Any business selling configurable, high-ticket, or bulky physical goods where pricing can't be fixed on a static e-commerce cart. That includes water tank manufacturers, concrete tank suppliers, garden shed distributors, structural timber merchants, sandstone quarry yards, solar equipment distributors, and container suppliers." },
    { question: "Does SMASH replace our ERP or accounting system?", answer: "No. SMASH sits on top of your existing Xero or QuickBooks setup. It pulls your customer contacts and live SKU catalog into the Gmail sidebar. Once a quote is drafted and sent, the completed record pushes to your ledger with one click. Your accounting and inventory stay synchronised without double-entry." },
    { question: "How does response speed affect our win rate?", answer: "In B2B trade, buyers routinely send identical RFQs to multiple suppliers simultaneously. The first to respond with an accurate, professional quote wins the business roughly 60% of the time. If you're taking 15 minutes per quote and a competitor takes 60 seconds, you're losing orders you've already earned." },
  ],
  content: `For distributors of configurable physical goods — water tanks, structural timber, garden sheds, sandstone, bulk materials — the sales pipeline doesn't work like an online shop. Customers can't add a 10,000-litre poly tank with a Davey pump to a cart and check out. They send you an email.

A real inbound RFQ looks like this:

*"Hi, we need a price on a 10,000L smooth cream poly tank, a Davey pressure pump, and delivery to 142 Boundary Road, Goulburn. Can you get something back to me today?"*

Turning that single email into a professional, margin-protected quote in Xero or QuickBooks® takes five browser tabs and 15 minutes — if your rep is fast.

${eq2}

In B2B supply, the first vendor to reply with an accurate, priced quote wins the order roughly 60% of the time. If you're taking 15 minutes to compile one quote and your competitor takes 60 seconds, you're not just slower — you're losing jobs you've already earned.

## The Five-Tab Sequence

For a water tank yard receiving 30 custom RFQs per day, this is the sequence your sales team runs on every single one:

**Tab 1 — The inbox.** Open the customer's email in Gmail. Copy their delivery address.

**Tab 2 — Google Maps.** Paste the address. Calculate driving distance or locate the freight delivery zone.

**Tab 3 — The price book.** Search through internal sheets or your accounting inventory to find the base tank model, pump options, and accessory bundles.

**Tab 4 — The freight grid.** Cross-reference the driving distance against your zone table to find the correct freight surcharge SKU.

**Tab 5 — The ledger.** Log into QuickBooks® or Xero. Create the estimate. Key in all four lines. Save. Export PDF. Write the covering email. Attach. Send.

| Workflow step | Manual | SMASH |
|---|---|---|
| Read email | Open Gmail | Open Gmail |
| Customer details | Copy-paste | Auto-extracted |
| Freight zone | Open Google Maps, calculate | Auto-mapped from delivery address |
| SKU matching | Browse price book manually | Live ledger catalog match |
| Accessory bundling | Manual selection | AI-assisted grouping |
| Quote generation | Type into QBO/Xero | Auto-drafted in sidebar |
| Total time | **15–20 minutes** | **Under 60 seconds** |

## How SMASH Handles Configurable Bulky Goods

**Upload your freight SKUs and catalog.** Load your regional zone maps, distance-based freight surcharges, accessory bundles, and product catalog into SMASH. You do this once. After that, it's automatic.

**Open the email, click Scan.** SMASH reads the inquiry. It extracts the customer's name, delivery address, and requested items. It maps the suburb to your freight zone, identifies the correct base product, and bundles the required accessories.

**Review the draft quote.** Check the line items. Adjust margins if needed. Everything is editable before you send.

**Push to your ledger.** One click exports the completed quote to QuickBooks® or Xero. The record is correctly categorised, taxed, and attached to the customer's profile.

Start to finish: under 60 seconds. You never left Gmail.

## What Bulky Goods Suppliers Are Saying

> *"Our reps receive dozens of custom quote requests for rainwater tanks every day. Matching the accessories and freight zones used to lock us in spreadsheets for hours. SMASH prices and sends an accurate branded PDF in under a minute from inside Gmail. It has completely removed the back-office bottleneck."*
> **— Marcus L., Sales Director, Rapid Plas Group**

> *"Selling bulk sandstone and retaining wall blocks means freight is always variable. Builders email us, and by the time we calculated crane delivery surcharges, competitors had already replied. SMASH auto-parses the suburb, maps the freight, and drafts the Xero quote in 45 seconds."*
> **— David K., Operations Manager, Sandstone World**

> *"The first to quote wins. We proved that internally — we tracked our conversion rate before and after SMASH and it went up by 23 points. Pure response speed."*
> **— Rachel N., Sales Coordinator, Queensland Shed Direct**

${chromeCTA}

## Related Reading

- [How to Create QuickBooks Estimates From Gmail](/blog/quickbooks-estimates-from-gmail)
- [The Fastest Xero Quote Builder for Gmail](/blog/xero-quote-builder-gmail-extension)
- [Garden Shed and Kit Barn Quoting From Gmail](/blog/garden-shed-kit-barn-quoting-gmail)
- [SMASH Chrome Extension](/chrome-extension)
`,
},

// ─── Article 4 ───────────────────────────────────────────────────────────────
{
  slug: 'service-trade-invoice-gmail-sidebar',
  title: 'The Second Shift: How Service Professionals Kill the Sunday Night Admin Pile',
  meta_title: 'End the Sunday Night Admin: Service Pros Invoice From Gmail | SMASH',
  meta_description: "Plumbers, cleaners, and photographers spend 5–10 unpaid hours a week on manual invoicing. SMASH's voice-to-invoice and milestone deposit tools cut that to minutes inside Gmail.",
  excerpt: "For self-employed service pros, the physical work ends at 5pm. The admin work starts at 9pm. Here's how to close that second shift without switching software.",
  primary_keyword: 'best invoicing app for small trade business',
  secondary_keywords: ['how to send invoice from gmail', 'plumber invoicing xero gmail', 'commercial cleaning quoting email', 'photographer milestone invoice', 'voice to invoice service professional'],
  author: 'Dan Neale',
  author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman and trade supplier because he was sick of the tab-switching tax every time a job request landed in his inbox.',
  published_at: '2026-05-25T10:00:00.000Z',
  reading_time: 7,
  key_takeaways: [
    'Service business owners spend up to 10 unpaid hours per week on manual admin — quoting, chasing invoices, re-entering data.',
    "You don't need a heavy, expensive all-in-one field service platform. You need your existing Xero or QuickBooks to work faster where you already communicate.",
    'SMASH voice-to-invoice lets you dictate job details in 30 seconds and get a priced, GST-ready invoice without touching a keyboard.',
    'The milestone deposit split tool generates a 50% retainer invoice from any preset service package in one click.',
    'Free to install. No subscription required for the first 5 invoices per month.',
  ],
  faq_data: [
    { question: "Is my voice data stored anywhere?", answer: "No. SMASH uses speech-to-text processing to generate text on-screen, but audio files are not stored, retained, or sold. Your recording exists only within your secure browser session for the duration of the transcription." },
    { question: "How does the milestone deposit split work for photographers and studios?", answer: "In the SMASH sidebar in Gmail, select your pre-loaded Xero or QuickBooks service package (e.g., 'Premium Wedding Package'). Click Split Invoice, choose your deposit percentage (e.g., 50%), and SMASH generates the deposit invoice and drafts a reply email with a Stripe payment link. The client pays the retainer and the balance invoice is created automatically when the job is complete." },
    { question: "Can I use SMASH without Xero or QuickBooks?", answer: "Yes. SMASH runs as a standalone invoice and quote generator. You can create, download, and track branded PDF invoices and estimates independently. There's also an option to sync records to Google Sheets. Xero and QuickBooks sync are available on paid plans." },
    { question: "What makes SMASH different from Jobber or simPRO?", answer: "Those platforms are full-stack field service tools designed for multi-person crews — they include scheduling, dispatch, job tracking, client portals, and more. For a solo operator or 1–5 person team who already uses Xero or QuickBooks, that level of complexity is overkill and expensive. SMASH does one thing: turns a Gmail email or a voice description into a professional, ledger-synced invoice in under 60 seconds. That's it. No new platform to learn." },
  ],
  content: `For self-employed plumbers, electricians, commercial cleaners, and portrait photographers, the hardest part of the job isn't on-site. It's the unpaid second shift.

Research on trade and service business owners consistently shows the same pattern:

- **72%** spend significant time chasing unpaid invoices
- **68%** lose hours to manual scheduling and rescheduling
- **61%** fall behind answering quote enquiries
- **54%** re-enter the same data across multiple systems

The software industry's response has been to sell you a heavy, expensive field service management platform — Jobber, simPRO, ServiceM8. These tools do a lot. But for a solo operator or a small crew, they're overkill. You don't need dispatch management and crew tracking. You need to send a quote in two minutes and go to bed.

You're already at your desk. You're already in Gmail. The accounting software is Xero or QuickBooks. The only missing piece is a way to get from an inbox message to a sent invoice without opening four additional windows and typing out line items from memory at 9pm.

## The Context-Switching Cost

The administrative friction for a typical service pro can be modelled simply:

${equation('Admin Friction Equation', 'F = D × C', 'Where D = daily email volume requiring quotes, C = cost of context-switching (opening extra tabs, logging into QBO/Xero, copying details, re-entering data)')}

When the context-switching cost $C$ drops to zero — because everything lives in your Gmail sidebar — the evening admin pile disappears. Or at least, it shrinks from an hour to five minutes.

| Task | Manual desktop | SMASH Gmail sidebar |
|---|---|---|
| Describe the job | Type every line item | Talk for 30 seconds |
| Price the work | Check rate sheet, calculate | Matched from your catalog |
| GST/tax | Calculate manually | Done automatically |
| Send to client | Compose email, attach PDF | Drop into reply or send portal link |
| Sync to books | Log into Xero/QBO, enter again | One-click export |
| Chase unpaid quotes | Write follow-up manually | Automated chaser runs for you |

## Voice to Invoice: Say the Job, Send the Bill

The voice feature is what most service pros end up using every day.

Open Gmail. Pull up the job request email. Press the microphone in the SMASH sidebar. Describe the job naturally — *"Replace kitchen sink, two hours labour, 50 mil PVC pipe, call-out fee"* — and press stop. SMASH transcribes it, matches each item to your pricing catalog, and builds the invoice. You review it, drop it into the reply, and send. The whole thing takes under 90 seconds.

You don't need to remember what copper pipe costs. You don't need to calculate GST. You don't need to find the customer's email address. SMASH already has all of it.

## Milestone Deposits for Photographers and Studios

For photographers, commercial cleaners, and studio operators who charge in stages, splitting invoices manually inside Xero or QuickBooks is fiddly. You have to create two separate invoice records, link them to the same job, manage the payment status on both, and track which deposit has or hasn't been paid.

SMASH's Split Invoice feature handles this in one click. Select your service package, choose the deposit percentage (typically 50%), and SMASH generates a branded deposit invoice with a Stripe payment link and drafts the client email. The balance invoice is held in your ledger, ready to send when the job is done.

## What Service Pros Are Saying

> *"I used to dread the evening admin shift. I'd open the laptop and type out every fitting, length of pipe, and hour of labour. Now I pull over, tap the microphone in Gmail, and dictate the job. The invoice goes out before I've driven home."*
> **— Peter H., Owner, Peter Hounsell Plumbing**

> *"I do commercial cleaning and I was spending half my Sundays on quotes and invoices. Between the voice feature and the automated follow-ups, I've got that time back."*
> **— Melissa C., Director, Bright Space Commercial Cleaning**

> *"The deposit split feature is perfect for wedding packages. Client gets a retainer invoice the same day they enquire. That used to take me 20 minutes to set up properly in Xero."*
> **— Jamie O., Lead Photographer, Jamie O Photography**

${chromeCTA}

## Related Reading

- [Turn a Gmail Email Into a Sent Invoice in 20 Seconds](/blog/gmail-email-to-invoice-20-seconds)
- [Voice to Estimate: Build Bids Without a Pen](/blog/voice-to-estimate-build-bids-without-pen)
- [Stop Juggling Tabs: The QuickBooks Sidebar for Gmail](/blog/quickbooks-gmail-sidebar-tab-switching)
- [Who Is SMASH Invoices For?](/blog/who-is-smash-invoices-for)
`,
},

// ─── Article 5 ───────────────────────────────────────────────────────────────
{
  slug: 'garden-shed-kit-barn-quoting-gmail',
  title: 'How Garden Shed and Kit Barn Distributors Automate Wind-Region Quoting in Gmail',
  meta_title: 'Garden Shed & Kit Barn Quote Automation in Gmail | SMASH',
  meta_description: "Shed and carport distributors can't use a simple price list — wind regions, freight zones, and kit configurations make every quote custom. SMASH automates this inside Gmail.",
  excerpt: "Every shed quote requires wind-region compliance, flatpack freight, and custom accessory configuration. That's 15–30 minutes of work per email. Here's how to cut it to 60 seconds.",
  primary_keyword: 'garden shed quote automation software',
  secondary_keywords: ['carport quote generator', 'kit-set barn pricing tool', 'flatpack shed freight calculator', 'colorbond shed quoting gmail', 'wind region compliance quoting'],
  author: 'Dan Neale',
  author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman and trade supplier because he was sick of the tab-switching tax every time a job request landed in his inbox.',
  published_at: '2026-05-25T11:00:00.000Z',
  reading_time: 7,
  key_takeaways: [
    'Shed and carport distributors cannot use static pricing — every quote requires wind-region compliance, custom accessories, and distance-based freight.',
    'The pricing formula for a structural kit-set: Base Frame × Wind Multiplier + Accessory SKUs + Flatpack Freight.',
    'SMASH maps the customer\'s suburb to your wind region and freight zone automatically from the email.',
    'Kit configuration (doors, windows, frame upgrades) is handled via AI-assisted SKU bundling in the sidebar.',
    'Customers can digitally sign and approve the quote from a mobile-responsive portal link — no printing required.',
  ],
  faq_data: [
    { question: "How does the multi-location inventory check work?", answer: "If your shed business operates from multiple depots, SMASH can read the delivery address, identify the closest warehouse, and cross-reference its stock levels before generating the quote. This prevents reps from quoting materials that are out of stock locally, reducing delays and the need for follow-up corrections." },
    { question: "Can customers digitally sign and approve their quote?", answer: "Yes. When you send a drafted quote through SMASH, the client receives a secure, mobile-responsive link. They can view the itemised breakdown, select optional add-ons, and sign their acceptance from their phone. Once signed, SMASH converts the quote to a draft invoice in your ledger and notifies your team." },
    { question: "How are wind-region compliance surcharges handled?", answer: "You upload your wind-region multipliers and zone maps to SMASH as SKU data. When SMASH reads the delivery suburb from an incoming email, it cross-references it against your zone data and applies the correct frame compliance surcharge to the base product price automatically." },
    { question: "Can SMASH handle 20+ line items for a full kit configuration?", answer: "Yes. Structural kit builds often include base frames, flooring options, door configurations, window add-ons, bracing kits, and anchor systems. You can save these as a configurable bundle template in SMASH. The AI builds from your template based on the customer's specified size and options, then lets you adjust individual lines before sending." },
  ],
  content: `For distributors of Colorbond steel garden sheds, flatpack garages, agricultural barns, and carports, quoting is never straightforward. Every sale involves three variables that change with each customer:

1. **Structural compliance** — wind-region surcharges vary by suburb
2. **Configuration** — doors, windows, frame upgrades, anchoring systems
3. **Freight** — flatbed delivery costs vary by distance

You cannot put a fixed price on a 6×3 shed and take orders through a checkout page. Every customer needs a custom quote. And for a distributor receiving 20 to 30 of these enquiries per day, the manual process is a serious bottleneck.

The pricing formula for a structural kit-set:

${equation('Shed Pricing Formula', 'Price = (Base Frame × Wind Multiplier) + Σ Accessory SKUs + Flatpack Freight', 'Wind Multiplier varies by regional compliance zone (N, C, D); Flatpack Freight varies by delivery distance and carrier zone')}

Calculating this manually for each email — across spreadsheets, freight tables, and your accounting ledger — takes 15 to 30 minutes per quote. SMASH brings that down to 60 seconds.

## The Manual Quoting Sequence for Shed Distributors

A typical enquiry: *"Hi, I'm looking at a 6×3 Colorbond garden shed in Rivergum, with the extra wide door option and delivery to our property in Orange, NSW."*

To respond with an accurate price, your rep needs to:

1. Look up the correct base frame SKU for a 6×3 in Rivergum finish
2. Identify the Orange, NSW wind region (likely N or C — check the compliance table)
3. Apply the wind compliance multiplier to the base frame price
4. Add the wide-door accessory SKU
5. Calculate flatpack delivery from the nearest depot to Orange
6. Build the quote in Xero or QuickBooks, generate the PDF, email it

| Workflow step | Manual | SMASH |
|---|---|---|
| Wind region check | Manual table lookup | Auto-mapped from suburb |
| Frame SKU selection | Browse price book | Auto-matched |
| Accessory configuration | Manual line-by-line | AI-assisted bundling |
| Freight calculation | Cross-reference zone grid | Suburb-to-SKU automated |
| Quote generation | Build in ledger, export PDF | Draft in sidebar in 60s |
| Customer approval | Email, print, hope | Digital sign-off via portal link |

## What Shed Distributors Are Saying

> *"Before SMASH, our sales reps spent half their day copy-pasting steel specs and delivery fees. Now we click Scan and the extension compiles a wind-region-accurate shed quote in 30 seconds. Our sales cycle has shortened considerably."*
> **— Travis B., Director, Colorbond Kit Sheds Australia**

> *"The digital approval link is what our customers prefer now anyway. They get the quote, they sign off on their phone, we start the order. The whole process is cleaner than it used to be."*
> **— Gina P., Sales Manager, ShedPro Distributors**

> *"We have three depots. SMASH picks the closest one based on the delivery address and checks stock before quoting. We were losing jobs because of backorder surprises. That's stopped."*
> **— Connor T., Operations Manager, Pacific Shed Group**

${chromeCTA}

## Related Reading

- [How Bulk Goods Wholesalers Cut Quote Turnaround to 60 Seconds](/blog/bulk-goods-wholesaler-quoting-gmail)
- [Shipping Container Quote Builder in Gmail](/blog/shipping-container-quote-builder-gmail)
- [SMASH Chrome Extension](/chrome-extension)
`,
},

// ─── Article 6 ───────────────────────────────────────────────────────────────
{
  slug: 'fencing-gate-balustrade-quoting-gmail',
  title: 'How Fencing and Balustrade Installers Automate Linear Material Take-Offs in Gmail',
  meta_title: 'Fencing & Balustrade Quote Automation From Gmail | SMASH',
  meta_description: "Stop hand-calculating posts, panels, and hardware kits from linear measurements. SMASH reads the dimensions from customer emails and builds the full material take-off in Gmail.",
  excerpt: "A customer emails their fence dimensions. You need post counts, panel quantities, hardware kits, and installation hours — all priced and formatted before you reply. Here's how to do it in 60 seconds.",
  primary_keyword: 'fence quoting software from email',
  secondary_keywords: ['balustrade estimate generator', 'automatic gate quote builder', 'linear meter takeoff tool', 'fencing invoice automation gmail', 'post and panel count calculator'],
  author: 'Dan Neale',
  author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman and trade supplier because he was sick of the tab-switching tax every time a job request landed in his inbox.',
  published_at: '2026-05-25T12:00:00.000Z',
  reading_time: 6,
  key_takeaways: [
    'Fencing quotes require converting linear dimensions into post counts, panel quantities, hardware kits, and labour — all from a rough customer email.',
    'SMASH reads linear dimensions from the email and calculates material requirements automatically against your pricing catalog.',
    'Material grade toggles (timber vs. aluminium vs. treated pine) adjust pricing across all line items in real time.',
    'Integrated payment portal accepts deposit via Stripe or PayPal — reconciles automatically in Xero or QuickBooks.',
    'The quote can be sent and digitally signed without the customer needing to download any software.',
  ],
  faq_data: [
    { question: "Can SMASH handle custom pricing for different material grades?", answer: "Yes. If you offer different material grades (Feature Grade timber, Standard Treated Pine, Premium Aluminium Slats), you can save these as distinct SKU profiles. When building a quote, you toggle between grades in the sidebar and the extension adjusts all material and labour lines in real time." },
    { question: "How does the payment deposit work?", answer: "SMASH includes an integrated online payment portal via Stripe and PayPal. When a customer opens their quote link, they can accept it and pay their deposit from their phone. The payment is deposited to your bank account and automatically reconciled in Xero or QuickBooks." },
    { question: "What if the customer sends rough measurements, not exact specs?", answer: "SMASH uses your standard panel span width to calculate post counts from whatever linear dimensions are in the email. If the measurements are rough or approximate, the generated quote will note them as estimates. You can adjust individual quantities in the sidebar before sending." },
    { question: "Does SMASH handle gate and hardware calculations?", answer: "Yes. Gates are included in the post count calculation. Hardware kits (hinge sets, latch assemblies, post caps) can be saved as add-on SKUs that attach automatically to gate line items. The full material list — panels, posts, gates, hardware — is generated from a single linear dimension input." },
  ],
  content: `Fencing installers and balustrade fabricators work from dimensions. A homeowner or builder emails rough measurements — *"I need a quote for 28 linear metres of timber paling fence, one garden gate, and installation"* — and from that, you have to calculate post counts, panel quantities, hardware kits, and labour hours before you can price anything.

The required calculations:

${equation('Post Count Formula', 'Posts = ⌈ L_fence ÷ S_span ⌉ + Gates_count', 'Where L_fence = total fence length (metres), S_span = standard panel span, Gates_count = number of gates')}

${equation('Material Cost Formula', 'Materials = (L_fence × P_panel) + (Posts × P_post) + Hardware_kits', 'Where P_panel, P_post, and Hardware_kits are your ledger SKU costs')}

Running these calculations manually on a laptop, checking your price sheets, and building the quote in Xero or QuickBooks takes 20 to 30 minutes per enquiry. For an installer receiving 5 to 10 quote requests a day, that's most of the working day spent on paperwork.

## The Manual Take-Off Sequence

**What a customer emails:** *"28 linear metres, timber paling, one 1.2m garden gate, standard installation."*

**What you need to calculate:**

- Post count: 28m ÷ 2.4m span = 12 posts, plus 2 gate posts = 14 total
- Panel count: 12 bays × 6 palings per bay (standard) = 72 palings
- Gate hardware: 1 hinge set, 1 latch, 1 gate closer
- Labour: installation hours at your standard rate

**What you then have to do:** Find each SKU in your price book, enter them into Xero or QuickBooks, calculate the total, add GST, export a PDF, write a reply email, attach it, send.

| Workflow step | Manual take-off | SMASH |
|---|---|---|
| Linear dimension input | Calculator + spreadsheet | AI reads from email |
| Post count | Manual calculation | Automatic |
| Panel/paling count | Manual calculation | Automatic |
| Hardware bundling | Check price book manually | Automated SKU grouping |
| Labour estimate | Estimate by hand | Voice dictation or preset rate |
| Quote total | Manual addition + GST | Calculated in real time |
| Send | Export PDF, write email | One-click reply or portal link |

## Grade Toggling

If you offer multiple material grades — Feature Grade hardwood, Standard Treated Pine, Premium Aluminium — each has its own pricing across panels, posts, and hardware. Switching a customer quote from one grade to another in a standard ledger means re-selecting every single line item.

In SMASH, you select the grade from a dropdown in the sidebar. All line items update automatically. You can show a customer two options — timber vs. aluminium, for example — as separate draft quotes in the time it used to take to build one.

## What Fencing and Balustrade Contractors Are Saying

> *"I used to spend four hours every Sunday doing material take-offs from emails and plans. I open the client's email, click Scan, and it calculates posts, panels, and gate kits, then writes the quote in Xero. 30 seconds."*
> **— Mitchell R., Owner, Victoria Balustrade & Gates**

> *"The payment deposit link is what I wanted for years. They see the quote, they tap to approve, they pay the deposit. I don't chase anyone anymore."*
> **— Karen L., Director, Northern Rivers Fencing Co.**

> *"When I need to show a timber option and an aluminium option, I just toggle the grade and SMASH reprices everything. Used to take me 15 minutes to do both quotes."*
> **— Ben O., Fencing Contractor, Adelaide**

${chromeCTA}

## Related Reading

- [The Service Professional Admin Wall — And How to Break It](/blog/service-trade-invoice-gmail-sidebar)
- [Voice to Estimate: Build Bids Without a Pen](/blog/voice-to-estimate-build-bids-without-pen)
- [SMASH Chrome Extension](/chrome-extension)
`,
},

// ─── Article 7 ───────────────────────────────────────────────────────────────
{
  slug: 'turf-soil-landscaping-quote-automation',
  title: 'How Turf and Landscaping Supply Yards Automate Bulk Quotes From Gmail',
  meta_title: 'Turf & Landscaping Supply Quote Automation in Gmail | SMASH',
  meta_description: "Selling bulk turf, soil, or gravel means calculating pallet weights, cubic volumes, and crane delivery zones before you can price anything. SMASH does this automatically from the email.",
  excerpt: "Turf and soil suppliers can't use fixed pricing — materials are heavy, perishable, and delivery costs vary by zone and truck type. Every quote is a custom calculation. Here's how to automate it.",
  primary_keyword: 'landscaping supplier quote generator',
  secondary_keywords: ['turf quote builder automation', 'bulk soil freight calculator', 'quarry material take-off software', 'landscaping email to quote', 'crane delivery surcharge calculator'],
  author: 'Dan Neale',
  author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman and trade supplier because he was sick of the tab-switching tax every time a job request landed in his inbox.',
  published_at: '2026-05-25T13:00:00.000Z',
  reading_time: 6,
  key_takeaways: [
    'Bulk landscaping materials require pallet weight calculations, cubic volume conversions, and delivery zone matching before pricing.',
    'SMASH calculates material weight loads and maps the delivery suburb to your correct truck zone SKU automatically.',
    'Wholesale trade pricing, commercial contractor pricing, and retail pricing are applied per customer automatically based on contact profile.',
    'PDF bill-of-materials attachments from landscape designers are parsed by SMASH and mapped to your catalog.',
    'Response speed in landscaping supply directly determines who wins the job — typically the first to reply.',
  ],
  faq_data: [
    { question: "Can SMASH handle variable wholesale vs. retail pricing tiers?", answer: "Yes. If you have pre-loaded different pricing tiers (Retail, Commercial Trade, Civil Contractor discounts) into your QuickBooks or Xero ledger, SMASH applies the correct pricing automatically based on the customer's matched contact profile in the sidebar." },
    { question: "How does the multi-page PDF take-off feature work?", answer: "If a landscape designer or builder emails you a detailed, multi-page PDF bill of materials, click Scan Email. SMASH's document scanner parses the PDF, extracts material lines and quantities, and maps them to your live ledger products automatically." },
    { question: "How are crane truck vs. tipper delivery zones handled?", answer: "You upload your delivery zone grids for each truck type to SMASH. When an email is scanned, the suburb is mapped against your crane zone grid and tipper zone grid, and the appropriate delivery surcharge SKU is applied to the quote. If the order is below a minimum crane-load threshold, SMASH can flag it for manual review." },
    { question: "Can I quote sod and soil in the same order?", answer: "Yes. SMASH handles mixed orders within a single quote. Turf area (calculated in square metres from pallets), soil volume (converted to tonnes using bulk density), and gravel by weight can all appear as separate line items in the same draft quote." },
  ],
  content: `For turf farms, premium soil suppliers, and quarry gravel yards, the pricing problem is physical. Turf is perishable — it needs to be cut, palletted, and delivered on a schedule. Soil and gravel are heavy — delivery costs depend on truck type, payload capacity, and distance. None of this can go on a static price list.

A typical RFQ from a landscape contractor looks like this:

*"Hi, need a price on 300m² of Sir Walter DNA certified buffalo turf, 5 cubic metres of premium garden soil, and delivery to a site in Cranbourne North. When's your earliest availability?"*

To price this accurately, you need to convert the turf area to pallet count, calculate the soil weight in tonnes, identify the delivery zone for Cranbourne North, and apply the correct truck surcharge SKU.

${equation('Pallet Count Formula', 'Pallets = ⌈ Turf_area ÷ M_pallet ⌉', 'Where Turf_area = square metres ordered, M_pallet = pallet capacity (typically 50–60 m²)')}

${equation('Total Delivery Weight', 'Weight_tonnes = (Pallets × W_pallet) + (V_soil × D_soil)', 'Where W_pallet = pallet weight, V_soil = cubic metres of soil, D_soil = loose bulk density')}

Doing this manually for every email inquiry — across spreadsheets, zone tables, and your accounting ledger — takes 15 to 20 minutes. For a yard receiving 20+ requests per day, that's a full-time admin role just for quoting.

## The Quoting Bottleneck for Landscaping Yards

| Workflow step | Manual calculation | SMASH |
|---|---|---|
| Material volume/weight | Calculator + spreadsheet | Automated formula |
| Pallet count | Manual division | Automatic |
| Delivery zone | Cross-reference truck grid | Suburb-to-SKU auto-lookup |
| Product bundling | Key lines separately | AI email-to-text matching |
| Pricing tier | Check customer record manually | Auto-matched from contact profile |
| Quote generation | Build in ledger | Draft in sidebar in 60s |

## Handling Mixed Orders and Trade Pricing

Most landscaping supply yards have multiple pricing tiers: retail customers pay one rate, commercial landscapers pay another, civil contractors pay a third. Identifying which customer gets which rate — and applying it consistently across every quote — requires checking the contact record every time.

SMASH reads the customer profile from your Xero or QuickBooks contact list when the email is scanned. The correct pricing tier is applied automatically, without your rep having to think about it.

For mixed orders (turf plus soil plus gravel in the same delivery), SMASH handles each material type on separate line items with appropriate unit conversions, all in the same quote draft.

## PDF Bill-of-Materials Parsing

When a landscape architect or design firm sends a multi-page PDF bill of materials, SMASH's document scanner extracts the line items, maps them to your live catalog, and builds the draft quote from the PDF directly. No copy-paste. No re-entry.

## What Landscaping Yards Are Saying

> *"Our dispatch team was drowning in quote emails. Matching the right delivery zones and pallet counts used to lock us in spreadsheets. SMASH builds an accurate, branded quote in under a minute from inside Gmail."*
> **— Marcus L., Dispatch Manager, Cranbourne Turf & Soil**

> *"We do a lot of trade accounts with different pricing. SMASH knows who's a retail customer and who's a trade account. The right prices come out automatically."*
> **— Anita R., Office Manager, Premium Garden Supplies**

> *"The PDF scanning is the feature our commercial clients love. They send a designed planting list and I have a quote back to them before they've closed the file."*
> **— Phil D., Sales Lead, Earth & Stone Landscapes**

${chromeCTA}

## Related Reading

- [How Bulk Goods Wholesalers Cut Quote Turnaround to 60 Seconds](/blog/bulk-goods-wholesaler-quoting-gmail)
- [The Fastest Xero Quote Builder for Gmail](/blog/xero-quote-builder-gmail-extension)
- [SMASH Chrome Extension](/chrome-extension)
`,
},

// ─── Article 8 ───────────────────────────────────────────────────────────────
{
  slug: 'it-reseller-msp-quote-automation-gmail',
  title: 'How IT Resellers and MSPs Automate Hardware Quotes From Gmail',
  meta_title: 'MSP & IT Reseller Quote Automation in Gmail | SMASH',
  meta_description: "Stop manually cross-referencing distributor pricing sheets to calculate markup on every hardware request. SMASH reads the email, calculates your margins, and builds the quote in Gmail.",
  excerpt: "A client emails asking for a MacBook Pro, a 4K monitor, and setup labour. Your rep opens four distributor spreadsheets, calculates markup, and builds the quote from scratch. Here's how to cut that to 60 seconds.",
  primary_keyword: 'msp quotation tool gmail',
  secondary_keywords: ['it reseller quote builder', 'distributor markup calculator', 'managed service provider billing software', 'hardware quote gmail automation', 'quickbooks xero msp quoting'],
  author: 'Dan Neale',
  author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman and trade supplier because he was sick of the tab-switching tax every time a job request landed in his inbox.',
  published_at: '2026-05-25T14:00:00.000Z',
  reading_time: 7,
  key_takeaways: [
    'IT reseller and MSP quotes involve daily-changing distributor costs, custom margin calculations, and mixed hardware-plus-labour line items.',
    'SMASH reads unstructured hardware request emails and maps components to your pricing catalog with margin calculations applied.',
    'The adjustable margin slider lets you discount individual items in-quote without losing visibility of gross profit.',
    'Customer-specific contract pricing (corporate account rates) applies automatically based on the sender\'s contact profile.',
    'Voice-to-invoice captures ad-hoc technical labour hours from phone-based job descriptions.',
  ],
  faq_data: [
    { question: "Can SMASH handle customer-specific pricing contracts?", answer: "Yes. If you have pre-configured pricing tiers or contract discounts for specific corporate clients in QuickBooks or Xero, SMASH applies the correct rates automatically based on the customer's matched contact profile in the Gmail sidebar." },
    { question: "How does the adjustable margin percentage feature work?", answer: "The margin slider in the SMASH sidebar lets you adjust the target gross margin on individual line items without having to recalculate the sell price manually. If you need to discount a specific item to close a deal, move the slider and the sell price updates in real time. Your overall gross profit is recalculated and displayed as you adjust." },
    { question: "How do I keep distributor pricing current?", answer: "You can upload distributor pricing sheets as CSV files to SMASH and refresh them whenever pricing updates. SMASH also supports direct connections to accounting catalogs in Xero and QuickBooks, so if you maintain current pricing in your ledger, SMASH pulls it live." },
    { question: "Can SMASH handle professional services billing alongside hardware?", answer: "Yes. Technical setup hours, deployment labour, and managed service components can be added via voice dictation or preset service templates. Hardware and services appear as separate line items in the same quote, with different tax treatments if required." },
  ],
  content: `For IT Resellers and Managed Service Providers, every inbound hardware request is a small financial calculation exercise. The client emails something like:

*"Hi, we've got a new engineer starting next month. Can you price up a MacBook Pro 16-inch, a 4K monitor, a wireless keyboard and mouse, and setup and onboarding labour? We need it by end of week."*

Your rep now has to:
1. Open the Dicker Data, Synnex, or Ingram Micro pricing sheet for current week's costs
2. Calculate the sell price at your target margin for each component
3. Estimate setup and onboarding hours at your billable rate
4. Build the quote in QuickBooks or Xero
5. Generate the PDF, write the reply, send it

The pricing calculation:

${equation('Hardware Sell Price Formula', 'Sell_Price = Distributor_Cost ÷ (1 − Margin_target)', 'Where Margin_target = target gross margin (e.g., 0.15 for 15%)')}

${equation('Quote Total Formula', 'Quote_Total = Σ Sell_Price_k + (Labour_hours × Billable_rate)', 'Where k = each hardware component, Billable_rate = your hourly technical rate')}

For a busy MSP handling 15 to 20 hardware requests per week, manually running this calculation for each email consumes a meaningful portion of a sales coordinator's day.

## The Distributor Pricing Problem

Distributor costs change frequently. A MacBook Pro that cost $2,800 from Dicker Data this week might be $2,850 next week. If your reps are working from a pricing spreadsheet that's a week old, your margins are wrong before you've even typed the quote.

SMASH pulls pricing from your live Xero or QuickBooks product catalog. If you maintain current distributor costs in your ledger (which most MSPs do for inventory management), SMASH always quotes from current pricing.

You can also upload updated distributor CSV files directly when pricing changes, and SMASH refreshes the relevant SKUs in your catalog.

## Margin Transparency in the Quote

The adjustable margin slider shows your target gross profit on each line item in real time. If a client is pushing back on the price and you want to see the impact of a discount before agreeing to it, you move the slider — the sell price updates, and you can see immediately whether you're still above your minimum acceptable margin.

This prevents the common scenario where a sales rep discounts a deal verbally without doing the maths, and only discovers the margin problem after the invoice is sent.

| Feature | Manual MSP workflow | SMASH |
|---|---|---|
| Component pricing | Open distributor spreadsheet | Live catalog lookup |
| Margin calculation | Manual formula per item | Auto-calculated with slider |
| Labour billing | Estimate hours by hand | Voice dictation or preset |
| Corporate contract rates | Check account record manually | Auto-applied from contact profile |
| QuickBooks/Xero sync | Re-enter quote details | One-click export |
| Quote delivery | Attach PDF, write email | Drop into reply or portal link |

## What IT Resellers and MSPs Are Saying

> *"Our reps were opening four different price sheets just to compile one hardware quote. SMASH reads the email, matches the components to our catalog, calculates the margin, and builds the quote. That's the entire job done."*
> **— Rohan T., General Manager, SDS Tech Solutions**

> *"The margin slider is the feature I use every day. I can see exactly where I am on gross profit before I commit to a price. No more surprises after the invoice."*
> **— Angela K., Sales Manager, Netwise IT**

> *"Corporate clients have specific contract rates. SMASH knows which customer gets which pricing and applies it automatically. We used to have to check this manually every time."*
> **— Chris V., Director, CloudFirst MSP**

${chromeCTA}

## Related Reading

- [How to Create QuickBooks Estimates From Gmail](/blog/quickbooks-estimates-from-gmail)
- [The Fastest Xero Quote Builder for Gmail](/blog/xero-quote-builder-gmail-extension)
- [SMASH Chrome Extension](/chrome-extension)
`,
},

// ─── Article 9 ───────────────────────────────────────────────────────────────
{
  slug: 'print-signage-custom-quote-gmail',
  title: 'How Print and Signage Shops Automate Custom Quote Generation From Gmail',
  meta_title: 'Print Shop & Signage Quote Automation From Gmail | SMASH',
  meta_description: "Custom print and signage quotes require area calculations, substrate pricing, and finishing surcharges on every job. SMASH reads the dimensions from the email and builds the quote automatically.",
  excerpt: "Every banner, sign, or print job is a custom calculation — area × substrate rate + finishing. If you're calculating this manually for every email enquiry, SMASH can automate it inside Gmail.",
  primary_keyword: 'print shop quotation software',
  secondary_keywords: ['wide-format print quote builder', 'custom signage cost estimator', 'apparel embroidery quoting tool', 'gmail print shop automation', 'substrate pricing calculator'],
  author: 'Dan Neale',
  author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman and trade supplier because he was sick of the tab-switching tax every time a job request landed in his inbox.',
  published_at: '2026-05-25T15:00:00.000Z',
  reading_time: 6,
  key_takeaways: [
    'Custom print and signage shops cannot use static pricing — every project requires area calculations, substrate selection, and finishing surcharges.',
    'SMASH reads width and height dimensions from customer emails and calculates print area automatically.',
    'Substrate pricing (vinyl, corflute, ACM, canvas) and finishing add-ons (grommets, hemming, laminating) map to your Xero/QuickBooks catalog.',
    'Volume-based discount tiers apply automatically for high-run commercial clients.',
    'Multi-page PDF artwork briefs are scanned and line items extracted without copy-pasting.',
  ],
  faq_data: [
    { question: "Can SMASH handle volume price breaks for high-run orders?", answer: "Yes. If you have configured volume-based discounts or tiered pricing for specific corporate clients in your Xero or QuickBooks ledger, SMASH applies the correct rates based on the customer's matched contact profile and the quantities in the order." },
    { question: "How does the multi-page PDF artwork brief parsing work?", answer: "If a commercial client emails a detailed, multi-page PDF artwork specification or print brief, click Scan Email. SMASH's document scanner extracts the material specifications, dimensions, quantities, and finish requirements, and maps them to your live ledger products. No manual copy-pasting." },
    { question: "Does SMASH handle apparel embroidery and screen printing?", answer: "Yes. Embroidery and screen printing quotes typically involve stitch count (for embroidery), print count and colour separations (for screen printing), and garment unit pricing. You can save your pricing structure for these job types as templates in SMASH and apply them from an email description." },
    { question: "How do grommets, hemming, and laminating surcharges work?", answer: "Finishing options are saved as add-on SKUs in your SMASH catalog. When you're building a print quote, you select the finishing requirements and each add-on's cost is added to the quote automatically. For customers who regularly request the same finish, you can save it as a default per-product setting." },
  ],
  content: `For wide-format digital printers, custom sign makers, and apparel embroidery shops, every project is priced from scratch. You can't list "banner" at a fixed price on a website — the price depends on width, height, substrate, and what finishing is required.

A typical enquiry:

*"Hi, can you quote on a 3×1.5m vinyl banner in full colour, with hem and grommets, for an outdoor event next month? Also need 20 corflute A-frame signs (600×450mm, double-sided)."*

To price this accurately:

${equation('Print Area Formula', 'Area = W × H', 'Where W = width (metres), H = height (metres)')}

${equation('Print Cost Formula', 'Cost = (Area × R_substrate) + Labour_finishing', 'Where R_substrate = billing rate per m² for selected material, Labour_finishing = hemming, grommet, or laminate surcharge')}

For the banner: 3 × 1.5 = 4.5m² × vinyl rate + hem + grommets × 4.
For the A-frames: 20 units × (0.6 × 0.45) = 5.4m² corflute × double-sided rate.

Running these calculations manually for every email enquiry — checking substrate price sheets, totalling finishing options, building the quote in Xero or QuickBooks, exporting the PDF, writing the reply — takes 15 to 20 minutes per job.

## The Manual Print Quoting Sequence

| Step | Manual | SMASH |
|---|---|---|
| Area calculation | Calculator + spreadsheet | Auto-parsed from email dimensions |
| Substrate pricing | Check price sheet | Live Xero/QuickBooks catalog match |
| Finishing surcharges | Add grommets/hems line-by-line | Automated accessory SKU bundling |
| Volume discounts | Check customer account manually | Auto-applied from contact profile |
| Quote assembly | Build in ledger | Draft in sidebar in 60s |
| PDF delivery | Export, write email, attach | Branded quote sent natively in one click |

## Substrate and Finishing Catalog

Your substrate pricing (vinyl banner, corflute, ACM panel, canvas, blockout) and your finishing options (hemming, grommets, laminating, eyelets) are loaded into your Xero or QuickBooks product catalog. SMASH pulls from this catalog live.

When you build a print quote, you select the substrate and the required finishes. SMASH calculates the area from the dimensions in the email, multiplies by your rate, and adds the finishing charges. The complete quote — including setup and handling — is assembled in the sidebar before you've finished reading the customer's message.

## Handling Multi-Page PDF Briefs

Commercial clients often send PDF artwork briefs or print specifications with multiple items across several pages. SMASH's document scanner reads the PDF, extracts all line items, and maps them to your catalog without copy-pasting. For agencies and corporate accounts running regular campaigns, this alone saves hours per week.

## What Print and Signage Shops Are Saying

> *"Our reps were calculating square footage and grommets on a calculator for every banner order. SMASH reads the dimensions from the email, does the maths, adds the finishing, and the quote is ready. It's not even close to how long it used to take."*
> **— Rohan T., Production Manager, Paradigm Print Group**

> *"We have one client who sends a 12-item PDF print brief every campaign. SMASH scans the PDF and builds the entire quote in one shot. That used to be an hour of work."*
> **— Sandra N., Client Services, Vivid Signs**

> *"The substrate toggle lets us give a client a vinyl price and an ACM price side by side. Before SMASH, that meant building two separate quotes. Now it's two clicks."*
> **— Lee P., Owner, ProPrint Custom**

${chromeCTA}

## Related Reading

- [How IT Resellers and MSPs Automate Hardware Quotes From Gmail](/blog/it-reseller-msp-quote-automation-gmail)
- [How Bulk Goods Wholesalers Cut Quote Turnaround to 60 Seconds](/blog/bulk-goods-wholesaler-quoting-gmail)
- [SMASH Chrome Extension](/chrome-extension)
`,
},

// ─── Article 10 ──────────────────────────────────────────────────────────────
{
  slug: 'shipping-container-quote-builder-gmail',
  title: 'How Shipping Container Suppliers Automate Modification and Delivery Quotes From Gmail',
  meta_title: 'Shipping Container Quote Automation From Gmail | SMASH',
  meta_description: "Container suppliers deal with base configs, custom modifications, and tilt-tray delivery zones on every sale. SMASH reads the email and builds the complete multi-line quote in Gmail.",
  excerpt: "Every container sale involves a base config, a list of modifications, and a tilt-tray delivery calculation. SMASH reads the customer's email and handles all three automatically.",
  primary_keyword: 'shipping container quote builder',
  secondary_keywords: ['container modification price tool', 'tilt-tray freight calculator', 'shipping container inventory software', 'container quote from email', 'depot container quoting gmail'],
  author: 'Dan Neale',
  author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman and trade supplier because he was sick of the tab-switching tax every time a job request landed in his inbox.',
  published_at: '2026-05-25T16:00:00.000Z',
  reading_time: 6,
  key_takeaways: [
    'Container sales require a base SKU, a list of modification line items, and a tilt-tray freight zone calculation on every quote.',
    'SMASH reads container size, modification requests, and delivery address from the email and builds the quote automatically.',
    'Multiple depot stock levels are checked before quoting to avoid committing to unavailable inventory.',
    'Wholesale trader vs. retail buyer pricing applies automatically based on the customer\'s contact profile.',
    'Customers can approve and pay a deposit from a mobile portal link — no printing, no scanning.',
  ],
  faq_data: [
    { question: "Can SMASH handle variable pricing for trade vs. retail buyers?", answer: "Yes. If you have pricing tiers (Trader, B2B Wholesaler, General Public) loaded into your QuickBooks or Xero ledger, SMASH applies the correct rates based on the customer's matched contact profile automatically. No manual tier selection required." },
    { question: "How does the multi-page PDF quote request work?", answer: "If a corporate client sends a detailed multi-page PDF request listing multiple containers and modifications, click Scan Email. SMASH's document scanner extracts the material lines, quantities, and specs, and maps them to your live ledger products — no copy-pasting required." },
    { question: "How does SMASH handle tilt-tray delivery zone pricing?", answer: "You upload your tilt-tray and flatbed freight zone grids to SMASH as SKU data. When an email is scanned, the delivery suburb is cross-referenced against your zone maps and the correct freight surcharge is added to the quote automatically. Zones typically cover metro, regional, and remote tiers." },
    { question: "What modification types does SMASH support?", answer: "Any modification that has a corresponding SKU in your Xero or QuickBooks catalog. Typical examples include personal access doors, roller doors, windows, ventilation systems, lock boxes, container ramps, flooring overlays, and painting/colour changes. SMASH bundles these based on the modification items mentioned in the customer's email." },
  ],
  content: `Shipping container distributors rarely sell an unmodified box straight off a yard. Most customers want something specific — a particular size, a colour, a set of modifications, and delivery to a site that may be hours from your depot.

A typical inbound enquiry:

*"Hi, I need a price on a 20ft GP container in dark grey, a single personal door with deadlock, a lock box, and delivery to our property in Ballarat. What's your lead time looking like?"*

To price this accurately, your sales team needs to:

1. Find the correct base container SKU (20ft GP, dark grey)
2. Add the personal door modification (supply + installation)
3. Add the lock box accessory
4. Identify the Ballarat freight zone and apply the tilt-tray delivery rate
5. Check depot stock before committing to lead time

The pricing formula:

${equation('Container Total Formula', 'Total = Container_Base_SKU + Σ Modification_SKUs + Transport_tilt-tray', 'Where Σ Modification_SKUs = sum of all modification parts and labour, Transport_tilt-tray = flatbed delivery fee by zone')}

For a distributor receiving 15 to 25 enquiries per day — and containers are high-ticket sales where every lost quote matters — the 15 to 20 minutes per manual quote is a meaningful operational cost.

## The Modification Bundling Problem

Container modifications are often requested informally. Customers describe what they want in natural language — "a door at the end," "some ventilation," "paint it dark green" — and your sales team has to translate that into specific SKU codes from your modification catalog.

SMASH reads the natural language description in the email and matches modification requests to the corresponding SKUs in your Xero or QuickBooks catalog. Personal doors, roller doors, windows, ventilation panels, lock boxes, and ramps are all recognised from standard customer descriptions.

| Workflow step | Manual | SMASH |
|---|---|---|
| Base container lookup | Search physical inventory | Live Xero/QuickBooks sync |
| Modification translation | Match description to SKU manually | AI-powered catalog matching |
| Freight zone | Open zone grid, calculate | Suburb-to-SKU automated |
| Stock check | Phone the depot | Multi-depot inventory check |
| Quote assembly | Build in ledger | Draft in sidebar in 60s |
| Customer approval | Email PDF, wait | Digital sign-off via portal link |

## Multi-Depot Stock Availability

If you operate from multiple depots — say, one in Melbourne's west and one in Ballarat — SMASH checks stock levels across all locations before generating the quote. This prevents your rep from committing to a 20ft dark grey with modifications if the only one in dark grey is at the wrong depot with a three-week lead time.

The customer gets an accurate availability estimate alongside the price. No follow-up corrections. No awkward phone calls after the quote is sent.

## What Container Suppliers Are Saying

> *"Matching the right modifications and tilt-tray zones used to lock our reps in spreadsheets for 20 minutes per quote. SMASH prices and sends an accurate quote in under a minute from inside Gmail. The speed improvement is real."*
> **— Dawie O., Sales Director, Ballarat Container Depot**

> *"We have trade accounts and retail buyers at completely different price points. SMASH knows which is which and prices accordingly. We don't have to think about it."*
> **— Liz F., Operations Manager, ContainerDirect**

> *"The stock check before quoting has saved us from multiple uncomfortable conversations. We used to sometimes promise a container that was already sold. Not any more."*
> **— Grant T., Sales Manager, Pacific Container Yards**

${chromeCTA}

## Related Reading

- [How Bulk Goods Wholesalers Cut Quote Turnaround to 60 Seconds](/blog/bulk-goods-wholesaler-quoting-gmail)
- [Garden Shed and Kit Barn Quoting From Gmail](/blog/garden-shed-kit-barn-quoting-gmail)
- [How to Create QuickBooks Estimates From Gmail](/blog/quickbooks-estimates-from-gmail)
- [SMASH Chrome Extension](/chrome-extension)
`,
},

]; // end posts array

// ─── Generate ─────────────────────────────────────────────────────────────────

function generate() {
  const blogDir = path.join(__dirname, '..', 'public', 'blog');
  fs.mkdirSync(blogDir, { recursive: true });
  let count = 0;
  for (const post of posts) {
    const html = renderPost(post);
    const postDir = path.join(blogDir, post.slug);
    fs.mkdirSync(postDir, { recursive: true });
    fs.writeFileSync(path.join(postDir, 'index.html'), html, 'utf-8');
    console.log(`✓ /blog/${post.slug}`);
    count++;
  }
  console.log(`\n✅ Generated ${count} B2B blog post files in public/blog/`);
}

generate();
