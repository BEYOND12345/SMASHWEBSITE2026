const BRANDS = [
  { name: 'Xero', src: '/brand/xero-white.png', width: 125, height: 32 },
  { name: 'QuickBooks', src: '/brand/quickbooks-white.png', width: 125, height: 32 },
] as const;

/** Compact Xero + QuickBooks trust row — sits under the hero CTA, not a full-width band. */
export function IosHeroTrustLogos({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center lg:items-start gap-2.5 ${className}`.trim()}
      aria-label="Works with Xero and QuickBooks"
    >
      <div className="flex items-center justify-center lg:justify-start gap-7 sm:gap-9 opacity-90">
        {BRANDS.map((b) => (
          <img
            key={b.name}
            src={b.src}
            alt={b.name}
            width={b.width}
            height={b.height}
            className="h-6 sm:h-7 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
      <p className="font-body text-[11px] sm:text-xs text-white/38 font-medium">
        Works with Xero &amp; QuickBooks
      </p>
    </div>
  );
}
