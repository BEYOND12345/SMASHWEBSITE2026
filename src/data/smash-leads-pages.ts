import { SMASH_LEADS_HUB_PATH } from './smash-leads-constants.ts';

export type SmashLeadsPageId = 'hub' | 'streak-alternative' | 'free' | 'outreach';

export interface SmashLeadsBreadcrumb {
  name: string;
  url: string;
}

export interface SmashLeadsFeatureBlock {
  title: string;
  body: string;
}

export interface SmashLeadsMatrixRow {
  feature: string;
  legacy: string;
  smash: string;
}

export interface SmashLeadsUseCase {
  title: string;
  body: string;
}

export interface SmashLeadsHubSpokeLink {
  label: string;
  href: string;
  description: string;
}

export interface SmashLeadsPageConfig {
  id: SmashLeadsPageId;
  path: string;
  breadcrumbs: SmashLeadsBreadcrumb[];
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    eyebrow?: string;
    h1Line1: string;
    h1Accent?: string;
    subcopy: string;
    ctaLabel: string;
    ctaMicrocopy: string;
    ctaMedium: string;
  };
  featureBlocks?: {
    sectionTitle: string;
    blocks: SmashLeadsFeatureBlock[];
  };
  pricingComparison?: {
    title: string;
    body: string;
    expensiveLabel: string;
    expensivePoints: string;
    smashLabel: string;
    smashPoints: string;
  };
  comparisonMatrix?: {
    title: string;
    rows: SmashLeadsMatrixRow[];
  };
  narrativeBlock?: {
    title: string;
    body: string;
  };
  bulletHighlights?: {
    title: string;
    intro: string;
    bullets: string[];
  };
  useCases?: {
    title: string;
    cases: SmashLeadsUseCase[];
  };
  /** Inline spiderweb link (spokes → hub). */
  spiderweb?: {
    before: string;
    linkText: string;
    after?: string;
  };
  /** Hub footer block linking to spokes. */
  hubSpokeBlock?: {
    title: string;
    links: SmashLeadsHubSpokeLink[];
  };
  faqs: { q: string; a: string }[];
  finalCta: { headline: string; subcopy: string; ctaLabel: string; ctaMedium: string };
  relatedPages: { label: string; href: string }[];
}

const SITE = 'https://smashinvoices.com';
const hub = `${SITE}${SMASH_LEADS_HUB_PATH}`;

export const smashLeadsPages: Record<SmashLeadsPageId, SmashLeadsPageConfig> = {
  hub: {
    id: 'hub',
    path: SMASH_LEADS_HUB_PATH,
    breadcrumbs: [
      { name: 'Home', url: `${SITE}/` },
      { name: 'Smash Leads — Gmail CRM', url: hub },
    ],
    seo: {
      title: 'Best AI Gmail CRM for Chrome & Google Workspace | Smash Leads',
      description:
        'Transform your inbox into a sales pipeline with Smash Leads. Auto-extract leads with AI, track opens, and close deals natively inside Gmail for just $10/mo.',
      keywords:
        'gmail crm, best crm for gmail, crm gmail integration, gmail crm chrome extension, ai gmail crm, smash leads',
      ogTitle: 'Smash Leads — AI Gmail CRM for Chrome',
      ogDescription:
        'AI lead extraction, visual pipeline, and real-time email tracking inside Gmail. $10/month flat.',
    },
    hero: {
      eyebrow: 'Smash Leads × Gmail',
      h1Line1: 'The AI-Powered Gmail CRM',
      h1Accent: 'That Fills Itself Out.',
      subcopy:
        'Stop jumping between browser tabs. Smash Leads overlays a beautiful, lightning-fast visual sales pipeline directly inside your Gmail account. Let AI extract lead contact details, track client opens, and advance deals on autopilot—for a flat $10/month.',
      ctaLabel: "Add to Gmail — It's Free",
      ctaMicrocopy: 'Installs in 10 seconds • No credit card needed • Cancel anytime',
      ctaMedium: 'hero_button',
    },
    featureBlocks: {
      sectionTitle: 'Everything you need to close more deals from your inbox.',
      blocks: [
        {
          title: 'Instant AI Lead Extraction',
          body: "When an inbound pitch or fresh lead lands in your inbox, our native AI goes to work. It automatically pulls out the prospect's name, phone number, company profile, and intent score. Click once, and they are entered directly into your pipeline. No manual data entry required.",
        },
        {
          title: 'Visual Drag-and-Drop Pipeline Rows',
          body: 'Keep track of every relationship with a lightweight Kanban pipeline built into your existing Gmail interface. Move opportunities seamlessly from Inbound to Proposal Sent to Closed Won without ever clicking away from an active thread.',
        },
        {
          title: 'Pixel-Perfect Real-Time Email Tracking',
          body: "Stop wondering if your pricing pitch was viewed. Get immediate desktop notifications the second a contact opens your email or clicks an internal project link. Follow up right when you're at the top of their mind.",
        },
      ],
    },
    pricingComparison: {
      title: 'Same powerful pipeline workflow. 80% less expensive.',
      body: "We don't think managing leads from your inbox should cost as much as an enterprise corporate software suite. Smash Leads provides modern cloud-native architecture without passing high administrative costs down to you.",
      expensiveLabel: 'The Overpriced Suite ($49/user/month)',
      expensivePoints: 'Clunky browser lag, bloated menu bars, and enterprise pricing walls to share pipelines with your team.',
      smashLabel: 'Smash Leads AI CRM ($10/month)',
      smashPoints:
        'Ultra-lightweight Chrome code, native AI data extraction, and a simple flat fee that covers your workspace needs.',
    },
    hubSpokeBlock: {
      title: 'Explore Smash Leads by use case',
      links: [
        {
          label: 'Streak & Copper alternative',
          href: '/smash-leads/alternatives/streak-crm',
          description: 'Why lean teams are switching from $49/mo legacy inbox CRMs.',
        },
        {
          label: 'Free Gmail CRM',
          href: '/smash-leads/free-gmail-crm',
          description: 'A fully functional pipeline on $0 — upgrade to AI when you are ready.',
        },
        {
          label: 'Cold email outreach CRM',
          href: '/smash-leads/solutions/cold-email-outreach',
          description: 'Track opens, warm replies, and outbound sequences inside Gmail.',
        },
      ],
    },
    faqs: [
      {
        q: 'What is Smash Leads?',
        a: 'Smash Leads is an AI Gmail CRM Chrome extension. It adds a visual sales pipeline, AI lead extraction, and real-time email tracking directly inside Gmail and Google Workspace.',
      },
      {
        q: 'How much does Smash Leads cost?',
        a: 'The core CRM is free to install. Advanced AI automation and background lead enrichment are available on a flat $10/month plan — no per-seat enterprise markup.',
      },
      {
        q: 'Does Smash Leads work with Google Workspace?',
        a: 'Yes. Smash Leads runs in Chrome on desktop and laptop Gmail, including Google Workspace business accounts.',
      },
      {
        q: 'How is this different from SMASH Invoices?',
        a: 'SMASH Invoices is built for tradies and suppliers who quote and invoice from Gmail. Smash Leads is a separate product focused on sales pipelines, lead tracking, and outreach — ideal for agencies, founders, and SDR teams.',
      },
    ],
    finalCta: {
      headline: 'Your inbox is already your sales desk.',
      subcopy: 'Install Smash Leads and turn the next inbound lead into a tracked pipeline card in under a minute.',
      ctaLabel: "Add to Gmail — It's Free",
      ctaMedium: 'footer_cta',
    },
    relatedPages: [
      { label: 'Streak CRM alternative', href: '/smash-leads/alternatives/streak-crm' },
      { label: 'Free Gmail CRM', href: '/smash-leads/free-gmail-crm' },
      { label: 'Cold email outreach CRM', href: '/smash-leads/solutions/cold-email-outreach' },
      { label: 'SMASH Invoices (quoting)', href: '/chrome-extension' },
    ],
  },

  'streak-alternative': {
    id: 'streak-alternative',
    path: '/smash-leads/alternatives/streak-crm',
    breadcrumbs: [
      { name: 'Home', url: `${SITE}/` },
      { name: 'Smash Leads', url: hub },
      { name: 'Streak CRM Alternative', url: `${SITE}/smash-leads/alternatives/streak-crm` },
    ],
    seo: {
      title: 'Best Streak CRM Chrome Alternative ($10/mo) | Smash Leads',
      description:
        'Sick of paying $49/mo for legacy inbox trackers? Discover why fast-moving teams are switching from Streak and Copper to Smash Leads AI CRM.',
      keywords:
        'streak crm chrome alternative, copper crm email automation alternative, best crm for gmail alternative, streak alternative, copper alternative gmail',
      ogTitle: 'Streak CRM Alternative — Smash Leads ($10/mo)',
      ogDescription: 'Keep Gmail. Drop the $49/user invoice. Modern AI pipeline tracking built for speed.',
    },
    hero: {
      eyebrow: 'Migrate from Streak or Copper',
      h1Line1: 'Looking for a Modern, Affordable',
      h1Accent: 'Alternative to Streak CRM?',
      subcopy:
        'Keep the Gmail workspace layout you love, drop the steep $49/user monthly invoice. Upgrade your pipeline tracking to a native, modern AI app built specifically to bypass browser lag and high software bills.',
      ctaLabel: 'Switch to Smash Leads for $10/mo',
      ctaMicrocopy: 'Free install • Flat $10/mo for AI • Cancel anytime',
      ctaMedium: 'streak_hero',
    },
    comparisonMatrix: {
      title: 'Why solo founders and lean agencies are migrating their pipelines',
      rows: [
        { feature: 'Pricing plan', legacy: '$49 to $69 / user / mo', smash: '$10 / mo flat fee' },
        { feature: 'Lead organization', legacy: 'Manual entry or basic rules', smash: 'Automated AI context scraping' },
        { feature: 'Inbox performance', legacy: 'Known to lag large Google accounts', smash: 'Lightning-fast native overlay' },
        { feature: 'Visual trackers', legacy: 'Included', smash: 'Included' },
      ],
    },
    narrativeBlock: {
      title: 'Built for the AI era, not the last decade.',
      body: 'Legacy tools like Streak CRM require you to manage rows like an excel spreadsheet crammed inside your sidebar. Smash Leads uses context-aware AI parsing. It understands your email conversations, keeps your pipelines clean dynamically, and updates your context notes automatically—saving you hours of mind-numbing copy-paste work every week.',
    },
    spiderweb: {
      before: 'Looking for a complete workflow? ',
      linkText: 'Discover how our main Gmail CRM',
      after: ' balances pipelines across whole workspaces.',
    },
    faqs: [
      {
        q: 'Can I import my Streak pipeline?',
        a: 'You can rebuild pipelines quickly with AI lead extraction from open threads. Contact support if you need help mapping stages from a Streak export.',
      },
      {
        q: 'Is Smash Leads faster than Streak in Gmail?',
        a: 'Smash Leads is built as a lightweight native overlay—designed to avoid the lag many teams report on large Gmail accounts with legacy extensions.',
      },
      {
        q: 'Does Copper-style email automation exist?',
        a: 'Yes. Track opens, log replies, and move deals on positive responses—with AI categorization on the $10/mo plan.',
      },
    ],
    finalCta: {
      headline: 'Same inbox. Smarter pipeline. One flat bill.',
      subcopy: 'Install Smash Leads and stop renting enterprise CRM seats for basic Gmail workflows.',
      ctaLabel: 'Switch to Smash Leads for $10/mo',
      ctaMedium: 'streak_footer',
    },
    relatedPages: [
      { label: 'Gmail CRM hub', href: SMASH_LEADS_HUB_PATH },
      { label: 'Free Gmail CRM', href: '/smash-leads/free-gmail-crm' },
      { label: 'Cold outreach CRM', href: '/smash-leads/solutions/cold-email-outreach' },
    ],
  },

  free: {
    id: 'free',
    path: '/smash-leads/free-gmail-crm',
    breadcrumbs: [
      { name: 'Home', url: `${SITE}/` },
      { name: 'Smash Leads', url: hub },
      { name: 'Free Gmail CRM', url: `${SITE}/smash-leads/free-gmail-crm` },
    ],
    seo: {
      title: '100% Free CRM for Gmail & Inbox Pipeline Tracker | Smash Leads',
      description:
        'Looking for a free email CRM? Smash Leads lets you organize your sales pipelines, track unlimited emails, and capture inbound leads inside Gmail for free.',
      keywords:
        'free crm for gmail, free email crm, best free gmail crm, free gmail pipeline, free inbox crm',
      ogTitle: 'Free CRM for Gmail | Smash Leads',
      ogDescription: 'Visual sales pipeline in Gmail for $0. Upgrade to AI automation for $10/mo when you need it.',
    },
    hero: {
      eyebrow: 'Free tier',
      h1Line1: 'A Free CRM for Gmail',
      h1Accent: "That Doesn't Cripple Your Features.",
      subcopy:
        'Stop using messy spreadsheets to track your clients. Get a clean, professional, visual sales pipeline natively in your inbox for $0. Scale your operations safely and only upgrade when you need advanced AI automation features.',
      ctaLabel: 'Install Free Gmail CRM',
      ctaMicrocopy: 'No credit card • Unlimited pipeline stages on free • AI from $10/mo',
      ctaMedium: 'free_hero',
    },
    bulletHighlights: {
      title: 'Everything you need to step away from spreadsheet chaos.',
      intro:
        'Most "free email CRMs" lock your pipeline view, limit your total contacts to 50 people, or blur out tracking alerts unless you upgrade immediately. Smash Leads gives you a fully functional sales tracker out of the box.',
      bullets: [
        'Unlimited inbound lead pipelines: create and customize deal steps without limits.',
        'Seamless Google Workspace integration: sits comfortably right inside your native browser window.',
        'Upgrade to AI for only $10/mo: access background data scraping and smart automated updates for less than a few coffees.',
      ],
    },
    spiderweb: {
      before: 'Looking for a complete workflow? ',
      linkText: 'Discover how our main Gmail CRM',
      after: ' balances pipelines across whole workspaces.',
    },
    faqs: [
      {
        q: 'Is Smash Leads really free?',
        a: 'Yes. Install and use the visual pipeline and core CRM features at no cost. AI lead extraction and advanced automation require the $10/month upgrade.',
      },
      {
        q: 'Are contacts limited on the free plan?',
        a: 'Unlike many freemium CRMs, we do not cap you at 50 contacts on the free tier for basic pipeline tracking.',
      },
      {
        q: 'When should I upgrade?',
        a: 'Upgrade when you want AI to scrape lead details from emails, auto-update context notes, and run smarter follow-up workflows.',
      },
    ],
    finalCta: {
      headline: 'Spreadsheets are not a CRM.',
      subcopy: 'Install the free Gmail pipeline today. Add AI when your volume demands it.',
      ctaLabel: 'Install Free Gmail CRM',
      ctaMedium: 'free_footer',
    },
    relatedPages: [
      { label: 'Gmail CRM hub', href: SMASH_LEADS_HUB_PATH },
      { label: 'Streak alternative', href: '/smash-leads/alternatives/streak-crm' },
      { label: 'Outreach automation', href: '/smash-leads/solutions/cold-email-outreach' },
    ],
  },

  outreach: {
    id: 'outreach',
    path: '/smash-leads/solutions/cold-email-outreach',
    breadcrumbs: [
      { name: 'Home', url: `${SITE}/` },
      { name: 'Smash Leads', url: hub },
      { name: 'Cold Email Outreach', url: `${SITE}/smash-leads/solutions/cold-email-outreach` },
    ],
    seo: {
      title: 'Cold Email Outreach CRM & Automation for Gmail | Smash Leads',
      description:
        'Streamline your cold email campaign management. Track opens, automate lead statuses, and map follow-up sequences within Gmail using Smash Leads AI.',
      keywords:
        'cold email outreach crm, crm email automation, crm email campaign management, gmail outreach crm, sales development gmail',
      ogTitle: 'Cold Email Outreach CRM for Gmail | Smash Leads',
      ogDescription:
        'Track opens, warm replies, and pipeline stages for outbound — all inside Gmail.',
    },
    hero: {
      eyebrow: 'Outbound & SDR teams',
      h1Line1: 'Close More Cold Outreach Leads',
      h1Accent: 'With Zero Admin Overhead.',
      subcopy:
        'Built specifically for sales development reps, agency growth leads, and founders running active outbound pipelines. Track leads, log responses, and track click metrics seamlessly where your outreach lives.',
      ctaLabel: 'Supercharge Outbound for $10/mo',
      ctaMicrocopy: 'Free install • Open tracking included • AI reply routing on Pro',
      ctaMedium: 'outreach_hero',
    },
    useCases: {
      title: 'Optimized campaign management for fast growth teams',
      cases: [
        {
          title: 'High-volume inbox tracking management',
          body: 'When sending personalized outbound campaigns, timing is everything. Know exactly who is engaging with your offer. With lightning-quick interaction logs and instant browser tracking tokens, you can segment warm prospects from non-responders in real-time.',
        },
        {
          title: 'AI categorization for positive replies',
          body: 'When an outbound lead responds positively to a cold script, our integrated engine quickly logs their specific business profile details. It moves them automatically from Outreach Cold to Warm Lead Intercepted, instantly scheduling a notification so you can lock down an intake call.',
        },
      ],
    },
    spiderweb: {
      before: 'Need the full product picture? ',
      linkText: 'See our main Gmail CRM hub',
      after: ' for AI extraction, Kanban pipelines, and workspace-wide tracking.',
    },
    faqs: [
      {
        q: 'Can Smash Leads replace a dedicated cold email sequencer?',
        a: 'Smash Leads focuses on CRM, open tracking, and reply intelligence inside Gmail. Pair it with your existing sending tool; we handle pipeline state and warm-lead alerts.',
      },
      {
        q: 'Do you track link clicks?',
        a: 'Yes. See when prospects open emails and click project links so you can follow up while you are top of mind.',
      },
      {
        q: 'How does AI handle positive replies?',
        a: 'On the $10/mo plan, AI parses reply intent, enriches the contact profile, and can move the deal stage automatically with a desktop notification.',
      },
    ],
    finalCta: {
      headline: 'Outbound lives in Gmail. Your CRM should too.',
      subcopy: 'Install Smash Leads and stop losing warm replies in a messy inbox.',
      ctaLabel: 'Supercharge Outbound for $10/mo',
      ctaMedium: 'outreach_footer',
    },
    relatedPages: [
      { label: 'Gmail CRM hub', href: SMASH_LEADS_HUB_PATH },
      { label: 'Free Gmail CRM', href: '/smash-leads/free-gmail-crm' },
      { label: 'Streak alternative', href: '/smash-leads/alternatives/streak-crm' },
    ],
  },
};

export function smashLeadsCanonical(id: SmashLeadsPageId): string {
  return `${SITE}${smashLeadsPages[id].path}`;
}
