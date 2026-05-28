export interface PseoSoftwareAlternative {
  slug: string;
  name: string;
}

export const pseoSoftwareAlternatives: PseoSoftwareAlternative[] = [
  { slug: 'quickbooks-gmail-not-working', name: 'QuickBooks' },
  { slug: 'xero-gmail-not-working', name: 'Xero' },
];

export const softwareBySlug = Object.fromEntries(pseoSoftwareAlternatives.map((s) => [s.slug, s]));
