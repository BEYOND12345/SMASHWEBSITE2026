/**
 * Central registry of all pSEO page paths for sitemap, directory, and static generation.
 */
import { pseoNiches } from './niches.ts';
import { pseoSoftwareAlternatives } from './software-alternatives.ts';
import { PSEO_COUNTRY_CODES, type PseoCountryCode } from './regional-mapping.ts';
import {
  pseoAlternativePath,
  pseoPersonaPath,
  pseoTaxToolPath,
  taxToolSlugForCountry,
} from '../../lib/pseo/urls.ts';

export type PseoDirectoryCategory = 'for' | 'alternatives' | 'tool';

export interface PseoPageEntry {
  path: string;
  label: string;
  category: PseoDirectoryCategory;
  country?: PseoCountryCode | 'x-default';
}

export function buildPseoPageRegistry(): PseoPageEntry[] {
  const pages: PseoPageEntry[] = [];

  for (const niche of pseoNiches) {
    pages.push({
      path: pseoPersonaPath(niche.slug, 'x-default'),
      label: `${niche.labelPlural} (default)`,
      category: 'for',
      country: 'x-default',
    });
    for (const country of PSEO_COUNTRY_CODES) {
      pages.push({
        path: pseoPersonaPath(niche.slug, country),
        label: `${niche.labelPlural} — ${country.toUpperCase()}`,
        category: 'for',
        country,
      });
    }
  }

  for (const software of pseoSoftwareAlternatives) {
    for (const country of PSEO_COUNTRY_CODES) {
      pages.push({
        path: pseoAlternativePath(software.slug, country),
        label: `${software.name} Gmail fix — ${country.toUpperCase()}`,
        category: 'alternatives',
        country,
      });
    }
  }

  for (const country of PSEO_COUNTRY_CODES) {
    const taxSlug = taxToolSlugForCountry(country);
    pages.push({
      path: pseoTaxToolPath(country, taxSlug),
      label: `Free ${taxSlug.replace(/-/g, '/')} invoice generator`,
      category: 'tool',
      country,
    });
  }

  return pages;
}

export const pseoPageRegistry = buildPseoPageRegistry();

export function pseoPagesForDirectory(country: PseoCountryCode | 'x-default', category: PseoDirectoryCategory): PseoPageEntry[] {
  return pseoPageRegistry.filter((p) => p.category === category && p.country === country);
}

/** Split leaf lists to stay under 100 links per index page. */
export function chunkPages<T>(items: T[], size = 99): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

export const PSEO_DIRECTORY_MAX_LINKS = 99;
