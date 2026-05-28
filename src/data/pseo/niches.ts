import type { PseoPersonaKey } from './regional-mapping';

export interface PseoNiche {
  slug: string;
  /** Display label — e.g. "Plumber", "Graphic Designer". */
  label: string;
  /** Plural for headings — e.g. "Plumbers", "Graphic Designers". */
  labelPlural: string;
  defaultLineItem: string;
  persona: PseoPersonaKey;
  /** Optional link to legacy /for-{slug} segment page. */
  legacySegmentSlug?: string;
}

/** Starter niche catalog — extend this array to scale pSEO. */
export const pseoNiches: PseoNiche[] = [
  { slug: 'handyman', label: 'Handyman', labelPlural: 'Handymen', defaultLineItem: 'Residential Repair Work & General Maintenance', persona: 'contractor', legacySegmentSlug: 'handymen' },
  { slug: 'plumber', label: 'Plumber', labelPlural: 'Plumbers', defaultLineItem: 'Plumbing Labour, Parts & Call-out Fee', persona: 'contractor', legacySegmentSlug: 'plumbers' },
  { slug: 'electrician', label: 'Electrician', labelPlural: 'Electricians', defaultLineItem: 'Electrical Labour & Materials', persona: 'contractor', legacySegmentSlug: 'electricians' },
  { slug: 'painter', label: 'Painter', labelPlural: 'Painters', defaultLineItem: 'Interior / Exterior Painting Labour & Materials', persona: 'contractor', legacySegmentSlug: 'painters' },
  { slug: 'cleaner', label: 'Cleaner', labelPlural: 'Cleaners', defaultLineItem: 'Residential & Commercial Cleaning Service', persona: 'contractor', legacySegmentSlug: 'cleaners' },
  { slug: 'gardener', label: 'Gardener', labelPlural: 'Gardeners', defaultLineItem: 'Lawn Care & Garden Maintenance', persona: 'contractor', legacySegmentSlug: 'gardeners' },
  { slug: 'hvac-technician', label: 'HVAC Technician', labelPlural: 'HVAC Technicians', defaultLineItem: 'HVAC Service, Parts & Labour', persona: 'contractor', legacySegmentSlug: 'hvac' },
  { slug: 'locksmith', label: 'Locksmith', labelPlural: 'Locksmiths', defaultLineItem: 'Locksmith Service Call & Hardware', persona: 'contractor', legacySegmentSlug: 'locksmiths' },
  { slug: 'copywriter', label: 'Copywriter', labelPlural: 'Copywriters', defaultLineItem: 'Content Writing, Revisions & Project Fee', persona: 'freelancer' },
  { slug: 'graphic-designer', label: 'Graphic Designer', labelPlural: 'Graphic Designers', defaultLineItem: 'Design Work, Revisions & Creative Assets', persona: 'freelancer' },
  { slug: 'photographer', label: 'Photographer', labelPlural: 'Photographers', defaultLineItem: 'Photography Session & Deliverables', persona: 'freelancer' },
  { slug: 'consultant', label: 'Consultant', labelPlural: 'Consultants', defaultLineItem: 'Professional Consulting & Advisory Hours', persona: 'small_biz' },
];

export const nicheBySlug = Object.fromEntries(pseoNiches.map((n) => [n.slug, n]));
