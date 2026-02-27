import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { StructuredData, createFAQSchema } from './structured-data';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Why did you build this?',
    answer: 'Watching tradies write quotes in their trucks, on site, between jobs. Always rushed. Always messy. Most just text a rough number and hope it sticks. There had to be a better way that actually fit how the work gets done.'
  },
  {
    question: 'Who is SMASH for?',
    answer: 'Anyone sending multiple quotes a week. Electricians, plumbers, builders, landscapers, carpenters. If you\'re quoting on site or between jobs, this is for you. Voice recognition is trained on trade terminology, materials, and real job language.'
  },
  {
    question: 'Where is SMASH right now?',
    answer: 'In beta. The app works and real tradies are using it on real jobs. We\'re refining the experience based on feedback and adding features that actually matter. You get free access, we get to build something that works for how you actually work.'
  },
  {
    question: 'What happens when I join?',
    answer: 'You\'ll get an email within 24-48 hours with access and a download link. Use it on real jobs. Tell us what works and what doesn\'t. Your feedback shapes what gets built. Simple as that.'
  },
  {
    question: 'Where is this going?',
    answer: 'The goal is simple: make quoting so fast you never put it off. After beta, we\'re adding job tracking, payment integrations, and deeper client management. But the core stays the same—talk, send, get approved, invoice.'
  },
  {
    question: 'Is my data safe?',
    answer: 'Absolutely. This is a professional application with enterprise-grade encryption. Your quotes, client details, and business data are secure. We take this seriously because we know you do too.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <StructuredData data={createFAQSchema(faqs)} />
      <div className="max-w-4xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-7 text-brand uppercase leading-tight">
            Questions About SMASH
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 font-bold leading-relaxed">
            The story, the vision, and where we are now
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden transition-all duration-300 hover:border-brand/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl font-black text-brand pr-8 leading-tight">
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
                  <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed">
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
