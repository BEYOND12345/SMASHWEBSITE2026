# SMASH Website SEO — execution status

**Last updated:** 12 Jun 2026 (session 2)  
**Repo:** `SMASHWEBSITE2026` · **Live:** smashinvoices.com (Netlify `scintillating-mermaid-f083a6`)

---

## ✅ Done (code shipped)

| Phase | What |
|-------|------|
| **North Star copy** | Problem-first, dual register (iPhone voice / Gmail), quote-first across homepage + pillars |
| **Blog Action Plan v1** | 6 retrofits (A1–A3, B1–B3) — answer blocks, FAQ schema, related links |
| **Week 2 consolidation** | 23 blog posts → 301 (9 Gmail ghosts, 14 voice ghosts) |
| **Week 3 GRP-007 phase 1** | 9 zero-impression niche how-tos → `/invoice-template`; legacy orphan 301 |
| **Week 3 GRP-003** | 21 trade `*-invoice-template-australia` → how-to survivor or `/invoice-template` |
| **Main Pages Spec v1** | `main-pages-seo.ts`, static HTML for voice/gmail/pricing/country pages |
| **Homepage SEO** | Single FAQPage in `index.html`; social proof V5 copy |
| **Build pipeline** | `retrofit:blog-action-plan-v1`, `fix:consolidated-internal-links`, `sync:blog-dist`, `verify:blog-deploy` |
| **Blog 404 guards** | Voice/Gmail survivors protected from prerender overwrite |
| **Internal link guards** | Build fails on dead `/blog/` hrefs or links to 301 slugs |
| **Invoice template hub** | Trade guide links on `/invoice-template` → GRP-007 survivors |
| **Segment pages** | `/for-*` blog cards no longer link to 301'd template posts |
| **B2B + Chrome landings** | Full React SPA pages with hero video |
| **CWS listing title** | `SMASH: Gmail Invoice & Quote Generator` — extension `_locales` (pending store submit) |

---

## ⚠️ Architecture note (post–Main Pages Spec)

These pages are **SPA-only** (React + `react-helmet-async`), not static HTML:

- `/chrome-extension`
- `/b2b-gmail-quoting`

Still static/crawler-grade:

- `/voice-invoicing`, `/gmail-invoice`, `/pricing`, `/invoice-template`, `/nz`, `/uk`, `/us`, `/ca`

Google must execute JS for Chrome/B2B pages. Meta comes from React `SEO` components.

---

## 🔄 GRP-007 remaining (phase 2)

11 how-to-invoice posts **with GSC impressions** kept as survivors until content merges into `/invoice-template`:

- `how-to-invoice-as-an-electrician-australia` (32 imp)
- `how-to-invoice-emergency-locksmith-call-outs` (22 imp)
- `how-to-invoice-pool-maintenance-australia` (18 imp)
- `how-to-invoice-as-a-sole-trader-australia-complete-guide` (12 imp)
- `how-to-invoice-tiling-labour-and-materials` (10 imp)
- `how-to-invoice-quarterly-pest-treatments` (7 imp)
- `how-to-invoice-appliance-repair-callouts` (29 imp)
- Plus 4 low-impression survivors (1–3 imp)

**Do not 301 these** until hub content absorbs their keywords.

---

## ⏸️ Blocked on Dan (cannot automate)

| Task | Why |
|------|-----|
| **GSC indexing Batches 1–5** | 10 URL inspections/day — see `gsc-indexing-master-queue.md` |
| **Netlify custom domain** | `smashinvoices.com` on another team — attach or DNS-verify when ready |
| **Keyword Planner volumes** | API 403 — MCC permissions |
| **Google Ads** | Deferred until SEO onboarding complete |
| **CWS title publish** | Requires new Chrome Web Store extension submission |
| **Design review** | `/invoice-template` trade guides section — deferred |

---

## ❌ Not started

| Task | Notes |
|------|--------|
| **Phase 2 pages** | `/get-started`, `/quote-to-invoice` |

---

## GSC indexing queue

All batches still ☐ in `gsc-indexing-master-queue.md`.

**Start here when site is stable:** Batch 2 (homepage + voice survivors) → Batch 5 (Level 1 pages incl. `/invoice-template`).

**Never submit:** 54 URLs that now 301 (see master queue).

---

## Success checkpoints (from action plan)

| When | Target |
|------|--------|
| Week 2 | A1–A3 CTR ≥ 2%; `/gmail-invoice` impressions > 10 |
| Week 4 | Consolidations live; orphans < 20 |
| Week 8 | B-posts page 2 → page 1; mechanism impressions 120 → 300+ |
