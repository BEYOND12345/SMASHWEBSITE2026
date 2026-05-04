/*
  # Add mobile mechanic, handyman and gardener support blog posts

  Adds six ICP support articles to the blog_posts source of truth:
  - mobile mechanic parts markup invoice
  - mobile mechanic call-out fee invoice
  - handyman invoice template Australia
  - handyman materials and call-out fees
  - gardening invoice template Australia
  - lawn mowing repeat invoices

  These support /for-mobile-mechanics, /for-handymen and /for-gardeners with
  practical SEO/AEO content and internal links to ICP pages, free tools, voice
  invoicing, Chrome extension, materials pricing and pricing.
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
  'mobile-mechanic-parts-markup-invoice',
  'Mobile Mechanic Parts Markup Invoices: Labour, Parts and Fluids',
  $content$# Mobile Mechanic Parts Markup Invoices: Labour, Parts and Fluids

A mobile mechanic invoice should separate labour, diagnostics, parts, fluids, consumables and GST so the customer can see what was supplied and what was done. If you charge parts markup, show the supplied parts clearly and apply the markup consistently rather than hiding it inside labour.

This guide is for self-employed mobile mechanics who invoice from a driveway, roadside call-out or fleet yard. It links the manual structure to [SMASH for mobile mechanics](/for-mobile-mechanics), [materials pricing](/materials-pricing), the free [invoice generator](/invoice-generator), and [voice invoicing](/voice-invoicing).

## What to include on a mobile mechanic parts invoice

Use this basic structure:

1. Customer name and vehicle details.
2. Job address or roadside location.
3. Diagnostic, call-out or inspection fee if used.
4. Labour line items with hours and rate.
5. Parts supplied, quantity, unit price and markup if applicable.
6. Fluids and consumables such as oil, coolant, brake cleaner or shop supplies.
7. GST if your business is registered.
8. Payment terms or a payment link.

For example:

> Front brake service - labour, front brake pads, front rotors, brake cleaner and parts markup.

That is clearer than a single line saying "brake repair". It also protects margin because the supplied parts are visible.

## Common parts mobile mechanics should save

Most mobile mechanics should keep a saved pricing catalog for:

- Engine oil by litre or service pack.
- Oil, air, cabin and fuel filters.
- Brake pads and rotors.
- Batteries.
- Spark plugs and ignition coils.
- Coolant, brake fluid and transmission fluid.
- Belts, wiper blades and bulbs.
- Consumables, disposal and environmental fees.

If your costs change often, update the catalog as suppliers change pricing. The goal is not to memorise every part. The goal is to stop guessing when you are standing beside the vehicle.

## How to show parts markup

Parts markup covers sourcing time, warranty risk, carrying stock, failed trips, supplier runs and vehicle stock. Customers usually understand parts pricing when the invoice is clear.

You can show markup in two common ways:

- List the retail price you charge for each supplied part.
- Note that supplied parts include handling or markup in your terms.

The important thing is consistency. If one job uses cost plus 15 percent and another uses random rounded prices, your records become harder to trust.

For deeper setup, use [materials pricing](/materials-pricing). For one-off manual invoices, the free [invoice generator](/invoice-generator) works. SMASH goes further by remembering parts, rates and markup rules.

## Voice example

With [voice invoicing](/voice-invoicing), a mobile mechanic can say:

> "Front pads and rotors on the Mazda 3. Two hours labour, supplied pads and two rotors at cost plus 15 percent, brake cleaner, customer approved before fitting."

SMASH turns that into an itemised invoice with labour, parts, markup, consumables, GST and a payment link.

## Quote before fitting larger parts

For expensive parts, quote before fitting. Use the free [quote generator](/quote-generator), or use the [Chrome extension](/chrome-extension) to turn a Gmail request into a quote. Once approved, convert the quote into an invoice so the final bill matches what the customer accepted.

## Mobile mechanic workflow with SMASH

[SMASH for mobile mechanics](/for-mobile-mechanics) is built for driveway and van-based work:

- Save labour, diagnostic, call-out and roadside rates.
- Save common parts, fluids and markup rules.
- Create quotes and invoices by voice.
- Record vehicle notes and customer approval.
- Send payment links from the phone.
- Sync invoices to Xero or QuickBooks on Starter and higher plans.

The Free plan includes 5 invoices per month. Starter is $15/month for unlimited invoices plus accounting sync.

## Bottom line

A good mobile mechanic invoice makes parts, labour and markup easy to approve. A faster system remembers the parts catalog and lets you invoice before the vehicle leaves the driveway.$content$,
  'How mobile mechanics should itemise labour, parts, fluids, markup, GST and payment terms without losing margin on supplied parts.',
  '/hero_image.png',
  'Mobile mechanic itemising parts and labour from a driveway',
  'Mobile Mechanic Parts Markup Invoice Guide',
  'Mobile mechanic parts markup invoice guide covering labour, parts, fluids, consumables, GST, payment terms and voice invoicing examples.',
  'mobile mechanic parts markup invoice',
  ARRAY[
    'mobile mechanic invoice',
    'mechanic parts markup',
    'mobile mechanic parts invoice',
    'auto repair invoice app',
    'mechanic invoice template',
    'parts and labour invoice',
    'mechanic materials pricing'
  ],
  ARRAY[
    'Mobile mechanic invoices should separate labour, diagnostics, parts, fluids, consumables and GST.',
    'Parts markup should be applied consistently so margin is not lost or guessed after the job.',
    'Saved parts catalogs help mechanics invoice from the driveway without typing every item.',
    'SMASH turns mechanic job descriptions into itemised invoices by voice in under 60 seconds.'
  ],
  $faq$[
    {
      "question": "Should mobile mechanics itemise parts?",
      "answer": "Yes. Itemising parts helps customers understand what was supplied and helps mechanics recover the cost of parts, fluids, consumables and markup."
    },
    {
      "question": "Can mobile mechanics charge parts markup?",
      "answer": "Yes. Parts markup is common because it covers sourcing time, warranty risk, stock handling and supplier trips. Apply it consistently and keep the invoice clear."
    },
    {
      "question": "What parts should be saved in a mechanic pricing catalog?",
      "answer": "Common saved items include oil, filters, brake pads, rotors, batteries, spark plugs, ignition coils, fluids, bulbs, wiper blades and consumables."
    },
    {
      "question": "What is the fastest way to invoice mobile mechanic parts?",
      "answer": "The fastest workflow is to save common parts and markup rules, then describe the repair by voice. SMASH builds the labour, parts, GST and payment link in under 60 seconds."
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
  'mobile-mechanic-call-out-fee-invoice',
  'Mobile Mechanic Call-out Fee Invoices: Roadside and After-hours',
  $content$# Mobile Mechanic Call-out Fee Invoices: Roadside and After-hours

A mobile mechanic call-out fee invoice should show the attendance fee separately from labour, parts and diagnostics. This is especially important for roadside, after-hours and urgent jobs where the customer may not understand that travel, setup and availability are part of the price.

This guide explains how to structure call-out fees, then shows how to make them repeatable with [SMASH for mobile mechanics](/for-mobile-mechanics), [voice invoicing](/voice-invoicing), the free [invoice template](/invoice-template), and [pricing](/pricing).

## Common mobile mechanic call-out fees

Mobile mechanics often use more than one attendance fee:

- Standard call-out fee.
- Diagnostic or inspection fee.
- Roadside breakdown fee.
- After-hours or weekend call-out fee.
- Fleet yard attendance fee.
- Minimum first-hour charge.

If the call-out includes the first 30 or 60 minutes, say that clearly. If labour is charged separately, show the call-out and labour as separate line items.

## Example call-out invoice line items

For a standard driveway job:

> Standard call-out fee - mobile attendance and setup.

> Labour - diagnose no-start issue, 1 hour.

> Replacement battery and terminal clean.

For a roadside breakdown:

> Roadside call-out fee - urgent attendance.

> Alternator and battery test.

> Supply and fit replacement battery.

For an after-hours job:

> After-hours call-out fee.

> Labour - inspect overheating issue, 1.5 hours.

> Coolant top-up and pressure test.

Clear labels reduce payment disputes because the customer sees the difference between showing up, diagnosing the issue and supplying parts.

## Quote the fee before arrival

If a customer calls from the roadside, confirm the call-out or diagnostic fee before you leave. For quote requests by email, use the [Chrome extension](/chrome-extension) to turn the message into a quote. For manual quoting, use the free [quote generator](/quote-generator).

The invoice should then match the accepted quote, with any approved extra parts or labour added.

## Voice example

After the job, say:

> "Roadside battery replacement for fleet customer on the M7. Roadside call-out rate, jump start, alternator test, supplied and fitted Century 70 amp hour battery, 30-day fleet terms."

SMASH creates the invoice with call-out fee, test, battery, labour, payment terms and GST.

## Keep rates consistent

A saved pricing catalog helps you avoid awkward decisions at the vehicle. Save:

- Standard call-out fee.
- Roadside call-out fee.
- After-hours fee.
- Diagnostic scan fee.
- First-hour minimum.
- Fleet terms and rates.

Then you only need to say which rate applies. SMASH handles the line item.

## Related tools

Useful resources:

- [SMASH for mobile mechanics](/for-mobile-mechanics)
- [Voice invoicing](/voice-invoicing)
- [Invoice template](/invoice-template)
- [Invoice generator](/invoice-generator)
- [Quote generator](/quote-generator)
- [Pricing](/pricing)

## Bottom line

Call-out fees are easier to collect when they are clearly approved and clearly itemised. Save your rates once, then invoice from the driveway before the next call-out starts.$content$,
  'How mobile mechanics can invoice standard, roadside and after-hours call-out fees with labour, parts, GST and payment terms clearly separated.',
  '/hero_image.png',
  'Mobile mechanic sending a roadside call-out invoice from a phone',
  'Mobile Mechanic Call-out Fee Invoice Guide',
  'Mobile mechanic call-out fee invoice guide covering standard, roadside, after-hours and diagnostic charges with examples and voice invoicing.',
  'mobile mechanic call-out fee invoice',
  ARRAY[
    'roadside mechanic invoice',
    'mobile mechanic call out fee',
    'mechanic diagnostic fee invoice',
    'after hours mechanic invoice',
    'mobile mechanic invoice app',
    'mechanic quote app'
  ],
  ARRAY[
    'Call-out fees should be shown separately from labour, parts and diagnostics.',
    'Roadside and after-hours jobs need clear labels so customers understand the higher attendance fee.',
    'Saved rates reduce disputes and make repeat invoicing faster.',
    'SMASH lets mobile mechanics add call-out fees by voice before they leave the job.'
  ],
  $faq$[
    {
      "question": "Should a mobile mechanic call-out fee be a separate line item?",
      "answer": "Yes. A separate line item makes it clear that attendance, travel and setup are different from labour and parts."
    },
    {
      "question": "Can I charge different rates for roadside and after-hours jobs?",
      "answer": "Yes. Save separate standard, roadside and after-hours rates so the correct fee is used on each invoice."
    },
    {
      "question": "Should I quote a call-out fee before arrival?",
      "answer": "Yes. Confirm the call-out or diagnostic fee before travelling, then make sure the invoice matches the approved fee."
    },
    {
      "question": "Can SMASH add call-out fees automatically?",
      "answer": "Yes. Save call-out fees in your pricing catalog, mention the fee by voice, and SMASH adds it to the invoice."
    }
  ]$faq$::jsonb,
  'SMASH Team',
  'SMASH builds voice-to-invoice tools for self-employed service workers who want to send invoices before admin becomes a night-time job.',
  6,
  true,
  now(),
  now(),
  now()
),
(
  'handyman-invoice-template-australia',
  'Handyman Invoice Template Australia: Odd Jobs, Labour and Materials',
  $content$# Handyman Invoice Template Australia: Odd Jobs, Labour and Materials

A handyman invoice in Australia should include your business details, customer details, job address, invoice date, description of work, labour, materials, call-out fees, GST if registered, payment terms and a clear total. Because handyman work varies so much, the best template is flexible enough for small repairs, assembly, maintenance, property manager work and fixed-price jobs.

This guide gives handymen a practical invoice structure, then shows how to turn it into a faster workflow with [SMASH for handymen](/for-handymen), the free [invoice template](/invoice-template), the free [invoice generator](/invoice-generator), and [voice invoicing](/voice-invoicing).

## The basic handyman invoice format

Use this structure for most jobs:

1. Your business name, ABN if you have one, email and phone number.
2. Customer name and billing details.
3. Job address if different.
4. Invoice number, invoice date and due date.
5. Short job title such as "Fence gate repair" or "Apartment maintenance".
6. Labour line items with hours or fixed price.
7. Materials, hardware, consumables or disposal fees.
8. Call-out or minimum job fee if used.
9. GST if your business is GST-registered.
10. Payment link or payment instructions.

For a small job, keep it short:

> Door hardware repair - labour, replacement latch and call-out fee.

For property maintenance, include enough detail for approval:

> Apartment maintenance - patch plaster, replace door stop, repair flyscreen and remove waste.

## Common handyman invoice line items

Save common services and materials:

- General maintenance labour.
- Flat-pack assembly.
- Door and window repairs.
- Flyscreen repair.
- Fence and gate repair.
- Picture hanging.
- Plaster patching.
- Silicone and sealant.
- Hinges, latches, screws and fixings.
- Tip or disposal fees.

The goal is to stop small jobs from becoming vague invoices. Clear line items help customers pay quickly and help property managers approve work without questions.

## Hourly, fixed-price and call-out jobs

Handymen often use different pricing methods in the same week. SMASH supports hourly rates, fixed-price services and call-out fees. Say the pricing method by voice and review before sending.

Example:

> "Fence gate repair at 14 Palmer Street. Replaced three palings, rehung the gate, fitted new latch. One hour labour plus materials."

SMASH turns that into labour, materials, GST and payment link line items.

## Quote before work starts

For larger jobs or property manager requests, send a quote first. Use the free [quote generator](/quote-generator), or use the [Chrome extension](/chrome-extension) to create a quote from a Gmail enquiry without retyping the request.

Once the quote is approved, convert it to an invoice and add any approved changes from the job site.

## Handyman workflow with SMASH

[SMASH for handymen](/for-handymen) is built for varied job-site work:

- Create invoices by voice in under 60 seconds.
- Save hourly, fixed and call-out rates.
- Save common materials and hardware.
- Send payment links.
- Create quotes from Gmail.
- Sync invoices to Xero or QuickBooks on Starter and higher plans.

The Free plan includes 5 invoices per month. Starter is $15/month for unlimited invoices and accounting sync.

## Bottom line

A good handyman invoice template is flexible, specific and easy to pay. A better workflow remembers your rates, materials and customers so every odd job can be invoiced before you leave the driveway.$content$,
  'A practical Australian handyman invoice template covering ABN, job address, labour, materials, call-out fees, GST, payment terms and examples.',
  '/hero_image.png',
  'Handyman creating an invoice for repairs and materials from a phone',
  'Handyman Invoice Template Australia',
  'Handyman invoice template Australia guide covering labour, materials, call-out fees, GST, payment terms and voice invoicing examples.',
  'handyman invoice template Australia',
  ARRAY[
    'handyman invoice app',
    'handyman tax invoice',
    'odd jobs invoice',
    'maintenance invoice template',
    'handyman materials invoice',
    'handyman quote app',
    'invoice app for handymen'
  ],
  ARRAY[
    'Handyman invoices should include customer details, job address, labour, materials, call-out fees and GST if registered.',
    'Varied handyman work needs flexible invoices that can handle hourly, fixed-price and small maintenance jobs.',
    'Materials and disposal fees should be visible so small costs do not disappear.',
    'SMASH turns handyman invoice templates into a voice workflow for site-based invoicing.'
  ],
  $faq$[
    {
      "question": "What should a handyman invoice include in Australia?",
      "answer": "A handyman invoice should include business details, customer details, job address, invoice date, due date, work description, labour, materials, call-out fees, total, payment terms and GST if registered."
    },
    {
      "question": "Can a handyman invoice small odd jobs?",
      "answer": "Yes. Small jobs should still be invoiced clearly so there is a record of the work, payment terms and materials supplied."
    },
    {
      "question": "Should handyman materials be separate line items?",
      "answer": "Yes. Materials such as hinges, latches, flyscreen mesh, screws, sealant and disposal fees should be visible where they affect the job price."
    },
    {
      "question": "What is the fastest way for handymen to invoice?",
      "answer": "The fastest workflow is to describe the job by voice immediately after finishing. SMASH builds the invoice, applies saved rates and sends the payment link in under 60 seconds."
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
  'handyman-materials-and-call-out-fees',
  'Handyman Materials and Call-out Fees: How to Invoice Small Jobs',
  $content$# Handyman Materials and Call-out Fees: How to Invoice Small Jobs

Handymen should invoice call-out fees, minimum charges, small hardware, consumables and disposal costs as clear line items. Small jobs are where admin often feels bigger than the invoice, but skipped materials and vague fees quietly reduce profit.

This guide explains how to charge small-job costs clearly and links to [SMASH for handymen](/for-handymen), [materials pricing](/materials-pricing), [voice invoicing](/voice-invoicing), and the free [invoice generator](/invoice-generator).

## Why small materials matter

One tube of silicone, a latch and a handful of screws might not feel worth itemising. But across a week of odd jobs, those small costs add up.

Common materials to track:

- Hinges, latches and door stops.
- Flyscreen mesh and spline.
- Screws, anchors, brackets and fixings.
- Sealant, silicone, filler and adhesive.
- Paint touch-up materials.
- Cleaning and consumables.
- Tip, disposal or green waste fees.

You do not need to list every screw individually. You do need a fair way to recover recurring supply costs.

## Call-out fees and minimum charges

A call-out fee helps cover travel, setup, loading tools, fuel and time between jobs. Show it separately when it applies.

Common labels:

- Standard call-out fee.
- Minimum job fee.
- Travel fee.
- First-hour minimum.
- Urgent or same-day fee.

If the first hour is included, say so. If labour is separate, show both.

## Example invoice lines

For a door repair:

> Call-out fee - local attendance.

> Labour - adjust door, replace latch and striker plate.

> Hardware - latch, striker plate and fixings.

For a flyscreen:

> Flyscreen repair - supply mesh and spline.

> Labour - remove, re-screen and refit.

For a rental maintenance job:

> Apartment maintenance - patch plaster, replace door stop, reseal shower edge, disposal fee.

## Save the pricing once

With a pricing catalog, you do not need to calculate every small item again. Save your common call-out fees, minimum charges and materials. Then describe the job by voice:

> "Door repair at the New Farm rental. Standard call-out, replace latch and striker plate, adjust hinges, one hour labour."

SMASH creates the invoice with labour, hardware, call-out fee, GST and payment link.

## Quote requests from Gmail

Many handyman jobs begin with a customer email and photos. Use the [Chrome extension](/chrome-extension) to turn the request into a quote. For a manual option, use the free [quote generator](/quote-generator). When the client approves, convert the quote to an invoice.

## Related resources

- [SMASH for handymen](/for-handymen)
- [Materials pricing](/materials-pricing)
- [Invoice generator](/invoice-generator)
- [Quote generator](/quote-generator)
- [Voice invoicing](/voice-invoicing)
- [Pricing](/pricing)

## Bottom line

Small jobs should not mean sloppy invoices. Save your materials and call-out fees once, then invoice by voice before the next job starts.$content$,
  'How handymen can invoice call-out fees, minimum charges, small hardware, consumables and disposal costs without losing margin.',
  '/hero_image.png',
  'Handyman adding hardware and call-out fees to an invoice',
  'Handyman Materials and Call-out Fee Invoice Guide',
  'Handyman materials and call-out fee invoice guide covering small hardware, minimum charges, disposal fees, GST and voice invoicing examples.',
  'handyman materials invoice',
  ARRAY[
    'handyman call-out fee',
    'handyman minimum charge',
    'odd jobs invoice',
    'handyman materials pricing',
    'small job invoice',
    'handyman invoice app'
  ],
  ARRAY[
    'Small materials and consumables can reduce margin when they are skipped or hidden.',
    'Call-out fees should be clearly labelled and separated from labour where possible.',
    'Saved pricing catalogs make small-job invoices faster and more consistent.',
    'SMASH lets handymen add labour, materials and call-out fees by voice.'
  ],
  $faq$[
    {
      "question": "Should handymen charge a call-out fee?",
      "answer": "Many handymen charge a call-out or minimum job fee to cover travel, setup and short jobs. If used, it should be shown clearly on the invoice."
    },
    {
      "question": "How should small materials be shown on handyman invoices?",
      "answer": "Small materials can be grouped into clear line items such as hardware, fixings, sealant or disposal fees. Important supplied items should be itemised."
    },
    {
      "question": "Can I save common handyman materials in SMASH?",
      "answer": "Yes. Save common materials and fees once, then mention them by voice and SMASH adds them to the invoice."
    },
    {
      "question": "Can I use one invoice for labour, call-out and materials?",
      "answer": "Yes. A single invoice can include call-out fees, labour, materials, GST and payment terms as separate line items."
    }
  ]$faq$::jsonb,
  'SMASH Team',
  'SMASH builds voice-to-invoice tools for self-employed service workers who want to send invoices before admin becomes a night-time job.',
  6,
  true,
  now(),
  now(),
  now()
),
(
  'gardening-invoice-template-australia',
  'Gardening Invoice Template Australia: Lawn Care, Green Waste and GST',
  $content$# Gardening Invoice Template Australia: Lawn Care, Green Waste and GST

A gardening invoice in Australia should include your business details, customer details, service address, invoice date, gardening services provided, materials or green waste fees, GST if registered, payment terms and a clear total. For regular lawn mowing and garden maintenance, the best template is repeatable: same property, same service, same price, with only add-ons changed.

This guide gives gardeners and landscapers a practical invoice structure, then shows how to make it faster with [SMASH for gardeners](/for-gardeners), the free [invoice template](/invoice-template), the free [invoice generator](/invoice-generator), and [voice invoicing](/voice-invoicing).

## The basic gardening invoice format

Use this structure:

1. Your business name, ABN if you have one, email and phone number.
2. Customer name and billing details.
3. Service address.
4. Invoice number, invoice date and due date.
5. Job title such as "Fortnightly lawn maintenance" or "Garden cleanup".
6. Line items for mowing, edging, pruning, weeding, cleanup or landscaping.
7. Materials such as mulch, soil, plants, turf or irrigation parts.
8. Green waste, disposal or tip fees.
9. GST if registered.
10. Payment link or payment instructions.

## Common gardener line items

Save common services and materials:

- Lawn mowing and edging.
- Hedge trimming.
- Pruning.
- Weeding and weed spray.
- Garden cleanup.
- Mulch, soil, plants and turf.
- Irrigation parts.
- Green waste bags or trailer disposal.
- Commercial or strata garden maintenance.

The more repeat clients you have, the more valuable saved line items become.

## Regular lawn maintenance

For repeat clients, keep the invoice simple:

> Fortnightly lawn mowing and edging - front and back lawn, fixed property rate.

If something changes, add the difference:

> Add green waste removal and hedge trim this visit.

SMASH can repeat the last invoice, update the add-ons, and send it from the phone before you leave.

## Landscaping materials

Landscaping jobs need more detail because materials are a larger part of the price. Itemise turf, mulch, soil, plants, delivery and labour so the customer can see what was supplied.

For pricing setup, see [materials pricing](/materials-pricing). For quotes, use the free [quote generator](/quote-generator) or the [Chrome extension](/chrome-extension) for Gmail enquiries.

## Gardener workflow with SMASH

[SMASH for gardeners](/for-gardeners) is built for multi-property days:

- Repeat regular lawn invoices.
- Save fixed property rates and commercial terms.
- Add green waste and disposal fees by voice.
- Itemise turf, mulch, plants and soil.
- Send payment links.
- Sync invoices to Xero or QuickBooks on Starter and higher plans.

The Free plan includes 5 invoices per month. Starter is $15/month for unlimited invoices plus accounting sync.

## Bottom line

A good gardening invoice template is clear, property-specific and repeatable. A better workflow remembers the property, rate and service scope so you can invoice before the mower is back on the trailer.$content$,
  'A practical Australian gardening invoice template covering service address, lawn care, green waste, landscaping materials, GST and payment terms.',
  '/hero_image.png',
  'Gardener creating an invoice from a phone after lawn maintenance',
  'Gardening Invoice Template Australia',
  'Gardening invoice template Australia guide covering lawn mowing, green waste, materials, GST, repeat clients and voice invoicing examples.',
  'gardening invoice template Australia',
  ARRAY[
    'gardener invoice app',
    'lawn mowing invoice',
    'garden maintenance invoice',
    'landscaping invoice template',
    'green waste invoice',
    'invoice app for gardeners',
    'repeat invoices for gardeners'
  ],
  ARRAY[
    'Gardening invoices should include business details, customer details, service address, services, materials, green waste fees and GST if registered.',
    'Repeat lawn mowing clients should use saved property rates so invoices can be repeated quickly.',
    'Landscaping invoices should itemise materials such as turf, mulch, soil and plants.',
    'SMASH lets gardeners invoice by voice between properties in under 60 seconds.'
  ],
  $faq$[
    {
      "question": "What should a gardening invoice include in Australia?",
      "answer": "A gardening invoice should include business details, customer details, service address, invoice date, due date, services provided, materials or green waste fees, total, payment terms and GST if registered."
    },
    {
      "question": "Can gardeners repeat invoices for regular clients?",
      "answer": "Yes. Regular lawn and garden maintenance clients are ideal for repeat invoices. Save the property, service scope and fixed rate, then change only the add-ons."
    },
    {
      "question": "Should green waste fees be itemised?",
      "answer": "Yes. Green waste, disposal and tip fees are real job costs and should be visible when they affect the price."
    },
    {
      "question": "What is the fastest way for gardeners to invoice?",
      "answer": "The fastest workflow is to describe the job by voice before leaving the property. SMASH builds the invoice with saved rates, GST and a payment link in under 60 seconds."
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
  'lawn-mowing-repeat-invoices',
  'Repeat Invoices for Lawn Mowing and Garden Maintenance',
  $content$# Repeat Invoices for Lawn Mowing and Garden Maintenance

Repeat invoices let gardeners create this visit's invoice from the last completed lawn or garden maintenance job, keeping the same customer, property, service scope and price, then changing only the add-ons. They are ideal for fortnightly mowing, regular garden maintenance, strata properties and commercial sites.

For gardeners, repeat invoicing is not just a shortcut. It is how you avoid turning a full day of properties into a night of admin.

## Why repeat invoices suit lawn mowing

Regular gardening work repeats:

- Same client.
- Same service address.
- Same lawn or garden scope.
- Same fixed property rate.
- Same payment terms.

Manual invoicing makes you type those details again. That creates delays and mistakes, especially when you visit many properties in one day.

## What can change each visit

Repeat the base invoice, then add what changed:

- Green waste removal.
- Hedge trim.
- Extra pruning.
- Weed spray.
- Mulch or soil.
- Irrigation repair.
- Commercial cleanup.
- One-off disposal fee.

This keeps the invoice fast but still specific.

## Example voice workflow

With [voice invoicing](/voice-invoicing), say:

> "Repeat the Banksia Close fortnightly mow and edge. Same fixed rate, add one green waste bag this week."

SMASH uses the saved client, property, service and price, then adds the green waste line item.

For a commercial site:

> "Repeat the monthly Miller Street office garden maintenance. Pruning, blower vac, weed spray and irrigation check. Same account terms."

SMASH creates the invoice without making you retype the site and terms.

## When to quote instead

Repeat invoices suit maintenance. Use a quote for new or larger work such as turf installation, garden redesign, irrigation setup or a major cleanup. Use the free [quote generator](/quote-generator), or use the [Chrome extension](/chrome-extension) to create a quote from a Gmail enquiry.

When the quote is accepted, convert it into the invoice after the work is done.

## Tools for gardeners

Useful resources:

- [SMASH for gardeners](/for-gardeners)
- [Invoice generator](/invoice-generator)
- [Invoice template](/invoice-template)
- [Quote generator](/quote-generator)
- [Materials pricing](/materials-pricing)
- [Pricing](/pricing)

## Bottom line

If the lawn repeats, the invoice should repeat too. Save the property and rate once, then invoice by voice before you drive to the next client.$content$,
  'How gardeners can use repeat invoices for lawn mowing, regular garden maintenance, green waste add-ons, strata work and commercial sites.',
  '/hero_image.png',
  'Gardener repeating a lawn mowing invoice between properties',
  'Repeat Invoices for Lawn Mowing and Garden Maintenance',
  'Repeat invoices for lawn mowing guide covering regular garden maintenance, fixed property rates, green waste add-ons and voice invoicing.',
  'repeat invoices for lawn mowing',
  ARRAY[
    'repeat invoices for gardeners',
    'lawn mowing invoice app',
    'garden maintenance invoice',
    'recurring gardening invoices',
    'gardener invoice app',
    'fixed property rate invoice'
  ],
  ARRAY[
    'Repeat invoices are ideal for regular lawn mowing and garden maintenance clients.',
    'Gardeners should repeat the base property invoice and change only add-ons such as green waste or pruning.',
    'Quotes are better for new landscaping, turf, irrigation or larger cleanup work.',
    'SMASH helps gardeners repeat invoices by voice between properties.'
  ],
  $faq$[
    {
      "question": "Can lawn mowing invoices be repeated?",
      "answer": "Yes. Regular lawn mowing clients are ideal for repeat invoices because the customer, property, service scope and fixed rate usually stay the same."
    },
    {
      "question": "What should change on a repeat gardening invoice?",
      "answer": "Only update what changed, such as green waste, hedge trimming, extra pruning, weed spray, materials or disposal fees."
    },
    {
      "question": "Should landscaping work use a repeat invoice?",
      "answer": "Maintenance can use repeat invoices, but new landscaping work is usually better quoted first because materials and scope vary more."
    },
    {
      "question": "Can SMASH repeat garden maintenance invoices?",
      "answer": "Yes. SMASH can reuse saved customer, property, service and rate details, then add changes from a voice description."
    }
  ]$faq$::jsonb,
  'SMASH Team',
  'SMASH builds voice-to-invoice tools for self-employed service workers who want to send invoices before admin becomes a night-time job.',
  6,
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
