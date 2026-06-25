import type { IosStorySegment } from '../../data/ios-landing-spec';

export type IosStoryCalloutId = IosStorySegment['id'];

type Props = {
  variant: IosStoryCalloutId;
  scale?: number;
  width?: number;
};

const shell =
  'mx-auto bg-[#0A1119] border border-white/[0.06] shadow-[0_8px_28px_-8px_rgba(15,23,42,0.35)] overflow-hidden';

/** App Store frame callouts — composed in code, scaled from 900px logical width. */
export function IosStoryCallout({ variant, scale = 1, width }: Props) {
  const s = (n: number) => Math.round(n * scale);
  const boxWidth = width ?? s(900);

  switch (variant) {
    case 'voice':
      return (
        <div className={shell} style={{ width: boxWidth, borderRadius: s(48), padding: s(60) }}>
          <div className="flex items-center" style={{ gap: s(40) }}>
            <div
              className="shrink-0 rounded-full bg-[rgba(61,214,140,0.12)] flex items-center justify-center"
              style={{ width: s(150), height: s(150) }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3DD68C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: s(64), height: s(64) }}
                aria-hidden
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div
                className="font-display font-black uppercase text-[#8A94A6]"
                style={{ fontSize: s(42), letterSpacing: s(6), marginBottom: s(10) }}
              >
                Captured
              </div>
              <div
                className="font-display-italic font-black italic text-[#3DD68C] leading-none truncate"
                style={{ fontSize: s(96), letterSpacing: s(-1) }}
              >
                In your words
              </div>
            </div>
          </div>
        </div>
      );

    case 'quote':
      return (
        <div
          className={shell}
          style={{ width: boxWidth, borderRadius: s(48), padding: `${s(52)}px ${s(70)}px` }}
        >
          <div className="flex justify-between items-center" style={{ marginBottom: s(22) }}>
            <span
              className="font-display font-black uppercase text-[#8A94A6]"
              style={{ fontSize: s(36), letterSpacing: s(3) }}
            >
              Subtotal
            </span>
            <span className="font-body font-bold text-[#E8EDF2]" style={{ fontSize: s(46) }}>
              $856.00
            </span>
          </div>
          <div className="flex justify-between items-center" style={{ marginBottom: s(30) }}>
            <span
              className="font-display font-black uppercase text-[#8A94A6]"
              style={{ fontSize: s(36), letterSpacing: s(3) }}
            >
              GST (10%)
            </span>
            <span className="font-body font-bold text-[#E8EDF2]" style={{ fontSize: s(46) }}>
              $85.60
            </span>
          </div>
          <div className="bg-white/[0.12]" style={{ height: s(2), marginBottom: s(32) }} />
          <div className="flex justify-between items-center gap-2 min-w-0">
            <span
              className="font-display font-black uppercase text-accent shrink-0"
              style={{ fontSize: s(42), letterSpacing: s(3) }}
            >
              Total
            </span>
            <span
              className="font-display-italic font-black italic text-white leading-none truncate"
              style={{ fontSize: s(96), letterSpacing: s(-2) }}
            >
              $941.60
            </span>
          </div>
        </div>
      );

    case 'pricehub':
      return (
        <div className={shell} style={{ width: boxWidth, borderRadius: s(48), padding: s(60) }}>
          <div className="flex items-center" style={{ gap: s(40) }}>
            <div
              className="shrink-0 bg-[rgba(223,255,0,0.12)] flex items-center justify-center"
              style={{ width: s(140), height: s(140), borderRadius: s(36) }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DFFF00"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: s(68), height: s(68) }}
                aria-hidden
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div
                className="font-display-italic font-black italic uppercase text-white leading-none"
                style={{ fontSize: s(54), letterSpacing: s(-1) }}
              >
                Set it once.
              </div>
              <div
                className="font-display-italic font-black italic uppercase text-accent leading-none"
                style={{ fontSize: s(54), letterSpacing: s(-1), marginTop: s(6) }}
              >
                Every quote stays accurate.
              </div>
            </div>
          </div>
        </div>
      );

    case 'readreceipts':
      return (
        <div className={shell} style={{ width: boxWidth, borderRadius: s(48), padding: s(60) }}>
          <div className="flex items-center" style={{ gap: s(40) }}>
            <div
              className="shrink-0 rounded-full bg-[rgba(61,214,140,0.12)] flex items-center justify-center"
              style={{ width: s(150), height: s(150) }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3DD68C"
                strokeWidth="2.5"
                style={{ width: s(64), height: s(64) }}
                aria-hidden
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div
                className="font-display font-black uppercase text-[#8A94A6]"
                style={{ fontSize: s(42), letterSpacing: s(6), marginBottom: s(10) }}
              >
                Sarah just opened it
              </div>
              <div className="flex items-baseline flex-wrap gap-x-2 min-w-0" style={{ gap: s(28) }}>
                <span
                  className="font-display-italic font-black italic text-[#3DD68C] leading-none shrink-0"
                  style={{ fontSize: s(80), letterSpacing: s(-1) }}
                >
                  SEEN
                </span>
                <span
                  className="font-display font-black uppercase text-white truncate"
                  style={{ fontSize: s(36), letterSpacing: s(3) }}
                >
                  2 min ago
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'pay':
      return (
        <div
          className={shell}
          style={{ width: boxWidth, borderRadius: s(48), padding: `${s(50)}px ${s(70)}px` }}
        >
          <div className="flex items-center" style={{ gap: s(38) }}>
            <div
              className="shrink-0 bg-[rgba(61,214,140,0.12)] flex items-center justify-center"
              style={{ width: s(124), height: s(124), borderRadius: s(32) }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3DD68C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: s(60), height: s(60) }}
                aria-hidden
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div
                className="font-display font-black uppercase text-[#8A94A6]"
                style={{ fontSize: s(40), letterSpacing: s(5), marginBottom: s(10) }}
              >
                No chasing
              </div>
              <div className="flex items-baseline flex-wrap min-w-0" style={{ gap: s(16) }}>
                <span
                  className="font-display-italic font-black italic uppercase text-[#3DD68C] leading-none shrink-0"
                  style={{ fontSize: s(60), letterSpacing: s(-1) }}
                >
                  Paid.
                </span>
                <span
                  className="font-display-italic font-black italic text-white leading-none truncate"
                  style={{ fontSize: s(60), letterSpacing: s(-1) }}
                >
                  $1,678.46
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'send':
      return (
        <div className={shell} style={{ width: boxWidth, borderRadius: s(48), padding: s(56) }}>
          <div className="flex items-center" style={{ gap: s(36) }}>
            <div
              className="shrink-0 bg-accent/[0.12] flex items-center justify-center"
              style={{ width: s(132), height: s(132), borderRadius: s(34) }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DFFF00"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: s(62), height: s(62) }}
                aria-hidden
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div
                className="font-display font-black uppercase text-[#8A94A6]"
                style={{ fontSize: s(40), letterSpacing: s(5), marginBottom: s(10) }}
              >
                Message written for you
              </div>
              <div className="flex items-baseline flex-wrap min-w-0" style={{ gap: s(16) }}>
                <span
                  className="font-display-italic font-black italic uppercase text-white leading-none shrink-0"
                  style={{ fontSize: s(64), letterSpacing: s(-1) }}
                >
                  Sent
                </span>
                <span
                  className="font-display-italic font-black italic uppercase text-accent leading-none truncate"
                  style={{ fontSize: s(64), letterSpacing: s(-1) }}
                >
                  in one tap.
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'automessage':
      return (
        <div className={shell} style={{ width: boxWidth, borderRadius: s(42), padding: `${s(46)}px ${s(56)}px` }}>
          <div className="flex items-center" style={{ gap: s(28) }}>
            <div
              className="shrink-0 bg-accent/[0.12] flex items-center justify-center"
              style={{ width: s(100), height: s(100), borderRadius: s(24) }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DFFF00"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: s(48), height: s(48) }}
                aria-hidden
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div
                className="font-display font-black uppercase text-[#8A94A6] truncate"
                style={{ fontSize: s(28), letterSpacing: s(3), marginBottom: s(8) }}
              >
                Name, message, link
              </div>
              <div
                className="font-display-italic font-black italic uppercase text-white leading-none truncate"
                style={{ fontSize: s(48), letterSpacing: s(-1) }}
              >
                Done <span className="text-accent">for you.</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'integrations':
      return (
        <div className={shell} style={{ width: boxWidth, borderRadius: s(42), padding: `${s(46)}px ${s(56)}px` }}>
          <div className="flex items-center" style={{ gap: s(28) }}>
            <div
              className="shrink-0 bg-[#3DD68C]/[0.12] flex items-center justify-center"
              style={{ width: s(100), height: s(100), borderRadius: s(24) }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3DD68C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: s(48), height: s(48) }}
                aria-hidden
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div
                className="font-display font-black uppercase text-[#8A94A6] truncate"
                style={{ fontSize: s(28), letterSpacing: s(3), marginBottom: s(8) }}
              >
                No double entry
              </div>
              <div
                className="font-display-italic font-black italic uppercase text-[#3DD68C] leading-none truncate"
                style={{ fontSize: s(48), letterSpacing: s(-1) }}
              >
                It just flows <span className="text-white">through.</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'customers':
      return (
        <div className={shell} style={{ width: boxWidth, borderRadius: s(42), padding: `${s(46)}px ${s(56)}px` }}>
          <div className="flex items-center justify-between" style={{ gap: s(24) }}>
            <div className="flex flex-col items-center">
              <div className="font-display-italic font-black italic text-white" style={{ fontSize: s(64), lineHeight: 0.9 }}>4</div>
              <div className="font-display font-black uppercase text-[#8A94A6]" style={{ fontSize: s(20), letterSpacing: s(2), marginTop: s(8) }}>Jobs</div>
            </div>
            <div className="w-px bg-white/10" style={{ height: s(60) }} />
            <div className="flex flex-col items-center">
              <div className="font-display-italic font-black italic text-[#DFFF00]" style={{ fontSize: s(64), lineHeight: 0.9 }}>$6,240</div>
              <div className="font-display font-black uppercase text-[#8A94A6]" style={{ fontSize: s(20), letterSpacing: s(2), marginTop: s(8) }}>Revenue</div>
            </div>
            <div className="w-px bg-white/10" style={{ height: s(60) }} />
            <div className="flex flex-col items-center">
              <div className="font-display-italic font-black italic text-white" style={{ fontSize: s(64), lineHeight: 0.9 }}>17 Jun</div>
              <div className="font-display font-black uppercase text-[#8A94A6]" style={{ fontSize: s(20), letterSpacing: s(2), marginTop: s(8) }}>Last job</div>
            </div>
          </div>
        </div>
      );

    case 'cardpayment':
      return (
        <div className={shell} style={{ width: boxWidth, borderRadius: s(42), padding: `${s(46)}px ${s(56)}px` }}>
          <div className="flex items-center" style={{ gap: s(28) }}>
            <div
              className="shrink-0 bg-accent/[0.12] flex items-center justify-center"
              style={{ width: s(100), height: s(100), borderRadius: s(24) }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DFFF00"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: s(48), height: s(48) }}
                aria-hidden
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div
                className="font-display font-black uppercase text-[#8A94A6] truncate"
                style={{ fontSize: s(28), letterSpacing: s(3), marginBottom: s(8) }}
              >
                SECURE
              </div>
              <div
                className="font-display-italic font-black italic uppercase text-white leading-none truncate"
                style={{ fontSize: s(48), letterSpacing: s(-1) }}
              >
                Powered by <span className="text-accent">Stripe</span>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
