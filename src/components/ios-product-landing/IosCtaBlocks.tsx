import { Link } from 'react-router-dom';
import { Mic } from 'lucide-react';
import { DualProductCtas } from '../marketing/DualProductCtas';
import { IOS_APP_STORE_URL } from '../../data/ios-app-landing';
import { GmailStoryFrame } from '../gmail-product-landing/GmailStoryFrame';
import { IOS_DESKTOP_BAND } from '../../data/ios-landing-spec';
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
          Add to your browser
        </Link>
      </div>

      <p className={`${iosLanding.caption} mt-3`}>{microcopy}</p>
      <p className="text-xs text-white/45 font-medium mt-1.5">
        iPhone on site · Gmail in Chrome or Edge at your desk
      </p>
    </>
  );
}

/** Hero — download + scroll to story on the iOS product page. */
export function IosHeroCta({ className = '' }: { className?: string }) {
  return (
    <DualProductCtas
      className={className}
      secondary={{ kind: 'anchor', href: '#how-it-works', label: 'See how it works' }}
      mobileSecondaryAsLink
    />
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

/** Desktop band — Gmail quote frame from /chrome-extension, sized for the iOS reader. */
export function IosDesktopTeaser() {
  return (
    <div className="w-full max-w-[560px] mx-auto lg:mx-0 lg:ml-auto">
      <div className="rounded-[16px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
        <GmailStoryFrame frame="a3-quote-done" fill priority />
      </div>
      <p className={`${iosLanding.caption} mt-4 text-center lg:text-left text-white/55`}>
        {IOS_DESKTOP_BAND.mediaCaption}
      </p>
    </div>
  );
}

export function IosDesktopLink() {
  return (
    <Link
      to={IOS_DESKTOP_BAND.linkHref}
      className="font-body font-semibold text-accent hover:underline text-[clamp(1rem,1.5vw,1.25rem)] mt-6 inline-block"
    >
      {IOS_DESKTOP_BAND.linkLabel}
    </Link>
  );
}
