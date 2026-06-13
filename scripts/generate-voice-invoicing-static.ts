/**
 * Pre-render /voice-invoicing as static HTML for crawlers (same pattern as Gmail landings).
 * Run: npm run generate:voice-static
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://smashinvoices.com';
const PATH = '/voice-invoicing';
const APP_STORE = 'https://apps.apple.com/au/app/smash-invoices/id6759475079';
const CHROME_STORE =
  'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';
const YT_ID = 'uNL733tYTf0';
const MODIFIED = '2026-06-12';

const title = 'Send an Invoice in 30 Seconds — Talk, Verify, Send | SMASH';
const description =
  'Finished the job? Describe it out loud. SMASH builds a priced invoice from your catalog in ~30 seconds — nothing guessed. iPhone app + Gmail extension. Start free.';

const faqs = [
  {
    q: 'How fast can I send an invoice after a job?',
    a: 'Under 60 seconds for a typical job: talk for 20–30 seconds, verify the line items SMASH matched to your catalog, then send. Once your Price Hub is set up, many invoices are out in under 30 seconds.',
  },
  {
    q: 'What is voice to invoice?',
    a: 'Voice to invoice means describing the completed job out loud and having software build a structured, priced invoice from your speech. SMASH matches what you said to your own rates and materials — unmatched items are flagged for you, not guessed.',
  },
  {
    q: 'Can I invoice without typing?',
    a: 'Yes. On iPhone you speak the job. In Gmail you can scan the email, upload a PDF, or use voice in the sidebar. You always review before anything is sent.',
  },
  {
    q: 'Does SMASH use my own prices?',
    a: 'Yes. Quotes and invoices are built from your Price Hub — your labour rates, fees, and catalog. SMASH does not invent prices. If it cannot match an item confidently, it flags it for you to price manually.',
  },
  {
    q: 'Does voice invoicing work in Australia?',
    a: 'Yes. GST, ABN fields, and ATO-compliant tax invoice layout are built in. SMASH also runs in NZ, the UK, the US, and Canada with local tax and currency.',
  },
];

function esc(t: string): string {
  return t.replace(/[&<>"']/g, (m) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m] ?? m
  );
}

function ld(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

const canonical = `${SITE}${PATH}`;
const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};
const howToLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Send an invoice in under 60 seconds',
  description: 'Describe the job out loud, verify priced line items from your catalog, send to your customer.',
  step: [
    { '@type': 'HowToStep', name: 'Talk', text: 'Describe what you did, materials used, and time on site — 20–30 seconds.' },
    { '@type': 'HowToStep', name: 'Verify', text: 'Review line items priced from your catalog. Fix anything flagged.' },
    { '@type': 'HowToStep', name: 'Send', text: 'Send a professional quote or invoice link before you leave the job.' },
  ],
};
const videoLd = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Fastest way to send an invoice — 60 second demo',
  description: 'Watch SMASH turn a spoken job description into a priced, send-ready invoice.',
  thumbnailUrl: `https://i.ytimg.com/vi/${YT_ID}/maxresdefault.jpg`,
  embedUrl: `https://www.youtube.com/embed/${YT_ID}`,
  contentUrl: `https://www.youtube.com/watch?v=${YT_ID}`,
  uploadDate: '2026-01-01',
};
const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Send invoice fast', item: canonical },
  ],
};

const faqHtml = faqs
  .map(
    (f) => `<details style="border-bottom:1px solid rgba(255,255,255,0.08);padding:16px 0;">
  <summary style="cursor:pointer;font-weight:700;list-style:none;">${esc(f.q)}</summary>
  <p style="color:rgba(255,255,255,0.65);margin:12px 0 0;line-height:1.6;">${esc(f.a)}</p>
</details>`
  )
  .join('');

const html = `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="keywords" content="voice to invoice, send invoice after job, invoice without typing, fastest way to invoice, invoice from phone, on the job invoice">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta property="og:site_name" content="SMASH Invoices">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${SITE}/hero_image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <script type="application/ld+json">${ld(breadcrumbLd)}</script>
  <script type="application/ld+json">${ld(faqLd)}</script>
  <script type="application/ld+json">${ld(howToLd)}</script>
  <script type="application/ld+json">${ld(videoLd)}</script>
  <style>
    body{margin:0;background:#0A0A0A;color:#f5f5f5;font-family:system-ui,sans-serif;line-height:1.6;}
    a{color:#D9F99D;}main{max-width:720px;margin:0 auto;padding:32px 20px 64px;}
    h1{font-size:clamp(2rem,5vw,3rem);line-height:1.05;margin:0 0 16px;}
    .lead{font-size:1.2rem;color:rgba(255,255,255,0.7);margin:0 0 28px;}
    .cta{display:inline-block;background:#DFFF00;color:#0A0A0A;padding:14px 24px;border-radius:12px;font-weight:800;text-decoration:none;margin:8px 8px 8px 0;}
    .video{position:relative;padding-bottom:56.25%;margin:32px 0;border-radius:16px;overflow:hidden;background:#111;}
    .video iframe{position:absolute;inset:0;width:100%;height:100%;border:0;}
    h2{font-size:1.5rem;margin:40px 0 12px;}
    ul{padding-left:1.2rem;}li{margin:8px 0;}
    footer{text-align:center;padding:32px 20px;border-top:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.45);font-size:14px;}
  </style>
</head>
<body>
  <main>
    <p style="text-transform:uppercase;letter-spacing:0.15em;font-size:11px;color:rgba(255,255,255,0.45);">Problem → solution</p>
    <h1>Send the invoice before you leave the job</h1>
    <p class="lead">You finished the work. The customer wants a number. Talk for 30 seconds — SMASH builds a priced invoice from <strong>your</strong> catalog. Verify. Send. Back to your day.</p>
    <a class="cta" href="${APP_STORE}" rel="noopener noreferrer">Get the iPhone app — Start free</a>
    <a class="cta" href="${CHROME_STORE}" rel="nofollow noopener noreferrer">Add to Gmail — Start free</a>
    <div class="video">
      <iframe src="https://www.youtube.com/embed/${YT_ID}?rel=0" title="Fastest way to send an invoice — SMASH demo" allowfullscreen loading="lazy"></iframe>
    </div>
    <h2>The problem</h2>
    <p>Invoicing waits until tonight. Details fade. You re-type the same lines. Twenty minutes at the kitchen table — or the invoice never goes out.</p>
    <h2>The solution</h2>
    <ul>
      <li><strong>Talk</strong> — describe the job the way you would to a colleague.</li>
      <li><strong>Match</strong> — line items priced from your Price Hub, not guessed.</li>
      <li><strong>Verify</strong> — glance at the draft; fix anything flagged.</li>
      <li><strong>Send</strong> — quote or invoice link to your customer in one tap.</li>
    </ul>
    <h2>Voice to invoice vs typing</h2>
    <p>Word templates and most apps need 8–15 minutes of typing at a desk. SMASH is built for the moment the job ends: phone in hand, customer waiting, no keyboard.</p>
    <h2>Also works from Gmail</h2>
    <p>Work requests land in your inbox? The Chrome extension reads the open email thread, matches your catalog, and drafts a reply — same verify-and-send flow on desktop. <a href="/gmail-invoice">Gmail invoicing</a> · <a href="/chrome-extension">Chrome extension</a></p>
    <h2>Learn more</h2>
    <ul>
      <li><a href="/blog/the-60-second-invoice-voice-to-invoice">Voice to invoice in 60 seconds</a></li>
      <li><a href="/blog/fastest-way-to-send-invoice-2026">Fastest way to send an invoice (2026 demo)</a></li>
      <li><a href="/blog/invoice-without-typing">Invoice without typing</a></li>
      <li><a href="/blog/how-long-to-send-invoice-after-job-australia">How long to send an invoice after a job</a></li>
    </ul>
    <h2>FAQ</h2>
    ${faqHtml}
    <p style="margin-top:40px;font-size:13px;color:rgba(255,255,255,0.4);">Last updated ${MODIFIED}. <a href="${PATH}">Interactive version</a> (requires JavaScript).</p>
  </main>
  <footer>
    <a href="/">Home</a> · <a href="/blog">Blog</a> · <a href="/pricing">Pricing</a> · <a href="/privacy">Privacy</a>
    <div style="margin-top:12px;">© 2026 SMASH Invoices</div>
  </footer>
</body>
</html>`;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'voice-invoicing');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
console.log(`✓ ${path.join(outDir, 'index.html')}`);
