/**
 * Inserts (or upserts) the 7 YouTube-anchored SEO blog posts into Supabase.
 * Run with: npx tsx scripts/seed-youtube-posts.ts
 *
 * Safe to re-run — uses upsert on the `slug` column so it won't duplicate.
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim().replace(/^["']|["']$/g, '');
        process.env[key] = value;
      }
    });
  }
}

loadEnv();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials. Check your .env file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';

const chromeCTA = `
<div style="margin:40px 0;padding:28px 32px;background:linear-gradient(135deg,rgba(217,249,157,0.12),rgba(217,249,157,0.04));border:1px solid rgba(217,249,157,0.3);border-radius:16px;text-align:center;">
  <p style="font-size:20px;font-weight:800;color:#fff;margin:0 0 8px;letter-spacing:-0.01em;">Ready to stop typing quotes?</p>
  <p style="color:rgba(255,255,255,0.65);margin:0 0 20px;font-size:15px;">Free to install. No credit card. Works inside Gmail in 2 minutes.</p>
  <a href="${CHROME_STORE_URL}" rel="nofollow" style="display:inline-block;background:#D9F99D;color:#0A0A0A;padding:12px 28px;border-radius:999px;font-weight:700;font-size:15px;text-decoration:none;">Add SMASH to Chrome — Free</a>
</div>
`;

const posts = [
  // ─── Article 1 ─────────────────────────────────────────────────────────────
  {
    slug: 'gmail-email-to-invoice-20-seconds',
    title: 'Turn a Gmail Email Into a Sent Invoice in 20 Seconds',
    meta_title: 'Turn a Gmail Email Into a Sent Invoice in 20 Seconds | SMASH',
    meta_description: 'See how SMASH reads a job request email in Gmail and builds a GST-ready invoice in under 20 seconds. No typing. No tab-switching. Syncs to Xero and QuickBooks.',
    excerpt: 'A job request lands in your inbox. You open SMASH, press one button, and the invoice is sent before you move to the next email. Here\'s the full demo.',
    primary_keyword: 'gmail invoice extension',
    secondary_keywords: [
      'voice to invoice chrome extension',
      'email to invoice automatically',
      'invoice from gmail',
      'xero quickbooks gmail sync',
      'tradie invoicing app',
    ],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T00:00:00.000Z',
    reading_time: 6,
    key_takeaways: [
      'SMASH reads your open Gmail email and extracts the job details automatically — no copy-pasting.',
      'Voice-to-invoice: describe the job out loud for 20 seconds and line items are priced from your catalog.',
      'Customer gets a secure approval and payment link. You see the read receipt the second they open it.',
      'One click syncs the completed invoice to Xero or QuickBooks — no double entry.',
      'Free to install. Works inside Gmail without switching tabs.',
    ],
    faq_data: [
      {
        question: 'Does SMASH work with any Gmail account?',
        answer: 'Yes. SMASH works with any personal or Google Workspace Gmail account. Once you install the Chrome extension, a SMASH button appears in your Gmail toolbar whenever you open an email.',
      },
      {
        question: 'Does my customer need to download anything?',
        answer: 'No. Your customer gets a clean payment portal link in their email. They tap it, view the itemised quote, approve it, and pay — all from their phone browser. Nothing to download.',
      },
      {
        question: 'How does SMASH know my prices?',
        answer: 'When you sign up, you upload one old invoice PDF or a CSV of your services. SMASH reads your rates, job types, and materials and builds your Pricing DNA. After that, every time you describe a job by voice, your words map straight to your numbers.',
      },
      {
        question: 'Does it work offline?',
        answer: 'SMASH needs a connection to process voice recordings and sync to Xero or QuickBooks. But your pricing catalog and customer history are cached locally, so you can check details even on a poor signal.',
      },
      {
        question: 'Is my customer\'s data safe?',
        answer: 'Yes. SMASH only reads the email thread you have open — it doesn\'t scan your entire inbox. Voice recordings are processed and deleted immediately after transcription. Customer data is encrypted at rest.',
      },
      {
        question: 'What if the AI gets a line item wrong?',
        answer: 'Everything is editable before you send. SMASH builds the draft and you review it. You can adjust quantities, prices, or add items before hitting send. It\'s a starting point, not a black box.',
      },
    ],
    content: `Getting a quote request in your Gmail inbox should feel like progress. Instead, it feels like a task. You've got to remember what you quoted last time, log into your accounting software, type out line items from memory, check the pricing, add GST, generate a PDF, attach it, write a covering reply — and do all of that when you're already tired from actually doing the work.

That's the exact problem SMASH was built to fix.

## Watch: Full Demo — Email to Invoice in Under 20 Seconds

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/uNL733tYTf0" title="Turn Emails Into Invoices in 20 Seconds | SMASH Chrome Extension" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

In this demo you'll see the complete SMASH workflow: a real job request email → a voice recording → a priced, GST-ready invoice → customer approval → Xero sync. Start to finish in under two minutes. Real jobs take closer to 20 seconds once you've got your pricing set up.

## The Old Way vs the SMASH Way

| Step | Manual (what most people do) | SMASH |
|---|---|---|
| Read the email | Open Gmail | Open Gmail |
| Build the quote | Switch to accounting software, type line items from memory | Press SMASH — it reads the email |
| Price the job | Look up your rate sheet or guess | Your Pricing DNA does it automatically |
| Add GST | Calculate manually | Done |
| Generate PDF | Export, save, re-upload | One click |
| Send to customer | Attach PDF, write covering email | Drop quote into Gmail reply — done |
| Get approval | Hope they reply | Customer taps a payment portal link |
| Update your books | Log into Xero/QuickBooks, enter again | One-click sync — no double entry |
| **Total time** | **15–25 minutes** | **Under 60 seconds** |

## How It Works — Step by Step

**0:15 — Reading the job request email**

A customer emails asking for a quote. You open it, press the SMASH button in your Gmail toolbar, and SMASH opens as a sidebar. It's already read the email — customer name, job description, materials mentioned. You don't type a word.

**0:45 — Recording the job by voice**

Prefer to speak? Press record and describe the job out loud the way you'd explain it to a mate: *"eight hours labour, replace the front door jamb, new exterior door, hinges, lock set, call-out fee, material pickup."* Press stop. Done.

**1:10 — How SMASH builds and prices the quote**

SMASH takes your description, matches it to your Pricing DNA (your uploaded rates and the 2,500-item materials catalog), and builds a fully itemised, GST-ready quote. Every line item is editable before you send.

**1:35 — Sending for customer approval**

Drop the quote into your Gmail reply in one click. Your customer gets a clean portal link — no attachments, no PDFs to download. They tap it, review the itemised breakdown, approve it, and pay. You get a read receipt the second they open it.

**1:50 — One-click sync to Xero and QuickBooks**

Once the job's done, press Export. The invoice goes straight to your Xero or QuickBooks account — customer name, line items, totals, GST. Your bookkeeper sees it without you lifting another finger.

## What Tradies Are Saying

> *"I used to sit at my kitchen table for an hour every night doing quotes. Now I do them in the car before I drive away from the job. It's genuinely changed how I run my business."*
> **— Luke F., plumber, Brisbane**

> *"The from-email button is the one. Customer writes in, I open it, press From Email, and the quote's done. I didn't type a single character."*
> **— Amy C., cleaner, Auckland**

> *"My Xero stays up to date without me doing anything. The sync just works. That's worth the subscription on its own."*
> **— Tony B., electrician, Sydney**

${chromeCTA}

## Who This Is Built For

SMASH is built for any self-employed service pro who gets job requests by email and hates the admin that comes with it. That includes:

- **Plumbers, electricians, sparkies** — high-volume quote requests, precise pricing
- **Cleaners and housekeepers** — recurring jobs, repeat invoicing
- **Pest controllers** — detailed service catalogs and inspection reports
- **Pool maintenance and HVAC** — recurring service schedules
- **Solar installers** — complex multi-item quotes
- **NDIS support workers** — participant number tracking built in
- **Handymen and builders** — varied job types, flexible pricing

If your work starts with an email in Gmail, SMASH was built for you.

## Related Reading

- [Why Every Invoicing App Fails the Mobile Test](/blog/why-invoicing-apps-fail-mobile-test)
- [Voice to Quote: How SMASH Builds Your Estimate Without a Keyboard](/blog/voice-to-quote-feature)
- [The Ultimate Tradie Tech Stack for 2026](/blog/ultimate-tradie-tech-stack-voice-first-2026)
- [SMASH for Gmail — Chrome Extension Page](/chrome-extension)
`,
  },

  // ─── Article 2 ─────────────────────────────────────────────────────────────
  {
    slug: 'pest-control-invoicing-gmail-csv-pricing',
    title: 'Pest Control Invoicing From Gmail: Upload Your Pricing, Quote in Seconds',
    meta_title: 'Pest Control Invoicing From Gmail — Upload CSV Pricing & Quote Instantly | SMASH',
    meta_description: 'Pest control businesses can upload their full pricing catalog as a CSV, then let SMASH build professional quotes directly from customer emails in Gmail. No typing required.',
    excerpt: 'If you\'re a pest controller spending 15–20 minutes on every email quote, there\'s a better way. Upload your pricing once, and SMASH builds the quote for you.',
    primary_keyword: 'pest control invoicing software',
    secondary_keywords: [
      'gmail invoice extension pest control',
      'email to invoice pest control',
      'csv pricing upload invoicing',
      'quoting software pest control',
      'pest control business tools',
    ],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T01:00:00.000Z',
    reading_time: 7,
    key_takeaways: [
      'Upload your full pest control pricing catalog as a CSV — SMASH learns your SKUs, service names, and rates instantly.',
      'SMASH reads incoming customer emails in Gmail and matches the job description to your catalog automatically.',
      'Generate a professional, itemised quote or invoice without leaving Gmail.',
      'Send a payment portal link so customers can approve and pay by card or bank transfer.',
      'Export completed invoices to Xero or QuickBooks in one click.',
    ],
    faq_data: [
      {
        question: 'What format does the CSV need to be in?',
        answer: 'SMASH accepts a standard CSV with columns for service name, SKU (optional), unit, and price. If you have an existing price list in Excel or your accounting software, you can export it straight to CSV and upload it. SMASH walks you through the column mapping.',
      },
      {
        question: 'Can I upload a PDF of my existing invoice instead of a CSV?',
        answer: 'Yes. If you upload an existing PDF invoice, SMASH scans it and extracts your business details, line items, and pricing automatically. You can then fine-tune it and export as a CSV for future uploads.',
      },
      {
        question: 'What if a customer asks for something not in my catalog?',
        answer: 'You can add a custom line item on the fly during quote creation. It won\'t be saved to your catalog automatically, but you can add it from the Billing Profile tab any time.',
      },
      {
        question: 'Does SMASH work for pest control report invoicing as well as quotes?',
        answer: 'Yes. You can create quotes, convert them to invoices, and send inspection report links to customers from the same sidebar. The portal link shows the itemised breakdown and payment options.',
      },
      {
        question: 'Can multiple techs in my team use the same account?',
        answer: 'Currently SMASH is designed for solo operators and small owner-run businesses. Multi-user team features are on the roadmap. Reach out to dan@smashinvoices.com.au to be notified when they launch.',
      },
    ],
    content: `If you're running a pest control business, your pricing is detailed. You've got inspection fees, treatment types, chemical SKUs, per-room rates, follow-up visit charges — a list of services that took you years to work out. And every time a customer emails asking for a quote, you have to mentally sort through all of that, type it up from scratch, and hope you don't miss anything.

That's 15–20 minutes per quote. The first business to reply usually wins the job. If you're doing quotes from memory at 8pm, you're not winning.

SMASH fixes this by letting you upload your full pricing catalog once, and then building quotes automatically from customer emails.

## Watch: Pest Control Quoting From Gmail — Full Setup Demo

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/Fpb4G9AsxiM" title="Pest Control Invoicing — Upload Your Pricing & Quote From Gmail" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

This video shows the full setup: uploading a PDF business profile, importing a CSV price list, opening a real customer email, and having SMASH build the itemised quote automatically. The customer gets a professional quote with a payment link — without you typing a word.

## The Pest Control Quoting Problem

| What customers expect | What manually quoting looks like |
|---|---|
| Quote within the hour | Quote by tonight... maybe |
| Itemised, professional invoice | Handwritten or rough template |
| Stripe / card payment option | Bank transfer only |
| Xero-synced record | Manual data entry |
| Correct SKUs and service names | Approximated from memory |

## How to Set Up SMASH for Pest Control

**Step 1 — Upload your PDF business profile**

When you sign up, upload an existing invoice PDF. SMASH reads your business name, ABN, contact details, logo, and pricing format. This sets up your brand profile instantly — no manual entry.

**Step 2 — Import your CSV pricing catalog**

Export your price list from your accounting software or spreadsheet as a CSV. Upload it to SMASH via the Billing Profile tab. SMASH maps each service name, SKU, and price into your personal catalog. Done once. Used forever.

**Step 3 — Open a customer email in Gmail and press From Email**

A customer emails asking for a general pest treatment, inspection, or termite check. You open it, click the SMASH button. SMASH reads the email and matches the requested services to your catalog. The quote builds itself.

**Step 4 — Review, send, and get paid**

Check the line items — they'll match your SKUs exactly. Click Copy to Gmail to drop the quote into your reply, or create a portal link so the customer can approve and pay online. You can also export a PDF or push the record to Xero or QuickBooks.

## What Pest Controllers Are Saying

> *"I used to spend Sunday nights doing quotes. I'd put it off all week and then sit there dreading it. Now it takes me two minutes per job and the customer gets it the same day."*
> **— Paul K., pest control operator, Melbourne**

> *"My pricing catalog has 80-something lines. SMASH matched every single service in the customer's email perfectly. I didn't touch it."*
> **— Rachel M., pest control business owner, Perth**

> *"The portal link is a game-changer for getting sign-off before the job. Customer approves it from their phone, I've got confirmation before I even load the van."*
> **— James D., pest control technician, Brisbane**

${chromeCTA}

## Why Speed Matters in Pest Control

Most pest control jobs are won by the first business to send a professional-looking quote. Customers email three or four companies at once. If you're number three to reply — and your quote is a PDF attachment they have to download and open — you've already lost.

SMASH gets you to number one. Every time.

## Related Reading

- [Turn a Gmail Email Into a Sent Invoice in 20 Seconds](/blog/gmail-email-to-invoice-20-seconds)
- [Voice to Estimate: Build Bids Without a Pen](/blog/voice-to-estimate-build-bids-without-pen)
- [SMASH vs Fergus — Which Invoicing Tool is Right for You?](/blog/smash-vs-fergus)
- [SMASH for Gmail — Chrome Extension](/chrome-extension)
`,
  },

  // ─── Article 3 ─────────────────────────────────────────────────────────────
  {
    slug: 'gmail-to-xero-invoice-no-typing',
    title: 'Gmail to Xero: Turn Job Requests Into Invoices Without Typing a Word',
    meta_title: 'Gmail to Xero Invoice — No Typing, No Tab-Switching | SMASH Chrome Extension',
    meta_description: 'SMASH reads your Gmail job requests and pushes a complete, itemised invoice to Xero in under 60 seconds. No manual data entry. No copy-paste. See the full demo.',
    excerpt: 'If you use Xero and you\'re still manually entering invoices, this is the workflow you\'ve been missing. SMASH reads the email and syncs directly to Xero.',
    primary_keyword: 'xero gmail integration',
    secondary_keywords: [
      'gmail to xero invoice',
      'email to xero invoice automatically',
      'xero chrome extension',
      'voice to invoice xero',
      'auto invoice xero gmail',
    ],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T02:00:00.000Z',
    reading_time: 6,
    key_takeaways: [
      'SMASH reads an incoming customer email in Gmail and builds a complete, priced invoice automatically.',
      'The invoice pushes directly to Xero in one click — customer name, line items, GST, totals all matched.',
      'No need to log into the Xero dashboard just to create a basic invoice.',
      'Works alongside your existing Xero setup — your tax codes, chart of accounts, and branding are preserved.',
      'Free to install. No credit card required to start.',
    ],
    faq_data: [
      {
        question: 'Does SMASH connect directly to my Xero account?',
        answer: 'Yes. You authenticate with Xero via OAuth when you set up the integration. After that, one click from the SMASH sidebar pushes the invoice straight to Xero. No manual copying.',
      },
      {
        question: 'Will the invoice appear in Xero correctly — tax codes, account codes, all of it?',
        answer: 'Yes. SMASH maps to your Xero account codes and tax rates. Your GST (or VAT in the UK) is calculated automatically based on your region. The invoice appears in Xero exactly as it would if you\'d entered it manually.',
      },
      {
        question: 'Can I send the invoice to the customer from Xero after pushing it?',
        answer: 'Yes. Once the invoice is in Xero you can send it from there as normal, or use the SMASH portal link to let the customer approve and pay via Stripe directly — without touching Xero.',
      },
      {
        question: 'What if I already have the customer in Xero?',
        answer: 'SMASH checks your Xero contact list when syncing. If the customer already exists, the invoice is attached to their existing record. If they\'re new, SMASH creates the contact in Xero automatically.',
      },
      {
        question: 'Does this work for quotes as well as invoices?',
        answer: 'Yes. You can create a quote in SMASH, send it to the customer for approval, and then convert it to an invoice and push to Xero once the job is complete.',
      },
    ],
    content: `If you use Xero to run your books, you already know it's great accounting software. It keeps your records clean, your tax sorted, and your accountant happy.

What it doesn't have is a way to take a job request from Gmail and turn it into a Xero invoice without switching tabs, logging in, and typing everything out by hand. That gap costs you 15–20 minutes every time you need to quote.

SMASH fills that gap.

## Watch: Gmail to Xero Invoice — Live Demo

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/Aw_9oXMEVME" title="Turn Job Requests Into Xero Invoices Without Typing a Word" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

This is the full workflow: a customer email lands in Gmail → SMASH reads it → builds the itemised quote → syncs it to Xero. The whole thing takes under 60 seconds. No typing. No copy-paste. No logging into the Xero dashboard.

## The Missing Link Between Gmail and Xero

| Without SMASH | With SMASH |
|---|---|
| Read email in Gmail | Read email in Gmail |
| Switch to Xero dashboard | Press SMASH button — stays in Gmail |
| Create new invoice manually | SMASH reads email and builds quote |
| Type customer name, look up contact | Customer pulled from email automatically |
| Enter line items from memory | Line items matched from your catalog |
| Calculate GST manually | GST calculated for your region |
| Save draft, send from Xero | Drop into Gmail reply or send portal link |
| **Total time: 15–20 mins** | **Total time: under 60 seconds** |

## How the Xero Integration Works

**SMASH reads the email**

You get a job request. Open it, click the SMASH button. SMASH extracts the customer's name, email, and the job details from the body of the email. It's already read it before you've finished reading it yourself.

**From Email builds the quote**

Press *From Email*. SMASH matches the job details to your SKUs and pricing catalog and builds a complete, itemised quote. Quantities, unit prices, GST — all done. You review it, adjust if needed, done.

**One click to Xero**

Press *Export to Xero*. SMASH authenticates via your Xero OAuth connection, maps your tax codes and account codes, and creates the invoice in Xero. If the customer is already in your Xero contacts, it attaches to their record. If they're new, Xero creates the contact automatically.

**The invoice is in Xero, correctly categorised, in under 60 seconds.**

You never had to leave Gmail.

## What Xero Users Are Saying

> *"I always thought the Xero mobile app was as good as it got. This is so much faster. The invoice is in Xero before I've even replied to the customer's email."*
> **— Sarah T., plumber, Christchurch**

> *"Our bookkeeper kept complaining that my Xero records were inconsistent. Since I started using SMASH, everything goes through the same flow and she hasn't mentioned it once."*
> **— Marcus H., handyman, Sydney**

> *"I set it up in about 10 minutes. Connected to Xero, uploaded my pricing, opened an email, and sent a quote. Couldn't believe it was that simple."*
> **— Claire O., cleaner, Auckland**

${chromeCTA}

## Also Good to Know

SMASH works alongside your existing Xero setup — it doesn't replace it. Your accountant still logs into Xero as normal. Your chart of accounts, payment terms, and branding stay exactly as they are. SMASH is purely the speed layer between Gmail and Xero that Xero itself never built.

It also works with QuickBooks if that's what you use. And it works as a standalone invoicing tool if you just want to send quotes without syncing to any accounting software at all.

## Related Reading

- [Turn a Gmail Email Into a Sent Invoice in 20 Seconds](/blog/gmail-email-to-invoice-20-seconds)
- [The Gmail to QuickBooks Bridge](/blog/gmail-quickbooks-xero-bridge)
- [Xero Too Complicated for a Sole Trader?](/blog/xero-too-complicated-sole-trader)
- [SMASH Integrations Overview](/integrations-xero)
`,
  },

  // ─── Article 4 ─────────────────────────────────────────────────────────────
  {
    slug: 'quickbooks-gmail-chrome-extension-missing',
    title: "What QuickBooks Doesn't Have (And Why I Built It)",
    meta_title: "What QuickBooks Doesn't Have for Gmail Invoicing — And the Fix | SMASH",
    meta_description: "QuickBooks is great for your books. But there's no Chrome extension, no Gmail sidebar, no way to quote from your inbox without switching tabs. SMASH fills the gap.",
    excerpt: "I've paid QuickBooks $60 a month for 10 years. It's great software. But it has never had a Gmail integration, and that one gap costs me 20 minutes on every single quote.",
    primary_keyword: 'quickbooks gmail integration',
    secondary_keywords: [
      'quickbooks chrome extension',
      'gmail to quickbooks invoice',
      'voice to invoice quickbooks',
      'invoice app that works with quickbooks',
      'quickbooks invoicing from email',
    ],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T03:00:00.000Z',
    reading_time: 6,
    key_takeaways: [
      'QuickBooks has no Chrome extension and no Gmail sidebar — that gap means manual data entry on every quote.',
      'SMASH lives inside Gmail and connects directly to QuickBooks, acting as the speed layer QB is missing.',
      'Voice-to-invoice: describe the job out loud, SMASH prices it from your catalog and syncs to QuickBooks.',
      'The whole flow — email to sent invoice to QuickBooks record — takes under two minutes.',
      'Free to start. No disruption to your existing QuickBooks setup.',
    ],
    faq_data: [
      {
        question: 'Will this mess with my existing QuickBooks data?',
        answer: 'No. SMASH only adds new invoices to QuickBooks — it doesn\'t modify existing records. Your existing customers, accounts, tax codes, and settings are untouched. It connects via the official QuickBooks API.',
      },
      {
        question: 'Do I need a certain QuickBooks plan to use SMASH?',
        answer: 'SMASH works with QuickBooks Online (Simple Start, Essentials, Plus, and Advanced). It doesn\'t currently support QuickBooks Desktop.',
      },
      {
        question: 'What happens if the customer isn\'t in my QuickBooks contacts yet?',
        answer: 'SMASH creates the customer record in QuickBooks automatically using the name and email from the Gmail thread. You can review and edit the contact in QuickBooks after the invoice is created.',
      },
      {
        question: 'Can I use SMASH with QuickBooks and Xero at the same time?',
        answer: 'You can connect to one accounting platform at a time. Switch between them in your SMASH billing profile settings.',
      },
      {
        question: 'I mostly quote over the phone, not by email. Does SMASH still help?',
        answer: 'Absolutely. The voice-to-invoice feature doesn\'t require an email. Open SMASH, press Start Recording, describe the job out loud, and it builds the quote from your voice. Then push to QuickBooks.',
      },
    ],
    content: `I've been a handyman for 10 years. For most of that time I've paid QuickBooks $60 a month to keep my books straight. It's genuinely good accounting software — my accountant loves it, my records are clean, my BAS is straightforward.

But there's one thing QuickBooks has never had: a Chrome extension. No Gmail sidebar. No way to take a job request sitting in my inbox and turn it into an invoice without opening a new tab, logging in, and typing everything out by hand.

That gap costs me 20 minutes on every single quote. And when you're doing three or four quotes a day, that's over an hour of unpaid admin — every day.

So I built SMASH.

## Watch: QuickBooks + Gmail — The 2-Minute Invoice Demo

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/S3O2qjwfDiw" title="I've paid QuickBooks $60/month for 10 years and they still don't have this" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

In this video you'll see the full voice-to-invoice workflow: a job request email → a 30-second voice recording → a complete priced quote → exported to QuickBooks. Under two minutes total. The voice recording itself was 30 seconds. The rest is SMASH doing the work.

## What QuickBooks Does vs What SMASH Does

| Task | QuickBooks | SMASH |
|---|---|---|
| Track your income and expenses | ✅ | — |
| BAS and tax reporting | ✅ | — |
| Turn a Gmail email into a quote | ❌ | ✅ |
| Voice-to-invoice from your inbox | ❌ | ✅ |
| Stay inside Gmail — no tab-switching | ❌ | ✅ |
| Build from your pricing catalog | ❌ | ✅ |
| Customer payment portal link | ❌ | ✅ |
| Push to QuickBooks with one click | — | ✅ |

SMASH isn't trying to replace QuickBooks. It's the piece QuickBooks never built — the Gmail front-end that does the data entry for you, then syncs the result straight into your books.

## The Voice-to-Invoice Flow

**You get a job request email.** You open it. Press SMASH. The sidebar opens and it's already read the email — customer name, job details, everything in it.

**You press Start Recording.** You describe the job the way you'd tell your mate: *"Eight hours to fix the deck, ten linear metres of blackbutt decking, call-out fee, liter of stain."* Press stop. Takes about 30 seconds.

**SMASH prices it.** Your Pricing DNA maps your words to your rates. Line items fill in automatically. GST calculated. Quote ready to review.

**Export to QuickBooks.** One click. The invoice appears in QuickBooks under the customer's name. If they're a new customer, their contact is created automatically.

Start to finish: under two minutes. The manual way would have taken 20.

## What QuickBooks Users Are Saying

> *"I genuinely didn't believe it would work the first time. I recorded myself describing a job for 30 seconds, and it had every line item right. I've been using it every day since."*
> **— Steve P., handyman, Gold Coast**

> *"I resisted anything new for years because I thought it would break my QuickBooks setup. It doesn't touch anything. It just adds invoices, exactly the way I'd enter them myself."*
> **— Toni K., mobile mechanic, Adelaide**

> *"My favourite part is that I don't have to remember what I charged for things. SMASH just knows, because I uploaded my price list once at the start."*
> **— Ray J., electrician, Wellington**

${chromeCTA}

## Your QuickBooks Setup Stays Exactly the Same

SMASH connects to QuickBooks via the official OAuth API. Your accountant's login still works. Your existing customers, accounts, and categories are untouched. SMASH only adds new invoices — it doesn't read, change, or delete anything already there.

Your bookkeeper won't even notice, except that your records will be more up to date than they've ever been.

## Related Reading

- [Turn a Gmail Email Into a Sent Invoice in 20 Seconds](/blog/gmail-email-to-invoice-20-seconds)
- [The Gmail to QuickBooks Bridge](/blog/gmail-quickbooks-xero-bridge)
- [Stop Juggling Tabs: The QuickBooks Sidebar for Gmail](/blog/quickbooks-gmail-sidebar-tab-switching)
- [SMASH QuickBooks Integration](/integrations-quickbooks)
`,
  },

  // ─── Article 5 ─────────────────────────────────────────────────────────────
  {
    slug: 'gmail-quickbooks-xero-bridge',
    title: 'The Gmail to QuickBooks Bridge Your Accounting Software Forgot to Build',
    meta_title: 'Gmail to QuickBooks Bridge — Invoice Without the Dashboard | SMASH',
    meta_description: "SMASH is the speed layer between Gmail and QuickBooks or Xero that your accounting software never built. 250,000-item catalog, custom services, 1-click sync.",
    excerpt: 'QuickBooks is great for your accountant. But it was never built for the moment a job request lands in your inbox. SMASH is the bridge that connects the two.',
    primary_keyword: 'gmail to quickbooks bridge',
    secondary_keywords: [
      'invoice without quickbooks dashboard',
      'gmail sidebar quickbooks',
      'quickbooks speed layer gmail',
      'chrome extension quickbooks invoicing',
      'custom services invoicing catalog',
    ],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T04:00:00.000Z',
    reading_time: 7,
    key_takeaways: [
      'SMASH acts as a speed layer between your Gmail inbox and QuickBooks or Xero — no tab-switching required.',
      'Your logo, rates, terms, and branding sync with your QuickBooks setup exactly.',
      'Access a 250,000-item materials catalog covering AU, NZ, UK, US, and Canada.',
      'Custom productised services — perfect for cleaners, handymen, and recurring job types.',
      'Invoice history in the sidebar lets you see what you charged a customer last time, without leaving Gmail.',
    ],
    faq_data: [
      {
        question: 'How does SMASH sync my branding from QuickBooks?',
        answer: 'When you connect SMASH to QuickBooks, it reads your company name, logo, and contact details from your QuickBooks profile. Your invoices sent via SMASH match your QuickBooks branding exactly.',
      },
      {
        question: 'What\'s in the 250,000-item materials catalog?',
        answer: 'The catalog covers trade materials, labour rates, equipment, and service items priced for the Australian, New Zealand, UK, US, and Canadian markets. Prices are based on regional market averages. You can override any item with your custom rates.',
      },
      {
        question: 'What are custom productised services?',
        answer: 'If you offer fixed-price services — like "end-of-tenancy clean" or "deck sanding" — you can save those as custom services with your price attached. When you describe the job by voice, SMASH recognises your service names and adds the correct price automatically.',
      },
      {
        question: 'Can I see previous invoices for a customer in the sidebar?',
        answer: 'Yes. The History tab in the SMASH sidebar shows your recent invoices and quotes. You can find previous jobs for any customer, see what you charged, and repeat an invoice as a new draft with one tap.',
      },
      {
        question: 'Does SMASH work for wholesale and sales ops, not just trade businesses?',
        answer: 'Yes. The catalog and custom service features work for any business that generates regular quotes from email. Wholesale sales reps, consultants, and high-volume service coordinators all use SMASH to process orders faster.',
      },
    ],
    content: `There's a gap in the daily workflow of almost every service business. On one side: Gmail, where your customers live and your job requests arrive. On the other side: QuickBooks or Xero, where your accountant needs the records to live.

In between: manual data entry. Tab-switching. Typing things you already said out loud to the customer. Remembering what you charged last time. It's a gap that costs you 15–20 minutes on every quote, and nobody — not QuickBooks, not Xero — has ever bothered to fill it.

SMASH fills it.

## Watch: The Gmail to QuickBooks Bridge in Action

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/km0oJ6UjCs4" title="The Gmail to Xero Bridge: Invoicing Without the Dashboard" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

This video shows the full SMASH sidebar: branding sync from QuickBooks, the 250,000-item materials catalog, custom productised services, invoice history, and one-click export back to QuickBooks or Xero. This is why it works so well — not just how to click the buttons.

## Why It Works: Five Reasons SMASH Closes the Gap

**1. Your branding is already in there**

Connect SMASH to QuickBooks and it reads your company name, logo, rates, and terms immediately. The quotes SMASH generates look identical to the ones you'd build in QuickBooks — because they use the same source data. No duplication, no inconsistency.

**2. The 250,000-item catalog**

You don't need to build a price list from scratch. SMASH ships with a 250,000-item materials catalog covering AU, NZ, UK, US, and Canada — trade materials, equipment, labour rates, service items, all priced for your region. You can use it as-is or override any item with your own rate.

| Region | Catalog Coverage |
|---|---|
| Australia | Materials, labour, GST-inclusive pricing |
| New Zealand | NZ market rates, GST |
| United Kingdom | UK pricing, VAT |
| United States | US market rates, sales tax |
| Canada | CAD pricing, HST/GST |

**3. Custom productised services**

If you do the same jobs repeatedly — weekly cleans, monthly pool maintenance, annual inspections — save them as custom services in SMASH with your fixed price attached. When you describe the job by voice, SMASH recognises the service name and adds the price without you specifying it.

This is what makes SMASH fast for service businesses that run on recurring work. Say the job name. Done.

**4. Invoice history in the sidebar**

The History tab shows your recent invoices and quotes. You can see exactly what you charged a customer last time — without logging into QuickBooks, without searching your email, without trying to remember. Find the job, repeat it as a new draft, adjust if needed, send.

**5. One-click sync back to your books**

When the invoice is ready, press Export. It goes to QuickBooks or Xero in one click — correctly categorised, mapped to your chart of accounts, GST calculated. No double entry. Your bookkeeper sees it.

## What Service Pros Are Saying

> *"I do about 30 quotes a week. Before SMASH I was spending a whole morning just on quoting. Now it's maybe an hour total and most of that is checking the line items."*
> **— Brendan T., pool maintenance, Sunshine Coast**

> *"The custom services feature is the one. I do the same five jobs over and over. I just say 'end of tenancy' and it fills in the whole invoice. My accountant gets the record, the customer gets the quote, nobody types anything."*
> **— Jenny A., cleaner, Christchurch**

> *"I was sceptical about the catalog — I figured my prices would be different. But they were really close, and it was easy to override the ones that weren't. Saved me two hours setting up."*
> **— Mark F., handyman, Brisbane**

${chromeCTA}

## Who This Is Designed For

SMASH's bridge approach works best for businesses where:

- **Most job requests arrive by email** — so you're already in Gmail all day
- **Your pricing is relatively stable** — rates and services you can set once and reuse
- **You use QuickBooks or Xero** — so you need the records there, not just sent by email
- **You're a solo operator or small team** — where you're both the salesperson and the tradesperson

If that's you, the gap between your inbox and your books is costing you real money every week. SMASH closes it.

## Related Reading

- [Gmail to Xero: Turn Job Requests Into Invoices Without Typing](/blog/gmail-to-xero-invoice-no-typing)
- [What QuickBooks Doesn't Have (And Why I Built It)](/blog/quickbooks-gmail-chrome-extension-missing)
- [Stop Juggling Tabs: The QuickBooks Sidebar for Gmail](/blog/quickbooks-gmail-sidebar-tab-switching)
- [Voice to Quote: How SMASH Builds Estimates Without a Keyboard](/blog/voice-to-quote-feature)
`,
  },

  // ─── Article 6 ─────────────────────────────────────────────────────────────
  {
    slug: 'quickbooks-gmail-sidebar-tab-switching',
    title: 'Stop Juggling Tabs: The QuickBooks Sidebar for Gmail That Does the Work',
    meta_title: 'Stop Tab-Switching: QuickBooks Sidebar for Gmail — Full Workflow | SMASH',
    meta_description: "Tired of switching between Gmail and QuickBooks to send a basic invoice? SMASH is the QuickBooks sidebar for Gmail. Voice the job, get paid, sync your books. Done.",
    excerpt: "You finish a job, you're knackered, and you can't even remember what you told the customer you'd charge. SMASH reads the original email, you describe the day, and the invoice is sent before you've put the kettle on.",
    primary_keyword: 'quickbooks gmail sidebar',
    secondary_keywords: [
      'stop tab switching invoicing',
      'gmail sidebar quickbooks online',
      'voice to invoice quickbooks gmail',
      'customer payment portal invoice',
      'quickbooks sync chrome extension',
    ],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T05:00:00.000Z',
    reading_time: 7,
    key_takeaways: [
      'SMASH lives inside Gmail as a sidebar — no new tabs, no new software logins.',
      'Read the original job request email, then describe what you did by voice to build the invoice.',
      'Generate a customer payment portal link so they can approve and pay from their phone.',
      'Export directly to QuickBooks in one click — records sync correctly, no double entry.',
      'Your invoice history is visible in the sidebar — see what you charged a customer last time.',
    ],
    faq_data: [
      {
        question: 'What does "tab-switching" actually cost me?',
        answer: 'Every time you switch from Gmail to QuickBooks, you break your focus, lose context, and spend time re-orienting. Studies on task-switching suggest it costs 20–40% more time than doing tasks sequentially. For invoicing, that means 15–20 minutes instead of 2–3. Across a week of daily quoting, that\'s hours of unpaid admin.',
      },
      {
        question: 'Does SMASH read the email automatically or do I have to paste it in?',
        answer: 'SMASH reads the open email thread automatically when you press the SMASH button. It extracts the customer name, email address, and job details without any copying or pasting from you.',
      },
      {
        question: 'What is a customer payment portal link?',
        answer: 'It\'s a unique web link SMASH generates for each invoice. Your customer taps it from their phone, sees the full itemised quote, approves it, and can pay via Stripe (card or bank transfer). You get a read receipt when they open it and a payment notification when they pay.',
      },
      {
        question: 'I sometimes can\'t remember exactly what I charged. Does SMASH help with that?',
        answer: 'Yes. The History tab in the SMASH sidebar shows your recent invoices. Find the customer, see what you charged them last time, and repeat the invoice as a starting point for the new job.',
      },
      {
        question: 'What if I want to invoice for a job that didn\'t come via email?',
        answer: 'Open SMASH in any Gmail window, press Start Recording, and describe the job. SMASH builds the invoice from your voice — no email thread needed. The customer details can be entered manually or found from your history.',
      },
    ],
    content: `It's 6:30pm. You've finished for the day, you've just driven home, and you're sitting in the car because you know the moment you go inside you'll have to start the admin.

You've got three jobs to invoice. You can roughly remember what you did on each one. But you can't remember exactly what you quoted, you can't remember if you included the call-out fee, and the thought of logging into QuickBooks, hunting for the right customer, and typing out line items from a fogged-up memory is making you want to leave it until tomorrow.

Tomorrow becomes next week. Next week becomes "I'll chase it later." Money you earned doesn't get paid.

That's the problem SMASH solves.

## Watch: The Full End-to-End QuickBooks + Gmail Workflow

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/81spyNgsCXE" title="Stop Juggling Tabs — A QuickBooks Sidebar for Gmail" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

This video shows the real-world version of the admin wall: getting home tired, going back to the original job email, recording what you did, generating the invoice and payment link, and syncing to QuickBooks — all without leaving Gmail. Watch how long it actually takes.

## The Tab-Juggling Tax

Every time you leave Gmail to create an invoice in QuickBooks, you pay a tax. Not a financial one — a time tax. Here's what the typical flow looks like:

| Step | Time cost |
|---|---|
| Switch from Gmail to QuickBooks | 30 seconds |
| Log in / load dashboard | 30–60 seconds |
| Navigate to New Invoice | 20 seconds |
| Find or create customer | 30–60 seconds |
| Enter line items from memory | 5–10 minutes |
| Check pricing / calculate GST | 2–3 minutes |
| Save and generate PDF | 30 seconds |
| Switch back to Gmail | 30 seconds |
| Write covering email, attach PDF | 3–5 minutes |
| **Total** | **13–21 minutes** |

With SMASH: you stay in Gmail the entire time. You press one button, speak for 30 seconds, review the result, and hit send. The whole thing is done in under two minutes.

## How the Workflow Actually Runs

**Step 1 — Go back to the original email**

Find the job request email in your inbox. Open it. Press the SMASH button. The sidebar opens and it's already read the email — customer name, email address, and what they originally asked for.

**Step 2 — Record what you did today**

Press Start Recording. Describe the day: *"Eight hours labour, fixed the door jamb, replaced the front door, installed hinges and lock set, plus the call-out fee."* Press stop. Give it a couple of seconds.

**Step 3 — Review the invoice**

SMASH builds the itemised invoice from your description. Labour rates, materials, call-out fee, GST — all filled in from your Pricing DNA. You check it, adjust anything that needs changing.

**Step 4 — Send and get paid**

Option A: Drop the invoice into your Gmail reply. Clean, professional, sent.

Option B: Generate a payment portal link. Your customer gets a link, opens it from their phone, sees the full breakdown, approves it, and pays by card. You get notified the second they open it.

**Step 5 — Sync to QuickBooks**

Press Export to QuickBooks. The record appears in QuickBooks — correctly categorised, correct customer, correct totals. Your bookkeeper is happy. Your records are clean.

Total time from starting the car to done: under five minutes.

## What Tradies Are Saying

> *"I got home absolutely wrecked one night and knocked out four invoices in 20 minutes. I don't think I've ever done that in my life. Usually that's a whole morning's work."*
> **— Dan W., carpenter, Wollongong**

> *"The payment portal link is what changed things for me. Customer gets a link, they pay from their phone, money's in my account the next day. No chasing. No follow-ups."*
> **— Lisa P., dog groomer, Melbourne**

> *"I went back to a job from the original email. SMASH had read the email and had the customer's details already. I just recorded what I'd done and it was invoiced. That's exactly what I needed."*
> **— Chris A., HVAC technician, Auckland**

${chromeCTA}

## The Brain Fog Problem

The admin wall isn't really about time. It's about mental energy. You're good at your job — but doing your job well is genuinely tiring. By the time you get home, the last thing your brain wants to do is switch into accountant mode.

SMASH doesn't fix that. It just removes most of the cognitive load. You don't have to remember the prices — they're in your catalog. You don't have to type the line items — you just say them. You don't have to log into QuickBooks — SMASH does the sync.

The admin gets done because it stops feeling like work.

## Related Reading

- [What QuickBooks Doesn't Have (And Why I Built It)](/blog/quickbooks-gmail-chrome-extension-missing)
- [The Gmail to QuickBooks Bridge](/blog/gmail-quickbooks-xero-bridge)
- [Voice to Estimate: Build Bids Without a Pen](/blog/voice-to-estimate-build-bids-without-pen)
- [Why Tradies Hate Phones for Admin](/blog/why-tradies-hate-phones-for-admin)
`,
  },

  // ─── Article 7 ─────────────────────────────────────────────────────────────
  {
    slug: 'fastest-way-to-send-invoice-2026',
    title: 'The Fastest Way to Send an Invoice in 2026 (60-Second Speedrun)',
    meta_title: 'Fastest Way to Send an Invoice in 2026 — 60 Second Demo | SMASH',
    meta_description: "Watch SMASH turn a Gmail email into a fully-priced, sent invoice in 60 seconds flat. Voice description, auto-pricing from your catalog, Gmail reply. Done.",
    excerpt: "If invoices are stacking up and you need them out fast, this is the quickest proven workflow in 2026. Voice-to-invoice from Gmail. Under 60 seconds. No typing.",
    primary_keyword: 'fastest way to send an invoice',
    secondary_keywords: [
      'invoice in 60 seconds',
      'fastest invoicing app 2026',
      'voice to invoice speedrun',
      'quick invoice from gmail',
      'send invoice without typing',
    ],
    author: 'Dan Neale',
    author_bio: 'Dan is the founder of SMASH Invoices. He built SMASH after 10 years as a handyman because he was tired of spending his evenings manually typing out quotes that should have taken 20 seconds.',
    published_at: '2026-05-25T06:00:00.000Z',
    reading_time: 5,
    key_takeaways: [
      'The fastest invoicing workflow in 2026 is voice-to-invoice from Gmail — under 60 seconds from email to sent.',
      'Press record, describe the job for 20–30 seconds, and SMASH prices it from your catalog automatically.',
      'All line items are auto-priced — materials, labour, call-out fee, GST — no typing required.',
      'The invoice is dropped into your Gmail reply with the description written for you.',
      'Free to install. No credit card. Works inside Gmail on any device.',
    ],
    faq_data: [
      {
        question: 'How accurate is the voice recognition?',
        answer: 'SMASH uses a dedicated voice-to-invoice AI that\'s trained on trade terminology — job types, material names, services, fees. It understands "call-out fee", "deck sanding", "linear metres of blackbutt", and other trade-specific language that generic voice apps miss. You can edit any line item before sending.',
      },
      {
        question: 'What if I have invoices stacking up — can I do multiple at once?',
        answer: 'You\'ll do them one at a time, but at 60 seconds each, clearing a backlog of five invoices takes five minutes. Open the first email, press SMASH, record, send. Next email, repeat.',
      },
      {
        question: 'Does the 60-second claim include setup time?',
        answer: 'No. Setup — uploading your pricing, connecting to Xero or QuickBooks — takes about 10 minutes and you only do it once. After that, individual invoices genuinely take under 60 seconds.',
      },
      {
        question: 'Does SMASH write the email reply for me too?',
        answer: 'Yes. When you drop the quote into your Gmail reply, SMASH generates a short, professional covering message to go with it. You don\'t have to write anything — not the line items, not the email copy.',
      },
      {
        question: 'What\'s the slowest part of the process?',
        answer: 'Honestly, it\'s the 3–5 seconds SMASH takes to process the voice recording. That\'s the only wait. Everything else is instant.',
      },
    ],
    content: `You've got invoices stacking up. You know you need to get them out. Every hour you leave them sitting there is another hour before you get paid — and another job request you're probably missing in your inbox because you're drowning in admin.

Here's the fastest proven way to clear your invoice backlog in 2026.

## Watch: 60-Second Invoice Speedrun (Real Time)

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:24px 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/vLnhBVuPvXY" title="The Fastest Way to Send an Invoice in 2026 — 60 Second Speedrun" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

This is a real-time demo. Not sped up. Not edited. A job request email → a voice recording → a priced invoice dropped into a Gmail reply. The voice recording is 20 seconds. The rest is SMASH doing the work.

## Why Everything Else Is Slower

| Method | Time to send one invoice |
|---|---|
| Typing in QuickBooks or Xero | 15–25 minutes |
| Filling in a Word template | 10–15 minutes |
| Using a basic invoicing app | 5–10 minutes |
| Email reply with rough estimate | 3–5 minutes (but unprofessional) |
| **SMASH voice-to-invoice from Gmail** | **Under 60 seconds** |

The gap isn't because SMASH uses magic. It's because every other method requires you to type. SMASH replaces typing with talking — and talking is at least 4x faster than typing, especially when you're tired.

## The Exact 60-Second Sequence

**0–5 seconds**: Open the job request email. Click SMASH. Sidebar opens. It's already read the email.

**5–30 seconds**: Press record. Describe the job out loud: *"Eight hours to repair the deck at the back of the house. Eight linear metres of blackbutt decking, a packet of galvanised screws, a litre of decking oil, two sanding pads. Call-out fee. Material pickup fee."* Press stop.

**30–35 seconds**: SMASH processes the voice recording. All line items fill in. Materials priced from your catalog. GST calculated.

**35–50 seconds**: Review the line items. Everything looks right. Press Copy to Gmail.

**50–60 seconds**: SMASH drops the itemised invoice into your reply — with a professional covering description written for you. Hit send.

Done. Invoice sent. Under 60 seconds.

## What Makes It This Fast

**Your pricing catalog does the heavy lifting.** When you sign up, you upload your rates and services once. Every time you describe a job after that, SMASH already knows what things cost. There's no lookup, no guessing, no checking a rate sheet.

**Voice is faster than typing.** Most people speak at 130–150 words per minute. Most people type at 40–60 words per minute — and that's when they're not tired. Describing a job takes 20–30 seconds. Typing the same information takes 5–10 minutes.

**You don't write the email.** When you drop the quote into your Gmail reply, SMASH generates the covering message too. Your customer gets a professional, correctly-worded email. You didn't type a word of it.

## What Tradies Are Saying

> *"I had eleven invoices sitting there one Friday afternoon. I cleared them in about 12 minutes. I've never done anything like that in my life."*
> **— Jake R., pest controller, Sydney**

> *"It wrote the reply email for me as well. I didn't realise until I saw it. I just pressed send. That's the part that impressed me most."*
> **— Naomi T., cleaner, Brisbane**

> *"I got a quote request while I was still on the previous job. I pulled over, opened Gmail on my phone, pressed SMASH, did the voice recording, sent it before I drove away. Two minutes, maybe."*
> **— Davo K., plumber, Newcastle**

${chromeCTA}

## Clear Your Backlog Today

If you've got invoices sitting there right now, install SMASH, spend 10 minutes setting up your pricing, and work through your backlog. At 60 seconds per invoice, five invoices takes five minutes. Ten invoices takes ten minutes.

The longer you leave invoices sitting unsent, the harder it is to collect. Your chances of getting paid drop with every day that passes. The fastest way to get paid is to send the invoice now — and the fastest way to send it is SMASH.

## Related Reading

- [Turn a Gmail Email Into a Sent Invoice in 20 Seconds](/blog/gmail-email-to-invoice-20-seconds)
- [What QuickBooks Doesn't Have (And Why I Built It)](/blog/quickbooks-gmail-chrome-extension-missing)
- [Stop Juggling Tabs: The QuickBooks Sidebar for Gmail](/blog/quickbooks-gmail-sidebar-tab-switching)
- [Why Every Invoicing App Fails](/blog/why-every-invoicing-app-fails)
`,
  },
];

async function seedPosts() {
  console.log(`Inserting ${posts.length} blog posts into Supabase...\n`);

  for (const post of posts) {
    const { error } = await supabase
      .from('blog_posts')
      .upsert(
        { ...post, published: true, view_count: 0 },
        { onConflict: 'slug' },
      );

    if (error) {
      console.error(`✗ Failed: ${post.slug}`);
      console.error('  ', error.message);
    } else {
      console.log(`✓ Upserted: /blog/${post.slug}`);
    }
  }

  console.log('\n✅ Done. Run `npm run prerender` to generate static HTML files.');
}

seedPosts();
