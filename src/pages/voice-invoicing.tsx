import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';
import { PhoneMockup, AppScreen } from '../components/phone-mockup';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { AnimateIn } from '../components/animate-in';
import { Nav } from '../components/nav';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const faqs = [
  {
    q: "Do I need to speak clearly or slowly?",
    a: "No. SMASH handles natural speech — accents, background noise, and the way you actually talk on a job site. You don't need to slow down or enunciate. Just describe the job the way you'd explain it to a mate."
  },
  {
    q: "What if I get the details wrong?",
    a: "You get a full review screen before anything is sent. Read through the quote, edit any line items, adjust prices, and send only when you're happy. Nothing goes to your customer without your approval."
  },
  {
    q: "Does it work offline?",
    a: "Voice processing needs an internet connection — a standard 4G signal is enough. Once a quote is generated, you can review and edit it offline. Sending requires a connection."
  },
  {
    q: "How long does it actually take?",
    a: "Under 10 seconds from finishing your voice description to a structured, priced quote appearing on screen. End-to-end — speak, review, send — takes under 60 seconds for a new job. Under 30 seconds with your personal pricing catalog set up."
  },
  {
    q: "What trades does voice invoicing work for?",
    a: "Any trade or service business that quotes jobs. Cleaners, handymen, gardeners, painters, plumbers, electricians, mobile mechanics, pest control — if you describe work out loud, SMASH can build the quote from it."
  },
  {
    q: "Is voice invoicing available on Android?",
    a: "SMASH is currently available on iOS (iPhone). Android is coming. Join the waitlist from the App Store page to be notified when it launches."
  }
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button onClick={onClick} className="w-full flex items-start justify-between gap-4 py-6 text-left">
        <span className="text-lg font-bold text-brand">{q}</span>
        <ChevronDown size={24} className={`shrink-0 transition-transform text-brand/40 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="font-body text-brand/70 font-medium leading-[1.5]">{a}</p>
        </div>
      )}
    </div>
  );
}

export function VoiceInvoicing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Voice Invoicing App Australia | Invoice by Talking | SMASH Invoices"
        description="Voice invoicing for Australian service businesses. Speak the job for 30 seconds — SMASH builds the quote automatically. Under 60 seconds from job done to invoice sent."
        keywords="voice invoicing app, create invoice by voice, hands-free invoicing Australia, voice to invoice, speak to invoice"
        ogTitle="Voice Invoicing — Invoice by Talking, Not Typing | SMASH Invoices"
        ogDescription="Speak the job for 30 seconds. SMASH builds the quote. Invoice sent before you leave the driveway."
        ogImage="https://smashinvoices.com/og-image.png"
        ogUrl="https://smashinvoices.com/voice-invoicing"
        twitterTitle="Voice Invoicing | SMASH Invoices"
        twitterDescription="Speak the job for 30 seconds. Quote built automatically. Invoice sent before you leave the driveway."
        canonical="https://smashinvoices.com/voice-invoicing"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }) }} />

      <Nav />

      {/* HERO */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero_image.png" alt="Voice invoicing for service businesses" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/90 to-brand/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-sm uppercase tracking-widest mb-4">Voice Invoicing</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.88] uppercase tracking-tighter">
              Invoice by talking.<br />Not typing.
            </h1>
            <p className="font-body text-lg sm:text-xl md:text-2xl text-white/80 font-medium leading-[1.5] max-w-2xl mb-8">
              Speak the job for 30 seconds. SMASH builds the quote. Customer approves. You get paid — before you leave the driveway.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all">
                Start Free
              </a>
              <Link to="/how-it-works" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-white/10 transition-all">
                See How It Works
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ANSWER BLOCK — AI SEARCH OPTIMISED */}
      <section className="bg-accent py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-brand font-medium leading-[1.4] text-lg md:text-xl">
            <strong className="font-black">Voice invoicing</strong> is the process of describing a completed job out loud and having software automatically build a structured, priced invoice from your speech. SMASH is a voice invoicing app for self-employed service workers — you speak for 30 seconds, SMASH builds the quote, and your customer approves and pays from a link. No typing required.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimateIn direction="left">
            <div>
              <p className="text-accent font-black text-xs uppercase tracking-widest mb-3">The problem</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-6">
                Typing is the barrier. Nothing else.
              </h2>
              <p className="font-body text-brand/70 font-medium leading-[1.5] mb-4">
                The job is done. The money should be yours. But invoicing means opening an app, typing out what you did, calculating GST, finding the customer's details, and hitting send. By the time you're back in the van, exhausted, it just doesn't happen.
              </p>
              <p className="font-body text-brand/70 font-medium leading-[1.5] mb-6">
                Then it's four jobs behind. Then it's a mountain you never climb. Then it's $8,684 sitting uninvoiced at the end of the year — because the only barrier was the effort of typing it out.
              </p>
              <p className="text-brand font-black leading-[1.4]">
                SMASH removes that barrier completely. You don't type anything. Ever.
              </p>
            </div>
            </AnimateIn>
            <AnimateIn direction="right">
            <div className="flex justify-center scale-75 sm:scale-90 lg:scale-100 origin-center">
              <PhoneMockup>
                <AppScreen type="voice" />
              </PhoneMockup>
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-surface py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/gr_iAEvyIQY?rel=0"
              title="SMASH Voice Invoicing Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 3 STEPS */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 md:mb-16">
              Just talk. SMASH<br />does the rest.
            </h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Speak the job",
                body: "Describe the work out loud — what you did, what materials you used, how long it took. 20 to 30 seconds. The same way you'd explain it to a mate. No script, no format."
              },
              {
                step: "02",
                title: "Quote appears",
                body: "In under 10 seconds, a structured, priced, GST-compliant quote is built automatically. Your rates, your materials, your business name. Review it on the spot and make any edits."
              },
              {
                step: "03",
                title: "Customer pays",
                body: "Send the quote as a link. Customer opens it on their phone, approves with one tap, and pays right there. You see the second they open it. Invoice issued automatically."
              }
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-[32px] border-2 border-border p-8">
                <p className="text-5xl font-black text-accent/30 leading-none mb-4">{s.step}</p>
                <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">{s.title}</h3>
                <p className="font-body text-brand/70 font-medium text-sm leading-[1.5]">{s.body}</p>
              </div>
            ))}
          </div>
          </AnimateIn>
          <p className="text-center text-brand/60 font-medium mt-8">
            Total time: <strong className="text-brand">under 60 seconds</strong> for a new job. <strong className="text-brand">Under 30 seconds</strong> with your personal pricing catalog.
          </p>
        </div>
      </section>

      {/* VOICE EXAMPLES */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-accent font-black text-xs uppercase tracking-widest mb-3">Real examples</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4">
            This is all you say.
          </h2>
          <p className="font-body text-white/60 font-medium leading-[1.5] mb-12 max-w-xl">
            Exactly as you'd say it. No special words. No format. Just the job.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                trade: "Cleaner",
                link: "/for-cleaners",
                quote: "\"3-bed standard clean, Mrs Johnson, Indooroopilly, took about 3 hours, the usual rate.\"",
                result: "Quote built: 3hr standard clean, correct rate, GST included, customer link ready."
              },
              {
                trade: "Handyman",
                link: "/for-handymen",
                quote: "\"Fixed the fence gate out the back — two new hinges and a latch, about 2 hours labour.\"",
                result: "Quote built: labour + materials priced automatically from catalog, sent in 45 seconds."
              },
              {
                trade: "Painter",
                link: "/for-painters",
                quote: "\"Bedroom and hallway, 2 coats, used about 15 litres of paint, took 2 days.\"",
                result: "Quote built: paint materials priced, labour rate applied, professional PDF ready."
              }
            ].map((ex) => (
              <div key={ex.trade} className="bg-white/10 rounded-[32px] border border-white/20 p-8">
                <Link to={ex.link} className="inline-block text-xs font-black uppercase tracking-widest bg-accent text-brand px-3 py-1.5 rounded-full mb-4 hover:brightness-95 transition-all">
                  {ex.trade}
                </Link>
                <p className="text-white font-medium leading-[1.4] text-lg italic mb-4">{ex.quote}</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-accent text-sm font-bold leading-[1.4]">{ex.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEED COMPARISON TABLE */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4 text-center">
            Why SMASH is actually fast
          </h2>
          <p className="font-body text-center text-brand/60 font-medium mb-12 max-w-xl mx-auto leading-[1.5]">
            Every other invoicing method requires typing. That's the only difference.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr className="border-b-2 border-brand">
                  <th className="text-left py-4 pr-6 text-sm font-black uppercase tracking-wider text-brand">Method</th>
                  <th className="text-center py-4 px-4 text-sm font-black uppercase tracking-wider text-brand">Time to invoice</th>
                  <th className="text-center py-4 px-4 text-sm font-black uppercase tracking-wider text-brand">Typing required</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "Excel / Word template", time: "15–25 minutes", typing: true },
                  { method: "Traditional invoice app", time: "5–10 minutes", typing: true },
                  { method: "SMASH — new job", time: "Under 60 seconds", typing: false },
                  { method: "SMASH — with pricing catalog", time: "Under 30 seconds", typing: false },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-border ${i >= 2 ? 'bg-accent/5' : ''}`}>
                    <td className={`py-4 pr-6 text-sm font-bold leading-[1.15] ${i >= 2 ? 'text-brand' : 'text-brand/60'}`}>{row.method}</td>
                    <td className={`text-center py-4 px-4 text-sm font-black ${i >= 2 ? 'text-accent' : 'text-brand/50'}`}>{row.time}</td>
                    <td className="text-center py-4 px-4">
                      {row.typing
                        ? <span className="text-brand/30 font-bold text-sm">Yes</span>
                        : <Check size={18} className="mx-auto text-accent" strokeWidth={3} />
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-brand/40 font-medium mt-6">
            Voice processing takes ~7 seconds. Quote generation under 10 seconds end to end.
          </p>
        </div>
      </section>

      {/* FEATURES THAT MAKE VOICE INVOICING WORK */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 text-center">
              What makes it work
            </h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Your pricing catalog", body: "Build your rates once. Every time you mention a service, SMASH fills your price automatically. Gets faster every job." },
              { title: "Materials priced automatically", body: "2,250+ Australian trade materials already in the system. Say the materials — they're priced without you looking anything up." },
              { title: "GST handled automatically", body: "Every quote is tax invoice compliant — ABN included, GST calculated, line items itemised. Your accountant will thank you." },
              { title: "Full review before sending", body: "You see the quote before it goes anywhere. Edit, adjust, approve. Nothing leaves without your say-so." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-[32px] border-2 border-border p-8">
                <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">{f.title}</h3>
                <p className="font-body text-brand/70 font-medium text-sm leading-[1.5]">{f.body}</p>
              </div>
            ))}
          </div>
          </AnimateIn>
          <div className="text-center mt-10">
            <Link to="/features" className="inline-flex items-center gap-2 text-sm font-black text-brand uppercase tracking-wide hover:text-accent transition-colors">
              See all features →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 md:mb-14 text-center">
              Voice invoicing questions
            </h2>
            <div className="bg-surface rounded-[32px] border-2 border-border px-4 sm:px-8 py-2 sm:py-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FROM THE BLOG */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-brand uppercase tracking-tighter leading-[0.88]">From the blog</h2>
            <Link to="/blog" className="text-sm font-black text-brand/50 uppercase tracking-wide hover:text-brand transition-colors">All posts →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { slug: "the-60-second-invoice-voice-to-invoice", title: "The 60-Second Invoice", desc: "How voice invoicing cuts your end-of-job admin from 10 minutes to under a minute." },
              { slug: "voice-vs-typing-thumbs-costing-ten-dollars", title: "Your Thumbs Are Costing You $10", desc: "Every minute you spend typing an invoice is money you're not billing for. Here's the maths." },
              { slug: "stop-admin-sundays-voice-invoicing", title: "Stop Admin Sundays", desc: "If you're catching up on invoices on weekends, voice invoicing exists to solve exactly that." },
            ].map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="bg-white rounded-[24px] border-2 border-border p-6 hover:border-accent transition-colors group">
                <h3 className="text-base font-black text-brand uppercase tracking-tighter leading-[0.88] mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-sm text-brand/60 font-medium leading-[1.4]">{post.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-[0.88]">
            Work with your hands.<br />Not a keyboard.
          </h2>
          <p className="font-body text-lg text-white/80 font-medium leading-[1.5] mb-8 max-w-xl mx-auto">
            Free to download. Talk for 30 seconds. See your first quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all">
              Start Free
            </a>
            <Link to="/how-it-works" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-white/10 transition-all">
              See How It Works
            </Link>
          </div>
          <p className="text-sm text-white/40 font-medium">
            <Link to="/features" className="underline hover:text-white/70 transition-colors">All features</Link> · <Link to="/pricing" className="underline hover:text-white/70 transition-colors">Pricing</Link> · <Link to="/for-cleaners" className="underline hover:text-white/70 transition-colors">For cleaners</Link> · <Link to="/for-handymen" className="underline hover:text-white/70 transition-colors">For handymen</Link>
          </p>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
