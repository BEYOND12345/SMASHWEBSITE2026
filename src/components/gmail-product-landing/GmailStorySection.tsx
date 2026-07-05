import { AnimateIn } from '../animate-in';
import { IosSpecHeadline } from '../ios-product-landing/IosCalloutCard';
import { iosLanding, iosStoryCopyCellClass, iosStoryMediaCellClass } from '../ios-product-landing/ios-landing-tokens';
import { GmailStoryFrame } from './GmailStoryFrame';
import { GmailStoryStepCallout } from './GmailStoryTriptych';
import type { GmailStoryFrameId } from './gmail-landing-tokens';

export type GmailStoryStep = {
  frame: GmailStoryFrameId;
  step: number;
  eyebrow: string;
  headlineWhite: string;
  headlineLime: string;
  subline: string;
  verb: string;
  sub: string;
  showArrow?: boolean;
};

export type GmailStoryFlowSection = {
  id: string;
  title: string;
  strap: string;
  intro?: string;
  steps: readonly GmailStoryStep[];
};

function GmailStoryMedia({
  step,
  priority,
}: {
  step: GmailStoryStep;
  priority?: boolean;
}) {
  return (
    <div className="relative mx-auto w-full">
      {/* clean white UI card — the Gmail + sidebar crop floats with a soft shadow */}
      <div className="relative rounded-[22px] overflow-hidden bg-white ring-1 ring-black/[0.06] shadow-[0_40px_110px_-30px_rgba(15,23,42,0.45)]">
        <GmailStoryFrame frame={step.frame} crop fill priority={priority} />
      </div>
    </div>
  );
}

/** Single stagger row — copy on one side, cropped Gmail UI + callout on the other. */
function GmailStoryRow({
  step,
  imageFirst = false,
  priority,
}: {
  step: GmailStoryStep;
  imageFirst?: boolean;
  priority?: boolean;
}) {
  const copy = (
    <div>
      <IosSpecHeadline
        eyebrow={step.eyebrow}
        headlineWhite={step.headlineWhite}
        headlineLime={step.headlineLime}
        subline={step.subline}
        dark={false}
        sublineClassName="!max-w-md"
      />
      {/* step chip sits with the copy and its arrow points at the UI proof */}
      <div className="mt-6 sm:mt-7">
        <GmailStoryStepCallout
          step={step.step}
          verb={step.verb}
          direction={imageFirst ? 'left' : 'right'}
        />
      </div>
    </div>
  );

  const media = <GmailStoryMedia step={step} priority={priority} />;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 py-12 md:py-16 lg:py-20 border-t border-border/60 first:border-t-0">
      <AnimateIn
        direction="left"
        className={`${imageFirst ? iosStoryMediaCellClass : iosStoryCopyCellClass} ${imageFirst ? 'order-2 lg:order-1 lg:col-span-7' : 'order-1 lg:col-span-5'}`}
      >
        {imageFirst ? media : copy}
      </AnimateIn>
      <AnimateIn
        direction="right"
        className={`${imageFirst ? iosStoryCopyCellClass : iosStoryMediaCellClass} ${imageFirst ? 'order-1 lg:order-2 lg:col-span-5' : 'order-2 lg:col-span-7'}`}
      >
        {imageFirst ? copy : media}
      </AnimateIn>
    </div>
  );
}

/**
 * Story flow — section intro + alternating text / UI rows. The media is a large navy
 * card holding a tight, ~1:1 crop of the Gmail email-edge + SMASH sidebar so the product
 * UI reads clearly, with the action callout pinned to the top of the card.
 */
export function GmailStoryFlow({ section }: { section: GmailStoryFlowSection }) {
  const wide = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-10';
  return (
    <section
      id={section.id}
      className="relative bg-white overflow-hidden scroll-mt-20 border-t border-border"
    >
      <div className={`${wide} relative z-10 pt-16 md:pt-20 lg:pt-24`}>
        <AnimateIn direction="up">
          <div className="max-w-3xl mx-auto text-center">
            <p className={`${iosLanding.eyebrow} text-accent mb-4`}>{section.title}</p>
            <h2 className="font-display-italic font-black uppercase tracking-tighter text-[clamp(2.1rem,5.2vw,3.5rem)] leading-[0.88] text-brand">
              {section.strap}
            </h2>
            {section.intro && (
              <p className="font-body text-base md:text-lg text-brand/60 font-medium leading-[1.55] mt-5 max-w-2xl mx-auto">
                {section.intro}
              </p>
            )}
          </div>
        </AnimateIn>
      </div>

      <div className={`${wide} relative z-10 pb-6 md:pb-10`}>
        {section.steps.map((step, index) => (
          <GmailStoryRow
            key={step.frame}
            step={step}
            imageFirst={index % 2 === 1}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

export { GmailContrastStrip, GmailBothSidesStrap } from './GmailStoryTriptych';
