/**
 * Inject AI estimate money-page links into high-value blog HTML.
 * Idempotent via data-estimate-cluster marker.
 * Run: node --experimental-strip-types scripts/patch-estimate-cluster-links.ts
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const blogDir = path.join(root, 'public', 'blog');
const MARKER = 'data-estimate-cluster="1"';

const SLUGS = [
  'the-verbal-quote-trap',
  'best-quote-and-invoice-software-for-tradies',
  'stop-double-handling-invoicing-on-the-job',
  'the-60-second-invoice-voice-to-invoice',
  'fastest-way-to-send-invoice-2026',
  'what-is-voice-to-invoice',
  'smash-vs-typing-invoices',
  'the-paperwork-tax-stop-losing-money',
  'forgotten-invoices-annual-cost',
  'sunday-night-invoicing-real-cost',
];

function callout(): string {
  return `<aside class="intent-pillar" ${MARKER} aria-label="AI estimate" style="margin:24px 0;padding:20px;border-left:3px solid var(--accent);background:rgba(223,255,0,0.06);border-radius:8px;">
  <p style="margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-dim);">Win the job · under 60 seconds</p>
  <p style="margin:0;"><strong>Need a priced estimate fast?</strong> <a href="/ai-estimates">AI estimates</a> — talk the job, send from your rates. Free tool: <a href="/estimate-generator">estimate generator</a>. Then <a href="/quote-to-invoice">invoice in one tap</a>. Moat: <a href="/voice-invoicing">voice to invoice</a>.</p>
</aside>`;
}

let n = 0;
for (const slug of SLUGS) {
  const file = path.join(blogDir, slug, 'index.html');
  if (!fs.existsSync(file)) {
    console.warn(`skip missing ${slug}`);
    continue;
  }
  let html = fs.readFileSync(file, 'utf8');
  const c = callout();
  if (html.includes(MARKER)) {
    html = html.replace(/<aside class="intent-pillar"[^>]*data-estimate-cluster="1"[\s\S]*?<\/aside>/, c);
  } else if (html.includes('<div class="prose">')) {
    html = html.replace('<div class="prose">', `${c}\n\n      <div class="prose">`);
  } else {
    console.warn(`skip no prose ${slug}`);
    continue;
  }
  fs.writeFileSync(file, html);
  n++;
  console.log(`✓ ${slug}`);
}
console.log(`\nPatched ${n}/${SLUGS.length} estimate-cluster posts.`);
