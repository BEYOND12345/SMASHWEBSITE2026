/**
 * Static HTML for legal/support pages — required for Chrome Web Store URL verification
 * and other crawlers that do not execute the React SPA.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://smashinvoices.com';

function shell(title: string, description: string, canonicalPath: string, body: string): string {
  const url = `${SITE}${canonicalPath}`;
  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${url}">
  <meta name="robots" content="index, follow">
  <style>
    body{margin:0;background:#0A0A0A;color:#F5F5F5;font-family:system-ui,-apple-system,sans-serif;line-height:1.65;padding:32px 24px 64px;}
    .wrap{max-width:760px;margin:0 auto;}
    a{color:#D9F99D;}
    h1{font-size:clamp(32px,5vw,48px);line-height:1.05;margin:0 0 12px;}
    h2{font-size:24px;margin:32px 0 12px;}
    p,li{color:rgba(255,255,255,0.82);}
    .meta{color:rgba(255,255,255,0.55);margin-bottom:28px;}
    .card{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:20px;margin-top:16px;}
    nav{margin-bottom:28px;font-size:14px;}
  </style>
</head>
<body>
  <div class="wrap">
    <nav><a href="${SITE}/">SMASH Invoices</a> · <a href="${SITE}/chrome-extension">Chrome extension</a> · <a href="${SITE}/privacy">Privacy</a> · <a href="${SITE}/support">Support</a></nav>
    ${body}
  </div>
</body>
</html>`;
}

const privacyHtml = shell(
  'Privacy Policy | SMASH Invoices',
  'Privacy Policy for SMASH Invoices. How we collect, use, and protect your data. ABN 58 600 491 085.',
  '/privacy',
  `<h1>Privacy Policy</h1>
<p class="meta">Last updated: 30 March 2026</p>
<p>SMASH Invoices ("SMASH", "we", "us", "our") is operated by Daniel Neale (ABN 58 600 491 085), based in Australia. This Privacy Policy explains how we collect, use, and protect your personal information when you use the SMASH Invoices app, Chrome extension, and website (${SITE.replace('https://', '')}).</p>
<p>By using SMASH, you agree to the collection and use of information in accordance with this policy. We comply with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).</p>
<h2>Information we collect</h2>
<ul>
  <li><strong>Account information</strong> — name, email, and business details you provide.</li>
  <li><strong>Voice recordings</strong> — processed for transcription; not stored permanently after processing.</li>
  <li><strong>Business data</strong> — quotes, invoices, and customer records you create.</li>
  <li><strong>Payment information</strong> — processed by Stripe; we do not store card details.</li>
  <li><strong>Usage and device data</strong> — for support, debugging, and product improvement.</li>
</ul>
<h2>How we use your information</h2>
<p>We use your information to operate SMASH, generate quotes and invoices, send documents to your customers, process subscriptions, respond to support requests, and comply with legal obligations. We do not sell your personal information or use your business data to train AI models.</p>
<h2>Third-party services</h2>
<p>We use Supabase, Stripe, Deepgram, OpenAI, RevenueCat, Apple, and Google (Chrome Web Store) to deliver the product. We only share data necessary to provide the service.</p>
<h2>Your rights</h2>
<p>You may request access, correction, or deletion of your data, or opt out of marketing. Contact <a href="mailto:dan@smashinvoices.com">dan@smashinvoices.com</a>.</p>
<h2>Contact</h2>
<div class="card">
  <p><strong>SMASH Invoices</strong><br>Daniel Neale<br>ABN 58 600 491 085<br>Byron Bay, NSW, Australia<br>Email: <a href="mailto:dan@smashinvoices.com">dan@smashinvoices.com</a></p>
</div>
<p><a href="${SITE}/terms">Terms of Service</a> · <a href="${SITE}/support">Support</a></p>`,
);

const supportHtml = shell(
  'Support | SMASH Invoices',
  'Get help with SMASH Invoices and the Gmail Chrome extension. Email dan@smashinvoices.com — we respond within one business day.',
  '/support',
  `<h1>Support</h1>
<p class="meta">SMASH Invoices · Gmail Chrome extension · iOS app</p>
<p>Need help installing the extension, connecting Xero or QuickBooks, or sending your first quote from Gmail? We are here.</p>
<h2>Email support</h2>
<div class="card">
  <p><strong>Primary support email</strong><br><a href="mailto:dan@smashinvoices.com">dan@smashinvoices.com</a></p>
  <p>We aim to respond within one business day (AEST).</p>
</div>
<h2>Common topics</h2>
<ul>
  <li>Installing the SMASH Chrome extension in Gmail</li>
  <li>Uploading your pricing catalog (CSV or PDF)</li>
  <li>Xero and QuickBooks Online connection</li>
  <li>Customer quote approval and payment links</li>
  <li>Billing and subscription questions</li>
</ul>
<p><a href="${SITE}/contact">Contact page</a> · <a href="${SITE}/faq">FAQ</a> · <a href="${SITE}/chrome-extension">Chrome extension overview</a></p>`,
);

for (const [slug, html] of [
  ['privacy', privacyHtml],
  ['support', supportHtml],
] as const) {
  const dir = path.join(root, 'public', slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
  console.log(`✓ Generated /${slug}/index.html`);
}

console.log('✅ Legal/support static pages ready for Chrome Web Store verification');
