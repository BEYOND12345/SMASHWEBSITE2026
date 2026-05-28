/**
 * Smash Leads marketing assets — swap placeholder SVGs for final PNG/GIF files
 * using the same paths (recommended filenames from SEO brief).
 */
export const smashLeadsMedia = {
  pipelineBoard: {
    src: '/smash-leads/placeholders/gmail-crm-pipeline-board.svg',
  },
  aiLeadExtraction: {
    src: '/smash-leads/placeholders/ai-lead-extraction-chrome-extension.svg',
  },
  emailOpenTracking: {
    src: '/smash-leads/placeholders/email-open-tracking-gmail.svg',
  },
} as const;

export type SmashLeadsMediaKey = keyof typeof smashLeadsMedia;

export interface SmashLeadsMediaItem {
  key: SmashLeadsMediaKey;
  alt: string;
  caption: string;
}

export const smashLeadsHubGallery: SmashLeadsMediaItem[] = [
  {
    key: 'pipelineBoard',
    alt: 'Smash Leads AI CRM kanban board overlay inside Gmail inbox tab',
    caption: 'Visual drag-and-drop pipeline — stays inside Gmail.',
  },
  {
    key: 'aiLeadExtraction',
    alt: 'Smash Leads AI extracting lead name, phone, and company from a Gmail thread',
    caption: 'Instant AI lead extraction — one click into your pipeline.',
  },
  {
    key: 'emailOpenTracking',
    alt: 'Real-time email open notification for a Gmail outreach thread in Smash Leads',
    caption: 'Pixel-perfect open tracking — follow up while you are top of mind.',
  },
];
