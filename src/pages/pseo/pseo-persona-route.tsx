import { useParams, Navigate } from 'react-router-dom';
import { PseoLayout, PasBlock } from '../../components/pseo/PseoLayout';
import { PseoInvoiceMockForm } from '../../components/pseo/PseoInvoiceMockForm';
import { nicheBySlug } from '../../data/pseo/niches';
import { regionalMapping, type PseoCountryCode } from '../../data/pseo/regional-mapping';
import { buildPersonaPageContent } from '../../lib/pseo/content';
import { hreflangForPersonaPage } from '../../lib/pseo/hreflang';
import { pseoAbsoluteUrl, pseoPersonaPath } from '../../lib/pseo/urls';
import { pseoChromeCampaign, pseoChromeStoreUrl } from '../../lib/pseo/chrome-url';

const VALID_COUNTRIES = new Set<string>(['us', 'uk', 'ca', 'au', 'nz']);

export function PseoPersonaRoute() {
  const { country, niche: nicheSlug } = useParams<{ country?: string; niche: string }>();

  if (!nicheSlug || !nicheBySlug[nicheSlug]) {
    return <Navigate to="/sitemap-directory" replace />;
  }

  const isXDefault = !country;
  if (country && !VALID_COUNTRIES.has(country)) {
    return <Navigate to="/sitemap-directory" replace />;
  }

  const regionCountry: PseoCountryCode = isXDefault ? 'au' : (country as PseoCountryCode);
  const region = regionalMapping[regionCountry];
  const niche = nicheBySlug[nicheSlug];
  const content = buildPersonaPageContent(niche, region);
  const path = pseoPersonaPath(nicheSlug, isXDefault ? 'x-default' : (country as PseoCountryCode));
  const canonical = pseoAbsoluteUrl(path);
  const campaign = pseoChromeCampaign(isXDefault ? 'default' : country!, nicheSlug);

  const faqs = [
    {
      q: `How do ${niche.labelPlural.toLowerCase()} send invoices in the ${region.country_name}?`,
      a: `Use SMASH to build ${region.tax_name}-ready invoices in ${region.currency_code}, then send from Gmail without retyping line items.`,
    },
    {
      q: `Does SMASH handle ${region.tax_name}?`,
      a: `Yes. Line items show ${region.tax_name} separately on every PDF for ${region.country_name} compliance.`,
    },
  ];

  return (
    <PseoLayout
      title={content.title}
      description={content.metaDescription}
      keywords={`${niche.label.toLowerCase()} invoice generator, gmail invoice ${niche.slug}, ${region.tax_name} invoice ${region.country_name}`}
      canonical={canonical}
      hreflangs={hreflangForPersonaPage(nicheSlug, regionCountry)}
      breadcrumbs={[
        { name: 'Home', url: 'https://smashinvoices.com/' },
        { name: 'Directory', url: 'https://smashinvoices.com/sitemap-directory' },
        ...(country ? [{ name: region.country_name, url: `https://smashinvoices.com/sitemap-directory/${country}` }] : []),
        { name: niche.labelPlural, url: canonical },
      ]}
      chromeUrl={pseoChromeStoreUrl(campaign)}
      headline={content.headline}
      subheadline={content.subheadline}
      faqs={faqs}
      currencyCode={region.currency_code}
    >
      <PasBlock title={content.agitation.title} body={content.agitation.body} />
      <section className="py-14 bg-[#0D1117]">
        <div className="max-w-3xl mx-auto px-4 text-center mb-8">
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Try the invoice builder</h2>
          <p className="text-white/60 text-sm">Pre-filled for {niche.labelPlural.toLowerCase()} — adjust qty and rate live.</p>
        </div>
        <PseoInvoiceMockForm region={region} lineItem={niche.defaultLineItem} chromeCampaign={campaign} />
      </section>
      <PasBlock title={content.solution.title} body={content.solution.body} dark />
    </PseoLayout>
  );
}
