/** Shared Google Ads gtag snippets for static HTML generators (blog prerender, etc.). */

export const CONVERSION_LABELS = {
  IOS_APP_DOWNLOAD: 'IOS_APP_DOWNLOAD',
  CHROME_EXTENSION_INSTALL: 'CHROME_EXTENSION_INSTALL',
  PRICING_DNA_UPLOAD: 'PRICING_DNA_UPLOAD',
} as const;

export const REMARKETING_LABELS = {
  IOS_PAGE: '3buiCISIwswcEJbTy6MD',
} as const;

const APP_STORE_APP_ID = 'id6759475079';
const CHROME_EXTENSION_ID = 'ilbhjchpeplgaagjkiobgnpgjneeinel';

function sanitizeAdsId(adsId: string): string {
  return adsId.replace(/[^A-Za-z0-9-]/g, '');
}

/** gtag.js loader for static HTML <head>. Returns empty string when adsId is unset. */
export function googleAdsHeadHtml(adsId: string | undefined): string {
  if (!adsId) return '';
  const id = sanitizeAdsId(adsId);
  return `
  <!-- Google Ads (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${id}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}');
  </script>`;
}

/** Delegated store-link conversion tracking for static HTML before </body>. */
export function googleAdsClickTrackingHtml(adsId: string | undefined): string {
  if (!adsId) return '';
  const id = sanitizeAdsId(adsId);
  return `
  <script>
    (function () {
      var ADS_ID = '${id}';
      var APP_ID = '${APP_STORE_APP_ID}';
      var EXT_ID = '${CHROME_EXTENSION_ID}';
      function track(label) {
        if (typeof gtag === 'function') {
          gtag('event', 'conversion', { send_to: ADS_ID + '/' + label, currency: 'AUD', value: 0 });
        }
      }
      document.addEventListener('click', function (e) {
        var a = e.target && e.target.closest ? e.target.closest('a') : null;
        if (!a) return;
        var h = a.getAttribute('href') || '';
        if (h.indexOf('apps.apple.com') !== -1 && h.indexOf(APP_ID) !== -1) {
          track('${CONVERSION_LABELS.IOS_APP_DOWNLOAD}');
        } else if (h.indexOf('chromewebstore.google.com') !== -1 && h.indexOf(EXT_ID) !== -1) {
          track('${CONVERSION_LABELS.CHROME_EXTENSION_INSTALL}');
        }
      }, true);
    })();
  </script>`;
}

/** iOS remarketing event — install on /voice-invoicing after the Google tag. */
export function googleAdsIosRemarketingEventHtml(adsId: string | undefined): string {
  if (!adsId) return '';
  const id = sanitizeAdsId(adsId);
  return `
  <!-- Event snippet for Smash iOS remarketing page -->
  <script>
    gtag('event', 'conversion', {
      send_to: '${id}/${REMARKETING_LABELS.IOS_PAGE}',
      value: 1.0,
      currency: 'AUD',
      aw_remarketing_only: true
    });
  </script>`;
}
