# Week 2 execution — Gmail consolidation (GRP-004)

**Deployed:** pending commit `week2-gmail-301s`  
**Date:** 13 Jun 2026

## Status checklist (prior batch)

| Item | Status |
|------|--------|
| Code saved in git | ✅ `9bbc9be` on `main` |
| Backed up (GitHub remote) | ✅ `BEYOND12345/SMASHWEBSITE2026` |
| Netlify deploy triggered | ✅ push to `main` |
| Live retrofits visible | ⏳ Edge cache may lag; build pipeline fix in `9bbc9be` |

## Phase 1 — Gmail 301s (this commit)

**Survivors (4):** keep indexed, no redirect

- `gmail-quickbooks-xero-bridge`
- `gmail-email-to-invoice-20-seconds`
- `gmail-to-xero-invoice-no-typing`
- `fastest-voice-invoice-generator-gmail`

**Redirected (9)** — 0 GSC impressions, non-video:

| Slug | Target |
|------|--------|
| `bulk-goods-wholesaler-quoting-gmail` | `/gmail-invoice` |
| `fencing-gate-balustrade-quoting-gmail` | `/gmail-invoice` |
| `garden-shed-kit-barn-quoting-gmail` | `/gmail-invoice` |
| `it-reseller-msp-quote-automation-gmail` | `/gmail-invoice` |
| `print-signage-custom-quote-gmail` | `/gmail-invoice` |
| `service-trade-invoice-gmail-sidebar` | `/gmail-invoice` |
| `shipping-container-quote-builder-gmail` | `/gmail-invoice` |
| `quickbooks-estimates-from-gmail` | `/blog/gmail-quickbooks-xero-bridge` |
| `xero-quote-builder-gmail-extension` | `/blog/gmail-to-xero-invoice-no-typing` |

**Deferred (video / VideoObject):** do not 301 yet

- `wave-invoicing-alternative-gmail`
- `photographer-wedding-quote-gmail-60-seconds`
- `quickbooks-gmail-chrome-extension-missing`
- `quickbooks-gmail-invoice-shortcut`
- `quickbooks-gmail-sidebar-tab-switching`
- `pest-control-invoicing-gmail-csv-pricing`

## Phase 2 — GRP-008 voice

✅ **Done** — 14 posts 301 → `/voice-invoicing`. See `week2-voice-consolidation.md`.

Survivors: `the-60-second-invoice-voice-to-invoice`, `fastest-way-to-send-invoice-2026`, `stop-admin-sundays-voice-invoicing` (+ mechanism + trade posts with impressions)

## GSC

See **`gsc-indexing-master-queue.md`** — Batch 2 (tomorrow 14 Jun) is your primary list.
