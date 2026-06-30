/**
 * Generate placeholder Gmail product HTML for /chrome-extension landing review.
 * Run: node --experimental-strip-types scripts/generate-gmail-placeholder-screens.ts
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'product', 'gmail', 'screens');

const FONTS = `@font-face { font-family:'Jakarta'; src:url('/fonts/PlusJakartaSans.ttf') format('truetype'); font-weight:400 700; font-style:normal; font-display:swap; }
@font-face { font-family:'BarlowBlkIt'; src:url('/fonts/BarlowCondensed-BlackItalic.ttf') format('truetype'); font-weight:900; font-style:italic; font-display:swap; }`;

const BASE = `* { box-sizing:border-box; margin:0; padding:0; -webkit-font-smoothing:antialiased; }
html, body { width:1280px; height:800px; overflow:hidden; background:#E8ECF1; font-family:'Jakarta', system-ui, sans-serif; }
.wrap { width:1280px; height:800px; padding:48px; display:flex; flex-direction:column; }
.ribbon { position:absolute; top:20px; right:20px; z-index:30; background:#DFFF00; color:#0F172A; font-family:'BarlowBlkIt', sans-serif; font-weight:900; font-style:italic; font-size:14px; letter-spacing:2px; text-transform:uppercase; padding:10px 16px; border-radius:999px; }
.frame { flex:1; background:#fff; border-radius:16px; overflow:hidden; border:1px solid #CBD5E1; box-shadow:0 24px 80px rgba(15,23,42,0.12); position:relative; display:flex; flex-direction:column; }
.chrome { display:flex; align-items:center; gap:10px; padding:14px 20px; background:#F4F6F9; border-bottom:1px solid #E2E8F0; }
.dot { width:12px; height:12px; border-radius:50%; }
.url { flex:1; margin:0 16px; padding:8px 14px; background:#fff; border-radius:8px; font-size:13px; color:#94A3B8; font-family:ui-monospace, monospace; }
.toolbar { display:flex; align-items:center; gap:14px; padding:16px 24px; background:#fff; border-bottom:1px solid #E2E8F0; }
.gmail-icon { width:36px; height:36px; border-radius:50%; background:#EA4335; display:flex; align-items:center; justify-content:center; color:#fff; font-size:18px; font-weight:700; }
.inbox-label { font-size:18px; font-weight:700; color:#0F172A; }
.smash-pill { margin-left:auto; background:#0F172A; color:#DFFF00; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; padding:8px 14px; border-radius:999px; }
.body { flex:1; display:grid; grid-template-columns:3fr 2fr; min-height:0; }
.email { padding:32px 36px; background:#fff; overflow:hidden; }
.email h2 { font-size:22px; font-weight:800; color:#0F172A; margin-bottom:8px; }
.email .meta { font-size:14px; color:#94A3B8; margin-bottom:20px; }
.email .subject { font-size:18px; font-weight:800; color:#0F172A; margin-bottom:16px; }
.email p, .email li { font-size:16px; line-height:1.5; color:#64748B; }
.email ul { margin:12px 0 12px 22px; }
.sidebar { background:#0D1117; border-left:1px solid #E2E8F0; padding:24px; display:flex; flex-direction:column; gap:16px; }
.sidebar-head { display:flex; justify-content:space-between; align-items:center; }
.sidebar-head span { color:#fff; font-size:22px; font-weight:900; }
.sidebar-head span em { color:#DFFF00; font-style:normal; }
.sidebar-head small { color:rgba(255,255,255,0.4); font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; }
.card { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:16px; }
.card-label { font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#DFFF00; margin-bottom:8px; }
.line { display:flex; justify-content:space-between; gap:12px; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.08); }
.line:last-child { border-bottom:0; }
.line-title { color:#fff; font-size:15px; font-weight:700; }
.line-sub { color:rgba(255,255,255,0.45); font-size:12px; margin-top:4px; }
.line-price { color:#fff; font-size:15px; font-weight:800; text-align:right; white-space:nowrap; }
.matched { color:#3DD68C; font-size:10px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; display:block; margin-bottom:4px; }
.total { margin-top:8px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.12); display:flex; justify-content:space-between; }
.total span:first-child { color:rgba(255,255,255,0.7); font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; }
.total span:last-child { color:#DFFF00; font-size:20px; font-weight:900; }
.empty-side { background:#F4F6F9; border-left:1px solid #E2E8F0; display:flex; align-items:center; justify-content:center; color:#94A3B8; font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; text-align:center; padding:24px; }
.btn-row { display:flex; gap:10px; margin-top:auto; }
.btn { flex:1; border-radius:999px; padding:12px; font-size:11px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; text-align:center; border:none; }
.btn-ghost { background:rgba(255,255,255,0.1); color:#fff; border:1px solid rgba(255,255,255,0.15); }
.btn-lime { background:#DFFF00; color:#0F172A; }`;

const EMAIL = `<div class="email">
  <h2>BuildCo Supplies</h2>
  <div class="meta">quotes@buildco.com.au · Today 9:14 AM</div>
  <div class="subject">Quote request — plumbing parts</div>
  <p>Hi — can you price the following for delivery Thursday?</p>
  <ul>
    <li>15mm copper elbow × 12</li>
    <li>Basin mixer — chrome</li>
    <li>Flexi hose 600mm × 4</li>
    <li>Call-out fee if applicable</li>
  </ul>
  <p style="color:#94A3B8;">Thanks, BuildCo</p>
</div>`;

const ITEMS_MATCH = `
<div class="line"><div><div class="matched">Matched</div><div class="line-title">15mm copper elbow</div><div class="line-sub">SKU-CE15 × 12</div></div><div class="line-price">$8.40</div></div>
<div class="line"><div><div class="matched">Matched</div><div class="line-title">Basin mixer chrome</div><div class="line-sub">SKU-BM02 × 1</div></div><div class="line-price">$189.00</div></div>
<div class="line"><div><div class="matched">Matched</div><div class="line-title">Flexi hose 600mm</div><div class="line-sub">SKU-FH60 × 4</div></div><div class="line-price">$22.50</div></div>
<div class="line"><div><div class="matched">Matched</div><div class="line-title">Call-out fee</div><div class="line-sub">LAB-CALL × 1</div></div><div class="line-price">$95.00</div></div>`;

const ITEMS_DONE = `
<div class="line"><div><div class="line-title">15mm copper elbow</div><div class="line-sub">SKU-CE15 × 12</div></div><div class="line-price">$8.40</div></div>
<div class="line"><div><div class="line-title">Basin mixer chrome</div><div class="line-sub">SKU-BM02 × 1</div></div><div class="line-price">$189.00</div></div>
<div class="line"><div><div class="line-title">Flexi hose 600mm</div><div class="line-sub">SKU-FH60 × 4</div></div><div class="line-price">$22.50</div></div>
<div class="line"><div><div class="line-title">Call-out fee</div><div class="line-sub">LAB-CALL × 1</div></div><div class="line-price">$95.00</div></div>`;

function shell(label: string, body: string) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=1280"><style>${FONTS}${BASE}</style></head><body><div class="wrap"><div class="ribbon">Placeholder</div><div class="frame"><div class="chrome"><span class="dot" style="background:#F87171"></span><span class="dot" style="background:#FACC15"></span><span class="dot" style="background:#4ADE80"></span><div class="url">mail.google.com/mail/u/0/#inbox</div></div>${body}</div></div></body></html>`;
}

function sidebar(variant: 'matching' | 'done' | 'matching-btn', items: string) {
  const btn =
    variant === 'matching-btn'
      ? '<div class="btn-row"><button class="btn btn-ghost" type="button">From Email</button><button class="btn btn-lime" type="button">Matching…</button></div>'
      : '<div class="btn-row"><button class="btn btn-ghost" type="button">From Email</button><button class="btn btn-lime" type="button">Send Quote</button></div>';
  return `<div class="sidebar"><div class="sidebar-head"><span>SMASH<em>.</em></span><small>Sidebar</small></div><div class="card"><div class="card-label">From email</div><div class="line-title" style="color:#fff;font-size:16px;">BuildCo Supplies</div><div class="line-sub">quotes@buildco.com.au</div></div><div class="card">${items}<div class="total"><span>Total inc. GST</span><span>$612.30</span></div></div>${btn}</div>`;
}

const screens: Record<string, string> = {
  'hero.html': shell(
    'HERO',
    `<div class="toolbar"><div class="gmail-icon">M</div><div class="inbox-label">Inbox</div><div class="smash-pill">SMASH</div></div><div class="body">${EMAIL}${sidebar('done', ITEMS_DONE)}</div>`,
  ),
  'step-request.html': shell(
    'STEP-1',
    `<div class="toolbar"><div class="gmail-icon">M</div><div class="inbox-label">Inbox</div><div class="smash-pill">SMASH</div></div><div class="body">${EMAIL}<div class="empty-side">SMASH sidebar closed<br><span style="font-size:12px;font-weight:500;text-transform:none;letter-spacing:0;color:#CBD5E1;">Request lands in inbox</span></div></div>`,
  ),
  'step-matching.html': shell(
    'STEP-2',
    `<div class="toolbar"><div class="gmail-icon">M</div><div class="inbox-label">Inbox</div><div class="smash-pill">SMASH</div></div><div class="body">${EMAIL}${sidebar('matching-btn', ITEMS_MATCH)}</div>`,
  ),
  'step-done.html': shell(
    'STEP-3',
    `<div class="toolbar"><div class="gmail-icon">M</div><div class="inbox-label">Inbox</div><div class="smash-pill">SMASH</div></div><div class="body">${EMAIL}${sidebar('done', ITEMS_DONE)}</div>`,
  ),
  'sku-match.html': `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=1280"><style>${FONTS}${BASE}
.detail { width:1280px; height:800px; padding:80px; background:#E8ECF1; position:relative; display:flex; align-items:center; justify-content:center; }
.detail-card { width:520px; background:#0D1117; border-radius:20px; overflow:hidden; box-shadow:0 24px 64px rgba(15,23,42,0.2); }
.detail-head { padding:24px 28px; border-bottom:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center; }
.detail-head span { color:#fff; font-size:20px; font-weight:900; }
.detail-head em { color:#DFFF00; font-style:normal; }
.detail-head small { color:#DFFF00; font-size:11px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; }
.detail-body { padding:24px 28px 28px; }
</style></head><body><div class="detail"><div class="ribbon">Placeholder</div><div class="detail-card"><div class="detail-head"><span>SMASH<em>.</em></span><small>Catalogue match</small></div><div class="detail-body">${ITEMS_MATCH.slice(0, ITEMS_MATCH.lastIndexOf('<div class="line"><div><div class="matched">Matched</div><div class="line-title">Flexi'))}${ITEMS_MATCH.includes('Flexi') ? '' : ''}<div class="line"><div><div class="matched">Matched</div><div class="line-title">Basin mixer chrome</div><div class="line-sub">SKU-BM02 × 1</div></div><div class="line-price">$189.00</div></div></div></div></div></body></html>`,
  'inbox-toolbar.html': shell(
    'INBOX',
    `<div class="toolbar" style="border-bottom:0;padding:28px 32px;"><div class="gmail-icon">M</div><div class="inbox-label">Inbox</div><div class="smash-pill">SMASH</div></div><div style="flex:1;background:#fff;padding:32px;"><div style="height:100%;border-radius:16px;border:2px dashed #CBD5E1;background:#F4F6F9;display:flex;align-items:center;justify-content:center;text-align:center;padding:32px;color:#64748B;font-size:18px;font-weight:600;line-height:1.5;">Open any quote request —<br><strong style="color:#0F172A;">SMASH sits in your Gmail toolbar.</strong></div></div>`,
  ),
};

// Fix sku-match - simpler dedicated HTML
screens['sku-match.html'] = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=1280"><style>${FONTS}${BASE}
.detail { width:1280px; height:800px; padding:80px; background:#E8ECF1; position:relative; display:flex; align-items:center; justify-content:center; }
.detail-card { width:560px; background:#0D1117; border-radius:20px; overflow:hidden; box-shadow:0 24px 64px rgba(15,23,42,0.2); }
.detail-head { padding:24px 28px; border-bottom:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center; }
.detail-head span { color:#fff; font-size:20px; font-weight:900; }
.detail-head em { color:#DFFF00; font-style:normal; }
.detail-head small { color:#DFFF00; font-size:11px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; }
.detail-body { padding:24px 28px 28px; }
</style></head><body><div class="detail"><div class="ribbon">Placeholder</div><div class="detail-card"><div class="detail-head"><span>SMASH<em>.</em></span><small>Catalogue match</small></div><div class="detail-body">${ITEMS_MATCH}</div></div></div></body></html>`;

fs.mkdirSync(outDir, { recursive: true });
for (const [file, html] of Object.entries(screens)) {
  if (file === 'README.md') continue;
  fs.writeFileSync(path.join(outDir, file), html);
  console.log('✓', file);
}
