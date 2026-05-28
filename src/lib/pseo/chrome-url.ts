const CHROME_BASE =
  'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';

export function pseoChromeStoreUrl(campaign: string): string {
  const params = new URLSearchParams({
    utm_source: 'pseo',
    utm_campaign: campaign,
  });
  return `${CHROME_BASE}?${params.toString()}`;
}

export function pseoChromeCampaign(country: string, nicheOrCluster: string): string {
  return `${country}_${nicheOrCluster}`.replace(/-/g, '_').slice(0, 80);
}
