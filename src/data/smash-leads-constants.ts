/** Smash Leads AI CRM — Chrome Web Store (attribution per landing section). */
const CHROME_BASE =
  'https://chromewebstore.google.com/detail/smash-leads-ai-gmail-crm/fbpgggkkjalnciidpifdkpeodcagjipo';

export function smashLeadsChromeUrl(utmMedium: string): string {
  const params = new URLSearchParams({
    utm_source: 'landing_page',
    utm_medium: utmMedium,
  });
  return `${CHROME_BASE}?${params.toString()}`;
}

export const SMASH_LEADS_HUB_PATH = '/smash-leads';
