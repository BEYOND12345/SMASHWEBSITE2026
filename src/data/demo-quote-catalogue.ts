/**
 * Demo catalogue for the public voice-to-quote try-it flow.
 * Kept in sync with supabase/functions/demo-voice-quote/catalogue.ts
 */

export type DemoCatalogueItem = {
  id: string;
  name: string;
  unitPrice: number;
  unit: 'job' | 'hr' | 'each' | 'litre';
  defaultQty: number;
  keywords: string[];
  /** Prefer this item when these phrases appear */
  boostPhrases?: string[];
};

export const DEMO_CATALOGUE: DemoCatalogueItem[] = [
  {
    id: 'gutter-clean',
    name: 'Gutter cleaning (2-storey)',
    unitPrice: 200,
    unit: 'job',
    defaultQty: 1,
    keywords: ['gutter', 'gutters', 'downpipe', 'downpipes'],
    boostPhrases: ['two-storey', 'two storey', '2 storey', 'second storey'],
  },
  {
    id: 'garden-cleanup',
    name: 'Garden cleanup',
    unitPrice: 150,
    unit: 'job',
    defaultQty: 1,
    keywords: ['garden', 'yard', 'cleanup', 'clean up', 'weeding', 'green waste'],
  },
  {
    id: 'lawn-mow',
    name: 'Lawn mowing',
    unitPrice: 80,
    unit: 'job',
    defaultQty: 1,
    keywords: ['lawn', 'mow', 'mowing', 'grass'],
  },
  {
    id: 'house-clean',
    name: 'House clean',
    unitPrice: 180,
    unit: 'job',
    defaultQty: 1,
    keywords: ['house clean', 'home clean', 'cleaning', 'clean the house'],
  },
  {
    id: 'bond-clean',
    name: 'End of lease clean',
    unitPrice: 350,
    unit: 'job',
    defaultQty: 1,
    keywords: ['bond clean', 'end of lease', 'vacate', 'exit clean'],
  },
  {
    id: 'handyman-hr',
    name: 'Handyman labour',
    unitPrice: 95,
    unit: 'hr',
    defaultQty: 2,
    keywords: ['handyman', 'handy man', 'odd job', 'fix', 'repair'],
  },
  {
    id: 'job-setup',
    name: 'Basic job setup',
    unitPrice: 50,
    unit: 'job',
    defaultQty: 1,
    keywords: ['setup', 'set up', 'call out', 'callout', 'attendance'],
  },
  {
    id: 'call-out',
    name: 'Call-out fee',
    unitPrice: 65,
    unit: 'each',
    defaultQty: 1,
    keywords: ['call-out', 'call out', 'callout fee'],
  },
  {
    id: 'travel',
    name: 'Travel fee',
    unitPrice: 45,
    unit: 'each',
    defaultQty: 1,
    keywords: ['travel', 'travel fee', 'km', 'kilometre'],
  },
  {
    id: 'paint-litre',
    name: 'Paint (per litre)',
    unitPrice: 45,
    unit: 'litre',
    defaultQty: 2,
    keywords: ['paint', 'painting', 'litre of paint'],
  },
  {
    id: 'tap-labour',
    name: 'Tap replacement labour',
    unitPrice: 120,
    unit: 'job',
    defaultQty: 1,
    keywords: ['tap', 'faucet', 'mixer tap', 'kitchen tap', 'replace tap'],
  },
  {
    id: 'tap-material',
    name: 'Kitchen mixer tap',
    unitPrice: 85,
    unit: 'each',
    defaultQty: 1,
    keywords: ['mixer tap', 'new tap', 'kitchen tap'],
  },
  {
    id: 'fittings',
    name: 'Compression fittings',
    unitPrice: 28,
    unit: 'each',
    defaultQty: 1,
    keywords: ['compression', 'fittings', 'plumbing fittings'],
  },
  {
    id: 'fence-repair',
    name: 'Fence repair',
    unitPrice: 220,
    unit: 'job',
    defaultQty: 1,
    keywords: ['fence', 'fencing', 'paling', 'gate'],
  },
  {
    id: 'window-clean',
    name: 'Window clean',
    unitPrice: 140,
    unit: 'job',
    defaultQty: 1,
    keywords: ['window', 'windows', 'glazing'],
  },
];

export const DEMO_CUSTOMER = {
  name: 'Sarah',
  business: 'Service Worker',
  address: 'Sydney, NSW',
  taxJurisdiction: 'AU',
  gstRate: 0.1,
} as const;

export type DemoQuoteLineItem = {
  id: string;
  name: string;
  qty: number;
  unit: string;
  unitPrice: number;
  total: number;
};

export type DemoQuote = {
  customerName: string;
  business: string;
  address: string;
  lineItems: DemoQuoteLineItem[];
  subtotal: number;
  gst: number;
  total: number;
  currency: 'AUD';
  builtInSeconds: number;
};

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

/** Match spoken job text to demo catalogue rates (AU GST). */
export function buildDemoQuoteFromTranscript(
  transcript: string,
  builtInSeconds: number,
): DemoQuote | null {
  const text = transcript.toLowerCase().replace(/\s+/g, ' ').trim();
  if (text.length < 4) return null;

  const scored = DEMO_CATALOGUE.map((item) => {
    let score = 0;
    for (const kw of item.keywords) {
      if (text.includes(kw.toLowerCase())) score += kw.split(' ').length > 1 ? 3 : 2;
    }
    for (const phrase of item.boostPhrases ?? []) {
      if (text.includes(phrase.toLowerCase())) score += 4;
    }
    return { item, score };
  })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) return null;

  const picked = scored.slice(0, 4);
  const lineItems: DemoQuoteLineItem[] = picked.map(({ item }) => {
    const qty = item.defaultQty;
    const total = round2(qty * item.unitPrice);
    return {
      id: item.id,
      name: item.name,
      qty,
      unit: item.unit,
      unitPrice: item.unitPrice,
      total,
    };
  });

  const subtotal = round2(lineItems.reduce((sum, li) => sum + li.total, 0));
  const gst = round2(subtotal * DEMO_CUSTOMER.gstRate);
  const total = round2(subtotal + gst);

  return {
    customerName: DEMO_CUSTOMER.name,
    business: DEMO_CUSTOMER.business,
    address: DEMO_CUSTOMER.address,
    lineItems,
    subtotal,
    gst,
    total,
    currency: 'AUD',
    builtInSeconds,
  };
}
