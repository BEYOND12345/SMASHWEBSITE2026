/**
 * Generates static HTML for the photographer 60-second quote article.
 * Run with: node --import tsx/esm scripts/generate-photographer-post.ts
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
const VIDEO_ID = '1A5DzbqO6hc';

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

const slug = 'photographer-wedding-quote-gmail-60-seconds';
const publishedAt = '2026-05-27T00:00:00.000Z';

const faqData = [
  { question: 'How do I make a quote for a wedding photography client from Gmail?', answer: 'Open the enquiry email in Gmail, open the SMASH sidebar, and press From Email. SMASH scans the message, matches what the client asked for to your saved packages (full-day shoot, editing, prints, and so on), and builds a priced PDF quote in the sidebar. Copy it into your reply, review the cover email SMASH drafts, and send — usually in under 60 seconds.' },
  { question: 'Can I save my photography packages so I do not retype them every time?', answer: 'Yes. You set up a service catalog once — full-day shoot, half-day shoot, photo editing, print packages, retouching blocks, travel fees, whatever you sell repeatedly. When a new enquiry lands, SMASH maps the email text to those packages instead of you hunting through old PDFs or spreadsheets.' },
  { question: 'Does SMASH work if the client only wants a rough price estimate?', answer: 'Absolutely. You can send a formal quote or a lighter estimate using the same packages. The point is speed: you are not rebuilding line items from scratch. Adjust quantities or swap packages in the sidebar before you copy to Gmail.' },
  { question: 'Can clients pay a booking deposit through the quote?', answer: 'Yes. You can attach a secure Stripe payment link so the client pays a retainer when they accept. That is covered in other SMASH demos; this video focuses on scanning the email and pulling the right package pricing in one pass.' },
  { question: 'Do I need Xero or QuickBooks for wedding photography quotes?', answer: 'No. SMASH works as a standalone quote and invoice tool inside Gmail. If you use Xero or QuickBooks, approved quotes can sync to your ledger so you are not entering the same job twice.' },
  { question: 'What if the enquiry does not match a package exactly?', answer: 'SMASH pre-selects the closest match from what the client wrote. You tweak line items in the sidebar before sending — add retouching, remove prints, change from half-day to full-day. You stay in control; you just skip the blank-page typing.' },
];

const keyTakeaways = [
  'Wedding and portrait enquiries lose bookings when replies sit in your inbox — speed matters more than perfect prose.',
  'From Email reads the open Gmail thread and maps the client’s request to your saved photography packages in seconds.',
  'Full-day shoot, editing, and print bundles come from your catalog — not from memory at 9 PM.',
  'SMASH drafts the cover email when you copy the quote into your reply so you are not staring at a blank compose window.',
  'Free to install in Chrome. Built for freelancers and small studios who live in Gmail.',
];

const content = `A wedding enquiry lands in your inbox on a Tuesday afternoon. Full-day coverage. Editing. Final images. Maybe a few prints. Byron Bay, friend's recommendation, date not locked yet.

If you wait until tonight to open a template, log into your accounting software, and type it all out, someone else has already replied.

This demo shows how a photographer answers that enquiry in about 60 seconds — without leaving Gmail.

## Watch: How to Make a Client Quote in 60 Seconds (Full Demo)

<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/${VIDEO_ID}"
    title="How to Make a Quote for a Client in 60 Seconds — SMASH Gmail Extension"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

In the video, the presenter walks through a real wedding shoot enquiry. The client mentions a full-day shoot, retouching, final images, and prints. SMASH scans the email, lines that up with a pre-built pricing profile, and produces a quote ready to paste into the reply.

Copy. Reply. Done.

## Why Photographers Lose Bookings on Speed, Not Price

Freelancers and small studios are not losing weddings because their day rate is wrong. They lose them because the reply arrives late.

Industry data on inbound enquiries is blunt: a large share of clients shortlist the provider who responds first with a clear, professional number. If your quote is still in your head at dinner while another photographer sent a PDF at 3 PM, you are not in the running.

That is especially true for wedding and event work. Dates are finite. Couples email several photographers the same week. The inbox is competitive.

| Workflow step | Manual (template + ledger) | SMASH in Gmail |
|---|---|---|
| Read enquiry and note requirements | 2–3 min | Automatic scan |
| Find last season’s package pricing | 5–10 min | Pre-saved catalog |
| Build line items and totals | 5–8 min | Under 1 min |
| Write professional reply email | 5–10 min | Drafted for you |
| Attach PDF and send | 2–3 min | Copy to thread |
| **Typical total** | **20–35 min** | **Under 60 sec** |

You still review everything before it goes out. You are just not rebuilding the same packages from scratch every time.

## What Happens in the Demo (Step by Step)

Here is the flow shown in the video, tied to what you will see on screen:

1. **Open the wedding enquiry in Gmail** — client found you via a recommendation, needs a photographer near Byron Bay, wants full-day coverage plus retouching and deliverables.
2. **Open SMASH in the sidebar** — extension stays on the thread; no new tab for Xero, QuickBooks, or a separate invoicing app.
3. **Press From Email** — SMASH reads the message body and waits a moment while it matches services.
4. **Pricing profile loads** — full-day shoot, photo editing, prints package appear as line items because they were saved in the service catalog ahead of time.
5. **Sanity-check against the email** — what the client asked for (full day, retouching, final images, limited prints) aligns with what SMASH selected.
6. **Create quote → Copy to Gmail** — quote lands in the reply; cover email is already written.

The presenter notes they are not a photographer — they are using wedding work as an example because the package-matching problem is universal for creatives. Videographers, designers, and studios running productised sessions get the same benefit.

## Your Service Catalog Is the Secret Weapon

Photography businesses sell the same bundles repeatedly:

- Full-day wedding coverage  
- Half-day or elopement sessions  
- Photo editing and colour grading  
- Print packages and albums  
- Travel or location surcharges  

You configure these once inside SMASH as your **services** list. Each item carries your real rate — not a generic placeholder.

When From Email runs, it is not guessing wedding industry averages. It is pulling **your** full-day rate, **your** editing fee, **your** print tier. That is why the quote in the demo looks organised immediately instead of half-finished.

If the client asks for something outside the bundle — extra hours, second shooter, album upgrade — you add or swap lines in the sidebar before you send. The heavy lifting (structure, maths, PDF formatting) is already done.

## The Cover Email Nobody Wants to Write at Night

Another moment easy to skip in the video: after you copy the quote, the Gmail reply already contains a proper covering message.

You are tired. You know what you want to charge. You still delay send because writing *"Hi Sarah, thanks for reaching out about your Byron Bay wedding…"* feels like one more job.

SMASH writes that layer for you — professional tone, references the enquiry, points them to the attached quote. Edit it if you want. Send it if you do not.

## Retainers, Deposits, and the Rest of the Workflow

This article focuses on the 60-second quote reply. SMASH also supports:

- **Stripe payment links** on quotes so clients can pay a booking deposit when they accept  
- **Split invoices** for 50% retainers and balance on delivery — useful for wedding packages  
- **Sync to Xero or QuickBooks** when you want the ledger updated without double entry  

If you run milestone billing for events, see our guide on [service professionals quoting inside Gmail](/blog/service-trade-invoice-gmail-sidebar) for deposit splits and voice quoting on the go.

<div style="margin:40px 0;padding:28px 32px;background:linear-gradient(135deg,rgba(217,249,157,0.12),rgba(217,249,157,0.04));border:1px solid rgba(217,249,157,0.3);border-radius:16px;text-align:center;">
  <p style="font-size:20px;font-weight:800;color:#fff;margin:0 0 8px;letter-spacing:-0.01em;">Got a wedding enquiry sitting in Gmail right now?</p>
  <p style="color:rgba(255,255,255,0.65);margin:0 0 20px;font-size:15px;">Install SMASH, press From Email, and send a priced package quote before your competitor does. Free to start.</p>
  <a href="${CHROME_STORE_URL}" rel="nofollow" style="display:inline-block;background:#D9F99D;color:#0A0A0A;padding:12px 28px;border-radius:999px;font-weight:700;font-size:15px;text-decoration:none;">Add SMASH to Chrome — Free</a>
</div>

## What Photographers and Videographers Are Saying

> *"I used to batch quote replies on Sunday nights. Now I answer same-day from my laptop between edits. Booked two extra weddings last quarter just from being first."*
> **— Claire M., wedding photographer, Sunshine Coast**

> *"The package catalog is the bit that sold me. Full-day, half-day, albums — it picks the right bundle from what they wrote in the email."*
> **— James T., videographer, Melbourne**

> *"I did not believe the cover letter thing until I pasted the reply and realised I had not typed the intro paragraph. Small detail, huge time saver."*
> **— Nina K., portrait studio, Auckland**

## Related Reading

- [The Fastest Voice Invoice Generator for Gmail](/blog/fastest-voice-invoice-generator-gmail) — one-button quoting from any enquiry email  
- [Turn a Gmail Email Into a Sent Invoice in 20 Seconds](/blog/gmail-email-to-invoice-20-seconds)  
- [Sunday Night Admin: Service Pros Quote and Invoice in Gmail](/blog/service-trade-invoice-gmail-sidebar) — milestone deposits for packages  
- [Custom Print & Signage Shops Automate Quoting in Gmail](/blog/print-signage-custom-quote-gmail) — another productised-service workflow  
`;

const url = `${SITE_URL}/blog/${slug}`;
const publishedIso = new Date(publishedAt).toISOString();
const title = 'How a Photographer Replies to a Wedding Enquiry in 60 Seconds (Gmail)';
const metaTitle = 'Photographer Quote From Gmail in 60 Seconds — Wedding Enquiry Demo | SMASH';
const metaDescription = 'See how to make a quote for a client from Gmail in 60 seconds. Scan a wedding enquiry, match full-day photo packages, and send a priced PDF with cover email — no tab-switching.';
const keywords = 'how to make a quote for a client, photographer pricing gmail, wedding photography quote template, gmail invoice extension, videographer quotes, freelance billing chrome extension, smash invoices, speed quoting';

const schemas = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: title, description: metaDescription, image: `${SITE_URL}/hero_image.png`, datePublished: publishedIso, dateModified: publishedIso, author: { '@type': 'Person', name: 'Dan Neale' }, publisher: { '@type': 'Organization', name: 'SMASH Invoices', logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` } }, mainEntityOfPage: { '@type': 'WebPage', '@id': url }, keywords, inLanguage: 'en-AU' },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` }, { '@type': 'ListItem', position: 3, name: title, item: url }] },
  { '@context': 'https://schema.org', '@type': 'VideoObject', name: 'How to Make a Quote for a Client in 60 Seconds (Gmail Chrome Extension)', description: 'Step-by-step demo: scan a wedding photography enquiry in Gmail, match pre-saved full-day and editing packages, and send a priced client quote with cover email in about 60 seconds.', thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`, uploadDate: '2026-05-26T22:22:49-07:00', duration: 'PT2M41S', contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`, embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`, publisher: { '@type': 'Organization', name: 'SMASH Invoices', url: SITE_URL } },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'SMASH Invoices — Gmail Chrome Extension', applicationCategory: 'BusinessApplication', operatingSystem: 'Chrome', offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD', description: 'Free up to 5 invoices/month. Paid plans from $15/month.' }, url: `${SITE_URL}/chrome-extension`, downloadUrl: CHROME_STORE_URL },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
];

const contentHtml = (marked.parse(content) as string)
  .replace(/<h1>/g, '<h2>').replace(/<\/h1>/g, '</h2>');

const takeawaysHtml = `<aside class="takeaways"><h2>Key Takeaways</h2><ul>${keyTakeaways.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul></aside>`;

const faqHtml = `<section class="faq"><h2>Frequently Asked Questions</h2>${faqData.map(f => `<details><summary>${escapeHtml(f.question)}</summary><p>${escapeHtml(f.answer)}</p></details>`).join('')}</section>`;

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
  <meta property="og:url" content="${url}"><meta property="og:image" content="${SITE_URL}/hero_image.png">
  <meta property="og:locale" content="en_AU"><meta property="article:published_time" content="${publishedIso}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(metaTitle)}">
  <meta name="twitter:description" content="${escapeHtml(metaDescription)}">
  <meta name="twitter:image" content="https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg">
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
      <h1 class="post-title">${escapeHtml(title)}</h1>
      <div class="post-meta">
        <span>By Dan Neale</span>
        <span><time datetime="${publishedIso}">${formatDate(publishedAt)}</time></span>
        <span>7 min read</span>
      </div>
    </header>

    ${takeawaysHtml}
    <div class="prose">${contentHtml}</div>
    ${faqHtml}

    <aside class="cta-card">
      <h3>Reply to the next wedding enquiry in 60 seconds</h3>
      <p>Install SMASH in Chrome, scan the email, match your packages, and send a priced quote with cover letter — without opening another app.</p>
      <a href="${CHROME_STORE_URL}" class="cta-btn" rel="nofollow">Add SMASH to Chrome — Free</a>
    </aside>

    <div class="author-card">
      <strong>About Dan Neale</strong><br>Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.
    </div>
  </article></main>

  <footer>
    <div>
      <a href="/">Home</a><a href="/blog">Blog</a><a href="/chrome-extension">Add to Chrome</a>
      <a href="/pricing">Pricing</a><a href="/features">Features</a>
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

const blogDir = path.join(__dirname, '..', 'public', 'blog');
const postDir = path.join(blogDir, slug);
fs.mkdirSync(postDir, { recursive: true });
fs.writeFileSync(path.join(postDir, 'index.html'), html, 'utf-8');
console.log(`✓ Generated: /blog/${slug}/index.html`);
