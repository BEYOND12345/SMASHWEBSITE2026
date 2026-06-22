/**
 * Replace internal hrefs to 301-consolidated blog slugs with their final targets.
 * Run after retrofit; before sync:blog-dist.
 *
 * Run: npm run fix:consolidated-internal-links
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GMAIL_CONSOLIDATION_REDIRECTS } from './gmail-consolidation-redirects.ts';
import { VOICE_CONSOLIDATION_REDIRECTS } from './voice-consolidation-redirects.ts';
import { TEMPLATE_CONSOLIDATION_REDIRECTS } from './template-consolidation-redirects.ts';
import { LEGACY_ORPHAN_LINK_FIXES } from './legacy-orphan-link-fixes.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const blogRoot = path.join(root, 'public', 'blog');
const scanDirs = [
  blogRoot,
  path.join(root, 'src'),
  path.join(root, 'scripts'),
];
const skipFiles = new Set([
  'fix-consolidated-internal-links.ts',
  'gmail-consolidation-redirects.ts',
  'voice-consolidation-redirects.ts',
  'template-consolidation-redirects.ts',
  'legacy-orphan-link-fixes.ts',
]);

const slugToTarget = new Map<string, string>();
for (const { slug, target } of [
  ...GMAIL_CONSOLIDATION_REDIRECTS,
  ...VOICE_CONSOLIDATION_REDIRECTS,
  ...TEMPLATE_CONSOLIDATION_REDIRECTS,
  ...LEGACY_ORPHAN_LINK_FIXES,
]) {
  slugToTarget.set(slug, target);
}

export function fixHtml(html: string): { html: string; count: number } {
  let count = 0;
  let out = html;
  for (const [slug, target] of slugToTarget) {
    const re = new RegExp(`href="/blog/${slug}/?"`, 'g');
    const matches = out.match(re);
    if (matches) {
      count += matches.length;
      out = out.replace(re, `href="${target}"`);
    }
  }
  return { html: out, count };
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (isMain) {
  let files = 0;
  let replacements = 0;

  function scanFile(file: string) {
    if (skipFiles.has(path.basename(file))) return;
    const ext = path.extname(file);
    if (!['.html', '.tsx', '.ts', '.md'].includes(ext)) return;
    const raw = fs.readFileSync(file, 'utf-8');
    const { html, count } = fixHtml(raw);
    if (count > 0) {
      fs.writeFileSync(file, html, 'utf-8');
      console.log(`✓ ${path.relative(root, file)} — ${count} link(s) updated`);
      replacements += count;
    }
    files++;
  }

  for (const dir of scanDirs) {
    if (!fs.existsSync(dir)) continue;
    if (dir === blogRoot) {
      for (const slug of fs.readdirSync(blogRoot)) {
        const file = path.join(blogRoot, slug, 'index.html');
        if (fs.existsSync(file)) scanFile(file);
      }
      continue;
    }
    const stack = [dir];
    while (stack.length) {
      const d = stack.pop()!;
      for (const name of fs.readdirSync(d)) {
        const full = path.join(d, name);
        if (fs.statSync(full).isDirectory()) stack.push(full);
        else scanFile(full);
      }
    }
  }

  console.log(`\n✅ Scanned ${files} files — ${replacements} internal links pointed at live URLs`);
}
