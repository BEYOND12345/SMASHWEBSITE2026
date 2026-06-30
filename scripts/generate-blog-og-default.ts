/**
 * Regenerates public/og/blog-default.png from the real SMASH wordmark.
 * Uses /public/smash-logo-white.png — same asset as nav + footer.
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const logoPath = path.join(root, 'public', 'smash-logo-white.png');
const logoB64 = fs.readFileSync(logoPath).toString('base64');

const WIDTH = 1200;
const HEIGHT = 630;
const LOGO_W = 520;
const LOGO_H = Math.round(LOGO_W * (74 / 300));
const logoX = (WIDTH - LOGO_W) / 2;
const logoY = 210;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0F172A"/>
  <image href="data:image/png;base64,${logoB64}" x="${logoX}" y="${logoY}" width="${LOGO_W}" height="${LOGO_H}"/>
  <text x="${WIDTH / 2}" y="${logoY + LOGO_H + 52}" text-anchor="middle" fill="#94A3B8" font-family="system-ui, -apple-system, BlinkMacSystemFont, sans-serif" font-size="26" font-weight="500">Voice invoicing for service businesses</text>
</svg>`;

const outDir = path.join(root, 'public', 'og');
fs.mkdirSync(outDir, { recursive: true });
const svgOut = path.join(outDir, 'blog-default.svg');
const pngOut = path.join(outDir, 'blog-default.png');
fs.writeFileSync(svgOut, svg);

execSync(`npx --yes @resvg/resvg-js-cli "${svgOut}" "${pngOut}"`, {
  stdio: 'inherit',
  cwd: root,
});

console.log(`✓ ${pngOut}`);
