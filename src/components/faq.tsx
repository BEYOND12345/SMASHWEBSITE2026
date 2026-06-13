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
};

export function FAQ({
  items,
  heading = 'Common questions',
  subheading = 'Voice on iPhone or Gmail at your desk — answers in under 60 seconds',
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-7 text-brand uppercase leading-[0.88]">
            {heading}
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 font-medium leading-[1.15]">
            {subheading}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden transition-all duration-300 hover:border-brand/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl font-black text-brand pr-8 leading-[0.88]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-brand flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={28}
                  strokeWidth={2.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-base md:text-lg text-slate-700 font-medium leading-[1.15]">
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
