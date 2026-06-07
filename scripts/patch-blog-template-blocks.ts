/** Patches committed public/blog slug index.html files with workspace router + conversion close. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogRoot = path.join(__dirname, '..', 'public', 'blog');

const APP_STORE_URL = 'https://apps.apple.com/au/app/smash-invoices/id6759475079';
const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';
const IOS_DOWNLOAD_LABEL = 'Download the iOS app';
const CHROME_CTA_LABEL = 'Add to Chrome — Free';

const extraCss = `
    .workspace-router {
      margin: 0 0 40px;
      border: 1px solid rgba(217,249,157,0.25);
      border-radius: 16px;
      overflow: hidden;
      background: linear-gradient(135deg, rgba(217,249,157,0.1), rgba(217,249,157,0.03));
    }
    .workspace-router-head {
      padding: 18px 24px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .workspace-router-head h2 {
      margin: 0;
      font-family: 'Barlow Condensed', system-ui, sans-serif;
      font-size: 22px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #fff;
    }
    .workspace-grid { display: grid; grid-template-columns: 1fr; }
    @media (min-width: 768px) { .workspace-grid { grid-template-columns: 1fr 1fr; } }
    .workspace-col { padding: 24px; border-bottom: 1px solid rgba(255,255,255,0.08); }
    @media (min-width: 768px) {
      .workspace-col:first-child { border-right: 1px solid rgba(255,255,255,0.08); border-bottom: none; }
      .workspace-col:last-child { border-bottom: none; }
    }
    .workspace-label {
      font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;
      color: var(--text-dim); font-weight: 700; margin: 0 0 8px;
    }
    .workspace-col p { margin: 0 0 12px; color: rgba(255,255,255,0.75); font-size: 15px; }
    .workspace-col h3 {
      margin: 0 0 6px; font-family: 'Barlow Condensed', system-ui, sans-serif;
      font-size: 18px; text-transform: uppercase; color: #fff;
    }
    .workspace-btn {
      display: inline-block; margin-top: 8px; padding: 10px 18px; border-radius: 999px;
      font-weight: 800; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; text-decoration: none;
    }
    .workspace-btn-accent { background: var(--accent); color: var(--accent-ink); }
    .workspace-btn-white { background: #fff; color: var(--accent-ink); }
    .workspace-regions {
      padding: 16px 24px 20px; background: rgba(255,255,255,0.03);
      border-top: 1px solid rgba(255,255,255,0.08); font-size: 14px; color: rgba(255,255,255,0.65);
    }
    .workspace-regions strong { color: #fff; }
    .conversion-close {
      margin: 56px 0 0; padding: 28px; border-radius: 20px;
      border: 1px solid rgba(217,249,157,0.25);
      background: linear-gradient(135deg, rgba(217,249,157,0.14), rgba(217,249,157,0.04));
    }
    .conversion-close h2 {
      font-family: 'Barlow Condensed', system-ui, sans-serif;
      font-size: clamp(26px, 4vw, 34px); margin: 0 0 10px; text-transform: uppercase; color: #fff; line-height: 1.05;
    }
    .conversion-close .accent-line { color: var(--accent); display: block; }
    .conversion-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin: 20px 0 24px; }
    @media (min-width: 640px) { .conversion-grid { grid-template-columns: 1fr 1fr; } }
    .conversion-item {
      background: rgba(10,10,10,0.35); border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px; padding: 14px 16px;
    }
    .conversion-item strong {
      display: block; color: var(--accent); font-size: 12px; text-transform: uppercase;
      letter-spacing: 0.06em; margin-bottom: 6px;
    }
    .conversion-item p { margin: 0; font-size: 14px; color: rgba(255,255,255,0.75); }
    .conversion-btns { display: flex; flex-wrap: wrap; gap: 10px; }
    .conversion-btn-outline {
      display: inline-block; padding: 12px 20px; border-radius: 999px;
      border: 2px solid rgba(255,255,255,0.2); color: #fff; font-weight: 800;
      font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; text-decoration: none;
    }
`;

const workspaceHtml = `<section class="workspace-router" aria-labelledby="workspace-heading">
    <div class="workspace-router-head"><h2 id="workspace-heading">Choose your hands-free workspace</h2></div>
    <div class="workspace-grid">
      <div class="workspace-col">
        <p class="workspace-label">On your laptop / desktop</p>
        <p>Copying numbers from client emails or fumbling with manual dashboards?</p>
        <h3>Get SMASH for Chrome</h3>
        <p>Build and push line-itemed invoices from Gmail in under 20 seconds.</p>
        <a href="${CHROME_STORE_URL}" class="workspace-btn workspace-btn-accent" rel="nofollow">${CHROME_CTA_LABEL}</a>
        <p style="margin-top:14px;font-size:13px;"><a href="/chrome-extension">See Gmail extension features →</a></p>
      </div>
      <div class="workspace-col">
        <p class="workspace-label">In your truck / on-site</p>
        <p>Dirty hands, cracked screen, no patience for typing on glass?</p>
        <h3>Get SMASH for mobile</h3>
        <p>Talk for 30 seconds. Drive away with the invoice already sent.</p>
        <a href="${APP_STORE_URL}" class="workspace-btn workspace-btn-white" rel="nofollow">${IOS_DOWNLOAD_LABEL}</a>
      </div>
    </div>
    <div class="workspace-regions">
      <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);font-weight:700;">Global compliance regions</p>
      <p style="margin:0;"><strong>US:</strong> Sales tax, QuickBooks sync · <strong>UK:</strong> VAT-compliant invoices · <strong>CA / NZ / AU:</strong> Local tax rules, Xero integration</p>
    </div>
  </section>`;

const conversionHtml = `<aside class="conversion-close">
    <h2>Stop losing admin hours.<span class="accent-line">Start getting paid faster.</span></h2>
    <p style="color:rgba(255,255,255,0.75);margin:0 0 4px;">Voice on-site or Gmail at your desk — same professional invoices, same Pay Now button, zero keyboard tax.</p>
    <div class="conversion-grid">
      <div class="conversion-item"><strong>Pricing DNA</strong><p>Upload 2–3 old invoices. SMASH maps your labour rates and job types automatically.</p></div>
      <div class="conversion-item"><strong>Read receipts</strong><p>Know the second a client opens your invoice link — follow up while you still have leverage.</p></div>
      <div class="conversion-item"><strong>On-the-spot card payments</strong><p>Stripe checkout with Apple Pay, Google Pay and instant card processing on every invoice.</p></div>
      <div class="conversion-item"><strong>Cloud ledger sync</strong><p>Push to Xero or QuickBooks without retyping line items or double-handling data.</p></div>
    </div>
    <div class="conversion-btns">
      <a href="${APP_STORE_URL}" class="cta-btn" rel="nofollow">${IOS_DOWNLOAD_LABEL}</a>
      <a href="${CHROME_STORE_URL}" class="conversion-btn-outline" rel="nofollow">${CHROME_CTA_LABEL}</a>
    </div>
  </aside>`;

const ctaCardPattern =
  /<aside class="cta-card">[\s\S]*?<\/aside>/;

function patchFile(filePath: string): boolean {
  let html = fs.readFileSync(filePath, 'utf-8');
  if (html.includes('class="workspace-router"')) return false;

  if (!html.includes('.workspace-router')) {
    html = html.replace('</style>', `${extraCss}\n  </style>`);
  }

  if (html.includes('<aside class="takeaways">')) {
    html = html.replace(
      /(<aside class="takeaways">[\s\S]*?<\/aside>)/,
      `$1\n\n      ${workspaceHtml}`,
    );
  } else {
    html = html.replace('</header>', `</header>\n\n      ${workspaceHtml}`);
  }

  if (ctaCardPattern.test(html)) {
    html = html.replace(ctaCardPattern, conversionHtml);
  } else if (!html.includes('class="conversion-close"')) {
    html = html.replace(
      /(<section class="faq">[\s\S]*?<\/section>\s*)?(\s*<div class="author-card">|<\/article>)/,
      (match, faq, rest) => `${faq || ''}\n\n      ${conversionHtml}\n\n      ${rest || ''}`,
    );
  }

  fs.writeFileSync(filePath, html);
  return true;
}

const slugs = fs.readdirSync(blogRoot).filter((name) =>
  fs.existsSync(path.join(blogRoot, name, 'index.html')),
);

let patched = 0;
for (const slug of slugs) {
  if (patchFile(path.join(blogRoot, slug, 'index.html'))) patched++;
}

console.log(`Patched ${patched} / ${slugs.length} blog HTML files.`);
