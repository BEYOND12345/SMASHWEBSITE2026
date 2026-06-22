/**
 * Week 3 — GRP-003 trade invoice-template posts (Bucket D).
 * Template pSEO duplicates how-to guides and /invoice-template — 301 to best survivor.
 */
import type { ConsolidationRedirect } from './gmail-consolidation-redirects.ts';

const HUB = '/invoice-template';

/** Map trade template slug → live URL (how-to survivor or hub) */
export const TRADE_TEMPLATE_CONSOLIDATION_REDIRECTS: ConsolidationRedirect[] = [
  // Zero GSC impressions → hub
  { slug: 'appliance-repair-invoice-template-australia', target: '/blog/how-to-invoice-appliance-repair-callouts', reason: 'GRP-003 → how-to survivor' },
  { slug: 'arborist-invoice-template-australia', target: HUB, reason: 'GRP-003 ghost (0 imp)' },
  { slug: 'car-detailing-invoice-template-australia', target: HUB, reason: 'GRP-003 ghost (0 imp)' },
  { slug: 'dog-grooming-invoice-template-australia', target: HUB, reason: 'GRP-003 ghost (0 imp)' },
  { slug: 'fencing-invoice-template-australia', target: HUB, reason: 'GRP-003 ghost (0 imp)' },
  { slug: 'plumbing-invoice-template-australia', target: '/blog/how-to-invoice-as-a-plumber-australia', reason: 'GRP-003 → how-to survivor' },
  { slug: 'rubbish-removal-invoice-template-australia', target: HUB, reason: 'GRP-003 ghost (0 imp)' },
  { slug: 'solar-installation-invoice-template-australia', target: HUB, reason: 'GRP-003 ghost (0 imp)' },
  { slug: 'tiler-invoice-template-australia', target: '/blog/how-to-invoice-tiling-labour-and-materials', reason: 'GRP-003 → how-to survivor' },
  // Has impressions — funnel to how-to or hub (0 clicks across bucket)
  { slug: 'cleaning-invoice-template-australia', target: '/blog/how-to-invoice-commercial-cleaning-clients', reason: 'GRP-003 → how-to (9 imp)' },
  { slug: 'concreter-invoice-template-australia', target: '/blog/how-to-invoice-concrete-progress-claims', reason: 'GRP-003 → how-to (9 imp)' },
  { slug: 'electrician-invoice-template-australia', target: '/blog/how-to-invoice-as-an-electrician-australia', reason: 'GRP-003 → how-to (21 imp)' },
  { slug: 'gardening-invoice-template-australia', target: HUB, reason: 'GRP-003 bucket D (29 imp, no how-to)' },
  { slug: 'handyman-invoice-template-australia', target: '/blog/how-to-invoice-as-a-handyman-australia', reason: 'GRP-003 → how-to (2 imp)' },
  { slug: 'hvac-air-con-invoice-template-australia', target: HUB, reason: 'GRP-003 bucket D (86 imp → hub)' },
  { slug: 'it-repair-invoice-template-australia', target: HUB, reason: 'GRP-003 bucket D (4 imp)' },
  { slug: 'locksmith-invoice-template-australia', target: '/blog/how-to-invoice-emergency-locksmith-call-outs', reason: 'GRP-003 → how-to (17 imp)' },
  { slug: 'painter-invoice-template-australia', target: '/blog/how-to-invoice-multi-day-painting-jobs', reason: 'GRP-003 → how-to (40 imp)' },
  { slug: 'pest-control-invoice-template-australia', target: '/blog/how-to-invoice-quarterly-pest-treatments', reason: 'GRP-003 → how-to (47 imp)' },
  { slug: 'pool-service-invoice-template-australia', target: '/blog/how-to-invoice-pool-maintenance-australia', reason: 'GRP-003 → how-to (2 imp)' },
  { slug: 'security-installer-invoice-template-australia', target: HUB, reason: 'GRP-003 bucket D (2 imp)' },
];

export const TRADE_TEMPLATE_REDIRECTED_SLUGS = new Set(
  TRADE_TEMPLATE_CONSOLIDATION_REDIRECTS.map((r) => r.slug),
);

export function tradeTemplateRedirectLines(): string[] {
  const lines: string[] = [];
  for (const { slug, target } of TRADE_TEMPLATE_CONSOLIDATION_REDIRECTS) {
    lines.push(`/blog/${slug}     ${target}     301!`);
    lines.push(`/blog/${slug}/    ${target}     301!`);
  }
  return lines;
}
