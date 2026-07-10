/**
 * Google Ads + GA4 tracking for smashinvoices.com.
 *
 * Env:
 *   VITE_GOOGLE_ADS_ID — e.g. AW-879946134
 *   VITE_GA4_MEASUREMENT_ID — e.g. G-R4CC42WMM6
 *
 * Google Ads conversion labels (create matching actions in Ads):
 *   - IOS_APP_DOWNLOAD
 *   - CHROME_EXTENSION_INSTALL
 *   - PRICING_DNA_UPLOAD (app/extension onboarding — not used on marketing site)
 */

export const CONVERSION_LABELS = {
  IOS_APP_DOWNLOAD: 'IOS_APP_DOWNLOAD',
  CHROME_EXTENSION_INSTALL: 'CHROME_EXTENSION_INSTALL',
  PRICING_DNA_UPLOAD: 'PRICING_DNA_UPLOAD',
} as const;

/** Google Ads remarketing / conversion action labels (send_to suffix). */
export const REMARKETING_LABELS = {
  /** Smash iOS remarketing page — /voice-invoicing */
  IOS_PAGE: '3buiCISIwswcEJbTy6MD',
} as const;

export type ConversionLabel = (typeof CONVERSION_LABELS)[keyof typeof CONVERSION_LABELS];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined;
const GA4_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined;

export function isGoogleAdsEnabled(): boolean {
  return Boolean(ADS_ID && typeof window !== 'undefined');
}

export function isGa4Enabled(): boolean {
  return Boolean(GA4_ID && typeof window !== 'undefined');
}

/** Ensure gtag is ready; skip re-loading if index.html already installed the tag. */
export function initGoogleAds(): void {
  if ((!ADS_ID && !GA4_ID) || typeof document === 'undefined') return;

  window.dataLayer = window.dataLayer ?? [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }

  // index.html ships the official snippet — don't inject a second gtag.js.
  const htmlAlreadyHasTag =
    Boolean(document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) ||
    Boolean(document.querySelector('script[data-smash-gtag]'));

  if (htmlAlreadyHasTag) return;

  window.gtag('js', new Date());
  if (ADS_ID) window.gtag('config', ADS_ID);
  if (GA4_ID) window.gtag('config', GA4_ID, { send_page_view: true });

  const script = document.createElement('script');
  script.async = true;
  const loaderId = GA4_ID ?? ADS_ID!;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(loaderId)}`;
  script.dataset.smashGtag = 'true';
  document.head.appendChild(script);
}

/** SPA route change — keep GA4 page_path in sync with React Router. */
export function trackGa4PageView(path?: string): void {
  if (!GA4_ID || typeof window === 'undefined' || !window.gtag) return;

  const pagePath = path ?? `${window.location.pathname}${window.location.search}`;
  window.gtag('config', GA4_ID, {
    page_path: pagePath,
    page_title: document.title,
  });
}

/** Fire a Google Ads conversion event. No-op when gtag or ADS_ID is missing. */
export function trackConversion(actionLabel: ConversionLabel): void {
  if (!ADS_ID || typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'conversion', {
    send_to: `${ADS_ID}/${actionLabel}`,
    currency: 'AUD',
    value: 0.0,
  });
}

export function trackIosAppDownload(): void {
  trackConversion(CONVERSION_LABELS.IOS_APP_DOWNLOAD);
}

export function trackChromeExtensionInstall(): void {
  trackConversion(CONVERSION_LABELS.CHROME_EXTENSION_INSTALL);
}

/** Fire on /voice-invoicing — Google Ads iOS remarketing audience. */
export function trackIosRemarketingPageView(): void {
  if (!ADS_ID || typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'conversion', {
    send_to: `${ADS_ID}/${REMARKETING_LABELS.IOS_PAGE}`,
    value: 1.0,
    currency: 'AUD',
    aw_remarketing_only: true,
  });
}

/** Call from iOS app or Chrome extension when user uploads onboarding invoice PDF. */
export function trackPricingDnaUpload(): void {
  trackConversion(CONVERSION_LABELS.PRICING_DNA_UPLOAD);
}

const APP_STORE_APP_ID = 'id6759475079';
const CHROME_EXTENSION_ID = 'ilbhjchpeplgaagjkiobgnpgjneeinel';

function hrefIsAppStore(href: string): boolean {
  return href.includes('apps.apple.com') && href.includes(APP_STORE_APP_ID);
}

function hrefIsChromeStore(href: string): boolean {
  return href.includes('chromewebstore.google.com') && href.includes(CHROME_EXTENSION_ID);
}

/** Delegated click listener — covers Nav, Footer, blog CTAs, and all <a> store links. */
export function bindStoreLinkConversionTracking(): void {
  if (typeof document === 'undefined') return;

  document.addEventListener(
    'click',
    (event) => {
      const anchor = (event.target as HTMLElement | null)?.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') ?? '';
      if (!href) return;

      if (hrefIsAppStore(href)) {
        trackIosAppDownload();
      } else if (hrefIsChromeStore(href)) {
        trackChromeExtensionInstall();
      }
    },
    true,
  );
}
