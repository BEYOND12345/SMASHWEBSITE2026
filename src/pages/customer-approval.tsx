import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SEO } from '../components/seo';
import { StructuredData, createFAQSchema, createBreadcrumbSchema, createHowToSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { hreflangAlternates } from '../data/country-data';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { VoiceConversionCTA } from '../components/voice-conversion-cta';
import { ChevronDown, CheckCircle2, Eye, Bell, ArrowRight } from 'lucide-react';

const url = 'https://smashinvoices.com/customer-approval';

const faqs = [
  {
    q: 'How do I get a customer to approve a quote?',
    a: "Send the quote as a link, not a PDF. A link lets the customer tap one button to approve without printing, signing, or emailing anything back. SMASH builds every quote as a mobile-friendly page with a single Approve button and a typed signature box — most customers approve within an hour of receiving it.",
  },
  {
    q: "How do I know if a customer has opened my quote?",
    a: "SMASH fires a real-time notification the moment a customer opens your quote, and again when they approve, decline or request a change. No more 'I never got it' replies — you can see exactly when and how many times each link was opened.",
  },
  {
    q: 'Do digital quote approvals count as legally binding?',
    a: "Yes, in Australia, NZ, the UK, the US and Canada. Electronic signatures and tap-to-approve records are enforceable under each country's electronic transactions legislation (e.g. ETA 1999 in Australia, the UK Electronic Communications Act 2000, UETA / ESIGN in the US). SMASH records a timestamped approval with IP address so the audit trail is solid.",
  },
  {
    q: 'What happens if the customer wants changes?',
    a: "The same approval link has a 'Request a change' button. The customer types what they want adjusted, you get a notification, you update the quote in SMASH (voice works here too), the same link refreshes, and they re-approve. No new emails, no version numbers.",
  },
  {
    q: "Does the approval link work if the customer isn't tech-savvy?",
    a: "Yes — it's a plain web page that opens on any phone. No app download, no login, no account creation. One tap to approve. If someone truly cannot use a link, SMASH supports verbal approval recording as a backup.",
  },
  {
    q: 'Can I use customer approval in the UK, US, Canada or New Zealand?',
    a: "Yes. The approval portal works globally the day the app lands in each market. Australia is live today; NZ, UK, US and Canada launch next with the same approval portal, read receipts and audit trail.",
  },
];

const steps = [
  { h: 'Send a link, not a PDF',       b: 'SMASH gives every quote and invoice a unique URL. One tap opens it on any phone.', Icon: CheckCircle2 },
  { h: 'See when they open it',        b: 'Read receipts fire the moment the customer views the link — no more guessing.',    Icon: Eye },
  { h: 'One-tap approve and pay',      b: 'Approve button on every quote. Pay Now button on every invoice. Typed signature captured for the audit trail.', Icon: CheckCircle2 },
  { h: 'Get notified in real time',    b: 'Push notification on every open, approval, decline, change-request and payment. You always know where a job stands.', Icon: Bell },
];

export function CustomerApproval() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Customer Approval for Quotes and Invoices | SMASH"
        description="How to get customers to approve quotes and sign off on invoices — with one tap, a read receipt, and a real-time notification. Works globally; legally binding in AU, NZ, UK, US and Canada."
        keywords="customer approval quote, quote approval app, invoice approval, electronic quote signature, read receipts invoice, tradie quote approval, digital signature contractor, one-tap approval, customer approval UK, customer approval USA"
        ogTitle="Customer Approval — One Tap, Legally Binding | SMASH"
        ogDescription="Approve quotes and invoices with one tap, fire read receipts, and keep the audit trail."
        ogUrl={url}
        canonical={url}
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home',               url: 'https://smashinvoices.com/' },
        { name: 'Customer approval',  url },
      ])} />
      <StructuredData data={createFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))} />
      <StructuredData data={createHowToSchema({
        name: 'How SMASH customer approval works',
        description: 'The complete flow from sending a quote to a signed, paid, legally-binding approval.',
        steps: steps.map(s => ({ name: s.h, text: s.b })),
      })} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-accent mb-6">
              Customer approval
            </p>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] text-white mb-8">
              Know the second<br />they <span className="text-accent">open it.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-4">
              Send quotes and invoices as links, not PDFs. Read receipts fire the moment the customer opens them. One tap to approve. One tap to pay. Signed, audited, enforceable.
            </p>
            <p className="font-body text-sm text-white/40 max-w-2xl leading-relaxed mb-10">
              Live worldwide on iOS &amp; Chrome ·{' '}
              <Link to="/" className="underline decoration-accent/60 hover:text-white">AU</Link>{' · '}
              <Link to="/nz" className="underline decoration-accent/60 hover:text-white">NZ</Link>{' · '}
              <Link to="/uk" className="underline decoration-accent/60 hover:text-white">UK</Link>{' · '}
              <Link to="/us" className="underline decoration-accent/60 hover:text-white">US</Link>{' · '}
              <Link to="/ca" className="underline decoration-accent/60 hover:text-white">Canada</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/quote-generator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-display text-sm uppercase tracking-widest hover:brightness-95 transition-all"
              >
                <CheckCircle2 size={16} strokeWidth={2.5} />
                Try a quote
              </Link>
              <Link
                to="/voice-invoicing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white font-display text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                See voice invoicing
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── ANSWER BLOCK ────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="border-l-4 border-accent pl-8 py-2">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-4">
              Short answer
            </p>
            <p className="font-body text-xl md:text-2xl font-bold text-brand leading-relaxed">
              Send the quote as a link. The customer opens it on their phone, taps Approve, types their name, and signs off. You get a read receipt when they opened it, a notification when they approved, and a legally-enforceable audit trail — in AU, NZ, UK, US and Canada.
            </p>
          </div>
        </div>
      </section>

      {/* ── STEPS ───────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
              The flow
            </p>
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-brand leading-[0.95] mb-10">
              From send to signed in under an hour
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {steps.map((s, i) => (
                <div key={s.h} className="bg-white rounded-3xl border-2 border-border p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                      <s.Icon size={18} className="text-accent" strokeWidth={2.5} />
                    </div>
                    <p className="font-display text-[11px] uppercase tracking-widest text-brand/40">Step {i + 1}</p>
                  </div>
                  <p className="font-display text-lg uppercase tracking-tight text-brand mb-2">{s.h}</p>
                  <p className="font-body text-sm text-brand/65 leading-relaxed">{s.b}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── EMOTIONAL / FEATURE STRIP ────────────────────── */}
      <section className="bg-brand py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
              The real win
            </p>
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-white leading-[0.95] mb-6">
              No more<br />"I never got&nbsp;it."
            </h2>
            <p className="font-body text-lg text-white/70 leading-relaxed mb-6">
              The biggest cost of paper quotes isn't printing — it's the three days of silence while you wonder if the customer even saw it. SMASH kills that silence. You see the open, you see the approval, you see the payment. The job either moves forward or it doesn't, and you know which today.
            </p>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest text-white hover:text-accent transition-colors"
            >
              See all features
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </AnimateIn>

          <AnimateIn direction="up">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 space-y-5">
              {[
                { l: '10:14 AM', r: 'Quote sent to Sarah · Kitchen reno' },
                { l: '10:17 AM', r: 'Sarah opened the quote' },
                { l: '10:21 AM', r: 'Sarah approved the quote ($4,850)' },
                { l: '10:22 AM', r: 'Deposit invoice sent' },
                { l: '10:29 AM', r: 'Deposit paid · funds cleared in 2 days' },
              ].map(r => (
                <div key={r.l} className="flex items-start gap-4">
                  <span className="font-mono text-xs text-accent/70 w-16 shrink-0 pt-0.5">{r.l}</span>
                  <span className="font-body text-sm text-white/80 leading-relaxed">{r.r}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-brand leading-[0.95] mb-10 text-center">
            Customer approval questions
          </h2>
          <div className="bg-white rounded-3xl border-2 border-border px-6 sm:px-10 py-2">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-border last:border-0">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-sm md:text-base uppercase tracking-tight text-brand">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand/40 transition-transform mt-0.5 ${openFaq === i ? 'rotate-180' : ''}`}
                    strokeWidth={2.5}
                  />
                </button>
                {openFaq === i && (
                  <p className="font-body text-sm md:text-base text-brand/65 leading-relaxed pb-6">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <VoiceConversionCTA
        outputLabel="every quote"
        headline="Send it. See it. Sign it. All from voice."
        sub="Describe the job out loud, send the link, get the tap. Every quote and invoice SMASH creates has read receipts, one-tap approval, and a legally-enforceable signature baked in."
      />

      <Footer />
    </>
  );
}
