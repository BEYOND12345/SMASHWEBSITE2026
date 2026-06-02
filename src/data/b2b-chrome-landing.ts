export const B2B_CHROME_LANDING = {
  path: '/b2b-gmail-quoting',
  canonical: 'https://smashinvoices.com/b2b-gmail-quoting',
  productName: 'SMASH Quotes & RFQs for Gmail',
  chromeStoreUrl:
    'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel?utm_source=b2b-outreach&utm_medium=landing&utm_campaign=b2b-gmail-quoting',
  seo: {
    title: 'SMASH Quotes & RFQs for Gmail — B2B Chrome Extension | AR Teams',
    description:
      'Chrome sidebar for B2B distributors on Google Workspace. Parse multi-line RFQs inside Gmail, fuzzy-match descriptions to your catalog, run a fast verification pass, and push itemized quotes to Xero or QuickBooks Online via OAuth.',
    keywords:
      'b2b gmail quoting, wholesale rfq chrome extension, quote draft gmail, fuzzy match line items, xero quickbooks gmail sidebar, accounts receivable quoting, google workspace quoting software',
    ogTitle: 'Turn a 15-Minute RFQ Grind into a 5-Second Verification Pass',
    ogDescription:
      'SMASH Quotes & RFQs for Gmail — built for B2B distributors running Google Workspace, Xero, and QuickBooks Online. Messy email in. Verified quote draft out.',
  },
  hero: {
    eyebrow: 'SMASH Quotes & RFQs for Gmail',
    h1: 'Turn a 15-Minute RFQ Grind into a 5-Second Verification Pass.',
    subheadline:
      'The Chrome sidebar built for B2B distributors and wholesale AR desks. Match messy customer RFQs to your catalog with description fuzzy-matching, turn raw email into a structured draft in under 60 seconds, and verify flagged lines without leaving Gmail.',
    primaryCta: 'Add to Chrome — It’s Free',
    secondaryCta: 'Watch 90-Sec Demo',
  },
  trustBadges: ['Works with Gmail', 'Secured via OAuth', 'Xero Verified', 'QuickBooks Certified'],
  economicHook: {
    title: 'The Hard Math Behind Manual Quoting Data Entry',
    body: 'Industry benchmarks place the operational cost of processing a standard multi-line manual RFQ at $12–$15 in staff time per inquiry due to manual search and structural typos. SMASH collapses that to under $2 — raw email to structured draft in under 60 seconds, then a quick verification pass instead of line-by-line retyping.',
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
        'Ambiguous or low-confidence lines are flagged for a fast verification pass.',
      ],
      [
        'Invoice/Quote Creation',
        'Manually re-typing data fields line-by-line into cloud software.',
        'Pushes completed itemized quote drafts directly via secure OAuth.',
      ],
    ],
  },
  features: [
    {
      title: 'Description Fuzzy-Matching',
      body: 'Stop worrying about rigid part numbers or exact SKUs. SMASH parses incoming RFQ text and matches items to your uploaded price sheets based on descriptions — not perfect part codes.',
    },
    {
      title: 'Human-in-the-Loop Safeguards',
      body: 'You retain 100% control. Low-confidence or ambiguous lines are flagged automatically, so your team runs a verification pass — not a retyping marathon.',
    },
    {
      title: 'Native Cloud Accounting Sync',
      body: 'Quote drafts build in real-time and push straight to Xero or QuickBooks Online via secure OAuth. No copy-paste into a second tab.',
    },
  ],
  demoVideo: {
    id: 'S3O2qjwfDiw',
    title: 'SMASH — QuickBooks estimates from Gmail (90-second workflow)',
    headline: 'See the verification pass in Gmail.',
    subheadline:
      'Same workflow for Xero or QuickBooks Online — this walkthrough uses QuickBooks. Watch a multi-line RFQ become a verified estimate draft without retyping.',
    uploadDate: '2026-01-15',
  },
  footerCta: {
    headline: 'Clear out your daily inbox backlog before lunch.',
    subheadline:
      'Join B2B distributors and wholesale teams on Gmail, Xero, and QuickBooks Online — cutting quoting data entry by 80%.',
    primaryCta: 'Install Chrome Extension',
    subtext: 'Requires Google Workspace (Gmail) and Xero or QuickBooks Online',
  },
  faqs: [
    {
      q: 'Is SMASH built for Accounts Payable teams?',
      a: 'No. SMASH Quotes & RFQs is for Accounts Receivable, billing administrators, and operations coordinators who send outgoing quotes from Gmail — not supplier bill capture.',
    },
    {
      q: 'Do customers need exact SKUs in their RFQ emails?',
      a: 'No. SMASH uses description fuzzy-matching against your uploaded price sheets and catalog. Messy plain-text RFQs are expected.',
    },
    {
      q: 'What happens when SMASH is unsure about a line?',
      a: 'Low-confidence matches are flagged in the sidebar for a quick verification pass before you sync or send — you stay in control of pricing.',
    },
    {
      q: 'Which accounting platforms are supported?',
      a: 'Xero and QuickBooks Online via secure OAuth. Completed quote drafts push to your connected organisation without retyping fields.',
    },
    {
      q: 'Does this work on desktop Chrome only?',
      a: 'Yes. The extension is built for desk-bound teams running Gmail in Google Chrome on desktop or laptop.',
    },
  ],
  breadcrumbs: [
    { name: 'Home', url: 'https://smashinvoices.com/' },
    { name: 'Quotes & RFQs', url: 'https://smashinvoices.com/b2b-gmail-quoting' },
  ],
} as const;
