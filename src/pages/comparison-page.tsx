import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { Check, X, ArrowRight, Zap, Upload } from 'lucide-react';
import type { ComparisonData } from '../data/comparison-data';
import { Nav } from '../components/nav';
import { PhoneMockup, AppScreen } from '../components/phone-mockup';

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
    num: '01',
    screen: 'voice' as const,
    title: 'Tap record',
    desc: 'Open the app and tap record. Five seconds. No form, no template, no navigation.',
  },
  {
    num: '02',
    screen: 'quote' as const,
    title: 'Describe the job',
    desc: 'Talk for 30 seconds — labour, materials, call-out fee. SMASH builds the quote automatically.',
  },
  {
    num: '03',
    screen: 'portal' as const,
    title: 'Client approves & pays',
    desc: 'Your client gets a link. They approve with one tap and pay by card. Done before you leave.',
  },
];

export function ComparisonPage({ data }: Props) {
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

      {/* HERO */}
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
            <p className="font-body text-lg sm:text-xl text-white/65 font-medium leading-[1.5] max-w-2xl">
              {data.heroSub}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* VERDICT BAR */}
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

      {/* HOW SMASH WORKS — 3 PHONES */}
      <section className="bg-surface py-20 md:py-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3 text-center">How SMASH works</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4 text-center">
              Talk. Quote. Paid.<br />Under 60 seconds.
            </h2>
            <p className="font-body text-brand/55 font-medium text-base leading-[1.5] mb-14 text-center max-w-xl mx-auto">
              No typing. No templates. No desk required. This is what most tradies are missing.
            </p>
          </AnimateIn>

          {/* 3 phones */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 items-end justify-items-center">
            {howItWorksSteps.map((step, i) => (
              <AnimateIn key={i} direction="up" delay={i * 100}>
                <div className="flex flex-col items-center text-center">
                  {/* Step label above */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-6 h-6 rounded-full bg-brand text-accent font-black text-xs flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="font-black text-xs uppercase tracking-widest text-brand">{step.title}</span>
                  </div>

                  {/* Phone */}
                  <div className={`transition-all ${i === 1 ? 'scale-105' : 'scale-95 opacity-90'}`}>
                    <PhoneMockup size="small">
                      <AppScreen type={step.screen} />
                    </PhoneMockup>
                  </div>

                  {/* Description below */}
                  <p className="font-body text-xs font-medium text-brand/55 leading-[1.5] mt-5 max-w-[180px]">
                    {step.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* CTA under phones */}
          <AnimateIn direction="up" delay={200}>
            <div className="text-center mt-12">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[32px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Try it free — 2 quotes per month, no card
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-3">
              Feature comparison
            </h2>
            <p className="font-body text-white/50 font-medium text-base leading-[1.5] mb-12">
              A straight look at what each tool does.
            </p>

            {/* Table */}
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

      {/* TWO-COL: THEY DO WELL / WE WIN */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* They do well */}
            <AnimateIn direction="left">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-brand/40 mb-4">
                  Where {data.competitorShort} is strong
                </p>
                <div className="space-y-4">
                  {data.theyDoWell.map((item, i) => (
                    <div key={i} className="rounded-[20px] bg-brand/5 border border-brand/10 p-5">
                      <p className="font-black text-sm uppercase tracking-tighter text-brand leading-[0.95] mb-2">
                        {item.title}
                      </p>
                      <p className="font-body text-sm font-medium text-brand/60 leading-[1.5]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* We win */}
            <AnimateIn direction="right">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-accent mb-4">
                  Where SMASH wins
                </p>
                <div className="space-y-4">
                  {data.weWin.map((item, i) => (
                    <div key={i} className="rounded-[20px] bg-brand border-2 border-accent/20 p-5">
                      <div className="flex items-start gap-2 mb-2">
                        <Check size={13} className="text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                        <p className="font-black text-sm uppercase tracking-tighter text-white leading-[0.95]">
                          {item.title}
                        </p>
                      </div>
                      <p className="font-body text-sm font-medium text-white/60 leading-[1.5] pl-5">
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

      {/* EXPORT / INTEGRATION CALLOUT — only shown when data.exportNote is set */}
      {data.exportNote && (
        <section className="bg-brand py-16 md:py-20">
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

      {/* WHO IS EACH FOR */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-12 text-center">
              Who is each built for?
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* They */}
            <AnimateIn direction="left">
              <div className="rounded-[28px] bg-white/[0.04] border border-white/10 p-8">
                <p className="font-black text-xs uppercase tracking-widest text-white/40 mb-4">
                  {data.competitorShort} is built for
                </p>
                <p className="font-body text-base font-medium text-white/60 leading-[1.6]">
                  {data.theyAreFor}
                </p>
              </div>
            </AnimateIn>

            {/* Us */}
            <AnimateIn direction="right">
              <div className="rounded-[28px] bg-accent/10 border-2 border-accent/30 p-8">
                <p className="font-black text-xs uppercase tracking-widest text-accent mb-4">
                  SMASH is built for
                </p>
                <p className="font-body text-base font-medium text-white/80 leading-[1.6]">
                  {data.weAreFor}
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Closing line */}
          <AnimateIn direction="up" delay={100}>
            <div className="mt-10 text-center">
              <p className="font-body text-white/40 font-medium text-sm leading-[1.6] italic max-w-xl mx-auto">
                "{data.closingLine}"
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
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
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
          </AnimateIn>
        </div>
      </section>

      {/* OTHER COMPARISONS */}
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
