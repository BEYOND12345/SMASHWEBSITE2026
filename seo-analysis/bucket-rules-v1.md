# Bucket rules v1 (13 Jun 2026)

## A — Retrofit now
`avg_position ≤ 20` AND `impressions ≥ 20`

## B — Retrofit next
`20 < avg_position ≤ 50` AND `impressions > 0`

## C — Consolidate / 301
- Zero GSC impressions, OR
- Cannibalization non-survivor **unless** impressions ≥ 5 (see override below)

## D — Contain
Template, calculator, GST-adjacent intent (slug/title/meta match). No further SEO investment.

## Override (13 Jun correction)
**Any post with impressions ≥ 5 can never be a consolidation-only casualty.** Impressions override cannibalization group membership for bucket assignment.

Reclassified example: `how-to-invoice-appliance-repair-callouts` — 29 imp, pos 49.69 → **Bucket B** (was C).
