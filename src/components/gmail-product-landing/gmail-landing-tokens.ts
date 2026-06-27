/** Gmail desktop product shots — iframe scale matches iOS phone pattern. */

export const GMAIL_DESKTOP_LOGICAL = {
  width: 1280,
  height: 800,
  radius: 16,
} as const;

/** Logical canvas per screen — from smash_landing_screens/README.txt */
export const GMAIL_DESKTOP_LOGICAL_BY_SCREEN: Record<
  GmailDesktopScreenId,
  { width: number; height: number }
> = {
  hero: { width: 1600, height: 900 },
  'step-request': { width: 1400, height: 900 },
  'step-matching': { width: 1400, height: 900 },
  'step-done': { width: 1400, height: 900 },
  'sku-match': { width: 1200, height: 700 },
  'inbox-toolbar': { width: 1200, height: 600 },
};

/** Display widths for scaled iframes on the landing page. */
export const GMAIL_DESKTOP_DISPLAY = {
  hero: { desktop: 680, tablet: 560, mobile: 320 },
  step: { desktop: 380, tablet: 300, mobile: 280 },
  detail: { desktop: 440, tablet: 360, mobile: 300 },
} as const;

export type GmailDesktopScreenId =
  | 'hero'
  | 'step-request'
  | 'step-matching'
  | 'step-done'
  | 'sku-match'
  | 'inbox-toolbar';

/** Full-page story compositions — 1600×1000, headline + product + callout baked in. */
export const GMAIL_STORY_FRAME_LOGICAL = {
  width: 1600,
  height: 1000,
  radius: 20,
} as const;

export const GMAIL_STORY_FRAME_DISPLAY = {
  desktop: 960,
  tablet: 720,
  mobile: 340,
} as const;

export type GmailStoryFrameId =
  | 'a1-request-lands'
  | 'a2-reads-prices'
  | 'a3-quote-done'
  | 'b1-request-arrives'
  | 'b2-sku-match'
  | 'b3-quote-back';

/** Crop to the Gmail window only — strips navy canvas, headline, and embedded callout. */
export type GmailStoryWindowCrop = {
  x: number;
  y: number;
  width: number;
  /** Actual white-window content height for this frame (clipped so navy never shows). */
  windowHeight: number;
};

/**
 * Uniform card region height (logical px). Every story card is sized to this so all
 * cards share the exact same width AND height. Frames whose window is shorter than this
 * are top-aligned and padded with white below — no navy, no cut content.
 */
export const GMAIL_STORY_CARD_HEIGHT = 520;

/**
 * Crop into each 1600×1000 story frame: the full Gmail window, email + SMASH sidebar
 * shown 50/50 side by side, scaled ~1:1 so the UI is legible.
 * Window: right:70, width:750 (→ x 780–1530), top:128; email and sidebar are 50% each.
 */
export const GMAIL_STORY_WINDOW_CROP: Record<GmailStoryFrameId, GmailStoryWindowCrop> = {
  'a1-request-lands': { x: 780, y: 128, width: 750, windowHeight: 520 },
  'a2-reads-prices': { x: 780, y: 128, width: 750, windowHeight: 520 },
  'a3-quote-done': { x: 780, y: 128, width: 750, windowHeight: 520 },
  'b1-request-arrives': { x: 780, y: 128, width: 750, windowHeight: 520 },
  'b2-sku-match': { x: 780, y: 128, width: 750, windowHeight: 520 },
  'b3-quote-back': { x: 780, y: 128, width: 750, windowHeight: 520 },
};

/** Card width (px) below which the tighter mobile crop is used. */
export const GMAIL_STORY_MOBILE_CROP_MAX_WIDTH = 480;

/**
 * Phone crop — zooms into the SMASH sidebar (the product doing the work) plus a thin
 * email edge, so the UI stays legible at ~360px wide instead of shrinking the whole
 * email+sidebar split. Window right edge sits at x 1530; sidebar starts ≈1155.
 */
export const GMAIL_STORY_WINDOW_CROP_MOBILE: Record<GmailStoryFrameId, GmailStoryWindowCrop> = {
  'a1-request-lands': { x: 980, y: 128, width: 550, windowHeight: 520 },
  'a2-reads-prices': { x: 980, y: 128, width: 550, windowHeight: 520 },
  'a3-quote-done': { x: 980, y: 128, width: 550, windowHeight: 520 },
  'b1-request-arrives': { x: 980, y: 128, width: 550, windowHeight: 520 },
  'b2-sku-match': { x: 980, y: 128, width: 550, windowHeight: 520 },
  'b3-quote-back': { x: 980, y: 128, width: 550, windowHeight: 520 },
};
