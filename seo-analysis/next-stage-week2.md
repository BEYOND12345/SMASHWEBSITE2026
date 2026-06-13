# SEO — Next stage (Week 2 plan)

## Done (13 Jun deploy)

- Homepage FAQ dedupe (single FAQPage, visible copy aligned)
- Blog Action Plan v1 — 6 retrofits live + protected from prerender wipe
- Build pipeline: `retrofit:blog-action-plan-v1` runs after patch, before `sync:blog-dist`
- `/gmail-invoice` in sitemap
- Supabase `blog_posts` meta synced for 6 slugs

## Week 2 — GRP-001 Gmail consolidation (highest leverage)

**Goal:** 13 competing posts → 3–4 survivors; funnel to `/gmail-invoice` pillar.

| Survivor | Role |
|----------|------|
| `gmail-quickbooks-xero-bridge` | Hub — Xero + QB bridge (already retrofitted) |
| `gmail-email-to-invoice-20-seconds` | Speed demo |
| `gmail-to-xero-invoice-no-typing` | Xero-specific |
| `fastest-voice-invoice-generator-gmail` | Voice-from-Gmail angle |

**301 targets:** merge content into survivors → redirect ghosts to `/gmail-invoice` or nearest survivor.

**Do not merge yet:** video posts with VideoObject (protected list in `prerender-blog.ts`).

## Week 2 — GRP-008 Voice consolidation

**Survivors (3):**

- `the-60-second-invoice-voice-to-invoice`
- `fastest-way-to-send-invoice-2026`
- `stop-admin-sundays-voice-invoicing`

**301 →** `/voice-invoicing` for niche voice posts that don’t earn impressions.

## Week 3 — GRP-007 Template hub

- Single hub at `/invoice-template` or dedicated “template hub” post
- Bucket D template posts: `noindex` or 301 — **do not** compete with mechanism pages

## Ongoing

- Orphan internal links (~80) — fix after consolidations reduce URL count
- Keyword Planner 403 — fix MCC/customer ID permissions for volume data
- Google Ads — deferred until SEO onboarding complete

## Success metrics (from action plan)

| When | Checkpoint |
|------|------------|
| Week 2 | A1–A3 CTR ≥ 2%; `/gmail-invoice` impressions > 10 |
| Week 4 | GRP-001 + GRP-008 live; orphans < 20 |
| Week 8 | B-posts page 2 → page 1; mechanism impressions 120 → 300+ |
