/**
 * Dead blog slugs that were never published (or renamed) but still appear in internal links.
 * Maps slug → live URL. Applied by fix:consolidated-internal-links.
 */
export type LegacyOrphanFix = {
  slug: string;
  target: string;
  reason: string;
};

export const LEGACY_ORPHAN_LINK_FIXES: LegacyOrphanFix[] = [
  {
    slug: 'the-driveway-workflow-why-tradies-invoice-onsite',
    target: '/blog/friday-pub-test-batch-invoicing-tradies',
    reason: 'Driveway Workflow concept lives in Friday Pub Test post',
  },
];

export const LEGACY_ORPHAN_REDIRECTS: LegacyOrphanFix[] = [
  ...LEGACY_ORPHAN_LINK_FIXES,
];

export function legacyOrphanRedirectLines(): string[] {
  const lines: string[] = [];
  for (const { slug, target } of LEGACY_ORPHAN_REDIRECTS) {
    lines.push(`/blog/${slug}     ${target}     301!`);
    lines.push(`/blog/${slug}/    ${target}     301!`);
  }
  return lines;
}
