# Blog SEO Fix Documentation

## Problem
Google Search Console was reporting 5xx server errors when crawling blog post URLs like:
- `https://smashinvoices.com/blog/voice-to-crm-ai-learns-customers`

This was because the site is a Single Page Application (SPA) that requires JavaScript to render content, but Google's crawler needs server-rendered HTML for proper indexing.

## Solution Implemented

### 1. Pre-rendering System
Created a pre-rendering script (`scripts/prerender-blog.ts`) that:
- Fetches all published blog posts from Supabase
- Generates static HTML files for each blog post at build time
- Places them in `dist/blog/[slug]/index.html`
- Includes proper SEO meta tags, structured data, and Open Graph tags
- Provides a fallback for non-JavaScript browsers

### 2. Build Process Updates
Modified `package.json` to run pre-rendering automatically:
```json
"build": "vite build && npm run prerender && npm run sitemap"
```

### 3. Hosting Configuration
Created configuration files for common hosting platforms:
- `public/_redirects` - For Netlify
- `public/vercel.json` - For Vercel

These ensure the pre-rendered HTML files are served correctly.

### 4. Sitemap Generation
Updated `scripts/generate-sitemap.ts` to:
- Use correct base URL (`https://smashinvoices.com`)
- Include all blog posts
- Generate sitemap at build time

### 5. Edge Function (Backup)
Deployed a Supabase Edge Function `render-blog-post` that can dynamically serve blog post HTML if needed.

## Files Created/Modified

### New Files:
- `scripts/prerender-blog.ts` - Pre-rendering script
- `public/_redirects` - Netlify redirects
- `public/vercel.json` - Vercel configuration
- `supabase/functions/render-blog-post/index.ts` - Edge function

### Modified Files:
- `package.json` - Added build scripts and dependencies
- `scripts/generate-sitemap.ts` - Fixed base URL and env loading
- `src/pages/landing-page.tsx` - Added "Built in Byron Bay, Australia" to footer
- `src/components/dual-phone-section.tsx` - Fixed z-index for overlapping sections

## How It Works

1. **Build Time**: When you run `npm run build`:
   - Vite builds the React app
   - Pre-rendering script generates static HTML for all blog posts
   - Sitemap is updated with all URLs

2. **Crawl Time**: When Google crawls a blog post URL:
   - Server serves the pre-rendered HTML file
   - Google sees all content, meta tags, and structured data
   - No JavaScript execution required

3. **User Visit**: When a real user visits:
   - Pre-rendered HTML loads instantly (good for SEO and performance)
   - React app hydrates and takes over
   - Full SPA functionality works normally

## Testing

After deploying, you can test:

1. **View Source**: Right-click on a blog post and "View Page Source"
   - You should see full HTML content, not just `<div id="root"></div>`

2. **Google Search Console**:
   - Use URL Inspection tool
   - Should show "URL is available to Google"
   - No more 5xx errors

3. **Lighthouse SEO Audit**:
   - Should score 100 on SEO
   - All meta tags present

## Next Steps

1. Deploy the updated build to your hosting provider
2. Wait 24-48 hours for Google to re-crawl
3. Check Google Search Console for indexing status
4. Submit sitemap to Google Search Console if not already done

## Dependencies Added

- `tsx` - TypeScript execution for build scripts
- `@types/node` - TypeScript definitions for Node.js

## Notes

- All 28 blog posts are now pre-rendered
- Sitemap includes all blog posts
- robots.txt is already properly configured
- Meta tags and structured data are included in pre-rendered HTML
