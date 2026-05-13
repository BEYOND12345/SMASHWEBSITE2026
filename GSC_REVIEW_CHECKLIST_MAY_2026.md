# GSC Review Checklist — Week of 18 May 2026

Run this check on or after Monday 18 May. Should take 15–20 minutes.

---

## 1. Coverage Report
**Where:** Index → Pages

- [ ] Total indexed pages — should be climbing toward 200+
- [ ] Check "Not indexed" reasons — look for "Crawled, not indexed" or "Discovered, not indexed" on the new blog posts
- [ ] Any new "Page with redirect" or "Soft 404" errors?
- [ ] Confirm these are indexed (search `site:smashinvoices.com/blog/cleaning` etc):
  - `/blog/cleaning-invoice-template-australia`
  - `/blog/plumbing-invoice-template-australia`
  - `/blog/electrician-invoice-template-australia`
  - `/chrome-extension`
  - `/for-ndis-support-workers`

---

## 2. Core Web Vitals
**Where:** Experience → Core Web Vitals

- [ ] Mobile "Good URLs" count — should be improving since code splitting shipped ~28 Apr
- [ ] Any URLs still in "Poor" or "Needs improvement"?
- [ ] Desktop status (should already be green)

---

## 3. Performance → Queries
**Where:** Search results → Last 28 days

Sort by **Impressions**, look for these new keyword clusters appearing:

- [ ] "cleaning invoice template australia" — any impressions?
- [ ] "plumber call out fee invoice" — position?
- [ ] "electrician invoice template australia" — impressions?
- [ ] "SMASH for Gmail" / "Gmail invoice extension" — any movement?
- [ ] "NDIS invoicing" / "NDIS support worker invoice" — impressions?
- [ ] Voice invoicing terms ("voice invoice app", "talk to invoice") — position trend

---

## 4. Performance → Pages
**Where:** Search results → Pages tab → Last 28 days

- [ ] Top 10 pages by clicks — any new entrants?
- [ ] `/voice-invoicing` — click trend up or flat?
- [ ] `/ai-invoicing` — impressions growing?
- [ ] Any segment pages (`/for-cleaners`, `/for-plumbers`) showing impressions yet?

---

## 5. Links Report
**Where:** Links (left sidebar)

- [ ] Total external links count — note the number for tracking
- [ ] Top linking domains — any new ones from Product Hunt / directories?
- [ ] Top linked pages — is `/chrome-extension` appearing yet?

---

## 6. Manual Indexing Requests (do this NOW if not done yet)
**Where:** URL Inspection → paste URL → Request Indexing

Priority URLs to submit manually:
1. `https://smashinvoices.com/chrome-extension`
2. `https://smashinvoices.com/blog/cleaning-invoice-template-australia`
3. `https://smashinvoices.com/blog/plumbing-invoice-template-australia`
4. `https://smashinvoices.com/blog/electrician-invoice-template-australia`
5. `https://smashinvoices.com/for-ndis-support-workers`
6. `https://smashinvoices.com/blog/handyman-invoice-template-australia`

---

## 7. Bring Back to Review
After running through the checklist, share:
- Screenshot of Coverage report (indexed count)
- Top 10 queries by impressions
- CWV mobile status

That's enough to plan the next sprint.
