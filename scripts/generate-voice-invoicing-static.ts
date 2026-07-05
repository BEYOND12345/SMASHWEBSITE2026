/**
 * Pre-render /voice-invoicing as static HTML for crawlers.
 * Run: npm run generate:voice-static
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mainPages } from '../src/data/main-pages-seo.ts';
import { buildStaticPage, writeStaticPage } from './lib/static-page-template.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public', 'voice-invoicing', 'index.html');

const extra = `<p>Talk for 20–30 seconds on site → verify priced line items from your catalog → send a tax-ready <strong>on the job invoice</strong> before you leave.</p>
<p><a href="https://smashinvoices.com/blog/the-60-second-invoice-voice-to-invoice">Voice to invoice in 60 seconds</a> ·
<a href="https://smashinvoices.com/blog/fastest-way-to-send-invoice-2026">Fastest way to send an invoice</a> ·
<a href="https://smashinvoices.com/blog/how-long-to-send-invoice-after-job-australia">Send before you leave the job</a> ·
<a href="https://smashinvoices.com/blog/invoice-without-typing">Invoice without typing</a> ·
<a href="https://smashinvoices.com/gmail-invoice">Email to invoice in Gmail</a></p>`;

writeStaticPage(out, buildStaticPage(mainPages.voiceInvoicing, extra));
console.log('✓ /voice-invoicing');
