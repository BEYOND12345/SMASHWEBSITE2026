/** Shared blog featured-image + OG defaults (React + prerender scripts). */

export const SITE_ORIGIN = 'https://smashinvoices.com';

/** Branded default when a post has no trade-specific featured image (1200×630 PNG). */
export const BLOG_DEFAULT_OG_PATH = '/og/blog-default.png';
export const BLOG_DEFAULT_OG_URL = `${SITE_ORIGIN}${BLOG_DEFAULT_OG_PATH}`;

/** Legacy generic OG — treat as “needs branded default”. */
export const LEGACY_BLOG_OG_PATHS = ['/hero_image.png', 'hero_image.png'] as const;

export const BLOG_DEFAULT_OG_ALT =
  'SMASH Invoices — voice invoicing for self-employed service workers';

export function absoluteBlogImageUrl(src: string | null | undefined): string {
  if (!src) return BLOG_DEFAULT_OG_URL;
  if (src.startsWith('http')) return src;
  return `${SITE_ORIGIN}${src.startsWith('/') ? '' : '/'}${src}`;
}

export function isLegacyOrEmptyFeaturedImage(src: string | null | undefined): boolean {
  if (!src?.trim()) return true;
  const normalized = src.trim().toLowerCase();
  return LEGACY_BLOG_OG_PATHS.some(
    (p) => normalized === p || normalized.endsWith('/hero_image.png'),
  );
}

/** Path for DB + static HTML — returns branded default when legacy or missing. */
export function resolveBlogFeaturedImagePath(src: string | null | undefined): string {
  if (isLegacyOrEmptyFeaturedImage(src)) return BLOG_DEFAULT_OG_PATH;
  const trimmed = src!.trim();
  return trimmed.startsWith('http') ? trimmed.replace(SITE_ORIGIN, '') || trimmed : trimmed;
}

export function resolveBlogFeaturedImageAlt(
  alt: string | null | undefined,
  fallback: { title: string; primaryKeyword?: string | null },
): string {
  if (alt?.trim()) return alt.trim();
  if (fallback.primaryKeyword?.trim()) {
    return `${fallback.primaryKeyword.trim()} — SMASH Invoices`;
  }
  return `${fallback.title} — SMASH Invoices`;
}
