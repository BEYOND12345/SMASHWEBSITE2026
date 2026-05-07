/*
  # Add painter, HVAC and pest control support blog posts

  Adds six ICP support articles to the blog_posts source of truth:
  - painter-invoice-template-australia
  - how-to-invoice-multi-day-painting-jobs
  - hvac-air-con-invoice-template-australia
  - air-conditioning-emergency-call-out-invoice
  - pest-control-invoice-template-australia
  - how-to-invoice-quarterly-pest-treatments

  These support /for-painters, /for-hvac and /for-pest-control with practical
  SEO/AEO content and internal links to ICP pages, free tools, voice invoicing,
  Chrome extension, materials pricing and pricing pages.
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
  'painter-invoice-template-australia',
  'Painter Invoice Template Australia: Labour, Prep, Materials and GST',
  $content$# Painter Invoice Template Australia: Labour, Prep, Materials and GST

A painting invoice in Australia should include your business name, ABN, invoice date, customer details, job address, labour line items, prep work, paint materials with product names, GST if registered, payment terms and a clear total. The best painter invoice template separates prep, labour and materials so customers understand the charge and paint quantities do not disappear into a vague "painting work" line.

This guide gives painters a practical invoice structure, then shows how to turn that structure into a faster workflow with [SMASH for painters](/for-painters), the free [invoice template](/invoice-template), and the free [invoice generator](/invoice-generator).

## The basic painter invoice format

Use this structure for most residential, commercial and property management painting jobs:

1. Your business name, ABN, email and phone number.
2. Customer name, billing address and job address if different.
3. Invoice number, invoice date and payment due date.
4. Job title, such as "interior repaint — living areas" or "exterior weatherboard repaint".
5. Prep work line items: stripping, sanding, filling, priming.
6. Labour line items with hours or days and your rate.
7. Materials line items with brand, product, colour, quantity and price.
8. GST shown separately if you are registered.
9. Payment link or payment instructions.

The goal is approval clarity. A property manager or homeowner should be able to see exactly what was done, what was supplied, and what needs to be paid without calling you back.

## Example painting invoice line items

For an interior repaint:

> Prep — patch and fill two walls, sand back. 1 hour.

> Labour — interior repaint, living room, dining, hallway and two bedrooms. 3 days.

> Dulux Wash and Wear low sheen — Lexicon Half. 15L × 2 cans.

For an exterior repaint:

> Prep — strip, sand, fill and prime weatherboard exterior. 1.5 days.

> Labour — two topcoats, Haymes Solashield. 2.5 days.

> Haymes Solashield exterior paint — 10L × 3 cans.

For a feature wall:

> Labour — feature wall, master bedroom. 4 hours.

> Dulux Designer range — client colour. 4L × 1 can.

The invoice does not need to list every litre to the millilitre. It should show clearly what brand, product and approximate quantity was used so clients and property managers have a record.

## Why colour and product notes matter

Many clients and property managers ask for the paint colour and product name months or years later, when they need to touch up, repaint a door or match a colour in a new room. If the invoice has the brand, product and colour noted, you become the trusted painter with good records.

Notes like "Dulux Wash and Wear low sheen, Lexicon Half" or "Haymes Solashield, Heritage Red" are short enough to add by voice and valuable enough to keep.

## Prep work as a line item

Prep work is often the most time-consuming part of an exterior job and the most undervalued part of an interior. Showing prep as its own line item or group of items helps clients understand why professional painting costs what it costs.

Use clear labels:

- Strip and sand exterior timber. 1 day.
- Fill and sand plaster walls. 4 hours.
- Prime bare timber and repaired surfaces. 2 hours.
- Mask and protect floors and fittings. 1 hour.

When prep is buried inside a single "labour" line, clients see only the painting day rate and miss the reason for the hours.

## Multi-day jobs and progress invoicing

Interior and exterior repaints often run two to five days. You can invoice at the end of the job or send a progress invoice after the prep stage is complete.

Either way, the invoice should show each day's work clearly. A day rate on the invoice should say what that day covered — prep, priming or topcoat — so there is no confusion about why the job took as long as it did.

For larger jobs, see [how to invoice multi-day painting jobs](/blog/how-to-invoice-multi-day-painting-jobs) for more on progress invoicing and keeping cashflow on track.

## GST notes for painters

If your business is registered for GST, your invoice should be a tax invoice and show GST clearly. If you are not registered, do not add GST.

A GST-ready painting invoice should show:

- Subtotal before GST.
- GST amount.
- Total including GST.
- Your ABN.
- The words "Tax Invoice" where appropriate.

The free [invoice generator](/invoice-generator) helps you create a compliant manual invoice. SMASH goes further by remembering customers, rates, common materials and payment terms.

## Quote before invoice

Many painting jobs start as a quote request from a homeowner, property manager or agent. Use the free [quote generator](/quote-generator) for a manual quote, or use the [Chrome extension](/chrome-extension) to turn a Gmail enquiry into a draft without leaving the inbox.

When the quote is approved, the invoice should not require retyping. Convert the approved quote, add any extra materials or labour days, and send the invoice while the job details are fresh.

## Painter workflow with SMASH

[SMASH for painters](/for-painters) is built for the ladder-and-brush workflow:

- Save day rates, hourly rates and prep rates.
- Save common paint brands, products and quantities with markup.
- Create quotes and invoices by voice.
- Include colour notes on every invoice.
- Convert approved quotes into invoices.
- Send invoices with payment links.
- Sync invoices to Xero or QuickBooks on Starter and higher plans.

For example, say:

> "Interior repaint at the St Kilda apartment. Three days labour. Dulux Wash and Wear low sheen Lexicon Half, 15 litres times two. Materials supplied."

SMASH turns that into clear line items instead of making you type from memory after the next job.

## Related painter resources

Start with these:

- [SMASH for painters](/for-painters)
- [Invoice template](/invoice-template)
- [Invoice generator](/invoice-generator)
- [Quote generator](/quote-generator)
- [Voice invoicing](/voice-invoicing)
- [Chrome extension](/chrome-extension)
- [Materials pricing](/materials-pricing)
- [Pricing](/pricing)

The Free plan includes 5 invoices per month. Starter is $15/month for unlimited invoices plus accounting sync, which suits painters who invoice every week.

## Bottom line

A good painting invoice template is clear, itemised and ready for payment. It separates prep, labour and materials, notes the paint brand and colour, and is sent while the job is still fresh — not a week later when the details have faded.$content$,
  'A practical Australian painting invoice template covering ABN, prep work, labour, paint materials, colour notes, GST, payment terms and painter-specific examples.',
  '/hero_image.png',
  'Painter creating a GST-ready invoice on a phone after finishing a job',
  'Painter Invoice Template Australia: Labour, Prep, Materials and GST',
  'Painting invoice template Australia guide for painters. See what to include: ABN, prep work, labour, paint materials, colour notes, GST and payment terms.',
  'painter invoice template Australia',
  ARRAY[
    'painting invoice template',
    'painter invoice Australia',
    'painting invoice app',
    'invoice for painters',
    'painting materials invoice',
    'exterior painting invoice',
    'interior painter invoice',
    'GST painting invoice'
  ],
  ARRAY[
    'Australian painting invoices should include business details, ABN, customer details, job address, prep work, labour, materials with brand and colour, and GST if registered.',
    'Colour and product notes on invoices help clients, property managers and the painter match colours in future touch-ups or repaints.',
    'Prep work should appear as its own line item so clients understand why professional painting takes the time it does.',
    'SMASH turns painting invoice templates into a repeatable voice workflow so painters can invoice before they load the van.'
  ],
  $faq$[
    {
      "question": "What should a painting invoice include in Australia?",
      "answer": "A painting invoice should include your business name, ABN, customer details, invoice date, job address, prep work, labour with hours or days, paint materials with brand and colour, GST if registered, payment terms and total."
    },
    {
      "question": "Should painters include paint brand and colour on invoices?",
      "answer": "Yes. Adding the paint brand, product name and colour to invoices gives clients and property managers a permanent record for future touch-ups, matching or repainting. It also helps resolve disputes about what was supplied."
    },
    {
      "question": "How should prep work appear on a painting invoice?",
      "answer": "Prep work should appear as its own line item or group of items — such as strip and sand, fill and sand, prime — with time allocated. This helps clients understand the full scope of a professional paint job."
    },
    {
      "question": "What is the fastest way for painters to invoice?",
      "answer": "The fastest workflow is to invoice immediately after the job while details are fresh. SMASH lets painters describe the job, materials and colour by voice and send a GST-ready invoice in under 60 seconds."
    }
  ]$faq$::jsonb,
  'SMASH Team',
  'SMASH builds voice-to-invoice tools for self-employed service workers who want to send invoices before admin becomes a night-time job.',
  8,
  true,
  now(),
  now(),
  now()
),
(
  'how-to-invoice-multi-day-painting-jobs',
  'How to Invoice Multi-Day Painting Jobs: Labour, Stages and Cashflow',
  $content$# How to Invoice Multi-Day Painting Jobs: Labour, Stages and Cashflow

Multi-day painting jobs should be invoiced with each day or stage clearly described, so clients understand what was done on each day and the total reflects the full scope. The most common approach is a single invoice at job completion, but painters working on larger jobs of four days or more often use progress invoices — one at the start of prep and one at the end — to keep cashflow healthy and avoid long waits after the final coat.

This guide covers the invoicing structure for residential, commercial and property management paint jobs that run more than one day.

## Why multi-day jobs create invoicing problems

Most painting invoices are simple: one day, one rate, one invoice. Multi-day jobs create friction because:

- The full job may span a week or more, with different stages each day.
- Clients see only the final invoice and sometimes question the hours.
- Materials are purchased across multiple days, making the total harder to reconstruct.
- Payment terms start from the invoice date, not the finish date — so a late invoice means a later payment.
- Prep work on day one looks different from painting on day three, and a single "labour, 5 days" line does not explain either.

The solution is stage-based invoicing with clear line items.

## Stage-based line items for multi-day jobs

Break the job into visible stages, even if you are sending one invoice:

> Day 1 — Prep: strip, sand, fill exterior timber. 8 hours.

> Day 2 — Prime: bare timber and repaired surfaces. 6 hours.

> Day 3–4 — First and second topcoats. 12 hours.

> Materials — Haymes Solashield 10L × 3 cans. [Your cost or retail with markup.]

This structure shows the client where the time went. It also protects you if the client questions the number of days, because each stage is named and timed.

For interior jobs:

> Prep — patch, fill and sand walls, three rooms. 4 hours.

> Labour — interior repaint, living room, hallway, two bedrooms. 3 days.

> Materials — Dulux Wash and Wear low sheen, Lexicon Half, 15L × 2 cans.

## Progress invoicing for larger jobs

For jobs lasting four days or more, consider splitting the invoice:

**Invoice 1 (start of job):** Deposit or progress claim after prep is complete.

> Deposit invoice — 30% of quoted job value, payable before paint is ordered.

Or:

> Progress claim 1 — Prep stage complete. Strip, sand, fill and prime. $X.

**Invoice 2 (end of job):** Balance on completion.

> Final invoice — Balance of interior repaint. Painting stages complete. $X.

Progress invoicing keeps money moving on longer jobs and reduces the risk of a large unpaid balance at the end of a multi-week project.

Use the free [quote generator](/quote-generator) to quote the full job, then use the quote as the basis for both progress invoices. When you convert the quote in [SMASH for painters](/for-painters), you can split it into a deposit and a completion invoice.

## Materials across multiple days

On multi-day jobs, you may buy materials in batches — primer on day one, topcoat on day two. Keep receipts or notes on each purchase and add them all to the final invoice or the relevant progress invoice.

Group materials clearly:

- Primer — Dulux Professional Primer, 10L × 1 can.
- Topcoat — Dulux Wash and Wear low sheen, Lexicon Half, 15L × 2 cans.
- Consumables — sandpaper, filler, masking tape.

If you charge a markup on materials, apply it consistently to all items. For guidance on markup and materials pricing, see [materials pricing](/materials-pricing).

## Invoice on the day of completion

The single biggest cashflow improvement for painters on multi-day jobs is invoicing on the day the work finishes — not the following week.

Payment terms on a 7-day or 14-day invoice start from the invoice date. A job that finishes on Friday and is invoiced the following Tuesday has already lost four days from the payment window.

With [voice invoicing](/voice-invoicing), you can describe the full scope while packing up the van:

> "Final invoice for the Newport exterior repaint. Six days total — day one and two prep, day three prime, days four through six topcoats. Haymes Solashield 30 litres supplied. Payment due fourteen days."

[SMASH for painters](/for-painters) turns that into a clean, itemised invoice before you leave the driveway.

## Quoting multi-day jobs before work starts

For most multi-day jobs, the client expects a quote before the work starts. Use the free [quote generator](/quote-generator) for a one-off quote, or use the [Chrome extension](/chrome-extension) to build a quote from a Gmail enquiry without leaving the inbox.

The quote should show the same stage structure you plan to invoice:

- Prep and priming.
- Labour per day or total days.
- Materials estimate.
- Total including GST.

When the client approves, convert the quote to an invoice at completion. The line items should match what was quoted so there are no surprises.

## GST on multi-day jobs

GST applies to labour, materials and the full job total if you are registered. Show GST clearly on every progress invoice and the final invoice.

For a multi-day job:

- Progress invoice 1: Subtotal, GST, Total.
- Final invoice: Balance subtotal, GST on balance, Balance total.

The free [invoice template](/invoice-template) shows the correct structure for GST tax invoices.

## Accounting sync for multi-day jobs

If you use Xero or QuickBooks, Starter and higher plans of SMASH can sync every invoice — progress claims and final — to your accounting software. This means the job's revenue lands in your books as it is invoiced, without retyping anything. See [pricing](/pricing).

## Bottom line

Multi-day painting jobs are best invoiced with stage-based line items, sent on the day of completion, and quoted before work starts. Progress invoicing on larger jobs keeps cashflow moving and reduces the risk of a large unpaid balance at the end.$content$,
  'How to invoice multi-day painting jobs with stage-based line items, progress invoicing, materials, GST and same-day completion invoicing.',
  '/hero_image.png',
  'Painter invoicing a multi-day exterior repaint job from a phone on the final day',
  'How to Invoice Multi-Day Painting Jobs: Labour, Stages and Cashflow',
  'How to invoice multi-day painting jobs. Covers stage-based line items, progress invoicing, materials, GST, same-day invoicing and painter cashflow.',
  'how to invoice multi-day painting jobs',
  ARRAY[
    'multi-day painting invoice',
    'painter progress invoice',
    'painting invoice stages',
    'exterior painting invoice',
    'painting materials invoice',
    'painter invoice Australia',
    'invoice for painters',
    'painting cashflow'
  ],
  ARRAY[
    'Multi-day painting jobs should be invoiced with stage-based line items so clients understand what was done each day and why the job took the time it did.',
    'Progress invoicing — a deposit or mid-job claim — keeps cashflow healthy on jobs lasting four or more days.',
    'Invoice on the day of completion, not the following week, to avoid losing payment window days.',
    'Materials should be listed with brand, product, colour and quantity on every invoice so clients and property managers have a permanent record.'
  ],
  $faq$[
    {
      "question": "How should painters invoice multi-day jobs?",
      "answer": "Invoice multi-day jobs with stage-based line items — prep, priming, topcoats — even on a single final invoice. This shows clients exactly what was done each day and protects the painter if the total is questioned."
    },
    {
      "question": "Should painters use progress invoicing?",
      "answer": "Yes, for jobs of four or more days. A deposit or mid-job progress claim keeps cashflow moving and reduces the risk of a large unpaid balance at the end of a long job."
    },
    {
      "question": "When should painters send the invoice on multi-day jobs?",
      "answer": "On the day of completion. Payment terms start from the invoice date, so every day of delay is a day lost from the payment window."
    },
    {
      "question": "Can SMASH invoice multi-day painting jobs?",
      "answer": "Yes. SMASH lets painters describe the full job scope by voice — including stages, materials and days — and send the invoice on the day the job finishes."
    }
  ]$faq$::jsonb,
  'SMASH Team',
  'SMASH builds voice-to-invoice tools for self-employed service workers who want to send invoices before admin becomes a night-time job.',
  8,
  true,
  now(),
  now(),
  now()
),
(
  'hvac-air-con-invoice-template-australia',
  'HVAC Invoice Template Australia: Refrigerant, Labour, Parts and GST',
  $content$# HVAC Invoice Template Australia: Refrigerant, Labour, Parts and GST

An HVAC or air conditioning invoice in Australia should include your business name, ABN, refrigerant handling licence number, customer details, site address, invoice date, call-out fee if applicable, labour, refrigerant quantity and type, parts, GST if registered, payment terms and a clear total. The best HVAC invoice template separates refrigerant from labour and parts so customers understand the charge and refrigerant costs do not disappear into a vague "air conditioning work" line.

This guide gives HVAC technicians a practical invoice structure, then shows how to turn that structure into a faster workflow with [SMASH for HVAC technicians](/for-hvac), the free [invoice template](/invoice-template), and the free [invoice generator](/invoice-generator).

## The basic HVAC invoice format

Use this structure for most residential and commercial HVAC jobs:

1. Your business name, ABN, refrigerant handling licence number, email and phone.
2. Customer name, billing address and site address if different.
3. Invoice number, invoice date and payment due date.
4. Job title, such as "split system service and regas" or "emergency compressor repair".
5. Call-out fee if you charge one — standard, after-hours or emergency.
6. Labour line items with hours and rate.
7. Refrigerant line items with type (R410A, R32, R22), quantity and price.
8. Parts line items with description and price.
9. GST shown separately if you are registered.
10. Payment link or payment instructions.

The goal is clarity. A commercial client, building manager or strata company should be able to see what was done, what refrigerant was used, what parts were replaced, and what needs to be paid without calling you back.

## Example HVAC invoice line items

For a split system service and regas:

> Standard call-out — attendance and travel.

> Labour — split system service and regas, Daikin 7.1kW. 2 hours.

> Refrigerant — R410A, 600 grams @ [your rate per gram].

> Filter pad replacement — Daikin standard filter.

For an emergency after-hours repair:

> Emergency after-hours call-out.

> After-hours labour — cold room compressor fault diagnosis and repair. 3 hours.

> Capacitor — replacement, [unit spec].

> Contactor — replacement, [unit spec].

For a new split system install:

> Labour — supply and install 6kW split system, single-phase. 4 hours.

> Unit — Mitsubishi Electric 6kW split system [model number].

> Installation consumables — copper pipe, insulation, drain hose, mounting hardware.

## Refrigerant as a line item

Refrigerant is one of the most commonly missed line items on HVAC invoices. It has a clear cost — your trade price for the refrigerant plus any handling, storage and licence overhead — and it should appear on the invoice with the type and quantity so customers can see exactly what was used.

Common formats:

- R410A — 500g top-up.
- R32 — full recharge, 800g.
- R22 — partial top-up, 300g.

If you price refrigerant by the gram, store your rate in your pricing catalog. For a broader guide on materials pricing, see [materials pricing](/materials-pricing).

## Call-out fees for HVAC jobs

HVAC technicians often charge a call-out fee, especially for emergency and after-hours work. Show this as a clear line item:

- Standard call-out — business hours.
- After-hours call-out — outside standard hours.
- Emergency call-out — urgent breakdown.

The call-out fee may or may not include the first 30 or 60 minutes of labour, depending on your pricing structure. The invoice should state which structure applies.

## GST notes for HVAC technicians

If your business is registered for GST, your invoice should be a tax invoice and show GST clearly on labour, refrigerant and parts.

A GST-ready HVAC invoice should show:

- Subtotal before GST.
- GST amount.
- Total including GST.
- Your ABN.
- The words "Tax Invoice" where appropriate.

The free [invoice generator](/invoice-generator) helps you create a compliant manual invoice. SMASH goes further by remembering customers, site details, rates, refrigerant pricing and parts.

## Quote before invoice for new installations

New split system installs, multi-unit commercial fit-outs and large maintenance contracts should start with a quote. Use the free [quote generator](/quote-generator), or use the [Chrome extension](/chrome-extension) to build a quote from a Gmail enquiry without leaving the inbox.

When the client approves, convert the quote to an invoice and add any parts or labour changes from the actual install. Do not retype the full invoice from scratch.

## HVAC technician workflow with SMASH

[SMASH for HVAC technicians](/for-hvac) is built for the van-and-van-top workflow:

- Save call-out, labour, after-hours and emergency rates.
- Save refrigerant pricing by type and quantity.
- Save common parts with markup.
- Create quotes and invoices by voice.
- Convert approved quotes into invoices.
- Send invoices with payment links.
- Sync invoices to Xero or QuickBooks on Starter and higher plans.

For example, say:

> "Air con service and regas at the Parramatta office. Daikin 7.1kW. Two hours standard labour, 600 grams R410A, replaced filter pad."

SMASH turns that into clear line items instead of making you type from memory after the next job.

## Related HVAC resources

Start with these:

- [SMASH for HVAC technicians](/for-hvac)
- [Invoice template](/invoice-template)
- [Invoice generator](/invoice-generator)
- [Quote generator](/quote-generator)
- [Voice invoicing](/voice-invoicing)
- [Chrome extension](/chrome-extension)
- [Materials pricing](/materials-pricing)
- [Pricing](/pricing)

The Free plan includes 5 invoices per month. Starter is $15/month for unlimited invoices plus accounting sync, which suits HVAC technicians who invoice every week.

## Bottom line

A good HVAC invoice template is clear, itemised and ready for payment. It shows the call-out fee, labour hours, refrigerant type and quantity, parts replaced, and GST — and it is sent while the job details are still fresh, not reconstructed the following morning.$content$,
  'A practical Australian HVAC invoice template covering refrigerant handling licence, call-out fees, labour, refrigerant quantities, parts, GST and payment terms.',
  '/hero_image.png',
  'HVAC technician creating a GST-ready invoice on a phone after completing an air conditioning service',
  'HVAC Invoice Template Australia: Refrigerant, Labour, Parts and GST',
  'HVAC invoice template Australia guide for air con technicians. See what to include: licence number, refrigerant, call-out fee, parts, labour, GST and payment terms.',
  'HVAC invoice template Australia',
  ARRAY[
    'air conditioning invoice template',
    'HVAC invoice Australia',
    'air con technician invoice',
    'refrigerant invoice',
    'split system service invoice',
    'HVAC invoice app',
    'emergency air con invoice',
    'GST HVAC invoice'
  ],
  ARRAY[
    'HVAC invoices should include business details, ABN, refrigerant licence, customer and site details, call-out fee, labour, refrigerant type and quantity, parts and GST.',
    'Refrigerant should appear as a separate line item with type and quantity so customers understand the charge.',
    'Emergency and after-hours call-out fees should be clearly described line items to reduce payment disputes.',
    'SMASH turns HVAC invoice templates into a repeatable voice workflow for same-day van invoicing.'
  ],
  $faq$[
    {
      "question": "What should an HVAC invoice include in Australia?",
      "answer": "An HVAC invoice should include your business name, ABN, refrigerant handling licence number, customer and site details, invoice date, call-out fee, labour hours and rate, refrigerant type and quantity, parts replaced, GST if registered, payment terms and total."
    },
    {
      "question": "How should HVAC technicians show refrigerant on invoices?",
      "answer": "Show refrigerant as a separate line item with the type (R410A, R32, R22) and quantity in grams or kilograms. This gives customers a clear record of what was used and helps justify the charge."
    },
    {
      "question": "Should HVAC technicians include their refrigerant licence on invoices?",
      "answer": "Including your refrigerant handling licence number on invoices and quotes gives commercial clients and building managers confidence that the work is compliant and properly documented."
    },
    {
      "question": "What is the fastest way for HVAC technicians to invoice?",
      "answer": "The fastest workflow is to invoice immediately after the job while the refrigerant quantity, parts used and labour time are still accurate. SMASH lets HVAC technicians describe the job by voice and send a GST-ready invoice in under 60 seconds."
    }
  ]$faq$::jsonb,
  'SMASH Team',
  'SMASH builds voice-to-invoice tools for self-employed service workers who want to send invoices before admin becomes a night-time job.',
  8,
  true,
  now(),
  now(),
  now()
),
(
  'air-conditioning-emergency-call-out-invoice',
  'Air Conditioning Emergency Call-out Invoice: After-Hours Rates, Parts and GST',
  $content$# Air Conditioning Emergency Call-out Invoice: After-Hours Rates, Parts and GST

An air conditioning emergency call-out invoice should show a clear emergency or after-hours call-out fee, labour at the correct after-hours rate, any refrigerant used, parts replaced, GST if registered, and a record of customer approval. The invoice should be sent the same night or first thing the next morning — not reconstructed from memory later in the week.

This matters because emergency HVAC jobs are more likely to be questioned. The customer is stressed, the fee is higher than normal, and any ambiguity about what was charged or why creates payment delays.

## Why emergency call-out invoices need more detail

Emergency air conditioning jobs have more moving parts than a standard service:

- A higher call-out fee.
- An after-hours labour rate.
- Parts that had to be sourced urgently or carried as van stock.
- A time of attendance that needs to be documented.
- Customer approval given verbally or by text.
- GST that applies to all of the above.

When these are bundled into a single "emergency air con" line, customers have grounds to question the total. When they are itemised, the invoice becomes a clear record of what happened and why it cost what it did.

## Common emergency HVAC invoice structures

Most HVAC technicians use one of these structures for emergency call-outs:

1. Emergency call-out fee plus after-hours labour rate.
2. After-hours call-out fee that includes the first hour of labour.
3. Standard call-out plus after-hours labour rate (higher rate outside hours).
4. Flat emergency diagnostic fee plus parts and additional labour.

Any structure can work. The invoice just needs to describe it clearly so the customer knows what they approved.

## Example emergency invoice wording

For a cold room breakdown:

> Emergency after-hours call-out — compressor fault.

> After-hours labour — diagnose, remove and replace compressor capacitor and contactor. 3 hours.

> Capacitor — [part description].

> Contactor — [part description].

> Customer approved by text at 11:34 PM.

For a residential ducted system fault:

> Emergency call-out — ducted system fault, after hours.

> After-hours labour — diagnose fault, replace faulty zone board. 2 hours.

> Zone board — [part description and model].

> Refrigerant — R410A top-up, 200g.

For a commercial split system in a restaurant:

> Emergency call-out — commercial kitchen cold room failure.

> After-hours labour — diagnose and repair split system, replace start capacitor. 1.5 hours.

> Start capacitor — [specification].

> Note: approved by venue manager via phone call at 10:15 PM.

## Include customer approval notes

For emergency jobs, include a note on the invoice showing when and how the customer approved the work:

- "Customer approved by text at 11:40 PM."
- "Verbal approval given by property manager before work commenced."
- "Work authorised under service agreement, reference [number]."

This does not need to be a formal document. A single line on the invoice is often enough to resolve a payment dispute before it starts.

## Put emergency rates on quotes too

If you attend a job and the customer wants a quote before you proceed, show the emergency call-out fee on that quote. When the invoice matches the quote, there are no surprises.

Use the free [quote generator](/quote-generator) for one-off jobs, or use the [Chrome extension](/chrome-extension) to build a quote from a Gmail enquiry. If the customer approves the quote, convert it into the invoice instead of retyping the job.

## Same-night invoicing for emergency work

Emergency HVAC jobs are usually done late. The instinct is to invoice in the morning. But morning means the job is later in the queue, the details are fuzzier, and the payment window has already started slipping.

With [voice invoicing](/voice-invoicing), you can say:

> "Emergency after-hours call-out at the Bondi restaurant. Cold room compressor fault. Three hours after-hours labour, replaced capacitor and contactor. Customer approved by text. Emergency call-out fee applies."

[SMASH for HVAC technicians](/for-hvac) turns that into line items and a payment link before you drive away.

## GST on emergency HVAC jobs

If you are GST-registered, apply GST correctly to the call-out fee, labour and parts. Show GST clearly on the invoice:

- Emergency call-out fee.
- After-hours labour.
- Parts.
- Subtotal.
- GST.
- Total including GST.

The free [invoice template](/invoice-template) shows the correct structure for GST tax invoices. The free [invoice generator](/invoice-generator) helps you create a compliant one-off invoice manually.

## Pricing and accounting

The Free plan includes 5 invoices per month. Starter is $15/month for unlimited invoices and accounting sync, which is useful if emergency call-outs happen regularly and need to land in Xero or QuickBooks without double-handling. See [pricing](/pricing).

## Bottom line

Emergency air conditioning invoices are collected faster when they are itemised, sent the same night, and show approval clearly. The fee is higher — the invoice should reflect that without leaving any room for a dispute.$content$,
  'How HVAC technicians should invoice emergency and after-hours air conditioning call-outs, including rates, parts, refrigerant, approval notes and GST.',
  '/hero_image.png',
  'HVAC technician invoicing an emergency air conditioning call-out after a late-night repair',
  'Air Con Emergency Call-out Invoice: After-Hours Rates, Parts and GST',
  'How to invoice air conditioning emergency call-outs. Includes after-hours rates, refrigerant, parts, approval notes, GST examples and same-night invoicing tips.',
  'air conditioning emergency call-out invoice',
  ARRAY[
    'emergency HVAC invoice',
    'after-hours air con invoice',
    'HVAC call-out fee invoice',
    'emergency air conditioning invoice',
    'HVAC after-hours rate',
    'air con technician invoice',
    'HVAC invoice app',
    'emergency call-out GST'
  ],
  ARRAY[
    'Emergency HVAC invoices should show a clear emergency call-out fee, after-hours labour rate, parts, refrigerant used, GST and a customer approval note.',
    'Including customer approval wording — text approval, verbal approval, service agreement reference — resolves payment disputes before they start.',
    'Emergency jobs should be invoiced the same night, not the following morning, to prevent the payment window slipping.',
    'Voice invoicing lets HVAC technicians send an emergency invoice before leaving the job site.'
  ],
  $faq$[
    {
      "question": "How should an HVAC emergency call-out be invoiced?",
      "answer": "Show the emergency or after-hours call-out fee as a separate line item, then list after-hours labour, parts replaced, any refrigerant used, customer approval note, GST and the total."
    },
    {
      "question": "Should emergency air con invoices include a customer approval note?",
      "answer": "Yes. A short note such as 'customer approved by text at 11:40 PM' or 'verbal approval before work commenced' protects both the technician and the customer and speeds up payment."
    },
    {
      "question": "When should HVAC technicians send emergency call-out invoices?",
      "answer": "The same night, if possible. Payment terms start from the invoice date, so every day of delay reduces the effective payment window. Voice invoicing makes it possible to send the invoice before leaving the job site."
    },
    {
      "question": "Can SMASH invoice HVAC emergency call-outs?",
      "answer": "Yes. Save your standard, after-hours and emergency call-out rates in SMASH, then describe the job by voice — including parts, refrigerant and approval note — and send the invoice before you drive away."
    }
  ]$faq$::jsonb,
  'SMASH Team',
  'SMASH builds voice-to-invoice tools for self-employed service workers who want to send invoices before admin becomes a night-time job.',
  7,
  true,
  now(),
  now(),
  now()
),
(
  'pest-control-invoice-template-australia',
  'Pest Control Invoice Template Australia: Treatments, Chemicals and GST',
  $content$# Pest Control Invoice Template Australia: Treatments, Chemicals and GST

A pest control invoice in Australia should include your business name, ABN, pest management licence number, customer details, property address, invoice date, treatment type or types, chemical product name and quantity, labour, GST if registered, payment terms and a clear total. The best pest control invoice template separates treatments and chemicals so customers have a clear record and small chemical costs do not disappear into a vague "pest treatment" line.

This guide gives pest control operators a practical invoice structure, then shows how to turn that structure into a faster workflow with [SMASH for pest control operators](/for-pest-control), the free [invoice template](/invoice-template), and the free [invoice generator](/invoice-generator).

## The basic pest control invoice format

Use this structure for most residential, commercial and strata pest control jobs:

1. Your business name, ABN and pest management licence number.
2. Customer name, billing address and property address if different.
3. Invoice number, invoice date and payment due date.
4. Job title, such as "general pest treatment" or "termite pre-treatment".
5. Treatment type or types as separate line items.
6. Chemical product name, active ingredient, quantity and price.
7. Labour — hours and rate.
8. GST shown separately if you are registered.
9. Payment link or payment instructions.

A residential client should be able to see what was treated, what chemicals were used, and what they are paying for. A property manager or strata company needs the site address, treatment scope and product names to keep their records.

## Example pest control invoice line items

For a general pest treatment:

> Inspection — general pest inspection, residential.

> Interior spray — cockroaches, ants, spiders. Bifenthrin applied.

> Exterior perimeter spray — Bifenthrin.

> Roof void dusting — Permethrin dust applied.

> Labour — 2 hours.

For a termite pre-treatment:

> Termite pre-treatment — soil barrier, new build.

> Termidor SC applied — 120 lineal metres @ [your rate per LM].

> Labour — 5 hours, commercial rate.

For a commercial follow-up:

> Follow-up cockroach treatment — commercial kitchen.

> Gel bait reapplication — Maxforce Fusion.

> Labour — 1 hour, commercial follow-up rate.

## Why chemical line items matter

Including the chemical product name and quantity on an invoice does three things:

1. **Compliance record.** Many commercial clients and strata companies need product records for WHS compliance, food safety audits or building management.
2. **Customer trust.** Clients feel more confident when they can see what was used, especially for indoor treatments near children or food preparation.
3. **Profit protection.** Chemical costs per job can be significant. A vague "materials" line hides the cost and makes it impossible to track chemical profitability.

Use product names rather than generic descriptions:

- "Bifenthrin 100SC" or "Bifenthrin applied" rather than just "spray".
- "Termidor SC" rather than "termite chemical".
- "Permethrin dust" rather than "dusting".

You do not need to list every component chemical. The commercial product name and quantity is enough for most invoices.

## Licence number on pest control invoices

Include your pest management licence number on invoices and quotes. Many commercial clients, property managers and strata companies require it, and it documents that the work was performed by a licensed operator.

## Follow-up visit invoicing

A common invoicing problem for pest control operators is follow-up visits. The follow-up rate is different from the initial treatment rate, and manually adjusting the invoice every time is easy to get wrong.

Set a specific follow-up rate for residential and commercial clients. When you invoice a return visit, mention it is a follow-up and the rate applies automatically. See [how to invoice quarterly pest treatments](/blog/how-to-invoice-quarterly-pest-treatments) for more on recurring invoicing.

## GST notes for pest control operators

If your business is registered for GST, your invoice should be a tax invoice and show GST clearly. If you are not registered, do not add GST.

A GST-ready pest control invoice should show:

- Subtotal before GST.
- GST amount.
- Total including GST.
- Your ABN.
- The words "Tax Invoice" where appropriate.

The free [invoice generator](/invoice-generator) helps you create a compliant manual invoice. SMASH goes further by remembering customers, properties, treatment schedules and chemical pricing.

## Quote before invoice for larger treatments

Termite barrier installs, large commercial treatments and annual contracts should start with a quote. Use the free [quote generator](/quote-generator), or use the [Chrome extension](/chrome-extension) to build a quote from a Gmail enquiry without leaving the inbox.

When the client approves, convert the quote to an invoice and add any variations from the actual treatment.

## Pest control workflow with SMASH

[SMASH for pest control operators](/for-pest-control) is built for the ute-and-spray-pack workflow:

- Save standard treatment rates by type.
- Save chemical pricing per litre or application.
- Save follow-up and commercial rates.
- Create quotes and invoices by voice.
- Repeat quarterly invoices with one step.
- Send invoices with payment links.
- Sync invoices to Xero or QuickBooks on Starter and higher plans.

For example, say:

> "General pest at the Chatswood townhouse. Interior spray, exterior perimeter, roof void dusting. Two hours standard rate. Bifenthrin and Permethrin dust used."

SMASH turns that into clear line items instead of making you type from memory after the next job.

## Related pest control resources

Start with these:

- [SMASH for pest control operators](/for-pest-control)
- [Invoice template](/invoice-template)
- [Invoice generator](/invoice-generator)
- [Quote generator](/quote-generator)
- [Voice invoicing](/voice-invoicing)
- [Chrome extension](/chrome-extension)
- [Materials pricing](/materials-pricing)
- [Pricing](/pricing)

The Free plan includes 5 invoices per month. Starter is $15/month for unlimited invoices plus accounting sync, which suits operators invoicing every week.

## Bottom line

A good pest control invoice template is clear, itemised and compliance-friendly. It shows the treatment type, chemical products and quantities, licence number, GST and payment terms — and it is sent from the ute while the treatment details are still accurate.$content$,
  'A practical Australian pest control invoice template covering licence number, treatment types, chemical products, follow-up rates, GST and payment terms.',
  '/hero_image.png',
  'Pest control operator creating a GST-ready invoice on a phone after completing a treatment',
  'Pest Control Invoice Template Australia: Treatments, Chemicals and GST',
  'Pest control invoice template Australia guide. See what to include: licence number, treatment types, chemical products, follow-up rates, GST and payment terms.',
  'pest control invoice template Australia',
  ARRAY[
    'pest controller invoice Australia',
    'pest control invoice app',
    'termite treatment invoice',
    'general pest treatment invoice',
    'pest control invoice template',
    'chemical treatment invoice',
    'pest management licence invoice',
    'GST pest control invoice'
  ],
  ARRAY[
    'Pest control invoices should include ABN, licence number, customer and property details, treatment types, chemical product names and quantities, labour and GST.',
    'Including chemical product names gives commercial clients and strata companies the compliance records they need for WHS and food safety audits.',
    'Setting a specific follow-up rate and applying it consistently helps pest operators invoice return visits correctly without manual rate adjustments.',
    'SMASH turns pest control invoice templates into a repeatable voice workflow so operators can invoice before they load the ute.'
  ],
  $faq$[
    {
      "question": "What should a pest control invoice include in Australia?",
      "answer": "A pest control invoice should include your business name, ABN, pest management licence number, customer and property details, invoice date, treatment types as separate line items, chemical product names and quantities, labour, GST if registered, payment terms and total."
    },
    {
      "question": "Do pest control operators need to include a licence number on invoices?",
      "answer": "Pest management licence numbers should appear on invoices and quotes. Many commercial clients, property managers and strata companies require it, and it documents the work was performed by a licensed operator."
    },
    {
      "question": "Should pest control invoices include chemical product names?",
      "answer": "Yes. Including the product name and quantity gives clients a compliance record for WHS and food safety purposes, builds trust for indoor treatments, and helps pest operators track chemical costs accurately."
    },
    {
      "question": "What is the fastest way for pest control operators to invoice?",
      "answer": "The fastest workflow is to invoice from the ute while the treatment details — chemicals used, zones treated, hours spent — are still accurate. SMASH lets operators describe the job by voice and send a GST-ready invoice in under 60 seconds."
    }
  ]$faq$::jsonb,
  'SMASH Team',
  'SMASH builds voice-to-invoice tools for self-employed service workers who want to send invoices before admin becomes a night-time job.',
  8,
  true,
  now(),
  now(),
  now()
),
(
  'how-to-invoice-quarterly-pest-treatments',
  'How to Invoice Quarterly Pest Control Treatments: Recurring Invoicing for Residential and Commercial',
  $content$# How to Invoice Quarterly Pest Control Treatments: Recurring Invoicing for Residential and Commercial

Quarterly pest control treatments should be invoiced consistently — same format, same treatment scope, same chemical notes — so clients can match the invoice to their service agreement and pay without questions. The biggest invoicing problems for recurring pest jobs are rate drift, inconsistent chemical notes and delayed invoicing after the visit.

This guide covers how pest control operators should structure quarterly and annual invoices for residential and commercial clients, and how to make recurring invoicing faster without losing the detail that commercial clients need.

## What quarterly pest control invoicing needs to do

Recurring pest control invoices serve two jobs:

1. **Trigger payment.** The client sees a clear invoice for work completed and pays it.
2. **Document compliance.** Commercial clients, strata companies and property managers need product records, treatment dates and licence numbers for their own compliance records.

A quarterly invoice that fails at either job creates problems — slow payment or compliance questions that slow payment down further.

## Standard quarterly treatment invoice structure

Use this structure for each quarterly visit:

1. Your business name, ABN and pest management licence number.
2. Customer name, property address and account reference if applicable.
3. Invoice number, invoice date and payment due date.
4. Service title: "Quarterly pest control treatment — [quarter, e.g. Q1 2026]".
5. Treatment scope — which zones were treated.
6. Chemical products used — name and quantity.
7. Labour hours or fixed visit rate.
8. GST if registered.
9. Payment link or payment instructions.

The treatment scope and chemical notes should match what was actually done, not just a copy of the previous quarter. SMASH makes this easy because you start from the last invoice and change only what changed.

## Setting a consistent quarterly rate

Rate drift is one of the most common problems with recurring pest invoices. The rate in Q1 is slightly different from Q3 because it was adjusted manually. The client notices and asks questions.

Before the quarterly schedule starts, agree on a rate and save it. Common quarterly pricing structures:

- Fixed per-visit rate for residential properties.
- Fixed per-zone or per-unit rate for commercial or strata.
- Annual program rate divided by four, invoiced quarterly.

If the rate changes — due to chemical cost increases or scope changes — issue a revised agreement before changing the invoice. Do not just quietly change the line item and hope the client does not notice.

## Commercial quarterly invoicing

Commercial clients — restaurants, warehouses, office buildings, food production facilities — often have more complex quarterly invoicing needs:

- Multiple treatment zones with zone identifiers.
- Product names and active ingredients for food safety compliance.
- Technician name and licence number on every invoice.
- Reference to the service agreement or contract number.
- 30-day payment terms rather than 7-day.

Set up a customer profile in your invoicing system with the commercial client's preferred invoice format, terms and zone structure. Then repeat from that template each quarter.

For the [Chrome extension](/chrome-extension), Gmail enquiries or renewal reminders from commercial clients can be turned into quotes or invoice reminders without leaving the inbox.

## Residential quarterly invoicing

Residential clients are simpler but equally important for cashflow:

- Single property, standard treatment scope.
- Fixed quarterly rate.
- Short payment terms — 7 days is normal.
- Treatment confirmation is often enough (no zone breakdown needed).

The invoice should still name the chemical products used and note any differences from the standard treatment — for example, "roof void treated this quarter due to cockroach activity in ceiling space."

See [pest control invoice template Australia](/blog/pest-control-invoice-template-australia) for a full breakdown of what residential invoices should include.

## Follow-up invoicing between quarterly visits

Some properties need a follow-up visit between scheduled quarterly treatments. Follow-up invoices should:

- Be clearly labelled as a follow-up, not a full quarterly treatment.
- Use the lower follow-up rate.
- Note which chemical or treatment was applied.
- Reference the most recent quarterly treatment date.

> Follow-up — cockroach re-treatment, kitchen area. 1 hour follow-up rate. Gel bait reapplication. Previous quarterly treatment: [date].

This context helps the client understand why they are receiving a second invoice in the same quarter.

## Invoice immediately after the visit

Recurring pest control visits are easy to deprioritise for invoicing because the client expects the invoice and the payment terms are known. But delayed invoicing on quarterly work still costs money.

A quarterly treatment done in March that is invoiced in April means payment in May. Invoiced in March, it means payment in March or early April.

With [voice invoicing](/voice-invoicing), you can describe the treatment and send the invoice from the ute before driving to the next property:

> "Quarterly treatment at the Mosman property. Interior spray, exterior perimeter, roof void dusting. Bifenthrin and Permethrin dust. Two hours, quarterly residential rate."

[SMASH for pest control operators](/for-pest-control) turns that into a ready-to-send invoice with the customer, property and rate already saved from last quarter.

## Annual contracts invoiced quarterly

Some pest control operators invoice annual contracts quarterly — the customer signs up for annual pest control and pays in four instalments. Invoice each instalment at the start of the quarter or on the treatment date, referencing the annual contract:

> Q1 instalment — Annual pest control program. [Property address].

> Quarterly treatment completed [date].

> Reference: Annual program agreement [number].

Include the treatment notes as usual. Even on a contract invoice, the chemical and treatment detail matters.

## GST on quarterly pest control invoices

If you are GST-registered, GST applies to every quarterly invoice. Show it the same way every quarter — subtotal, GST, total — so the format is familiar to accounts teams and the invoice is approved on first review.

The free [invoice template](/invoice-template) shows the correct GST tax invoice structure. The free [invoice generator](/invoice-generator) helps create a compliant manual invoice.

## Accounting sync for recurring invoices

Quarterly invoices for commercial clients add up — four invoices per year, multiplied by your commercial account list. Starter and higher plans of SMASH sync invoices to Xero or QuickBooks without double-handling, so every quarterly invoice lands in your books the day it is sent. See [pricing](/pricing).

## Bottom line

Quarterly pest control invoices should be consistent, detailed and sent on the day of the treatment. Set rates before the program starts, note chemicals on every visit, and use a saved customer template to repeat the invoice with only the date and treatment notes changed.$content$,
  'How pest control operators should invoice quarterly and annual recurring treatments for residential and commercial clients without losing consistency or cashflow.',
  '/hero_image.png',
  'Pest control operator invoicing a quarterly residential treatment from a phone in the ute',
  'How to Invoice Quarterly Pest Control Treatments: Recurring Invoicing Guide',
  'How to invoice quarterly pest control treatments. Covers recurring invoicing, commercial rates, chemical notes, follow-up pricing, GST and same-day invoicing.',
  'how to invoice quarterly pest control treatments',
  ARRAY[
    'quarterly pest control invoice',
    'recurring pest control invoicing',
    'commercial pest control invoice',
    'annual pest contract invoice',
    'pest treatment follow-up invoice',
    'pest control invoice app',
    'pest controller invoice Australia',
    'pest control repeat invoice'
  ],
  ARRAY[
    'Quarterly pest control invoices should be consistent — same format, same chemical notes, same agreed rate — so clients can match the invoice to their service agreement and pay without questions.',
    'Commercial clients need product names, active ingredients, technician licence number and treatment zone details for food safety and WHS compliance.',
    'Rate drift — slightly different rates across quarters due to manual adjustments — is a common cause of payment disputes on recurring pest invoices.',
    'Invoicing on the day of the treatment, not days later, can shift a quarterly payment by weeks and significantly improve cashflow.'
  ],
  $faq$[
    {
      "question": "How should pest control operators invoice quarterly treatments?",
      "answer": "Use a consistent invoice format with the treatment date, scope, chemical products and quantities, and agreed rate. Start from the last invoice for that client and update only the date, notes and any changed items."
    },
    {
      "question": "What do commercial pest control clients need on quarterly invoices?",
      "answer": "Commercial clients typically need treatment zone identifiers, chemical product names and active ingredients, the technician name and licence number, a reference to the service agreement, and 30-day payment terms."
    },
    {
      "question": "How should follow-up visits be invoiced between quarterly treatments?",
      "answer": "Label follow-up invoices clearly, use the lower follow-up rate, note the chemical applied, and reference the most recent quarterly treatment date so the client understands it is an additional visit, not a full quarterly treatment."
    },
    {
      "question": "Can SMASH repeat quarterly pest control invoices?",
      "answer": "Yes. SMASH saves each customer, property, treatment scope and rate. Repeat the last invoice for that client, update the treatment date and any chemical or scope changes, and send it while the details are still accurate."
    }
  ]$faq$::jsonb,
  'SMASH Team',
  'SMASH builds voice-to-invoice tools for self-employed service workers who want to send invoices before admin becomes a night-time job.',
  9,
  true,
  now(),
  now(),
  now()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  content = EXCLUDED.content,
  excerpt = EXCLUDED.excerpt,
  featured_image = EXCLUDED.featured_image,
  featured_image_alt = EXCLUDED.featured_image_alt,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  primary_keyword = EXCLUDED.primary_keyword,
  secondary_keywords = EXCLUDED.secondary_keywords,
  key_takeaways = EXCLUDED.key_takeaways,
  faq_data = EXCLUDED.faq_data,
  author = EXCLUDED.author,
  author_bio = EXCLUDED.author_bio,
  reading_time = EXCLUDED.reading_time,
  published = EXCLUDED.published,
  updated_at = now(),
  last_reviewed = now();
