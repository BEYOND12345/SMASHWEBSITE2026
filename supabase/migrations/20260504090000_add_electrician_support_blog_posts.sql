/*
  # Add electrician support blog posts

  Adds three electrician-cluster articles to the blog_posts source of truth:
  - electrician invoice template Australia
  - electrician call-out fee invoice
  - how to invoice switchboard upgrades

  These support /for-electricians with practical SEO/AEO content and internal links
  to electrician, template, generator, quote, materials, voice, Chrome extension and pricing pages.
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
  'electrician-invoice-template-australia',
  'Electrician Invoice Template Australia: Licence, Labour, Materials and GST',
  $content$# Electrician Invoice Template Australia: Licence, Labour, Materials and GST

An electrician invoice in Australia should include your business name, ABN, electrical contractor licence number, customer details, job address, invoice date, payment due date, labour, itemised materials, GST if registered, and a clear total. The best electrician invoice template separates call-out fees, fault-finding, labour and parts so customers can see exactly what they are paying for.

This guide gives electricians a practical invoice structure, then shows how to turn that structure into a faster workflow with [SMASH for electricians](/for-electricians), the free [invoice template](/invoice-template), and the free [invoice generator](/invoice-generator).

## The basic electrician invoice format

Use this structure for residential, commercial and maintenance electrical jobs:

1. Your business name, ABN, electrical contractor licence number, email and phone number.
2. Customer name, billing address and job address if different.
3. Invoice number, invoice date and payment due date.
4. Job title, such as "fault-finding and repair" or "smoke alarm installation".
5. Call-out fee, first-hour minimum or diagnostic fee if you charge one.
6. Labour line items with hours, rate and total.
7. Materials line items with quantity, unit price and markup if applicable.
8. GST shown separately if your business is registered.
9. Payment link or payment instructions.

The invoice does not need to be long. It needs to make approval obvious.

## Example electrical invoice line items

For a fault-finding job:

> Standard call-out fee - attendance and diagnosis.

> Labour - locate intermittent power fault, 1.5 hours.

> Replacement breaker, junction box and consumables.

For a smoke alarm install:

> Supply and install six photoelectric smoke alarms.

> Labour - installation, test and compliance check.

For a switchboard upgrade:

> Switchboard upgrade - 20-circuit board, RCDs, breakers and labelling.

> Labour - remove old board, install and test replacement board.

Clear line items help customers and property managers approve the invoice without asking what "electrical work" means.

## Materials electricians should itemise

Electrical jobs often lose margin through small parts. Save these as repeatable materials:

- TPS cable by metre.
- Conduit and fittings.
- Clips, saddles and junction boxes.
- GPOs, switches and plates.
- RCDs and circuit breakers.
- Smoke alarms.
- Downlights and drivers.
- Consumables and testing charges.

You do not need to list every screw, but you should not hide $80 of parts under a vague labour line. For broader setup, see [materials pricing](/materials-pricing).

## GST and licence notes

If your business is registered for GST, your invoice should show subtotal, GST and total clearly. If you are not registered, do not add GST.

Licensed electrical work should also be documented clearly. Licence and contractor number requirements can vary by state, so keep your invoice template aligned with your local rules.

The free [invoice generator](/invoice-generator) helps you create a manual invoice. SMASH goes further by remembering customers, rates, common materials and payment terms.

## Quote before invoice

Many electrical jobs start as a quote request: a switchboard upgrade, fit-off, downlight install, smoke alarm package or fault repair. Use the free [quote generator](/quote-generator), or use the [Chrome extension](/chrome-extension) to turn a Gmail enquiry into a quote without leaving the inbox.

When the quote is approved, convert it into the invoice and add any changes from the job site. That keeps the final invoice tied to what the customer accepted.

## Electrician workflow with SMASH

[SMASH for electricians](/for-electricians) is built for the van and job-site workflow:

- Save call-out, hourly, commercial and after-hours rates.
- Save common electrical materials with your own prices or markup.
- Create quotes and invoices by voice.
- Convert approved quotes into invoices.
- Send invoices with payment links.
- Sync invoices to Xero or QuickBooks on Starter and higher plans.

For example, say:

> "Fault-finding at Brunswick cafe. Standard call-out, one and a half hours labour, replace breaker and junction box, customer approved repair on site."

SMASH turns that into clear invoice lines instead of making you type from memory after the next job.

## Related electrician resources

Start with these:

- [SMASH for electricians](/for-electricians)
- [Invoice template](/invoice-template)
- [Invoice generator](/invoice-generator)
- [Quote generator](/quote-generator)
- [Voice invoicing](/voice-invoicing)
- [Chrome extension](/chrome-extension)
- [Pricing](/pricing)

The Free plan includes 5 invoices per month. Starter is $15/month for unlimited invoices plus accounting sync, which suits electricians who invoice every week.

## Bottom line

A good electrician invoice template is clear, itemised and ready for payment. A better electrical invoicing system remembers your call-out fees, labour rates, materials and customer history so you can send the invoice before you leave the job site.$content$,
  'A practical Australian electrician invoice template covering licence number, ABN, call-out fees, labour, electrical materials, GST, payment terms and job-specific examples.',
  '/hero_image.png',
  'Electrician creating a GST-ready invoice from the van after finishing a job',
  'Electrician Invoice Template Australia: Licence, GST and Materials',
  'Electrician invoice template Australia guide. See what to include: licence number, ABN, call-out fee, labour, materials, GST and payment terms.',
  'electrician invoice template Australia',
  ARRAY[
    'electrical invoice template',
    'electrician tax invoice',
    'electrician invoice Australia',
    'electrical contractor invoice',
    'electrician invoice app',
    'electrical materials invoice',
    'GST electrician invoice',
    'invoice app for electricians'
  ],
  ARRAY[
    'Australian electrician invoices should include business details, ABN, licence number, customer details, job address, date, due date, labour, materials and GST if registered.',
    'Call-out fees, fault-finding and first-hour charges should be visible line items to reduce payment disputes.',
    'Electricians should itemise important parts because cable, conduit, breakers, RCDs and GPOs can quietly reduce margin.',
    'SMASH turns electrician invoice templates into a repeatable voice workflow for job-site invoicing.'
  ],
  $faq$[
    {
      "question": "What should an electrician invoice include in Australia?",
      "answer": "An electrician invoice should include your business name, ABN, electrical contractor licence number, customer details, invoice date, job address, call-out fee if used, labour, itemised materials, total, payment terms and GST if registered."
    },
    {
      "question": "Do electricians need to include a licence number on invoices?",
      "answer": "Licensed electricians should include their licence or contractor number where required by state or territory rules. It also helps customers, property managers and builders confirm the work is properly documented."
    },
    {
      "question": "Should electrical materials be itemised?",
      "answer": "Yes. Itemising important materials helps customers approve the invoice and helps electricians recover the cost of cable, conduit, breakers, RCDs, GPOs, smoke alarms and consumables."
    },
    {
      "question": "What is the fastest way for electricians to invoice?",
      "answer": "The fastest workflow is to invoice immediately after the job while the details are fresh. SMASH lets electricians describe the job by voice and send a GST-ready invoice in under 60 seconds."
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
  'electrician-call-out-fee-invoice',
  'Electrician Call-out Fee Invoice: Standard, Emergency and After-hours Rates',
  $content$# Electrician Call-out Fee Invoice: Standard, Emergency and After-hours Rates

An electrician call-out fee should appear as a clear invoice line item, separate from labour and materials unless it explicitly includes the first hour. The invoice should say whether the fee is a standard call-out, emergency call-out, after-hours call-out, diagnostic fee or first-hour minimum, then show labour, parts, GST and the total underneath.

This matters because call-out fees are one of the easiest electrical charges for customers to question after the power is back on.

## Why call-out fees need clarity

Electricians charge call-out fees because attending a job has real cost:

- Travel time.
- Fuel and vehicle cost.
- Diagnosis time.
- Availability for urgent faults.
- Lost time between billable jobs.
- Tools, insurance, licence and testing overheads.

The problem is not the fee. The problem is surprise. If the invoice hides the call-out inside labour or adds it after the customer expected only parts and hours, payment slows down.

Clear wording reduces arguments.

## Common electrician call-out structures

Most electricians use one of these structures:

1. Separate call-out fee plus labour from arrival.
2. Call-out fee that includes the first 30 or 60 minutes.
3. First-hour minimum with additional labour after that.
4. Emergency or after-hours call-out fee.
5. Diagnostic or fault-finding fee.

Any structure can work if the customer can understand it.

## Example invoice wording

For a standard service call:

> Standard call-out fee - attendance and diagnosis.

> Labour - replace faulty GPO, 1 hour.

> Replacement double GPO and consumables.

For a first-hour minimum:

> First-hour minimum - includes attendance and first 60 minutes labour.

> Additional labour - 30 minutes.

> Replacement circuit breaker.

For emergency work:

> Emergency after-hours call-out fee.

> After-hours labour - fault-finding and repair, 2 hours.

> Replacement RCD and testing.

Use words the customer understands. "Emergency after-hours call-out" is clearer than "AH attendance".

## Put call-out fees on quotes too

If the customer asks for a quote before work starts, show the call-out fee there as well. That way the invoice matches what they approved.

Use the free [quote generator](/quote-generator), or use the [Chrome extension](/chrome-extension) to build a quote from a Gmail enquiry. If the customer approves the quote, convert it into the invoice instead of typing the job again.

Approval matters most for emergency electrical jobs because the customer is stressed, the job is urgent, and the price can be higher than a weekday service call.

## GST and call-out fees

If your business is GST-registered, GST usually applies to the call-out fee the same way it applies to labour. Show GST clearly on the invoice total.

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

- Electrical work - $380.
- Call-out and parts - $420.
- Emergency job - $550.
- Labour/materials - $660.

These lines are clearer:

- Emergency call-out fee - after-hours.
- Labour - locate and repair switchboard fault, 2 hours.
- Materials - replacement RCD and breaker.
- Testing and compliance note.

The second version shows why the customer is paying.

## Same-day call-out invoicing

Call-out jobs are often quick jobs: tripped circuits, failed GPOs, smoke alarm faults, hot water power faults or switchboard issues. If you wait until Friday night to invoice them, you have to reconstruct the charge from memory.

With [voice invoicing](/voice-invoicing), you can say:

> "Emergency call-out for power fault at Carlton cafe. Two hours after-hours labour, replaced RCD, customer approved repair by text."

[SMASH for electricians](/for-electricians) turns that into line items and a payment link before the job becomes another note in your phone.

## Pricing and accounting

The Free plan includes 5 invoices per month. Starter is $15/month for unlimited invoices and accounting sync, which is useful if call-out work happens every week and needs to land in Xero or QuickBooks without double-handling. See [pricing](/pricing).

## Bottom line

Electrician call-out fees are collected faster when they are visible, agreed and itemised. Put the fee on the quote, show it clearly on the invoice, and send it while the job is still fresh.$content$,
  'How electricians should show call-out fees, first-hour minimums, emergency rates, labour, materials and GST on invoices without creating payment disputes.',
  '/hero_image.png',
  'Electrician adding a call-out fee to an invoice after an emergency fault repair',
  'Electrician Call-out Fee Invoice: Examples, GST and Emergency Rates',
  'How to show an electrician call-out fee on an invoice. Includes examples for standard call-outs, first-hour minimums, emergency rates, labour, parts and GST.',
  'electrician call-out fee invoice',
  ARRAY[
    'electrician call out fee',
    'electrical call-out fee',
    'emergency electrician invoice',
    'after-hours electrician invoice',
    'electrician first hour charge',
    'electrical invoice app',
    'electrician quote app',
    'GST call-out fee'
  ],
  ARRAY[
    'An electrician call-out fee should be a clear invoice line item unless it explicitly includes the first hour.',
    'Quotes and invoices should use the same call-out wording so customers know what they approved.',
    'Emergency and after-hours rates need especially clear wording because they are more likely to be questioned.',
    'Voice invoicing helps electricians send call-out invoices while the job, approval and parts are still fresh.'
  ],
  $faq$[
    {
      "question": "How should an electrician show a call-out fee on an invoice?",
      "answer": "Show it as a separate line item such as standard call-out fee, emergency call-out fee or first-hour minimum. Then list labour, materials, GST and the total separately."
    },
    {
      "question": "Does an electrician call-out fee include labour?",
      "answer": "It depends on your pricing. Some electricians charge a separate attendance fee plus labour, while others include the first 30 or 60 minutes. The invoice should state which structure applies."
    },
    {
      "question": "Should emergency electrical rates be itemised?",
      "answer": "Yes. Emergency and after-hours work should show the call-out fee, after-hours labour rate, materials and testing notes clearly so the customer can approve the charge."
    },
    {
      "question": "Can SMASH invoice electrician call-out fees?",
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
  'how-to-invoice-switchboard-upgrades',
  'How to Invoice Switchboard Upgrades',
  $content$# How to Invoice Switchboard Upgrades

To invoice a switchboard upgrade, list the approved job scope, labour, switchboard, RCDs, circuit breakers, cabling, labels, testing, compliance notes, GST if registered, and the payment due date. A switchboard invoice should be more detailed than a small service call because the customer is approving a higher-value safety job and may need the record for property, strata or insurance purposes.

This guide covers a practical switchboard upgrade invoice structure for sole trader electricians and small electrical businesses.

## Start from the approved quote

Most switchboard upgrades should start with a written quote. The invoice should match that quote unless the customer approved extra work.

Keep these details together:

- Site address.
- Existing issue or reason for upgrade.
- Approved scope.
- Labour estimate or fixed labour component.
- Board, RCDs, breakers and materials.
- Testing or certificate notes.
- Any extra work approved on site.

Use the free [quote generator](/quote-generator), or build quotes directly from Gmail with the [Chrome extension](/chrome-extension). Once approved, convert the quote to an invoice and add any site changes.

## What to include on the invoice

A switchboard upgrade invoice should include:

1. Your business name, ABN and electrical contractor licence number.
2. Customer and site details.
3. Invoice number, date and due date.
4. The words "switchboard upgrade" in the job title.
5. Labour line items.
6. Materials line items.
7. Testing, labelling or certificate notes.
8. GST if registered.
9. Payment link or payment instructions.

This level of detail helps the customer, property manager or builder understand what was supplied and installed.

## Example switchboard line items

For a standard residential upgrade:

> Labour - remove existing switchboard, install and test replacement board.

> 20-circuit switchboard enclosure.

> RCDs, circuit breakers, busbar, labels and consumables.

For extra site work:

> Additional labour - replace damaged neutral link and tidy unsafe cabling, approved on site.

> Additional conduit and cable clips.

For completion notes:

> Testing completed and circuits labelled.

The invoice does not need to read like a technical report. It should show the customer what changed and why it cost what it cost.

## Materials and markup

Switchboard upgrades can include many parts:

- Board enclosure.
- RCDs.
- Circuit breakers.
- Busbar.
- Cable and conduit.
- Labels.
- Clips, saddles and junction boxes.
- Consumables.

If you charge materials at cost plus markup, be consistent. The markup covers purchasing time, stock carried in the van, supplier changes, warranty risk and admin. For broader setup, see [materials pricing](/materials-pricing).

## GST and payment terms

If your business is GST-registered, show GST clearly with subtotal, GST amount and total including GST. If you are not registered, do not charge GST.

For payment terms, use whatever was agreed on the quote. Same-day payment or 7 days may suit residential work. Builders, property managers and strata clients may expect different terms. The key is to send the invoice as soon as the upgrade is complete so the payment clock starts immediately.

The free [invoice generator](/invoice-generator) can help you build a one-off invoice, and the free [invoice template](/invoice-template) gives you a structure to compare against.

## Voice workflow for switchboards

With [voice invoicing](/voice-invoicing), you do not need to type the whole switchboard invoice at night.

Say:

> "Switchboard upgrade at 15 Smith Street. Convert approved quote to invoice, add one extra RCD and thirty minutes labour for damaged neutral link, testing complete."

[SMASH for electricians](/for-electricians) turns that into itemised line items while the job is still fresh. If you use Xero or QuickBooks, Starter and higher plans can sync the invoice to accounting software. See [pricing](/pricing).

## Avoid vague upgrade invoices

Avoid:

> Electrical upgrade - $2,400.

Use:

> Switchboard upgrade - labour, 20-circuit board, RCDs, breakers, labelling and testing.

The clearer version is easier to approve and easier to defend if a customer asks questions later.

## Bottom line

Switchboard upgrade invoices should be approval-ready: match the quote, itemise labour and major materials, show GST correctly, include testing notes, and send the invoice before the details blur into the next job.$content$,
  'A practical guide to invoicing switchboard upgrades with approved quote details, labour, boards, RCDs, breakers, materials, testing notes, GST and payment terms.',
  '/hero_image.png',
  'Electrician itemising a switchboard upgrade invoice from the van',
  'How to Invoice Switchboard Upgrades: Labour, RCDs, GST and Quotes',
  'How to invoice switchboard upgrades with labour, boards, RCDs, breakers, testing notes, quote approval, GST and electrician invoice examples.',
  'how to invoice switchboard upgrades',
  ARRAY[
    'switchboard upgrade invoice',
    'electrical switchboard invoice',
    'electrician materials invoice',
    'RCD invoice',
    'electrical contractor invoice',
    'electrician quote to invoice',
    'materials pricing',
    'GST electrical invoice'
  ],
  ARRAY[
    'Switchboard upgrade invoices should match the approved quote unless extra work was approved on site.',
    'Itemise labour, board enclosure, RCDs, circuit breakers, cable, labels, testing notes and GST where applicable.',
    'Materials markup should be consistent and visible enough for customers to understand what was supplied.',
    'A saved materials catalog plus voice invoicing helps electricians send switchboard invoices before leaving the site.'
  ],
  $faq$[
    {
      "question": "What should a switchboard upgrade invoice include?",
      "answer": "Include business details, ABN, licence number, customer and site details, invoice date, due date, approved scope, labour, board, RCDs, breakers, materials, testing notes, total and GST if registered."
    },
    {
      "question": "Should a switchboard upgrade invoice match the quote?",
      "answer": "Yes. The invoice should match the approved quote unless the customer approved extra work. Any changes should be listed clearly on the invoice."
    },
    {
      "question": "Should RCDs and breakers be itemised?",
      "answer": "Yes. Itemising major components like RCDs, circuit breakers and the board enclosure helps customers understand the cost and keeps material recovery visible."
    },
    {
      "question": "Can SMASH convert a switchboard quote into an invoice?",
      "answer": "Yes. Create the quote in SMASH, record approval, then convert it into an invoice and add any site changes by voice."
    }
  ]$faq$::jsonb,
  'SMASH Team',
  'SMASH builds voice-to-invoice tools for self-employed service workers who want to send invoices before admin becomes a night-time job.',
  8,
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
