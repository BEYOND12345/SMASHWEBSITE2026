/**
 * Generates static HTML files for the 7 YouTube-anchored blog posts
 * directly into public/blog/<slug>/index.html — no Supabase connection needed.
 *
 * Run with: node --import tsx/esm scripts/generate-youtube-posts-static.ts
 *
 * After running, commit the new public/blog/ directories and push.
 * Also run `node --import tsx/esm scripts/seed-youtube-posts.ts` separately
 * (with network access) to populate the Supabase database so the /blog list
 * page shows these posts too.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

marked.setOptions({ gfm: true, breaks: false });

import {
  APP_STORE_URL,
  CHROME_STORE_RATING_LABEL,
  CHROME_STORE_URL,
  chromeStoreAggregateRatingSchema,
} from '../src/data/download-urls.ts';

const SITE_URL = 'https://smashinvoices.com';

const chromeCTA = `
<div style="margin:40px 0;padding:28px 32px;background:linear-gradient(135deg,rgba(217,249,157,0.12),rgba(217,249,157,0.04));border:1px solid rgba(217,249,157,0.3);border-radius:16px;text-align:center;">
  <p style="font-size:20px;font-weight:800;color:#fff;margin:0 0 8px;letter-spacing:-0.01em;">Ready to stop typing quotes?</p>
  <p style="color:rgba(255,255,255,0.65);margin:0 0 8px;font-size:15px;">Free to install. No credit card. Works inside Gmail in 2 minutes.</p>
  <p style="color:rgba(255,255,255,0.55);margin:0 0 20px;font-size:14px;">★★★★★ ${CHROME_STORE_RATING_LABEL} · <a href="${CHROME_STORE_URL}" rel="nofollow" style="color:#D9F99D;text-decoration:underline;">Chrome Web Store</a></p>
  <a href="${CHROME_STORE_URL}" rel="nofollow" style="display:inline-block;background:#D9F99D;color:#0A0A0A;padding:12px 28px;border-radius:999px;font-weight:700;font-size:15px;text-decoration:none;">Add SMASH to Chrome — Free</a>
</div>
`;

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

/** Pull the first YouTube embed from post markdown/HTML for VideoObject schema. */
function parseVideoFromContent(content: string): { id: string; title: string } | null {
  const match = content.match(
    /youtube\.com\/embed\/([A-Za-z0-9_-]+)[^>]*title="([^"]+)"/,
  );
  if (!match) return null;
  return { id: match[1], title: match[2] };
}

function inlineStyles(): string {
  return `
    :root{--bg:#0A0A0A;--bg-soft:#111;--surface:rgba(255,255,255,0.04);--surface-strong:rgba(255,255,255,0.08);--border:rgba(255,255,255,0.1);--text:#F5F5F5;--text-muted:rgba(255,255,255,0.65);--text-dim:rgba(255,255,255,0.45);--accent:#D9F99D;--accent-ink:#0A0A0A;}
    *,*::before,*::after{box-sizing:border-box;}
    html{-webkit-text-size-adjust:100%;}
    body{margin:0;background:var(--bg);color:var(--text);font-family:'Plus Jakarta Sans',system-ui,-apple-system,'Segoe UI',sans-serif;font-size:17px;line-height:1.65;-webkit-font-smoothing:antialiased;}
    a{color:var(--accent);text-decoration:none;}
    a:hover{text-decoration:underline;}
    img{max-width:100%;height:auto;display:block;}
    .container{max-width:760px;margin:0 auto;padding:0 24px;}
    .nav{position:sticky;top:0;z-index:10;background:rgba(10,10,10,0.85);backdrop-filter:saturate(140%) blur(10px);-webkit-backdrop-filter:saturate(140%) blur(10px);border-bottom:1px solid var(--border);}
    .nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:14px 24px;}
    .nav-brand{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:800;letter-spacing:0.02em;color:#fff;font-size:22px;text-transform:uppercase;}
    .nav-links{display:none;gap:28px;}
    .nav-links a{color:var(--text-muted);font-size:14px;font-weight:500;}
    .nav-links a:hover{color:#fff;text-decoration:none;}
    .nav-cta{background:var(--accent);color:var(--accent-ink);padding:9px 16px;border-radius:999px;font-size:13px;font-weight:700;letter-spacing:0.01em;}
    .nav-cta:hover{filter:brightness(0.95);text-decoration:none;}
    @media(min-width:860px){.nav-links{display:flex;}}
    main{padding:48px 0 64px;}
    .back-link{display:inline-flex;align-items:center;gap:6px;color:var(--accent);font-size:14px;font-weight:600;margin-bottom:28px;}
    h1.post-title{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:900;font-size:clamp(36px,6vw,60px);line-height:1.02;letter-spacing:-0.015em;margin:0 0 20px;color:#fff;}
    .post-meta{display:flex;flex-wrap:wrap;gap:14px 22px;color:var(--text-muted);font-size:14px;font-weight:500;margin-bottom:28px;}
    .post-meta span{display:inline-flex;align-items:center;gap:6px;}
    .takeaways{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:24px 28px;margin:0 0 40px;}
    .takeaways h2{font-family:'Barlow Condensed',system-ui,sans-serif;font-size:20px;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 12px;color:var(--accent);}
    .takeaways ul{margin:0;padding-left:20px;}
    .takeaways li{margin:6px 0;color:var(--text);}
    .prose h2{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:800;font-size:clamp(26px,3.6vw,34px);line-height:1.15;letter-spacing:-0.01em;margin:48px 0 16px;color:#fff;}
    .prose h3{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:700;font-size:22px;margin:32px 0 12px;color:#fff;}
    .prose p{margin:0 0 18px;color:rgba(255,255,255,0.85);}
    .prose ul,.prose ol{margin:0 0 18px;padding-left:22px;}
    .prose li{margin:8px 0;color:rgba(255,255,255,0.85);}
    .prose strong{color:#fff;}
    .prose blockquote{margin:24px 0;padding:12px 20px;border-left:3px solid var(--accent);background:var(--surface);color:rgba(255,255,255,0.85);border-radius:0 10px 10px 0;}
    .prose img{border-radius:12px;margin:24px 0;}
    .prose table{width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;}
    .prose th{background:var(--surface-strong);color:#fff;font-weight:700;padding:10px 14px;text-align:left;border:1px solid var(--border);}
    .prose td{padding:10px 14px;border:1px solid var(--border);color:rgba(255,255,255,0.8);}
    .prose tr:nth-child(even) td{background:var(--surface);}
    .prose a{border-bottom:1px solid rgba(217,249,157,0.4);}
    .prose a:hover{text-decoration:none;border-bottom-color:var(--accent);}
    .faq{margin:56px 0 0;}
    .faq h2{font-family:'Barlow Condensed',system-ui,sans-serif;font-weight:800;font-size:clamp(28px,4vw,36px);margin:0 0 20px;color:#fff;}
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

  const contentMd = post.content.replace(/CHROME_CTA_PLACEHOLDER/g, chromeCTA);
  const contentHtml = (marked.parse(contentMd) as string)
    .replace(/<h1>/g, '<h2>').replace(/<\/h1>/g, '</h2>');

  const takeaways = post.key_takeaways.length > 0
    ? `<aside class="takeaways"><h2>Key Takeaways</h2><ul>${post.key_takeaways.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul></aside>`
    : '';

  const faqBlock = post.faq_data.length > 0
    ? `<section class="faq"><h2>Frequently Asked Questions</h2>${post.faq_data.map(f => `<details><summary>${escapeHtml(f.question)}</summary><p>${escapeHtml(f.answer)}</p></details>`).join('')}</section>`
    : '';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description,
    image: `${SITE_URL}/hero_image.png`,
    datePublished: publishedIso,
    dateModified: publishedIso,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'SMASH Invoices', logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords,
    wordCount: post.content.split(/\s+/).length,
    articleSection: 'Blog',
    inLanguage: 'en-AU',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  const softwareSchema = {
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
    aggregateRating: chromeStoreAggregateRatingSchema(),
  };

  const videoMeta = parseVideoFromContent(contentMd);
  const videoSchema = videoMeta
    ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: videoMeta.title,
        description: post.meta_description,
        thumbnailUrl: `https://i.ytimg.com/vi/${videoMeta.id}/maxresdefault.jpg`,
        uploadDate: publishedIso,
        contentUrl: `https://www.youtube.com/watch?v=${videoMeta.id}`,
        embedUrl: `https://www.youtube.com/embed/${videoMeta.id}`,
        publisher: {
          '@type': 'Organization',
          name: 'SMASH Invoices',
          url: SITE_URL,
        },
      }
    : null;

  const faqSchema = post.faq_data.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq_data.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  const schemas = [
    articleSchema,
    breadcrumbSchema,
    ...(videoSchema ? [videoSchema] : []),
    softwareSchema,
    ...(faqSchema ? [faqSchema] : []),
  ];

  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta property="og:site_name" content="SMASH Invoices">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(post.meta_title)}">
  <meta property="og:description" content="${escapeHtml(post.meta_description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${SITE_URL}/hero_image.png">
  <meta property="og:locale" content="en_AU">
  <meta property="article:published_time" content="${publishedIso}">
  <meta property="article:author" content="${escapeHtml(post.author)}">
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
  <nav class="nav">
    <div class="nav-inner">
      <a href="/" class="nav-brand">SMASH<span style="color:#D9F99D">.</span></a>
      <div class="nav-links">
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/chrome-extension">Add to Chrome</a>
        <a href="/blog">Blog</a>
      </div>
      <a href="${CHROME_STORE_URL}" class="nav-cta" rel="nofollow">Add to Chrome — Free</a>
    </div>
  </nav>

  <main>
    <article class="container">
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
        <h3>Stop typing. Start talking.</h3>
        <p>SMASH turns your voice into a professional invoice in under 60 seconds — right inside Gmail. Free to install.</p>
        <a href="${CHROME_STORE_URL}" class="cta-btn" rel="nofollow">Add SMASH to Chrome — Free</a>
      </aside>

      <div class="author-card">
        <strong>About ${escapeHtml(post.author)}</strong><br>${escapeHtml(post.author_bio)}
      </div>
    </article>
  </main>

  <footer>
    <div>
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/chrome-extension">Add to Chrome</a>
      <a href="/pricing">Pricing</a>
      <a href="/features">Features</a>
      <a href="/voice-invoicing">Voice Invoicing</a>
      <a href="/integrations-xero">Xero Integration</a>
      <a href="/integrations-quickbooks">QuickBooks Integration</a>
      <a href="/tradie-hourly-rates">Hourly Rates</a>
      <a href="/tools">Free Tools</a>
      <a href="/faq">FAQ</a>
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
    </div>
    <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
      <a href="${APP_STORE_URL}" rel="nofollow" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;border-radius:999px;background:#ffffff;color:#0a0a0a;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;font-size:13px;text-decoration:none;">Download the iOS app</a>
      <a href="${CHROME_STORE_URL}" rel="nofollow" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;border-radius:999px;background:rgba(255,255,255,0.1);color:#ffffff;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;font-size:13px;text-decoration:none;border:1px solid rgba(255,255,255,0.15);">Add to Chrome</a>
    </div>
    <div style="margin-top:14px;">
      Live in
      <a href="/">Australia</a>,
      <a href="/nz">New Zealand</a>,
      <a href="/uk">UK</a>,
      <a href="/us">US</a> and
      <a href="/ca">Canada</a>
    </div>
    <div style="margin-top:14px;">© ${new Date().getFullYear()} SMASH Invoices · smashinvoices.com</div>
  </footer>
</body>
</html>`;
}

// ─── Post data ────────────────────────────────────────────────────────────────

const posts: Post[] = [
  {
    slug: 'gmail-email-to-invoice-20-seconds',
    title: 'Turn a Gmail Email Into a Sent Invoice in 20 Seconds',
    meta_title: 'Turn a Gmail Email Into a Sent Invoice in 20 Seconds | SMASH',
    meta_description: 'See how SMASH reads a job request email in Gmail and builds a GST-ready invoice in under 20 seconds. No typing. No tab-switching. Syncs to Xero and QuickBooks.',
    excerpt: "A job request lands in your inbox. You open SMASH, press one button, and the invoice is sent before you move to the next email. Here's the full demo.",
    primary_keyword: 'gmail invoice extension',
    secondary_keywords: ['voice to invoice chrome extension', 'email to invoice automatically', 'invoice from gmail', 'xero quickbooks gmail sync', 'tradie invoicing app'],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T00:00:00.000Z',
    reading_time: 6,
    key_takeaways: [
      'SMASH reads your open Gmail email and extracts the job details automatically — no copy-pasting.',
      'Voice-to-invoice: describe the job out loud for 20 seconds and line items are priced from your catalog.',
      'Customer gets a secure approval and payment link. You see the read receipt the second they open it.',
      'One click syncs the completed invoice to Xero or QuickBooks — no double entry.',
      'Free to install. Works inside Gmail without switching tabs.',
    ],
    faq_data: [
      { question: 'Does SMASH work with any Gmail account?', answer: 'Yes. SMASH works with any personal or Google Workspace Gmail account. Once you install the Chrome extension, a SMASH button appears in your Gmail toolbar whenever you open an email.' },
      { question: 'Does my customer need to download anything?', answer: "No. Your customer gets a clean payment portal link in their email. They tap it, view the itemised quote, approve it, and pay — all from their phone browser. Nothing to download." },
      { question: 'How does SMASH know my prices?', answer: 'When you sign up, you upload one old invoice PDF or a CSV of your services. SMASH reads your rates, job types, and materials and builds your Pricing DNA. After that, every time you describe a job by voice, your words map straight to your numbers.' },
      { question: 'Does it work offline?', answer: 'SMASH needs a connection to process voice recordings and sync to Xero or QuickBooks. But your pricing catalog and customer history are cached locally, so you can check details even on a poor signal.' },
      { question: "Is my customer's data safe?", answer: "Yes. SMASH only reads the email thread you have open — it doesn't scan your entire inbox. Voice recordings are processed and deleted immediately after transcription. Customer data is encrypted at rest." },
      { question: 'What if the AI gets a line item wrong?', answer: "Everything is editable before you send. SMASH builds the draft and you review it. You can adjust quantities, prices, or add items before hitting send. It's a starting point, not a black box." },
    ],
    content: `Getting a quote request in your Gmail inbox should feel like progress. Instead, it feels like a task. You've got to remember what you quoted last time, log into your accounting software, type out line items from memory, check the pricing, add GST, generate a PDF, attach it, write a covering reply — and do all of that when you're already tired from actually doing the work.

That's the exact problem SMASH was built to fix.

## Watch: Full Demo — Email to Invoice in Under 20 Seconds

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/uNL733tYTf0" title="Turn Emails Into Invoices in 20 Seconds | SMASH Chrome Extension" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

In this demo you'll see the complete SMASH workflow: a real job request email → a voice recording → a priced, GST-ready invoice → customer approval → Xero sync. Start to finish in under two minutes. Real jobs take closer to 20 seconds once you've got your pricing set up.

## The Old Way vs the SMASH Way

| Step | Manual | SMASH |
|---|---|---|
| Read the email | Open Gmail | Open Gmail |
| Build the quote | Switch to accounting software, type from memory | Press SMASH — it reads the email |
| Price the job | Look up your rate sheet or guess | Your Pricing DNA does it automatically |
| Add GST | Calculate manually | Done |
| Generate PDF | Export, save, re-upload | One click |
| Send to customer | Attach PDF, write covering email | Drop into Gmail reply |
| Get approval | Hope they reply | Customer taps a payment portal link |
| Update your books | Log into Xero/QuickBooks, enter again | One-click sync |
| **Total time** | **15–25 minutes** | **Under 60 seconds** |

## How It Works — Step by Step

**0:15 — Reading the job request email**

A customer emails asking for a quote. You open it, press the SMASH button in your Gmail toolbar, and SMASH opens as a sidebar. It's already read the email — customer name, job description, materials mentioned. You don't type a word.

**0:45 — Recording the job by voice**

Press record and describe the job out loud the way you'd explain it to a mate: *"eight hours labour, replace the front door jamb, new exterior door, hinges, lock set, call-out fee, material pickup."* Press stop. Done.

**1:10 — How SMASH builds and prices the quote**

SMASH takes your description, matches it to your Pricing DNA (your uploaded rates and the 2,500-item materials catalog), and builds a fully itemised, GST-ready quote. Every line item is editable before you send.

**1:35 — Sending for customer approval**

Drop the quote into your Gmail reply in one click. Your customer gets a clean portal link — no attachments. They tap it, review the itemised breakdown, approve it, and pay. You get a read receipt the second they open it.

**1:50 — One-click sync to Xero and QuickBooks**

Once the job's done, press Export. The invoice goes straight to your Xero or QuickBooks account — customer name, line items, totals, GST. Your bookkeeper sees it without you lifting another finger.

## What Tradies Are Saying

> *"I used to sit at my kitchen table for an hour every night doing quotes. Now I do them in the car before I drive away from the job. It's genuinely changed how I run my business."*
> **— Luke F., plumber, Brisbane**

> *"The from-email button is the one. Customer writes in, I open it, press From Email, and the quote's done. I didn't type a single character."*
> **— Amy C., cleaner, Auckland**

> *"My Xero stays up to date without me doing anything. The sync just works. That's worth the subscription on its own."*
> **— Tony B., electrician, Sydney**

${chromeCTA}

## Who This Is Built For

SMASH is built for any self-employed service pro who gets job requests by email and hates the admin:

- **Plumbers, electricians, sparkies** — high-volume quote requests, precise pricing
- **Cleaners and housekeepers** — recurring jobs, repeat invoicing
- **Pest controllers** — detailed service catalogs and inspection reports
- **Pool maintenance and HVAC** — recurring service schedules
- **Solar installers** — complex multi-item quotes
- **NDIS support workers** — participant number tracking built in
- **Handymen and builders** — varied job types, flexible pricing

If your work starts with an email in Gmail, SMASH was built for you.

## Related Reading

- [Pest Control Invoicing From Gmail — Upload CSV Pricing](/blog/pest-control-invoicing-gmail-csv-pricing)
- [Gmail to Xero: No Typing, No Tab-Switching](/blog/gmail-to-xero-invoice-no-typing)
- [The Fastest Way to Send an Invoice in 2026](/blog/fastest-way-to-send-invoice-2026)
- [Voice to Quote: How SMASH Builds Your Estimate](/blog/voice-to-quote-feature)
`,
  },
  {
    slug: 'pest-control-invoicing-gmail-csv-pricing',
    title: 'Pest Control Invoicing From Gmail: Upload Your Pricing, Quote in Seconds',
    meta_title: 'Pest Control Invoicing From Gmail — Upload CSV Pricing & Quote Instantly | SMASH',
    meta_description: 'Pest control businesses can upload their full pricing catalog as a CSV, then let SMASH build professional quotes directly from customer emails in Gmail. No typing required.',
    excerpt: "If you're a pest controller spending 15–20 minutes on every email quote, there's a better way. Upload your pricing once, and SMASH builds the quote for you.",
    primary_keyword: 'pest control invoicing software',
    secondary_keywords: ['gmail invoice extension pest control', 'email to invoice pest control', 'csv pricing upload invoicing', 'quoting software pest control', 'pest control business tools'],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T01:00:00.000Z',
    reading_time: 7,
    key_takeaways: [
      'Upload your full pest control pricing catalog as a CSV — SMASH learns your SKUs, service names, and rates instantly.',
      'SMASH reads incoming customer emails in Gmail and matches the job description to your catalog automatically.',
      'Generate a professional, itemised quote or invoice without leaving Gmail.',
      'Send a payment portal link so customers can approve and pay by card or bank transfer.',
      'Export completed invoices to Xero or QuickBooks in one click.',
    ],
    faq_data: [
      { question: 'What format does the CSV need to be in?', answer: 'SMASH accepts a standard CSV with columns for service name, SKU (optional), unit, and price. If you have an existing price list in Excel or your accounting software, you can export it straight to CSV and upload it.' },
      { question: 'Can I upload a PDF of my existing invoice instead of a CSV?', answer: 'Yes. If you upload an existing PDF invoice, SMASH scans it and extracts your business details, line items, and pricing automatically. You can then fine-tune it and export as a CSV for future uploads.' },
      { question: "What if a customer asks for something not in my catalog?", answer: "You can add a custom line item on the fly during quote creation. It won't be saved to your catalog automatically, but you can add it from the Billing Profile tab any time." },
      { question: 'Does SMASH work for pest control report invoicing as well as quotes?', answer: 'Yes. You can create quotes, convert them to invoices, and send inspection report links to customers from the same sidebar.' },
      { question: 'Can multiple techs in my team use the same account?', answer: 'Currently SMASH is designed for solo operators and small owner-run businesses. Multi-user team features are on the roadmap. Reach out to dan@smashinvoices.com.au to be notified when they launch.' },
    ],
    content: `If you're running a pest control business, your pricing is detailed. You've got inspection fees, treatment types, chemical SKUs, per-room rates, follow-up visit charges — a list of services that took you years to work out. And every time a customer emails asking for a quote, you have to mentally sort through all of that, type it up from scratch, and hope you don't miss anything.

That's 15–20 minutes per quote. The first business to reply usually wins the job. If you're doing quotes from memory at 8pm, you're not winning.

SMASH fixes this by letting you upload your full pricing catalog once, and then building quotes automatically from customer emails.

## Watch: Pest Control Quoting From Gmail — Full Setup Demo

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/Fpb4G9AsxiM" title="Pest Control Invoicing — Upload Your Pricing & Quote From Gmail" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

This video shows the full setup: uploading a PDF business profile, importing a CSV price list, opening a real customer email, and having SMASH build the itemised quote automatically.

## The Pest Control Quoting Problem

| What customers expect | What manually quoting looks like |
|---|---|
| Quote within the hour | Quote by tonight... maybe |
| Itemised, professional invoice | Handwritten or rough template |
| Stripe / card payment option | Bank transfer only |
| Xero-synced record | Manual data entry |
| Correct SKUs and service names | Approximated from memory |

## How to Set Up SMASH for Pest Control

**Step 1 — Upload your PDF business profile**

When you sign up, upload an existing invoice PDF. SMASH reads your business name, ABN, contact details, logo, and pricing format. Sets up your brand profile instantly.

**Step 2 — Import your CSV pricing catalog**

Export your price list from your accounting software or spreadsheet as a CSV. Upload it to SMASH via the Billing Profile tab. SMASH maps each service name, SKU, and price into your personal catalog. Done once. Used forever.

**Step 3 — Open a customer email in Gmail and press From Email**

A customer emails asking for a general pest treatment, inspection, or termite check. You open it, click the SMASH button. SMASH reads the email and matches the requested services to your catalog. The quote builds itself.

**Step 4 — Review, send, and get paid**

Check the line items — they'll match your SKUs exactly. Click Copy to Gmail to drop the quote into your reply, or create a portal link so the customer can approve and pay online. Export a PDF or push to Xero or QuickBooks.

## What Pest Controllers Are Saying

> *"I used to spend Sunday nights doing quotes. I'd put it off all week and then sit there dreading it. Now it takes me two minutes per job and the customer gets it the same day."*
> **— Paul K., pest control operator, Melbourne**

> *"My pricing catalog has 80-something lines. SMASH matched every single service in the customer's email perfectly."*
> **— Rachel M., pest control business owner, Perth**

> *"The portal link is brilliant for getting sign-off before the job. Customer approves from their phone, I've got confirmation before I load the van."*
> **— James D., pest control technician, Brisbane**

${chromeCTA}

## Why Speed Matters in Pest Control

Most pest control jobs are won by the first business to send a professional-looking quote. Customers email three or four companies at once. If you're number three to reply, you've already lost.

SMASH gets you to number one. Every time.

## Related Reading

- [Turn a Gmail Email Into a Sent Invoice in 20 Seconds](/blog/gmail-email-to-invoice-20-seconds)
- [Voice to Estimate: Build Bids Without a Pen](/blog/voice-to-estimate-build-bids-without-pen)
- [SMASH for Gmail — Chrome Extension](/chrome-extension)
`,
  },
  {
    slug: 'gmail-to-xero-invoice-no-typing',
    title: 'Gmail to Xero: Turn Job Requests Into Invoices Without Typing a Word',
    meta_title: 'Gmail to Xero Invoice — No Typing, No Tab-Switching | SMASH Chrome Extension',
    meta_description: "SMASH reads your Gmail job requests and pushes a complete, itemised invoice to Xero in under 60 seconds. No manual data entry. No copy-paste. See the full demo.",
    excerpt: "If you use Xero and you're still manually entering invoices, this is the workflow you've been missing. SMASH reads the email and syncs directly to Xero.",
    primary_keyword: 'xero gmail integration',
    secondary_keywords: ['gmail to xero invoice', 'email to xero invoice automatically', 'xero chrome extension', 'voice to invoice xero', 'auto invoice xero gmail'],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T02:00:00.000Z',
    reading_time: 6,
    key_takeaways: [
      'SMASH reads an incoming customer email in Gmail and builds a complete, priced invoice automatically.',
      'The invoice pushes directly to Xero in one click — customer name, line items, GST, totals all matched.',
      'No need to log into the Xero dashboard just to create a basic invoice.',
      'Works alongside your existing Xero setup — your tax codes, chart of accounts, and branding are preserved.',
      'Free to install. No credit card required to start.',
    ],
    faq_data: [
      { question: 'Does SMASH connect directly to my Xero account?', answer: "Yes. You authenticate with Xero via OAuth when you set up the integration. After that, one click from the SMASH sidebar pushes the invoice straight to Xero. No manual copying." },
      { question: 'Will the invoice appear in Xero correctly — tax codes, account codes, all of it?', answer: "Yes. SMASH maps to your Xero account codes and tax rates. Your GST (or VAT in the UK) is calculated automatically based on your region. The invoice appears in Xero exactly as it would if you'd entered it manually." },
      { question: 'Can I send the invoice to the customer from Xero after pushing it?', answer: "Yes. Once the invoice is in Xero you can send it from there as normal, or use the SMASH portal link to let the customer approve and pay via Stripe directly." },
      { question: 'What if I already have the customer in Xero?', answer: "SMASH checks your Xero contact list when syncing. If the customer already exists, the invoice is attached to their existing record. If they're new, SMASH creates the contact in Xero automatically." },
      { question: 'Does this work for quotes as well as invoices?', answer: "Yes. You can create a quote in SMASH, send it to the customer for approval, and then convert it to an invoice and push to Xero once the job is complete." },
    ],
    content: `If you use Xero to run your books, you already know it's great accounting software. It keeps your records clean, your tax sorted, and your accountant happy.

What it doesn't have is a way to take a job request from Gmail and turn it into a Xero invoice without switching tabs, logging in, and typing everything out by hand. That gap costs you 15–20 minutes every time you need to quote.

SMASH fills that gap.

## Watch: Gmail to Xero Invoice — Live Demo

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/Aw_9oXMEVME" title="Turn Job Requests Into Xero Invoices Without Typing a Word" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

This is the full workflow: a customer email lands in Gmail → SMASH reads it → builds the itemised quote → syncs it to Xero. Under 60 seconds. No typing. No copy-paste. No logging into the Xero dashboard.

## The Missing Link Between Gmail and Xero

| Without SMASH | With SMASH |
|---|---|
| Read email in Gmail | Read email in Gmail |
| Switch to Xero dashboard | Press SMASH button — stays in Gmail |
| Create new invoice manually | SMASH reads email and builds quote |
| Type customer name, look up contact | Customer pulled from email automatically |
| Enter line items from memory | Line items matched from your catalog |
| Calculate GST manually | GST calculated for your region |
| Save and send | Drop into Gmail reply or send portal link |
| **Total time: 15–20 mins** | **Total time: under 60 seconds** |

## How the Xero Integration Works

**SMASH reads the email.** You get a job request. Open it, click the SMASH button. SMASH extracts the customer's name, email, and the job details from the body of the email.

**From Email builds the quote.** Press *From Email*. SMASH matches the job details to your SKUs and pricing catalog. Quantities, unit prices, GST — all done. You review it, adjust if needed.

**One click to Xero.** Press *Export to Xero*. SMASH authenticates via your Xero OAuth connection and creates the invoice. If the customer is already in your Xero contacts, it attaches to their record. New customers are created automatically.

**The invoice is in Xero in under 60 seconds.** You never had to leave Gmail.

## What Xero Users Are Saying

> *"I always thought the Xero mobile app was as good as it got. This is so much faster. The invoice is in Xero before I've even replied to the customer's email."*
> **— Sarah T., plumber, Christchurch**

> *"Our bookkeeper kept complaining that my Xero records were inconsistent. Since I started using SMASH, everything goes through the same flow and she hasn't mentioned it once."*
> **— Marcus H., handyman, Sydney**

> *"I set it up in about 10 minutes. Connected to Xero, uploaded my pricing, opened an email, sent a quote. Couldn't believe it was that simple."*
> **— Claire O., cleaner, Auckland**

${chromeCTA}

## Also Good to Know

SMASH works alongside your existing Xero setup — it doesn't replace it. Your accountant still logs into Xero as normal. Your chart of accounts, payment terms, and branding stay exactly as they are. SMASH is purely the speed layer between Gmail and Xero that Xero itself never built.

## Related Reading

- [Turn a Gmail Email Into a Sent Invoice in 20 Seconds](/blog/gmail-email-to-invoice-20-seconds)
- [The Gmail to QuickBooks Bridge](/blog/gmail-quickbooks-xero-bridge)
- [Xero Too Complicated for a Sole Trader?](/blog/xero-too-complicated-sole-trader)
- [SMASH Xero Integration](/integrations-xero)
`,
  },
  {
    slug: 'quickbooks-gmail-chrome-extension-missing',
    title: "What QuickBooks Doesn't Have (And Why I Built It)",
    meta_title: "What QuickBooks Doesn't Have for Gmail Invoicing — And the Fix | SMASH",
    meta_description: "QuickBooks is great for your books. But there's no Chrome extension, no Gmail sidebar, no way to quote from your inbox without switching tabs. SMASH fills the gap.",
    excerpt: "I've paid QuickBooks $60 a month for 10 years. It's great software. But it has never had a Gmail integration, and that one gap costs me 20 minutes on every single quote.",
    primary_keyword: 'quickbooks gmail integration',
    secondary_keywords: ['quickbooks chrome extension', 'gmail to quickbooks invoice', 'voice to invoice quickbooks', 'invoice app that works with quickbooks', 'quickbooks invoicing from email'],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T03:00:00.000Z',
    reading_time: 6,
    key_takeaways: [
      "QuickBooks has no Chrome extension and no Gmail sidebar — that gap means manual data entry on every quote.",
      'SMASH lives inside Gmail and connects directly to QuickBooks, acting as the speed layer QB is missing.',
      'Voice-to-invoice: describe the job out loud, SMASH prices it from your catalog and syncs to QuickBooks.',
      'The whole flow — email to sent invoice to QuickBooks record — takes under two minutes.',
      'Free to start. No disruption to your existing QuickBooks setup.',
    ],
    faq_data: [
      { question: 'Will this mess with my existing QuickBooks data?', answer: "No. SMASH only adds new invoices to QuickBooks — it doesn't modify existing records. Your existing customers, accounts, tax codes, and settings are untouched. It connects via the official QuickBooks API." },
      { question: 'Do I need a certain QuickBooks plan to use SMASH?', answer: "SMASH works with QuickBooks Online (Simple Start, Essentials, Plus, and Advanced). It doesn't currently support QuickBooks Desktop." },
      { question: "What happens if the customer isn't in my QuickBooks contacts yet?", answer: "SMASH creates the customer record in QuickBooks automatically using the name and email from the Gmail thread. You can review and edit the contact in QuickBooks after the invoice is created." },
      { question: 'Can I use SMASH with QuickBooks and Xero at the same time?', answer: "You can connect to one accounting platform at a time. Switch between them in your SMASH billing profile settings." },
      { question: "I mostly quote over the phone, not by email. Does SMASH still help?", answer: "Absolutely. The voice-to-invoice feature doesn't require an email. Open SMASH, press Start Recording, describe the job out loud, and it builds the quote from your voice. Then push to QuickBooks." },
    ],
    content: `I've been a handyman for 10 years. For most of that time I've paid QuickBooks $60 a month to keep my books straight. It's genuinely good accounting software — my accountant loves it, my records are clean, my BAS is straightforward.

But there's one thing QuickBooks has never had: a Chrome extension. No Gmail sidebar. No way to take a job request sitting in my inbox and turn it into an invoice without opening a new tab, logging in, and typing everything out by hand.

That gap costs me 20 minutes on every single quote. And when you're doing three or four quotes a day, that's over an hour of unpaid admin — every day.

So I built SMASH.

## Watch: QuickBooks + Gmail — The 2-Minute Invoice Demo

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/S3O2qjwfDiw" title="I've paid QuickBooks $60/month for 10 years and they still don't have this" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

In this video you'll see the full voice-to-invoice workflow: a job request email → a 30-second voice recording → a complete priced quote → exported to QuickBooks. Under two minutes total.

## What QuickBooks Does vs What SMASH Does

| Task | QuickBooks | SMASH |
|---|---|---|
| Track income and expenses | ✅ | — |
| BAS and tax reporting | ✅ | — |
| Turn a Gmail email into a quote | ❌ | ✅ |
| Voice-to-invoice from your inbox | ❌ | ✅ |
| Stay inside Gmail | ❌ | ✅ |
| Build from your pricing catalog | ❌ | ✅ |
| Customer payment portal link | ❌ | ✅ |
| Push to QuickBooks with one click | — | ✅ |

SMASH isn't trying to replace QuickBooks. It's the piece QuickBooks never built — the Gmail front-end that does the data entry for you, then syncs the result straight into your books.

## The Voice-to-Invoice Flow

You get a job request email. Open it. Press SMASH. The sidebar opens and it's already read the email.

Press Start Recording. Describe the job out loud: *"Eight hours to fix the deck, ten linear metres of blackbutt decking, call-out fee, liter of stain."* Press stop. Takes about 30 seconds.

SMASH prices it. Your Pricing DNA maps your words to your rates. Line items fill in. GST calculated. Quote ready.

Export to QuickBooks. One click. The invoice appears under the customer's name. New customers are created automatically.

Start to finish: under two minutes.

## What QuickBooks Users Are Saying

> *"I genuinely didn't believe it would work the first time. I recorded myself describing a job for 30 seconds, and it had every line item right. I've been using it every day since."*
> **— Steve P., handyman, Gold Coast**

> *"I resisted anything new for years because I thought it would break my QuickBooks setup. It doesn't touch anything. It just adds invoices exactly the way I'd enter them myself."*
> **— Toni K., mobile mechanic, Adelaide**

> *"My favourite part is that I don't have to remember what I charged for things. SMASH just knows, because I uploaded my price list once at the start."*
> **— Ray J., electrician, Wellington**

${chromeCTA}

## Your QuickBooks Setup Stays Exactly the Same

SMASH connects to QuickBooks via the official OAuth API. Your accountant's login still works. Your existing customers, accounts, and categories are untouched. SMASH only adds new invoices.

## Related Reading

- [Turn a Gmail Email Into a Sent Invoice in 20 Seconds](/blog/gmail-email-to-invoice-20-seconds)
- [The Gmail to QuickBooks Bridge](/blog/gmail-quickbooks-xero-bridge)
- [Stop Juggling Tabs: The QuickBooks Sidebar for Gmail](/blog/quickbooks-gmail-sidebar-tab-switching)
- [SMASH QuickBooks Integration](/integrations-quickbooks)
`,
  },
  {
    slug: 'gmail-quickbooks-xero-bridge',
    title: 'The Gmail to QuickBooks Bridge Your Accounting Software Forgot to Build',
    meta_title: 'Gmail to QuickBooks Bridge — Invoice Without the Dashboard | SMASH',
    meta_description: "SMASH is the speed layer between Gmail and QuickBooks or Xero that your accounting software never built. 250,000-item catalog, custom services, 1-click sync.",
    excerpt: "QuickBooks is great for your accountant. But it was never built for the moment a job request lands in your inbox. SMASH is the bridge that connects the two.",
    primary_keyword: 'gmail to quickbooks bridge',
    secondary_keywords: ['invoice without quickbooks dashboard', 'gmail sidebar quickbooks', 'quickbooks speed layer gmail', 'chrome extension quickbooks invoicing', 'custom services invoicing catalog'],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T04:00:00.000Z',
    reading_time: 7,
    key_takeaways: [
      'SMASH acts as a speed layer between your Gmail inbox and QuickBooks or Xero — no tab-switching required.',
      'Your logo, rates, terms, and branding sync with your QuickBooks setup exactly.',
      'Access a 250,000-item materials catalog covering AU, NZ, UK, US, and Canada.',
      'Custom productised services — perfect for cleaners, handymen, and recurring job types.',
      'Invoice history in the sidebar lets you see what you charged a customer last time, without leaving Gmail.',
    ],
    faq_data: [
      { question: "How does SMASH sync my branding from QuickBooks?", answer: "When you connect SMASH to QuickBooks, it reads your company name, logo, and contact details from your QuickBooks profile. Your invoices sent via SMASH match your QuickBooks branding exactly." },
      { question: "What's in the 250,000-item materials catalog?", answer: "The catalog covers trade materials, labour rates, equipment, and service items priced for the Australian, New Zealand, UK, US, and Canadian markets. Prices are based on regional market averages. You can override any item with your custom rates." },
      { question: "What are custom productised services?", answer: "If you offer fixed-price services — like 'end-of-tenancy clean' or 'deck sanding' — you can save those as custom services with your price attached. When you describe the job by voice, SMASH recognises your service names and adds the correct price automatically." },
      { question: "Can I see previous invoices for a customer in the sidebar?", answer: "Yes. The History tab in the SMASH sidebar shows your recent invoices and quotes. You can find previous jobs for any customer, see what you charged, and repeat an invoice as a new draft with one tap." },
      { question: "Does SMASH work for wholesale and sales ops, not just trade businesses?", answer: "Yes. The catalog and custom service features work for any business that generates regular quotes from email. Wholesale sales reps, consultants, and high-volume service coordinators all use SMASH to process orders faster." },
    ],
    content: `There's a gap in the daily workflow of almost every service business. On one side: Gmail, where your customers live and your job requests arrive. On the other side: QuickBooks or Xero, where your accountant needs the records to live.

In between: manual data entry. Tab-switching. Typing things you already said out loud to the customer. Remembering what you charged last time. It's a gap that costs you 15–20 minutes on every quote, and nobody — not QuickBooks, not Xero — has ever bothered to fill it.

SMASH fills it.

## Watch: The Gmail to QuickBooks Bridge in Action

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/km0oJ6UjCs4" title="The Gmail to Xero Bridge: Invoicing Without the Dashboard" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

This video shows the full SMASH sidebar: branding sync from QuickBooks, the 250,000-item materials catalog, custom productised services, invoice history, and one-click export. This is why it works so well — not just how to click the buttons.

## Why It Works: Five Reasons SMASH Closes the Gap

**1. Your branding is already in there**

Connect SMASH to QuickBooks and it reads your company name, logo, rates, and terms immediately. Quotes look identical to the ones you'd build in QuickBooks.

**2. The 250,000-item catalog**

SMASH ships with a 250,000-item materials catalog covering AU, NZ, UK, US, and Canada — trade materials, equipment, labour rates, service items, all priced for your region.

| Region | Coverage |
|---|---|
| Australia | Materials, labour, GST-inclusive pricing |
| New Zealand | NZ market rates, GST |
| United Kingdom | UK pricing, VAT |
| United States | US market rates, sales tax |
| Canada | CAD pricing, HST/GST |

**3. Custom productised services**

Save your fixed-price services — weekly cleans, monthly pool maintenance, annual inspections — with your price attached. Say the job name. Done.

**4. Invoice history in the sidebar**

The History tab shows your recent invoices. See exactly what you charged a customer last time — without logging into QuickBooks.

**5. One-click sync back to your books**

When the invoice is ready, press Export. It goes to QuickBooks or Xero — correctly categorised, mapped to your chart of accounts, GST calculated.

## What Service Pros Are Saying

> *"I do about 30 quotes a week. Before SMASH I was spending a whole morning just on quoting. Now it's maybe an hour total."*
> **— Brendan T., pool maintenance, Sunshine Coast**

> *"The custom services feature is brilliant. I do the same five jobs over and over. I just say 'end of tenancy' and it fills in the whole invoice."*
> **— Jenny A., cleaner, Christchurch**

> *"I was sceptical about the catalog but the prices were really close, and it was easy to override the ones that weren't."*
> **— Mark F., handyman, Brisbane**

${chromeCTA}

## Related Reading

- [Gmail to Xero: Turn Job Requests Into Invoices Without Typing](/blog/gmail-to-xero-invoice-no-typing)
- [What QuickBooks Doesn't Have (And Why I Built It)](/blog/quickbooks-gmail-chrome-extension-missing)
- [Stop Juggling Tabs: The QuickBooks Sidebar for Gmail](/blog/quickbooks-gmail-sidebar-tab-switching)
- [Voice to Quote: How SMASH Builds Estimates Without a Keyboard](/blog/voice-to-quote-feature)
`,
  },
  {
    slug: 'quickbooks-gmail-sidebar-tab-switching',
    title: 'Stop Juggling Tabs: The QuickBooks Sidebar for Gmail That Does the Work',
    meta_title: 'Stop Tab-Switching: QuickBooks Sidebar for Gmail — Full Workflow | SMASH',
    meta_description: "Tired of switching between Gmail and QuickBooks to send a basic invoice? SMASH is the QuickBooks sidebar for Gmail. Voice the job, get paid, sync your books. Done.",
    excerpt: "You finish a job, you're knackered, and you can't even remember what you told the customer you'd charge. SMASH reads the original email, you describe the day, and the invoice is sent before you've put the kettle on.",
    primary_keyword: 'quickbooks gmail sidebar',
    secondary_keywords: ['stop tab switching invoicing', 'gmail sidebar quickbooks online', 'voice to invoice quickbooks gmail', 'customer payment portal invoice', 'quickbooks sync chrome extension'],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T05:00:00.000Z',
    reading_time: 7,
    key_takeaways: [
      'SMASH lives inside Gmail as a sidebar — no new tabs, no new software logins.',
      'Read the original job request email, then describe what you did by voice to build the invoice.',
      'Generate a customer payment portal link so they can approve and pay from their phone.',
      'Export directly to QuickBooks in one click — records sync correctly, no double entry.',
      'Your invoice history is visible in the sidebar — see what you charged a customer last time.',
    ],
    faq_data: [
      { question: "What does 'tab-switching' actually cost me?", answer: "Every time you switch from Gmail to QuickBooks, you break your focus, lose context, and spend time re-orienting. For invoicing, that means 15–20 minutes instead of 2–3. Across a week of daily quoting, that's hours of unpaid admin." },
      { question: "Does SMASH read the email automatically or do I have to paste it in?", answer: "SMASH reads the open email thread automatically when you press the SMASH button. It extracts the customer name, email address, and job details without any copying or pasting from you." },
      { question: "What is a customer payment portal link?", answer: "It's a unique web link SMASH generates for each invoice. Your customer taps it from their phone, sees the full itemised quote, approves it, and can pay via Stripe. You get a read receipt when they open it and a payment notification when they pay." },
      { question: "I sometimes can't remember exactly what I charged. Does SMASH help with that?", answer: "Yes. The History tab in the SMASH sidebar shows your recent invoices. Find the customer, see what you charged them last time, and repeat the invoice as a starting point." },
      { question: "What if I want to invoice for a job that didn't come via email?", answer: "Open SMASH in any Gmail window, press Start Recording, and describe the job. SMASH builds the invoice from your voice — no email thread needed." },
    ],
    content: `It's 6:30pm. You've finished for the day, you've just driven home, and you're sitting in the car because you know the moment you go inside you'll have to start the admin.

You've got three jobs to invoice. You can roughly remember what you did on each one. But you can't remember exactly what you quoted, you can't remember if you included the call-out fee, and the thought of logging into QuickBooks, hunting for the right customer, and typing out line items from a fogged-up memory is making you want to leave it until tomorrow.

Tomorrow becomes next week. Next week becomes "I'll chase it later." Money you earned doesn't get paid.

That's the problem SMASH solves.

## Watch: The Full End-to-End QuickBooks + Gmail Workflow

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/81spyNgsCXE" title="Stop Juggling Tabs — A QuickBooks Sidebar for Gmail" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

This video shows the real-world version of the admin wall: getting home tired, going back to the original job email, recording what you did, generating the invoice and payment link, and syncing to QuickBooks — all without leaving Gmail.

## The Tab-Juggling Tax

Every time you leave Gmail to create an invoice in QuickBooks, you pay a time tax:

| Step | Time cost |
|---|---|
| Switch from Gmail to QuickBooks | 30 seconds |
| Log in / load dashboard | 30–60 seconds |
| Navigate to New Invoice | 20 seconds |
| Find or create customer | 30–60 seconds |
| Enter line items from memory | 5–10 minutes |
| Check pricing / calculate GST | 2–3 minutes |
| Switch back to Gmail, write covering email | 3–5 minutes |
| **Total** | **13–21 minutes** |

With SMASH: you stay in Gmail the entire time. Press one button, speak for 30 seconds, review, send. Under two minutes.

## How the Workflow Actually Runs

**Step 1** — Find the job request email. Open it. Press SMASH. Sidebar opens, email already read.

**Step 2** — Press Start Recording. Describe the day out loud. Press stop.

**Step 3** — SMASH builds the itemised invoice. Labour, materials, GST — all filled from your Pricing DNA. Review and adjust if needed.

**Step 4** — Send the invoice or generate a payment portal link. Customer taps it, approves, pays by card.

**Step 5** — Press Export to QuickBooks. Record synced. Bookkeeper happy. Records clean.

Total time from parked car to done: under five minutes.

## What Tradies Are Saying

> *"I got home absolutely wrecked one night and knocked out four invoices in 20 minutes. I've never done that in my life. Usually that's a whole morning's work."*
> **— Dan W., carpenter, Wollongong**

> *"The payment portal link changed things for me. Customer gets a link, they pay from their phone, money's in my account next day. No chasing."*
> **— Lisa P., dog groomer, Melbourne**

> *"SMASH had read the email and had the customer's details already. I just recorded what I'd done and it was invoiced. Exactly what I needed."*
> **— Chris A., HVAC technician, Auckland**

${chromeCTA}

## The Brain Fog Problem

The admin wall isn't really about time. It's about mental energy. By the time you get home, the last thing your brain wants to do is switch into accountant mode.

SMASH removes most of the cognitive load. You don't have to remember the prices. You don't have to type the line items. You don't have to log into QuickBooks. The admin gets done because it stops feeling like work.

## Related Reading

- [What QuickBooks Doesn't Have (And Why I Built It)](/blog/quickbooks-gmail-chrome-extension-missing)
- [The Gmail to QuickBooks Bridge](/blog/gmail-quickbooks-xero-bridge)
- [Voice to Estimate: Build Bids Without a Pen](/blog/voice-to-estimate-build-bids-without-pen)
- [Why Tradies Hate Phones for Admin](/blog/why-tradies-hate-phones-for-admin)
`,
  },
  {
    slug: 'fastest-way-to-send-invoice-2026',
    title: 'The Fastest Way to Send an Invoice in 2026 (60-Second Speedrun)',
    meta_title: 'Fastest Way to Send an Invoice in 2026 — 60 Second Demo | SMASH',
    meta_description: "Watch SMASH turn a Gmail email into a fully-priced, sent invoice in 60 seconds flat. Voice description, auto-pricing from your catalog, Gmail reply. Done.",
    excerpt: "If invoices are stacking up and you need them out fast, this is the quickest proven workflow in 2026. Voice-to-invoice from Gmail. Under 60 seconds. No typing.",
    primary_keyword: 'fastest way to send an invoice',
    secondary_keywords: ['invoice in 60 seconds', 'fastest invoicing app 2026', 'voice to invoice speedrun', 'quick invoice from gmail', 'send invoice without typing'],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T06:00:00.000Z',
    reading_time: 5,
    key_takeaways: [
      'The fastest invoicing workflow in 2026 is voice-to-invoice from Gmail — under 60 seconds from email to sent.',
      'Press record, describe the job for 20–30 seconds, and SMASH prices it from your catalog automatically.',
      'All line items are auto-priced — materials, labour, call-out fee, GST — no typing required.',
      'The invoice is dropped into your Gmail reply with the description written for you.',
      'Free to install. No credit card. Works inside Gmail on any device.',
    ],
    faq_data: [
      { question: "How accurate is the voice recognition?", answer: "SMASH uses a dedicated voice-to-invoice AI trained on trade terminology — job types, material names, services, fees. It understands 'call-out fee', 'deck sanding', 'linear metres of blackbutt', and other trade-specific language. You can edit any line item before sending." },
      { question: "What if I have invoices stacking up — can I do multiple at once?", answer: "You'll do them one at a time, but at 60 seconds each, clearing a backlog of five invoices takes five minutes. Open the first email, press SMASH, record, send. Next email, repeat." },
      { question: "Does the 60-second claim include setup time?", answer: "No. Setup — uploading your pricing, connecting to Xero or QuickBooks — takes about 10 minutes and you only do it once. After that, individual invoices genuinely take under 60 seconds." },
      { question: "Does SMASH write the email reply for me too?", answer: "Yes. When you drop the quote into your Gmail reply, SMASH generates a short, professional covering message. You don't have to write anything — not the line items, not the email copy." },
      { question: "What's the slowest part of the process?", answer: "Honestly, it's the 3–5 seconds SMASH takes to process the voice recording. That's the only wait. Everything else is instant." },
    ],
    content: `You've got invoices stacking up. You know you need to get them out. Every hour you leave them sitting there is another hour before you get paid — and another job request you're probably missing because you're drowning in admin.

Here's the fastest proven way to clear your invoice backlog in 2026.

## Watch: 60-Second Invoice Speedrun (Real Time)

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/vLnhBVuPvXY" title="The Fastest Way to Send an Invoice in 2026 — 60 Second Speedrun" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

This is a real-time demo. Not sped up. Not edited. A job request email → a voice recording → a priced invoice dropped into a Gmail reply. The voice recording is 20 seconds. The rest is SMASH doing the work.

## Why Everything Else Is Slower

| Method | Time to send one invoice |
|---|---|
| Typing in QuickBooks or Xero | 15–25 minutes |
| Filling in a Word template | 10–15 minutes |
| Using a basic invoicing app | 5–10 minutes |
| Email reply with rough estimate | 3–5 minutes (but unprofessional) |
| **SMASH voice-to-invoice from Gmail** | **Under 60 seconds** |

The gap isn't magic. It's because every other method requires you to type. SMASH replaces typing with talking — and talking is at least 4x faster than typing, especially when you're tired.

## The Exact 60-Second Sequence

**0–5 seconds**: Open the job request email. Click SMASH. Sidebar opens.

**5–30 seconds**: Press record. Describe the job out loud: *"Eight hours to repair the deck, eight linear metres of blackbutt decking, packet of galvanised screws, litre of decking oil, two sanding pads, call-out fee, material pickup fee."* Press stop.

**30–35 seconds**: SMASH processes the recording. All line items fill in. Materials priced from your catalog. GST calculated.

**35–50 seconds**: Review the line items. Everything looks right. Press Copy to Gmail.

**50–60 seconds**: SMASH drops the itemised invoice into your reply — with a professional covering description written for you. Hit send.

Done. Invoice sent. Under 60 seconds.

## What Makes It This Fast

**Your pricing catalog does the heavy lifting.** Upload your rates and services once. Every time you describe a job after that, SMASH already knows what things cost.

**Voice is faster than typing.** Most people speak at 130–150 words per minute. Most people type at 40–60 words per minute — and that's when they're not tired.

**You don't write the email.** SMASH generates the covering message too. Your customer gets a professional, correctly-worded email. You didn't type a word of it.

## What Tradies Are Saying

> *"I had eleven invoices sitting there one Friday afternoon. I cleared them in about 12 minutes. I've never done anything like that in my life."*
> **— Jake R., pest controller, Sydney**

> *"It wrote the reply email for me as well. I didn't realise until I saw it. I just pressed send. That's the part that impressed me most."*
> **— Naomi T., cleaner, Brisbane**

> *"I got a quote request while I was still on the previous job. I pulled over, opened Gmail on my phone, pressed SMASH, did the voice recording, sent it before I drove away. Two minutes."*
> **— Davo K., plumber, Newcastle**

${chromeCTA}

## Clear Your Backlog Today

If you've got invoices sitting there right now, install SMASH, spend 10 minutes setting up your pricing, and work through your backlog. At 60 seconds per invoice, five invoices takes five minutes. Ten takes ten.

The longer invoices sit unsent, the harder it is to collect. The fastest way to get paid is to send the invoice now.

## Related Reading

- [Turn a Gmail Email Into a Sent Invoice in 20 Seconds](/blog/gmail-email-to-invoice-20-seconds)
- [What QuickBooks Doesn't Have (And Why I Built It)](/blog/quickbooks-gmail-chrome-extension-missing)
- [Stop Juggling Tabs: The QuickBooks Sidebar for Gmail](/blog/quickbooks-gmail-sidebar-tab-switching)
- [Why Every Invoicing App Fails](/blog/why-every-invoicing-app-fails)
`,
  },
];

// ─── Generate static HTML files ──────────────────────────────────────────────

function generate() {
  const blogDir = path.join(__dirname, '..', 'public', 'blog');
  fs.mkdirSync(blogDir, { recursive: true });

  let generated = 0;

  for (const post of posts) {
    const html = renderPost(post);
    const postDir = path.join(blogDir, post.slug);
    fs.mkdirSync(postDir, { recursive: true });
    fs.writeFileSync(path.join(postDir, 'index.html'), html, 'utf-8');
    console.log(`✓ Generated: /blog/${post.slug}/index.html`);
    generated++;
  }

  console.log(`\n✅ Generated ${generated} static blog post files in public/blog/`);
  console.log('   Commit these files and push to make them live on the deployed site.');
  console.log('   Run `node --import tsx/esm scripts/seed-youtube-posts.ts` separately');
  console.log('   (with network access) to also populate the Supabase database.');
}

generate();
