import React from 'react';
import { Check } from 'lucide-react';
import { PhoneMockup } from './phone-mockup';
import { ListeningScreen } from './listening-screen';
import { GeneratingScreen } from './generating-screen';

export const DualPhoneSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex items-center justify-center min-h-[700px]">
            <div className="absolute left-0 lg:left-4 top-12 z-0 -rotate-6">
              <PhoneMockup>
                <GeneratingScreen />
              </PhoneMockup>
            </div>

            <div className="relative z-10 ml-44 lg:ml-52">
              <PhoneMockup>
                <ListeningScreen />
              </PhoneMockup>
            </div>
          </div>

          <div>
            <h2 className="text-5xl lg:text-6xl font-black text-[#0F172A] mb-6 leading-tight">
              JUST TALK. SMASH DOES THE REST.
            </h2>

            <p className="text-xl text-slate-700 font-semibold mb-12">
              Describe the job out loud. That's your only job.
            </p>

            <div className="space-y-6">
              {[
                'Quote built instantly — priced the way you work',
                'Sent to your customer with one tap',
                'They approve from their phone — no back and forth',
                'They pay right there and then — no waiting, no chasing'
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D9F99D] flex items-center justify-center">
                    <Check size={18} className="text-[#0F172A]" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-slate-800 font-semibold leading-relaxed">
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
