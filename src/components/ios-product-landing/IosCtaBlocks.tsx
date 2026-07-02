import { Link } from 'react-router-dom';
import { Mic } from 'lucide-react';
import { IOS_APP_STORE_URL } from '../../data/ios-app-landing';
import { CompactChromeMockup } from '../gmail-sidebar-mockups';
import { IosSubline } from './IosSubline';
import { iosLanding } from './ios-landing-tokens';

const APP_STORE_BADGE_SRC = '/marketing/download-on-the-app-store.svg';

export function IosStartFreeCta({ className = '' }: { className?: string }) {
  return (
    <a href={IOS_APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={`${iosLanding.primaryCta} ${className}`.trim()}>
      Start Free
    </a>
  );
}

/** Official Apple badge — correct proportions, single download affordance. */
export function IosOfficialAppStoreBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={IOS_APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block shrink-0 hover:opacity-90 transition-opacity ${className}`.trim()}
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

/** Closing band — mirrors hero hierarchy; one download path (badge) + desktop alt. */
export function IosFinalCta({
  headlineWhite,
  headlineLime,
  subline,
  microcopy,
}: {
  headlineWhite: string;
  headlineLime: string;
  subline: string;
  microcopy: string;
}) {
  return (
    <>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-5">
        <Mic size={13} className="text-accent" strokeWidth={2.5} />
        <span className="text-accent font-black text-[11px] uppercase tracking-[0.2em]">SMASH for iPhone</span>
      </div>

      <h2 className={`${iosLanding.heroHeadline} max-w-3xl mx-auto mb-5`}>
        <span className="block text-white">{headlineWhite}</span>
        <span className="block text-accent">{headlineLime}</span>
      </h2>

      <IosSubline className={`${iosLanding.subline} mx-auto mb-8 max-w-md`}>{subline}</IosSubline>

      <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
        <IosOfficialAppStoreBadge />
        <Link to="/chrome-extension" className={iosLanding.secondaryCta}>
          Also works in Gmail
        </Link>
      </div>

      <p className={`${iosLanding.caption} mt-3`}>{microcopy}</p>
    </>
  );
}

/** Hero — download (Start Free) + scroll to story (no App Store badge). */
export function IosHeroCta({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 items-stretch sm:items-center ${className}`.trim()}>
      <IosStartFreeCta />
      <a href="#how-it-works" className={iosLanding.secondaryCta}>
        See how it works
      </a>
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

/** Desktop band — Chrome extension UI + iPhone teaser. */
export function IosDesktopTeaser() {
  return (
    <div className="flex items-end justify-center gap-4 sm:gap-6 mt-10">
      <CompactChromeMockup />
      <div className="w-[72px] sm:w-[88px] rounded-[18px] border-[3px] border-white/20 bg-white h-[120px] sm:h-[148px] shadow-lg shrink-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-brand" />
        <div className="absolute top-2 inset-x-2 h-1 rounded-full bg-white/20" />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-white/30" />
      </div>
    </div>
  );
}

export function IosDesktopLink() {
  return (
    <Link to="/chrome-extension" className="font-body font-semibold text-accent hover:underline text-[clamp(1rem,1.5vw,1.25rem)] mt-6 inline-block">
      See how SMASH works on desktop →
    </Link>
  );
}
