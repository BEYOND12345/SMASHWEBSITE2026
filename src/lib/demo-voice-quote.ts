import type { DemoQuote } from '../data/demo-quote-catalogue';
import { buildDemoQuoteFromTranscript } from '../data/demo-quote-catalogue';

export type DemoVoiceQuoteSuccess = {
  success: true;
  transcript: string;
  quote: DemoQuote;
};

export type DemoVoiceQuoteFailure = {
  success: false;
  error: string;
  code?: string;
  transcript?: string;
};

export type DemoVoiceQuoteResponse = DemoVoiceQuoteSuccess | DemoVoiceQuoteFailure;

function demoVoiceQuoteUrl(): string {
  const base = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  if (!base) throw new Error('Missing VITE_SUPABASE_URL');
  return `${base.replace(/\/$/, '')}/functions/v1/demo-voice-quote`;
}

function anonHeaders(): HeadersInit {
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
  return {
    Authorization: `Bearer ${key ?? ''}`,
    apikey: key ?? '',
  };
}

function localQuoteFromTranscript(transcript: string): DemoVoiceQuoteResponse {
  const quote = buildDemoQuoteFromTranscript(transcript, 0.5);
  if (!quote) {
    return {
      success: false,
      error: "Couldn't match that to a job — try describing the work (e.g. gutters, lawn, tap)",
      code: 'no_match',
      transcript,
    };
  }
  return { success: true, transcript, quote };
}

/** Send recorded audio to the secure demo-voice-quote edge function. */
export async function submitDemoVoiceAudio(
  audioBlob: Blob,
  mimeType: string,
): Promise<DemoVoiceQuoteResponse> {
  const form = new FormData();
  form.append('audio', audioBlob, `demo.${mimeType.includes('mp4') ? 'mp4' : 'webm'}`);
  form.append('mimeType', mimeType);

  try {
    const res = await fetch(demoVoiceQuoteUrl(), {
      method: 'POST',
      headers: anonHeaders(),
      body: form,
    });

    const data = (await res.json().catch(() => null)) as DemoVoiceQuoteResponse | null;
    if (!data) {
      return {
        success: false,
        error: 'Something went wrong — try a different job description',
        code: 'backend',
      };
    }
    return data;
  } catch {
    return {
      success: false,
      error: 'Voice demo is warming up — type the job below instead',
      code: 'network',
    };
  }
}

/** Text fallback when mic is denied or Deepgram is unavailable. */
export async function submitDemoVoiceTranscript(
  transcript: string,
): Promise<DemoVoiceQuoteResponse> {
  try {
    const res = await fetch(demoVoiceQuoteUrl(), {
      method: 'POST',
      headers: {
        ...anonHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ transcript }),
    });

    if (res.status === 404 || res.status === 503) {
      return localQuoteFromTranscript(transcript);
    }

    const data = (await res.json().catch(() => null)) as DemoVoiceQuoteResponse | null;
    if (!data) return localQuoteFromTranscript(transcript);
    return data;
  } catch {
    return localQuoteFromTranscript(transcript);
  }
}
