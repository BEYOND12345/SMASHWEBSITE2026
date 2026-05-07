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
      title: 'Invoicing App for Cleaners Australia | SMASH Invoices',
      description: 'Invoice cleaning jobs from your phone or Gmail in under 60 seconds. Repeat weekly cleans, fixed-rate services, GST and payments handled.',
      keywords: 'invoicing app for cleaners, cleaning invoice app, cleaning invoice template, invoice app for cleaners Australia, repeat invoices for cleaners, cleaning business invoice, domestic cleaning invoice, commercial cleaning invoice',
      ogTitle: 'Invoicing App for Cleaners Australia | SMASH',
      ogDescription: 'Weekly cleans, end-of-lease jobs, add-ons and repeat clients — invoiced by voice in under 60 seconds.',
    },
    heroH1: ['Invoice sent', 'before you', 'load the van.'],
    heroSub: 'Cleaning businesses run on repeat clients, fixed-rate services and small add-ons. SMASH turns that work into invoices from the job site in under 60 seconds — no typing, no laptop, no end-of-week catch-up.',
    appScreen: 'estimates-static',
    heroImage: '/images/segments/cleaners-hero.jpg',
    tradePhotos: ['/images/segments/cleaners-1.jpg', '/images/segments/cleaners-2.jpg'],
    answerQuestion: 'What invoicing app do cleaners use?',
    answerText: 'Cleaners use SMASH to invoice repeat clients, weekly cleans, end-of-lease jobs and add-ons without typing the same details every week. Set your hourly, per-room or fixed-rate services once, then describe the clean by voice or generate it from Gmail. SMASH builds the GST-compliant invoice, adds the customer details, and sends the payment link in under 60 seconds.',
    problemTitle: 'The cleaning business invoicing problem',
    problems: [
      { problem: 'Same client, every week', reality: 'Typing the same address, service and price again for a regular clean.' },
      { problem: 'Fixed-rate services', reality: 'Standard clean, deep clean, oven clean, window add-on — all stored in notes instead of a proper catalog.' },
      { problem: '5 jobs on a Tuesday', reality: 'All invoiced at 9pm because there was no time between properties.' },
      { problem: 'End-of-lease checklists', reality: 'Ten line items to type on a phone after the hardest job of the week.' },
      { problem: 'Email enquiries', reality: 'A customer asks for a quote in Gmail, then you switch tabs just to build and send it.' },
      { problem: 'Clients who pay late', reality: 'Because the invoice got sent days after the clean and the payment window slipped.' },
    ],
    voiceExamples: [
      { voice: '"Repeat Mrs Harris weekly clean. Standard two bathroom clean plus oven add-on. Same price as last week."', result: 'Weekly house clean — standard package + oven add-on = saved client rate + GST' },
      { voice: '"End of lease at the Fitzroy apartment. Full clean including oven, windows, and carpet steam. Took four hours, charge the end-of-lease rate."', result: 'End-of-lease clean — 4 hrs @ end-of-lease rate, oven, windows, carpet steam = $380.00 + GST' },
      { voice: '"Commercial clean at the Southbank office. Twice weekly recurring, four hours, charge the commercial rate. First invoice for March."', result: 'Commercial office clean — recurring service, 4 hrs @ commercial rate = $300.00 + GST' },
    ],
    features: [
      { title: 'Repeat invoices', body: 'Same client, same clean, new week. Repeat the last invoice and adjust only what changed.' },
      { title: 'Fixed-rate services', body: 'Standard clean, deep clean, oven clean, windows, end-of-lease — save each service once and mention it by name.' },
      { title: 'Per-client pricing', body: 'Set individual rates for regular, commercial and end-of-lease clients. SMASH applies the right one automatically.' },
      { title: 'Gmail quote requests', body: 'Open a customer email, click SMASH in Gmail, and turn the enquiry into a quote without leaving the inbox.' },
      { title: 'Multi-job days', body: 'Invoice after each property or batch at day\'s end. SMASH keeps the job details ready to send whenever suits you.' },
      { title: 'Online payments', body: 'Clients pay via the invoice link — no chasing, no bank transfers, no explaining BSB numbers via text.' },
      { title: 'GST handled', body: 'Registered for GST? Every invoice includes it automatically, correctly calculated, ATO-compliant.' },
      { title: 'Xero + QuickBooks sync', body: 'Invoices flow straight to your accounting software. Your bookkeeper has everything without you touching a spreadsheet.' },
    ],
    blogPosts: [
      { slug: 'cleaning-invoice-template-australia', title: 'Cleaning Invoice Template Australia', desc: 'What to include on cleaner invoices: ABN, GST, service line items, payment terms and repeat-client details.' },
      { slug: 'repeat-invoices-for-cleaners', title: 'Repeat Invoices for Cleaners', desc: 'How weekly and fortnightly cleaners repeat the last invoice, change the add-ons, and send it before the next property.' },
      { slug: 'how-to-invoice-commercial-cleaning-clients', title: 'Commercial Cleaning Invoices', desc: 'How to invoice offices, strata and property managers with site details, service periods, GST and approval-ready line items.' },
    ],
    faqs: [
      { q: 'What is the best invoice app for cleaners?', a: 'The best invoice app for cleaners is one that handles repeat clients, fixed-rate services, GST, payment links and mobile invoicing. SMASH is built for that workflow: save your cleaning services once, describe the job by voice, and send the invoice in under 60 seconds.' },
      { q: 'Can I repeat the same cleaning invoice every week?', a: 'Yes. For weekly or fortnightly clients, SMASH can repeat the previous invoice with the same customer, job title and line items, dated today. Change only what is different, then send it.' },
      { q: 'Can I invoice different cleaning services as separate line items?', a: 'Yes. Set up your pricing catalog with services like vacuuming, mopping, bathroom deep clean, oven clean, window cleaning and end-of-lease packages. Mention them by voice and SMASH adds the right line items.' },
      { q: 'Can I quote cleaning jobs from Gmail?', a: 'Yes. With SMASH for Gmail, open the customer enquiry, click the SMASH icon or Generate Invoice button, and build a quote or invoice from the email without switching tabs.' },
      { q: 'I clean multiple properties in a day. Can I batch invoice?', a: 'Yes. Create each invoice after each job, or batch them at the end of the day. SMASH keeps a running list of your jobs so you can send them all in one session.' },
      { q: 'What if I charge different rates for different clients?', a: 'SMASH stores customer profiles with their specific rates. If a commercial client pays more than a residential one, that rate is saved per customer and applied when you invoice.' },
      { q: 'Do I need to be GST-registered to use SMASH?', a: 'No. SMASH works whether you\'re registered or not. If registered, invoices include GST. If you\'re under $75,000 turnover, invoices are formatted correctly without GST.' },
      { q: 'Can clients pay online through the invoice?', a: 'Yes. SMASH invoices include a payment portal link. Clients can pay online by card — no chasing, no bank details, no explaining BSB numbers.' },
      { q: 'I work alone. Is SMASH built for solo cleaners?', a: 'Yes. SMASH is built for self-employed service workers who do their own admin. No complicated team setup — just invoices, quotes, payments, customer history and accounting sync.' },
    ],
    ctaH1: ['Same clean.', 'New invoice.'],
    ctaSub: 'Start free on iOS or Chrome. Repeat weekly cleans, quote email enquiries, and send GST-ready invoices without the end-of-week admin pile.',
    relatedSlugs: ['handymen', 'gardeners', 'dog-groomers'],
  },

  // ─────────────────────────────────────────────
  // PLUMBERS
  // ─────────────────────────────────────────────
  {
    slug: 'plumbers',
    name: 'Plumbers',
    tradeLabel: 'For Plumbers',
    seo: {
      title: 'Invoicing App for Plumbers Australia | SMASH Invoices',
      description: 'Invoice plumbing jobs from the ute in under 60 seconds. Call-out fees, labour, materials markup, GST, quotes and Xero sync handled by voice.',
      keywords: 'invoicing app for plumbers, plumbing invoice app, plumber invoice template Australia, plumber call-out fee invoice, plumbing materials markup, invoice for plumbers, plumber quote app',
      ogTitle: 'Invoicing App for Plumbers Australia | SMASH',
      ogDescription: 'Call-out, labour, materials and GST - invoiced by voice before you leave the job site.',
    },
    heroH1: ['Invoice sent', 'before you', 'pack up.'],
    heroSub: 'Plumbing jobs are full of small parts, call-out fees, urgent work and approvals made on site. SMASH turns the job into a GST-ready invoice from your phone or Gmail in under 60 seconds - no laptop, no end-of-day admin pile.',
    appScreen: 'estimates',
    heroImage: '/images/segments/plumbers-hero.jpg',
    tradePhotos: ['/images/segments/plumbers-1.jpg', '/images/segments/plumbers-2.jpg'],
    answerQuestion: 'What invoicing app do plumbers use?',
    answerText: 'Plumbers use SMASH to invoice call-outs, emergency jobs, labour, materials markup and repeat maintenance work without typing it all after hours. Save your standard rates, call-out fees and common fittings once, then describe the job by voice from the ute. SMASH builds the GST-compliant invoice, separates labour and materials, adds the payment link, and can sync it to Xero or QuickBooks.',
    problemTitle: 'The plumbing invoicing problem',
    problems: [
      { problem: 'Call-out fee plus first hour', reality: 'The service call has a travel fee, minimum charge, labour and parts. A flat "plumbing work" line causes questions.' },
      { problem: 'Materials from memory', reality: 'Flexi hoses, valves, fittings, copper, PVC, thread seal and saddles get rounded down or forgotten.' },
      { problem: 'Emergency jobs at 11pm', reality: 'The invoice waits until morning, then the after-hours rate, drain gear and parts are fuzzy.' },
      { problem: 'Quote approved verbally', reality: 'A customer says yes at the sink or over Gmail, but the final invoice has no clear approval trail.' },
      { problem: 'Repeat maintenance clients', reality: 'Strata, cafes and property managers need the same site details, service history and payment terms every visit.' },
      { problem: 'Accounting double-handling', reality: 'You type the invoice on site, then retype it for Xero or QuickBooks later.' },
    ],
    voiceExamples: [
      { voice: '"Kitchen mixer replacement for Mrs Nguyen. Call-out fee, one and a half hours labour, Caroma mixer, two flexi hoses and thread seal. Mark materials up twenty percent."', result: 'Mixer tap replacement - call-out + 1.5 hrs labour + mixer, flexi hoses, thread seal + 20% materials markup = GST-ready invoice' },
      { voice: '"After-hours blocked drain at the Fitzroy restaurant. Emergency call-out, ninety minutes after-hours labour, drain snake equipment charge, customer approved by text."', result: 'Emergency blocked drain - after-hours call-out, labour, equipment charge, approval note and payment link' },
      { voice: '"Hot water system quote approved. Convert the 250 litre Rheem quote to invoice, add disposal fee and two extra tempering valve fittings."', result: 'Approved HWS quote converted to invoice with extra fittings, disposal fee, GST and customer history' },
      { voice: '"Repeat the monthly maintenance invoice for the Carlton cafe. Same backflow test and mixer service, add one replacement washer kit."', result: 'Repeat maintenance invoice - saved customer, site, standard service and one changed line item' },
    ],
    features: [
      { title: 'Call-out fees and labour', body: 'Save your standard call-out, first-hour, hourly and after-hours rates. Say which one applies and SMASH builds the invoice lines.' },
      { title: 'Materials markup', body: 'Common plumbing supplies - pipe, fittings, valves, hoses and consumables - can be saved with your markup so small parts stop disappearing.' },
      { title: 'Labour + materials together', body: 'Describe the job once. SMASH separates hours and parts into clear line items for customers, accountants and GST records.' },
      { title: 'Quote to invoice', body: 'Quote the job before work starts, record customer approval, then convert it to an invoice when the work is done.' },
      { title: 'Gmail quote requests', body: 'Open a plumbing enquiry in Gmail, use the Chrome extension, and turn the email into a quote without switching tabs.' },
      { title: 'Customer approval trail', body: 'Keep quote approvals, read receipts and customer history close to the invoice so fewer jobs turn into payment disputes.' },
      { title: 'Repeat maintenance jobs', body: 'For strata, cafes, rentals and repeat customers, reuse the last invoice and change only the parts or hours that changed.' },
      { title: 'Xero + QuickBooks sync', body: 'Starter and higher plans sync invoices to accounting software, so the ute invoice does not become a second admin job later.' },
    ],
    blogPosts: [
      { slug: 'plumbing-invoice-template-australia', title: 'Plumbing Invoice Template Australia', desc: 'What plumbers should include on invoices: licence number, call-out fee, labour, materials, markup, GST and payment terms.' },
      { slug: 'plumber-call-out-fee-invoice', title: 'Plumber Call-out Fee Invoices', desc: 'How to show call-out fees, first-hour charges, emergency rates and approvals without creating payment disputes.' },
      { slug: 'how-to-charge-materials-on-a-plumbing-invoice', title: 'Charging Plumbing Materials', desc: 'How to itemise fittings, consumables and materials markup so small parts do not vanish into labour.' },
    ],
    faqs: [
      { q: 'What is the best invoicing app for plumbers?', a: 'The best invoicing app for plumbers is one that handles call-out fees, labour, materials, GST, quotes and accounting sync from a phone. SMASH is built for that workflow: describe the plumbing job by voice, review the line items, and send the invoice in under 60 seconds.' },
      { q: 'Can SMASH handle plumbing materials pricing?', a: 'Yes. Save common plumbing materials such as pipe, fittings, valves, flexi hoses, washers and consumables with your own prices or markup. Mention them in the job description and SMASH adds them as line items.' },
      { q: 'Can I add a markup to plumbing materials?', a: 'Yes. Plumbers commonly charge materials at cost plus markup to cover buying time, storage, wastage and carrying cost. SMASH helps keep materials visible instead of burying them inside labour.' },
      { q: 'What if I need to invoice labour separately from parts?', a: 'Mention both in your description and they appear as distinct line items, which is what most customers, property managers and accountants expect to see.' },
      { q: 'I do emergency call-outs at night. Can I invoice from the ute?', a: 'Yes. Open SMASH, describe the emergency job, include the after-hours or call-out fee, and send the invoice before you drive away.' },
      { q: 'Can I turn a plumbing quote into an invoice?', a: 'Yes. Create a quote before work starts, capture customer approval, then convert the approved quote into an invoice when the job is done.' },
      { q: 'Can I quote plumbing jobs from Gmail?', a: 'Yes. With the SMASH Chrome extension, you can open a customer quote request in Gmail and turn the email into a quote or invoice draft without switching tools.' },
      { q: 'Can SMASH repeat invoices for maintenance plumbing clients?', a: 'Yes. For strata, cafes, landlords and repeat customers, start from the previous invoice and change only the new parts, hours or service notes.' },
      { q: 'Can I use SMASH alongside my accounting software?', a: 'Yes. Starter and higher plans include accounting sync with Xero and QuickBooks, so invoices created on site can flow into your books without retyping.' },
    ],
    ctaH1: ['Fixed the leak.', 'Invoice sent.'],
    ctaSub: 'Start free on iOS or Chrome. Send 5 invoices a month on the Free plan, or use Starter for unlimited invoices and accounting sync.',
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
      title: 'Invoicing App for Electricians Australia | SMASH Invoices',
      description: 'Invoice electrical jobs from the van in under 60 seconds. Call-outs, fault-finding, switchboards, materials, GST, quotes and Xero sync handled by voice.',
      keywords: 'invoicing app for electricians, electrician invoice app, electrician invoice template Australia, electrical contractor invoice, electrician call-out fee invoice, switchboard upgrade invoice, electrical materials invoice, electrician quote app',
      ogTitle: 'Invoicing App for Electricians Australia | SMASH',
      ogDescription: 'Call-out, labour, cable, fittings and GST - invoiced by voice before you leave the job site.',
    },
    heroH1: ['Invoice sent', 'before you', 'lock the van.'],
    heroSub: 'Electrical jobs are full of call-outs, fault-finding, small parts, certificates and approvals made on site. SMASH turns the job into a GST-ready invoice from your phone or Gmail in under 60 seconds - no laptop, no end-of-day admin pile.',
    appScreen: 'estimates',
    heroImage: '/images/segments/electricians-hero.jpg',
    tradePhotos: ['/images/segments/electricians-1.jpg', '/images/segments/electricians-2.jpg'],
    answerQuestion: 'What invoicing app do electricians use?',
    answerText: 'Electricians use SMASH to invoice call-outs, fault-finding, switchboard upgrades, smoke alarm installs, labour, cable, fittings and repeat maintenance work without typing it all after hours. Save your standard rates and common electrical materials once, then describe the job by voice from the van. SMASH builds the GST-compliant invoice, separates labour and materials, adds the payment link, and can sync it to Xero or QuickBooks.',
    problemTitle: 'The electrical invoicing problem',
    problems: [
      { problem: 'Fault-finding plus repair', reality: 'The job has diagnostic time, labour, parts and a note about what failed. A flat "electrical work" line invites questions.' },
      { problem: 'Materials from memory', reality: 'Cable, conduit, clips, junction boxes, RCDs, breakers, GPOs and smoke alarms get rounded down or forgotten.' },
      { problem: 'Emergency call-outs', reality: 'After-hours rates, attendance fees and customer approvals are clearest while you are still at the switchboard.' },
      { problem: 'Quote approved verbally', reality: 'A customer says yes on site or in Gmail, but the final invoice has no clear approval trail.' },
      { problem: 'Repeat maintenance clients', reality: 'Property managers, shops and strata sites need the same site details, service notes and payment terms every visit.' },
      { problem: 'Accounting double-handling', reality: 'You create the invoice on your phone, then retype the same line items into Xero or QuickBooks later.' },
    ],
    voiceExamples: [
      { voice: '"Switchboard upgrade at 15 Smith Street. Replace old board with new 20-circuit board, four RCDs, twelve breakers, three hours labour and standard call-out."', result: 'Switchboard upgrade - call-out + 3 hrs labour + 20-circuit board, 4 RCDs and 12 breakers = GST-ready invoice' },
      { voice: '"After-hours fault-finding at the Brunswick cafe. Emergency call-out, two hours after-hours labour, found loose neutral in the sub-board, customer approved by text."', result: 'Emergency fault repair - after-hours call-out, fault-finding labour, repair note, approval note and payment link' },
      { voice: '"Smoke alarm install for the Northcote rental. Six photoelectric alarms, two hours labour, compliance test completed and certificate emailed."', result: 'Smoke alarm install - labour, 6 alarms, compliance note, customer history and GST' },
      { voice: '"Repeat the quarterly maintenance invoice for the Carlton shop. Same test and tag, add two replacement GPOs and fifteen metres of conduit."', result: 'Repeat maintenance invoice - saved customer, site, standard service and changed materials' },
    ],
    features: [
      { title: 'Call-out fees and labour', body: 'Save standard, first-hour, after-hours and emergency rates. Say which one applies and SMASH builds the invoice lines.' },
      { title: 'Electrical materials catalog', body: 'Cable, conduit, breakers, RCDs, GPOs, switches, smoke alarms and consumables can be saved so small parts stop disappearing.' },
      { title: 'Labour + materials together', body: 'Describe the job once. SMASH separates hours and parts into clear line items for customers, accountants and GST records.' },
      { title: 'Quote to invoice', body: 'Quote the switchboard, fit-off or install before work starts, record customer approval, then convert it to an invoice when complete.' },
      { title: 'Gmail quote requests', body: 'Open an electrical enquiry in Gmail, use the Chrome extension, and turn the email into a quote without switching tabs.' },
      { title: 'Customer approval trail', body: 'Keep quote approvals, read receipts and customer history close to the invoice so fewer jobs turn into payment disputes.' },
      { title: 'Repeat maintenance jobs', body: 'For rentals, shops, strata and scheduled maintenance, reuse the last invoice and change only the parts or hours that changed.' },
      { title: 'Xero + QuickBooks sync', body: 'Starter and higher plans sync invoices to accounting software, so the van invoice does not become a second admin job later.' },
    ],
    blogPosts: [
      { slug: 'electrician-invoice-template-australia', title: 'Electrician Invoice Template Australia', desc: 'What electricians should include on invoices: licence number, call-out fee, labour, materials, GST and payment terms.' },
      { slug: 'electrician-call-out-fee-invoice', title: 'Electrician Call-out Fee Invoices', desc: 'How to show standard, emergency and after-hours call-out fees without creating payment disputes.' },
      { slug: 'how-to-invoice-switchboard-upgrades', title: 'Switchboard Upgrade Invoices', desc: 'How to invoice switchboard upgrades with labour, boards, RCDs, breakers, certificates, GST and approvals.' },
    ],
    faqs: [
      { q: 'What is the best invoicing app for electricians?', a: 'The best invoicing app for electricians is one that handles call-out fees, labour, materials, GST, quotes and accounting sync from a phone. SMASH is built for that workflow: describe the electrical job by voice, review the line items, and send the invoice in under 60 seconds.' },
      { q: 'Can SMASH handle electrical materials pricing?', a: 'Yes. Save common electrical materials such as cable, conduit, RCDs, breakers, switches, GPOs, smoke alarms and consumables with your own prices or markup. Mention them in the job description and SMASH adds them as line items.' },
      { q: 'Can I invoice emergency electrical call-outs?', a: 'Yes. Save standard, after-hours and emergency call-out rates. Mention the call-out type by voice and SMASH adds the correct fee, labour rate and job notes to the invoice.' },
      { q: 'What if I need to invoice labour separately from materials?', a: 'Mention both in your description and they appear as distinct line items, which is what most customers, property managers and accountants expect to see.' },
      { q: 'Can I turn an electrical quote into an invoice?', a: 'Yes. Create a quote before work starts, capture customer approval, then convert the approved quote into an invoice when the job is done.' },
      { q: 'Can I quote electrical jobs from Gmail?', a: 'Yes. With the SMASH Chrome extension, you can open a customer quote request in Gmail and turn the email into a quote or invoice draft without switching tools.' },
      { q: 'Can SMASH repeat invoices for electrical maintenance clients?', a: 'Yes. For property managers, shops, strata and repeat customers, start from the previous invoice and change only the new parts, hours or service notes.' },
      { q: 'Do SMASH invoices work for GST and accounting?', a: 'Yes. Every SMASH invoice can include ABN, GST and clear line items. Starter and higher plans include accounting sync with Xero and QuickBooks.' },
      { q: 'What if I do sub-contracting for a builder?', a: 'Sub-contractor invoices work the same way: describe the work scope, hours, materials and site details. SMASH generates the compliant invoice for the builder or principal contractor.' },
    ],
    ctaH1: ['Power back on.', 'Invoice sent.'],
    ctaSub: 'Start free on iOS or Chrome. Send 5 invoices a month on the Free plan, or use Starter for unlimited invoices and accounting sync.',
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
      title: 'Invoicing App for Handymen Australia | SMASH Invoices',
      description: 'Invoice handyman jobs from site in under 60 seconds. Odd jobs, call-out fees, labour, materials, quotes, GST and Xero sync handled by voice.',
      keywords: 'invoicing app for handymen, handyman invoice app, handyman invoice template Australia, handyman call-out fee invoice, handyman materials invoice, odd jobs invoice, maintenance invoice app',
      ogTitle: 'Invoicing App for Handymen Australia | SMASH',
      ogDescription: 'Odd jobs, labour, hardware and GST - invoiced by voice before the next job.',
    },
    heroH1: ['Every job different.', 'Every invoice', 'in 60 seconds.'],
    heroSub: 'Handymen do it all: flat-pack assembly, flyscreen repairs, fence fixes, door hardware, patching, painting and small maintenance jobs. SMASH turns that mixed work into a GST-ready invoice from your phone or Gmail in under 60 seconds - no typing, no laptop, no Sunday admin pile.',
    appScreen: 'estimates-static',
    heroImage: '/images/segments/handymen-hero.jpg',
    tradePhotos: ['/images/segments/handymen-1.jpg', '/images/segments/handymen-2.jpg'],
    answerQuestion: 'What invoicing app do handymen use?',
    answerText: 'Handymen use SMASH to invoice mixed jobs, call-out fees, hourly labour, fixed-price maintenance and hardware materials without typing every detail after work. Save your rates and common materials once, then describe the job by voice from the ute or create a quote from Gmail. SMASH builds the GST-compliant invoice, itemises labour and materials, adds the payment link, and can sync it to Xero or QuickBooks.',
    problemTitle: 'The handyman invoicing problem',
    problems: [
      { problem: 'No two jobs look the same', reality: 'One invoice is a flyscreen, the next is a gate latch, the next is patching plaster. Generic templates make every job feel like a workaround.' },
      { problem: 'Small jobs still need proper invoices', reality: 'A $95 job is easy to put off. Do that six times a week and cashflow, records and follow-up all get messy.' },
      { problem: 'Labour and hardware get blended together', reality: 'Hinges, latches, screws, sealant and tip fees disappear into a vague labour line, which makes margins harder to protect.' },
      { problem: 'Quote requests arrive in Gmail', reality: 'Customers send photos and job notes by email, then you retype them into a quote or invoice later.' },
      { problem: 'Multi-job days create admin at night', reality: 'Six small jobs can become six invoices after dinner unless each one is captured before you leave the driveway.' },
    ],
    voiceExamples: [
      { voice: '"Flat-pack assembly for Sarah in Mosman. King bed frame, two bedside tables and wardrobe with mirror doors. Two and a half hours labour, fixed-price assembly rate."', result: 'Flat-pack assembly - 2.5 hrs labour, fixed assembly rate, GST and payment link ready.' },
      { voice: '"Fence gate repair at 14 Palmer Street. Replaced three palings, rehung the gate, fitted a new latch. One hour labour plus Bunnings materials."', result: 'Fence gate repair - labour, palings, latch and materials markup shown as separate line items.' },
      { voice: '"Odd jobs at the Surry Hills apartment. Hung four picture frames, fixed a sticking bedroom door and replaced a toilet seat. One and a half hours, customer approved on site."', result: 'General maintenance - 1.5 hrs labour, toilet seat supply, approval note and due date included.' },
      { voice: '"Repeat the West End property manager rate. Patch two plaster holes, replace door stop, add call-out fee, send to accounts with 14-day terms."', result: 'Property maintenance invoice - saved client, call-out fee, labour, materials and account terms applied.' },
    ],
    features: [
      { title: 'Voice invoices for varied work', body: 'No rigid job category. Say what you fixed, installed or assembled and SMASH turns it into clear invoice line items.' },
      { title: 'Hourly, fixed and call-out pricing', body: 'Use hourly rates, fixed-price services, minimum call-outs and mixed pricing on the same invoice without manual calculation.' },
      { title: 'Hardware and materials catalog', body: 'Save common parts such as hinges, latches, flyscreen mesh, sealant, screws and tip fees with your own prices or markup.' },
      { title: 'Gmail quote requests', body: 'Use the Chrome extension to turn emailed job details and photos into a quote without retyping the customer request.' },
      { title: 'Approval and read receipts', body: 'Send quotes for approval, convert approved work to invoices, and see when customers have opened the invoice.' },
      { title: 'Accounting sync', body: 'Starter and higher plans sync invoices to Xero or QuickBooks, so small jobs do not become bookkeeping cleanup later.' },
    ],
    blogPosts: [
      { slug: 'handyman-invoice-template-australia', title: 'Handyman Invoice Template Australia', desc: 'What handymen should include on invoices: ABN, job address, labour, materials, call-out fees, GST and payment terms.' },
      { slug: 'handyman-materials-and-call-out-fees', title: 'Handyman Materials and Call-out Fees', desc: 'How to invoice small hardware, minimum charges, travel and call-outs without losing margin on odd jobs.' },
      { slug: 'handymen-multi-skill-voice-invoicing-tradie', title: 'Voice Invoicing for Handymen', desc: 'Why voice invoicing suits handymen who move between assembly, repairs, maintenance and small trade jobs.' },
    ],
    faqs: [
      { q: 'What is the best invoicing app for handymen?', a: 'The best invoicing app for handymen is one that handles varied jobs, call-out fees, labour, small materials, quotes, payment links and accounting sync from a phone. SMASH is built for that workflow: describe the job by voice, review the line items, and send the invoice in under 60 seconds.' },
      { q: 'Can SMASH invoice odd jobs and mixed maintenance work?', a: 'Yes. SMASH does not force you into one trade category. You can invoice assembly, repairs, patching, hanging, door hardware, garden maintenance and general property work from plain-English voice descriptions.' },
      { q: 'Can I charge call-out fees or minimum job fees?', a: 'Yes. Save standard call-out, travel or minimum job fees in your pricing catalog. Mention the fee by voice and SMASH adds it as its own line item.' },
      { q: 'Can I add hardware and Bunnings materials to invoices?', a: 'Yes. Save common hardware and consumables with your own prices or markup. Mention the items used and SMASH adds them to the invoice beside labour.' },
      { q: 'Can I quote handyman work before the client approves it?', a: 'Yes. Create a quote from voice or from a Gmail enquiry, send it for approval, then convert the approved quote into an invoice when the work is complete.' },
      { q: 'Does SMASH work for solo handymen?', a: 'Yes. SMASH is built for self-employed service workers who do their own admin. The Free plan includes 5 invoices per month, while Starter includes unlimited invoices and accounting sync.' },
    ],
    ctaH1: ['Every job invoiced.', 'Every time.'],
    ctaSub: 'Start free on iOS or Chrome. Send 5 invoices a month on the Free plan, or use Starter for unlimited invoices and Xero/QuickBooks sync.',
    relatedSlugs: ['gardeners', 'painters', 'cleaners'],
  },

  // ─────────────────────────────────────────────
  // PAINTERS
  // ─────────────────────────────────────────────
  {
    slug: 'painters',
    name: 'Painters & Decorators',
    tradeLabel: 'For Painters',
    seo: {
      title: 'Invoicing App for Painters Australia | SMASH Invoices',
      description: 'Invoice painting jobs from the ladder in under 60 seconds. Labour, prep, paint materials, multi-day jobs, GST, quotes and Xero sync handled by voice.',
      keywords: 'invoicing app for painters, painter invoice app, painting invoice template Australia, painter quote app, exterior painting invoice, interior painter invoice, painting materials invoice, multi-day paint job invoice',
      ogTitle: 'Invoicing App for Painters Australia | SMASH',
      ogDescription: 'Labour, prep, paint materials and GST — invoiced by voice before the brushes are clean.',
    },
    heroH1: ['Paint done.', 'Invoice sent.', 'Next job.'],
    heroSub: 'Interior, exterior, prep work, primer, topcoat — describe the job out loud and SMASH builds a complete, itemised invoice from your phone before you clean the brushes.',
    appScreen: 'estimates',
    heroImage: '/images/segments/painters-hero.jpg',
    tradePhotos: ['/images/segments/painters-1.jpg', '/images/segments/painters-2.jpg'],
    answerQuestion: 'What invoicing app do painters use?',
    answerText: 'Painters use SMASH to invoice interior and exterior jobs, prep work, prime and topcoat, paint supplies and multi-day jobs without typing it all at the end of the week. Save your day rate, hourly rate, common paint brands and material markup once, then describe the job by voice from the ladder. SMASH builds the GST-compliant invoice, separates labour, prep and materials, notes the colour and product, adds the payment link, and can sync it to Xero or QuickBooks.',
    problemTitle: 'The painting invoicing problem',
    problems: [
      { problem: 'Labour, prep and materials on one job', reality: 'Three things to price, four line items to type, on a phone, with paint-stained hands.' },
      { problem: 'Multi-day jobs invoiced late', reality: 'A three-day interior finishes on Friday. Invoice goes out on Monday. Payment terms start late and cashflow slips.' },
      { problem: 'Paint quantities from memory', reality: 'Ten litres or twelve? Two coats or three? The margin disappears when materials are guessed instead of recorded.' },
      { problem: 'Colour and product notes matter', reality: 'Clients and property managers ask what paint was used. That information lives in a notebook or memory instead of on the invoice.' },
      { problem: 'Repeat clients need consistent pricing', reality: 'A property manager who uses you every quarter should get the same line items and terms without rebuilding the invoice each time.' },
      { problem: 'Quote approved verbally on site', reality: 'A client says yes at the inspection, but the final invoice has no clear link to the approved scope or colour selection.' },
    ],
    voiceExamples: [
      { voice: '"Two-storey exterior repaint at the Newport property. Strip, fill, prime and two coats Dulux Weathershield. Six days labour, supplied 20 litres primer and 30 litres topcoat."', result: 'Exterior repaint — 6 days labour + primer 20L + Dulux Weathershield 30L + prep stages = GST-ready invoice with product notes' },
      { voice: '"Interior repaint at the St Kilda apartment. Living, dining, hallway and two bedrooms. Dulux Wash and Wear low sheen in Lexicon Half. Three days labour, materials supplied."', result: 'Interior repaint — 3 days @ day rate + Dulux W&W 15L × 2 cans, colour and finish noted on invoice' },
      { voice: '"Feature wall in the master bedroom. One coat, four hours labour, supplied Dulux Designer range in the client\'s colour."', result: 'Feature wall — 4 hrs labour + Dulux Designer 4L = invoice with product and colour recorded' },
      { voice: '"Quote for exterior weatherboard at the Geelong house. Strip, sand, fill, prime and two topcoats. Four days, supplying Haymes Solashield."', result: 'Approved exterior quote → invoice with Haymes Solashield, prep stages and GST included' },
    ],
    features: [
      { title: 'Voice invoices with colour notes', body: 'Describe the job, mention the brand, colour and finish. SMASH includes them on the invoice so clients and property managers have a permanent record.' },
      { title: 'Day rate and hourly pricing', body: 'Set your day rate for full-day jobs and hourly for smaller ones. Mention which applies and SMASH uses the right one.' },
      { title: 'Paint and materials catalog', body: 'Common paint brands, primer, filler, tape and drop sheets saved with your own prices or markup so materials stop disappearing from the bill.' },
      { title: 'Multi-day job invoicing', body: 'Invoice at the end of each day or send a single invoice when the job is complete. Add prep, prime and topcoat as separate line item stages.' },
      { title: 'Quote to invoice', body: 'Quote the scope before work starts, record client approval, then convert the approved quote to an invoice without retyping.' },
      { title: 'Gmail quote requests', body: 'Open a painting enquiry in Gmail, use the Chrome extension, and turn the email into a quote without switching tabs.' },
      { title: 'Repeat client pricing', body: 'Property managers and regular clients saved with standard rates and terms. Start from the last invoice and change only what changed.' },
      { title: 'Xero + QuickBooks sync', body: 'Starter and higher plans sync invoices to accounting software, so the site invoice does not become a second admin job later.' },
    ],
    blogPosts: [
      { slug: 'painter-invoice-template-australia', title: 'Painter Invoice Template Australia', desc: 'What painters should include on invoices: ABN, labour, prep, paint materials, colour notes, GST and payment terms.' },
      { slug: 'how-to-invoice-multi-day-painting-jobs', title: 'Invoicing Multi-Day Painting Jobs', desc: 'How to invoice interior and exterior repaints across multiple days without losing margin on labour and materials.' },
      { slug: 'voice-to-estimate-build-bids-without-pen', title: 'Build Bids Without a Pen', desc: 'How voice-to-estimate changes on-site quoting — describe the scope out loud and get a quote instantly.' },
    ],
    faqs: [
      { q: 'What is the best invoicing app for painters?', a: 'The best invoicing app for painters is one that handles multi-day jobs, labour, prep, paint materials, colour notes, GST and accounting sync from a phone. SMASH is built for that workflow: describe the painting job by voice, review the line items, and send the invoice in under 60 seconds.' },
      { q: 'Can I include paint brands and colours on invoices?', a: 'Yes. Mention the brand, product name and colour in your voice description. SMASH includes them on the invoice so clients and property managers have a permanent record of what was used.' },
      { q: 'Can I invoice multi-day painting jobs?', a: 'Yes. Invoice at the end of each day or wait until the job is complete and invoice the full scope. Add prep, prime, undercoat and topcoat stages as separate line items.' },
      { q: 'Can I charge different rates for prep work, painting and finishing?', a: 'Yes. Save prep rate, painting rate and day rate in your pricing catalog. Mention which stage applies in your voice description.' },
      { q: 'How do I invoice paint and materials on top of labour?', a: 'Save common paint brands and quantities with your own prices or markup. Mention what you supplied and SMASH adds the materials line items beside labour.' },
      { q: 'Can I turn a painting quote into an invoice?', a: 'Yes. Create a quote before work starts, record client approval, then convert the approved quote into an invoice when the job is done.' },
      { q: 'Can I invoice exterior and interior jobs at different rates?', a: 'Yes. Set different day rates or hourly rates for exterior and interior work. Mention the job type and SMASH applies the right pricing.' },
      { q: 'Can I repeat invoices for regular property manager clients?', a: 'Yes. Save the client and their rates. Start from the last invoice for that customer and change only the room scope, colour or date.' },
      { q: 'What if a job runs longer than quoted?', a: 'Record the actual hours and materials in your voice description. SMASH invoices what you say — you are always in control of the final figures before sending.' },
    ],
    ctaH1: ['Job done.', 'Invoice done.', 'Move on.'],
    ctaSub: 'Start free on iOS or Chrome. Send 5 invoices a month on the Free plan, or use Starter for unlimited invoices and accounting sync.',
    relatedSlugs: ['handymen', 'concreters', 'tilers'],
  },

  // ─────────────────────────────────────────────
  // GARDENERS / LANDSCAPERS
  // ─────────────────────────────────────────────
  {
    slug: 'gardeners',
    name: 'Gardeners & Landscapers',
    tradeLabel: 'For Gardeners',
    seo: {
      title: 'Invoicing App for Gardeners Australia | SMASH Invoices',
      description: 'Invoice gardening, lawn mowing and landscaping jobs from the ute in under 60 seconds. Repeat clients, green waste, materials, GST and Xero sync handled by voice.',
      keywords: 'invoicing app for gardeners, gardener invoice app, lawn mowing invoice app, gardening invoice template Australia, landscaper invoice, garden maintenance invoice, landscaping quote app, repeat invoices for gardeners',
      ogTitle: 'Invoicing App for Gardeners Australia | SMASH',
      ogDescription: 'Mowing, pruning, mulch, green waste and GST - invoiced by voice between properties.',
    },
    heroH1: ['Mower packed.', 'Invoice sent.', 'Next property.'],
    heroSub: 'Gardeners and landscapers work across repeat lawns, one-off cleanups, pruning, mulch, turf, green waste and seasonal maintenance. SMASH turns each job into a GST-ready invoice from your phone in under 60 seconds - before you drive to the next property.',
    appScreen: 'portal',
    heroImage: '/images/segments/gardeners-hero.jpg',
    tradePhotos: ['/images/segments/gardeners-1.jpg', '/images/segments/gardeners-2.jpg'],
    answerQuestion: 'What invoicing app do gardeners use?',
    answerText: 'Gardeners use SMASH to invoice lawn mowing, garden maintenance, pruning, green waste, landscaping materials and repeat clients without typing at night. Save fixed property rates, hourly rates, disposal fees and common materials once, then describe the job by voice from the ute. SMASH builds the GST-compliant invoice, adds the payment link, and can sync it to Xero or QuickBooks.',
    problemTitle: 'The gardening invoicing problem',
    problems: [
      { problem: 'Six to ten properties in a day', reality: 'You need invoices sent between jobs, not stacked up for a weekend session after the trailer is unloaded.' },
      { problem: 'Repeat clients at fixed rates', reality: 'The same fortnightly lawn should not require the same customer, address, service and price to be typed again.' },
      { problem: 'Green waste and disposal fees get missed', reality: 'Tip runs, green waste bags and soil disposal are real costs that disappear when the invoice is rushed.' },
      { problem: 'Landscaping materials need detail', reality: 'Turf, mulch, soil, plants and irrigation parts should be itemised so customers understand the quote or invoice.' },
      { problem: 'Seasonal work changes constantly', reality: 'Mowing, pruning, gutter clearing, mulching and cleanup all need different rates and line items across the year.' },
    ],
    voiceExamples: [
      { voice: '"Regular fortnightly mow and edge at 12 Banksia Close. Front and back, standard property rate, add green waste bag this week."', result: 'Repeat lawn maintenance - saved client rate, green waste add-on, GST and payment link ready.' },
      { voice: '"Landscaping install at Canning Vale new build. Supplied and laid 40 square metres buffalo turf, two cubic metres garden mix, three bags mulch, full day install."', result: 'Turf and landscaping - labour, turf, soil, mulch and delivery shown as separate line items.' },
      { voice: '"Hedge trim and garden cleanup at Miller Street office. Three hours labour, green waste disposal fee, send to property manager with 14-day terms."', result: 'Commercial garden cleanup - labour, disposal fee, site notes and account terms included.' },
      { voice: '"Repeat the monthly body corporate garden maintenance. Pruning, blower vac, weed spray and irrigation check. Same rate as last month."', result: 'Recurring strata maintenance - previous client, service scope and price repeated with today\'s date.' },
    ],
    features: [
      { title: 'Repeat property invoices', body: 'Save each customer, property, service scope and fixed rate. Repeat the last invoice and change only what was different.' },
      { title: 'Voice invoicing between properties', body: 'Record the lawn, cleanup or landscaping work before you start the drive. SMASH turns it into line items in under 60 seconds.' },
      { title: 'Materials and green waste', body: 'Save turf, mulch, soil, plants, irrigation parts, delivery and disposal fees with your own prices or markup.' },
      { title: 'Quotes from Gmail', body: 'Use the Chrome extension to turn emailed garden cleanup and landscaping enquiries into quotes without retyping the request.' },
      { title: 'Fixed, hourly and commercial rates', body: 'Use fixed lawn rates, hourly maintenance, day rates, strata terms or commercial rates from the same pricing catalog.' },
      { title: 'Payment links and accounting sync', body: 'Invoices include online payment links and can sync to Xero or QuickBooks on Starter and higher plans.' },
    ],
    blogPosts: [
      { slug: 'gardening-invoice-template-australia', title: 'Gardening Invoice Template Australia', desc: 'What gardeners should include on invoices: service address, lawn care, green waste, materials, GST and payment terms.' },
      { slug: 'lawn-mowing-repeat-invoices', title: 'Repeat Invoices for Lawn Mowing', desc: 'How regular mowing and garden maintenance clients can be invoiced from the last job with only add-ons changed.' },
      { slug: 'how-to-invoice-as-a-gardener-australia', title: 'How to Invoice as a Gardener', desc: 'A practical guide to invoicing gardening and landscaping jobs in Australia.' },
    ],
    faqs: [
      { q: 'What is the best invoicing app for gardeners?', a: 'The best invoicing app for gardeners is one that handles repeat properties, fixed lawn rates, green waste fees, landscaping materials, quotes, payment links and accounting sync from a phone. SMASH is built for that workflow and creates invoices by voice in under 60 seconds.' },
      { q: 'Can I repeat invoices for regular lawn mowing clients?', a: 'Yes. Save each client, property address, service scope and fixed rate. Repeat the previous invoice, change any add-ons such as green waste or pruning, then send it.' },
      { q: 'Can I invoice turf, mulch, soil and plants as separate line items?', a: 'Yes. Save landscaping materials with your own prices or markup. Mention the materials used and SMASH adds them to the invoice beside labour.' },
      { q: 'Can I add green waste or tip fees?', a: 'Yes. Add green waste bags, trailer disposal, soil removal or tip fees to your pricing catalog and mention them by voice when they apply.' },
      { q: 'Can I create quotes for landscaping jobs?', a: 'Yes. Create a quote from voice or from a Gmail enquiry, send it for approval, then convert the accepted quote into an invoice after the job.' },
      { q: 'Does SMASH work for solo gardeners and landscapers?', a: 'Yes. SMASH is built for self-employed service workers. The Free plan includes 5 invoices per month, and Starter includes unlimited invoices plus Xero and QuickBooks sync.' },
    ],
    ctaH1: ['Invoice every property.', 'Between properties.'],
    ctaSub: 'Start free on iOS or Chrome. Repeat lawn invoices, quote landscaping enquiries, and send GST-ready invoices before the trailer leaves the kerb.',
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
      title: 'Invoicing App for Mobile Mechanics Australia | SMASH Invoices',
      description: 'Invoice mobile mechanic jobs from the driveway in under 60 seconds. Labour, parts markup, call-outs, fluids, GST, quotes and Xero sync handled by voice.',
      keywords: 'invoicing app for mobile mechanics, mobile mechanic invoice app, mechanic invoice template Australia, mobile mechanic call-out fee invoice, mechanic parts markup invoice, auto repair invoice app, roadside mechanic invoice',
      ogTitle: 'Invoicing App for Mobile Mechanics Australia | SMASH',
      ogDescription: 'Labour, parts, fluids, call-outs and GST - invoiced by voice before you drive away.',
    },
    heroH1: ['Tools packed.', 'Invoice sent.', 'Drive on.'],
    heroSub: 'Mobile mechanic jobs mix diagnostics, labour, parts, fluids, call-out fees and approvals made in the driveway. SMASH turns that work into a GST-ready invoice from your phone in under 60 seconds - no laptop, no typing with greasy hands, no 10pm admin.',
    appScreen: 'invoice',
    heroImage: '/images/segments/mobile-mechanics-hero.jpg',
    tradePhotos: ['/images/segments/mobile-mechanics-1.jpg', '/images/segments/mobile-mechanics-2.jpg'],
    answerQuestion: 'What invoicing app do mobile mechanics use?',
    answerText: 'Mobile mechanics use SMASH to invoice diagnostics, servicing, roadside call-outs, labour, parts markup, fluids and fleet work without typing it all after hours. Save your hourly rates, call-out fees and common parts once, then describe the job by voice from the driveway or create a quote from Gmail. SMASH builds the GST-compliant invoice, separates labour and parts, adds the payment link, and can sync it to Xero or QuickBooks.',
    problemTitle: 'The mobile mechanic invoicing problem',
    problems: [
      { problem: 'Parts and labour on every invoice', reality: 'Oil, filters, pads, batteries, fluids, diagnostics and labour all need detail, but typing them into a phone in a driveway is slow.' },
      { problem: 'Parts markup gets guessed', reality: 'The difference between cost, markup and retail price gets fuzzy when you are working from memory at the end of the day.' },
      { problem: 'Call-out and roadside rates vary', reality: 'Standard driveway jobs, urgent breakdowns and fleet call-outs need different fees and terms.' },
      { problem: 'Customers approve work on site', reality: 'Extra repairs are agreed verbally, then the final invoice needs to show what changed and why.' },
      { problem: 'Fleet work needs clean records', reality: 'Vehicle registration, job notes, service items and account terms need to be clear enough for a fleet manager to approve.' },
    ],
    voiceExamples: [
      { voice: '"Service on the white Hilux in Penrith. Oil and filter change, new air filter, topped up coolant and wiper fluid. Forty-five minutes labour."', result: 'Logbook service - labour, oil, filter, air filter, coolant and wiper fluid itemised with GST.' },
      { voice: '"Front pads and rotors on the Mazda 3 in Blacktown. Two hours labour, supplied parts at cost plus 15 percent, customer approved before fitting."', result: 'Front brake service - labour, pads, rotors, parts markup and approval note included.' },
      { voice: '"Roadside battery replacement for fleet customer on the M7. Jump start, alternator test, supplied and fitted Century 70 amp hour battery, roadside call-out rate."', result: 'Roadside battery invoice - emergency call-out, test, battery supply and fleet terms applied.' },
      { voice: '"Diagnostic scan for Emma\'s Corolla. Check engine light, scan and clear codes, replace ignition coil number three, one hour labour."', result: 'Diagnostics and repair - scan fee, labour, ignition coil and vehicle notes separated.' },
    ],
    features: [
      { title: 'Labour and parts itemised', body: 'Describe the repair once. SMASH separates diagnostics, labour, parts, fluids and consumables so customers can approve the charge.' },
      { title: 'Parts markup and materials pricing', body: 'Save common parts and markup rules for batteries, filters, fluids, pads, rotors and consumables. Mention them by voice and SMASH prices them.' },
      { title: 'Call-out and roadside fees', body: 'Save standard, after-hours, roadside and fleet call-out rates. Say which applies and SMASH uses the right fee.' },
      { title: 'Vehicle and fleet records', body: 'Keep customer, vehicle, rego, service history, terms and repeat rates together for faster fleet invoicing.' },
      { title: 'Quote to invoice', body: 'Send a quote for larger repairs or Gmail enquiries, record approval, then convert the approved work into an invoice.' },
      { title: 'Payment links and accounting sync', body: 'Every invoice can include a payment link, and Starter and higher plans sync invoices to Xero or QuickBooks.' },
    ],
    blogPosts: [
      { slug: 'mobile-mechanic-parts-markup-invoice', title: 'Mobile Mechanic Parts Markup Invoices', desc: 'How mobile mechanics should show parts, fluids, markup and labour clearly on customer and fleet invoices.' },
      { slug: 'mobile-mechanic-call-out-fee-invoice', title: 'Mobile Mechanic Call-out Fee Invoices', desc: 'How to invoice roadside, after-hours and standard call-out fees without payment disputes.' },
      { slug: 'how-to-invoice-as-a-mobile-mechanic-australia', title: 'How to Invoice as a Mobile Mechanic', desc: 'A practical guide to mobile mechanic invoices, quotes, job details, parts and GST in Australia.' },
    ],
    faqs: [
      { q: 'What is the best invoicing app for mobile mechanics?', a: 'The best invoicing app for mobile mechanics is one that handles labour, parts, fluids, markup, call-out fees, vehicle records, quotes and accounting sync from a phone. SMASH is built for that workflow: describe the job by voice, review the line items, and send the invoice in under 60 seconds.' },
      { q: 'Can SMASH add parts and fluids as line items?', a: 'Yes. Save common mechanic parts and consumables with your own prices or markup. Mention oil, filters, batteries, pads, rotors, coolant or other parts and SMASH adds them beside labour.' },
      { q: 'Can I charge parts markup?', a: 'Yes. Set your standard parts markup in your pricing catalog. SMASH applies the markup when you mention supplied parts, so the invoice shows materials clearly instead of hiding them in labour.' },
      { q: 'Can I invoice roadside and after-hours call-outs?', a: 'Yes. Save standard, roadside, after-hours and emergency call-out rates. Mention the call-out type by voice and SMASH adds the correct fee.' },
      { q: 'Can I keep vehicle details on invoices?', a: 'Yes. Add vehicle notes such as make, model, registration, odometer or fleet asset number so customers and fleet managers can approve the invoice quickly.' },
      { q: 'Does SMASH sync mobile mechanic invoices to accounting software?', a: 'Yes. Starter and higher plans sync invoices to Xero or QuickBooks. The Free plan includes 5 invoices per month if you are just starting.' },
    ],
    ctaH1: ['Invoice from the', 'driveway. Not', 'the study.'],
    ctaSub: 'Start free on iOS or Chrome. Send 5 invoices a month on the Free plan, or use Starter for unlimited invoices and accounting sync.',
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
      title: 'Invoicing App for HVAC & Air Con Technicians Australia | SMASH',
      description: 'Invoice HVAC and air conditioning jobs from the van in under 60 seconds. Labour, refrigerant, parts, emergency call-outs, service agreements, GST and Xero sync by voice.',
      keywords: 'invoicing app for HVAC, HVAC invoice app, air conditioning invoice app, air con technician invoice Australia, refrigeration invoice, split system install invoice, HVAC emergency call-out invoice, service agreement invoice',
      ogTitle: 'Invoicing App for HVAC Technicians Australia | SMASH',
      ogDescription: 'Labour, refrigerant, parts, emergency call-outs and GST — invoiced by voice before you drive away.',
    },
    heroH1: ['System running.', 'Invoice sent.', 'Next job.'],
    heroSub: 'HVAC jobs have labour, refrigerant, parts, and call-out fees — all on one invoice. SMASH builds it from a voice description in under 60 seconds, sent from your phone before you drive away.',
    appScreen: 'customer-detail',
    heroImage: '/images/segments/hvac-hero.jpg',
    tradePhotos: ['/images/segments/hvac-1.jpg', '/images/segments/hvac-2.jpg'],
    answerQuestion: 'What invoicing app do HVAC technicians use?',
    answerText: 'HVAC and air con technicians use SMASH to invoice service calls, split system installs, refrigerant top-ups, emergency call-outs, parts and service agreements without typing it all after hours. Save your labour rates, refrigerant pricing, common parts and call-out fees once, then describe the job by voice from the van. SMASH builds the GST-compliant invoice, separates labour, refrigerant and parts, adds compliance notes, and can sync it to Xero or QuickBooks.',
    problemTitle: 'The HVAC invoicing problem',
    problems: [
      { problem: 'Refrigerant quantities to price accurately', reality: 'How many grams of R410A? What was your rate per gram? Guessing means margin leaks on every regas job.' },
      { problem: 'Emergency call-outs after hours', reality: 'A 10pm breakdown is invoiced the next morning. After-hours rates, attendance fees and approval notes go fuzzy overnight.' },
      { problem: 'Service and install on the same day', reality: 'Two different job types, two different rate cards, on one invoice that needs to be clear for the customer.' },
      { problem: 'Multi-unit commercial sites', reality: 'Office buildings with a dozen units need site notes, unit identifiers and per-unit billing — not one vague "AC service" line.' },
      { problem: 'Service agreements and recurring visits', reality: 'Annual contracts, quarterly maintenance and filter schedules need consistent invoicing with correct rates every time.' },
      { problem: 'Parts from the wholesaler', reality: 'Capacitors, contactors, filters and expansion valves have trade pricing and markup that gets estimated or forgotten under pressure.' },
    ],
    voiceExamples: [
      { voice: '"Air con service and regas at the Parramatta office. Daikin 7.1kW split system. Two hours labour, topped up with 600 grams R410A, replaced filter pad."', result: 'AC service + regas — 2 hrs labour + 600g R410A + filter pad = GST-ready invoice with refrigerant line item' },
      { voice: '"Emergency breakdown at the Bondi restaurant. Cold room compressor, after-hours call-out, three hours, replaced capacitor and contactor."', result: 'Emergency repair — after-hours call-out + 3 hrs fault labour + capacitor + contactor + payment link' },
      { voice: '"New split system supply and install at the Cronulla residential. 6kW Mitsubishi, standard single-phase install, four hours labour."', result: 'Split system install — supply + standard install + 4 hrs labour, GST and payment link ready' },
      { voice: '"Repeat quarterly service for the Melbourne office block. Twelve units, filter clean and check, same rate per unit as last quarter."', result: 'Quarterly service — saved client, 12 units, standard rate repeated with today\'s date and service notes' },
    ],
    features: [
      { title: 'Refrigerant pricing by gram or kilogram', body: 'Save R410A, R32 and R22 rates. Mention the quantity used and SMASH calculates the exact refrigerant line item.' },
      { title: 'After-hours and emergency rates', body: 'Separate rates for standard, after-hours and emergency call-outs. Say which applies and SMASH uses the right fee.' },
      { title: 'Labour, refrigerant and parts together', body: 'Describe the job once. SMASH separates hours, refrigerant, parts and consumables into clear line items for customers and accountants.' },
      { title: 'Multi-unit commercial invoicing', body: 'Invoice commercial sites with unit identifiers, site notes and per-unit service items so facility managers can approve clearly.' },
      { title: 'Quote to invoice for new installations', body: 'Quote supply and install before work starts, record approval, then convert the approved quote to an invoice when commissioned.' },
      { title: 'Service agreement invoicing', body: 'Quarterly, six-monthly and annual service contracts saved as repeat invoice templates with standard site rates and terms.' },
      { title: 'Gmail quote requests', body: 'Open an HVAC enquiry in Gmail, use the Chrome extension, and turn the email into a quote without switching tabs.' },
      { title: 'Xero + QuickBooks sync', body: 'Starter and higher plans sync invoices to accounting software so the van invoice does not become a second admin job later.' },
    ],
    blogPosts: [
      { slug: 'hvac-air-con-invoice-template-australia', title: 'HVAC Invoice Template Australia', desc: 'What HVAC and air con technicians should include on invoices: licence number, refrigerant, parts, labour, service notes, GST and payment terms.' },
      { slug: 'air-conditioning-emergency-call-out-invoice', title: 'Air Con Emergency Call-out Invoices', desc: 'How to invoice after-hours and emergency air conditioning call-outs with correct rates, parts, approval notes and GST.' },
      { slug: 'stop-double-handling-invoicing-on-the-job', title: 'Stop Double-Handling', desc: 'One step from job to invoice. No re-entering data between apps.' },
    ],
    faqs: [
      { q: 'What is the best invoicing app for HVAC technicians?', a: 'The best invoicing app for HVAC technicians is one that handles refrigerant pricing, labour, parts, emergency call-out rates, service agreements, GST and accounting sync from a phone. SMASH is built for that workflow: describe the job by voice, review the line items, and send the invoice in under 60 seconds.' },
      { q: 'Can I price refrigerant by the gram or kilogram?', a: 'Yes. Save your refrigerant rate per gram or kg in the pricing catalog. Mention the quantity used and SMASH calculates the exact cost as a clear line item.' },
      { q: 'Can I charge different rates for emergency and after-hours HVAC call-outs?', a: 'Yes. Set standard, after-hours and emergency call-out rates separately. Mention which applies in your voice description and SMASH uses the right fee.' },
      { q: 'Can I invoice multi-unit commercial air conditioning sites?', a: 'Yes. Invoice commercial sites with unit identifiers, site notes and per-unit service items so building managers and accounts teams can approve clearly.' },
      { q: 'Can I quote supply-and-install jobs before work starts?', a: 'Yes. Describe the system, installation type and labour. SMASH generates a quote to send for client approval, then convert it to an invoice when commissioned.' },
      { q: 'Can I invoice service agreements and recurring maintenance?', a: 'Yes. Save each commercial or residential customer\'s service scope, schedule and rates. Repeat the last invoice and update only the service date and any changed items.' },
      { q: 'Can I quote HVAC jobs from Gmail?', a: 'Yes. With the SMASH Chrome extension, open a customer enquiry in Gmail and turn it into a quote or invoice draft without switching tools.' },
      { q: 'What parts and consumables can I add to HVAC invoices?', a: 'Save capacitors, contactors, filters, expansion valves, drain hoses and other trade parts with your own pricing or markup. Mention them by voice and SMASH adds them as line items.' },
      { q: 'Does SMASH sync HVAC invoices to accounting software?', a: 'Yes. Starter and higher plans sync invoices to Xero or QuickBooks. Every invoice, including complex HVAC jobs with multiple line items, flows to your books automatically.' },
    ],
    ctaH1: ['System fixed.', 'Invoice out.', 'While it\'s fresh.'],
    ctaSub: 'Start free on iOS or Chrome. Send 5 invoices a month on the Free plan, or use Starter for unlimited invoices and accounting sync.',
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
      title: 'Invoicing App for Pest Control Operators Australia | SMASH',
      description: 'Invoice pest control treatments from the ute in under 60 seconds. Chemicals, treatments, quarterly visits, follow-up invoices, GST and Xero sync handled by voice.',
      keywords: 'invoicing app for pest control, pest control invoice app, pest controller invoice Australia, termite treatment invoice, quarterly pest control invoice, pest control quote app, chemical treatment invoice, pest inspection invoice',
      ogTitle: 'Invoicing App for Pest Control Operators Australia | SMASH',
      ogDescription: 'Treatment done. Chemicals noted. Invoice sent — before the ute is loaded.',
    },
    heroH1: ['Treatment done.', 'Invoice sent.', 'Ute loaded.'],
    heroSub: 'Pest control invoicing is complex — multiple treatments, follow-up visits, chemical quantities. SMASH builds the full invoice from a voice description in under 60 seconds.',
    appScreen: 'invoices',
    heroImage: '/images/segments/pest-control-hero.jpg',
    tradePhotos: ['/images/segments/pest-control-1.jpg', '/images/segments/pest-control-2.jpg'],
    answerQuestion: 'What invoicing app do pest control operators use?',
    answerText: 'Pest control operators use SMASH to invoice general treatments, termite work, quarterly visits, chemical line items and follow-up appointments without typing it all after hours. Save your standard treatment rates, chemical pricing, follow-up rates and commercial schedules once, then describe the job by voice from the ute. SMASH builds the GST-compliant invoice, separates treatments, chemicals and inspection fees, adds product notes, and can sync it to Xero or QuickBooks.',
    problemTitle: 'The pest control invoicing problem',
    problems: [
      { problem: 'Multiple treatment types per visit', reality: 'General pest, rodent baiting and roof void dusting all need separate line items — not a vague "pest treatment" total.' },
      { problem: 'Chemical quantities from memory', reality: 'How many litres of bifenthrin? What was your rate per litre? Guessing costs means margin leaks on every chemical-heavy job.' },
      { problem: 'Follow-up visits need lower rates', reality: 'The second visit is cheaper than the first. Setting the right rate manually when you have back-to-back jobs is easy to get wrong.' },
      { problem: 'Quarterly and annual programs', reality: 'Scheduled visits for residential and commercial clients need the same format, terms and product notes every time.' },
      { problem: 'Residential and commercial at different rates', reality: 'A domestic cockroach treatment and a commercial kitchen treatment are not the same job and should not have the same rate.' },
      { problem: 'Inspection reports and invoices created separately', reality: 'Two documents, two apps, double the time, when one system should handle both the report and the invoice.' },
    ],
    voiceExamples: [
      { voice: '"General pest treatment at the Chatswood townhouse. Cockroaches, spiders and ants. Interior spray, exterior perimeter, roof void dusting. Two hours standard rate, Bifenthrin applied."', result: 'General pest treatment — 2 hrs + interior spray + exterior + roof void dusting, chemical product noted = GST-ready invoice' },
      { voice: '"Termite pre-treatment at the new build in Kellyville. 120 lineal metres soil treatment, Termidor SC applied. Five hours labour, commercial rate."', result: 'Termite pre-treatment — 5 hrs + 120LM Termidor soil treatment, chemical line item and GST included' },
      { voice: '"Follow-up cockroach treatment at the commercial kitchen in Surry Hills. One hour, gel bait reapplication. Commercial follow-up rate."', result: 'Commercial follow-up — 1 hr @ commercial follow-up rate + bait reapplication, correct rate applied and GST calculated' },
      { voice: '"Repeat the quarterly pest control invoice for the CBD office building. Same general treatment, six zones, quarterly commercial rate."', result: 'Quarterly commercial invoice — saved client, six zones, standard service and rate repeated with today\'s date' },
    ],
    features: [
      { title: 'Treatment catalog', body: 'Save standard treatments — general pest, termite, rodent, bed bugs, cockroach gel and roof void dusting — with your own rates. Mention the treatment and SMASH prices it.' },
      { title: 'Chemical quantities and products', body: 'Save chemical pricing per litre or per application. Mention product and quantity used and SMASH adds it as a clear line item.' },
      { title: 'Follow-up and return visit pricing', body: 'Set a lower follow-up rate for return visits. Mention it is a follow-up and SMASH applies the correct rate automatically.' },
      { title: 'Quarterly and recurring invoices', body: 'Save each commercial or residential customer\'s service scope and schedule. Repeat the last invoice and change only what changed.' },
      { title: 'Residential and commercial rates', body: 'Two rate cards for different job types. Mention the site type and SMASH applies the right pricing.' },
      { title: 'Compliance and product notes', body: 'Add product names, application notes and safety details to invoices so customers and property managers have a record.' },
      { title: 'Quote to invoice for larger treatments', body: 'Quote termite barrier installs or large commercial treatments before work starts, then convert approved quotes into invoices.' },
      { title: 'Xero + QuickBooks sync', body: 'Starter and higher plans sync invoices to accounting software so the ute invoice does not become a second admin job later.' },
    ],
    blogPosts: [
      { slug: 'pest-control-invoice-template-australia', title: 'Pest Control Invoice Template Australia', desc: 'What pest control operators should include on invoices: licence number, treatment types, chemicals, follow-up rates, GST and payment terms.' },
      { slug: 'how-to-invoice-quarterly-pest-treatments', title: 'Invoicing Quarterly Pest Control Treatments', desc: 'How to invoice recurring quarterly and annual pest control contracts for residential and commercial clients without losing consistency.' },
      { slug: 'the-60-second-invoice-voice-to-invoice', title: 'The 60-Second Invoice', desc: 'How voice invoicing cuts end-of-job admin to under a minute.' },
    ],
    faqs: [
      { q: 'What is the best invoicing app for pest control operators?', a: 'The best invoicing app for pest control operators is one that handles multiple treatment types, chemical quantities, follow-up rates, quarterly contracts, GST and accounting sync from a phone. SMASH is built for that workflow: describe the job by voice, review the line items, and send the invoice in under 60 seconds.' },
      { q: 'Can I include chemical products and quantities as line items?', a: 'Yes. Save chemical pricing per litre or per application. Mention the product name and quantity used and SMASH adds them as a separate line item on the invoice.' },
      { q: 'How do I invoice follow-up pest control visits at a lower rate?', a: 'Set a follow-up rate in your pricing catalog. Say "follow-up visit" or "return visit" in your voice description and SMASH applies the correct lower rate automatically.' },
      { q: 'Can I invoice quarterly and recurring pest control contracts?', a: 'Yes. Save each client\'s service scope, schedule and rates. Repeat the last invoice and change only the date, service notes or any additional treatments.' },
      { q: 'Can SMASH handle different rates for residential and commercial pest jobs?', a: 'Yes. Set residential and commercial rates separately. Mention the job type or site in your description and the right rate is applied.' },
      { q: 'Can I add compliance and product application notes to invoices?', a: 'Yes. Add product names, active ingredients, application method and safety notes to invoice line items so customers and property managers have a complete record.' },
      { q: 'Can I quote termite treatment before work starts?', a: 'Yes. Create a quote from voice or a Gmail enquiry, send it for client approval, then convert the accepted quote into an invoice when the treatment is complete.' },
      { q: 'Can I quote pest control jobs from Gmail?', a: 'Yes. With the SMASH Chrome extension, open a customer enquiry in Gmail and turn it into a quote or invoice draft without switching tools.' },
      { q: 'Does SMASH sync pest control invoices to accounting software?', a: 'Yes. Starter and higher plans sync invoices to Xero or QuickBooks. The Free plan includes 5 invoices per month, which suits operators just starting out.' },
    ],
    ctaH1: ['Every treatment', 'invoiced. Every time.'],
    ctaSub: 'Start free on iOS or Chrome. Send 5 invoices a month on the Free plan, or use Starter for unlimited invoices and accounting sync.',
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
