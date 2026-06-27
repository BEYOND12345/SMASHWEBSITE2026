# SMASH Gmail / Edge — product screens

Production HTML + PNG exports from `smash_landing_screens/`.

## Files

| File | Source | Canvas | Section |
|------|--------|--------|---------|
| `hero.html` / `hero.png` | hero | 1600×900 | §1 Hero |
| `step-request.html` / `.png` | step1 | 1400×900 | §2 Step 1 — request lands |
| `step-matching.html` / `.png` | step2 | 1400×900 | §2 Step 2 — reads + matches |
| `step-done.html` / `.png` | step3 | 1400×900 | §2 Step 3 — quote done |
| `sku-match.html` / `.png` | match | 1200×700 | §4 SKU match |
| `inbox-toolbar.html` / `.png` | inbox | 1200×600 | §5 Workflow |

## Loading order

The landing page prefers **HTML iframes** (crisp at any width), then **PNG**, then React CSS mockups.

## Editing

- Edit the `.html` files directly — inline styles, brand colours locked: `#0F172A`, `#DFFF00`, `#F4F6F9`
- Re-export PNGs from browser if needed for fallbacks / social
- Per-screen canvas sizes live in `GMAIL_DESKTOP_LOGICAL_BY_SCREEN` (`gmail-landing-tokens.ts`)

## Preview

`http://127.0.0.1:5173/product/gmail/screens/hero.html`  
`http://127.0.0.1:5173/chrome-extension`
