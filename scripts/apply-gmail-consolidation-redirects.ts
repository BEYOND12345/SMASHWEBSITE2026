/**
 * Inject Week 2 Gmail 301 redirects into public/_redirects (before blog 200 rules).
 * Run: npm run apply:gmail-consolidation-redirects
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gmailRedirectLines, GMAIL_CONSOLIDATION_REDIRECTS } from './gmail-consolidation-redirects.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const redirectsPath = path.join(root, 'public', '_redirects');

const MARKER_START = '# Week 2 — Gmail consolidation 301s (auto-generated)';
const MARKER_END = '# End Gmail consolidation 301s';

function buildBlock(): string {
  const lines = gmailRedirectLines();
  return [MARKER_START, ...lines, MARKER_END].join('\n');
}

let content = fs.readFileSync(redirectsPath, 'utf-8');

// Remove previous block if re-running
const re = new RegExp(
  `${MARKER_START.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${MARKER_END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\n?`,
);
content = content.replace(re, '');

// Insert before blog 200 rules
const anchor = '# Blog posts (with and without trailing slash)';
if (!content.includes(anchor)) {
  console.error('Anchor not found in _redirects');
  process.exit(1);
}
content = content.replace(anchor, `${buildBlock()}\n\n${anchor}`);

fs.writeFileSync(redirectsPath, content);
console.log(`✓ Applied ${GMAIL_CONSOLIDATION_REDIRECTS.length} Gmail 301 redirects to public/_redirects`);
