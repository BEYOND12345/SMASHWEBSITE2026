import type { Context } from '@netlify/edge-functions';

/** Crawlers get static HTML (title, canonical, FAQ). Humans get the React landing. */
const BOT_UA =
  /googlebot|google-inspectiontool|bingbot|yandex|duckduckbot|baiduspider|facebookexternalhit|twitterbot|linkedinbot|slackbot|applebot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|bytespider|bot|crawl|spider|preview/i;

export default async (request: Request, context: Context) => {
  const ua = request.headers.get('user-agent') ?? '';
  const target = BOT_UA.test(ua)
    ? '/voice-invoicing/index.html'
    : '/index.html';
  return context.rewrite(new URL(target, request.url));
};
