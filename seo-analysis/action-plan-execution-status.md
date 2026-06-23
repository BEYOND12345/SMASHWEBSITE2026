# SMASH Website SEO — execution status

**Last updated:** 12 Jun 2026 (session 4)  
**Repo:** `SMASHWEBSITE2026` · **Live:** smashinvoices.com (Netlify `scintillating-mermaid-f083a6`)

**→ Start here:** [seo-2-week-checklist.md](seo-2-week-checklist.md) — daily GSC plan to finish indexing + Week 2 deliverables.

**GSC quota today (12 Jun):** exhausted — no more URL Inspection submissions until tomorrow.

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
| **Phase 2 pages** | `/get-started`, `/quote-to-invoice` — static HTML + React + sitemap + footer links |
| **GRP-007 phase 2** | 11 impression-bearing how-tos merged into `/invoice-template` + 301 (20 template hub redirects total) |

---

## ⚠️ Architecture note (post–Main Pages Spec)

These pages are **SPA-only** (React + `react-helmet-async`), not static HTML:

- `/chrome-extension`
- `/b2b-gmail-quoting`

Still static/crawler-grade:

- `/voice-invoicing`, `/gmail-invoice`, `/pricing`, `/invoice-template`, `/get-started`, `/quote-to-invoice`, `/nz`, `/uk`, `/us`, `/ca`

Google must execute JS for Chrome/B2B pages. Meta comes from React `SEO` components.

---

---

## ✅ GRP-007 complete (phase 2 shipped)

All 11 impression-bearing how-to survivors merged into `/invoice-template` trade guide section (inline content + anchor nav). Blog URLs now 301 to hub:

- `how-to-invoice-as-an-electrician-australia` → `/invoice-template#electrician`
- `how-to-invoice-as-a-sole-trader-australia-complete-guide` → `#sole-trader`
- `how-to-invoice-appliance-repair-callouts` → `#appliance-repair`
- `how-to-invoice-emergency-locksmith-call-outs` → `#locksmith`
- `how-to-invoice-pool-maintenance-australia` → `#pool-maintenance`
- `how-to-invoice-quarterly-pest-treatments` → `#pest-control`
- `how-to-invoice-tiling-labour-and-materials` → `#tiling`
- `how-to-invoice-commercial-cleaning-clients` → `#commercial-cleaning`
- `how-to-invoice-concrete-progress-claims` → `#concrete`
- `how-to-invoice-multi-day-painting-jobs` → `#painting`
- `how-to-invoice-switchboard-upgrades` → `#switchboard`

**After deploy:** request indexing on `https://smashinvoices.com/invoice-template` only — never submit the 11 blog URLs (they 301).

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
| *(none)* | GRP-007 phase 2 shipped 12 Jun 2026 |

---

## GSC indexing queue

All batches still ☐ in `gsc-indexing-master-queue.md`.

**Daily plan:** [seo-2-week-checklist.md](seo-2-week-checklist.md) — Day 1 = Batch 2, Day 2 = Batch 5, etc.

**Never submit:** 65 URLs that now 301 (see master queue — includes 11 GRP-007 phase 2 how-tos).

---

## Success checkpoints (from action plan)

| When | Target |
|------|--------|
| Week 2 | A1–A3 CTR ≥ 2%; `/gmail-invoice` impressions > 10 |
| Week 4 | Consolidations live; orphans < 20 |
| Week 8 | B-posts page 2 → page 1; mechanism impressions 120 → 300+ |
