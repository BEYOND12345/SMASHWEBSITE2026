/*
  # Add plumber support blog posts

  Adds three plumber-cluster articles to the blog_posts source of truth:
  - plumbing invoice template Australia
  - plumber call-out fee invoice
  - how to charge materials on a plumbing invoice

  These support /for-plumbers with practical SEO/AEO content and internal links
  to plumber, template, generator, materials, voice, Chrome extension and pricing pages.
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
  'plumbing-invoice-template-australia',
  'Plumbing Invoice Template Australia: Licence, Labour, Materials and GST',
  $content$# Plumbing Invoice Template Australia: Licence, Labour, Materials and GST

A plumbing invoice in Australia should include your business name, ABN, plumbing licence number, customer details, invoice date, job address, call-out fee, labour, itemised materials, GST if registered, payment terms and a clear total. The best plumber invoice template separates labour from parts so customers understand the charge and small fittings do not disappear into a vague "materials" line.

This guide gives plumbers a practical invoice structure, then shows how to turn that structure into a faster workflow with [SMASH for plumbers](/for-plumbers), the free [invoice template](/invoice-template), and the free [invoice generator](/invoice-generator).

## The basic plumber invoice format

Use this structure for most residential, commercial and maintenance plumbing jobs:

1. Your business name, ABN, plumbing licence number, email and phone number.
2. Customer name, billing address and job address if different.
3. Invoice number, invoice date and payment due date.
4. Job title, such as "blocked drain call-out" or "kitchen mixer replacement".
5. Call-out fee or first-hour minimum if you charge one.
6. Labour line items with hours, rate and total.
7. Materials line items with quantity, unit price and markup if applicable.
8. GST shown separately if you are registered.
9. Payment link or payment instructions.

The goal is approval clarity. A customer should be able to see what you did, what you supplied, and what they need to pay without calling you back.

## Example plumbing invoice line items

For a mixer tap replacement:

> Call-out fee - standard service call.

> Labour - replace kitchen mixer, 1.5 hours.

> Caroma mixer tap, 300mm flexi hoses x 2, thread seal tape.

For a blocked drain:

> Emergency call-out - after-hours.

> Labour - locate and clear blocked drain, 1.5 hours.

> Drain snake equipment charge.

For a hot water service:

> Supply and install 250L hot water unit.

> Labour - installation and commissioning.

> Tempering valve, fittings, pipework, disposal fee.

The invoice does not need to be long, but it should not hide the parts. Plumbing margins often leak through small materials that never make it onto the invoice.

## Call-out fees and first-hour charges

If you charge a call-out fee, show it as its own line item. This avoids the common dispute where a customer says they did not know travel or attendance was billed separately.

Use plain labels:

- Standard call-out fee.
- Emergency call-out fee.
- After-hours call-out fee.
- First-hour minimum.
- Diagnostic fee.

If the call-out includes the first 30 or 60 minutes, make that clear on the invoice or quote. If it is separate from labour, show both lines.

## Materials and markup

Most plumbers should itemise materials rather than using one flat "materials" line. Itemising helps with customer trust, GST records, and profit control.

Common plumbing materials to save in your catalog:

- Flexi hoses.
- Isolation valves.
- Washers and washer kits.
- Copper and PVC pipe.
- Compression fittings.
- Mixer taps.
- Tempering valves.
- Thread seal tape and consumables.
- Drainage fittings.

If you charge a markup, apply it consistently. The markup covers purchasing time, storage, wastage, vehicle stock and carrying cost. For deeper guidance, see [materials pricing](/materials-pricing) and [how to charge materials on a plumbing invoice](/blog/how-to-charge-materials-on-a-plumbing-invoice).

## GST notes for plumbers

If your business is registered for GST, your invoice should be a tax invoice and show GST clearly. If you are not registered, do not add GST.

A GST-ready plumbing invoice should show:

- Subtotal before GST.
- GST amount.
- Total including GST.
- Your ABN.
- The words "Tax Invoice" where appropriate.

The free [invoice generator](/invoice-generator) helps you create a compliant manual invoice. SMASH goes further by remembering customers, rates, common materials and payment terms.

## Quote before invoice

Many plumbing jobs start as a quote request from a customer, property manager or builder. Use the free [quote generator](/quote-generator) for a manual quote, or use the [Chrome extension](/chrome-extension) to turn a Gmail quote request into a draft without leaving the inbox.

When the quote is approved, the invoice should not require retyping. Convert the approved quote, add any extra materials or labour, and send the invoice while the job details are fresh.

## Plumber workflow with SMASH

[SMASH for plumbers](/for-plumbers) is built for the ute-and-job-site workflow:

- Save call-out, hourly and after-hours rates.
- Save common fittings and materials with markup.
- Create quotes and invoices by voice.
- Convert approved quotes into invoices.
- Send invoices with payment links.
- Sync invoices to Xero or QuickBooks on Starter and higher plans.

For example, say:

> "Kitchen mixer replacement. Standard call-out, one and a half hours labour, Caroma mixer, two flexi hoses, thread seal, materials markup twenty percent."

SMASH turns that into clear line items instead of making you type from memory after the next job.

## Related plumber resources

Start with these:

- [SMASH for plumbers](/for-plumbers)
- [Invoice template](/invoice-template)
- [Invoice generator](/invoice-generator)
- [Quote generator](/quote-generator)
- [Voice invoicing](/voice-invoicing)
- [Chrome extension](/chrome-extension)
- [Pricing](/pricing)

The Free plan includes 5 invoices per month. Starter is $15/month for unlimited invoices plus accounting sync, which suits plumbers who invoice every week.

## Bottom line

A good plumbing invoice template is clear, itemised and ready for payment. A better plumbing invoicing system remembers your call-out fees, labour rates, materials and customer history so you can send the invoice before you leave the job site.$content$,
  'A practical Australian plumbing invoice template covering licence number, ABN, call-out fees, labour, materials markup, GST, payment terms and plumber-specific examples.',
  '/hero_image.png',
  'Plumber creating a GST-ready invoice from a ute after finishing a job',
  'Plumbing Invoice Template Australia: Licence, GST and Materials',
  'Plumbing invoice template Australia guide for plumbers. See what to include: licence number, ABN, call-out fee, labour, materials markup, GST and payment terms.',
  'plumbing invoice template Australia',
  ARRAY[
    'plumber invoice template',
    'plumbing tax invoice',
    'plumber invoice Australia',
    'plumbing invoice app',
    'call-out fee invoice',
    'plumbing materials markup',
    'GST plumbing invoice',
    'invoice app for plumbers'
  ],
  ARRAY[
    'Australian plumbing invoices should include business details, ABN, licence number, customer details, job address, date, due date, labour, materials and GST if registered.',
    'Call-out fees and first-hour charges should be visible line items to reduce payment disputes.',
    'Plumbers should itemise small fittings and consumables because hidden materials can quietly reduce margin.',
    'SMASH turns plumber invoice templates into a repeatable voice workflow for job-site invoicing.'
  ],
  $faq$[
    {
      "question": "What should a plumbing invoice include in Australia?",
      "answer": "A plumbing invoice should include your business name, ABN, plumbing licence number, customer details, invoice date, job address, call-out fee, labour, itemised materials, total, payment terms and GST if registered."
    },
    {
      "question": "Do plumbers need to include a licence number on invoices?",
      "answer": "Licensed plumbers should include their licence or contractor number on invoices and quotes where required by their state or territory rules. It also gives customers and property managers confidence that the work is properly documented."
    },
    {
      "question": "Should plumbing materials be itemised?",
      "answer": "Yes. Itemising materials gives customers and accounts teams the detail they need to approve the invoice, while helping plumbers recover the cost of fittings, pipe, valves, hoses and consumables."
    },
    {
      "question": "What is the fastest way for plumbers to invoice?",
      "answer": "The fastest workflow is to invoice immediately after the job while the details are fresh. SMASH lets plumbers describe the job by voice and send a GST-ready invoice in under 60 seconds."
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
  'plumber-call-out-fee-invoice',
  'Plumber Call-out Fee Invoice: How to Show Travel, First Hour and Emergency Rates',
  $content$# Plumber Call-out Fee Invoice: How to Show Travel, First Hour and Emergency Rates

A plumber call-out fee should appear as a clear invoice line item, separate from labour and materials unless it explicitly includes the first hour. The invoice should say whether the fee is a standard call-out, emergency call-out, after-hours call-out, diagnostic fee or first-hour minimum, then show any labour, materials and GST underneath.

This matters because call-out fees are one of the easiest plumbing charges for customers to question after the job.

## Why call-out fees need clarity

Plumbers charge call-out fees because attending a job has real cost:

- Travel time.
- Fuel and vehicle cost.
- Diagnosis time.
- Availability for urgent work.
- Lost time between billable jobs.
- Tools, insurance and trade overheads.

The problem is not the fee. The problem is surprise. If the invoice hides the fee inside labour or adds it after the customer expected only parts and hours, payment slows down.

Clear invoices reduce arguments.

## Common call-out fee structures

Most plumbers use one of these structures:

1. Separate call-out fee plus labour from arrival.
2. Call-out fee that includes the first 30 or 60 minutes.
3. First-hour minimum with additional labour after that.
4. Emergency or after-hours call-out fee.
5. Diagnostic fee for inspection or fault-finding.

Any of these can work. The invoice just needs to describe the structure in plain language.

## Example invoice wording

For a standard service call:

> Standard call-out fee - attendance and travel.

> Labour - replace tap washers, 1 hour.

> Washer kit and consumables.

For a first-hour minimum:

> First-hour minimum - includes attendance and first 60 minutes labour.

> Additional labour - 30 minutes.

> Replacement isolation valve and fittings.

For emergency work:

> Emergency after-hours call-out fee.

> After-hours labour - blocked drain, 1.5 hours.

> Drain snake equipment charge.

Use the words your customer would use. "Emergency after-hours call-out" is clearer than "AH attendance".

## Put call-out fees on quotes too

If a customer asks for a quote before work starts, show the call-out fee there as well. That way the eventual invoice matches what they approved.

Use the free [quote generator](/quote-generator) for one-off quotes, or use the [Chrome extension](/chrome-extension) to build a quote from a Gmail enquiry. If the customer approves the quote, convert it into the invoice instead of typing the job again.

Approval matters most for emergency plumbing jobs because the customer is stressed, the job is urgent, and the price can be higher than a normal weekday job.

## GST and call-out fees

If your business is GST-registered, GST usually applies to the call-out fee the same way it applies to your labour. Show GST clearly on the invoice total.

A clean GST invoice should show:

- Call-out fee.
- Labour.
- Materials.
- Subtotal.
- GST.
- Total including GST.

You can build a manual invoice with the free [invoice generator](/invoice-generator), then compare the structure with your usual [invoice template](/invoice-template).

## Avoid vague invoice lines

These lines create payment friction:

- Plumbing work - $380.
- Call-out and parts - $420.
- Emergency job - $550.
- Labour/materials - $660.

These lines are clearer for customers and accounts teams:

- Emergency call-out fee - after-hours.
- Labour - locate and clear blocked kitchen drain, 1.5 hours.
- Equipment charge - drain snake.
- Materials - replacement trap seal and fittings.

The second version does not need a long explanation. It shows the customer what happened.

## Same-day call-out invoicing

Call-out jobs are often quick jobs: blocked drain, leaking tap, burst pipe, failed toilet, hot water fault. If you wait until Friday night to invoice them, you have to reconstruct the charge from memory.

With [voice invoicing](/voice-invoicing), you can say:

> "Emergency call-out for blocked drain at Carlton cafe. Ninety minutes after-hours labour, drain snake equipment charge, customer approved by text."

[SMASH for plumbers](/for-plumbers) turns that into line items and a payment link before the job becomes another note in your phone.

## Pricing and accounting

The Free plan includes 5 invoices per month. Starter is $15/month for unlimited invoices and accounting sync, which is useful if call-out work happens every week and needs to land in Xero or QuickBooks without double-handling. See [pricing](/pricing).

## Bottom line

Call-out fees are collected faster when they are visible, agreed and itemised. Put the fee on the quote, show it clearly on the invoice, and send it while the job is still fresh.$content$,
  'How plumbers should show call-out fees, first-hour minimums, emergency rates, labour, materials and GST on invoices without creating payment disputes.',
  '/hero_image.png',
  'Plumber adding a call-out fee to an invoice after an emergency job',
  'Plumber Call-out Fee Invoice: Examples, GST and Emergency Rates',
  'How to show a plumber call-out fee on an invoice. Includes examples for standard call-outs, first-hour minimums, emergency rates, labour, materials and GST.',
  'plumber call-out fee invoice',
  ARRAY[
    'plumber call out fee',
    'plumbing call-out fee',
    'emergency plumber invoice',
    'after-hours plumber invoice',
    'plumber first hour charge',
    'plumbing invoice app',
    'plumber quote app',
    'GST call-out fee'
  ],
  ARRAY[
    'A plumber call-out fee should be a clear invoice line item unless it explicitly includes the first hour.',
    'Quotes and invoices should use the same call-out wording so customers know what they approved.',
    'Emergency and after-hours rates need especially clear wording because they are more likely to be questioned.',
    'Voice invoicing helps plumbers send call-out invoices while the job, approval and parts are still fresh.'
  ],
  $faq$[
    {
      "question": "How should a plumber show a call-out fee on an invoice?",
      "answer": "Show it as a separate line item such as standard call-out fee, emergency call-out fee or first-hour minimum. Then list labour, materials, GST and the total separately."
    },
    {
      "question": "Does a call-out fee include labour?",
      "answer": "It depends on your pricing. Some plumbers charge a separate attendance fee plus labour, while others include the first 30 or 60 minutes. The invoice should state which structure applies."
    },
    {
      "question": "Should emergency plumbing rates be itemised?",
      "answer": "Yes. Emergency and after-hours work should show the call-out fee, after-hours labour rate, equipment charges and materials clearly so the customer can approve the charge."
    },
    {
      "question": "Can SMASH invoice plumber call-out fees?",
      "answer": "Yes. Save your standard, first-hour and after-hours rates in SMASH, then mention the call-out type by voice and SMASH adds it to the invoice."
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
  'how-to-charge-materials-on-a-plumbing-invoice',
  'How to Charge Materials on a Plumbing Invoice',
  $content$# How to Charge Materials on a Plumbing Invoice

Plumbers should charge materials on an invoice by listing each important part or consumable with quantity, unit price, markup if used, and GST if registered. Avoid one vague "materials" line for everything. Itemised materials give customers and accounts teams the detail they need to approve the invoice and help plumbers recover the cost of fittings, valves, pipe, hoses and consumables.

This guide covers practical material charging for sole trader plumbers, from small service calls to larger quoted jobs.

## Why plumbing materials get missed

Plumbing jobs are full of small parts:

- Washers.
- Flexi hoses.
- Compression fittings.
- Isolation valves.
- Thread seal tape.
- PVC bends.
- Copper pipe.
- Clips, saddles and brackets.
- Mixer taps and cartridges.

The large items usually make it onto the invoice. The small items are the leak. A few dollars per job becomes hundreds per month when you are doing call-outs every day.

## Cost plus markup

Many plumbers charge materials at cost plus markup. The markup is not random profit. It covers:

- Time buying or collecting materials.
- Stock carried in the ute.
- Wastage.
- Storage.
- Supplier changes.
- Warranty risk.
- The admin cost of tracking parts.

Common markups vary by business, supplier and job type. The important point is consistency. If your invoice shows materials clearly, the customer can see what was supplied and your business can see whether the job made money.

For broader setup, see [materials pricing](/materials-pricing).

## What to itemise

Itemise materials that affect the price or explain the job:

- Fixtures and taps.
- Hot water units.
- Tempering valves.
- Pipe lengths.
- Drainage fittings.
- Valves and hoses.
- Traps and waste parts.
- Equipment charges.
- Consumables when they add up.

You do not need to list every screw if it creates clutter. But do not hide $80 of fittings under "miscellaneous" either.

## Example service call

For a toilet repair:

> Call-out fee - standard service call.

> Labour - diagnose and repair running toilet, 1 hour.

> Inlet valve, outlet washer, flexible connector, thread seal.

For a kitchen sink leak:

> Labour - repair leaking trap and mixer connection, 1.25 hours.

> P-trap, two flexi hoses, isolation valve, washers and sealant.

For a hot water job:

> Supply and install hot water unit.

> Tempering valve, copper fittings, pipework, disposal fee.

These lines help the customer understand that the invoice is not just time. It includes the parts that made the job complete.

## GST on plumbing materials

If you are registered for GST, apply GST correctly to materials and labour. Your invoice should show the subtotal, GST amount and total.

Use the free [invoice generator](/invoice-generator) if you need to build a one-off invoice, or check your structure against the free [invoice template](/invoice-template).

If you are not registered for GST, do not charge GST. You can still itemise materials and show a professional total.

## Quote materials before the job

For larger plumbing jobs, quote materials before starting. A quote helps set expectations and gives you a record of what the customer approved.

Use the free [quote generator](/quote-generator), or build quotes directly from Gmail with the [Chrome extension](/chrome-extension). Once approved, convert the quote to an invoice and add any extra materials used on site.

## Voice workflow for plumbers

With [voice invoicing](/voice-invoicing), you do not need to type every fitting at the end of the day.

Say:

> "Burst pipe repair in ceiling. Two hours labour, three metres 15mm copper, four compression fittings, clips, thread seal, materials markup twenty percent."

[SMASH for plumbers](/for-plumbers) turns that into line items while the parts are still in your head. If you use Xero or QuickBooks, Starter and higher plans can sync the invoice to accounting software. See [pricing](/pricing).

## Keep a plumbing materials catalog

The fastest material workflow is to save repeat items:

- Common valves.
- Common pipe sizes.
- Standard fittings.
- Washer kits.
- Flexi hoses.
- Equipment charges.
- Disposal fees.
- Standard material markup.

Then each job becomes a short description instead of a blank invoice. You are not trying to remember the price of a fitting at 8pm; the catalog already knows.

## Bottom line

Charge plumbing materials clearly, consistently and while the job is fresh. Itemise the parts that matter, apply your markup deliberately, show GST correctly, and stop letting small fittings vanish into unpaid admin.$content$,
  'A practical guide to charging plumbing materials on invoices, including itemised line items, cost-plus markup, GST, quotes and voice invoicing examples.',
  '/hero_image.png',
  'Plumber itemising fittings and materials on a phone invoice',
  'How to Charge Materials on a Plumbing Invoice',
  'How to charge materials on a plumbing invoice. Learn itemised parts, cost-plus markup, GST, quote-to-invoice workflow and examples for plumbers.',
  'how to charge materials on a plumbing invoice',
  ARRAY[
    'plumbing materials markup',
    'plumber materials invoice',
    'charge fittings on invoice',
    'plumbing invoice materials',
    'cost plus markup plumbing',
    'plumber invoice app',
    'materials pricing',
    'GST materials invoice'
  ],
  ARRAY[
    'Plumbers should itemise important materials with quantity, price and GST rather than hiding them in a vague materials line.',
    'Materials markup covers buying time, vehicle stock, wastage, storage and warranty risk.',
    'Quotes help customers approve larger material costs before the job starts.',
    'A saved materials catalog plus voice invoicing helps plumbers stop forgetting small fittings and consumables.'
  ],
  $faq$[
    {
      "question": "How should plumbers charge materials on an invoice?",
      "answer": "List important materials as separate line items with quantity, unit price and total. If you use markup, apply it consistently and show GST correctly if registered."
    },
    {
      "question": "Can plumbers add markup to materials?",
      "answer": "Yes. Many plumbers use cost plus markup to cover purchasing time, stock carried in the vehicle, wastage, storage and warranty risk. The markup should be consistent and reflected in your pricing."
    },
    {
      "question": "Should small fittings be included on plumbing invoices?",
      "answer": "Yes, when they affect the price. Small fittings, hoses, washers and consumables can add up quickly, so they should not disappear into a vague labour charge."
    },
    {
      "question": "Can SMASH remember plumbing materials?",
      "answer": "Yes. SMASH lets plumbers save common materials and pricing, then add them to invoices from a voice description."
    }
  ]$faq$::jsonb,
  'SMASH Team',
  'SMASH builds voice-to-invoice tools for self-employed service workers who want to send invoices before admin becomes a night-time job.',
  7,
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
