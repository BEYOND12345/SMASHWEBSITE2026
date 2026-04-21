import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { StructuredData, createBreadcrumbSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { hreflangAlternates } from '../data/country-data';

interface Section {
  heading: string;
  intro?: string;
  links: { to: string; label: string; note?: string }[];
}

const sections: Section[] = [
  {
    heading: 'Core',
    links: [
      { to: '/',               label: 'Home',          note: 'Voice-to-invoice for tradies and service workers' },
      { to: '/how-it-works',   label: 'How it works',  note: 'The voice-to-invoice flow in three steps' },
      { to: '/features',       label: 'All features',  note: 'Every capability in the SMASH app' },
      { to: '/pricing',        label: 'Pricing',       note: 'AU / NZ / UK / US / CA — indicative launch pricing' },
      { to: '/faq',            label: 'FAQ' },
      { to: '/founder',        label: 'Meet the founder' },
      { to: '/roadmap',        label: 'Roadmap' },
      { to: '/changelog',      label: 'Changelog' },
      { to: '/contact',        label: 'Contact' },
    ],
  },
  {
    heading: 'Product & category',
    intro: 'Category-defining pages for voice invoicing and AI invoicing.',
    links: [
      { to: '/voice-invoicing',           label: 'Voice invoicing',  note: 'Category overview and AI-answer page' },
      { to: '/ai-invoicing',              label: 'AI invoicing',     note: 'How the AI turns speech into line items' },
      { to: '/gst-compliant-invoicing',   label: 'GST-compliant invoicing', note: 'ATO-ready tax invoices, coming soon for VAT / HST / sales tax' },
      { to: '/invoice-on-mobile',         label: 'Invoice on mobile', note: 'Mobile-first invoicing on site' },
    ],
  },
  {
    heading: 'Guides',
    intro: 'Content pillars answering the questions tradies ask AI search engines.',
    links: [
      { to: '/tradie-hourly-rates', label: 'Tradie hourly rates',  note: 'What to charge per hour in AU, NZ, UK, US and Canada' },
      { to: '/materials-pricing',   label: 'Materials pricing',    note: 'Landed cost, fair markup, personal catalog' },
      { to: '/customer-approval',   label: 'Customer approval',    note: 'One-tap approval, read receipts, legally binding' },
    ],
  },
  {
    heading: 'Free tools',
    intro: 'SMASH App Tools — free calculators and generators, no signup required.',
    links: [
      { to: '/tools',                     label: 'Tools hub' },
      { to: '/invoice-generator',         label: 'Invoice generator' },
      { to: '/quote-generator',           label: 'Quote generator' },
      { to: '/invoice-template',          label: 'Invoice templates' },
      { to: '/gst-calculator',            label: 'GST calculator' },
      { to: '/hourly-rate-calculator',    label: 'Hourly rate calculator' },
      { to: '/late-payment-calculator',   label: 'Late payment calculator' },
      { to: '/profit-calculator',         label: 'Profit / loss calculator' },
    ],
  },
  {
    heading: 'Comparisons',
    intro: 'Where SMASH sits next to the apps tradies already know.',
    links: [
      { to: '/smash-vs-xero',         label: 'SMASH vs Xero' },
      { to: '/smash-vs-myob',         label: 'SMASH vs MYOB' },
      { to: '/smash-vs-servicem8',    label: 'SMASH vs ServiceM8' },
      { to: '/smash-vs-quickbooks',   label: 'SMASH vs QuickBooks' },
      { to: '/smash-vs-fergus',       label: 'SMASH vs Fergus' },
      { to: '/smash-vs-tradify',      label: 'SMASH vs Tradify' },
      { to: '/smash-vs-invoice2go',   label: 'SMASH vs Invoice2go' },
      { to: '/smash-vs-joist',        label: 'SMASH vs Joist' },
      { to: '/smash-vs-rounded',      label: 'SMASH vs Rounded' },
    ],
  },
  {
    heading: 'Integrations',
    intro: 'Accounting + automation plugs for SMASH.',
    links: [
      { to: '/integrations',               label: 'Integrations hub' },
      { to: '/integrations/xero',          label: 'SMASH × Xero',               note: 'Coming soon' },
      { to: '/integrations/quickbooks',    label: 'SMASH × QuickBooks Online',  note: 'Coming soon' },
    ],
  },
  {
    heading: 'For specific trades',
    intro: 'Landing pages built for each trade SMASH is designed for.',
    links: [
      { to: '/for-cleaners',          label: 'For cleaners' },
      { to: '/for-plumbers',          label: 'For plumbers' },
      { to: '/for-electricians',      label: 'For electricians' },
      { to: '/for-handymen',          label: 'For handymen' },
      { to: '/for-painters',          label: 'For painters' },
      { to: '/for-gardeners',         label: 'For gardeners' },
      { to: '/for-mobile-mechanics',  label: 'For mobile mechanics' },
      { to: '/for-hvac',              label: 'For HVAC / air con' },
      { to: '/for-pest-control',      label: 'For pest control' },
      { to: '/for-concreters',        label: 'For concreters' },
      { to: '/for-tilers',            label: 'For tilers' },
      { to: '/for-locksmiths',        label: 'For locksmiths' },
      { to: '/for-car-detailers',     label: 'For car detailers' },
      { to: '/for-dog-groomers',      label: 'For dog groomers' },
      { to: '/for-arborists',         label: 'For arborists' },
      { to: '/for-pool-maintenance',  label: 'For pool maintenance' },
      { to: '/for-solar-installers',  label: 'For solar installers' },
      { to: '/for-rubbish-removal',   label: 'For rubbish removal' },
      { to: '/for-it-repair',         label: 'For IT repair' },
      { to: '/for-appliance-repair',  label: 'For appliance repair' },
      { to: '/for-security-installers', label: 'For security installers' },
      { to: '/for-fencers',           label: 'For fencers' },
    ],
  },
  {
    heading: 'Countries',
    intro: 'Where SMASH is live and where waitlists are open.',
    links: [
      { to: '/',    label: 'Australia',       note: 'Live · AUD · GST' },
      { to: '/nz',  label: 'New Zealand',     note: 'Waitlist · NZD · GST' },
      { to: '/uk',  label: 'United Kingdom',  note: 'Waitlist · GBP · VAT' },
      { to: '/us',  label: 'United States',   note: 'Waitlist · USD · Sales tax' },
      { to: '/ca',  label: 'Canada',          note: 'Waitlist · CAD · GST / HST / PST' },
    ],
  },
  {
    heading: 'Content',
    links: [
      { to: '/blog', label: 'Blog index', note: 'All articles on voice invoicing, pricing, and running a trade business' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { to: '/privacy', label: 'Privacy policy' },
      { to: '/terms',   label: 'Terms of service' },
    ],
  },
];

const url = 'https://smashinvoices.com/sitemap';

export function SitemapPage() {
  return (
    <>
      <SEO
        title="Sitemap | SMASH Invoices"
        description="Every SMASH Invoices page in one place — product, comparisons, free tools, trade-specific landing pages, integrations, international waitlists and legal."
        canonical={url}
        ogTitle="Sitemap | SMASH Invoices"
        ogDescription="Every SMASH Invoices page in one place."
        ogUrl={url}
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home',    url: 'https://smashinvoices.com/' },
        { name: 'Sitemap', url },
      ])} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      <section className="bg-brand py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-4">Sitemap</p>
            <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              Every SMASH page, in one place.
            </h1>
            <p className="font-body text-lg text-white/60 max-w-2xl leading-relaxed">
              Readable sitemap for humans and AI crawlers. If you are after the XML version,{' '}
              <a
                href="/sitemap.xml"
                className="underline decoration-accent/60 hover:text-white"
              >
                here you go
              </a>
              .
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {sections.map(section => (
              <AnimateIn key={section.heading} direction="up">
                <div>
                  <h2 className="font-display text-2xl uppercase tracking-tight text-brand mb-2">
                    {section.heading}
                  </h2>
                  {section.intro && (
                    <p className="font-body text-sm text-slate-500 leading-relaxed mb-5">
                      {section.intro}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {section.links.map(l => (
                      <li key={l.to + l.label}>
                        <Link
                          to={l.to}
                          className="group block py-1.5 border-b border-transparent hover:border-accent transition-colors"
                        >
                          <span className="font-body text-base text-brand group-hover:text-accent transition-colors">
                            {l.label}
                          </span>
                          {l.note && (
                            <span className="font-body text-xs text-slate-400 ml-2">
                              — {l.note}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
