import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';
import { Bug, MessageSquare, CreditCard, Users, Newspaper } from 'lucide-react';
import { AnimateIn } from '../components/animate-in';

export function Contact() {
  return (
    <>
      <SEO
        title="Contact | SMASH Invoices"
        description="Get in touch with SMASH Invoices. Questions about the app, pricing, or your account — we're here to help. Email: dan@smashinvoices.com"
        keywords="SMASH Invoices contact, invoice app support, contact SMASH"
        ogTitle="Contact — SMASH Invoices"
        ogDescription="Questions about SMASH Invoices? Get in touch — we're here to help."
        ogImage="https://smashinvoices.com/og-image.png"
        ogUrl="https://smashinvoices.com/contact"
        twitterTitle="Contact — SMASH Invoices"
        twitterDescription="Questions about SMASH Invoices? Get in touch."
        canonical="https://smashinvoices.com/contact"
      />

      {/* NAV */}
      <nav className="bg-brand/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 md:py-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black tracking-tight text-white">
            SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/pricing" className="hidden md:block px-3 md:px-4 py-2 md:py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
              Pricing
            </Link>
            <Link to="/faq" className="hidden md:block px-3 md:px-4 py-2 md:py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
              FAQ
            </Link>
            <Link to="/#signup-form" className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-[32px] bg-accent text-brand font-black text-xs sm:text-sm uppercase tracking-wide hover:brightness-95 transition-all">
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4">
              Get in touch.
            </h1>
            <p className="font-body text-lg text-white/70 font-medium leading-[1.5] max-w-xl">
              Built by one person. Which means you're talking directly to the person who built it.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* LEFT — contact details */}
            <AnimateIn direction="left">
            <div className="space-y-6">
              <div className="bg-white rounded-[32px] border-2 border-border p-8">
                <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-6">
                  Email us
                </h2>
                <a
                  href="mailto:dan@smashinvoices.com"
                  className="text-xl font-black text-accent hover:brightness-90 transition-all"
                >
                  dan@smashinvoices.com
                </a>
                <p className="font-body text-brand/60 font-medium text-sm mt-3 leading-[1.5]">
                  We aim to respond within one business day.
                </p>
              </div>

              <div className="bg-white rounded-[32px] border-2 border-border p-8">
                <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-6">
                  Business details
                </h2>
                <div className="space-y-2 text-sm font-medium text-brand/70">
                  <p><span className="font-bold text-brand">Business:</span> SMASH Invoices</p>
                  <p><span className="font-bold text-brand">Operator:</span> Daniel Neale</p>
                  <p><span className="font-bold text-brand">ABN:</span> 58 600 491 085</p>
                  <p><span className="font-bold text-brand">Location:</span> Byron Bay, NSW, Australia</p>
                  <p><span className="font-bold text-brand">Website:</span> smashinvoices.com</p>
                </div>
              </div>

              <div className="bg-white rounded-[32px] border-2 border-border p-8">
                <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">
                  Before you email
                </h2>
                <p className="font-body text-brand/60 font-medium text-sm leading-[1.5] mb-4">
                  Your question might already be answered:
                </p>
                <div className="space-y-2">
                  <Link to="/faq" className="flex items-center gap-2 text-sm font-bold text-brand hover:text-accent transition-colors">
                    → Frequently asked questions
                  </Link>
                  <Link to="/pricing" className="flex items-center gap-2 text-sm font-bold text-brand hover:text-accent transition-colors">
                    → Pricing and plans
                  </Link>
                  <Link to="/how-it-works" className="flex items-center gap-2 text-sm font-bold text-brand hover:text-accent transition-colors">
                    → How SMASH works
                  </Link>
                </div>
              </div>
            </div>

            </AnimateIn>

            {/* RIGHT — reasons to contact */}
            <AnimateIn direction="right">
            <div className="space-y-6">
              <div className="bg-white rounded-[32px] border-2 border-border p-8">
                <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-6">
                  What we can help with
                </h2>
                <ul className="space-y-4">
                  {[
                    { icon: Bug, title: "Something's broken", desc: "If something in the app isn't working as expected, tell us and we'll fix it fast." },
                    { icon: MessageSquare, title: "Feedback", desc: "Built by a working handyman. Honest feedback from real users shapes every update." },
                    { icon: CreditCard, title: "Billing questions", desc: "Charges, cancellations, refunds — email us and we'll sort it out." },
                    { icon: Users, title: "Partnerships", desc: "Trade associations, industry groups, referral arrangements. Dan reads every email." },
                    { icon: Newspaper, title: "Press", desc: "Writing about SMASH or covering the space? Get in touch for comment or assets." },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <item.icon size={22} className="shrink-0 mt-0.5 text-accent" strokeWidth={2} />
                      <div>
                        <p className="font-bold text-brand text-sm uppercase tracking-wide">{item.title}</p>
                        <p className="font-body text-brand/60 font-medium text-sm leading-[1.5] mt-1">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand rounded-[32px] p-8">
                <h2 className="text-xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-3">
                  Just want to try it?
                </h2>
                <p className="font-body text-white/70 font-medium text-sm leading-[1.5] mb-6">
                  Free to download. No credit card. Talk for 30 seconds and see your first quote.
                </p>
                <Link
                  to="/#signup-form"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all"
                >
                  Start Free
                </Link>
              </div>
            </div>

          </AnimateIn>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
