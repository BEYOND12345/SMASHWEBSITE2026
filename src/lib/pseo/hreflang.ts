import { PSEO_COUNTRY_CODES, regionalMapping, type PseoCountryCode } from '../../data/pseo/regional-mapping.ts';
import { pseoAbsoluteUrl, pseoAlternativePath, pseoPersonaPath, pseoTaxToolPath, taxToolSlugForCountry } from './urls.ts';

export interface PseoHreflangAlternate {
  hreflang: string;
  href: string;
}

/** Cluster 2: persona pages — reciprocal tags across all 5 markets + x-default. */
export function buildPersonaHreflang(nicheSlug: string): PseoHreflangAlternate[] {
  return [
    { hreflang: 'x-default', href: pseoAbsoluteUrl(pseoPersonaPath(nicheSlug, 'x-default')) },
    ...PSEO_COUNTRY_CODES.map((c) => ({
      hreflang: regionalMapping[c].hreflang,
      href: pseoAbsoluteUrl(pseoPersonaPath(nicheSlug, c)),
    })),
  ];
}

/** Cluster 1: integration fix — country-scoped (no x-default in brief). */
export function buildAlternativeHreflang(softwareSlug: string): PseoHreflangAlternate[] {
  return PSEO_COUNTRY_CODES.map((c) => ({
    hreflang: regionalMapping[c].hreflang,
    href: pseoAbsoluteUrl(pseoAlternativePath(softwareSlug, c)),
  }));
}

/** Cluster 3: tax tool — one page per country, cross-linked. */
export function buildTaxToolHreflang(): PseoHreflangAlternate[] {
  return PSEO_COUNTRY_CODES.map((c) => ({
    hreflang: regionalMapping[c].hreflang,
    href: pseoAbsoluteUrl(pseoTaxToolPath(c, taxToolSlugForCountry(c))),
  }));
}

export function hreflangForPersonaPage(nicheSlug: string, _country: PseoCountryCode | 'x-default'): PseoHreflangAlternate[] {
  return buildPersonaHreflang(nicheSlug);
}

export function hreflangForAlternativePage(softwareSlug: string, _country: PseoCountryCode): PseoHreflangAlternate[] {
  return buildAlternativeHreflang(softwareSlug);
}

export function hreflangForTaxToolPage(_country: PseoCountryCode): PseoHreflangAlternate[] {
  return buildTaxToolHreflang();
}
