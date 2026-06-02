export const B2B_CHROME_LANDING = {
  path: '/b2b-gmail-quoting',
  canonical: 'https://smashinvoices.com/b2b-gmail-quoting',
  chromeStoreUrl:
    'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel?utm_source=b2b-outreach&utm_medium=landing&utm_campaign=b2b-gmail-quoting',
  seo: {
    title: 'B2B Gmail Quoting for AR Teams — RFQ to Draft in Seconds | SMASH',
    description:
      'Chrome sidebar for wholesale AR and operations desks. Parse multi-line RFQs inside Gmail, fuzzy-match descriptions to your catalog, verify flagged lines, and push itemized quotes to Xero or QuickBooks via OAuth.',
    keywords:
      'b2b gmail quoting, wholesale ar chrome extension, rfq gmail automation, fuzzy match invoice line items, xero quickbooks gmail sidebar, accounts receivable quoting software, google workspace invoicing',
    ogTitle: 'Turn a 15-Minute RFQ Grind into a 5-Second Verification Pass',
    ogDescription:
      'Built for desk-bound AR and operations teams on Google Workspace. Match messy email RFQs to your catalog without leaving Gmail.',
  },
  hero: {
    eyebrow: 'SMASH for Google Workspace',
    h1: 'Turn a 15-Minute RFQ Grind into a 5-Second Verification Pass.',
    subheadline:
      'The Chrome sidebar extension built specifically for wholesale AR and operations desks. Match messy customer email requests to your catalog using text-description fuzzy-matching, and draft itemized quotes without leaving Gmail.',
    primaryCta: 'Add to Chrome — It’s Free',
    secondaryCta: 'Watch 90-Sec Demo',
  },
  trustBadges: ['Works with Gmail', 'Secured via OAuth', 'Xero integration', 'QuickBooks Online'],
  economicHook: {
    title: 'The Hard Math Behind Manual Quoting Data Entry',
    body: 'Industry benchmarks place the operational cost of processing a standard multi-line manual RFQ at $12–$15 in staff time per inquiry due to manual search and structural typos. SMASH collapses this document handling cost to under $2 by converting raw email text into structured drafts in under 60 seconds.',
  },
  comparison: {
    headers: ['Quoting Lifecycle Stage', 'The Manual Grind', 'The SMASH Way'],
    rows: [
      [
        'Reading RFQs',
        'Scrolling, reading, and deciphering multi-line line items in an inbox.',
        'Natively parsed right inside your Gmail sidebar window.',
      ],
      [
        'Catalog Matching',
        'Hunting down parts lists or manually looking up custom client sheets.',
        'Intelligent text-description fuzzy-matching (no strict SKUs required).',
      ],
      [
        'Human Verification',
        'High risk of manual structural typos and pricing updates.',
        'Ambiguous or low-confidence lines are flagged for quick adjustment.',
      ],
      [
        'Invoice/Quote Creation',
        'Manually re-typing data fields line-by-line into cloud software.',
        'Pushes completed itemized drafts directly via secure OAuth tiers.',
      ],
    ],
  },
  features: [
    {
      title: 'Description Fuzzy-Matching',
      body: 'Stop worrying about rigid part numbers or exact SKUs. SMASH parses incoming text flows and matches items directly to your uploaded price sheets based on item descriptions.',
    },
    {
      title: 'Human-in-the-Loop Safeguards',
      body: 'You retain 100% control. The sidebar automatically flags low-confidence or ambiguous line items for human verification, turning data entry into a fast verification pass.',
    },
    {
      title: 'Native Cloud Accounting Sync',
      body: 'Drafts are built in real-time and pushed straight to your integrated Xero or QuickBooks Online account via secure OAuth connections, eliminating the copy-paste routine.',
    },
  ],
  demoVideo: {
    id: 'S3O2qjwfDiw',
    title: 'SMASH — QuickBooks estimates from Gmail (90-second workflow)',
    description: 'B2B desk workflow: parse an RFQ email, verify line items, push to cloud accounting.',
    uploadDate: '2026-01-15',
  },
  footerCta: {
    headline: 'Clear out your daily inbox backlog before lunch.',
    subheadline:
      'Join the independent plumbing, electrical, HVAC, and hardware suppliers cutting quoting data entry by 80%.',
    primaryCta: 'Install Chrome Extension',
    subtext: 'Requires Google Workspace (Gmail) and Xero or QuickBooks Online',
  },
  faqs: [
    {
      q: 'Is SMASH built for Accounts Payable teams?',
      a: 'No. SMASH is designed for Accounts Receivable, billing administrators, and operations coordinators who send outgoing quotes and invoices from Gmail — not supplier bill capture.',
    },
    {
      q: 'Do customers need exact SKUs in their emails?',
      a: 'No. SMASH uses description fuzzy-matching against your uploaded price sheets and catalog. Messy plain-text RFQs are expected.',
    },
    {
      q: 'What happens when SMASH is unsure about a line?',
      a: 'Low-confidence matches are flagged in the sidebar for a quick human verification pass before you sync or send — you stay in control of pricing.',
    },
    {
      q: 'Which accounting platforms are supported?',
      a: 'Xero and QuickBooks Online via secure OAuth. Completed drafts push to your connected organisation without retyping fields.',
    },
    {
      q: 'Does this work on desktop Chrome only?',
      a: 'Yes. The extension is built for desk-bound teams running Gmail in Google Chrome on desktop or laptop.',
    },
  ],
  breadcrumbs: [
    { name: 'Home', url: 'https://smashinvoices.com/' },
    { name: 'B2B Gmail Quoting', url: 'https://smashinvoices.com/b2b-gmail-quoting' },
  ],
} as const;
