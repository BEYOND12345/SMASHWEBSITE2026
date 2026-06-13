/**
 * Push VOICE_CLUSTER_PATCHES meta into Supabase blog_posts (SPA + next prerender).
 * Run: npm run sync:voice-blog-supabase
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { VOICE_CLUSTER_PATCHES } from './patch-voice-cluster-blog-meta.ts';

function loadEnv() {
  const envPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '.env');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const m = line.match(/^([^=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
  }
}

loadEnv();

const url = process.env.VITE_SUPABASE_URL;
const key = process.env.VITE_SUPABASE_ANON_KEY;
if (!url || !key) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env');
  process.exit(1);
}

const supabase = createClient(url, key);
let ok = 0;
let fail = 0;

for (const p of VOICE_CLUSTER_PATCHES) {
  const { error } = await supabase
    .from('blog_posts')
    .update({
      meta_title: p.title,
      meta_description: p.description,
      updated_at: new Date().toISOString(),
    })
    .eq('slug', p.slug);

  if (error) {
    console.warn(`✗ ${p.slug}: ${error.message}`);
    fail++;
  } else {
    console.log(`✓ ${p.slug}`);
    ok++;
  }
}

console.log(`\nSupabase sync: ${ok} updated, ${fail} failed`);
if (fail > 0) process.exit(1);
