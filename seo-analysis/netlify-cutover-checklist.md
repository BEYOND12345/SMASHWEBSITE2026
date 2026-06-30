# Netlify cutover + SEO — ordered checklist

**Goal:** Leave Bolt as the edit/deploy path. Ship from **Git → Netlify** with SEO work in the right sequence so nothing breaks rankings or redirects.

**Repo:** `BEYOND12345/SMASHWEBSITE2026` · **Build:** `npm run build` · **Publish:** `dist`  
**Live domain:** `smashinvoices.com` · **Documented Netlify site:** `scintillating-mermaid-f083a6`

**Rule:** Do not change DNS or cancel Bolt until **Phase 4** passes on a Netlify deploy URL.

---

## Why this order?

| If you do X before Y | Risk |
|---|---|
| DNS cutover before build passes on Netlify | Live site 404 or stale build |
| GSC indexing before deploy is live | Google caches wrong version |
| Blog prerender without Supabase env in Netlify CI | Build fails or stale blog HTML ships |
| SEO consolidation (301s) after cutover without testing | Broken links on production |
| Change `/voice-invoicing` title/meta during cutover | Ranking asset noise |

**Correct sequence:** finish in-repo changes → green Netlify build → preview QA → production deploy → DNS (if needed) → GSC → Bolt off → longer SEO consolidation.

---

## Phase 0 — Snapshot (30 min)

| ☐ | Task | Owner |
|---|------|-------|
| ☐ | Note current DNS: where does `smashinvoices.com` point? (Netlify vs Bolt) | Dan |
| ☐ | Screenshot Bolt deploy settings (build cmd, env vars) for comparison | Dan |
| ☐ | Confirm GitHub repo is up to date with local work (commit + push) | Dan / agent |
| ☐ | Export/bookmark GSC property for `smashinvoices.com` | Dan |
| ☐ | **Do not** cancel Bolt yet | — |

---

## Phase 1 — Finish in-repo product + copy (before any deploy)

*Ship these in Git first so one deploy contains everything.*

| ☐ | Task | Status |
|---|------|--------|
| ☐ | Homepage hero photo (wide ute + dash phone) | ✅ Done locally — commit when ready |
| ☐ | Remaining homepage section photos (`voice-story-painter`, `cleaner-testimonial`, Gmail demo) | Pending assets |
| ☐ | Any other copy/design cohesion still open in Cursor | In progress |
| ☐ | **Do not** change `/voice-invoicing` title or meta (protected ranking page) | Rule |

**Gate:** Commit and push Phase 1 work to `main` (or deploy branch).

---

## Phase 2 — Build pipeline + SEO generators (before Netlify connect)

*These run inside `npm run build`. Fix locally first.*

| ☐ | Task | Notes |
|---|------|-------|
| ☐ | Local `npm run build` succeeds end-to-end | Needs `.env` with `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY` for prerender/sitemap |
| ☐ | `npm run verify:blog-deploy` passes | Catches dead blog links |
| ☐ | `npm run verify:pseo` passes | pSEO static files present |
| ☐ | **Optional but recommended:** `npm run prerender` if blog CTAs still say old copy | Updates 157 `public/blog/*/index.html` |
| ☐ | Add Smash Leads URLs to `scripts/generate-sitemap.ts` (4 pages missing today) | Small code change |
| ☐ | Re-run `npm run sitemap` after sitemap fix | Committed `public/sitemap.xml` |

**Gate:** Green local build. Commit generator/sitemap changes.

---

## Phase 3 — Netlify site from Git (1–2 hours)

| ☐ | Task | Where |
|---|------|-------|
| ☐ | Netlify → **Add site** → Import from GitHub → `SMASHWEBSITE2026` | app.netlify.com |
| ☐ | Build command: `npm run build` | Matches `netlify.toml` |
| ☐ | Publish directory: `dist` | Matches `netlify.toml` |
| ☐ | Node version: **22** | Matches `netlify.toml` |
| ☐ | Env var: `VITE_SUPABASE_URL` | Already in `netlify.toml` `[context.production.environment]` — duplicate in UI if needed |
| ☐ | Env var: `VITE_SUPABASE_ANON_KEY` | **Required in Netlify UI** — never commit |
| ☐ | Trigger deploy; fix any CI-only failures | Common: missing anon key, build timeout |
| ☐ | If domain on another Netlify team: transfer site or add domain to this team | See `action-plan-execution-status.md` |

**Gate:** Deploy log green. Note the `*.netlify.app` preview URL.

---

## Phase 4 — Preview QA (before DNS / before Bolt off)

Test on **Netlify preview URL** first, then repeat on `smashinvoices.com` after cutover.

### Core pages

| ☐ | URL | Check |
|---|-----|-------|
| ☐ | `/` | New hero photo, dual CTAs, FAQ |
| ☐ | `/voice-invoicing` | SPA loads; **title/meta unchanged** |
| ☐ | `/chrome-extension` | SPA loads; meta from React |
| ☐ | `/gmail-invoice` | Static HTML or rewrite (View Source has content) |
| ☐ | `/pricing` | Static stub or SPA |
| ☐ | `/invoice-template` | Trade guides + CTAs |

### SEO mechanics

| ☐ | Check | How |
|---|-------|-----|
| ☐ | Sample **301** works | e.g. `/blog/voice-to-quote-feature` → `/voice-invoicing` |
| ☐ | Sample **blog static** | View Source on `/blog/<slug>` — not empty SPA shell |
| ☐ | Sample **pSEO static** | e.g. `/for/handyman` — content in HTML |
| ☐ | `robots.txt` / `sitemap.xml` load | `/sitemap.xml` includes pillars + blog + pSEO block |
| ☐ | Canonical on a blog post matches URL | No duplicate canonical |
| ☐ | Mobile **375px** on homepage + one tool page | Layout OK |

### Protected

| ☐ | Never submit [65 consolidated blog URLs](gsc-indexing-master-queue.md) to GSC | 301 sources only |

**Gate:** All above pass on preview. Then promote to production / attach domain.

---

## Phase 5 — DNS cutover (only if domain not already on this Netlify site)

| ☐ | Task |
|---|------|
| ☐ | Netlify → Domain settings → `smashinvoices.com` + `www` |
| ☐ | Update DNS at registrar to Netlify (A/ALIAS + CNAME for www) |
| ☐ | Enable HTTPS (Netlify auto) |
| ☐ | Wait for propagation (minutes to 48h) |
| ☐ | Re-run Phase 4 checks on **live** `https://smashinvoices.com` |
| ☐ | Keep Bolt project **read-only** 48–72h (rollback = revert DNS only) |

**Rollback plan:** Point DNS back to previous target. No code rollback needed if Git tag saved at cutover.

---

## Phase 6 — Post-launch SEO (start after live site verified)

*Use [seo-2-week-checklist.md](seo-2-week-checklist.md) daily.*

| ☐ | Task | When |
|---|------|------|
| ☐ | GSC → URL Inspection → **Test live URL** on pillars | Day 0 after cutover |
| ☐ | Request indexing: `/`, `/voice-invoicing`, `/gmail-invoice`, `/chrome-extension` | Max 10/day |
| ☐ | Submit **targets** of 301s only (e.g. `/voice-invoicing`, not old blog slugs) | Ongoing |
| ☐ | Monitor GSC Coverage / Crawl stats for 404 spikes | Week 1 |
| ☐ | IndexNow / sitemap ping if you use `.github/workflows/indexnow.yml` | After sitemap update |

---

## Phase 7 — Decommission Bolt

| ☐ | Task | When |
|---|------|------|
| ☐ | Confirm 48–72h stable on Netlify + no SEO alerts | After Phase 5 |
| ☐ | Stop Bolt auto-deploy / disconnect repo sync | — |
| ☐ | Cancel or downgrade Bolt subscription | — |
| ☐ | Update team workflow: **Cursor + Git + Netlify only** | — |

---

## Phase 8 — SEO consolidation (after stable on Netlify)

*Not blocking cutover — do once deploy path is settled.*

| ☐ | Task | Notes |
|---|------|-------|
| ☐ | Canonical audit: `/for-cleaners` (React) vs `/for/cleaner` (pSEO) | Pick one intent, 301 duplicates |
| ☐ | Add Smash Leads to sitemap (if not done in Phase 2) | 4 URLs |
| ☐ | Blog full regen + CTA sweep if not in Phase 2 | `npm run prerender` |
| ☐ | Bolt-only URLs → `_redirects` inventory | Any URLs that existed only on Bolt |
| ☐ | Materials-pricing / customer-approval design pass | Lower priority |
| ☐ | Full cluster map doc (voice / Gmail / tools / ICP) | For second chatbot / agency |

---

## Quick reference

```bash
# Local preflight
npm run build
npm run verify:blog-deploy
npm run verify:pseo

# Optional blog + sitemap refresh (needs .env Supabase)
npm run prerender
npm run sitemap
```

**Files that govern cutover safety:**
- `netlify.toml` — rewrites + SPA fallback
- `public/_redirects` — ~100 SEO 301s (must deploy with site)
- `scripts/generate-sitemap.ts` — sitemap source
- `src/data/ios-landing-spec.ts` — protected `/voice-invoicing` SEO

---

## Current blockers (Dan-only)

| Blocker | Blocks |
|---------|--------|
| `VITE_SUPABASE_ANON_KEY` not in Netlify UI | Full CI build + fresh sitemap/blog in deploy |
| Domain on another Netlify team | Attaching `smashinvoices.com` to new site |
| Uncommitted local changes | Preview deploy missing homepage photo etc. |

---

*Last updated: 30 Jun 2026 — align with [action-plan-execution-status.md](action-plan-execution-status.md) and [SEO handoff overview](../SEO_AI_SEARCH_MASTER_PLAN_V3_MAY_2026.md).*
