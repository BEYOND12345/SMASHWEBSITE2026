import { useEffect, useState, type ReactNode } from 'react';
import type { IosStoryScreenId } from '../../data/ios-landing-spec';
import { IosHtmlPhoneScreen } from './IosHtmlPhoneScreen';
import { IosListeningCallout } from './IosListeningCallout';
import { IosStoryCallout, type IosStoryCalloutId } from './IosStoryCallout';
import {
  IOS_PHONE_DISPLAY,
  IOS_PHONE_LOGICAL,
  iosShowcaseTailSpace,
  iosShowcaseVariant,
  type IosPhoneShowcaseSize,
  type IosPhoneSurface,
  type IosShowcaseVariantId,
} from './ios-landing-tokens';

type Props = {
  screen: IosStoryScreenId;
  calloutId?: IosStoryCalloutId;
  size?: IosPhoneShowcaseSize | number;
  surface?: IosPhoneSurface;
  className?: string;
};

function resolveDisplayWidth(size: IosPhoneShowcaseSize | number): number {
  if (typeof size === 'number') return size;
  const cfg = IOS_PHONE_DISPLAY[size];
  if (typeof window === 'undefined') return cfg.desktop;
  if (window.matchMedia('(min-width: 1024px)').matches) return cfg.desktop;
  if (window.matchMedia('(min-width: 640px)').matches) return cfg.tablet;
  return cfg.mobile;
}

function usePhoneDisplayWidth(size: IosPhoneShowcaseSize | number): number {
  const [width, setWidth] = useState(() => resolveDisplayWidth(size));

  useEffect(() => {
    if (typeof size === 'number') {
      setWidth(size);
      return;
    }

    const update = () => setWidth(resolveDisplayWidth(size));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [size]);

  return width;
}

type Breakpoint = 'desktop' | 'tablet' | 'mobile';

function resolveBreakpoint(): Breakpoint {
  if (typeof window === 'undefined') return 'desktop';
  if (window.matchMedia('(min-width: 1024px)').matches) return 'desktop';
  if (window.matchMedia('(min-width: 640px)').matches) return 'tablet';
  return 'mobile';
}

function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>(() => resolveBreakpoint());

  useEffect(() => {
    const update = () => setBp(resolveBreakpoint());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return bp;
}

type DualBgConfig = {
  /** Background screen HTML id (the second feature). */
  screen: string;
  /** Horizontal offset as a fraction of phone width (negative = left). */
  xRatio: number;
  /** Vertical offset as a fraction of phone width (negative = up). */
  yRatio: number;
  /** Fan rotation in degrees. */
  rotate: number;
};

/** Variants that stage a fanned-out second phone behind the front one. */
const DUAL_BG: Partial<Record<IosShowcaseVariantId, DualBgConfig>> = {
  // Phone sits in the right column → fan the background phone left into the gap.
  customers: { screen: 'customers-bg', xRatio: -0.46, yRatio: -0.05, rotate: -6 },
  cardpayment: { screen: 'pay-bg', xRatio: -0.46, yRatio: -0.05, rotate: -6 },
  // Phone sits in the left column → fan the background phone right into the gap.
  pay: { screen: 'pay-bg', xRatio: 0.46, yRatio: -0.05, rotate: 6 },
};

type CompositionProps = {
  variantId: IosShowcaseVariantId;
  screen: IosStoryScreenId;
  phoneWidth: number;
  surface: IosPhoneSurface;
  callout?: ReactNode;
  className?: string;
};

/** Shared phone + clip + callout overlay — single art-direction path. */
function IosPhoneComposition({
  variantId,
  screen,
  phoneWidth,
  surface,
  callout,
  className = '',
}: CompositionProps) {
  const cfg = iosShowcaseVariant(variantId);
  const phoneScale = phoneWidth / IOS_PHONE_LOGICAL.width;
  const phoneHeight = Math.round((IOS_PHONE_LOGICAL.height / IOS_PHONE_LOGICAL.width) * phoneWidth);
  const radius = (IOS_PHONE_LOGICAL.radius / IOS_PHONE_LOGICAL.width) * phoneWidth;

  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'mobile';
  const hideCalloutOnMobile = isMobile && variantId === 'hero';
  const effectiveCallout = hideCalloutOnMobile ? undefined : callout;

  const calloutTop = Math.round(phoneHeight * cfg.calloutTopRatio);
  const clipHeight = effectiveCallout
    ? calloutTop + Math.round((50 / 900) * phoneWidth)
    : hideCalloutOnMobile && cfg.mobileClipRatio
      ? Math.round(phoneHeight * cfg.mobileClipRatio)
      : phoneHeight;

  const calloutWidth = Math.round(phoneWidth * cfg.groundRatio);
  const containerWidth = effectiveCallout ? calloutWidth : phoneWidth;
  /** Callout is absolute — reserve space below the phone clip so the chip is not clipped. */
  const calloutHeightEst = effectiveCallout
    ? Math.round(cfg.tailLogical * phoneScale * cfg.contentScale)
    : 0;
  const tailSpace = effectiveCallout
    ? Math.max(iosShowcaseTailSpace(phoneScale, variantId), calloutTop + calloutHeightEst - clipHeight + 20)
    : hideCalloutOnMobile
      ? 12
      : iosShowcaseTailSpace(phoneScale, variantId);

  const dualBgRaw = DUAL_BG[variantId];
  const dualBg = dualBgRaw
    ? {
        screen: dualBgRaw.screen,
        xRatio: isMobile ? dualBgRaw.xRatio * 0.4 : dualBgRaw.xRatio,
        yRatio: isMobile ? -0.11 : dualBgRaw.yRatio,
        rotate: isMobile ? Math.round(dualBgRaw.rotate * 0.6) : dualBgRaw.rotate,
      }
    : undefined;
  // Background phone reads as a full device but trimmed below the front callout edge.
  const bgPhoneHeight = Math.round(clipHeight + (260 / 900) * phoneWidth);

  /** Shadow on phone only when no callout covers the bottom edge. */
  const phoneShadow = effectiveCallout
    ? ''
    : surface === 'dark'
      ? 'shadow-[0_32px_64px_rgba(0,0,0,0.45)]'
      : 'shadow-[0_24px_56px_rgba(15,23,42,0.18)]';

  /** Square bottom on clipped phone — avoids white iframe corners at the clip edge. */
  const clipRadius = effectiveCallout
    ? `${radius}px ${radius}px 0 0`
    : `${radius}px ${radius}px 0 0`;

  const clipBg = '#FFFFFF';

  return (
    <div className={`relative w-full flex justify-center ${className}`.trim()}>
      <div
        className="relative mx-auto motion-safe:animate-float [will-change:transform]"
        style={{ width: containerWidth, paddingBottom: tailSpace }}
      >
        {surface === 'dark' && (
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(165%,560px)] aspect-square rounded-full blur-2xl bg-[radial-gradient(circle,rgba(223,255,0,0.34)_0%,rgba(200,255,0,0.14)_42%,transparent_72%)]"
          />
        )}

        {dualBg && (
          <div
            className={`absolute z-0 overflow-hidden pointer-events-none ${surface === 'dark' ? 'shadow-[0_28px_70px_rgba(0,0,0,0.5)]' : 'shadow-[0_22px_54px_rgba(15,23,42,0.16)]'}`}
            style={{
              width: phoneWidth,
              height: bgPhoneHeight,
              borderRadius: `${radius}px`,
              background: clipBg,
              top: `${Math.round(phoneWidth * dualBg.yRatio)}px`,
              left: `${Math.round(phoneWidth * dualBg.xRatio)}px`,
              transform: `rotate(${dualBg.rotate}deg) scale(0.9)`,
              transformOrigin: 'center center',
              opacity: 0.95,
            }}
          >
            <IosHtmlPhoneScreen screen={dualBg.screen as IosStoryScreenId} width={phoneWidth} fadeBottom={false} />
            {surface === 'dark' && <div className="absolute inset-0 bg-brand/10 pointer-events-none" />}
          </div>
        )}

        <div
          className={`relative z-10 mx-auto overflow-hidden ${phoneShadow}`.trim()}
          style={{ width: phoneWidth, borderRadius: clipRadius }}
        >
          <div
            className="relative overflow-hidden [transform:translateZ(0)]"
            style={{ width: phoneWidth, height: clipHeight, borderRadius: clipRadius, background: clipBg }}
          >
            <IosHtmlPhoneScreen screen={screen} width={phoneWidth} fadeBottom={false} />
          </div>
        </div>

        {effectiveCallout && (
          <div
            className="absolute left-1/2 z-20 -translate-x-1/2"
            style={{ top: calloutTop, width: calloutWidth }}
          >
            {effectiveCallout}
          </div>
        )}
      </div>
    </div>
  );
}

/** Story row phone — HTML screen + frame-accurate code callout overlay. */
export function IosPhoneShowcase({
  screen,
  calloutId,
  size = 'story',
  surface = 'dark',
  className = '',
}: Props) {
  const phoneWidth = usePhoneDisplayWidth(size);
  const variantId = (calloutId ?? screen) as IosShowcaseVariantId;
  const cfg = iosShowcaseVariant(variantId);
  const phoneScale = phoneWidth / IOS_PHONE_LOGICAL.width;
  const calloutScale = phoneScale * cfg.contentScale;
  const calloutWidth = Math.round(phoneWidth * cfg.groundRatio);
  const showCallout = Boolean(calloutId);

  const callout =
    showCallout && calloutId ? (
      <IosStoryCallout variant={calloutId} scale={calloutScale} width={calloutWidth} />
    ) : undefined;

  return (
    <IosPhoneComposition
      variantId={variantId}
      screen={screen}
      phoneWidth={phoneWidth}
      surface={surface}
      callout={callout}
      className={className}
    />
  );
}

/** Hero — phone HTML + listening callout (App Store frame 1). */
export function IosHeroPhoneShowcase({
  className = '',
  size = 'hero',
}: {
  className?: string;
  size?: IosPhoneShowcaseSize | number;
}) {
  const phoneWidth = usePhoneDisplayWidth(size);
  const cfg = iosShowcaseVariant('hero');
  const phoneScale = phoneWidth / IOS_PHONE_LOGICAL.width;
  const calloutScale = phoneScale * cfg.contentScale;
  const calloutWidth = Math.round(phoneWidth * cfg.groundRatio);

  return (
    <IosPhoneComposition
      variantId="hero"
      screen="voice"
      phoneWidth={phoneWidth}
      surface="dark"
      className={className}
      callout={<IosListeningCallout scale={calloutScale} width={calloutWidth} />}
    />
  );
}
