type BrandLogosProps = {
  className?: string;
};

/** Xero, QuickBooks, and Gmail lockup — intrinsic 300×128 keeps aspect ratio in flex layouts. */
export function BrandLogos({ className = '' }: BrandLogosProps) {
  return (
    <img
      src="/brand-logos.png"
      alt="Works with Xero, QuickBooks and Gmail"
      width={300}
      height={128}
      className={`h-12 sm:h-14 w-auto max-w-full object-contain shrink-0 ${className}`.trim()}
      loading="lazy"
      decoding="async"
    />
  );
}
