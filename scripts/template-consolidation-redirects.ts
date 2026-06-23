/**
 * Week 3 — GRP-007 template hub consolidation.
 * Phase 1: zero-impression niche how-tos → /invoice-template
 * Phase 2: impression-bearing survivors → /invoice-template (content merged into hub)
 */
import type { ConsolidationRedirect } from './gmail-consolidation-redirects.ts';
import { TEMPLATE_HUB_MERGED_SLUGS } from '../src/data/invoice-template-trade-guides.ts';

const HUB = '/invoice-template';

/** Phase 1 — 0 GSC impressions */
const PHASE1_REDIRECTS: ConsolidationRedirect[] = [
  { slug: 'how-to-invoice-cctv-and-alarm-installations', target: HUB, reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-computer-repair-parts-and-labour', target: HUB, reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-fencing-by-the-metre', target: HUB, reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-mobile-car-detailing-packages', target: HUB, reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-mobile-dog-grooming-appointments', target: HUB, reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-pool-chemical-treatments', target: HUB, reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-rubbish-removal-tip-fees', target: HUB, reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-solar-with-stc-rebates', target: HUB, reason: 'GRP-007 ghost (0 imp)' },
  { slug: 'how-to-invoice-tree-removal-and-stump-grinding', target: HUB, reason: 'GRP-007 ghost (0 imp)' },
];

/** Phase 2 — survivors with GSC impressions; content merged into hub before 301 */
const PHASE2_REDIRECTS: ConsolidationRedirect[] = Object.keys(TEMPLATE_HUB_MERGED_SLUGS).map(
  (slug) => ({
    slug,
    target: HUB,
    reason: 'GRP-007 phase 2 — merged into /invoice-template',
  }),
);

export const TEMPLATE_CONSOLIDATION_REDIRECTS: ConsolidationRedirect[] = [
  ...PHASE1_REDIRECTS,
  ...PHASE2_REDIRECTS,
];

/** @deprecated All survivors merged — kept for import compatibility */
export const TEMPLATE_HUB_SURVIVOR_SLUGS = [] as const;

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
