export type GmailLandingSlug = 'quickbooks' | 'xero' | 'gmail-invoice' | 'xero-gmail';

export interface GmailLandingStory {
  eyebrow: string;
  title: string;
  body: string;
  bullets: [string, string][];
  dark?: boolean;
}

export interface GmailLandingLink {
  label: string;
  href: string;
  description?: string;
}

export interface GmailLandingBreadcrumb {
  name: string;
  url: string;
}

export interface GmailLandingConfig {
  slug: GmailLandingSlug;
  path: string;
  breadcrumbLabel: string;
  breadcrumbs: GmailLandingBreadcrumb[];
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    eyebrow: string;
    preHeadline: string;
    h1White: string;
    h1Accent: string;
    subcopy: string;
    strapline: string;
  };
  integrationStrap: string;
  integrationStrapSub?: string;
  answerStrip: { question: string; answer: string };
  youtubeVideoId: string;
  youtubeTitle: string;
  youtubeDescription: string;
  youtubeUploadDate: string;
  comparison: {
    title: string;
    subtitle: string;
    headers: [string, string, string];
    rows: [string, string, string][];
  };
  featuredTestimonial: { quote: string; attribution: string };
  capabilityEyebrow: string;
  capabilityTitle: string;
  testimonials: { quote: string; name: string; trade: string; city: string }[];
  stories: GmailLandingStory[];
  capabilities: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  finalCta: { headline: string; subcopy: string };
  relatedPages: GmailLandingLink[];
  relatedBlog: GmailLandingLink[];
}

const SITE = 'https://smashinvoices.com';

export const gmailLandingPages: Record<GmailLandingSlug, GmailLandingConfig> = {
  quickbooks: {
    slug: 'quickbooks',
    path: '/integrations/gmail-quickbooks-estimate-generator',
    breadcrumbLabel: 'Gmail + QuickBooks Estimates',
    breadcrumbs: [
      { name: 'Home', url: `${SITE}/` },
      { name: 'Integrations', url: `${SITE}/integrations` },
      { name: 'Gmail + QuickBooks Estimates', url: `${SITE}/integrations/gmail-quickbooks-estimate-generator` },
    ],
    seo: {
      title: 'Create QuickBooks Estimates From Gmail in 60 Seconds | SMASH',
      description:
        'Stop rekeying customer emails into QuickBooks Online. SMASH scans Gmail, matches your SKUs, and pushes a priced estimate to QBO from your inbox — no CSV import, no tab-switching.',
      keywords:
        'create quickbooks estimates from gmail, quickbooks online estimate chrome extension, quickbooks gmail integration, gmail to quickbooks estimate, import estimate quickbooks online, smash invoices quickbooks',
      ogTitle: 'SMASH — QuickBooks Estimates From Gmail in 60 Seconds',
      ogDescription:
        'Build and send QuickBooks Online estimates without leaving Gmail. Scan the email, match your catalog, push to QBO.',
    },
    hero: {
      eyebrow: 'SMASH × QuickBooks Online',
      preHeadline: 'STOP THE 5-TAB QUOTE LOOP.',
      h1White: 'QuickBooks estimates',
      h1Accent: 'from Gmail.',
      subcopy:
        'QuickBooks Online cannot import estimates from CSV or Excel. SMASH reads the customer email in Gmail, maps line items to your live product list, and pushes a structured estimate to QuickBooks in one click — under 60 seconds.',
      strapline:
        'Works inside Gmail with QuickBooks Online. Xero supported too. Standalone quoting if you need it.',
    },
    answerStrip: {
      question: 'How do I create a QuickBooks estimate from Gmail?',
      answer:
        'Install the SMASH Chrome extension, connect QuickBooks Online with secure OAuth, and open a customer enquiry in Gmail. Press From Email or Start Recording in the sidebar. SMASH extracts the job details, applies your saved rates, calculates sales tax, and syncs a completed estimate to QuickBooks Online. Copy the quote into your reply and send — without opening a new QBO tab.',
    },
    integrationStrap: 'Simple as: scan Gmail → build the QuickBooks estimate → send from your inbox.',
    integrationStrapSub:
      'Works with Gmail and QuickBooks Online. Xero supported. Need another platform? Email dan@smashinvoices.com.au',
    youtubeVideoId: 'S3O2qjwfDiw',
    youtubeTitle: 'SMASH — QuickBooks estimates from Gmail',
    youtubeDescription:
      'See how SMASH builds QuickBooks Online estimates inside Gmail without CSV import or manual rekeying.',
    youtubeUploadDate: '2026-01-15',
    comparison: {
      title: 'Manual QuickBooks vs. SMASH in Gmail',
      subtitle: 'Why estimators switch when RFQs land by email.',
      headers: ['Quoting step', 'Manual QBO workflow', 'SMASH Gmail sidebar'],
      rows: [
        ['Estimate import', 'Blocked (no CSV/Excel)', 'API push from email'],
        ['Context switching', '5+ browser tabs', 'Stays in Gmail'],
        ['Line-item entry', '10–15 min typing', 'Under 60 seconds'],
        ['Client delivery', 'Intuit-branded email box', 'Clean send from your Gmail'],
      ],
    },
    featuredTestimonial: {
      quote:
        'Customer emails a job request. I hold the button, describe it in 20 seconds, drop it into the reply. They approved it before I left the driveway.',
      attribution: 'Marcus W. — plumber, Byron Bay',
    },
    capabilityEyebrow: 'Everything in one sidebar',
    capabilityTitle: 'Built for QuickBooks estimators who live in Gmail.',
    testimonials: [
      {
        quote: 'We stopped copy-pasting messy cutting lists into QBO. Scan the email, estimate lands in QuickBooks, reply sent. Twelve hours a week back.',
        name: 'Rohan T.',
        trade: 'Building supplies',
        city: 'Melbourne',
      },
      {
        quote: 'The line lock alone is worth it. I change the SKU, my custom site notes stay put.',
        name: 'Sarah M.',
        trade: 'Estimator',
        city: 'Sydney',
      },
      {
        quote: 'Customers get a clean Gmail quote, not that blue QuickBooks box that looked like spam.',
        name: 'David K.',
        trade: 'Wholesale',
        city: 'Brisbane',
      },
      {
        quote: 'First supplier to reply with a proper PDF again. SMASH made that normal.',
        name: 'Marcus L.',
        trade: 'Sales desk',
        city: 'Perth',
      },
    ],
    stories: [
      {
        eyebrow: 'Bypass QBO import limits',
        title: 'No CSV.\nNo rekeying.\nJust send.',
        body: 'QuickBooks blocks estimate imports on every tier — including Advanced. SMASH acts as an intelligent extractor on the email you already have open, then pushes the finished estimate through the official Intuit API.',
        bullets: [
          ['From Email', 'Parses unstructured RFQs and PDF attachments into line items.'],
          ['Live SKU sync', 'Your QuickBooks product and service list in the sidebar.'],
          ['One-click push', 'Estimate appears in QBO ready to send or edit.'],
        ],
      },
      {
        eyebrow: 'Line lock for estimators',
        title: 'Your notes\nstay put.',
        body: 'When you swap a product code in QuickBooks, native QBO overwrites your custom description. SMASH locks customer-specific notes while you toggle SKUs — so negotiated specs and site measurements do not vanish.',
        bullets: [
          ['Lock descriptions', 'Protect scope text while changing catalog codes.'],
          ['Pricing DNA', 'Upload an old invoice once; SMASH learns your rates.'],
          ['Regional tax', 'Sales tax, GST, VAT — matched to your QBO setup.'],
        ],
        dark: true,
      },
      {
        eyebrow: 'Deliver from Gmail',
        title: 'Send the quote.\nGet paid.',
        body: 'Skip Intuit’s rigid online-delivery templates. SMASH sends branded quotes from your Gmail account with a secure approval and payment link. When the client pays, the record syncs back to QuickBooks without double entry.',
        bullets: [
          ['Gmail-native send', 'Professional cover email drafted for you.'],
          ['Stripe deposits', 'Collect retainers when they accept.'],
          ['Read receipts', 'Know the second they open it.'],
        ],
      },
    ],
    capabilities: [
      { title: 'Estimate from email', body: 'Scan RFQs and attachments. Map quantities to QBO SKUs automatically.' },
      { title: 'Voice to estimate', body: 'Describe the job out loud. Line items fill with your QuickBooks rates.' },
      { title: 'Line lock', body: 'Keep custom descriptions when you change product codes.' },
      { title: 'Freight & zones', body: 'Map delivery suburbs to regional freight SKUs for bulky goods.' },
      { title: 'Gmail reply', body: 'Drop the PDF and cover letter into the thread in one click.' },
      { title: 'Stripe on quote', body: 'Clients approve and pay deposits from their phone.' },
      { title: 'OAuth secure', body: 'Official Intuit connection. Revoke access anytime from Google.' },
      { title: 'Xero too', body: 'Same sidebar workflow if you run Xero on other entities.' },
    ],
    faqs: [
      {
        q: 'Can I import estimates into QuickBooks Online from Excel or CSV?',
        a: 'No — QuickBooks Online blocks native estimate imports across all plans. SMASH bypasses that by reading the customer email or your voice input, matching your catalog, and creating the estimate via API.',
      },
      {
        q: 'Does SMASH replace QuickBooks Online?',
        a: 'No. QuickBooks stays your ledger. SMASH is the Gmail sidebar that builds and sends estimates faster, then syncs the finished record into QBO.',
      },
      {
        q: 'Will my custom line descriptions get overwritten?',
        a: 'Not with Line Lock enabled. You can change the underlying SKU while keeping customer-specific notes frozen in the sidebar.',
      },
      {
        q: 'Which QuickBooks plans work?',
        a: 'Any QuickBooks Online plan that includes estimates. Connect once with OAuth and pick your company file.',
      },
      {
        q: 'Is customer data stored on your servers?',
        a: 'SMASH uses OAuth and only processes the email thread you have open. We do not sell financial records or customer lists.',
      },
      {
        q: 'How much does it cost?',
        a: 'Five invoices or estimates per month free. Starter from $15/month unlocks unlimited documents and accounting sync.',
      },
    ],
    finalCta: {
      headline: 'Your inbox is full of RFQs.',
      subcopy: 'Turn the next QuickBooks estimate around in under a minute — without leaving Gmail.',
    },
    relatedPages: [
      { label: 'SMASH for Gmail (overview)', href: '/chrome-extension' },
      { label: 'Gmail + Xero quotes', href: '/integrations/gmail-xero-quote-builder' },
      { label: 'Gmail invoice extension', href: '/gmail-invoice' },
      { label: 'QuickBooks integration hub', href: '/integrations/quickbooks' },
    ],
    relatedBlog: [
      { label: 'QuickBooks Gmail invoice shortcut (video demo)', href: '/blog/quickbooks-gmail-invoice-shortcut' },
      { label: 'Create QuickBooks estimates from Gmail', href: '/blog/quickbooks-estimates-from-gmail' },
      { label: 'Stop juggling tabs — QBO sidebar', href: '/blog/quickbooks-gmail-sidebar-tab-switching' },
      { label: 'QBO Chrome extension gap', href: '/blog/quickbooks-gmail-chrome-extension-missing' },
    ],
  },

  xero: {
    slug: 'xero',
    path: '/integrations/gmail-xero-quote-builder',
    breadcrumbLabel: 'Gmail + Xero Quotes',
    breadcrumbs: [
      { name: 'Home', url: `${SITE}/` },
      { name: 'Integrations', url: `${SITE}/integrations` },
      { name: 'Gmail + Xero Quotes', url: `${SITE}/integrations/gmail-xero-quote-builder` },
    ],
    seo: {
      title: 'Create Xero Quotes From Gmail — Fastest Quote Builder Extension | SMASH',
      description:
        'Build Xero quotes inside Gmail in under 60 seconds. Scan customer emails, match your Xero SKUs, send branded PDFs, and sync quotes — without Hubdoc or manual rekeying.',
      keywords:
        'how to create xero quote from gmail, xero gmail sidebar extension, xero quote builder gmail, gmail to xero invoice, quote faster xero, smash invoices xero',
      ogTitle: 'SMASH — Xero Quotes From Gmail in 60 Seconds',
      ogDescription:
        'The fastest Xero quote workflow for desk-based tradies and suppliers: scan the email, price the job, sync to Xero, send from Gmail.',
    },
    hero: {
      eyebrow: 'SMASH × Xero',
      preHeadline: 'HUBDOC WON’T QUOTE FOR YOU.',
      h1White: 'Xero quotes',
      h1Accent: 'inside Gmail.',
      subcopy:
        'Hubdoc captures bills — it does not create outgoing client quotes. SMASH lives in your Gmail sidebar, scans enquiries, matches your Xero inventory, and pushes a priced quote to Xero before your competitor replies.',
      strapline:
        'Works with Xero and Gmail. QuickBooks Online supported. Free to try in Chrome.',
    },
    answerStrip: {
      question: 'How do I create a Xero quote from a Gmail email?',
      answer:
        'Connect Xero to SMASH with OAuth, open the customer’s enquiry in Gmail, and press From Email in the sidebar. SMASH reads the message, maps services to your Xero items, calculates GST or VAT from your tax codes, and prepares a branded PDF quote. One click syncs the quote to Xero and copies a professional reply into Gmail.',
    },
    integrationStrap: 'Simple as: scan Gmail → build the Xero quote → send from your inbox.',
    integrationStrapSub:
      'Works with Gmail and Xero. QuickBooks Online supported. Need another platform? Email dan@smashinvoices.com.au',
    youtubeVideoId: 'Aw_9oXMEVME',
    youtubeTitle: 'SMASH — Xero quotes from Gmail without typing',
    youtubeDescription:
      'Watch SMASH turn a customer email into a priced Xero quote inside Gmail — no Hubdoc, no manual rekeying.',
    youtubeUploadDate: '2026-01-15',
    comparison: {
      title: 'Native Xero vs. SMASH in Gmail',
      subtitle: 'Outgoing quotes are a different job than bill capture.',
      headers: ['Workflow', 'Native Xero + inbox', 'SMASH Gmail sidebar'],
      rows: [
        ['Quote from email', 'Manual rekeying', 'From Email scan'],
        ['Quote follow-ups', 'Manual tracking', 'Automated quote chaser'],
        ['Where you work', 'xero.com + Gmail', 'Gmail sidebar only'],
        ['Typical turnaround', '5–10 minutes', 'Under 60 seconds'],
      ],
    },
    featuredTestimonial: {
      quote:
        'Builders email cutting lists. SMASH matches our Xero codes and drafts the quote while I’m still in the thread.',
      attribution: 'Dawie O. — timber mill, Queensland',
    },
    capabilityEyebrow: 'Everything in one sidebar',
    capabilityTitle: 'Built for Xero users who quote from the inbox.',
    testimonials: [
      {
        quote: 'Builders email cutting lists. SMASH matches our Xero codes and drafts the quote while I’m still in the thread.',
        name: 'Dawie O.',
        trade: 'Timber mill',
        city: 'Queensland',
      },
      {
        quote: 'Quote chaser actually follows up. I used to lose jobs because I forgot to nudge open quotes.',
        name: 'Claire M.',
        trade: 'Commercial cleaner',
        city: 'Auckland',
      },
      {
        quote: 'I haven’t opened Xero on a laptop just to type a quote since March.',
        name: 'James T.',
        trade: 'Electrician',
        city: 'Wellington',
      },
      {
        quote: 'Voice dictation for variations on site, From Email at the desk. Same Xero numbers either way.',
        name: 'Nina K.',
        trade: 'HVAC',
        city: 'Melbourne',
      },
    ],
    stories: [
      {
        eyebrow: 'Accounts receivable, not AP',
        title: 'Quotes out.\nNot bills in.',
        body: 'Xero’s email-to-inbox tools focus on supplier bills. SMASH is built for outgoing quotes and invoices — the work you do when a customer asks “how much?” in Gmail.',
        bullets: [
          ['From Email', 'Turn unstructured RFQs into itemised Xero quotes.'],
          ['Voice input', 'Dictate site work; SMASH matches your price list.'],
          ['Tax codes', 'Uses your Xero GST, VAT, or sales tax settings.'],
        ],
      },
      {
        eyebrow: 'Quote chaser built in',
        title: 'Follow up\nbefore they forget.',
        body: 'Xero reminds on invoices but not on open quotes. SMASH sends polite chase emails before expiry so you win jobs you already priced.',
        bullets: [
          ['Auto follow-ups', 'Customisable reminders on sent quotes.'],
          ['Online accept', 'Clients approve from a mobile portal link.'],
          ['To invoice', 'Accepted quotes convert without retyping.'],
        ],
        dark: true,
      },
      {
        eyebrow: 'Desk-speed quoting',
        title: 'Stay in the thread.',
        body: 'Stop copying addresses into Maps, spreadsheets, and Xero tabs. SMASH keeps context in Gmail — customer, history, and catalog in one sidebar.',
        bullets: [
          ['Live Xero items', 'Products and services synced to the sidebar.'],
          ['Copy to Gmail', 'Cover letter and PDF attached in one action.'],
          ['Payment sync', 'Card payments reconcile against the Xero invoice.'],
        ],
      },
    ],
    capabilities: [
      { title: 'Email scanner', body: 'Extract quantities, locations, and scope from Gmail threads.' },
      { title: 'Xero catalog sync', body: 'Your items, contacts, and tax codes — always current.' },
      { title: 'Quote chaser', body: 'Automated follow-ups on outstanding proposals.' },
      { title: 'Voice to quote', body: 'Talk the job; get a priced Xero-ready document.' },
      { title: 'Bulk reconciliation aid', body: 'Match multi-invoice payments faster after the job is won.' },
      { title: 'NDIS ready', body: 'Participant numbers print when saved per customer.' },
      { title: 'Multi-region tax', body: 'AU, NZ, UK, US, CA tax codes respected per line.' },
      { title: 'QuickBooks too', body: 'Same Gmail workflow for mixed entities.' },
    ],
    faqs: [
      {
        q: 'How is SMASH different from Hubdoc?',
        a: 'Hubdoc is accounts payable — scanning supplier bills. SMASH creates outgoing quotes and invoices from Gmail and syncs them to Xero.',
      },
      {
        q: 'Does SMASH follow up on unaccepted quotes?',
        a: 'Yes. SMASH includes quote chasing — polite reminders before expiry — which Xero does not do natively.',
      },
      {
        q: 'Do I need to leave Gmail?',
        a: 'No. The extension runs in Chrome beside your inbox. Build, send, and sync without opening xero.com.',
      },
      {
        q: 'Which Xero plans are supported?',
        a: 'Any Xero organisation with quoting and invoicing enabled. Connect via OAuth in under a minute.',
      },
      {
        q: 'Can I still use the SMASH mobile app?',
        a: 'Yes. Voice quoting on site syncs to the same Xero organisation as your Gmail desk workflow.',
      },
      {
        q: 'What does it cost?',
        a: 'Five documents per month free. Unlimited quotes and Xero sync from $15/month on Starter.',
      },
    ],
    finalCta: {
      headline: 'The first quote wins.',
      subcopy: 'Reply with a priced Xero quote from Gmail before the job goes to someone else.',
    },
    relatedPages: [
      { label: 'Xero Gmail extension (overview)', href: '/xero' },
      { label: 'SMASH for Gmail (overview)', href: '/chrome-extension' },
      { label: 'Gmail + QuickBooks estimates', href: '/integrations/gmail-quickbooks-estimate-generator' },
      { label: 'Gmail invoice extension', href: '/gmail-invoice' },
      { label: 'Xero integration hub', href: '/integrations/xero' },
    ],
    relatedBlog: [
      { label: 'Xero quote builder for Gmail', href: '/blog/xero-quote-builder-gmail-extension' },
      { label: 'Gmail to Xero — no typing', href: '/blog/gmail-to-xero-invoice-no-typing' },
      { label: 'Xero voice invoicing stack', href: '/blog/smash-xero-voice-invoicing-accounting' },
      { label: 'Is Xero overkill for solo tradies?', href: '/blog/is-xero-overkill-for-solo-tradies' },
    ],
  },

  'gmail-invoice': {
    slug: 'gmail-invoice',
    path: '/gmail-invoice',
    breadcrumbLabel: 'Gmail Invoice Extension',
    breadcrumbs: [
      { name: 'Home', url: `${SITE}/` },
      { name: 'Gmail Invoice Extension', url: `${SITE}/gmail-invoice` },
    ],
    seo: {
      title: 'Gmail Invoice Extension — Send Invoices & Quotes From Your Inbox | SMASH',
      description:
        'The Gmail invoice extension for tradies and service businesses. Voice or email-to-invoice in under 60 seconds. GST-ready PDFs, client pay links, sync to Xero and QuickBooks.',
      keywords:
        'gmail invoice extension, send invoice from gmail, gmail invoice generator, email to invoice chrome extension, invoice in gmail, gmail quoting tool, smash invoices gmail',
      ogTitle: 'SMASH — Gmail Invoice & Quote Extension',
      ogDescription:
        'Turn customer emails into sent invoices without leaving Gmail. Voice, scan, price, send — under 60 seconds.',
    },
    hero: {
      eyebrow: 'Gmail invoice extension',
      preHeadline: 'YOU’RE ALREADY IN GMAIL.',
      h1White: 'Send the invoice',
      h1Accent: 'from the thread.',
      subcopy:
        'SMASH docks in your Gmail sidebar. Scan the customer’s email or talk the job — get a priced, tax-ready invoice or quote, attach it to your reply, and collect payment. No new app. No copy-paste into spreadsheets.',
      strapline:
        'Chrome extension for Gmail. Syncs to Xero and QuickBooks. iOS app for on-site voice invoicing.',
    },
    answerStrip: {
      question: 'What is the best Gmail invoice extension?',
      answer:
        'SMASH is a Chrome extension that adds an invoice and quote builder to Gmail. It reads open customer emails (From Email), accepts voice dictation (Start Recording), applies your saved pricing, generates GST- or VAT-ready PDFs, and lets you send from the same thread with approval and pay links. Completed documents sync to Xero or QuickBooks Online.',
    },
    integrationStrap: 'Simple as: works with Gmail, Xero, QuickBooks, and as a standalone invoicing tool.',
    integrationStrapSub:
      'Use something else? Email dan@smashinvoices.com.au and we will add your stack to the roadmap.',
    youtubeVideoId: 'uNL733tYTf0',
    youtubeTitle: 'SMASH — Gmail email to invoice in 20 seconds',
    youtubeDescription:
      'Watch a customer email become a sent, priced invoice inside Gmail in under 20 seconds with SMASH.',
    youtubeUploadDate: '2026-01-01',
    comparison: {
      title: 'Gmail invoice workflow comparison',
      subtitle: 'Why a dedicated sidebar beats templates and copy-paste.',
      headers: ['Method', 'Typical time', 'Typing required'],
      rows: [
        ['Word/Excel template', '10–15 min', 'All line items'],
        ['Separate invoicing app', '5–10 min', 'Most fields'],
        ['Rough email estimate', '2–3 min', 'Yes — looks unprofessional'],
        ['SMASH Gmail extension', 'Under 60 sec', 'None (voice or From Email)'],
      ],
    },
    featuredTestimonial: {
      quote:
        'Customer emails a job, I tap From Email, invoice is in the reply. Didn’t open another tab.',
      attribution: 'Chris P. — electrician, Sydney',
    },
    capabilityEyebrow: 'Everything in one sidebar',
    capabilityTitle: 'No manual entry. No brain fog. No missed details.',
    testimonials: [
      {
        quote: 'Customer emails a job, I tap From Email, invoice is in the reply. Didn’t open another tab.',
        name: 'Chris P.',
        trade: 'Electrician',
        city: 'Sydney',
      },
      {
        quote: 'I invoice from Gmail at the desk and voice on site. Same prices both ways.',
        name: 'Jake T.',
        trade: 'Plumber',
        city: 'Brisbane',
      },
      {
        quote: 'Finally an invoice extension that doesn’t feel like a toy spreadsheet.',
        name: 'Mel R.',
        trade: 'Handywoman',
        city: 'Melbourne',
      },
      {
        quote: 'Read receipt + pay link means I stop chasing bank transfers at night.',
        name: 'Sam O.',
        trade: 'Cleaner',
        city: 'Auckland',
      },
    ],
    stories: [
      {
        eyebrow: 'From email to invoice',
        title: 'Scan it.\nPrice it.\nSend it.',
        body: 'The customer already wrote the scope in Gmail. SMASH extracts names, line items, and delivery details, matches your catalog, and builds the invoice while you read the thread.',
        bullets: [
          ['From Email', 'One press — structured invoice from the open message.'],
          ['Active context', 'Customer and thread history in the sidebar.'],
          ['Cover letter', 'Professional reply text drafted for you.'],
        ],
      },
      {
        eyebrow: 'Voice when you need it',
        title: 'Talk the job.\nSkip the keyboard.',
        body: 'On site or after a call, hold Start Recording and describe labour, materials, and fees. SMASH transcribes, prices, and prepares the PDF — still inside Gmail when you’re back at the desk.',
        bullets: [
          ['Natural speech', 'Explain the job like you would to the client.'],
          ['Pricing DNA', 'Your rates from day one — upload an old invoice once.'],
          ['Under 60 seconds', 'Review, copy to Gmail, send.'],
        ],
        dark: true,
      },
      {
        eyebrow: 'Paid-ready documents',
        title: 'Approve.\nPay.\nSync.',
        body: 'Clients open a clean portal link — approve, pay by card, done. You get read receipts and payment notifications. Push the finished invoice to Xero or QuickBooks without typing it twice.',
        bullets: [
          ['Pay now links', 'Stripe, Apple Pay, Google Pay supported.'],
          ['Tax compliant', 'GST, VAT, sales tax per your settings.'],
          ['NDIS fields', 'Participant numbers on PDFs when saved.'],
        ],
      },
    ],
    capabilities: [
      { title: 'Gmail sidebar', body: 'Works in Chrome on desktop — stays on the email thread.' },
      { title: 'Email to invoice', body: 'Parse enquiries and attachments into line items.' },
      { title: 'Voice to invoice', body: 'Dictate scope; SMASH fills priced rows automatically.' },
      { title: 'Quote or invoice', body: 'Same workflow for estimates and tax invoices.' },
      { title: 'Client portal', body: 'Approve and pay from mobile — no app download.' },
      { title: 'Xero + QBO sync', body: 'One click to your ledger when the job is won.' },
      { title: 'Repeat jobs', body: 'Clone last invoice as a new draft in one tap.' },
      { title: 'Privacy first', body: 'Only the open thread is processed; audio not stored.' },
    ],
    faqs: [
      {
        q: 'Does SMASH work inside Gmail on mobile?',
        a: 'The Gmail invoice extension runs in Chrome on desktop and laptop. For mobile, use the SMASH iOS app for voice invoicing on site.',
      },
      {
        q: 'Can I send invoices without Xero or QuickBooks?',
        a: 'Yes. SMASH generates and sends standalone PDF invoices and quotes. Accounting sync is optional on paid plans.',
      },
      {
        q: 'How is this different from Gmail add-ons like templates?',
        a: 'Templates still need you to type prices and line items. SMASH reads the email or your voice and builds the full document with tax and totals.',
      },
      {
        q: 'Is it free to try?',
        a: 'Yes — five invoices or quotes per month at no cost. No credit card required to install.',
      },
      {
        q: 'What countries are supported?',
        a: 'Australia, New Zealand, United Kingdom, United States, and Canada — with local tax handling.',
      },
      {
        q: 'How do I install it?',
        a: 'Add SMASH from the Chrome Web Store, sign in, connect Gmail permissions, and open any customer email to see the sidebar.',
      },
    ],
    finalCta: {
      headline: 'Your inbox is your sales desk.',
      subcopy: 'Install the Gmail invoice extension and send the next quote before you finish your coffee.',
    },
    relatedPages: [
      { label: 'SMASH for Gmail (full feature page)', href: '/chrome-extension' },
      { label: 'Xero Gmail extension', href: '/xero' },
      { label: 'Gmail + QuickBooks estimates', href: '/integrations/gmail-quickbooks-estimate-generator' },
      { label: 'Gmail + Xero quotes', href: '/integrations/gmail-xero-quote-builder' },
      { label: 'Voice invoicing on mobile', href: '/voice-invoicing' },
    ],
    relatedBlog: [
      { label: 'Gmail email to invoice in 20 seconds', href: '/blog/gmail-email-to-invoice-20-seconds' },
      { label: 'QuickBooks Gmail invoice shortcut', href: '/blog/quickbooks-gmail-invoice-shortcut' },
      { label: 'Wave invoicing alternative for Gmail', href: '/blog/wave-invoicing-alternative-gmail' },
      { label: 'Fastest voice invoice generator', href: '/blog/fastest-voice-invoice-generator-gmail' },
    ],
  },

  'xero-gmail': {
    slug: 'xero-gmail',
    path: '/xero',
    breadcrumbLabel: 'Xero Gmail Extension',
    breadcrumbs: [
      { name: 'Home', url: `${SITE}/` },
      { name: 'Xero Gmail Extension', url: `${SITE}/xero` },
    ],
    seo: {
      title: 'Xero Gmail Extension — Send Quotes & Invoices From Your Inbox | SMASH',
      description:
        'The Xero Gmail extension for freelancers and solo operators. Scan customer emails, build GST-ready quotes and invoices in Gmail, and sync to Xero — no rekeying, no xero.com tab.',
      keywords:
        'xero gmail extension, gmail to xero invoice, xero quote from gmail, email to xero quote, xero gmail sidebar, xero chrome extension gmail, smash invoices xero, send invoice from gmail xero',
      ogTitle: 'SMASH — Xero Gmail Extension (Quotes & Invoices From Your Inbox)',
      ogDescription:
        'Stop retyping Gmail enquiries into Xero. From Email and voice-to-quote in the sidebar — sync quotes and invoices to Xero in under 60 seconds.',
    },
    hero: {
      eyebrow: 'Xero Gmail extension',
      preHeadline: 'YOU LIVE IN GMAIL. XERO IS YOUR LEDGER.',
      h1White: 'Quote in Gmail.',
      h1Accent: 'Sync to Xero.',
      subcopy:
        'SMASH is a Chrome extension that docks in your Gmail sidebar. Scan the customer’s email or talk the job — get a priced, tax-ready Xero quote or invoice, send from the same thread, and push the finished document to Xero without opening another tab.',
      strapline:
        'Built for Xero users who bill from email. OAuth sync to your Xero organisation. QuickBooks supported on the same sidebar.',
    },
    answerStrip: {
      question: 'What is the best Xero Gmail extension?',
      answer:
        'SMASH adds a Xero-connected quote and invoice builder inside Gmail. Press From Email to scan the open message, or Start Recording to dictate the job. Line items map to your Xero products and services, tax codes apply automatically, and one click syncs the quote or invoice to Xero while Insert Reply attaches the PDF to your Gmail thread.',
    },
    integrationStrap: 'Simple as: read Gmail → build the Xero document → sync to your ledger → send from your inbox.',
    integrationStrapSub:
      'Works with Xero and Gmail on desktop Chrome. Need another stack? Email dan@smashinvoices.com.au',
    youtubeVideoId: 'Aw_9oXMEVME',
    youtubeTitle: 'Turn Job Requests Into Xero Invoices Without Typing — SMASH Gmail Demo',
    youtubeDescription:
      'Watch SMASH scan a customer email in Gmail, price line items from your Xero catalog, and sync a completed invoice to Xero without manual rekeying.',
    youtubeUploadDate: '2026-01-15',
    comparison: {
      title: 'Manual Xero entry vs. SMASH in Gmail',
      subtitle: 'Why desk-based operators stop opening xero.com for every quote.',
      headers: ['Step', 'Typical Xero workflow', 'SMASH Xero Gmail extension'],
      rows: [
        ['Read customer email', 'Copy-paste into Xero', 'From Email scan in sidebar'],
        ['Line items & tax', '10–15 min typing', 'Catalog + tax codes auto-applied'],
        ['Send to client', 'Separate email + PDF export', 'Insert Reply in same Gmail thread'],
        ['Ledger updated', 'Already in Xero', 'One-click sync — no double entry'],
      ],
    },
    featuredTestimonial: {
      quote:
        'Builders email cutting lists. SMASH matches our Xero codes and syncs the quote while I’m still in the thread.',
      attribution: 'Dawie O. — timber supplier, Queensland',
    },
    capabilityEyebrow: 'Xero + Gmail in one sidebar',
    capabilityTitle: 'Outgoing quotes and invoices — not bill capture.',
    testimonials: [
      {
        quote: 'I haven’t opened Xero on a laptop just to type a quote since I installed SMASH.',
        name: 'James T.',
        trade: 'Electrician',
        city: 'Wellington',
      },
      {
        quote: 'From Email pulls the scope from Gmail. Xero gets the same numbers I would have typed — in seconds.',
        name: 'Claire M.',
        trade: 'Commercial cleaner',
        city: 'Auckland',
      },
      {
        quote: 'Quote chaser follows up before jobs go cold. Xero never reminded me on open quotes.',
        name: 'Nina K.',
        trade: 'HVAC contractor',
        city: 'Melbourne',
      },
      {
        quote: 'Voice on site, From Email at the desk. Both land in the same Xero organisation.',
        name: 'Marcus L.',
        trade: 'Handyman',
        city: 'Sydney',
      },
    ],
    stories: [
      {
        eyebrow: 'From Gmail to Xero quote',
        title: 'Scan it.\nPrice it.\nSync it.',
        body: 'The customer already wrote the job in Gmail. SMASH extracts quantities, contacts, and scope, maps your Xero items and tax codes, and prepares a quote ready to sync — while you stay in the inbox.',
        bullets: [
          ['From Email', 'Structured Xero quote from the open Gmail message.'],
          ['Live Xero items', 'Products and services synced via OAuth.'],
          ['Insert Reply', 'Cover letter + PDF in the same thread.'],
        ],
      },
      {
        eyebrow: 'Voice to Xero lines',
        title: 'Talk the job.\nSkip the ledger tab.',
        body: 'Describe labour, materials, and call-out fees out loud. SMASH transcribes, matches your Xero price list, and builds line items with the right GST, VAT, or sales tax — then pushes to Xero when you approve.',
        bullets: [
          ['Natural speech', 'Explain the job like you would to the client.'],
          ['Tax codes', 'Uses your Xero tax settings per line.'],
          ['Under 60 seconds', 'Review in Gmail, sync, send.'],
        ],
        dark: true,
      },
      {
        eyebrow: 'Accepted → invoiced in Xero',
        title: 'Approve.\nPay.\nReconcile.',
        body: 'Clients approve quotes from a mobile portal link. Accepted quotes convert to Xero invoices without retyping. Card payments reconcile against the invoice in Xero when the job is done.',
        bullets: [
          ['Quote chaser', 'Automated follow-ups on open Xero quotes.'],
          ['Online accept', 'Client approves before work starts.'],
          ['Payment sync', 'Stripe payments match your Xero invoice.'],
        ],
      },
    ],
    capabilities: [
      { title: 'Xero OAuth sync', body: 'Connect once — quotes and invoices push to your organisation.' },
      { title: 'Gmail From Email', body: 'Parse enquiries and attachments into Xero line items.' },
      { title: 'Voice to quote', body: 'Dictate scope; SMASH fills priced Xero rows automatically.' },
      { title: 'Xero catalog live', body: 'Items, contacts, and tax codes stay current in the sidebar.' },
      { title: 'Quote or invoice', body: 'Same Gmail workflow for estimates and tax invoices.' },
      { title: 'Quote chaser', body: 'Follow up on unaccepted quotes — beyond native Xero reminders.' },
      { title: 'Multi-region tax', body: 'AU, NZ, UK, US, CA — Xero tax codes respected per line.' },
      { title: 'Hubdoc is AP', body: 'Hubdoc captures bills in — SMASH creates outgoing quotes out.' },
    ],
    faqs: [
      {
        q: 'Does SMASH replace Xero?',
        a: 'No. Xero stays your ledger, BAS, and accountant handoff. SMASH is the Gmail sidebar that builds and sends quotes and invoices faster, then syncs the finished record into Xero.',
      },
      {
        q: 'How is SMASH different from Hubdoc or Xero email-to-inbox?',
        a: 'Hubdoc and Xero inbox tools focus on supplier bills (accounts payable). SMASH creates outgoing client quotes and invoices from Gmail and syncs them to Xero receivables.',
      },
      {
        q: 'Do I need to leave Gmail to sync to Xero?',
        a: 'No. Build, send, and sync from the Chrome sidebar beside your inbox. Open xero.com only when your accountant needs you to — not for every customer email.',
      },
      {
        q: 'Which Xero plans work with the Gmail extension?',
        a: 'Any Xero organisation with quoting and invoicing enabled. Connect with OAuth in under a minute.',
      },
      {
        q: 'Can I email the quote from Gmail, not Xero’s blue box?',
        a: 'Yes. Insert Reply puts a professional cover letter and PDF in your Gmail compose window — sent from your address, not a generic accounting notification.',
      },
      {
        q: 'What does the Xero Gmail extension cost?',
        a: 'Five quotes or invoices per month free. Unlimited documents and Xero sync from $15/month on Starter.',
      },
    ],
    finalCta: {
      headline: 'Your inbox is where the job starts.',
      subcopy: 'Install the Xero Gmail extension and sync the next quote before your competitor replies.',
    },
    relatedPages: [
      { label: 'SMASH for Gmail (full feature page)', href: '/chrome-extension' },
      { label: 'Gmail invoice extension', href: '/gmail-invoice' },
      { label: 'Gmail + Xero quote builder', href: '/integrations/gmail-xero-quote-builder' },
      { label: 'Xero integration hub', href: '/integrations/xero' },
    ],
    relatedBlog: [
      { label: 'Gmail to Xero — no typing', href: '/blog/gmail-to-xero-invoice-no-typing' },
      { label: 'Xero quote builder for Gmail', href: '/blog/xero-quote-builder-gmail-extension' },
      { label: 'Gmail email to invoice in 20 seconds', href: '/blog/gmail-email-to-invoice-20-seconds' },
      { label: 'Is Xero overkill for solo tradies?', href: '/blog/is-xero-overkill-for-solo-tradies' },
    ],
  },
};

export function gmailLandingCanonical(slug: GmailLandingSlug): string {
  return `${SITE}${gmailLandingPages[slug].path}`;
}
