/** Official download destinations — single source of truth for CTAs site-wide. */
export const APP_STORE_URL =
  'https://apps.apple.com/au/app/smash-invoices/id6759475079';

export const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';

/** Primary iOS CTA — hero, inline bands, App Store buttons. */
export const IOS_CTA_LABEL = 'Download the iOS app';

/** Shorter iOS CTA for nav and sticky bar. */
export const NAV_CTA_LABEL = 'Get the app';

/** Same label wherever iOS is shown beside Chrome. */
export const IOS_DOWNLOAD_LABEL = 'Download the iOS app';

/** Chrome extension CTA. */
export const CHROME_CTA_LABEL = 'Add to Chrome — Free';

/** Live Chrome Web Store rating — update when store stats change. */
export const CHROME_STORE_RATING = {
  ratingValue: '5',
  reviewCount: '15',
  bestRating: '5',
  worstRating: '1',
} as const;

export const CHROME_STORE_RATING_LABEL = `${CHROME_STORE_RATING.ratingValue}.0 · ${CHROME_STORE_RATING.reviewCount} Chrome Web Store reviews`;

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
