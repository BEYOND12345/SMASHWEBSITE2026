import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { StructuredData, createFAQSchema } from '../components/structured-data';
import { Footer } from '../components/footer';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    category: "How It Works",
    questions: [
      {
        question: "How does the voice quoting actually work?",
        answer: "After finishing a job, open SMASH and tap the microphone. Describe the job out loud — the same way you'd explain it to a mate. SMASH listens, builds a structured quote with line items, pricing, and your business details — and has it ready to send before you've put your tools away. The whole thing takes about 30 seconds."
      },
      {
        question: "How does SMASH know my rates from day one?",
        answer: "When you sign up, upload 2–3 of your existing invoices. SMASH reads them and learns how you price — your hourly rate, how you handle GST, your usual jobs, your line item style. From your very first quote, it prices the way you price. No spreadsheets. No setup screens. No templates to fill in."
      },
      {
        question: "How does my customer receive and pay the quote?",
        answer: "They get a link via SMS or email. No app. No account. Nothing to download. They open it on their phone, see a professional quote with your business name and line items, tap Approve, and pay right there. From finished job to money in your account — no back and forth, no chasing."
      },
      {
        question: "What happens after my customer approves the quote?",
        answer: "The approved quote automatically converts to an invoice. You see it in your dashboard. You see a read receipt the moment they open it. And when they pay, you get notified instantly. No manual follow-up. No guessing whether to call them."
      },
      {
        question: "Can I edit the quote before sending it?",
        answer: "Always. You review every quote before it goes out. If SMASH missed something or got a price wrong, tap any line to edit — change quantities, add items, adjust labour hours. The more you use it, the better it gets at matching exactly how you work."
      }
    ]
  },
  {
    category: "Speed & Ease",
    questions: [
      {
        question: "Is talking into your phone actually faster than typing?",
        answer: "Yes. And not by a small amount. The average person speaks at 130 words per minute. The average person types at 40. Describing a job out loud takes 20–30 seconds. Typing the same information into an invoice app takes several minutes — if you even get around to doing it at all. Talking is natural. Typing is not."
      },
      {
        question: "How long does it take to send an invoice with SMASH?",
        answer: "Under 60 seconds. That's not marketing — that's the actual time from opening the app to hitting send. Talk for 20–30 seconds. Review for 10. Tap send. Done. Most users have the invoice sent before they've left the customer's driveway."
      },
      {
        question: "Do I need to be good with technology?",
        answer: "No. If you can leave a voicemail, you can use SMASH. That's genuinely the whole skill set required. There's nothing to configure. No accounting knowledge needed. No learning curve. If you work with your hands and you've always hated computers, this app was built specifically for you."
      },
      {
        question: "What if I've never used invoicing software before?",
        answer: "Good. You haven't picked up bad habits from apps that were built for someone else. SMASH doesn't assume you know what a 'line item type' is or how to configure a tax rate. You talk about the job the way you always have. SMASH does the rest. No account setup beyond your name and ABN. No pricing configuration. No training required."
      },
      {
        question: "Will it work out in the field — not just at a desk?",
        answer: "That's the whole point. SMASH is built for your phone, not a computer. It works wherever you finish the job — in the driveway, in the van, in the rain if that's where you are. The entire app is one-handed, voice-first, and designed for people who are already tired by the time they need to send an invoice."
      }
    ]
  },
  {
    category: "Is It Safe?",
    questions: [
      {
        question: "Is my business data safe?",
        answer: "Yes. Completely. Your data is encrypted, stored securely, and belongs to you. SMASH does not sell your data, share it with advertisers, or use it for anything other than running your account. Your rates, your customers, your invoices — all of it is private and only accessible to you."
      },
      {
        question: "Is it safe for my customers to pay through SMASH?",
        answer: "Yes. All payments are processed through Stripe — the same payment infrastructure used by millions of businesses worldwide. Your customers' card details are never stored on SMASH servers. The entire payment flow is handled by Stripe's secure, PCI-compliant system."
      },
      {
        question: "What happens to my old invoices when I upload them at signup?",
        answer: "Your uploaded invoices are used for one thing only: learning your pricing style and rates so SMASH can generate personalised quotes from day one. They're stored securely, never shared, and never used for any other purpose."
      },
      {
        question: "Can anyone else see my quotes and invoices?",
        answer: "No. Your quotes and invoices are only visible to you — and to the specific customer you share a link with. Sharing a quote creates a unique, private link that only works for that quote. No other SMASH users, no third parties, and no one at SMASH can see your business data without your permission."
      }
    ]
  },
  {
    category: "Is It For Me?",
    questions: [
      {
        question: "I'm a cleaner / gardener — is this really built for me?",
        answer: "Yes. Specifically and deliberately. Every other invoicing app was built for businesses with employees or admin staff. Cleaners, gardeners, handymen, and mobile service workers have been completely invisible to the invoicing software industry. SMASH was built for exactly your situation: you do multiple jobs a day, you hate admin, and you just need to get paid fast."
      },
      {
        question: "What kinds of jobs does it work best for?",
        answer: "Simple, frequent jobs that you can describe in 30 seconds. The sweet spot is jobs worth $150–$600 that you do multiple times a week. House cleaning, lawn mowing, handyman repairs, painting, mobile mechanic, plumbing, electrical, HVAC, pest control, pool maintenance, car detailing, dog grooming — if you do the work and need to get paid for it, SMASH works for you."
      },
      {
        question: "I already use a spreadsheet (or nothing). Why would I switch?",
        answer: "Because the spreadsheet is the reason the invoice doesn't get sent. You finish the job. You're tired. You think 'I'll do it tonight.' Tonight comes. You do it tomorrow. Then a week passes. SMASH removes the gap between finishing the job and getting paid. Send it before you leave the site. That's the only way it reliably happens."
      },
      {
        question: "Does SMASH replace my accounting software?",
        answer: "No. SMASH handles invoicing and quoting only — one thing, done well. You'll still use Xero, QuickBooks, or MYOB for tax, payroll, and financial reporting. SMASH just makes the invoicing part 4x faster. Integration with accounting software is coming soon."
      }
    ]
  },
  {
    category: "Pricing",
    questions: [
      {
        question: "How much does SMASH cost?",
        answer: "SMASH is free to start — 10 quotes per month, no credit card required, no time limit on the free plan. When you're ready to go unlimited: Starter is $14.99 AUD/month for unlimited quotes and invoices. Pro is $24.99 AUD/month with priority support and advanced features. If you're invoicing daily, the app pays for itself on the first job of the month."
      },
      {
        question: "Is there a free trial?",
        answer: "The free plan isn't a trial — it's a permanent free tier. You get 10 quotes a month for free, forever, with no credit card required. For most people, using SMASH free for even one week is enough to know whether they want to keep going. Try it on a couple of real jobs. See how it feels."
      },
      {
        question: "What do I need to get started?",
        answer: "Just your phone and 2–3 of your old invoices (PDFs, photos, whatever you have). Download the app. Enter your name, business name, and ABN. Upload your old invoices so SMASH learns your rates. Talk about your next job. Most people are sending their first invoice within 10 minutes of signing up."
      },
      {
        question: "Does it work on iPhone and Android?",
        answer: "Yes. SMASH is available on both iPhone and Android. It's designed to be used on site, in your van, or wherever you finish the job — not at a desk. The whole experience is built for mobile, not ported from a desktop app as an afterthought."
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
        ogImage="https://smashinvoices.com/og-image.png"
        ogUrl="https://smashinvoices.com/faq"
        twitterTitle="Voice Invoicing FAQ — SMASH Invoices"
        twitterDescription="Common questions about voice-to-invoice software, pricing, payments, and how SMASH works."
        canonical="https://smashinvoices.com/faq"
      />

      <StructuredData data={createFAQSchema(allFAQs)} />

      <div className="min-h-screen bg-brand">
        <nav className="bg-brand/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 md:py-6 flex items-center justify-between">
            <Link to="/" className="text-2xl font-black tracking-tight text-white">
              SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link to="/how-it-works" className="hidden md:block px-3 md:px-4 py-2 md:py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
                How It Works
              </Link>
              <Link to="/pricing" className="hidden md:block px-3 md:px-4 py-2 md:py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
                Pricing
              </Link>
              <Link to="/blog" className="hidden md:block px-3 md:px-4 py-2 md:py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
                Blog
              </Link>
              <Link to="/#signup-form" className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-[32px] bg-accent text-brand font-black text-xs sm:text-sm uppercase tracking-wide hover:brightness-95 transition-all">
                Start Free
              </Link>
            </div>
          </div>
        </nav>

        {/* HERO WITH BACKGROUND IMAGE */}
        <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero_image.png"
              alt="Voice to invoice software for service businesses"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/90 to-brand/80"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.88] uppercase tracking-tighter">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium leading-[1.15] max-w-2xl">
              Everything you need to know about voice-to-invoice software and how SMASH works.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">

            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl font-black text-accent mb-6 md:mb-8 uppercase tracking-tighter leading-[0.88]">
                  {category.category}
                </h2>
                <div className="bg-white/5 rounded-2xl px-4 sm:px-8 py-2 sm:py-4">
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

            {/* BLOG INTERLINK */}
            <div className="mt-16 md:mt-20 mb-12 md:mb-16 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3 tracking-tighter leading-[0.88]">
                Want to learn more?
              </h3>
              <p className="text-white/70 font-medium leading-[1.15] mb-5">
                Read real-world invoicing tips and workflow strategies on the SMASH blog.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/blog/the-60-second-invoice-voice-to-invoice"
                  className="inline-flex items-center gap-2 text-accent font-bold hover:text-white transition-colors"
                >
                  The 60-Second Invoice
                  <ArrowRight size={18} strokeWidth={2.5} />
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-white/60 font-bold hover:text-white transition-colors"
                >
                  View all articles
                  <ArrowRight size={18} strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-[32px] p-6 sm:p-8 md:p-12 border border-accent/20">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tighter leading-[0.88]">
                Just gotta try it.
              </h3>
              <p className="text-white/80 text-base sm:text-lg mb-6 leading-[1.15]">
                Free to start. No card. No setup. Talk for 30 seconds and see what happens.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/#signup-form"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all"
                >
                  Start Free
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-white/10 transition-all"
                >
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
