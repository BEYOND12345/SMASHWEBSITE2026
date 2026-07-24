/**
 * Vercel serverless — POST /api/meta-capi
 * Forwards Lead events to Meta Conversions API (deduped via event_id).
 */

import {
  clientIpFromHeaders,
  parseJsonBody,
  sendMetaLeadEvent,
  type MetaCapiClientBody,
} from '../server/meta-capi';

type VercelReq = {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
};

type VercelRes = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => VercelRes;
  json: (body: unknown) => void;
  end: () => void;
};

function cors(res: VercelRes): void {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req: VercelReq, res: VercelRes): Promise<void> {
  cors(res);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const accessToken = process.env.META_CAPI_TOKEN?.trim();
  if (!accessToken) {
    console.error('[meta-capi] META_CAPI_TOKEN is not set');
    res.status(500).json({ error: 'Server misconfigured' });
    return;
  }

  const body: MetaCapiClientBody = parseJsonBody(req.body);
  const result = await sendMetaLeadEvent({
    body,
    clientIp: clientIpFromHeaders(req.headers),
    fallbackUserAgent: (() => {
      const ua = req.headers['user-agent'];
      return Array.isArray(ua) ? ua[0] : ua;
    })(),
    accessToken,
    testEventCode: process.env.META_CAPI_TEST_EVENT_CODE,
  });

  if (!result.ok) {
    res.status(result.status >= 400 && result.status < 600 ? result.status : 502).json({
      error: result.error,
    });
    return;
  }

  res.status(200).json({ success: true, events_received: result.events_received });
}
