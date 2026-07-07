import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

type Props = {
  items: FAQItem[];
  heading?: string;
  subheading?: string;
  /** `brand` — navy band matching product landing rhythm (no white). */
  variant?: 'light' | 'brand';
};

export function FAQ({
  items,
  heading = 'Common questions',
  subheading = 'Voice on iPhone or Gmail at your desk — answers in under 60 seconds',
  variant = 'light',
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isBrand = variant === 'brand';

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={
        isBrand
          ? 'bg-brand py-16 md:py-24 border-t border-white/10'
          : 'bg-slate-50 py-20 lg:py-28'
      }
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 md:mb-12">
          <h2
            className={
              isBrand
                ? 'font-display-italic font-black uppercase tracking-tighter text-[clamp(2rem,5vw,3.75rem)] leading-[0.84] text-white mb-4'
                : 'text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-7 text-brand uppercase leading-[0.88]'
            }
          >
            {heading}
          </h2>
          <p
            className={
              isBrand
                ? 'font-body text-base sm:text-lg text-white/60 font-medium leading-[1.55] max-w-xl mx-auto'
                : 'text-xl md:text-2xl text-slate-700 font-medium leading-[1.15]'
            }
          >
            {subheading}
          </p>
        </div>

        <div className="space-y-3">
          {items.map((faq, index) => (
            <div
              key={faq.question}
              className={
                isBrand
                  ? 'rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden'
                  : 'bg-white rounded-2xl border-2 border-slate-200 overflow-hidden transition-all duration-300 hover:border-brand/30'
              }
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 sm:px-8 py-5 flex items-center justify-between text-left group gap-4"
              >
                <span
                  className={
                    isBrand
                      ? 'font-display-italic font-black text-white uppercase tracking-tighter leading-[0.88] text-base sm:text-lg pr-4'
                      : 'text-lg md:text-xl font-black text-brand pr-8 leading-[0.88]'
                  }
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    isBrand ? 'text-white/40' : 'text-brand'
                  } ${openIndex === index ? 'rotate-180' : ''}`}
                  size={isBrand ? 18 : 28}
                  strokeWidth={2.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 sm:px-8 pb-5">
                  <p
                    className={
                      isBrand
                        ? 'font-body text-sm sm:text-base text-white/70 font-medium leading-[1.55]'
                        : 'text-base md:text-lg text-slate-700 font-medium leading-[1.15]'
                    }
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
