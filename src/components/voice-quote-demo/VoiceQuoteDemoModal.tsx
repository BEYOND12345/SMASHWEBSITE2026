import { useCallback, useEffect, useRef, useState } from 'react';
import {
  submitDemoVoiceAudio,
  submitDemoVoiceTranscript,
} from '../../lib/demo-voice-quote';
import type { DemoQuote } from '../../data/demo-quote-catalogue';
import {
  VoiceQuoteDemoScreen,
  type AppDemoPhase,
  checklistForPhase,
} from './VoiceQuoteDemoScreen';

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
  const [phase, setPhase] = useState<AppDemoPhase>('idle');
  const [error, setError] = useState<string | null>(null);
  const [quote, setQuote] = useState<DemoQuote | null>(null);
  const [typedJob, setTypedJob] = useState('');
  const [elapsed, setElapsed] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<number | null>(null);

  const reset = useCallback(() => {
    setPhase('idle');
    setError(null);
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
      setQuote(result.quote);
      setPhase('result');
      return;
    }
    setError(result.error);
    setPhase('error');
  };

  const startRecording = async () => {
    setError(null);
    setQuote(null);

    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      setError('Microphone not available — type the job below instead');
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

        setPhase('processing');
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
    if (recorder && recorder.state === 'recording') recorder.stop();
  };

  const toggleRecord = () => {
    if (phase === 'recording') stopRecording();
    else if (phase === 'idle' || phase === 'error') void startRecording();
  };

  const submitTyped = async () => {
    const text = typedJob.trim();
    if (text.length < 4) {
      setError('Describe the job in a few words first');
      setPhase('error');
      return;
    }
    setError(null);
    setPhase('processing');
    const result = await submitDemoVoiceTranscript(text);
    await processResult(result);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 bg-[#0A0E17]/65 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label="Try voice to quote"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <VoiceQuoteDemoScreen
        phase={phase}
        elapsed={elapsed}
        error={error}
        quote={quote}
        checklist={checklistForPhase(phase)}
        typedJob={typedJob}
        onTypedJobChange={setTypedJob}
        onToggleRecord={toggleRecord}
        onSubmitTyped={submitTyped}
        onTryAgain={reset}
        onClose={close}
      />
    </div>
  );
}
