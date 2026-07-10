# Deploy: demo-voice-quote

Public homepage try-it is **gated off** until launch. Test at `/internal/try-it` with `npm run dev`.

Accepts audio (Deepgram) or JSON transcript, matches the demo catalogue, returns AU GST quote.

## 1. Set the Deepgram API key (server secret — never in Vite)

### Option A — CLI

```bash
# Get a key from https://console.deepgram.com/ → API Keys
supabase secrets set DEEPGRAM_API_KEY=YOUR_DEEPGRAM_KEY --project-ref mwshohajbmfmuphloqzd
```

### Option B — Dashboard

1. Open [Supabase → Project Settings → Edge Functions → Secrets](https://supabase.com/dashboard/project/mwshohajbmfmuphloqzd/settings/functions)
2. Add secret name: `DEEPGRAM_API_KEY`
3. Paste your Deepgram key → Save

Redeploy is usually not required for secrets (new invokes pick them up). If voice still fails:

```bash
supabase functions deploy demo-voice-quote --project-ref mwshohajbmfmuphloqzd
```

## 2. Test internally (not on the public homepage)

```bash
npm run dev
# open http://localhost:5173/internal/try-it
```

- **Typed jobs** work without Deepgram (local/edge catalogue match).
- **Voice** needs `DEEPGRAM_API_KEY` set as above.

Production builds hide Try It unless you set `VITE_ENABLE_VOICE_DEMO=true` (do **not** set this on Netlify until launch).

## 3. Verify the function

```bash
curl -X POST "$VITE_SUPABASE_URL/functions/v1/demo-voice-quote" \
  -H "Authorization: Bearer $VITE_SUPABASE_ANON_KEY" \
  -H "apikey: $VITE_SUPABASE_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"transcript":"Gutters cleaned, two-storey house"}'
```

## When ready to launch publicly

1. Confirm voice + typed flows on `/internal/try-it`
2. Set `VITE_ENABLE_VOICE_DEMO=true` in Netlify/production env
3. Redeploy the site (homepage shows Try It Now + section)
