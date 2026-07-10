import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { buildDemoQuoteFromTranscript } from "./catalogue.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const MAX_AUDIO_BYTES = 3 * 1024 * 1024;
const MAX_TRANSCRIPT_CHARS = 2000;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 20;

/** Per-isolate rate limit — good enough for demo abuse dampening. */
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function clientIp(req: Request): string {
  return (
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_LIMIT_MAX) return false;
  bucket.count += 1;
  return true;
}

async function transcribeWithDeepgram(audio: ArrayBuffer, contentType: string): Promise<string> {
  const apiKey = Deno.env.get("DEEPGRAM_API_KEY");
  if (!apiKey) {
    throw new Error("DEEPGRAM_NOT_CONFIGURED");
  }

  const params = new URLSearchParams({
    model: "nova-3",
    smart_format: "true",
    punctuate: "true",
    language: "en",
  });

  const response = await fetch(`https://api.deepgram.com/v1/listen?${params}`, {
    method: "POST",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": contentType || "audio/webm",
    },
    body: audio,
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Deepgram error:", response.status, detail);
    throw new Error("TRANSCRIBE_FAILED");
  }

  const data = await response.json();
  const transcript =
    data?.results?.channels?.[0]?.alternatives?.[0]?.transcript?.trim() ?? "";
  return transcript;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ success: false, error: "Method not allowed", code: "method" }, 405);
  }

  const ip = clientIp(req);
  if (!checkRateLimit(ip)) {
    return jsonResponse(
      { success: false, error: "Too many tries — wait a bit and try again", code: "rate_limit" },
      429,
    );
  }

  const started = Date.now();

  try {
    let transcript = "";
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      const textField = form.get("transcript");
      if (typeof textField === "string" && textField.trim()) {
        transcript = textField.trim().slice(0, MAX_TRANSCRIPT_CHARS);
      }

      const audioField = form.get("audio");
      if (audioField instanceof File || audioField instanceof Blob) {
        const buf = await audioField.arrayBuffer();
        if (buf.byteLength > MAX_AUDIO_BYTES) {
          return jsonResponse(
            { success: false, error: "Recording too long — keep it under 30 seconds", code: "audio_too_large" },
            400,
          );
        }
        if (buf.byteLength > 0) {
          const mime =
            (audioField as File).type ||
            (typeof form.get("mimeType") === "string" ? String(form.get("mimeType")) : "audio/webm");
          transcript = await transcribeWithDeepgram(buf, mime);
        }
      }
    } else {
      const body = await req.json().catch(() => ({}));
      if (typeof body.transcript === "string") {
        transcript = body.transcript.trim().slice(0, MAX_TRANSCRIPT_CHARS);
      }
    }

    if (!transcript) {
      return jsonResponse(
        {
          success: false,
          error: "Couldn't hear that clearly — try again",
          code: "unclear",
        },
        400,
      );
    }

    const builtInSeconds = Math.max(0.4, (Date.now() - started) / 1000);
    const quote = buildDemoQuoteFromTranscript(transcript, Number(builtInSeconds.toFixed(1)));

    if (!quote) {
      return jsonResponse(
        {
          success: false,
          error: "Couldn't match that to a job — try describing the work (e.g. gutters, lawn, tap)",
          code: "no_match",
          transcript,
        },
        422,
      );
    }

    return jsonResponse({
      success: true,
      transcript,
      quote,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("demo-voice-quote error:", message);

    if (message === "DEEPGRAM_NOT_CONFIGURED") {
      return jsonResponse(
        {
          success: false,
          error: "Voice demo is almost ready — type the job below, or try again shortly",
          code: "deepgram_missing",
        },
        503,
      );
    }

    if (message === "TRANSCRIBE_FAILED") {
      return jsonResponse(
        {
          success: false,
          error: "Couldn't hear that clearly — try again",
          code: "unclear",
        },
        400,
      );
    }

    return jsonResponse(
      {
        success: false,
        error: "Something went wrong — try a different job description",
        code: "backend",
      },
      500,
    );
  }
});
