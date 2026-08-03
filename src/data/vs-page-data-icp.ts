/**
 * ICP “basic invoice app” comparison pages — hijack switcher traffic.
 * Merged into vsPageBySlug via vs-page-data.ts.
 * Links must use markdown [label](/path) — VsArticlePage does not render HTML.
 */
import type { VsPageData } from './vs-page-data.ts';

const PRICING_CHECKED = 'August 2026';
const DATE_MODIFIED = '2026-08-04T00:00:00.000Z';
const DATE_PUBLISHED = '2026-08-04T00:00:00.000Z';

const SHARED_PORTAL_IMAGE = {
  src: '/Screenshot_2026-02-24_at_12.26.20_pm.png',
  alt: 'SMASH customer approval portal where customers approve and pay a quote',
};

const SHARED_HERO = {
  src: '/Screenshot_2026-02-24_at_12.14.54_pm.png',
  alt: 'Creating a quote by voice in SMASH instead of typing into a basic invoice app',
  priority: true as const,
};

const SHARED_PRICING_IMG = {
  src: '/Screenshot_2026-02-26_at_10.37.22_am.png',
  alt: 'SMASH pricing compared to typing-based invoice apps',
};

export const vsInvoiceSimple: VsPageData = {
  slug: 'vs-invoice-simple',
  competitor: 'Invoice Simple',
  competitorShort: 'Invoice Simple',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'SMASH vs Invoice Simple (2026): Voice vs Tap-to-Type',
  metaDescription:
    'Invoice Simple is a tap-and-type mobile invoicer. SMASH sends a priced quote or invoice by voice in about 30 seconds from your rates. Honest alternative for tradies and service workers.',
  ogDescription: 'Looking for an Invoice Simple alternative? Stop typing line items — talk the job, verify, send.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'SMASH vs Invoice Simple: Voice vs Tap-to-Type',
  h1: 'SMASH vs Invoice Simple: Voice vs Tap-to-Type',
  intro:
    'Invoice Simple is one of the apps sole traders reach for when they want “an invoice on my phone.” You tap fields, pick a template, send a PDF. SMASH is the next step: describe the job out loud, price from your catalog, and send before you leave the driveway.',
  tableRows: [
    { label: 'Create a quote / invoice', smash: 'Speak it (~30s)', them: 'Tap forms on phone' },
    { label: 'Prices', smash: 'Your catalog — not guessed', them: 'You type every rate' },
    { label: 'On-site send', smash: 'Built for the driveway', them: 'Possible but slow' },
    { label: 'AI ChatGPT / Claude drafts', smash: 'Not needed — catalog holds rates', them: 'Still paste + retype' },
    { label: 'Estimate → invoice', smash: 'One tap, same lines', them: 'Convert in-app' },
    { label: 'Xero / QuickBooks', smash: 'Paid plans', them: 'Limited / export-style' },
    { label: 'Free to start', smash: 'Yes — monthly allowance', them: 'Freemium / paid tiers' },
  ],
  contentSections: [
    {
      heading: 'Why people search “Invoice Simple alternative”',
      body: `Invoice Simple works until volume hits. Five jobs a day means five rounds of tapping descriptions, quantities, and GST. That is exactly when “I’ll finish invoices tonight” starts — and when jobs get forgotten.

SMASH removes the form. You talk the scope the way you’d tell a mate. Labour, materials, call-out and travel come from [your rates](/materials-pricing). Unmatched items are flagged, not silently invented like ChatGPT.`,
    },
    {
      heading: 'Same ICP, different bottleneck',
      body: `Both apps target freelancers, cleaners, handymen, and mobile service businesses. Invoice Simple’s bottleneck is typing. SMASH’s product is [voice to invoice](/voice-invoicing) and [AI estimates](/ai-estimates) — win the job with a priced PDF, then invoice when the work is done.`,
    },
  ],
  pricingHeading: 'SMASH vs Invoice Simple pricing (high level)',
  pricingBody: `Invoice Simple uses freemium / subscription tiers that change by market — always check their site. SMASH: free monthly quote/invoice allowance with full voice workflow, then paid plans from about $15/month AUD for higher volume and accounting sync. See [SMASH pricing](/pricing).`,
  whoSmashFor:
    'Service workers who already tried a “simple” phone invoicer and still hate typing on site — handymen, cleaners, gardeners, painters, mobile mechanics.',
  whenThemHeading: 'When to keep Invoice Simple',
  whenThemBullets: [
    'You send one or two invoices a month and templates are enough',
    'You want the absolute simplest tap UI and never use voice',
    'You are happy rebuilding every line item by hand',
  ],
  whenThemClosing: 'If typing is fine and volume is tiny, Invoice Simple can stay. If typing is the reason invoices wait until Sunday, switch.',
  featureSections: [
    {
      title: 'Quoting',
      body: 'Both do estimates. SMASH prices from your catalog by voice and is built for [first quote wins](/blog/first-quote-wins-instant-quote-on-site) on site.',
    },
    {
      title: 'Getting paid',
      body: 'Both can collect payment online. SMASH ties approval + pay into one customer link after a voice-built document.',
    },
  ],
  faqs: [
    {
      q: 'Is SMASH a good Invoice Simple alternative?',
      a: 'Yes if your pain is typing or delayed invoices. SMASH is voice-first and catalog-priced. Invoice Simple is form-first.',
    },
    {
      q: 'Can I switch from Invoice Simple without migrating everything?',
      a: 'Yes. Start free, load your rates, send the next quote by voice. Keep Invoice Simple until you are sure.',
    },
    {
      q: 'Does SMASH work in Australia?',
      a: 'Yes — GST and ABN-ready documents, plus NZ, UK, US and Canada.',
    },
  ],
  ctaPreamble: 'Same phone. No keyboard tax.',
  ctaLine: 'Send the next quote by voice.',
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsQuotemate: VsPageData = {
  slug: 'vs-quotemate',
  competitor: 'QuoteMate',
  competitorShort: 'QuoteMate',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'SMASH vs QuoteMate (2026): Voice Quoting for Tradies',
  metaDescription:
    'QuoteMate helps tradies price jobs with AI/market rates. SMASH uses your catalog and voice to send a quote or invoice in about 30 seconds. Honest comparison for AU service businesses.',
  ogDescription: 'Looking for a QuoteMate alternative? Catalog-priced voice quotes — not guessed market rates.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'SMASH vs QuoteMate: Your Rates vs Guessed Rates',
  h1: 'SMASH vs QuoteMate: Your Rates vs Guessed Rates',
  intro:
    'QuoteMate sits in the “AI quoting for tradies” category — describe a job, get a priced document. SMASH is built for the same moment, with a hard rule: prices come from your catalog, then you verify and send. That is the difference between a draft estimate and a number you trust on site.',
  tableRows: [
    { label: 'Input', smash: 'Voice on iPhone (or Gmail)', them: 'Voice / AI job description' },
    { label: 'Pricing source', smash: 'Your Price Hub + catalog', them: 'AI / market-style pricing (varies)' },
    { label: 'Wrong-price risk', smash: 'Flag unknowns — no silent guesses', them: 'Model can invent rates' },
    { label: 'Quote → invoice', smash: 'Same lines, one tap', them: 'Depends on product path' },
    { label: 'Desk workflow', smash: 'Gmail Chrome extension', them: 'App-centric' },
    { label: 'Xero / QuickBooks', smash: 'Paid sync', them: 'Check current integrations' },
  ],
  contentSections: [
    {
      heading: 'Why “AI quoting” still fails without your catalog',
      body: `The founder story is simple: ChatGPT and Claude can write a beautiful quote and still get the money wrong. Same risk with any AI that invents labour or materials. SMASH was built after that failure — see [ChatGPT got my estimates wrong](/blog/chatgpt-got-my-handyman-estimates-wrong).

If QuoteMate (or any AI quoter) helps you draft faster but you still do not trust the dollars, you need catalog fidelity: [AI estimates](/ai-estimates) from your rates.`,
    },
    {
      heading: 'Hijacking the “how much?” moment',
      body: `Customers hire whoever puts a clear PDF in their hand first. SMASH’s loop is talk → verify → send in about 30 seconds — then invoice when the job is done ([voice to invoice](/voice-invoicing)). That is the traffic we want when people search QuoteMate alternatives.`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `QuoteMate pricing changes — verify on their site. SMASH: free allowance, then paid from ~$15/month AUD with optional Xero/QuickBooks. [SMASH pricing](/pricing).`,
  whoSmashFor:
    'Tradies and sole traders who want AI speed without outsourcing their rates to a model — especially if they already tried ChatGPT/Claude for estimates.',
  whenThemHeading: 'When QuoteMate might still fit',
  whenThemBullets: [
    'You want market-rate suggestions and will manually correct every line',
    'You are evaluating multiple AU voice-quote apps and need a short trial comparison',
    'You do not need Gmail desk quoting',
  ],
  whenThemClosing: 'If the product invents prices you would not charge, keep looking. Catalog-backed send is the bar.',
  featureSections: [
    {
      title: 'Estimates',
      body: 'Both aim at fast on-site estimates. SMASH’s differentiator is your rates plus verify-before-send.',
    },
    {
      title: 'Invoicing',
      body: 'SMASH is built as estimate → invoice in one product loop so you do not retype the job after you win it.',
    },
  ],
  faqs: [
    {
      q: 'Is SMASH a QuoteMate alternative?',
      a: 'Yes for tradies who want voice quoting priced from their own catalog, not generic AI guesses, with a path to invoice and get paid.',
    },
    {
      q: 'Does SMASH use ChatGPT prices?',
      a: 'No. SMASH matches speech to your saved rates and materials. Unknowns are flagged for you.',
    },
    {
      q: 'Can I send a QuoteMate-style quote then invoice later?',
      a: 'Yes — send the estimate on site, convert to invoice when the work is done, without rebuilding line items.',
    },
  ],
  ctaPreamble: 'AI speed. Your dollars.',
  ctaLine: 'Try an estimate from your rates.',
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsInvoiceHome: VsPageData = {
  slug: 'vs-invoice-home',
  competitor: 'Invoice Home',
  competitorShort: 'Invoice Home',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'SMASH vs Invoice Home (2026): Templates vs Voice',
  metaDescription:
    'Invoice Home is a template invoice maker. SMASH is voice to invoice for service businesses — catalog-priced quotes and invoices in about 30 seconds. Compare for AU tradies.',
  ogDescription: 'Invoice Home alternative: stop building PDFs from templates — talk, verify, send.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'SMASH vs Invoice Home: Templates vs Voice',
  h1: 'SMASH vs Invoice Home: Templates vs Voice',
  intro:
    'Invoice Home is a classic “make a nice invoice PDF” tool — templates, branding, download, email. SMASH assumes the bottleneck is not the PDF. It is capturing the job and sending a priced document before you drive off.',
  tableRows: [
    { label: 'Core product', smash: 'Voice / Gmail → priced send', them: 'Template invoice PDF maker' },
    { label: 'On-site workflow', smash: 'Built for it', them: 'Desktop / form oriented' },
    { label: 'Your rate memory', smash: 'Price Hub catalog', them: 'Re-enter or save templates' },
    { label: 'Customer pay link', smash: 'Yes', them: 'Depends on plan / setup' },
    { label: 'Accounting sync', smash: 'Xero / QuickBooks (paid)', them: 'Usually export / manual' },
  ],
  contentSections: [
    {
      heading: 'Template traffic is switcher traffic',
      body: `People land on Invoice Home when they search free invoice templates. Many of them are the same ICP as SMASH — sole traders who still batch admin on Sunday. The upgrade path is not a prettier template. It is [voice to invoice](/voice-invoicing) so the document leaves with you.`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `Invoice Home offers free and paid template tiers — confirm on their site. SMASH free plan includes a monthly send allowance; paid unlocks volume and sync. [Pricing](/pricing).`,
  whoSmashFor: 'Anyone using Invoice Home (or Word/Excel) who wants to stop rebuilding invoices after every job.',
  whenThemHeading: 'When Invoice Home is enough',
  whenThemBullets: [
    'You need a one-off PDF and will never invoice from a job site',
    'You only bill a few times a year',
  ],
  whenThemClosing: 'For weekly trade volume, templates become the paperwork tax.',
  featureSections: [
    {
      title: 'Documents',
      body: 'Invoice Home shines at branded PDFs. SMASH shines at speed-to-send from real job context.',
    },
  ],
  faqs: [
    {
      q: 'Is SMASH an Invoice Home alternative?',
      a: 'Yes if you want ongoing quoting and invoicing from your phone by voice, not occasional template PDFs.',
    },
    {
      q: 'Can SMASH replace Word or Excel invoices too?',
      a: 'Yes — see our Word vs Excel vs app guide, then start on the free plan.',
    },
  ],
  ctaPreamble: 'Templates are not a workflow.',
  ctaLine: 'Send from the job instead.',
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsJoist: VsPageData = {
  slug: 'vs-joist',
  competitor: 'Joist',
  competitorShort: 'Joist',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'SMASH vs Joist (2026): Voice Invoicing Alternative',
  metaDescription:
    'Joist is a popular contractor estimate and invoice app (tap to build). SMASH is voice to invoice — catalog-priced quotes in about 30 seconds. Compare for sole traders.',
  ogDescription: 'Joist alternative for tradies who want voice, not more mobile forms.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'SMASH vs Joist: Voice vs Contractor Forms',
  h1: 'SMASH vs Joist: Voice vs Contractor Forms',
  intro:
    'Joist is a well-known contractor app for estimates, invoices, and getting paid. It is still a tap-and-type product. SMASH competes for the same ICP with a different input: voice against your rates, then send.',
  tableRows: [
    { label: 'Build estimate', smash: 'Voice → catalog match', them: 'Mobile forms / line items' },
    { label: 'Speed on site', smash: '~30 seconds talk → send', them: 'Minutes of tapping' },
    { label: 'AU GST / ABN focus', smash: 'Native multi-market tax', them: 'US-strong roots; check AU fit' },
    { label: 'Gmail quoting', smash: 'Chrome extension', them: 'App-first' },
    { label: 'Free start', smash: 'Yes', them: 'Freemium / paid' },
  ],
  contentSections: [
    {
      heading: 'Joist users are exactly who we want',
      body: `If someone googles “Joist alternative,” they already buy contractor software. The pitch is not “another job suite.” It is: keep life simple, stop typing estimates, send before the customer messages the next bloke. [First quote wins](/blog/first-quote-wins-instant-quote-on-site).`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `Joist plans vary by region — verify current pricing. SMASH free + paid from ~$15/month AUD. [SMASH pricing](/pricing).`,
  whoSmashFor: 'Solo contractors and small crews who liked Joist’s simplicity but want voice + catalog pricing.',
  whenThemHeading: 'When to stay on Joist',
  whenThemBullets: [
    'You are deep in Joist’s payments and client history and switching cost is high',
    'You want Joist’s specific contractor UI and do not want voice',
  ],
  whenThemClosing: 'If the open tab is still “type the estimate later,” SMASH is the hijack.',
  featureSections: [
    {
      title: 'Estimates and invoices',
      body: 'Both cover the quote → invoice path. SMASH optimises for dirty-hands capture via [voice to invoice](/voice-invoicing).',
    },
  ],
  faqs: [
    {
      q: 'Is SMASH a Joist alternative?',
      a: 'Yes for sole traders who want faster on-site quoting by voice with their own rates.',
    },
    {
      q: 'Does SMASH replace full field-service software?',
      a: 'No. SMASH is the speed layer for quote and invoice. Job scheduling suites can sit beside it.',
    },
  ],
  ctaPreamble: 'Contractor app. Without the keyboard.',
  ctaLine: 'Quote the next job by voice.',
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsWave: VsPageData = {
  slug: 'vs-wave',
  competitor: 'Wave',
  competitorShort: 'Wave',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'SMASH vs Wave (2026): Free Invoicing vs Voice Speed',
  metaDescription:
    'Wave is free desk invoicing and accounting for freelancers. SMASH is voice to invoice on site — catalog-priced quotes in about 30 seconds. Honest Wave alternative for service workers.',
  ogDescription: 'Wave alternative when free invoices still mean typing tonight.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'SMASH vs Wave: Free Desk Invoices vs On-Site Voice',
  h1: 'SMASH vs Wave: Free Desk Invoices vs On-Site Voice',
  intro:
    'Wave wins on price: free invoices and basic accounting for freelancers. The catch for mobile service businesses is the same as every desk tool — you still type line items later. SMASH hijacks that moment: talk the job, verify your rates, send before you leave.',
  tableRows: [
    { label: 'Price to start', smash: 'Free monthly allowance', them: 'Free invoicing (ads / paid extras)' },
    { label: 'On-site capture', smash: 'Voice on iPhone', them: 'Browser / desk forms' },
    { label: 'Your trade rates', smash: 'Price Hub + catalog', them: 'Manual line items' },
    { label: 'Accounting depth', smash: 'Speed layer + sync', them: 'Fuller books / banking' },
    { label: 'Gmail quoting', smash: 'Chrome extension', them: 'No' },
  ],
  contentSections: [
    {
      heading: 'Free is not free if Sundays disappear',
      body: `Wave is often the first app after Excel. That is our ICP. The switcher query is “Wave alternative” when receipts pile up or invoices go out late. SMASH is not trying to replace Wave’s books — it replaces the typing bottleneck with [voice to invoice](/voice-invoicing), then syncs to accounting on paid plans.`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `Wave’s core invoicing is free; payments and extras are paid — verify on Wave. SMASH: free allowance, then paid from ~$15/month AUD. [SMASH pricing](/pricing).`,
  whoSmashFor: 'Freelancers and sole traders who outgrew “I’ll invoice tonight on Wave” and need driveway-speed sends.',
  whenThemHeading: 'When to keep Wave',
  whenThemBullets: [
    'You need free full-ledger accounting and rarely invoice from a job site',
    'You already live in Wave’s banking and receipts workflow',
  ],
  whenThemClosing: 'Keep Wave for books if you want. Use SMASH when the customer is still standing there.',
  featureSections: [
    {
      title: 'Invoicing',
      body: 'Wave is desk-first. SMASH is job-first — speak, verify, send, then sync.',
    },
  ],
  faqs: [
    {
      q: 'Is SMASH a Wave alternative?',
      a: 'Yes for on-site quoting and invoicing speed. Wave remains stronger as free accounting software.',
    },
    {
      q: 'Can I use SMASH with Wave?',
      a: 'Many people start on SMASH for speed and keep or migrate accounting later. Paid SMASH plans sync Xero and QuickBooks.',
    },
  ],
  ctaPreamble: 'Free invoices still cost evenings.',
  ctaLine: 'Send from the job instead.',
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsFreshbooks: VsPageData = {
  slug: 'vs-freshbooks',
  competitor: 'FreshBooks',
  competitorShort: 'FreshBooks',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'SMASH vs FreshBooks (2026): Voice vs Cloud Forms',
  metaDescription:
    'FreshBooks is polished cloud invoicing for freelancers. SMASH is voice to invoice — catalog-priced quotes in about 30 seconds on site. Compare for service businesses.',
  ogDescription: 'FreshBooks alternative when the bottleneck is typing, not branding.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'SMASH vs FreshBooks: Polished Forms vs Voice Speed',
  h1: 'SMASH vs FreshBooks: Polished Forms vs Voice Speed',
  intro:
    'FreshBooks is the premium “nice invoice” cloud app — clients, expenses, time tracking, branded PDFs. SMASH targets the same freelancers and sole traders with a different job: get a priced document out in about 30 seconds by voice from your catalog.',
  tableRows: [
    { label: 'Create invoice', smash: 'Voice → verify → send', them: 'Web / app forms' },
    { label: 'Estimates', smash: 'Catalog-priced on site', them: 'Typed estimates' },
    { label: 'Accounting features', smash: 'Speed + sync', them: 'Broader freelancer suite' },
    { label: 'On dirty hands', smash: 'Built for it', them: 'Awkward' },
    { label: 'Price', smash: 'Free + ~$15+/mo', them: 'Paid tiers (check site)' },
  ],
  contentSections: [
    {
      heading: 'Same customer, different product job',
      body: `People searching “FreshBooks alternative” often want cheaper software. The better hijack for our ICP is faster software: [first quote wins](/blog/first-quote-wins-instant-quote-on-site) on site, then invoice without retyping. FreshBooks wins on polish and freelancer accounting breadth. SMASH wins on [voice to invoice](/voice-invoicing).`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `FreshBooks publishes paid plans by invoice volume — confirm current pricing. SMASH: free monthly allowance, then paid from ~$15/month AUD. [Pricing](/pricing).`,
  whoSmashFor: 'Mobile service workers who liked FreshBooks’ look but still finish paperwork at night.',
  whenThemHeading: 'When FreshBooks fits better',
  whenThemBullets: [
    'You need deeper expenses, retainers, and client portal features day-to-day',
    'You invoice from a desk and typing is not the bottleneck',
  ],
  whenThemClosing: 'If the quote dies because you are still typing in the ute, switch the capture layer.',
  featureSections: [
    {
      title: 'Getting paid',
      body: 'Both support online payment. SMASH attaches approval + pay to a catalog-priced send from the job.',
    },
  ],
  faqs: [
    {
      q: 'Is SMASH a FreshBooks alternative?',
      a: 'Yes for voice-first quoting and invoicing. FreshBooks is broader as a freelancer finance suite.',
    },
    {
      q: 'Does SMASH replace FreshBooks accounting?',
      a: 'No. Use SMASH for speed-to-send; sync or export into accounting tools you already trust.',
    },
  ],
  ctaPreamble: 'Pretty invoices. Faster capture.',
  ctaLine: 'Talk the next job.',
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsSquareInvoices: VsPageData = {
  slug: 'vs-square-invoices',
  competitor: 'Square Invoices',
  competitorShort: 'Square',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'SMASH vs Square Invoices (2026): Voice vs Payments Forms',
  metaDescription:
    'Square Invoices is payment-first billing from Square. SMASH is voice to invoice with your catalog — send a priced quote in about 30 seconds. Compare for sole traders.',
  ogDescription: 'Square Invoices alternative when you need estimates on site, not just a payment link.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'SMASH vs Square Invoices: Payments Giant vs Voice Speed',
  h1: 'SMASH vs Square Invoices: Payments Giant vs Voice Speed',
  intro:
    'Square Invoices rides the Square ecosystem — cards, readers, payment links. Great if you already take Square payments. Weak if your real problem is building a priced estimate with dirty hands. That is SMASH’s lane.',
  tableRows: [
    { label: 'Core strength', smash: 'Voice quote → invoice', them: 'Payments + invoice links' },
    { label: 'Catalog pricing', smash: 'Your rates + materials', them: 'Manual / item library' },
    { label: 'On-site estimate', smash: '~30s talk → send', them: 'Form / POS adjacent' },
    { label: 'Card processing', smash: 'Via payment partners', them: 'Native Square stack' },
    { label: 'Gmail desk path', smash: 'Chrome extension', them: 'Square dashboard' },
  ],
  contentSections: [
    {
      heading: 'Payment traffic is still switcher traffic',
      body: `Sole traders land on Square because “everyone takes Square.” Search “Square invoice alternative” when estimates are slow or messy. SMASH does not try to replace every Square terminal — it hijacks the quote/invoice capture with [voice to invoice](/voice-invoicing) and [AI estimates](/ai-estimates) from your catalog.`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `Square invoices often sit inside payments pricing (processing fees) — confirm on Square. SMASH: free allowance, paid from ~$15/month AUD. [SMASH pricing](/pricing).`,
  whoSmashFor: 'Tradies and mobile services who use Square for payments but hate building estimates by tapping.',
  whenThemHeading: 'When to stay on Square Invoices',
  whenThemBullets: [
    'Your whole stack is Square POS, hardware, and payouts',
    'You rarely send estimates — only payment requests',
  ],
  whenThemClosing: 'If winning the job needs a priced PDF in under a minute, add SMASH for capture.',
  featureSections: [
    {
      title: 'Estimates',
      body: 'Square can invoice. SMASH is built to win the job with a catalog-priced estimate first.',
    },
  ],
  faqs: [
    {
      q: 'Is SMASH a Square Invoices alternative?',
      a: 'Yes for fast estimates and invoices by voice. Square remains stronger if you need the full Square payments hardware stack.',
    },
    {
      q: 'Can customers still pay online with SMASH?',
      a: 'Yes — approval and pay links ship with the customer portal after you send.',
    },
  ],
  ctaPreamble: 'Payments later. Quote now.',
  ctaLine: 'Send the estimate by voice.',
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsZohoInvoice: VsPageData = {
  slug: 'vs-zoho-invoice',
  competitor: 'Zoho Invoice',
  competitorShort: 'Zoho Invoice',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'SMASH vs Zoho Invoice (2026): Templates vs Voice',
  metaDescription:
    'Zoho Invoice is free/cheap template invoicing in the Zoho suite. SMASH is voice to invoice — catalog-priced quotes in about 30 seconds. Compare for sole traders.',
  ogDescription: 'Zoho Invoice alternative when free templates still mean retyping every job.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'SMASH vs Zoho Invoice: Suite Templates vs Voice',
  h1: 'SMASH vs Zoho Invoice: Suite Templates vs Voice',
  intro:
    'Zoho Invoice is the freemium invoicer inside Zoho’s empire — templates, clients, recurring bills. Fine at a desk. SMASH competes for the same price-sensitive ICP with on-site voice and your real rates.',
  tableRows: [
    { label: 'Create document', smash: 'Voice / Gmail', them: 'Templates + forms' },
    { label: 'Free plan', smash: 'Yes (monthly allowance)', them: 'Yes (limits apply)' },
    { label: 'On-site speed', smash: '~30 seconds', them: 'Form-bound' },
    { label: 'Suite lock-in', smash: 'Standalone speed layer', them: 'Zoho ecosystem' },
    { label: 'Trade catalog', smash: 'Price Hub + materials', them: 'Item list you maintain' },
  ],
  contentSections: [
    {
      heading: 'Cheap template apps are our feeder',
      body: `“Zoho Invoice alternative” searches are classic ICP: people who refuse to pay Xero prices yet still lose hours to admin. The upgrade is not another template. It is [voice to invoice](/voice-invoicing) so the document leaves with you — see also [Word vs Excel vs app](/blog/word-vs-excel-vs-app-for-invoices).`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `Zoho Invoice has a free tier and paid upgrades — verify on Zoho. SMASH: free allowance, paid from ~$15/month AUD. [Pricing](/pricing).`,
  whoSmashFor: 'Sole traders on free/cheap invoicers who still batch paperwork after dark.',
  whenThemHeading: 'When Zoho Invoice is enough',
  whenThemBullets: [
    'You already live in Zoho CRM / Books and want one vendor',
    'Volume is tiny and templates are fine',
  ],
  whenThemClosing: 'When every job needs a fresh estimate on site, templates lose.',
  featureSections: [
    {
      title: 'Documents',
      body: 'Zoho is template-strong. SMASH is capture-strong — speak the scope, verify, send.',
    },
  ],
  faqs: [
    {
      q: 'Is SMASH a Zoho Invoice alternative?',
      a: 'Yes if you want voice and catalog pricing on site instead of template forms.',
    },
    {
      q: 'Does SMASH replace the whole Zoho suite?',
      a: 'No. SMASH is the speed layer for quotes and invoices.',
    },
  ],
  ctaPreamble: 'Free templates. Paid evenings.',
  ctaLine: 'Try voice instead.',
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const icpVsPages: VsPageData[] = [
  vsInvoiceSimple,
  vsQuotemate,
  vsInvoiceHome,
  vsJoist,
  vsWave,
  vsFreshbooks,
  vsSquareInvoices,
  vsZohoInvoice,
];
