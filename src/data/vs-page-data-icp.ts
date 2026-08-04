/**
 * ICP “basic invoice app” comparison pages — process-led, dirty-hands angle.
 * Merged into vsPageBySlug via vs-page-data.ts.
 * Links must use markdown [label](/path) — VsArticlePage does not render HTML.
 */
import type { VsPageData, VsTableRow } from './vs-page-data.ts';

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

const BRAND = 'You do the work. SMASH does the rest.';

/** Sibling ICP pages for cluster interlinking (exclude self when assigning). */
const ICP_CLUSTER = [
  'vs-invoice-simple',
  'vs-quotemate',
  'vs-joist',
  'vs-invoice-home',
  'vs-wave',
  'vs-freshbooks',
  'vs-square-invoices',
  'vs-zoho-invoice',
] as const;

function relatedExcept(slug: string): string[] {
  return ICP_CLUSTER.filter((s) => s !== slug);
}

function process(them: {
  quote: string;
  approve: string;
  invoice: string;
  pay: string;
  hands: string;
  prices: string;
}): VsTableRow[] {
  return [
    { label: 'Win the job (quote / estimate)', smash: 'Talk → priced PDF on site (~30s)', them: them.quote },
    { label: 'Customer approves', smash: 'One-tap approval link', them: them.approve },
    { label: 'Invoice same lines', smash: 'Convert — no retype', them: them.invoice },
    { label: 'Get paid', smash: 'Pay on the same link', them: them.pay },
    { label: 'Dirty-hands capture', smash: 'Voice on iPhone', them: them.hands },
    { label: 'Prices', smash: 'Your catalog — nothing guessed', them: them.prices },
  ];
}

export const vsInvoiceSimple: VsPageData = {
  slug: 'vs-invoice-simple',
  competitor: 'Invoice Simple',
  competitorShort: 'Invoice Simple',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'Invoice Simple Alternative for Tradies (2026) — Quote → Approve → Invoice | SMASH',
  metaDescription:
    'Invoice Simple sends tap-to-type invoices. SMASH runs the full loop for people who work with their hands: voice quote, customer approval, invoice, paid — before you leave the job.',
  ogDescription: 'Invoice Simple alternative: not another form — the full quote → approve → invoice loop on site.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'Invoice Simple sends invoices. You need the full loop.',
  eyebrow: 'Invoice Simple alternative · built for dirty hands',
  h1: 'Invoice Simple sends invoices. You need the full loop.',
  brandLine: BRAND,
  intro:
    'Invoice Simple is a solid phone invoicer — tap fields, pick a template, send a PDF. That is half the job. Handymen, cleaners, and mobile trades lose work when the *estimate* never leaves the driveway, or when approval and payment are a separate chase. SMASH was built for the moment the customer is still standing there: talk for about 30 seconds, verify your rates, send, they approve, they pay.',
  processRows: process({
    quote: 'Typed estimate / invoice forms',
    approve: 'Email PDF — chase verbally',
    invoice: 'Convert or rebuild',
    pay: 'In-app / link (plan-dependent)',
    hands: 'Tap forms on phone',
    prices: 'You type every rate',
  }),
  tableRows: [
    { label: 'Create quote / invoice', smash: 'Speak it (~30s)', them: 'Tap forms on phone' },
    { label: 'On-site send', smash: 'Built for the driveway', them: 'Possible but slow' },
    { label: 'Approval portal', smash: 'Yes — one link', them: 'Usually just a PDF' },
    { label: 'Gmail desk path', smash: 'Chrome extension', them: 'App-first' },
    { label: 'Xero / QuickBooks', smash: 'Paid plans', them: 'Limited / export-style' },
    { label: 'Free to start', smash: 'Yes — monthly allowance', them: 'Freemium / paid tiers' },
  ],
  contentSections: [
    {
      heading: 'Why people search “Invoice Simple alternative”',
      body: `It is rarely because Invoice Simple is “bad.” It is because five jobs a day means five rounds of tapping descriptions, quantities, and GST — and the estimate still waits until tonight. Tonight never comes. That is how [handymen](/for-handymen) leave $95 jobs uninvoiced and lose the next booking to whoever replied first.

SMASH removes the form. You talk the scope the way you’d tell a mate. Labour, materials, call-out and travel come from [your rates](/materials-pricing). Unknowns are flagged — not silently invented like ChatGPT. Then the customer gets a link: approve, pay. You see when they open it.`,
    },
    {
      heading: 'Handyman proof: mixed jobs break typing apps',
      body: `A typical handyman afternoon is not one clean invoice. It is flat-pack in Mosman, a gate latch plus Bunnings bits, then three odd jobs for a property manager. Invoice Simple can bill each one — if you sit in the ute and type. SMASH is built so six small jobs leave with you: speak, verify, send, next driveway. See [voice to invoice](/voice-invoicing) and [first quote wins](/blog/first-quote-wins-instant-quote-on-site).`,
    },
    {
      heading: 'Same ICP, different product job',
      body: `Both apps target freelancers and service businesses. Invoice Simple’s job is a nice invoice PDF. SMASH’s job is the money loop: [AI estimates](/ai-estimates) from your catalog → approval → invoice → paid — on iPhone on site, or from Gmail at the desk. If you are also eyeing [Joist](/vs-joist), [Wave](/vs-wave), or [Invoice2go](/vs-invoice2go), it is the same fork in the road.`,
    },
    {
      heading: 'Longer honest review',
      body: `Want the full “what works / what doesn’t” without a sales page vibe? Read [Invoice Simple review for tradies](/blog/invoice-simple-review-for-tradies) — pain points people search for, keep-vs-switch guidance, and the process scorecard.`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `Invoice Simple uses freemium / subscription tiers that change by market — always check their site. SMASH: free monthly quote/invoice allowance with the full voice workflow, then paid from about $15/month AUD for higher volume and accounting sync. See [SMASH pricing](/pricing).`,
  whoSmashFor:
    'Handymen, cleaners, gardeners, painters, mobile mechanics — anyone who already tried a “simple” phone invoicer and still hates typing on site. If your backlog is Sunday admin, you are the customer.',
  whenThemHeading: 'When to keep Invoice Simple',
  whenThemBullets: [
    'You send one or two invoices a month and templates are enough',
    'You never send estimates on site and typing is fine',
    'You do not need customer approval + pay on one link',
  ],
  whenThemClosing:
    'If typing is why invoices wait until Sunday — or why quotes never leave the driveway — switch the capture layer.',
  featureSections: [
    {
      title: 'Quoting',
      body: 'Both can estimate. SMASH prices from your catalog by voice and is built so the PDF leaves before the customer messages the next bloke.',
    },
    {
      title: 'Getting paid',
      body: 'Invoice Simple can collect payment. SMASH ties approval + pay into one customer link after a voice-built document — out the door before you are.',
    },
    {
      title: 'Desk workflow',
      body: 'Quote requests in email? Use the [Chrome extension](/chrome-extension) so you stop retyping what is already in the thread.',
    },
  ],
  faqs: [
    {
      q: 'Is SMASH a good Invoice Simple alternative?',
      a: 'Yes if you need the full loop — quote, approve, invoice, paid — without tap-to-type on every job. Invoice Simple is form-first; SMASH is voice-first and catalog-priced.',
    },
    {
      q: 'Can I switch without migrating everything?',
      a: 'Yes. Start free, load your rates, send the next quote by voice. Keep Invoice Simple until you are sure.',
    },
    {
      q: 'Does SMASH work for handymen in Australia?',
      a: 'Yes — GST and ABN-ready documents, plus NZ, UK, US and Canada. See [for handymen](/for-handymen).',
    },
  ],
  ctaPreamble: 'Same phone. No keyboard tax.',
  ctaLine: 'Send the next quote by voice — five free · no card.',
  relatedSlugs: relatedExcept('vs-invoice-simple'),
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsQuotemate: VsPageData = {
  slug: 'vs-quotemate',
  competitor: 'QuoteMate',
  competitorShort: 'QuoteMate',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'QuoteMate Alternative (2026) — Your Rates, Not AI Guesses | SMASH',
  metaDescription:
    'QuoteMate helps tradies draft priced jobs with AI. SMASH uses your catalog and voice so the estimate is exact — then approve, invoice, and get paid on one loop.',
  ogDescription: 'QuoteMate alternative: AI speed without outsourcing your dollars to a model.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'AI quoting is useless if the dollars are wrong.',
  eyebrow: 'QuoteMate alternative · catalog-priced voice',
  h1: 'AI quoting is useless if the dollars are wrong.',
  brandLine: BRAND,
  intro:
    'QuoteMate sits in the “AI quoting for tradies” category — describe a job, get a priced document. SMASH is built for the same moment with a hard rule: prices come from your catalog, then you verify and send. That is the difference between a draft estimate and a number you will stand behind on site — and the start of the approve → invoice → pay loop.',
  processRows: process({
    quote: 'AI / market-style priced draft',
    approve: 'Depends on product path',
    invoice: 'Depends on product path',
    pay: 'Check current product',
    hands: 'Voice / AI description',
    prices: 'Model can invent rates',
  }),
  tableRows: [
    { label: 'Input', smash: 'Voice on iPhone (or Gmail)', them: 'Voice / AI job description' },
    { label: 'Pricing source', smash: 'Your Price Hub + catalog', them: 'AI / market-style (varies)' },
    { label: 'Wrong-price risk', smash: 'Flag unknowns — no silent guesses', them: 'Model can invent rates' },
    { label: 'Quote → invoice → pay', smash: 'One product loop', them: 'Check current path' },
    { label: 'Desk workflow', smash: 'Gmail Chrome extension', them: 'App-centric' },
  ],
  contentSections: [
    {
      heading: 'Why “AI quoting” still fails without your catalog',
      body: `The founder story is simple: ChatGPT and Claude can write a beautiful quote and still get the money wrong. Same risk with any AI that invents labour or materials. SMASH was built after that failure — [ChatGPT got my estimates wrong](/blog/chatgpt-got-my-handyman-estimates-wrong). If QuoteMate helps you draft faster but you still do not trust the dollars, you need [AI estimates](/ai-estimates) from your rates — then verify before send.`,
    },
    {
      heading: 'Hijacking the “how much?” moment',
      body: `Customers hire whoever puts a clear PDF in their hand first. SMASH’s loop is talk → verify → send in about 30 seconds — then invoice when the job is done ([voice to invoice](/voice-invoicing)). That is the traffic we want when people search QuoteMate alternatives — same as [Invoice Simple](/vs-invoice-simple) switchers who are done typing.`,
    },
    {
      heading: 'Handymen do not need guessed market rates',
      body: `A gate repair in the Inner West is not a national average. It is your call-out, your hourly, your hinge pack. Catalog fidelity is the product. Market-rate AI is a starting point you still have to rewrite — which puts you back in the form.`,
    },
    {
      heading: 'Longer honest review',
      body: `Deep dive: [QuoteMate review for tradies](/blog/quotemate-review-for-tradies). Same ICP typing cluster: [Invoice2go](/blog/invoice2go-review-for-tradies) · [Invoice Simple](/blog/invoice-simple-review-for-tradies).`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `QuoteMate pricing changes — verify on their site. SMASH: free allowance, then paid from ~$15/month AUD with optional Xero/QuickBooks. [SMASH pricing](/pricing).`,
  whoSmashFor:
    'Tradies and sole traders who want AI speed without outsourcing their rates to a model — especially if they already tried ChatGPT or Claude for estimates.',
  whenThemHeading: 'When QuoteMate might still fit',
  whenThemBullets: [
    'You want market-rate suggestions and will manually correct every line',
    'You are shortlisting AU voice-quote apps for a trial week',
    'You do not need Gmail desk quoting or approval portals',
  ],
  whenThemClosing: 'If the product invents prices you would not charge, keep looking. Catalog-backed send is the bar.',
  featureSections: [
    {
      title: 'Estimates',
      body: 'Both aim at fast on-site estimates. SMASH’s differentiator is your rates plus verify-before-send — then the customer can approve on the spot.',
    },
    {
      title: 'Invoicing',
      body: 'SMASH is estimate → invoice in one loop so you do not retype the job after you win it.',
    },
    {
      title: 'Getting paid',
      body: 'Approval and card pay live on the customer link — not a separate admin project after you get home.',
    },
  ],
  faqs: [
    {
      q: 'Is SMASH a QuoteMate alternative?',
      a: 'Yes for tradies who want voice quoting priced from their own catalog, not generic AI guesses, with a path to invoice and get paid.',
    },
    {
      q: 'Does SMASH use ChatGPT prices?',
      a: 'No. SMASH matches speech to your saved rates and materials. Unknowns are flagged for you. See [can Claude write a quote?](/blog/can-claude-write-a-quote-estimate).',
    },
    {
      q: 'Can I quote now and invoice later?',
      a: 'Yes — send the estimate on site, convert to invoice when the work is done, without rebuilding line items.',
    },
  ],
  ctaPreamble: 'AI speed. Your dollars.',
  ctaLine: 'Try an estimate from your rates — free to start.',
  relatedSlugs: relatedExcept('vs-quotemate'),
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsInvoiceHome: VsPageData = {
  slug: 'vs-invoice-home',
  competitor: 'Invoice Home',
  competitorShort: 'Invoice Home',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'Invoice Home Alternative (2026) — Templates Aren’t a Workflow | SMASH',
  metaDescription:
    'Invoice Home makes template invoice PDFs. SMASH is voice to invoice for service businesses — catalog-priced quotes, approval, and payment before you leave the job.',
  ogDescription: 'Invoice Home alternative: stop building PDFs from templates — talk, verify, send the full loop.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'Templates are not a workflow.',
  eyebrow: 'Invoice Home alternative · process over PDFs',
  h1: 'Templates are not a workflow.',
  brandLine: BRAND,
  intro:
    'Invoice Home is a classic “make a nice invoice PDF” tool — templates, branding, download, email. The bottleneck for people on the tools is not the PDF. It is capturing the job and running quote → approve → invoice → paid before you drive off. That is SMASH.',
  processRows: process({
    quote: 'Template estimate / invoice',
    approve: 'Email PDF',
    invoice: 'New template or save',
    pay: 'Plan / setup dependent',
    hands: 'Desktop / form oriented',
    prices: 'Re-enter or save templates',
  }),
  tableRows: [
    { label: 'Core product', smash: 'Voice / Gmail → priced send', them: 'Template invoice PDF maker' },
    { label: 'On-site workflow', smash: 'Built for it', them: 'Desk / form oriented' },
    { label: 'Approval + pay', smash: 'One customer link', them: 'Usually separate' },
    { label: 'Your rate memory', smash: 'Price Hub catalog', them: 'Templates you maintain' },
    { label: 'Accounting sync', smash: 'Xero / QuickBooks (paid)', them: 'Export / manual' },
  ],
  contentSections: [
    {
      heading: 'Template traffic is switcher traffic',
      body: `People land on Invoice Home searching free invoice templates. Many are the same ICP as SMASH — sole traders who still batch admin on Sunday, or still use [Word vs Excel](/blog/word-vs-excel-vs-app-for-invoices). The upgrade is not a prettier template. It is [voice to invoice](/voice-invoicing) so the document leaves with you.`,
    },
    {
      heading: 'What a handyman actually needs',
      body: `After a fence job you need a priced quote the owner can approve on their phone — not a blank template waiting on a laptop. If they say yes, the invoice should be the same lines. If they pay on the link, you are done before the next job. Template makers skip most of that loop. So do a lot of “simple” apps — see [Zoho Invoice](/vs-zoho-invoice) and [Wave](/vs-wave) for the same pattern.`,
    },
    {
      heading: 'Longer honest review',
      body: `[Invoice Home review for tradies](/blog/invoice-home-review-for-tradies) — templates vs workflow. Same simple-app ICP: [Invoice2go](/blog/invoice2go-review-for-tradies) · [Invoice Simple](/blog/invoice-simple-review-for-tradies).`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `Invoice Home offers free and paid template tiers — confirm on their site. SMASH free plan includes a monthly send allowance; paid unlocks volume and sync. [Pricing](/pricing).`,
  whoSmashFor:
    'Anyone using Invoice Home, Word, or Excel who wants to stop rebuilding invoices after every job — especially [handymen](/for-handymen) and cleaners with weekly volume.',
  whenThemHeading: 'When Invoice Home is enough',
  whenThemBullets: [
    'You need a one-off PDF and will never invoice from a job site',
    'You only bill a few times a year',
  ],
  whenThemClosing: 'For weekly trade volume, templates become the paperwork tax.',
  featureSections: [
    {
      title: 'Documents',
      body: 'Invoice Home shines at branded PDFs. SMASH shines at speed-to-send from real job context — then approval and pay.',
    },
    {
      title: 'Getting paid',
      body: 'SMASH customer portal: they open the link, approve, pay. You get a read receipt the moment they open it.',
    },
  ],
  faqs: [
    {
      q: 'Is SMASH an Invoice Home alternative?',
      a: 'Yes if you want ongoing quoting and invoicing from your phone by voice — not occasional template PDFs.',
    },
    {
      q: 'Can SMASH replace Word or Excel invoices?',
      a: 'Yes. Load your rates once, then talk the job. Start on the free plan.',
    },
  ],
  ctaPreamble: 'Templates are not a workflow.',
  ctaLine: 'Send from the job instead.',
  relatedSlugs: relatedExcept('vs-invoice-home'),
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsJoist: VsPageData = {
  slug: 'vs-joist',
  competitor: 'Joist',
  competitorShort: 'Joist',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'Joist Alternative for Tradies (2026) — Voice, Not More Forms | SMASH',
  metaDescription:
    'Joist is a popular contractor estimate and invoice app. SMASH is voice to invoice — catalog-priced quotes, approval, and payment in about 30 seconds for sole traders.',
  ogDescription: 'Joist alternative: contractor software without the keyboard tax.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'Joist is contractor software. You’re still typing.',
  eyebrow: 'Joist alternative · voice for people on the tools',
  h1: 'Joist is contractor software. You’re still typing.',
  brandLine: BRAND,
  intro:
    'Joist is a well-known contractor app for estimates, invoices, and getting paid. It is still a tap-and-type product. SMASH competes for the same ICP with a different input and a tighter loop: voice against your rates → send → they approve → they pay — before you leave the driveway.',
  processRows: process({
    quote: 'Mobile forms / line items',
    approve: 'In-app client flow',
    invoice: 'Convert in Joist',
    pay: 'Joist payments',
    hands: 'Minutes of tapping',
    prices: 'Item library you maintain',
  }),
  tableRows: [
    { label: 'Build estimate', smash: 'Voice → catalog match', them: 'Mobile forms / line items' },
    { label: 'Speed on site', smash: '~30 seconds talk → send', them: 'Minutes of tapping' },
    { label: 'Full money loop', smash: 'Quote → approve → pay', them: 'Strong — still form-based' },
    { label: 'AU GST / ABN focus', smash: 'Native multi-market tax', them: 'US-strong roots; check AU fit' },
    { label: 'Gmail quoting', smash: 'Chrome extension', them: 'App-first' },
    { label: 'Free start', smash: 'Yes', them: 'Freemium / paid' },
  ],
  contentSections: [
    {
      heading: 'Joist users are exactly who we want',
      body: `If someone googles “Joist alternative,” they already buy contractor software. The pitch is not “another job suite.” It is: keep life simple, stop typing estimates, send before the customer messages the next bloke. [First quote wins](/blog/first-quote-wins-instant-quote-on-site). Same story as [Invoice2go](/vs-invoice2go) and [Invoice Simple](/vs-invoice-simple) switchers.`,
    },
    {
      heading: 'Handyman reality check',
      body: `Joist works when you have time to build the estimate. On a handyman day — five sites, dirty hands, customer waiting at the van — the open tab becomes “type it tonight.” SMASH’s product promise is the opposite: [every job different, every invoice in 60 seconds](/for-handymen). Talk. Verify. Out the door before you are.`,
    },
    {
      heading: 'Process, not just features',
      body: `Joist covers estimates and payments. SMASH optimises the dirty-hands capture and the same approval portal after voice. You do not need a full field-service OS to get paid today — compare [ServiceM8](/vs-servicem8) and [Tradify](/vs-tradify) if you are weighing suites.`,
    },
    {
      heading: 'Longer honest review',
      body: `Full founder-style take: [Joist review for sole traders](/blog/joist-review-for-tradies) — what Joist does well, the open-tab problem on site, and when to keep it.`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `Joist plans vary by region — verify current pricing. SMASH free + paid from ~$15/month AUD. [SMASH pricing](/pricing).`,
  whoSmashFor:
    'Solo contractors and small crews who liked Joist’s simplicity but want voice + catalog pricing — and a loop that finishes with approve and pay on site.',
  whenThemHeading: 'When to stay on Joist',
  whenThemBullets: [
    'You are deep in Joist’s payments and client history and switching cost is high',
    'You want Joist’s specific contractor UI and do not want voice',
  ],
  whenThemClosing: 'If the open tab is still “type the estimate later,” SMASH is the hijack.',
  featureSections: [
    {
      title: 'Estimates and invoices',
      body: 'Both cover quote → invoice. SMASH optimises for dirty-hands capture via [voice to invoice](/voice-invoicing).',
    },
    {
      title: 'Getting paid',
      body: 'Both can collect payment. SMASH ships approval + pay on the customer link after a catalog-priced send.',
    },
  ],
  faqs: [
    {
      q: 'Is SMASH a Joist alternative?',
      a: 'Yes for sole traders who want faster on-site quoting by voice with their own rates — and the approve/pay loop without more forms.',
    },
    {
      q: 'Does SMASH replace full field-service software?',
      a: 'No. SMASH is the speed layer for quote and invoice. Job scheduling suites can sit beside it.',
    },
  ],
  ctaPreamble: 'Contractor app. Without the keyboard.',
  ctaLine: 'Quote the next job by voice.',
  relatedSlugs: relatedExcept('vs-joist'),
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsWave: VsPageData = {
  slug: 'vs-wave',
  competitor: 'Wave',
  competitorShort: 'Wave',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'Wave Alternative for Service Businesses (2026) — Free Isn’t Fast | SMASH',
  metaDescription:
    'Wave is free desk invoicing. SMASH is voice to invoice on site — catalog-priced quotes, approval, and payment before you leave. Wave alternative for people on the tools.',
  ogDescription: 'Wave alternative when free invoices still mean typing tonight.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'Free invoices still cost your evenings.',
  eyebrow: 'Wave alternative · on-site vs desk-first',
  h1: 'Free invoices still cost your evenings.',
  brandLine: BRAND,
  intro:
    'Wave wins on price: free invoices and basic accounting for freelancers. The catch for mobile service businesses is the same as every desk tool — you still type line items later, and the estimate often never left the site. SMASH hijacks that moment: talk the job, verify your rates, send, they approve, they pay.',
  processRows: process({
    quote: 'Browser / desk forms',
    approve: 'Email invoice',
    invoice: 'Wave invoicing',
    pay: 'Wave payments (fees)',
    hands: 'Desk-first',
    prices: 'Manual line items',
  }),
  tableRows: [
    { label: 'Price to start', smash: 'Free monthly allowance', them: 'Free invoicing (paid extras)' },
    { label: 'On-site capture', smash: 'Voice on iPhone', them: 'Browser / desk forms' },
    { label: 'Full loop', smash: 'Quote → approve → pay', them: 'Invoice + accounting focus' },
    { label: 'Accounting depth', smash: 'Speed layer + sync', them: 'Fuller books / banking' },
    { label: 'Gmail quoting', smash: 'Chrome extension', them: 'No' },
  ],
  contentSections: [
    {
      heading: 'Free is not free if Sundays disappear',
      body: `Wave is often the first app after Excel — classic ICP. The switcher query is “Wave alternative” when receipts pile up or invoices go out late. SMASH is not trying to replace Wave’s books. It replaces the typing bottleneck with [voice to invoice](/voice-invoicing), then syncs to accounting on paid plans. Same fork as [FreshBooks](/vs-freshbooks) and [Zoho Invoice](/vs-zoho-invoice).`,
    },
    {
      heading: 'Handymen need the driveway, not the ledger first',
      body: `Books matter. Getting the quote out while the customer is still there matters more for cash flow. Six small jobs × “I’ll Wave it tonight” is how uninvoiced work adds up. SMASH’s loop finishes with approve and pay — then you can sync. See [for handymen](/for-handymen).`,
    },
    {
      heading: 'Longer honest review',
      body: `Desk vs driveway in full: [Wave invoicing review for service businesses](/blog/wave-invoicing-review-for-tradies). Also the Gmail desk twin: [Wave invoicing alternative from Gmail](/blog/wave-invoicing-alternative-gmail).`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `Wave’s core invoicing is free; payments and extras are paid — verify on Wave. SMASH: free allowance, then paid from ~$15/month AUD. [SMASH pricing](/pricing).`,
  whoSmashFor:
    'Freelancers and sole traders who outgrew “I’ll invoice tonight on Wave” and need driveway-speed sends with approval and pay.',
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
    {
      title: 'Getting paid',
      body: 'SMASH attaches approval + pay to the send. Wave focuses on invoices and payments inside its accounting product.',
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
  ctaPreamble: 'Free invoices. Paid evenings.',
  ctaLine: 'Send from the job instead.',
  relatedSlugs: relatedExcept('vs-wave'),
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsFreshbooks: VsPageData = {
  slug: 'vs-freshbooks',
  competitor: 'FreshBooks',
  competitorShort: 'FreshBooks',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'FreshBooks Alternative (2026) — Polished Forms vs Voice Speed | SMASH',
  metaDescription:
    'FreshBooks is polished cloud invoicing. SMASH is voice to invoice — catalog-priced quotes, approval, and payment in about 30 seconds for service businesses.',
  ogDescription: 'FreshBooks alternative when the bottleneck is typing, not branding.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'Pretty invoices. Still typing.',
  eyebrow: 'FreshBooks alternative · speed over polish',
  h1: 'Pretty invoices. Still typing.',
  brandLine: BRAND,
  intro:
    'FreshBooks is the premium “nice invoice” cloud app — clients, expenses, time tracking, branded PDFs. SMASH targets the same freelancers and sole traders with a different job: get a priced document out in about 30 seconds by voice, then run approve → invoice → paid without rebuilding the job at a desk.',
  processRows: process({
    quote: 'Typed estimates',
    approve: 'Client portal / email',
    invoice: 'FreshBooks invoicing',
    pay: 'Online payments',
    hands: 'Awkward on site',
    prices: 'Manual / saved items',
  }),
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
      body: `People searching “FreshBooks alternative” often want cheaper software. The better hijack for our ICP is faster software: [first quote wins](/blog/first-quote-wins-instant-quote-on-site) on site, then invoice without retyping. FreshBooks wins on polish and freelancer accounting breadth. SMASH wins on [voice to invoice](/voice-invoicing). Same conversation as [Wave](/vs-wave) and [Square Invoices](/vs-square-invoices).`,
    },
    {
      heading: 'The process FreshBooks assumes you have time for',
      body: `Open laptop. Build estimate. Email PDF. Chase approval. Convert invoice. Remind for payment. SMASH collapses that into talk → link → they approve → they pay — often before you start the van. That is what [handymen](/for-handymen) and mobile cleaners actually need between appointments.`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `FreshBooks publishes paid plans by invoice volume — confirm current pricing. SMASH: free monthly allowance, then paid from ~$15/month AUD. [Pricing](/pricing).`,
  whoSmashFor:
    'Mobile service workers who liked FreshBooks’ look but still finish paperwork at night.',
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
    {
      title: 'Desk workflow',
      body: 'Email quote requests? [Chrome extension](/chrome-extension) reads the thread so you stop double-typing.',
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
  relatedSlugs: relatedExcept('vs-freshbooks'),
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsSquareInvoices: VsPageData = {
  slug: 'vs-square-invoices',
  competitor: 'Square Invoices',
  competitorShort: 'Square',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'Square Invoices Alternative (2026) — Payments vs the Full Quote Loop | SMASH',
  metaDescription:
    'Square Invoices is payment-first billing. SMASH is voice to invoice with your catalog — send a priced quote, get approval, invoice, and get paid before you leave.',
  ogDescription: 'Square Invoices alternative when you need estimates on site, not just a payment link.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'Payments later. Quote now.',
  eyebrow: 'Square Invoices alternative · win the job first',
  h1: 'Payments later. Quote now.',
  brandLine: BRAND,
  intro:
    'Square Invoices rides the Square ecosystem — cards, readers, payment links. Great if you already take Square payments. Weak if your real problem is building a priced estimate with dirty hands and getting it approved before the customer shops around. That is SMASH’s lane.',
  processRows: process({
    quote: 'Form / POS adjacent',
    approve: 'Payment request culture',
    invoice: 'Square invoices',
    pay: 'Native Square stack',
    hands: 'Tap / dashboard',
    prices: 'Manual / item library',
  }),
  tableRows: [
    { label: 'Core strength', smash: 'Voice quote → approve → pay', them: 'Payments + invoice links' },
    { label: 'Catalog pricing', smash: 'Your rates + materials', them: 'Manual / item library' },
    { label: 'On-site estimate', smash: '~30s talk → send', them: 'Form / POS adjacent' },
    { label: 'Card processing', smash: 'Via payment partners', them: 'Native Square stack' },
    { label: 'Gmail desk path', smash: 'Chrome extension', them: 'Square dashboard' },
  ],
  contentSections: [
    {
      heading: 'Payment traffic is still switcher traffic',
      body: `Sole traders land on Square because “everyone takes Square.” Search “Square invoice alternative” when estimates are slow or messy. SMASH does not try to replace every Square terminal — it hijacks quote/invoice capture with [voice to invoice](/voice-invoicing) and [AI estimates](/ai-estimates) from your catalog. Compare [Joist](/vs-joist) if you came from contractor apps instead.`,
    },
    {
      heading: 'Handymen win jobs with PDFs, not readers',
      body: `A card reader does not help when the customer asks “how much for the deck boards?” and you are still typing. Send the estimate. Get the tap-approve. Invoice the same lines when done. Payment is step four — not step one. That is the process Square Invoices under-serves for on-site trades.`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `Square invoices often sit inside payments pricing (processing fees) — confirm on Square. SMASH: free allowance, paid from ~$15/month AUD. [SMASH pricing](/pricing).`,
  whoSmashFor:
    'Tradies and mobile services who use Square for payments but hate building estimates by tapping.',
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
    {
      title: 'Getting paid',
      body: 'Yes — approval and pay links ship with the customer portal after you send.',
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
  ctaPreamble: 'Win the job first.',
  ctaLine: 'Send the estimate by voice.',
  relatedSlugs: relatedExcept('vs-square-invoices'),
  images: { hero: SHARED_HERO, pricing: SHARED_PRICING_IMG, portal: SHARED_PORTAL_IMAGE },
};

export const vsZohoInvoice: VsPageData = {
  slug: 'vs-zoho-invoice',
  competitor: 'Zoho Invoice',
  competitorShort: 'Zoho Invoice',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'Zoho Invoice Alternative (2026) — Free Templates vs Voice Loop | SMASH',
  metaDescription:
    'Zoho Invoice is free/cheap template invoicing. SMASH is voice to invoice — catalog-priced quotes, approval, and payment for sole traders who work with their hands.',
  ogDescription: 'Zoho Invoice alternative when free templates still mean retyping every job.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'Cheap templates. Expensive evenings.',
  eyebrow: 'Zoho Invoice alternative · capture over suite lock-in',
  h1: 'Cheap templates. Expensive evenings.',
  brandLine: BRAND,
  intro:
    'Zoho Invoice is the freemium invoicer inside Zoho’s empire — templates, clients, recurring bills. Fine at a desk. SMASH competes for the same price-sensitive ICP with on-site voice, your real rates, and the full approve → invoice → pay loop.',
  processRows: process({
    quote: 'Templates + forms',
    approve: 'Email / portal (suite)',
    invoice: 'Zoho Invoice',
    pay: 'Zoho payments options',
    hands: 'Form-bound',
    prices: 'Item list you maintain',
  }),
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
      body: `“Zoho Invoice alternative” searches are classic ICP: people who refuse to pay Xero prices yet still lose hours to admin. The upgrade is not another template. It is [voice to invoice](/voice-invoicing) so the document leaves with you — see also [Word vs Excel vs app](/blog/word-vs-excel-vs-app-for-invoices) and [Invoice Home](/vs-invoice-home).`,
    },
    {
      heading: 'Process beats suite features for sole traders',
      body: `Zoho can grow into CRM and Books. A handyman with six jobs does not need a suite — they need the quote out, approved, and paid. SMASH is the speed layer. Keep Zoho for other tools if you want; do not let template invoicing own the driveway moment.`,
    },
  ],
  pricingHeading: 'Pricing note',
  pricingBody: `Zoho Invoice has a free tier and paid upgrades — verify on Zoho. SMASH: free allowance, paid from ~$15/month AUD. [Pricing](/pricing).`,
  whoSmashFor:
    'Sole traders on free/cheap invoicers who still batch paperwork after dark — [handymen](/for-handymen), cleaners, gardeners.',
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
    {
      title: 'Getting paid',
      body: 'SMASH customer link: approve and pay after a catalog-priced send.',
    },
  ],
  faqs: [
    {
      q: 'Is SMASH a Zoho Invoice alternative?',
      a: 'Yes if you want voice and catalog pricing on site instead of template forms — plus approval and pay on one loop.',
    },
    {
      q: 'Does SMASH replace the whole Zoho suite?',
      a: 'No. SMASH is the speed layer for quotes and invoices.',
    },
  ],
  ctaPreamble: 'Free templates. Paid evenings.',
  ctaLine: 'Try voice instead.',
  relatedSlugs: relatedExcept('vs-zoho-invoice'),
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
