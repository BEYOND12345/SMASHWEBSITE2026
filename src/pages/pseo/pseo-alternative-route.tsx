import { useParams, Navigate } from 'react-router-dom';
import { PseoLayout, PasBlock } from '../../components/pseo/PseoLayout';
import { softwareBySlug } from '../../data/pseo/software-alternatives';
import { regionalMapping, type PseoCountryCode } from '../../data/pseo/regional-mapping';
import { buildAlternativePageContent } from '../../lib/pseo/content';
import { hreflangForAlternativePage } from '../../lib/pseo/hreflang';
import { pseoAbsoluteUrl, pseoAlternativePath } from '../../lib/pseo/urls';
import { pseoChromeCampaign, pseoChromeStoreUrl } from '../../lib/pseo/chrome-url';

const VALID_COUNTRIES = new Set<string>(['us', 'uk', 'ca', 'au', 'nz']);

export function PseoAlternativeRoute() {
  const { country, software: softwareSlug } = useParams<{ country: string; software: string }>();

  if (!country || !softwareSlug || !VALID_COUNTRIES.has(country) || !softwareBySlug[softwareSlug]) {
    return <Navigate to="/sitemap-directory" replace />;
  }

  const region = regionalMapping[country as PseoCountryCode];
  const software = softwareBySlug[softwareSlug];
  const content = buildAlternativePageContent(software, region);
  const path = pseoAlternativePath(softwareSlug, country as PseoCountryCode);
  const canonical = pseoAbsoluteUrl(path);
  const campaign = pseoChromeCampaign(country, softwareSlug.replace(/-gmail-not-working$/, ''));

  return (
    <PseoLayout
      title={content.title}
      description={content.metaDescription}
      keywords={`${software.name} gmail not working, ${software.name} invoice gmail ${country}, smash invoices ${software.name}`}
      canonical={canonical}
      hreflangs={hreflangForAlternativePage(softwareSlug, country as PseoCountryCode)}
      breadcrumbs={[
        { name: 'Home', url: 'https://smashinvoices.com/' },
        { name: 'Directory', url: 'https://smashinvoices.com/sitemap-directory' },
        { name: region.country_name, url: `https://smashinvoices.com/sitemap-directory/${country}` },
        { name: `${software.name} + Gmail`, url: canonical },
      ]}
      chromeUrl={pseoChromeStoreUrl(campaign)}
      chromeLabel="Fix Gmail sending — Free install"
      headline={content.headline}
      subheadline={content.subheadline}
      currencyCode={region.currency_code}
      faqs={[
        {
          q: `Why do ${software.name} emails fail in Gmail?`,
          a: 'External SMTP relays and OAuth scope changes often break native integrations. SMASH sends from your Gmail session instead.',
        },
      ]}
    >
      <PasBlock title={content.agitation.title} body={content.agitation.body} />
      <PasBlock title={content.solution.title} body={content.solution.body} dark />
      <section className="py-10 bg-white border-t border-brand/10">
        <p className="text-center text-sm text-brand/60 max-w-xl mx-auto px-4">
          Looking for a complete workflow?{' '}
          <a href="/smash-leads" className="text-accent font-semibold">
            Discover our Gmail CRM hub
          </a>{' '}
          or browse the{' '}
          <a href={`/sitemap-directory/${country}/for`} className="text-accent font-semibold">
            {region.country_name} persona pages
          </a>
          .
        </p>
      </section>
    </PseoLayout>
  );
}
