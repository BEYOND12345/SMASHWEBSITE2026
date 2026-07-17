#!/usr/bin/env python3
"""
Download free stock photos into public/og/stock/<category>/ for blog OG cards.

Priority:
  1. Unsplash API — set UNSPLASH_ACCESS_KEY in .env (best modern photography)
  2. Pexels API   — set PEXELS_API_KEY in .env
  3. Wikimedia Commons — no key (documentary; more hit-and-miss)

Never hotlink. Files are saved locally and served from smashinvoices.com.

Keys:
  Unsplash → https://unsplash.com/oauth/applications (Access Key)
  Pexels   → https://www.pexels.com/api/

Usage:
  python3 scripts/fetch-blog-stock-photos.py
  python3 scripts/fetch-blog-stock-photos.py --per-category 8
  python3 scripts/fetch-blog-stock-photos.py --category electrician
  python3 scripts/fetch-blog-stock-photos.py --fresh   # wipe category folders first
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
STOCK_DIR = ROOT / "public" / "og" / "stock"
MANIFEST_PATH = ROOT / "scripts" / "blog-stock-manifest.json"
UA = "SMASHInvoicesBlogOG/1.0 (https://smashinvoices.com; hello@smashinvoices.com)"

# Reject off-brand / political / sensitive Commons matches.
BLOCKLIST = re.compile(
    r"guantanamo|detainee|fema|dvids|funeral|corpse|minister|parliament|military|"
    r"war-|bomb|missile|protest|riot|morgue|detain|prison|inmate|camp.six|"
    r"covid.hospital|body.bag",
    re.I,
)

# category → search queries (tried in order until we fill the quota)
CATEGORIES: dict[str, list[str]] = {
    "electrician": ["Electrician working", "Electrical worker toolbox"],
    "plumber": ["Plumber at work", "Pipefitter pipes", "Plumbing tools sink"],
    "painter": ["House painter rolling", "Painter painting wall"],
    "gardener": ["Gardener landscaping", "Lawn care worker"],
    "cleaner": ["Professional cleaner mopping", "Commercial cleaning worker"],
    "mechanic": ["Car mechanic engine bay", "Automotive workshop mechanic"],
    "handyman": ["DIY home repair tools", "Home renovation carpenter", "Toolbox workbench"],
    "construction": ["Construction worker site", "Tradesperson hard hat"],
    "dog_groomer": ["Dog grooming salon", "Pet groomer"],
    "photographer": ["Photographer camera shoot", "Wedding photographer"],
    "pool": ["Swimming pool maintenance", "Pool technician"],
    "solar": ["Solar panel installation", "Rooftop solar workers"],
    "fencing": ["Fence construction worker", "Building a fence"],
    "tree": ["Arborist tree work", "Tree removal worker"],
    "pest": ["Pest control technician", "Exterminator"],
    "locksmith": ["Locksmith door lock", "Locksmith working"],
    "tiler": ["Tile installer bathroom", "Tiling floor worker"],
    "concrete": ["Concrete worker pouring", "Concreter construction"],
    "hvac": ["HVAC technician air conditioning", "Air conditioner repair"],
    "truck": ["Pickup truck tradesman", "Work ute toolbox"],
    "office": ["Laptop on desk coffee", "Home office laptop typing", "Small business desk computer"],
    "phone": ["Smartphone construction site", "Worker holding smartphone outdoors"],
    "payment": ["Contactless card payment", "Credit card tap phone"],
    "customer": ["Customer service desk smile", "Small business owner client"],
}


def load_env() -> None:
    for name in (".env", ".env.production", ".env.local"):
        path = ROOT / name
        if not path.exists():
            continue
        for line in path.read_text().splitlines():
            if not line or line.strip().startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def http_json(url: str, headers: dict | None = None, retries: int = 4) -> dict:
    last_err: Exception | None = None
    for attempt in range(retries):
        req = urllib.request.Request(url, headers={"User-Agent": UA, **(headers or {})})
        try:
            with urllib.request.urlopen(req, timeout=45) as resp:
                return json.load(resp)
        except urllib.error.HTTPError as e:
            last_err = e
            # Demo apps: ~50 req/hour — back off hard on 403/429
            if e.code in (403, 429) and attempt < retries - 1:
                wait = 20 * (attempt + 1)
                print(f"    … rate limited ({e.code}), waiting {wait}s")
                time.sleep(wait)
                continue
            raise
        except Exception as e:
            last_err = e
            if attempt < retries - 1:
                time.sleep(3 * (attempt + 1))
                continue
            raise
    raise last_err or RuntimeError("http_json failed")


def download(url: str, dest: Path) -> bool:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = resp.read()
        if len(data) < 20_000:
            return False
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(data)
        with Image.open(dest) as im:
            w, h = im.size
            if w < 1100 or h < 600:
                dest.unlink(missing_ok=True)
                return False
            # Prefer landscape-ish frames for OG crops
            if h > w * 1.15:
                dest.unlink(missing_ok=True)
                return False
        return True
    except Exception:
        dest.unlink(missing_ok=True)
        return False


def search_unsplash(query: str, per_page: int) -> list[dict]:
    """Unsplash Search API — requires UNSPLASH_ACCESS_KEY (demo or production)."""
    key = os.environ.get("UNSPLASH_ACCESS_KEY", "").strip()
    if not key:
        return []
    qs = urllib.parse.urlencode(
        {
            "query": query,
            "orientation": "landscape",
            "content_filter": "high",
            "per_page": min(per_page, 30),
        }
    )
    data = http_json(
        f"https://api.unsplash.com/search/photos?{qs}",
        headers={"Authorization": f"Client-ID {key}", "Accept-Version": "v1"},
    )
    out = []
    for photo in data.get("results") or []:
        urls = photo.get("urls") or {}
        # Prefer regular/full for OG; trigger download_location when saving (API guideline).
        src = urls.get("regular") or urls.get("full") or urls.get("raw")
        if not src:
            continue
        # Cap width for faster downloads
        if "raw" in src or "full" in src:
            sep = "&" if "?" in src else "?"
            src = f"{src}{sep}w=1600&q=85&fm=jpg"
        user = photo.get("user") or {}
        links = photo.get("links") or {}
        out.append(
            {
                "id": f"unsplash-{photo['id']}",
                "url": src,
                "download_location": (links.get("download_location") or ""),
                "provider": "unsplash",
                "photographer": user.get("name") or "",
                "page": links.get("html") or "",
                "query": query,
            }
        )
    return out


def trigger_unsplash_download(download_location: str) -> str | None:
    """Hotlink guideline: hit download_location, then use the returned URL."""
    key = os.environ.get("UNSPLASH_ACCESS_KEY", "").strip()
    if not key or not download_location:
        return None
    try:
        data = http_json(
            download_location,
            headers={"Authorization": f"Client-ID {key}", "Accept-Version": "v1"},
        )
        return data.get("url")
    except Exception:
        return None


def search_pexels(query: str, per_page: int) -> list[dict]:
    key = os.environ.get("PEXELS_API_KEY", "").strip()
    if not key:
        return []
    qs = urllib.parse.urlencode(
        {
            "query": query,
            "orientation": "landscape",
            "size": "large",
            "per_page": min(per_page, 80),
        }
    )
    data = http_json(
        f"https://api.pexels.com/v1/search?{qs}",
        headers={"Authorization": key},
    )
    out = []
    for photo in data.get("photos") or []:
        src = (photo.get("src") or {}).get("large2x") or (photo.get("src") or {}).get("large")
        if not src:
            continue
        out.append(
            {
                "id": f"pexels-{photo['id']}",
                "url": src,
                "provider": "pexels",
                "photographer": photo.get("photographer") or "",
                "page": photo.get("url") or "",
                "query": query,
            }
        )
    return out


def search_candidates(query: str, per_page: int) -> tuple[str, list[dict]]:
    """Return (provider, candidates) using Unsplash → Pexels → Wikimedia."""
    try:
        unsplash = search_unsplash(query, per_page=per_page)
        if unsplash:
            return "unsplash", unsplash
    except urllib.error.HTTPError as e:
        print(f"    … Unsplash failed ({e.code}) for “{query}”, falling back")
    pexels = search_pexels(query, per_page=per_page)
    if pexels:
        return "pexels", pexels
    return "wikimedia", search_wikimedia(query, limit=per_page)


def search_wikimedia(query: str, limit: int) -> list[dict]:
    qs = urllib.parse.urlencode(
        {
            "action": "query",
            "format": "json",
            "generator": "search",
            "gsrnamespace": "6",
            "gsrsearch": query,
            "gsrlimit": str(min(limit * 2, 20)),
            "prop": "imageinfo",
            "iiprop": "url|size|mime",
            "iiurlwidth": "1600",
        }
    )
    data = http_json(f"https://commons.wikimedia.org/w/api.php?{qs}")
    pages = (data.get("query") or {}).get("pages") or {}
    out = []
    for page in pages.values():
        title = page.get("title") or ""
        # Skip obvious junk / off-brand
        if re.search(r"\.(svg|gif|pdf|djvu)$", title, re.I):
            continue
        if re.search(r"logo|icon|diagram|map|flag|coat of arms", title, re.I):
            continue
        if BLOCKLIST.search(title):
            continue
        ii = (page.get("imageinfo") or [{}])[0]
        mime = ii.get("mime") or ""
        if not mime.startswith("image/"):
            continue
        if mime not in ("image/jpeg", "image/png", "image/webp"):
            continue
        url = ii.get("thumburl") or ii.get("url")
        if not url:
            continue
        width = ii.get("thumbwidth") or ii.get("width") or 0
        if width and width < 1100:
            continue
        file_id = re.sub(r"[^\w\-]+", "-", title.replace("File:", ""))[:80].strip("-").lower()
        out.append(
            {
                "id": f"wiki-{file_id}",
                "url": url,
                "provider": "wikimedia",
                "photographer": "",
                "page": ii.get("descriptionurl") or "",
                "query": query,
            }
        )
    return out


def fetch_category(category: str, queries: list[str], per_category: int, fresh: bool = False) -> list[dict]:
    dest_dir = STOCK_DIR / category
    dest_dir.mkdir(parents=True, exist_ok=True)
    saved: list[dict] = []
    seen_ids: set[str] = set()

    if fresh:
        for existing in list(dest_dir.glob("*")):
            if existing.is_file():
                existing.unlink()
    else:
        # Keep existing files toward the quota
        for existing in sorted(dest_dir.glob("*.jpg")) + sorted(dest_dir.glob("*.jpeg")) + sorted(dest_dir.glob("*.png")):
            rel = str(existing.relative_to(ROOT))
            saved.append({"category": category, "path": rel, "provider": "existing", "id": existing.stem})
            seen_ids.add(existing.stem)
            if len(saved) >= per_category:
                return saved

    for query in queries:
        if len(saved) >= per_category:
            break
        provider, candidates = search_candidates(query, per_page=per_category + 6)
        print(f"  [{category}] {provider}: “{query}” → {len(candidates)} candidates")
        for item in candidates:
            if len(saved) >= per_category:
                break
            if item["id"] in seen_ids:
                continue
            if BLOCKLIST.search(item["id"]) or BLOCKLIST.search(item.get("url") or ""):
                continue
            ext = ".jpg"
            dest = dest_dir / f"{item['id']}{ext}"
            if dest.exists():
                seen_ids.add(item["id"])
                saved.append({**item, "category": category, "path": str(dest.relative_to(ROOT))})
                continue
            url = item["url"]
            if item.get("provider") == "unsplash" and item.get("download_location"):
                triggered = trigger_unsplash_download(item["download_location"])
                if triggered:
                    url = triggered
                time.sleep(0.25)
            ok = download(url, dest)
            # Stay under Unsplash demo rate limits (search + download_location each count)
            time.sleep(1.1)
            if not ok:
                continue
            # Normalize to jpeg
            try:
                with Image.open(dest) as im:
                    rgb = im.convert("RGB")
                    rgb.save(dest, format="JPEG", quality=88, optimize=True)
            except Exception:
                dest.unlink(missing_ok=True)
                continue
            seen_ids.add(item["id"])
            saved.append({**item, "category": category, "path": str(dest.relative_to(ROOT))})
            print(f"    ✓ {dest.name}")
    return saved


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--per-category", type=int, default=6)
    parser.add_argument("--category", type=str, default="", help="Only one category key")
    parser.add_argument(
        "--fresh",
        action="store_true",
        help="Delete existing files in each category before downloading (use after adding Unsplash key)",
    )
    args = parser.parse_args()

    load_env()
    has_unsplash = bool(os.environ.get("UNSPLASH_ACCESS_KEY", "").strip())
    has_pexels = bool(os.environ.get("PEXELS_API_KEY", "").strip())
    print("Unsplash API:", "YES" if has_unsplash else "no key")
    print("Pexels API:  ", "YES" if has_pexels else "no key")
    if not has_unsplash and not has_pexels:
        print("Fallback:    Wikimedia Commons")
        print("Tip: Unsplash key → https://unsplash.com/oauth/applications → UNSPLASH_ACCESS_KEY=...")
        print("     Pexels key   → https://www.pexels.com/api/ → PEXELS_API_KEY=...")
    print()

    cats = CATEGORIES
    if args.category:
        if args.category not in CATEGORIES:
            print("Unknown category. Options:", ", ".join(CATEGORIES))
            return 1
        cats = {args.category: CATEGORIES[args.category]}

    manifest: list[dict] = []
    for category, queries in cats.items():
        print(f"→ {category}")
        manifest.extend(fetch_category(category, queries, args.per_category, fresh=args.fresh))

    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2) + "\n")
    by_cat: dict[str, int] = {}
    for row in manifest:
        by_cat[row["category"]] = by_cat.get(row["category"], 0) + 1
    print("\nSaved:")
    for k, v in sorted(by_cat.items()):
        print(f"  {k}: {v}")
    print(f"Total files indexed: {len(manifest)}")
    print(f"Manifest → {MANIFEST_PATH.relative_to(ROOT)}")
    print("Next: npm run generate:blog-og:apply")
    return 0


if __name__ == "__main__":
    sys.exit(main())
