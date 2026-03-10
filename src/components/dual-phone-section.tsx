import { Check } from 'lucide-react';
import { PhoneMockup } from './phone-mockup';
import { ListeningScreen } from './listening-screen';
import { GeneratingScreen } from './generating-screen';

export const DualPhoneSection = () => {
  return (
    <section className="py-8 md:py-12 lg:py-20 bg-white overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="flex items-center justify-center lg:justify-end overflow-visible py-8">
            <div className="relative flex items-end justify-center scale-[0.5] sm:scale-[0.65] md:scale-[0.8] lg:scale-100 max-w-full">
              <div className="relative z-0 -rotate-2 md:-rotate-3 lg:-rotate-6 -mr-2 md:-mr-4 lg:-mr-6">
                <PhoneMockup>
                  <GeneratingScreen />
                </PhoneMockup>
              </div>
              <div className="relative z-10 -ml-2 md:-ml-4 lg:-ml-6">
                <PhoneMockup>
                  <ListeningScreen />
                </PhoneMockup>
              </div>
            </div>
          </div>

          <div className="px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-[#0F172A] mb-3 md:mb-5 leading-[1.1] tracking-tight">
              JUST TALK. SMASH DOES THE REST.
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 font-semibold mb-5 md:mb-8 leading-snug">
              Describe the job out loud. That's your only job.
            </p>

            <div className="space-y-2.5 md:space-y-4">
              {[
                'Quote built instantly — priced the way you work',
                'Sent to your customer with one tap',
                'They approve from their phone — no back and forth',
                'They pay right there and then — no waiting, no chasing'
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 md:gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-[#D9F99D] flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-[#0F172A] sm:w-[14px] sm:h-[14px] md:w-4 md:h-4 lg:w-[18px] lg:h-[18px]" strokeWidth={3} />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-800 font-semibold leading-snug">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
