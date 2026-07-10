/**
 * Client feature flags — only VITE_* values (public).
 * Never put secrets here.
 */

/** Homepage Try It section/CTAs. Off until explicitly enabled for launch. */
export function isVoiceQuoteDemoPublic(): boolean {
  return import.meta.env.VITE_ENABLE_VOICE_DEMO === 'true';
}

/** Internal /internal/try-it page — available in local dev, or when public flag is on. */
export function isVoiceQuoteDemoInternalAllowed(): boolean {
  if (import.meta.env.DEV) return true;
  return isVoiceQuoteDemoPublic();
}
