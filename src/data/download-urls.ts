/** Hero demo loops — muted autoplay in page heroes. */
export const HERO_VIDEO_DEFAULT = '/videos/hero-demo.mp4';
/** Original B2B hero animated GIF — Gmail sidebar product loop. */
export const HERO_GIF_B2B = '/gifs/b2b-hero-demo.gif';
/** B2B workflow demo clips — used in staggered sections on /b2b-gmail-quoting. */
export const HERO_VIDEO_B2B_EMAIL_QUOTE = '/videos/email-quote-request-to-sku-quote.mp4';
export const HERO_VIDEO_B2B_PDF_SKU = '/videos/quote-request-pdf-sku-match.mp4';

/** Official download destinations — single source of truth for CTAs site-wide. */
export const APP_STORE_URL =
  'https://apps.apple.com/au/app/smash-invoices/id6759475079';

export const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';

export const EDGE_ADDONS_URL =
  'https://microsoftedge.microsoft.com/addons/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';

/** Alias — same Edge Add-ons listing as EDGE_ADDONS_URL. */
export const EDGE_STORE_URL = EDGE_ADDONS_URL;

/** Primary iOS CTA — hero, inline bands, App Store buttons. */
export const IOS_CTA_LABEL = 'Download the iOS app';

/** Shorter iOS CTA for nav and sticky bar. */
export const NAV_CTA_LABEL = 'Get the app';

/** Same label wherever iOS is shown beside Chrome. */
export const IOS_DOWNLOAD_LABEL = 'Download the iOS app';

/** Chrome extension CTA. */
export const CHROME_CTA_LABEL = 'Add to Chrome — Free';

/** Edge Add-ons CTA — same extension, Edge store listing. */
export const EDGE_CTA_LABEL = 'Add to Edge — Free';

/** Gmail product landing primary CTA — v2 automation page. */
export const GMAIL_LANDING_CTA = 'Install Free';

/** Gmail landing — Chrome Web Store install (Gmail on Chrome). */
export const GMAIL_CHROME_CTA_LABEL = 'Add to Chrome';

/** Gmail landing — Edge Add-ons install (Gmail on Edge). */
export const GMAIL_EDGE_CTA_LABEL = 'Add to Edge';

/** Live Chrome Web Store rating — update when store stats change. */
export const CHROME_STORE_RATING = {
  ratingValue: '4.9',
  reviewCount: '10',
  bestRating: '5',
  worstRating: '1',
} as const;

export const CHROME_STORE_RATING_LABEL = `${CHROME_STORE_RATING.ratingValue} average · ${CHROME_STORE_RATING.reviewCount} Chrome Web Store reviews`;

/** JSON-LD AggregateRating for Chrome extension SoftwareApplication schema. */
export function chromeStoreAggregateRatingSchema() {
  return {
    '@type': 'AggregateRating' as const,
    ratingValue: CHROME_STORE_RATING.ratingValue,
    reviewCount: CHROME_STORE_RATING.reviewCount,
    bestRating: CHROME_STORE_RATING.bestRating,
    worstRating: CHROME_STORE_RATING.worstRating,
  };
}
