# Main Pages Spec v1 — execution status

**Deployed:** `fc15636`+ (Main Pages Spec); chrome/b2b moved to SPA in `9a2150d`+  
**Date:** 13 Jun 2026 (updated 15 Jun)

## Phase 1 shipped (pages 1–5, 8, 9)

| Page | Static HTML | Spec copy | Notes |
|------|-------------|-----------|-------|
| `/` | `index.html` shell updated | ✅ H1, meta, router cards, answer block | SPA still serves interactive UI |
| `/voice-invoicing` | ✅ | ✅ | `generate:voice-static` in build |
| `/gmail-invoice` | ✅ | ✅ | gmail-landing-pages + gmail-static |
| `/chrome-extension` | SPA (React) | ✅ | Was static in v1; now SPA for full design system |
| `/b2b-gmail-quoting` | SPA (React) | ✅ | Hero MP4 demo; was static stub conflict |
| `/pricing` | ✅ | ✅ title/meta | Tier numbers still in component |
| `/nz` `/uk` `/us` `/ca` | ✅ | ✅ titles | hreflang in static |

## Structural

- `src/data/main-pages-seo.ts` — single source of truth
- `scripts/generate-main-pages-static.ts` + `scripts/lib/static-page-template.ts`
- `public/_redirects` + `netlify.toml` — static rewrites before SPA fallback
- Meta keywords deprecated in `seo.tsx` + root `index.html`
- `/b2b-gmail-quoting` added to sitemap

## Phase 2 deferred

- `/get-started` chooser
- `/quote-to-invoice` process pillar

## GSC

Batch 5 in `gsc-indexing-master-queue.md` — 10 main page URLs after deploy.
