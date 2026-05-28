import { Link, useParams } from 'react-router-dom';
import { SEO } from '../../components/seo';
import { Nav } from '../../components/nav';
import { Footer } from '../../components/footer';
import {
  chunkPages,
  pseoPagesForDirectory,
  PSEO_DIRECTORY_MAX_LINKS,
  type PseoDirectoryCategory,
} from '../../data/pseo/registry';
import { PSEO_COUNTRY_CODES, regionalMapping, type PseoCountryCode } from '../../data/pseo/regional-mapping';

const categories = [
  { slug: 'for', label: 'Persona / trade pages', desc: '/{country}/for/{niche}' },
  { slug: 'alternatives', label: 'Integration alternatives', desc: '/{country}/alternatives/{software}-gmail-not-working' },
  { slug: 'tool', label: 'Tax invoice generators', desc: '/{country}/tool/free-{tax}-invoice-generator' },
] as const;

export function PseoSitemapDirectoryRoot() {
  return (
    <>
      <SEO
        title="Programmatic SEO Directory | SMASH Invoices"
        description="Browse localized invoice landing pages by region — US, UK, Canada, Australia, and New Zealand."
        canonical="https://smashinvoices.com/sitemap-directory"
      />
      <Nav />
      <main className="bg-white min-h-[60vh] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-black text-brand uppercase tracking-tighter mb-4">pSEO Sitemap Directory</h1>
          <p className="text-brand/65 mb-10">Level 1 — select a region to browse category hubs (max 99 links per index page).</p>
          <ul className="space-y-3">
            {PSEO_COUNTRY_CODES.map((code) => (
              <li key={code}>
                <Link
                  to={`/sitemap-directory/${code}`}
                  className="block rounded-xl border border-brand/10 px-5 py-4 hover:border-accent/40 font-semibold text-brand"
                >
                  {regionalMapping[code].country_name}{' '}
                  <span className="text-brand/40 font-normal">/{code}/</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/sitemap-directory/default/for"
                className="block rounded-xl border border-brand/10 px-5 py-4 hover:border-accent/40 font-semibold text-brand"
              >
                x-default persona pages <span className="text-brand/40 font-normal">/for/{'{niche}'}</span>
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer showCTA={false} />
    </>
  );
}

export function PseoSitemapDirectoryCountry() {
  const { country } = useParams<{ country: string }>();
  if (!country || country === 'default') {
    return null;
  }
  const region = regionalMapping[country as PseoCountryCode];
  if (!region) return null;

  return (
    <>
      <SEO
        title={`pSEO Directory — ${region.country_name} | SMASH`}
        description={`Category hubs for ${region.country_name} programmatic landing pages.`}
        canonical={`https://smashinvoices.com/sitemap-directory/${country}`}
      />
      <Nav />
      <main className="bg-white min-h-[60vh] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm mb-4">
            <Link to="/sitemap-directory" className="text-accent">
              ← Directory
            </Link>
          </p>
          <h1 className="text-3xl font-black text-brand uppercase tracking-tighter mb-8">{region.country_name}</h1>
          <ul className="space-y-3">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/sitemap-directory/${country}/${c.slug}`}
                  className="block rounded-xl border border-brand/10 px-5 py-4 hover:border-accent/40"
                >
                  <span className="font-semibold text-brand">{c.label}</span>
                  <span className="block text-xs text-brand/45 mt-1">{c.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer showCTA={false} />
    </>
  );
}

export function PseoSitemapDirectoryCategory() {
  const { country, category, page } = useParams<{ country: string; category?: string; page?: string }>();
  const pageNum = Math.max(1, parseInt(page ?? '1', 10) || 1);

  if (!country || !category) return null;

  const cat = category as PseoDirectoryCategory;
  if (!['for', 'alternatives', 'tool'].includes(cat)) return null;

  let countryCode: PseoCountryCode | 'x-default';
  if (country === 'default') {
    countryCode = 'x-default';
  } else if (PSEO_COUNTRY_CODES.includes(country as PseoCountryCode)) {
    countryCode = country as PseoCountryCode;
  } else {
    return null;
  }

  const allPages = pseoPagesForDirectory(countryCode, cat);
  const chunks = chunkPages(allPages, PSEO_DIRECTORY_MAX_LINKS);
  const chunk = chunks[pageNum - 1];

  if (!chunk || chunk.length === 0) return null;

  const titleCountry = countryCode === 'x-default' ? 'x-default' : regionalMapping[countryCode].country_name;

  return (
    <>
      <SEO
        title={`${titleCountry} — ${cat} pages | SMASH Directory`}
        description={`Leaf links for ${cat} programmatic pages in ${titleCountry}.`}
        canonical={`https://smashinvoices.com/sitemap-directory/${country}/${category}${pageNum > 1 ? `/page/${pageNum}` : ''}`}
      />
      <Nav />
      <main className="bg-white min-h-[60vh] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm mb-4">
            <Link to={country === 'default' ? '/sitemap-directory' : `/sitemap-directory/${country}`} className="text-accent">
              ← {titleCountry}
            </Link>
          </p>
          <h1 className="text-2xl font-black text-brand uppercase tracking-tighter mb-2">
            {cat} — {titleCountry}
          </h1>
          <p className="text-sm text-brand/50 mb-8">
            Page {pageNum} of {chunks.length} · {chunk.length} links (max {PSEO_DIRECTORY_MAX_LINKS} per index)
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {chunk.map((p) => (
              <li key={p.path}>
                <Link to={p.path} className="text-accent hover:underline">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
          {chunks.length > 1 && (
            <div className="flex gap-4 mt-10 text-sm">
              {pageNum > 1 && (
                <Link to={`/sitemap-directory/${country}/${category}/page/${pageNum - 1}`} className="text-accent">
                  ← Previous
                </Link>
              )}
              {pageNum < chunks.length && (
                <Link to={`/sitemap-directory/${country}/${category}/page/${pageNum + 1}`} className="text-accent">
                  Next →
                </Link>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer showCTA={false} />
    </>
  );
}
