/**
 * Main Pages Spec v1 — single source of truth for Level 1 SEO copy.
 * Used by React pages and static HTML generators.
 */
export const SITE = 'https://smashinvoices.com';
export const DATE_MODIFIED = '2026-07-23';

export const HREFLANG_LINKS = [
  { hreflang: 'x-default', href: `${SITE}/` },
  { hreflang: 'en-AU', href: `${SITE}/` },
  { hreflang: 'en-NZ', href: `${SITE}/nz` },
  { hreflang: 'en-GB', href: `${SITE}/uk` },
  { hreflang: 'en-US', href: `${SITE}/us` },
  { hreflang: 'en-CA', href: `${SITE}/ca` },
] as const;

export const BRAND_LINE = 'You do the work. SMASH does the rest.';

export type MainPageFaq = { question: string; answer: string };

export type MainPageSeo = {
  path: string;
  title: string;
  description: string;
  h1: string;
  brandLine?: string;
  answerBlock: string;
  /** Optional bridge copy for adjacent search intent (e.g. "invoice app" on voice pillar). */
  bridgeParagraph?: string;
  faqs?: MainPageFaq[];
  cta?: 'both' | 'ios' | 'chrome';
  steps?: { title: string; body: string }[];
  relatedLinks?: { href: string; label: string }[];
};

export const mainPages: Record<string, MainPageSeo> = {
  home: {
    path: '/',
    title: 'SMASH Invoices — Never Type an Invoice Again',
    description:
      'AI estimates and voice invoicing for service businesses. Speak the job on iPhone or build from Gmail — priced estimate or invoice from your rates in under 60 seconds. Free to start.',
    h1: 'Never type an invoice again.',
    brandLine: 'Invoicing for people who hate typing.',
    answerBlock:
      'SMASH Invoices helps self-employed service workers send a priced estimate (quote) or invoice in under 60 seconds — by voice on iPhone or from Gmail in Chrome or Edge. It builds from your own pricing, applies GST/VAT/sales tax, and syncs with Xero and QuickBooks. Free to start. Live in Australia, New Zealand, the UK, the US and Canada.',
    cta: 'both',
    faqs: [
      {
        question: 'What is SMASH Invoices?',
        answer:
          'SMASH lets you send a priced estimate, quote or invoice in under 60 seconds — talk on iPhone or scan the Gmail thread at your desk. Live in Australia, New Zealand, the UK, the US and Canada. Free to start.',
      },
      {
        question: 'Is SMASH free to use?',
        answer:
          'Yes. SMASH has a free plan with 5 quotes or invoices per month — no credit card needed. Paid plans unlock unlimited volume, Xero and QuickBooks, and CSV export.',
      },
      {
        question: 'How fast can I send an estimate or quote?',
        answer:
          'Under 60 seconds. Describe the job or open the customer email, verify line items against your catalog, send. Your client gets a professional PDF with approval and payment options. Same document — estimate in the US/CA, quote in AU/UK.',
      },
      {
        question: 'Can I send a hands-free invoice after a job?',
        answer:
          'Yes on iPhone. Hold Start Recording, describe labour and materials out loud, verify priced lines from your catalog, and send — no typing on site. Many users send the invoice before they start the van. That is voice to invoice — the same engine as AI estimates.',
      },
      {
        question: 'Does SMASH work for GST and VAT invoices?',
        answer:
          'Yes. Every document is tax-ready with your business number, tax breakdown, and sequential numbers. GST, VAT, and sales tax are calculated per line item for your region.',
      },
    ],
  },
  voiceInvoicing: {
    path: '/voice-invoicing',
    title: 'Voice to Invoice — Send It Before You Leave the Job | SMASH',
    description:
      'Voice to invoice in about 30 seconds on iPhone. Talk the job, get a priced tax-ready PDF from your catalog, and send before you leave — or fire an instant quote on site. Free to start.',
    h1: 'Send the invoice before you leave the job',
    brandLine: BRAND_LINE,
    answerBlock:
      'Voice to invoice means describing the completed job out loud and getting a priced, tax-ready invoice on your iPhone in about 30 seconds. SMASH matches your speech to your catalog — unmatched items are flagged, not guessed. Same workflow for an instant quote on site. Send before you leave. Works with Xero and QuickBooks.',
    bridgeParagraph:
      'SMASH is built for speed. Upload your pricing once, then send an on-the-job invoice or instant quote by voice in about 30 seconds — on site with the iOS app, or from Gmail with the Chrome extension.',
    cta: 'ios',
    faqs: [
      {
        question: 'What is voice to invoice?',
        answer:
          'You describe the job out loud; the app builds a structured, priced invoice from your speech and your saved rates — not generic AI guesses. Review lines, then send a tax-ready PDF with a Pay Now link.',
      },
      {
        question: 'How fast can I send an invoice after a job?',
        answer:
          'About 30 seconds end to end: talk for roughly 8–20 seconds, verify catalog-priced lines, send. Many invoices are out before you start the van.',
      },
      {
        question: 'Can I send an instant quote on site by voice?',
        answer:
          'Yes. Same talk → verify → send flow for quotes and invoices. Use voice when the customer wants a number before you leave, or when you need the invoice out same visit.',
      },
      {
        question: 'Is SMASH free to start on iPhone?',
        answer:
          'Yes. Your first quotes or invoices each month are free — no credit card. When you need higher volume and Xero or QuickBooks sync, paid plans start from $15/month AUD.',
      },
      {
        question: 'Can I invoice without typing?',
        answer:
          'Yes on iPhone. Review every line before send. Desk work uses the Gmail extension in Chrome.',
      },
      {
        question: 'Can I send a hands-free invoice after a job?',
        answer:
          'Yes. Hold Start Recording on iPhone, describe labour and materials out loud, verify priced lines from your catalog, and send — no typing on site.',
      },
      {
        question: 'Does SMASH use my own prices?',
        answer:
          'Yes. Your Price Hub drives labour, fees, and materials. Unmatched items are flagged for you to price.',
      },
    ],
  },
  gmailInvoice: {
    path: '/gmail-invoice',
    title: 'Email to Invoice — Quote From the Gmail Thread | SMASH',
    description:
      'SMASH reads the customer\'s email in a Gmail sidebar, builds the quote from your pricing, and you send it from the thread. Verify in 30 seconds instead of retyping for 20 minutes.',
    h1: 'Turn the email into the invoice. Reply from the thread.',
    brandLine: BRAND_LINE,
    answerBlock:
      'Email to invoice means turning a customer request in Gmail into a priced quote or invoice without leaving the thread. SMASH reads the open email, matches your catalog, flags unknowns, and lets you verify and send from the same reply. Works with Xero and QuickBooks. Free Chrome extension.',
    cta: 'chrome',
    faqs: [
      {
        question: 'How does email to invoice work in Gmail?',
        answer:
          'Open the customer thread, use the SMASH sidebar to read the request, price from your catalog, verify, and attach a tax-ready PDF to your reply.',
      },
      {
        question: 'Do I need to leave Gmail?',
        answer: 'No. Scan, price, verify, and send from the same Gmail thread.',
      },
      {
        question: 'Does it use my prices?',
        answer: 'Yes. Your catalog and rates drive every line. Unmatched items are flagged for review.',
      },
      {
        question: 'Does it work with Xero or QuickBooks?',
        answer: 'Yes. Push approved quotes and invoices to your ledger when you are ready.',
      },
    ],
  },
  chromeExtension: {
    path: '/chrome-extension',
    title: 'SMASH for Gmail — Stop Re-Typing Quote Requests | Chrome Extension',
    description:
      'Quote requests land in your inbox with all the detail already written. SMASH reads them, matches your prices, and the quote is done — without copying a line or leaving Gmail. Works with Xero and QuickBooks. Install free.',
    h1: 'Stop re-typing what\'s already in your inbox',
    brandLine: BRAND_LINE,
    answerBlock:
      'SMASH for Gmail reads quote requests in your inbox, matches every line to your own catalogue and SKUs, and builds the quote without re-typing. Check it, reply from the thread, then push to Xero or QuickBooks in one click — automation that lives in Gmail, not another platform to log into.',
    cta: 'chrome',
    faqs: [
      {
        question: 'Who is SMASH for Gmail for?',
        answer:
          'Anyone who quotes from Gmail and is tired of copying line items into another system. If the detail is already in the email, SMASH does the data entry.',
      },
      {
        question: 'How does it know my prices?',
        answer:
          'Upload a past invoice or CSV on first sign-in. SMASH learns your rates and SKUs. Every line is matched to your catalogue — nothing invented.',
      },
      {
        question: 'Does it work with Xero and QuickBooks?',
        answer: 'Yes. Push approved quotes and invoices to your ledger when you are ready.',
      },
      {
        question: 'Is there a free plan?',
        answer: 'Yes. Five quotes or invoices per month free. Upgrade for unlimited volume and accounting export.',
      },
    ],
  },
  b2bGmailQuoting: {
    path: '/b2b-gmail-quoting',
    title: 'RFQ to Quote in Gmail — Suppliers & Wholesalers | SMASH',
    description:
      '30 RFQs a week at 20 minutes each is a full day of retyping. SMASH reads the RFQ in Gmail, matches your catalog and prices, you verify and send. Free to install.',
    h1: 'Your inbox is your order queue. Stop typing it into a quote.',
    brandLine: BRAND_LINE,
    answerBlock:
      'SMASH for Gmail turns RFQs and customer emails in your inbox into priced quotes without retyping line items. Open the sidebar, match requests to your catalog, verify in seconds, send from the thread. The first professional quote back usually wins the order. Works standalone or with Xero and QuickBooks.',
    cta: 'chrome',
    faqs: [
      {
        question: 'Who is this page for?',
        answer:
          'Suppliers, wholesalers, and desk teams who quote from Gmail — especially high-volume RFQ inboxes.',
      },
      {
        question: 'How fast is RFQ to quote?',
        answer:
          'Typical flow is under 60 seconds after your catalog is set up: read the email, verify matched lines, send.',
      },
    ],
  },
  pricing: {
    path: '/pricing',
    title: 'SMASH Invoices Pricing — Free to Start',
    description:
      'Free plan: 5 quotes or invoices per month. Starter from $15/month unlocks unlimited volume, Xero and QuickBooks, and CSV export. Same plan worldwide.',
    h1: 'Free to start. Upgrade when volume grows.',
    brandLine: BRAND_LINE,
    answerBlock:
      'SMASH pricing starts free with 5 quotes or invoices per month — no credit card. Starter, Pro, and Unlimited add unlimited volume and accounting integrations. Prices shown on this page match web billing; iOS may differ slightly in the App Store.',
    cta: 'both',
    faqs: [
      {
        question: 'Is the free plan really free?',
        answer: 'Yes. Five documents per month, no card required, no time limit on trying the product.',
      },
      {
        question: 'What unlocks on paid plans?',
        answer: 'Unlimited quotes and invoices plus Xero, QuickBooks, and CSV export on Starter and above.',
      },
    ],
  },
  getStarted: {
    path: '/get-started',
    title: 'Get Started with SMASH — Free Quote & Invoice in 60 Seconds',
    description:
      'Download SMASH on iPhone or add the Gmail Chrome extension. Set your rates once, send your first priced quote or invoice in under 60 seconds. Free — 5 documents per month.',
    h1: 'Start free. First quote in under a minute.',
    brandLine: BRAND_LINE,
    answerBlock:
      'Getting started with SMASH takes three steps: pick iPhone voice or Gmail on Chrome, load your rates from a past invoice or CSV, then describe the job or open the customer email. You verify line items against your catalog before every send — nothing is guessed. Free plan includes 5 quotes or invoices per month.',
    cta: 'both',
    steps: [
      {
        title: 'Choose your register',
        body: 'On the job site: SMASH iOS app — talk for 20 seconds, verify, send. At your desk: Chrome extension in Gmail — scan the thread, verify, reply with the PDF.',
      },
      {
        title: 'Load your Price Hub',
        body: 'Upload a past PDF invoice or CSV of services on first sign-in. Your hourly rate, fees, and common materials become the catalog SMASH matches against.',
      },
      {
        title: 'Send your first document',
        body: 'Describe the job or open the customer email, review matched line items, send. Tax-ready PDF with approval and payment links — under 60 seconds.',
      },
    ],
    relatedLinks: [
      { href: '/ai-estimates', label: 'AI estimates' },
      { href: '/estimate-generator', label: 'Free estimate generator' },
      { href: '/voice-invoicing', label: 'Voice to invoice on iPhone' },
      { href: '/pricing', label: 'Pricing — free to start' },
    ],
    faqs: [
      {
        question: 'Do I need a credit card to start?',
        answer: 'No. Create an account and send up to 5 quotes or invoices per month on the free plan.',
      },
      {
        question: 'iPhone or Chrome — which should I use first?',
        answer: 'Use iPhone if you quote from the van. Use Chrome if RFQs and job emails land in Gmail. Many businesses use both on the same account.',
      },
      {
        question: 'How long until my first quote is ready?',
        answer: 'Most users send a first document within 5 minutes of loading rates — the verify step is usually 30 seconds.',
      },
    ],
  },
  quoteToInvoice: {
    path: '/quote-to-invoice',
    title: 'Estimate to Invoice — Same Job, No Retyping | SMASH',
    description:
      'Customer approved your estimate or quote? Convert it to a tax-ready invoice in one tap — same line items, same prices, no retyping. Voice on iPhone or Gmail in Chrome.',
    h1: 'Estimate approved? Invoice in one tap.',
    brandLine: BRAND_LINE,
    answerBlock:
      'Estimate to invoice (also called quote to invoice) means turning an approved price into a bill without re-entering line items. In SMASH, the estimate you already verified becomes the invoice — labour, materials, fees, and tax carry over. Send from iPhone after the job or from Gmail when the customer replies “go ahead”. Works with Xero and QuickBooks on paid plans.',
    cta: 'both',
    steps: [
      {
        title: 'Send the estimate first',
        body: 'Build from voice or Gmail, verify against your catalog, send with approval link. Customer sees professional PDF with your rates — not generic guesses. Same document as a quote in AU/UK.',
      },
      {
        title: 'Customer approves',
        body: 'They tap approve in the PDF or reply in Gmail. SMASH keeps the approved scope linked to the job.',
      },
      {
        title: 'Convert to invoice',
        body: 'One action creates the invoice from the estimate — same lines, updated invoice number and due date. Push to Xero or QuickBooks when ready.',
      },
    ],
    relatedLinks: [
      { href: '/ai-estimates', label: 'AI estimates' },
      { href: '/estimate-generator', label: 'Free estimate generator' },
      { href: '/voice-invoicing', label: 'Voice to invoice on iPhone' },
      { href: '/get-started', label: 'Get started free' },
    ],
    faqs: [
      {
        question: 'Do I have to retype line items for the invoice?',
        answer: 'No. The invoice is generated from the approved estimate or quote — you only adjust if the scope changed on site.',
      },
      {
        question: 'Can I send an estimate from Gmail and invoice from my phone?',
        answer: 'Yes. Estimates, quotes and invoices sync to your SMASH account across iPhone and Chrome.',
      },
      {
        question: 'Does estimate-to-invoice work with Xero or QuickBooks?',
        answer: 'Yes on Starter and above — push the approved estimate, then the invoice, without double entry.',
      },
    ],
  },
  aiEstimates: {
    path: '/ai-estimates',
    title: 'AI Estimate — Priced From Your Rates in Under 60 Seconds | SMASH',
    description:
      'AI estimate for service businesses: speak the job on iPhone or scan Gmail — catalog-priced estimate (or quote) in under 60 seconds, then one-tap invoice. Live AU, NZ, UK, US, CA.',
    h1: 'Send the estimate before you lose the job.',
    brandLine: BRAND_LINE,
    answerBlock:
      'An AI estimate turns a spoken or typed job description into a professional, itemised estimate priced from your own rates — not generic internet guesses. SMASH is built for self-employed service workers: talk for about 30 seconds on iPhone (or scan Gmail), verify the lines, send before you leave, then convert to invoice when approved. Same product as a quote in Australia, New Zealand and the UK. Voice to invoice uses the same engine after the job is done.',
    bridgeParagraph:
      'US Keyword Planner shows commercial demand for AI estimate and AI estimate generator. This page owns that intent; the free estimate generator solves it in-browser; voice to invoice closes the loop when the work is finished.',
    cta: 'both',
    steps: [
      {
        title: 'Speak the job',
        body: 'On site: describe labour, materials and call-out out loud. At the desk: open the customer email in Gmail and build from the thread.',
      },
      {
        title: 'Estimate priced from your rates',
        body: 'SMASH matches speech to your catalog — unmatched items are flagged, not silently guessed. Review, edit, send.',
      },
      {
        title: 'One-tap invoice when they say yes',
        body: 'Approved estimate becomes the invoice — same lines, tax and totals. Optional Pay Now. Sync to Xero or QuickBooks on paid plans.',
      },
    ],
    relatedLinks: [
      { href: '/estimate-generator', label: 'Free estimate generator' },
      { href: '/voice-invoicing', label: 'Voice to invoice' },
      { href: '/quote-to-invoice', label: 'Estimate → invoice' },
      { href: '/quote-generator', label: 'Quote generator' },
    ],
    faqs: [
      {
        question: 'What is an AI estimate?',
        answer:
          'An AI estimate is a priced job estimate built from a natural-language description — spoken or typed — instead of typing every line item. SMASH matches what you say to your saved rates, then you verify and send in under 60 seconds.',
      },
      {
        question: 'Is an AI estimate the same as a quote?',
        answer:
          'Same job, different words. US and Canada usually say estimate; Australia, New Zealand and the UK usually say quote. SMASH builds one priced document either way.',
      },
      {
        question: 'How is this different from ChatGPT for estimates?',
        answer:
          'ChatGPT drafts wording if you paste every rate each time. It does not hold your catalog, send a branded PDF with approval, or turn the estimate into a tax-ready invoice.',
      },
    ],
  },
  estimateGenerator: {
    path: '/estimate-generator',
    title: 'Free Estimate Generator — Job Estimates in Under 60 Seconds | SMASH',
    description:
      'Free estimate generator for service businesses. Build a priced job estimate in your browser, or speak an AI estimate on iPhone from your rates. Live AU, NZ, UK, US, CA. Start free.',
    h1: 'Free estimate generator — priced jobs in 60 seconds.',
    brandLine: BRAND_LINE,
    answerBlock:
      'An estimate generator creates a professional, itemised price for a job before the work starts. Use the free browser builder on this page, or AI estimate by voice in SMASH from your catalog — then invoice in one tap when they approve. Prefer quote language? Use the free quote generator.',
    cta: 'both',
    relatedLinks: [
      { href: '/ai-estimates', label: 'AI estimates' },
      { href: '/quote-generator', label: 'Quote generator' },
      { href: '/quote-to-invoice', label: 'Estimate to invoice' },
      { href: '/voice-invoicing', label: 'Voice to invoice' },
    ],
    faqs: [
      {
        question: 'What is a free estimate generator?',
        answer:
          'A free estimate generator lets you build a professional job estimate in your browser without buying software first. SMASH does the same job by voice from your saved rates in under 60 seconds.',
      },
      {
        question: 'Is an estimate the same as a quote?',
        answer:
          'Yes for most service businesses. Estimate is usual in the US and Canada; quote is common in Australia, New Zealand and the UK.',
      },
    ],
  },
};

export const countryPageTitles: Record<'nz' | 'uk' | 'us' | 'ca', string> = {
  nz: 'Invoice App New Zealand — Quote in Under 60 Seconds | SMASH',
  uk: 'Invoice App the United Kingdom — Quote in Under 60 Seconds | SMASH',
  us: 'AI Estimate & Invoice App USA — Under 60 Seconds | SMASH',
  ca: 'Invoice App Canada — Estimate or Quote in Under 60 Seconds | SMASH',
};

export function countryAnswerBlock(country: string, taxWord: string): string {
  return `SMASH helps ${country} service businesses send a priced estimate, quote or invoice in under 60 seconds — voice on iPhone or from Gmail in Chrome. Built from your pricing with ${taxWord} handled automatically. Works with Xero and QuickBooks. Free to start.`;
}
