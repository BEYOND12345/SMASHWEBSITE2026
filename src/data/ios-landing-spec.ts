/** iOS landing page — locked copy & structure from build spec. */

import { VALUE_TESTIMONIALS } from './product-testimonials';

export const IOS_LANDING_SEO = {
  title: 'SMASH — Voice Invoicing. Just Talk, No Typing.',
  description:
    'Speak the job, SMASH builds the quote, your customer approves and pays from a link. Professional, GST-ready invoices in under 60 seconds. iPhone.',
  ogTitle: 'Just talk. SMASH does the rest.',
  ogDescription:
    'The fastest way to send a quote. Speak for 20 seconds — invoice sent before you leave the driveway.',
} as const;

/** Feature-flag: Apple Pay + split payments tiles — enable at soft launch. */
export const IOS_LAUNCH_FEATURES_ENABLED = false;

export type IosStoryScreenId =
  | 'voice'
  | 'quote'
  | 'pricehub'
  | 'send'
  | 'readreceipts'
  | 'pay'
  | 'automessage'
  | 'integrations'
  | 'customers'
  | 'cardpayment';

export type IosCalloutAccent = 'lime' | 'green';

/** Photography backdrop behind the phone on a WHITE story section. */
export type StoryPhoto = {
  /** Desktop source (~1200px wide, WebP/AVIF, < ~150KB). */
  src: string;
  /** Optional art-directed mobile crop (~720px wide) served under 640px. */
  srcMobile?: string;
  /** Decorative by default — leave empty unless the photo carries meaning. */
  alt?: string;
  /** object-position so the subject stays framed when cropped. e.g. 'center', '50% 30%'. */
  focus?: string;
  /** Mobile hero / narrow stacks — often top-weighted so the subject sits above the phone. */
  focusMobile?: string;
  /** Override default cover zoom — see IOS_STORY_PHOTO_COVER_SCALE. */
  coverScale?: number;
  /** Multiplier on breakpoint default zoom — e.g. 0.75 pulls back 25%. */
  coverScaleFactor?: number;
  /** Mobile-only zoom multiplier — pulls back crop on narrow stacked layouts. */
  coverScaleFactorMobile?: number;
  /** Mirror horizontally — useful when art direction needs the subject on the other side. */
  flipX?: boolean;
};

/**
 * Optional photography backdrops, keyed by screen, shown ONLY on white story
 * sections (behind the phone). Drop exports into /public/product/ios/photos/
 * and reference them here. Omit a screen to keep the clean white look.
 *
 * Example:
 *   voice: {
 *     src: '/product/ios/photos/voice.webp',
 *     srcMobile: '/product/ios/photos/voice-mobile.webp',
 *     alt: '',
 *     focus: 'center',
 *   },
 */
export const IOS_STORY_PHOTOS: Partial<Record<IosStoryScreenId, StoryPhoto>> = {};

/** Full-bleed photography background for a story section (photo fills the whole
 *  section, content sits over a dark tint, text flips to white). */
export type StoryPhotoBg = StoryPhoto & {
  /** 0–100 dark-tint strength. ~50 = "slightly dark". Default 55. */
  tint?: number;
};

/**
 * Full-bleed photo backgrounds (keyed by screen).
 * Only even-index story rows render these — odd rows stay solid white or navy.
 */
export const IOS_STORY_PHOTO_BG: Partial<Record<IosStoryScreenId, StoryPhotoBg>> = {
  voice: {
    src: '/product/ios/photos/voice.jpg',
    srcMobile: '/product/ios/photos/voice-mobile.jpg',
    alt: 'Pool technician speaking a job into SMASH by voice beside the pool',
    focus: '62% 42%',
    tint: 52,
  },
  send: {
    src: '/product/ios/photos/send.jpg',
    srcMobile: '/product/ios/photos/send-mobile.jpg',
    alt: 'Tradie sending a quote by voice from the driver’s seat',
    focus: '68% 38%',
    tint: 52,
  },
  cardpayment: {
    src: '/product/ios/photos/cardpayment.jpg',
    srcMobile: '/product/ios/photos/cardpayment-mobile.jpg',
    alt: 'Removalist taking a card payment on site from the back of the truck',
    focus: '58% 45%',
    tint: 52,
  },
  pricehub: {
    src: '/product/ios/photos/customers.jpg',
    srcMobile: '/product/ios/photos/customers-mobile.jpg',
    alt: 'Tradie reviewing saved rates and job history on site',
    focus: 'calc(70% + 200px) 35%',
    tint: 52,
  },
  integrations: {
    src: '/product/ios/photos/automessage.jpg',
    srcMobile: '/product/ios/photos/automessage-mobile.jpg',
    alt: 'Tradie on site with phone ready to sync invoices to accounting software',
    focus: '55% 50%',
    tint: 52,
  },
  readreceipts: {
    src: '/product/ios/photos/readreceipts.jpg',
    srcMobile: '/product/ios/photos/readreceipts-mobile.jpg',
    alt: 'Tradie checking when a customer opened their invoice',
    focus: '55% 45%',
    tint: 52,
  },
  customers: {
    src: '/product/ios/photos/customers.jpg',
    srcMobile: '/product/ios/photos/customers-mobile.jpg',
    alt: 'Tradie reviewing customer job history on site',
    focus: '58% 42%',
    tint: 52,
  },
};

export type IosStorySegment = {
  id: string;
  screen: IosStoryScreenId;
  eyebrow: string;
  headlineWhite: string;
  headlineLime: string;
  subline: string;
  dark?: boolean;
  imageFirst?: boolean;
  callout: {
    side: 'left' | 'right';
    label: string;
    value: string;
    accent: IosCalloutAccent;
    icon?: 'mic' | 'total' | 'check' | 'send' | 'eye' | 'paid';
  };
};

/** §4 — six story segments in scroll order. */
export const IOS_STORY_SEGMENTS: IosStorySegment[] = [
  {
    id: 'voice',
    screen: 'voice',
    eyebrow: "THE JOB'S DONE",
    headlineWhite: 'JUST TALK.',
    headlineLime: "THAT'S THE WHOLE JOB.",
    subline: 'Twenty seconds of talking. No typing, ever.',
    callout: { side: 'left', label: 'CAPTURED', value: 'In your words', accent: 'green', icon: 'mic' },
    dark: false,
    imageFirst: false,
  },
  {
    id: 'quote',
    screen: 'quote',
    eyebrow: 'PRICED IN SECONDS',
    headlineWhite: 'IT ALREADY KNOWS',
    headlineLime: 'YOUR BUSINESS.',
    subline: 'Your rates, your materials, your GST — filled in for you.',
    callout: { side: 'right', label: 'TOTAL', value: '$941.60', accent: 'lime', icon: 'total' },
    dark: true,
    imageFirst: true,
  },
  {
    id: 'send',
    screen: 'send',
    eyebrow: 'SEND IT',
    headlineWhite: 'OUT THE DOOR',
    headlineLime: 'BEFORE YOU ARE.',
    subline: 'One tap — text, email or a link, message written for you.',
    callout: { side: 'left', label: 'SENT', value: 'Tracking link', accent: 'green', icon: 'send' },
    dark: false,
    imageFirst: false,
  },
  {
    id: 'pay',
    screen: 'pay',
    eyebrow: 'GET PAID',
    headlineWhite: 'THEY APPROVE IT.',
    headlineLime: 'THEY PAY.',
    subline: 'One tap from their phone. Paid before the next job starts.',
    callout: { side: 'right', label: 'NO CHASING', value: 'Paid $1,678', accent: 'green', icon: 'paid' },
    dark: true,
    imageFirst: true,
  },
  {
    id: 'cardpayment',
    screen: 'cardpayment',
    eyebrow: 'FRICTIONLESS',
    headlineWhite: 'TAKES CARDS',
    headlineLime: 'ON THE SPOT.',
    subline: 'Let customers tap or enter their card on the link. Secure Stripe checkout.',
    callout: { side: 'left', label: 'SECURE', value: 'Powered by Stripe', accent: 'lime', icon: 'check' },
    dark: false,
    imageFirst: false,
  },
  {
    id: 'readreceipts',
    screen: 'readreceipts',
    eyebrow: 'READ RECEIPTS',
    headlineWhite: "YOU'LL KNOW THE SECOND",
    headlineLime: "IT'S OPENED.",
    subline: 'No more "I never got it." You see exactly where it\'s at.',
    callout: { side: 'left', label: 'SEEN', value: '2 min ago', accent: 'green', icon: 'eye' },
    dark: false,
    imageFirst: false,
  },
  {
    id: 'pricehub',
    screen: 'pricehub',
    eyebrow: 'YOUR KNOWLEDGE BASE',
    headlineWhite: 'YOUR PRICES.',
    headlineLime: 'BUILT IN.',
    subline: 'Save your jobs and rates once. Every quote after is right.',
    callout: { side: 'right', label: 'SET ONCE', value: 'Always accurate', accent: 'green', icon: 'check' },
    dark: true,
    imageFirst: true,
  },
  {
    id: 'automessage',
    screen: 'automessage',
    eyebrow: 'WRITTEN FOR YOU',
    headlineWhite: 'THE MESSAGE',
    headlineLime: 'WRITES ITSELF.',
    subline: 'Professional texts and emails, written for you. Tracking link included.',
    callout: { side: 'left', label: 'NAME, MESSAGE, LINK', value: 'Done for you', accent: 'lime', icon: 'send' },
    dark: false,
    imageFirst: false,
  },
  {
    id: 'integrations',
    screen: 'integrations',
    eyebrow: 'CONNECTED',
    headlineWhite: 'SYNCS WITH',
    headlineLime: 'YOUR TOOLS.',
    subline: 'Invoices flow straight into Xero and QuickBooks. Payments via Stripe.',
    callout: { side: 'right', label: 'NO DOUBLE ENTRY', value: 'It just flows through', accent: 'green', icon: 'check' },
    dark: true,
    imageFirst: true,
  },
  {
    id: 'customers',
    screen: 'customers',
    eyebrow: 'CUSTOMER HISTORY',
    headlineWhite: 'EVERY JOB.',
    headlineLime: 'EVERY DOLLAR.',
    subline: 'A complete history of every customer, what you did, and what they spent.',
    callout: { side: 'left', label: 'HISTORY', value: '4 jobs / $6k', accent: 'lime', icon: 'total' },
    dark: false,
    imageFirst: false,
  },
];

export const IOS_HERO = {
  headlineWhite: 'JUST TALK.',
  headlineLime: 'SMASH DOES THE REST.',
  pricingOffer: {
    prefix: 'Start for free with ',
    highlight: 'five free quotes',
    suffix: ' a month.',
  },
  microcopy: 'Five free quotes · No card needed',
};

/** Photography for the ad landing — each band uses a distinct asset (no repeats). */
export const IOS_AD_LANDING_PHOTOS = {
  hero: {
    src: '/product/ios/photos/ad-landing/gardener.jpg',
    srcMobile: '/product/ios/photos/ad-landing/gardener-mobile.jpg',
    alt: 'Gardener speaking a job into SMASH on his phone beside the mower',
    focus: '78% 50%',
    focusMobile: '70% 32%',
    tint: 54,
  },
  testimonials: {
    src: '/product/home/cleaner-testimonial.jpg',
    alt: 'Cleaner sending an invoice on her phone between jobs',
    focus: '62% 38%',
    focusMobile: '56% 32%',
    coverScaleFactor: 0.9,
    coverScaleFactorMobile: 0.88,
    tint: 44,
  },
  final: {
    src: '/product/ios/photos/ad-landing/snake-catcher.jpg',
    srcMobile: '/product/ios/photos/ad-landing/snake-catcher-mobile.jpg',
    alt: 'Service worker quoting by voice on a suburban street',
    focus: '74% 46%',
    focusMobile: '68% 30%',
    coverScaleFactorMobile: 0.92,
    tint: 50,
  },
} as const;

/** Story backdrops on the slim ad landing — one unique photo per step. */
export const IOS_AD_STORY_PHOTO_BG: Partial<Record<IosStoryScreenId, StoryPhotoBg>> = {
  voice: {
    src: '/product/ios/photos/ad-landing/electrician.jpg',
    srcMobile: '/product/ios/photos/ad-landing/electrician-mobile.jpg',
    alt: 'Electrician capturing a job by voice in the roof space',
    focus: '72% 44%',
    focusMobile: '66% 28%',
    coverScaleFactorMobile: 0.94,
    tint: 56,
  },
  quote: {
    src: '/product/ios/photos/ad-landing/maintenance.jpg',
    srcMobile: '/product/ios/photos/ad-landing/maintenance-mobile.jpg',
    alt: 'Maintenance worker reviewing a priced quote on his phone in the park',
    focus: '74% 52%',
    focusMobile: '68% 30%',
    coverScaleFactorMobile: 0.94,
    tint: 54,
  },
  send: {
    src: '/product/ios/photos/ad-landing/photographer.jpg',
    srcMobile: '/product/ios/photos/ad-landing/photographer-mobile.jpg',
    alt: 'Photographer sending a quote by voice between jobs at an event',
    focus: '52% 42%',
    focusMobile: '50% 28%',
    coverScaleFactorMobile: 0.94,
    tint: 58,
  },
  pay: {
    src: '/product/ios/photos/ad-landing/dog-groomer.jpg',
    srcMobile: '/product/ios/photos/ad-landing/dog-groomer-mobile.jpg',
    alt: 'Dog groomer taking payment on site after the job',
    focus: '56% 46%',
    focusMobile: '52% 30%',
    coverScaleFactorMobile: 0.94,
    tint: 52,
  },
};

/** Core product story on the ad landing — talk → quote → send → paid. */
export const IOS_AD_LANDING_STORY_IDS = ['voice', 'quote', 'send', 'pay'] as const;

export function iosAdLandingStories(): IosStorySegment[] {
  return IOS_AD_LANDING_STORY_IDS.map(
    (id) => IOS_STORY_SEGMENTS.find((s) => s.id === id)!,
  );
}

export const IOS_PROBLEM = {
  eyebrow: 'HOW SMASH WORKS',
  headlineWhite: 'YOU TALK THE JOB.',
  headlineLime: 'SMASH GETS YOU PAID.',
  subline:
    'On site from your catalogue. Estimates to payment and tracking. Xero and QuickBooks — one app. Just talk.',
};

export const IOS_PROOF = {
  eyebrow: 'FROM PEOPLE ON THE TOOLS',
  headlineWhite: 'THEY STOPPED DOING ADMIN.',
  headlineLime: "THEY DIDN'T LOOK BACK.",
  testimonials: VALUE_TESTIMONIALS.slice(0, 3),
};

export const IOS_DESKTOP_BAND = {
  eyebrow: 'IPHONE ON SITE. GMAIL AT YOUR DESK.',
  headlineWhite: 'BACK AT THE LAPTOP,',
  headlineLime: "THE QUOTE'S DONE.",
  body: 'Enquiry in Gmail. Priced from your rates. Synced to Xero or QuickBooks.',
  replyVerb: 'Hit reply',
  linkLabel: 'SMASH for Gmail & Edge →',
  linkHref: '/chrome-extension',
};

export type IosFeatureTile = {
  title: string;
  outcome: string;
  launchOnly?: boolean;
};

export const IOS_FEATURE_TILES: IosFeatureTile[] = [
  {
    title: 'Sent straight to your books',
    outcome: 'Syncs with Xero and QuickBooks. No double entry.',
  },
  {
    title: 'Card payments built in',
    outcome: "They pay on the link. The money's on its way before you've packed up.",
  },
  {
    title: 'The follow-up writes itself',
    outcome: 'Name, message and payment link — done for you.',
  },
  {
    title: 'Apple Pay',
    outcome: 'Tap to pay, right on the iPhone.',
    launchOnly: true,
  },
  {
    title: 'Split payments',
    outcome: 'Deposits and part-payments, sorted.',
    launchOnly: true,
  },
];

export const IOS_FEATURES_SECTION = {
  eyebrow: "AND WHEN THE JOB'S DONE",
  headlineWhite: 'THE BORING STUFF,',
  headlineLime: 'HANDLED.',
};

export const IOS_FINAL_CTA = {
  headlineWhite: 'YOU DO THE WORK.',
  headlineLime: 'SMASH DOES THE REST.',
  subline: 'Accurate quotes from your catalogue.',
  cta: 'Start Free',
  microcopy: IOS_HERO.microcopy,
  integrations: ['Xero', 'QuickBooks', 'Stripe'],
};

export const IOS_PRICING_FOOTNOTE =
  'Five free quotes every month. Paid plans unlock unlimited volume and Xero & QuickBooks sync.';

/** Placeholder slots for media added later. */
export const IOS_MEDIA_SLOTS = {
  heroVideo: null as string | null,
  heroGif: null as string | null,
  storyDemoVideo: null as string | null,
};
