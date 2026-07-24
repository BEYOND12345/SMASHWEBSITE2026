/**
 * Netlify serverless — served at /api/meta-capi via redirect.
 * smashinvoices.com production is Netlify; mirrors Vercel /api/meta-capi.
 */

import {
  clientIpFromHeaders,
  parseJsonBody,
  sendMetaLeadEvent,
} from '../../server/meta-capi';

type NetlifyEvent = {
  httpMethod: string;
  headers: Record<string, string | undefined>;
  body: string | null;
  isBase64Encoded?: boolean;
};

type NetlifyResult = {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
};

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function handler(event: NetlifyEvent): Promise<NetlifyResult> {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: JSON_HEADERS, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: JSON_HEADERS,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const accessToken = process.env.META_CAPI_TOKEN?.trim();
  if (!accessToken) {
    console.error('[meta-capi] META_CAPI_TOKEN is not set');
    return {
      statusCode: 500,
      headers: JSON_HEADERS,
      body: JSON.stringify({ error: 'Server misconfigured' }),
    };
  }

  let rawBody = event.body ?? '';
  if (event.isBase64Encoded && rawBody) {
    rawBody = Buffer.from(rawBody, 'base64').toString('utf8');
  }

  const body = parseJsonBody(rawBody);
  const headers: Record<string, string | string[] | undefined> = { ...event.headers };

  const result = await sendMetaLeadEvent({
    body,
    clientIp: clientIpFromHeaders(headers),
    fallbackUserAgent: event.headers['user-agent'] || event.headers['User-Agent'],
    accessToken,
    testEventCode: process.env.META_CAPI_TEST_EVENT_CODE,
  });

  if (!result.ok) {
    return {
      statusCode: result.status >= 400 && result.status < 600 ? result.status : 502,
      headers: JSON_HEADERS,
      body: JSON.stringify({ error: result.error }),
    };
  }

  return {
    statusCode: 200,
    headers: JSON_HEADERS,
    body: JSON.stringify({ success: true, events_received: result.events_received }),
  };
}
