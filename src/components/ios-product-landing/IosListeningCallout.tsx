/** App Store frame 1 listening callout — rendered in code, scaled from 900px logical. */
export function IosListeningCallout({
  scale = 1,
  width,
}: {
  scale?: number;
  /** Display width — defaults to 900 × scale. */
  width?: number;
}) {
  const s = (n: number) => Math.round(n * scale);
  const boxWidth = width ?? s(900);

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
          className="shrink-0 rounded-full bg-[#3A4416] flex items-center justify-center"
          style={{ width: s(148), height: s(148) }}
        >
          <svg viewBox="0 0 40 40" style={{ width: s(72), height: s(72) }} aria-hidden>
            <g fill="#A8B81C">
              <rect x="3" y="15" width="4" height="10" rx="2" />
              <rect x="11" y="10" width="4" height="20" rx="2" />
              <rect x="19" y="5" width="4" height="30" rx="2" />
              <rect x="27" y="11" width="4" height="18" rx="2" />
              <rect x="35" y="16" width="4" height="8" rx="2" />
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
              className="font-display-italic font-black italic text-white leading-none"
              style={{ fontSize: s(100), letterSpacing: s(-2) }}
            >
              0:09
            </span>
            <span
              className="font-display font-black uppercase text-accent"
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
