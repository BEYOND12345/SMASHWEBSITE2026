import { Mic, Square, Loader2 } from 'lucide-react';

type RecordState = 'idle' | 'recording' | 'loading';

export function RecordButton({
  state,
  onStart,
  onStop,
  disabled,
  size = 'lg',
}: {
  state: RecordState;
  onStart?: () => void;
  onStop?: () => void;
  disabled?: boolean;
  size?: 'md' | 'lg';
}) {
  const dim = size === 'lg' ? 'w-[72px] h-[72px]' : 'w-16 h-16';
  const icon = size === 'lg' ? 'w-8 h-8' : 'w-7 h-7';

  if (state === 'loading') {
    return (
      <div
        className={`${dim} rounded-full bg-brand/10 text-brand flex items-center justify-center ring-4 ring-brand/5`}
        aria-label="Building quote"
        aria-busy
      >
        <Loader2 className={`${icon} animate-spin`} />
      </div>
    );
  }

  if (state === 'recording') {
    return (
      <button
        type="button"
        onClick={onStop}
        className={`${dim} rounded-full bg-[#EF4444] text-white flex items-center justify-center touch-manipulation relative`}
        aria-label="Stop recording"
      >
        <span className="absolute inset-0 rounded-full bg-[#EF4444]/40 animate-ping" aria-hidden />
        <Square className="w-6 h-6 fill-current relative z-10" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onStart}
      disabled={disabled || !onStart}
      className={`${dim} rounded-full bg-accent text-brand flex items-center justify-center shadow-glow hover:brightness-95 active:scale-[0.98] transition-all touch-manipulation disabled:opacity-50 ring-4 ring-accent/25`}
      aria-label="Start recording"
    >
      <Mic className={icon} strokeWidth={2.5} />
    </button>
  );
}

/** Animated waveform bars — brand green on dark, or dark on lime. */
export function WaveformBars({
  variant = 'onDark',
  active = true,
}: {
  variant?: 'onDark' | 'onLime';
  active?: boolean;
}) {
  const fill = variant === 'onLime' ? '#0A1119' : '#DFFF00';
  const heights = [10, 18, 28, 16, 8];

  return (
    <svg viewBox="0 0 40 40" className="w-8 h-8" aria-hidden>
      <g fill={fill}>
        {heights.map((h, i) => {
          const x = 3 + i * 8;
          const y = (40 - h) / 2;
          return (
            <rect
              key={x}
              x={x}
              y={y}
              width="4"
              height={h}
              rx="2"
              className={active ? 'ios-listen-bar' : undefined}
              style={
                active
                  ? {
                      transformOrigin: `${x + 2}px 20px`,
                      animationDuration: `${0.55 + i * 0.1}s`,
                      animationDelay: `${i * 0.05}s`,
                    }
                  : undefined
              }
            />
          );
        })}
      </g>
    </svg>
  );
}
