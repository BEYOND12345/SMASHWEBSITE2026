# SMASH Website SEO — execution status

**Last updated:** 15 Jun 2026  
**Repo:** `SMASHWEBSITE2026` · **Live:** smashinvoices.com (Netlify `scintillating-mermaid-f083a6`)

---

## ✅ Done (code shipped)

| Phase | What |
|-------|------|
| **North Star copy** | Problem-first, dual register (iPhone voice / Gmail), quote-first across homepage + pillars |
| **Blog Action Plan v1** | 6 retrofits (A1–A3, B1–B3) — answer blocks, FAQ schema, related links |
| **Week 2 consolidation** | 23 blog posts → 301 (9 Gmail ghosts, 14 voice ghosts) |
| **Main Pages Spec v1** | `main-pages-seo.ts`, static HTML for voice/gmail/pricing/country pages |
| **Homepage SEO** | Single FAQPage in `index.html`; social proof V5 copy |
| **Build pipeline** | `retrofit:blog-action-plan-v1`, `sync:blog-dist`, prerender protection, `verify:blog-deploy` |
| **Blog 404 guards** | Voice/Gmail survivors protected from prerender overwrite (`63d298e`) |
| **Sitemap** | Typo slug fixed; ghosts excluded from sitemap |
| **B2B + Chrome landings** | Full React SPA pages with hero video (`9a2150d`+) — design refresh shipped |

---

## ⚠️ Architecture note (post–Main Pages Spec)

These pages are **SPA-only** (React + `react-helmet-async`), not static HTML:

- `/chrome-extension`
- `/b2b-gmail-quoting`

Still static/crawler-grade:

- `/voice-invoicing`, `/gmail-invoice`, `/pricing`, `/nz`, `/uk`, `/us`, `/ca`

Google must execute JS for Chrome/B2B pages. Meta comes from React `SEO` components.

---

## 🔄 In progress (autonomous — 15 Jun)

| Task | Status |
|------|--------|
| Orphan link fix — ghost slug hrefs → 301 targets | `npm run fix:consolidation-orphans` |
| Retrofit spec — remove link to redirected `ai-voice-invoicing-2026-standard` | ✅ script updated |
| `/ai-invoicing` blog cards — survivor slugs only | ✅ |
| Refresh this status doc | ✅ |

---

## ⏸️ Blocked on Dan (cannot automate)

| Task | Why |
|------|-----|
| **GSC indexing Batches 1–5** | 10 URL inspections/day — see `gsc-indexing-master-queue.md` |
| **Netlify custom domain** | `smashinvoices.com` on another team — attach or DNS-verify when ready |
| **Keyword Planner volumes** | API 403 — MCC permissions |
| **Google Ads** | Deferred until SEO onboarding complete |

---

## ❌ Not started (Week 3+)

| Task | Notes |
|------|--------|
| **GRP-007** template hub (20 → 1) | Week 3 |
| **Orphan links** — non-redirect ghosts (~80 legacy internal links) | After template hub |
| **Phase 2 pages** | `/get-started`, `/quote-to-invoice` |
| **Chrome Web Store title** | `SMASH: Gmail Invoice & Quote Generator` — extension repo |

---

## GSC indexing queue

All batches still ☐ in `gsc-indexing-master-queue.md`.

**Start here when site is stable:** Batch 2 (homepage + voice survivors) → Batch 5 (Level 1 pages).

**Never submit:** 23 redirected ghost URLs listed in master queue.

---

## Success checkpoints (from action plan)

| When | Target |
|------|--------|
| Week 2 | A1–A3 CTR ≥ 2%; `/gmail-invoice` impressions > 10 |
| Week 4 | Consolidations live; orphans < 20 |
| Week 8 | B-posts page 2 → page 1; mechanism impressions 120 → 300+ |
