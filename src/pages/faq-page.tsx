import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { StructuredData, createFAQSchema } from '../components/structured-data';
import { Footer } from '../components/footer';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is voice-to-invoice software?",
        answer: "Voice-to-invoice software converts your spoken description of a job into a professional, priced invoice automatically. You simply talk about the work you completed, and AI generates the invoice with line items, pricing, and GST calculations—no typing required."
      },
      {
        question: "How does SMASH work?",
        answer: "SMASH uses AI voice recognition to understand your job description. When you speak, it identifies the work done, materials used, and time spent, then automatically creates a professional invoice using your preset rates and pricing. The entire process takes under 60 seconds."
      },
      {
        question: "Do I need to learn special voice commands?",
        answer: "No. Just talk naturally about the job you completed. SMASH's AI understands conversational language, so you can describe work exactly how you'd explain it to the customer."
      },
      {
        question: "How long does it take to create an invoice?",
        answer: "Under 60 seconds. You speak for 20-30 seconds describing the work, AI generates the invoice in 5 seconds, you review it in 10 seconds, and send it with one tap."
      }
    ]
  },
  {
    category: "Pricing & Setup",
    questions: [
      {
        question: "How does SMASH know my pricing?",
        answer: "During setup, you upload a few of your past invoices. SMASH AI reads them and learns your labour rates, material pricing, job types, and pricing patterns. From day one, it prices jobs the way you price them—not a generic template."
      },
      {
        question: "Can I change prices on invoices?",
        answer: "Yes. You can edit any invoice before sending it. SMASH provides a smart starting point based on your historical pricing, but you have full control to adjust prices, add discounts, or modify line items."
      },
      {
        question: "Does it handle GST automatically?",
        answer: "Yes. SMASH automatically calculates and includes GST on all invoices. You can toggle GST on or off per customer if needed."
      },
      {
        question: "How much does SMASH cost?",
        answer: "SMASH is free to start. No credit card required. Start sending quotes today and upgrade when you're ready."
      }
    ]
  },
  {
    category: "Using SMASH",
    questions: [
      {
        question: "What if the AI gets something wrong?",
        answer: "You always review the invoice before sending. If anything is incorrect, you can quickly edit it. Over time, SMASH learns from your corrections and becomes more accurate for your specific business."
      },
      {
        question: "Can I create quotes as well as invoices?",
        answer: "Yes. SMASH creates both quotes and invoices using voice. Describe the proposed work for a quote, or completed work for an invoice. Approved quotes convert to invoices with one tap."
      },
      {
        question: "Does it work offline?",
        answer: "Voice recognition requires internet connection, but you can create, edit, and review invoices offline. They'll send automatically when you're back online."
      },
      {
        question: "Can I use SMASH in my truck or on the job site?",
        answer: "Yes. SMASH is built for mobile-first use. You can create and send invoices from your phone while still at the job site, even with greasy hands—just use voice."
      }
    ]
  },
  {
    category: "Payments & Money",
    questions: [
      {
        question: "How do customers pay invoices?",
        answer: "Customers receive invoices via SMS or email with built-in payment processing. They tap to approve and pay directly—no bank transfers, no waiting, no chasing."
      },
      {
        question: "How fast do I get paid?",
        answer: "Money hits your bank account in 48 hours after customer payment. No more waiting 14+ days for bank transfers or cheque deposits."
      },
      {
        question: "What payment methods does SMASH support?",
        answer: "Customers can pay via credit card, debit card, or direct debit. All major payment methods are supported through our integrated payment processor."
      },
      {
        question: "Are there payment processing fees?",
        answer: "Standard payment processing fees apply (typically 1.75% + 30c per transaction). This is competitive with or lower than most payment processors, and much cheaper than losing days chasing late payments."
      }
    ]
  },
  {
    category: "Business & Integration",
    questions: [
      {
        question: "Can I integrate SMASH with Xero or QuickBooks?",
        answer: "Integration with accounting software is coming soon. For now, you can export invoices as PDF or CSV for manual import into your accounting system."
      },
      {
        question: "Does SMASH replace my accounting software?",
        answer: "No. SMASH handles invoicing and quoting only. You'll still need accounting software like Xero for tax, payroll, and financial reporting. SMASH makes the invoicing part 4x faster."
      },
      {
        question: "Can I track customer history?",
        answer: "Yes. SMASH automatically builds customer profiles from your invoices and quotes. You can see past work, payment history, and quickly create repeat invoices for returning customers."
      },
      {
        question: "Does SMASH work for different trades?",
        answer: "Yes. SMASH works for any service business: electricians, plumbers, mechanics, HVAC, builders, landscapers, cleaners, and more. The AI adapts to your industry's terminology and pricing."
      }
    ]
  },
  {
    category: "Mobile & Technical",
    questions: [
      {
        question: "What devices does SMASH work on?",
        answer: "SMASH works on iPhone and Android phones. A mobile-optimized web version is also available for tablets and computers."
      },
      {
        question: "Do I need good reception to use voice features?",
        answer: "You need internet connection for voice-to-text conversion. In areas with poor reception, you can type your invoice details or save them to send later when you have signal."
      },
      {
        question: "Is my business data secure?",
        answer: "Yes. All data is encrypted in transit and at rest. SMASH is compliant with Australian data protection standards and never shares your customer or financial data with third parties."
      },
      {
        question: "Can multiple team members use one SMASH account?",
        answer: "Team features are coming soon. Currently, SMASH is optimised for solo operators and small teams sharing one device."
      }
    ]
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-4 py-6 text-left transition-colors hover:text-accent"
      >
        <span className="text-lg font-bold text-white">{question}</span>
        <ChevronDown
          size={24}
          className={`shrink-0 transition-transform text-accent ${isOpen ? 'rotate-180' : ''}`}
          strokeWidth={2.5}
        />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-white/80 leading-[1.15]">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const allFAQs = faqs.flatMap(category =>
    category.questions.map(q => ({ question: q.question, answer: q.answer }))
  );

  return (
    <>
      <SEO
        title="FAQ | Voice Invoicing Questions Answered | SMASH Invoices"
        description="Get answers to common questions about voice-to-invoice software, pricing, payments, and how SMASH works for service businesses in Australia."
        keywords="voice invoicing FAQ, invoice questions, how does voice to invoice work, voice invoicing pricing, mobile invoicing questions"
        ogTitle="Voice Invoicing FAQ — SMASH Invoices"
        ogDescription="Common questions about voice-to-invoice software, pricing, payments, and how SMASH works for service businesses."
        ogImage="https://smashinvoices.com/hero_image.png"
        ogUrl="https://smashinvoices.com/faq"
        twitterTitle="Voice Invoicing FAQ — SMASH Invoices"
        twitterDescription="Common questions about voice-to-invoice software, pricing, payments, and how SMASH works."
        canonical="https://smashinvoices.com/faq"
      />

      <StructuredData data={createFAQSchema(allFAQs)} />

      <div className="min-h-screen bg-[#0A0A0A]">
        <nav className="bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 py-6 flex items-center justify-between">
            <Link to="/" className="text-2xl font-black tracking-tight text-white">
              SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link to="/how-it-works" className="hidden md:block px-4 py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
                How It Works
              </Link>
              <Link to="/blog" className="hidden md:block px-4 py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
                Blog
              </Link>
              <Link to="/#signup-form" className="px-6 py-2.5 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-wide hover:brightness-95 transition-all">
                Start Free
              </Link>
            </div>
          </div>
        </nav>

        <section className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-8 lg:px-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.88] uppercase tracking-tighter">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-medium mb-16 leading-[1.15]">
              Everything you need to know about voice-to-invoice software and how SMASH works.
            </p>

            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl font-black text-accent mb-8 uppercase tracking-tighter">
                  {category.category}
                </h2>
                <div className="bg-white/5 rounded-2xl px-8 py-4">
                  {category.questions.map((faq, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    return (
                      <FAQItem
                        key={key}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === key}
                        onClick={() => setOpenIndex(openIndex === key ? null : key)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="mt-20 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 md:p-12 border border-accent/20">
              <h3 className="text-3xl font-black text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-white/80 text-lg mb-6 leading-[1.15]">
                See how voice-to-invoice works in your business. Free to start, no credit card required.
              </p>
              <Link
                to="/#signup-form"
                className="inline-block px-8 py-4 rounded-full bg-accent text-brand font-black text-base uppercase tracking-wide hover:brightness-95 transition-all"
              >
                Start Free
              </Link>
            </div>
          </div>
        </section>

        <Footer showCTA />
      </div>
    </>
  );
}
