import { ReactNode } from 'react';

type PhoneShowcaseLayout = 'single' | 'dual-row' | 'dual-overlap';

interface PhoneShowcaseProps {
  children: ReactNode;
  layout?: PhoneShowcaseLayout;
  /** Outer wrapper — use for min-heights on overlapping compositions */
  className?: string;
  /** Applied to the inner scaled/flex group */
  scaleClassName?: string;
}

/**
 * Centers phone mockups in their column. Use everywhere we show device UI
 * so scaled/overlapping phones stay visually centered (not pushed to an edge).
 */
export function PhoneShowcase({
  children,
  layout = 'single',
  className = '',
  scaleClassName = '',
}: PhoneShowcaseProps) {
  const inner =
    layout === 'dual-row' ? (
      <div
        className={`flex items-start justify-center gap-4 lg:gap-6 mx-auto origin-center ${scaleClassName}`}
      >
        {children}
      </div>
    ) : layout === 'dual-overlap' ? (
      <div
        className={`relative flex w-full items-center justify-center mx-auto origin-center ${scaleClassName}`}
      >
        {children}
      </div>
    ) : (
      <div className={`flex items-center justify-center mx-auto origin-center ${scaleClassName}`}>
        {children}
      </div>
    );

  return (
    <div
      className={`flex w-full items-center justify-center overflow-visible mx-auto ${className}`}
    >
      {inner}
    </div>
  );
}

type FloatVariant = 'float' | 'float-delayed' | 'float-slow' | 'none';

const floatClasses: Record<FloatVariant, string> = {
  float: 'animate-float',
  'float-delayed': 'animate-float-delayed',
  'float-slow': 'animate-float-slow',
  none: '',
};

interface ScaledPhoneProps {
  children: ReactNode;
  className?: string;
  scaleClassName?: string;
  float?: FloatVariant;
}

/** Single phone with responsive scale — always centered in its column. */
export function ScaledPhone({
  children,
  className = '',
  scaleClassName = 'scale-100',
  float = 'none',
}: ScaledPhoneProps) {
  return (
    <PhoneShowcase className={className}>
      <div className={`${scaleClassName} origin-center mx-auto ${floatClasses[float]}`}>
        {children}
      </div>
    </PhoneShowcase>
  );
}

interface DualPhoneStackProps {
  backPhone: ReactNode;
  frontPhone: ReactNode;
  className?: string;
  scaleClassName?: string;
  backClassName?: string;
  frontClassName?: string;
}

/** Two overlapping phones — centered as a unit, not pushed to a grid edge. */
export function DualPhoneStack({
  backPhone,
  frontPhone,
  className = '',
  scaleClassName = 'scale-[0.52] sm:scale-[0.62] md:scale-[0.82] lg:scale-[0.92] xl:scale-100',
  backClassName = 'relative z-0 -rotate-6 shrink-0 animate-float-slow',
  frontClassName = 'relative z-10 -ml-10 sm:-ml-14 lg:-ml-20 shrink-0 animate-float-delayed',
}: DualPhoneStackProps) {
  return (
    <PhoneShowcase layout="dual-overlap" className={className} scaleClassName={scaleClassName}>
      {/* w-fit + mx-auto keeps the overlap group's visual centroid on the column midline */}
      <div className="relative mx-auto flex w-fit max-w-full items-end justify-center">
        <div className={backClassName}>{backPhone}</div>
        <div className={frontClassName}>{frontPhone}</div>
      </div>
    </PhoneShowcase>
  );
}

/** Anchors product mockups to the bottom of story columns (callout chips sit on the baseline). */
export function MockupFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex w-full items-end justify-center ${className}`}>
      {children}
    </div>
  );
}
