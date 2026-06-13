/**
 * Google Ads conversion tracking for smashinvoices.com.
 *
 * Set VITE_GOOGLE_ADS_ID in .env (e.g. AW-1234567890) and create matching
 * conversion actions in Google Ads with these exact labels:
 *   - IOS_APP_DOWNLOAD
 *   - CHROME_EXTENSION_INSTALL
 *   - PRICING_DNA_UPLOAD (app/extension onboarding — not used on marketing site)
 */

export const CONVERSION_LABELS = {
  IOS_APP_DOWNLOAD: 'IOS_APP_DOWNLOAD',
  CHROME_EXTENSION_INSTALL: 'CHROME_EXTENSION_INSTALL',
  PRICING_DNA_UPLOAD: 'PRICING_DNA_UPLOAD',
} as const;

export type ConversionLabel = (typeof CONVERSION_LABELS)[keyof typeof CONVERSION_LABELS];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined;

export function isGoogleAdsEnabled(): boolean {
  return Boolean(ADS_ID && typeof window !== 'undefined');
}

/** Load gtag.js once when VITE_GOOGLE_ADS_ID is set. */
export function initGoogleAds(): void {
  if (!ADS_ID || typeof document === 'undefined') return;
  if (document.querySelector('script[data-smash-gtag]')) return;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', ADS_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ADS_ID)}`;
  script.dataset.smashGtag = 'true';
  document.head.appendChild(script);
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
