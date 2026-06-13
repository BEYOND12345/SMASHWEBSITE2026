/**
 * Main Pages Spec v1 — single source of truth for Level 1 SEO copy.
 * Used by React pages and static HTML generators.
 */
export const SITE = 'https://smashinvoices.com';
export const DATE_MODIFIED = '2026-06-13';

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
  faqs?: MainPageFaq[];
  cta?: 'both' | 'ios' | 'chrome';
};

export const mainPages: Record<string, MainPageSeo> = {
  home: {
    path: '/',
    title: 'SMASH Invoices — Quote Sent Before They Call Someone Else',
    description:
      'SMASH turns a customer email or 20 seconds of talking into a priced, tax-ready quote. Verify in 30 seconds, send, get back to work. Free to start on iPhone and Chrome.',
    h1: 'Send the quote before they call someone else.',
    brandLine: BRAND_LINE,
    answerBlock:
      'SMASH Invoices helps service businesses send a priced quote or invoice in under 60 seconds — by voice on iPhone or from a Gmail sidebar in Chrome. It builds from your own pricing, applies GST/VAT/sales tax, and works with Xero and QuickBooks. Free to start. Live in Australia, New Zealand, the UK, the US and Canada.',
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
    title: 'Gmail Invoice Extension — Quotes From Your Inbox | SMASH',
    description:
      'Install the SMASH Chrome extension: scan a job email, match it to your pricing catalog, send the quote without leaving Gmail. Works with Xero and QuickBooks. Free to install.',
    h1: 'The Gmail sidebar that turns requests into quotes',
    brandLine: BRAND_LINE,
    answerBlock:
      'The SMASH Chrome extension adds a Gmail sidebar for email scan, PDF upload, voice input, catalog onboarding, in-thread reply, and optional push to Xero or QuickBooks. Built for people comparing Gmail invoice extensions — free to install, 5 documents per month on the free plan.',
    cta: 'chrome',
    faqs: [
      {
        question: 'What does the SMASH Gmail extension do?',
        answer:
          'It reads job emails, matches your pricing catalog, builds quotes and invoices in the sidebar, and lets you send from the thread with approval and payment links.',
      },
      {
        question: 'How does catalog onboarding work?',
        answer:
          'Upload a past PDF invoice or CSV of services on first sign-in. SMASH learns your rates and builds your pricing profile.',
      },
      {
        question: 'Is it different from the Gmail invoice pillar page?',
        answer:
          'The pillar explains email-to-invoice for search. This page is product detail for people comparing extensions and features.',
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
