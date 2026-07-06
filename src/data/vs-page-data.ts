/**
 * Long-form /vs-* comparison pages (Comparison Page Master template).
 * Pricing checked dates must match on-page copy and schema dateModified.
 */

export type VsTableRow = { label: string; smash: string; them: string; themAlt?: string };

export type VsContentSection = { heading: string; body: string };

export type VsImage = {
  src: string;
  alt: string;
  /** Hero loads eager; others lazy */
  priority?: boolean;
};

export type VsPageData = {
  slug: string;
  competitor: string;
  competitorShort: string;
  pricingChecked: string;
  datePublished: string;
  dateModified: string;
  metaTitle: string;
  metaDescription: string;
  ogDescription: string;
  ogImage: string;
  articleHeadline: string;
  h1: string;
  intro: string;
  tableColumns?: { them: string; themAlt?: string };
  tableRows: VsTableRow[];
  contentSections: VsContentSection[];
  pricingHeading: string;
  pricingBody: string;
  whoSmashFor: string;
  whenThemHeading: string;
  /** Omit for pages that jump straight to bullets */
  whenThemIntro?: string;
  whenThemBullets: string[];
  whenThemClosing: string;
  featureSections: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  ctaPreamble: string;
  ctaLine: string;
  images: {
    hero: VsImage;
    pricing: VsImage;
    portal: VsImage;
  };
};

/** Competitors with live /vs-* article pages (others still use /smash-vs-*). */
export const VS_ARTICLE_SLUGS = new Set([
  'servicem8',
  'invoice2go',
  'myob',
  'rounded',
  'tradify',
  'xero',
]);

export function vsPagePath(competitorKey: string): string {
  return VS_ARTICLE_SLUGS.has(competitorKey) ? `/vs-${competitorKey}` : `/smash-vs-${competitorKey}`;
}

const PRICING_CHECKED = 'July 2026';
const DATE_MODIFIED = '2026-07-06T00:00:00.000Z';
const DATE_PUBLISHED = '2026-07-06T00:00:00.000Z';

const SHARED_PORTAL_IMAGE = {
  src: '/Screenshot_2026-02-24_at_12.26.20_pm.png',
  alt: 'SMASH customer approval portal where customers approve and pay a quote',
};

export const vsServiceM8: VsPageData = {
  slug: 'vs-servicem8',
  competitor: 'ServiceM8',
  competitorShort: 'ServiceM8',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'SMASH vs ServiceM8 (2026): Which One for Sole Traders?',
  metaDescription:
    'ServiceM8 is built for trade businesses with staff. SMASH gets a quote out of your mouth and into a customer\'s inbox in under 60 seconds. Honest comparison, real pricing.',
  ogDescription: 'Job management or fast invoicing? Honest comparison with real 2026 pricing.',
  ogImage: 'https://smashinvoices.com/og/vs-servicem8.png',
  articleHeadline: 'SMASH vs ServiceM8: Job Management or Fast Invoicing?',
  h1: 'SMASH vs ServiceM8: Job Management or Fast Invoicing?',
  intro:
    'ServiceM8 is job management software built for trade businesses running staff. Scheduling, dispatch, job cards, forms. SMASH does one thing: it turns your voice into a sent quote in under 60 seconds. If you manage a crew, ServiceM8 is the better tool. If you work solo and the admin is the problem, keep reading.',
  tableRows: [
    { label: 'Built for', smash: 'Solo operators who quote fast', them: 'Trade businesses with staff' },
    { label: 'Create a quote', smash: 'Speak it. Sent in under 60 seconds', them: 'Type it into a job card' },
    { label: 'Pricing model', smash: 'Flat monthly. Unlimited workflow', them: 'Charged by job volume per month' },
    {
      label: 'Entry price',
      smash: 'Free (5 quotes/month), then $15/month',
      them: 'Free plan (limited jobs), then A$29/month for 50 jobs',
    },
    { label: 'Busy month', smash: 'Same price', them: 'More jobs can mean a higher tier' },
    { label: 'Materials pricing', smash: '2,250+ item Australian catalog built in', them: 'Manual' },
    { label: 'Scheduling and staff dispatch', smash: 'No', them: 'Yes, and it is genuinely good' },
    { label: 'Accounting sync', smash: 'Xero and QuickBooks', them: 'Xero, QuickBooks, MYOB' },
  ],
  contentSections: [
    {
      heading: 'The real difference: what happens after the job',
      body: `You finish a job at 4pm. The customer wants a price for the next one.

In ServiceM8 you create a job, open the card, type the line items, set the prices, generate the quote, send it. Fine at a desk. Slow in a driveway.

In SMASH you talk. "Replace the flywire on three windows, two hours labour, flywire mesh and spline." SMASH matches your rates from your own [pricing catalog](/materials-pricing), prices the materials from a built-in Australian catalog of over 2,250 items, and builds the quote. You check it and hit send. The customer gets a link, approves it, and can pay through the same page. You see the moment they open it.

The first answer back wins the job. That is the entire product. See [how voice invoicing works](/voice-invoicing).`,
    },
  ],
  pricingHeading: 'SMASH vs ServiceM8 pricing compared',
  pricingBody: `ServiceM8 charges by how many jobs you run each month. Starter is A$29/month for 50 jobs. Growing is A$79 for 150. Premium is A$149 for 500. Users are unlimited on every plan, which is why it is good value for teams. But if you are a solo cleaner or handyman doing 60 to 120 jobs a month, you are paying team-scale prices for a one-person business, and a busy month pushes you up a tier.

SMASH is flat. Free gives you 5 quotes a month with everything included. Starter is $15/month. Pro is $25/month. Your best month costs the same as your worst one. Full breakdown on the [pricing page](/pricing).`,
  whoSmashFor:
    'Sole traders who quote multiple times a week and hate typing. Cleaners, handymen, gardeners, painters, mobile mechanics, pool techs, pest control. Simple, frequent jobs where speed wins the work. No office, no admin day, no patience for setup.',
  whenThemHeading: 'When to choose ServiceM8 instead',
  whenThemIntro: 'Be honest with yourself here. Choose ServiceM8 if:',
  whenThemBullets: [
    'You have staff and need to schedule and dispatch them',
    'You run recurring jobs or service assets over time',
    'You need custom forms, checklists, or compliance documents on site',
    'Your jobs are complex, multi-visit, and need a full job card history',
  ],
  whenThemClosing:
    'ServiceM8 is a genuinely well-built platform for that business. SMASH is not trying to be it. Plenty of businesses graduate from SMASH to ServiceM8 when they hire. Some run both: ServiceM8 for the crew work, SMASH for the fast quotes.',
  featureSections: [
    {
      title: 'Quoting',
      body: 'ServiceM8 quoting lives inside the job workflow: create job, add items, quote. SMASH quoting is the workflow: speak, review, send. With your personal pricing catalog loaded, a repeat quote takes under 30 seconds.',
    },
    {
      title: 'Getting paid',
      body: 'Both take payments. SMASH sends every quote with a [customer approval portal](/customer-approval): the customer opens the link, approves, and pays by card on the spot. Invoice created automatically. You get a read receipt the moment they open it, so you know whether to follow up or relax.',
    },
    {
      title: 'Materials',
      body: 'SMASH ships with an Australian materials catalog of 2,250+ items, so spoken materials get priced without you looking anything up. ServiceM8 relies on your own item lists.',
    },
    {
      title: 'Accounting',
      body: 'Both sync to Xero and QuickBooks. ServiceM8 also syncs to MYOB. Nobody needs to double-enter anything either way.',
    },
    {
      title: 'Platforms',
      body: 'SMASH runs as an iOS app and a Chrome extension that reads quote requests straight out of Gmail. ServiceM8 is iOS-first with a strong offline mode, which matters for teams in low-signal areas.',
    },
  ],
  faqs: [
    {
      q: 'Is ServiceM8 worth it for a sole trader?',
      a: 'It works, but you are paying for scheduling, dispatch and staff features you will not use, and its per-job pricing means busy months cost more. Solo operators who mainly need fast quotes and invoices usually want a lighter tool.',
    },
    {
      q: 'Can SMASH replace ServiceM8?',
      a: 'For a solo operator sending quotes and invoices, yes. For a business scheduling staff across multiple jobs, no. They solve different problems.',
    },
    {
      q: 'Does SMASH work with Xero like ServiceM8 does?',
      a: 'Yes. SMASH syncs invoices to Xero and QuickBooks, so your accountant sees everything without you re-entering it.',
    },
    {
      q: 'How fast is a quote in SMASH really?',
      a: 'Voice processing takes around 7 seconds. A full quote is generated in under 10 seconds end to end, and with your own pricing catalog set up the whole process from spoken to sent is under 30 seconds.',
    },
    {
      q: 'Is there a free version of both SMASH and ServiceM8?',
      a: 'Yes. ServiceM8 has a free plan for very low job volumes. SMASH is free for 5 quotes a month with every feature included, including the customer approval portal and read receipts. No card needed.',
    },
  ],
  ctaPreamble: "You've read enough.",
  ctaLine: 'Say your next quote out loud instead.',
  images: {
    hero: {
      src: '/Screenshot_2026-02-24_at_12.10.48_pm.png',
      alt: 'Creating a quote by voice in SMASH compared to typing a job card in ServiceM8',
      priority: true,
    },
    pricing: {
      src: '/Screenshot_2026-02-26_at_2.44.20_pm.png',
      alt: 'SMASH vs ServiceM8 pricing plans compared 2026',
    },
    portal: SHARED_PORTAL_IMAGE,
  },
};

export const vsInvoice2go: VsPageData = {
  slug: 'vs-invoice2go',
  competitor: 'Invoice2go',
  competitorShort: 'Invoice2go',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'SMASH vs Invoice2go (2026): Voice vs Typing Compared',
  metaDescription:
    "Invoice2go's entry plan allows 2 invoices a month. SMASH sends unlimited quotes by voice from $15/month. Honest comparison with real 2026 pricing.",
  ogDescription: 'Same category, different era. Honest comparison with real 2026 pricing.',
  ogImage: 'https://smashinvoices.com/og/vs-invoice2go.png',
  articleHeadline: 'SMASH vs Invoice2go: Voice vs Typing',
  h1: 'SMASH vs Invoice2go: Voice vs Typing',
  intro:
    'Invoice2go is a mobile invoicing app where you type invoices into forms. SMASH builds the quote from your voice and sends it in under 60 seconds. Same category. Different era.',
  tableRows: [
    { label: 'Create an invoice', smash: 'Speak it', them: 'Type it into a form' },
    { label: 'Entry plan limit', smash: '5 quotes/month free, then unlimited workflow', them: '2 invoices/month on Starter' },
    { label: 'Entry price', smash: 'Free, then $15/month', them: 'US$5.99/month' },
    { label: 'Unlimited invoicing costs', smash: '$15/month', them: 'US$39.99/month (Premium)' },
    { label: 'Materials pricing', smash: '2,250+ item Australian catalog built in', them: 'Manual' },
    { label: 'Customer approves and pays online', smash: 'Yes, one portal link', them: 'Estimates can be approved online' },
    { label: 'Card fees', smash: 'Via Stripe', them: '3.5% on Starter, 2.9% on Premium' },
    { label: 'Xero and QuickBooks sync', smash: 'All plans', them: 'Higher tiers' },
  ],
  contentSections: [
    {
      heading: 'Two invoices a month',
      body: `That is the Starter plan. Two. A handyman does that before lunch on a Tuesday.

Professional lifts it to five a month. To invoice without counting, you need Premium at US$39.99 a month. And at that price you are still typing every line item into a form with your thumbs.

SMASH Starter is $15 a month. Pro is $25. No counting on either. The free plan gives you 5 quotes a month with everything switched on, which is more than Invoice2go's paid Professional plan allows.`,
    },
    {
      heading: 'The typing is the product problem',
      body: `Invoice2go is a decent form. Templates, logo, estimates, payments. The issue is not what it makes. It is how long you spend making it.

With SMASH you say the job out loud. "Gutter clean, two storey, three hours, plus downpipe repair." Your rates fill in from your own [pricing catalog](/materials-pricing). Materials price themselves from a built-in Australian catalog of over 2,250 items. Quote generated in under 10 seconds, checked and sent well inside a minute. The customer opens a link, approves, pays. You see the moment they open it.

The first answer back wins the job. Typing is where jobs go to die. More on [how voice invoicing works](/voice-invoicing).`,
    },
  ],
  pricingHeading: 'SMASH vs Invoice2go pricing compared',
  pricingBody: `Invoice2go: Starter US$5.99/month (2 invoices), Professional US$9.99/month (5 invoices), Premium US$39.99/month (unlimited, recurring invoices, phone support). Annual billing changes the limits to 30 and 100 per year. Card processing runs 3.5% on Starter down to 2.9% on Premium.

SMASH: Free with 5 quotes a month, every feature included. Starter $15/month. Pro $25/month. Full detail on the [pricing page](/pricing).

If you send more than 5 invoices a month, the only Invoice2go plan that fits costs more than SMASH Pro, before the difference in card fees.`,
  whoSmashFor:
    'Anyone quoting multiple times a week who hates typing. Cleaners, handymen, gardeners, painters, mobile mechanics. Work that gets quoted from a driveway, a van, or a footpath, not a desk.',
  whenThemHeading: 'When to choose Invoice2go instead',
  whenThemBullets: [
    'You send one or two invoices a month and want the cheapest paid entry point on the market',
    'You want the built-in mini website and customer reviews widget',
    'You invoice in a mix of currencies for overseas clients',
    'You are already deep in the BILL ecosystem',
  ],
  whenThemClosing: 'For very low volume, US$5.99 a month is genuinely hard to beat.',
  featureSections: [
    {
      title: 'Quoting and estimates',
      body: 'Both convert estimates to invoices. Invoice2go\'s are typed. SMASH\'s are spoken, priced from your catalog, and sent with a [customer approval portal](/customer-approval) where approval, payment, and the invoice happen in one place.',
    },
    {
      title: 'Getting paid',
      body: 'Invoice2go processes cards at 3.5% on Starter, 2.9% on Premium. SMASH takes payment through the approval portal via Stripe, and the invoice is created automatically the moment the customer approves.',
    },
    {
      title: 'Accounting',
      body: 'SMASH syncs to Xero and QuickBooks on every plan. Invoice2go\'s accounting sync sits on its higher tiers.',
    },
    {
      title: 'Platforms',
      body: 'Both run on iOS. SMASH also has a Chrome extension that reads quote requests straight out of Gmail and builds the quote from the email.',
    },
  ],
  faqs: [
    {
      q: 'How many invoices can you send on Invoice2go?',
      a: 'On monthly billing the Starter plan allows 2 invoices per month, Professional allows 5, and Premium is unlimited at US$39.99 per month. Annual billing raises Starter to 30 per year and Professional to 100 per year.',
    },
    {
      q: 'Is Invoice2go good for tradies?',
      a: 'It makes professional invoices, but the invoice caps on the lower plans do not fit trade volumes. A handyman or cleaner doing multiple jobs a week needs the Premium plan, and every invoice still has to be typed.',
    },
    {
      q: 'What is the difference between SMASH and Invoice2go?',
      a: 'Invoice2go is typing and forms. SMASH is voice. You speak the job and SMASH builds the quote with your rates and Australian materials pricing, sends it with an approval portal, and the customer can pay on the spot.',
    },
    {
      q: 'Does SMASH have invoice limits like Invoice2go?',
      a: 'The free plan includes 5 quotes per month with every feature. Paid plans start at $15 per month. There is no 2-invoice cap on any plan.',
    },
    {
      q: 'Can I switch from Invoice2go to SMASH?',
      a: 'Yes. Start on the SMASH free plan, send your next 5 quotes by voice, and keep Invoice2go running until you are sure. Nothing to migrate to get started.',
    },
  ],
  ctaPreamble: 'Your free plan here beats their paid one.',
  ctaLine: 'Say your next quote out loud.',
  images: {
    hero: {
      src: '/Screenshot_2026-02-24_at_12.14.54_pm.png',
      alt: 'Creating an invoice by voice in SMASH compared to typing fields in Invoice2go',
      priority: true,
    },
    pricing: {
      src: '/Screenshot_2026-02-26_at_10.37.22_am.png',
      alt: 'SMASH vs Invoice2go pricing and invoice limits compared 2026',
    },
    portal: SHARED_PORTAL_IMAGE,
  },
};

export const vsMyob: VsPageData = {
  slug: 'vs-myob',
  competitor: 'MYOB',
  competitorShort: 'MYOB',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: "SMASH vs MYOB (2026): Solo Can't Send a Quote",
  metaDescription:
    "Solo by MYOB is built for sole traders but doesn't support quotes. SMASH sends a quote by voice in under 60 seconds. Honest comparison, real 2026 pricing.",
  ogDescription: 'MYOB keeps the books. SMASH wins the job. Honest 2026 comparison.',
  ogImage: 'https://smashinvoices.com/og/vs-myob.png',
  articleHeadline: "SMASH vs MYOB: Solo Can't Send a Quote",
  h1: "SMASH vs MYOB: Solo Can't Send a Quote",
  intro:
    'MYOB built Solo specifically for sole traders. It invoices, tracks expenses, and does basic reports for $99 a year. One thing it does not do: quotes. The step that wins you the job in the first place is not in the product. SMASH exists for exactly that step: speak the job, quote sent in under 60 seconds.',
  tableColumns: { them: 'Solo by MYOB', themAlt: 'MYOB Business Lite' },
  tableRows: [
    { label: 'Quotes', smash: 'Yes, by voice, sent in under 60 seconds', them: 'No', themAlt: 'Yes, typed' },
    { label: 'Invoices', smash: 'Yes, unlimited workflow', them: 'Yes', themAlt: 'Yes' },
    { label: 'Price', smash: 'Free, then $15 or $25/month', them: '$99/year', themAlt: '$315/year' },
    { label: 'Users', smash: '1', them: '1, mobile-only', themAlt: 'Unlimited' },
    { label: 'Materials pricing', smash: '2,250+ item AU catalog built in', them: 'No', themAlt: 'No' },
    { label: 'Customer approves and pays online', smash: 'Yes, one portal link', them: 'No', themAlt: 'Payment services available' },
    { label: 'BAS, payroll, the books', smash: 'No', them: 'GST tracking, no payroll', themAlt: 'Yes, payroll $3/employee extra' },
    { label: 'Upgrade path', smash: 'Free to Starter to Pro', them: 'None. Cannot move to Business plans', themAlt: 'Lite to Pro to AccountRight' },
  ],
  contentSections: [
    {
      heading: 'The missing step',
      body: `Think about the order things happen. Someone asks for a price. You quote. They approve. You do the job. You invoice. You get paid.

Solo by MYOB starts at step five. Everything before the invoice, the part where you win or lose the work, is not there. MYOB's own product pages confirm it: no quotes on Solo, one user, mobile-only, and no path to upgrade to a Business plan later. If you outgrow it, you start again.

For a sole trader whose whole game is answering fast, that is the wrong end of the job to automate.`,
    },
    {
      heading: 'Where SMASH starts',
      body: `SMASH starts at step one. Someone asks for a price, you talk. "Mow and edge the front and back, hedge trim along the fence line, green waste removal." Your rates fill in from your [pricing catalog](/materials-pricing). The quote is generated in under 10 seconds and sent with an approval link. The customer taps approve and can pay on the spot. Invoice created automatically. You see the moment they open it.

The first answer back wins the job. See [how voice invoicing works](/voice-invoicing).`,
    },
  ],
  pricingHeading: 'SMASH vs MYOB pricing compared',
  pricingBody: `From MYOB's pricing page, July 2026: Solo $99/year. Business Lite $315/year. Business Pro $70/month. Payroll on Lite and Pro is $3 per employee per month extra. MYOB runs heavy intro discounts; always compare the ongoing rate.

SMASH: free with 5 quotes a month, Starter $15/month, Pro $25/month. Details on the [pricing page](/pricing).

Solo is cheaper than SMASH. It is also missing the feature that pays for either app: the quote.`,
  whoSmashFor:
    'Sole traders who quote before they invoice. Gardeners, cleaners, handymen, painters, mobile mechanics, pool and pest techs. If customers ask "how much?" and speed decides who gets the job, this is your tool.',
  whenThemHeading: 'When to choose MYOB instead',
  whenThemBullets: [
    'You never quote; customers just book you and you invoice after (some cleaners and lawn rounds work exactly this way, and Solo at $99/year is a fair deal for that)',
    'Your accountant works in MYOB and wants you inside their ecosystem',
    'You need proper accounting: BAS lodgement, payroll, inventory. That is Business Lite or Pro territory, and MYOB does it well',
    'You have complex award payroll; MYOB is genuinely strong there',
  ],
  whenThemClosing: '',
  featureSections: [
    {
      title: 'Quoting',
      body: 'SMASH: spoken, priced from your catalog and a 2,250+ item Australian materials catalog, sent with a [customer approval portal](/customer-approval). Solo: not available. Business Lite: typed quotes on the web.',
    },
    {
      title: 'Getting paid',
      body: 'SMASH takes payment through the approval portal via Stripe, invoice created on approval, read receipt when opened. Solo offers invoicing with payment options and reminders.',
    },
    {
      title: 'The books',
      body: 'MYOB Business does real accounting: GST, BAS, payroll, reporting. SMASH does not, on purpose. SMASH syncs to Xero and QuickBooks; MYOB sync is not currently available, CSV export is.',
    },
    {
      title: 'Platforms',
      body: 'Solo is a phone app only. SMASH is an iOS app plus a Chrome extension that reads quote requests out of Gmail and builds the quote from the email.',
    },
  ],
  faqs: [
    {
      q: 'Can you send quotes with Solo by MYOB?',
      a: "No. Solo by MYOB handles invoicing, expenses, and basic reporting, but it does not support quotes. It is also mobile-only, limited to one user, and cannot be upgraded to MYOB Business plans later. Checked against MYOB's own product pages, July 2026.",
    },
    {
      q: 'How much does MYOB cost for a sole trader in 2026?',
      a: 'Solo by MYOB is $99 per year. MYOB Business Lite is $315 per year. Business Pro is $70 per month. Payroll costs an extra $3 per employee per month on Lite and Pro. MYOB runs heavy introductory discounts; compare the full ongoing price, not the promo rate.',
    },
    {
      q: 'What is the difference between SMASH and MYOB?',
      a: 'MYOB is accounting software: books, BAS, payroll. SMASH is quoting and invoicing at the point of work: speak the job, quote sent in under 60 seconds with your rates and Australian materials pricing filled in. Different jobs.',
    },
    {
      q: 'Does SMASH sync with MYOB?',
      a: 'Not currently. SMASH syncs to Xero and QuickBooks. If your accountant is on MYOB, you can export from SMASH via CSV.',
    },
    {
      q: 'Is Solo by MYOB good for tradies?',
      a: 'For simple invoicing after the job, it works and it is cheap. But it cannot send a quote, which is the step that wins the work in the first place, and it cannot grow into a bigger MYOB plan when you do.',
    },
  ],
  ctaPreamble: 'The quote is the step that wins the job.',
  ctaLine: 'Say yours out loud.',
  images: {
    hero: {
      src: '/Screenshot_2026-02-24_at_12.20.52_pm.png',
      alt: 'SMASH voice quote next to Solo by MYOB which supports invoices but not quotes',
      priority: true,
    },
    pricing: {
      src: '/Screenshot_2026-02-26_at_7.21.39_am.png',
      alt: 'SMASH vs MYOB pricing for sole traders compared 2026',
    },
    portal: SHARED_PORTAL_IMAGE,
  },
};

export const vsRounded: VsPageData = {
  slug: 'vs-rounded',
  competitor: 'Rounded',
  competitorShort: 'Rounded',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'SMASH vs Rounded (2026): Desk Invoicing or Driveway Quotes?',
  metaDescription:
    'Rounded is great Australian sole trader accounting for the desk. SMASH sends a quote by voice from the job in under 60 seconds. Honest comparison, real pricing.',
  ogDescription: 'Both Australian. Both for sole traders. Built for different places.',
  ogImage: 'https://smashinvoices.com/og/vs-rounded.png',
  articleHeadline: 'SMASH vs Rounded: Desk Invoicing or Driveway Quotes?',
  h1: 'SMASH vs Rounded: Desk Invoicing or Driveway Quotes?',
  intro:
    'Both Australian. Both built for sole traders. Built for different places. Rounded is invoicing and accounting done from a desk: time tracking, expenses, GST, pre-filled BAS. SMASH is quoting done from the job: speak the work, quote sent in under 60 seconds. If you bill hours from a chair, Rounded fits. If you price jobs standing in driveways, keep reading.',
  tableRows: [
    { label: 'Built for', smash: 'Quoting fast, on site, by voice', them: 'Sole trader invoicing and tax admin' },
    { label: 'Create a quote', smash: 'Speak it. Sent in under 60 seconds', them: 'Type it, web or mobile' },
    { label: 'Invoicing limits', smash: 'Unlimited workflow on paid plans', them: 'Unlimited on all plans' },
    { label: 'Price', smash: 'Free, then $15 or $25/month', them: 'Starter $264.95/yr, Pro $29.95/month' },
    { label: 'Materials pricing', smash: '2,250+ item AU catalog built in', them: 'No' },
    { label: 'Customer approves and pays online', smash: 'Yes, one portal link, read receipts', them: 'Card payments on invoices, reminders' },
    { label: 'Time tracking and hourly billing', smash: 'No', them: 'Yes, built in' },
    { label: 'GST and BAS', smash: 'Auto tax calc; books live in Xero or QuickBooks', them: 'Auto GST, pre-filled BAS on Pro' },
  ],
  contentSections: [
    {
      heading: 'Two different rooms',
      body: `Rounded was made in Melbourne for freelancers and sole traders, and for its audience it is genuinely good: unlimited invoicing on every plan, a time tracker that feeds invoices, receipt capture, real-time tax estimates, pre-filled BAS. Support answers in under a minute. If your work happens at a desk and you bill hours, there is a lot to like.

SMASH was built in a different room. A ute, mostly. The problem it solves is not "track my hours and lodge my BAS." It is "the customer just asked how much, and whoever answers first gets the job."`,
    },
    {
      heading: 'The driveway test',
      body: `Someone asks for a price on the spot. In Rounded, you open a quote, type the client, type the line items, type the prices, send. Doable on a phone. Not fast with dirty hands.

In SMASH, you talk. "Two bedrooms and a hallway, prep and two coats, plus ceiling in the hall." Your rates fill in from your [pricing catalog](/materials-pricing). Paint and sundries price from a built-in Australian materials catalog of 2,250+ items. Quote generated in under 10 seconds, sent inside a minute. The customer opens a link, approves, pays. You see the moment they open it. More on [how voice invoicing works](/voice-invoicing).`,
    },
  ],
  pricingHeading: 'SMASH vs Rounded pricing compared',
  pricingBody: `Rounded, from their pricing page July 2026: Starter $264.95/year for non-GST sole traders, Pro $29.95/month or $329.95/year with automatic GST and pre-filled BAS. Unlimited invoices on both.

SMASH: free with 5 quotes a month and every feature on, Starter $15/month, Pro $25/month. Details on the [pricing page](/pricing).

Close enough in price that the decision is not money. It is where you work.`,
  whoSmashFor:
    'Hands-on sole traders who quote before they invoice and quote often. Cleaners, handymen, gardeners, painters, mobile mechanics, pool and pest techs. Jobs priced on the spot, won on speed.',
  whenThemHeading: 'When to choose Rounded instead',
  whenThemBullets: [
    'You bill by the hour and want time tracking wired straight into invoices',
    'You want your GST and BAS handled inside the same app, pre-filled and ready',
    'You work from a desk: design, writing, consulting, photography admin days',
    'You invoice overseas clients; multi-currency is on all Rounded plans',
  ],
  whenThemClosing:
    'Rounded is a well-built Australian product for desk-based solo business. Some people will sensibly run both: SMASH to win the job, Rounded for the tax admin.',
  featureSections: [
    {
      title: 'Quoting',
      body: 'Rounded quotes are typed and convert to invoices. SMASH quotes are spoken, priced automatically, and sent with a [customer approval portal](/customer-approval) where approval, payment, and the invoice happen in one link.',
    },
    {
      title: 'Getting paid',
      body: 'Both take card payments and send reminders. SMASH adds read receipts, so you know the moment the quote is opened, and creates the invoice automatically on approval.',
    },
    {
      title: 'Tax and books',
      body: 'Rounded does GST, real-time tax estimates, and pre-filled BAS in-app. SMASH calculates tax on every document automatically and syncs invoices to Xero and QuickBooks, where your BAS gets done.',
    },
    {
      title: 'Platforms',
      body: 'Rounded: web plus mobile app. SMASH: iOS app plus a Chrome extension that reads quote requests out of Gmail and builds the quote from the email.',
    },
  ],
  faqs: [
    {
      q: 'What is the difference between SMASH and Rounded?',
      a: 'Rounded is Australian invoicing and accounting for sole traders, strongest at the desk: time tracking, hourly billing, expenses, GST, and pre-filled BAS. SMASH is a voice-first quoting and invoicing app for the job: speak the work and the quote is sent in under 60 seconds.',
    },
    {
      q: 'Is Rounded good for tradies?',
      a: 'Rounded handles a tradie\'s invoicing and tax admin well, and unlimited invoicing on all plans suits high volumes. It is built around typed invoicing and time tracking though, with no voice input, no materials catalog, and no customer approval portal, so quoting on the spot is slower.',
    },
    {
      q: 'Can I use SMASH and Rounded together?',
      a: 'Yes, and it can make sense. SMASH for winning the job fast on site, Rounded for expense tracking and BAS. Many sole traders run a quoting tool alongside their accounting tool.',
    },
    {
      q: 'How much does Rounded cost in 2026?',
      a: 'Rounded\'s published plans are Starter at $264.95 per year for non-GST sole traders and Pro at $29.95 per month or $329.95 per year with automatic GST and pre-filled BAS. Checked July 2026 on Rounded\'s pricing page.',
    },
    {
      q: 'Does Rounded have voice invoicing?',
      a: 'No. Rounded invoices and quotes are typed, on web or mobile. SMASH builds the quote from your voice, priced from your own rates and a built-in Australian materials catalog of 2,250+ items.',
    },
  ],
  ctaPreamble: 'Built for the driveway, not the desk.',
  ctaLine: 'Say your next quote out loud.',
  images: {
    hero: {
      src: '/Screenshot_2026-02-24_at_3.03.11_pm.png',
      alt: 'Rounded invoicing at a desk compared to SMASH voice quoting on a job site',
      priority: true,
    },
    pricing: {
      src: '/Screenshot_2026-02-24_at_3.21.07_pm.png',
      alt: 'SMASH vs Rounded pricing for Australian sole traders 2026',
    },
    portal: SHARED_PORTAL_IMAGE,
  },
};

export const vsTradify: VsPageData = {
  slug: 'vs-tradify',
  competitor: 'Tradify',
  competitorShort: 'Tradify',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'SMASH vs Tradify (2026): Full Suite or Fast Quotes?',
  metaDescription:
    'Tradify is a job management suite priced per user. SMASH does one thing: quote sent by voice in under 60 seconds, from $15/month. Honest 2026 comparison.',
  ogDescription: 'Job management suite vs the fastest way to quote. Real 2026 pricing.',
  ogImage: 'https://smashinvoices.com/og/vs-tradify.png',
  articleHeadline: 'SMASH vs Tradify: Full Suite or Fast Quotes?',
  h1: 'SMASH vs Tradify: Full Suite or Fast Quotes?',
  intro:
    'Tradify is a full job management suite for trade businesses: quoting, scheduling, timesheets, purchase orders, priced per user per month. SMASH does one thing: it gets a quote out of your mouth and into a customer\'s inbox in under 60 seconds. If you run a crew, Tradify earns its keep. If you work solo, you are paying for a toolbox to use one tool.',
  tableRows: [
    { label: 'Built for', smash: 'Solo operators who quote fast', them: 'Trade businesses of 1 to 20 staff' },
    { label: 'Create a quote', smash: 'Speak it. Sent in under 60 seconds', them: 'Templates, kits, typed line items' },
    { label: 'Pricing', smash: 'Flat: free, $15, or $25/month', them: 'Per user: from US$47/user/month' },
    { label: 'Free plan', smash: 'Yes, 5 quotes/month, all features', them: 'No, 14-day trial only' },
    { label: 'Materials pricing', smash: '2,250+ item AU catalog built in', them: 'Import supplier price lists by CSV' },
    { label: 'Scheduling, timesheets, purchase orders', smash: 'No', them: 'Yes (purchase orders on Plus)' },
    { label: 'Accounting sync', smash: 'Xero, QuickBooks', them: 'Xero, QuickBooks, MYOB' },
    { label: 'Android', smash: 'No (iOS + Chrome extension)', them: 'Yes, full native app' },
  ],
  contentSections: [
    {
      heading: 'Priced per user, built for teams',
      body: `Tradify's plans start around US$47 per user per month, and the tier ladder matters: purchase orders, bulk invoicing, kit bundles, and full reporting sit on Plus at US$61. There is no free plan. Australian customers see their AUD price at signup.

For a business with four people on the tools, that maths can work; the admin it replaces is real. For one person, it is a lot of subscription for the part you actually use every day: getting a quote out.

Independent 2026 reviews keep landing on the same two notes for solos. The learning curve is dense, because quoting sits inside a job workflow built for teams. And supplier pricing is manual, imported by CSV rather than live.`,
    },
    {
      heading: 'The one thing SMASH does',
      body: `You finish a fence repair. The owner points at the gate. "What would that be?"

You talk. "Replace the gate hinges and latch, realign the gate, one hour labour plus hardware." SMASH pulls your rates from your [pricing catalog](/materials-pricing), prices the hardware from a built-in Australian materials catalog of 2,250+ items, and the quote is ready in under 10 seconds. Sent before you reach the ute. The owner taps approve on their phone and can pay right there. You see the moment they open it.

No job card. No template picking. No menus. See [how voice invoicing works](/voice-invoicing).`,
    },
  ],
  pricingHeading: 'SMASH vs Tradify pricing compared',
  pricingBody: `Tradify, published July 2026: Lite US$47 per user/month, Pro US$51, Plus US$61. Discounts from 4+ users. Optional website add-on US$12/month. 14-day free trial, no free plan. AUD billed at signup for Australian customers.

SMASH: free with 5 quotes a month, Starter $15/month, Pro $25/month, flat regardless of how busy you get. Details on the [pricing page](/pricing).`,
  whoSmashFor:
    'Sole traders quoting multiple times a week: handymen, cleaners, gardeners, painters, mobile mechanics, pool and pest techs. Simple, frequent jobs where the first answer back wins the work.',
  whenThemHeading: 'When to choose Tradify instead',
  whenThemBullets: [
    'You have staff and need scheduling, timesheets, and job tracking in one place',
    'You need purchase orders and supplier bill imports against jobs',
    'Your crew runs Android phones; Tradify\'s Android app is full native and genuinely good',
    'Your accountant works in MYOB and you want direct sync',
  ],
  whenThemClosing:
    'Tradify is a capable suite for a growing team. Some businesses start on SMASH solo and move to Tradify when they hire. The quotes just get slower.',
  featureSections: [
    {
      title: 'Quoting',
      body: 'Tradify quoting is template and kit based, quick once configured, but every quote is still assembled by hand. SMASH quoting is spoken, priced automatically, and sent with a [customer approval portal](/customer-approval) where the customer approves and pays in one place.',
    },
    {
      title: 'Getting paid',
      body: 'Both take online payments. SMASH fires a read receipt the moment the customer opens the quote, and creates the invoice automatically on approval.',
    },
    {
      title: 'Materials',
      body: 'Tradify imports supplier price lists via CSV, kept current by you. SMASH ships with a 2,250+ item Australian materials catalog, so spoken materials are priced without a spreadsheet.',
    },
    {
      title: 'Platforms',
      body: 'Tradify: iOS, Android, web. SMASH: iOS plus a Chrome extension that reads quote requests straight out of Gmail and builds the quote from the email.',
    },
  ],
  faqs: [
    {
      q: 'How much does Tradify cost in 2026?',
      a: 'Tradify\'s published pricing is per user per month: Lite US$47, Pro US$51, Plus US$61, with volume discounts from 4 or more users. Australian customers are billed in AUD at signup. There is no free plan; a 14-day trial is available. Checked July 2026.',
    },
    {
      q: 'Is Tradify worth it for a sole trader?',
      a: 'Tradify is built as a full job management suite: scheduling, timesheets, purchase orders. For a sole trader who mainly needs quotes and invoices out fast, much of that goes unused, several features sit behind the Plus tier, and reviews note a dense learning curve for solo operators.',
    },
    {
      q: 'What is the difference between SMASH and Tradify?',
      a: 'Tradify manages the whole job lifecycle for teams. SMASH does one thing: it turns your voice into a sent quote in under 60 seconds, with your own rates and Australian materials pricing filled in automatically.',
    },
    {
      q: 'Does Tradify have voice quoting?',
      a: 'No. Tradify quotes are built from templates, kits, and imported supplier price lists, all entered by hand. SMASH builds the quote from your voice.',
    },
    {
      q: 'Does SMASH sync with Xero like Tradify?',
      a: 'Yes, SMASH syncs to Xero and QuickBooks. Tradify also syncs to MYOB, which matters if your accountant works in MYOB.',
    },
  ],
  ctaPreamble: 'One tool. One job. Quote sent before you reach the ute.',
  ctaLine: '',
  images: {
    hero: {
      src: '/Screenshot_2026-02-24_at_2.38.59_pm.png',
      alt: "Building a quote by voice in SMASH compared to Tradify's quote builder",
      priority: true,
    },
    pricing: {
      src: '/Screenshot_2026-02-24_at_2.52.37_pm.png',
      alt: 'SMASH vs Tradify pricing per user compared 2026',
    },
    portal: SHARED_PORTAL_IMAGE,
  },
};

export const vsXero: VsPageData = {
  slug: 'vs-xero',
  competitor: 'Xero',
  competitorShort: 'Xero',
  pricingChecked: PRICING_CHECKED,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  metaTitle: 'SMASH vs Xero (2026): Job Site App or Accounting Software?',
  metaDescription:
    "Xero is for your accountant. SMASH is for the job site. They sync. Honest comparison of Xero's 2026 plans, the 20-invoice cap, and quoting by voice.",
  ogDescription: 'Keep Xero for the books. Quote by voice on the job. They work together.',
  ogImage: 'https://smashinvoices.com/og/vs-xero.png',
  articleHeadline: 'SMASH vs Xero: Job Site App or Accounting Software?',
  h1: 'SMASH vs Xero: Job Site App or Accounting Software?',
  intro:
    'This is not really a versus. Xero is accounting software: BAS, bank feeds, payroll, the books your accountant lives in. SMASH is a quoting and invoicing app for the job site: speak the job, quote sent in under 60 seconds. They do different work, and they sync. The real question is what you use at 4pm in a driveway, and Xero was never built for that.',
  tableRows: [
    { label: 'Built for', smash: 'Quoting and invoicing at the point of work', them: 'Accounting, BAS, payroll, the books' },
    { label: 'Create a quote', smash: 'Speak it. Sent in under 60 seconds', them: 'Type it in the app or on the web' },
    { label: 'Entry plan invoice limit', smash: 'Unlimited workflow on paid plans, 5 quotes/month free', them: '20 invoices/month on Ignite' },
    { label: 'Entry price', smash: 'Free, then $15/month', them: '$37/month (Ignite, from 1 July 2026)' },
    { label: 'Next tier', smash: '$25/month (Pro)', them: '$78/month (Grow)' },
    { label: 'Materials pricing', smash: '2,250+ item Australian catalog built in', them: 'No' },
    { label: 'BAS, bank feeds, payroll', smash: 'No', them: 'Yes, this is what Xero is for' },
    { label: 'Work together', smash: 'Syncs to Xero', them: 'Receives SMASH invoices automatically' },
  ],
  contentSections: [
    {
      heading: 'The 20-invoice wall',
      body: `Xero Ignite allows 20 invoices a month and 5 bills. For a consultant sending a handful of invoices, fine. For a cleaner doing 30 to 80 jobs a month or a handyman doing 60 plus, the cap breaks in week two. The next stop is Grow at $78 a month, and Xero has raised prices every year since 2021.

Here is the thing though: you probably should not be doing your job-site quoting in accounting software anyway. That is like doing your quotes in your tax return.`,
    },
    {
      heading: 'Keep Xero. Add speed.',
      body: `The setup that works: your accountant runs Xero. You run SMASH on the job.

You finish a job, the customer asks for a price on the next one. You talk. "Pressure wash the driveway and both paths, half day, plus surface sealer." SMASH pulls your rates from your [pricing catalog](/materials-pricing), prices the sealer from a built-in Australian materials catalog of 2,250+ items, and sends the quote with an approval link. Customer approves, pays, invoice created. The invoice syncs into Xero on its own.

You quoted in under a minute. Your accountant changed nothing. Nobody typed anything twice. More on [how voice invoicing works](/voice-invoicing).`,
    },
  ],
  pricingHeading: 'SMASH vs Xero pricing compared',
  pricingBody: `Xero's published Australian plans from 1 July 2026: Ignite $37/month (20 invoices, 5 bills, payroll for 1), Grow $78 (unlimited invoicing, payroll for 2), Comprehensive $107, Ultimate from $143. Payroll and auto super are included in all plans. Prices checked July 2026 on Xero's pricing page; they typically rise each July.

SMASH: free with 5 quotes a month, Starter $15/month, Pro $25/month. Details on the [pricing page](/pricing).

A sole trader on Ignite who hits the invoice cap faces a $41/month jump to Grow. SMASH Pro plus Ignite together costs less than Grow alone, and gets you voice quoting Xero will never have.`,
  whoSmashFor:
    'Sole traders who quote on the spot and already have, or plan to have, an accountant on Xero. Cleaners, handymen, gardeners, painters, mobile mechanics, pool techs. You keep the books compliant in Xero and win the work with SMASH.',
  whenThemHeading: 'When to choose Xero alone instead',
  whenThemBullets: [
    'You send fewer than 20 invoices a month and quote from a desk',
    'You mainly need BAS, bank reconciliation, and payroll, and invoicing is an afterthought',
    'Your accountant prepares your invoices for you',
    'You bill monthly retainers, not on-the-spot jobs',
  ],
  whenThemClosing: 'If invoicing volume is low and speed does not win you work, Ignite on its own is enough.',
  featureSections: [
    {
      title: 'Quoting',
      body: 'Xero quotes are typed forms, built for the desk. SMASH quotes are spoken, priced automatically, and sent from wherever you are standing.',
    },
    {
      title: 'Getting paid',
      body: 'Xero invoices can carry a payment service. SMASH sends every quote with a [customer approval portal](/customer-approval): approve, pay, invoice created, read receipt fired the moment they open it.',
    },
    {
      title: 'The books',
      body: 'Xero wins this completely. BAS lodgement, bank feeds, payroll, super, the accountant ecosystem. SMASH does not do any of it, on purpose. It sends the results into Xero instead.',
    },
    {
      title: 'Platforms',
      body: 'Xero is web-first with companion apps. SMASH is an iOS app plus a Chrome extension that reads quote requests out of Gmail and builds the quote from the email.',
    },
  ],
  faqs: [
    {
      q: 'Does SMASH work with Xero?',
      a: 'Yes. SMASH syncs invoices to Xero, so quotes you win on the job flow into your books without re-entering anything. Your accountant keeps working in Xero as normal.',
    },
    {
      q: "How many invoices can you send on Xero's cheapest plan?",
      a: 'Xero\'s Ignite plan caps invoicing at 20 per month and 5 bills. Past that you need the Grow plan. Prices as published by Xero, checked July 2026.',
    },
    {
      q: 'Is Xero too expensive for a sole trader?',
      a: 'Xero has raised prices every year since 2021. Ignite works for low-volume sole traders, but anyone sending more than 20 invoices a month is pushed to Grow, which costs roughly double. Many sole traders pair a cheaper quoting tool with their accountant\'s Xero file instead.',
    },
    {
      q: 'Can SMASH replace Xero?',
      a: 'No, and it does not try to. Xero is accounting: BAS, bank feeds, payroll, the books. SMASH is quoting and invoicing at the point of work. They do different jobs and they sync.',
    },
    {
      q: 'Can I quote by voice in Xero?',
      a: 'No. Xero quotes are typed on the web or in the app. SMASH builds a quote from your voice in under 10 seconds, priced from your own rates and a built-in Australian materials catalog.',
    },
  ],
  ctaPreamble: 'Keep Xero for the books. Win the job with your voice.',
  ctaLine: '',
  images: {
    hero: {
      src: '/Screenshot_2026-02-26_at_2.44.20_pm.png',
      alt: 'Xero accounting dashboard on desktop next to a SMASH voice quote on a phone',
      priority: true,
    },
    pricing: {
      src: '/Screenshot_2026-02-26_at_10.37.22_am.png',
      alt: 'SMASH invoices syncing automatically into Xero',
    },
    portal: SHARED_PORTAL_IMAGE,
  },
};

export const vsPageBySlug: Record<string, VsPageData> = {
  'vs-servicem8': vsServiceM8,
  'vs-invoice2go': vsInvoice2go,
  'vs-myob': vsMyob,
  'vs-rounded': vsRounded,
  'vs-tradify': vsTradify,
  'vs-xero': vsXero,
};
