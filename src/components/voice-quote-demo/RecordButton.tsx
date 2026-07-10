import { Mic, Square, Loader2 } from 'lucide-react';

type RecordState = 'idle' | 'recording' | 'loading';

export function RecordButton({
  state,
  onStart,
  onStop,
  disabled,
}: {
  state: RecordState;
  onStart: () => void;
  onStop: () => void;
  disabled?: boolean;
}) {
  if (state === 'loading') {
    return (
      <button
        type="button"
        disabled
        className="w-16 h-16 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center"
        aria-label="Building quote"
      >
        <Loader2 className="w-7 h-7 animate-spin" />
      </button>
    );
  }

  if (state === 'recording') {
    return (
      <button
        type="button"
        onClick={onStop}
        className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center animate-pulse shadow-lg touch-manipulation"
        aria-label="Stop recording"
      >
        <Square className="w-6 h-6 fill-current" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onStart}
      disabled={disabled}
      className="w-16 h-16 rounded-full bg-accent text-brand flex items-center justify-center shadow-glow hover:brightness-95 active:scale-[0.98] transition-all touch-manipulation disabled:opacity-50"
      aria-label="Start recording"
    >
      <Mic className="w-7 h-7" strokeWidth={2.5} />
    </button>
  );
}
