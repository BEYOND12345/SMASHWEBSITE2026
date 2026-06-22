/**
 * Week 3 — GRP-007 template hub consolidation (phase 1).
 * Zero-impression niche how-to posts → /invoice-template pillar.
 * Posts with GSC impressions are kept until content is merged into the hub.
 */
import type { ConsolidationRedirect } from './gmail-consolidation-redirects.ts';

/** Survivors — never redirect these (have impressions or are trade pillars) */
export const TEMPLATE_HUB_SURVIVOR_SLUGS = [
  'how-to-invoice-as-an-electrician-australia',
  'how-to-invoice-as-a-sole-trader-australia-complete-guide',
  'how-to-invoice-appliance-repair-callouts',
  'how-to-invoice-emergency-locksmith-call-outs',
  'how-to-invoice-pool-maintenance-australia',
  'how-to-invoice-quarterly-pest-treatments',
  'how-to-invoice-tiling-labour-and-materials',
  'how-to-invoice-commercial-cleaning-clients',
  'how-to-invoice-concrete-progress-claims',
  'how-to-invoice-multi-day-painting-jobs',
  'how-to-invoice-switchboard-upgrades',
] as const;

/** 0 GSC impressions — safe to 301 without losing ranking signals */
export const TEMPLATE_CONSOLIDATION_REDIRECTS: ConsolidationRedirect[] = [
  { slug: 'how-to-invoice-cctv-and-alarm-installations', target: '/invoice-template', reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-computer-repair-parts-and-labour', target: '/invoice-template', reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-fencing-by-the-metre', target: '/invoice-template', reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-mobile-car-detailing-packages', target: '/invoice-template', reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-mobile-dog-grooming-appointments', target: '/invoice-template', reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-pool-chemical-treatments', target: '/invoice-template', reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-rubbish-removal-tip-fees', target: '/invoice-template', reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-solar-with-stc-rebates', target: '/invoice-template', reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-tree-removal-and-stump-grinding', target: '/invoice-template', reason: 'GRP-007 ghost (0 imp)' },
];

export const TEMPLATE_REDIRECTED_SLUGS = new Set(
  TEMPLATE_CONSOLIDATION_REDIRECTS.map((r) => r.slug),
);

export function templateRedirectLines(): string[] {
  const lines: string[] = [];
  for (const { slug, target } of TEMPLATE_CONSOLIDATION_REDIRECTS) {
    lines.push(`/blog/${slug}     ${target}     301!`);
    lines.push(`/blog/${slug}/    ${target}     301!`);
  }
  return lines;
}
