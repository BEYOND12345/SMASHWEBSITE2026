/**
 * Remove stale static HTML stubs that shadow React landing pages.
 * Bolt/Vercel "filesystem" routing serves these before SPA fallback if present in dist/.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

// Keep dist/voice-invoicing/index.html — edge function serves it to crawlers only.
const shadowStubs = [
  'chrome-extension/index.html',
  'b2b-gmail-quoting/index.html',
];

for (const rel of shadowStubs) {
  const file = path.join(dist, rel);
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`✓ Removed shadow stub dist/${rel}`);
  }
}

// Empty route dirs shadow SPA fallback on some static hosts (filesystem wins over catch-all).
for (const dirName of ['chrome-extension', 'b2b-gmail-quoting']) {
  const dir = path.join(dist, dirName);
  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory() && fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir);
    console.log(`✓ Removed empty shadow dir dist/${dirName}/`);
  }
}
