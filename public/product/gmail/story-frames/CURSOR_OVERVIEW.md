# SMASH — Landing Page Story Frames: Overview for Cursor

Six full-page HTML frames that tell the SMASH story across **two ICPs that are the
two ends of the same transaction.** This doc explains what they are, the design system,
and — importantly — **how the callout component works** so you can reposition/restyle it
correctly. The HTML files render standalone (fonts + logo embedded as base64).

---

## 1. The strategy these frames tell

SMASH lives in Gmail and turns an email into a quote. The key insight driving these
frames: **both sides of a quote run the same tool.**

- **Story A — the tradie (SENDING side):** a customer emails an enquiry → SMASH reads it
  → builds a **priced quote** from the tradie's rates → reply.
- **Story B — the supplier desk (RECEIVING side):** a tradesperson emails a parts request
  → SMASH reads it → **SKU-matches** every line to the supplier's catalogue → quote back,
  synced to Xero/QuickBooks, paid.

The request Story A sends out is the request Story B receives in. Same tool, both sides.
That loop is the positioning — it doubles the market off one mechanic.

| | Story A (tradie) | Story B (supplier desk) |
|---|---|---|
| Input | loose job description | precise parts list |
| SMASH does | estimates labour + materials, **prices** it | **SKU-matches** to catalogue |
| Result | priced quote ($) | SKU-matched quote ($) |
| Files | `story_A_tradie/` | `story_B_supplier/` |

---

## 2. The six frames

Each = **eyebrow + Barlow headline** (the message) · **abstracted Gmail+sidebar product
shot** · **action callout** bottom-left. Canvas **1600×1000**.

**Story A**
- `A1_request_lands` — "The job lands in your inbox" — callout ① THE REQUEST
- `A2_reads_prices` — "It reads it. It prices it. No typing." — callout ② SCAN EMAIL
- `A3_quote_done` — "Quote back in under a minute" — callout ③ REPLY

**Story B**
- `B1_request_arrives` — "A tradie wants a price" — callout ① LANDS IN INBOX
- `B2_sku_match` — "It matches every line. No typing." — callout ② SKU MATCH
- `B3_quote_back` — "Sent back. Into Xero. Paid." — callout ③ SEND & SYNC

---

## 3. THE CALLOUT COMPONENT (read this — it's the part to get right)

The callout is the **connector device** that turns six standalone shots into two
readable sequences. It's lifted from the iOS App Store frame language so it stays
cohesive across surfaces.

### What it is
A floating **dark card** (`#0A1119`) sitting at the **bottom-left** of the frame, with a
**subtle lime glow behind it**. It pulls the *action verb* of that step forward.

### Anatomy
```
┌──────────────────────────────────────────────┐
│  (●num)   ACTION VERB              ( → )       │   ← dark card #0A1119
│           sub-line explaining it               │
└──────────────────────────────────────────────┘
        ▲ lime glow bleeds behind/under the card
```
- **Numbered badge** — lime `#DFFF00` circle, Barlow Black Italic number. Implies sequence.
- **Verb** — Barlow Condensed Black Italic, uppercase, white. The action: SCAN EMAIL,
  SKU MATCH, REPLY, SEND & SYNC.
- **Sub-line** — Plus Jakarta Sans, `#8A94A6`. One plain sentence.
- **Connector arrow** — lime `#DFFF00` arrow on steps 1 & 2 (implies "flows to next
  frame"); **omitted on step 3** (end of story).
- **Glow** — a soft lime radial (`rgba(200,255,0,0.10)`, blurred) behind the card to lift
  it off the navy. Subtle, not loud.

### Current position (and how to change it)
Right now the callout is **absolutely positioned**, bottom-left:
```css
.callout       { position:absolute; left:84px; bottom:96px; z-index:30; }
.callout-glow  { position:absolute; left:60px; bottom:40px; z-index:25; /* blurred lime radial */ }
```
**This is the thing to adjust.** The callout currently sits *below* the product window in
the open navy space. Depending on the final page layout you may want it to:
- **overlap up into the product window** (iOS-style "breaking the plane" — more depth), or
- **sit inline under each frame** as a caption strip, or
- **anchor to the headline column** on the left.

It's a self-contained block — move it by changing `left`/`bottom` (or swap to a flex/grid
position in the page). Keep the glow following it (`.callout-glow` should track the card).
If you overlap it onto the window, raise its `z-index` above `.win` (which is `z-index:2`).

### Intent (so you can make good calls)
The callout exists to **say the action in one word** and **imply the sequence**. The number
+ arrow are the sequence cue. If the final page lays these out as a horizontal scroll or a
stacked story, the arrow direction and the "no arrow on step 3" rule should follow the
reading direction. The verb is the hero of the callout — keep it short and punchy.

---

## 4. The product shot (abstraction principle)

The Gmail + SMASH sidebar inside each window is **deliberately abstracted** — it *resembles*
the real product (recognisable Gmail chrome, the SMASH sidebar, real-looking line items)
but is **stripped to the essentials**: a few clean lines, one clear state, no dense field
clutter. This is intentional. It communicates *how it works* without overwhelming. Do not
"complete" it into the full real UI — the simplicity is the point.

Notable details:
- **Highlighted email phrases** (`.hl`, soft yellow) map to the line items the sidebar
  produced — this makes "it read THIS → matched THAT" visible. Keep that mapping if you
  edit copy.
- Sidebar has **three states** across the steps: idle prompt (step 1) → working/parsing
  (step 2) → finished quote (step 3). Same pattern in both stories.
- Story A shows **dollar amounts + labour breakdown**. Story B shows **SKU codes** (FFP-…)
  + quantities + prices. Don't mix them — that distinction is the two-ICP story.

---

## 5. Design tokens (locked — matches iOS app, Chrome assets, website)

```
--navy     #0F172A   frame base, headlines, primary actions, totals
--accent   #DFFF00   lime — ONE accent moment: callout badge, arrow, active states
--green    #1FB873   matched / ticks / status pills
--panel    #EEF2F7   sidebar surface
--surface  #F4F6F9   soft cards
--line     #E2E8F0   hairlines
--muted    #64748B   secondary text
--dark     #0A1119   the callout card
```
- **Type:** Barlow Condensed Black Italic (uppercase) for eyebrow / headline / callout
  verb / labels / totals. Plus Jakarta Sans for body, email text, sub-lines, amounts.
- **Glow:** soft lime radial behind the product and behind the callout — subtle, blurred,
  never loud. One lime accent per zone.
- Fonts and the SMASH logo are embedded as base64 in every file — no external assets.

---

## 6. How to work with these

- **Edit copy:** headline = `.headline` (use `<span class="lime">` for the accent word);
  email body = `.msg-text`; quote lines = `.qli` / `.fline` rows; callout = `.callout`
  (verb in `.verb`, sub in `.sub`, number in `.num`).
- **Reposition the callout:** change `.callout` + `.callout-glow` coordinates (Section 3).
- **Restyle freely:** these are reference compositions showing the *intended feel*. If your
  page layout wants the callout inline, or the window full-bleed, adapt — hold the
  principles (abstraction, one lime moment, callout = action verb + sequence cue), improve
  the pixels.
- **Don't de-abstract the product** (Section 4) and **don't mix $ quotes with SKU quotes**
  across the two stories.

---

## 7. Open items (not built yet — flagged for later)

- **The loop frame** — a single frame showing the request *leaving* the tradie's Gmail and
  *arriving* in the supplier's Gmail (two mini-windows + a connecting flow), to land the
  "both run SMASH" point in one image. Strongest centrepiece if you want it.
- Steps 1 & 2 carry slightly more navy space below the window than step 3 (shorter
  content). Intentional and consistent, but trivially tightened if you want all six to
  match exactly.
