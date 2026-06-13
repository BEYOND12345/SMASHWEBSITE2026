/**
 * Push Blog Action Plan v1 meta into Supabase blog_posts.
 * Run: npm run sync:action-plan-blog-supabase
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ACTION_PLAN_SPECS } from './blog-retrofit-action-plan-v1.ts';

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

for (const spec of ACTION_PLAN_SPECS) {
  const { error } = await supabase
    .from('blog_posts')
    .update({
      meta_title: `${spec.title} | SMASH`,
      meta_description: spec.meta,
      updated_at: new Date().toISOString(),
    })
    .eq('slug', spec.slug);

  if (error) {
    console.warn(`✗ ${spec.slug}: ${error.message}`);
    fail++;
  } else {
    console.log(`✓ ${spec.slug}`);
    ok++;
  }
}

console.log(`\nAction plan Supabase sync: ${ok} updated, ${fail} failed`);
if (fail > 0) process.exit(1);
