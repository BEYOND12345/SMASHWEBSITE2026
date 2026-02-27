import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PhoneMockup } from './phone-mockup';
import { ListeningScreen } from './listening-screen';
import { EstimatesScreenStatic } from './estimates-screen-static';

export const DualPhoneSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center min-h-[700px]"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute left-0 lg:left-4 top-12 z-0 -rotate-6"
            >
              <PhoneMockup>
                <EstimatesScreenStatic />
              </PhoneMockup>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="relative z-10 ml-44 lg:ml-52"
            >
              <PhoneMockup>
                <ListeningScreen />
              </PhoneMockup>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
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
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D9F99D] flex items-center justify-center">
                    <Check size={18} className="text-[#0F172A]" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-slate-800 font-semibold leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
