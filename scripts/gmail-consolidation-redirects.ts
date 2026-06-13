/**
 * Week 2 — GRP-004 Gmail cluster consolidation.
 * Non-video ghosts with 0 GSC impressions → 301 to pillar or nearest survivor.
 * Video posts (VideoObject) are intentionally excluded — see PROTECTED_BLOG_SLUGS.
 */
export type ConsolidationRedirect = {
  slug: string;
  target: string;
  reason: string;
};

/** Survivors — never redirect these */
export const GMAIL_SURVIVOR_SLUGS = [
  'gmail-quickbooks-xero-bridge',
  'gmail-email-to-invoice-20-seconds',
  'gmail-to-xero-invoice-no-typing',
  'fastest-voice-invoice-generator-gmail',
] as const;

/** Slugs removed from sitemap after 301 goes live */
export const GMAIL_CONSOLIDATION_REDIRECTS: ConsolidationRedirect[] = [
  { slug: 'bulk-goods-wholesaler-quoting-gmail', target: '/gmail-invoice', reason: 'niche pSEO ghost → pillar' },
  { slug: 'fencing-gate-balustrade-quoting-gmail', target: '/gmail-invoice', reason: 'niche pSEO ghost → pillar' },
  { slug: 'garden-shed-kit-barn-quoting-gmail', target: '/gmail-invoice', reason: 'niche pSEO ghost → pillar' },
  { slug: 'it-reseller-msp-quote-automation-gmail', target: '/gmail-invoice', reason: 'niche pSEO ghost → pillar' },
  { slug: 'print-signage-custom-quote-gmail', target: '/gmail-invoice', reason: 'niche pSEO ghost → pillar' },
  { slug: 'service-trade-invoice-gmail-sidebar', target: '/gmail-invoice', reason: 'niche pSEO ghost → pillar' },
  { slug: 'shipping-container-quote-builder-gmail', target: '/gmail-invoice', reason: 'niche pSEO ghost → pillar' },
  { slug: 'quickbooks-estimates-from-gmail', target: '/blog/gmail-quickbooks-xero-bridge', reason: 'QB cluster → survivor' },
  { slug: 'xero-quote-builder-gmail-extension', target: '/blog/gmail-to-xero-invoice-no-typing', reason: 'Xero cluster → survivor' },
];

export const GMAIL_REDIRECTED_SLUGS = new Set(
  GMAIL_CONSOLIDATION_REDIRECTS.map((r) => r.slug),
);

export function gmailRedirectLines(): string[] {
  const lines: string[] = [];
  for (const { slug, target } of GMAIL_CONSOLIDATION_REDIRECTS) {
    lines.push(`/blog/${slug}     ${target}     301!`);
    lines.push(`/blog/${slug}/    ${target}     301!`);
  }
  return lines;
}
