import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SEO } from '../components/seo';
import { StructuredData } from '../components/structured-data';

export function HowItWorks() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create Invoices with Voice Using SMASH",
    "description": "Learn how to create professional invoices in under 60 seconds using voice commands with SMASH Invoices",
    "totalTime": "PT1M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Speak Your Job Details",
        "text": "Tap the microphone and describe the work you just completed. Just talk naturally about what you did, materials used, and time spent.",
        "image": "https://smashinvoices.com/hero_image.png"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "AI Generates Your Invoice",
        "text": "SMASH AI instantly converts your voice into a professional invoice with automatic pricing based on your rates and past jobs.",
        "image": "https://smashinvoices.com/hero_image.png"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Review and Send",
        "text": "Quick review and one-tap send. Your customer receives a professional invoice instantly on their phone.",
        "image": "https://smashinvoices.com/hero_image.png"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Get Paid Immediately",
        "text": "Customer approves and pays directly from the invoice. Money hits your account in 48 hours, not 2 weeks.",
        "image": "https://smashinvoices.com/hero_image.png"
      }
    ]
  };

  return (
    <>
      <SEO
        title="How It Works | Voice-to-Invoice in 60 Seconds | SMASH Invoices"
        description="Learn how SMASH turns your voice into professional invoices in under 60 seconds. Simple 4-step process: speak, review, send, get paid. No typing required."
        keywords="how voice invoicing works, voice to invoice process, AI invoice generation, automated invoicing workflow, voice powered invoicing"
        ogTitle="How SMASH Voice-to-Invoice Works"
        ogDescription="Speak your job details, AI creates the invoice, send with one tap, get paid in 48 hours. That simple."
        ogImage="https://smashinvoices.com/hero_image.png"
        canonical="https://smashinvoices.com/how-it-works"
      />

      <StructuredData data={howToSchema} />

      <div className="min-h-screen bg-white">
        <nav className="bg-brand text-white border-b border-white/10">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 py-6 flex items-center justify-between">
            <Link to="/" className="text-2xl font-black tracking-tight">
              SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link to="/blog" className="hidden md:block px-4 py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
                Blog
              </Link>
              <Link to="/#signup-form" className="px-6 py-2.5 rounded-full bg-accent text-accentText font-black text-sm uppercase tracking-wide hover:brightness-95 transition-all">
                Sign Up
              </Link>
            </div>
          </div>
        </nav>

        <section className="bg-brand text-white py-20 lg:py-32">
          <div className="max-w-5xl mx-auto px-8 lg:px-12 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 uppercase tracking-tighter">
              How SMASH Works
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-bold max-w-3xl mx-auto leading-tight mb-12">
              From finished job to paid invoice. In under 60 seconds. No typing.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand mb-6 leading-tight uppercase">
                See It In Action
              </h2>
              <p className="text-xl md:text-2xl text-slate-700 font-semibold max-w-3xl mx-auto">
                Watch how SMASH turns voice into a professional invoice in under 60 seconds
              </p>
            </div>
            <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/gr_iAEvyIQY?rel=0"
                title="SMASH Voice-to-Invoice Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-slate-50">
          <div className="max-w-6xl mx-auto px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-brand mb-6 leading-tight uppercase">
                Simple 4-Step Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accentText font-black text-2xl mb-6">
                  1
                </div>
                <h3 className="text-3xl font-black text-brand mb-4 leading-tight">
                  Speak Your Job Details
                </h3>
                <p className="text-lg text-slate-700 font-semibold mb-4 leading-relaxed">
                  Tap the mic button. Describe what you just did. That's it.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>Talk naturally - no special commands needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>AI understands your job and pricing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accentText font-black text-2xl mb-6">
                  2
                </div>
                <h3 className="text-3xl font-black text-brand mb-4 leading-tight">
                  AI Generates Your Invoice
                </h3>
                <p className="text-lg text-slate-700 font-semibold mb-4 leading-relaxed">
                  SMASH instantly creates a professional invoice with accurate pricing.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>Automatic line items and descriptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>GST calculated and included</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accentText font-black text-2xl mb-6">
                  3
                </div>
                <h3 className="text-3xl font-black text-brand mb-4 leading-tight">
                  Review and Send
                </h3>
                <p className="text-lg text-slate-700 font-semibold mb-4 leading-relaxed">
                  Quick review, one-tap send. Customer gets it instantly.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>Send via SMS or email</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>Track when they open it</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accentText font-black text-2xl mb-6">
                  4
                </div>
                <h3 className="text-3xl font-black text-brand mb-4 leading-tight">
                  Get Paid Immediately
                </h3>
                <p className="text-lg text-slate-700 font-semibold mb-4 leading-relaxed">
                  Customer approves and pays directly from the invoice.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>Built-in payment processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>48-hour payout to your bank</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-brand text-white">
          <div className="max-w-5xl mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight uppercase">
              That's it. Seriously.
            </h2>
            <p className="text-2xl md:text-3xl text-white/90 font-bold mb-12 max-w-3xl mx-auto leading-tight">
              From job completion to money in the bank. Under 60 seconds of work. No typing. No spreadsheets. No waiting.
            </p>
            <Link
              to="/#signup-form"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-accent text-accentText font-black text-lg uppercase tracking-wide hover:brightness-95 transition-all shadow-glow"
            >
              Try It Free
              <ArrowRight size={24} strokeWidth={3} />
            </Link>
          </div>
        </section>

        <footer className="bg-brand text-white border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <Link to="/" className="text-2xl font-black tracking-tight">
                SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
              </Link>
              <div className="flex gap-6">
                <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors font-semibold">Home</Link>
                <Link to="/blog" className="text-sm text-white/60 hover:text-white transition-colors font-semibold">Blog</Link>
                <Link to="/founder" className="text-sm text-white/60 hover:text-white transition-colors font-semibold">Founder</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
