import { iosLanding } from '../ios-product-landing/ios-landing-tokens';

function GoogleMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

function MicrosoftMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 23 23" className={className} aria-hidden>
      <rect x="1" y="1" width="10" height="10" fill="#F25022" />
      <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
      <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
      <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
    </svg>
  );
}

type Brand = { name: string; mark: React.ReactNode };

const BRANDS: Brand[] = [
  {
    name: 'Xero',
    mark: (
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#13B5EA] text-white font-body font-bold text-[16px] leading-none">
        x
      </span>
    ),
  },
  {
    name: 'QuickBooks',
    mark: (
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2CA01C] text-white font-body font-bold text-[15px] leading-none lowercase">
        qb
      </span>
    ),
  },
  { name: 'Microsoft', mark: <MicrosoftMark className="h-[30px] w-[30px]" /> },
  { name: 'Google', mark: <GoogleMark className="h-[30px] w-[30px]" /> },
];

/**
 * "Works with" trust strap — sits directly under the hero in place of the old
 * voice/integration line. Big, even-spaced brand marks so the platforms read at a glance.
 */
export function GmailWorksWithStrap() {
  return (
    <section className="bg-brand border-t border-white/10 py-8 md:py-10">
      <div className={iosLanding.container}>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10 md:gap-14">
          <span className="shrink-0 font-display-italic font-black uppercase tracking-[0.22em] text-[11px] text-white/35">
            Works with
          </span>
          <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:w-auto sm:gap-x-11 md:gap-x-14">
            {BRANDS.map((b) => (
              <div key={b.name} className="flex items-center gap-3">
                {b.mark}
                <span className="font-body font-semibold text-[17px] text-white/85">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
