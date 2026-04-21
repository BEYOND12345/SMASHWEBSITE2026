/**
 * Country / locale data for international landing pages.
 *
 * URL strategy (confirmed by master plan): single domain
 * `smashinvoices.com` with country subdirectories. AU content lives at
 * the root (treated as `x-default` until full locale subdirectories
 * are rolled out); non-AU countries get `/nz`, `/uk`, `/us`, `/ca`.
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
  /** Whether the product is live in this country yet. */
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
    heroHook: 'Voice to GST-compliant invoice. Before you leave the driveway.',
    heroSub: 'Built for Australian sole traders. GST, ABN, ATO-compliant invoices — sent from your phone, on site, in under 60 seconds.',
    reasons: [],
    audience: 'plumbers, sparkies, chippies, cleaners, gardeners, handymen, mobile mechanics',
    seo: {
      title: 'Voice to Invoice & Quote Software for Tradies | SMASH Invoices',
      description: 'Voice-to-invoice for Australian tradies. Talk, send a GST-compliant invoice in under 60 seconds. Built for sole traders, plumbers, sparkies, cleaners.',
      keywords: 'invoice app Australia, tradie invoicing, GST invoice, voice invoicing, ABN invoice software, Xero alternative',
    },
    faqs: [],
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
    live: false,
    heroHook: 'SMASH is coming to New Zealand.',
    heroSub: 'Voice-to-invoice for Kiwi sole traders. Describe the job, SMASH sends a 15% GST invoice to your customer — in under 60 seconds. Be first on the list when it lands.',
    reasons: [
      {
        title: 'Built for 15% GST out of the box',
        body: 'SMASH handles NZ GST automatically. No spreadsheets. No manual maths. Every invoice is compliant.',
      },
      {
        title: 'NZD pricing, NZBN on every invoice',
        body: 'Your business number on every document. Currency in NZD. Clients see a professional Kiwi invoice — not a retrofitted Aussie one.',
      },
      {
        title: 'Same voice-first product',
        body: 'Talk for 30 seconds, SMASH writes the scope and prices the line items. Labour + materials + call-out — all on one invoice.',
      },
      {
        title: 'Join the early waitlist',
        body: 'Early NZ users get priority onboarding and direct access to the founder. Tell us what your trade needs.',
      },
    ],
    audience: 'plumbers, sparkies, builders, landscapers, cleaners, painters',
    seo: {
      title: 'Voice-to-Invoice App for New Zealand Tradies | SMASH Invoices',
      description: 'SMASH is coming to NZ: voice-to-invoice with 15% GST and NZD pricing, built for Kiwi sole traders. Join the waitlist for early access.',
      keywords: 'invoice app New Zealand, NZ invoicing software, GST invoice NZ, tradie app Kiwi, voice to invoice New Zealand, Xero alternative NZ',
    },
    faqs: [
      {
        q: 'Will SMASH handle New Zealand GST (15%)?',
        a: 'Yes. When the NZ version launches, every invoice defaults to 15% GST, in NZD, with your NZBN on the document.',
      },
      {
        q: 'When will SMASH be available in New Zealand?',
        a: 'The NZ version is next on the roadmap. Join the waitlist and we will email you the moment the app is live in the NZ App Store.',
      },
      {
        q: 'Will pricing be in NZD?',
        a: 'Yes. Subscription prices and invoice currency default to NZD for New Zealand customers.',
      },
      {
        q: 'Does it work for my trade?',
        a: 'SMASH is built for sole traders and small crews: plumbers, sparkies, builders, landscapers, cleaners, painters, mobile mechanics. Voice recognition is trained on trade language.',
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
    live: false,
    heroHook: 'SMASH is coming to the UK.',
    heroSub: 'Voice-to-invoice for UK sole traders and contractors. VAT-compliant invoices, GBP pricing, sent from your phone — in under 60 seconds. Join the waitlist.',
    reasons: [
      {
        title: 'VAT-compliant from the first invoice',
        body: 'SMASH handles 20% VAT by default, with flat-rate and standard schemes supported. Every PDF ticks the HMRC boxes.',
      },
      {
        title: 'GBP pricing, UK-formatted invoices',
        body: 'Currency in GBP. Your company number and VAT number on every document. Clients see a professional British invoice — not a translated import.',
      },
      {
        title: 'Built for sole traders and limited companies',
        body: 'Works whether you trade as a sole trader with a UTR or a limited company. Choose your setup once, SMASH formats every invoice correctly from then on.',
      },
      {
        title: 'Early UK adopters get direct founder access',
        body: 'Tell us how you invoice now. Early UK users shape the launch — and get priority onboarding.',
      },
    ],
    audience: 'plumbers, sparks, joiners, brickies, gas engineers, landscapers, domestic cleaners',
    seo: {
      title: 'Voice-to-Invoice App for UK Sole Traders & Contractors | SMASH',
      description: 'SMASH is coming to the UK: voice-to-invoice with 20% VAT, GBP pricing, built for British sole traders and limited companies. Join the waitlist.',
      keywords: 'invoice app UK, VAT invoice app, UK contractor invoicing, sole trader invoice software UK, voice to invoice UK, QuickBooks alternative UK',
    },
    faqs: [
      {
        q: 'Does SMASH handle UK VAT?',
        a: 'Yes. Every invoice defaults to 20% VAT. Flat-rate scheme and VAT-exempt statuses are supported. Your VAT number appears on every PDF.',
      },
      {
        q: 'When will SMASH launch in the UK?',
        a: 'The UK version is in the next release. Join the waitlist and we will email you the moment SMASH is live in the UK App Store.',
      },
      {
        q: 'Is pricing in GBP?',
        a: 'Yes. Subscription pricing and invoice currency both default to GBP for UK customers.',
      },
      {
        q: 'Does it work for limited companies as well as sole traders?',
        a: 'Yes. You pick your business type during onboarding and SMASH formats invoices correctly — sole trader UTR or company number, VAT registered or not.',
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
    live: false,
    heroHook: 'SMASH is coming to the US.',
    heroSub: 'Voice-to-invoice for American contractors and service pros. USD pricing, state sales tax handled, sent from your phone — in under 60 seconds. Get on the list.',
    reasons: [
      {
        title: 'State sales tax, handled per invoice',
        body: 'Set your state and county once. SMASH applies the right sales tax rate to every line item — no calculator, no lookup.',
      },
      {
        title: 'USD pricing, EIN on every invoice',
        body: 'Invoices in USD. Your EIN on every PDF. Payment by card or ACH. Built for 1099 contractors and small LLCs.',
      },
      {
        title: 'Works for the trades Americans run',
        body: 'HVAC, plumbing, electrical, handyman, lawn care, mobile detailing, pressure washing — voice recognition trained on the language of US service work.',
      },
      {
        title: 'Priority for early US users',
        body: 'Tell us how you quote and invoice now. Early US users get free onboarding and a direct line to the founder during launch.',
      },
    ],
    audience: 'HVAC techs, electricians, plumbers, handymen, lawn care, mobile detailing, pressure washing, house cleaning',
    seo: {
      title: 'Voice-to-Invoice App for US Contractors | SMASH Invoices',
      description: 'SMASH is coming to the US: voice-to-invoice for 1099 contractors and service pros. USD pricing, state sales tax handled, EIN on every invoice. Join the waitlist.',
      keywords: 'invoice app US, contractor invoicing app, 1099 invoicing, handyman invoicing app USA, voice to invoice USA, QuickBooks alternative contractors',
    },
    faqs: [
      {
        q: 'Does SMASH handle US state sales tax?',
        a: 'Yes. You set your state (and county, if applicable) and SMASH applies the correct sales tax rate to every invoice automatically.',
      },
      {
        q: 'When will SMASH launch in the United States?',
        a: 'The US version is in the next release. Join the waitlist — we will email you the moment SMASH goes live in the US App Store.',
      },
      {
        q: 'Will it work for 1099 contractors and small LLCs?',
        a: 'Yes. You pick your business type during onboarding. EIN or SSN, sole proprietor or LLC — SMASH formats invoices correctly from day one.',
      },
      {
        q: 'Does it integrate with QuickBooks?',
        a: 'QuickBooks Online sync is on the roadmap and will ship alongside the US launch.',
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
    businessNumberLabel: 'Business Number',
    live: false,
    heroHook: 'SMASH is coming to Canada.',
    heroSub: 'Voice-to-invoice for Canadian contractors. CAD pricing, GST + HST + PST handled by province, sent from your phone — in under 60 seconds. Join the waitlist.',
    reasons: [
      {
        title: 'GST, HST, PST — by province, automatically',
        body: 'Pick your province once. SMASH applies the correct combination of GST, HST or PST to every invoice — Ontario, BC, Alberta, Quebec, all supported.',
      },
      {
        title: 'CAD pricing, Business Number on every invoice',
        body: 'Invoices default to CAD. Your Business Number appears on every PDF. Clients see a Canadian invoice — not a retrofit.',
      },
      {
        title: 'Bilingual on the roadmap',
        body: 'English at launch. French UI and French-language invoices for Quebec coming shortly after.',
      },
      {
        title: 'Priority for early Canadian users',
        body: 'Early Canadian users get free onboarding and direct input into which provincial tax edge cases SMASH handles first.',
      },
    ],
    audience: 'HVAC technicians, electricians, plumbers, landscapers, snow removal, cleaning, handymen',
    seo: {
      title: 'Voice-to-Invoice App for Canadian Contractors | SMASH Invoices',
      description: 'SMASH is coming to Canada: voice-to-invoice with GST/HST/PST by province, CAD pricing, Business Number on every invoice. Join the waitlist.',
      keywords: 'invoice app Canada, contractor invoicing Canada, GST HST invoice app, Canadian sole trader invoicing, voice to invoice Canada, QuickBooks alternative Canada',
    },
    faqs: [
      {
        q: 'Does SMASH handle GST, HST and PST?',
        a: 'Yes. Pick your province during onboarding and SMASH applies the correct combination of GST, HST or PST to every invoice — no manual maths.',
      },
      {
        q: 'When will SMASH launch in Canada?',
        a: 'The Canadian version is in the next release. Join the waitlist — we will email you the moment SMASH goes live in the Canadian App Store.',
      },
      {
        q: 'Will pricing be in CAD?',
        a: 'Yes. Subscription pricing and invoice currency default to CAD for Canadian customers.',
      },
      {
        q: 'Will there be French language support?',
        a: 'English at launch. French UI and French-language invoices for Quebec are on the roadmap for the release right after.',
      },
    ],
  },
];

export const countryBySlug = Object.fromEntries(countries.map(c => [c.slug, c]));

/**
 * Hreflang alternates array for use with the SEO component.
 * Includes x-default and every live/coming-soon country landing page.
 */
export const hreflangAlternates = [
  { hreflang: 'x-default', href: 'https://smashinvoices.com/' },
  ...countries.map(c => ({ hreflang: c.hreflang, href: c.url })),
];
