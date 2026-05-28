import { useParams, Navigate } from 'react-router-dom';
import { PseoLayout } from '../../components/pseo/PseoLayout';
import { PseoInvoiceMockForm } from '../../components/pseo/PseoInvoiceMockForm';
import { regionalMapping, type PseoCountryCode } from '../../data/pseo/regional-mapping';
import { buildTaxToolPageContent } from '../../lib/pseo/content';
import { hreflangForTaxToolPage } from '../../lib/pseo/hreflang';
import { pseoAbsoluteUrl, pseoTaxToolPath, taxToolSlugForCountry } from '../../lib/pseo/urls';
import { pseoChromeCampaign, pseoChromeStoreUrl } from '../../lib/pseo/chrome-url';

const VALID_COUNTRIES = new Set<string>(['us', 'uk', 'ca', 'au', 'nz']);

export function PseoTaxToolRoute() {
  const { country, toolSlug } = useParams<{ country: string; toolSlug: string }>();

  if (!country || !toolSlug || !VALID_COUNTRIES.has(country)) {
    return <Navigate to="/sitemap-directory" replace />;
  }

  const expectedSlug = `free-${taxToolSlugForCountry(country as PseoCountryCode)}-invoice-generator`;
  if (toolSlug !== expectedSlug) {
    return <Navigate to={pseoTaxToolPath(country as PseoCountryCode, taxToolSlugForCountry(country as PseoCountryCode))} replace />;
  }

  const region = regionalMapping[country as PseoCountryCode];
  const content = buildTaxToolPageContent(region);
  const path = pseoTaxToolPath(country as PseoCountryCode, taxToolSlugForCountry(country as PseoCountryCode));
  const canonical = pseoAbsoluteUrl(path);
  const campaign = pseoChromeCampaign(country, 'tax_tool');

  return (
    <PseoLayout
      title={content.title}
      description={content.metaDescription}
      keywords={`free ${region.tax_name.toLowerCase()} invoice generator, ${region.country_name} invoice template, online invoice generator`}
      canonical={canonical}
      hreflangs={hreflangForTaxToolPage(country as PseoCountryCode)}
      breadcrumbs={[
        { name: 'Home', url: 'https://smashinvoices.com/' },
        { name: 'Directory', url: 'https://smashinvoices.com/sitemap-directory' },
        { name: region.country_name, url: `https://smashinvoices.com/sitemap-directory/${country}` },
        { name: `${region.tax_name} generator`, url: canonical },
      ]}
      chromeUrl={pseoChromeStoreUrl(campaign)}
      headline={content.headline}
      subheadline={content.subheadline}
      currencyCode={region.currency_code}
    >
      <section className="py-14 bg-[#0D1117]">
        <PseoInvoiceMockForm
          region={region}
          lineItem={`Professional services — ${region.tax_name} applicable`}
          chromeCampaign={campaign}
        />
        <p className="text-center text-white/50 text-sm max-w-lg mx-auto mt-8 px-4">{content.conversionHook}</p>
      </section>
    </PseoLayout>
  );
}
