/**
 * Main Pages Spec v1 — single source of truth for Level 1 SEO copy.
 * Used by React pages and static HTML generators.
 */
export const SITE = 'https://smashinvoices.com';
export const DATE_MODIFIED = '2026-07-01';

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
      'Voice invoicing on iPhone and quotes from Gmail in Chrome or Edge. Priced, tax-ready invoices in under 60 seconds — built from your rates, not guessed. Free to start.',
    h1: 'Never type an invoice again.',
    brandLine: 'Invoicing for people who hate typing.',
    answerBlock:
      'SMASH Invoices helps self-employed service workers send a priced quote or invoice in under 60 seconds — by voice on iPhone or from Gmail in Chrome or Edge. It builds from your own pricing, applies GST/VAT/sales tax, and syncs with Xero and QuickBooks. Free to start. Live in Australia, New Zealand, the UK, the US and Canada.',
    cta: 'both',
    faqs: [
      {
        question: 'What is SMASH Invoices?',
        answer:
          'SMASH lets you send a priced quote or invoice in under 60 seconds — talk on iPhone or scan the Gmail thread at your desk. Live in Australia, New Zealand, the UK, the US and Canada. Free to start.',
      },
      {
        question: 'Is SMASH free to use?',
        answer:
          'Yes. SMASH has a free plan with 5 quotes or invoices per month — no credit card needed. Paid plans unlock unlimited volume, Xero and QuickBooks, and CSV export.',
      },
      {
        question: 'How fast can I send a quote?',
        answer:
          'Under 60 seconds. Describe the job or open the customer email, verify line items against your catalog, send. Your client gets a professional PDF with approval and payment options.',
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
      'Talk for 20 seconds, get a priced, tax-ready invoice on your iPhone. Voice to invoice for anyone who\'d rather not type at the kitchen table tonight. Free to start.',
    h1: 'Send the invoice before you leave the job',
    brandLine: BRAND_LINE,
    answerBlock:
      'Voice to invoice means describing the completed job out loud and getting a priced, tax-ready invoice on your iPhone in under 60 seconds. SMASH matches your speech to your catalog — unmatched items are flagged, not guessed. Send before you leave the site. Works with Xero and QuickBooks.',
    bridgeParagraph:
      'SMASH is an invoice app built for speed. Upload your pricing once, then send quotes and invoices by voice in 30 seconds — on-site with the iOS app or from Gmail with the Chrome extension.',
    cta: 'ios',
    faqs: [
      {
        question: 'How fast can I send an invoice after a job?',
        answer:
          'Under 60 seconds: talk for 20–30 seconds, verify line items from your catalog, send. Many invoices are out before you start the van.',
      },
      {
        question: 'What is voice to invoice?',
        answer:
          'Describe the job out loud; software builds a structured, priced invoice from your speech and your saved rates — not generic guesses.',
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
      { href: '/voice-invoicing', label: 'Voice to invoice on iPhone' },
      { href: '/gmail-invoice', label: 'Email to invoice in Gmail' },
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
    title: 'Quote to Invoice — Same Job, No Retyping | SMASH',
    description:
      'Customer approved your quote? Convert it to a tax-ready invoice in one tap — same line items, same prices, no retyping. Voice on iPhone or Gmail in Chrome.',
    h1: 'Quote approved? Invoice in one tap.',
    brandLine: BRAND_LINE,
    answerBlock:
      'Quote to invoice means turning an approved estimate into a bill without re-entering line items. In SMASH, the quote you already verified becomes the invoice — labour, materials, fees, and tax carry over. Send from iPhone after the job or from Gmail when the customer replies “go ahead”. Works with Xero and QuickBooks on paid plans.',
    cta: 'both',
    steps: [
      {
        title: 'Send the quote first',
        body: 'Build from voice or Gmail, verify against your catalog, send with approval link. Customer sees professional PDF with your rates — not generic guesses.',
      },
      {
        title: 'Customer approves',
        body: 'They tap approve in the PDF or reply in Gmail. SMASH keeps the approved scope linked to the job.',
      },
      {
        title: 'Convert to invoice',
        body: 'One action creates the invoice from the quote — same lines, updated invoice number and due date. Push to Xero or QuickBooks when ready.',
      },
    ],
    relatedLinks: [
      { href: '/voice-invoicing', label: 'Voice quotes on iPhone' },
      { href: '/gmail-invoice', label: 'Quotes from Gmail' },
      { href: '/get-started', label: 'Get started free' },
    ],
    faqs: [
      {
        question: 'Do I have to retype line items for the invoice?',
        answer: 'No. The invoice is generated from the approved quote — you only adjust if the scope changed on site.',
      },
      {
        question: 'Can I quote on Gmail and invoice from my phone?',
        answer: 'Yes. Quotes and invoices sync to your SMASH account across iPhone and Chrome.',
      },
      {
        question: 'Does quote-to-invoice work with Xero or QuickBooks?',
        answer: 'Yes on Starter and above — push the approved quote, then the invoice, without double entry.',
      },
    ],
  },
};

export const countryPageTitles: Record<'nz' | 'uk' | 'us' | 'ca', string> = {
  nz: 'Invoice App New Zealand — Quote in Under 60 Seconds | SMASH',
  uk: 'Invoice App the United Kingdom — Quote in Under 60 Seconds | SMASH',
  us: 'Invoice App the United States — Quote in Under 60 Seconds | SMASH',
  ca: 'Invoice App Canada — Quote in Under 60 Seconds | SMASH',
};

export function countryAnswerBlock(country: string, taxWord: string): string {
  return `SMASH helps ${country} service businesses send a priced quote or invoice in under 60 seconds — voice on iPhone or from Gmail in Chrome. Built from your pricing with ${taxWord} handled automatically. Works with Xero and QuickBooks. Free to start.`;
}
