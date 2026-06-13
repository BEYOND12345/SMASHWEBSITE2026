/**
 * Country / locale data for international landing pages.
 *
 * URL strategy: single domain `smashinvoices.com` with country
 * subdirectories. AU content lives at the root (treated as `x-default`);
 * non-AU countries get `/nz`, `/uk`, `/us`, `/ca`.
 *
 * As of April 2026 SMASH is live in all five countries on iOS and as a
 * Chrome extension. Country-specific tax handling (GST, VAT, HST/PST,
 * state sales tax) is built into the app — pick your country during
 * onboarding and every invoice is formatted correctly from then on.
 */

export interface CountryData {
  slug: 'au' | 'nz' | 'uk' | 'us' | 'ca';
  code: string;
  hreflang: string;
  name: string;
  demonym: string;
  flagEmoji: string;
  path: string;
  /** Absolute canonical URL for this country's landing page. */
  url: string;
  currency: {
    code: string;
    symbol: string;
  };
  /** What the tax line says on an invoice in this country. */
  taxLabel: string;
  taxRate: string;
  /** What the business registration number is called locally. */
  businessNumberLabel: string;
  /** SMASH is live in every supported country. Kept on the type as a
   *  forward-looking flag in case we add markets that aren't yet ready. */
  live: boolean;
  /** One-line heroic promise for the country. */
  heroHook: string;
  heroSub: string;
  /** 3–4 market-specific reasons SMASH is different. */
  reasons: { title: string; body: string }[];
  /** Audience examples (e.g. "plumbers, sparkies, builders"). */
  audience: string;
  /** SEO: title + description + keywords. */
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  /** 4 short FAQs tailored to the market. */
  faqs: { q: string; a: string }[];
}

export const countries: CountryData[] = [
  {
    slug: 'au',
    code: 'AU',
    hreflang: 'en-AU',
    name: 'Australia',
    demonym: 'Australian',
    flagEmoji: '🇦🇺',
    path: '/',
    url: 'https://smashinvoices.com/',
    currency: { code: 'AUD', symbol: '$' },
    taxLabel: 'GST (10%)',
    taxRate: '10%',
    businessNumberLabel: 'ABN',
    live: true,
    heroHook: 'Send the GST invoice before you leave.',
    heroSub: 'Talk on iPhone or scan Gmail. GST, ABN, ATO-compliant — priced from your catalog in under 60 seconds.',
    reasons: [
      {
        title: '10% GST built in, ATO-compliant from day one',
        body: 'Every invoice SMASH generates is ATO-compliant — ABN on the document, sequential invoice numbers, GST calculated per line item. No spreadsheets, no manual maths.',
      },
      {
        title: 'ABN on every invoice, automatically',
        body: 'Enter your ABN once during setup and it appears on every invoice and quote you ever send. No checklist. No forgetting.',
      },
      {
        title: 'Built for Australian trades',
        body: 'Voice recognition trained on Australian trade language — "25mm copper," "Clipsal switches," "call-out fee." SMASH understands what you do and prices it the way you do.',
      },
      {
        title: 'Free plan, then $15/$25/$35 AUD/month',
        body: 'Start free with 5 invoices a month. Upgrade to Starter ($15), Pro ($25), or Unlimited ($35) when you\'re ready. Flat rate — no per-user fees, no contract.',
      },
    ],
    audience: 'plumbers, sparkies, chippies, cleaners, gardeners, handymen, mobile mechanics',
    seo: {
      title: 'Send the Invoice Before You Leave — GST Invoices Australia | SMASH',
      description: 'Talk for 30 seconds on iPhone or scan Gmail. SMASH sends a GST-compliant invoice with your ABN in under 60 seconds. Free plan. Syncs to Xero and QuickBooks.',
      keywords: 'invoice app Australia, send invoice after job, GST invoice app, voice to invoice Australia, ABN invoice software, gmail invoice extension',
    },
    faqs: [
      {
        q: 'Does SMASH produce ATO-compliant invoices in Australia?',
        a: 'Yes. Every invoice SMASH generates is ATO-compliant: it includes your ABN, a sequential invoice number, the date, 10% GST itemised per line, and a total with GST shown separately — exactly as required.',
      },
      {
        q: 'Does SMASH work with GST in Australia?',
        a: 'Yes. GST is applied automatically at 10% to every line item. SMASH shows the GST amount separately on every invoice so your customers can see exactly what they\'re paying — no manual maths, no calculator.',
      },
      {
        q: 'What does SMASH cost in Australia?',
        a: 'SMASH Free gives you 5 invoices per month at $0 — no credit card needed. Starter is $15 AUD/month with unlimited invoices and Xero/QuickBooks sync. Pro is $25 AUD/month and Unlimited is $35 AUD/month. All plans are flat rate with no per-user fees.',
      },
      {
        q: 'Can SMASH export to Xero or MYOB for my accountant?',
        a: 'Xero sync is available on Starter and above — invoices push from SMASH into your Xero account automatically. QuickBooks sync is also included on Starter+. For MYOB, SMASH exports GST-compliant CSV files your accountant can import.',
      },
    ],
  },
  {
    slug: 'nz',
    code: 'NZ',
    hreflang: 'en-NZ',
    name: 'New Zealand',
    demonym: 'New Zealand',
    flagEmoji: '🇳🇿',
    path: '/nz',
    url: 'https://smashinvoices.com/nz',
    currency: { code: 'NZD', symbol: '$' },
    taxLabel: 'GST (15%)',
    taxRate: '15%',
    businessNumberLabel: 'NZBN',
    live: true,
    heroHook: 'Send the invoice before you leave.',
    heroSub: 'Describe the job on iPhone or in Gmail — 15% GST invoice in NZD with your NZBN, sent in under 60 seconds.',
    reasons: [
      {
        title: 'Built for 15% GST out of the box',
        body: 'SMASH handles NZ GST automatically. No spreadsheets. No manual maths. Every invoice is IRD-compliant with your NZBN and GST number on the document.',
      },
      {
        title: 'NZD pricing, NZBN on every invoice',
        body: 'Your business number on every document. Currency in NZD. Clients see a professional Kiwi invoice — not a retrofitted Aussie one.',
      },
      {
        title: 'Same voice-first product Aussies love',
        body: 'Talk for 30 seconds, SMASH writes the scope and prices the line items. Labour + materials + call-out — all on one invoice.',
      },
      {
        title: 'Available on iOS and Chrome',
        body: 'Download the SMASH app from the New Zealand App Store, or pin the Chrome extension to invoice straight from your laptop.',
      },
    ],
    audience: 'plumbers, sparkies, builders, landscapers, cleaners, painters',
    seo: {
      title: 'Invoice App New Zealand — Quote in Under 60 Seconds | SMASH',
      description: 'Talk or scan Gmail. Send a 15% GST invoice in NZD with your NZBN in under 60 seconds. iOS + Chrome. Free to start. Xero sync on Starter.',
      keywords: '',
    },
    faqs: [
      {
        q: 'Does SMASH work with GST in New Zealand?',
        a: 'Yes. Set your country to New Zealand during onboarding and every invoice automatically applies 15% GST, shows the GST amount separately, and includes your NZBN and GST number — exactly as required by the IRD.',
      },
      {
        q: 'Can I use SMASH to create tax invoices in NZ?',
        a: 'Yes. SMASH produces compliant NZ tax invoices: NZBN on the document, 15% GST itemised per line, sequential invoice numbering, and your business details. Your customers can use them to claim GST inputs.',
      },
      {
        q: 'Is SMASH available in New Zealand?',
        a: 'Yes — SMASH is live on the NZ App Store and as a Chrome extension. Download it free, no credit card required.',
      },
      {
        q: 'Will pricing be in NZD?',
        a: 'Invoices you send your customers default to NZD. Subscription pricing is billed in AUD on the same plan everywhere — same price for every country.',
      },
      {
        q: 'Does SMASH support Xero for NZ tradies?',
        a: 'Xero and QuickBooks sync are available on Starter ($15 AUD/month) and above. SMASH invoices push into Xero automatically — your accountant gets GST-correct line items in NZD without you re-entering anything.',
      },
      {
        q: 'Does it work for my trade in New Zealand?',
        a: 'SMASH is built for sole traders and small crews: plumbers, sparkies, builders, landscapers, cleaners, painters, mobile mechanics. Voice recognition is trained on trade language, including common NZ trade terminology.',
      },
    ],
  },
  {
    slug: 'uk',
    code: 'GB',
    hreflang: 'en-GB',
    name: 'the United Kingdom',
    demonym: 'British',
    flagEmoji: '🇬🇧',
    path: '/uk',
    url: 'https://smashinvoices.com/uk',
    currency: { code: 'GBP', symbol: '£' },
    taxLabel: 'VAT (20%)',
    taxRate: '20%',
    businessNumberLabel: 'Company number / UTR',
    live: true,
    heroHook: 'Send the VAT invoice before you leave.',
    heroSub: 'Talk on site or scan Gmail at your desk — VAT-compliant invoice in GBP, sent in under 60 seconds.',
    reasons: [
      {
        title: 'VAT-compliant from the first invoice',
        body: 'SMASH handles 20% VAT by default, with flat-rate and standard schemes supported. Every PDF ticks the HMRC boxes — VAT number, invoice number, and itemised VAT shown.',
      },
      {
        title: 'GBP pricing, UK-formatted invoices',
        body: 'Currency in GBP. Your company number or UTR and VAT number on every document. Clients see a professional British invoice — not a translated import.',
      },
      {
        title: 'Built for sole traders and limited companies',
        body: 'Works whether you trade as a sole trader with a UTR or a limited company. Choose your setup once, SMASH formats every invoice correctly from then on.',
      },
      {
        title: 'Available on iOS and Chrome',
        body: 'Download the SMASH app from the UK App Store, or pin the Chrome extension to invoice from a laptop or van office. Free to start, no credit card.',
      },
    ],
    audience: 'plumbers, sparks, joiners, brickies, gas engineers, landscapers, domestic cleaners',
    seo: {
      title: 'Invoice App the United Kingdom — Quote in Under 60 Seconds | SMASH',
      description: 'Talk for 30 seconds or scan Gmail. VAT-compliant invoice in GBP with your UTR or company number — under 60 seconds. iOS + Chrome. Free to start.',
      keywords: '',
    },
    faqs: [
      {
        q: 'Can I use SMASH for VAT invoices in the UK?',
        a: 'Yes. SMASH produces fully HMRC-compliant VAT invoices in GBP: your VAT number on the document, 20% VAT itemised per line, sequential invoice numbers, and your company number or UTR. Standard and flat-rate VAT schemes are both supported.',
      },
      {
        q: 'Does SMASH handle UK VAT correctly?',
        a: 'Yes. Every invoice defaults to 20% VAT. You can also set VAT-exempt status for services that don\'t carry VAT. Your VAT number appears on every PDF and the VAT amount is shown separately as required by HMRC.',
      },
      {
        q: 'Is SMASH available in the UK?',
        a: 'Yes — SMASH is live on the UK App Store and as a Chrome extension. Free to start, no credit card required.',
      },
      {
        q: 'Is pricing in GBP?',
        a: 'Invoices you send your customers are in GBP. Subscription pricing is billed in AUD — same flat rate for every country. No per-user fees, no contract.',
      },
      {
        q: 'Does it work for limited companies as well as sole traders?',
        a: 'Yes. Pick your business type during onboarding — sole trader with UTR or limited company with company number — and SMASH formats every invoice correctly from then on. VAT registered or not, both are supported.',
      },
      {
        q: 'Can SMASH help with CIS invoicing for UK subcontractors?',
        a: 'SMASH generates professional invoices that subcontractors send to main contractors, including your UTR and the correct labour and materials breakdown. CIS tax deduction handling is on the roadmap — export to CSV for your accountant in the meantime.',
      },
    ],
  },
  {
    slug: 'us',
    code: 'US',
    hreflang: 'en-US',
    name: 'the United States',
    demonym: 'American',
    flagEmoji: '🇺🇸',
    path: '/us',
    url: 'https://smashinvoices.com/us',
    currency: { code: 'USD', symbol: '$' },
    taxLabel: 'Sales tax (configurable by state)',
    taxRate: 'varies by state',
    businessNumberLabel: 'EIN',
    live: true,
    heroHook: 'Send the invoice before you leave the job.',
    heroSub: 'Voice on iPhone or email scan in Gmail — USD invoice with state sales tax and your EIN, sent in under 60 seconds.',
    reasons: [
      {
        title: 'State sales tax, handled per invoice',
        body: 'Set your state and county once. SMASH applies the correct sales tax rate to every line item automatically — no lookup, no calculator.',
      },
      {
        title: 'USD pricing, EIN on every invoice',
        body: 'Invoices in USD. Your EIN on every PDF. Payment by card or ACH. Built for 1099 contractors, sole proprietors, and small LLCs.',
      },
      {
        title: 'Works for the trades Americans run',
        body: 'HVAC, plumbing, electrical, handyman, lawn care, mobile detailing, pressure washing — voice recognition trained on the language of US service work.',
      },
      {
        title: 'Available on iOS and Chrome',
        body: 'Download the SMASH app from the US App Store, or pin the Chrome extension to invoice straight from your laptop. Free to start, no credit card.',
      },
    ],
    audience: 'HVAC techs, electricians, plumbers, handymen, lawn care, mobile detailing, pressure washing, house cleaning',
    seo: {
      title: 'Invoice App the United States — Quote in Under 60 Seconds | SMASH',
      description: 'Talk or scan Gmail. Send a USD invoice with state sales tax and your EIN in under 60 seconds. Built for 1099 contractors and service businesses. iOS + Chrome.',
      keywords: '',
    },
    faqs: [
      {
        q: 'Does SMASH handle US state sales tax?',
        a: 'Yes. You set your state (and county, if applicable) once during onboarding and SMASH applies the correct sales tax rate to every invoice automatically — no lookup tables, no manual entry.',
      },
      {
        q: 'Can I use SMASH as a 1099 contractor or sole proprietor?',
        a: 'Yes. SMASH is built for 1099 contractors, sole proprietors, and small LLCs. Pick your business type during onboarding — EIN or SSN, sole prop or LLC — and invoices are formatted correctly from day one. Your EIN appears on every invoice.',
      },
      {
        q: 'Is SMASH available in the United States?',
        a: 'Yes — SMASH is live on the US App Store and as a Chrome extension. Free to start, no credit card required.',
      },
      {
        q: 'How does SMASH compare to QuickBooks for US contractors?',
        a: 'QuickBooks is a full accounting platform — great for bookkeeping, payroll, and tax prep. SMASH is built for one thing: getting an invoice sent from your phone in 60 seconds. Many US contractors use both — SMASH on the job, QuickBooks for the accountant. SMASH exports clean CSV and PDF that your accountant can import.',
      },
      {
        q: 'Does SMASH work for service businesses, not just construction trades?',
        a: 'Yes. SMASH works great for any service business that invoices on the go: lawn care, pressure washing, house cleaning, mobile detailing, pest control, IT repair. If you finish a job and need to send an invoice before you leave, SMASH was built for you.',
      },
    ],
  },
  {
    slug: 'ca',
    code: 'CA',
    hreflang: 'en-CA',
    name: 'Canada',
    demonym: 'Canadian',
    flagEmoji: '🇨🇦',
    path: '/ca',
    url: 'https://smashinvoices.com/ca',
    currency: { code: 'CAD', symbol: '$' },
    taxLabel: 'GST / HST / PST (configurable by province)',
    taxRate: 'GST 5% + provincial',
    businessNumberLabel: 'Business Number (BN)',
    live: true,
    heroHook: 'Send the invoice before you leave.',
    heroSub: 'Talk on iPhone or scan Gmail — CAD invoice with GST/HST/PST for your province and your Business Number, sent in under 60 seconds.',
    reasons: [
      {
        title: 'GST, HST, PST — by province, automatically',
        body: 'Pick your province once. SMASH applies the correct combination of GST, HST or PST to every invoice — Ontario, BC, Alberta, Quebec and all other provinces supported.',
      },
      {
        title: 'CAD pricing, Business Number on every invoice',
        body: 'Invoices default to CAD. Your Business Number (BN) appears on every PDF. Clients see a professional Canadian invoice — not a retrofit.',
      },
      {
        title: 'Bilingual support on the roadmap',
        body: 'English at launch. French UI and French-language invoices for Quebec contractors are on the roadmap.',
      },
      {
        title: 'Available on iOS and Chrome',
        body: 'Download the SMASH app from the Canadian App Store, or pin the Chrome extension to invoice from a laptop. Free to start, no credit card.',
      },
    ],
    audience: 'HVAC technicians, electricians, plumbers, landscapers, snow removal, cleaning, handymen',
    seo: {
      title: 'Invoice App Canada — Quote in Under 60 Seconds | SMASH',
      description: 'Talk or scan Gmail. Send a CAD invoice with GST/HST/PST by province and your Business Number in under 60 seconds. iOS + Chrome. Free to start.',
      keywords: '',
    },
    faqs: [
      {
        q: 'Does SMASH handle GST, HST and PST in Canada?',
        a: 'Yes. Pick your province during onboarding — Ontario (HST 13%), BC (GST + PST), Alberta (GST only), Quebec (GST + QST), and all others — and SMASH applies the correct tax combination to every invoice automatically. No manual maths.',
      },
      {
        q: 'Can I use SMASH as a Canadian sole proprietor or small business?',
        a: 'Yes. SMASH is built for Canadian sole proprietors, independent contractors, and small service businesses. Your Business Number (BN) appears on every invoice and the correct provincial tax is applied automatically.',
      },
      {
        q: 'Is SMASH available in Canada?',
        a: 'Yes — SMASH is live on the Canadian App Store and as a Chrome extension. Free to start, no credit card required.',
      },
      {
        q: 'Will pricing be in CAD?',
        a: 'Invoices you send your customers default to CAD. Subscription pricing is billed in AUD on the same plan everywhere — same flat rate for every country, no per-user fees.',
      },
      {
        q: 'Will there be French language support for Quebec?',
        a: 'English at launch. French UI and French-language invoices for Quebec contractors are on the roadmap. If French-language invoicing is important to you, vote for it on the roadmap page.',
      },
    ],
  },
];

export const countryBySlug = Object.fromEntries(countries.map(c => [c.slug, c]));

/**
 * Hreflang alternates array for use with the SEO component.
 * Includes x-default and every country landing page.
 */
export const hreflangAlternates = [
  { hreflang: 'x-default', href: 'https://smashinvoices.com/' },
  ...countries.map(c => ({ hreflang: c.hreflang, href: c.url })),
];
