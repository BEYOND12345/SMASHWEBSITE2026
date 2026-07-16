/**
 * Voice + speed SEO — pillar intent anchors and cross-links on survivor posts.
 * Fixes GSC query→page mismatches (voice to invoice, on the job invoice).
 *
 * Run: npm run patch:voice-speed-links
 * Safe to re-run (idempotent markers).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { VOICE_SURVIVOR_SLUGS } from './voice-consolidation-redirects.ts';

const MODIFIED = '2026-07-16T00:00:00.000Z';
const MARKER = 'data-voice-speed-pillar="1"';

const VOICE_SPEED_SLUGS = [
  ...VOICE_SURVIVOR_SLUGS.filter((s) =>
    [
      'the-60-second-invoice-voice-to-invoice',
      'fastest-way-to-send-invoice-2026',
      'stop-admin-sundays-voice-invoicing',
      'is-voice-invoicing-accurate',
      'beyond-chatgpt-dedicated-voice-invoicing',
      'invoice-without-typing',
    ].includes(s),
  ),
  'how-long-to-send-invoice-after-job-australia',
  'word-vs-excel-vs-app-for-invoices',
  'what-is-voice-to-invoice',
  'first-quote-wins-instant-quote-on-site',
  'best-quote-and-invoice-software-for-tradies',
  'send-quote-on-site-30-seconds-handyman',
];

const RELATED_LINKS = [
  { href: '/voice-invoicing', label: 'Voice to invoice on iPhone' },
  { href: '/blog/send-quote-on-site-30-seconds-handyman', label: 'Send a quote on site in ~30 seconds' },
  { href: '/blog/first-quote-wins-instant-quote-on-site', label: 'First quote wins — instant quote on site' },
  { href: '/blog/chatgpt-got-my-handyman-estimates-wrong', label: 'ChatGPT got my estimates wrong' },
  { href: '/blog/what-is-voice-to-invoice', label: 'What is voice to invoice?' },
  { href: '/blog/the-60-second-invoice-voice-to-invoice', label: 'Voice to invoice workflow' },
  { href: '/blog/fastest-way-to-send-invoice-2026', label: 'Fastest way to send an invoice' },
  { href: '/blog/how-long-to-send-invoice-after-job-australia', label: 'Send the invoice before you leave' },
  { href: '/blog/invoice-without-typing', label: 'Invoice without typing' },
];

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function intentCallout(): string {
  return `<aside class="intent-pillar" ${MARKER} aria-label="Voice and speed invoicing" style="margin:24px 0;padding:20px;border-left:3px solid var(--accent);background:rgba(223,255,0,0.06);border-radius:8px;">
  <p style="margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-dim);">On the job · about 30 seconds</p>
  <p style="margin:0;"><a href="/voice-invoicing"><strong>Voice to invoice</strong></a> — describe the job out loud on iPhone, verify priced lines from your catalog, and send before you leave. Same loop for an <a href="/blog/first-quote-wins-instant-quote-on-site">instant quote</a> that wins the job, then the <a href="/voice-invoicing">on the job invoice</a>. <a href="/blog/what-is-voice-to-invoice">What is voice to invoice?</a></p>
</aside>`;
}

function relatedNav(slug: string): string {
  const items = RELATED_LINKS.filter((l) => !l.href.includes(`/blog/${slug}`))
    .map((l) => `<li><a href="${l.href}">${escapeHtml(l.label)}</a></li>`)
    .join('');
  return `<nav class="related-posts voice-speed-related" aria-label="Voice and speed invoicing guides" style="margin:40px 0;padding:24px;border:1px solid rgba(255,255,255,0.1);border-radius:12px;">
  <h2 style="font-family:'Barlow Condensed',system-ui,sans-serif;font-size:22px;margin:0 0 12px;color:#fff;">Voice &amp; speed invoicing</h2>
  <ul style="margin:0;padding-left:20px;">${items}</ul>
</nav>`;
}

function patchHtml(html: string, slug: string): string {
  let out = html;

  // Workspace router — exact Tier A anchor
  out = out.replace(
    /<a href="\/voice-invoicing">Voice invoicing →<\/a>/g,
    '<a href="/voice-invoicing">Voice to invoice →</a>',
  );
  out = out.replace(
    /<a href="\/voice-invoicing" class="conversion-btn-outline">Voice invoicing<\/a>/g,
    '<a href="/voice-invoicing" class="conversion-btn-outline">Voice to invoice</a>',
  );

  // Intent callout — replace or insert after workspace-router
  const callout = intentCallout();
  if (out.includes(MARKER)) {
    out = out.replace(/<aside class="intent-pillar"[\s\S]*?<\/aside>/, callout);
  } else if (out.includes('</section>\n\n      <div class="prose">')) {
    out = out.replace(
      '</section>\n\n      <div class="prose">',
      `</section>\n\n      ${callout}\n\n      <div class="prose">`,
    );
  } else if (out.includes('</section>\n\n      <aside class="takeaways">')) {
    out = out.replace(
      '</section>\n\n      <aside class="takeaways">',
      `</section>\n\n      ${callout}\n\n      <aside class="takeaways">`,
    );
  }

  // how-long — exact anchor in short answer + closing CTA
  if (slug === 'how-long-to-send-invoice-after-job-australia') {
    if (!out.includes('voice to invoice</a> guide for the on-site')) {
      out = out.replace(
        'before you start the van.</p>',
        'before you start the van. See our <a href="/voice-invoicing">voice to invoice</a> guide for the on-site workflow.</p>',
      );
    }
    if (!out.includes('<strong>Invoice before you leave the driveway. Every time.</strong> Use <a href="/voice-invoicing">voice to invoice</a>')) {
      out = out.replace(
        '<p><strong>Invoice before you leave the driveway. Every time.</strong>',
        '<p><strong>Invoice before you leave the driveway. Every time.</strong> Use <a href="/voice-invoicing">voice to invoice</a> on iPhone or <a href="/gmail-invoice">email to invoice</a> at your desk.',
      );
    }
  }

  // 60-second post — fix weak pillar link anchor in body + quote angle
  if (slug === 'the-60-second-invoice-voice-to-invoice') {
    out = out.replace(
      '<a href="/voice-invoicing">Learn how AI learns your customers</a>',
      '<a href="/voice-invoicing">Voice to invoice on iPhone</a>',
    );
    out = out.replace(
      '<a href="/voice-invoicing">why AI voice invoicing is the 2026 standard</a>',
      '<a href="/voice-invoicing">voice to invoice before you leave the job</a>',
    );
    if (!out.includes('Quote first when they ask')) {
      out = out.replace(
        '<h2>Why &quot;Speed to Invoice&quot; = &quot;Speed to Bank&quot;</h2>',
        '<h2>Quote first when they ask “how much?”</h2>\n<p>Same talk → verify → send loop wins the job with an <a href="/blog/first-quote-wins-instant-quote-on-site">instant quote on site</a>, then converts to the invoice when the work is done. First priced answer back usually wins.</p>\n<h2>Why &quot;Speed to Invoice&quot; = &quot;Speed to Bank&quot;</h2>',
      );
    }
  }

  if (slug === 'best-quote-and-invoice-software-for-tradies') {
    out = out.replace(
      '<a href="/voice-invoicing">Learn the voice-to-estimate workflow</a>.',
      '<a href="/blog/first-quote-wins-instant-quote-on-site">First quote wins — instant quote on site</a>. Full product flow: <a href="/voice-invoicing">voice to invoice on iPhone</a>.',
    );
    if (!out.includes('If you only remember one habit: send the priced number')) {
      out = out.replace(
        '<h2>The Verdict: Win the Job, Get Home Early</h2>',
        '<h2>The Verdict: Win the Job, Get Home Early</h2>\n<p><strong>First quote wins.</strong> If you only remember one habit: send the priced number before you leave. See <a href="/blog/first-quote-wins-instant-quote-on-site">how to send an instant quote in about 30 seconds</a>.</p>',
      );
    }
  }

  if (
    slug === 'how-long-to-send-invoice-after-job-australia' &&
    !out.includes('href="/blog/first-quote-wins-instant-quote-on-site">instant quote')
  ) {
    out = out.replace(
      'Use the same voice loop for an instant quote, then invoice when done.</p>',
      'Use the same voice loop for an <a href="/blog/first-quote-wins-instant-quote-on-site">instant quote</a>, then invoice when done.</p>',
    );
  }

  // Related nav — single block (remove duplicates from prior runs)
  const nav = relatedNav(slug);
  out = out.replace(/<nav class="related-posts voice-speed-related"[\s\S]*?<\/nav>\s*/g, '');
  out = out.replace(/<nav class="related-posts"[\s\S]*?<\/nav>\s*/g, '');
  if (out.includes('<aside class="conversion-close">')) {
    out = out.replace(/<aside class="conversion-close">/, `${nav}\n\n      <aside class="conversion-close">`);
  } else if (out.includes('<aside class="cta-card">')) {
    out = out.replace(/<aside class="cta-card">/, `${nav}\n\n      <aside class="cta-card">`);
  }

  if (out.includes('article:modified_time')) {
    out = out.replace(
      /<meta property="article:modified_time" content="[^"]*">/,
      `<meta property="article:modified_time" content="${MODIFIED}">`,
    );
  }

  return out;
}

export function runVoiceSpeedPillarPatch(): number {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  let n = 0;
  for (const slug of VOICE_SPEED_SLUGS) {
    const filePath = path.join(root, 'public', 'blog', slug, 'index.html');
    if (!fs.existsSync(filePath)) {
      console.warn(`  skip (missing): ${slug}`);
      continue;
    }
    const html = fs.readFileSync(filePath, 'utf-8');
    fs.writeFileSync(filePath, patchHtml(html, slug), 'utf-8');
    console.log(`✓ ${slug}`);
    n++;
  }
  return n;
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) ===
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'patch-voice-speed-pillar-links.ts');

if (isMain) {
  const n = runVoiceSpeedPillarPatch();
  console.log(`\nPatched ${n}/${VOICE_SPEED_SLUGS.length} posts with voice + speed pillar links.`);
}
