# SMASH Intent Keyword Research — June 2026

**Date pulled:** 12 June 2026  
**Default window:** Past 12 months (`today 12-m`) — **not** 5 years  
**Raw data:** `seo-analysis/trends-12m-raw-jun-2026.json`  
**GSC cross-check:** `seo-analysis/query-to-page-map.csv` (~3 months, export 12 Jun 2026)

---

## How to read these numbers

Google Trends does **not** report daily or weekly search counts.

| What you see | What it means |
|---|---|
| **Average** (e.g. `45`) | Mean of **weekly** index values over the selected 12 months (~53 weeks) |
| **Index 0–100** | **Relative interest** within that chart and date range — not absolute volume |
| **100** | Peak week for that term **in that compare set** |
| **0 / no data** | Below Google’s reporting threshold — **not** “zero searches” |
| **Compare mode** | Scores rebalance when you add/remove terms — only compare within the same chart |

**Ground truth for smashinvoices.com:** Search Console impressions/clicks, not Trends.

**Absolute volumes:** Keyword Planner API still blocked (`seo-analysis/keyword-planner-status.txt`).

---

## Executive summary

1. **Own `voice to invoice` anyway** — small Trends signal worldwide (avg ~9), invisible in AU compare, but it is your category term and `/voice-invoicing` is the right pillar.
2. **Bridge with mobile + speed language** — `mobile invoice`, `quick invoice`, `invoice from phone` have **5–10×** higher relative interest than voice terms (worldwide).
3. **In AU, generic beats niche** — `invoice app` and `invoice generator` dominate; voice terms avg **0** in compare.
4. **AI invoicing is the bigger adjacent wave** — avg **32** worldwide vs voice to invoice **10** in the same batch.
5. **GSC already proves problem intent** — `on the job invoice` (69 imp), `how-long-to-send-invoice-after-job-australia` post (94 imp, pos 11, 3 clicks) outperform most voice queries.
6. **Copy-only terms** — hands-free, send invoice fast, invoice without typing, fastest way to invoice: use in body/FAQ/ASO, not as P0 title targets.
7. **Discard polluted terms** — `stop typing` (avg 72 WW) is generic keyboard/accessibility noise, not invoicing intent.

---

## Intent tiers → where to use them

| Tier | Terms | Website | App Store subtitle / keywords |
|---|---|---|---|
| **A — Own** | voice to invoice, voice invoicing | `/voice-invoicing` title/H1/FAQ (protected) | Primary subtitle: “Voice to invoice in 60 seconds” |
| **A-problem** | on the job invoice, send invoice after job | Blog + FAQ links → pillar | Supporting keyword field |
| **B — Support** | mobile invoice, invoice on mobile, quick invoice, invoice from phone, invoice on the go | Pillar body, blog H2s, internal anchors | “Invoice on the go”, “mobile invoice app” |
| **B-ai** | ai invoicing | `/ai-invoicing` pillar + ChatGPT comparison posts | “AI invoicing” in keyword list |
| **B-desk** | email to invoice, gmail invoice, pdf invoice | `/gmail-invoice`, extension landing | CWS: gmail invoice, email to invoice |
| **C — Copy only** | hands-free, stop typing, send invoice fast, invoice without typing, easy invoice app | One mention in meta/body — **not** new URLs | Secondary keywords only |
| **D — Scale (wrong intent for P0)** | invoice generator, invoice app, quote generator, pdf invoice | Free tools `/invoice-generator`, `/quote-generator` — acquisition, not positioning | Do not lead iOS subtitle with these |
| **Skip** | stop typing (polluted), voice to quote alone (quote intent, not invoice) | — | — |

---

## Batch A — Category + mobile + problem

**Trends compare:** [Worldwide 12m](https://trends.google.com/trends/explore?date=today%2012-m&q=mobile%20invoice,voice%20to%20invoice,invoice%20on%20mobile,on%20the%20job%20invoice,voice%20invoicing) · [AU 12m](https://trends.google.com/trends/explore?date=today%2012-m&geo=AU&q=mobile%20invoice,voice%20to%20invoice,invoice%20on%20mobile,on%20the%20job%20invoice,voice%20invoicing)

| Term | WW avg | WW max | AU avg | AU max | GSC imp | GSC pos |
|---|---:|---:|---:|---:|---:|---:|
| mobile invoice | **45.5** | 100 | **22.5** | 100 | — | — |
| voice to invoice | **9.1** | 20 | **0.0** | 0 | 12 | 56 |
| invoice on mobile | 9.8 | 19 | 0.7 | 25 | — | — |
| on the job invoice | 4.4 | 9 | 0.8 | 32 | **69** | 51 |
| voice invoicing | 3.2 | 9 | 0.0 | 0 | — | — |

**Read:** Mobile category language is the strongest honest signal. Voice terms are real but tiny. GSC `on the job invoice` matters more than Trends suggests for AU.

---

## Batch B — Speed + mobile phrasing

**Trends compare:** [Worldwide](https://trends.google.com/trends/explore?date=today%2012-m&q=quick%20invoice,invoice%20from%20phone,invoice%20on%20the%20go,send%20invoice%20fast,invoice%20without%20typing) · [AU](https://trends.google.com/trends/explore?date=today%2012-m&geo=AU&q=quick%20invoice,invoice%20from%20phone,invoice%20on%20the%20go,send%20invoice%20fast,invoice%20without%20typing)

| Term | WW avg | WW max | AU avg | AU max | Tier |
|---|---:|---:|---:|---:|---|
| quick invoice | **28.4** | 50 | 2.3 | 100 | B |
| invoice from phone | **26.6** | 100 | 0.7 | 16 | B |
| invoice on the go | 10.2 | 20 | 1.8 | 71 | B |
| send invoice fast | 0.1 | 3 | 0.0 | 0 | C |
| invoice without typing | 0.0 | 0 | 0.0 | 0 | C |

---

## Batch C — Hands-free + Gemini-suggested copy

**Trends compare:** [Worldwide](https://trends.google.com/trends/explore?date=today%2012-m&q=hands%20free%20invoice,hands%20free%20invoicing,easy%20invoice%20app,fast%20invoicing%20app,no%20typing%20invoice) · [AU](https://trends.google.com/trends/explore?date=today%2012-m&geo=AU&q=hands%20free%20invoice,hands%20free%20invoicing,easy%20invoice%20app,fast%20invoicing%20app,no%20typing%20invoice)

| Term | WW avg | WW max | AU avg | AU max | Nonzero weeks (WW) | Tier |
|---|---:|---:|---:|---:|---:|---|
| easy invoice app | **21.0** | 100 | 0.0 | 0 | 33 | C (generic; master plan bans “easy” as headline) |
| hands free invoice | 1.7 | 22 | 1.6 | 85 | 7 | C |
| hands free invoicing | 0.4 | 20 | 1.6 | 87 | 1 | C |
| fast invoicing app | 0.3 | 16 | 0.0 | 0 | 1 | C |
| no typing invoice | 0.0 | 1 | 1.9 | 100 | 1 | C |

**Read:** AU spikes on hands-free terms are **single-week noise** (1 nonzero week). Safe for one FAQ (“Can I invoice hands-free?”) — not a pillar or URL slug.

---

## Batch D — Scale vs voice (category sizing)

**Trends compare:** [Worldwide](https://trends.google.com/trends/explore?date=today%2012-m&q=invoice%20generator,gmail%20invoice,quote%20generator,voice%20to%20invoice,invoice%20app) · [AU](https://trends.google.com/trends/explore?date=today%2012-m&geo=AU&q=invoice%20generator,gmail%20invoice,quote%20generator,voice%20to%20invoice,invoice%20app)

| Term | WW avg | AU avg | GSC imp | GSC pos | Use |
|---|---:|---:|---:|---:|---|
| invoice app | **53.4** | **41.8** | — | — | D — ASO bridge copy, not North Star title |
| invoice generator | **40.6** | **61.0** | **76** | 61 | D — `/invoice-generator` tool traffic |
| quote generator | **28.3** | **22.9** | 15 (+11 online) | 57 / 54 | D — `/quote-generator` |
| gmail invoice | 7.0 | 2.1 | **0** | — | B-desk — high intent, low volume; product moat |
| voice to invoice | 3.6* | 0.0 | 12 | 56 | A — own anyway |

\*Lower in this batch because `invoice app` dominates the compare scale.

---

## Batch E — Voice + AI cluster

**Trends compare:** [Worldwide](https://trends.google.com/trends/explore?date=today%2012-m&q=voice%20to%20invoice,voice%20invoicing,voice%20invoice%20app,ai%20invoicing,voice%20to%20quote) · [AU](https://trends.google.com/trends/explore?date=today%2012-m&geo=AU&q=voice%20to%20invoice,voice%20invoicing,voice%20invoice%20app,ai%20invoicing,voice%20to%20quote)

| Term | WW avg | WW max | AU avg | AU max | Target page |
|---|---:|---:|---:|---:|---|
| voice to quote | **61.5** | 100 | 7.2 | 100 | Extension / quote flow — **not** iOS invoice pillar |
| ai invoicing | **32.1** | 50 | 5.4 | 96 | `/ai-invoicing` |
| voice to invoice | 9.8 | 22 | 0.0 | 0 | `/voice-invoicing` |
| voice invoicing | 3.4 | 9 | 0.0 | 0 | `/voice-invoicing` |
| voice invoice app | 2.1 | 6 | 0.0 | 0 | ASO keyword field |

**Read:** `voice to quote` is likely quote-generation intent (extension register). Keep on Chrome/Edge store terms, not iOS invoice headline.

---

## Batch F — Gmail / desk / extension

**Trends compare:** [Worldwide](https://trends.google.com/trends/explore?date=today%2012-m&q=email%20to%20invoice,gmail%20invoice,invoice%20from%20gmail,chrome%20extension%20invoice,pdf%20invoice) · [AU](https://trends.google.com/trends/explore?date=today%2012-m&geo=AU&q=email%20to%20invoice,gmail%20invoice,invoice%20from%20gmail,chrome%20extension%20invoice,pdf%20invoice)

| Term | WW avg | AU avg | Product surface |
|---|---:|---:|---|
| pdf invoice | **44.1** | **49.3** | Onboarding PDF / Pricing DNA story |
| email to invoice | **11.9** | **27.8** | Chrome extension pillar |
| gmail invoice | 3.8 | 2.9 | `/gmail-invoice` |
| invoice from gmail | 0.2 | 0.5 | Long-tail blog |
| chrome extension invoice | 0.1 | 1.1 | CWS listing |

**Read:** AU relative strength for `email to invoice` vs worldwide — aligns with extension GTM. GSC still shows **0** tracked queries for “gmail invoice” (indexing/ranking lag, not proof of zero demand).

---

## Batch G — Speed / problem phrasing (incl. polluted terms)

**Trends compare:** [Worldwide](https://trends.google.com/trends/explore?date=today%2012-m&q=send%20invoice%20fast,fastest%20way%20to%20invoice,invoice%20without%20typing,stop%20typing,hands%20free%20invoicing) · [AU](https://trends.google.com/trends/explore?date=today%2012-m&geo=AU&q=send%20invoice%20fast,fastest%20way%20to%20invoice,invoice%20without%20typing,stop%20typing,hands%20free%20invoicing)

| Term | WW avg | AU avg | Verdict |
|---|---:|---:|---|
| **stop typing** | **72.5** | 14.6 | **DISCARD** — generic phrase, not invoice intent |
| send invoice fast | 0.1 | 0.0 | C — copy only |
| fastest way to invoice | 0.1 | 0.0 | C — North Star message, not SEO head term |
| invoice without typing | 0.0 | 0.0 | C — FAQ answer text |
| hands free invoicing | 0.1 | 1.1 | C — one FAQ mention |

---

## GSC ground truth — intent terms on smashinvoices.com

| Query | Impressions | Position | Clicks | Mapped page | Action |
|---|---:|---:|---:|---|---|
| on the job invoice | 69 | 51 | 0 | wrong blog | Link blog → `/voice-invoicing` |
| voice to invoice | 12 | 56 | 0 | wrong blog | Fix pillar indexing + canonical |
| voice invoice | 10 | 56 | 0 | gmail blog | Consolidate to pillar |
| invoice generator | 76 | 61 | 0 | gmail blog | Tool page + redirect intent |
| how-long post (slug) | 94 | **11** | **3** | survivor | Add pillar link anchor “voice to invoice” |
| free quote generator | 15 | 57 | 0 | `/quote-generator` | OK |
| smash invoices | 25 | **10** | 0 | blog | Brand — homepage |

**Zero GSC queries (sample):** hands-free invoicing, hands free invoice, send invoice fast, invoice without typing, gmail invoice (tracked).

---

## App Store (iOS) keyword pack — derived from 12m data

**Subtitle (pick one):**
- `Voice to invoice in 60 seconds` (Tier A)
- `Invoice on the go. Just talk.` (Tier A + B)

**Keyword field (100 chars, comma-separated, no spaces after commas):**
```
voice,invoice,mobile,tradie,quote,AI,fast,field,on-site,hands-free,cleaner,plumber,electrician
```

**Do not lead with:** invoice generator, easy invoice app, stop typing.

---

## Chrome Web Store / Edge — derived from 12m data

Prioritise by AU + WW batch F + D:
1. gmail invoice
2. email to invoice
3. quote generator / voice to quote
4. invoice generator (scale, competitive)

---

## Why 12 months, not 5 years

| Issue with 5y | Example |
|---|---|
| Dilutes recent mobile/voice signal | `mobile invoice` ~15 avg (5y WW) vs **45.5** (12m WW) |
| Voice category barely existed pre-2024 | 5y averages near zero |
| SMASH product ~6 months old | Recent demand matters for launch SEO |
| Weekly granularity lost on long ranges | 12m = 53 weekly points |

Keep 5y pulls for **US ai invoicing trend narrative only** — not for keyword prioritisation.

---

## Recommended next actions (website chat)

1. **DONE (Jul 2026)** — `/voice-invoicing` serves `voice-invoicing/index.html` (Netlify + `_redirects`); build no longer deletes that static file; edge bot-split removed.
2. **DONE** — Pillar SEO enriched (~30s, instant quote FAQs); title protected.
3. **DONE** — Explainer post `/blog/what-is-voice-to-invoice` + how-long/speed cluster links.
4. **GSC re-inspect** — `/voice-invoicing` after deploy (title/canonical must match static).
5. **Gmail cluster** — `email to invoice` AU signal stronger than `gmail invoice`; keep testing both in `/gmail-invoice` H2s.
6. **Ads drip** — Exact match on instant quote / quick invoice / voice to invoice / on the job invoice / gmail invoice; skip mobile invoice app as primary spend.

---

## Data sources & replication

| Source | File / link |
|---|---|
| Raw Trends JSON | `seo-analysis/trends-12m-raw-jun-2026.json` |
| GSC queries | `seo-analysis/query-to-page-map.csv` |
| GSC blog performance | `seo-analysis/blog-gsc-performance.csv` |
| Master SEO plan | `SEO_AI_SEARCH_MASTER_PLAN_V3_MAY_2026.md` |
| Keyword Planner | Blocked — `seo-analysis/keyword-planner-status.txt` |

**Pull script:** pytrends, `timeframe='today 12-m'`, batches of 5 terms, 6s delay between requests (12 Jun 2026).
