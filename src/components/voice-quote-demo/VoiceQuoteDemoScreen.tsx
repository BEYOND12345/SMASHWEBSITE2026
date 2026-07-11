import { X } from 'lucide-react';
import { RecordButton, WaveformBars } from './RecordButton';
import { QuoteResult } from './QuoteResult';
import type { DemoQuote } from '../../data/demo-quote-catalogue';

export type DemoPhase = 'ready' | 'recording' | 'listening' | 'building' | 'result' | 'error';

export type VoiceQuoteDemoScreenProps = {
  phase: DemoPhase;
  elapsed?: number;
  error?: string | null;
  transcript?: string;
  quote?: DemoQuote | null;
  typedJob?: string;
  onTypedJobChange?: (value: string) => void;
  onStartRecording?: () => void;
  onStopRecording?: () => void;
  onSubmitTyped?: () => void;
  onTryAgain?: () => void;
  onClose?: () => void;
  /** Design review — disable interactions */
  preview?: boolean;
};

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-semibold text-brand/80">
      <span className="tabular-nums">9:41</span>
      <div className="flex items-center gap-1.5" aria-hidden>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
          <rect x="0" y="7" width="3" height="4" rx="0.5" />
          <rect x="4.5" y="4.5" width="3" height="6.5" rx="0.5" />
          <rect x="9" y="2" width="3" height="9" rx="0.5" />
          <rect x="13.5" y="0" width="2.5" height="11" rx="0.5" />
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
          <path d="M7.5 2.2c2.1 0 4 1 5.3 2.5l-1.2 1.2A5.3 5.3 0 0 0 7.5 4.2c-1.6 0-3 .7-4 1.7L2.2 4.7A7.2 7.2 0 0 1 7.5 2.2Zm0 3.2c1.2 0 2.3.5 3.1 1.4L9.4 8A2.9 2.9 0 0 0 7.5 7.2c-.8 0-1.5.3-2 .8L4.4 6.8A4.5 4.5 0 0 1 7.5 5.4Zm0 3.2c.5 0 .9.2 1.2.5L7.5 10 6.3 9.1c.3-.3.7-.5 1.2-.5Z" />
        </svg>
        <span className="inline-flex items-center gap-0.5">
          <span className="w-[22px] h-[10px] rounded-[3px] border border-brand/80 relative">
            <span className="absolute inset-[1.5px] right-[3px] bg-brand/80 rounded-[1px]" />
          </span>
          <span className="w-[1.5px] h-[4px] bg-brand/80 rounded-r-sm" />
        </span>
      </div>
    </div>
  );
}

function ListeningPanel({ label }: { label: string }) {
  return (
    <div className="w-full rounded-[1.25rem] bg-[#0A1119] text-white px-4 py-4 flex items-center gap-3.5 shadow-[0_8px_28px_-8px_rgba(15,23,42,0.35)]">
      <div className="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
        <WaveformBars variant="onLime" active />
      </div>
      <div className="min-w-0 text-left">
        <p className="font-display text-[10px] uppercase tracking-[0.2em] text-white/45 mb-0.5">
          {label}
        </p>
        <p className="font-display-italic font-black italic text-xl leading-none tracking-tight">
          Building<span className="text-accent">…</span>
        </p>
      </div>
    </div>
  );
}

/**
 * Presentational phone UI for the try-it demo.
 * Used by the live modal and the internal design-review page.
 */
export function VoiceQuoteDemoScreen({
  phase,
  elapsed = 0,
  error = null,
  transcript = '',
  quote = null,
  typedJob = '',
  onTypedJobChange,
  onStartRecording,
  onStopRecording,
  onSubmitTyped,
  onTryAgain,
  onClose,
  preview = false,
}: VoiceQuoteDemoScreenProps) {
  const recordState =
    phase === 'recording' ? 'recording' : phase === 'listening' || phase === 'building' ? 'loading' : 'idle';

  const showCapture = phase !== 'result';

  return (
    <div className="relative w-full max-w-[375px] mx-auto h-[min(640px,90vh)] bg-white rounded-[2rem] border-[3px] border-[#0F172A] shadow-[0_24px_80px_-20px_rgba(15,23,42,0.55)] overflow-hidden flex flex-col">
      {/* Dynamic island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[96px] h-[26px] bg-brand rounded-full z-20 pointer-events-none" />

      {onClose && !preview && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-slate-100/90 text-slate-600 flex items-center justify-center hover:bg-slate-200 touch-manipulation backdrop-blur-sm"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      <StatusBar />

      <div className="px-5 pt-2 pb-1 border-b border-slate-100">
        <p className="font-display text-[10px] uppercase tracking-[0.22em] text-slate-400">
          Try It Now · Free
        </p>
        <h2 className="font-display text-[1.65rem] uppercase tracking-tight text-brand leading-[0.95] mt-1">
          Describe the job.
          <span className="block text-accent">Quote in 30s.</span>
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        {phase === 'result' && quote ? (
          <QuoteResult transcript={transcript} quote={quote} onTryAgain={preview ? undefined : onTryAgain} />
        ) : (
          <div className="flex flex-col items-center text-center min-h-full">
            {phase === 'ready' && (
              <p className="font-body text-[15px] text-slate-600 leading-relaxed mb-6 max-w-[17rem]">
                Tap record. Say something like{' '}
                <span className="text-brand font-semibold">
                  &ldquo;Gutters cleaned, two-storey house.&rdquo;
                </span>
              </p>
            )}

            {phase === 'recording' && (
              <div className="mb-5 w-full">
                <div className="rounded-[1.25rem] bg-[#0A1119] px-4 py-4 flex items-center gap-3.5">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <WaveformBars variant="onLime" active />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="font-display text-[10px] uppercase tracking-[0.2em] text-white/45">
                      Listening…
                    </p>
                    <p className="font-display-italic font-black italic text-[1.75rem] text-white leading-none tabular-nums tracking-tight">
                      0:{elapsed.toString().padStart(2, '0')}
                      <span className="ml-2 font-display not-italic text-accent text-sm tracking-[0.15em] align-middle">
                        REC
                      </span>
                    </p>
                  </div>
                </div>
                <p className="font-body text-xs text-slate-400 mt-3">Tap stop when you&apos;re done</p>
              </div>
            )}

            {(phase === 'listening' || phase === 'building') && (
              <div className="mb-6 w-full space-y-3">
                <ListeningPanel label={phase === 'listening' ? 'Transcribing' : 'Pricing'} />
                <p className="font-body text-sm text-slate-500">
                  {phase === 'listening' ? 'Listening…' : 'Building your quote…'}
                </p>
              </div>
            )}

            {showCapture && phase !== 'listening' && phase !== 'building' && (
              <div className="mb-2">
                <RecordButton
                  state={recordState}
                  onStart={preview ? undefined : onStartRecording}
                  onStop={preview ? undefined : onStopRecording}
                  disabled={preview || phase === 'listening' || phase === 'building'}
                />
              </div>
            )}

            {phase === 'ready' && (
              <p className="font-body text-xs text-slate-400 mt-3 mb-6">Tap to talk · Max 30 seconds</p>
            )}

            {error && (
              <p
                className="font-body text-sm text-[#B91C1C] bg-red-50 border border-red-100 rounded-2xl px-3.5 py-3 mt-4 max-w-[18rem] text-left"
                role="alert"
              >
                {error}
              </p>
            )}

            {(phase === 'ready' || phase === 'error') && (
              <div className="w-full mt-auto pt-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px flex-1 bg-slate-200" />
                  <span className="font-display text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Or type it
                  </span>
                  <span className="h-px flex-1 bg-slate-200" />
                </div>
                <textarea
                  id="demo-job-text"
                  value={typedJob}
                  onChange={(e) => onTypedJobChange?.(e.target.value)}
                  rows={2}
                  readOnly={preview}
                  placeholder="e.g. Gutters cleaned, two-storey house"
                  className="w-full rounded-2xl border border-slate-200 bg-[#F4F6F9] px-3.5 py-3 font-body text-sm text-brand placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/70 focus:border-transparent resize-none"
                />
                <button
                  type="button"
                  onClick={onSubmitTyped}
                  disabled={preview || !onSubmitTyped}
                  className="mt-2.5 w-full min-h-[48px] rounded-2xl bg-brand text-accent font-display text-sm uppercase tracking-wide hover:brightness-110 touch-manipulation disabled:opacity-60"
                >
                  Build quote from text
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Home indicator */}
      <div className="pb-2 pt-1 flex justify-center" aria-hidden>
        <div className="w-[108px] h-[4px] rounded-full bg-brand/20" />
      </div>
    </div>
  );
}
