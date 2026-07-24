/**
 * Start Free → App Store — Meta Lead + GA4 generate_lead, then navigate.
 * Used on /voice-invoicing CTAs (campaign optimisation event).
 *
 * Also sends the same Lead to Meta Conversions API (server-side) with a shared
 * event_id so Meta dedupes browser pixel + CAPI.
 */

import { APP_STORE_URL } from '../data/download-urls';
import { trackIosAppDownload } from './analytics';
import { createMetaEventId, sendMetaCapiLead } from './meta-capi-client';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire Meta Lead + GA4 generate_lead (no navigation). */
export function trackStartFreeLead(eventLabel = 'start_free_click'): void {
  if (typeof window === 'undefined') return;

  const eventId = createMetaEventId();

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {}, { eventID: eventId });
  }

  // Additive CAPI — never blocks redirect; sendBeacon/keepalive before navigate
  sendMetaCapiLead({ eventId, eventLabel });

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
