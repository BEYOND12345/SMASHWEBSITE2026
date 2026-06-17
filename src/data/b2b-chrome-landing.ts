export const B2B_CHROME_LANDING = {
  path: '/b2b-gmail-quoting',
  canonical: 'https://smashinvoices.com/b2b-gmail-quoting',
  productName: 'SMASH for Gmail',
  chromeStoreUrl:
    'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel?utm_source=b2b-outreach&utm_medium=landing&utm_campaign=b2b-gmail-quoting',
  seo: {
    title: 'RFQ to Quote in Gmail — Suppliers & Wholesalers | SMASH',
    description:
      '30 quote requests at 20 minutes each is 10 hours of admin a day. SMASH reads the RFQ in Gmail, matches your catalog, you verify and send — under 60 seconds. Free to install.',
    keywords: '',
    ogTitle: 'RFQ to Quote in Gmail — Suppliers & Wholesalers | SMASH',
    ogDescription:
      'SMASH reads RFQs in Gmail, matches your catalog, builds the quote. You verify and send in under 60 seconds. Free to start.',
  },
  hero: {
    h1Lead: 'That email you just quoted?',
    h1Accent: "That's your whole day.",
    solution: 'SMASH reads the RFQ. Matches your catalog. Builds the quote.',
    payoff: 'You check it. Hit send. Under 60 seconds.',
    primaryCta: 'Install Free',
    secondaryCta: 'See how it works',
  },
  heroStrapline: 'Lives in Gmail. Works with Xero and QuickBooks. Free to start.',
  howItWorks: {
    eyebrow: 'How it works',
    steps: [
      'An RFQ lands in your inbox.',
      'You click SMASH in the Gmail sidebar.',
      'It reads the email, matches every line to your pricing, builds the quote.',
      'You verify. You send. Done.',
    ],
    closing: 'Not 20 minutes. Not even five. Under 60 seconds.',
  },
  testimonials: {
    eyebrow: 'From quoting desks',
    items: [
      {
        quote:
          'We stopped copy-pasting cutting lists into quotes. Scan the RFQ, verify the SKUs, send from Gmail. Twelve hours a week back on our desk.',
        name: 'Rohan T.',
        role: 'Building supplies',
        city: 'Melbourne',
      },
      {
        quote:
          'Uploaded our CSV once. Forty RFQs yesterday — every line matched our catalog. I am not retyping prices anymore.',
        name: 'Priya N.',
        role: 'Wholesale sales',
        city: 'Sydney',
      },
      {
        quote:
          'PDF purchase orders used to kill our afternoon. SMASH reads the attachment in the sidebar and pairs it to our pricing database.',
        name: 'James H.',
        role: 'Estimator',
        city: 'Brisbane',
      },
      {
        quote:
          'First supplier to reply with a proper quote again. That is how we win the order — SMASH made that normal.',
        name: 'Marcus L.',
        role: 'Sales desk',
        city: 'Perth',
      },
    ],
  },
  realCost: {
    eyebrow: 'The real cost',
    lead:
      'Thirty emails. Twenty minutes each. By the time you\'re done typing, someone else already sent theirs.',
    lines: ['30 quote requests a day.', '20 minutes each.', "That's 10 hours of admin. Every day."],
    body: 'SMASH turns each one into a 60-second verification pass.',
    assurance:
      'You still control every line before it goes out. Nothing sends without you.',
  },
  whatItReads: {
    eyebrow: 'What it reads',
    formats:
      'Plain-text RFQs. Structured line-item requests. PDF purchase orders. SKU-based orders.',
    messy: 'Messy formats. Vague descriptions. Mixed quantities.',
    promise: 'If a contractor sent it, SMASH can read it.',
    flagged:
      'Items it can\'t match are flagged for manual price entry before you send.',
    assurance: 'Nothing is guessed. Nothing is dropped.',
  },
  worksWith: {
    headline: 'Works with your pricing, your tools, your stack.',
    body:
      'Upload a SKU CSV or past invoice PDFs once. That\'s it — SMASH learns your rates and matches every RFQ from your catalog.',
  },
  workflowShowcases: [
    {
      id: 'email-to-sku-quote',
      anchor: 'workflow-email',
      eyebrow: 'Email RFQ',
      title: 'Plain-text email → matched quote',
      body: 'Watch SMASH read the open thread, map lines to your catalog, and build a quote you verify before send.',
      videoSrc: '/videos/email-quote-request-to-sku-quote.mp4',
      videoTitle: 'Email quote request to SKU-matched quote in Gmail',
    },
    {
      id: 'pdf-to-sku-quote',
      anchor: 'workflow-pdf',
      eyebrow: 'PDF attachment',
      title: 'PDF RFQ → catalog-matched quote',
      body: 'Watch SMASH parse the PDF in the sidebar, pair lines to your pricing database, and produce a send-ready quote.',
      videoSrc: '/videos/quote-request-pdf-sku-match.mp4',
      videoTitle: 'PDF quote request to SKU-matched quote in Gmail',
    },
  ],
  workflowIntro: {
    eyebrow: 'See it work',
    title: 'Email and PDF — same sidebar',
    body: 'Real Gmail workflows. Same catalog. Same verification pass.',
  },
  demoVideo: {
    id: 'M4zQQeICeyE',
    title: 'SMASH for Gmail — B2B order processing demo',
    headline: 'Full walkthrough',
    subheadline: 'From inbox to priced quote — without retyping a line.',
    uploadDate: '2026-01-15',
  },
  installCta: {
    eyebrow: 'Install free',
    primaryCta: 'Install Free',
    subtext: 'One install. Works inside Gmail from the first quote.',
  },
  faqs: [
    {
      q: 'Who is this for?',
      a: 'Suppliers and wholesalers with high-volume RFQ inboxes. If you quote from Gmail and the fastest reply wins, this is built for you.',
    },
    {
      q: 'What else does SMASH do?',
      a: 'Reads the open email or PDF attachment. Matches lines to your catalog. Flags anything it cannot pair. Builds a send-ready quote in the sidebar — you verify, then drop it into your reply. Connect Xero or QuickBooks to push finished quotes to your ledger in one click.',
    },
    {
      q: 'How does catalog setup work?',
      a: 'Upload a SKU CSV or import from an existing invoice once. Every quote draws from that list automatically. Update it whenever your prices change.',
    },
    {
      q: 'What formats can it read?',
      a: 'Plain-text RFQs, structured line-item emails, PDF purchase orders, and SKU-based orders — messy descriptions and mixed quantities included.',
    },
    {
      q: 'What if SMASH can\'t match a line item?',
      a: 'It flags the line before you send. You enter the price manually. Nothing is guessed. Nothing is dropped.',
    },
    {
      q: 'How fast is RFQ to quote?',
      a: 'Under 60 seconds once your catalog is loaded. Open the thread, verify matched lines, send — not 20 minutes of retyping.',
    },
    {
      q: 'Do I need Xero or QuickBooks?',
      a: 'No. SMASH runs standalone in Gmail. Connect Xero or QuickBooks only when you want completed quotes pushed to your ledger.',
    },
    {
      q: 'Is it free to start?',
      a: 'Yes. Install free — five quotes or invoices per month on the free plan. Upgrade when your inbox outgrows it.',
    },
    {
      q: 'Is my data secure?',
      a: 'Your catalog and tokens stay in your browser sandbox. Xero and QuickBooks connect via official OAuth — read-only where configured.',
    },
    {
      q: 'Do my customers need an app?',
      a: 'No. They get a quote link in your Gmail reply. View, approve, and pay from any phone browser.',
    },
    {
      q: 'What if SMASH doesn\'t fit our accounting stack?',
      a: 'Xero and QuickBooks are built in today. Running Microsoft Dynamics, MYOB, NetSuite, or something bespoke? Email dan@smashinvoices.com.au — we will connect your ledger or build the integration. We set up high-volume quoting teams like this regularly.',
    },
    {
      q: 'Need a custom setup, or not sure where to start?',
      a: 'Tell us how your RFQ inbox works — catalog format, approval steps, a feature you need — and we will tailor SMASH or add what is missing. Install free and try a real quote first, or email dan@smashinvoices.com.au and we will walk you through it. Friendly help, not a hard sell.',
    },
  ],
  contactSupport: {
    eyebrow: 'Your stack. Your workflow.',
    headline: "Doesn't fit out of the box? We'll set it up with you.",
    body:
      'Wrong accounting platform, odd catalog format, or a workflow we have not seen yet — tell us what you run. We will import your SKUs, wire up your ledger, or build the missing piece.',
    footnote: 'Stuck on setup or wondering if SMASH fits your team? Same inbox — we reply fast.',
    email: 'dan@smashinvoices.com.au',
  },
  breadcrumbs: [
    { name: 'Home', url: 'https://smashinvoices.com/' },
    { name: 'Quotes & Invoices for Gmail', url: 'https://smashinvoices.com/b2b-gmail-quoting' },
  ],
} as const;
