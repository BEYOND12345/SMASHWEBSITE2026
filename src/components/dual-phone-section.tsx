import { Check } from 'lucide-react';
import { PhoneMockup } from './phone-mockup';
import { ListeningScreen } from './listening-screen';
import { GeneratingScreen } from './generating-screen';
import { AnimateIn } from './animate-in';

export const DualPhoneSection = () => {
  return (
    <section className="py-14 md:py-24 lg:py-32 bg-brand overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Phones — constrained height on mobile to prevent dead space */}
          <AnimateIn direction="left" className="flex items-end justify-center lg:justify-end overflow-visible">
            {/* Height container: sized to match visually-scaled phone height */}
            <div className="relative h-[300px] sm:h-[390px] md:h-[460px] lg:h-auto flex items-end justify-center w-full overflow-visible">
              <div className="flex items-end justify-center scale-[0.52] sm:scale-[0.68] md:scale-[0.82] lg:scale-100 origin-bottom">
                <div className="animate-float-slow -rotate-6 -mr-8">
                  <PhoneMockup>
                    <GeneratingScreen />
                  </PhoneMockup>
                </div>
                <div className="-ml-8 animate-float-delayed">
                  <PhoneMockup>
                    <ListeningScreen />
                  </PhoneMockup>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Copy */}
          <AnimateIn direction="right" className="min-w-0">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">Voice to invoice</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-[0.88] tracking-tighter uppercase">
              Just talk.<br />SMASH does<br />the rest.
            </h2>
            <p className="font-body text-base lg:text-lg text-white/65 font-medium mb-10 leading-[1.5]">
              Describe the job out loud. That's your only job.
            </p>

            <div className="space-y-4">
              {[
                'Quote built instantly — priced the way you work',
                'Sent to your customer with one tap',
                'They approve from their phone — no back and forth',
                'They pay right there and then — no waiting, no chasing',
              ].map((feature, i) => (
                <AnimateIn key={i} delay={i * 80} className="flex items-start gap-3 min-w-0">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mt-0.5">
                    <Check size={11} className="text-accent" strokeWidth={3} />
                  </div>
                  <p className="font-body text-sm md:text-base text-white/80 font-medium leading-[1.45] min-w-0">
                    {feature}
                  </p>
                </AnimateIn>
              ))}
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
};
