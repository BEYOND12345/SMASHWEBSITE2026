/** Shared Meta (Facebook) Pixel snippets for static HTML generators. */

const APP_STORE_APP_ID = 'id6759475079';
const CHROME_EXTENSION_ID = 'ilbhjchpeplgaagjkiobgnpgjneeinel';

function sanitizePixelId(pixelId: string): string {
  return pixelId.replace(/[^0-9]/g, '');
}

/** Meta Pixel base code for static HTML <head>. Returns empty string when pixelId is unset. */
export function metaPixelHeadHtml(pixelId: string | undefined): string {
  if (!pixelId) return '';
  const id = sanitizePixelId(pixelId);
  if (!id) return '';

  return `
  <!-- Meta Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${id}');
    fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1"
    alt="" /></noscript>`;
}

/** Delegated store-link Lead events for static HTML before </body>. */
export function metaPixelClickTrackingHtml(pixelId: string | undefined): string {
  if (!pixelId) return '';
  const id = sanitizePixelId(pixelId);
  if (!id) return '';

  return `
  <script>
    (function () {
      if (typeof fbq !== 'function') return;
      var APP_ID = '${APP_STORE_APP_ID}';
      var EXT_ID = '${CHROME_EXTENSION_ID}';
      document.addEventListener('click', function (e) {
        var a = e.target && e.target.closest ? e.target.closest('a') : null;
        if (!a) return;
        var h = a.getAttribute('href') || '';
        if (h.indexOf('apps.apple.com') !== -1 && h.indexOf(APP_ID) !== -1) {
          fbq('track', 'Lead', { content_name: 'iOS App Download' });
        } else if (h.indexOf('chromewebstore.google.com') !== -1 && h.indexOf(EXT_ID) !== -1) {
          fbq('track', 'Lead', { content_name: 'Chrome Extension Install' });
        }
      }, true);
    })();
  </script>`;
}
