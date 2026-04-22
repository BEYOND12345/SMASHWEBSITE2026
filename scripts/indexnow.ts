/**
 * IndexNow — ping Bing, Yahoo, Yandex, Seznam et al. that our sitemap URLs
 * have changed, so they re-crawl and update their index quickly.
 *
 * How it works:
 *   1. We host a key file at https://smashinvoices.com/<INDEXNOW_KEY>.txt
 *      containing the raw key string (proves we own the domain).
 *   2. We POST a JSON list of URLs to https://api.indexnow.org/indexnow.
 *   3. Bing fetches our key file to verify ownership, then queues a recrawl
 *      of the URLs we submitted.
 *
 * Note: Google does not support IndexNow. For Google, use Search Console.
 *
 * Usage:
 *   npx tsx scripts/indexnow.ts                 # submit all sitemap URLs
 *   npx tsx scripts/indexnow.ts <url> <url> …   # submit specific URLs only
 */

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const SITE = 'https://smashinvoices.com';
const KEY =
  'e0818320abb18584f988cbcc930fc0bdd531bee9ef236c6701affe4ab23bd220';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
// IndexNow allows up to 10k URLs per POST; we batch to be safe + parallelise.
const BATCH_SIZE = 1000;

async function loadSitemapUrls(): Promise<string[]> {
  const sitemapPath = resolve(process.cwd(), 'dist', 'sitemap.xml');
  let xml: string;
  try {
    xml = await readFile(sitemapPath, 'utf-8');
  } catch {
    const fallback = resolve(process.cwd(), 'public', 'sitemap.xml');
    xml = await readFile(fallback, 'utf-8');
  }
  const matches = xml.match(/<loc>([^<]+)<\/loc>/g) ?? [];
  return matches.map((m) => m.replace(/<\/?loc>/g, ''));
}

async function verifyKeyFile(): Promise<boolean> {
  try {
    const res = await fetch(KEY_LOCATION);
    if (!res.ok) {
      console.warn(
        `⚠ key file ${KEY_LOCATION} returned HTTP ${res.status}. ` +
          `Make sure /<key>.txt is deployed before IndexNow can verify ownership.`
      );
      return false;
    }
    const body = (await res.text()).trim();
    if (body !== KEY) {
      console.warn(
        `⚠ key file content mismatch at ${KEY_LOCATION}. ` +
          `Expected "${KEY}", got "${body.slice(0, 40)}…"`
      );
      return false;
    }
    return true;
  } catch (err) {
    console.warn(`⚠ unable to reach key file: ${err}`);
    return false;
  }
}

async function submitBatch(urls: string[]): Promise<void> {
  const body = {
    host: new URL(SITE).hostname,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(body),
  });
  // IndexNow spec: 200/202 = accepted; 422 = some URLs invalid; 4xx/5xx = error
  if (res.status === 200 || res.status === 202) {
    console.log(`  ✓ submitted ${urls.length} URLs (HTTP ${res.status})`);
  } else if (res.status === 422) {
    const text = await res.text().catch(() => '');
    console.warn(`  ⚠ some URLs rejected (HTTP 422): ${text.slice(0, 200)}`);
  } else {
    const text = await res.text().catch(() => '');
    throw new Error(
      `IndexNow submission failed: HTTP ${res.status} — ${text.slice(0, 200)}`
    );
  }
}

async function main() {
  const cliUrls = process.argv.slice(2).filter((a) => a.startsWith('http'));
  const urls = cliUrls.length > 0 ? cliUrls : await loadSitemapUrls();

  if (urls.length === 0) {
    console.error('❌ no URLs to submit (sitemap empty or no CLI args)');
    process.exit(1);
  }

  console.log(`→ IndexNow: submitting ${urls.length} URL${urls.length === 1 ? '' : 's'}`);
  console.log(`  key file: ${KEY_LOCATION}`);

  const keyOk = await verifyKeyFile();
  if (!keyOk) {
    console.warn(
      '  submitting anyway — Bing will reject if it cannot fetch the key file.'
    );
  }

  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    try {
      await submitBatch(batch);
    } catch (err) {
      console.error(`  ❌ batch ${i}-${i + batch.length} failed:`, err);
      // Non-fatal: keep going with next batch
    }
  }

  console.log('✅ IndexNow submission complete.');
}

main().catch((err) => {
  console.error('❌ IndexNow error:', err);
  process.exit(1);
});
