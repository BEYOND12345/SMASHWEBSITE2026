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
  // New CRO fields
  lossAversion: string;
  outcomeStat: { stat: string; label: string }[];
  quickFilter: { chooseThem: string[]; chooseUs: string[] };
  testimonials: { quote: string; name: string; trade: string; switchedFrom?: string }[];
  faq: { q: string; a: string }[];
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
    lossAversion: 'Every invoice you delay until you\'re back at a desk is money that takes longer to collect — and a job detail you\'re more likely to forget. Tradies who invoice on the spot get paid an average of 4 days faster.',
    outcomeStat: [
      { stat: '60 sec', label: 'to send an invoice' },
      { stat: '4 days', label: 'faster payment on average' },
      { stat: '$0', label: 'to get started' },
    ],
    quickFilter: {
      chooseThem: [
        'You need payroll, superannuation, or BAS lodgement',
        'Your accountant already uses Xero and wants access',
        'You need bank reconciliation and a full P&L',
        'You run a complex business with multiple employees',
      ],
      chooseUs: [
        'You want to invoice from your phone in under 60 seconds',
        'You need something that works on a job site, not a desk',
        'You want to get paid the same day, not chase invoices later',
        'You\'re starting out and want $0/month to begin',
      ],
    },
    testimonials: [
      {
        quote: 'I used to wait until Sunday night to do my invoices in Xero. Now I send them from the job before I even pack up. I get paid on Monday instead of Friday.',
        name: 'Chris M.',
        trade: 'Plumber, Brisbane',
        switchedFrom: 'Xero (still uses for accounting)',
      },
      {
        quote: 'SMASH for the invoicing, Xero for the accountant. Best setup I\'ve had. My bookkeeper loves it because everything is clean when it gets to her.',
        name: 'Tara B.',
        trade: 'Electrician, Sydney',
      },
      {
        quote: 'Tried to use Xero on the job. On a phone it\'s painful. SMASH just works — I say what I did and it\'s done.',
        name: 'Aaron D.',
        trade: 'Carpenter, Melbourne',
        switchedFrom: 'Xero invoicing',
      },
    ],
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
    faq: [
      {
        q: 'Does SMASH replace Xero?',
        a: 'No — and it\'s not designed to. SMASH handles the invoicing and quoting side: voice input, sending to clients, collecting payment. Xero handles accounting, payroll, bank reconciliation, and tax. Most tradies benefit from using both.',
      },
      {
        q: 'Is switching from Xero invoicing difficult?',
        a: 'SMASH takes under 10 minutes to set up. You can start sending invoices immediately. Your existing Xero account isn\'t affected — just use SMASH for new job invoices going forward.',
      },
      {
        q: 'Will my invoices work with my Xero account?',
        a: 'SMASH generates GST-compliant, ATO-ready invoices that can be exported as PDF or CSV. Native Xero integration is on the roadmap — when it launches, invoices will push across automatically.',
      },
      {
        q: 'What does SMASH cost vs Xero?',
        a: 'SMASH starts at $0 with 2 free quotes per month. SMASH Pro is $22.99/month. Xero starts from $39/month. Many tradies run both at a combined cost under what Xero alone would cost if they\'re on a higher tier.',
      },
      {
        q: 'How long does it take to get set up?',
        a: 'Most users send their first invoice within 10 minutes of downloading. There\'s no configuration, no item lists to build, no accounts to set up. Talk, review, send.',
      },
    ],
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
    lossAversion: 'Every job you don\'t invoice on the day is a job detail you\'ll try to remember later — and a payment that waits an extra week. Tradies leaving invoices until "tonight" often don\'t get to them until the weekend.',
    outcomeStat: [
      { stat: '10 min', label: 'setup time, no training' },
      { stat: '30 sec', label: 'average voice invoice' },
      { stat: '$0', label: 'free plan, no card needed' },
    ],
    quickFilter: {
      chooseThem: [
        'You have employees and need payroll & superannuation',
        'You need BAS lodgement and ATO integration',
        'Your accountant uses MYOB and needs access to your books',
        'You need full P&L and cash flow reporting',
      ],
      chooseUs: [
        'You want to invoice on the job before you leave the driveway',
        'You\'re solo or a very small team',
        'You want zero setup and no training',
        'You\'re tired of doing invoices at a desk on the weekend',
      ],
    },
    testimonials: [
      {
        quote: 'MYOB on mobile is not a mobile app. SMASH is. I invoice while I\'m still at the customer\'s house — payment comes through before I\'m home.',
        name: 'Jake R.',
        trade: 'Electrician, Perth',
        switchedFrom: 'MYOB mobile app',
      },
      {
        quote: 'My accountant still uses MYOB for the end-of-year stuff. I just use SMASH to invoice. Took me 5 minutes to set up and I\'ve never looked back.',
        name: 'Mia S.',
        trade: 'Tiler, Gold Coast',
      },
      {
        quote: 'I was spending Sunday afternoons doing invoices. Now I\'m done by the time I get back to the ute. SMASH has given me my weekends back.',
        name: 'Dave P.',
        trade: 'Plumber, Adelaide',
        switchedFrom: 'MYOB invoicing',
      },
    ],
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
    faq: [
      {
        q: 'Is SMASH a replacement for MYOB?',
        a: 'No. SMASH replaces MYOB\'s invoicing workflow with something 10x faster — but it doesn\'t do payroll, BAS lodgement, or accounting. If you need those, keep MYOB for your accountant and use SMASH to invoice on the job.',
      },
      {
        q: 'How hard is it to switch from MYOB invoicing to SMASH?',
        a: 'Not hard at all. Download SMASH, send one test invoice in under 10 minutes, and you\'re running. You don\'t need to migrate anything from MYOB — just start using SMASH for new invoices.',
      },
      {
        q: 'Can I still give my invoices to my accountant who uses MYOB?',
        a: 'Yes. SMASH exports GST-compliant invoices as PDF and CSV. Your accountant can import or enter them into MYOB as needed.',
      },
      {
        q: 'Is SMASH really free?',
        a: 'Yes. SMASH Free gives you 2 quotes per month at $0, no credit card required. SMASH Pro is $22.99/month with unlimited quotes. You can try it today without entering payment details.',
      },
      {
        q: 'What if I don\'t like it?',
        a: 'You haven\'t paid anything, so there\'s nothing to lose. Your free invoices stay yours. If you upgrade and decide it\'s not for you, cancel anytime — no lock-in.',
      },
    ],
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
    lossAversion: 'Solo tradies on ServiceM8 often spend more time managing the software than it saves them. Scheduling tools, dispatch boards, forms — all paid features you\'re not using while the invoicing screen still takes 10 minutes.',
    outcomeStat: [
      { stat: '3 min', label: 'to set up and invoice' },
      { stat: '0', label: 'onboarding calls needed' },
      { stat: '$0', label: 'free to start' },
    ],
    quickFilter: {
      chooseThem: [
        'You manage a team of 3+ field staff',
        'You need job dispatch, scheduling, and GPS tracking',
        'You require compliance forms and SWMS documentation',
        'You want a full job pipeline from quote to completion sign-off',
      ],
      chooseUs: [
        'You\'re solo or a team of 1-2',
        'You just want fast quotes and invoices — nothing more',
        'You don\'t want to do onboarding sessions or read documentation',
        'You want to talk your invoice instead of tapping through menus',
      ],
    },
    testimonials: [
      {
        quote: 'I tried ServiceM8 for three months. I used maybe 20% of what it offered and spent the rest of the time confused. SMASH does the one thing I actually need and does it perfectly.',
        name: 'Leon H.',
        trade: 'Plumber, Brisbane',
        switchedFrom: 'ServiceM8',
      },
      {
        quote: 'ServiceM8 kept telling me to do an onboarding session. SMASH I just downloaded, spoke my first invoice and sent it. That\'s the difference.',
        name: 'Sam T.',
        trade: 'Sparky, Newcastle',
        switchedFrom: 'ServiceM8',
      },
      {
        quote: 'For a one-man band, ServiceM8 is too much. I was paying $60 a month for a dispatch board I never used. SMASH costs less and does the job.',
        name: 'Brett K.',
        trade: 'Handyman, Geelong',
        switchedFrom: 'ServiceM8',
      },
    ],
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
    faq: [
      {
        q: 'Can I switch from ServiceM8 to SMASH without losing my data?',
        a: 'Yes. Your existing ServiceM8 data stays in ServiceM8. SMASH starts fresh for new invoices — there\'s nothing to migrate because SMASH learns your rates from your first few jobs automatically.',
      },
      {
        q: 'Does SMASH do job scheduling like ServiceM8?',
        a: 'No. SMASH focuses on quoting and invoicing — the part most tradies find slowest. If you need full job dispatch, scheduling, and staff management, ServiceM8 is the better fit for those features.',
      },
      {
        q: 'What\'s the real cost difference?',
        a: 'ServiceM8 starts at $29/month and increases with users and features. SMASH Free is $0, SMASH Pro is $22.99/month — flat, no per-user fees. For a solo tradie, that\'s a meaningful saving.',
      },
      {
        q: 'How long does SMASH take to set up?',
        a: 'Under 10 minutes. Download, let SMASH read a couple of old invoices (or start fresh), speak your first job, send. No onboarding call required.',
      },
      {
        q: 'What if I grow and need job management later?',
        a: 'SMASH and ServiceM8 aren\'t mutually exclusive. Many tradies use SMASH for quoting speed and add job management software when they grow. Start with what fits now.',
      },
    ],
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
    lossAversion: 'Every invoice you create manually in QuickBooks on a desktop is time you\'re not billing. Tradies using desktop accounting tools to invoice average 15-20 minutes per invoice. SMASH averages 60 seconds.',
    outcomeStat: [
      { stat: '60 sec', label: 'vs 15 min in QuickBooks' },
      { stat: '$0', label: 'free plan, no card needed' },
      { stat: '2', label: 'free quotes per month forever' },
    ],
    quickFilter: {
      chooseThem: [
        'You need payroll processing and reporting',
        'You need inventory tracking and purchase orders',
        'Your accountant or bookkeeper already uses QuickBooks',
        'You need full P&L, cash flow, and tax reporting',
      ],
      chooseUs: [
        'You want to send invoices from your phone in 60 seconds',
        'You\'re tired of typing up invoices after a long day',
        'You want to get paid on the day — not a week later',
        'You want a genuinely free plan to start with',
      ],
    },
    testimonials: [
      {
        quote: 'QuickBooks mobile is painful on an iPhone. SMASH just gets it. I describe the job, check it looks right, hit send. Done in a minute.',
        name: 'Kieran W.',
        trade: 'HVAC Tech, Melbourne',
        switchedFrom: 'QuickBooks mobile',
      },
      {
        quote: 'I still use QuickBooks for the BAS and my accountant. But SMASH is how I invoice. The combination is unbeatable.',
        name: 'Leanne F.',
        trade: 'Painter, Sydney',
      },
      {
        quote: 'I was doing 12-15 invoices a week in QuickBooks. That\'s hours. Now it\'s minutes. SMASH paid for itself in the first week.',
        name: 'Marcus O.',
        trade: 'Roof Plumber, Brisbane',
        switchedFrom: 'QuickBooks invoicing',
      },
    ],
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
    faq: [
      {
        q: 'Does SMASH replace QuickBooks?',
        a: 'No — SMASH replaces the invoicing part of your workflow with something much faster. QuickBooks handles accounting, reporting, payroll, and the financial side of your business. Use SMASH on the job, QuickBooks for the books.',
      },
      {
        q: 'Will my SMASH invoices work with QuickBooks?',
        a: 'SMASH invoices export as PDF and CSV today. Native QuickBooks integration is on the roadmap — when it launches, invoices will push across automatically with zero re-entry.',
      },
      {
        q: 'QuickBooks has a free trial. Is SMASH free too?',
        a: 'SMASH Free is permanently free — 2 quotes per month, no card required, no expiry. It\'s not a trial. QuickBooks\' free tier expires after 30 days.',
      },
      {
        q: 'How fast is setup compared to QuickBooks?',
        a: 'QuickBooks requires connecting a bank account, setting up your chart of accounts, and configuring tax settings before your first invoice. SMASH takes under 10 minutes — download, speak, send.',
      },
      {
        q: 'What about QuickBooks\' mobile app?',
        a: 'QuickBooks has a mobile app, but it\'s a desktop accounting system adapted for mobile. SMASH was built mobile-first, specifically for voice input while standing on a job site. The experience is fundamentally different.',
      },
    ],
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
    lossAversion: 'Every week you\'re paying for Fergus features you don\'t use is money you\'re not spending on tools, materials, or a better work-life balance. For solo tradies, the complexity of a full job management platform often slows invoicing down rather than speeding it up.',
    outcomeStat: [
      { stat: '$0', label: 'free vs $45+/mo for Fergus' },
      { stat: '60 sec', label: 'average invoice time in SMASH' },
      { stat: '0', label: 'onboarding calls needed' },
    ],
    quickFilter: {
      chooseThem: [
        'You manage multiple field staff and need dispatch',
        'You need per-job costing, timesheets, and margins',
        'You require purchase orders and subcontractor management',
        'You want a full job pipeline from first contact to completion',
      ],
      chooseUs: [
        'You\'re a solo tradie or a team of 1-2',
        'You want to invoice on the job without opening a laptop',
        'You want AI to learn your pricing so you don\'t build price books',
        'You don\'t want to do onboarding sessions or read a manual',
      ],
    },
    testimonials: [
      {
        quote: 'Fergus is great if you have a team. I\'m on my own. SMASH is what I actually needed — fast invoicing, no fuss, get paid.',
        name: 'Ryan C.',
        trade: 'Plumber, Canberra',
        switchedFrom: 'Fergus',
      },
      {
        quote: 'I was paying $65/month for Fergus. Switched to SMASH and paid $22. The invoicing is better and I\'m not using 80% of the features I was paying for.',
        name: 'Kelly M.',
        trade: 'Electrician, Gold Coast',
        switchedFrom: 'Fergus',
      },
      {
        quote: 'SMASH is the only app I\'ve found that actually works the way a tradie thinks. Voice input changes everything.',
        name: 'Tom B.',
        trade: 'Concreter, Darwin',
      },
    ],
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
    faq: [
      {
        q: 'Is SMASH a direct replacement for Fergus?',
        a: 'For solo tradies, yes — SMASH replaces the invoicing and quoting workflow with something faster and simpler. For businesses with multiple staff needing dispatch, timesheets, and job costing, Fergus does things SMASH doesn\'t. Know what you actually need.',
      },
      {
        q: 'How long does it take to switch from Fergus?',
        a: 'SMASH sets up in under 10 minutes. Your Fergus history stays in Fergus. Just start using SMASH for new quotes — it learns your pricing from the first few jobs.',
      },
      {
        q: 'What about the price difference?',
        a: 'Fergus starts at around $45/month and scales up with users. SMASH Free is $0, SMASH Pro is $22.99/month — flat rate, no per-user fees. For a solo operator, that\'s a real saving.',
      },
      {
        q: 'Does SMASH do job costing like Fergus?',
        a: 'Not currently. SMASH focuses on the fastest possible quote-to-payment workflow. Job costing, margins, and purchase orders are Fergus territory.',
      },
      {
        q: 'Will I lose my Fergus clients or job history?',
        a: 'No. Your Fergus data stays in Fergus. SMASH starts fresh and builds its pricing intelligence from your first few SMASH jobs. Export your client list from Fergus and you can add contacts to SMASH manually.',
      },
    ],
  },
];

export const comparisonBySlug: Record<string, ComparisonData> = Object.fromEntries(
  comparisons.map(c => [c.slug, c])
);

export const allComparisons = comparisons;
