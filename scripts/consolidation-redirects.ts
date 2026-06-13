/**
 * All blog slugs with active 301 consolidation redirects.
 * Used by sitemap generator to exclude dead URLs.
 */
import { GMAIL_REDIRECTED_SLUGS } from './gmail-consolidation-redirects.ts';
import { VOICE_REDIRECTED_SLUGS } from './voice-consolidation-redirects.ts';

export const ALL_CONSOLIDATION_REDIRECTED_SLUGS = new Set([
  ...GMAIL_REDIRECTED_SLUGS,
  ...VOICE_REDIRECTED_SLUGS,
]);
