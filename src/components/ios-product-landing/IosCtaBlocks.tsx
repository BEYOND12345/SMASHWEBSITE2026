import { Link } from 'react-router-dom';
import { Apple, ArrowRight, Mic } from 'lucide-react';
import { APP_STORE_URL } from '../../data/download-urls';
import { GmailStoryFrame } from '../gmail-product-landing/GmailStoryFrame';
import { GmailStoryStepCallout } from '../gmail-product-landing/GmailStoryTriptych';
import { IOS_DESKTOP_BAND } from '../../data/ios-landing-spec';
import { handleStartFree } from '../../lib/start-free';
import { IosHeroTrustLogos } from './IosHeroTrustLogos';
import { IosSubline } from './IosSubline';
import { iosLanding } from './ios-landing-tokens';

const APP_STORE_BADGE_SRC = '/marketing/download-on-the-app-store.svg';

export function IosStartFreeCta({
  className = '',
  label = 'Start Free on iPhone',
  eventLabel = 'start_free_click',
}: {
  className?: string;
  label?: string;
  eventLabel?: string;
}) {
  return (
    <a
      href={APP_STORE_URL}
      data-smash-start-free=""
      onClick={(e) => handleStartFree(e, eventLabel)}
      className={`${iosLanding.primaryCta} gap-2 ${className}`.trim()}
    >
      <Apple size={18} strokeWidth={2.5} />
      {label}
    </a>
  );
}

/** Official Apple badge — correct proportions, single download affordance. */
export function IosOfficialAppStoreBadge({
  className = '',
  eventLabel = 'start_free_click',
}: {
  className?: string;
  eventLabel?: string;
}) {
  return (
    <a
      href={APP_STORE_URL}
      data-smash-start-free=""
      onClick={(e) => handleStartFree(e, eventLabel)}
      className={`inline-block shrink-0 min-h-[48px] hover:opacity-90 active:scale-[0.98] transition-all touch-manipulation ${className}`.trim()}
      aria-label="Download on the App Store"
    >
      <img
        src={APP_STORE_BADGE_SRC}
        alt="Download on the App Store"
        width={120}
        height={40}
        className="h-11 sm:h-12 w-auto"
        loading="lazy"
        decoding="async"
      />
    </a>
  );
}

/** Closing band — headline, one line, download. */
export function IosFinalCta({
  headlineWhite,
  headlineLime,
  subline,
  microcopy,
  showBrowserCta = true,
  compact = false,
}: {
  headlineWhite: string;
  headlineLime: string;
  subline: string;
  microcopy: string;
  showBrowserCta?: boolean;
  /** Ad landing — no pill, no repeated microcopy or trust row. */
  compact?: boolean;
}) {
  return (
    <>
      {!compact && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-5">
          <Mic size={13} className="text-accent" strokeWidth={2.5} />
          <span className="text-accent font-black text-[11px] uppercase tracking-[0.2em]">SMASH for iPhone</span>
        </div>
      )}

      <h2 className={`${iosLanding.heroHeadline} max-w-3xl mx-auto mb-3 sm:mb-4`}>
        <span className="block text-white">{headlineWhite}</span>
        <span className="block text-accent">{headlineLime}</span>
      </h2>

      <IosSubline className={`${iosLanding.subline} mx-auto ${compact ? 'mb-5' : 'mb-8'} max-w-md mt-2.5 sm:mt-3`}>{subline}</IosSubline>

      <div className="flex flex-col items-center justify-center gap-4">
        <IosOfficialAppStoreBadge eventLabel="voice_invoicing_final" />
        {showBrowserCta && (
          <Link to="/chrome-extension" className={iosLanding.secondaryCta}>
            Add to your browser
          </Link>
        )}
      </div>

      {microcopy && <p className={`${iosLanding.caption} mt-3`}>{microcopy}</p>}
      {!showBrowserCta && !compact && <IosHeroTrustLogos className="mt-5 items-center" />}
    </>
  );
}

/** Hero — download + scroll to story on the iOS product page. */
export function IosHeroCta({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <IosStartFreeCta eventLabel="voice_invoicing_hero" />
        <a
          href="#how-it-works"
          className={`${iosLanding.secondaryCta} hidden sm:inline-flex`}
        >
          See how it works
        </a>
      </div>
      <div className="mt-2 sm:hidden">
        <a
          href="#how-it-works"
          className="inline-flex items-center min-h-[44px] text-sm font-semibold text-white/55 hover:text-accent transition-colors underline underline-offset-2 touch-manipulation"
        >
          See how it works
        </a>
      </div>
      <IosHeroTrustLogos className="mt-5" />
    </div>
  );
}

/** Reserved slot for hero demo video — wire src when asset is ready. */
export function IosMediaSlot({
  type,
  className = '',
}: {
  type: 'hero-video' | 'hero-gif' | 'story-demo';
  className?: string;
}) {
  return (
    <div
      className={`hidden ${className}`.trim()}
      data-ios-media-slot={type}
      aria-hidden
    >
      {/* MEDIA_SLOT: {type} — add <video> or <img> when assets are ready */}
    </div>
  );
}

/** Desktop band — cropped Gmail UI, reply callout, and product CTA in one card. */
export function IosDesktopTeaser() {
  return (
    <div className="w-full max-w-[560px] mx-auto lg:mx-0 lg:ml-auto">
      <div className="relative rounded-[22px] overflow-hidden bg-white ring-1 ring-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
        <GmailStoryFrame frame="a3-quote-done" crop fill priority />
        <div className="absolute bottom-4 left-4 z-10">
          <GmailStoryStepCallout step={3} verb={IOS_DESKTOP_BAND.replyVerb} direction="right" />
        </div>
        <Link
          to={IOS_DESKTOP_BAND.linkHref}
          className="relative z-10 flex flex-col gap-2 border-t border-border/70 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-5 min-h-[52px] hover:bg-[#F8FAFC] active:bg-[#F1F5F9] transition-colors group touch-manipulation"
        >
          <span className="font-body text-xs sm:text-sm font-medium text-brand/55 leading-snug">
            Priced from your rates — check and reply.
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 font-display-italic font-black uppercase tracking-tight text-brand text-[11px] sm:text-xs group-hover:text-accent transition-colors">
            {IOS_DESKTOP_BAND.linkLabel}
            <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      </div>
    </div>
  );
}
