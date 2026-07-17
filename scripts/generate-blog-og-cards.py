#!/usr/bin/env python3
"""
Generate unique typographic OG / featured cards for every published blog post.

Each card = SMASH photography background + dark scrim + Barlow Condensed title.

Usage:
  python3 scripts/generate-blog-og-cards.py           # generate + write manifest
  python3 scripts/generate-blog-og-cards.py --apply   # also update Supabase featured_image
  python3 scripts/generate-blog-og-cards.py --limit 5 # smoke test
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "og" / "blog"
STOCK_DIR = ROOT / "public" / "og" / "stock"
MANIFEST_PATH = ROOT / "scripts" / "blog-og-manifest.json"
W, H = 1200, 630
ACCENT = (223, 255, 0)  # #DFFF00
WHITE = (255, 255, 255)
MUTED = (226, 232, 240)

FONT_BLACK = Path("/Library/Fonts/Barlow_Condensed/BarlowCondensed-Black.ttf")
FONT_BOLD = Path("/Library/Fonts/Barlow_Condensed/BarlowCondensed-Bold.ttf")
FONT_FALLBACK = Path("/System/Library/Fonts/Supplemental/Arial Black.ttf")

# Desktop photography only (no UI screenshots, no *-mobile).
SMASH_PHOTO_POOL = [
    "public/product/home/hero-tradie-car.jpg",
    "public/product/home/hero-tradie-car.png",
    "public/product/home/hero-pool-maintenance.png",
    "public/product/home/voice-story-painter.jpg",
    "public/product/home/cleaner-testimonial.jpg",
    "public/product/ios/photos/voice.jpg",
    "public/product/ios/photos/send.jpg",
    "public/product/ios/photos/customers.jpg",
    "public/product/ios/photos/cardpayment.jpg",
    "public/product/ios/photos/automessage.jpg",
    "public/product/ios/photos/readreceipts.jpg",
    "public/product/ios/photos/ad-landing/electrician.jpg",
    "public/product/ios/photos/ad-landing/gardener.jpg",
    "public/product/ios/photos/ad-landing/dog-groomer.jpg",
    "public/product/ios/photos/ad-landing/photographer.jpg",
    "public/product/ios/photos/ad-landing/maintenance.jpg",
    "public/product/ios/photos/ad-landing/snake-catcher.jpg",
    "public/product/gmail/photos/hero.jpg",
    "public/product/gmail/photos/demo.jpg",
    "public/product/gmail/photos/workflow.jpg",
    "public/product/gmail/photos/contrast.jpg",
    "public/product/gmail/photos/sku-match.jpg",
]

# Keyword → SMASH + stock category folders (stock paths resolved at runtime).
PHOTO_RULES_SPEC: list[tuple[re.Pattern[str], list[str], list[str]]] = [
    # (pattern, smash_rels, stock_category_dirs)
    (
        re.compile(r"gmail|inbox|email.to.invoice|chrome.extension|sidebar", re.I),
        [
            "public/product/gmail/photos/hero.jpg",
            "public/product/gmail/photos/demo.jpg",
            "public/product/gmail/photos/workflow.jpg",
            "public/product/gmail/photos/contrast.jpg",
        ],
        ["office", "phone"],
    ),
    (
        re.compile(r"quickbooks|xero|sku|accounting", re.I),
        [
            "public/product/gmail/photos/sku-match.jpg",
            "public/product/gmail/photos/workflow.jpg",
            "public/product/gmail/photos/demo.jpg",
        ],
        ["office"],
    ),
    (re.compile(r"electric|switchboard", re.I), ["public/product/ios/photos/ad-landing/electrician.jpg"], ["electrician"]),
    (re.compile(r"garden|lawn|landscap", re.I), ["public/product/ios/photos/ad-landing/gardener.jpg"], ["gardener"]),
    (re.compile(r"dog|groom", re.I), ["public/product/ios/photos/ad-landing/dog-groomer.jpg"], ["dog_groomer"]),
    (re.compile(r"photo|wedding", re.I), ["public/product/ios/photos/ad-landing/photographer.jpg"], ["photographer"]),
    (re.compile(r"snake|pest", re.I), ["public/product/ios/photos/ad-landing/snake-catcher.jpg"], ["pest"]),
    (re.compile(r"pool", re.I), ["public/product/home/hero-pool-maintenance.png"], ["pool"]),
    (re.compile(r"paint", re.I), ["public/product/home/voice-story-painter.jpg"], ["painter"]),
    (re.compile(r"clean", re.I), ["public/product/home/cleaner-testimonial.jpg"], ["cleaner"]),
    (re.compile(r"plumb", re.I), ["public/product/ios/photos/ad-landing/maintenance.jpg"], ["plumber"]),
    (re.compile(r"mechanic|grease", re.I), ["public/product/ios/photos/send.jpg"], ["mechanic", "truck"]),
    (re.compile(r"solar", re.I), ["public/product/home/hero-tradie-car.jpg"], ["solar"]),
    (re.compile(r"fenc", re.I), ["public/product/ios/photos/ad-landing/maintenance.jpg"], ["fencing"]),
    (re.compile(r"tree|arbor|stump", re.I), ["public/product/ios/photos/ad-landing/gardener.jpg"], ["tree"]),
    (re.compile(r"locksmith", re.I), ["public/product/ios/photos/ad-landing/maintenance.jpg"], ["locksmith"]),
    (re.compile(r"til", re.I), ["public/product/ios/photos/ad-landing/maintenance.jpg"], ["tiler"]),
    (re.compile(r"concrete|concreter", re.I), ["public/product/ios/photos/send.jpg"], ["concrete", "construction"]),
    (re.compile(r"hvac|air.con|air.conditioning", re.I), ["public/product/ios/photos/ad-landing/maintenance.jpg"], ["hvac"]),
    (
        re.compile(r"handyman|maintenance|repair|tradie", re.I),
        [
            "public/product/ios/photos/ad-landing/maintenance.jpg",
            "public/product/home/hero-tradie-car.jpg",
            "public/product/ios/photos/send.jpg",
        ],
        ["handyman", "construction", "truck"],
    ),
    (
        re.compile(r"voice|hands.?free|on.site|driveway|30.second|60.second|fastest|chatgpt|quote", re.I),
        [
            "public/product/ios/photos/voice.jpg",
            "public/product/home/hero-tradie-car.jpg",
            "public/product/ios/photos/send.jpg",
            "public/product/home/voice-story-painter.jpg",
        ],
        ["phone", "truck", "handyman", "construction"],
    ),
    (re.compile(r"pay|payment|get paid|receipt", re.I), ["public/product/ios/photos/cardpayment.jpg"], ["payment"]),
    (re.compile(r"customer|crm|client", re.I), ["public/product/ios/photos/customers.jpg"], ["customer"]),
    (
        re.compile(r"send|invoice", re.I),
        [
            "public/product/ios/photos/send.jpg",
            "public/product/ios/photos/voice.jpg",
            "public/product/home/hero-tradie-car.jpg",
        ],
        ["phone", "truck", "office"],
    ),
]


def stock_photos_in(*categories: str) -> list[str]:
    rels: list[str] = []
    for cat in categories:
        folder = STOCK_DIR / cat
        if not folder.is_dir():
            continue
        for p in sorted(folder.iterdir()):
            if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}:
                rels.append(str(p.relative_to(ROOT)))
    return rels


def all_stock_photos() -> list[str]:
    if not STOCK_DIR.is_dir():
        return []
    return stock_photos_in(*(p.name for p in STOCK_DIR.iterdir() if p.is_dir()))


def build_photo_rules() -> list[tuple[re.Pattern[str], list[str]]]:
    rules: list[tuple[re.Pattern[str], list[str]]] = []
    for pattern, smash_rels, stock_cats in PHOTO_RULES_SPEC:
        # Prefer stock first for variety, then SMASH brand photography
        merged = stock_photos_in(*stock_cats) + smash_rels
        rules.append((pattern, merged))
    return rules


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


def fetch_posts() -> list[dict]:
    url = os.environ["VITE_SUPABASE_URL"]
    key = os.environ["VITE_SUPABASE_ANON_KEY"]
    endpoint = (
        f"{url}/rest/v1/blog_posts"
        "?select=id,slug,title,primary_keyword,featured_image_alt,published"
        "&published=eq.true"
        "&order=published_at.desc"
    )
    req = urllib.request.Request(
        endpoint,
        headers={"apikey": key, "Authorization": f"Bearer {key}"},
    )
    with urllib.request.urlopen(req) as resp:
        return json.load(resp)


def update_featured_image(slug: str, path: str, alt: str) -> None:
    url = os.environ["VITE_SUPABASE_URL"]
    key = os.environ["VITE_SUPABASE_ANON_KEY"]
    endpoint = f"{url}/rest/v1/blog_posts?slug=eq.{urllib.parse.quote(slug)}"
    body = json.dumps(
        {
            "featured_image": path,
            "featured_image_alt": alt,
            "updated_at": __import__("datetime").datetime.utcnow().isoformat() + "Z",
        }
    ).encode()
    req = urllib.request.Request(
        endpoint,
        data=body,
        method="PATCH",
        headers={
            "apikey": key,
            "Authorization": f"Bearer {key}",
            "Content-Type": "application/json",
            "Prefer": "return=minimal",
        },
    )
    with urllib.request.urlopen(req):
        pass


def existing_photos() -> list[Path]:
    out: list[Path] = []
    for rel in SMASH_PHOTO_POOL + all_stock_photos():
        p = ROOT / rel
        if p.exists():
            out.append(p)
    if not out:
        raise SystemExit("No photography found in SMASH_PHOTO_POOL / public/og/stock")
    return out


def pick_from(rels: list[str], slug: str) -> Path | None:
    existing = [ROOT / rel for rel in rels if (ROOT / rel).exists()]
    if not existing:
        return None
    # Prefer Unsplash / Pexels over older Wikimedia fills
    preferred = [p for p in existing if p.name.startswith(("unsplash-", "pexels-"))]
    pool = preferred or existing
    idx = int(hashlib.sha1(slug.encode()).hexdigest(), 16) % len(pool)
    return pool[idx]


def pick_photo(slug: str, title: str, keyword: str | None, pool: list[Path]) -> Path:
    hay = f"{slug} {title} {keyword or ''}"
    for pattern, rels in build_photo_rules():
        if pattern.search(hay):
            chosen = pick_from(rels, slug)
            if chosen:
                return chosen
    # Stable variety: hash slug into pool so neighbours don't share the same shot.
    idx = int(hashlib.sha1(slug.encode()).hexdigest(), 16) % len(pool)
    return pool[idx]


def load_font(size: int, prefer_black: bool = True) -> ImageFont.FreeTypeFont:
    for path in (
        (FONT_BLACK if prefer_black else FONT_BOLD),
        FONT_BOLD,
        FONT_BLACK,
        FONT_FALLBACK,
    ):
        if path.exists():
            return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default()


def clean_title(title: str) -> str:
    t = title.strip()
    t = re.sub(r"\s*\|\s*SMASH.*$", "", t, flags=re.I)
    t = re.sub(r"\s+", " ", t)
    return t


def wrap_title(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, max_width: int, max_lines: int = 3) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        trial = f"{current} {word}".strip()
        if draw.textlength(trial, font=font) <= max_width:
            current = trial
            continue
        if current:
            lines.append(current)
        current = word
        if len(lines) >= max_lines:
            break
    if current and len(lines) < max_lines:
        lines.append(current)
    if len(lines) == max_lines:
        # Ellipsis if leftover words
        used = " ".join(lines).split()
        if len(used) < len(words):
            last = lines[-1]
            while draw.textlength(last + "…", font=font) > max_width and last:
                last = last.rsplit(" ", 1)[0] if " " in last else last[:-1]
            lines[-1] = (last + "…").strip()
    return lines or [text[:40]]


def fit_title(draw: ImageDraw.ImageDraw, text: str, max_width: int) -> tuple[ImageFont.FreeTypeFont, list[str]]:
    for size in (86, 78, 72, 66, 60, 54, 48, 42):
        font = load_font(size, prefer_black=True)
        lines = wrap_title(draw, text, font, max_width, max_lines=3)
        if len(lines) <= 3 and all(draw.textlength(line, font=font) <= max_width for line in lines):
            # Prefer larger type when 3 lines still look short
            if size >= 54 or len(" ".join(lines)) < 70:
                return font, lines
    font = load_font(42, prefer_black=True)
    return font, wrap_title(draw, text, font, max_width, max_lines=3)


def cover_crop(img: Image.Image, width: int, height: int) -> Image.Image:
    return ImageOps.fit(img.convert("RGB"), (width, height), method=Image.Resampling.LANCZOS, centering=(0.5, 0.45))


def draw_scrim(base: Image.Image) -> None:
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    # Left-heavy vignette for title readability
    for x in range(base.width):
        t = x / base.width
        alpha = int(210 * (1 - min(1.0, t * 1.15)) ** 1.2 + 70)
        draw.line([(x, 0), (x, base.height)], fill=(10, 10, 12, alpha))
    # Bottom fade
    for y in range(base.height // 2, base.height):
        t = (y - base.height // 2) / (base.height / 2)
        alpha = int(120 * t)
        draw.line([(0, y), (base.width, y)], fill=(10, 10, 12, alpha))
    composed = Image.alpha_composite(base.convert("RGBA"), overlay)
    base.paste(composed.convert("RGB"))


def render_card(photo: Path, title: str, out_path: Path) -> None:
    img = Image.open(photo)
    # Slight desaturate so type pops
    img = ImageEnhance.Color(img).enhance(0.85)
    img = ImageEnhance.Brightness(img).enhance(0.92)
    canvas = cover_crop(img, W, H)
    draw_scrim(canvas)
    # Soft blur on far right so faces/details don't fight the title
    right = canvas.crop((int(W * 0.55), 0, W, H)).filter(ImageFilter.GaussianBlur(radius=1.2))
    canvas.paste(right, (int(W * 0.55), 0))

    draw = ImageDraw.Draw(canvas)
    pad_x = 64
    max_text_w = int(W * 0.62)

    brand_font = load_font(28, prefer_black=True)
    draw.text((pad_x, 48), "SMASH", font=brand_font, fill=ACCENT)
    draw.rectangle((pad_x, 88, pad_x + 56, 94), fill=ACCENT)

    display = clean_title(title).upper()
    title_font, lines = fit_title(draw, display, max_text_w)
    line_gap = int(title_font.size * 0.92)
    block_h = line_gap * len(lines)
    y = (H - block_h) // 2 + 10
    for line in lines:
        draw.text((pad_x, y), line, font=title_font, fill=WHITE)
        y += line_gap

    foot = load_font(26, prefer_black=False)
    draw.text((pad_x, H - 72), "smashinvoices.com", font=foot, fill=MUTED)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(out_path, format="JPEG", quality=86, optimize=True, progressive=True)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true", help="Update Supabase featured_image paths")
    parser.add_argument("--limit", type=int, default=0, help="Only first N posts (smoke test)")
    parser.add_argument("--slug", type=str, default="", help="Only one slug")
    args = parser.parse_args()

    load_env()
    pool = existing_photos()
    posts = fetch_posts()
    if args.slug:
        posts = [p for p in posts if p["slug"] == args.slug]
    if args.limit:
        posts = posts[: args.limit]

    if not posts:
        print("No posts matched.")
        return 1

    manifest: list[dict] = []
    ok = 0
    for post in posts:
        slug = post["slug"]
        title = post["title"]
        keyword = post.get("primary_keyword") or ""
        photo = pick_photo(slug, title, keyword, pool)
        out_rel = f"/og/blog/{slug}.jpg"
        out_path = ROOT / "public" / "og" / "blog" / f"{slug}.jpg"
        render_card(photo, title, out_path)
        alt = f"{clean_title(title)} — SMASH Invoices"
        manifest.append(
            {
                "slug": slug,
                "featured_image": out_rel,
                "featured_image_alt": alt,
                "photo": str(photo.relative_to(ROOT)),
            }
        )
        if args.apply:
            try:
                update_featured_image(slug, out_rel, alt)
            except urllib.error.HTTPError as e:
                print(f"✗ DB {slug}: {e.read().decode()[:200]}")
                continue
        ok += 1
        print(f"✓ {slug} ← {photo.name}")

    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"\nGenerated {ok} cards → {OUT_DIR.relative_to(ROOT)}")
    print(f"Manifest → {MANIFEST_PATH.relative_to(ROOT)}")
    if not args.apply:
        print("DB not updated. Re-run with --apply to set featured_image on each post.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
