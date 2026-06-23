/**
 * Week 2 — GRP-008 voice cluster + GRP-001 voice niche consolidation.
 * Zero/low-impression ghosts → /voice-invoicing or voice survivor.
 * Trade how-tos with ≥5 impressions or clicks are kept (bucket rule).
 */
import type { ConsolidationRedirect } from './gmail-consolidation-redirects.ts';

export const VOICE_SURVIVOR_SLUGS = [
  'the-60-second-invoice-voice-to-invoice',
  'fastest-way-to-send-invoice-2026',
  'stop-admin-sundays-voice-invoicing',
  'is-voice-invoicing-accurate',
  'beyond-chatgpt-dedicated-voice-invoicing',
  'invoice-without-typing',
  // Bucket A retrofit + trade posts earning impressions (not merged into template hub)
  'how-to-invoice-as-a-cleaner-australia',
  'how-to-invoice-as-a-handyman-australia',
  'how-to-invoice-as-a-pest-control-operator-australia',
  'how-to-invoice-as-a-plumber-australia',
] as const;

export const VOICE_CONSOLIDATION_REDIRECTS: ConsolidationRedirect[] = [
  // GRP-008 trade how-tos — 0 imp or <5 imp, no clicks
  { slug: 'how-to-invoice-as-a-carpenter-australia', target: '/voice-invoicing', reason: 'GRP-008 ghost (2 imp)' },
  { slug: 'how-to-invoice-as-a-gardener-australia', target: '/voice-invoicing', reason: 'GRP-008 ghost (0 imp)' },
  { slug: 'how-to-invoice-as-a-painter-australia', target: '/voice-invoicing', reason: 'GRP-008 ghost (0 imp)' },
  { slug: 'how-to-invoice-as-a-mobile-mechanic-australia', target: '/voice-invoicing', reason: 'GRP-008 ghost (4 imp)' },
  // GRP-001 voice niche — 0 imp
  { slug: 'ai-voice-invoicing-2026-standard', target: '/voice-invoicing', reason: 'voice niche ghost' },
  { slug: 'cleaning-services-voice-invoicing-tradie', target: '/voice-invoicing', reason: 'voice niche ghost' },
  { slug: 'driveway-concrete-asphalt-voice-invoicing', target: '/voice-invoicing', reason: 'voice niche ghost' },
  { slug: 'fergus-alternative-voice-invoicing-tradie', target: '/voice-invoicing', reason: 'voice niche ghost' },
  { slug: 'handymen-multi-skill-voice-invoicing-tradie', target: '/voice-invoicing', reason: 'voice niche ghost (2 imp)' },
  { slug: 'mobile-mechanic-toolkit-voice-to-invoice', target: '/voice-invoicing', reason: 'voice niche ghost (3 imp)' },
  { slug: 'smash-xero-voice-invoicing-accounting', target: '/voice-invoicing', reason: 'voice niche ghost' },
  { slug: 'voice-to-estimate-build-bids-without-pen', target: '/voice-invoicing', reason: 'voice niche ghost' },
  { slug: 'voice-to-quote-feature', target: '/voice-invoicing', reason: 'voice niche ghost' },
  { slug: 'voice-to-crm-ai-learns-customers', target: '/voice-invoicing', reason: 'voice niche ghost' },
];

export const VOICE_REDIRECTED_SLUGS = new Set(
  VOICE_CONSOLIDATION_REDIRECTS.map((r) => r.slug),
);

export function voiceRedirectLines(): string[] {
  const lines: string[] = [];
  for (const { slug, target } of VOICE_CONSOLIDATION_REDIRECTS) {
    lines.push(`/blog/${slug}     ${target}     301!`);
    lines.push(`/blog/${slug}/    ${target}     301!`);
  }
  return lines;
}
