import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { RecordButton } from './RecordButton';
import { QuoteResult } from './QuoteResult';
import {
  submitDemoVoiceAudio,
  submitDemoVoiceTranscript,
} from '../../lib/demo-voice-quote';
import type { DemoQuote } from '../../data/demo-quote-catalogue';

type Phase = 'ready' | 'recording' | 'listening' | 'building' | 'result' | 'error';

type Props = {
  open: boolean;
  onClose: () => void;
};

function pickMimeType(): string {
  if (typeof MediaRecorder === 'undefined') return 'audio/webm';
  if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) return 'audio/webm;codecs=opus';
  if (MediaRecorder.isTypeSupported('audio/webm')) return 'audio/webm';
  if (MediaRecorder.isTypeSupported('audio/mp4')) return 'audio/mp4';
  return 'audio/webm';
}

export function VoiceQuoteDemoModal({ open, onClose }: Props) {
  const [phase, setPhase] = useState<Phase>('ready');
  const [error, setError] = useState<string | null>(null);
  const [transcript, setTranscript] = useState('');
  const [quote, setQuote] = useState<DemoQuote | null>(null);
  const [typedJob, setTypedJob] = useState('');
  const [elapsed, setElapsed] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<number | null>(null);

  const reset = useCallback(() => {
    setPhase('ready');
    setError(null);
    setTranscript('');
    setQuote(null);
    setTypedJob('');
    setElapsed(0);
  }, []);

  const stopTracks = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const close = useCallback(() => {
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    stopTracks();
    reset();
    onClose();
  }, [onClose, reset, stopTracks]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  useEffect(() => {
    if (!open) {
      stopTracks();
      reset();
    }
  }, [open, reset, stopTracks]);

  const processResult = async (result: Awaited<ReturnType<typeof submitDemoVoiceAudio>>) => {
    if (result.success) {
      setTranscript(result.transcript);
      setQuote(result.quote);
      setPhase('result');
      return;
    }
    if (result.transcript) setTranscript(result.transcript);
    setError(result.error);
    setPhase('error');
  };

  const startRecording = async () => {
    setError(null);
    setQuote(null);
    setTranscript('');

    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      setError('Microphone not available in this browser — type the job below instead');
      setPhase('error');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mimeType = pickMimeType();
      const recorder = new MediaRecorder(stream, { mimeType });
      chunksRef.current = [];
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        stopTracks();
        const blob = new Blob(chunksRef.current, { type: mimeType });
        chunksRef.current = [];

        if (blob.size < 500) {
          setError("Couldn't hear that clearly — try again");
          setPhase('error');
          return;
        }

        setPhase('listening');
        window.setTimeout(() => setPhase('building'), 600);

        const result = await submitDemoVoiceAudio(blob, mimeType);
        await processResult(result);
      };

      recorder.start(200);
      setPhase('recording');
      setElapsed(0);
      timerRef.current = window.setInterval(() => {
        setElapsed((s) => {
          if (s >= 29) {
            recorder.stop();
            return s;
          }
          return s + 1;
        });
      }, 1000);
    } catch {
      setError('Microphone permission needed — or type the job below');
      setPhase('error');
    }
  };

  const stopRecording = () => {
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state === 'recording') {
      recorder.stop();
    }
  };

  const submitTyped = async () => {
    const text = typedJob.trim();
    if (text.length < 4) {
      setError('Describe the job in a few words first');
      setPhase('error');
      return;
    }
    setError(null);
    setPhase('building');
    const result = await submitDemoVoiceTranscript(text);
    await processResult(result);
  };

  if (!open) return null;

  const recordState =
    phase === 'recording' ? 'recording' : phase === 'listening' || phase === 'building' ? 'loading' : 'idle';

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40"
      role="dialog"
      aria-modal="true"
      aria-label="Try voice to quote"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative w-full max-w-[375px] h-[min(600px,90vh)] bg-white border-2 border-slate-200 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col">
        <button
          type="button"
          onClick={close}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 touch-manipulation"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex-1 overflow-y-auto px-5 pt-6 pb-5">
          <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-2">
            Try It Now (Free)
          </p>
          <h2 className="font-display text-2xl uppercase tracking-tight text-brand leading-none mb-2">
            Describe the job.
            <span className="block text-accent">Get a quote in 30 seconds.</span>
          </h2>

          {phase === 'result' && quote ? (
            <div className="mt-4">
              <QuoteResult transcript={transcript} quote={quote} onTryAgain={reset} />
            </div>
          ) : (
            <div className="mt-6 flex flex-col items-center text-center">
              {(phase === 'listening' || phase === 'building') && (
                <p className="font-body text-base text-slate-600 mb-4">
                  {phase === 'listening' ? 'Listening...' : 'Building your quote...'}
                </p>
              )}

              {phase === 'recording' && (
                <p className="font-body text-sm text-red-500 font-semibold mb-3 tabular-nums">
                  Recording 0:{elapsed.toString().padStart(2, '0')}
                </p>
              )}

              {phase === 'ready' && (
                <p className="font-body text-base text-slate-600 leading-relaxed mb-6 max-w-[16rem]">
                  Tap record. Say something like &ldquo;Gutters cleaned, two-storey house.&rdquo;
                </p>
              )}

              <RecordButton
                state={recordState}
                onStart={startRecording}
                onStop={stopRecording}
                disabled={phase === 'listening' || phase === 'building'}
              />

              {phase === 'ready' && (
                <p className="font-body text-xs text-slate-400 mt-3">Tap to talk · Max 30 seconds</p>
              )}

              {error && (
                <p className="font-body text-sm text-red-600 mt-4 max-w-[18rem]" role="alert">
                  {error}
                </p>
              )}

              {(phase === 'ready' || phase === 'error') && (
                <div className="w-full mt-8 text-left">
                  <label htmlFor="demo-job-text" className="font-body text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    Or type the job
                  </label>
                  <textarea
                    id="demo-job-text"
                    value={typedJob}
                    onChange={(e) => setTypedJob(e.target.value)}
                    rows={2}
                    placeholder="e.g. Gutters cleaned, two-storey house"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 font-body text-sm text-brand placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/60"
                  />
                  <button
                    type="button"
                    onClick={submitTyped}
                    className="mt-2 w-full min-h-[44px] rounded-2xl border border-slate-200 text-slate-600 font-body text-sm font-semibold hover:bg-slate-50 touch-manipulation"
                  >
                    Build quote from text
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
