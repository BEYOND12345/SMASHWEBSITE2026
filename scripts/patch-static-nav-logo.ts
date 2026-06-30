/**
 * One-off / repeatable patch: replace text "SMASH" nav marks in public HTML
 * with the official wordmark image.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SMASH_LOGO_NAV_IMG, SMASH_LOGO_NAV_LINK, SMASH_LOGO_NAV_LINK_INLINE } from './brand-logo.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const REPLACEMENTS: [RegExp, string][] = [
  [
    /<a href="\/" class="nav-brand">SMASH<span style="color:#D9F99D">\.<\/span><\/a>/g,
    SMASH_LOGO_NAV_LINK,
  ],
  [/<a href="\/" class="nav-brand">SMASH<\/a>/g, SMASH_LOGO_NAV_LINK],
  [
    /<a href="\/" style="color:#fff;font-weight:800;text-transform:uppercase;text-decoration:none;">SMASH<\/a>/g,
    SMASH_LOGO_NAV_LINK_INLINE,
  ],
  [
    /<a href="\/" style="color:#fff;font-weight:800;text-transform:uppercase;">SMASH<\/a>/g,
    SMASH_LOGO_NAV_LINK_INLINE,
  ],
  [
    /<a class="nav-logo" href="([^"]+)">SMASH<\/a>/g,
    (_match, href) => `<a class="nav-logo" href="${href}">${SMASH_LOGO_NAV_IMG}</a>`,
  ],
];

function walk(dir: string, files: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

let patched = 0;
for (const file of walk(publicDir)) {
  const original = fs.readFileSync(file, 'utf8');
  let next = original;
  for (const [pattern, replacement] of REPLACEMENTS) {
    next = next.replace(pattern, replacement as string);
  }
  if (next !== original) {
    fs.writeFileSync(file, next);
    patched++;
  }
}

console.log(`Patched nav logo in ${patched} HTML files.`);
