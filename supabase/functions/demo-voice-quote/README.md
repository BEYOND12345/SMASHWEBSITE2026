# Deploy: demo-voice-quote

Public homepage try-it flow. Accepts audio (Deepgram) or JSON transcript, matches the demo catalogue, returns AU GST quote.

## Secrets (Supabase project `mwshohajbmfmuphloqzd`)

```bash
supabase secrets set DEEPGRAM_API_KEY=your_key --project-ref mwshohajbmfmuphloqzd
supabase functions deploy demo-voice-quote --project-ref mwshohajbmfmuphloqzd
```

Without `DEEPGRAM_API_KEY`, typed jobs still work; voice recording returns a clear error.

## Verify

```bash
curl -X POST "$VITE_SUPABASE_URL/functions/v1/demo-voice-quote" \
  -H "Authorization: Bearer $VITE_SUPABASE_ANON_KEY" \
  -H "apikey: $VITE_SUPABASE_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"transcript":"Gutters cleaned, two-storey house"}'
```
