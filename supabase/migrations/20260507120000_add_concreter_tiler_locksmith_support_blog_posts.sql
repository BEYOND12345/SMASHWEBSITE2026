/*
  # Add concreter, tiler and locksmith support blog posts

  Adds six ICP support articles to the blog_posts source of truth:
  - concreter-invoice-template-australia
  - how-to-invoice-concrete-progress-claims
  - tiler-invoice-template-australia
  - how-to-invoice-tiling-labour-and-materials
  - locksmith-invoice-template-australia
  - how-to-invoice-emergency-locksmith-call-outs

  These support /for-concreters, /for-tilers and /for-locksmiths with practical
  AEO content: direct answer, practical steps, FAQs, internal links to ICP pages,
  free tools, voice invoicing, Chrome extension, materials pricing and pricing pages.
*/

INSERT INTO blog_posts (
  slug,
  title,
  content,
  excerpt,
  featured_image,
  featured_image_alt,
  meta_title,
  meta_description,
  primary_keyword,
  secondary_keywords,
  key_takeaways,
  faq_data,
  author,
  author_bio,
  reading_time,
  published,
  published_at,
  updated_at,
  last_reviewed
) VALUES
(
  'concreter-invoice-template-australia',
  'Concreter Invoice Template Australia: Labour, Concrete Supply, Excavation and GST',
  $content$# Concreter Invoice Template Australia: Labour, Concrete Supply, Excavation and GST

A concreting invoice in Australia should include your business name, ABN, invoice number, date, customer details, job address, itemised line items for excavation, formwork, concrete supply (by cubic metre), labour, finishing, and GST if you are registered. The best concreter invoice template separates each component so builders, developers, and homeowners understand the charge and concrete volumes are clearly documented.

This guide gives concreters a practical invoice structure, then shows how [SMASH for concreters](/for-concreters) generates the full invoice from a voice description in under 60 seconds.

## The basic concreter invoice format

Use this structure for residential, commercial, and sub-contract concreting jobs:

1. Your business name, ABN, licence number if applicable, email and phone.
2. Customer name, billing address, and job address.
3. Invoice number, invoice date, and payment due date.
4. Job title, such as "exposed aggregate driveway — 44 Pine Street" or "garage slab — 8 Macquarie Drive".
5. Excavation and base preparation line items with hours or days.
6. Formwork supply and labour if applicable.
7. Concrete supply line item: MPa rating, cubic metres, and per-m³ rate.
8. Pump hire if used.
9. Labour line items with crew size, days, and rate.
10. Finishing line items: broom, exposed aggregate, polish, sealer.
11. GST shown separately if you are registered.
12. Payment terms and payment link.

The goal is a document that a builder or developer can approve immediately without calling back to clarify what was supplied.

## Example concreting invoice line items

For a residential driveway:

> Excavation and base prep — 150mm depth, 42m², 4 hours.

> Concrete supply — 32MPa, 4.5m³ @ $220/m³.

> Labour — pour, level, broom finish. 6 hours, 2 crew.

> Concrete pump — half day hire.

For a garage slab:

> Excavation — 100mm slab depth, 36m², 3 hours.

> SL72 mesh supply — 40m².

> Concrete supply — 25MPa, 3.6m³ @ $200/m³.

> Labour — pour, float finish, 1 day, 2 crew.

## What to include when invoicing for a builder or developer

Sub-contract concreting invoices for builders need:

- Your ABN and GST registration status
- A sequential invoice number
- The builder's name and ABN on the invoice
- Job address and lot number if applicable
- Itemised labour and materials (do not bundle into one lump sum)
- Your licence or contractor registration number in your state
- Payment terms — NET 14 or NET 30 are standard in the construction industry

Lump-sum invoices get queried. Itemised invoices get paid faster.

## How to invoice concrete progress claims

For large jobs, progress claims split the invoice into milestones:

- **Deposit**: 10–25% of contract sum on signing or mobilisation.
- **Progress claim 1**: After excavation and base prep.
- **Progress claim 2**: After pour completion.
- **Final claim**: After finishing, sealing, and handover.

Each claim needs its own invoice number, the total contract sum, the amount claimed to date, and the outstanding balance. SMASH can generate each progress claim from a voice description, keeping the format consistent across all milestones.

## How voice invoicing works for concreters

Concreting invoices have three to eight line items. Typing them on a phone after a full day on the tools is the main reason invoices go out late or get batched for the weekend.

With [SMASH](/for-concreters), you describe the job out loud from the job site:

> "Exposed aggregate driveway at the Burnside property. 42 square metres, 100mm deep, mesh reinforced. Supplied 4.5 cubic metres of 32MPa concrete plus the aggregate finish. Three days labour, two crew."

SMASH builds the invoice, calculates GST, and sends it from your phone in under 60 seconds. [Try the free invoice generator](/invoice-generator) or use the [Chrome extension for Gmail](/chrome-extension) to turn quote requests into invoices without leaving your inbox.

## Frequently asked questions

**What should a concreting invoice include?**
ABN, invoice number, date, job address, excavation, base prep, concrete supply (MPa and m³), pump hire, labour (crew size and rate), finishing, GST, and payment terms.

**How do I invoice concrete by the cubic metre?**
Set your concrete rate per m³ in your pricing catalog. State the volume, the MPa rating, and whether supply or pour-only. SMASH multiplies and adds GST automatically.

**Can I invoice progress claims for large concreting jobs?**
Yes. Each progress claim is a separate invoice with the claim number, total contract value, amount claimed to date, and outstanding balance.

**What payment terms do builders expect on concreting invoices?**
NET 14 is common for residential jobs. Builders and developers typically operate on NET 30. Set this per client in SMASH and it appears on every invoice automatically.

**How do I invoice as a sub-contractor for a builder?**
Use your ABN, list the builder as the client with their company name and ABN, itemise all labour and materials, include GST, and state your payment terms. The invoice format is the same — the client details change.
$content$,
  'A practical guide to concreting invoice templates in Australia: what to include on invoices for slabs, driveways, and sub-contract work, plus progress claims and GST.',
  '/images/blog/concreter-invoice-template.jpg',
  'Concreter filling out invoice on phone at job site after pouring concrete slab',
  'Concreter Invoice Template Australia: Labour, Concrete Supply and GST',
  'What to include on a concreting invoice in Australia: ABN, cubic metres, excavation, progress claims, materials, GST and payment terms. Practical format for slabs, driveways and sub-contract work.',
  'concreter invoice template Australia',
  ARRAY['concrete invoice', 'concreting invoice template', 'progress claim invoice', 'invoice for concreters Australia', 'concrete supply invoice', 'sub-contract concrete invoice', 'GST invoice concreter'],
  ARRAY['A concreting invoice must show ABN, cubic metres, MPa rating, excavation, labour, finishing, and GST.', 'Progress claims should be separate invoices with claim number, contract total, amount to date, and balance.', 'Sub-contract invoices for builders need the builder''s ABN, a sequential invoice number, and NET 30 terms.', 'Voice invoicing with SMASH generates the full concreting invoice from a description in under 60 seconds.'],
  '[{"question":"What should a concreting invoice include?","answer":"ABN, invoice number, date, job address, excavation, concrete supply (MPa and cubic metres), pump hire, labour, finishing, GST, and payment terms."},{"question":"How do I invoice concrete by the cubic metre?","answer":"Set your concrete rate per m³. State the volume, MPa rating, and whether supply or pour-only. SMASH calculates and adds GST automatically."},{"question":"Can I invoice progress claims for large concreting jobs?","answer":"Yes. Each progress claim is a separate invoice with claim number, total contract value, amount claimed to date, and outstanding balance."},{"question":"What payment terms do builders expect?","answer":"NET 14 for residential, NET 30 for builders and developers. Set per client in SMASH and it appears on every invoice automatically."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  5,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'how-to-invoice-concrete-progress-claims',
  'How to Invoice Progress Claims for Concrete Jobs: Deposits, Milestones and Final Claims',
  $content$# How to Invoice Progress Claims for Concrete Jobs: Deposits, Milestones and Final Claims

A concrete progress claim is an invoice for a portion of a large job, issued at an agreed milestone — after excavation, after the pour, or at project completion. Progress claims for concreting work should show the total contract sum, the amount claimed in this invoice, the total claimed to date, and the balance remaining. Each claim needs its own invoice number and payment terms.

This guide explains how to structure progress claims for concreters, then shows how [SMASH for concreters](/for-concreters) generates each claim from a voice description in under 60 seconds.

## When do concreters use progress claims?

Progress claims are used when:

- The total contract value is high (typically above $5,000)
- The job spans multiple days or weeks
- A builder or developer requires milestone billing
- You need a deposit before mobilisation to cover concrete supply costs

A standard residential driveway might invoice in full at completion. A warehouse slab or development site typically uses three to five progress claims.

## The standard concrete progress claim structure

Each progress claim invoice should include:

1. Your business name, ABN, and invoice number (sequential from your last invoice)
2. The words "Progress Claim" in the invoice title
3. The client's name, company, and ABN
4. Job address and project description
5. Contract sum: the total agreed price for the full project
6. Previous claims: total amount invoiced before this claim
7. This claim: the amount being invoiced now
8. Balance remaining: contract sum minus total claimed to date
9. GST breakdown if applicable
10. Payment terms and payment link

> Example claim heading: Progress Claim #2 — Hillcrest Warehouse Slab, 18 Harris Road

## Example progress claim schedule for a large concreting job

**Contract: 400m² warehouse slab, total contract $42,000 + GST**

| Claim | Milestone | Amount |
|-------|-----------|--------|
| Deposit | On signing | $8,400 |
| Claim 1 | Excavation and base prep complete | $12,600 |
| Claim 2 | Mesh, formwork, and pour complete | $12,600 |
| Final | Finishing, sealing, and handover | $8,400 |

Each of these is a separate invoice. The client can see exactly what stage they are paying for and what is still outstanding.

## How to show GST on progress claims

If you are GST-registered:

- Show GST as a separate line on each claim, calculated on the claim amount (not the full contract sum)
- Include your ABN and the words "Tax Invoice" on every claim
- Keep the GST consistent across all claims so it adds up to 10% of the total contract value

If the client is claiming back GST as a business, they need a proper tax invoice for each progress claim. A message or email with a dollar amount does not qualify.

## Common mistakes on concrete progress claims

**Lump sum invoices without breakdown**: Builders and developers will query these. Break the claim into excavation, supply, labour, and finishing line items.

**Missing previous claim total**: Without "total claimed to date", the client cannot reconcile the claims against the contract. Always include it.

**Wrong invoice numbers**: Progress claims should use sequential invoice numbers from your main invoice series — not numbered separately as Claim 1, Claim 2. Use INV-0042, INV-0043, etc.

**No payment link**: High-value claims sent without a way to pay online slow down payment. SMASH includes a payment link on every invoice automatically.

## Using voice invoicing for progress claims

Describe each progress claim out loud from the job site or van:

> "Progress claim for the Hillcrest development. Claim number two. Fifty percent of the agreed contract sum. Work completed to date: excavation and formwork. Previous claim was the deposit."

SMASH builds the invoice, formats the progress claim structure, calculates GST, and sends it from your phone in under 60 seconds. Use the [free invoice generator](/invoice-generator) or install the [Chrome extension for Gmail](/chrome-extension) to handle client approval emails without switching apps.

## Frequently asked questions

**What is a progress claim in concreting?**
A progress claim is an invoice for a portion of a large job, issued at an agreed milestone. It shows the contract total, the previous amount invoiced, the current claim, and the balance remaining.

**Do progress claims need to include GST?**
Yes, if you are GST-registered. Show GST on each individual claim based on the claim amount. Both parties need a tax invoice for each claim.

**How many progress claims are normal for a concreting job?**
For residential work above $5,000, a deposit plus final invoice is typical. For large commercial or development jobs, three to five milestone claims are standard.

**Can I use SMASH to generate progress claims?**
Yes. Describe the milestone and percentage in your voice input and SMASH formats the progress claim with the correct invoice structure, contract total, and claim amount.

**What happens if a progress claim is not paid?**
Your contract should include a provision to pause work until payment is received. Send a payment reminder via the SMASH invoice link. For disputed claims, the payment portal records when the invoice was sent and when payment was made.
$content$,
  'How to structure deposit, progress, and final invoices for large concreting jobs without payment disputes.',
  '/images/blog/concrete-progress-claim-invoice.jpg',
  'Concreter reviewing progress claim invoice on phone at construction site',
  'How to Invoice Progress Claims for Concrete Jobs in Australia',
  'How to structure deposit, progress, and final invoices for large concreting jobs in Australia. Progress claim format, GST, and milestone billing for concreters.',
  'concrete progress claim invoice',
  ARRAY['progress claim concreting', 'concrete invoice progress claim', 'deposit invoice concreter', 'milestone billing concrete', 'progress claim GST Australia', 'concreting invoice milestones'],
  ARRAY['Each progress claim needs the contract total, previous claims, current claim amount, and balance remaining.', 'Use sequential invoice numbers from your main invoice series — not separate "Claim 1, Claim 2" numbering.', 'GST is calculated on each individual claim amount, not the full contract sum.', 'Voice invoicing with SMASH generates each progress claim from a description in under 60 seconds.'],
  '[{"question":"What is a progress claim in concreting?","answer":"An invoice for a portion of a large job, issued at an agreed milestone. It shows the contract total, previous amount invoiced, current claim, and balance remaining."},{"question":"Do progress claims need GST?","answer":"Yes, if you are GST-registered. Show GST on each individual claim based on the claim amount."},{"question":"How many progress claims are normal?","answer":"A deposit plus final is typical for residential work above $5,000. Three to five milestone claims are standard for large commercial jobs."},{"question":"Can I use SMASH to generate progress claims?","answer":"Yes. Describe the milestone and percentage in your voice input and SMASH formats the progress claim with contract total, claim amount, and GST."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  6,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'tiler-invoice-template-australia',
  'Tiler Invoice Template Australia: Labour by m², Tiles, Adhesive, Grout and GST',
  $content$# Tiler Invoice Template Australia: Labour by m², Tiles, Adhesive, Grout and GST

A tiling invoice in Australia should include your business name, ABN, invoice number, date, customer details, job address, labour line items priced by the square metre, tile supply if applicable, adhesive, grout, waterproofing for wet areas, and GST if you are registered. The best tiler invoice template separates floor, wall, and outdoor rates so customers understand exactly what they are paying for and material costs are not absorbed into a vague labour line.

This guide gives tilers a practical invoice structure, then shows how [SMASH for tilers](/for-tilers) generates the full invoice from a voice description in under 60 seconds.

## The basic tiler invoice format

Use this structure for bathroom, kitchen, outdoor, and commercial tiling jobs:

1. Your business name, ABN, and any relevant trade registration.
2. Customer name, billing address, and job address.
3. Invoice number, invoice date, and payment due date.
4. Job title: "bathroom retile — 12 Cooper Street" or "outdoor paver install — Manly property".
5. Labour line items with surface type (floor/wall/outdoor), square metres, and your rate.
6. Tile supply if you are supplying: brand, size, quantity, and price.
7. Adhesive: type, quantity, and price.
8. Grout: colour, quantity, and price.
9. Waterproofing for wet areas: product, area covered, and price.
10. Tile trim, spacers, or other accessories if applicable.
11. GST shown separately if you are registered.
12. Payment terms and payment link.

## Example tiling invoice line items

For a bathroom tile installation:

> Labour — wall tiles, 18m² @ $48/m².

> Labour — floor tiles, 6m² @ $38/m².

> Waterproofing — wet area membrane, 24m². Ardex WPM 155.

> Adhesive — Kerabond plus Keraquick, 2 bags.

> Grout — Mapei Ultracolor Plus, 2kg, Pewter.

For a kitchen splashback:

> Labour + supply — subway tile, 4m² @ $55/m² (supply and install).

> Adhesive — 1 bag.

> Grout — 500g.

For an outdoor patio:

> Labour — outdoor paver install, 45m² @ $42/m².

> Adhesive — outdoor flexible adhesive, 3 bags.

> Grout — exterior grout, 5kg.

## Floor vs wall vs outdoor rates

Tilers typically charge different rates based on surface type and complexity:

- **Floor tiles**: Generally lower rate per m². Easier to work with, typically larger format.
- **Wall tiles**: Higher rate per m². More complex, requires different technique, higher fall risk.
- **Outdoor pavers**: Can vary — often similar to floor rate but with outdoor adhesive premium.
- **Pool area**: Highest rate due to waterproofing requirements and smaller mosaic tile work.
- **Supply and install**: 15–25% premium over labour-only for the same surface.

Setting these rates clearly in your invoice prevents disputes when clients see the rate difference between floor and wall work.

## Supply and install vs labour only

When the client supplies the tiles:

- Use a labour-only rate (lower than supply and install)
- Note "tiles supplied by client" on the invoice
- You are still responsible for adhesive, grout, and waterproofing unless agreed otherwise

When you supply the tiles:

- List the tile brand, size, quantity, and price separately from the labour
- This protects you if tiles are returned or if there is a tile defect claim later

## Using voice invoicing for tilers

Tiling invoices have four to eight line items depending on the job. Typing them on a phone at the end of a day — with adhesive still on your hands — is the main reason invoices go out late.

With [SMASH](/for-tilers), describe the job from the site:

> "Bathroom tile install at the Paddington reno. 18 square metres of wall tiles, 6 square metres of floor tiles, waterproofing wet area. Wall rate plus floor rate, tiles client supplied."

SMASH builds the invoice, separates the line items, calculates GST, and sends it from your phone in under 60 seconds. Use the [free invoice generator](/invoice-generator) or the [Chrome extension for Gmail](/chrome-extension) to handle client emails without switching apps.

## Frequently asked questions

**What should a tiling invoice include?**
ABN, invoice number, date, job address, labour by m² per surface type, tile supply if applicable, adhesive, grout, waterproofing, GST, and payment terms.

**How do I invoice different rates for floor and wall tiling?**
List them as separate line items — "Labour — wall tiles, 18m² @ $48/m²" and "Labour — floor tiles, 6m² @ $38/m²". SMASH applies the right rate based on the surface type you mention.

**Can I include adhesive and grout as separate line items?**
Yes. Listing adhesive and grout separately protects your margin and makes the invoice clearer for clients who want to understand what they are paying for.

**Do I need to be GST-registered to invoice for tiling work?**
You must register for GST if your turnover exceeds $75,000 per year. Below that threshold, your invoices do not include GST but should still include your ABN.

**How do I invoice when the client supplies the tiles?**
Use your labour-only rate and note "tiles supplied by client" on the invoice. Include adhesive, grout, and waterproofing as your supply items.
$content$,
  'What tilers should include on invoices: ABN, per-m² rates for floor and wall, adhesive, grout, waterproofing, supply and install, GST and payment terms.',
  '/images/blog/tiler-invoice-template.jpg',
  'Tiler reviewing invoice on phone after completing bathroom tile installation',
  'Tiler Invoice Template Australia: Labour by m², Tiles, Adhesive and GST',
  'What to include on a tiling invoice in Australia: ABN, per-m² rates, floor vs wall rates, adhesive, grout, waterproofing, GST and payment terms for bathroom, kitchen and outdoor jobs.',
  'tiler invoice template Australia',
  ARRAY['tiling invoice template', 'tile laying invoice', 'floor tiling invoice', 'wall tiling invoice', 'invoice for tilers Australia', 'waterproofing invoice tiler', 'adhesive grout invoice'],
  ARRAY['A tiling invoice must show ABN, per-m² rates for each surface type, tile supply, adhesive, grout, waterproofing, and GST.', 'Floor, wall, and outdoor rates are typically different — list them as separate line items.', 'When clients supply tiles, use a labour-only rate and note it on the invoice.', 'Voice invoicing with SMASH generates the full tiling invoice from a description in under 60 seconds.'],
  '[{"question":"What should a tiling invoice include?","answer":"ABN, invoice number, date, job address, labour by m² per surface type, tile supply, adhesive, grout, waterproofing, GST, and payment terms."},{"question":"How do I invoice different rates for floor and wall tiling?","answer":"List them as separate line items with the m² and rate for each surface type. SMASH applies the right rate based on the surface type you mention."},{"question":"Can I include adhesive and grout as separate line items?","answer":"Yes. Separate line items for materials protect your margin and make the invoice clearer for clients."},{"question":"How do I invoice when the client supplies the tiles?","answer":"Use your labour-only rate and note tiles supplied by client on the invoice. Include adhesive and grout as your supply."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  5,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'how-to-invoice-tiling-labour-and-materials',
  'How to Invoice Tiling Labour and Materials: Floor, Wall, Supply and Install',
  $content$# How to Invoice Tiling Labour and Materials: Floor, Wall, Supply and Install

Tiling invoices that bundle labour and materials into a single line get queried. Clients cannot see what they paid for tile supply vs labour, and builders cannot reconcile the invoice against their own records. The correct approach is to list each component as a separate line item — labour by the m², tiles by the m² or piece, adhesive by the bag, grout by the kilo, waterproofing by the m².

This guide shows how to structure tiling invoices for floor, wall, supply-and-install, and labour-only jobs.

## Labour line items for tiling invoices

Price labour by the square metre for each surface type separately:

> Labour — floor tiles, ceramic 300×300, 22m² @ $38/m² = $836.00

> Labour — wall tiles, subway 100×300, 15m² @ $48/m² = $720.00

> Labour — splashback, feature tile, 3m² @ $65/m² = $195.00

This format shows the client exactly what rate applies to each area and prevents disputes when the invoice total seems higher than expected.

## How to invoice tile supply

When you supply the tiles, list them separately from labour:

> Tile supply — Pazzu Ivory 600×600 floor tile, 24m² + 10% waste = 26.4m² @ $48/m² = $1,267.20

> Tile supply — Subway White 100×200 wall tile, 16m² + 10% waste = 17.6m² @ $32/m² = $563.20

Including the waste factor in the quantity protects you if clients later question why you ordered more than the net area.

## How to invoice adhesive, grout, and waterproofing

Do not absorb these into a materials line. List them separately:

> Adhesive — Ardex X77, 3 bags @ $42 per bag = $126.00

> Grout — Mapei Ultracolor Plus, 2kg, Fog, 2 tubs @ $28 = $56.00

> Waterproofing — Ardex WPM 155, 12m² wet area = $185.00

This level of detail protects your margin and makes it easy to see where material costs were higher than expected — useful information for quoting similar jobs in future.

## Supply and install pricing

When you supply and install tiles, combine the rate into a single line:

> Supply and install — Travertine 600×600 floor tile, 18m² @ $85/m² (supply + install) = $1,530.00

> Supply and install — Subway 100×300 wall tile, 12m² @ $75/m² (supply + install) = $900.00

This simplifies the invoice for clients who are not interested in the materials breakdown, while still showing the scope clearly.

## Labour-only invoicing when the client supplies tiles

When the client has purchased their own tiles:

> Labour only — floor tile installation, 20m² @ $38/m² = $760.00

> Labour only — wall tile installation, 15m² @ $50/m² = $750.00

> Adhesive supplied by contractor — 3 bags @ $42 = $126.00

Note "tiles supplied by client" in the job description line. This protects you from liability if there is a tile defect or quantity shortfall — that is the client's responsibility.

## How to invoice for tile removal

When stripping old tiles before the new installation:

> Strip and dispose — floor tiles, 20m² @ $18/m² = $360.00

> Tip disposal fee — tile waste, estimated 150kg = $85.00

Always add strip-and-dispose as a separate line. Clients often forget they approved it when they see a high invoice total, and having it itemised prevents disputes.

## Avoiding margin leakage on tiling invoices

Common ways tilers lose margin on invoices:

- **Adhesive absorbed into labour**: 3 bags of adhesive is $120+ at trade. It should always appear as a line item.
- **Under-quoting waterproofing**: Waterproofing is a full wet-area job, not a small add-on. Price it as a percentage of the wall area, not as a flat add-on.
- **Not charging for tile trim**: Schluter strip, edge trim, and scotia adds up. Add it to your catalog.
- **Labour rate applies to the wrong surface**: Using your floor rate for wall work cuts your effective hourly rate significantly.

[SMASH for tilers](/for-tilers) stores your rates by surface type and your materials catalog. A voice description applies the right rate and materials pricing automatically — no mental switching between rate cards in the middle of a long day.

## Frequently asked questions

**Should I charge different rates for floor and wall tiling?**
Yes. Wall tiling is more complex and physically demanding than floor work. A typical difference is $8–15/m² higher for walls. Always invoice them as separate line items.

**How do I invoice for a bathroom renovation with multiple surface types?**
Create a separate line item for each surface: shower wall, shower floor, bathroom floor, bath surround. Each has its own m² area and rate. Then add materials underneath as separate lines.

**Can I include a margin on tiles I supply?**
Yes. Most tilers add 10–20% to trade tile prices. Do not disclose your cost price — show the sell price on the invoice and describe the tile clearly.

**What if the job requires more tiles than quoted?**
Invoice for the actual tiles used. If you identified the risk of extra tiles in the quote, reference that in the invoice description. If it was unforeseen, explain the reason in the notes field.

**How do I handle tile defects when I supplied the tiles?**
If defective tiles cause re-work, you need to invoice the client for additional labour at your standard rate. The tile supplier is responsible for the tile cost, not the labour to re-lay them.
$content$,
  'How to structure floor, wall, outdoor and supply-and-install tiling invoices with adhesive, grout, waterproofing and strip-and-dispose line items without losing margin.',
  '/images/blog/tiling-labour-materials-invoice.jpg',
  'Tiler invoicing tiling job on phone with floor and wall line items visible',
  'How to Invoice Tiling Labour and Materials: Floor, Wall and Supply and Install',
  'How to structure tiling invoices with floor, wall, supply-and-install and labour-only line items. Adhesive, grout, waterproofing, strip-and-dispose and GST for Australian tilers.',
  'tiling labour and materials invoice',
  ARRAY['tiling invoice materials', 'floor tiling labour invoice', 'wall tiling invoice', 'tile supply invoice', 'waterproofing invoice tiler', 'tiling job invoice Australia'],
  ARRAY['List labour by m² for each surface type separately — floor, wall, outdoor, and splashback rates are different.', 'Adhesive, grout, and waterproofing should always be separate line items, not absorbed into labour.', 'Include a waste factor in tile quantities when you supply the tiles.', 'Note tiles supplied by client when invoicing labour-only work to protect yourself from tile defect liability.'],
  '[{"question":"Should I charge different rates for floor and wall tiling?","answer":"Yes. Wall tiling is more complex. A typical difference is $8-15/m² higher for walls. Invoice them as separate line items."},{"question":"Can I include a margin on tiles I supply?","answer":"Yes. Most tilers add 10-20% to trade tile prices. Show the sell price on the invoice and describe the tile clearly."},{"question":"What if the job requires more tiles than quoted?","answer":"Invoice for the actual tiles used. If it was unforeseen, explain the reason in the notes field and reference the scope of the original quote."},{"question":"How do I handle tile defects when I supplied the tiles?","answer":"Invoice the client for additional labour at your standard rate. The tile supplier is responsible for the tile cost."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  6,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'locksmith-invoice-template-australia',
  'Locksmith Invoice Template Australia: Call-out Fee, Labour, Lock Supply and GST',
  $content$# Locksmith Invoice Template Australia: Call-out Fee, Labour, Lock Supply and GST

A locksmith invoice in Australia should include your business name, ABN, locksmith licence number, invoice number, date, customer details, job address, call-out fee, labour (by the hour or as a flat fee), any locks or keys supplied, emergency or after-hours rate if applicable, and GST if you are registered. The best locksmith invoice template is generated quickly — because locksmith jobs are fast and clients expect to receive an invoice on the spot.

This guide gives locksmiths a practical invoice structure, then shows how [SMASH for locksmiths](/for-locksmiths) generates the invoice from a voice description in under 60 seconds.

## The basic locksmith invoice format

Use this structure for residential, commercial, automotive, and emergency locksmith jobs:

1. Your business name, ABN, and locksmith licence number.
2. Customer name, billing address, and job address.
3. Invoice number, invoice date, and payment due date.
4. Job type: lockout, lock replacement, rekey, key cutting, safe opening.
5. Call-out fee as the first line item.
6. Labour: hours × rate, or flat rate for the job type.
7. Parts and hardware: lock brand, model, keys cut, quantity, and price.
8. Emergency or after-hours rate if applicable.
9. GST shown separately if you are registered.
10. Payment link — locksmith clients often want to pay on the spot.

## Example locksmith invoice line items

For a residential lockout:

> Call-out fee — standard residential.

> Labour — non-destructive entry, 30 minutes @ $120/hr.

For a lock replacement:

> Call-out fee — standard residential.

> Labour — supply and install Lockwood 001 deadbolt, 45 minutes.

> Hardware — Lockwood 001 Series deadbolt, keyed alike.

> Hardware — 2 keys cut.

For an emergency after-hours call-out:

> Call-out fee — emergency after-hours.

> Labour — 30 minutes, slim jim entry, car lockout.

> Rate applied: after-hours premium rate.

## Call-out fee structure for locksmiths

Most locksmiths charge a call-out fee that covers travel and the first service interval. Common structures are:

- **Standard residential**: Flat call-out fee, typically $80–$130, covers the first 30 minutes.
- **Commercial**: Higher flat call-out fee, or a minimum hour charge.
- **After-hours**: 1.5–2× the standard rate, or a flat after-hours call-out fee.
- **Emergency**: Highest rate, often 2× standard, for immediate response jobs.
- **Car lockout**: Often a separate rate from residential — different skill set, different equipment.

Set each rate as a separate item in your SMASH pricing catalog. Mention the rate type in your voice description and SMASH applies the right one automatically.

## Including locks and keys on the invoice

List hardware separately from labour:

> Lockwood 001 Series deadbolt, keyed alike — 1 unit.

> 2 keys cut to code.

Do not bundle the lock into the labour line. Separate hardware line items:
- Show the client exactly what they paid for
- Make it easier to warranty the hardware separately from the labour
- Prevent the client from assuming the lock is included in the call-out fee

## Property manager and commercial client invoicing

For property managers who call regularly:

- Save them as a client profile in SMASH with their negotiated rate
- Invoice the property address as the job address, the property manager as the billing contact
- Include the property manager's purchase order number if they use one
- Set NET 14 or NET 30 payment terms for account clients

Residential lockout clients typically pay on the spot via the invoice payment link. Commercial clients may operate on account — set this per client in SMASH.

## Using voice invoicing for locksmiths

Locksmith jobs are typically 20–45 minutes. Invoicing should take less than 60 seconds. With [SMASH](/for-locksmiths), describe the job from the van:

> "Lock replacement at the commercial office in CBD. Supplied and installed new Lockwood deadbolt, two keys cut. Standard commercial rate."

SMASH builds the invoice, adds your call-out fee, prices the hardware, calculates GST, and sends it from your phone in under 60 seconds. The client receives a payment link and can pay by card immediately.

Use the [free invoice generator](/invoice-generator) to create one-off invoices, or the [Chrome extension for Gmail](/chrome-extension) to turn property manager emails into invoices without leaving your inbox.

## Frequently asked questions

**What should a locksmith invoice include?**
ABN, locksmith licence number, invoice number, date, job address, call-out fee, labour, hardware (lock brand and model, keys cut), rate type (standard/after-hours/emergency), and GST.

**Can I charge a call-out fee and also charge for labour?**
Yes. The call-out fee covers your travel and first service interval. Labour is charged on top for work beyond the initial period. This is standard practice and clients expect to see both on the invoice.

**How do I invoice emergency after-hours locksmith call-outs?**
Set an after-hours or emergency rate in your SMASH pricing catalog. Mention "after-hours" or "emergency" in your voice description — SMASH applies the premium rate automatically.

**Should I charge different rates for car lockouts vs residential?**
Yes. Car lockouts typically use different equipment and skills. A separate rate prevents underbilling automotive jobs and makes the invoice clearer.

**Can clients pay by card without a terminal?**
Yes. SMASH invoices include a payment link. Clients tap the link and pay by card on their phone — no EFTPOS terminal needed, no cash handling.
$content$,
  'What locksmiths should include on invoices: ABN, locksmith licence, call-out fee, labour, lock supply, key cutting, emergency rates, GST and payment terms.',
  '/images/blog/locksmith-invoice-template.jpg',
  'Locksmith generating invoice on phone after completing lock replacement job',
  'Locksmith Invoice Template Australia: Call-out Fee, Labour and GST',
  'What to include on a locksmith invoice in Australia: ABN, licence number, call-out fee, labour, lock supply, key cutting, after-hours rates, GST and payment terms.',
  'locksmith invoice template Australia',
  ARRAY['locksmith invoice template', 'locksmith call-out fee invoice', 'emergency locksmith invoice', 'lock replacement invoice', 'invoice for locksmiths Australia', 'after-hours locksmith invoice'],
  ARRAY['A locksmith invoice must show ABN, licence number, call-out fee, labour, hardware (lock brand and keys cut), rate type, and GST.', 'Call-out fee and labour are separate line items — the call-out covers travel and the first service interval.', 'List hardware separately from labour to protect warranty claims and prevent client confusion.', 'Voice invoicing with SMASH generates the invoice in under 60 seconds with a payment link for on-the-spot card payment.'],
  '[{"question":"What should a locksmith invoice include?","answer":"ABN, locksmith licence number, invoice number, date, job address, call-out fee, labour, hardware, rate type, and GST."},{"question":"Can I charge a call-out fee and also charge for labour?","answer":"Yes. The call-out fee covers travel and first service interval. Labour is charged on top for work beyond that. Clients expect to see both."},{"question":"How do I invoice emergency after-hours call-outs?","answer":"Set an after-hours or emergency rate in SMASH. Mention the rate type in your voice description and SMASH applies the premium rate automatically."},{"question":"Can clients pay by card without a terminal?","answer":"Yes. SMASH invoices include a payment link. Clients tap and pay by card on their phone — no EFTPOS terminal needed."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  5,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'how-to-invoice-emergency-locksmith-call-outs',
  'How to Invoice Emergency Locksmith Call-outs: After-hours Rates, Same-night Payment',
  $content$# How to Invoice Emergency Locksmith Call-outs: After-hours Rates, Same-night Payment

Emergency locksmith call-outs — residential lockouts at midnight, car lockouts at 2am, broken locks after a break-in — are some of the most common and profitable jobs in the locksmith trade. They are also the most likely to have payment problems if the invoice is not sent correctly, immediately, and with a way to pay on the spot.

This guide explains how to invoice emergency locksmith jobs so you get paid the same night.

## Why emergency call-outs need a different invoice approach

A standard job might allow NET 7 or NET 14 payment terms. An emergency call-out does not. The client is in a stressful situation — they called you at 2am and you showed up. They want to resolve the situation and move on. If you send an invoice three days later, you have lost the payment momentum.

The most effective approach:
- Invoice immediately after the job, while still at the location
- Include a payment link so the client can pay by card from their phone
- Apply the correct after-hours or emergency rate automatically
- Send from your own phone in under 60 seconds using [SMASH](/for-locksmiths)

## After-hours and emergency rate structure

Most locksmiths operate with three or four rate tiers:

| Rate | Applies | Typical multiplier |
|------|---------|-------------------|
| Standard | Business hours, Mon–Sat | 1× |
| After-hours | 6pm–midnight, Sun | 1.5× |
| Emergency | Midnight–6am | 2× |
| Public holiday | Any time on public holiday | 2× |

Set each of these as a separate catalog item in SMASH. When you describe the job, mention the rate type — "emergency rate" or "after-hours rate" — and SMASH applies it automatically.

## What to include on an emergency locksmith invoice

> Call-out fee — emergency after-hours.

> Labour — car lockout, 30 minutes @ $220/hr (emergency rate).

> Rate note: Emergency after-hours rate applies — job attended 2:15am.

> GST included at 10%.

> Total: $110.00 + $11.00 GST = $121.00.

> Payment link: [click to pay by card]

The rate note is important. Clients who are stressed at 2am may not remember agreeing to the emergency rate. A brief explanation in the invoice prevents disputes later.

## How to get paid the same night

The two reasons locksmiths do not get paid the same night on emergency call-outs:

1. **The invoice goes out the next morning**: By then, the urgency has passed and the client has mentally moved on. Payment priority drops.
2. **There is no easy way to pay**: If the invoice says "EFT to BSB and account number", the client has to do three steps before they can pay. Most will not do it at 2am.

The solution:
- Send the invoice immediately from the job site using SMASH
- Include a one-tap payment link
- The client pays by card before you drive away

SMASH generates the invoice and sends the payment link in under 60 seconds. Many emergency clients pay within minutes of receiving it — while you are still packing up.

## Residential vs commercial emergency rates

For residential emergencies (lockout, broken lock, lost key), the client is an individual. The emergency rate applies, payment is typically immediate.

For commercial emergencies (break-in, lock failure at a warehouse, office lockout), the client may be a business. Consider:
- A commercial emergency rate that is different from residential
- NET 14 payment terms for established commercial clients (with a payment link still active for early payment)
- A purchase order number field if the business client requires it

Property managers who call regularly should have a client profile with their agreed rate. Even if the call-out happens at 3am, invoicing takes 15 seconds with a saved client profile in SMASH.

## Handling after-hours fees upfront

Some locksmiths quote the after-hours rate before attending. This sets expectations and prevents payment disputes when the client sees the invoice total.

A quick voice note approach: "Emergency callout at the Darlinghurst apartment. Quoted the after-hours rate of $220 per hour before attending. Non-destructive entry, 30 minutes."

This creates an invoice that references the pre-agreed rate, making it harder to dispute.

## Frequently asked questions

**Can I charge an emergency rate for middle-of-the-night call-outs?**
Yes. Emergency and after-hours rates are standard in the locksmith industry. Charge what you quoted or what your standard after-hours schedule specifies.

**How do I make sure the client pays the same night?**
Send the invoice immediately from the job site with a payment link. SMASH does this in under 60 seconds. Clients who can pay by card in one tap are far more likely to pay on the spot.

**What if a client disputes the emergency rate?**
If you quoted the rate before attending, reference it in the invoice notes. If you did not quote upfront, add a brief explanation of your rate schedule. SMASH lets you add job notes to every invoice.

**Should I include a call-out fee on top of the emergency rate?**
This depends on your pricing structure. Some locksmiths charge a flat emergency call-out fee that includes the first 30 minutes. Others charge an emergency call-out fee plus an after-hours hourly rate on top. Either is legitimate — just be consistent and clear on the invoice.

**How quickly should I send the invoice after an emergency job?**
Immediately. Invoice from the job site before you start the van. Clients who receive an invoice within minutes of the job being done pay faster than those who receive it hours or days later.
$content$,
  'How to show after-hours rates, emergency fees, and same-night payment links on locksmith invoices without creating client disputes.',
  '/images/blog/emergency-locksmith-invoice.jpg',
  'Locksmith sending invoice on phone at 2am after completing emergency residential lockout',
  'How to Invoice Emergency Locksmith Call-outs in Australia',
  'How to invoice emergency locksmith call-outs with after-hours rates, same-night payment links and rate transparency. Avoid disputes and get paid the same night.',
  'emergency locksmith invoice after-hours',
  ARRAY['emergency locksmith invoice', 'after-hours locksmith rate invoice', 'locksmith call-out fee after hours', 'same night payment locksmith', 'locksmith emergency rate Australia'],
  ARRAY['Send the emergency invoice immediately from the job site — do not wait until morning.', 'Include a one-tap payment link so clients can pay by card before you drive away.', 'Add a rate note to the invoice explaining the emergency rate to prevent disputes.', 'For commercial clients, save a profile with their negotiated rate so even 3am invoicing takes 15 seconds.'],
  '[{"question":"Can I charge an emergency rate for middle-of-the-night call-outs?","answer":"Yes. Emergency and after-hours rates are standard in the locksmith industry and should be included in your rate schedule."},{"question":"How do I make sure the client pays the same night?","answer":"Send the invoice immediately from the job site with a payment link. SMASH does this in under 60 seconds."},{"question":"What if a client disputes the emergency rate?","answer":"Reference the pre-quoted rate in the invoice notes. SMASH lets you add job notes to every invoice."},{"question":"How quickly should I send the invoice?","answer":"Immediately. Invoice from the job site before you start the van. Clients pay faster when the invoice arrives within minutes."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  5,
  true,
  NOW(),
  NOW(),
  NOW()
)
ON CONFLICT (slug) DO NOTHING;
