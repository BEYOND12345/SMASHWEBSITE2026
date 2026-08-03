import type { Context } from '@netlify/edge-functions';

/** Crawlers get static HTML (real titles). Humans get the React SPA. */
const BOT_UA =
  /googlebot|google-inspectiontool|bingbot|yandex|duckduckbot|baiduspider|facebookexternalhit|twitterbot|linkedinbot|slackbot|applebot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|bytespider|bot|crawl|spider|preview/i;

export default async (request: Request, context: Context) => {
  const ua = request.headers.get('user-agent') ?? '';
  const url = new URL(request.url);
  // /vs-invoice-simple or /alternatives (strip trailing slash)
  const pathname = url.pathname.replace(/\/$/, '') || '/';
  const target = BOT_UA.test(ua) ? `${pathname}/index.html` : '/index.html';
  return context.rewrite(new URL(target, request.url));
};
