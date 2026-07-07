/**
 * Meta (Facebook) Pixel for smashinvoices.com.
 *
 * Set VITE_META_PIXEL_ID in .env (numeric ID from Meta Events Manager).
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined;

const APP_STORE_APP_ID = 'id6759475079';
const CHROME_EXTENSION_ID = 'ilbhjchpeplgaagjkiobgnpgjneeinel';

export function isMetaPixelEnabled(): boolean {
  return Boolean(PIXEL_ID && typeof window !== 'undefined');
}

/** Load fbevents.js once when VITE_META_PIXEL_ID is set. Does not fire PageView. */
export function initMetaPixel(): void {
  if (!PIXEL_ID || typeof document === 'undefined') return;
  if (document.querySelector('script[data-smash-meta-pixel]')) return;

  const script = document.createElement('script');
  script.dataset.smashMetaPixel = 'true';
  script.textContent = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID.replace(/[^0-9]/g, '')}');`;
  document.head.appendChild(script);
}

export function trackMetaPageView(): void {
  if (!PIXEL_ID || typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'PageView');
}

export function trackMetaLead(contentName: string): void {
  if (!PIXEL_ID || typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'Lead', { content_name: contentName });
}

function hrefIsAppStore(href: string): boolean {
  return href.includes('apps.apple.com') && href.includes(APP_STORE_APP_ID);
}

function hrefIsChromeStore(href: string): boolean {
  return href.includes('chromewebstore.google.com') && href.includes(CHROME_EXTENSION_ID);
}

/** Delegated click listener for App Store / Chrome Web Store links. */
export function bindMetaPixelStoreLinkTracking(): void {
  if (typeof document === 'undefined') return;

  document.addEventListener(
    'click',
    (event) => {
      const anchor = (event.target as HTMLElement | null)?.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') ?? '';
      if (!href) return;

      if (hrefIsAppStore(href)) {
        trackMetaLead('iOS App Download');
      } else if (hrefIsChromeStore(href)) {
        trackMetaLead('Chrome Extension Install');
      }
    },
    true,
  );
}
