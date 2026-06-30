/** Gmail / Chrome + Edge extension product landing — v2 automation positioning. */

/** Flip to true once HTML files exist in public/product/gmail/screens/ */
export const GMAIL_HTML_SCREENS_READY = true;

/** Photography backdrop types — mirrors ios-landing-spec StoryPhoto pattern. */
export type GmailStoryPhoto = {
  src: string;
  srcMobile?: string;
  alt?: string;
  focus?: string;
  coverScale?: number;
};

export type GmailStoryPhotoBg = GmailStoryPhoto & {
  tint?: number;
};

/** Alias used by GmailPhotoSection components. */
export type GmailSectionPhoto = GmailStoryPhotoBg;

export type GmailPhotoSectionId = 'hero' | 'demo' | 'contrast' | 'sku-match' | 'workflow';

/**
 * Full-bleed section photography — drop exports into /public/product/gmail/photos/.
 * Placeholder assets copied from iOS stock until Gmail-specific shots exist.
 */
export const GMAIL_SECTION_PHOTO_BG: Partial<Record<GmailPhotoSectionId, GmailStoryPhotoBg>> = {
  hero: {
    src: '/product/gmail/photos/hero.jpg',
    srcMobile: '/product/gmail/photos/hero-mobile.jpg',
    alt: 'Supplier quoting from Gmail at a desk',
    focus: '62% 42%',
    tint: 58,
  },
  demo: {
    src: '/product/gmail/photos/demo.jpg',
    srcMobile: '/product/gmail/photos/demo-mobile.jpg',
    alt: 'Tradie reviewing a quote request on laptop',
    focus: '68% 38%',
    tint: 52,
  },
  'sku-match': {
    src: '/product/gmail/photos/sku-match.jpg',
    srcMobile: '/product/gmail/photos/sku-match-mobile.jpg',
    alt: 'Parts desk pricing an order',
    focus: '58% 42%',
    tint: 60,
  },
  workflow: {
    src: '/product/gmail/photos/workflow.jpg',
    srcMobile: '/product/gmail/photos/workflow-mobile.jpg',
    alt: 'Service worker quoting between jobs',
    focus: '55% 45%',
    tint: 64,
  },
  contrast: {
    src: '/product/gmail/photos/contrast.jpg',
    srcMobile: '/product/gmail/photos/contrast-mobile.jpg',
    alt: 'Tradesperson at a laptop after hours',
    focus: '60% 40%',
    tint: 66,
  },
};

export const GMAIL_LANDING_SEO = {
  title: 'SMASH for Gmail & Edge — Stop Re-Typing Quote Requests',
  description:
    'Quote requests land in your inbox with all the detail already written. SMASH reads them, matches your prices, and the quote is done — without copying a line or leaving Gmail. Works in Chrome and Edge with Xero and QuickBooks. Install free.',
  ogTitle: 'Stop re-typing what\'s already in your inbox.',
  ogDescription:
    'SMASH reads the request, matches your catalogue, and the quote\'s done. No copying. No tab-jumping. Install free in Chrome or Edge.',
} as const;

export const GMAIL_HERO = {
  eyebrow: 'SMASH FOR GMAIL & EDGE',
  headlineWhite: "STOP DOUBLE-TYPING WHAT'S",
  headlineLime: 'IN YOUR INBOX.',
  subline:
    'A quote request lands in your inbox. SMASH reads it, matches your prices, and turns it into a quote.\u00A0Done.',
  microcopy: 'Free to install · Chrome & Edge · Works with Xero & QuickBooks',
} as const;

export const GMAIL_DEMO = {
  id: 'watch-it-work',
  title: 'HOW IT WORKS · YOU SEND',
  strap: 'A customer emails. The quote replies itself.',
  intro:
    "You're the tradie or consultant. The enquiry lands in Gmail with the detail already written — SMASH turns it into a priced quote without leaving your inbox.",
  steps: [
    {
      frame: 'a1-request-lands',
      step: 1,
      eyebrow: 'A customer enquiry',
      headlineWhite: 'THE JOB LANDS IN',
      headlineLime: 'YOUR INBOX.',
      subline: 'Everything you need is already written down — SMASH picks it up from the email.',
      verb: 'Catch the request',
      sub: 'Everything you need is already written down.',
      showArrow: true,
    },
    {
      frame: 'a2-reads-prices',
      step: 2,
      eyebrow: 'It does the data entry',
      headlineWhite: 'IT READS IT. IT PRICES IT.',
      headlineLime: 'NO TYPING.',
      subline: 'SMASH pulls the job out of the email and prices your rates automatically.',
      verb: 'Read & price',
      sub: 'It pulls the job out of the email and prices your rates.',
      showArrow: true,
    },
    {
      frame: 'a3-quote-done',
      step: 3,
      eyebrow: 'Sent before they call anyone else',
      headlineWhite: 'QUOTE BACK IN UNDER',
      headlineLime: 'A MINUTE.',
      subline: 'Check it, hit reply. Straight into Xero or QuickBooks.',
      verb: 'Hit reply',
      sub: 'Check it, hit reply. Straight into Xero or QuickBooks.',
    },
  ],
} as const;

export const GMAIL_SUPPLIER_STORY = {
  id: 'supplier-side',
  title: 'HOW IT WORKS · YOU RECEIVE',
  strap: 'A tradie orders. You price it without typing.',
  intro:
    "You're the supplier or parts desk. The order arrives by email — SMASH SKU-matches every line to your catalogue and sends the quote back, synced to Xero.",
  steps: [
    {
      frame: 'b1-request-arrives',
      step: 1,
      eyebrow: 'On the supplier side',
      headlineWhite: 'A TRADIE WANTS A',
      headlineLime: 'PRICE.',
      subline: 'The order is already written down — every line, every quantity.',
      verb: 'Catch the order',
      sub: 'The order is already written down — every line.',
      showArrow: true,
    },
    {
      frame: 'b2-sku-match',
      step: 2,
      eyebrow: 'It knows your prices',
      headlineWhite: 'IT MATCHES EVERY LINE.',
      headlineLime: 'NO TYPING.',
      subline: 'Every line matched to your catalogue and priced from your rate card.',
      verb: 'Match & price',
      sub: 'Every line matched to your catalogue and priced.',
      showArrow: true,
    },
    {
      frame: 'b3-quote-back',
      step: 3,
      eyebrow: 'Sync, send, get paid',
      headlineWhite: 'SENT BACK. INTO XERO.',
      headlineLime: 'PAID.',
      subline: 'Quote back to the tradie, synced to Xero or QuickBooks, payment on the spot.',
      verb: 'Send it back',
      sub: 'Quote back, into Xero or QuickBooks, payment on the spot.',
    },
  ],
} as const;

export const GMAIL_CONTRAST = {
  eyebrow: 'THE OLD WAY',
  headlineWhite: 'HALF AN HOUR OF COPYING.',
  headlineLime: "NOW IT'S SECONDS.",
  proof:
    'A 20-item parts request used to take 30 minutes. Now it\'s scanned, SKU-matched and priced before you\'ve finished your coffee.',
} as const;

export const GMAIL_ALSO_DOES = {
  eyebrow: 'ALSO DOES',
  headlineWhite: 'ROUND OUT THE',
  headlineLime: 'WORKFLOW.',
  iosMention:
    'On your phone too — there\'s an iOS app for quoting from the field. Same account, same prices.',
  tiles: [
    {
      title: 'Or just talk',
      outcome: 'Speak the job in the sidebar — the quote builds itself. No typing either way.',
    },
    {
      title: 'They approve & pay',
      outcome: 'Customer gets a link, approves, pays by card. No chasing.',
    },
    {
      title: "You'll know when they open it",
      outcome: 'Read receipts on every quote — no more "I never got it."',
    },
    {
      title: 'Upload a PDF or photo',
      outcome: 'Drop in a request or receipt — SMASH reads that too.',
    },
  ],
} as const;

export const GMAIL_WHO = {
  eyebrow: 'WHO IT\'S FOR',
  headlineWhite: 'IF YOU QUOTE FROM YOUR INBOX,',
  headlineLime: 'IT\'S DOING YOUR ADMIN.',
  body:
    'Suppliers, plumbers, electricians, consultants, designers, support workers — anyone turning an email into a quote. If the detail is already in the thread, SMASH should be doing the data entry.',
} as const;

export const GMAIL_FINAL_CTA = {
  headlineWhite: 'THE NEXT REQUEST',
  headlineLime: 'IS ALREADY IN YOUR INBOX.',
  subline: 'Install free in Chrome or Edge. No card. Reading your enquiries in under a minute.',
  microcopy: 'Gmail on Chrome & Edge · Built in Byron Bay, New South Wales.',
} as const;

export const GMAIL_FAQS = [
  {
    q: 'Does it work in Chrome and Edge?',
    a: 'Yes. Install from the Chrome Web Store or Microsoft Edge Add-ons — same extension, same Gmail sidebar. Works with Xero and QuickBooks either way.',
  },
  {
    q: 'Who is this for?',
    a: 'Anyone who quotes from Gmail and is tired of copying line items into another system. If the request arrives with the detail already written, SMASH does the data entry for you.',
  },
  {
    q: 'How does it know my prices?',
    a: 'Upload a past invoice or CSV on first sign-in. SMASH learns your rates and SKUs. Every line is matched to your catalogue — nothing invented.',
  },
  {
    q: 'Does it work with Xero and QuickBooks?',
    a: 'Yes. When the quote is ready, push it to Xero or QuickBooks in one click. Your totals and tax region are handled automatically.',
  },
  {
    q: 'Do my customers need an app?',
    a: 'No. They get a professional link in your reply. They view, approve, and pay from their phone browser.',
  },
  {
    q: 'What happens on the free plan?',
    a: 'Your first 5 quotes or invoices each month are free. Upgrade when you need unlimited volume and accounting export.',
  },
] as const;

export const GMAIL_TESTIMONIALS = [
  {
    quote: 'Twenty line items used to take half an hour. Now I check the quote and hit reply.',
    name: 'Rachel M.',
    trade: 'Parts supplier',
    city: 'Melbourne',
  },
  {
    quote: "The from-email button is unreal. Customer writes in, I tap it, quote's done. Didn't type a word.",
    name: 'Chris P.',
    trade: 'Electrician',
    city: 'Sydney',
  },
  {
    quote: 'I used to put off quoting until Friday. Now the quick ones are gone before lunch.',
    name: 'Jake T.',
    trade: 'Plumber',
    city: 'Brisbane',
  },
  {
    quote: 'Sent 12 quotes in one afternoon. That would have taken me all day before.',
    name: 'Sam O.',
    trade: 'Consultant',
    city: 'Auckland',
  },
] as const;
