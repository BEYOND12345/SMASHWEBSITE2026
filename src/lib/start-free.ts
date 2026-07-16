/**
 * Start Free → App Store — Meta Lead + GA4 generate_lead, then navigate.
 * Used on /voice-invoicing CTAs (campaign optimisation event).
 */

import { APP_STORE_URL } from '../data/download-urls';
import { trackIosAppDownload } from './analytics';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire Meta Lead + GA4 generate_lead (no navigation). */
export function trackStartFreeLead(eventLabel = 'start_free_click'): void {
  if (typeof window === 'undefined') return;

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead');
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      event_category: 'signup',
      event_label: eventLabel,
    });
  }

  trackIosAppDownload();
}

/**
 * Track then open the App Store after a short delay so pixels flush
 * before the page unloads. Mark CTAs with data-smash-start-free so
 * delegated store-link listeners do not double-fire Lead.
 */
export function handleStartFree(
  event?: { preventDefault: () => void },
  eventLabel = 'start_free_click',
): void {
  event?.preventDefault();
  trackStartFreeLead(eventLabel);
  window.setTimeout(() => {
    window.location.href = APP_STORE_URL;
  }, 150);
}
