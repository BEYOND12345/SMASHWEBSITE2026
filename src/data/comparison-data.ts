export interface ComparisonFeature {
  label: string;
  smash: boolean | string;
  them: boolean | string;
}

export interface ComparisonData {
  slug: string;
  competitor: string;
  competitorShort: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  verdict: string;
  verdictSub: string;
  smashPrice: string;
  themPrice: string;
  features: ComparisonFeature[];
  theyDoWell: { title: string; desc: string }[];
  weWin: { title: string; desc: string }[];
  theyAreFor: string;
  weAreFor: string;
  closingLine: string;
  exportNote?: string;
}

const comparisons: ComparisonData[] = [
  {
    slug: 'smash-vs-xero',
    competitor: 'Xero',
    competitorShort: 'Xero',
    metaTitle: 'SMASH vs Xero | Voice Invoicing for Tradies vs Accounting Software',
    metaDescription: 'SMASH vs Xero: which is right for tradies? Voice-to-invoice in 60 seconds vs full accounting software. Compare features, pricing, and who each is actually built for.',
    heroHeadline: 'SMASH quotes.\nXero does\nthe books.',
    heroSub: 'SMASH and Xero are built for different parts of your business — and soon they\'ll work together. Use SMASH to invoice on the job in 60 seconds. Use Xero for the accounting. Best of both worlds.',
    verdict: 'Quote on the job. Books in Xero. Xero integration coming soon.',
    verdictSub: 'SMASH is built for the gap between finishing a job and getting paid. Xero is built for everything that happens after. Together, they cover the whole picture.',
    smashPrice: 'From $0 (free plan)',
    themPrice: 'From $39 AUD/month',
    features: [
      { label: 'Voice-to-invoice', smash: true, them: false },
      { label: 'Quote in under 60 seconds', smash: true, them: false },
      { label: 'iPhone-first design', smash: true, them: false },
      { label: 'No setup or training required', smash: true, them: false },
      { label: 'Free plan available', smash: true, them: false },
      { label: 'Learns your rates automatically', smash: true, them: false },
      { label: 'Client approval from phone', smash: true, them: false },
      { label: 'Stripe payment links', smash: true, them: true },
      { label: 'GST-compliant invoices', smash: true, them: true },
      { label: 'Xero integration', smash: 'Soon', them: true },
      { label: 'Full double-entry accounting', smash: false, them: true },
      { label: 'Payroll management', smash: false, them: true },
      { label: 'Bank reconciliation', smash: false, them: true },
      { label: 'Accountant dashboard', smash: false, them: true },
    ],
    theyDoWell: [
      { title: 'Full accounting suite', desc: 'Xero handles payroll, bank feeds, tax returns, and everything your accountant needs. If you run a complex business, Xero is excellent.' },
      { title: 'Ecosystem integrations', desc: 'Connects to hundreds of third-party apps — point-of-sale, inventory, payroll, CRM. Great for established businesses with complex workflows.' },
      { title: 'Accountant-friendly', desc: 'Your accountant almost certainly uses Xero already. It\'s the standard for collaborative accounting in Australia.' },
    ],
    weWin: [
      { title: 'Built for the job site', desc: 'SMASH was designed to be used in one hand, standing next to a ute. Xero was designed to be used at a desk. For on-the-job invoicing, there\'s no comparison.' },
      { title: 'Voice beats typing', desc: 'Talk for 30 seconds and your invoice is done. No menus, no fields, no keyboard. SMASH removes the friction that stops tradies invoicing on the spot.' },
      { title: 'No learning curve', desc: 'SMASH learns your rates from your first few jobs. No chart of accounts, no setup, no training. Download and go.' },
      { title: 'Coming together', desc: 'Xero integration is on the SMASH roadmap. Soon you\'ll be able to push invoices straight from SMASH into Xero — job site to accountant, seamlessly.' },
    ],
    theyAreFor: 'Businesses that need full accounting — payroll, bank reconciliation, tax compliance, or those whose accountant already uses Xero.',
    weAreFor: 'Tradies who need to quote and invoice fast on the job. And soon: tradies who want both — SMASH speed on site, Xero for the books.',
    closingLine: 'Use SMASH to get paid on the job. Use Xero for the books. Soon, they\'ll talk to each other.',
    exportNote: 'When the Xero integration launches, every invoice you create in SMASH will push automatically into your Xero account — line items, GST, client details, all of it. Your accountant gets the full picture, job by job, in real time. No re-entering data. No spreadsheets. No chasing receipts. Everything you\'ve already invoiced in SMASH will be there waiting.',
  },
  {
    slug: 'smash-vs-myob',
    competitor: 'MYOB',
    competitorShort: 'MYOB',
    metaTitle: 'SMASH vs MYOB | Voice Invoicing vs Accounting Software for Tradies',
    metaDescription: 'SMASH vs MYOB: a straight comparison for Australian tradies. Voice-to-invoice in 60 seconds vs full accounting software. See which is right for your business.',
    heroHeadline: 'MYOB is built\nfor your books.\nSMASH gets you paid.',
    heroSub: 'MYOB has been the backbone of Australian business accounting for 30 years. But if you\'re on a job site trying to send a quote, it\'s the wrong tool.',
    verdict: 'SMASH sends invoices from your phone in 60 seconds. MYOB takes 15 minutes at a desk.',
    verdictSub: 'For tradies, the question isn\'t which does more — it\'s which fits how you actually work.',
    smashPrice: 'From $0 (free plan)',
    themPrice: 'From $25 AUD/month',
    features: [
      { label: 'Voice-to-invoice', smash: true, them: false },
      { label: 'Quote in under 60 seconds', smash: true, them: false },
      { label: 'iPhone-first design', smash: true, them: false },
      { label: 'Works without training', smash: true, them: false },
      { label: 'Free plan available', smash: true, them: false },
      { label: 'AI learns your pricing', smash: true, them: false },
      { label: 'Client pay-now button', smash: true, them: false },
      { label: 'GST-compliant invoices', smash: true, them: true },
      { label: 'Stripe payment integration', smash: true, them: true },
      { label: 'Full accounting ledger', smash: false, them: true },
      { label: 'BAS lodgement tools', smash: false, them: true },
      { label: 'Payroll & superannuation', smash: false, them: true },
      { label: 'Bank reconciliation', smash: false, them: true },
    ],
    theyDoWell: [
      { title: 'Australian compliance', desc: 'MYOB has deep ATO integration — BAS lodgement, STP payroll, superannuation. For compliance-heavy businesses, it\'s purpose-built.' },
      { title: 'Established software', desc: '30 years in the market. Trusted by hundreds of thousands of Australian businesses and accountants.' },
      { title: 'Full accounting picture', desc: 'Profit and loss, balance sheet, cash flow — MYOB gives you the full financial story of your business.' },
    ],
    weWin: [
      { title: 'Zero setup', desc: 'SMASH reads a couple of your old invoices and learns your rates on day one. MYOB requires configuring accounts, items, tax codes, and payment terms before you send a single invoice.' },
      { title: 'Actually mobile', desc: 'MYOB has a mobile app. It\'s not the same as being designed for mobile. SMASH was built from scratch to be used in one hand at a job site.' },
      { title: 'Voice input changes everything', desc: 'Describing a job out loud is 10x faster than tapping through MYOB\'s interface on a phone screen. Most tradies don\'t invoice until they\'re back at a desk — SMASH removes that delay entirely.' },
      { title: 'Simpler pricing', desc: 'SMASH Free is $0. SMASH Pro is $22.99. No per-employee costs, no add-on modules, no surprises.' },
    ],
    theyAreFor: 'Businesses with employees, payroll, superannuation obligations, or those who need BAS lodgement tools and a full accounting system.',
    weAreFor: 'Solo tradies and small service businesses who need professional quotes and invoices sent fast — without the complexity of full accounting software.',
    closingLine: 'Use both if you need to — SMASH to quote and invoice fast, MYOB to hand off to your accountant.',
  },
  {
    slug: 'smash-vs-servicem8',
    competitor: 'ServiceM8',
    competitorShort: 'ServiceM8',
    metaTitle: 'SMASH vs ServiceM8 | Simple Voice Invoicing vs Full Job Management',
    metaDescription: 'SMASH vs ServiceM8 for tradies. Voice-to-invoice in 60 seconds vs full job management software. Compare features, pricing, and who needs what.',
    heroHeadline: 'ServiceM8 runs\nyour whole business.\nSMASH just gets you paid.',
    heroSub: 'ServiceM8 is powerful job management software — scheduling, dispatch, forms, job cards, invoicing. If you\'re a growing trade business with staff, it\'s built for you. If you\'re a solo tradie, it\'s overkill.',
    verdict: 'If you just need to quote and invoice fast — without the complexity — SMASH is the answer.',
    verdictSub: 'Not every tool needs to do everything. SMASH does one thing: voice-to-paid in under 60 seconds.',
    smashPrice: 'From $0 (free plan)',
    themPrice: 'From $29 AUD/month',
    features: [
      { label: 'Voice-to-invoice', smash: true, them: false },
      { label: 'Quote in under 60 seconds', smash: true, them: false },
      { label: 'No setup required', smash: true, them: false },
      { label: 'Free plan available', smash: true, them: false },
      { label: 'AI learns your pricing', smash: true, them: false },
      { label: 'Built for tradies', smash: true, them: true },
      { label: 'GST-compliant invoices', smash: true, them: true },
      { label: 'Client approval from phone', smash: true, them: true },
      { label: 'Stripe payments', smash: true, them: true },
      { label: 'Job scheduling & dispatch', smash: false, them: true },
      { label: 'Staff management', smash: false, them: true },
      { label: 'Job forms & checklists', smash: false, them: true },
      { label: 'GPS tracking', smash: false, them: true },
    ],
    theyDoWell: [
      { title: 'Full job management', desc: 'ServiceM8 handles scheduling, dispatch, job cards, safety forms, photos, and staff tracking. For a team of 5+ tradies, it\'s a proper operations platform.' },
      { title: 'Built for trade businesses', desc: 'Unlike Xero or MYOB, ServiceM8 actually understands trade workflows — job types, recurring work, quoting on site.' },
      { title: 'Compliance forms', desc: 'SWMS, safe work method statements, checklists. If your jobs require documented compliance, ServiceM8 handles it.' },
    ],
    weWin: [
      { title: 'Voice first', desc: 'ServiceM8 has no voice input. SMASH was built entirely around talking — because tradies work with their hands, not a keyboard.' },
      { title: 'No training needed', desc: 'ServiceM8 has onboarding sessions, setup fees, and a learning curve. SMASH takes 3 minutes to set up. Talk and it works.' },
      { title: 'Right-sized for solo', desc: 'ServiceM8\'s power becomes complexity if you\'re a one-person operation. You\'re paying for and managing features you\'ll never use.' },
      { title: 'AI pricing intelligence', desc: 'SMASH learns your labour rates and job pricing from your first few quotes. No manual item lists or price books to maintain.' },
    ],
    theyAreFor: 'Trade businesses with multiple staff, complex scheduling, compliance requirements, and the need to manage a full job pipeline from dispatch to invoice.',
    weAreFor: 'Solo tradies and small teams who need the fastest possible path from finishing a job to sending a professional, paid invoice.',
    closingLine: 'Solo tradie? SMASH. Running a team of 5+? ServiceM8 might be worth the investment.',
  },
  {
    slug: 'smash-vs-quickbooks',
    competitor: 'QuickBooks',
    competitorShort: 'QuickBooks',
    metaTitle: 'SMASH vs QuickBooks | Australian Tradies Voice Invoicing vs Accounting',
    metaDescription: 'SMASH vs QuickBooks for Australian tradies. Voice-to-invoice in 60 seconds vs full accounting software. Which is right for your trade business?',
    heroHeadline: 'SMASH invoices\non the job.\nQuickBooks\ndoes the books.',
    heroSub: 'SMASH and QuickBooks do different things — and soon they\'ll work together. Use SMASH to send invoices in 60 seconds from your phone. Use QuickBooks for accounting and reporting. No double entry.',
    verdict: 'Quote on the job. Books in QuickBooks. Integration coming soon.',
    verdictSub: 'SMASH removes the typing. QuickBooks handles the numbers. Together they cover everything a tradie needs — without the admin.',
    smashPrice: 'From $0 (free plan)',
    themPrice: 'From $15 AUD/month',
    features: [
      { label: 'Voice-to-invoice', smash: true, them: false },
      { label: 'Quote in under 60 seconds', smash: true, them: false },
      { label: 'iPhone-first design', smash: true, them: false },
      { label: 'No setup required', smash: true, them: false },
      { label: 'Free plan available', smash: true, them: false },
      { label: 'Australian GST built-in', smash: true, them: 'Partial' },
      { label: 'AI learns your rates', smash: true, them: false },
      { label: 'Client pay-now button', smash: true, them: true },
      { label: 'ATO-compliant tax invoices', smash: true, them: true },
      { label: 'QuickBooks integration', smash: 'Soon', them: true },
      { label: 'Full accounting ledger', smash: false, them: true },
      { label: 'Payroll management', smash: false, them: true },
      { label: 'Inventory tracking', smash: false, them: true },
      { label: 'Profit & loss reporting', smash: false, them: true },
    ],
    theyDoWell: [
      { title: 'Affordable accounting', desc: 'QuickBooks Simple Start is one of the more affordable accounting options for small businesses. Covers P&L, basic bookkeeping, and expenses.' },
      { title: 'Broad feature set', desc: 'Invoicing, expenses, payroll, and reporting in one place. A solid all-round accounting suite at a competitive price.' },
      { title: 'Integrations', desc: 'Connects to a wide range of apps. And soon, SMASH will be one of them — push your job invoices straight in without re-typing anything.' },
    ],
    weWin: [
      { title: 'Built for the job site', desc: 'SMASH was built for Australian tradies invoicing on the go — GST, ABN, ATO-compliant, iPhone-first. QuickBooks is accounting software with a mobile app bolted on.' },
      { title: 'Voice is everything', desc: 'QuickBooks has no voice input. SMASH removes the keyboard entirely. Describe the job, done.' },
      { title: 'Actually free to start', desc: 'SMASH has a genuinely free plan — 2 quotes per month, no card needed. QuickBooks\' free trial expires after 30 days.' },
      { title: 'Coming together', desc: 'QuickBooks integration is on the SMASH roadmap. Soon you\'ll push invoices from SMASH into QuickBooks automatically — no double entry, no spreadsheets.' },
    ],
    theyAreFor: 'Small businesses that need affordable accounting with payroll, expense tracking, and reporting. Great for those already in the QuickBooks ecosystem.',
    weAreFor: 'Australian tradies who need to quote and invoice instantly on the job. And soon: tradies who want SMASH speed on site with QuickBooks keeping the books.',
    closingLine: 'Use SMASH to invoice on the job. Use QuickBooks for the books. Integration coming soon — no double entry required.',
    exportNote: 'When the QuickBooks integration launches, every invoice created in SMASH pushes straight into QuickBooks automatically — line items, GST, client details and all. No re-entering anything. No copying and pasting. Your books stay up to date without you touching QuickBooks at all. Everything you\'ve already invoiced in SMASH will be there ready to go.',
  },
  {
    slug: 'smash-vs-fergus',
    competitor: 'Fergus',
    competitorShort: 'Fergus',
    metaTitle: 'SMASH vs Fergus | Voice Invoicing vs Trade Job Management',
    metaDescription: 'SMASH vs Fergus for tradies and field service businesses. Compare voice-to-invoice speed vs full job management. Which is right for your trade business in Australia?',
    heroHeadline: 'Fergus manages\nyour jobs.\nSMASH pays you for them.',
    heroSub: 'Fergus is a New Zealand-born job management platform built for trade businesses. It\'s genuinely good at what it does. But if you\'re a solo tradie who needs to quote and get paid fast, it\'s more than you need.',
    verdict: 'If speed-to-invoice is your problem, SMASH solves it in 60 seconds. Fergus solves a different problem entirely.',
    verdictSub: 'The right tool depends on whether you\'re managing jobs across a team — or just trying to stop losing money to forgotten invoices.',
    smashPrice: 'From $0 (free plan)',
    themPrice: 'From $45 AUD/month',
    features: [
      { label: 'Voice-to-invoice', smash: true, them: false },
      { label: 'Quote in under 60 seconds', smash: true, them: false },
      { label: 'No setup required', smash: true, them: false },
      { label: 'Free plan available', smash: true, them: false },
      { label: 'AI learns your rates', smash: true, them: false },
      { label: 'Built for tradies', smash: true, them: true },
      { label: 'GST-compliant invoices', smash: true, them: true },
      { label: 'Client approval from phone', smash: true, them: true },
      { label: 'Payment collection', smash: true, them: true },
      { label: 'Job scheduling & dispatch', smash: false, them: true },
      { label: 'Staff timesheets', smash: false, them: true },
      { label: 'Purchase orders', smash: false, them: true },
      { label: 'Job costing & margins', smash: false, them: true },
    ],
    theyDoWell: [
      { title: 'Trade-specific job management', desc: 'Fergus was built by a plumber, for trade businesses. Job cards, scheduling, timesheets, purchase orders — it understands trade workflow deeply.' },
      { title: 'Job costing', desc: 'Track labour, materials, and margins per job. If you want to know exactly where your money is going on every job, Fergus handles it.' },
      { title: 'Multi-trade team management', desc: 'Dispatch jobs to different staff, track hours, manage subcontractors. For a larger trade business, it\'s a genuine operations platform.' },
    ],
    weWin: [
      { title: 'Voice changes the speed', desc: 'No voice input in Fergus. SMASH lets you describe the job out loud and send the invoice before you\'ve packed up your tools. That\'s a fundamentally different experience.' },
      { title: 'Right-sized for solo', desc: 'Fergus charges per user and scales with team size. For a one-person operation, you\'re paying for team features you\'ll never touch.' },
      { title: 'No onboarding required', desc: 'Fergus has setup sessions, onboarding documentation, and a learning curve. SMASH takes minutes. Talk and it works from job one.' },
      { title: 'AI pricing that learns', desc: 'SMASH reads your past invoices and learns how you price your work. No manual price books or rate cards to maintain.' },
    ],
    theyAreFor: 'Trade businesses with multiple staff, job costing requirements, purchase order workflows, and the need to manage a full field service operation.',
    weAreFor: 'Solo tradies and small teams who want to speak a job description and have it turned into a professional, paid invoice in under 60 seconds.',
    closingLine: 'Running a team and need full job management? Fergus. Solo tradie losing money to uninvoiced jobs? SMASH.',
  },
];

export const comparisonBySlug: Record<string, ComparisonData> = Object.fromEntries(
  comparisons.map(c => [c.slug, c])
);

export const allComparisons = comparisons;
