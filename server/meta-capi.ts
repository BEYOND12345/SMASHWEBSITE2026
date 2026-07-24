/**
 * Shared Meta Conversions API (CAPI) Lead sender.
 * Used by Vercel `/api/meta-capi` and Netlify `meta-capi` function.
 */

import { createHash } from 'node:crypto';

export const META_PIXEL_ID = '947924878263035';
export const META_GRAPH_URL = `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events`;

/** Fields Meta expects hashed (SHA-256, normalised) when present. */
const HASH_FIELDS = [
  'em',
  'ph',
  'fn',
  'ln',
  'ge',
  'db',
  'ct',
  'st',
  'zp',
  'country',
  'external_id',
] as const;

export type MetaCapiClientBody = {
  event_id?: string;
  event_name?: string;
  event_source_url?: string;
  event_time?: number;
  fbp?: string;
  fbc?: string;
  client_user_agent?: string;
  event_label?: string;
  content_name?: string;
  /** Optional PII — server hashes before send */
  em?: string;
  ph?: string;
  fn?: string;
  ln?: string;
  ge?: string;
  db?: string;
  ct?: string;
  st?: string;
  zp?: string;
  country?: string;
  external_id?: string;
};

export type MetaCapiResult =
  | { ok: true; events_received?: number }
  | { ok: false; status: number; error: string };

function sha256Normalised(value: string): string {
  const normalised = value.trim().toLowerCase();
  return createHash('sha256').update(normalised).digest('hex');
}

function firstHeader(
  headers: Record<string, string | string[] | undefined> | undefined,
  name: string,
): string | undefined {
  if (!headers) return undefined;
  const raw = headers[name] ?? headers[name.toLowerCase()];
  if (Array.isArray(raw)) return raw[0];
  return raw;
}

/** Prefer real client IP from edge / proxy headers. */
export function clientIpFromHeaders(
  headers: Record<string, string | string[] | undefined>,
): string | undefined {
  const forwarded = firstHeader(headers, 'x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  return (
    firstHeader(headers, 'x-nf-client-connection-ip') ||
    firstHeader(headers, 'x-real-ip') ||
    firstHeader(headers, 'cf-connecting-ip') ||
    undefined
  );
}

function buildUserData(
  body: MetaCapiClientBody,
  clientIp: string | undefined,
  fallbackUa: string | undefined,
): Record<string, string | string[]> {
  const userData: Record<string, string | string[]> = {};

  const ip = clientIp?.trim();
  if (ip) userData.client_ip_address = ip;

  const ua = (body.client_user_agent || fallbackUa || '').trim();
  if (ua) userData.client_user_agent = ua;

  if (body.fbp?.trim()) userData.fbp = body.fbp.trim();
  if (body.fbc?.trim()) userData.fbc = body.fbc.trim();

  for (const key of HASH_FIELDS) {
    const raw = body[key];
    if (typeof raw === 'string' && raw.trim()) {
      userData[key] = [sha256Normalised(raw)];
    }
  }

  return userData;
}

export async function sendMetaLeadEvent(options: {
  body: MetaCapiClientBody;
  clientIp?: string;
  fallbackUserAgent?: string;
  accessToken: string;
  testEventCode?: string;
}): Promise<MetaCapiResult> {
  const { body, clientIp, fallbackUserAgent, accessToken, testEventCode } = options;

  const eventId = body.event_id?.trim();
  if (!eventId) {
    return { ok: false, status: 400, error: 'event_id is required' };
  }

  const eventTime =
    typeof body.event_time === 'number' && Number.isFinite(body.event_time)
      ? Math.floor(body.event_time)
      : Math.floor(Date.now() / 1000);

  const eventSourceUrl = (body.event_source_url || '').trim();
  const customData: Record<string, string> = {};
  if (body.event_label?.trim()) customData.event_label = body.event_label.trim();
  if (body.content_name?.trim()) customData.content_name = body.content_name.trim();

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: body.event_name?.trim() || 'Lead',
        event_time: eventTime,
        event_id: eventId,
        event_source_url: eventSourceUrl || undefined,
        action_source: 'website',
        user_data: buildUserData(body, clientIp, fallbackUserAgent),
        ...(Object.keys(customData).length ? { custom_data: customData } : {}),
      },
    ],
  };

  if (testEventCode?.trim()) {
    payload.test_event_code = testEventCode.trim();
  }

  const url = `${META_GRAPH_URL}?access_token=${encodeURIComponent(accessToken)}`;

  let response: Response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[meta-capi] network error', message);
    return { ok: false, status: 502, error: message };
  }

  const text = await response.text();
  let json: { events_received?: number; error?: { message?: string } } = {};
  try {
    json = text ? (JSON.parse(text) as typeof json) : {};
  } catch {
    json = {};
  }

  if (!response.ok) {
    const message = json.error?.message || text || response.statusText;
    console.error('[meta-capi] Meta API error', response.status, message);
    return { ok: false, status: response.status, error: message };
  }

  return { ok: true, events_received: json.events_received };
}

export function parseJsonBody(raw: unknown): MetaCapiClientBody {
  if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
    return raw as MetaCapiClientBody;
  }
  if (typeof raw === 'string' && raw.trim()) {
    try {
      return JSON.parse(raw) as MetaCapiClientBody;
    } catch {
      return {};
    }
  }
  return {};
}
