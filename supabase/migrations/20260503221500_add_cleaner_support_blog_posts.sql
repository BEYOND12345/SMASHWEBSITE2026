/*
  # Add cleaner support blog posts

  Adds three cleaner-cluster articles to the blog_posts source of truth:
  - cleaning invoice template Australia
  - repeat invoices for cleaners
  - how to invoice commercial cleaning clients

  These support /for-cleaners with practical SEO/AEO content and internal links
  to the cleaner page, free tools, voice invoicing, Chrome extension and pricing.
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
  'cleaning-invoice-template-australia',
  'Cleaning Invoice Template Australia: What to Include',
  $content$# Cleaning Invoice Template Australia: What to Include

If you run a cleaning business in Australia, your invoice should show who you are, who the client is, the date, the cleaning services provided, the amount due, payment terms, and GST details if you are registered. For weekly domestic cleans, end-of-lease cleans and commercial cleaning jobs, the best template is simple: clear line items, one due date, and a payment link the client can use immediately.

This guide gives cleaners a practical invoice structure, then shows how to turn that same structure into a repeatable workflow with [SMASH for cleaners](/for-cleaners), the free [invoice template](/invoice-template), and the free [invoice generator](/invoice-generator).

## The basic cleaning invoice format

A cleaning invoice in Australia should include:

- Your business name, ABN if you have one, email and phone number.
- The client name, billing address and service address if different.
- Invoice number, invoice date and payment due date.
- A short job title such as "Weekly house clean" or "End-of-lease clean".
- Line items for each service, including quantity, rate and total.
- GST shown separately if you are registered for GST.
- Payment instructions or a Pay Now link.

For example, a regular domestic clean might use one line item:

> Weekly house clean, 2 bathrooms, kitchen, vacuum and mop - fixed weekly rate.

An end-of-lease clean should usually be more detailed:

> End-of-lease clean, oven clean, internal windows, bathroom deep clean, carpet steam add-on.

The goal is not to make the invoice long. The goal is to make it obvious what the client is paying for.

## Template for domestic cleaners

Use this structure for homes, apartments and regular weekly or fortnightly cleaning:

1. Job title: Weekly clean, fortnightly clean, deep clean or end-of-lease clean.
2. Service address: The property cleaned.
3. Service line items: Standard clean, bathrooms, kitchen, oven, windows, carpet steam or add-ons.
4. Pricing method: Fixed rate, hourly rate or package price.
5. Due date: Usually on receipt, 7 days, or the agreed client terms.

Domestic clients often scan invoices quickly on their phone. Keep the language plain and avoid internal shorthand. "Oven clean add-on" is better than "OVN".

## Template for commercial cleaning

Commercial cleaning invoices need more detail because they are often approved by an office manager, property manager or accounts team.

Include:

- Site name and service address.
- Service period, such as "1-30 June 2026".
- Frequency, such as twice weekly or weekly after-hours clean.
- Scope, such as office clean, bathrooms, bins, kitchen, floors, windows or consumables.
- Purchase order number if the client requires one.
- Payment terms, such as 7, 14 or 30 days.

If you invoice multiple sites for the same client, do not merge them into one vague line. Separate each site so their accounts team can approve the invoice without emailing you for clarification.

## Common cleaner line items

Most cleaning businesses should save these as repeatable services:

- Standard house clean
- Deep clean
- End-of-lease clean
- Oven clean
- Internal windows
- External windows
- Carpet steam cleaning
- Commercial office clean
- After-hours commercial clean
- Consumables or supplies

With [voice invoicing](/voice-invoicing), you can say the job in plain English: "Repeat the Southbank office clean, four hours, add internal windows this week." SMASH turns that into invoice line items instead of making you type them after the last property.

## GST and tax invoice notes

If your Australian business is registered for GST, your invoice should be a tax invoice and show GST clearly. If you are not registered for GST, do not add GST. Your invoice can still look professional without GST, as long as the totals and business details are clear.

The free [invoice generator](/invoice-generator) helps you build a clean invoice manually. SMASH goes further by remembering your clients, services and pricing so the next invoice takes less than a minute.

## How to make the template repeatable

A template is useful once. A repeatable workflow is useful every week.

For regular clients, save:

- The client and service address.
- Their usual service package.
- Their fixed rate or hourly rate.
- Their payment terms.
- Their common add-ons.

Then each week you only change what is different. If the clean was the same, repeat the last invoice. If there was an oven clean, window clean or extra hour, add it before sending.

## Cleaner workflow with SMASH

SMASH is built for self-employed service workers who do not want to do admin at night. For cleaners, that means:

- Repeat weekly invoices from the last clean.
- Quote Gmail enquiries with the [Chrome extension](/chrome-extension).
- Use fixed-rate services for standard cleans, deep cleans and end-of-lease packages.
- Send tax-compliant invoices with payment links.
- Start on the Free plan with 5 invoices per month, then move to [Starter pricing](/pricing) for unlimited invoices and accounting sync.

If you are still copying a Word template every Friday, the template is not the real problem. The problem is that you are retyping work you already did last week.

## Related cleaner tools

Use these if you want to build or compare a manual invoice:

- [Invoice template](/invoice-template) for a simple layout.
- [Invoice generator](/invoice-generator) for a one-off invoice.
- [Quote generator](/quote-generator) for new cleaning enquiries.
- [SMASH for cleaners](/for-cleaners) for the voice-first cleaner workflow.

## Bottom line

A good cleaning invoice template is clear, specific and easy to pay. A better cleaning invoicing system remembers the template, repeats the client details, and lets you invoice before you load the van.$content$,
  'A practical Australian cleaning invoice template guide covering ABN, GST, service line items, payment terms, repeat clients and cleaner-specific examples.',
  '/hero_image.png',
  'Cleaner creating a tax-compliant invoice after finishing a job',
  'Cleaning Invoice Template Australia: ABN, GST and Line Items',
  'Cleaning invoice template Australia guide for domestic and commercial cleaners. See what to include, GST rules, line items, payment terms and repeat invoice tips.',
  'cleaning invoice template Australia',
  ARRAY[
    'cleaning invoice template',
    'cleaner invoice Australia',
    'cleaning tax invoice',
    'domestic cleaning invoice',
    'commercial cleaning invoice',
    'cleaning invoice app',
    'cleaning invoice example',
    'GST cleaning invoice'
  ],
  ARRAY[
    'Australian cleaning invoices should include business details, client details, service line items, date, due date, total and GST if registered.',
    'Domestic cleaner invoices can stay simple, but end-of-lease and commercial cleaning invoices need clearer line items.',
    'Repeat clients should not require retyping: save the client, service package, price and common add-ons once.',
    'SMASH turns cleaner invoice templates into a repeatable voice workflow for weekly, fixed-rate and commercial cleaning jobs.'
  ],
  $faq$[
    {
      "question": "What should a cleaning invoice include in Australia?",
      "answer": "A cleaning invoice should include your business name, ABN if you have one, client details, invoice date, due date, service description, line items, total, payment terms and GST if your business is GST-registered."
    },
    {
      "question": "Do cleaners need to charge GST?",
      "answer": "Only charge GST if your business is registered for GST. In Australia, GST registration is generally required once turnover reaches the registration threshold. If you are not registered, do not add GST to the invoice."
    },
    {
      "question": "Can I use the same invoice template for weekly cleaning clients?",
      "answer": "Yes. Weekly and fortnightly clients are ideal for repeat invoices. Save the client, service address, normal package and price, then repeat the previous invoice and change only the add-ons or hours that differ."
    },
    {
      "question": "What is the fastest way for cleaners to invoice?",
      "answer": "The fastest workflow is to create the invoice immediately after the job, while the service details are fresh. SMASH lets cleaners repeat prior invoices or describe the clean by voice and send the invoice in under 60 seconds."
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
  'repeat-invoices-for-cleaners',
  'Repeat Invoices for Cleaners: Weekly Clients Without Re-typing',
  $content$# Repeat Invoices for Cleaners: Weekly Clients Without Re-typing

Repeat invoices let cleaners create this week's invoice from the last completed clean, keeping the same customer, address, job title, line items and price, then updating only what changed. They are best for weekly house cleans, fortnightly domestic clients, recurring office cleans, NDIS support cleaning and any fixed-rate service that happens on a schedule.

For cleaners, repeat invoicing is not a convenience feature. It is the difference between sending invoices between jobs and losing Friday night to admin.

## Why repeat invoices matter for cleaners

Cleaning businesses often invoice the same work over and over:

- Same client.
- Same address.
- Same weekly or fortnightly clean.
- Same fixed price.
- Same payment terms.

Manual invoicing makes you type that again every week. That is slow, but it also creates mistakes. You forget the oven add-on, use the wrong rate for a commercial client, or send the invoice two days late because you waited until the admin pile was big enough to deal with.

Repeat invoices remove the blank-page problem. Start from the last clean, adjust what changed, send.

## Best use cases

Repeat invoices work best when the base service is predictable:

1. Weekly house cleaning with a fixed price.
2. Fortnightly apartment cleaning with occasional add-ons.
3. Commercial office cleaning with monthly or weekly billing.
4. End-of-lease agencies that send similar jobs repeatedly.
5. Support cleaning where the participant, support category or client details stay consistent.

If every job is completely different, use a fresh [invoice generator](/invoice-generator) or voice invoice. If most of the job is the same, repeat the last invoice and edit the changes.

## What to save before repeating invoices

Set up the recurring details once:

- Client name and billing contact.
- Service address.
- Standard job title.
- Usual line items.
- Fixed price or hourly rate.
- Payment terms.
- GST setting.
- Notes the client expects to see.

For commercial cleaning, also save the site name, purchase order requirement and billing email. For domestic cleaning, save the property address and the normal service package.

## Weekly cleaner workflow

Here is the practical workflow:

1. Finish the clean.
2. Open the last invoice for that client.
3. Repeat it into a new draft dated today.
4. Add anything different, such as oven clean, internal windows, extra hour or skipped service.
5. Review the total.
6. Send it with a payment link.

That workflow should take less time than writing a reminder note to invoice later.

With [SMASH for cleaners](/for-cleaners), sent, approved and paid invoices can be repeated into a new draft. You can also describe the changes by voice: "Repeat the Wilson weekly clean, same as last week, add the oven clean." The invoice gets the familiar line items plus the new add-on.

## Repeat invoices vs recurring invoices

Recurring invoices are usually fully automatic. That can be useful for fixed monthly contracts, but cleaners often need a human check because the job changes slightly.

Repeat invoices are safer for cleaners because you review each invoice before it goes out. If the client skipped a week, added windows, changed the property access or requested a deeper clean, you catch it before sending.

Use recurring billing only when the service and price never change. Use repeat invoices when the base service is stable but reality still happens.

## How this helps cash flow

The faster the invoice leaves, the faster the payment clock starts. A weekly cleaner who sends invoices two days late is silently extending every client's terms.

Same-day invoicing helps because:

- The client remembers the clean.
- The job details are fresh.
- Any add-ons are easier to explain.
- The payment link arrives before the client forgets.
- You do not carry admin into the weekend.

If you want cleaner quotes and invoices from email enquiries, the [Chrome extension](/chrome-extension) can turn a Gmail request into a draft quote. If the quote becomes a regular clean, that first invoice becomes the repeatable base.

## Internal links for cleaner setup

Start with these:

- [SMASH for cleaners](/for-cleaners)
- [Invoice template](/invoice-template)
- [Quote generator](/quote-generator)
- [Voice invoicing](/voice-invoicing)
- [Pricing](/pricing)

The Free plan includes 5 invoices per month. Starter is $15/month for unlimited invoices plus accounting sync, which is usually where repeat weekly cleaners get the most value.

## Bottom line

Cleaners should not be rebuilding the same invoice every week. Repeat the last invoice, change what changed, and send it while the clean is still fresh. That is how a weekly client becomes a weekly payment instead of a weekly admin task.$content$,
  'How cleaners can use repeat invoices for weekly and fortnightly clients without retyping the same service, address and price every week.',
  '/hero_image.png',
  'Cleaner repeating a weekly invoice from a phone after leaving a property',
  'Repeat Invoices for Cleaners: Weekly Billing Without Re-typing',
  'Repeat invoices for cleaners explained. Learn when to repeat, what to save, how weekly cleaner billing works, and how SMASH turns prior invoices into new drafts.',
  'repeat invoices for cleaners',
  ARRAY[
    'weekly cleaning invoice',
    'recurring cleaning invoice',
    'cleaner billing software',
    'cleaning business invoicing',
    'fixed rate cleaning invoice',
    'repeat weekly invoice',
    'cleaning invoice app',
    'invoice app for cleaners'
  ],
  ARRAY[
    'Repeat invoices work best for weekly, fortnightly and fixed-rate cleaning clients.',
    'Cleaners should save the client, service address, normal line items, rate, GST setting and payment terms once.',
    'Repeat invoices are safer than fully automatic recurring invoices when add-ons or skipped services change week to week.',
    'Same-day repeat invoicing starts the payment clock sooner and keeps admin out of Friday night.'
  ],
  $faq$[
    {
      "question": "What is a repeat invoice?",
      "answer": "A repeat invoice creates a new invoice from a previous one, keeping the same client, job title, line items and price, then letting you edit what changed before sending."
    },
    {
      "question": "Are repeat invoices good for weekly cleaners?",
      "answer": "Yes. Weekly and fortnightly cleaners often invoice the same client, service address and package each visit. Repeating the last invoice is faster and reduces mistakes."
    },
    {
      "question": "What is the difference between repeat and recurring invoices?",
      "answer": "Recurring invoices usually send automatically on a schedule. Repeat invoices create a new draft for review, which is better when cleaning add-ons, skipped visits or hours can change."
    },
    {
      "question": "Can SMASH repeat cleaning invoices?",
      "answer": "Yes. SMASH can repeat sent, approved or paid invoices into a new draft with the same client, line items and job title, dated today. You can then add any changes before sending."
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
  'how-to-invoice-commercial-cleaning-clients',
  'How to Invoice Commercial Cleaning Clients',
  $content$# How to Invoice Commercial Cleaning Clients

To invoice commercial cleaning clients, include the legal client name, site address, service period, cleaning scope, line items, GST if registered, payment terms, and any purchase order or accounts reference the client requires. Commercial cleaning invoices should be more detailed than domestic cleaning invoices because they are usually approved by someone who did not personally watch the clean happen.

This guide covers the practical invoice structure for office cleaning, retail cleaning, strata cleaning and property management clients.

## Commercial cleaning invoices need approval clarity

A domestic client might pay because they know you were at their house today. A commercial client may have a different workflow:

- Site manager confirms the clean.
- Office manager checks the invoice.
- Accounts team schedules payment.
- Owner or finance approver signs off.

If your invoice says only "cleaning services - $880", someone in that chain may pause it. A paused invoice becomes a late invoice.

Your job is to make approval easy.

## What to include

Every commercial cleaning invoice should include:

1. Your business name, ABN and contact details.
2. Client legal entity and billing email.
3. Site name and service address.
4. Invoice number, invoice date and due date.
5. Service period, such as "Week ending 8 May 2026" or "April 2026 office cleaning".
6. Line items showing frequency, scope and rate.
7. GST if registered.
8. Purchase order number if required.
9. Payment link or bank details.

The service period is especially important for commercial work. It tells accounts exactly what time window they are approving.

## Example line items

For a weekly office clean:

> Office cleaning, 2 visits per week, bathrooms, kitchen, bins, vacuum and mop, week ending 8 May 2026.

For a monthly commercial invoice:

> Commercial office clean, April 2026, 8 scheduled visits at fixed site rate.

For add-ons:

> Internal window clean, level 2 meeting rooms, approved by Sarah on 3 May.

> Consumables restock, paper towel and bin liners, May allocation.

Line items should help the client say yes without calling you.

## Payment terms for commercial cleaning

Commercial clients often ask for 14-day or 30-day terms. You can accept that if the job margin supports it, but be clear from the start.

Use:

- Due on receipt for one-off jobs.
- 7 days for smaller regular clients.
- 14 days for established commercial accounts.
- 30 days only when the contract justifies the cash-flow delay.

Sending the invoice late effectively gives the client extra free credit. If a Net 14 invoice is sent 5 days after the clean, your real cash cycle has become 19 days.

## Quoting before the invoice

Commercial clients often ask for quotes by email: "Can you quote twice-weekly office cleaning for our Richmond site?"

Use the free [quote generator](/quote-generator) for manual quotes, or [SMASH for Gmail](/chrome-extension) to turn the email request into a quote from the inbox. Once approved, convert or repeat the quote details into the invoice workflow.

A good commercial quote should set:

- Scope.
- Frequency.
- Site assumptions.
- Access requirements.
- Add-on pricing.
- Payment terms.

That makes the eventual invoice easier to approve.

## How SMASH helps commercial cleaners

[SMASH for cleaners](/for-cleaners) is useful for commercial cleaning because it remembers repeated details:

- Commercial client rates.
- Site addresses.
- Fixed service packages.
- Weekly or monthly service periods.
- Add-ons like windows, carpet steam or consumables.
- GST and payment terms.

Instead of typing the invoice at night, describe the completed work by voice:

> "Commercial clean at Southbank office, April monthly invoice, eight visits, fixed site rate, add internal windows on level two."

SMASH turns that into line items, keeps the client history, and sends a tax-compliant invoice with a payment link.

## Keep domestic and commercial workflows separate

Do not use the same invoice habits for every cleaning client. Domestic invoices can be short. Commercial invoices should be approval-ready.

For domestic:

- Short service description.
- Simple due date.
- Payment link.

For commercial:

- Site address.
- Service period.
- Scope and frequency.
- PO or accounts reference.
- Clear terms.

Both can still be created quickly. The difference is the level of approval detail.

## Related resources

- [SMASH for cleaners](/for-cleaners)
- [Cleaning invoice template](/invoice-template)
- [Invoice generator](/invoice-generator)
- [Voice invoicing](/voice-invoicing)
- [Pricing](/pricing)

## Bottom line

Commercial cleaning invoices get paid faster when accounts can approve them without extra questions. Put the site, service period, scope, GST and terms on the invoice, then send it as soon as the clean is complete or the billing period ends.$content$,
  'A practical guide for invoicing commercial cleaning clients with site details, service periods, line items, GST, purchase orders and payment terms.',
  '/hero_image.png',
  'Commercial cleaner preparing an office cleaning invoice with site and service-period details',
  'How to Invoice Commercial Cleaning Clients: Scope, GST and Terms',
  'How to invoice commercial cleaning clients with site address, service period, scope, GST, PO numbers, line items and payment terms that accounts teams can approve.',
  'how to invoice commercial cleaning clients',
  ARRAY[
    'commercial cleaning invoice',
    'office cleaning invoice',
    'cleaning business invoicing',
    'commercial cleaner invoice template',
    'cleaning service invoice',
    'invoice commercial clients',
    'cleaning quote software',
    'cleaning invoice app'
  ],
  ARRAY[
    'Commercial cleaning invoices need approval clarity because accounts teams may not have seen the work happen.',
    'Include site address, service period, scope, frequency, GST, payment terms and purchase order details where required.',
    'Commercial payment terms should be agreed up front because 14-day and 30-day terms affect cleaner cash flow.',
    'SMASH helps commercial cleaners repeat client details, site rates and service packages while still invoicing by voice.'
  ],
  $faq$[
    {
      "question": "What should a commercial cleaning invoice include?",
      "answer": "Include your business details, client legal name, site address, service period, cleaning scope, frequency, line items, GST if registered, payment terms and any purchase order number required by the client."
    },
    {
      "question": "How detailed should a commercial cleaning invoice be?",
      "answer": "It should be detailed enough for an accounts team to approve without asking follow-up questions. Include the site, service period, scope and add-ons rather than one vague cleaning services line."
    },
    {
      "question": "What payment terms should commercial cleaners use?",
      "answer": "Many commercial cleaners use 7, 14 or 30 day terms depending on the client and contract size. The key is to agree terms before work starts and send invoices immediately when the billing period ends."
    },
    {
      "question": "Can SMASH invoice commercial cleaning clients?",
      "answer": "Yes. SMASH stores commercial client rates, site details, service packages and payment terms, then creates tax-compliant invoices from voice or repeated prior invoices."
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
