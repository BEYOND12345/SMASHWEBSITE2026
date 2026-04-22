/**
 * One-shot migration: copies all published blog_posts from the OLD qahoo project
 * into the NEW mwsho project. Preserves slug, so old URLs keep working.
 *
 * Usage:
 *   SERVICE_ROLE_KEY=<mwsho_service_role_key> npx tsx scripts/migrate-blog-posts.ts
 *
 * Idempotent: existing slugs in mwsho are skipped (never overwritten).
 */

const OLD_URL = 'https://qahooggrhogxlhquiyul.supabase.co';
const OLD_ANON =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhaG9vZ2dyaG9neGxocXVpeXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzNjM2MzgsImV4cCI6MjA4MTkzOTYzOH0.aCt_uoAGBLRPOouQfYHpPo6K1wCWOsmEn-D0ujjYTjQ';

const NEW_URL = 'https://mwshohajbmfmuphloqzd.supabase.co';
const NEW_SERVICE = process.env.SERVICE_ROLE_KEY;

if (!NEW_SERVICE) {
  console.error('❌ SERVICE_ROLE_KEY env var is required (mwsho project).');
  process.exit(1);
}

// Columns that exist on both tables (mwsho lacks `created_at`)
const COLUMNS = [
  'id',
  'slug',
  'title',
  'content',
  'excerpt',
  'featured_image',
  'featured_image_alt',
  'primary_keyword',
  'secondary_keywords',
  'meta_title',
  'meta_description',
  'author',
  'author_bio',
  'published_at',
  'updated_at',
  'last_reviewed',
  'reading_time',
  'view_count',
  'published',
  'key_takeaways',
  'faq_data',
];

async function main() {
  console.log('→ Fetching posts from qahoo…');
  const oldRes = await fetch(
    `${OLD_URL}/rest/v1/blog_posts?select=*&order=published_at.asc`,
    {
      headers: {
        apikey: OLD_ANON,
        Authorization: `Bearer ${OLD_ANON}`,
      },
    }
  );
  if (!oldRes.ok) {
    console.error('❌ Failed to fetch from qahoo:', oldRes.status, await oldRes.text());
    process.exit(1);
  }
  const oldPosts: Record<string, unknown>[] = await oldRes.json();
  console.log(`  ✓ Got ${oldPosts.length} posts from qahoo`);

  console.log('→ Fetching existing slugs from mwsho…');
  const newRes = await fetch(
    `${NEW_URL}/rest/v1/blog_posts?select=slug`,
    {
      headers: {
        apikey: NEW_SERVICE!,
        Authorization: `Bearer ${NEW_SERVICE}`,
      },
    }
  );
  if (!newRes.ok) {
    console.error('❌ Failed to fetch from mwsho:', newRes.status, await newRes.text());
    process.exit(1);
  }
  const existingSlugs = new Set(
    (await newRes.json() as { slug: string }[]).map((r) => r.slug)
  );
  console.log(`  ✓ mwsho currently has ${existingSlugs.size} posts`);

  const postsToInsert = oldPosts
    .filter((p) => !existingSlugs.has(p.slug as string))
    .map((p) => {
      const filtered: Record<string, unknown> = {};
      for (const col of COLUMNS) {
        if (col in p) filtered[col] = p[col];
      }
      return filtered;
    });

  console.log(`→ ${postsToInsert.length} new posts to insert into mwsho`);
  if (postsToInsert.length === 0) {
    console.log('Nothing to do. ✅');
    return;
  }

  // Insert in batches of 10 to stay well under payload limits
  const BATCH = 10;
  let inserted = 0;
  for (let i = 0; i < postsToInsert.length; i += BATCH) {
    const batch = postsToInsert.slice(i, i + BATCH);
    const res = await fetch(`${NEW_URL}/rest/v1/blog_posts`, {
      method: 'POST',
      headers: {
        apikey: NEW_SERVICE!,
        Authorization: `Bearer ${NEW_SERVICE}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(batch),
    });
    if (!res.ok) {
      console.error(
        `❌ Insert failed for batch starting at ${i}:`,
        res.status,
        await res.text()
      );
      console.error('   First slug in failing batch:', batch[0]?.slug);
      process.exit(1);
    }
    inserted += batch.length;
    console.log(`  ✓ Inserted ${inserted}/${postsToInsert.length}`);
  }

  console.log('');
  console.log('✅ Migration complete.');
  console.log(`   Total posts now in mwsho: ${existingSlugs.size + inserted}`);
}

main().catch((err) => {
  console.error('❌ Unexpected error:', err);
  process.exit(1);
});
