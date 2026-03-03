import React from 'react';
import { Check } from 'lucide-react';
import { PhoneMockup } from './phone-mockup';
import { ListeningScreen } from './listening-screen';
import { GeneratingScreen } from './generating-screen';

export const DualPhoneSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative flex items-end justify-center scale-[0.6] sm:scale-[0.7] md:scale-[0.85] lg:scale-100">
              <div className="relative z-0 -rotate-3 md:-rotate-6 -mr-3 md:-mr-6">
                <PhoneMockup>
                  <GeneratingScreen />
                </PhoneMockup>
              </div>
              <div className="relative z-10 -ml-3 md:-ml-6">
                <PhoneMockup>
                  <ListeningScreen />
                </PhoneMockup>
              </div>
            </div>
          </div>

          <div className="px-2 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] mb-4 md:mb-6 leading-tight tracking-tight">
              JUST TALK. SMASH DOES THE REST.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-700 font-semibold mb-6 md:mb-10 leading-snug">
              Describe the job out loud. That's your only job.
            </p>

            <div className="space-y-3 md:space-y-5">
              {[
                'Quote built instantly — priced the way you work',
                'Sent to your customer with one tap',
                'They approve from their phone — no back and forth',
                'They pay right there and then — no waiting, no chasing'
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-[#D9F99D] flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-[#0F172A] sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" strokeWidth={3} />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-slate-800 font-semibold leading-snug md:leading-relaxed">
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
