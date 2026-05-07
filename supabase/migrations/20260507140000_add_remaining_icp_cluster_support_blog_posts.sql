/*
  # Add remaining ICP cluster support blog posts

  Adds 20 support articles for the remaining ICP clusters:
  - car-detailing-invoice-template-australia
  - how-to-invoice-mobile-car-detailing-packages
  - dog-grooming-invoice-template-australia
  - how-to-invoice-mobile-dog-grooming-appointments
  - arborist-invoice-template-australia
  - how-to-invoice-tree-removal-and-stump-grinding
  - pool-service-invoice-template-australia
  - how-to-invoice-pool-chemical-treatments
  - solar-installation-invoice-template-australia
  - how-to-invoice-solar-with-stc-rebates
  - rubbish-removal-invoice-template-australia
  - how-to-invoice-rubbish-removal-tip-fees
  - it-repair-invoice-template-australia
  - how-to-invoice-computer-repair-parts-and-labour
  - appliance-repair-invoice-template-australia
  - how-to-invoice-appliance-repair-callouts
  - security-installer-invoice-template-australia
  - how-to-invoice-cctv-and-alarm-installations
  - fencing-invoice-template-australia
  - how-to-invoice-fencing-by-the-metre

  These support the ICP landing pages with practical AEO content, internal links
  to ICP pages, free tools, voice invoicing, Chrome extension, and accounting sync.
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
  'car-detailing-invoice-template-australia',
  'Car Detailing Invoice Template Australia: Packages, Add-ons, Fleet and GST',
  $content$# Car Detailing Invoice Template Australia: Packages, Add-ons, Fleet and GST

A car detailing invoice in Australia should include your business name, ABN, invoice number, date, customer details, vehicle details (make, model, registration), the detailing package, any add-ons, the vehicle size rate applied, and GST if you are registered. The best car detailing invoice template separates the package from add-ons so customers understand the charge and fleet clients can reconcile invoices against individual vehicles.

This guide gives mobile car detailers a practical invoice structure, then shows how [SMASH for car detailers](/for-car-detailers) generates the invoice from a voice description in under 60 seconds.

## The basic car detailing invoice format

1. Your business name, ABN, phone, and email.
2. Customer name and billing address.
3. Vehicle details: make, model, year, registration (important for fleet clients).
4. Booking date and location.
5. Detailing package: express, standard, full detail, paint correction.
6. Vehicle size rate: sedan, SUV, ute, van.
7. Add-ons: clay bar, ceramic coating, engine bay, leather conditioning, odour treatment.
8. Labour if applicable (for multi-day paint correction jobs).
9. GST shown separately if registered.
10. Payment link — detailing clients often pay on the spot.

## Example detailing invoice line items

For a full detail on a sedan:

> Full detail package — sedan rate.

> Add-on — leather conditioning.

> Add-on — hand wax.

For a paint correction job:

> Paint correction — full correction, 2-stage, sedan. Day 1 of 2.

> Ceramic coating — Gyeon Quartz One, 3-year protection.

For a fleet booking:

> Express detail — fleet rate, 4× sedan @ $65/vehicle.

> Client: Apex Property Group — 4 vehicles, site visit 8am–12pm.

## Vehicle size pricing

Most detailers charge a higher rate for larger vehicles:

- **Sedan / hatch**: Base rate.
- **SUV / 4WD**: +$20–40 over sedan.
- **Ute / van**: +$30–50 over sedan.
- **Prestige / luxury**: Premium rate or by quote.

Store each rate in your SMASH pricing catalog. Mention the vehicle type in your voice description and SMASH applies the correct rate automatically.

## Fleet invoicing for car detailers

When servicing corporate fleets:

- Save the company as a client with their ABN and billing contact
- List each vehicle separately on the invoice with its registration
- Apply the agreed fleet rate per vehicle
- Set NET 14 or NET 30 payment terms for the account

Individual clients typically pay on the spot via the invoice payment link. Fleet accounts operate on monthly invoices or per-visit.

## Using voice invoicing for car detailers

With [SMASH for car detailers](/for-car-detailers), describe the job between cars:

> "Full interior and exterior detail on the client's GLC 300. Sedan rate, includes leather conditioning, full vacuum, and hand wax."

SMASH builds the invoice, applies the sedan rate, adds the add-ons, calculates GST, and sends it in under 60 seconds. The client pays by card from the link before they drive away.

**Frequently asked questions:**

**What should a car detailing invoice include?** ABN, vehicle details, package name, vehicle size rate, add-ons, and GST.

**Can I set different rates for SUVs?** Yes. Store vehicle size rates in SMASH. Mention the vehicle type and SMASH applies the right rate.

**How do I invoice fleet clients?** Save the company with their ABN and fleet rate. List each vehicle on the invoice. Set NET 14 or NET 30 terms.

**Can clients pay by card from the invoice?** Yes. Every SMASH invoice includes a payment link — clients pay by card immediately.
$content$,
  'What mobile car detailers should include on invoices: ABN, package name, vehicle size rate, add-ons, fleet rates, GST and payment terms.',
  '/images/blog/car-detailing-invoice-template.jpg',
  'Mobile car detailer generating invoice on phone between detailing jobs',
  'Car Detailing Invoice Template Australia: Packages, Add-ons and GST',
  'What to include on a car detailing invoice in Australia: ABN, packages, vehicle size rates, add-ons, ceramic coating, fleet rates, GST and payment terms.',
  'car detailing invoice template Australia',
  ARRAY['car detailing invoice template', 'mobile detailer invoice', 'ceramic coating invoice', 'fleet detailing invoice', 'auto detailing invoice Australia'],
  ARRAY['List the package, vehicle size rate, and each add-on as separate line items.', 'Vehicle size pricing (sedan, SUV, ute) should be stored as separate catalog rates.', 'Fleet clients need vehicle registration details on each invoice for reconciliation.', 'Voice invoicing with SMASH generates the invoice between cars in under 60 seconds.'],
  '[{"question":"What should a car detailing invoice include?","answer":"ABN, vehicle details, package name, vehicle size rate, add-ons, and GST."},{"question":"Can I set different rates for SUVs?","answer":"Yes. Store vehicle size rates in SMASH and mention the vehicle type in your voice description."},{"question":"How do I invoice fleet clients?","answer":"Save the company with their ABN and fleet rate. List each vehicle on the invoice with its registration number."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  4,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'how-to-invoice-mobile-car-detailing-packages',
  'How to Invoice Mobile Car Detailing Packages: Express, Full Detail, Paint Correction',
  $content$# How to Invoice Mobile Car Detailing Packages: Express, Full Detail, Paint Correction

Mobile car detailing businesses run on packages. An express wash, a full detail, and a paint correction are three completely different jobs at three completely different price points — and they need to be invoiced differently to avoid client confusion, underbilling, and payment disputes.

This guide shows how to invoice each package type correctly, including add-ons, vehicle size adjustments, and multi-day premium jobs.

## Express detail invoicing

An express detail is typically a wash, vacuum, and window clean. It is your highest-volume, lowest-price service. Invoice format:

> Express detail — wash, vacuum, windows. Sedan rate.

Keep it simple. If the client adds a tyre shine or interior wipe-down, add them as a line item:

> Add-on — tyre shine + dressing.

Express detail invoices should be sent immediately after the job. With [SMASH](/for-car-detailers), describe the job in 10 seconds and send it while the client is inspecting the car.

## Full detail invoicing

A full detail includes exterior wash, interior deep clean, vacuuming, leather or fabric conditioning, windows, and protection. Invoice format:

> Full detail — exterior wash, interior deep clean, vacuum, leather condition, window clean. Sedan rate.

If specific add-ons are included in your full detail package, either include them in the package name or list them separately. Listing them separately makes the invoice feel more thorough and justifies the premium price.

## Paint correction invoicing

Paint correction is your most complex, highest-value service. It typically spans one to two days and involves machine polishing, panel inspection, and ceramic or wax protection. Invoice format:

> Paint correction — full correction (2-stage), 1.5 days labour. BMW M3.

> Ceramic coating — Gyeon Quartz One, applied to all exterior panels.

> PPF — front bumper and bonnet (if applicable).

For multi-day paint correction jobs, you can invoice at completion or issue a deposit invoice:

> Deposit — 50% of total quoted price for paint correction and ceramic coat.

> Final balance — remaining 50% on completion.

Include photos of the completed work in the email you send with the SMASH invoice. This supports the value of the service and reduces disputes.

## Add-on pricing

Add-ons should always appear as separate line items, not bundled into the package price:

> Add-on — clay bar treatment.

> Add-on — engine bay clean.

> Add-on — odour bomb treatment.

> Add-on — ceramic coating top-up.

Separate add-on lines show the client exactly what they are paying for and make upselling transparent. If a client declines the add-on next time, they know exactly what they will lose.

## How to invoice multiple cars in a day

For six cars on a Saturday:

1. Invoice immediately after each car using [SMASH](/for-car-detailers).
2. The client receives the invoice and payment link on their phone.
3. They pay by card before you move to the next vehicle.
4. By the end of the day, all six are paid. No catching up on Sunday.

Each invoice takes under 60 seconds from a voice description. Batching invoices at the end of the day risks forgetting details on early jobs and delays payment.

**Frequently asked questions:**

**Can I set different package prices?** Yes. Store express, standard, full detail, and paint correction packages in SMASH with vehicle size variants.

**How do I invoice a multi-day paint correction?** Use a deposit invoice on day one and a final balance invoice on completion. Both generated from voice descriptions.

**Should add-ons be listed separately?** Yes. Separate add-on lines make the invoice clearer and support upselling in future visits.

**Can clients pay between cars?** Yes. Send the invoice immediately after each job with a payment link. Clients pay by card before you start the next vehicle.
$content$,
  'How to structure express, full detail, and paint correction invoices with add-ons and fleet rates for mobile car detailers.',
  '/images/blog/car-detailing-packages-invoice.jpg',
  'Mobile car detailer invoicing between detail jobs on phone',
  'How to Invoice Mobile Car Detailing Packages in Australia',
  'How to invoice express, full detail, and paint correction packages for mobile car detailers. Add-ons, vehicle size rates, multi-day jobs, and same-day payment.',
  'mobile car detailing invoice packages',
  ARRAY['car detailing package invoice', 'full detail invoice', 'paint correction invoice', 'mobile detailing invoice Australia', 'express detail invoice'],
  ARRAY['Invoice immediately after each car — do not batch at day end.', 'List add-ons as separate line items to support upselling and prevent disputes.', 'Multi-day paint correction jobs benefit from a deposit invoice and a final balance invoice.', 'SMASH generates each invoice in under 60 seconds from a voice description.'],
  '[{"question":"Can I set different package prices?","answer":"Yes. Store all packages in SMASH with vehicle size variants. Mention the package and vehicle type in your voice description."},{"question":"How do I invoice a multi-day paint correction?","answer":"Use a deposit invoice on day one and a final balance invoice on completion. Both generated from voice descriptions."},{"question":"Should add-ons be listed separately?","answer":"Yes. Separate add-on lines make the invoice clearer and support upselling on future visits."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  4,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'dog-grooming-invoice-template-australia',
  'Dog Grooming Invoice Template Australia: Breed Pricing, Packages, Add-ons and GST',
  $content$# Dog Grooming Invoice Template Australia: Breed Pricing, Packages, Add-ons and GST

A dog grooming invoice in Australia should include your business name, ABN, invoice number, date, customer name, pet name and breed, the grooming package, any add-ons, and GST if you are registered. The best mobile dog grooming invoice template is fast to generate — because you have another dog waiting and the owner is watching.

This guide gives mobile dog groomers a practical invoice structure, then shows how [SMASH for dog groomers](/for-dog-groomers) generates the invoice from a voice description in under 60 seconds.

## The basic dog grooming invoice format

1. Your business name, ABN, and contact details.
2. Customer name and billing address.
3. Pet name and breed.
4. Appointment date and address.
5. Grooming package: bath only, express, full groom, show groom.
6. Size/breed rate: small, medium, large, extra large.
7. Add-ons: de-shedding, teeth brushing, nail trim, flea treatment, bandana.
8. Cancellation fee if applicable.
9. GST if registered.
10. Payment link.

## Example dog grooming invoice line items

For a full groom:

> Full groom — golden retriever (large). Bath, blow dry, brush, scissor trim, nail clip.

> Add-on — de-shed treatment.

For an express groom:

> Express groom — cavoodle (small). Bath, brush, nail trim.

For a cancellation:

> Late cancellation fee — 24 hours notice not provided.

## Size and breed pricing

Set pricing tiers by dog size. This simplifies your catalog and is easier to explain to clients:

- **Small** (under 10kg): Maltese, chihuahua, cavoodle, dachshund.
- **Medium** (10–20kg): Cocker spaniel, border collie, beagle.
- **Large** (20–35kg): Labrador, golden retriever, husky.
- **Extra large** (35kg+): German shepherd, Bernese mountain dog, Malamute.

Store each as a separate pricing tier in SMASH. Mention the dog size in your voice description and SMASH applies the right rate.

## Using voice invoicing between appointments

With [SMASH](/for-dog-groomers):

> "Full groom for the golden retriever at the Cronulla booking. Bath, blow dry, brush, trim, and nail clip. Large dog rate."

Invoice sent. Payment link received by the owner. Next appointment.

**Frequently asked questions:**

**Can I set prices by dog size?** Yes. Store small, medium, large, and extra large rates in SMASH.

**How do I invoice add-ons like de-shedding?** Add them to your catalog as individual items. Mention them in the voice description and they appear as line items.

**Can I charge a late cancellation fee?** Yes. Add it to your catalog. Mention it in the voice input and SMASH generates a professional invoice for it.

**Do I need to be GST-registered?** You must register for GST if turnover exceeds $75,000/year.
$content$,
  'What mobile dog groomers should include on invoices: ABN, breed/size pricing, grooming packages, add-ons, cancellation fees, GST and payment terms.',
  '/images/blog/dog-grooming-invoice-template.jpg',
  'Mobile dog groomer generating invoice on phone between grooming appointments',
  'Dog Grooming Invoice Template Australia: Packages, Breed Pricing and GST',
  'What to include on a dog grooming invoice in Australia: ABN, breed/size pricing, grooming packages, add-ons, cancellation fees, GST and payment terms for mobile groomers.',
  'dog grooming invoice template Australia',
  ARRAY['dog grooming invoice template', 'mobile pet groomer invoice', 'dog groom invoice Australia', 'pet grooming invoice', 'mobile dog grooming invoice'],
  ARRAY['Include pet name, breed, and size in the invoice so clients can identify the service.', 'Store size-based pricing tiers in SMASH — small, medium, large, extra large.', 'Add-ons like de-shedding and teeth brushing should be separate line items.', 'Invoice between appointments using SMASH — each invoice takes under 60 seconds.'],
  '[{"question":"Can I set prices by dog size?","answer":"Yes. Store small, medium, large, and extra large rates in SMASH. Mention the size in your voice description and SMASH applies the right rate."},{"question":"How do I invoice add-ons?","answer":"Add them to your catalog as individual items. Mention them in the voice description and they appear as line items."},{"question":"Can I charge a late cancellation fee?","answer":"Yes. Add it to your catalog. Mention it in the voice input and SMASH generates a professional invoice for it."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  4,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'how-to-invoice-mobile-dog-grooming-appointments',
  'How to Invoice Mobile Dog Grooming Appointments: Between Grooms, Repeat Clients, Add-ons',
  $content$# How to Invoice Mobile Dog Grooming Appointments: Between Grooms, Repeat Clients, Add-ons

Mobile dog groomers run on repeat appointments, per-breed pricing, and add-ons. The invoicing challenge is doing it between grooms — quickly, from a phone, while the dog owner is still there. This guide shows how to invoice mobile dog grooming appointments efficiently.

## Invoice between appointments, not at the end of the day

The most common mobile grooming invoicing mistake is batching all invoices at the end of the day. By then:

- You have forgotten exactly what add-ons were included for the morning appointments
- The owners have moved on and the invoice feels like an afterthought
- Some owners will not check their email until tomorrow

Invoice immediately after each groom. With [SMASH](/for-dog-groomers), describe the job in one voice note while the owner is putting the dog back in the house:

> "Express wash and brush for the cavoodle in Caringbah. Small dog rate, 40 minutes."

Invoice sent. Owner receives the payment link. You drive to the next address.

## Repeat client invoicing

For regular clients, your SMASH profile stores:

- The owner's name and address
- The dog's name and breed
- The default package and size rate

A repeat booking invoice takes 15 seconds. Describe what changed from last time — "same as usual but add the de-shed treatment this time" — and SMASH updates the invoice accordingly.

## How to invoice grooming add-ons

Common grooming add-ons and how to invoice them:

> De-shedding treatment — 20 minutes additional.

> Teeth brushing — standard.

> Flea and tick treatment — product applied.

> Nail grinding — after nail clip.

> Bandana or bow — accessory included.

List each add-on as a separate line item. This makes the invoice feel thorough, justifies the total, and makes it easy for the owner to see exactly what their dog received.

## No-show and late cancellation fees

For clients who do not show up or cancel without notice:

> Late cancellation fee — less than 24 hours notice.

> No-show fee — appointment not attended, groomer travel cost covered.

Add these to your SMASH catalog as catalog items. They generate a professional invoice rather than an awkward text message. Professional invoices are more likely to be paid.

## When multiple dogs in one household

Invoice each dog separately as a line item on the same invoice:

> Full groom — Biscuit (golden retriever, large). Bath, blow dry, trim, nail clip.

> Full groom — Remy (cavoodle, small). Bath, blow dry, trim.

> Household appointment discount: −$10.

One invoice for the household, separate line items per dog. The owner can see what each dog cost.

**Frequently asked questions:**

**Should I invoice between appointments?** Yes. Invoice immediately after each groom for faster payment and better recall of what was done.

**How do I invoice repeat clients faster?** Save a client profile in SMASH. Repeat bookings invoice in 15 seconds from a voice description.

**How do I charge for a no-show?** Add a no-show fee to your SMASH catalog. Generate a professional invoice rather than a text message.

**Can clients pay by card without a terminal?** Yes. SMASH invoices include a payment link. Clients tap and pay by card on their phone.
$content$,
  'How to invoice between appointments, handle add-ons, repeat clients, and no-show fees for mobile dog groomers without manual typing.',
  '/images/blog/mobile-dog-grooming-invoice.jpg',
  'Mobile dog groomer invoicing appointment on phone between groom sessions',
  'How to Invoice Mobile Dog Grooming Appointments in Australia',
  'How to invoice mobile dog grooming appointments efficiently: between grooms, repeat clients, add-ons, no-show fees, and same-day payment for Australian groomers.',
  'mobile dog grooming invoice appointments',
  ARRAY['mobile dog grooming invoice', 'dog groomer invoice Australia', 'pet grooming appointment invoice', 'repeat client dog grooming invoice'],
  ARRAY['Invoice between each appointment — do not batch at the end of the day.', 'Repeat client profiles in SMASH make invoicing take 15 seconds.', 'List each add-on as a separate line item to justify the total.', 'No-show fees on a professional invoice are more likely to be paid than a text message.'],
  '[{"question":"Should I invoice between appointments?","answer":"Yes. Invoice immediately after each groom for faster payment and better recall of what was done."},{"question":"How do I invoice repeat clients faster?","answer":"Save a client profile in SMASH. Repeat bookings invoice in 15 seconds from a voice description."},{"question":"Can clients pay by card without a terminal?","answer":"Yes. SMASH invoices include a payment link. Clients tap and pay by card on their phone."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  4,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'arborist-invoice-template-australia',
  'Arborist Invoice Template Australia: Crew Rates, Removal, Stump Grinding and GST',
  $content$# Arborist Invoice Template Australia: Crew Rates, Removal, Stump Grinding and GST

An arborist invoice in Australia should include your business name, ABN, arborist qualifications (AQF Level 3 minimum for most insurance), invoice number, date, customer details, job address, crew rates, service line items (removal, pruning, stump grinding, chipping, disposal), equipment hire, tip fees, and GST if registered.

This guide gives arborists and tree services a practical invoice structure, then shows how [SMASH for arborists](/for-arborists) generates the full invoice from a voice description in under 60 seconds.

## The basic arborist invoice format

1. Your business name, ABN, arborist qualification level.
2. Customer name and job address.
3. Invoice number, invoice date, payment due date.
4. Job description: tree species, height estimate, location, access.
5. Crew line items: number of crew, hours or days, rate per person or crew rate.
6. Service line items: removal, pruning, stump grind, chipping, green waste disposal.
7. Equipment hire: crane, EWP (elevated work platform), chipper hire.
8. Tip fees: council or private tip, estimated weight or volume.
9. GST if registered.
10. Payment terms and payment link.

## Example arborist invoice line items

For a tree removal:

> Labour — 2 crew, full day @ $400/crew-day = $800.00.

> Tree removal — large eucalyptus, section removal, 15m.

> Stump grind — to ground level, 500mm diameter.

> Green waste chipping — on site, all material.

> Tip disposal — green waste, estimated 1.2T @ $90/T.

For an emergency storm job:

> Labour — 2 crew, 4 hours @ $120/hr per person (emergency rate).

> Emergency debris removal — 2 trees on fence, section removal.

> Tip disposal — mixed debris.

## Council and body corporate invoicing

For council or strata work:

- Include your ABN, arborist qualifications, and insurance details on file
- Reference the council work order or purchase order number
- Item descriptions should match the scope of work approved in the council permit
- Payment terms are typically NET 30 for council clients

Set council clients as a saved client profile in SMASH with NET 30 terms. Every invoice for that client applies the right terms automatically.

## Using voice invoicing for arborists

With [SMASH](/for-arborists):

> "Large eucalyptus removal at the property in Wahroonga. 15-metre tree, section removal, full chipping on site, stump grind, green waste taken away. Two crew, full day."

Invoice sent with all line items from a single voice note.

**Frequently asked questions:**

**What should an arborist invoice include?** ABN, arborist qualifications, crew rates, service items (removal, pruning, stump grind, disposal), equipment hire, tip fees, and GST.

**Can I invoice a two-person crew?** Yes. Set a crew day rate or per-person hourly rate. Mention crew size and hours — SMASH multiplies correctly.

**Can I charge emergency rates?** Yes. Set an emergency rate in SMASH. Mention it in your voice description and SMASH applies it.

**Do councils accept SMASH invoices?** Yes. SMASH generates ATO-compliant tax invoices with ABN and line items — accepted by councils and commercial clients.
$content$,
  'What arborists should include on invoices: ABN, crew rates, tree removal, stump grinding, green waste disposal, equipment hire, GST and payment terms.',
  '/images/blog/arborist-invoice-template.jpg',
  'Arborist generating invoice on phone after tree removal job',
  'Arborist Invoice Template Australia: Crew Rates, Removal and GST',
  'What to include on an arborist invoice in Australia: ABN, qualifications, crew rates, removal, pruning, stump grinding, disposal, GST and payment terms.',
  'arborist invoice template Australia',
  ARRAY['arborist invoice template', 'tree removal invoice', 'stump grinding invoice', 'arborist invoice Australia', 'tree service invoice'],
  ARRAY['Include arborist qualifications and ABN on every invoice — councils and body corporates require it.', 'Crew rates, service items, equipment hire, and tip fees are all separate line items.', 'Council clients typically need NET 30 terms — save this per client in SMASH.', 'Voice invoicing with SMASH generates the multi-line arborist invoice in under 60 seconds.'],
  '[{"question":"What should an arborist invoice include?","answer":"ABN, arborist qualifications, crew rates, service items (removal, pruning, stump grind, disposal), equipment hire, tip fees, and GST."},{"question":"Can I invoice a two-person crew?","answer":"Yes. Set a crew day rate or per-person hourly. Mention crew size and hours — SMASH multiplies correctly."},{"question":"Do councils accept SMASH invoices?","answer":"Yes. SMASH generates ATO-compliant tax invoices with ABN and line items — accepted by councils and commercial clients."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  4,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'how-to-invoice-tree-removal-and-stump-grinding',
  'How to Invoice Tree Removal and Stump Grinding: Multi-component Jobs Made Simple',
  $content$# How to Invoice Tree Removal and Stump Grinding: Multi-component Jobs Made Simple

Tree removal and stump grinding jobs often involve four to eight components: crew labour, removal, chipping, stump grinding, green waste disposal, equipment hire, and sometimes emergency rates. Bundling all of this into a single lump sum leads to client confusion and payment disputes. This guide shows how to structure each component correctly.

## Breaking down a tree removal invoice

A complete tree removal invoice typically has these line items:

> Labour — removal crew, 2 persons × 8 hours @ $85/hr = $1,360.00.

> Tree removal — 15m eucalyptus, section removal, rigging and rope work.

> Stump grind — 500mm diameter, to below ground level.

> Chipping — all on-site green material chipped, no green waste to remove.

> Green waste disposal — 1.5T removal to tip @ $90/T = $135.00.

> Equipment hire — 15-tonne EWP, half day = $380.00.

Total is the sum of these components — not an estimate or a round number.

## Stump grinding as a separate service

When grinding is a standalone job (the tree was removed previously):

> Stump grind — 3× stumps, 300–600mm diameter @ $95 each = $285.00.

> Travel / call-out — included.

> Debris removal — mulch left on site or removed (specify which).

## Emergency and storm damage invoicing

For urgent jobs at premium rates:

> Emergency callout — storm damage, after-hours rate applies.

> Labour — 2 crew × 4 hours @ $120/hr (emergency) = $960.00.

> Tree removal — 2 trees on boundary fence, emergency section removal.

> Debris to tip — mixed storm debris.

State the reason for the emergency rate clearly on the invoice. This prevents disputes when clients see a higher rate than a standard job.

## Equipment hire line items

When you hire a crane, EWP, or chipper for a job, list it separately:

> EWP hire — 15m articulated, full day = $750.00.

> Concrete saw — 2 hours = $180.00.

Do not absorb hire costs into labour. They are a pass-through cost and should be transparent.

## Using voice invoicing for tree work

With [SMASH for arborists](/for-arborists):

> "Emergency storm damage at the Mosman property. Two trees on the fence. Four hours, two crew, urgent rate. Debris removed to tip."

All components listed automatically. Invoice sent before you pack the chipper.

**Frequently asked questions:**

**Should I bundle removal, stump grind, and disposal?** No. List each as a separate line item. Clients should see exactly what each component cost.

**How do I invoice emergency rates?** Set an emergency rate in SMASH. Mention it in the voice description and add a note explaining why it applies.

**Can I include equipment hire on the invoice?** Yes. Crane hire, EWP hire, and chipper hire are separate line items — not absorbed into labour.

**What tip fee rate should I charge?** Your actual tip fee plus a reasonable handling charge for loading and transport. List tip fees separately from green waste disposal labour.
$content$,
  'How to structure tree service invoices with crew rates, removal, stump grinding, chipping, disposal, equipment hire, and emergency pricing.',
  '/images/blog/tree-removal-invoice.jpg',
  'Arborist on site invoicing tree removal job using voice invoicing app',
  'How to Invoice Tree Removal and Stump Grinding in Australia',
  'How to structure tree removal and stump grinding invoices in Australia with crew rates, equipment hire, tip fees, disposal, and emergency pricing on one invoice.',
  'tree removal stump grinding invoice',
  ARRAY['tree removal invoice', 'stump grinding invoice', 'arborist invoice components', 'emergency tree removal invoice', 'tree service invoice Australia'],
  ARRAY['List each component separately: crew labour, removal, stump grind, chipping, disposal, and equipment hire.', 'Emergency rate invoices should include a note explaining why the rate applies.', 'Equipment hire costs are pass-through costs — always list them as separate line items.', 'SMASH generates the full multi-component arborist invoice from a voice description in under 60 seconds.'],
  '[{"question":"Should I bundle removal and stump grind?","answer":"No. List each as a separate line item so clients see exactly what each component cost."},{"question":"Can I include equipment hire on the invoice?","answer":"Yes. Crane hire, EWP hire, and chipper hire are separate line items — not absorbed into labour."},{"question":"How do I invoice emergency rates?","answer":"Set an emergency rate in SMASH. Mention it in the voice description and add a note explaining why it applies."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  4,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'pool-service-invoice-template-australia',
  'Pool Service Invoice Template Australia: Chemicals, Labour, Equipment and GST',
  $content$# Pool Service Invoice Template Australia: Chemicals, Labour, Equipment and GST

A pool maintenance invoice in Australia should include your business name, ABN, pool technician registration (required in some states), invoice number, date, customer name, property address, service type (routine/chemical/repair), chemical line items with quantities and prices, equipment supply and install if applicable, and GST if registered.

This guide gives pool maintenance technicians a practical invoice structure, then shows how [SMASH for pool maintenance](/for-pool-maintenance) generates the invoice from a voice description in under 60 seconds.

## The basic pool service invoice format

1. Your business name, ABN, and technician registration number if applicable.
2. Customer name and pool address.
3. Invoice number, date, payment due date.
4. Service type: routine maintenance, chemical treatment, green pool, repair.
5. Service labour line item: service visit or hourly rate.
6. Chemical line items: each chemical type, quantity, and price.
7. Equipment supply and install if applicable.
8. GST if registered.
9. Payment link for recurring clients.

## Example pool service invoice line items

For a routine fortnightly service:

> Pool service — routine maintenance visit. Vacuum, backwash, water test.

> Chemical — liquid chlorine, 2L @ $8.50/L = $17.00.

> Chemical — pH up (sodium bicarbonate), 500g @ $3.50/500g = $3.50.

For a green pool treatment:

> Green pool treatment visit 1 — shock dose, algaecide, brush and vacuum.

> Chemical — liquid chlorine (shock), 10L @ $8.50/L = $85.00.

> Chemical — algaecide, 1L @ $22.00.

> Green pool visit 2 — follow-up vacuum, backwash, water balance.

For equipment repair:

> Pool service — equipment repair visit, 1 hour.

> Pump — Astral Hurlcon VX7 variable speed, supply and install.

> Labour — pump replacement, 1.5 hours @ $110/hr = $165.00.

## Chemical pricing

Price chemicals by quantity used on each visit:

- Liquid chlorine: per litre
- Pool salt: per kilogram or bag
- pH up / pH down: per kilogram
- Algaecide: per litre
- Clarifier: per dose

Store each in your SMASH pricing catalog. Mention the chemical and quantity in your voice description — SMASH calculates the cost and adds the line item.

## Recurring client invoicing

For regular fortnightly clients:

- Save the client profile with their standard service rate
- Recurring invoices take 15 seconds per property
- Set their preferred payment method — card via link or monthly direct debit

With [SMASH for pool maintenance](/for-pool-maintenance), describe the service from your phone between pools. Invoice sent. Client pays from the link. Drive to the next property.

**Frequently asked questions:**

**What should a pool service invoice include?** ABN, technician registration, service visit rate, chemical quantities and prices, equipment supply, and GST.

**Can I price chemicals by quantity?** Yes. Store chemical rates in SMASH. Mention what you dosed and how much — SMASH prices it and adds the line item.

**How do I invoice green pool treatments?** List each visit as a separate line item with the chemicals used. Green pool treatment may involve 2–3 visits — invoice each one.

**Does SMASH sync with accounting software?** Yes. Pool service invoices sync to Xero and QuickBooks automatically.
$content$,
  'What pool maintenance technicians should include on invoices: ABN, service rates, chemical quantities, equipment supply, GST and payment terms.',
  '/images/blog/pool-service-invoice-template.jpg',
  'Pool technician generating invoice on phone after completing pool service',
  'Pool Service Invoice Template Australia: Chemicals, Labour and GST',
  'What to include on a pool maintenance invoice in Australia: ABN, service rates, chemical quantities and prices, equipment supply, green pool treatment, GST and payment terms.',
  'pool service invoice template Australia',
  ARRAY['pool service invoice template', 'pool maintenance invoice', 'pool chemical invoice', 'swimming pool service invoice Australia', 'pool technician invoice'],
  ARRAY['Price chemicals by quantity on each visit — do not absorb them into the service rate.', 'Green pool treatments involve multiple visits — invoice each visit with the chemicals used.', 'Save recurring client profiles in SMASH for 15-second fortnightly invoicing.', 'Equipment supply and install are separate line items from the service visit rate.'],
  '[{"question":"What should a pool service invoice include?","answer":"ABN, technician registration, service visit rate, chemical quantities and prices, equipment supply, and GST."},{"question":"Can I price chemicals by quantity?","answer":"Yes. Store chemical rates in SMASH. Mention what you dosed and how much — SMASH prices it and adds the line item."},{"question":"How do I invoice green pool treatments?","answer":"List each visit as a separate line item with the chemicals used. Green pool treatment may involve 2–3 visits — invoice each one."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  4,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'how-to-invoice-pool-chemical-treatments',
  'How to Invoice Pool Chemical Treatments: Chlorine, pH, Algaecide and Green Pool Jobs',
  $content$# How to Invoice Pool Chemical Treatments: Chlorine, pH, Algaecide and Green Pool Jobs

Pool chemical invoicing is the part of pool maintenance billing that most technicians get wrong. Chemicals are absorbed into the service rate, tip fees are forgotten, and green pool jobs — which cost significantly more in time and chemicals — get undercharged because the invoice does not reflect the actual work done.

This guide shows how to invoice pool chemicals correctly by quantity, and how to handle green pool treatments as a separate billing category.

## Why chemicals should be separate line items

Absorbing chemicals into a flat service rate:

- Means you undercharge when chemical usage is high (algae outbreak, low pH, shock treatment)
- Means clients do not see what they are paying for
- Makes it harder to adjust pricing when chemical costs increase

The correct approach is to list each chemical as a line item with quantity and price. Your service rate covers your time and travel. The chemicals are pass-through costs on top.

## How to price chlorine on a pool service invoice

> Chemical — liquid chlorine, 3L @ $8.50/L = $25.50.

> Chemical — chlorine granules, 500g @ $6.00/500g = $6.00.

> Chemical — salt, 10kg bag @ $18.00.

Liquid chlorine is the most common. Price per litre at your supply cost plus a reasonable handling margin (typically 20–30%).

## How to price pH adjustment chemicals

> Chemical — pH up (sodium bicarbonate), 1kg @ $7.00.

> Chemical — pH down (sodium bisulphate), 500g @ $6.50.

> Chemical — alkalinity increaser, 1kg @ $8.00.

The amounts used vary significantly per visit depending on pool condition, weather, and bather load. Pricing per quantity used captures this variation accurately.

## Green pool treatment invoicing

A green pool job is not a standard service visit. It typically involves:

- A shock dose (5–10× the standard chlorine volume)
- Algaecide application
- Multiple return visits (2–3 visits over 48–72 hours)
- Brushing and vacuuming on each visit
- Possible sand filter service or backwash

Invoice green pool treatment as a separate billing category:

> Green pool treatment — visit 1. Shock dose, algaecide, brush and vacuum.

> Chemical — liquid chlorine shock, 15L @ $8.50/L = $127.50.

> Chemical — algaecide, 1L @ $22.00.

> Green pool treatment — visit 2. Vacuum to waste, backwash, water test.

> Green pool treatment — visit 3. Final vacuum, balance water chemistry.

Total the visits and chemicals separately. Green pool treatment typically costs 3–5× a standard service — the invoice should reflect that.

## Using voice invoicing for chemical treatments

With [SMASH for pool maintenance](/for-pool-maintenance):

> "Green pool treatment at the Mosman property. Shock dose, algaecide, brush and vacuum. Two visits included, charge the green pool rate."

SMASH lists the service visits and chemical lines separately. GST calculated. Invoice sent in under 60 seconds.

**Frequently asked questions:**

**Should I charge separately for chemicals?** Yes. Price chemicals by quantity used on each visit. Absorbing them into a flat rate undercharges high-usage jobs.

**How do I invoice multiple green pool visits?** Create a separate line item for each visit. List the chemicals used on each visit. Invoice at the end of the treatment or after each visit.

**What rate should I charge for a green pool treatment?** Your standard service rate per visit plus chemicals at cost-plus. Green pool jobs involve significantly more chemicals and time than a routine service.

**Can I include a markup on chemicals?** Yes. A 20–30% markup on chemical supply cost is standard. List the sell price on the invoice — not your cost price.
$content$,
  'How to price chlorine, pH adjusters, algaecide, and green pool treatments correctly on pool service invoices without client disputes.',
  '/images/blog/pool-chemical-treatment-invoice.jpg',
  'Pool technician dosing pool chemicals and invoicing on phone',
  'How to Invoice Pool Chemical Treatments in Australia',
  'How to invoice pool chemicals by quantity: chlorine, pH adjusters, algaecide, and green pool treatments. Correct billing for pool technicians in Australia.',
  'pool chemical treatment invoice',
  ARRAY['pool chemical invoice', 'green pool treatment invoice', 'chlorine invoice pool service', 'pool maintenance chemical billing Australia'],
  ARRAY['Price chemicals by quantity per visit — do not absorb them into a flat service rate.', 'Green pool treatment should be a separate billing category, not a standard service visit.', 'Each green pool visit should be a separate invoice line with the chemicals used.', 'A 20–30% markup on chemicals is standard — list the sell price, not the cost price.'],
  '[{"question":"Should I charge separately for chemicals?","answer":"Yes. Price chemicals by quantity used on each visit. Absorbing them into a flat rate undercharges high-usage jobs."},{"question":"How do I invoice multiple green pool visits?","answer":"Create a separate line item for each visit with the chemicals used. Invoice at the end of the treatment or after each visit."},{"question":"Can I include a markup on chemicals?","answer":"Yes. A 20–30% markup on chemical supply cost is standard. List the sell price on the invoice."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  5,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'solar-installation-invoice-template-australia',
  'Solar Installation Invoice Template Australia: Panels, Inverter, STC Rebates and GST',
  $content$# Solar Installation Invoice Template Australia: Panels, Inverter, STC Rebates and GST

A solar installation invoice in Australia should include your business name, ABN, CEC accreditation number, invoice number, date, customer name and property address, system size (kW), panel brand and quantity, inverter brand and model, racking, labour, the STC rebate as a negative line item, and GST. The STC rebate deduction and GST must be shown correctly — many clients use solar finance and lenders require a specific invoice format.

This guide gives solar installers a practical invoice structure, then shows how [SMASH for solar installers](/for-solar-installers) generates the full invoice from a voice description in under 60 seconds.

## The basic solar installation invoice format

1. Your business name, ABN, CEC accreditation number, and electrical contractor licence.
2. Customer name, billing address, and installation address.
3. Invoice number, invoice date, and payment due date.
4. System description: "6.6kW grid-connected solar PV system — Dee Why property".
5. Panel line items: brand, model, wattage, quantity, and unit price.
6. Inverter line item: brand, model, and price.
7. Racking / mounting system.
8. Additional components: optimisers, monitoring system, isolators.
9. Labour: crew size and days.
10. STC rebate as a negative line item.
11. GST on the post-rebate total.
12. Payment terms and payment link.

## Example solar installation invoice line items

For a 6.6kW residential system:

> 18× LG Neon 2 370W panels @ $295 each = $5,310.00.

> SolarEdge SE5000H 5kW inverter = $1,890.00.

> SolarEdge P370 optimisers × 18 = $720.00.

> Racking — Clenergy roof mount, 18 panels.

> DC isolator, AC isolator, AC protection.

> Labour — residential install, 2 crew, 1 day = $900.00.

> STC rebate — 32 STCs @ $38/STC = −$1,216.00.

> Subtotal pre-GST: $8,504.00.

> GST (10%): $850.40.

> Total: $9,354.40.

## How to show STC rebates correctly

The STC rebate is a point-of-sale discount. Show it as a negative line item after the equipment and labour totals:

> Small-scale Technology Certificate (STC) rebate — 32 STCs @ $38/STC = −$1,216.00.

The number of STCs depends on system size, zone, and installation year. The current STC price fluctuates — use the actual assignment price in your invoice.

GST is calculated on the post-rebate amount, not the pre-rebate total. This is the correct ATO treatment.

## Sub-contract solar invoicing

When invoicing a solar company for labour-only installation:

> Sub-contract installation — 10kW system, 2 crew × 2 days @ $450/crew-day = $1,800.00.

> Labour only — no equipment supplied.

> Client: SolarPath Pty Ltd, ABN XX XXX XXX XXX.

No STC line needed for labour-only sub-contract invoices. Your client (the solar company) handles the rebate.

## Battery storage invoicing

> Tesla Powerwall 2, 13.5kWh — supply and install = $10,500.00.

> Gateway and installation hardware.

> Labour — battery install, 4 hours @ $130/hr = $520.00.

Battery storage is often invoiced separately from the solar system — it may have different finance arrangements or be added as an upgrade after the initial install.

**Frequently asked questions:**

**How do I show STC rebates on a solar invoice?** As a negative line item after equipment and labour totals. GST is calculated on the post-rebate subtotal.

**What is my CEC accreditation number?** Your Clean Energy Council accreditation number. It should appear on every solar installation invoice.

**Can I invoice sub-contract labour for solar companies?** Yes. Labour-only invoice with crew size, days, and rate. No STC line needed.

**Is the invoice format suitable for solar finance?** Yes. SMASH generates a fully itemised GST-compliant invoice that meets the requirements of solar finance lenders.
$content$,
  'What solar installers should include on invoices: ABN, CEC number, panels, inverter, STC rebate deduction, labour, GST and payment terms.',
  '/images/blog/solar-installation-invoice-template.jpg',
  'Solar installer generating invoice on phone after commissioning solar system',
  'Solar Installation Invoice Template Australia: Panels, STC Rebates and GST',
  'What to include on a solar installation invoice in Australia: ABN, CEC accreditation, panels, inverter, STC rebate deduction, labour, GST and payment terms.',
  'solar installation invoice template Australia',
  ARRAY['solar installation invoice template', 'solar panel invoice', 'STC rebate invoice', 'CEC installer invoice Australia', 'solar invoice template'],
  ARRAY['CEC accreditation number must appear on every solar installation invoice.', 'Show the STC rebate as a negative line item — GST is calculated on the post-rebate total.', 'Sub-contract labour invoices for solar companies do not include an STC line.', 'SMASH generates the full itemised solar invoice from a voice description in under 60 seconds.'],
  '[{"question":"How do I show STC rebates on a solar invoice?","answer":"As a negative line item after equipment and labour totals. GST is calculated on the post-rebate subtotal."},{"question":"Can I invoice sub-contract labour for solar companies?","answer":"Yes. Labour-only invoice with crew size, days, and rate. No STC line needed."},{"question":"Is the invoice format suitable for solar finance?","answer":"Yes. SMASH generates a fully itemised GST-compliant invoice that meets solar finance lender requirements."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  5,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'how-to-invoice-solar-with-stc-rebates',
  'How to Invoice Solar Installations with STC Rebates: Correct Format and GST Treatment',
  $content$# How to Invoice Solar Installations with STC Rebates: Correct Format and GST Treatment

The STC (Small-scale Technology Certificate) rebate is the most commonly mishandled element of solar installation invoicing in Australia. Getting it wrong affects GST calculations, causes issues with solar finance applications, and creates confusion for clients who expect to see the rebate clearly on the invoice.

This guide explains the correct way to show STC rebates on solar installation invoices, with the right GST treatment.

## What is the STC rebate?

The STC scheme lets householders receive a discount on their solar system by assigning their STCs to the installer. The installer trades those certificates for cash (or a rebate from the retailer), and passes the discount to the customer at point of sale.

From an invoicing perspective, the STC rebate appears as a negative line item on the invoice — reducing the customer's payable amount.

## The correct STC rebate line item format

> Equipment and labour subtotal: $8,800.00

> Small-scale Technology Certificate (STC) rebate — 32 certificates × $38 = −$1,216.00

> Post-rebate subtotal: $7,584.00

> GST (10%): $758.40

> **Total payable: $8,342.40**

The key points:
- GST is calculated on the **post-rebate subtotal**, not the pre-rebate total
- The STC rebate must be shown as a negative line item
- The number of STCs and the assignment price should be stated explicitly

## Common STC rebate invoicing mistakes

**Mistake 1: GST calculated on the full pre-rebate amount**
If your total is $8,800 and you calculate GST on that before subtracting the STC rebate, you are overcharging the customer and the invoice is technically incorrect.

**Mistake 2: Absorbing the STC rebate into the system price**
Some installers quote a system price that already has the STC rebate factored in, without showing it separately. This creates problems for solar finance (lenders want to see the gross price and the rebate separately), and does not give the client the transparency they are entitled to.

**Mistake 3: Using an incorrect STC price**
STC prices fluctuate. Use the actual price you agreed to assign the certificates at — not an estimate or last year's price.

## How many STCs does a system generate?

STCs = System size (kW) × Zone factor × Deeming years

For example, a 6.6kW system in Zone 3 (most of eastern Australia) with 8 deeming years remaining:

6.6 × 1.185 × 8 = approximately 62.5 STCs (rounded to 62)

You can verify using the Clean Energy Regulator's STC calculator. SMASH lets you add the STC count directly in your voice description.

## Solar finance invoice requirements

When the client is using solar finance (Plenti, Brighte, etc.), the lender typically requires:

- Full itemised invoice with equipment and labour listed separately
- STC rebate shown as a negative line item
- GST calculated on the post-rebate amount
- Installer ABN and CEC accreditation number
- Invoice addressed to the client (not the finance company)

[SMASH for solar installers](/for-solar-installers) generates this format automatically from a voice description. The invoice is compliant with most solar finance lender requirements.

## Using voice invoicing for solar installations

> "6.6kW system at the Dee Why property. 18 panels LG 370W, SolarEdge 5kW inverter with optimisers, standard residential install. Two crew, one day. Deduct 32 STC rebate."

SMASH builds the invoice with equipment lines, labour, the STC rebate as a negative line item, GST on the post-rebate total, and a payment link — all in under 60 seconds.

**Frequently asked questions:**

**Is GST calculated before or after the STC rebate?** After. GST is calculated on the post-rebate subtotal.

**Do I need to show the number of STCs on the invoice?** Yes. State the number of certificates and the assignment price — both for transparency and for solar finance lenders.

**Can the STC price vary between jobs?** Yes. The spot price for STCs fluctuates. Use the actual price you assigned the certificates at on that particular install.

**What if the client does not want to assign their STCs?** If the client retains their own STCs, remove the rebate line item. The invoice shows the full gross cost and the client arranges their own STC assignment.
$content$,
  'How to show STC rebate deductions correctly on solar installation invoices for homeowners, solar companies, and finance lenders.',
  '/images/blog/solar-stc-rebate-invoice.jpg',
  'Solar installer reviewing STC rebate invoice on phone at residential installation site',
  'How to Invoice Solar with STC Rebates: Correct Format and GST',
  'How to show STC rebate deductions correctly on solar installation invoices in Australia. GST treatment, finance lender format, and number of STCs explained.',
  'solar installation STC rebate invoice',
  ARRAY['STC rebate invoice solar', 'solar installation invoice STC', 'solar GST treatment rebate', 'solar finance invoice format Australia'],
  ARRAY['GST is calculated on the post-rebate subtotal — not the pre-rebate total.', 'The STC rebate must appear as a negative line item with the number of certificates and assignment price.', 'Solar finance lenders require the gross price and rebate shown separately on the invoice.', 'SMASH generates the STC-compliant invoice from a voice description in under 60 seconds.'],
  '[{"question":"Is GST calculated before or after the STC rebate?","answer":"After. GST is calculated on the post-rebate subtotal."},{"question":"Do I need to show the number of STCs on the invoice?","answer":"Yes. State the number of certificates and the assignment price for transparency and for finance lenders."},{"question":"What if the client does not want to assign their STCs?","answer":"Remove the rebate line item. The invoice shows the full gross cost and the client arranges their own STC assignment."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  5,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'rubbish-removal-invoice-template-australia',
  'Rubbish Removal Invoice Template Australia: Load Rates, Tip Fees and GST',
  $content$# Rubbish Removal Invoice Template Australia: Load Rates, Tip Fees and GST

A rubbish removal invoice in Australia should include your business name, ABN, invoice number, date, customer name and collection address, load size, waste type, tip fees, labour, and GST if registered. The best rubbish removal invoice template separates load rates from tip fees so customers understand what they paid for collection vs disposal — two separate costs that vary per job.

This guide gives rubbish removal businesses a practical invoice structure, then shows how [SMASH for rubbish removal](/for-rubbish-removal) generates the invoice from a voice description in under 60 seconds.

## The basic rubbish removal invoice format

1. Business name, ABN, vehicle registration or licence if applicable.
2. Customer name, billing address, and collection address.
3. Invoice number, invoice date, payment due date.
4. Load size: quarter, half, or full truck.
5. Waste type: general household, hard rubbish, green waste, soil, construction.
6. Labour line item.
7. Tip fee line item: rate by waste type.
8. Additional charges: heavy items, stairs, long carry.
9. GST if registered.
10. Payment link.

## Example rubbish removal invoice line items

For a full truck load of general waste:

> Labour — 2 crew, 2 hours @ $90/hr = $180.00.

> Full truck load — general household waste = $220.00.

> Tip fee — general waste @ $95/T, estimated 1T = $95.00.

For hard rubbish:

> Half truck load — hard rubbish (furniture, mattress) = $150.00.

> Tip fee — hard rubbish surcharge = $35.00.

For a commercial site cleanout:

> Labour — 2 crew, full day @ $400/crew-day = $800.00.

> Full truck load × 3 — construction waste = $780.00.

> Tip fee — builder's rubble, 3× disposal = $420.00.

## Why tip fees are separate from load rates

Your load rate covers your truck, your time, and your collection labour. Your tip fee is a pass-through cost — the tip charges you based on waste weight and type. These vary per job and should not be absorbed into a flat load rate.

Clients who understand the difference between collection and disposal are less likely to dispute the invoice total when it is higher than expected.

## Using voice invoicing for rubbish removal

With [SMASH for rubbish removal](/for-rubbish-removal):

> "Full truck load clearance at the Glebe property. General household waste, half a load of soil, garden waste. Tip fees for mixed load. Two hours labour."

Invoice sent with separated load rates and tip fees. Client pays from the link before you pull away.

**Frequently asked questions:**

**What should a rubbish removal invoice include?** ABN, load size, waste type, load rate, labour, tip fee by waste type, and GST.

**Should tip fees be listed separately?** Yes. Tip fees are a pass-through cost that varies per load. Separate line items prevent disputes when the total is higher than expected.

**Can I charge different rates for different waste types?** Yes. Soil, construction waste, and green waste have different tip rates. Store each in SMASH and apply the correct rate per waste type.

**Can clients pay by card?** Yes. SMASH invoices include a payment link. Clients pay immediately.
$content$,
  'What rubbish removal businesses should include on invoices: ABN, load rates by size, tip fees by waste type, labour, GST and payment terms.',
  '/images/blog/rubbish-removal-invoice-template.jpg',
  'Rubbish removal operator generating invoice on phone after completing collection',
  'Rubbish Removal Invoice Template Australia: Load Rates, Tip Fees and GST',
  'What to include on a rubbish removal invoice in Australia: ABN, load rates, tip fees by waste type, labour, GST and payment terms.',
  'rubbish removal invoice template Australia',
  ARRAY['rubbish removal invoice template', 'junk removal invoice', 'waste removal invoice Australia', 'tip fee invoice rubbish removal', 'hard rubbish invoice'],
  ARRAY['Separate load rate from tip fee — they are different costs that vary per job.', 'Price tip fees by waste type (general, soil, green, construction) as separate line items.', 'Commercial site cleanouts with multiple loads should list each load separately.', 'SMASH generates the full rubbish removal invoice from a voice description in under 60 seconds.'],
  '[{"question":"What should a rubbish removal invoice include?","answer":"ABN, load size, waste type, load rate, labour, tip fee by waste type, and GST."},{"question":"Should tip fees be listed separately?","answer":"Yes. Tip fees are a pass-through cost that varies per load. Separate line items prevent disputes."},{"question":"Can I charge different rates for different waste types?","answer":"Yes. Store each waste type rate in SMASH and apply the correct rate per job."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  4,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'how-to-invoice-rubbish-removal-tip-fees',
  'How to Invoice Rubbish Removal Tip Fees: Waste Types, Weight, and Disposal Charges',
  $content$# How to Invoice Rubbish Removal Tip Fees: Waste Types, Weight, and Disposal Charges

Tip fees are the most variable cost in rubbish removal — they depend on the waste type, weight, and the tip you use. Getting tip fees wrong on invoices leads to margin loss (when you undercharge) or client disputes (when the total is higher than expected). This guide shows how to invoice tip fees correctly by waste type.

## Why tip fees vary by waste type

Tips charge differently for different waste types because of disposal and processing costs:

- **General household waste**: Standard charge per tonne.
- **Green waste**: Often cheaper — processed for composting.
- **Soil**: Often charged separately — heavier, different disposal process.
- **Construction and demolition**: Higher charge per tonne — mixed materials, sorting required.
- **Hazardous**: Highest charge — asbestos, chemicals, or contaminated materials.
- **E-waste**: TV, computer, appliance — often a flat fee per item.

If you use a single flat tip fee regardless of waste type, you are either losing money on heavy or mixed loads or overcharging on simple green waste collections.

## How to price tip fees on invoices

The most accurate approach:

> Tip fee — general waste, est. 0.8T @ $95/T = $76.00.

> Tip fee — soil, 0.5T @ $140/T = $70.00.

> Tip fee — green waste, est. 0.3T @ $65/T = $19.50.

For jobs where you cannot estimate weight precisely:

> Tip fee — mixed load (general + garden), 1 full truck, allowance = $180.00.

State clearly that it is an allowance. If the actual tip charge varies significantly, some operators charge the actual tip receipt amount plus a handling fee.

## Handling charges

A handling charge covers your time loading, transporting, and queuing at the tip:

> Handling charge — tip run, 1 hour allowance @ $90/hr = $90.00.

Or build the handling charge into your tip fee rate. Either is legitimate — just be consistent and transparent.

## How to invoice commercial site cleanouts with multiple tip runs

> Labour — 2 crew, full day.

> Trip 1 — full load, general waste, tip fee included.

> Trip 2 — full load, construction rubble, tip fee (higher rate).

> Trip 3 — full load, soil, tip fee (heavy load rate).

Three separate tip fee lines. The client can see exactly what each trip to the tip cost and why the second and third trips cost more than the first.

## Using voice invoicing for tip fees

With [SMASH for rubbish removal](/for-rubbish-removal):

> "Commercial site cleanout at the Newtown development. Three full loads, construction waste, tip fees for builder's rubble. Day rate for two crew."

SMASH separates the loads and adds the tip fees as separate line items. Invoice sent from the van before you leave the site.

**Frequently asked questions:**

**Should tip fees be charged separately from load rates?** Yes. Tip fees are a pass-through cost that varies by waste type and weight. Separate line items are clearer for clients and protect your margin.

**Can I pass through the actual tip receipt to the client?** Yes. Some operators attach the tip docket or reference the receipt amount on the invoice. This is transparent and easy to verify.

**What if I underestimate the tip fee?** Note on the invoice that tip fees are estimated and may vary. If the actual cost is significantly higher, add a supplementary invoice line or adjust the total before sending.

**How do I handle hazardous waste tip fees?** Hazardous waste disposal is typically quoted separately before the job. Include the actual tip cost as a line item and specify the waste type clearly.
$content$,
  'How to price and show different waste type tip fees on rubbish removal invoices without client disputes and margin loss.',
  '/images/blog/rubbish-removal-tip-fees-invoice.jpg',
  'Rubbish removal truck at tip with operator generating invoice on phone',
  'How to Invoice Rubbish Removal Tip Fees in Australia',
  'How to invoice rubbish removal tip fees by waste type in Australia. General waste, soil, construction, green waste and hazardous disposal charges on professional invoices.',
  'rubbish removal tip fees invoice',
  ARRAY['tip fee invoice rubbish removal', 'waste disposal invoice', 'rubbish removal disposal charges', 'construction waste tip fee invoice Australia'],
  ARRAY['Charge tip fees by waste type — different waste types have different disposal costs.', 'List each waste type as a separate tip fee line item so clients understand the charge.', 'Commercial site cleanouts with multiple tip runs need a separate line item for each trip.', 'SMASH generates the multi-line tip fee invoice from a voice description in under 60 seconds.'],
  '[{"question":"Should tip fees be separate from load rates?","answer":"Yes. Tip fees are a pass-through cost that varies by waste type and weight. Separate line items protect your margin."},{"question":"Can I pass through the actual tip receipt?","answer":"Yes. Some operators reference the receipt amount on the invoice for full transparency."},{"question":"What if I underestimate the tip fee?","answer":"Note on the invoice that tip fees are estimated. Add a supplementary line or adjust before sending if the actual cost differs significantly."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  4,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'it-repair-invoice-template-australia',
  'IT Repair Invoice Template Australia: Callout Fee, Labour, Parts and GST',
  $content$# IT Repair Invoice Template Australia: Callout Fee, Labour, Parts and GST

An IT repair invoice in Australia should include your business name, ABN, invoice number, date, client name, site address, callout fee, labour (on-site or remote rate, hours), parts with markup if applicable, and GST if registered. The best IT repair invoice template separates callout, labour, and parts so business clients can reconcile the invoice against their IT budget.

This guide gives IT repair technicians a practical invoice structure, then shows how [SMASH for IT repair](/for-it-repair) generates the invoice from a voice description in under 60 seconds.

## The basic IT repair invoice format

1. Business name, ABN, contact details.
2. Client name and site address.
3. Invoice number, date, payment due date.
4. Job description: device type, problem, action taken.
5. Callout fee.
6. Labour: on-site or remote, hours × rate.
7. Parts: component name, buy price + markup shown as sell price.
8. GST if registered.
9. Payment terms (residential: NET 7; business: NET 14 or NET 30).

## Example IT repair invoice line items

For an on-site business callout:

> Callout fee — on-site business rate.

> Labour — on-site, 1.5 hours @ $140/hr = $210.00.

> Parts — 1TB SSD (replaced failed drive) = $145.00.

For a remote support session:

> Remote support — 45 minutes @ $120/hr = $90.00.

No callout fee for remote. No parts.

For a diagnostic-only callout:

> Callout fee — residential.

> Diagnostic — assessed faulty motherboard, repair not proceeded.

## Using voice invoicing for IT repair

With [SMASH for IT repair](/for-it-repair):

> "On-site callout at Harris Accounting. Replaced a failed SSD in the partner's laptop, restored from backup, 90 minutes work. New SSD is the 1TB I buy in at $80."

SMASH splits into callout fee, labour, and parts (with markup applied). GST calculated. Invoice sent from the carpark.

**Frequently asked questions:**

**What should an IT repair invoice include?** ABN, callout fee, labour (on-site or remote, hours and rate), parts with markup, GST, and payment terms.

**Can I charge different rates for remote vs on-site?** Yes. Set both rates in SMASH. Mention remote or on-site in the voice description.

**How do I invoice a diagnostic-only callout?** Mention "diagnostic only" in the voice input. SMASH produces a callout + diagnostic invoice with no labour or parts lines.

**Can I use NET 30 for business clients?** Yes. Set payment terms per client in SMASH — they appear on every invoice for that client automatically.
$content$,
  'What IT technicians should include on invoices: ABN, callout fee, on-site and remote labour rates, parts with markup, GST and payment terms.',
  '/images/blog/it-repair-invoice-template.jpg',
  'IT repair technician generating invoice on phone after completing on-site callout',
  'IT Repair Invoice Template Australia: Callout Fee, Labour and Parts',
  'What to include on an IT repair invoice in Australia: ABN, callout fee, remote and on-site rates, parts markup, GST and payment terms for IT technicians.',
  'IT repair invoice template Australia',
  ARRAY['IT repair invoice template', 'computer repair invoice', 'IT callout fee invoice', 'tech support invoice Australia', 'IT technician invoice'],
  ARRAY['Separate callout fee, labour, and parts into three distinct line items on every IT invoice.', 'Remote support invoices do not include a callout fee — labour only.', 'Store parts markup rules in SMASH so the sell price is calculated automatically.', 'Business clients often expect NET 14 or NET 30 — set payment terms per client in SMASH.'],
  '[{"question":"What should an IT repair invoice include?","answer":"ABN, callout fee, labour (on-site or remote, hours and rate), parts with markup, GST, and payment terms."},{"question":"Can I charge different rates for remote vs on-site?","answer":"Yes. Set both rates in SMASH. Mention remote or on-site in the voice description."},{"question":"Can I use NET 30 for business clients?","answer":"Yes. Set payment terms per client in SMASH — they appear on every invoice for that client automatically."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  4,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'how-to-invoice-computer-repair-parts-and-labour',
  'How to Invoice Computer Repair Parts and Labour: Callout, Markup, Business Rates',
  $content$# How to Invoice Computer Repair Parts and Labour: Callout, Markup, Business Rates

Computer repair invoices that bundle callout, labour, and parts into a single amount get queried. Business clients want to see each component separately for budget reconciliation, and residential clients query lump sums when the total feels higher than expected. The correct approach is three line items: callout fee, labour, and parts at sell price.

## The three-line IT repair invoice

Every IT callout invoice should have at minimum:

> Callout fee — on-site residential: $95.00.

> Labour — 1.5 hrs @ $130/hr: $195.00.

> Parts — 1TB Crucial MX500 SSD (replaced failed drive): $145.00.

Total is the sum. Simple for the client to read. Easy to reconcile.

## How to mark up parts correctly

Your buy price for a part is not the client price. A 25–40% margin on parts is standard:

- Buy: $80.00
- Sell (30% margin): $104.00

Do not show the buy price on the invoice. Show the sell price and describe the part clearly. If a client asks why the SSD costs $145, you can explain it includes sourcing and handling.

Store parts in SMASH with buy price and markup percentage. When you mention a part in your voice description, SMASH calculates and applies the sell price automatically.

## Remote support invoicing

Remote support sessions do not include a callout fee:

> Remote support — 45 minutes @ $120/hr = $90.00.

If there were no parts, the invoice has a single line. Send it immediately after the session while the client is still on the call.

## Business client invoicing

Business clients often have specific requirements:

- NET 14 or NET 30 payment terms
- PO (purchase order) number reference on the invoice
- Description of the system affected, not just the work done
- Sometimes require your ABN and their ABN on the invoice

Set business client profiles in SMASH with their payment terms. The terms appear on every invoice automatically. For PO numbers, add them to the client notes or the invoice notes field.

## MSP recurring invoices

For managed service providers with monthly retainer clients:

> Monthly managed services — November retainer, Coastal Legal Pty Ltd = $450.00.

> Ad-hoc callout — on-site, 14 Nov, server issue, 2 hours @ $160/hr = $320.00.

> Total November invoice: $770.00 + GST.

Two line items: retainer and callout. The client can see what is included in the retainer and what triggered additional charges.

**Frequently asked questions:**

**Can I markup parts on IT repair invoices?** Yes. 25–40% on parts is standard. Show the sell price on the invoice, not the buy price.

**Should remote support have a callout fee?** No. Remote support invoices typically have labour only. No callout fee if there was no travel.

**How do I invoice MSP clients?** Monthly retainer as a line item plus any ad-hoc callouts in the same billing period. One invoice per billing cycle.

**Can I require a PO number from business clients?** Yes. Add the PO number to the invoice notes field in SMASH.
$content$,
  'How to show callout fees, remote vs on-site rates, parts with markup, and business client terms on IT repair invoices in Australia.',
  '/images/blog/computer-repair-parts-invoice.jpg',
  'IT technician invoicing computer repair with parts and labour line items on phone',
  'How to Invoice Computer Repair Parts and Labour in Australia',
  'How to invoice computer repair correctly: callout fee, remote vs on-site rates, parts with markup, business client terms, and MSP recurring invoices in Australia.',
  'computer repair parts and labour invoice',
  ARRAY['computer repair parts invoice', 'IT repair labour invoice', 'parts markup IT invoice', 'MSP invoice Australia', 'computer repair callout fee'],
  ARRAY['Every IT callout invoice needs three lines: callout fee, labour, and parts at sell price.', 'Apply a 25–40% margin on parts — store the markup rule in SMASH for automatic calculation.', 'Remote support invoices do not include a callout fee — labour only.', 'MSP clients need a retainer line plus any ad-hoc callout lines in the same invoice.'],
  '[{"question":"Can I markup parts on IT repair invoices?","answer":"Yes. 25–40% on parts is standard. Show the sell price on the invoice, not the buy price."},{"question":"Should remote support have a callout fee?","answer":"No. Remote support invoices typically have labour only."},{"question":"How do I invoice MSP clients?","answer":"Monthly retainer as a line item plus any ad-hoc callouts in the same billing period. One invoice per billing cycle."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  5,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'appliance-repair-invoice-template-australia',
  'Appliance Repair Invoice Template Australia: Callout Fee, Labour, Parts and GST',
  $content$# Appliance Repair Invoice Template Australia: Callout Fee, Labour, Parts and GST

An appliance repair invoice in Australia should include your business name, ABN, invoice number, date, customer name and property address, callout fee, labour (hours × rate), parts with markup, diagnostic fee if no repair proceeded, and GST if registered. The correct format separates callout, labour, and parts so residential clients understand the charge and commercial clients can reconcile against their records.

This guide gives appliance repair technicians a practical invoice structure, then shows how [SMASH for appliance repair](/for-appliance-repair) generates the invoice from a voice description in under 60 seconds.

## The basic appliance repair invoice format

1. Business name, ABN, contact details.
2. Customer name and property address.
3. Invoice number, date, payment due date.
4. Appliance type and fault description.
5. Callout fee (standard, weekend, or after-hours).
6. Labour: hours × rate.
7. Parts: component name at sell price.
8. Diagnostic fee if repair did not proceed.
9. GST if registered.
10. Payment link.

## Example appliance repair invoice line items

For a washing machine repair:

> Callout fee — residential.

> Labour — 45 minutes @ $110/hr = $82.50.

> Parts — drain pump, Bosch 00650913 (marked up) = $112.00.

For a diagnostic-only callout:

> Callout fee — residential.

> Diagnostic — assessed faulty compressor. Repair not proceeded.

For a commercial oven repair:

> Callout fee — commercial.

> Labour — 2 hours @ $145/hr = $290.00.

> Parts — oven thermostat, standard markup = $85.00.

## Using voice invoicing for appliance repair

With [SMASH for appliance repair](/for-appliance-repair):

> "Washing machine repair at 14 Grant Street. Replaced the drain pump, 45 minutes labour. Callout as normal."

Three lines. Invoice sent. Client pays from the driveway.

**Frequently asked questions:**

**What should an appliance repair invoice include?** ABN, callout fee, labour (hours and rate), parts with markup, diagnostic fee if applicable, and GST.

**Can I charge different rates for commercial appliance repair?** Yes. Set residential and commercial rate cards in SMASH. Mention the job type and SMASH applies the right rate.

**How do I invoice a diagnostic-only callout?** Mention "diagnostic only" in the voice input. SMASH produces a callout + diagnostic invoice without a labour or parts line.

**Can I include weekend and after-hours callout rates?** Yes. Set each rate type as a catalog preset. Mention the rate type in your voice description.
$content$,
  'What appliance repair technicians should include on invoices: ABN, callout fee, labour, parts markup, diagnostic-only format, GST and payment terms.',
  '/images/blog/appliance-repair-invoice-template.jpg',
  'Appliance repair technician generating invoice on phone in client driveway',
  'Appliance Repair Invoice Template Australia: Callout Fee, Labour and Parts',
  'What to include on an appliance repair invoice in Australia: ABN, callout fee, labour, parts with markup, diagnostic-only format, GST and payment terms.',
  'appliance repair invoice template Australia',
  ARRAY['appliance repair invoice template', 'whitegoods repair invoice', 'appliance callout fee invoice', 'fridge repair invoice Australia', 'washing machine repair invoice'],
  ARRAY['Separate callout fee, labour, and parts into three distinct line items.', 'Diagnostic-only callouts need a clean invoice format showing callout + diagnostic fee, no labour or parts.', 'Store parts markup rules in SMASH so the sell price is calculated automatically.', 'After-hours and weekend callout rates are preset catalog items — mention them in the voice description.'],
  '[{"question":"What should an appliance repair invoice include?","answer":"ABN, callout fee, labour (hours and rate), parts with markup, diagnostic fee if applicable, and GST."},{"question":"How do I invoice a diagnostic-only callout?","answer":"Mention diagnostic only in the voice input. SMASH produces a callout + diagnostic invoice without labour or parts lines."},{"question":"Can I include weekend callout rates?","answer":"Yes. Set each rate type as a catalog preset in SMASH. Mention the rate type in your voice description."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  4,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'how-to-invoice-appliance-repair-callouts',
  'How to Invoice Appliance Repair Callouts: Diagnostic, Parts, After-hours and Commercial',
  $content$# How to Invoice Appliance Repair Callouts: Diagnostic, Parts, After-hours and Commercial

Appliance repair invoicing has four distinct scenarios that each require a different invoice structure: standard repairs, diagnostic-only callouts, after-hours callouts, and commercial appliance work. Getting the format right for each prevents disputes and ensures you capture your full margin.

## Standard repair callout

The most common scenario:

> Callout fee — residential standard.

> Labour — 1 hour @ $110/hr = $110.00.

> Parts — element, Westinghouse compatible (marked up) = $95.00.

Three lines. The client understands they paid: callout to show up, labour to fix it, and the part that was replaced.

## Diagnostic-only callout

Sometimes the repair is not economical or the client declines. Invoice for the callout and diagnostic:

> Callout fee — residential.

> Diagnostic fee — assessed appliance, advised on repair options. Repair not proceeded.

No labour or parts line. The diagnostic fee covers your assessment time. It is separate from the callout — the callout covers travel, the diagnostic covers the assessment.

Some technicians combine these into a single "callout + diagnostic" flat fee. Either is acceptable — be consistent.

## After-hours and weekend callouts

> Callout fee — after-hours / weekend.

> Labour — 45 minutes @ $165/hr (weekend rate) = $123.75.

> Parts — door seal, standard markup = $75.00.

State the rate type clearly. Clients who called you on a Saturday morning understand they are paying more — but they should see it explicitly on the invoice, not buried in an unexplained high total.

## Commercial appliance repair

Commercial clients (cafes, restaurants, hotels) require:

- Higher labour rate (commercial rate)
- A business name and ABN on the invoice, not just an address
- Often NET 14 or NET 30 payment terms
- Description of the appliance with serial number or asset tag

> Callout fee — commercial.

> Labour — 2 hours @ $145/hr (commercial) = $290.00.

> Parts — thermostat, commercial oven, marked up = $185.00.

> Client: The Merchant Cafe, ABN XX XXX XXX XXX.

Set commercial clients as saved profiles in SMASH with their ABN and payment terms. Every invoice for that client defaults to commercial rate and NET 14 automatically.

## Getting paid from the driveway

For residential clients, the invoice payment link is your fastest payment tool:

1. Send the invoice from the driveway using [SMASH](/for-appliance-repair) — 60 seconds.
2. Client receives the invoice on their phone before you drive away.
3. They tap the payment link and pay by card immediately.
4. Payment confirmed to your account within minutes.

No cash. No bank transfer. No chasing.

**Frequently asked questions:**

**Should I charge a separate diagnostic fee?** Yes, if the repair does not proceed. The callout covers travel, the diagnostic covers your assessment time. Some operators combine them into a flat "call out and assess" fee.

**Can I charge more for commercial appliance repair?** Yes. Commercial clients are typically charged 20–35% more than residential. Set separate rate cards in SMASH.

**How do I invoice after-hours without confusing the client?** State the rate type clearly: "after-hours rate applies — callout attended Saturday 7:30am." The client expects it; the invoice should confirm it.

**Can I add a serial number to the invoice?** Yes. Add the appliance serial number or asset tag to the job description field in SMASH.
$content$,
  'How to structure callout, diagnostic-only, parts, after-hours, and commercial invoices for whitegoods and appliance repair technicians.',
  '/images/blog/appliance-repair-callout-invoice.jpg',
  'Appliance repair technician invoicing after completing washing machine repair on phone',
  'How to Invoice Appliance Repair Callouts in Australia',
  'How to invoice appliance repair callouts correctly: diagnostic-only, after-hours rates, commercial clients, and getting paid from the driveway in Australia.',
  'appliance repair callout invoice',
  ARRAY['appliance repair callout invoice', 'diagnostic fee appliance repair', 'after-hours appliance repair invoice', 'commercial appliance repair invoice Australia'],
  ARRAY['Diagnostic-only callouts need a separate diagnostic fee line — separate from the callout fee.', 'After-hours and weekend rate invoices should explicitly state the rate type to prevent disputes.', 'Commercial clients need their ABN, a business name, and NET 14 or NET 30 payment terms.', 'Send the invoice from the driveway with SMASH — 60 seconds, client pays by card before you leave.'],
  '[{"question":"Should I charge a separate diagnostic fee?","answer":"Yes, if the repair does not proceed. The callout covers travel, the diagnostic covers your assessment time."},{"question":"Can I charge more for commercial appliance repair?","answer":"Yes. Commercial clients are typically charged 20–35% more than residential."},{"question":"How do I invoice after-hours correctly?","answer":"State the rate type clearly on the invoice: after-hours rate applies — callout attended at specific time and day."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  5,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'security-installer-invoice-template-australia',
  'Security Installer Invoice Template Australia: Equipment, Cable, Labour and GST',
  $content$# Security Installer Invoice Template Australia: Equipment, Labour, Cable and GST

A security system installation invoice in Australia should include your business name, ABN, security contractor licence number, invoice number, date, customer name and site address, equipment line items with model numbers and markup, cable runs by the metre, labour hours and rate, optional monitoring or service plan, and GST if registered.

This guide gives alarm, CCTV, and access control installers a practical invoice structure, then shows how [SMASH for security installers](/for-security-installers) generates the invoice from a voice description in under 60 seconds.

## The basic security installer invoice format

1. Business name, ABN, security contractor licence number.
2. Customer name and installation address.
3. Invoice number, date, payment due date.
4. System description: "4-camera CCTV system — 12 Harrow Road" or "alarm upgrade — residential".
5. Equipment line items: brand, model, quantity, and sell price.
6. Cable runs: type (Cat 6, coax, alarm cable), metres, and rate.
7. Labour: residential or commercial rate, hours.
8. Monitoring or service plan if applicable.
9. GST if registered.
10. Payment link for residential clients.

## Example security installer invoice line items

For a CCTV installation:

> 4× Hikvision DS-2CD2143G2-I 4MP bullet camera @ $195 each = $780.00.

> 1× Hikvision DS-7608NXI-I2/S 8-ch NVR = $420.00.

> Cable — Cat 6 UTP, 60 metres @ $3.20/m = $192.00.

> Labour — residential install, 4 hours @ $110/hr = $440.00.

For an alarm upgrade:

> Bosch Solution 2000 alarm panel = $385.00.

> 2× Bosch ISC-BPR2-W12 PIR sensor @ $95 each = $190.00.

> DS150 keypad = $145.00.

> Labour — 2 hours @ $110/hr = $220.00.

> 12-month monitoring — Alarm.com platform = $360.00.

## Why separate equipment and cable on security invoices

Bundling equipment, cable, and labour into a single "installation" line item creates two problems:

1. Commercial clients with IT procurement policies cannot reconcile the invoice
2. If there is a warranty dispute over a specific camera or component, you cannot identify what was charged for it

Separate line items for each piece of equipment, with model numbers, protect both you and the client.

## Quote to invoice conversion for security installs

After a site inspection, you quote the system. The client accepts. You install, commission, and invoice.

With [SMASH](/for-security-installers), convert the accepted quote to an invoice in one tap — no re-keying eight equipment lines. The invoice matches the quote, the client expects the amount, and payment is straightforward.

**Frequently asked questions:**

**What should a security installer invoice include?** ABN, licence number, equipment with model numbers, cable runs by metre, labour rate, monitoring if applicable, and GST.

**Can I price cable by the metre?** Yes. Store metre rates for Cat 6, coax, and alarm cable in SMASH. Mention metres and SMASH calculates the cable cost.

**Can I convert a quote to an invoice?** Yes. Quote the system before install. Convert to invoice on completion with one tap in SMASH.

**Do commercial clients accept SMASH invoices?** Yes. SMASH generates ATO-compliant tax invoices with ABN, sequential numbering, and GST — accepted by businesses and body corporates.
$content$,
  'What security system installers should include on invoices: ABN, licence number, equipment models, cable pricing, labour, monitoring, GST and payment terms.',
  '/images/blog/security-installer-invoice-template.jpg',
  'Security installer generating invoice on phone after completing CCTV installation',
  'Security Installer Invoice Template Australia: Equipment, Cable and GST',
  'What to include on a security installation invoice in Australia: ABN, licence number, equipment model numbers, cable runs by metre, labour, monitoring, GST and payment terms.',
  'security installer invoice template Australia',
  ARRAY['security installer invoice template', 'CCTV installation invoice', 'alarm system invoice Australia', 'access control invoice', 'security system invoice'],
  ARRAY['List every piece of equipment with model number and sell price as a separate line item.', 'Cable runs should be priced by the metre — not absorbed into labour.', 'Commercial clients need your licence number and ABN on every invoice.', 'SMASH converts accepted quotes to invoices in one tap — no re-keying equipment lists.'],
  '[{"question":"What should a security installer invoice include?","answer":"ABN, licence number, equipment with model numbers, cable runs by metre, labour rate, monitoring if applicable, and GST."},{"question":"Can I price cable by the metre?","answer":"Yes. Store metre rates in SMASH. Mention metres and SMASH calculates the cable cost."},{"question":"Can I convert a quote to an invoice?","answer":"Yes. Quote before install. Convert to invoice on completion with one tap in SMASH."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  4,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'how-to-invoice-cctv-and-alarm-installations',
  'How to Invoice CCTV and Alarm Installations: Equipment Lists, Cable, Monitoring',
  $content$# How to Invoice CCTV and Alarm Installations: Equipment Lists, Cable, Monitoring

CCTV and alarm invoices are some of the most complex in the trade service industry — multiple equipment lines, cable runs by the metre, labour hours, and optional monitoring or service contracts. Getting the format right speeds up payment, prevents disputes, and makes quote-to-invoice conversion seamless.

## Equipment line items for CCTV invoices

For a 4-camera CCTV system, the invoice should show each component separately:

> 4× Hikvision 4MP dome camera, DS-2CD2143G2-I @ $185 each = $740.00.

> 1× Hikvision 8-channel NVR, DS-7608NXI-I2 = $390.00.

> 1× 2TB surveillance HDD = $145.00.

> 1× 27" 4K monitor for NVR = $280.00.

> Cable — Cat 6 UTP, 60m @ $3.20/m = $192.00.

> Labour — system install and configuration, 5 hours @ $110/hr = $550.00.

Total: $2,297.00 + GST.

Do not bundle "CCTV system supplied and installed" as a single line. The client (especially a commercial client) needs to see what they got.

## Alarm system invoice format

For an alarm upgrade:

> Bosch Solution 3000 panel = $485.00.

> 3× ISC-BPR2-W12 PIR sensor @ $95 each = $285.00.

> 1× IUI-SOL-TS7 touchscreen keypad = $245.00.

> 1× siren/strobe unit = $135.00.

> Cable — alarm cable, 25m @ $1.80/m = $45.00.

> Labour — upgrade and commissioning, 3 hours @ $110/hr = $330.00.

> 12-month monitoring — Alarm.com, including app access = $360.00.

Total: $1,885.00 + GST.

## Monitoring and service plan line items

Monthly or annual monitoring should always be a separate line item:

> 12-month monitoring agreement — Alarm.com Gold plan = $420.00.

> First 12-month payment included on this invoice.

If the client's monitoring is billed monthly, invoice it as a recurring line or generate a separate monthly invoice. SMASH handles both — add the monitoring as a catalog item and include it on the initial installation invoice, then set up separate monthly invoices for the recurring charge.

## Access control invoice format

Access control systems have more components than CCTV or alarms:

> 2× HID Signo 20K card reader @ $295 each = $590.00.

> 1× HID VertX EVO V1000 controller = $445.00.

> 2× DU-1A-U 600kg magnetic lock @ $195 each = $390.00.

> 2× door release button @ $45 each = $90.00.

> Cable — Cat 6 + power, 40m = $175.00.

> Labour — install, commissioning, and access card programming, 6 hours @ $125/hr (commercial) = $750.00.

Total: $2,440.00 + GST.

## Quote to invoice for security installers

The site inspection generates a quote. The client approves. You install. You invoice.

With [SMASH for security installers](/for-security-installers):

1. Quote from the site inspection using voice — describe the system you plan to install.
2. Client approves the quote.
3. After installation, convert the quote to an invoice with one tap.
4. Adjust any line items that changed during installation (e.g. extra cable run).
5. Send the invoice before you leave the site.

No re-keying eight equipment lines from memory. The invoice matches the quote the client approved.

**Frequently asked questions:**

**Should I list every camera and sensor separately?** Yes. Commercial clients need to see model numbers and quantities for asset registers. Residential clients appreciate knowing what they got.

**How do I invoice cable runs?** Store metre rates for each cable type in SMASH. Mention the cable type and metres in the voice description. SMASH calculates and adds the line item.

**Can I include monitoring on the installation invoice?** Yes. Add the monitoring plan as a catalog item. Include it as a line item on the installation invoice showing the first year cost.

**What if the installation takes longer than quoted?** Adjust the labour hours before converting the quote to invoice. The client sees the difference clearly — you can add a brief explanation in the job notes field.
$content$,
  'How to structure security installation invoices with equipment lists, cable pricing, monitoring add-ons, and quote-to-invoice conversion.',
  '/images/blog/cctv-alarm-installation-invoice.jpg',
  'Security installer reviewing CCTV installation invoice with equipment line items on phone',
  'How to Invoice CCTV and Alarm Installations in Australia',
  'How to invoice CCTV and alarm installations in Australia: equipment lists with model numbers, cable by the metre, monitoring add-ons, and quote-to-invoice conversion.',
  'CCTV alarm installation invoice',
  ARRAY['CCTV installation invoice', 'alarm system invoice Australia', 'security installation invoice equipment', 'access control invoice', 'monitoring plan invoice security'],
  ARRAY['List every camera, sensor, and component as a separate line item with model number.', 'Cable runs are separate line items priced by the metre — not absorbed into labour.', 'Monitoring plans are added as a separate line on the installation invoice for the first year.', 'SMASH converts accepted security quotes to invoices in one tap — no re-keying equipment lists.'],
  '[{"question":"Should I list every camera and sensor separately?","answer":"Yes. Commercial clients need model numbers for asset registers. Residential clients appreciate knowing what they got."},{"question":"How do I invoice cable runs?","answer":"Store metre rates in SMASH. Mention cable type and metres in the voice description — SMASH calculates and adds the line item."},{"question":"What if installation takes longer than quoted?","answer":"Adjust the labour hours before converting quote to invoice. Add a brief explanation in the job notes field."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  5,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'fencing-invoice-template-australia',
  'Fencing Invoice Template Australia: Metre Rates, Gates, Removal and GST',
  $content$# Fencing Invoice Template Australia: Metre Rates, Gates, Removal and GST

A fencing invoice in Australia should include your business name, ABN, contractor licence if applicable, invoice number, date, customer name and property address, fence type, lineal metres, metre rate, gate details, removal and disposal if included, hardware, labour, and GST if registered. The best fencing invoice template separates each fence type, each gate, and removal — so clients can see exactly what they paid for and builders can approve the invoice without calling back.

This guide gives fencing contractors a practical invoice structure, then shows how [SMASH for fencers](/for-fencers) generates the invoice from a voice description in under 60 seconds.

## The basic fencing invoice format

1. Business name, ABN, and contractor licence number if applicable.
2. Customer name and property address.
3. Invoice number, date, payment due date.
4. Fence type: Colorbond, timber paling, post-and-rail, pool glass, aluminium.
5. Lineal metres × rate per metre.
6. Gate: type, size, and price.
7. Hardware: latches, hinges, drop bolts.
8. Removal and disposal of existing fence if applicable.
9. Labour if invoicing separately (most fencing is supply and install).
10. GST if registered.
11. Payment link.

## Example fencing invoice line items

For a Colorbond boundary fence:

> Colorbond fence — 1.8m high, 28 lineal metres @ $195/m = $5,460.00.

> Gate — 900mm pedestrian, standard latch = $485.00.

> Removal — existing timber fence, 28m @ $18/m = $504.00.

> Disposal — timber fence removal = $85.00.

For a timber paling fence:

> Treated pine paling — 1.8m high, 14 lineal metres @ $145/m = $2,030.00.

> Gate — 1.8m double timber gate = $380.00.

> Hardware — gate latch and hinges = $65.00.

For a pool fence:

> Frameless glass pool fence — 32 lineal metres @ $390/m = $12,480.00.

> Gate panels × 6, compliant latch and hinges × 6 = $1,890.00.

> Labour — installation, 3 days, 2 crew @ $400/crew-day = $2,400.00.

## Metre rate per fence type

Maintain separate metre rates for:

- Colorbond: 1.5m, 1.8m, 2.1m heights
- Timber paling: treated pine, hardwood
- Post-and-rail: 2 rail, 3 rail, 4 rail
- Pool fence: aluminium, semi-frameless, frameless glass
- Retaining fencing (if applicable)

Store each in SMASH. Mention the type and height in your voice description — SMASH applies the right rate.

## Using voice invoicing for fencing

With [SMASH for fencers](/for-fencers):

> "28 metres of 1.8m Colorbond at 44 Pine Street. One 900mm pedestrian gate, standard latch. Remove old timber fence, 28 metres, and disposal."

Invoice with all lines from a single voice note.

**Frequently asked questions:**

**What should a fencing invoice include?** ABN, fence type, lineal metres, metre rate, gate details, hardware, removal and disposal, labour if separate, and GST.

**Should I charge separately for removal?** Yes. Removal and disposal are separate costs — list them as separate line items.

**Can I include gates as separate line items?** Yes. Gates have their own price — list each gate separately with size and hardware.

**Does SMASH handle pool fencing invoices?** Yes. Frameless glass, semi-frameless, and aluminium pool fence — each as a separate fence type with its own metre rate and compliant hardware items.
$content$,
  'What fencing contractors should include on invoices: ABN, metre rates by fence type, gates, hardware, removal, disposal, GST and payment terms.',
  '/images/blog/fencing-invoice-template.jpg',
  'Fencing contractor generating invoice on phone after completing Colorbond fence installation',
  'Fencing Invoice Template Australia: Metre Rates, Gates and GST',
  'What to include on a fencing invoice in Australia: ABN, metre rates by fence type, gate pricing, hardware, removal and disposal, GST and payment terms.',
  'fencing invoice template Australia',
  ARRAY['fencing invoice template', 'fence contractor invoice', 'Colorbond fence invoice Australia', 'pool fencing invoice', 'timber fence invoice'],
  ARRAY['List each fence type as a separate line item with lineal metres and metre rate.', 'Gates are separate line items — each gate with size, hardware, and price.', 'Removal and disposal are separate line items from the fence supply and install.', 'SMASH generates the fencing invoice from a voice description in under 60 seconds.'],
  '[{"question":"What should a fencing invoice include?","answer":"ABN, fence type, lineal metres, metre rate, gate details, hardware, removal and disposal, and GST."},{"question":"Should I charge separately for removal?","answer":"Yes. Removal and disposal are separate costs — list them as separate line items."},{"question":"Does SMASH handle pool fencing invoices?","answer":"Yes. Frameless glass, semi-frameless, and aluminium pool fence — each as a separate fence type with metre rate and compliant hardware items."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  4,
  true,
  NOW(),
  NOW(),
  NOW()
),
(
  'how-to-invoice-fencing-by-the-metre',
  'How to Invoice Fencing Jobs by the Metre: Colorbond, Timber, Pool and Gate Pricing',
  $content$# How to Invoice Fencing Jobs by the Metre: Colorbond, Timber, Pool and Gate Pricing

Fencing is a metre-rate trade. The complexity of fencing invoices comes from having multiple fence types on the same job, gates that are priced separately from the fence run, and removal that clients often forget they approved. This guide shows how to invoice each component correctly.

## Metre rate invoicing for different fence types

Maintain a separate metre rate for each fence type and height:

**Colorbond:**
> Colorbond fence — 1.8m high, 35m @ $185/m = $6,475.00.

**Timber paling (supply and install):**
> Treated pine paling — 1.8m, 20m @ $145/m = $2,900.00.

**Post-and-rail:**
> Post-and-rail — 3 rail, treated pine, 25m @ $95/m = $2,375.00.

**Frameless glass pool fence:**
> Frameless glass pool fence — 24m @ $390/m = $9,360.00.

The metre rate includes the supply of materials (posts, palings, mesh, or glass) and the labour to install them. If you are quoting labour-only (client supplied materials), use a lower labour-only rate and note it clearly.

## Gate invoicing

Gates are priced separately from the fence run — never include them in the metre rate:

> Gate — 900mm pedestrian, Colorbond, standard latch = $495.00.

> Gate — 3m double vehicle, Colorbond, self-closing hinges, drop bolt = $1,250.00.

> Gate — sliding gate 4m, Colorbond, motor and remote = $2,800.00.

For pool fencing:

> Frameless glass gate — compliant latch, 900mm, hinged = $485.00.

> Compliant self-closing hinge set × 2 = $95.00.

## Removal and disposal invoicing

Clients often forget they approved removal of the old fence. Having it as a clear line item prevents disputes:

> Removal — existing Colorbond fence, 35m @ $12/m = $420.00.

> Disposal — Colorbond metal, tip fee = $85.00.

For timber:

> Removal — existing timber paling fence, 20m @ $15/m = $300.00.

> Disposal — timber, tip fee = $95.00.

## Hardware as separate line items

Do not absorb hardware into the metre rate:

> Latch — D&D Technologies TruClose gate hinge set = $145.00.

> Drop bolt — steel, galvanised, 600mm = $65.00.

> Pool fence compliant latches × 6 @ $85 each = $510.00.

Hardware items are high-value, warrant their own line items, and give clients confidence they received quality components rather than the cheapest option.

## Using voice invoicing for fencing

With [SMASH for fencers](/for-fencers):

> "Pool fence at the Byron property. 32 metres of frameless glass, six gate panels, compliant latches. Commercial rate for labour, three days for two."

All components invoiced correctly from a single voice note. Invoice sent before you load the ute.

**Frequently asked questions:**

**Should I use one metre rate for the whole job?** No. Different fence types have different costs and should have different rates. List each fence type as a separate line.

**Do gates go in the metre rate?** No. Gates are priced separately — each gate has its own size, hardware, and price as a separate line item.

**Can I include removal as a line item?** Yes. Removal rates per metre by fence type are stored in SMASH as preset catalog items.

**How do I invoice pool fencing with compliance hardware?** Each compliant latch, hinge, and gate is a separate line item. The client (and council inspector) needs to see the compliance hardware clearly listed.
$content$,
  'How to price Colorbond, timber, pool and post-and-rail fencing with gates, hardware, removal and disposal on one professional invoice.',
  '/images/blog/fencing-metre-rate-invoice.jpg',
  'Fencing contractor walking fence line and generating quote on phone for client',
  'How to Invoice Fencing Jobs by the Metre in Australia',
  'How to invoice fencing by the metre in Australia: Colorbond, timber, pool fence, gates, hardware, removal and disposal on one professional invoice.',
  'fencing invoice by the metre',
  ARRAY['fencing by the metre invoice', 'Colorbond fence quote invoice', 'pool fencing invoice Australia', 'gate pricing fencing invoice', 'fence removal disposal invoice'],
  ARRAY['Use separate metre rates for each fence type — Colorbond, timber, pool glass, post-and-rail.', 'Gates are always separate line items — never absorbed into the fence metre rate.', 'Removal and disposal are separate line items listed clearly to prevent client disputes.', 'SMASH generates the fencing invoice from a voice description while you walk the property.'],
  '[{"question":"Should I use one metre rate for the whole job?","answer":"No. Different fence types have different costs. List each fence type as a separate line with its own metre rate."},{"question":"Do gates go in the metre rate?","answer":"No. Gates are priced separately with their own size, hardware, and price as individual line items."},{"question":"How do I invoice pool fencing compliance hardware?","answer":"Each compliant latch, hinge, and gate is a separate line item so the client and council inspector can see the compliance hardware clearly."}]',
  'SMASH Invoices Team',
  'SMASH is an invoicing app built for Australian tradies. Voice-to-invoice from your phone in under 60 seconds.',
  5,
  true,
  NOW(),
  NOW(),
  NOW()
)
ON CONFLICT (slug) DO NOTHING;
