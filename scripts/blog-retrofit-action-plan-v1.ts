/**
 * Blog Action Plan v1 — retrofit A1–A3 + B1–B3 (13 Jun 2026).
 * Run: npm run retrofit:blog-action-plan-v1
 *
 * Patches committed static HTML in public/blog/{slug}/index.html.
 * Also bumps dateModified, injects answer blocks, related links, FAQ schema.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG = path.join(__dirname, '..', 'public', 'blog');
const MODIFIED = '2026-06-13T00:00:00.000Z';
const MODIFIED_DISPLAY = '13 June 2026';

type CtaMode = 'both' | 'ios' | 'chrome';

export type RetrofitSpec = {
  slug: string;
  title: string;
  meta: string;
  h1: string;
  answerBlock: string;
  cta: CtaMode;
  relatedLinks: { href: string; label: string }[];
  pillarLinks: { href: string; label: string }[];
  faqs: { question: string; answer: string }[];
  keywords: string;
};

export const ACTION_PLAN_SPECS: RetrofitSpec[] = [
  {
    slug: 'word-vs-excel-vs-app-for-invoices',
    title: 'Word vs Excel vs Invoice App: Which Gets You Paid Faster?',
    meta:
      'Typing invoices in Word or Excel costs 20+ minutes each. Compare the real time, error risk and payment speed of all three — and when a 60-second invoice app makes sense.',
    h1: 'Word vs Excel vs Invoice App: Which Gets You Paid Faster?',
    answerBlock:
      'Word and Excel invoices each take 15–20 minutes of typing, reformatting and manual GST maths — and neither sends a Pay Now link. A dedicated invoice app prices from your catalog and delivers a payable PDF in under 60 seconds by voice on site or from Gmail at your desk. For tradies doing more than one job a week, speed to send usually beats template familiarity.',
    cta: 'both',
    pillarLinks: [
      { href: '/voice-invoicing', label: 'Voice to invoice on iPhone' },
      { href: '/gmail-invoice', label: 'Gmail invoice extension' },
    ],
    relatedLinks: [
      { href: '/blog/how-long-to-send-invoice-after-job-australia', label: 'How long after a job should you send the invoice?' },
      { href: '/blog/fastest-way-to-send-invoice-2026', label: 'Fastest way to send an invoice in 2026' },
      { href: '/blog/the-60-second-invoice-voice-to-invoice', label: 'The 60-second invoice workflow' },
    ],
    faqs: [
      {
        question: 'Is Word or Excel better for invoices?',
        answer:
          'Excel is better than Word for GST maths, but both require 15+ minutes of manual entry per job. Apps price from your catalog and send a payable PDF in under 60 seconds.',
      },
      {
        question: 'How long does a Word invoice take vs an app?',
        answer:
          'Word or Excel typically takes 15–20 minutes per invoice. Voice or Gmail invoicing with SMASH takes under 60 seconds once your catalog is set up.',
      },
      {
        question: 'When does an invoice app make sense over templates?',
        answer:
          'If you do more than one job a week, template time compounds fast. Apps remove retyping, fix GST automatically, and add card payment links clients can use immediately.',
      },
    ],
    keywords:
      'word vs excel invoice, invoice app vs excel, fastest way to send invoice, invoicing app comparison, get paid faster invoice',
  },
  {
    slug: 'how-long-to-send-invoice-after-job-australia',
    title: 'How Long After a Job Should You Send the Invoice? (Australia)',
    meta:
      'Send it before you leave the driveway. Why same-day invoices get paid days faster, what the late-payment data shows, and the ~30-second voice way to invoice on site.',
    h1: 'How Long After a Job Should You Send the Invoice?',
    answerBlock:
      'In Australia, send the invoice before you leave the job site — same day, while details are fresh. Invoices sent within 24 hours get paid significantly faster than those left until Sunday night. Talk on site, verify line items against your catalog, and send a GST-ready PDF with a Pay Now link in about 30 seconds — before you start the van.',
    cta: 'ios',
    pillarLinks: [
      { href: '/voice-invoicing', label: 'Voice to invoice on iPhone' },
      { href: '/voice-invoicing', label: 'On the job invoice — send before you leave' },
    ],
    relatedLinks: [
      { href: '/blog/what-is-voice-to-invoice', label: 'What is voice to invoice?' },
      { href: '/blog/fastest-way-to-send-invoice-2026', label: 'Fastest way to send an invoice in 2026' },
      { href: '/blog/word-vs-excel-vs-app-for-invoices', label: 'Word vs Excel vs invoice app' },
      { href: '/blog/stop-admin-sundays-voice-invoicing', label: 'Stop Sunday-night invoicing' },
    ],
    faqs: [
      {
        question: 'How long after a job should you send an invoice in Australia?',
        answer:
          'Same day — ideally before you leave the site. Details fade within hours and delayed invoices consistently take longer to get paid.',
      },
      {
        question: 'Does sending invoices faster improve payment speed?',
        answer:
          'Yes. Invoices sent within 24 hours of job completion are paid days faster than batch invoicing at week\'s end.',
      },
      {
        question: 'Can you invoice from your phone on site?',
        answer:
          'Yes. Describe the job out loud, verify priced line items, and send a compliant PDF with GST and a card payment link in about 30 seconds.',
      },
    ],
    keywords:
      'how long to send invoice after job, send invoice immediately australia, invoice same day, on the job invoice, voice to invoice',
  },
  {
    slug: 'how-to-invoice-as-an-electrician-australia',
    title: 'How to Invoice as an Electrician in Australia (With Example)',
    meta:
      'What a compliant electrician invoice needs — ABN, GST, line items, payment terms — plus how to send it from your phone before you leave the job.',
    h1: 'How to Invoice as an Electrician in Australia',
    answerBlock:
      'An electrician tax invoice in Australia needs your business name, ABN, licence number, invoice date, itemised labour and materials, GST breakdown, and payment terms. Most sole-trader sparkies lose money on cable and fittings they forget to itemise. Send the invoice from your phone before you leave — talk through the job, verify catalog prices, and deliver a compliant PDF in under 60 seconds.',
    cta: 'ios',
    pillarLinks: [{ href: '/voice-invoicing', label: 'Voice invoicing for electricians on site' }],
    relatedLinks: [
      { href: '/blog/how-to-invoice-as-a-plumber-australia', label: 'How to invoice as a plumber' },
      { href: '/blog/how-to-invoice-as-a-handyman-australia', label: 'How to invoice as a handyman' },
      { href: '/blog/how-long-to-send-invoice-after-job-australia', label: 'How long to wait before sending an invoice' },
    ],
    faqs: [
      {
        question: 'What must an electrician invoice include in Australia?',
        answer:
          'ABN, business name, invoice date, description of work, itemised labour and materials, GST if registered, and your electrical contractor licence number.',
      },
      {
        question: 'Do electricians need to list materials separately?',
        answer:
          'Yes. Itemised materials with quantities and unit prices reduce disputes and help you recover cable, conduit, and fitting costs you would otherwise absorb.',
      },
      {
        question: 'Can electricians send invoices from their phone on site?',
        answer:
          'Yes. Voice invoicing builds a priced, GST-ready PDF from your catalog while you are still at the job — no laptop required.',
      },
    ],
    keywords:
      'how to invoice as an electrician australia, electrician invoice example, electrician tax invoice, invoice from phone electrician',
  },
  {
    slug: 'can-chatgpt-generate-invoices-tradie-guide',
    title: 'Can ChatGPT Generate Invoices? What Works and What Breaks',
    meta:
      'ChatGPT can draft invoice wording but can\'t hold your pricing, apply GST, or send a payable PDF. What it does well, where it fails, and what to use instead.',
    h1: 'Can ChatGPT Generate Invoices? What Works and What Breaks',
    answerBlock:
      'ChatGPT can draft invoice wording and rough line-item descriptions, but it cannot store your labour rates, apply Australian GST rules, generate sequential invoice numbers, or send a client-ready PDF with card payment. For tradies, the gap is not writing text — it is pricing from your catalog and getting paid. Use ChatGPT for drafts; use a dedicated tool to send compliant invoices in under 60 seconds.',
    cta: 'both',
    pillarLinks: [
      { href: '/voice-invoicing', label: 'Voice invoicing on iPhone' },
      { href: '/gmail-invoice', label: 'Invoice from Gmail' },
      { href: '/ai-invoicing', label: 'AI invoicing for tradies' },
    ],
    relatedLinks: [
      { href: '/blog/beyond-chatgpt-dedicated-voice-invoicing', label: 'Why a dedicated invoicing tool beats ChatGPT' },
      { href: '/blog/word-vs-excel-vs-app-for-invoices', label: 'Word vs Excel vs invoice app' },
      { href: '/blog/the-60-second-invoice-voice-to-invoice', label: 'The 60-second invoice workflow' },
    ],
    faqs: [
      {
        question: 'Can ChatGPT create a real tax invoice?',
        answer:
          'It can draft text, but not a compliant tax invoice with your ABN, GST, catalog pricing, sequential numbers, and a payable PDF clients can use.',
      },
      {
        question: 'What does ChatGPT get wrong on tradie invoices?',
        answer:
          'It guesses prices, omits call-out fees and materials markup, and cannot sync to Xero or QuickBooks or send payment links.',
      },
      {
        question: 'What should tradies use instead of ChatGPT for invoicing?',
        answer:
          'Dedicated AI invoicing that prices from your catalog — by voice on site or from Gmail at your desk — and sends a GST-ready PDF in under 60 seconds. See our AI invoicing guide for the full workflow.',
      },
    ],
    keywords:
      'can chatgpt generate invoices, chatgpt invoice tradie, ai invoice generator, chatgpt vs invoicing app',
  },
  {
    slug: 'gmail-quickbooks-xero-bridge',
    title: 'Turn a Gmail Email Into a Xero or QuickBooks Invoice',
    meta:
      'Stop retyping customer emails into your accounting software. From email to a synced Xero or QuickBooks invoice in under 60 seconds — without leaving Gmail.',
    h1: 'Turn a Gmail Email Into a Xero or QuickBooks Invoice',
    answerBlock:
      'Customer requests land in Gmail — not in your accounting dashboard. SMASH reads the open thread, prices line items from your catalog, and pushes a draft invoice or quote to Xero or QuickBooks without tab-switching. Install the Chrome sidebar, open the email, verify the priced document, and sync in under 60 seconds. No retyping customer details or SKUs.',
    cta: 'chrome',
    pillarLinks: [
      { href: '/gmail-invoice', label: 'Gmail invoice extension' },
      { href: '/integrations/xero', label: 'SMASH + Xero integration' },
      { href: '/integrations/quickbooks', label: 'SMASH + QuickBooks integration' },
    ],
    relatedLinks: [
      { href: '/blog/gmail-email-to-invoice-20-seconds', label: 'Gmail email to invoice in 20 seconds' },
      { href: '/blog/quickbooks-gmail-invoice-shortcut', label: 'QuickBooks Gmail invoice shortcut' },
      { href: '/blog/gmail-to-xero-invoice-no-typing', label: 'Gmail to Xero invoice without typing' },
    ],
    faqs: [
      {
        question: 'Can you create a Xero invoice from Gmail?',
        answer:
          'Yes. SMASH\'s Chrome extension reads the open Gmail thread, builds a priced invoice or quote, and syncs it to Xero as a draft or approved document.',
      },
      {
        question: 'Does SMASH work with QuickBooks Online and Gmail?',
        answer:
          'Yes. Open the customer email in Gmail, generate the invoice in the sidebar, and push to QuickBooks Online without re-entering line items.',
      },
      {
        question: 'Do you need to leave Gmail to invoice?',
        answer:
          'No. The entire workflow — read email, price, verify, sync — happens inside the Gmail sidebar in Chrome.',
      },
    ],
    keywords:
      'gmail xero invoice, gmail quickbooks invoice, email to invoice, send xero quote from gmail, gmail invoice extension',
  },
  {
    slug: 'how-to-invoice-appliance-repair-callouts',
    title: 'How to Invoice Appliance Repair Call-Outs (Parts + Labour)',
    meta:
      'Split the call-out fee, parts and labour properly — and send the invoice from the driveway in under 60 seconds, GST handled.',
    h1: 'How to Invoice Appliance Repair Call-Outs (Parts + Labour)',
    answerBlock:
      'Appliance repair call-out invoices should separate the diagnostic or call-out fee, labour hours, and parts with markup on distinct lines — never buried in one lump sum. Include ABN, GST, payment terms, and warranty notes on parts. Send from the driveway: talk through the repair, verify catalog prices for parts and labour, and deliver a GST-ready PDF before you leave the property.',
    cta: 'ios',
    pillarLinks: [{ href: '/voice-invoicing', label: 'Invoice appliance jobs from your phone' }],
    relatedLinks: [
      { href: '/blog/how-to-invoice-as-an-electrician-australia', label: 'How to invoice as an electrician' },
      { href: '/blog/how-to-invoice-as-a-mobile-mechanic-australia', label: 'How to invoice as a mobile mechanic' },
      { href: '/blog/how-long-to-send-invoice-after-job-australia', label: 'Send the invoice before you leave' },
    ],
    faqs: [
      {
        question: 'How do you split call-out fee and parts on an appliance invoice?',
        answer:
          'Use separate line items: call-out or diagnostic fee, labour (hours × rate), and each part with quantity and unit price including markup.',
      },
      {
        question: 'Should appliance repair invoices include GST?',
        answer:
          'If you are GST-registered, yes — show GST per line or as a summary with your ABN on the tax invoice.',
      },
      {
        question: 'Can you invoice appliance repairs from your phone on site?',
        answer:
          'Yes. Describe the call-out, labour and parts out loud; verify priced lines from your catalog; send before you leave the driveway.',
      },
    ],
    keywords:
      'appliance repair callout invoice, parts and labour invoice, invoice from driveway, appliance repair gst invoice',
  },
];

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function faqSchema(faqs: RetrofitSpec['faqs']): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }).replace(/</g, '\\u003c');
}

function relatedNav(spec: RetrofitSpec): string {
  const items = [
    ...spec.pillarLinks.map((l) => `<li><a href="${l.href}">${escapeHtml(l.label)}</a></li>`),
    ...spec.relatedLinks.map((l) => `<li><a href="${l.href}">${escapeHtml(l.label)}</a></li>`),
  ];
  return `<nav class="related-posts" aria-label="Related guides" style="margin:40px 0;padding:24px;border:1px solid rgba(255,255,255,0.1);border-radius:12px;">
  <h2 style="font-family:'Barlow Condensed',system-ui,sans-serif;font-size:22px;margin:0 0 12px;color:#fff;">Related guides</h2>
  <ul style="margin:0;padding-left:20px;">${items.join('')}</ul>
</nav>`;
}

function workspaceRouter(cta: CtaMode): string {
  const chromePrimary =
    'background:var(--accent);color:var(--accent-ink);';
  const iosPrimary =
    'background:#fff;color:var(--accent-ink);';
  const chromeStyle = cta === 'chrome' ? chromePrimary : cta === 'ios' ? '' : chromePrimary;
  const iosStyle = cta === 'ios' ? iosPrimary : cta === 'chrome' ? '' : iosPrimary;
  const chromeClass = cta === 'ios' ? 'workspace-btn' : 'workspace-btn workspace-btn-accent';
  const iosClass = cta === 'chrome' ? 'workspace-btn' : 'workspace-btn workspace-btn-white';

  return `<section class="workspace-router" aria-labelledby="workspace-heading">
    <div class="workspace-router-head"><h2 id="workspace-heading">Choose your workspace</h2></div>
    <div class="workspace-grid">
      <div class="workspace-col">
        <p class="workspace-label">On your laptop / desktop</p>
        <p>Customer email open? Price from the thread without leaving Gmail.</p>
        <h3>SMASH for Gmail</h3>
        <p>Build and sync invoices to Xero or QuickBooks in under 60 seconds.</p>
        <a href="https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel" class="${chromeClass}" style="${chromeStyle}" rel="nofollow">Add to Chrome — Free</a>
        <p style="margin-top:14px;font-size:13px;"><a href="/gmail-invoice">Gmail invoice extension →</a> · <a href="/chrome-extension">Features →</a></p>
      </div>
      <div class="workspace-col">
        <p class="workspace-label">In your truck / on-site</p>
        <p>Finished the job? Talk for 30 seconds before you leave.</p>
        <h3>SMASH for iPhone</h3>
        <p>Priced invoice from your catalog — sent before you start the van.</p>
        <a href="https://apps.apple.com/au/app/smash-invoices/id6759475079" class="${iosClass}" style="${iosStyle}" rel="nofollow">Download the iOS app</a>
        <p style="margin-top:14px;font-size:13px;"><a href="/voice-invoicing">Voice to invoice →</a></p>
      </div>
    </div>
  </section>`;
}

function conversionClose(cta: CtaMode): string {
  if (cta === 'chrome') {
    return `<aside class="conversion-close">
    <h2>Invoice from Gmail.<span class="accent-line">Sync to Xero or QuickBooks.</span></h2>
    <p style="color:rgba(255,255,255,0.75);margin:0 0 16px;">Stop retyping customer emails into your accounting software.</p>
    <div class="conversion-btns">
      <a href="https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel" class="cta-btn" rel="nofollow">Add to Chrome — Free</a>
      <a href="/gmail-invoice" class="conversion-btn-outline">Gmail invoice extension</a>
    </div>
  </aside>`;
  }
  if (cta === 'ios') {
    return `<aside class="conversion-close">
    <h2>Send before you leave.<span class="accent-line">Talk. Verify. Send.</span></h2>
    <p style="color:rgba(255,255,255,0.75);margin:0 0 16px;">Describe the job out loud — priced from your catalog in under 60 seconds.</p>
    <div class="conversion-btns">
      <a href="https://apps.apple.com/au/app/smash-invoices/id6759475079" class="cta-btn" rel="nofollow">Download the iOS app</a>
      <a href="/voice-invoicing" class="conversion-btn-outline">Voice to invoice</a>
    </div>
  </aside>`;
  }
  return `<aside class="conversion-close">
    <h2>Stop losing admin hours.<span class="accent-line">Start getting paid faster.</span></h2>
    <p style="color:rgba(255,255,255,0.75);margin:0 0 16px;">Voice on-site or Gmail at your desk — same professional invoices, zero keyboard tax.</p>
    <div class="conversion-btns">
      <a href="https://apps.apple.com/au/app/smash-invoices/id6759475079" class="cta-btn" rel="nofollow">Download the iOS app</a>
      <a href="https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel" class="conversion-btn-outline" rel="nofollow">Add to Chrome — Free</a>
    </div>
  </aside>`;
}

function patchHtml(html: string, spec: RetrofitSpec): string {
  let out = html;

  out = out.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(spec.title)} | SMASH</title>`);
  out = out.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeHtml(spec.meta)}">`,
  );
  out = out.replace(
    /<meta name="keywords" content="[^"]*">/,
    `<meta name="keywords" content="${escapeHtml(spec.keywords)}">`,
  );
  out = out.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${escapeHtml(spec.title)}">`,
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${escapeHtml(spec.meta)}">`,
  );
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${escapeHtml(spec.title)}">`,
  );
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta property="twitter:description" content="${escapeHtml(spec.meta)}">`.replace(
      'property',
      'name',
    ),
  );
  // fix twitter:description if above missed alternate attribute order
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${escapeHtml(spec.meta)}">`,
  );

  out = out.replace(
    /<meta property="article:modified_time" content="[^"]*">/,
    `<meta property="article:modified_time" content="${MODIFIED}">`,
  );
  out = out.replace(/<span>Updated [^<]+<\/span>/, `<span>Updated ${MODIFIED_DISPLAY}</span>`);

  out = out.replace(/<h1 class="post-title">.*?<\/h1>/, `<h1 class="post-title">${escapeHtml(spec.h1)}</h1>`);

  // Answer block — replace first prose paragraph
  const answerP = `<p><strong>Short answer:</strong> ${escapeHtml(spec.answerBlock)}</p>`;
  out = out.replace(/(<div class="prose">)\s*<p>[\s\S]*?<\/p>/, `$1\n${answerP}`);

  // Workspace router
  out = out.replace(/<section class="workspace-router"[\s\S]*?<\/section>/, workspaceRouter(spec.cta));

  // Related nav — insert before conversion-close, cta-card, or faq section
  if (!out.includes('class="related-posts"')) {
    const related = `${relatedNav(spec)}\n\n      `;
    if (out.includes('<aside class="conversion-close">')) {
      out = out.replace(/<aside class="conversion-close">/, `${related}<aside class="conversion-close">`);
    } else if (out.includes('<aside class="cta-card">')) {
      out = out.replace(/<aside class="cta-card">/, `${related}<aside class="cta-card">`);
    } else if (out.includes('<section class="faq">')) {
      out = out.replace(/<section class="faq">/, `${related}<section class="faq">`);
    }
  } else {
    out = out.replace(/<nav class="related-posts[^"]*"[\s\S]*?<\/nav>/, relatedNav(spec));
  }

  // Conversion close (when present)
  if (out.includes('<aside class="conversion-close">')) {
    out = out.replace(/<aside class="conversion-close">[\s\S]*?<\/aside>/, conversionClose(spec.cta));
  }

  // FAQ schema — remove existing FAQPage blocks, add fresh
  out = out.replace(
    /<script type="application\/ld\+json">\{[^<]*"@type":"FAQPage"[\s\S]*?<\/script>\s*/g,
    '',
  );
  out = out.replace(
    /<script type="application\/ld\+json">\{[^<]*'@type':'FAQPage'[\s\S]*?<\/script>\s*/g,
    '',
  );
  const faqScript = `  <script type="application/ld+json">${faqSchema(spec.faqs)}</script>\n`;
  out = out.replace(/<\/head>/, `${faqScript}</head>`);

  // Article schema dateModified + headline
  out = out.replace(/"dateModified":"[^"]*"/, `"dateModified":"${MODIFIED}"`);
  out = out.replace(/"headline":"[^"]*"/, `"headline":"${spec.title.replace(/"/g, '\\"')}"`);

  return out;
}

export function runActionPlanRetrofit(): number {
  let ok = 0;
  for (const spec of ACTION_PLAN_SPECS) {
    const file = path.join(BLOG, spec.slug, 'index.html');
    if (!fs.existsSync(file)) {
      console.warn(`✗ missing ${file}`);
      continue;
    }
    const html = fs.readFileSync(file, 'utf-8');
    fs.writeFileSync(file, patchHtml(html, spec));
    console.log(`✓ retrofitted public/blog/${spec.slug}/index.html`);
    ok++;
  }
  return ok;
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) ===
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'blog-retrofit-action-plan-v1.ts');

if (isMain) {
  const ok = runActionPlanRetrofit();
  console.log(`\nDone: ${ok}/${ACTION_PLAN_SPECS.length} posts`);
}
