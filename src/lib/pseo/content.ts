import type { PseoRegionalConfig } from '../../data/pseo/regional-mapping';
import type { PseoNiche } from '../../data/pseo/niches';
import type { PseoSoftwareAlternative } from '../../data/pseo/software-alternatives';

/** Cluster 1 — PAS integration fix */
export function buildAlternativePageContent(software: PseoSoftwareAlternative, region: PseoRegionalConfig) {
  const { name: softwareName } = software;
  const { country_name } = region;
  return {
    title: `${softwareName} Invoices Not Sending Through Gmail? Fix It Instantly.`,
    metaDescription: `Tired of broken ${softwareName} Gmail SMTP connection errors in the ${country_name}? Discover how this 1-click Chrome extension bypasses integrations completely.`,
    headline: `Stop Fighting with Broken ${softwareName} Gmail Integrations.`,
    subheadline:
      'When Google updates its security protocols, external accounting engines get blocked. Send 100% deliverable invoices directly inside your active Gmail window.',
    agitation: {
      title: 'Why external mail relays keep failing',
      body: `Web apps like ${softwareName} often send through external mail relays. Modern Gmail security, SPF alignment, and DMARC checks flag those messages — so invoices bounce, land in spam, or never leave the queue. In the ${country_name}, that means delayed cash flow and awkward follow-ups with clients who never received your bill.`,
    },
    solution: {
      title: 'Send from your active Gmail session',
      body: `SMASH Invoices runs as a Chrome extension inside Gmail. It uses your logged-in Google profile locally — Google treats the send as a standard email from your address, not a third-party relay. Build the invoice in the sidebar, attach the PDF, and hit send without opening ${softwareName} in another tab.`,
    },
  };
}

/** Cluster 2 — PAS persona niche */
export function buildPersonaPageContent(niche: PseoNiche, region: PseoRegionalConfig) {
  const nichePlural = niche.labelPlural;
  return {
    title: `Fast Invoice Generator for ${nichePlural} | Send via Gmail`,
    metaDescription: `The ultimate frictionless billing tool built specifically for ${nichePlural.toLowerCase()}. Smash out professional invoices directly from your browser.`,
    headline: `The Fastest Invoice Tool Built for ${nichePlural}.`,
    subheadline:
      "Don't waste your nights sorting through enterprise accounting ledger tools. Click, fill, and smash your invoices out in under 60 seconds.",
    agitation: {
      title: 'Spreadsheets and bloated accounting apps slow you down',
      body: `${region.persona_mapping[niche.persona]}s in the ${region.country_name} lose hours retyping line items, fixing ${region.tax_name} mistakes, and switching between Gmail and desktop software — while clients wait for a professional invoice.`,
    },
    solution: {
      title: 'Invoice from Gmail in one flow',
      body: `SMASH pre-fills ${region.tax_name}, formats amounts in ${region.currency_symbol}${region.currency_code}, and lets you send from the same thread where the job was booked. Voice or tap — priced PDF ready before you close the laptop.`,
    },
  };
}

/** Cluster 3 — tax utility */
export function buildTaxToolPageContent(region: PseoRegionalConfig) {
  const { tax_name, country_name } = region;
  return {
    title: `Free Online ${tax_name} Invoice Generator (${country_name})`,
    metaDescription: `Free ${tax_name} invoice generator for ${country_name}. Auto-calculate tax, preview line items, and export a clean PDF — or send the same template from Gmail with one click.`,
    headline: `Compliant Free Online ${tax_name} Invoice Generator.`,
    subheadline: `Auto-calculate correct local ${tax_name} and export clean billing files straight to your client.`,
    conversionHook:
      'Want to skip filling this out on a website next time? Install the SMASH Invoices Chrome Extension to send this exact template inside Gmail with 1 click.',
  };
}
