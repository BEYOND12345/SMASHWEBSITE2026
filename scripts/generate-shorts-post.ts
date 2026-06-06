/**
 * Generates the static HTML for the Fastest Voice Invoice Generator article.
 * Run with: node --import tsx/esm scripts/generate-shorts-post.ts
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
    .shorts-embed{position:relative;margin:28px auto;max-width:340px;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.1);box-shadow:0 0 60px rgba(217,249,157,0.08);}
    .shorts-embed iframe{display:block;width:100%;aspect-ratio:9/16;border:none;}
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

const slug = 'fastest-voice-invoice-generator-gmail';
const publishedAt = '2026-05-26T00:00:00.000Z';

const faqData = [
  { question: "What is the 'From Email' button and how does it work?", answer: "From Email is a one-press feature inside the SMASH Gmail sidebar. When a job request email is open, pressing From Email tells SMASH to read the email body, extract the customer's name and contact details, identify the requested services or materials, and build a fully itemised, priced quote using your catalog — all without you typing a word. The whole process takes a few seconds." },
  { question: "Does the invoice include a cover letter?", answer: "Yes. When you copy the quote into your Gmail reply, SMASH generates a short, professional covering message automatically. You don't write it — it's written for you based on the job context. You review it, hit send, done." },
  { question: "Is this different from the voice recording feature?", answer: "The From Email button and the voice recorder are two separate entry points. From Email works when the customer's email describes the job clearly enough for SMASH to extract it. Voice is better when you need to add details that weren't in the email — materials used, extra hours, call-out fees — or when you're quoting a job that came in over the phone." },
  { question: "How accurate is the auto-fill from the email?", answer: "Very. SMASH reads the customer's name, email address, and job description from the open thread. Line items are matched to your pricing catalog, so the prices that come out are your actual rates, not guesses. You review everything before sending — if something looks off, you adjust it in the sidebar before hitting copy." },
  { question: "Can I use this on mobile as well as desktop?", answer: "SMASH is a Chrome extension, so it runs in Chrome on desktop and laptop. For mobile invoicing on the go, the SMASH iOS app covers the same workflow from your phone." },
  { question: "What happens after I send the quote?", answer: "Your customer receives a clean email with the itemised quote and a portal link. They can approve it and pay from their phone. You get a read receipt when they open it and a payment notification when they pay. The completed invoice can be exported to Xero or QuickBooks in one click." },
];

const keyTakeaways = [
  'The From Email button reads an open Gmail message and builds a full itemised invoice in a few seconds — no typing required.',
  'SMASH writes the covering email reply for you as well — customer name, job context, professional tone.',
  'Your pricing catalog means every line item comes out at your actual rates, not estimated figures.',
  'The whole sequence — email open to quote sent — takes under 60 seconds on a real job.',
  'Free to install. Works inside Gmail without opening a new tab.',
];

const content = `There's a question that keeps coming up in search: *"what's the fastest way to send an invoice?"*

The answer isn't a template. It isn't a new app. It's a button that lives in your Gmail sidebar. You press it when a job request is open, and the invoice is built before you've finished reading the email.

That's not a pitch. Watch the demo.

## Watch: The Fastest Voice Invoice Generator in Gmail (40-Second Demo)

<div class="shorts-embed">
  <iframe
    src="https://www.youtube.com/embed/3MVkuTFyzSM"
    title="Fastest Voice Invoice Generator (Gmail Hack) — SMASH"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
  ></iframe>
</div>

Forty seconds. One button. Full itemised invoice. Cover letter written. Sent.

If that looks too easy to be real, here's what's actually happening under the surface.

## What "From Email" Actually Does

When a customer emails asking for a quote, most of what you need to send a proper invoice is already sitting in that email. Their name is there. Their email address is there. The job description is there.

The manual process forces you to copy all of that into a different application, look up your prices, do the maths, generate a PDF, come back to Gmail, write a cover email, and attach it. Fifteen minutes minimum.

The SMASH **From Email** button does every one of those steps in a few seconds:

1. **Reads the email** — customer name, email address, and job description are extracted automatically
2. **Matches the job to your catalog** — services and materials are mapped to your pricing and rates
3. **Builds the itemised quote** — line items, quantities, prices, GST — all assembled in the sidebar
4. **Writes the cover email** — a short, professional reply is drafted with your quote attached

You review it. If everything looks right, you click Copy to Gmail and send. If something needs adjusting, you change it in the sidebar and then send.

The whole sequence: under 60 seconds.

## Why This Works Better Than Every Other Approach

| Method | Time | Typing | Switching tabs |
|---|---|---|---|
| Manual entry in Xero or QuickBooks | 15–25 min | All of it | Yes — 4+ tabs |
| Filling a Word/Excel template | 10–15 min | Most of it | Yes |
| Basic invoicing app | 5–10 min | Some | Usually yes |
| Replying with a rough estimate | 2–3 min | Yes | No — but it looks unprofessional |
| **SMASH From Email** | **Under 60 sec** | **None** | **Never — lives in Gmail** |

The reason nothing else comes close is simple: every other method requires you to move information from one place to another by typing it. SMASH reads the source — the customer's email — and builds directly from it.

## The Cover Letter You Didn't Have to Write

One detail from the demo that's easy to miss: when you copy the quote into your Gmail reply, SMASH generates the covering message for you.

Not a canned template. A short, properly-worded email that references the job, introduces the attached quote, and tells the customer what to do next. You don't write it. It's there when you paste.

That matters more than it sounds. A lot of people delay sending quotes not because the pricing is hard — it's because writing a professional covering email when you're tired takes mental energy you don't have at the end of the day. SMASH removes that friction entirely.

## From Email vs. Voice Recording — When to Use Each

SMASH has two main ways to build a quote from scratch:

**From Email** is best when:
- The customer's email clearly describes the job
- You're quoting from a desktop or laptop
- You want the fastest possible turnaround on a straightforward enquiry

**Voice recording** is best when:
- You need to add details the email didn't include (materials used, extra hours, fees)
- The job came in over the phone or in person, not by email
- You're on site and want to invoice before you drive away

Most people end up using both regularly — From Email for straightforward desk-based quoting, voice recording for jobs that need more detail or came in through other channels.

## What Tradies and Service Pros Are Saying

> *"I thought the demo was sped up. I timed myself doing it and got 38 seconds on my first proper attempt. It's that fast."*
> **— Dean V., electrician, Canberra**

> *"The bit that got me was the cover letter. I didn't notice it until I looked at what I'd sent. SMASH had written a proper email for me and I hadn't typed a word."*
> **— Sophie B., cleaner, Gold Coast**

> *"I had four enquiries sitting in my inbox when I installed it. Cleared all four in under five minutes. Never done that before."*
> **— Aaron L., handyman, Melbourne**

<div style="margin:40px 0;padding:28px 32px;background:linear-gradient(135deg,rgba(217,249,157,0.12),rgba(217,249,157,0.04));border:1px solid rgba(217,249,157,0.3);border-radius:16px;text-align:center;">
  <p style="font-size:20px;font-weight:800;color:#fff;margin:0 0 8px;letter-spacing:-0.01em;">Your inbox has quotes in it right now.</p>
  <p style="color:rgba(255,255,255,0.65);margin:0 0 20px;font-size:15px;">Install SMASH and send the first one in under 60 seconds. Free. No credit card.</p>
  <a href="${CHROME_STORE_URL}" rel="nofollow" style="display:inline-block;background:#D9F99D;color:#0A0A0A;padding:12px 28px;border-radius:999px;font-weight:700;font-size:15px;text-decoration:none;">Add SMASH to Chrome — Free</a>
</div>

## The Pricing Catalog Is What Makes It Accurate

One thing the demo doesn't show is what's running in the background: your Pricing DNA.

When SMASH reads *"replace kitchen mixer tap, two hours labour, call-out fee"* from a customer's email, it doesn't guess at prices. It matches each item to your uploaded pricing catalog — your rates, your materials, your fees. The invoice that comes out is priced at exactly what you charge, not some average from the internet.

You set this up once when you sign up — upload an old invoice PDF or a CSV of your services and SMASH builds your catalog from it. After that, every quote it generates reflects your actual business.

## Related Reading

- [The Fastest Way to Send an Invoice in 2026 — 60 Second Speedrun](/blog/fastest-way-to-send-invoice-2026)
- [Turn a Gmail Email Into a Sent Invoice in 20 Seconds](/blog/gmail-email-to-invoice-20-seconds)
- [Stop Juggling Tabs: The QuickBooks Sidebar for Gmail](/blog/quickbooks-gmail-sidebar-tab-switching)
- [Voice to Quote: How SMASH Builds Your Estimate](/blog/voice-to-quote-feature)
`;

const url = `${SITE_URL}/blog/${slug}`;
const publishedIso = new Date(publishedAt).toISOString();
const title = 'The Fastest Voice Invoice Generator for Gmail (One Button. Done.)';
const metaTitle = 'Fastest Voice Invoice Generator for Gmail — One Button, Full Invoice | SMASH';
const metaDescription = 'Press From Email in the SMASH Gmail sidebar and get a fully itemised, priced invoice with cover letter in under 60 seconds. No typing. No tab-switching. See the demo.';
const keywords = 'voice invoice generator, gmail invoice extension, fastest way to send invoice, from email invoice, email to invoice chrome extension, smash invoices, gmail voice billing';

const schemas = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: title, description: metaDescription, image: `${SITE_URL}/hero_image.png`, datePublished: publishedIso, dateModified: publishedIso, author: { '@type': 'Person', name: 'Dan Neale' }, publisher: { '@type': 'Organization', name: 'SMASH Invoices', logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` } }, mainEntityOfPage: { '@type': 'WebPage', '@id': url }, keywords, inLanguage: 'en-AU' },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` }, { '@type': 'ListItem', position: 3, name: title, item: url }] },
  { '@context': 'https://schema.org', '@type': 'VideoObject', name: 'Fastest Voice Invoice Generator (Gmail Hack)', description: 'A 40-second live demonstration of the SMASH From Email feature — one button turns an open customer email into a full itemised invoice with cover letter inside Gmail.', thumbnailUrl: 'https://i.ytimg.com/vi/3MVkuTFyzSM/maxresdefault.jpg', uploadDate: '2026-05-25T20:14:49-07:00', duration: 'PT40S', contentUrl: 'https://www.youtube.com/shorts/3MVkuTFyzSM', embedUrl: 'https://www.youtube.com/embed/3MVkuTFyzSM', publisher: { '@type': 'Organization', name: 'SMASH Invoices', url: SITE_URL } },
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
  <meta name="twitter:image" content="https://i.ytimg.com/vi/3MVkuTFyzSM/maxresdefault.jpg">
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
        <span>6 min read</span>
      </div>
    </header>

    ${takeawaysHtml}
    <div class="prose">${contentHtml}</div>
    ${faqHtml}

    <aside class="cta-card">
      <h3>One button. Full invoice. Done.</h3>
      <p>Install SMASH and turn your next customer email into a sent, priced quote in under 60 seconds. Free to start — no credit card needed.</p>
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

const blogDir = path.join(__dirname, '..', 'public', 'blog');
const postDir = path.join(blogDir, slug);
fs.mkdirSync(postDir, { recursive: true });
fs.writeFileSync(path.join(postDir, 'index.html'), html, 'utf-8');
console.log(`✓ Generated: /blog/${slug}/index.html`);
