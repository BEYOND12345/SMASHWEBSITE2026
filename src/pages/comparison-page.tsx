import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { Check, X, ArrowRight, Zap, Upload, ChevronDown, Star, Quote } from 'lucide-react';
import type { ComparisonData } from '../data/comparison-data';
import { Nav } from '../components/nav';
import { PhoneMockup } from '../components/phone-mockup';
import { ListeningScreen } from '../components/listening-screen';
import { GeneratingScreen } from '../components/generating-screen';
import { PortalScreen } from '../components/portal-screen';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

interface Props {
  data: ComparisonData;
}

function FeatureRow({ label, smash, them }: { label: string; smash: boolean | string; them: boolean | string }) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] gap-4 items-center py-3.5 border-b border-white/6 last:border-0">
      <span className="font-body text-sm font-medium text-white/70 leading-[1.4]">{label}</span>
      {/* SMASH */}
      <div className="w-[88px] flex justify-center">
        {smash === true ? (
          <Check size={17} className="text-accent" strokeWidth={2.5} />
        ) : smash === false ? (
          <X size={15} className="text-white/20" strokeWidth={2.5} />
        ) : (
          <span className="font-body text-xs font-bold text-accent/70 text-center bg-accent/10 px-2 py-0.5 rounded-full">{smash}</span>
        )}
      </div>
      {/* Them */}
      <div className="w-[88px] flex justify-center">
        {them === true ? (
          <Check size={17} className="text-white/40" strokeWidth={2.5} />
        ) : them === false ? (
          <X size={15} className="text-white/20" strokeWidth={2.5} />
        ) : (
          <span className="font-body text-xs font-bold text-white/40 text-center">{them}</span>
        )}
      </div>
    </div>
  );
}

const howItWorksSteps = [
  {
    Screen: ListeningScreen,
    title: 'Tap record',
    desc: 'Open SMASH and tap record. Five seconds. No form, no template, no navigation.',
  },
  {
    Screen: GeneratingScreen,
    title: 'Describe the job',
    desc: 'Talk for 30 seconds — labour, materials, call-out fee. SMASH builds the quote automatically.',
  },
  {
    Screen: PortalScreen,
    title: 'Client approves & pays',
    desc: 'Your client gets a link. They approve with one tap and pay by card. Done before you leave.',
  },
];

function AppStoreRating() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={10} className="text-accent fill-accent" />
        ))}
      </div>
      <span className="font-body text-xs font-semibold text-white/70">4.9 App Store</span>
    </div>
  );
}

export function ComparisonPage({ data }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const headlineLines = data.heroHeadline.split('\n');

  return (
    <>
      <SEO
        title={data.metaTitle}
        description={data.metaDescription}
        keywords={`SMASH vs ${data.competitor}, ${data.competitor} alternative, tradie invoicing, voice invoicing Australia`}
        ogTitle={data.metaTitle}
        ogDescription={data.metaDescription}
        canonical={`https://smashinvoices.com/${data.slug}`}
      />

      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-brand pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">
              SMASH vs {data.competitorShort}
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
              {headlineLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headlineLines.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/65 font-medium leading-[1.5] max-w-2xl mb-8">
              {data.heroSub}
            </p>

            {/* Hero CTA + trust signals */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-105 transition-all shadow-lg shadow-accent/20"
              >
                Try SMASH Free
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
              <div className="flex items-center gap-3">
                <AppStoreRating />
                <span className="font-body text-xs text-white/35 font-medium">No card needed</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── VERDICT BAR ──────────────────────────────────────────── */}
      <section className="bg-accent py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="shrink-0">
                <Zap size={28} className="text-brand" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand uppercase tracking-tighter leading-[0.92] mb-1">
                  {data.verdict}
                </p>
                <p className="font-body text-brand/70 font-medium text-base leading-[1.5]">
                  {data.verdictSub}
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── QUICK FILTER — "Is SMASH right for you?" ─────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3 text-center">
              Find your fit
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 text-center">
              Which is right for you?
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Choose them */}
            <AnimateIn direction="left">
              <div className="rounded-[24px] bg-white border border-brand/10 p-7">
                <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-5">
                  Choose {data.competitorShort} if…
                </p>
                <ul className="space-y-3">
                  {data.quickFilter.chooseThem.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand/8 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} className="text-brand/40" strokeWidth={3} />
                      </div>
                      <span className="font-body text-sm font-medium text-brand/65 leading-[1.5]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            {/* Choose SMASH */}
            <AnimateIn direction="right">
              <div className="rounded-[24px] bg-brand border-2 border-accent/25 p-7">
                <p className="font-black text-xs uppercase tracking-widest text-accent mb-5">
                  Choose SMASH if…
                </p>
                <ul className="space-y-3">
                  {data.quickFilter.chooseUs.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} className="text-accent" strokeWidth={3} />
                      </div>
                      <span className="font-body text-sm font-medium text-white/75 leading-[1.5]">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-[32px] bg-accent text-brand font-black text-xs uppercase tracking-widest hover:brightness-105 transition-all"
                >
                  Try SMASH Free
                  <ArrowRight size={12} strokeWidth={2.5} />
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── HOW SMASH WORKS — 3 PHONES ───────────────────────────── */}
      <section className="bg-brand py-24 md:py-36 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-3 text-center">How SMASH works</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4 text-center">
              Talk. Quote. Paid.<br />Under 60 seconds.
            </h2>
            <p className="font-body text-white/50 font-medium text-base leading-[1.5] mb-20 text-center max-w-xl mx-auto">
              No typing. No templates. No desk required. This is what most tradies are missing.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-8 lg:gap-14 items-end justify-items-center">
            {howItWorksSteps.map((step, i) => (
              <AnimateIn key={i} direction="up" delay={i * 120}>
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-2.5 mb-8">
                    <span className="w-7 h-7 rounded-full bg-accent text-brand font-black text-xs flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="font-black text-sm uppercase tracking-widest text-white">{step.title}</span>
                  </div>
                  <div className={`transition-all duration-300 ${i === 1 ? 'scale-110' : 'scale-100'}`}>
                    <div className="p-2">
                      <PhoneMockup size="small">
                        <step.Screen />
                      </PhoneMockup>
                    </div>
                  </div>
                  <p className="font-body text-sm font-medium text-white/45 leading-[1.6] mt-8 max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────── */}
      <section className="bg-brand py-20 md:py-28 border-t border-white/6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-3">
              Feature comparison
            </h2>
            <p className="font-body text-white/50 font-medium text-base leading-[1.5] mb-12">
              A straight look at what each tool does.
            </p>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 items-center px-6 py-4 bg-white/[0.04] border-b border-white/10">
                <span className="font-body text-xs font-bold text-white/40 uppercase tracking-widest">Feature</span>
                <div className="w-[88px] text-center">
                  <span className="font-black text-xs uppercase tracking-widest text-accent">SMASH</span>
                </div>
                <div className="w-[88px] text-center">
                  <span className="font-black text-xs uppercase tracking-widest text-white/40">{data.competitorShort}</span>
                </div>
              </div>

              {/* Rows */}
              <div className="px-6">
                {data.features.map((f, i) => (
                  <FeatureRow key={i} label={f.label} smash={f.smash} them={f.them} />
                ))}
              </div>

              {/* Price footer */}
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 items-center px-6 py-4 bg-white/[0.04] border-t border-white/10">
                <span className="font-body text-xs font-bold text-white/40 uppercase tracking-widest">Pricing</span>
                <div className="w-[88px] text-center">
                  <span className="font-black text-xs uppercase tracking-widest text-accent">{data.smashPrice}</span>
                </div>
                <div className="w-[88px] text-center">
                  <span className="font-body text-xs font-medium text-white/40">{data.themPrice}</span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3 text-center">
              From tradies who switched
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 text-center">
              What tradies say
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.testimonials.map((t, i) => (
              <AnimateIn key={i} direction="up" delay={i * 80}>
                <div className="flex flex-col h-full rounded-[20px] bg-white border border-brand/8 p-6 shadow-sm">
                  <Quote size={20} className="text-accent mb-4 shrink-0" strokeWidth={2} />
                  <p className="font-body text-sm font-medium text-brand/75 leading-[1.65] flex-1 mb-5">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-brand/8 pt-4">
                    <p className="font-black text-xs uppercase tracking-wider text-brand">{t.name}</p>
                    <p className="font-body text-xs font-medium text-brand/45 mt-0.5">{t.trade}</p>
                    {t.switchedFrom && (
                      <p className="font-body text-xs text-brand/30 mt-1">
                        Previously: {t.switchedFrom}
                      </p>
                    )}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* App Store badge strip */}
          <AnimateIn direction="up" delay={150}>
            <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-accent fill-accent" />
                  ))}
                </div>
                <span className="font-black text-xs uppercase tracking-widest text-brand/60">4.9 on App Store</span>
              </div>
              <span className="text-brand/20 font-body text-sm">·</span>
              <span className="font-body text-xs font-medium text-brand/40">Free plan — no card needed</span>
              <span className="text-brand/20 font-body text-sm">·</span>
              <span className="font-body text-xs font-medium text-brand/40">Download & invoice in 10 min</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── THEY DO WELL / WE WIN ────────────────────────────────── */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <AnimateIn direction="left">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-white/30 mb-4">
                  Where {data.competitorShort} is strong
                </p>
                <div className="space-y-4">
                  {data.theyDoWell.map((item, i) => (
                    <div key={i} className="rounded-[20px] bg-white/[0.04] border border-white/10 p-5">
                      <p className="font-black text-sm uppercase tracking-tighter text-white/70 leading-[0.95] mb-2">
                        {item.title}
                      </p>
                      <p className="font-body text-sm font-medium text-white/45 leading-[1.5]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-accent mb-4">
                  Where SMASH wins
                </p>
                <div className="space-y-4">
                  {data.weWin.map((item, i) => (
                    <div key={i} className="rounded-[20px] bg-white/[0.04] border-2 border-accent/20 p-5">
                      <div className="flex items-start gap-2 mb-2">
                        <Check size={13} className="text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                        <p className="font-black text-sm uppercase tracking-tighter text-white leading-[0.95]">
                          {item.title}
                        </p>
                      </div>
                      <p className="font-body text-sm font-medium text-white/55 leading-[1.5] pl-5">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── EXPORT / INTEGRATION CALLOUT (Xero & QuickBooks only) ── */}
      {data.exportNote && (
        <section className="bg-brand py-16 md:py-20 border-t border-white/6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <AnimateIn direction="up">
              <div className="rounded-[28px] border-2 border-accent/30 bg-accent/5 p-8 md:p-10">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <Upload size={22} className="text-accent" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-widest text-accent mb-3">
                      Export & integration
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter leading-[0.92] mb-4">
                      No double entry. Ever.
                    </h3>
                    <p className="font-body text-base font-medium text-white/70 leading-[1.6]">
                      {data.exportNote}
                    </p>
                    <Link
                      to="/roadmap"
                      className="inline-flex items-center gap-1.5 mt-5 font-black text-xs uppercase tracking-widest text-accent hover:brightness-110 transition-all"
                    >
                      See it on the roadmap <ArrowRight size={13} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── LOSS AVERSION + OUTCOME STATS ────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimateIn direction="left">
              <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-4">The real cost of waiting</p>
              <p className="font-body text-xl font-semibold text-brand/70 leading-[1.6]">
                {data.lossAversion}
              </p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-[32px] bg-brand text-white font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Start invoicing free
                <ArrowRight size={12} strokeWidth={2.5} />
              </a>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="grid grid-cols-3 gap-4">
                {data.outcomeStat.map((s, i) => (
                  <div key={i} className="rounded-[20px] bg-brand p-5 text-center">
                    <p className="font-black text-3xl sm:text-4xl text-accent tracking-tighter leading-none mb-2">
                      {s.stat}
                    </p>
                    <p className="font-body text-xs font-medium text-white/50 leading-[1.4]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── FAQ — OBJECTION BUSTING ───────────────────────────────── */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-3 text-center">
              Common questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-12 text-center">
              Before you decide
            </h2>
          </AnimateIn>

          <div className="space-y-2">
            {data.faq.map((item, i) => (
              <AnimateIn key={i} direction="up" delay={i * 50}>
                <div className="rounded-[16px] bg-white/[0.04] border border-white/8 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
                  >
                    <span className="font-black text-sm text-white uppercase tracking-tight leading-[1.2]">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={16}
                      strokeWidth={2.5}
                      className={`text-white/40 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 border-t border-white/6">
                      <p className="font-body text-sm font-medium text-white/60 leading-[1.65] pt-4">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS EACH FOR ───────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 text-center">
              Who is each built for?
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimateIn direction="left">
              <div className="rounded-[28px] bg-white border border-brand/10 p-8 shadow-sm">
                <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-4">
                  {data.competitorShort} is built for
                </p>
                <p className="font-body text-base font-medium text-brand/65 leading-[1.6]">
                  {data.theyAreFor}
                </p>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="rounded-[28px] bg-brand border-2 border-accent/30 p-8">
                <p className="font-black text-xs uppercase tracking-widest text-accent mb-4">
                  SMASH is built for
                </p>
                <p className="font-body text-base font-medium text-white/80 leading-[1.6]">
                  {data.weAreFor}
                </p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn direction="up" delay={100}>
            <div className="mt-10 text-center">
              <p className="font-body text-brand/40 font-medium text-sm leading-[1.6] italic max-w-xl mx-auto">
                "{data.closingLine}"
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="bg-accent py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">
              Try SMASH free.<br />No card needed.
            </h2>
            <p className="font-body text-brand/70 font-medium text-lg leading-[1.5] mb-8 max-w-xl mx-auto">
              2 free quotes per month. Upgrade when you're ready.
              No setup, no training — just talk and send.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[32px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Download on the App Store
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-[32px] border-2 border-brand/30 text-brand font-black text-sm uppercase tracking-widest hover:bg-brand/10 transition-all"
              >
                See pricing
              </Link>
            </div>

            {/* Trust badges under CTA */}
            <div className="flex items-center justify-center gap-5 flex-wrap">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-brand fill-brand" />
                  ))}
                </div>
                <span className="font-body text-xs font-semibold text-brand/70">4.9 App Store</span>
              </div>
              <span className="text-brand/30 text-sm">·</span>
              <span className="font-body text-xs font-medium text-brand/55">No credit card required</span>
              <span className="text-brand/30 text-sm">·</span>
              <span className="font-body text-xs font-medium text-brand/55">Cancel anytime</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── OTHER COMPARISONS ─────────────────────────────────────── */}
      <section className="bg-brand py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-6 text-center">
              More comparisons
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['xero', 'myob', 'servicem8', 'quickbooks', 'fergus']
                .filter(s => `smash-vs-${s}` !== data.slug)
                .map(s => (
                  <Link
                    key={s}
                    to={`/smash-vs-${s}`}
                    className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all"
                  >
                    SMASH vs {s.charAt(0).toUpperCase() + s.slice(1)}
                  </Link>
                ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
