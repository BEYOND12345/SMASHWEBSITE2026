import { Link } from 'react-router-dom';
import { Mic, Send, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';
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
            <p className="text-2xl md:text-3xl text-white/90 font-bold max-w-3xl mx-auto leading-tight">
              From finished job to paid invoice. In under 60 seconds. No typing.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-slate-50">
          <div className="max-w-6xl mx-auto px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accentText font-black text-2xl mb-6">
                  1
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-brand mb-6 leading-tight">
                  Speak Your Job Details
                </h2>
                <p className="text-xl text-slate-700 font-semibold mb-6 leading-relaxed">
                  Tap the mic button. Describe what you just did. That's it.
                </p>
                <ul className="space-y-3 text-lg text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>Talk naturally - no special commands needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>Mention materials, labour, time spent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>AI understands your job and pricing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-slate-200">
                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl">
                  <Mic size={80} className="text-accent" strokeWidth={2} />
                </div>
                <p className="text-center text-slate-600 mt-6 italic">
                  "Changed brake pads and rotors on the Hilux. Used premium pads. Took about 2 hours."
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 md:order-1 bg-white rounded-2xl shadow-xl p-8 border-2 border-slate-200">
                <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="font-black text-brand">INVOICE</span>
                    <span className="text-sm text-slate-600">#INV-2847</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-700">Brake Pad Replacement</span>
                      <span className="font-bold">$280</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700">Brake Rotor Replacement</span>
                      <span className="font-bold">$320</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700">Labour (2 hrs)</span>
                      <span className="font-bold">$180</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                    <span className="font-black text-brand">TOTAL</span>
                    <span className="font-black text-2xl text-brand">$780</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accentText font-black text-2xl mb-6">
                  2
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-brand mb-6 leading-tight">
                  AI Generates Your Invoice
                </h2>
                <p className="text-xl text-slate-700 font-semibold mb-6 leading-relaxed">
                  SMASH instantly creates a professional invoice with accurate pricing.
                </p>
                <ul className="space-y-3 text-lg text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>Automatic line items and descriptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>Your rates applied automatically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>GST calculated and included</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accentText font-black text-2xl mb-6">
                  3
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-brand mb-6 leading-tight">
                  Review and Send
                </h2>
                <p className="text-xl text-slate-700 font-semibold mb-6 leading-relaxed">
                  Quick review, one-tap send. Customer gets it instantly.
                </p>
                <ul className="space-y-3 text-lg text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>Edit anything if needed</span>
                  </li>
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
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-slate-200">
                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl">
                  <Send size={80} className="text-accent" strokeWidth={2} />
                </div>
                <p className="text-center text-slate-600 mt-6 font-semibold">
                  Sent to customer's phone in real-time
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 bg-white rounded-2xl shadow-xl p-8 border-2 border-slate-200">
                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-green-100 to-green-50 rounded-xl">
                  <CreditCard size={80} className="text-green-600" strokeWidth={2} />
                </div>
                <p className="text-center text-slate-600 mt-6 font-semibold">
                  Money in your account in 48 hours
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accentText font-black text-2xl mb-6">
                  4
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-brand mb-6 leading-tight">
                  Get Paid Immediately
                </h2>
                <p className="text-xl text-slate-700 font-semibold mb-6 leading-relaxed">
                  Customer approves and pays directly from the invoice.
                </p>
                <ul className="space-y-3 text-lg text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} strokeWidth={2.5} />
                    <span>One-tap payment approval</span>
                  </li>
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
