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
    live: true,
    heroHook: 'Voice-to-invoice. Built for Kiwi sole traders.',
    heroSub: 'Describe the job, SMASH writes a 15% GST invoice in NZD with your NZBN on it, and sends it to your customer — all in under 60 seconds. Live on iOS and Chrome today.',
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
      title: 'Voice-to-Invoice App for New Zealand Tradies | SMASH Invoices',
      description: 'Live in NZ: voice-to-invoice with 15% GST and NZD pricing, built for Kiwi sole traders. Free to start on iOS and Chrome.',
      keywords: 'invoice app New Zealand, NZ invoicing software, GST invoice NZ, tradie app Kiwi, voice to invoice New Zealand, Xero alternative NZ',
    },
    faqs: [
      {
        q: 'Does SMASH handle New Zealand GST (15%)?',
        a: 'Yes. Set your country to New Zealand during onboarding and every invoice defaults to 15% GST, in NZD, with your NZBN on the document.',
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
    live: true,
    heroHook: 'Voice-to-invoice. Built for UK sole traders and contractors.',
    heroSub: 'Describe the job, SMASH writes a VAT-compliant invoice in GBP and sends it to your customer — all in under 60 seconds. Live on iOS and Chrome today.',
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
        title: 'Available on iOS and Chrome',
        body: 'Download the SMASH app from the UK App Store, or pin the Chrome extension to invoice from a laptop or van office. Free to start.',
      },
    ],
    audience: 'plumbers, sparks, joiners, brickies, gas engineers, landscapers, domestic cleaners',
    seo: {
      title: 'Voice-to-Invoice App for UK Sole Traders & Contractors | SMASH',
      description: 'Live in the UK: voice-to-invoice with 20% VAT, GBP pricing, built for British sole traders and limited companies. Free to start on iOS and Chrome.',
      keywords: 'invoice app UK, VAT invoice app, UK contractor invoicing, sole trader invoice software UK, voice to invoice UK, QuickBooks alternative UK',
    },
    faqs: [
      {
        q: 'Does SMASH handle UK VAT?',
        a: 'Yes. Every invoice defaults to 20% VAT. Flat-rate scheme and VAT-exempt statuses are supported. Your VAT number appears on every PDF.',
      },
      {
        q: 'Is SMASH available in the UK?',
        a: 'Yes — SMASH is live on the UK App Store and as a Chrome extension. Free to start, no credit card required.',
      },
      {
        q: 'Is pricing in GBP?',
        a: 'Invoices you send your customers default to GBP. Subscription pricing is billed in AUD on the same plan everywhere — same price for every country.',
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
    live: true,
    heroHook: 'Voice-to-invoice. Built for American contractors.',
    heroSub: 'Describe the job, SMASH writes an invoice in USD with the right state sales tax and your EIN on it, and sends it to your customer — all in under 60 seconds. Live on iOS and Chrome today.',
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
        title: 'Available on iOS and Chrome',
        body: 'Download the SMASH app from the US App Store, or pin the Chrome extension to invoice straight from your laptop. Free to start, no credit card.',
      },
    ],
    audience: 'HVAC techs, electricians, plumbers, handymen, lawn care, mobile detailing, pressure washing, house cleaning',
    seo: {
      title: 'Voice-to-Invoice App for US Contractors | SMASH Invoices',
      description: 'Live in the US: voice-to-invoice for 1099 contractors and service pros. USD pricing, state sales tax handled, EIN on every invoice. Free on iOS and Chrome.',
      keywords: 'invoice app US, contractor invoicing app, 1099 invoicing, handyman invoicing app USA, voice to invoice USA, QuickBooks alternative contractors',
    },
    faqs: [
      {
        q: 'Does SMASH handle US state sales tax?',
        a: 'Yes. You set your state (and county, if applicable) and SMASH applies the correct sales tax rate to every invoice automatically.',
      },
      {
        q: 'Is SMASH available in the United States?',
        a: 'Yes — SMASH is live on the US App Store and as a Chrome extension. Free to start, no credit card required.',
      },
      {
        q: 'Will it work for 1099 contractors and small LLCs?',
        a: 'Yes. You pick your business type during onboarding. EIN or SSN, sole proprietor or LLC — SMASH formats invoices correctly from day one.',
      },
      {
        q: 'Does it integrate with QuickBooks?',
        a: 'QuickBooks Online sync is on the integrations roadmap. In the meantime, SMASH exports clean CSV and PDF for your accountant.',
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
    live: true,
    heroHook: 'Voice-to-invoice. Built for Canadian contractors.',
    heroSub: 'Describe the job, SMASH writes a CAD invoice with the right GST/HST/PST for your province and your Business Number on it, and sends it to your customer — all in under 60 seconds. Live on iOS and Chrome today.',
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
        title: 'Bilingual support on the roadmap',
        body: 'English at launch. French UI and French-language invoices for Quebec are on the way.',
      },
      {
        title: 'Available on iOS and Chrome',
        body: 'Download the SMASH app from the Canadian App Store, or pin the Chrome extension to invoice from a laptop. Free to start, no credit card.',
      },
    ],
    audience: 'HVAC technicians, electricians, plumbers, landscapers, snow removal, cleaning, handymen',
    seo: {
      title: 'Voice-to-Invoice App for Canadian Contractors | SMASH Invoices',
      description: 'Live in Canada: voice-to-invoice with GST/HST/PST by province, CAD pricing, Business Number on every invoice. Free on iOS and Chrome.',
      keywords: 'invoice app Canada, contractor invoicing Canada, GST HST invoice app, Canadian sole trader invoicing, voice to invoice Canada, QuickBooks alternative Canada',
    },
    faqs: [
      {
        q: 'Does SMASH handle GST, HST and PST?',
        a: 'Yes. Pick your province during onboarding and SMASH applies the correct combination of GST, HST or PST to every invoice — no manual maths.',
      },
      {
        q: 'Is SMASH available in Canada?',
        a: 'Yes — SMASH is live on the Canadian App Store and as a Chrome extension. Free to start, no credit card required.',
      },
      {
        q: 'Will pricing be in CAD?',
        a: 'Invoices you send your customers default to CAD. Subscription pricing is billed in AUD on the same plan everywhere — same price for every country.',
      },
      {
        q: 'Will there be French language support?',
        a: 'English at launch. French UI and French-language invoices for Quebec are on the roadmap.',
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
