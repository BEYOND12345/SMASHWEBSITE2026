export type IntegrationStatus = 'live' | 'coming-soon' | 'roadmap';

export interface IntegrationData {
  slug: 'xero' | 'quickbooks';
  name: string;
  tagline: string;
  status: IntegrationStatus;
  /** Markets where this integration is relevant at launch. */
  markets: string[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  heroH1: string;
  heroSub: string;
  /** Dense answer block for AI search citation. */
  answer: string;
  whatSyncs: { label: string; body: string }[];
  howItWorks: { step: number; title: string; body: string }[];
  faqs: { q: string; a: string }[];
  waitlistCopy: string;
}

export const integrations: IntegrationData[] = [
  {
    slug: 'xero',
    name: 'Xero',
    tagline: 'Speak the job. SMASH sends the invoice. Xero does the books.',
    status: 'coming-soon',
    markets: ['Australia', 'New Zealand', 'United Kingdom', 'United States', 'Canada'],
    seo: {
      title: 'SMASH Invoices + Xero Integration | Voice Invoicing that Syncs to Xero',
      description: 'Sync SMASH voice invoices straight into Xero. Contacts, invoices, payments, tax codes — kept in sync so your accountant never chases you again. Coming soon; join the waitlist.',
      keywords: 'SMASH Xero integration, voice invoice Xero, Xero invoice sync, Xero tradie app, Xero sole trader app, Xero add-on invoicing',
    },
    heroH1: 'SMASH invoices that land in Xero automatically.',
    heroSub: 'Finish the job on site. Send the invoice by voice. Xero has it before your accountant does. Contacts, tax codes, payments — kept in sync both ways.',
    answer: 'The SMASH × Xero integration syncs every voice-generated invoice, contact, and payment into Xero automatically. Invoices appear as Approved in Xero with the correct tax rate (GST, VAT, HST etc.) per line. Contacts are matched by email and merged, so your Xero database stays clean. Payments collected via SMASH reconcile back against the Xero invoice. It is built for sole traders, contractors and small crews who want voice speed on site and Xero accuracy in the office.',
    whatSyncs: [
      { label: 'Invoices',  body: 'Every invoice you send from SMASH appears in Xero as Approved, with the correct contact, line items, and tax codes already applied.' },
      { label: 'Quotes',    body: 'Quotes sync as Xero draft invoices. When the client accepts in SMASH, the invoice is marked Approved automatically.' },
      { label: 'Contacts',  body: 'New contacts flow into Xero; existing contacts are matched by email and merged. No duplicates, no manual clean-up.' },
      { label: 'Payments',  body: 'Card payments collected through SMASH reconcile against the Xero invoice with the correct fee deducted.' },
      { label: 'Tax codes', body: 'GST, VAT, HST, sales tax — SMASH uses your Xero tax codes, not its own. Your accountant sees consistent rates across every invoice.' },
    ],
    howItWorks: [
      { step: 1, title: 'Connect Xero once',         body: 'One-tap OAuth connect inside SMASH settings. Pick your Xero organisation; done.' },
      { step: 2, title: 'Invoice by voice on site',  body: 'Finish a job, describe it in a 30-second voice note, review the invoice, send.' },
      { step: 3, title: 'Auto-sync to Xero',         body: 'SMASH pushes the invoice to Xero within seconds. Your accountant and bookkeeper see it in real time.' },
      { step: 4, title: 'Payments + reconciliation', body: 'The moment the client pays, SMASH records it and marks the matching Xero invoice as paid.' },
    ],
    faqs: [
      { q: 'When will the Xero integration be available?',                         a: 'The Xero integration is the next scheduled product milestone. Join the waitlist to be notified the moment it is live.' },
      { q: 'Which Xero plans will be supported?',                                   a: 'All Xero plans that include invoicing (Ignite / Grow / Comprehensive, and the legacy Starter / Standard / Premium) will be supported.' },
      { q: 'Does the integration support multi-currency?',                          a: 'Yes. Invoices flow through in the currency SMASH issued them — AUD, NZD, GBP, USD, CAD — using your Xero multi-currency configuration.' },
      { q: 'Will it work for UK VAT and Canadian HST, not just AU GST?',            a: 'Yes. SMASH reads your Xero tax codes and uses them directly, so UK VAT, Canadian HST/GST/PST, NZ GST and US state sales tax all flow through correctly.' },
      { q: 'Do I need to re-enter my contacts in SMASH?',                           a: 'No. After connecting Xero, SMASH can import your Xero contacts as a starting point, then keep both sides in sync going forward.' },
      { q: 'Is this an official Xero App Store listing?',                           a: 'Yes — a Xero App Store listing is planned alongside the public release of the integration.' },
    ],
    waitlistCopy: 'Be first on the Xero integration beta. Priority access, direct line to the founder.',
  },
  {
    slug: 'quickbooks',
    name: 'QuickBooks Online',
    tagline: 'Speak the job. QuickBooks keeps the books.',
    status: 'coming-soon',
    markets: ['United States', 'Canada', 'United Kingdom', 'Australia'],
    seo: {
      title: 'SMASH Invoices + QuickBooks Online Integration | Voice-to-Invoice that Syncs',
      description: 'Sync SMASH voice invoices straight into QuickBooks Online. Customers, invoices, payments, sales tax — all kept in sync. Coming soon; join the waitlist.',
      keywords: 'SMASH QuickBooks integration, voice invoice QuickBooks, QuickBooks Online sync, QuickBooks contractor app, QuickBooks tradie app, QuickBooks add-on invoicing',
    },
    heroH1: 'Voice invoices that sync into QuickBooks Online.',
    heroSub: 'Send professional invoices by voice from the job. QuickBooks Online has them before you leave site — customers, invoices, payments, sales tax, all in sync.',
    answer: 'The SMASH × QuickBooks Online integration syncs voice-generated invoices, customers and payments to QuickBooks automatically. Each invoice lands in QuickBooks with the correct sales tax (US state tax, GST/HST/PST in Canada, VAT in the UK, GST in Australia) per line. Customers are matched by email and merged to avoid duplicates. SMASH card payments reconcile back to the matching QBO invoice. Built for 1099 contractors, trade businesses, and service companies that want voice speed on site and QuickBooks accuracy at the desk.',
    whatSyncs: [
      { label: 'Invoices',  body: 'Every SMASH invoice appears as an open QuickBooks invoice, with the right customer, line items and sales tax.' },
      { label: 'Estimates', body: 'Quotes sync as QuickBooks estimates. When accepted in SMASH, SMASH converts it to an invoice and QBO follows.' },
      { label: 'Customers', body: 'Matched by email and merged into existing QuickBooks customers. No duplicate contacts to clean up later.' },
      { label: 'Payments',  body: 'Card payments collected through SMASH are applied against the matching QuickBooks invoice automatically.' },
      { label: 'Sales tax', body: 'US state tax, CA HST/GST/PST, UK VAT, AU GST — SMASH reads your QuickBooks tax agencies and applies them correctly.' },
    ],
    howItWorks: [
      { step: 1, title: 'Connect QuickBooks Online once', body: 'One-tap OAuth from SMASH settings. Pick your QuickBooks company; done.' },
      { step: 2, title: 'Invoice by voice on site',       body: 'Finish a job, 30-second voice note, review the invoice, send.' },
      { step: 3, title: 'Auto-sync to QuickBooks',        body: 'SMASH pushes the invoice to QuickBooks Online in seconds.' },
      { step: 4, title: 'Payments + reconciliation',      body: 'The moment the customer pays, SMASH records it and marks the matching QBO invoice paid.' },
    ],
    faqs: [
      { q: 'When will the QuickBooks integration be available?',                      a: 'The QuickBooks Online integration is scheduled to launch alongside the US and Canada rollout. Join the waitlist to be notified the moment it goes live.' },
      { q: 'Which QuickBooks version is supported?',                                   a: 'QuickBooks Online. Desktop versions of QuickBooks are not supported.' },
      { q: 'Will it handle US state sales tax correctly?',                             a: 'Yes. SMASH uses the sales tax agencies and rates configured in your QuickBooks Online company, applied per line.' },
      { q: 'Will it work in Canada with HST / GST / PST?',                             a: 'Yes. SMASH reads your QuickBooks Online Canadian tax setup and applies the right combination of HST, GST and PST by province.' },
      { q: 'Will the QuickBooks integration be in the QuickBooks App Store?',          a: 'Yes — a QuickBooks App Store listing is planned at launch.' },
      { q: 'Do I need separate SMASH and QuickBooks subscriptions?',                   a: 'Yes. SMASH handles the voice and mobile invoicing; QuickBooks handles the full accounting. The integration connects them.' },
    ],
    waitlistCopy: 'Be first on the QuickBooks integration beta. Priority access, direct line to the founder.',
  },
];

export const integrationBySlug = Object.fromEntries(
  integrations.map(i => [i.slug, i]),
);
