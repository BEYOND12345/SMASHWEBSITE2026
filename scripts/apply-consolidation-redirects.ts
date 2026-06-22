/**
 * Inject all Week 2 consolidation 301s into public/_redirects (before blog 200 rules).
 * Run: npm run apply:consolidation-redirects
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gmailRedirectLines, GMAIL_CONSOLIDATION_REDIRECTS } from './gmail-consolidation-redirects.ts';
import { voiceRedirectLines, VOICE_CONSOLIDATION_REDIRECTS } from './voice-consolidation-redirects.ts';
import { templateRedirectLines, TEMPLATE_CONSOLIDATION_REDIRECTS } from './template-consolidation-redirects.ts';
import { tradeTemplateRedirectLines, TRADE_TEMPLATE_CONSOLIDATION_REDIRECTS } from './trade-template-consolidation-redirects.ts';
import { legacyOrphanRedirectLines, LEGACY_ORPHAN_REDIRECTS } from './legacy-orphan-link-fixes.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const redirectsPath = path.join(root, 'public', '_redirects');

const BLOCKS = [
  {
    start: '# Week 2 — Gmail consolidation 301s (auto-generated)',
    end: '# End Gmail consolidation 301s',
    lines: gmailRedirectLines(),
    count: GMAIL_CONSOLIDATION_REDIRECTS.length,
    label: 'Gmail',
  },
  {
    start: '# Week 2 — Voice consolidation 301s (auto-generated)',
    end: '# End Voice consolidation 301s',
    lines: voiceRedirectLines(),
    count: VOICE_CONSOLIDATION_REDIRECTS.length,
    label: 'Voice',
  },
  {
    start: '# Week 3 — Template hub consolidation 301s (auto-generated)',
    end: '# End Template hub consolidation 301s',
    lines: templateRedirectLines(),
    count: TEMPLATE_CONSOLIDATION_REDIRECTS.length,
    label: 'Template hub',
  },
  {
    start: '# Week 3 — GRP-003 trade template 301s (auto-generated)',
    end: '# End GRP-003 trade template 301s',
    lines: tradeTemplateRedirectLines(),
    count: TRADE_TEMPLATE_CONSOLIDATION_REDIRECTS.length,
    label: 'Trade template',
  },
  {
    start: '# Legacy orphan slug 301s (auto-generated)',
    end: '# End Legacy orphan slug 301s',
    lines: legacyOrphanRedirectLines(),
    count: LEGACY_ORPHAN_REDIRECTS.length,
    label: 'Legacy orphan',
  },
] as const;

let content = fs.readFileSync(redirectsPath, 'utf-8');

for (const block of BLOCKS) {
  const re = new RegExp(
    `${block.start.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${block.end.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\n?`,
  );
  content = content.replace(re, '');
}

const anchor = '# Blog posts (with and without trailing slash)';
if (!content.includes(anchor)) {
  console.error('Anchor not found in _redirects');
  process.exit(1);
}

const allBlocks = BLOCKS.map((b) => [b.start, ...b.lines, b.end].join('\n')).join('\n\n');
content = content.replace(anchor, `${allBlocks}\n\n${anchor}`);

fs.writeFileSync(redirectsPath, content);
for (const block of BLOCKS) {
  console.log(`✓ Applied ${block.count} ${block.label} 301 redirects`);
}
