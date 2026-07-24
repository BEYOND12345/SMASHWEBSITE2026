/**
 * Browser helper — fire Meta CAPI Lead alongside the pixel (shared event_id).
 * Uses sendBeacon / fetch keepalive so the request survives App Store navigation.
 */

export type MetaCapiLeadPayload = {
  event_id: string;
  event_source_url: string;
  event_time: number;
  event_name?: string;
  fbp?: string;
  fbc?: string;
  client_user_agent?: string;
  event_label?: string;
  content_name?: string;
};

function readCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function createMetaEventId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

/** Fire-and-forget POST to /api/meta-capi. Never awaits for UX / redirects. */
export function sendMetaCapiLead(options: {
  eventId: string;
  eventLabel?: string;
  contentName?: string;
}): void {
  if (typeof window === 'undefined') return;

  const payload: MetaCapiLeadPayload = {
    event_id: options.eventId,
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    event_source_url: window.location.href,
    client_user_agent: navigator.userAgent,
    fbp: readCookie('_fbp'),
    fbc: readCookie('_fbc'),
  };

  if (options.eventLabel) payload.event_label = options.eventLabel;
  if (options.contentName) payload.content_name = options.contentName;

  const body = JSON.stringify(payload);
  const url = '/api/meta-capi';

  try {
    if (typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([body], { type: 'application/json' });
      if (navigator.sendBeacon(url, blob)) return;
    }
  } catch {
    // fall through to fetch
  }

  try {
    void fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {
      /* never block CTA */
    });
  } catch {
    /* never block CTA */
  }
}
