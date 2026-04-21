export type AppScreenType =
  | 'voice' | 'dashboard' | 'quote' | 'pricing' | 'invoice'
  | 'invoices' | 'portal' | 'estimates-static' | 'client'
  | 'customer-detail' | 'estimates' | 'customer-management';

export interface SegmentData {
  slug: string;           // URL: /for-{slug}
  name: string;           // "Cleaning Businesses"
  tradeLabel: string;     // "For Cleaners"
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
  };
  heroH1: string[];       // Array of lines (2–3 lines)
  heroSub: string;
  appScreen: AppScreenType;
  // Placeholder image paths — swap with real photos when ready
  heroImage: string;      // e.g. /images/segments/cleaners-hero.jpg
  tradePhotos: string[];  // 2 contextual trade photos
  answerQuestion: string;
  answerText: string;
  problemTitle: string;
  problems: { problem: string; reality: string }[];
  voiceExamples: { voice: string; result: string }[];
  features: { title: string; body: string }[];
  blogPosts: { slug: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  ctaH1: string[];
  ctaSub: string;
  relatedSlugs: string[]; // 2–3 other segment slugs
}

export const segments: SegmentData[] = [
  // ─────────────────────────────────────────────
  // CLEANERS
  // ─────────────────────────────────────────────
  {
    slug: 'cleaners',
    name: 'Cleaning Businesses',
    tradeLabel: 'For Cleaners',
    seo: {
      title: 'Invoicing for Cleaning Businesses | Cleaning Invoice App | SMASH',
      description: 'The fastest invoicing app for cleaning businesses. Speak the job, send the invoice. GST-compliant professional PDFs in under 60 seconds.',
      keywords: 'cleaning business invoice, invoice for cleaners, cleaning service invoice app, domestic cleaning invoice, commercial cleaning invoice',
      ogTitle: 'Invoicing for Cleaning Businesses — SMASH',
      ogDescription: 'Speak the job. Invoice sent. Before you load the mop bucket.',
    },
    heroH1: ['Invoice sent', 'before you', 'load the van.'],
    heroSub: 'Cleaning businesses invoice 5, 10, 15 jobs a week. SMASH lets you do it from the job site in under 60 seconds — no typing, no laptop, no end-of-week catch-up.',
    appScreen: 'estimates-static',
    heroImage: '/images/segments/cleaners-hero.jpg',
    tradePhotos: ['/images/segments/cleaners-1.jpg', '/images/segments/cleaners-2.jpg'],
    answerQuestion: 'Best invoicing app for cleaning businesses',
    answerText: 'SMASH is built for service businesses that invoice multiple jobs per day. For cleaners, that means setting your rates once — hourly, per room, or per service — and letting SMASH fill them in every time from a voice description. GST calculated, ABN included, PDF sent from your phone in under 60 seconds per job.',
    problemTitle: 'The cleaning business invoicing problem',
    problems: [
      { problem: '5 jobs on a Tuesday', reality: 'All invoiced at 9pm because there was no time during the day.' },
      { problem: 'Different rates for different clients', reality: 'Manually checking your notes for what each client pays.' },
      { problem: 'End-of-lease cleans with a long checklist', reality: '10 line items to type on a small screen with tired hands.' },
      { problem: 'Clients who don\'t pay on time', reality: 'Because the invoice got sent days late and the window already slipped.' },
    ],
    voiceExamples: [
      { voice: '"Standard weekly clean for 47 Ramsgate Avenue. Three bedrooms, two bathrooms, kitchen and living. Two and a half hours at my hourly rate."', result: '3 bed / 2 bath weekly clean — 2.5 hrs @ $65/hr = $162.50 + GST' },
      { voice: '"End of lease at the Fitzroy apartment. Full clean including oven, windows, and carpet steam. Took four hours, charge the end-of-lease rate."', result: 'End of lease clean — 4 hrs @ $95/hr incl. oven, windows, carpet steam = $380.00 + GST' },
      { voice: '"Commercial clean at the Southbank office. Twice weekly recurring, four hours, charge the commercial rate. First invoice for March."', result: 'Commercial office clean — 4 hrs @ $75/hr (commercial rate) = $300.00 + GST' },
    ],
    features: [
      { title: 'Per-client pricing', body: 'Set individual rates for each client. Regular, commercial, end-of-lease — SMASH applies the right one automatically.' },
      { title: 'Service catalog', body: 'Add your services once. Vacuuming, mopping, bathrooms, oven cleans — each priced. Mention them and they\'re in the invoice.' },
      { title: 'Multi-job days', body: 'Invoice after each job or batch at day\'s end. SMASH holds your jobs ready to send whenever suits you.' },
      { title: 'Online payments', body: 'Clients pay via the invoice link — no chasing, no bank transfers, no explaining BSB numbers via text.' },
      { title: 'GST handled', body: 'Registered for GST? Every invoice includes it automatically, correctly calculated, ATO-compliant.' },
      { title: 'Xero + QuickBooks sync', body: 'Invoices flow straight to your accounting software. Your bookkeeper has everything without you touching a spreadsheet.' },
    ],
    blogPosts: [
      { slug: 'cleaning-services-voice-invoicing-tradie', title: 'Voice Invoicing for Cleaners', desc: 'How cleaning businesses use voice invoicing to send invoices between jobs — without touching a keyboard.' },
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'How voice invoicing cuts your end-of-job admin from 10 minutes to under a minute.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Invoices Paid Faster', desc: 'Practical steps that get money in your account quicker — starting with sending the invoice sooner.' },
    ],
    faqs: [
      { q: 'Can I invoice different cleaning services as separate line items?', a: 'Yes. Set up your pricing catalog with individual services — vacuuming, mopping, bathroom deep clean, window cleaning — and SMASH matches them from your voice and fills in your rates automatically.' },
      { q: 'I clean multiple properties in a day. Can I batch invoice?', a: 'Yes. Create each invoice after each job, or batch them at the end of the day. SMASH keeps a running list of your jobs so you can send them all in one session.' },
      { q: 'What if I charge different rates for different clients?', a: 'SMASH stores client profiles with their specific rates. If a commercial client pays more than a residential one, that\'s set per client — SMASH applies the right rate automatically.' },
      { q: 'Do I need to be GST-registered to use SMASH?', a: 'No. SMASH works whether you\'re registered or not. If registered, invoices include GST. If you\'re under $75,000 turnover, invoices are formatted correctly without GST.' },
      { q: 'Can clients pay online through the invoice?', a: 'Yes. SMASH invoices include a payment portal link. Clients can pay online by card — no chasing, no bank details, no explaining BSB numbers.' },
      { q: 'I work alone. Is SMASH built for solo operators?', a: 'That\'s exactly who SMASH is for. No complicated team features or enterprise pricing. Just fast, reliable invoicing for one person running their own business.' },
    ],
    ctaH1: ['Invoice every job.', 'From the job.'],
    ctaSub: 'Free to download. No credit card. Start sending invoices in minutes.',
    relatedSlugs: ['handymen', 'painters', 'dog-groomers'],
  },

  // ─────────────────────────────────────────────
  // PLUMBERS
  // ─────────────────────────────────────────────
  {
    slug: 'plumbers',
    name: 'Plumbers',
    tradeLabel: 'For Plumbers',
    seo: {
      title: 'Invoicing for Plumbers | Plumbing Invoice App | SMASH',
      description: 'The fastest invoicing app for plumbers. Voice-to-invoice in under 60 seconds. Labour + materials on one invoice. GST-compliant PDFs sent from your phone.',
      keywords: 'plumbing invoice app, invoice for plumbers, plumber invoice software, plumbing business invoicing, plumber quote app',
      ogTitle: 'Invoicing for Plumbers — SMASH',
      ogDescription: 'Describe the job. Invoice sent. Before you pack up your tools.',
    },
    heroH1: ['Invoice sent', 'before you', 'pack up.'],
    heroSub: 'Labour, parts, call-out — all in one invoice, sent from your phone while you\'re still on site. No laptop. No typing. No end-of-day admin pile.',
    appScreen: 'estimates',
    heroImage: '/images/segments/plumbers-hero.jpg',
    tradePhotos: ['/images/segments/plumbers-1.jpg', '/images/segments/plumbers-2.jpg'],
    answerQuestion: 'Best invoicing app for plumbers',
    answerText: 'SMASH is purpose-built for trade businesses that need to invoice labour and materials together, fast, from a phone. For plumbers, that means setting your hourly rates and common parts once — then describing any job out loud and getting a complete, GST-compliant invoice in under 60 seconds. No typing. No laptop. Works from a van.',
    problemTitle: 'The plumbing invoicing problem',
    problems: [
      { problem: 'Labour and parts need to be separated', reality: 'Three different apps to quote, track parts, and invoice. Nothing talks to each other.' },
      { problem: 'After-hours jobs at 11pm', reality: 'No one\'s sending an invoice at midnight. Then you forget the details by morning.' },
      { problem: 'Materials from memory', reality: 'How much was that flexi hose? You guess. You undercharge. You do it again next week.' },
      { problem: 'Quote approved verbally on site', reality: 'Nothing in writing. Client disputes the price. You can\'t prove what was agreed.' },
    ],
    voiceExamples: [
      { voice: '"Hot water system replacement at 23 Collins Street. Supplied and installed 250L Rheem storage unit. Four hours labour, call-out fee, and the standard disposal fee."', result: 'HWS replacement — 4 hrs @ $120/hr + Rheem 250L + call-out $95 + disposal $60 = $695.00 + GST' },
      { voice: '"Burst pipe repair in the ceiling at the Hawthorn job. Two hours labour, replaced 3 metres of copper 15mm pipe, 4 compression fittings."', result: 'Burst pipe repair — 2 hrs @ $120/hr + 3m 15mm copper pipe + 4× fittings = $342.80 + GST' },
      { voice: '"After-hours call-out for blocked drain at the Fitzroy restaurant. One and a half hours at after-hours rate, used the drain snake."', result: 'After-hours drain unblock — 1.5 hrs @ $180/hr (after-hours) + equipment = $310.00 + GST' },
    ],
    features: [
      { title: 'Labour + materials together', body: 'Describe the job once. SMASH separates hours and parts into distinct line items — exactly what clients and accountants expect.' },
      { title: 'Trade materials database', body: '2,250+ trade materials already priced. Common plumbing supplies — pipe, fittings, valves — are in the system from your first job.' },
      { title: 'Call-out and after-hours rates', body: 'Set your call-out fee, standard rate, and after-hours rate once. Mention which applies and SMASH does the maths.' },
      { title: 'Quote to invoice', body: 'Quote before work starts. Convert to invoice when done. One tap, no re-entering data.' },
      { title: 'Client payment portal', body: 'Clients pay from a link. No bank transfers, no chasing, no account number via text.' },
      { title: 'Xero and QuickBooks sync', body: 'Invoices flow straight to your accounting software. Every part, every hour, accounted for without re-entering anything.' },
    ],
    blogPosts: [
      { slug: 'voice-to-estimate-build-bids-without-pen', title: 'Build Bids Without a Pen', desc: 'How voice-to-estimate changes on-site quoting — no notepad, no laptop, no delays.' },
      { slug: 'stop-double-handling-invoicing-on-the-job', title: 'Stop Double-Handling', desc: 'Notes on site → typed up later → sent. Every step is a chance to lose money. Cut it to one step.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Invoices Paid Faster', desc: 'Practical moves that get money in your account quicker — starting with sending the invoice on the day.' },
    ],
    faqs: [
      { q: 'Can SMASH handle plumbing materials pricing?', a: 'Yes. SMASH ships with 2,250+ trade materials already in the system. Common plumbing supplies — copper fittings, PVC pipe, valves — are priced out of the box. Add your supplier-specific rates to your own catalog too.' },
      { q: 'What if I need to invoice labour separately from parts?', a: 'Mention both in your description and they appear as distinct line items — which is what most clients and accountants want to see.' },
      { q: 'I do emergency call-outs at night. Can I invoice from my van?', a: 'That\'s exactly what SMASH is for. Open the app, describe the job, send the invoice — before you drive away. Emergency rates, after-hours charges — say it and it\'s in the invoice.' },
      { q: 'My jobs vary a lot in complexity. How does SMASH handle that?', a: 'You describe the job in plain language. If it was a simple washer replacement, say that. If it was a full bathroom rough-in, describe that. SMASH handles both.' },
      { q: 'Can I use SMASH alongside my current accounting software?', a: 'Yes. SMASH integrates with Xero and QuickBooks. Invoices sync automatically so your accountant always has clean data.' },
      { q: 'Is SMASH just for invoices, or can I quote jobs too?', a: 'Both. SMASH does quotes and invoices from the same voice input. Quote the job before you start, convert it to an invoice when done.' },
    ],
    ctaH1: ['Invoice while the', 'memory is fresh.'],
    ctaSub: 'Free to download. No credit card. Send your first invoice in under 5 minutes.',
    relatedSlugs: ['electricians', 'hvac', 'concreters'],
  },

  // ─────────────────────────────────────────────
  // ELECTRICIANS
  // ─────────────────────────────────────────────
  {
    slug: 'electricians',
    name: 'Electricians',
    tradeLabel: 'For Electricians',
    seo: {
      title: 'Invoicing for Electricians | Electrical Invoice App | SMASH',
      description: 'The fastest invoicing app for electricians. Labour and parts on one voice-generated invoice. GST-compliant PDFs sent from your phone in under 60 seconds.',
      keywords: 'electrician invoice app, invoice for electricians, electrical business invoicing, electrician quote app, electrical contractor invoice',
      ogTitle: 'Invoicing for Electricians — SMASH',
      ogDescription: 'Labour, parts, call-out. One invoice. Generated from your voice on site.',
    },
    heroH1: ['Labour.', 'Parts.', 'Invoice sent.'],
    heroSub: 'Every electrical job has labour and parts. SMASH invoices both from one voice description — itemised, GST-included, sent from your phone before you close the switchboard.',
    appScreen: 'customer-management',
    heroImage: '/images/segments/electricians-hero.jpg',
    tradePhotos: ['/images/segments/electricians-1.jpg', '/images/segments/electricians-2.jpg'],
    answerQuestion: 'Best invoicing app for electricians',
    answerText: 'SMASH is designed for trade businesses that invoice labour and materials together. For electricians, describe the job in plain language — the hours, the cable, the fittings — and get a complete, itemised, GST-compliant tax invoice in under 60 seconds. No typing. Sent from your phone, on site.',
    problemTitle: 'The electrical invoicing problem',
    problems: [
      { problem: 'Lots of small parts on every job', reality: 'Pricing 12 individual components from memory. Getting some wrong. Undercharging every time.' },
      { problem: 'Residential and commercial at different rates', reality: 'Two price lists, manual lookups, the wrong rate used half the time.' },
      { problem: 'Quote done verbally on site', reality: 'Nothing in writing. Client memory and your memory differ. Dispute at invoice time.' },
      { problem: 'Invoice sitting in drafts', reality: 'Because doing it properly on your phone with the old app took too long.' },
    ],
    voiceExamples: [
      { voice: '"Switchboard upgrade at 15 Smith Street. Replaced old board with a new 20-circuit unit. Supplied 4 RCDs, 12 circuit breakers. Three hours labour plus call-out fee."', result: 'Switchboard upgrade — 3 hrs @ $130/hr + 20-circuit board + 4× RCD + 12× circuit breakers + call-out $85 = $672.00 + GST' },
      { voice: '"Power point install for the kitchen reno at the Northcote job. Six double GPOs, 15 metres of 2.5mm TPS cable, three hours labour."', result: 'GPO installation — 3 hrs @ $130/hr + 6× double GPO + 15m 2.5mm TPS cable = $523.50 + GST' },
      { voice: '"Fault finding and repair at the cafe on Brunswick Street. Two hours at the after-hours rate, found and fixed a loose neutral in the sub-board."', result: 'After-hours fault repair — 2 hrs @ $195/hr = $390.00 + GST' },
    ],
    features: [
      { title: 'Labour + materials itemised', body: 'Hours and parts listed separately on the same invoice. Exactly what clients and accountants need to see.' },
      { title: 'Electrical materials database', body: 'Cable, conduit, switchboards, GPOs, fittings — 2,250+ trade materials already priced. Say them, they\'re on the invoice.' },
      { title: 'Residential and commercial rates', body: 'Set different rates for different job types. Mention which applies and SMASH uses the right one.' },
      { title: 'Quote to invoice', body: 'Quote on site before work starts. Convert to invoice when done. One tap, no re-entering data.' },
      { title: 'Client payment portal', body: 'Clients pay from a link. No bank transfers, no chasing, no account number via text.' },
      { title: 'Accounting sync', body: 'Every invoice, every line item flows straight to Xero or QuickBooks. Your BAS is clean before you think about it.' },
    ],
    blogPosts: [
      { slug: 'voice-to-estimate-build-bids-without-pen', title: 'Build Bids Without a Pen', desc: 'How voice-to-estimate changes on-site quoting — no notepad, no laptop, no phone keyboard.' },
      { slug: 'the-paperwork-tax-stop-losing-money', title: 'The Paperwork Tax', desc: 'Every hour you spend on admin is an hour you\'re not billing. Here\'s what that costs in a year.' },
      { slug: 'best-quote-and-invoice-software-for-tradies', title: 'Best Quote & Invoice Software', desc: 'What separates a great invoicing app from a frustrating one — and what matters in the field.' },
    ],
    faqs: [
      { q: 'Can I add electrical materials and parts to my pricing catalog?', a: 'Yes. SMASH has a built-in trade materials database including common electrical supplies — cable, conduit, switchboards, light fittings, GPOs. Add your specific supplier pricing to your own catalog too.' },
      { q: 'How do I handle jobs with lots of small parts?', a: 'Describe the job in plain language. SMASH extracts each item, prices it from your catalog, and lists them as separate line items. No forms, no dropdowns.' },
      { q: 'I do residential and commercial work at different rates. Can SMASH handle that?', a: 'Yes. Set your residential and commercial rates separately. Mention the job type and SMASH applies the right rate automatically.' },
      { q: 'Can I send a quote before the job and convert it to an invoice after?', a: 'Yes. Quote on site from voice input. Convert the approved quote to an invoice in one tap when work is done. No re-entering data.' },
      { q: 'Is the invoice format accepted by accountants and the ATO?', a: 'Yes. Every SMASH invoice is a GST-compliant tax invoice — ABN included, GST itemised, correct formatting. ATO-accepted.' },
      { q: 'What if I do sub-contracting for a builder? Can I invoice them the same way?', a: 'Yes. Sub-contractor invoices work exactly the same way — describe the work scope, hours, and materials. SMASH generates the compliant invoice.' },
    ],
    ctaH1: ['Done on site.', 'Invoiced on site.'],
    ctaSub: 'Free to download. No credit card. Send your first invoice in under 5 minutes.',
    relatedSlugs: ['plumbers', 'hvac', 'solar-installers'],
  },

  // ─────────────────────────────────────────────
  // HANDYMEN
  // ─────────────────────────────────────────────
  {
    slug: 'handymen',
    name: 'Handymen',
    tradeLabel: 'For Handymen',
    seo: {
      title: 'Invoicing for Handymen | Handyman Invoice App | SMASH',
      description: 'Invoice every job fast — no matter how varied the work. Voice-to-invoice for handymen. GST-compliant PDFs sent from your phone in under 60 seconds.',
      keywords: 'handyman invoice app, invoice for handymen, handyman business invoicing, odd jobs invoice, maintenance invoice app',
      ogTitle: 'Invoicing for Handymen — SMASH',
      ogDescription: 'Every job different. Every invoice in 60 seconds.',
    },
    heroH1: ['Every job different.', 'Every invoice', 'in 60 seconds.'],
    heroSub: 'Handymen do it all — from flat-pack assembly to fence repairs to tile grouting. SMASH handles the invoicing for every job type, from your phone, without typing.',
    appScreen: 'estimates-static',
    heroImage: '/images/segments/handymen-hero.jpg',
    tradePhotos: ['/images/segments/handymen-1.jpg', '/images/segments/handymen-2.jpg'],
    answerQuestion: 'Best invoicing app for handymen',
    answerText: 'SMASH is the fastest invoicing app for solo operators who do varied work. For handymen, that means no rigid job categories — just describe what you did, say what materials you used, and SMASH builds the invoice. Hourly rates, fixed-price jobs, call-out fees — all handled from a voice description in under 60 seconds.',
    problemTitle: 'The handyman invoicing problem',
    problems: [
      { problem: 'No two jobs the same', reality: 'Invoice software built around one trade type. Every job is a workaround.' },
      { problem: '6 jobs in a day', reality: 'You need to invoice all of them quickly. The old way means 6 invoices at 9pm.' },
      { problem: 'Small jobs feel like too much effort to invoice properly', reality: 'So you write them on a receipt book. Some clients don\'t pay. You can\'t follow up properly.' },
      { problem: 'Mixed labour and materials', reality: 'One job: one hour of work and $40 of supplies from Bunnings. Two line items, both need to be right.' },
    ],
    voiceExamples: [
      { voice: '"Flat pack assembly for the client in Mosman. King bed frame, two bedside tables, wardrobe with mirror doors. Two and a half hours labour."', result: 'Flat pack assembly — 2.5 hrs @ $75/hr = $187.50 + GST' },
      { voice: '"Fixed the fence gate at 14 Palmer Street. Replaced 3 palings, re-hung the gate, new latch. One hour labour, materials from Bunnings."', result: 'Fence gate repair — 1 hr @ $75/hr + 3× fence palings + new gate latch = $127.40 + GST' },
      { voice: '"Odd jobs at the Surry Hills apartment. Hung 4 picture frames, fixed a door that wasn\'t closing, replaced a toilet seat. One and a half hours."', result: 'General maintenance — 1.5 hrs @ $75/hr + toilet seat supply = $152.00 + GST' },
    ],
    features: [
      { title: 'No job type required', body: 'You don\'t need to select a category. Describe the work in plain English. SMASH builds the invoice from what you say.' },
      { title: 'Flexible pricing', body: 'Hourly, fixed price, or a mix — SMASH handles all three on the same invoice. Describe it and it\'s correct.' },
      { title: 'Materials catalog', body: 'Common hardware and materials already priced. Mention what you used from Bunnings or your supplier and they appear as line items.' },
      { title: 'Multi-job days', body: 'Invoice immediately after each job, or send them all at once. SMASH keeps every job queued and ready.' },
      { title: 'Receipt-level simplicity', body: 'Simple jobs get simple invoices. But they\'re still tax-compliant, professional, and payable online — unlike your receipt book.' },
      { title: 'Client records', body: 'SMASH remembers every client and what you charged them. When they call again, their rate and address are already there.' },
    ],
    blogPosts: [
      { slug: 'handymen-multi-skill-voice-invoicing-tradie', title: 'Voice Invoicing for Handymen', desc: 'How handymen with varied job types are using voice invoicing — and why it suits them better than trade-specific apps.' },
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'How voice invoicing cuts end-of-job admin from 10 minutes to under a minute.' },
      { slug: 'stop-admin-sundays-voice-invoicing', title: 'Stop Admin Sundays', desc: 'If you\'re catching up on invoices on weekends, voice invoicing exists to solve exactly that.' },
    ],
    faqs: [
      { q: 'Does SMASH work for varied job types?', a: 'Yes. Unlike trade-specific apps, SMASH has no job category requirement. Describe the work in plain language and SMASH builds the invoice — whether it\'s furniture assembly, fence repair, or painting a room.' },
      { q: 'Can I charge different rates for different types of work?', a: 'Yes. Set up your pricing catalog with different rates per service type. Mention the work type and SMASH applies the right rate.' },
      { q: 'What about very small jobs — is it worth invoicing them?', a: 'Absolutely. SMASH makes it so fast that invoicing a $75 job takes 30 seconds. Over a week, those small jobs add up and you want a record of them all.' },
      { q: 'Can I accept card payments through SMASH?', a: 'Yes. Every invoice includes a payment portal link. Clients pay by card online — no cash, no bank transfer, no chasing.' },
      { q: 'How does it handle jobs with parts from Bunnings?', a: 'Mention what you bought. SMASH matches common hardware materials to its catalog. You can also add your own prices for anything custom.' },
      { q: 'I work across multiple postcodes. Does location affect the invoice?', a: 'Location doesn\'t affect the invoice format. But you can mention a travel component or call-out fee in your description and it\'ll appear as a line item.' },
    ],
    ctaH1: ['Every job invoiced.', 'Every time.'],
    ctaSub: 'Free to download. No credit card. Start sending invoices in minutes.',
    relatedSlugs: ['painters', 'cleaners', 'tilers'],
  },

  // ─────────────────────────────────────────────
  // PAINTERS
  // ─────────────────────────────────────────────
  {
    slug: 'painters',
    name: 'Painters & Decorators',
    tradeLabel: 'For Painters',
    seo: {
      title: 'Invoicing for Painters | Painter Invoice App | SMASH',
      description: 'Invoice painting jobs fast — interior, exterior, prep, materials. Voice-to-invoice for painters and decorators. GST-compliant PDFs sent from your phone.',
      keywords: 'painter invoice app, invoice for painters, painting business invoicing, decorator invoice, painting quote app',
      ogTitle: 'Invoicing for Painters — SMASH',
      ogDescription: 'Describe the job. SMASH prices the paint. Invoice sent.',
    },
    heroH1: ['Paint done.', 'Invoice sent.', 'Next job.'],
    heroSub: 'Interior, exterior, prep work, primer, topcoat — describe the job out loud and SMASH builds a complete, itemised invoice from your phone before you clean the brushes.',
    appScreen: 'estimates',
    heroImage: '/images/segments/painters-hero.jpg',
    tradePhotos: ['/images/segments/painters-1.jpg', '/images/segments/painters-2.jpg'],
    answerQuestion: 'Best invoicing app for painters and decorators',
    answerText: 'SMASH is built for painters who need to invoice labour and materials together quickly. Describe the room, the prep work, the paint used, and the hours — SMASH separates them into line items automatically. GST calculated, ABN included, professional PDF sent from your phone in under 60 seconds.',
    problemTitle: 'The painting invoicing problem',
    problems: [
      { problem: 'Labour, prep, and materials all on one job', reality: 'Three things to price, four line items to type, on a phone, with paint-covered hands.' },
      { problem: 'Jobs that run over estimate', reality: 'No easy way to send a revised invoice mid-job. Client is surprised at the end.' },
      { problem: 'Paint quantities from memory', reality: 'How much did you use? 10 litres? 12? You guess. The margin disappears.' },
      { problem: 'Big jobs, late invoices', reality: 'A 3-day interior job gets invoiced a week later. Payment terms start from invoice date, not finish date.' },
    ],
    voiceExamples: [
      { voice: '"Two coats interior repaint at the Richmond house. Living room, hallway, and three bedrooms. Dulux Wash and Wear low sheen. Four days labour, materials included."', result: 'Interior repaint — 4 days @ $480/day + Dulux W&W 15L × 3 cans = $2,174.00 + GST' },
      { voice: '"Exterior prep and paint at the Geelong weatherboard. Strip, sand, fill, prime, two topcoats. Three days labour, Haymes Solashield supplied."', result: 'Exterior paint incl. prep — 3 days + primer + Haymes Solashield × 10L = $1,780.00 + GST' },
      { voice: '"Feature wall in the client\'s master bedroom. One coat, four hours labour, supplied the Dulux Designer range can."', result: 'Feature wall — 4 hrs @ $85/hr + Dulux Designer 4L = $402.00 + GST' },
    ],
    features: [
      { title: 'Labour + materials together', body: 'Hours, prep, primer, topcoat — all described once, all appearing as separate line items on the invoice.' },
      { title: 'Paint and materials catalog', body: 'Common paint brands and quantities already in the system. Mention Dulux, Haymes, or Taubmans and SMASH prices them.' },
      { title: 'Day rate or hourly', body: 'Set your day rate for full-day jobs and hourly for smaller ones. Mention which applies and SMASH uses the right one.' },
      { title: 'Quote to invoice', body: 'Quote the job before work starts. Convert to invoice when the last coat dries. No re-entering anything.' },
      { title: 'Online payments', body: 'Clients click a link and pay by card. You don\'t wait for a bank transfer or chase anyone.' },
      { title: 'GST automatic', body: 'Every invoice is ATO-compliant. ABN included, GST calculated at 10%, professional PDF format.' },
    ],
    blogPosts: [
      { slug: 'voice-to-estimate-build-bids-without-pen', title: 'Build Bids Without a Pen', desc: 'How voice-to-estimate changes on-site quoting — describe the scope out loud and get a quote instantly.' },
      { slug: 'the-paperwork-tax-stop-losing-money', title: 'The Paperwork Tax', desc: 'Every hour on admin is an hour you\'re not billing. Here\'s what it costs over a year.' },
      { slug: 'stop-double-handling-invoicing-on-the-job', title: 'Stop Double-Handling', desc: 'Notes on site → typed up later → sent. Cut it to one step.' },
    ],
    faqs: [
      { q: 'Can I include materials like paint cans as line items?', a: 'Yes. Mention the brand, volume, and finish in your voice description. SMASH prices them from the materials catalog and adds them as separate line items.' },
      { q: 'Can I charge different rates for prep, painting, and finishing?', a: 'Yes. Add prep rate, paint rate, and day rate to your pricing catalog. Mention which stage applies in your description.' },
      { q: 'What if a job runs longer than quoted?', a: 'Record the actual hours in your invoice description. SMASH invoices what you say — you\'re always in control of the final figures before sending.' },
      { q: 'Can I send a quote before the job starts?', a: 'Yes. Describe the scope out loud, get a quote, send it for approval. Convert to invoice when the job is done.' },
      { q: 'Do my clients need to create an account to pay?', a: 'No. They click the payment link in the invoice and pay by card directly. No account, no login.' },
      { q: 'Is SMASH suitable for both residential and commercial painting?', a: 'Yes. Set different rates for residential and commercial work. Mention the job type and SMASH applies the right rate.' },
    ],
    ctaH1: ['Job done.', 'Invoice done.', 'Move on.'],
    ctaSub: 'Free to download. No credit card. Send your first invoice in minutes.',
    relatedSlugs: ['handymen', 'tilers', 'concreters'],
  },

  // ─────────────────────────────────────────────
  // GARDENERS / LANDSCAPERS
  // ─────────────────────────────────────────────
  {
    slug: 'gardeners',
    name: 'Gardeners & Landscapers',
    tradeLabel: 'For Gardeners',
    seo: {
      title: 'Invoicing for Gardeners & Landscapers | Garden Invoice App | SMASH',
      description: 'Invoice gardening and landscaping jobs from your phone. Mowing, mulching, turf, materials — all in one voice-to-invoice. GST-compliant, under 60 seconds.',
      keywords: 'gardener invoice app, landscaper invoice, garden maintenance invoice, lawn mowing invoice app, landscaping quote software',
      ogTitle: 'Invoicing for Gardeners & Landscapers — SMASH',
      ogDescription: 'Describe the job. Pack up the mower. Invoice sent.',
    },
    heroH1: ['Mower packed.', 'Invoice sent.', 'Next property.'],
    heroSub: 'From routine mowing to full landscaping installs — describe the job out loud and SMASH sends the invoice before you start the drive to your next property.',
    appScreen: 'portal',
    heroImage: '/images/segments/gardeners-hero.jpg',
    tradePhotos: ['/images/segments/gardeners-1.jpg', '/images/segments/gardeners-2.jpg'],
    answerQuestion: 'Best invoicing app for gardeners and landscapers',
    answerText: 'SMASH lets gardeners invoice multiple properties per day without touching a keyboard. Describe the work — mowing, edging, pruning, mulch supplied — and SMASH builds the invoice with your rates already filled in. GST-compliant, professional PDF, sent from your phone in under 60 seconds.',
    problemTitle: 'The gardening invoicing problem',
    problems: [
      { problem: '8 properties in a day', reality: 'No one\'s invoicing between lawns. It all piles up for the weekend.' },
      { problem: 'Regular clients at fixed prices', reality: 'Same amount every fortnight. Still takes 5 minutes to send the invoice manually.' },
      { problem: 'Landscaping jobs with lots of materials', reality: 'Turf, mulch, soil, plants — all need to be on the invoice separately. Takes forever to type out.' },
      { problem: 'Seasonal variation', reality: 'Summer is pruning and irrigation. Winter is mulching and cleanup. The invoice categories keep changing.' },
    ],
    voiceExamples: [
      { voice: '"Regular fortnightly mow and edge at 12 Banksia Close. Front and back, about 45 minutes. Charge the standard rate."', result: 'Garden maintenance — 0.75 hrs @ $70/hr = $52.50 + GST' },
      { voice: '"Landscaping install at the new build in Canning Vale. Supplied and laid 40 square metres of buffalo turf, 2 cubic metres of garden mix, and 3 bags of mulch. Full day install."', result: 'Turf & landscaping — 1 day @ $400 + 40m² buffalo turf + 2m³ garden mix + 3× mulch bags = $1,340.00 + GST' },
      { voice: '"Hedge trim and garden cleanup at the commercial property on Miller Street. Three hours labour, disposal fee."', result: 'Garden cleanup — 3 hrs @ $70/hr + green waste disposal $80 = $290.00 + GST' },
    ],
    features: [
      { title: 'Per-property rates', body: 'Set a fixed price per property. Invoice recurring clients in seconds — same price, same format, every time.' },
      { title: 'Materials catalog', body: 'Turf, mulch, soil, plants — priced in the system. Mention what you supplied and it appears as a line item.' },
      { title: 'Multi-property days', body: 'Invoice each property immediately or batch all jobs at day\'s end. SMASH keeps them queued and ready.' },
      { title: 'Disposal fees', body: 'Add your green waste or soil disposal fee as a catalog item. Mention it once and it\'s always correctly priced.' },
      { title: 'Client records', body: 'Every property, every client, their rate and address saved. Recurring invoices take 15 seconds.' },
      { title: 'Online payments', body: 'Clients pay from the invoice link. Recurring clients can set up automatic payments.' },
    ],
    blogPosts: [
      { slug: 'stop-admin-sundays-voice-invoicing', title: 'Stop Admin Sundays', desc: 'If you\'re catching up on invoices on weekends, voice invoicing was built to fix exactly that.' },
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'How voice invoicing cuts admin from 10 minutes to under a minute — per job.' },
      { slug: 'stop-using-your-truck-as-an-office', title: 'Stop Using Your Truck as an Office', desc: 'Your vehicle isn\'t an office. But your phone is — with the right app.' },
    ],
    faqs: [
      { q: 'Can I set up recurring invoices for regular maintenance clients?', a: 'Yes. SMASH stores client profiles and rates. For recurring clients, describing the job takes 15 seconds — client, property, and price are already saved.' },
      { q: 'Can I include materials like turf and mulch as line items?', a: 'Yes. Turf, mulch, soil, plants, and garden supplies are in the materials catalog. Mention them and they\'re priced and listed.' },
      { q: 'I have 8 properties in a day. Can I invoice them all at once?', a: 'Yes. Record each job as you go. At the end of the day, send all invoices in one session from the SMASH job list.' },
      { q: 'What about disposal fees and call-out charges?', a: 'Add them to your pricing catalog once. Mention them in the job description and they\'re automatically included at the right price.' },
      { q: 'Does SMASH work for one-off landscaping quotes as well as regular maintenance?', a: 'Yes. Landscaping quotes and regular maintenance invoices both work from the same voice input. One app, all job types.' },
      { q: 'Can clients pay online from the invoice?', a: 'Yes. Every invoice includes a payment link. Clients pay by card — no bank transfers, no cash, no chasing.' },
    ],
    ctaH1: ['Invoice every property.', 'Between properties.'],
    ctaSub: 'Free to download. No credit card. Start invoicing in minutes.',
    relatedSlugs: ['cleaners', 'handymen', 'arborists'],
  },

  // ─────────────────────────────────────────────
  // MOBILE MECHANICS
  // ─────────────────────────────────────────────
  {
    slug: 'mobile-mechanics',
    name: 'Mobile Mechanics',
    tradeLabel: 'For Mobile Mechanics',
    seo: {
      title: 'Invoicing for Mobile Mechanics | Mechanic Invoice App | SMASH',
      description: 'Invoice mechanic jobs from your phone. Labour and parts on one voice-generated invoice. GST-compliant, professional PDFs sent in under 60 seconds.',
      keywords: 'mobile mechanic invoice app, mechanic invoice, auto repair invoice app, roadside mechanic invoice, mobile mechanic quote software',
      ogTitle: 'Invoicing for Mobile Mechanics — SMASH',
      ogDescription: 'Labour, parts, fluids. One invoice. Generated from your voice on the road.',
    },
    heroH1: ['Tools packed.', 'Invoice sent.', 'Drive on.'],
    heroSub: 'Labour, parts, and fluids — all on one invoice, sent from your phone before you leave the client\'s driveway. No grease on a keyboard. No invoice at 10pm.',
    appScreen: 'invoice',
    heroImage: '/images/segments/mobile-mechanics-hero.jpg',
    tradePhotos: ['/images/segments/mobile-mechanics-1.jpg', '/images/segments/mobile-mechanics-2.jpg'],
    answerQuestion: 'Best invoicing app for mobile mechanics',
    answerText: 'SMASH is built for mobile mechanics who work from a van and need to invoice labour and parts together, fast. Describe the job — oil change, brake pads, diagnostics — and SMASH prices the labour and parts separately and sends a GST-compliant invoice from your phone in under 60 seconds.',
    problemTitle: 'The mobile mechanic invoicing problem',
    problems: [
      { problem: 'Parts and labour on every job', reality: 'Typing oil filter, spark plugs, coolant top-up, and 2 hours labour into a phone while standing in a driveway.' },
      { problem: 'Parts cost from memory', reality: 'What did those rear pads cost? You bought them Tuesday. You\'re guessing on Friday.' },
      { problem: 'Roadside jobs with no signal', reality: 'Can\'t access cloud-based invoicing tools. Invoice waits until you\'re back in range.' },
      { problem: 'Multiple call-outs in a day', reality: 'Six jobs, six invoices to do at night when you\'d rather not be touching a screen.' },
    ],
    voiceExamples: [
      { voice: '"Service on the white Hilux in Penrith. Oil and filter change, new air filter, topped up coolant and wiper fluid. 45 minutes labour."', result: 'Log book service — 0.75 hrs @ $120/hr + oil filter + air filter + engine oil 5L + coolant = $238.50 + GST' },
      { voice: '"Brake pad and rotor replacement, front axle, on the customer\'s Mazda 3 in Blacktown. Two hours labour, supplied parts at cost plus 15 percent."', result: 'Front brake service — 2 hrs @ $120/hr + front pads + front rotors × 2 (+ 15% markup) = $486.00 + GST' },
      { voice: '"Roadside battery replacement for the fleet customer on the M7. Jump start, tested alternator, supplied and fitted new Century 70Ah battery. One hour call-out rate."', result: 'Battery replacement (roadside) — 1 hr @ $150/hr (roadside) + Century 70Ah battery = $330.00 + GST' },
    ],
    features: [
      { title: 'Labour + parts itemised', body: 'Describe the work and the parts. SMASH lists them separately — exactly what clients and fleet managers need.' },
      { title: 'Auto parts catalog', body: 'Common consumables and parts already priced. Oil, filters, fluids, batteries — mention them and they\'re in the invoice.' },
      { title: 'Markup on parts', body: 'Set your standard markup percentage. SMASH applies it automatically to any parts you mention. No manual calculation.' },
      { title: 'Fleet and recurring clients', body: 'Client profiles store vehicle details, rates, and markup rules. Fleet invoices take under 30 seconds.' },
      { title: 'Roadside and standard rates', body: 'Set your roadside emergency rate separately from standard. Mention which applies — SMASH uses the right one.' },
      { title: 'Online payments', body: 'Clients pay from the invoice link. Fleet clients can be set up on account terms.' },
    ],
    blogPosts: [
      { slug: 'mobile-mechanic-toolkit-voice-to-invoice', title: 'The Mobile Mechanic Toolkit', desc: 'The apps and tools mobile mechanics use to run a van-based business — starting with invoicing.' },
      { slug: 'mobile-mechanic-invoice-software-grease-free', title: 'Grease-Free Invoicing', desc: 'How to invoice from a phone without smearing grease on the screen — and without the keyboard either.' },
      { slug: 'voice-to-estimate-build-bids-without-pen', title: 'Build Bids Without a Pen', desc: 'Quote the job on the spot. Voice input, instant estimate, sent before you leave.' },
    ],
    faqs: [
      { q: 'Can I include parts and fluids as line items?', a: 'Yes. Common auto parts and consumables are in the SMASH materials database. Mention them and they\'re priced and listed on the invoice automatically.' },
      { q: 'Can I add a markup on parts?', a: 'Yes. Set your standard markup percentage in your pricing catalog. SMASH applies it to any parts you mention without you calculating anything.' },
      { q: 'Does SMASH work in low-signal areas?', a: 'Voice processing needs a short burst of data. In very low signal areas, record the description when you have signal. SMASH processes it and generates the invoice.' },
      { q: 'I have fleet clients. Can SMASH handle multiple vehicles per client?', a: 'Yes. Each client profile can have multiple vehicle records. Mention the vehicle in your description and it\'s noted on the invoice.' },
      { q: 'Can I charge different rates for roadside call-outs?', a: 'Yes. Set your roadside emergency rate separately. Mention "roadside rate" in your description and SMASH applies it.' },
      { q: 'Can clients pay online from the invoice?', a: 'Yes. Every invoice includes a payment link. Clients pay by card. Fleet clients on account terms get 30-day payment terms on the invoice.' },
    ],
    ctaH1: ['Invoice from the', 'driveway. Not', 'the study.'],
    ctaSub: 'Free to download. No credit card. First invoice in under 5 minutes.',
    relatedSlugs: ['car-detailers', 'handymen', 'plumbers'],
  },

  // ─────────────────────────────────────────────
  // HVAC / AIR CON TECHS
  // ─────────────────────────────────────────────
  {
    slug: 'hvac',
    name: 'HVAC & Air Con Technicians',
    tradeLabel: 'For HVAC Technicians',
    seo: {
      title: 'Invoicing for HVAC & Air Con Technicians | SMASH Invoices',
      description: 'Invoice HVAC and air conditioning jobs from your phone. Labour, refrigerant, and parts — one voice-generated invoice in under 60 seconds.',
      keywords: 'HVAC invoice app, air conditioning invoice, air con technician invoicing, HVAC quote software, refrigeration invoice app',
      ogTitle: 'Invoicing for HVAC Technicians — SMASH',
      ogDescription: 'Labour, refrigerant, parts. One invoice. Sent from your phone.',
    },
    heroH1: ['System running.', 'Invoice sent.', 'Next job.'],
    heroSub: 'HVAC jobs have labour, refrigerant, parts, and call-out fees — all on one invoice. SMASH builds it from a voice description in under 60 seconds, sent from your phone before you drive away.',
    appScreen: 'customer-detail',
    heroImage: '/images/segments/hvac-hero.jpg',
    tradePhotos: ['/images/segments/hvac-1.jpg', '/images/segments/hvac-2.jpg'],
    answerQuestion: 'Best invoicing app for HVAC and air con technicians',
    answerText: 'SMASH handles the complex invoicing that HVAC jobs require — labour hours, refrigerant quantities, parts, and call-out fees all on one invoice, generated from a voice description. No typing, no desktop app, no laptop. Sent as a GST-compliant PDF from your phone in under 60 seconds.',
    problemTitle: 'The HVAC invoicing problem',
    problems: [
      { problem: 'Refrigerant and parts quantities to price', reality: 'Manually pricing R410A, capacitors, contactors — all from memory, all on a phone screen.' },
      { problem: 'Emergency call-outs after hours', reality: 'Invoice when? When you get home at midnight? It waits until morning and payment terms slip.' },
      { problem: 'Service and install on the same day', reality: 'Two different job types, two different rates, one phone, no time.' },
      { problem: 'Commercial and residential at different rates', reality: 'Two price lists to juggle. Wrong rate used. Client queries it.' },
    ],
    voiceExamples: [
      { voice: '"Air con service and regassing at the Parramatta office. Split system Daikin 7.1kW. Two hours labour, topped up with 500 grams of R410A, replaced the filter pad."', result: 'AC service & regas — 2 hrs @ $130/hr + 500g R410A + filter pad = $418.00 + GST' },
      { voice: '"Emergency call-out at the Bondi restaurant. Compressor failure on the cold room. After-hours rate, three hours, replaced the capacitor and contactor."', result: 'Emergency repair — 3 hrs @ $200/hr (after-hours) + capacitor + contactor = $712.00 + GST' },
      { voice: '"New split system supply and install at the residential property in Cronulla. 6kW Mitsubishi, standard single-phase install. Four hours labour."', result: 'Split system install — 4 hrs @ $130/hr + Mitsubishi 6kW supply = $1,820.00 + GST' },
    ],
    features: [
      { title: 'Refrigerant pricing', body: 'R410A, R32, R22 — add your refrigerant rates to the catalog. Mention quantity used and SMASH prices it exactly.' },
      { title: 'After-hours and emergency rates', body: 'Separate rates for standard, after-hours, and emergency call-outs. Say which applies and SMASH uses the right one.' },
      { title: 'Labour + parts together', body: 'Hours, parts, and consumables all on one invoice from one description. No separate apps.' },
      { title: 'Commercial and residential rates', body: 'Different rates for different job types. Set once, applied automatically from your description.' },
      { title: 'Quote to invoice', body: 'Quote system supply and install before work starts. Convert to invoice when commissioned.' },
      { title: 'Online payments', body: 'Clients pay from the invoice link. Commercial clients get invoice terms. Residential get instant card payment.' },
    ],
    blogPosts: [
      { slug: 'voice-to-estimate-build-bids-without-pen', title: 'Build Bids Without a Pen', desc: 'How voice-to-estimate changes on-site quoting — no notepad, no laptop, instant quote.' },
      { slug: 'stop-double-handling-invoicing-on-the-job', title: 'Stop Double-Handling', desc: 'One step from job to invoice. No re-entering data between apps.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Invoices Paid Faster', desc: 'Send the invoice the moment the job is done. Here\'s why timing matters.' },
    ],
    faqs: [
      { q: 'Can I price refrigerants by the gram or kilogram?', a: 'Yes. Add your refrigerant rate per gram or kg to the pricing catalog. Mention the quantity used and SMASH calculates the exact cost.' },
      { q: 'Can I charge different rates for emergency call-outs?', a: 'Yes. Set your standard, after-hours, and emergency rates separately. Mention which applies in your description and SMASH uses the right one.' },
      { q: 'Can SMASH handle supply-and-install quotes for new systems?', a: 'Yes. Describe the system, installation type, and labour. SMASH generates a quote you can send for client approval, then convert to invoice.' },
      { q: 'I service both residential and commercial clients. Can I set different rates?', a: 'Yes. Set separate rates for residential and commercial in your pricing catalog.' },
      { q: 'Can I invoice for parts from the wholesaler?', a: 'Yes. Add your trade pricing for capacitors, contactors, and other parts. Or mention them and SMASH matches from the materials database.' },
      { q: 'Does SMASH integrate with my accounting software?', a: 'Yes. SMASH syncs with Xero and QuickBooks. Every invoice, including complex HVAC jobs with multiple line items, flows to your accounting software automatically.' },
    ],
    ctaH1: ['System fixed.', 'Invoice out.', 'While it\'s fresh.'],
    ctaSub: 'Free to download. No credit card. First invoice in under 5 minutes.',
    relatedSlugs: ['electricians', 'plumbers', 'solar-installers'],
  },

  // ─────────────────────────────────────────────
  // PEST CONTROL
  // ─────────────────────────────────────────────
  {
    slug: 'pest-control',
    name: 'Pest Control Operators',
    tradeLabel: 'For Pest Control',
    seo: {
      title: 'Invoicing for Pest Control Operators | Pest Invoice App | SMASH',
      description: 'Invoice pest control jobs from your phone. Treatments, chemicals, follow-ups — voice-to-invoice in under 60 seconds. GST-compliant PDFs.',
      keywords: 'pest control invoice app, pest controller invoicing, termite inspection invoice, pest treatment invoice, pest control quote software',
      ogTitle: 'Invoicing for Pest Control — SMASH',
      ogDescription: 'Treatment done. Invoice sent. Before you load the ute.',
    },
    heroH1: ['Treatment done.', 'Invoice sent.', 'Ute loaded.'],
    heroSub: 'Pest control invoicing is complex — multiple treatments, follow-up visits, chemical quantities. SMASH builds the full invoice from a voice description in under 60 seconds.',
    appScreen: 'invoices',
    heroImage: '/images/segments/pest-control-hero.jpg',
    tradePhotos: ['/images/segments/pest-control-1.jpg', '/images/segments/pest-control-2.jpg'],
    answerQuestion: 'Best invoicing app for pest control operators',
    answerText: 'SMASH handles the complexity of pest control invoicing — treatment types, chemical quantities, inspection fees, and follow-up visits — all from a voice description. Set your rates per treatment once and SMASH fills them in automatically. GST-compliant PDF sent from your phone in under 60 seconds.',
    problemTitle: 'The pest control invoicing problem',
    problems: [
      { problem: 'Multiple treatment types per property', reality: 'Termite pre-treat, cockroach spray, and rodent baiting all on one invoice. Manual entry for each.' },
      { problem: 'Chemical quantities to track', reality: 'How many litres of bifenthrin? What did you charge per litre? Guessing on every job.' },
      { problem: 'Follow-up visit invoicing', reality: 'Second visit is lower than the first. Setting the right rate manually every time.' },
      { problem: 'Inspection reports and invoices', reality: 'Two separate documents, two apps, double the time.' },
    ],
    voiceExamples: [
      { voice: '"General pest treatment at the Chatswood townhouse. Cockroaches, spiders, and ants. Interior spray, exterior perimeter, roof void dusting. Two hours standard rate."', result: 'General pest treatment — 2 hrs @ $110/hr + roof void dusting = $282.00 + GST' },
      { voice: '"Termite pre-treatment at the new build in Kellyville. 120 lineal metres soil treatment, Termidor applied. Five hours labour."', result: 'Termite pre-treatment — 5 hrs @ $120/hr + 120LM Termidor soil treatment = $960.00 + GST' },
      { voice: '"Follow-up cockroach treatment at the commercial kitchen in Surry Hills. One hour, gel baiting reapplication. Charge the commercial follow-up rate."', result: 'Commercial follow-up — 1 hr @ $150/hr (commercial) + bait reapplication = $195.00 + GST' },
    ],
    features: [
      { title: 'Treatment catalog', body: 'Set up your standard treatments — general pest, termite, rodent, bed bug — with your rates. Mention the treatment and it\'s priced.' },
      { title: 'Chemical quantities', body: 'Add your chemical pricing per litre or application. Mention what you used and SMASH calculates the cost.' },
      { title: 'Residential and commercial rates', body: 'Different rates for houses and commercial kitchens. Set once, applied from your description.' },
      { title: 'Follow-up pricing', body: 'Set a reduced rate for follow-up visits. SMASH knows to apply it when you mention it\'s a return call.' },
      { title: 'Client property records', body: 'Property history saved per client. Recurring treatments take 15 seconds to invoice.' },
      { title: 'Online payments', body: 'Clients pay from the invoice link. No chasing, no bank transfers.' },
    ],
    blogPosts: [
      { slug: 'stop-double-handling-invoicing-on-the-job', title: 'Stop Double-Handling', desc: 'One step from job done to invoice sent. No re-entering data between apps.' },
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'How voice invoicing cuts end-of-job admin to under a minute.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Invoices Paid Faster', desc: 'Send the invoice the moment the job is done — here\'s why timing matters for payment speed.' },
    ],
    faqs: [
      { q: 'Can I set up different rates for different pest treatments?', a: 'Yes. Add each treatment type to your pricing catalog — general pest, termite, rodent, bed bug — each with its own rate.' },
      { q: 'Can I include chemical quantities as line items?', a: 'Yes. Set your price per litre or per application for each chemical. Mention quantity used and SMASH calculates the cost.' },
      { q: 'How do I handle follow-up visits at a lower rate?', a: 'Set a follow-up rate in your catalog. Say "follow-up visit" in your description and SMASH applies the right price.' },
      { q: 'I do both residential and commercial work. Can I use different rates?', a: 'Yes. Set residential and commercial rates separately. Mention the job type and the right rate is applied.' },
      { q: 'Can I invoice termite inspections and treatment separately?', a: 'Yes. Inspection and treatment can be separate line items on the same invoice, or separate invoices — whatever you prefer.' },
      { q: 'Does SMASH sync with my accounting software?', a: 'Yes. SMASH integrates with Xero and QuickBooks. Invoices sync automatically.' },
    ],
    ctaH1: ['Every treatment', 'invoiced. Every time.'],
    ctaSub: 'Free to download. No credit card. First invoice in minutes.',
    relatedSlugs: ['cleaners', 'gardeners', 'pool-maintenance'],
  },

  // ─────────────────────────────────────────────
  // CONCRETERS
  // ─────────────────────────────────────────────
  {
    slug: 'concreters',
    name: 'Concreters',
    tradeLabel: 'For Concreters',
    seo: {
      title: 'Invoicing for Concreters | Concrete Invoice App | SMASH',
      description: 'Invoice concreting jobs from your phone. Labour, concrete supply, and prep — voice-to-invoice in under 60 seconds. GST-compliant PDFs.',
      keywords: 'concreter invoice app, concrete invoice, concreting business invoicing, driveway invoice, concrete quote software',
      ogTitle: 'Invoicing for Concreters — SMASH',
      ogDescription: 'Slab poured. Invoice sent. Before the concrete sets.',
    },
    heroH1: ['Slab poured.', 'Invoice sent.', 'Job done.'],
    heroSub: 'Concreting jobs are big — high value, high complexity, lots of line items. SMASH builds the full invoice from a voice description in under 60 seconds, from your phone, on site.',
    appScreen: 'estimates',
    heroImage: '/images/segments/concreters-hero.jpg',
    tradePhotos: ['/images/segments/concreters-1.jpg', '/images/segments/concreters-2.jpg'],
    answerQuestion: 'Best invoicing app for concreters',
    answerText: 'SMASH is built for concreters who need to invoice high-value jobs with multiple components — excavation, formwork, concrete supply, labour, and finishing — all from a phone description. Set your rates once, describe the job out loud, and get a complete GST-compliant invoice in under 60 seconds.',
    problemTitle: 'The concreting invoicing problem',
    problems: [
      { problem: 'High-value jobs with many line items', reality: 'Excavation, base prep, formwork, concrete supply, finishing, sealing — all need to be on the invoice correctly.' },
      { problem: 'Concrete quoted by the cubic metre', reality: 'How many cubic metres? What was the pump charge? Manual calculation every time.' },
      { problem: 'Jobs that span multiple days', reality: 'Invoice at the end or progress claim halfway? Either way, doing it from memory is a problem.' },
      { problem: 'Getting the quote in writing fast', reality: 'Client decides on the spot. You need to send them a quote before they call someone else.' },
    ],
    voiceExamples: [
      { voice: '"Exposed aggregate driveway at the Burnside property. 42 square metres, 100mm deep, mesh reinforced. Supplied 4.5 cubic metres of 32MPa concrete plus the aggregate finish. Three days labour, two crew."', result: 'Exposed aggregate driveway — 3 days × 2 crew + 4.5m³ 32MPa concrete + aggregate finish = $7,200.00 + GST' },
      { voice: '"Concrete slab for the garage at 8 Macquarie Drive. 6 by 6 metres, 100mm slab, mesh reinforced, broom finish. One day pour, excavation done separately."', result: 'Garage slab — 6×6m pour + mesh + 3.6m³ concrete + broom finish = $2,850.00 + GST' },
      { voice: '"Concrete footpath repair in the council job at Miller Street. 8 lineal metres, 100mm removal and replacement. Day rate, two crew."', result: 'Path repair — 8LM removal + replacement concrete + 2× crew day rate = $1,440.00 + GST' },
    ],
    features: [
      { title: 'Concrete by the cubic metre', body: 'Set your concrete rate per m³. Mention volume and SMASH calculates the cost. No more manual multiplication.' },
      { title: 'Progress claims', body: 'Invoice 50% on start, 50% on completion. Or any split you agree with the client. Both are invoiceable from voice.' },
      { title: 'Sub-contractor rates', body: 'Working under a builder? Invoice your sub-contract rate the same way — describe scope, hours, materials.' },
      { title: 'Quote before break, invoice after', body: 'Quote the job on site. Send it while the client decides. Convert to invoice when the job is done.' },
      { title: 'Large job itemisation', body: 'Excavation, formwork, supply, labour, finishing — all as separate line items. Professional invoices for high-value jobs.' },
      { title: 'GST compliant', body: 'Every invoice is ATO-compliant. Critical for high-value jobs where clients and builders need correct tax invoices.' },
    ],
    blogPosts: [
      { slug: 'driveway-concrete-asphalt-voice-invoicing', title: 'Voice Invoicing for Concreters', desc: 'How concrete and asphalt businesses use voice invoicing for complex, high-value job invoicing.' },
      { slug: 'voice-to-estimate-build-bids-without-pen', title: 'Build Bids Without a Pen', desc: 'Quote the job on the spot from a voice description. Client gets it before they call the next guy.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Invoices Paid Faster', desc: 'High-value jobs need invoices sent fast. Here\'s what changes when you invoice on the day.' },
    ],
    faqs: [
      { q: 'Can I price concrete by the cubic metre?', a: 'Yes. Set your concrete rate per m³ in your pricing catalog. Mention the volume and SMASH calculates the cost.' },
      { q: 'Can I invoice progress claims for large jobs?', a: 'Yes. SMASH can generate a 50% deposit invoice and a final completion invoice for the same job.' },
      { q: 'Can I include subcontractor costs like pump hire?', a: 'Yes. Add pump hire and other subcontractor costs as line items — either from your catalog or described in your voice input.' },
      { q: 'I work as a subcontractor for builders. Does SMASH suit that?', a: 'Yes. Sub-contract invoices work the same way. Describe the scope and your rate, get a compliant invoice.' },
      { q: 'How do I handle jobs that span multiple days?', a: 'Invoice the whole job at completion, or send a progress claim mid-job. Both work from the same voice input.' },
      { q: 'Is the invoice format acceptable to builders and developers?', a: 'Yes. SMASH generates a GST-compliant tax invoice with all required ATO fields — acceptable to any client.' },
    ],
    ctaH1: ['Invoice the job', 'on the day.'],
    ctaSub: 'Free to download. No credit card. First invoice in minutes.',
    relatedSlugs: ['painters', 'tilers', 'plumbers'],
  },

  // ─────────────────────────────────────────────
  // TILERS
  // ─────────────────────────────────────────────
  {
    slug: 'tilers',
    name: 'Tilers',
    tradeLabel: 'For Tilers',
    seo: {
      title: 'Invoicing for Tilers | Tiling Invoice App | SMASH',
      description: 'Invoice tiling jobs from your phone. Labour, tiles, adhesive, grout — voice-to-invoice in under 60 seconds. GST-compliant PDFs.',
      keywords: 'tiler invoice app, tiling invoice, tile laying invoice, tiler quote software, ceramic tile invoice app',
      ogTitle: 'Invoicing for Tilers — SMASH',
      ogDescription: 'Last tile grouted. Invoice sent. Next job.',
    },
    heroH1: ['Last tile set.', 'Invoice sent.', 'Next job.'],
    heroSub: 'Tiling jobs mean labour by the square metre, adhesive, grout, and sometimes supply of tiles. SMASH invoices it all from a voice description in under 60 seconds.',
    appScreen: 'estimates-static',
    heroImage: '/images/segments/tilers-hero.jpg',
    tradePhotos: ['/images/segments/tilers-1.jpg', '/images/segments/tilers-2.jpg'],
    answerQuestion: 'Best invoicing app for tilers',
    answerText: 'SMASH handles tiling invoicing — labour by the m², tile supply, adhesive, grout, and waterproofing — all from a voice description. Set your per-m² rate and common materials prices once and SMASH fills them in for every job. GST-compliant PDF from your phone in under 60 seconds.',
    problemTitle: 'The tiling invoicing problem',
    problems: [
      { problem: 'Labour priced by the square metre', reality: 'Multiply m² by rate manually. On a phone. With adhesive on your hands.' },
      { problem: 'Tiles, adhesive, grout all separate', reality: 'Three material categories to price and list as separate line items.' },
      { problem: 'Different rates for floor vs wall', reality: 'Floor at $35/m², wall at $45/m² — two rates to track, easy to use the wrong one.' },
      { problem: 'Waterproofing as a separate line', reality: 'Wet areas need waterproofing quoted separately. Another thing to price and remember.' },
    ],
    voiceExamples: [
      { voice: '"Bathroom tile install at the Paddington reno. 18 square metres of wall tiles, 6 square metres of floor tiles, waterproofing wet area. Wall rate plus floor rate, tiles client supplied."', result: 'Bathroom tiling — 18m² wall @ $48/m² + 6m² floor @ $38/m² + waterproofing = $1,318.00 + GST' },
      { voice: '"Kitchen splashback at the Mosman unit. 4 square metres, subway tile supplied and installed, adhesive and grout included."', result: 'Kitchen splashback — 4m² @ $55/m² supply & install + adhesive + grout = $292.00 + GST' },
      { voice: '"Outdoor patio at the Manly property. 45 square metres of 600x600 pavers, outdoor tile adhesive and grout, two days labour."', result: 'Outdoor paver install — 45m² @ $42/m² + outdoor adhesive + grout = $2,090.00 + GST' },
    ],
    features: [
      { title: 'Per-m² pricing', body: 'Set your floor rate, wall rate, and outdoor rate. Mention the area and surface type — SMASH calculates the total.' },
      { title: 'Materials included', body: 'Adhesive, grout, tile trim, waterproofing membrane — add your material costs to the catalog. Mention them and they\'re priced.' },
      { title: 'Supply and install vs labour only', body: 'Set a higher rate for supply-and-install jobs. Mention whether tiles are supplied and SMASH uses the right rate.' },
      { title: 'Waterproofing as a line item', body: 'Add your waterproofing rate as a separate catalog item. Mention wet area and it appears automatically.' },
      { title: 'Quote before start', body: 'Give the client a quote before work starts. Convert to invoice when done. One voice input covers both.' },
      { title: 'GST and ABN included', body: 'Every invoice is tax-compliant. Builders and developers can use your invoice for their records.' },
    ],
    blogPosts: [
      { slug: 'voice-to-estimate-build-bids-without-pen', title: 'Build Bids Without a Pen', desc: 'Quote the m² on the spot. Client gets the number before they decide.' },
      { slug: 'stop-double-handling-invoicing-on-the-job', title: 'Stop Double-Handling', desc: 'One step from job to invoice. No re-entering anything.' },
      { slug: 'best-quote-and-invoice-software-for-tradies', title: 'Best Quote & Invoice Software', desc: 'What makes a great invoicing app for trade businesses — and what to look for.' },
    ],
    faqs: [
      { q: 'Can I set different rates for floor and wall tiling?', a: 'Yes. Set a floor rate and a wall rate in your pricing catalog. Mention the surface type and SMASH applies the right one.' },
      { q: 'Can I include adhesive and grout as separate line items?', a: 'Yes. Add your adhesive and grout pricing to the catalog. Mention them in your description and they appear as line items.' },
      { q: 'How do I handle jobs where the client supplies the tiles?', a: 'Set a labour-only rate. Mention "tiles supplied by client" in your description and SMASH invoices labour only.' },
      { q: 'Can I include waterproofing as a separate item?', a: 'Yes. Add a waterproofing line item to your catalog. Mention it in the description and it\'s included and correctly priced.' },
      { q: 'Can I quote the job before starting and invoice after?', a: 'Yes. Describe the scope and area to quote. Convert to invoice when done. No re-entering data.' },
      { q: 'Is the invoice accepted by builders and project managers?', a: 'Yes. SMASH generates a GST-compliant tax invoice with all ATO-required fields — accepted by any client.' },
    ],
    ctaH1: ['Invoice the job', 'before the grout sets.'],
    ctaSub: 'Free to download. No credit card. First invoice in minutes.',
    relatedSlugs: ['painters', 'concreters', 'plumbers'],
  },

  // ─────────────────────────────────────────────
  // LOCKSMITHS
  // ─────────────────────────────────────────────
  {
    slug: 'locksmiths',
    name: 'Locksmiths',
    tradeLabel: 'For Locksmiths',
    seo: {
      title: 'Invoicing for Locksmiths | Locksmith Invoice App | SMASH',
      description: 'Invoice locksmith jobs from your phone. Labour, locks, and call-out fees — voice-to-invoice in under 60 seconds. GST-compliant PDFs.',
      keywords: 'locksmith invoice app, locksmith invoicing, key cutting invoice, lock installation invoice, emergency locksmith invoice',
      ogTitle: 'Invoicing for Locksmiths — SMASH',
      ogDescription: 'Door open. Invoice sent. Next call.',
    },
    heroH1: ['Door open.', 'Invoice sent.', 'Next call.'],
    heroSub: 'Locksmith jobs are fast — 30 minutes, done, onto the next one. SMASH keeps up. Invoice sent before you\'ve driven away, from your phone, in under 60 seconds.',
    appScreen: 'invoice',
    heroImage: '/images/segments/locksmiths-hero.jpg',
    tradePhotos: ['/images/segments/locksmiths-1.jpg', '/images/segments/locksmiths-2.jpg'],
    answerQuestion: 'Best invoicing app for locksmiths',
    answerText: 'SMASH is ideal for locksmiths with fast-turnaround jobs and after-hours call-outs. Describe the job — lock replacement, key cut, safe opening — and SMASH generates a complete GST-compliant invoice from your phone in under 60 seconds. Emergency rates, standard rates, all handled.',
    problemTitle: 'The locksmith invoicing problem',
    problems: [
      { problem: 'Fast jobs that need fast invoicing', reality: '30-minute job, 15-minute invoice. The maths don\'t work.' },
      { problem: 'Emergency call-outs at all hours', reality: 'Invoice when you get home? Or the next morning? Payment terms already slipping.' },
      { problem: 'Different rates for different situations', reality: 'Standard, after-hours, emergency, commercial — four rate cards to remember.' },
      { problem: 'Parts and labour together', reality: 'New deadbolt supplied and installed. Two line items to price correctly from memory.' },
    ],
    voiceExamples: [
      { voice: '"Lockout at the Darlinghurst apartment. Non-destructive entry, residential standard rate, one hour call-out."', result: 'Residential lockout — 1 hr @ $120/hr = $120.00 + GST' },
      { voice: '"Lock replacement at the commercial office in CBD. Supplied and installed new Lockwood deadbolt, two keys cut. Standard commercial rate."', result: 'Commercial lock replacement — labour + Lockwood deadbolt + 2 keys = $295.00 + GST' },
      { voice: '"Emergency call-out for a car lockout in Parramatta at 2am. After-hours rate, 30 minutes, slim jim entry."', result: 'Emergency car lockout — 0.5 hrs @ $220/hr (after-hours) = $110.00 + GST' },
    ],
    features: [
      { title: 'Emergency and after-hours rates', body: 'Set your standard, after-hours, and emergency rates. Mention which applies — SMASH uses the right one without calculation.' },
      { title: 'Labour + parts together', body: 'Describe the lock, the labour, and any key cutting. All appear as separate line items on the same invoice.' },
      { title: 'Fast invoice per job', body: 'Every job gets a professional invoice in under 60 seconds. No catching up at the end of the day.' },
      { title: 'Commercial and residential rates', body: 'Different rate for commercial clients. Mention the job type and SMASH applies it.' },
      { title: 'Client records', body: 'Client and property saved from the first call. Repeat calls take 15 seconds to invoice.' },
      { title: 'Online payments', body: 'Clients pay from the invoice link. For emergency call-outs, instant card payment gets money in your account tonight.' },
    ],
    blogPosts: [
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'Fast jobs need fast invoicing. How voice invoicing matches your pace.' },
      { slug: 'stop-double-handling-invoicing-on-the-job', title: 'Stop Double-Handling', desc: 'One step from job done to invoice sent. No catching up later.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Invoices Paid Faster', desc: 'For emergency call-outs, getting paid the same night starts with the invoice going out the same night.' },
    ],
    faqs: [
      { q: 'Can I set different rates for emergency, after-hours, and standard jobs?', a: 'Yes. Set up each rate type in your pricing catalog. Mention which applies in your description — SMASH uses the right one.' },
      { q: 'Can I include parts like locks and keys as line items?', a: 'Yes. Mention the lock brand, model, and any keys cut. SMASH prices them from your catalog and lists them separately.' },
      { q: 'Can clients pay by card on the spot?', a: 'Yes. The invoice is sent immediately with a payment link. Clients pay by card directly from the invoice — no terminal required.' },
      { q: 'Does SMASH work for car lockouts as well as residential?', a: 'Yes. Car lockout, residential, commercial — all work from the same voice input with the right rate applied.' },
      { q: 'Can I invoice while I\'m still on the job?', a: 'Yes. You don\'t need to wait until you\'re back in the van. Open SMASH, describe the job, send — while the client is still there.' },
      { q: 'Is SMASH available on iPhone?', a: 'Yes. SMASH is an iOS app, available free from the App Store on any iPhone running iOS 16 or later.' },
    ],
    ctaH1: ['Job done.', 'Invoice sent.', 'Money incoming.'],
    ctaSub: 'Free to download. No credit card. First invoice in minutes.',
    relatedSlugs: ['handymen', 'electricians', 'pest-control'],
  },

  // ─────────────────────────────────────────────
  // CAR DETAILERS
  // ─────────────────────────────────────────────
  {
    slug: 'car-detailers',
    name: 'Mobile Car Detailers',
    tradeLabel: 'For Car Detailers',
    seo: {
      title: 'Invoicing for Mobile Car Detailers | Detailing Invoice App | SMASH',
      description: 'Invoice car detailing jobs from your phone. Full detail, packages, add-ons — voice-to-invoice in under 60 seconds. GST-compliant PDFs.',
      keywords: 'car detailing invoice app, mobile detailer invoice, car wash invoice, detailing business invoicing, auto detailing invoice',
      ogTitle: 'Invoicing for Car Detailers — SMASH',
      ogDescription: 'Car gleaming. Invoice sent. Next booking.',
    },
    heroH1: ['Car gleaming.', 'Invoice sent.', 'Next booking.'],
    heroSub: 'Mobile detailing means multiple cars per day, packages, add-ons, and different prices per vehicle type. SMASH handles all of it from a voice description in under 60 seconds.',
    appScreen: 'portal',
    heroImage: '/images/segments/car-detailers-hero.jpg',
    tradePhotos: ['/images/segments/car-detailers-1.jpg', '/images/segments/car-detailers-2.jpg'],
    answerQuestion: 'Best invoicing app for mobile car detailers',
    answerText: 'SMASH is perfect for mobile car detailers who work through the day and invoice multiple vehicles. Set your detail packages — basic wash, interior clean, full detail, paint correction — and SMASH fills in the right price from a voice description. GST-compliant PDF from your phone in under 60 seconds.',
    problemTitle: 'The car detailing invoicing problem',
    problems: [
      { problem: 'Multiple packages at different price points', reality: 'Basic, express, full detail, paint correction — four price levels to remember and apply correctly.' },
      { problem: 'Add-ons per client', reality: 'One client wants a clay bar, another wants ceramic coating. Typing it out takes longer than the add-on itself.' },
      { problem: 'Vehicle size affects price', reality: 'SUV rate vs sedan rate. Two more things to track. Still manually.' },
      { problem: '6 cars on a busy Saturday', reality: 'Invoice all 6 at the end of the day? Or send invoices between cars and keep cash flow moving?' },
    ],
    voiceExamples: [
      { voice: '"Full interior and exterior detail on the client\'s GLC 300. Sedan rate, includes leather conditioning, full vacuum, and hand wax. Standard full detail package."', result: 'Full detail (sedan) — exterior + interior + leather condition + hand wax = $299.00 + GST' },
      { voice: '"Express wash and vac on the Ford Ranger at the Manly booking. SUV rate, 45 minutes."', result: 'Express detail (SUV) — wash + vacuum = $89.00 + GST' },
      { voice: '"Paint correction and ceramic coating on the client\'s BMW M3. Two days labour, full paint correction, Gyeon Quartz coating. Premium rate."', result: 'Paint correction + ceramic coat — 2 days + Gyeon Quartz coating = $1,480.00 + GST' },
    ],
    features: [
      { title: 'Package pricing', body: 'Set your basic, standard, and full detail package prices. Mention the package and SMASH applies the right price.' },
      { title: 'Vehicle size rates', body: 'Different rates for sedans, SUVs, and utes. Mention the vehicle type and SMASH uses the right rate.' },
      { title: 'Add-ons as line items', body: 'Clay bar, ceramic coating, engine bay — add them to your catalog. Mention them and they\'re priced and listed.' },
      { title: 'Between-car invoicing', body: 'Send the invoice as soon as each car is done. Client gets it while the finish is still fresh.' },
      { title: 'Client records', body: 'Client and vehicle details saved. Repeat bookings take 15 seconds to invoice.' },
      { title: 'Online payments', body: 'Clients pay from the invoice link before they drive away. No cash handling, no terminal.' },
    ],
    blogPosts: [
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'Invoice between cars, not after your last one of the day.' },
      { slug: 'stop-admin-sundays-voice-invoicing', title: 'Stop Admin Sundays', desc: 'If you\'re catching up on invoices on weekends, voice invoicing was built to fix that.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Invoices Paid Faster', desc: 'Send the invoice when the job is done. Here\'s why timing is everything for getting paid.' },
    ],
    faqs: [
      { q: 'Can I set up different package prices?', a: 'Yes. Add your basic, express, standard, and full detail packages to your pricing catalog. Mention the package name and SMASH applies the right price.' },
      { q: 'Can I charge different rates for different vehicle sizes?', a: 'Yes. Set separate rates for sedans, SUVs, and utes. Mention the vehicle type in your description and SMASH uses the right rate.' },
      { q: 'How do I add on-the-day extras like clay bar or ceramic coating?', a: 'Add them to your pricing catalog as individual items. Mention them in the job description and they appear as line items on the invoice.' },
      { q: 'Can I invoice between cars throughout the day?', a: 'Yes. Open SMASH after each car, describe the job, send the invoice. Each takes under 60 seconds.' },
      { q: 'Can clients pay from their phone?', a: 'Yes. Every invoice includes a payment link. Clients click it and pay by card directly — before they drive away.' },
      { q: 'Do I need to be GST-registered to use SMASH?', a: 'No. SMASH works for GST-registered and non-registered businesses. The invoice format adjusts automatically.' },
    ],
    ctaH1: ['Invoice between', 'cars. Not after.'],
    ctaSub: 'Free to download. No credit card. First invoice in minutes.',
    relatedSlugs: ['mobile-mechanics', 'cleaners', 'pest-control'],
  },

  // ─────────────────────────────────────────────
  // DOG GROOMERS
  // ─────────────────────────────────────────────
  {
    slug: 'dog-groomers',
    name: 'Mobile Dog Groomers',
    tradeLabel: 'For Dog Groomers',
    seo: {
      title: 'Invoicing for Mobile Dog Groomers | Pet Grooming Invoice App | SMASH',
      description: 'Invoice dog grooming appointments from your phone. Groom packages, add-ons, per-breed pricing — voice-to-invoice in under 60 seconds.',
      keywords: 'dog grooming invoice app, mobile pet groomer invoice, grooming business invoicing, dog wash invoice, pet grooming quote app',
      ogTitle: 'Invoicing for Mobile Dog Groomers — SMASH',
      ogDescription: 'Pup looking great. Invoice sent. Next appointment.',
    },
    heroH1: ['Pup looking great.', 'Invoice sent.', 'Next door.'],
    heroSub: 'Multiple grooms per day, breed-specific pricing, add-ons — SMASH handles the invoicing from your phone between appointments, in under 60 seconds.',
    appScreen: 'client',
    heroImage: '/images/segments/dog-groomers-hero.jpg',
    tradePhotos: ['/images/segments/dog-groomers-1.jpg', '/images/segments/dog-groomers-2.jpg'],
    answerQuestion: 'Best invoicing app for mobile dog groomers',
    answerText: 'SMASH is ideal for mobile dog groomers who need to invoice multiple appointments per day quickly. Set your pricing by breed, coat type, or size — and SMASH fills in the right price from a voice description. GST-compliant PDF from your phone in under 60 seconds, between appointments.',
    problemTitle: 'The dog grooming invoicing problem',
    problems: [
      { problem: 'Different prices per breed', reality: 'Golden retriever vs cavoodle vs German shepherd — three different prices to remember and apply.' },
      { problem: '8 appointments in a day', reality: 'You can\'t invoice between grooms properly. It all piles up for the evening.' },
      { problem: 'Add-ons per appointment', reality: 'One dog needs teeth brushing, another needs de-shedding. Manually added every time.' },
      { problem: 'No-show and late cancellation fees', reality: 'Awkward to charge. Easier if it goes on an invoice automatically.' },
    ],
    voiceExamples: [
      { voice: '"Full groom for the golden retriever at the Cronulla booking. Bath, blow dry, brush, trim, and nail clip. Large dog rate."', result: 'Full groom (large) — bath + blow dry + brush + trim + nails = $120.00 + GST' },
      { voice: '"Express wash and brush for the cavoodle in Caringbah. Small dog rate, 40 minutes."', result: 'Express groom (small) — wash + brush = $55.00 + GST' },
      { voice: '"Full groom and de-shed treatment for the German shepherd in Sutherland. Extra large rate plus de-shed add-on."', result: 'Full groom + de-shed (XL) = $165.00 + GST' },
    ],
    features: [
      { title: 'Breed and size pricing', body: 'Set rates by size — small, medium, large, extra large. Mention the dog and SMASH applies the right price.' },
      { title: 'Package pricing', body: 'Full groom, express wash, bath-only — set each package price once. Mention the package and it\'s applied.' },
      { title: 'Add-ons as line items', body: 'Teeth cleaning, de-shedding, flea treatment, nail trim — each as a catalog item. Mention them and they\'re priced.' },
      { title: 'Between-appointment invoicing', body: 'Send the invoice immediately after each appointment. Client gets it while you drive to the next.' },
      { title: 'Client and pet records', body: 'Client name, pet name, breed, and rate all saved. Repeat bookings take 15 seconds.' },
      { title: 'Online payments', body: 'Clients pay from the invoice link. No cash, no EFTPOS terminal, no chasing.' },
    ],
    blogPosts: [
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'Invoice between appointments, not at the end of a long day.' },
      { slug: 'stop-admin-sundays-voice-invoicing', title: 'Stop Admin Sundays', desc: 'If you\'re catching up on invoices over the weekend, voice invoicing was built for you.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Invoices Paid Faster', desc: 'Send the invoice right after each appointment. Here\'s why timing changes your payment rate.' },
    ],
    faqs: [
      { q: 'Can I set different prices for different dog sizes or breeds?', a: 'Yes. Set pricing tiers by size — small, medium, large, extra large. Mention the size or breed in your description and SMASH applies the right rate.' },
      { q: 'Can I add grooming packages?', a: 'Yes. Add your full groom, express wash, and bath-only packages to your pricing catalog. Mention the package and it\'s priced correctly.' },
      { q: 'How do I add extras like de-shedding or teeth cleaning?', a: 'Add them as individual items in your pricing catalog. Mention them in the job description and they appear as line items.' },
      { q: 'I have 8 appointments today. Can I invoice between each one?', a: 'Yes. Each invoice takes under 60 seconds. Invoice right after the groom while the client is getting their dog — they receive it before you drive away.' },
      { q: 'Can clients pay from their phone when I send the invoice?', a: 'Yes. Every invoice includes a payment link. Clients pay by card directly — no cash, no terminal.' },
      { q: 'Do I need to be GST-registered to use SMASH?', a: 'No. SMASH works for both registered and non-registered businesses. The invoice format adjusts based on your GST status.' },
    ],
    ctaH1: ['Invoice between', 'every groom.'],
    ctaSub: 'Free to download. No credit card. First invoice in minutes.',
    relatedSlugs: ['cleaners', 'car-detailers', 'gardeners'],
  },

  // ─────────────────────────────────────────────
  // ARBORISTS
  // ─────────────────────────────────────────────
  {
    slug: 'arborists',
    name: 'Arborists & Tree Services',
    tradeLabel: 'For Arborists',
    seo: {
      title: 'Invoicing for Arborists & Tree Services | Tree Invoice App | SMASH',
      description: 'Invoice tree work from your phone. Removal, pruning, stump grinding, chipping — voice-to-invoice in under 60 seconds. GST-compliant PDFs.',
      keywords: 'arborist invoice app, tree service invoice, tree removal invoice, stump grinding invoice, arborist quote software',
      ogTitle: 'Invoicing for Arborists — SMASH',
      ogDescription: 'Tree down. Chips away. Invoice sent.',
    },
    heroH1: ['Tree down.', 'Chips away.', 'Invoice sent.'],
    heroSub: 'Tree work is physically demanding. Invoicing shouldn\'t be. Describe the job out loud — removal, pruning, stump grinding, disposal — and SMASH sends the invoice from your phone in under 60 seconds.',
    appScreen: 'estimates',
    heroImage: '/images/segments/arborists-hero.jpg',
    tradePhotos: ['/images/segments/arborists-1.jpg', '/images/segments/arborists-2.jpg'],
    answerQuestion: 'Best invoicing app for arborists and tree services',
    answerText: 'SMASH handles arborist invoicing — removal, pruning, stump grinding, green waste disposal, and travel/call-out — all from a voice description. Set your rates once and describe any job out loud. GST-compliant PDF sent from your phone in under 60 seconds.',
    problemTitle: 'The arborist invoicing problem',
    problems: [
      { problem: 'Complex jobs with many components', reality: 'Removal, stump grind, chipping, green waste disposal — four line items per job, all to be typed manually.' },
      { problem: 'Physically exhausting work', reality: 'After a full day in the trees, the last thing you want is an hour at the laptop.' },
      { problem: 'Quotes that change on the day', reality: 'Job was bigger than expected. Quoting correctly and invoicing the actual work done are two different tasks.' },
      { problem: 'Disposal fees variable per job', reality: 'How much green waste? What\'s the dump fee? Calculated on site but forgotten by invoice time.' },
    ],
    voiceExamples: [
      { voice: '"Large eucalyptus removal at the property in Wahroonga. 15-metre tree, section removal, full chipping on site, stump grind, green waste taken away. Two crew, full day."', result: 'Large tree removal — 2× crew day rate + stump grind + chipping + green waste disposal = $2,400.00 + GST' },
      { voice: '"Pruning and shaping of six street trees at the council job. Three hours, two crew, all material chipped on site."', result: 'Council tree pruning — 3 hrs × 2 crew @ $85/hr = $510.00 + GST' },
      { voice: '"Emergency storm damage at the Mosman property. Two trees on the fence. Four hours, two crew, urgent rate. Debris removed to tip."', result: 'Emergency storm cleanup — 4 hrs × 2 crew @ $120/hr (urgent) + tip fees = $1,080.00 + GST' },
    ],
    features: [
      { title: 'Multi-crew invoicing', body: 'Set a crew day rate or per-person hourly. Mention crew size and hours — SMASH multiplies correctly.' },
      { title: 'Service catalog', body: 'Removal, pruning, stump grind, chipping, disposal — each as a catalog item. Mention them and they\'re priced.' },
      { title: 'Emergency and standard rates', body: 'Storm damage jobs at a higher rate. Say "urgent rate" or "emergency" and SMASH applies the right one.' },
      { title: 'Disposal and tip fees', body: 'Add your disposal rate as a line item. Variable per job? Mention the amount and SMASH uses that figure.' },
      { title: 'Quote and invoice', body: 'Quote the job before you start. Adjust for actual scope on completion. Convert to invoice in one step.' },
      { title: 'GST compliant', body: 'Council and commercial clients need proper tax invoices. SMASH generates them every time.' },
    ],
    blogPosts: [
      { slug: 'voice-to-estimate-build-bids-without-pen', title: 'Build Bids Without a Pen', desc: 'Quote the job on site. Send it before the client calls the next arborist.' },
      { slug: 'the-paperwork-tax-stop-losing-money', title: 'The Paperwork Tax', desc: 'Every hour on admin is an hour you\'re not billing. Here\'s what it costs in a year.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Invoices Paid Faster', desc: 'High-value jobs need the invoice sent on the day. Here\'s why it matters.' },
    ],
    faqs: [
      { q: 'Can I invoice for a two-person crew?', a: 'Yes. Set a crew day rate or per-person hourly rate. Mention the crew size and hours — SMASH multiplies it correctly.' },
      { q: 'Can I include stump grinding and green waste disposal as separate items?', a: 'Yes. Add stump grinding and disposal to your pricing catalog as separate items. Mention them and they\'re listed and priced.' },
      { q: 'Can I charge emergency rates for storm damage jobs?', a: 'Yes. Set an emergency rate. Say "urgent rate" or "emergency job" in your description and SMASH applies it.' },
      { q: 'I work for councils and commercial clients. Will the invoice format suit them?', a: 'Yes. SMASH generates a full GST-compliant tax invoice accepted by councils, body corporates, and commercial clients.' },
      { q: 'Can I quote a job and invoice a different amount if the scope changes?', a: 'Yes. Quote before work starts. Invoice based on actual work done — SMASH lets you edit any figure before sending.' },
      { q: 'Can I include equipment hire as a line item?', a: 'Yes. Add equipment hire to your pricing catalog — crane hire, chipper hire, EWP. Mention it and it\'s on the invoice.' },
    ],
    ctaH1: ['Invoice on the ground.', 'Not at a desk.'],
    ctaSub: 'Free to download. No credit card. First invoice in minutes.',
    relatedSlugs: ['gardeners', 'concreters', 'handymen'],
  },

  // ─────────────────────────────────────────────
  // POOL MAINTENANCE
  // ─────────────────────────────────────────────
  {
    slug: 'pool-maintenance',
    name: 'Pool Maintenance Services',
    tradeLabel: 'For Pool Maintenance',
    seo: {
      title: 'Invoicing for Pool Maintenance | Pool Service Invoice App | SMASH',
      description: 'Invoice pool service jobs from your phone. Chemicals, labour, equipment — voice-to-invoice in under 60 seconds. GST-compliant PDFs.',
      keywords: 'pool service invoice app, pool maintenance invoicing, pool cleaning invoice, pool technician invoice, pool chemical invoice',
      ogTitle: 'Invoicing for Pool Maintenance — SMASH',
      ogDescription: 'Pool serviced. Chemicals dosed. Invoice sent.',
    },
    heroH1: ['Pool serviced.', 'Invoice sent.', 'Next stop.'],
    heroSub: 'Multiple pools per day, chemical top-ups, equipment checks, and repairs. SMASH invoices every service from your phone in under 60 seconds — between pools, not at the end of the day.',
    appScreen: 'customer-detail',
    heroImage: '/images/segments/pool-maintenance-hero.jpg',
    tradePhotos: ['/images/segments/pool-maintenance-1.jpg', '/images/segments/pool-maintenance-2.jpg'],
    answerQuestion: 'Best invoicing app for pool maintenance services',
    answerText: 'SMASH is built for pool technicians who service multiple properties per day. Set your service rates and chemical pricing once. Describe each service out loud — SMASH fills in your rates, adds chemical costs, and sends a GST-compliant invoice from your phone in under 60 seconds.',
    problemTitle: 'The pool maintenance invoicing problem',
    problems: [
      { problem: 'Multiple properties per day', reality: 'Invoice all 8 at the end of the day? Or let it pile up for the weekend?' },
      { problem: 'Chemical quantities vary per service', reality: 'Different amounts of chlorine, pH up, clarifier on every visit. Manual pricing every time.' },
      { problem: 'Routine service vs repair', reality: 'Standard service rate one invoice, equipment repair another. Two different rates, easy to mix up.' },
      { problem: 'Recurring invoices that feel manual', reality: 'Same pool, same price, every fortnight. Still takes 5 minutes to invoice properly.' },
    ],
    voiceExamples: [
      { voice: '"Weekly service at the Cremorne property. Vacuum, backwash, added 2 litres of liquid chlorine and a bag of pH up. Charge the standard weekly rate."', result: 'Pool service — standard weekly + 2L liquid chlorine + 1kg pH up = $87.50 + GST' },
      { voice: '"Pool pump replacement at the Neutral Bay job. Supplied and installed Astral Hurlcon VX7 variable speed pump. Two hours labour."', result: 'Pump replacement — 2 hrs @ $110/hr + Astral VX7 supply = $782.00 + GST' },
      { voice: '"Green pool treatment at the Mosman property. Shock dose, algaecide, brush and vacuum. Two visits included, charge the green pool rate."', result: 'Green pool treatment — 2× visits + shock chemicals + algaecide = $295.00 + GST' },
    ],
    features: [
      { title: 'Chemical pricing catalog', body: 'Chlorine, pH up, pH down, algaecide, clarifier — add your chemical prices once. Mention quantity used and SMASH prices it.' },
      { title: 'Service vs repair rates', body: 'Set a standard service rate and a repair hourly rate. Mention which applies and SMASH uses the right one.' },
      { title: 'Recurring client profiles', body: 'Client, pool size, and service rate all saved. Recurring service invoices take 15 seconds.' },
      { title: 'Multi-property days', body: 'Invoice each property immediately or batch at day\'s end. All jobs queued and ready.' },
      { title: 'Equipment supply + install', body: 'Pumps, filters, chlorinators — describe supply and install and SMASH lists them as separate line items.' },
      { title: 'Online payments', body: 'Clients pay from the invoice link. Recurring clients get invoiced and pay on a predictable cycle.' },
    ],
    blogPosts: [
      { slug: 'stop-admin-sundays-voice-invoicing', title: 'Stop Admin Sundays', desc: 'If you\'re catching up on pool invoices on weekends, voice invoicing was built to fix that.' },
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'Invoice between properties. Not at the end of a long day.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Invoices Paid Faster', desc: 'Send the invoice on the day. Here\'s why timing matters for getting paid faster.' },
    ],
    faqs: [
      { q: 'Can I price chemicals by quantity on each invoice?', a: 'Yes. Add your chemical rates to the pricing catalog. Mention what you dosed and how much — SMASH calculates the cost.' },
      { q: 'Can I set up recurring invoices for regular maintenance clients?', a: 'Yes. Client profiles store their rate and property details. Recurring invoices take 15 seconds per property.' },
      { q: 'How do I invoice for equipment repair on top of a service visit?', a: 'Describe both in your voice input. Service rate and repair rate appear as separate line items on the same invoice.' },
      { q: 'Can I invoice for green pool treatments at a higher rate?', a: 'Yes. Set a green pool treatment rate as a separate catalog item — different from your standard service.' },
      { q: 'I service 8 properties per day. Can I batch invoice them?', a: 'Yes. Record each service as you go. At the end of the day, send all invoices from the SMASH job list in one session.' },
      { q: 'Does SMASH sync with my accounting software?', a: 'Yes. SMASH integrates with Xero and QuickBooks. All invoices sync automatically.' },
    ],
    ctaH1: ['Invoice every pool.', 'Between pools.'],
    ctaSub: 'Free to download. No credit card. First invoice in minutes.',
    relatedSlugs: ['pest-control', 'cleaners', 'gardeners'],
  },

  // ─────────────────────────────────────────────
  // SOLAR INSTALLERS
  // ─────────────────────────────────────────────
  {
    slug: 'solar-installers',
    name: 'Solar Installers',
    tradeLabel: 'For Solar Installers',
    seo: {
      title: 'Invoicing for Solar Installers | Solar Invoice App | SMASH',
      description: 'Invoice solar installation jobs from your phone. Panels, inverters, labour, and STC rebates — voice-to-invoice in under 60 seconds. GST-compliant PDFs.',
      keywords: 'solar installer invoice, solar installation invoice, solar panel invoice, solar quote software, CEC installer invoice',
      ogTitle: 'Invoicing for Solar Installers — SMASH',
      ogDescription: 'System commissioned. Invoice sent.',
    },
    heroH1: ['System on.', 'Invoice sent.', 'Commission done.'],
    heroSub: 'Solar installation invoices are high value and complex — panels, inverters, labour, STC rebates. SMASH builds the full invoice from a voice description in under 60 seconds.',
    appScreen: 'estimates-static',
    heroImage: '/images/segments/solar-installers-hero.jpg',
    tradePhotos: ['/images/segments/solar-installers-1.jpg', '/images/segments/solar-installers-2.jpg'],
    answerQuestion: 'Best invoicing app for solar installers',
    answerText: 'SMASH handles complex solar installation invoicing — panels, inverter, racking, labour, and STC rebates on the one invoice — from a voice description. High-value, multi-line invoices generated from your phone in under 60 seconds, GST-compliant and professionally formatted.',
    problemTitle: 'The solar installer invoicing problem',
    problems: [
      { problem: 'High-value invoices with many components', reality: 'Panels, inverter, racking, isolators, labour, STC rebate — manually entered line by line.' },
      { problem: 'STC rebate deduction', reality: 'The rebate reduces the client\'s payment. Showing it correctly on the invoice takes careful formatting.' },
      { problem: 'Commission and installation split', reality: 'Commissioning on a separate day, invoiced separately. Remembering what was on the first invoice.' },
      { problem: 'Sub-contracting for solar companies', reality: 'Labour-only invoices to the solar co. Different format, same hassle.' },
    ],
    voiceExamples: [
      { voice: '"6.6kW system at the Dee Why property. 18 panels LG 370W, SolarEdge 5kW inverter with optimisers, standard residential install. Two crew, one day. Deduct 32 STC rebate."', result: '6.6kW solar install — 18× LG 370W + SolarEdge 5kW + install (2 crew) − 32 STC rebate = $6,890.00 + GST' },
      { voice: '"Sub-contract install labour for SolarPath at the Liverpool job. 10kW system, two crew, two days. Bill at the commercial sub-contract rate."', result: 'Solar install labour — 2 crew × 2 days @ $450/crew-day = $1,800.00 + GST' },
      { voice: '"Battery storage add-on at the existing Hurstville system. Tesla Powerwall 2, supply and install, 4 hours labour."', result: 'Battery storage install — Tesla Powerwall 2 + 4 hrs @ $130/hr = $10,120.00 + GST' },
    ],
    features: [
      { title: 'STC rebate as a line item', body: 'Add the STC rebate as a negative line item. Describe the number of STCs and SMASH deducts the correct amount.' },
      { title: 'Panel, inverter, and racking pricing', body: 'Set your equipment prices in the catalog. Mention brand, model, and quantity — SMASH prices it all.' },
      { title: 'Crew and labour rates', body: 'Set your crew day rate. Mention crew size and days — SMASH multiplies correctly.' },
      { title: 'Sub-contract invoice format', body: 'Invoice solar companies for labour-only sub-contract work at your agreed rate.' },
      { title: 'Quote and invoice', body: 'Quote before the install. Invoice on commissioning day. Both from the same voice input.' },
      { title: 'GST compliant', body: 'High-value installs need perfect tax invoices. Every SMASH invoice is ATO-compliant.' },
    ],
    blogPosts: [
      { slug: 'voice-to-estimate-build-bids-without-pen', title: 'Build Bids Without a Pen', desc: 'Quote the system on site. Client gets the number while you\'re still at the property.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Invoices Paid Faster', desc: 'High-value installs need the invoice on the day of commissioning. Here\'s why timing matters.' },
      { slug: 'best-quote-and-invoice-software-for-tradies', title: 'Best Quote & Invoice Software', desc: 'What separates great invoicing from frustrating invoicing for trade businesses.' },
    ],
    faqs: [
      { q: 'Can I include STC rebates as a deduction on the invoice?', a: 'Yes. Add the STC rebate as a negative line item in your pricing catalog. Describe the number of STCs and SMASH deducts the correct amount.' },
      { q: 'Can I price individual panels, inverters, and racking separately?', a: 'Yes. Add each equipment type to your pricing catalog. Mention brand, model, and quantity — SMASH prices them all as separate line items.' },
      { q: 'I do sub-contract labour for solar companies. Can SMASH invoice for that?', a: 'Yes. Set your sub-contract labour rate. Invoice the solar company for crew days exactly as you would any other job.' },
      { q: 'Can I quote the system before the install?', a: 'Yes. Describe the system and labour to generate a quote. Convert to invoice on commissioning day.' },
      { q: 'Is the invoice format suitable for finance applications?', a: 'Yes. SMASH generates a fully itemised GST-compliant tax invoice. Many clients use solar finance — the invoice meets all standard requirements.' },
      { q: 'Does SMASH sync with Xero or QuickBooks?', a: 'Yes. Every invoice syncs automatically to your accounting software. High-value installs with complex line items all flow through correctly.' },
    ],
    ctaH1: ['Invoice commissioned', 'on the day.'],
    ctaSub: 'Free to download. No credit card. First invoice in minutes.',
    relatedSlugs: ['electricians', 'hvac', 'plumbers'],
  },

  // ─────────────────────────────────────────────
  // RUBBISH REMOVAL
  // ─────────────────────────────────────────────
  {
    slug: 'rubbish-removal',
    name: 'Rubbish Removal Services',
    tradeLabel: 'For Rubbish Removal',
    seo: {
      title: 'Invoicing for Rubbish Removal | Junk Removal Invoice App | SMASH',
      description: 'Invoice rubbish removal jobs from your phone. By the load, by the hour, tip fees — voice-to-invoice in under 60 seconds. GST-compliant PDFs.',
      keywords: 'rubbish removal invoice, junk removal invoice, waste removal invoice app, hard rubbish invoice, rubbish collection quote',
      ogTitle: 'Invoicing for Rubbish Removal — SMASH',
      ogDescription: 'Load cleared. Invoice sent. Next job.',
    },
    heroH1: ['Load cleared.', 'Invoice sent.', 'Next pickup.'],
    heroSub: 'Rubbish removal is fast-paced — multiple jobs per day, variable load sizes, tip fees. SMASH invoices every job from your phone in under 60 seconds, between collections.',
    appScreen: 'invoices',
    heroImage: '/images/segments/rubbish-removal-hero.jpg',
    tradePhotos: ['/images/segments/rubbish-removal-1.jpg', '/images/segments/rubbish-removal-2.jpg'],
    answerQuestion: 'Best invoicing app for rubbish removal services',
    answerText: 'SMASH is perfect for rubbish removal businesses with multiple daily jobs and variable pricing. Set your load rates, hourly rates, and tip fees once. Describe the job out loud and SMASH builds a complete GST-compliant invoice from your phone in under 60 seconds.',
    problemTitle: 'The rubbish removal invoicing problem',
    problems: [
      { problem: 'Variable load sizes per job', reality: 'Quarter load, half load, full load, plus tip fees. Three numbers to calculate on a phone.' },
      { problem: '6 jobs in a day', reality: 'Invoice all 6 at end of day? Or let it pile up and forget the details.' },
      { problem: 'Tip fees vary per load', reality: 'Soil costs more than general waste. Green waste is different again. All from memory.' },
      { problem: 'Labour + truck + disposal all on one invoice', reality: 'Three components per job. Typing them out while sitting in a truck.' },
    ],
    voiceExamples: [
      { voice: '"Full truck load clearance at the Glebe property. General household waste, half a load of soil, garden waste. Tip fees for mixed load. Two hours labour."', result: 'Full load clearance — 2 hrs @ $90/hr + full load rate + mixed tip fee = $590.00 + GST' },
      { voice: '"Hard rubbish collection at 44 Smith Street. Old furniture, mattress, and a broken TV. Half load, residential rate."', result: 'Hard rubbish pickup — half load @ $180 + TV disposal fee = $200.00 + GST' },
      { voice: '"Commercial site cleanout at the Newtown development. Three full loads, construction waste, tip fees for builder\'s rubble. Day rate for two crew."', result: 'Commercial site cleanout — 3× full loads + builder\'s rubble tip fee × 3 + 2× crew = $1,650.00 + GST' },
    ],
    features: [
      { title: 'Load-based pricing', body: 'Set quarter, half, and full load rates. Mention the load size and SMASH applies the right price.' },
      { title: 'Tip fee pricing', body: 'Set your tip fees by waste type — general, soil, green, construction. Mention the waste type and SMASH prices it.' },
      { title: 'Multi-job days', body: 'Invoice after each pickup or batch at day\'s end. All jobs queued and ready to send.' },
      { title: 'Labour + truck + disposal', body: 'All three components from one description. Separate line items on one professional invoice.' },
      { title: 'Commercial and residential rates', body: 'Different rates for site cleanouts and residential pickups. Mention the job type and SMASH uses the right one.' },
      { title: 'Online payments', body: 'Clients pay from the invoice link. Get paid the same day the load is gone.' },
    ],
    blogPosts: [
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'Invoice between pickups, not at the end of a full day.' },
      { slug: 'stop-admin-sundays-voice-invoicing', title: 'Stop Admin Sundays', desc: 'If you\'re catching up on invoices over the weekend, voice invoicing was built to fix that.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Invoices Paid Faster', desc: 'Send the invoice the moment the load is gone. Here\'s why that timing matters.' },
    ],
    faqs: [
      { q: 'Can I set prices for different load sizes?', a: 'Yes. Add quarter, half, and full load rates to your pricing catalog. Mention the load size and SMASH applies the right price.' },
      { q: 'Can I include tip fees as a separate line item?', a: 'Yes. Add your tip fee rates per waste type to the catalog. Mention what type of waste and SMASH prices the tip fee separately.' },
      { q: 'How do I invoice for jobs with multiple waste types?', a: 'Describe each waste type in your voice input — general, soil, green, construction. SMASH lists them as separate line items with correct tip fees.' },
      { q: 'I have 6 pickups in a day. Can I invoice between each one?', a: 'Yes. Each invoice takes under 60 seconds. Invoice right after each job while the details are fresh.' },
      { q: 'Can I charge commercial clients more than residential?', a: 'Yes. Set separate residential and commercial rates. Mention the job type and SMASH applies the right pricing.' },
      { q: 'Can clients pay online from the invoice?', a: 'Yes. Every invoice includes a payment link. Clients pay by card — fast payment for fast service.' },
    ],
    ctaH1: ['Invoice every load.', 'After every load.'],
    ctaSub: 'Free to download. No credit card. First invoice in minutes.',
    relatedSlugs: ['gardeners', 'concreters', 'handymen'],
  },

  // ─────────────────────────────────────────────
  // IT REPAIR TECHNICIANS
  // ─────────────────────────────────────────────
  {
    slug: 'it-repair',
    name: 'IT Repair Technicians',
    tradeLabel: 'For IT Repair Technicians',
    seo: {
      title: 'Invoicing for IT Repair Technicians | Computer Repair Invoice App | SMASH',
      description: 'The fastest invoicing app for IT repair and computer technicians. Speak the job, send a GST-compliant invoice from your phone in under 60 seconds.',
      keywords: 'IT repair invoice app, computer repair invoicing, tech support invoice, mobile IT technician invoice, on-site IT repair invoice',
      ogTitle: 'Invoicing for IT Repair Technicians — SMASH',
      ogDescription: 'Callout done. Invoice sent. Before you pack up the laptop bag.',
    },
    heroH1: ['Fix done.', 'Invoice sent.', 'Next ticket.'],
    heroSub: 'Mobile IT techs run on callouts, hourly rates, and part markups. SMASH turns a 30-second voice description into a full GST-compliant invoice — sent from the client\'s carpark.',
    appScreen: 'invoice',
    heroImage: '/images/segments/it-repair-hero.jpg',
    tradePhotos: ['/images/segments/it-repair-1.jpg', '/images/segments/it-repair-2.jpg'],
    answerQuestion: 'Best invoicing app for IT repair technicians',
    answerText: 'SMASH suits mobile IT techs and small computer repair businesses that bill by callout + hourly + parts. Set your callout fee, hourly rate, and part markup once. Describe the job out loud and SMASH builds a line-itemised, GST-compliant invoice on your phone in under 60 seconds.',
    problemTitle: 'The IT callout invoicing problem',
    problems: [
      { problem: 'Callout + labour + parts on every job', reality: 'Three line items to remember, every time, typed on a phone.' },
      { problem: 'Remote vs on-site pricing', reality: 'Different rates for the same job depending on where you worked. Easy to get wrong.' },
      { problem: 'Small part markups', reality: 'A $14 cable becomes $22. Multiply that by every invoice — it adds up, and it gets forgotten.' },
      { problem: 'Business clients on terms', reality: 'Different rates, different payment terms, and a lot of "I\'ll send the invoice later" that becomes "I forgot."' },
    ],
    voiceExamples: [
      { voice: '"On-site callout at Harris Accounting. Replaced a failed SSD in the partner\'s laptop, restored from backup, 90 minutes work. New SSD is the 1TB I buy in at $80."', result: 'On-site callout fee + 1.5 hrs @ $140/hr + 1TB SSD (marked up) = $399.00 + GST' },
      { voice: '"Remote support for Lisa this morning. Fixed the Outlook profile, reset the VPN, about 45 minutes."', result: 'Remote support — 0.75 hrs @ $120/hr = $90.00 + GST' },
      { voice: '"Business rate for BetaPoint. Two hours on the server, replaced the UPS battery, standard markup on the battery."', result: 'On-site business rate — 2 hrs @ $160/hr + UPS battery (marked up) = $470.00 + GST' },
    ],
    features: [
      { title: 'Callout + hourly + parts', body: 'Three-line invoices by default. SMASH splits callout, labour, and parts automatically so every bill is easy for the client to read.' },
      { title: 'Remote vs on-site rates', body: 'Two hourly rates out of the box. Say "remote" or "on-site" and SMASH applies the right one.' },
      { title: 'Parts with markup', body: 'Store your buy price and markup rule once. SMASH calculates the line price every time.' },
      { title: 'Business vs residential', body: 'Per-client rates. Business clients get business rates automatically when you invoice them.' },
      { title: 'Payment terms per client', body: 'NET 7, NET 14, NET 30 — set per client and printed on the invoice.' },
      { title: 'Online payments', body: 'Residential clients pay by card from the invoice. Fast, no bank details over the phone.' },
    ],
    blogPosts: [
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'Callout, labour, parts — one voice note, one clean invoice.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Paid Faster', desc: 'Why sending from the client\'s carpark is worth four working days.' },
      { slug: 'why-tradies-hate-phones-for-admin', title: 'Why Typing on Phones Fails', desc: 'Thumb-typed invoices are the number one reason invoicing gets skipped.' },
    ],
    faqs: [
      { q: 'Can SMASH handle callout + labour + parts as separate lines?', a: 'Yes. SMASH splits a callout, hourly labour, and any parts into clean line items automatically — that is its default shape.' },
      { q: 'Can I store part markups instead of typing them each time?', a: 'Yes. Add parts to your pricing catalog with buy price and markup rule. SMASH calculates the sell price on every invoice.' },
      { q: 'Can I use different rates for remote vs on-site work?', a: 'Yes. Mention "remote" or "on-site" in the voice input — SMASH applies the matching rate.' },
      { q: 'Can I invoice business clients on NET 30?', a: 'Yes. Set payment terms per client; the terms appear on every invoice for that client automatically.' },
      { q: 'Does it work for remote-only MSPs?', a: 'Yes. You can use SMASH as a pure remote-support invoicer — callouts are optional.' },
      { q: 'Does it include GST correctly?', a: 'Yes. ATO-compliant tax invoices with ABN, GST breakdown, and sequential invoice numbers — by default.' },
    ],
    ctaH1: ['Every ticket.', 'Every callout.', 'Every part.'],
    ctaSub: 'Free to download. No credit card. Start invoicing in minutes.',
    relatedSlugs: ['appliance-repair', 'security-installers', 'handymen'],
  },

  // ─────────────────────────────────────────────
  // APPLIANCE REPAIR
  // ─────────────────────────────────────────────
  {
    slug: 'appliance-repair',
    name: 'Appliance Repair Technicians',
    tradeLabel: 'For Appliance Repair',
    seo: {
      title: 'Invoicing for Appliance Repair Technicians | Repair Invoice App | SMASH',
      description: 'Invoice appliance repair callouts from the driveway. Callout + labour + parts in one voice note. GST-compliant PDF in under 60 seconds.',
      keywords: 'appliance repair invoice app, whitegoods repair invoice, appliance technician invoicing, mobile repair invoice, fridge repair invoice',
      ogTitle: 'Invoicing for Appliance Repair — SMASH',
      ogDescription: 'Fridge fixed. Invoice sent. Before you leave the driveway.',
    },
    heroH1: ['Fridge fixed.', 'Invoice sent.', 'Before the van is packed.'],
    heroSub: 'Appliance repair is a callout-driven business with parts, labour, and diagnostic fees on every job. SMASH handles all three in a single voice note — no typing on the tailgate.',
    appScreen: 'estimates-static',
    heroImage: '/images/segments/appliance-repair-hero.jpg',
    tradePhotos: ['/images/segments/appliance-repair-1.jpg', '/images/segments/appliance-repair-2.jpg'],
    answerQuestion: 'Best invoicing app for appliance repair technicians',
    answerText: 'SMASH is built for callout-based appliance repair businesses — washing machines, fridges, ovens, dishwashers. Set your callout fee, hourly rate, and parts markup once. Describe the job, SMASH generates a GST-compliant invoice with labour, parts, and callout listed separately, sent in under 60 seconds.',
    problemTitle: 'The appliance repair invoicing problem',
    problems: [
      { problem: 'Callout fee on every job', reality: 'Always the same fee — always re-typed on every invoice.' },
      { problem: 'Part numbers and markups', reality: 'A $40 pump is a $72 line item. That maths should not happen in a hot laundry.' },
      { problem: 'Diagnostics-only callouts', reality: 'Some jobs are callout + diagnostic only — a common scenario that gets invoiced wrong half the time.' },
      { problem: '5+ callouts a day', reality: 'Invoice them tonight? Or forget which one had the second trip booked.' },
    ],
    voiceExamples: [
      { voice: '"Washing machine repair at 14 Grant Street. Replaced the drain pump, 45 minutes labour. Callout as normal."', result: 'Callout + 0.75 hrs labour + drain pump (marked up) = $245.00 + GST' },
      { voice: '"Fridge diagnostic at the Richmond apartment. Found a faulty compressor, quoted a repair but did not proceed. Diagnostic callout only."', result: 'Diagnostic callout only = $135.00 + GST' },
      { voice: '"Commercial oven at the Fitzroy cafe. Two hours work, new thermostat, part at standard markup. Commercial rate."', result: 'Commercial callout + 2 hrs @ commercial rate + thermostat = $585.00 + GST' },
    ],
    features: [
      { title: 'Callout fee defaults', body: 'Your callout fee is added automatically to every job. Different fees for weekend, after-hours, or distance? Set those as presets too.' },
      { title: 'Parts with markup', body: 'Store your parts catalog with buy price and markup. SMASH prices each part automatically when you mention it.' },
      { title: 'Diagnostic-only jobs', body: 'Clean diagnostic-only invoice format for callouts where the repair did not proceed. One voice cue away.' },
      { title: 'Residential vs commercial rates', body: 'Two rate sheets: residential and commercial. Mention the job type and SMASH uses the right one.' },
      { title: 'Multi-callout days', body: '5 jobs a day? Invoice each one from the van between callouts.' },
      { title: 'Online payments', body: 'Clients pay by card from the invoice link — no bank details over the phone while you pack up.' },
    ],
    blogPosts: [
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'Callout + labour + parts in under a minute.' },
      { slug: 'stop-admin-sundays-voice-invoicing', title: 'Stop Admin Sundays', desc: 'If you are still catching up on callouts on Sunday nights, voice invoicing was built for you.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Paid Faster', desc: 'Sending from the driveway is worth four working days on average.' },
    ],
    faqs: [
      { q: 'Can I include a callout fee on every invoice automatically?', a: 'Yes. Callout defaults can be on or off per trade. Set it once and every new invoice starts with your callout fee included.' },
      { q: 'Can I invoice a diagnostic-only callout?', a: 'Yes. Mention "diagnostic only" in the voice input and SMASH produces a diagnostic-only invoice with your callout fee.' },
      { q: 'Can I store part numbers and markups?', a: 'Yes. Parts catalog with buy price and markup rule. SMASH applies the markup on every invoice.' },
      { q: 'Can I use different rates for weekend or after-hours work?', a: 'Yes. Set preset rates — weekend, after-hours, public holiday — and mention the label in your voice note.' },
      { q: 'Does the customer pay online?', a: 'Yes. Every invoice includes a payment link; customers pay by card directly.' },
      { q: 'Is GST included correctly?', a: 'Yes. ATO-compliant invoices with ABN, GST breakdown per line, and sequential invoice numbers.' },
    ],
    ctaH1: ['Every callout.', 'Every repair.', 'Every part.'],
    ctaSub: 'Free to download. No credit card. First invoice in minutes.',
    relatedSlugs: ['it-repair', 'handymen', 'mobile-mechanics'],
  },

  // ─────────────────────────────────────────────
  // SECURITY INSTALLERS
  // ─────────────────────────────────────────────
  {
    slug: 'security-installers',
    name: 'Security System Installers',
    tradeLabel: 'For Security Installers',
    seo: {
      title: 'Invoicing for Security System Installers | CCTV & Alarm Invoice App | SMASH',
      description: 'Invoice alarm, CCTV, and access control installations on the spot. Voice-to-invoice with GST, ABN, and itemised labour + equipment. Under 60 seconds.',
      keywords: 'security installer invoice app, CCTV installation invoice, alarm system invoice, access control invoice, cabling invoice app',
      ogTitle: 'Invoicing for Security Installers — SMASH',
      ogDescription: 'System armed. Invoice sent. Before you leave the site.',
    },
    heroH1: ['System armed.', 'Invoice sent.', 'Before you lock up.'],
    heroSub: 'Alarm, CCTV, and access-control installs are labour-heavy with a lot of equipment lines. SMASH turns a 60-second voice note into a clean, line-itemised invoice — equipment priced, labour hours logged, GST handled.',
    appScreen: 'invoice',
    heroImage: '/images/segments/security-installers-hero.jpg',
    tradePhotos: ['/images/segments/security-installers-1.jpg', '/images/segments/security-installers-2.jpg'],
    answerQuestion: 'Best invoicing app for security system installers',
    answerText: 'SMASH fits alarm, CCTV, and access-control installers who quote and invoice a mix of equipment + labour + optional monitoring. Store your equipment catalog, labour rates, and service tiers once. Describe the job out loud and SMASH generates a GST-compliant invoice with every line priced correctly.',
    problemTitle: 'The security install invoicing problem',
    problems: [
      { problem: 'Lots of line items per job', reality: '8 cameras, 100m cable, one NVR, labour. Typed one finger at a time on a phone.' },
      { problem: 'Quote → invoice conversion', reality: 'Clients accept the quote; you still spend 15 minutes re-keying it as an invoice.' },
      { problem: 'Residential vs commercial pricing', reality: 'Different equipment tiers and labour rates. Easy to mix up on a busy day.' },
      { problem: 'Monitoring and maintenance add-ons', reality: 'Monthly monitoring, annual service — extra line items that routinely get forgotten.' },
    ],
    voiceExamples: [
      { voice: '"CCTV install at 12 Harrow Road. Four Hikvision 4MP bullets, one 8-channel NVR, 60 metres of Cat 6, half a day labour, residential rate."', result: '4× 4MP bullet + 8-ch NVR + 60m Cat 6 + 4 hrs @ residential rate = $1,980.00 + GST' },
      { voice: '"Alarm upgrade at the Smiths\'. Replaced the panel, added two motion sensors, keypad, two hours labour. Add 12-month monitoring."', result: 'Panel + 2× PIR + keypad + 2 hrs labour + 12 mo monitoring = $1,345.00 + GST' },
      { voice: '"Access control at the Southbank office. Two HID readers, controller, magnetic locks, cabling, six hours labour, commercial rate."', result: '2× HID reader + controller + 2× mag lock + cabling + 6 hrs @ commercial = $3,480.00 + GST' },
    ],
    features: [
      { title: 'Equipment catalog', body: 'Store every SKU you fit with buy price and markup. Mention a part and SMASH lists it at the right price.' },
      { title: 'Residential + commercial rates', body: 'Two labour rate cards that SMASH switches between based on the job type in your voice note.' },
      { title: 'Quote → invoice in one tap', body: 'Once a client accepts a quote, convert to a full invoice without re-keying anything.' },
      { title: 'Monitoring and service add-ons', body: 'Pre-defined recurring line items — 12-month monitoring, annual service — ready to append.' },
      { title: 'Cable runs by the metre', body: 'Store metre rates for Cat 6, coax, alarm cable. Mention metres and SMASH prices it.' },
      { title: 'GST-compliant PDFs', body: 'Every invoice is ATO-compliant with ABN, GST, sequential numbering — and looks tidy enough for commercial clients.' },
    ],
    blogPosts: [
      { slug: 'voice-to-quote-feature', title: 'Voice to Quote', desc: 'Turn a walk-through conversation into a priced quote, then convert the accepted quote to an invoice with one tap.' },
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'Long equipment lists, short invoicing time.' },
      { slug: 'why-tradies-hate-phones-for-admin', title: 'Why Typing on Phones Fails', desc: 'Typing 8 line items on a phone is exactly why installs get invoiced a week late.' },
    ],
    faqs: [
      { q: 'Can SMASH handle long equipment lists on one invoice?', a: 'Yes. Store your equipment catalog; mention each item in the voice note and SMASH lists every one as a priced line item.' },
      { q: 'Can I convert a quote to an invoice?', a: 'Yes. Once a client accepts the quote, convert it to a full invoice in one tap — no re-keying.' },
      { q: 'Can I charge different rates for residential vs commercial jobs?', a: 'Yes. Two rate cards, switched by the job type in your voice input.' },
      { q: 'Can I add recurring monitoring or service as a line item?', a: 'Yes. Pre-defined recurring items are one mention away.' },
      { q: 'Can I price cable by the metre?', a: 'Yes. Store metre rates for each cable type; SMASH multiplies by the metres you mention.' },
      { q: 'Is GST handled automatically?', a: 'Yes. ABN and GST are on every invoice by default.' },
    ],
    ctaH1: ['Every camera.', 'Every metre.', 'Every hour.'],
    ctaSub: 'Free to download. No credit card. First invoice in minutes.',
    relatedSlugs: ['electricians', 'it-repair', 'hvac'],
  },

  // ─────────────────────────────────────────────
  // FENCERS
  // ─────────────────────────────────────────────
  {
    slug: 'fencers',
    name: 'Fencing Contractors',
    tradeLabel: 'For Fencers',
    seo: {
      title: 'Invoicing for Fencing Contractors | Fencing Invoice App | SMASH',
      description: 'Quote and invoice fencing jobs by the metre. Posts, panels, gates, labour — voice-to-invoice in under 60 seconds. GST-compliant PDFs.',
      keywords: 'fencing invoice app, fence contractor invoice, colorbond fence quote app, timber fencing invoice, fencing quote',
      ogTitle: 'Invoicing for Fencers — SMASH',
      ogDescription: 'Last post in. Invoice sent. Before the ute is loaded.',
    },
    heroH1: ['Last post in.', 'Invoice sent.', 'Before the ute is loaded.'],
    heroSub: 'Fencing is priced by the metre, by the post, by the gate — and invoicing it at the desk means double handling. SMASH prices it while you walk the line, voice-first.',
    appScreen: 'quote',
    heroImage: '/images/segments/fencers-hero.jpg',
    tradePhotos: ['/images/segments/fencers-1.jpg', '/images/segments/fencers-2.jpg'],
    answerQuestion: 'Best invoicing app for fencing contractors',
    answerText: 'SMASH is built for fencing contractors who quote and invoice by the metre — Colorbond, timber paling, post-and-rail, pool fencing. Set your metre rates for each fence type once; describe the job and SMASH prices posts, panels, gates, and labour as separate line items on a GST-compliant invoice in under 60 seconds.',
    problemTitle: 'The fencing invoicing problem',
    problems: [
      { problem: 'Metres × rate × type', reality: 'Colorbond is one rate, timber another, pool glass a third — maths on a tailgate in 38°.' },
      { problem: 'Posts, panels, rails, gates', reality: 'Four part types on a single job, all priced separately.' },
      { problem: 'Removal and disposal of the old fence', reality: 'Always forgotten on the invoice — and sometimes forgotten on the quote.' },
      { problem: 'Gate hardware and custom extras', reality: 'Latches, drop bolts, self-closing hinges — small items that pile up and disappear from the bill.' },
    ],
    voiceExamples: [
      { voice: '"28 metres of 1.8m Colorbond at 44 Pine Street. One 900mm pedestrian gate, standard latch. Remove old timber fence, 28 metres, and disposal."', result: '28m Colorbond @ rate + 900mm gate + removal 28m + disposal = $5,840.00 + GST' },
      { voice: '"14 metres of treated pine paling, 1.8m high, residential rate. Two double-rail runs. Half a day labour for two."', result: '14m timber paling + 2× double-rail + 4 hrs × 2 labour = $2,180.00 + GST' },
      { voice: '"Pool fence at the Byron property. 32 metres of frameless glass, six gate panels, compliant latches. Commercial rate for labour, three days for two."', result: '32m frameless glass + 6× gate + compliant latch × 6 + 3 days × 2 commercial labour = quoted line items + GST' },
    ],
    features: [
      { title: 'Metre rates per fence type', body: 'Colorbond, timber paling, post-and-rail, pool glass — each with its own metre rate. Mention the type and SMASH uses the right one.' },
      { title: 'Gate catalog', body: 'Store standard gate sizes (single, double, sliding) with their own pricing. Mention a gate and it lands on the invoice.' },
      { title: 'Removal + disposal', body: 'Pre-defined removal rates by fence type. One voice cue adds both lines.' },
      { title: 'Hardware catalog', body: 'Latches, drop bolts, hinges — priced line items that stop being forgotten.' },
      { title: 'Residential vs commercial labour', body: 'Two labour rates with one voice switch.' },
      { title: 'Quote → invoice conversion', body: 'Once the client signs off on the quote, convert to an invoice without re-keying.' },
    ],
    blogPosts: [
      { slug: 'voice-to-quote-feature', title: 'Voice to Quote', desc: 'Walk the line, talk the job, print the quote.' },
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'Metres, posts, gates — one voice note, one clean invoice.' },
      { slug: 'how-to-get-invoices-paid-faster-tradie-secrets', title: 'Get Paid Faster', desc: 'Why same-day invoicing after a fencing job is worth real money.' },
    ],
    faqs: [
      { q: 'Can SMASH price by the metre?', a: 'Yes. Store metre rates for each fence type; SMASH multiplies by the metres you mention in the voice note.' },
      { q: 'Can I include removal of the old fence as a line item?', a: 'Yes. Removal rates per fence type are presets; one voice cue adds the removal + disposal lines.' },
      { q: 'Can I price gates and hardware separately?', a: 'Yes. Gates and hardware live in your catalog as priced items — mentioned once in the voice input, listed cleanly on the invoice.' },
      { q: 'Can I convert a quote to an invoice?', a: 'Yes. When the client accepts, convert the quote to a full invoice in one tap.' },
      { q: 'Does it work for pool fencing?', a: 'Yes. Frameless glass, semi-frameless, aluminium pool fence — each a separate type with its own metre rate. Compliant-latch and hinge hardware are priced presets.' },
      { q: 'Does it handle GST?', a: 'Yes. ATO-compliant invoices with ABN and GST — on by default.' },
    ],
    ctaH1: ['Every metre.', 'Every post.', 'Every gate.'],
    ctaSub: 'Free to download. No credit card. First invoice in minutes.',
    relatedSlugs: ['concreters', 'gardeners', 'handymen'],
  },
];

export const segmentBySlug = Object.fromEntries(segments.map(s => [s.slug, s]));
