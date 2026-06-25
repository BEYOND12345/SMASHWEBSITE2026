/** App Store product-story frames — synced with smash-templates / ios_html. */
export type IosAppFrame = {
  id: string;
  image: string;
  eyebrow: string;
  headline: string;
  alt: string;
};

export type IosAppScreenType =
  | 'voice'
  | 'quote'
  | 'estimates'
  | 'invoices'
  | 'portal'
  | 'invoice'
  | 'pricing'
  | 'customer-detail'
  | 'send'
  | 'read-receipts';

export type IosAppStory = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: [string, string][];
  dark?: boolean;
  imageFirst?: boolean;
  screen: IosAppScreenType;
  /** Optional PNG fallback for interim phone-only use */
  frameImage?: string;
};

export type IosAppCapability = {
  title: string;
  body: string;
};

export const IOS_APP_STORE_URL =
  'https://apps.apple.com/au/app/smash-invoices/id6759475079';

/** Curated story sections — 6 blocks from 9 App Store frames. */
export const IOS_APP_STORIES: IosAppStory[] = [
  {
    id: 'voice',
    eyebrow: 'Voice to invoice',
    title: 'Stop typing.\nJust talk.',
    body: 'Open SMASH on site, tap Start Recording, and describe the job the way you would to a mate — materials, hours, call-out fee. SMASH builds a priced draft in under 60 seconds.',
    bullets: [
      ['Start Recording', 'Hold and talk naturally. Line items fill in as you speak.'],
      ['Your catalog', 'Speech maps to your Price Hub — unmatched items are flagged, not guessed.'],
      ['Verify before send', 'Review the draft, fix anything flagged, then send from your phone.'],
    ],
    dark: false,
    imageFirst: false,
    screen: 'voice',
    frameImage: '/product/ios/frames/ios_frame1_voice.png',
  },
  {
    id: 'itemised',
    eyebrow: 'Built line by line',
    title: 'Itemised.\nPriced.\nInstantly.',
    body: 'Every material, hour and fee lands as a structured line item with GST calculated. No spreadsheet. No template wrestling. Just a professional quote ready to send.',
    bullets: [
      ['Materials matched', 'Trade catalog items priced from your saved rates.'],
      ['Labour and fees', 'Call-out, travel and hourly rates applied automatically.'],
      ['GST ready', 'ATO-compliant tax invoice layout for Australian operators.'],
    ],
    dark: true,
    imageFirst: true,
    screen: 'quote',
    frameImage: '/product/ios/frames/ios_frame2_itemised.png',
  },
  {
    id: 'send-pay',
    eyebrow: 'Send it fast',
    title: 'Send it.\nThey approve.\nThey pay.',
    body: 'Share by SMS, email or copy link — however your customer prefers. They open a clean portal, tap Approve, tap Pay. You stop chasing.',
    bullets: [
      ['Send your way', 'SMS, email, share sheet or copy link — one tap from the app.'],
      ['Customer portal', 'Professional web link. No app download for them.'],
      ['Get paid faster', 'Approve and pay from their phone browser.'],
    ],
    dark: false,
    imageFirst: false,
    screen: 'portal',
    frameImage: '/product/ios/frames/ios_frame3_send.png',
  },
  {
    id: 'read-receipts',
    eyebrow: 'Read receipts',
    title: "You'll know\nthe second\nit's opened.",
    body: 'Every quote and invoice tracks when your customer opens it. Stop wondering if they saw it — follow up when it matters, not when you are guessing.',
    bullets: [
      ['Seen status', 'Job list shows opened, sent and paid at a glance.'],
      ['No more chasing', 'Know before you call whether they have read it.'],
      ['Every document', 'Quotes, invoices and reminders — all tracked.'],
    ],
    dark: true,
    imageFirst: true,
    screen: 'read-receipts',
    frameImage: '/product/ios/frames/ios_frame5_readreceipts.png',
  },
  {
    id: 'price-hub',
    eyebrow: 'Your knowledge base',
    title: 'Your prices.\nBuilt in.',
    body: 'Your Price Hub is your personal catalog — labour rates, service types, materials and fees. Upload one old invoice at signup and SMASH learns your pricing style.',
    bullets: [
      ['Upload one invoice', 'SMASH extracts your rates and builds your catalog.'],
      ['2,250+ materials', 'Pre-priced trade materials for AU, NZ, UK, US and Canada.'],
      ['Gets smarter', 'The more jobs you run, the better it matches your patterns.'],
    ],
    dark: false,
    imageFirst: false,
    screen: 'pricing',
    frameImage: '/product/ios/frames/ios_frame6_pricehub.png',
  },
  {
    id: 'customers',
    eyebrow: 'Customer history',
    title: 'Every job.\nEvery dollar.',
    body: 'Every customer, every quote and every invoice in one place. Tap a name to see job history, revenue and when you last worked together.',
    bullets: [
      ['Full history', 'Jobs, quotes and invoices linked to each customer.'],
      ['Revenue at a glance', 'See lifetime value without digging through emails.'],
      ['Repeat work fast', 'Duplicate a past job as a new draft in one tap.'],
    ],
    dark: true,
    imageFirst: true,
    screen: 'customer-detail',
    frameImage: '/product/ios/frames/ios_frame9_customers.png',
  },
];

/** Remaining features for the capability grid. */
export const IOS_APP_CAPABILITIES: IosAppCapability[] = [
  {
    title: 'Auto-written messages',
    body: 'Pre-written SMS and email with your estimate link — edit or send as-is.',
  },
  {
    title: 'Xero + QuickBooks',
    body: 'Push completed invoices straight to your accounting software. No double entry.',
  },
  {
    title: 'Stripe payments',
    body: 'Customers pay by card from the portal link. Funds land in your account.',
  },
  {
    title: 'NDIS ready',
    body: 'Participant numbers print automatically in the Bill To block when saved.',
  },
  {
    title: 'Multi-region tax',
    body: 'GST, VAT and local currency built in for AU, NZ, UK, US and Canada.',
  },
  {
    title: 'Gmail on desktop',
    body: 'Same pricing DNA in the Chrome extension — voice or From Email in your inbox.',
  },
  {
    title: 'Repeat invoices',
    body: 'Duplicate a sent or paid invoice as a new draft. Perfect for recurring work.',
  },
  {
    title: 'Privacy first',
    body: 'Voice recordings are deleted immediately after transcription. Your data stays yours.',
  },
];

export const IOS_FIELD_TESTIMONIALS = [
  {
    quote: 'Finished a bathroom reno, talked the invoice in the car park. Sent before I hit the highway.',
    name: 'Tom H.',
    trade: 'Plumber',
    city: 'Perth',
  },
  {
    quote: 'My Price Hub knows my rates for every clean type. I just describe the job and verify.',
    name: 'Priya K.',
    trade: 'Cleaner',
    city: 'Melbourne',
  },
  {
    quote: 'Read receipts changed everything. I know when to follow up instead of guessing.',
    name: 'Marcus W.',
    trade: 'Electrician',
    city: 'Brisbane',
  },
  {
    quote: 'Customer approved and paid from the link while I was still on site. No chasing.',
    name: 'Jake T.',
    trade: 'Handyman',
    city: 'Sydney',
  },
] as const;

/** Legacy frame PNGs — kept for reference / interim fallback. */
export const IOS_APP_FRAMES: IosAppFrame[] = [
  {
    id: 'voice',
    image: '/product/ios/frames/ios_frame1_voice.png',
    eyebrow: 'Voice to invoice',
    headline: 'You do the work. Smash does the rest.',
    alt: 'SMASH voice assistant listening and building a quote from speech',
  },
  {
    id: 'itemised',
    image: '/product/ios/frames/ios_frame2_itemised.png',
    eyebrow: 'Built line by line',
    headline: 'Itemised. Priced. Instantly.',
    alt: 'Itemised quote with materials, labour, fees and total',
  },
  {
    id: 'send',
    image: '/product/ios/frames/ios_frame3_send.png',
    eyebrow: 'Send it fast',
    headline: 'Send it your way.',
    alt: 'Send estimate sheet with tracking link, share, email, SMS and copy',
  },
  {
    id: 'pay',
    image: '/product/ios/frames/ios_frame4_pay.png',
    eyebrow: 'No chasing',
    headline: 'They approve. They pay.',
    alt: 'Paid invoice list and customer approval portal',
  },
  {
    id: 'read-receipts',
    image: '/product/ios/frames/ios_frame5_readreceipts.png',
    eyebrow: 'Read receipts',
    headline: "You'll know the second it's opened.",
    alt: 'Job list with seen status and read receipt callout',
  },
  {
    id: 'price-hub',
    image: '/product/ios/frames/ios_frame6_pricehub.png',
    eyebrow: 'Your knowledge base',
    headline: 'Your prices. Built in.',
    alt: 'Price Hub services catalogue with saved rates',
  },
  {
    id: 'auto-message',
    image: '/product/ios/frames/ios_frame7_automessage.png',
    eyebrow: 'Written for you',
    headline: 'The message writes itself.',
    alt: 'Pre-written iMessage with estimate link',
  },
  {
    id: 'integrations',
    image: '/product/ios/frames/ios_frame8_integrations.png',
    eyebrow: 'Connected',
    headline: 'Syncs with your tools.',
    alt: 'Xero, QuickBooks and Stripe integrations synced',
  },
  {
    id: 'customers',
    image: '/product/ios/frames/ios_frame9_customers.png',
    eyebrow: 'Customer history',
    headline: 'Every job. Every dollar.',
    alt: 'Customer list and profile with jobs, revenue and last job date',
  },
];
