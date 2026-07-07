/**
 * Load .env and .env.production for Node build scripts (mirrors Vite env loading).
 * Netlify/platform env vars take precedence — only fills unset keys.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function parseEnvFile(filePath: string): void {
  if (!fs.existsSync(filePath)) return;

  for (const line of fs.readFileSync(filePath, 'utf-8').split('\n')) {
    const match = line.match(/^([^#=][^=]*)=(.*)$/);
    if (!match) continue;

    const key = match[1].trim();
    const value = match[2].trim().replace(/^["']|["']$/g, '');
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

export function loadViteEnv(): void {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
  parseEnvFile(path.join(root, '.env'));
  parseEnvFile(path.join(root, '.env.production'));
}
