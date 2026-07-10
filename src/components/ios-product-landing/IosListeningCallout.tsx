import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const LOOP_SECONDS = 30;

function formatTalkTime(totalSeconds: number) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/** App Store frame 1 listening callout — rendered in code, scaled from 900px logical. */
export function IosListeningCallout({
  scale = 1,
  width,
}: {
  scale?: number;
  /** Display width — defaults to 900 × scale. */
  width?: number;
}) {
  const reduceMotion = useReducedMotion();
  const [seconds, setSeconds] = useState(0);
  const s = (n: number) => Math.round(n * scale);
  const boxWidth = width ?? s(900);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setSeconds((prev) => (prev >= LOOP_SECONDS ? 0 : prev + 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const display = formatTalkTime(reduceMotion ? 9 : seconds);

  return (
    <div
      className="mx-auto bg-[#0A1119] border border-white/[0.06] shadow-[0_8px_28px_-8px_rgba(15,23,42,0.35)] overflow-hidden"
      style={{
        width: boxWidth,
        borderRadius: s(48),
        padding: `${s(60)}px ${s(70)}px ${s(58)}px`,
      }}
    >
      <div className="flex items-center" style={{ gap: s(48), marginBottom: s(44) }}>
        <div
          className="shrink-0 rounded-full bg-accent flex items-center justify-center"
          style={{ width: s(148), height: s(148) }}
        >
          <svg viewBox="0 0 40 40" style={{ width: s(72), height: s(72) }} aria-hidden>
            <g fill="#FFFFFF">
              {(
                [
                  [3, 15, 10, 0],
                  [11, 10, 20, 1],
                  [19, 5, 30, 2],
                  [27, 11, 18, 3],
                  [35, 16, 8, 4],
                ] as const
              ).map(([x, y, h, i]) => (
                <rect
                  key={x}
                  x={x}
                  y={y}
                  width="4"
                  height={h}
                  rx="2"
                  className={reduceMotion ? undefined : 'ios-listen-bar'}
                  style={
                    reduceMotion
                      ? undefined
                      : {
                          transformOrigin: `${x + 2}px 20px`,
                          animationDuration: `${0.65 + i * 0.1}s`,
                          animationDelay: `${i * 0.06}s`,
                        }
                  }
                />
              ))}
            </g>
          </svg>
        </div>
        <div className="flex flex-col min-w-0" style={{ gap: s(6) }}>
          <span
            className="font-display font-black uppercase text-[#8A94A6]"
            style={{ fontSize: s(42), letterSpacing: s(8) }}
          >
            Listening...
          </span>
          <span className="flex items-baseline" style={{ gap: s(24) }}>
            <span
              className="font-display-italic font-black italic text-white leading-none tabular-nums inline-block text-left"
              style={{ fontSize: s(100), letterSpacing: s(-2), minWidth: s(210) }}
              aria-live="off"
            >
              {display}
            </span>
            <span
              className={`font-display font-black uppercase text-accent${reduceMotion ? '' : ' ios-listen-rec'}`}
              style={{ fontSize: s(38), letterSpacing: s(6) }}
            >
              REC
            </span>
          </span>
        </div>
      </div>
      <div
        className="flex items-center bg-white/[0.05]"
        style={{
          borderRadius: s(30),
          padding: `${s(40)}px ${s(46)}px`,
          gap: s(30),
        }}
      >
        <span
          className="shrink-0 rounded-full bg-accent"
          style={{ width: s(24), height: s(24) }}
        />
        <span
          className="font-body font-semibold text-[#E8EDF2] truncate"
          style={{ fontSize: s(42) }}
        >
          &ldquo;Travel fee, call-out, replace kitchen tap...&rdquo;
        </span>
      </div>
    </div>
  );
}
