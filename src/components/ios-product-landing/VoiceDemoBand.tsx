/**
 * iOS landing — demo video ABOVE testimonials.
 * Own module so Vite can't serve a stale inlined order from IosAppLandingPage.
 */

import { YoutubeFacade } from '../marketing/YoutubeFacade';
import { VALUE_TESTIMONIALS } from '../../data/product-testimonials';
import { TestimonialSliderSection } from './TestimonialSliderSection';
import { iosLanding } from './ios-landing-tokens';

export const VOICE_DEMO_VIDEO = {
  id: '4BjwcmUej7g',
  title: 'SMASH Invoices — quick product demo',
  description:
    'A quick look at SMASH: voice a job on iPhone, get a priced quote, and send it before you leave the driveway.',
  uploadDate: '2026-07-15',
} as const;

export function VoiceDemoBand() {
  return (
    <>
      {/* VIDEO — always first after hero */}
      <section
        id="watch"
        className="relative bg-brand scroll-mt-24 border-t border-white/[0.06]"
        data-section="voice-demo-video"
      >
        <div className={`${iosLanding.container} py-14 md:py-20`}>
          <div className="max-w-2xl mx-auto text-center mb-8 md:mb-10">
            <p className={`${iosLanding.eyebrow} mb-3`}>Watch the demo</p>
            <h2 className={`${iosLanding.heroHeadline} text-[clamp(2rem,5vw,3.5rem)] mb-3`}>
              <span className="block text-white">SEE IT</span>
              <span className="block text-accent">IN UNDER A MINUTE</span>
            </h2>
            <p className={`${iosLanding.subline} mx-auto max-w-md`}>
              A quick walkthrough of SMASH — how a spoken job turns into a quote you can send.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <YoutubeFacade videoId={VOICE_DEMO_VIDEO.id} title={VOICE_DEMO_VIDEO.title} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — only after the video */}
      <section
        className="relative bg-brand border-t border-white/[0.06] py-8 md:py-10"
        data-section="voice-demo-testimonials"
        aria-label="From people on the tools"
      >
        <div className={iosLanding.container}>
          <TestimonialSliderSection eyebrow="From people on the tools" items={VALUE_TESTIMONIALS} />
        </div>
      </section>
    </>
  );
}
