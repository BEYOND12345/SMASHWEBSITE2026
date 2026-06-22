/**
 * All blog slugs with active 301 consolidation redirects.
 * Used by sitemap generator to exclude dead URLs.
 */
import { GMAIL_REDIRECTED_SLUGS } from './gmail-consolidation-redirects.ts';
import { VOICE_REDIRECTED_SLUGS } from './voice-consolidation-redirects.ts';
import { TEMPLATE_REDIRECTED_SLUGS } from './template-consolidation-redirects.ts';
import { TRADE_TEMPLATE_REDIRECTED_SLUGS } from './trade-template-consolidation-redirects.ts';
import { LEGACY_ORPHAN_LINK_FIXES } from './legacy-orphan-link-fixes.ts';

export const ALL_CONSOLIDATION_REDIRECTED_SLUGS = new Set([
  ...GMAIL_REDIRECTED_SLUGS,
  ...VOICE_REDIRECTED_SLUGS,
  ...TEMPLATE_REDIRECTED_SLUGS,
  ...TRADE_TEMPLATE_REDIRECTED_SLUGS,
  ...LEGACY_ORPHAN_LINK_FIXES.map((f) => f.slug),
]);
