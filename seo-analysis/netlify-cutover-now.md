# Netlify cutover — do this once (retire Bolt as publish path)

**Updated:** 1 Jul 2026  
**Goal:** `smashinvoices.com` serves GitHub `main` via Netlify only. Cursor edits → Git push → Netlify auto-deploy. **No Bolt publish.**

---

## Current state (why Bolt caused pain)

| Surface | What it shows |
|---------|----------------|
| GitHub `main` | New site ✓ |
| Bolt preview | New site (if synced from Git) ✓ |
| **`smashinvoices.netlify.app`** (Teamdan) | New site ✓ — deploys from GitHub |
| **`smashinvoices.com`** | **Old site** ✗ — different Netlify site/team |

Bolt pushed an old snapshot once and reverted the homepage on GitHub. Even when Bolt looks right, **Google indexes `smashinvoices.com`**, which still hits the stale Netlify deploy.

---

## Target architecture

```
Cursor → git push → GitHub main → Netlify (Teamdan / smashinvoices) → smashinvoices.com
```

Bolt: **stop using for publish**. Optional: read-only preview only, or cancel when stable.

---

## Step 1 — Fix Teamdan billing (5 min)

Netlify showed **payment overdue** on Teamdan. Update card first so deploys and domain attach are not interrupted.

---

## Step 2 — Release the domain from the old Netlify team (10–20 min)

Error you saw: *“smashinvoices.com is already managed by Netlify DNS on another team.”*

1. Netlify → **team switcher** (top left) → check every team/account you have.
2. Find the site that lists **`smashinvoices.com`** under **Domain management**.
3. **Remove** `smashinvoices.com` and `www.smashinvoices.com` from that old site (does not delete the domain at your registrar).
4. On **Teamdan → smashinvoices** (GitHub-connected, `smashinvoices.netlify.app` shows “Never type an invoice again”):
   - **Domain management → Add domain →** `smashinvoices.com`
   - Add `www` → redirect to apex if prompted
   - Wait for HTTPS (Let’s Encrypt)

**Can’t find the old team?** Netlify support → request domain release from the other team, or ask which account registered the zone.

---

## Step 3 — Confirm Netlify build settings (Teamdan site)

| Setting | Value |
|---------|--------|
| Repo | `BEYOND12345/SMASHWEBSITE2026` |
| Branch | `main` |
| Build | `npm run build` |
| Publish | `dist` |
| Node | 22 |

**Environment variables** (Site settings → Environment variables):

| Key | Value |
|-----|--------|
| `VITE_SUPABASE_URL` | `https://mwshohajbmfmuphloqzd.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Same as `.env.production` in repo (public anon key) |

Trigger **Deploy site → Clear cache and deploy site** after env vars are set.

---

## Step 4 — Verify production (5 min)

Incognito, no extensions:

| URL | Must show |
|-----|-----------|
| `https://smashinvoices.com/` | Pool hero, **“Never type an invoice again.”**, nav: iOS · Gmail Extension · Pricing… |
| `https://smashinvoices.com/voice-invoicing` | iOS landing (title/meta unchanged — protected) |
| `https://smashinvoices.com/chrome-extension` | Gmail extension landing |

View source on `/`: title should be **“Never Type an Invoice Again”** (not “Quote Sent Before…”).

---

## Step 5 — Retire Bolt (10 min)

1. **Disconnect** Bolt from GitHub auto-push (or stop clicking Publish in Bolt).
2. Do **not** edit production copy in Bolt without pulling Git first.
3. After 48–72h stable on Netlify: downgrade/cancel Bolt if no longer needed.
4. **Workflow rule:** all changes in **Cursor → commit → push → Netlify**.

---

## Step 6 — GSC indexing (after Step 4 passes)

Max **10 URLs/day**. See [seo-2-week-checklist.md](seo-2-week-checklist.md).

**Day 1 (after live homepage is correct):**

1. `https://smashinvoices.com/`
2. `https://smashinvoices.com/voice-invoicing`
3. `https://smashinvoices.com/chrome-extension`
4. Plus 7 voice/Gmail blog survivors from the checklist

Each: **URL Inspection → Test live URL → Request indexing**.

Never submit URLs that 301 — submit the destination ([gsc-indexing-master-queue.md](gsc-indexing-master-queue.md)).

---

## Rollback

If something breaks after domain attach: Netlify → **Deploys** → **Publish deploy** on the previous green deploy. Domain stays on Teamdan; no DNS registrar change needed if using Netlify DNS throughout.

---

## Checklist

| ☐ | Task |
|---|------|
| ☐ | Teamdan payment updated |
| ☐ | Domain removed from old Netlify team |
| ☐ | Domain added to Teamdan `smashinvoices` site |
| ☐ | HTTPS green on apex + www |
| ☐ | `VITE_SUPABASE_ANON_KEY` set in Netlify |
| ☐ | Incognito `/` shows new homepage |
| ☐ | Bolt publish disconnected |
| ☐ | GSC Day 1 batch submitted |
