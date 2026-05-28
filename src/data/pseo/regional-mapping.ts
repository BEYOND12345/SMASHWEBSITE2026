/**
 * Programmatic SEO regional variable engine (Step 1).
 * Populates page templates per /us/, /uk/, /ca/, /au/, /nz/.
 */

export type PseoCountryCode = 'us' | 'uk' | 'ca' | 'au' | 'nz';

export type PseoPersonaKey = 'contractor' | 'freelancer' | 'small_biz';

export interface PseoRegionalConfig {
  country_name: string;
  currency_symbol: string;
  currency_code: string;
  tax_name: string;
  /** BCP47 hreflang tag (lowercase per SEO brief). */
  hreflang: string;
  persona_mapping: Record<PseoPersonaKey, string>;
}

export const regionalMapping: Record<PseoCountryCode, PseoRegionalConfig> = {
  us: {
    country_name: 'United States',
    currency_symbol: '$',
    currency_code: 'USD',
    tax_name: 'Sales Tax',
    hreflang: 'en-us',
    persona_mapping: {
      contractor: 'Independent Contractor',
      freelancer: 'Freelancer',
      small_biz: 'Small Business',
    },
  },
  uk: {
    country_name: 'United Kingdom',
    currency_symbol: '£',
    currency_code: 'GBP',
    tax_name: 'VAT',
    hreflang: 'en-gb',
    persona_mapping: {
      contractor: 'Subcontractor',
      freelancer: 'Self-Employed Freelancer',
      small_biz: 'Small Business Owner',
    },
  },
  au: {
    country_name: 'Australia',
    currency_symbol: '$',
    currency_code: 'AUD',
    tax_name: 'GST',
    hreflang: 'en-au',
    persona_mapping: {
      contractor: 'Subcontractor / Tradie',
      freelancer: 'Sole Trader',
      small_biz: 'Micro Business',
    },
  },
  ca: {
    country_name: 'Canada',
    currency_symbol: '$',
    currency_code: 'CAD',
    tax_name: 'GST/HST',
    hreflang: 'en-ca',
    persona_mapping: {
      contractor: 'Independent Contractor',
      freelancer: 'Freelancer',
      small_biz: 'Small Business',
    },
  },
  nz: {
    country_name: 'New Zealand',
    currency_symbol: '$',
    currency_code: 'NZD',
    tax_name: 'GST',
    hreflang: 'en-nz',
    persona_mapping: {
      contractor: 'Contractor',
      freelancer: 'Sole Trader',
      small_biz: 'Small Business',
    },
  },
};

export const PSEO_COUNTRY_CODES: PseoCountryCode[] = ['us', 'uk', 'ca', 'au', 'nz'];

/** URL path prefix for a country cluster page. AU uses /au/ on pSEO routes (x-default is unprefixed). */
export function pseoCountryPrefix(country: PseoCountryCode): string {
  return `/${country}`;
}
