import { Link } from 'react-router-dom';
import { useState, type ReactNode } from 'react';
import {
  Chrome,
  Mail,
  Mic,
  Send,
  ChevronDown,
  Star,
  Lock,
  Quote,
  Zap,
  RotateCcw,
  FileText,
  ArrowRight,
} from 'lucide-react';
import { SEO } from '../seo';
import { Nav } from '../nav';
import { Footer } from '../footer';
import { AnimateIn } from '../animate-in';
import {
  StructuredData,
  createBreadcrumbSchema,
  createFAQSchema,
  createVideoSchema,
  createArticleSchema,
} from '../structured-data';
import { SchemaMarkup } from '../SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../../data/schema-data';
import { hreflangAlternates } from '../../data/country-data';
import type { GmailLandingConfig, GmailLandingStory } from '../../data/gmail-landing-pages';
import { gmailLandingCanonical } from '../../data/gmail-landing-pages';
import { HeroVideo, HeroMockup, PricingDNAMockup, QuoteMockup } from '../gmail-sidebar-mockups';

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';
const OG_IMAGE = 'https://smashinvoices.com/hero_image.png';

const tiers = [
  { name: 'Free', price: '0', volume: '5 invoices a month', pitch: 'Feel SMASH on real jobs.', highlight: false },
  { name: 'Starter', price: '15', volume: 'Unlimited invoices', pitch: 'Accounting sync and CSV export included.', highlight: true, badge: 'Best Value' },
  { name: 'Pro', price: '25', volume: 'Unlimited invoices', pitch: 'For service pros invoicing every week.', highlight: false },
  { name: 'Unlimited', price: '35', volume: 'Unlimited invoices', pitch: 'For busy operators and crews.', highlight: false },
];

const CAPABILITY_ICONS = [Mic, Mail, Zap, RotateCcw, FileText, Send, Lock, Chrome] as const;

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button type="button" onClick={onClick} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="text-base font-black text-brand uppercase tracking-tighter leading-[0.88]">{q}</span>
        <ChevronDown size={18} className={`shrink-0 text-brand/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="font-body text-sm text-brand/70 font-medium leading-[1.5] pb-5">{a}</p>}
    </div>
  );
}

function StoryContent({ story, dark }: { story: GmailLandingStory; dark: boolean }) {
  return (
    <>
      <p className="font-display font-black text-accent text-[11px] uppercase tracking-[0.2em] mb-4">{story.eyebrow}</p>
      <h2
        className={`text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.88] mb-6 whitespace-pre-line ${dark ? 'text-white' : 'text-brand'}`}
      >
        {story.title}
      </h2>
      <p className={`font-body text-lg font-medium leading-[1.6] mb-8 max-w-lg ${dark ? 'text-white/70' : 'text-brand/65'}`}>{story.body}</p>
      <div className="space-y-3">
        {story.bullets.map(([title, body]) => (
          <div key={title} className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            <p className={`font-body text-sm font-medium leading-[1.5] ${dark ? 'text-white/65' : 'text-brand/65'}`}>
              <strong className={dark ? 'text-white' : 'text-brand'}>{title}:</strong> {body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function StorySection({ story, mockup, imageFirst }: { story: GmailLandingStory; mockup: ReactNode; imageFirst: boolean }) {
  const dark = story.dark ?? false;
  return (
    <section className={`${dark ? 'bg-brand' : 'bg-white'} py-16 md:py-28 overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateIn direction="left" className={imageFirst ? 'order-2 lg:order-1' : ''}>
            {imageFirst ? mockup : <StoryContent story={story} dark={dark} />}
          </AnimateIn>
          <AnimateIn direction="right" className={imageFirst ? 'order-1 lg:order-2' : ''}>
            {imageFirst ? <StoryContent story={story} dark={dark} /> : mockup}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export function GmailLandingPage({ config }: { config: GmailLandingConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const canonical = gmailLandingCanonical(config.slug);

  const chromeAppSchema = {
    ...softwareApplicationSchema,
    name: 'SMASH Invoices for Gmail',
    operatingSystem: 'Chrome',
    applicationCategory: 'BusinessApplication',
    downloadUrl: CHROME_STORE_URL,
    description: config.seo.description,
    screenshot: OG_IMAGE,
  };

  return (
    <>
      <SEO
        title={config.seo.title}
        description={config.seo.description}
        keywords={config.seo.keywords}
        ogTitle={config.seo.ogTitle}
        ogDescription={config.seo.ogDescription}
        ogUrl={canonical}
        ogImage={OG_IMAGE}
        ogType="website"
        twitterTitle={config.seo.ogTitle}
        twitterDescription={config.seo.ogDescription}
        twitterImage={OG_IMAGE}
        canonical={canonical}
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema(config.breadcrumbs)} />
      <StructuredData data={createFAQSchema(config.faqs.map((f) => ({ question: f.q, answer: f.a })))} />
      <StructuredData
        data={createVideoSchema({
          name: config.youtubeTitle,
          description: config.youtubeDescription,
          thumbnailUrl: `https://i.ytimg.com/vi/${config.youtubeVideoId}/maxresdefault.jpg`,
          embedUrl: `https://www.youtube.com/embed/${config.youtubeVideoId}`,
          uploadDate: config.youtubeUploadDate,
        })}
      />
      <StructuredData
        data={createArticleSchema({
          headline: config.seo.ogTitle,
          description: config.seo.description,
          datePublished: config.youtubeUploadDate,
          author: 'Dan Neale',
          image: OG_IMAGE,
          url: canonical,
          keywords: config.seo.keywords,
        })}
      />
      <SchemaMarkup schemas={[aiOrgSchema, chromeAppSchema]} />

      <Nav ctaUrl={CHROME_STORE_URL} ctaLabel="Add to Chrome" />

      {/* HERO */}
      <section className="bg-brand pt-16 pb-0 md:pt-24 overflow-hidden relative">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateIn direction="left" className="lg:col-span-5">
              <div className="pb-16 md:pb-24">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-4">
                  <Mail size={13} className="text-accent" strokeWidth={2.5} />
                  <span className="text-accent font-black text-[11px] uppercase tracking-[0.2em]">{config.hero.eyebrow}</span>
                </div>
                <p className="font-body font-black text-xl sm:text-2xl uppercase tracking-[0.12em] text-white/60 mb-3 leading-tight">
                  {config.hero.preHeadline}
                </p>
                <h1 className="font-sans font-black uppercase tracking-tighter leading-[0.88] text-[52px] sm:text-[64px] md:text-[80px] mb-8">
                  <span className="block text-white">{config.hero.h1White}</span>
                  <span className="block text-accent">{config.hero.h1Accent}</span>
                </h1>
                <p className="font-body text-base sm:text-lg text-white/70 font-medium leading-[1.55] mb-8 max-w-lg">{config.hero.subcopy}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={CHROME_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all animate-pulse-glow whitespace-nowrap"
                  >
                    <Chrome size={17} strokeWidth={2.5} />
                    Add to Chrome
                  </a>
                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-brand transition-all"
                  >
                    See how it works
                  </Link>
                </div>
                <p className="font-body text-sm text-white/40 italic mt-3 mb-8">Quicker than a sparrow&apos;s fart.</p>
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                  <span className="font-body font-black text-xs sm:text-sm uppercase tracking-[0.2em] text-white/30">Works with</span>
                  <img src="/brand-logos.png" alt="Works with Xero, QuickBooks and Gmail" className="h-14 sm:h-16 w-auto" />
                </div>
              </div>
            </AnimateIn>
            <AnimateIn direction="right" className="lg:col-span-7 lg:scale-110 lg:translate-x-8">
              <div className="md:pb-24 rounded-[16px] overflow-hidden shadow-[0_0_80px_rgba(200,255,0,0.15)] border border-white/10">
                <HeroVideo />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* INTEGRATION STRAP */}
      <section className="bg-brand border-t border-white/10 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="font-display font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wide text-white mb-2">
            {config.integrationStrap}
          </p>
          {config.integrationStrapSub && (
            <p className="font-body text-sm sm:text-base text-white/50 font-medium">
              {config.integrationStrapSub.includes('dan@') ? (
                <>
                  {config.integrationStrapSub.split('dan@smashinvoices.com.au')[0]}
                  <a href="mailto:dan@smashinvoices.com.au" className="text-accent hover:underline">
                    dan@smashinvoices.com.au
                  </a>
                  {config.integrationStrapSub.split('dan@smashinvoices.com.au')[1]}
                </>
              ) : (
                config.integrationStrapSub
              )}
            </p>
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0D1117] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-white/30 mb-8 text-center">Trusted by tradies</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {config.testimonials.map(({ quote, name, trade, city }) => (
                <div key={name} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-white/75 font-medium leading-[1.55] italic flex-1">&ldquo;{quote}&rdquo;</p>
                  <p className="font-display text-xs uppercase tracking-wider text-white/40">
                    {name} · {trade} · {city}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-[#0D1117] py-20 md:py-28 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-accent text-center mb-3">60 second demo</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-10 text-center">
              See it in action.
            </h2>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/10 aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${config.youtubeVideoId}`}
                title={config.youtubeTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ANSWER STRIP */}
      <section className="bg-accent py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-xs font-black uppercase tracking-widest text-brand/50 mb-3">{config.answerStrip.question}</p>
          <p className="text-lg md:text-xl font-bold text-brand leading-[1.3]">{config.answerStrip.answer}</p>
        </div>
      </section>

      {/* STORIES */}
      <StorySection story={config.stories[0]} mockup={<HeroMockup />} imageFirst={false} />
      <StorySection story={config.stories[1]} mockup={<PricingDNAMockup />} imageFirst />
      <StorySection story={config.stories[2]} mockup={<QuoteMockup />} imageFirst={false} />

      {/* COMPARISON TABLE — featured snippet targeting */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-brand/40 mb-3 text-center">Compare workflows</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4 text-center">
              {config.comparison.title}
            </h2>
            <p className="font-body text-base text-brand/60 font-medium text-center max-w-2xl mx-auto mb-10">{config.comparison.subtitle}</p>
            <div className="overflow-x-auto rounded-2xl border-2 border-border bg-white">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-brand text-white">
                    {config.comparison.headers.map((h) => (
                      <th key={h} className="px-4 py-4 font-black uppercase tracking-wide text-xs sm:text-sm">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {config.comparison.rows.map((row) => (
                    <tr key={row[0]} className="border-t border-border even:bg-surface/80">
                      {row.map((cell, i) => (
                        <td
                          key={cell}
                          className={`px-4 py-4 font-medium ${i === 2 ? 'text-brand font-bold' : 'text-brand/70'}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3 text-center">{config.capabilityEyebrow}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-12 text-center max-w-3xl mx-auto whitespace-pre-line">
              {config.capabilityTitle}
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {config.capabilities.map(({ title, body }, i) => {
              const Icon = CAPABILITY_ICONS[i % CAPABILITY_ICONS.length];
              return (
                <AnimateIn key={title} direction="up" delay={i * 50}>
                  <div className="bg-white/5 border-2 border-white/10 rounded-3xl p-6 h-full hover:border-accent/40 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                      <Icon size={16} className="text-accent" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-base font-black text-white uppercase tracking-tighter leading-[0.95] mb-2">{title}</h3>
                    <p className="font-body text-white/55 font-medium text-sm leading-[1.55]">{body}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand/40 mb-3">From the founder</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-8">
              This hand
              <br />
              does not type.
            </h2>
            <div className="space-y-5 font-body text-base sm:text-lg text-brand/75 font-medium leading-[1.6]">
              <p>
                I&apos;m Dan. I built SMASH because I know the Admin Wall — getting home, opening your inbox, seeing quote requests, and watching your brain go blank.
              </p>
              <p>You know you need line items, totals, a PDF, and a reply. So you put it off. The quote never gets sent. You lose the job.</p>
              <p className="text-brand font-bold">SMASH lives in your Gmail and does the data entry for you. So you can get your time back.</p>
            </div>
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-brand text-white font-black flex items-center justify-center text-lg">D</div>
              <div>
                <p className="font-display text-base text-brand uppercase tracking-tight">Dan Neale</p>
                <p className="font-body text-xs text-brand/50 font-medium">Founder · SMASH Invoices</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="bg-white py-16 md:py-20 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimateIn direction="up">
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter mb-6">Related product pages</h2>
              <ul className="space-y-3">
                {config.relatedPages.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="group flex items-center gap-2 font-bold text-brand hover:text-accent transition-colors">
                      <ArrowRight size={16} className="text-accent shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn direction="up" delay={80}>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter mb-6">Guides from the blog</h2>
              <ul className="space-y-3">
                {config.relatedBlog.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="group flex items-center gap-2 font-semibold text-brand/80 hover:text-brand transition-colors">
                      <ArrowRight size={16} className="text-accent/80 shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand/40 mb-3 text-center">Pricing</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-5 text-center max-w-2xl mx-auto">
              Five free.
              <br />
              Unlimited from $15.
            </h2>
            <p className="font-body text-brand/60 font-medium text-base sm:text-lg text-center max-w-2xl mx-auto leading-[1.5] mb-12">
              Free gives you 5 invoices to feel the product. Starter unlocks unlimited invoices, Xero/QuickBooks sync and CSV export.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((t, i) => (
              <AnimateIn key={t.name} direction="up" delay={i * 60}>
                <div className={`relative rounded-3xl p-7 h-full flex flex-col border-2 ${t.highlight ? 'bg-brand text-white border-brand' : 'bg-white border-border'}`}>
                  {t.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-brand font-black text-[10px] uppercase tracking-widest">
                      {t.badge}
                    </span>
                  )}
                  <p className={`font-display text-xs uppercase tracking-[0.2em] mb-3 ${t.highlight ? 'text-white/50' : 'text-brand/40'}`}>{t.name}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-base font-bold ${t.highlight ? 'text-white/50' : 'text-brand/50'}`}>$</span>
                    <span className={`text-5xl font-black tabular-nums leading-none ${t.highlight ? 'text-white' : 'text-brand'}`}>{t.price}</span>
                    {t.price !== '0' && <span className={`text-sm font-bold ${t.highlight ? 'text-white/50' : 'text-brand/50'}`}>/mo</span>}
                  </div>
                  <p className={`font-display text-sm uppercase tracking-tight mb-2 ${t.highlight ? 'text-white' : 'text-brand'}`}>{t.volume}</p>
                  <p className={`font-body text-sm font-medium leading-[1.5] mb-6 flex-1 ${t.highlight ? 'text-white/65' : 'text-brand/55'}`}>{t.pitch}</p>
                  <a
                    href={CHROME_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-5 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all ${t.highlight ? 'bg-accent text-brand hover:brightness-95' : 'bg-brand text-white hover:bg-brand/90'}`}
                  >
                    Start Free
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>
          <p className="text-center font-body text-xs text-brand/30 font-medium mt-8">All prices in AUD. Same plan worldwide. Cancel anytime.</p>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL */}
      <section className="bg-surface py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_#C8FF00_1px,_transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-accent fill-accent" />
            ))}
          </div>
          <Quote size={28} className="text-brand/30 mx-auto mb-4" />
          <blockquote>
            <p className="font-display text-2xl md:text-3xl uppercase tracking-tighter leading-[0.95] text-brand mb-6">
              &ldquo;{config.featuredTestimonial.quote}&rdquo;
            </p>
            <p className="font-body text-brand/50 text-sm">{config.featuredTestimonial.attribution}</p>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 md:mb-14 text-center">
              Frequently asked
              <br />
              questions
            </h2>
            <div className="bg-surface rounded-3xl border-2 border-border px-4 sm:px-8 py-2 sm:py-4">
              {config.faqs.map((faq, i) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter leading-[0.88] whitespace-pre-line">
              {config.finalCta.headline}
            </h2>
            <p className="font-body text-lg text-white/65 font-medium leading-[1.5] mb-8 max-w-xl mx-auto">{config.finalCta.subcopy}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-base uppercase tracking-widest hover:brightness-95 transition-all animate-pulse-glow whitespace-nowrap"
              >
                <Chrome size={18} strokeWidth={2.5} />
                Add to Chrome
              </a>
              <Link
                to="/voice-invoicing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-base uppercase tracking-wide hover:bg-white hover:text-brand transition-all"
              >
                See how voice works
              </Link>
            </div>
            <p className="text-sm text-white/35 font-medium">No credit card needed. Cancel anytime.</p>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
