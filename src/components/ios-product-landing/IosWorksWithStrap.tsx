import { iosLanding } from './ios-landing-tokens';

const STRAP_LOGO_H = 'h-8';

const ACCOUNTING_BRANDS = [
  {
    name: 'Xero',
    mark: (
      <img
        src="/brand/xero-white.png"
        alt="Xero"
        width={125}
        height={32}
        className={`${STRAP_LOGO_H} w-auto object-contain`}
        loading="lazy"
        decoding="async"
      />
    ),
  },
  {
    name: 'QuickBooks',
    mark: (
      <img
        src="/brand/quickbooks-white.png"
        alt="Intuit QuickBooks"
        width={125}
        height={32}
        className={`${STRAP_LOGO_H} w-auto object-contain`}
        loading="lazy"
        decoding="async"
      />
    ),
  },
] as const;

/** Xero + QuickBooks trust strap — visible on mobile and desktop directly under the iOS hero. */
export function IosWorksWithStrap() {
  const logoRow = (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
      {ACCOUNTING_BRANDS.map((b) => (
        <div key={b.name}>{b.mark}</div>
      ))}
    </div>
  );

  return (
    <section className="bg-brand border-t border-white/10 py-7 md:py-9" aria-label="Works with Xero and QuickBooks">
      <div className={iosLanding.container}>
        <div className="flex flex-col items-center gap-5 sm:hidden">
          <span className="font-display-italic font-black uppercase tracking-[0.22em] text-[11px] text-white/35">
            Works with
          </span>
          {logoRow}
        </div>

        <div className="relative hidden min-h-8 items-center sm:flex">
          <span className="absolute left-0 top-1/2 shrink-0 -translate-y-1/2 font-display-italic font-black uppercase tracking-[0.22em] text-[11px] text-white/35">
            Works with
          </span>
          <div className="flex w-full justify-center">{logoRow}</div>
        </div>
      </div>
    </section>
  );
}
