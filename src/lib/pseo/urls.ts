import type { PseoCountryCode } from '../../data/pseo/regional-mapping.ts';
import { pseoCountryPrefix } from '../../data/pseo/regional-mapping.ts';

export const PSEO_SITE = 'https://smashinvoices.com';

export type PseoCluster = 'for' | 'alternatives' | 'tool';

export function pseoPersonaPath(nicheSlug: string, country?: PseoCountryCode | 'x-default'): string {
  if (!country || country === 'x-default') return `/for/${nicheSlug}`;
  return `${pseoCountryPrefix(country)}/for/${nicheSlug}`;
}

export function pseoAlternativePath(softwareSlug: string, country: PseoCountryCode): string {
  return `${pseoCountryPrefix(country)}/alternatives/${softwareSlug}`;
}

export function pseoTaxToolPath(country: PseoCountryCode, taxSlug: string): string {
  return `${pseoCountryPrefix(country)}/tool/free-${taxSlug}-invoice-generator`;
}

export function pseoAbsoluteUrl(path: string): string {
  return `${PSEO_SITE}${path}`;
}

export function taxToolSlugForCountry(country: PseoCountryCode): string {
  switch (country) {
    case 'us':
      return 'sales-tax';
    case 'uk':
      return 'vat';
    case 'ca':
      return 'gst-hst';
    case 'au':
    case 'nz':
      return 'gst';
  }
}
