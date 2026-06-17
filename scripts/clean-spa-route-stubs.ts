/**
 * Remove stale static HTML stubs that shadow React landing pages.
 * Bolt/Vercel "filesystem" routing serves these before SPA fallback if present in dist/.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

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
