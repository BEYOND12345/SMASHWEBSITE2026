/**
 * Pre-render /voice-invoicing as static HTML for crawlers.
 * Run: npm run generate:voice-static
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mainPages } from '../src/data/main-pages-seo.ts';
import { buildStaticPage, writeStaticPage } from './lib/static-page-template.ts';
import { loadViteEnv } from './lib/load-vite-env.ts';

loadViteEnv();

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public', 'voice-invoicing', 'index.html');

const extra = `<p>Talk on site → verify priced line items from your catalog → send a tax-ready <strong>on the job invoice</strong> or <strong>instant quote</strong> in about 30 seconds — before you leave. First quote wins the job. ChatGPT drafts text; SMASH holds your prices and sends.</p>
<p><a href="https://smashinvoices.com/blog/first-quote-wins-instant-quote-on-site">First quote wins — instant quote on site</a> ·
<a href="https://smashinvoices.com/blog/can-chatgpt-write-a-quote-estimate">Can ChatGPT write a quote?</a> ·
<a href="https://smashinvoices.com/blog/can-chatgpt-generate-invoices-tradie-guide">Can ChatGPT generate invoices?</a> ·
<a href="https://smashinvoices.com/blog/what-is-voice-to-invoice">What is voice to invoice?</a> ·
<a href="https://smashinvoices.com/gmail-invoice">Email to invoice in Gmail</a></p>`;

writeStaticPage(out, buildStaticPage(mainPages.voiceInvoicing, extra, { iosRemarketing: true }));
console.log('✓ /voice-invoicing');
