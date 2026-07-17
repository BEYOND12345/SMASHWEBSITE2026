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

from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFont, ImageOps

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

# Brand fallbacks only — prefer /og/stock Unsplash. Avoid overusing ute/portrait heroes.
SMASH_PHOTO_POOL = [
    "public/product/home/hero-pool-maintenance.png",
    "public/product/gmail/photos/workflow.jpg",
    "public/product/gmail/photos/sku-match.jpg",
    "public/product/gmail/photos/contrast.jpg",
    "public/product/gmail/photos/demo.jpg",
    "public/product/ios/photos/cardpayment.jpg",
    "public/product/ios/photos/send.jpg",
    "public/product/home/hero-tradie-car.jpg",
    "public/product/home/voice-story-painter.jpg",
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


def _least_used(candidates: list[Path], slug: str, usage: dict[str, int]) -> Path:
    return sorted(
        candidates,
        key=lambda p: (
            usage.get(str(p), 0),
            int(hashlib.sha1(f"{slug}:{p.name}".encode()).hexdigest(), 16),
        ),
    )[0]


def pick_from(
    rels: list[str],
    slug: str,
    usage: dict[str, int],
    global_pool: list[Path],
    max_uses: int = 2,
) -> Path | None:
    existing = [ROOT / rel for rel in rels if (ROOT / rel).exists()]
    if not existing:
        return None
    preferred = [p for p in existing if p.name.startswith(("unsplash-", "pexels-"))]
    candidates = preferred or existing
    under = [p for p in candidates if usage.get(str(p), 0) < max_uses]
    if not under:
        under = [p for p in global_pool if usage.get(str(p), 0) < max_uses]
    return _least_used(under or candidates, slug, usage)


def pick_photo(
    slug: str,
    title: str,
    keyword: str | None,
    pool: list[Path],
    usage: dict[str, int],
) -> Path:
    hay = f"{slug} {title} {keyword or ''}"
    for pattern, rels in build_photo_rules():
        if pattern.search(hay):
            chosen = pick_from(rels, slug, usage, pool)
            if chosen:
                usage[str(chosen)] = usage.get(str(chosen), 0) + 1
                return chosen
    stock_first = [p for p in pool if "/og/stock/" in str(p)] or list(pool)
    under = [p for p in stock_first if usage.get(str(p), 0) < 2]
    if not under:
        under = [p for p in pool if usage.get(str(p), 0) < 2]
    chosen = _least_used(under or stock_first, slug, usage)
    usage[str(chosen)] = usage.get(str(chosen), 0) + 1
    return chosen


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
    """Smooth left + bottom darken via gradients (no per-row line banding)."""
    rgba = base.convert("RGBA")
    w, h = rgba.size
    # Black→white top-to-bottom; rotate so black is on the left
    left_grad = Image.linear_gradient("L").rotate(90, expand=True).resize((w, h))
    # Left fade only on ~55% width, smooth to transparent (no hard vertical edge)
    left_a = left_grad.point(lambda p: int(max(0, ((255 - p) / 255.0) * 1.7 - 0.15) ** 1.4 * 210))
    bottom_grad = Image.linear_gradient("L").resize((w, h))
    bottom_a = bottom_grad.point(lambda p: int((p / 255.0) ** 3.2 * 55))
    alpha = ImageChops.lighter(left_a, bottom_a)
    veil = Image.new("RGBA", (w, h), (8, 8, 10, 255))
    veil.putalpha(alpha)
    base.paste(Image.alpha_composite(rgba, veil).convert("RGB"))


def render_card(photo: Path, title: str, out_path: Path) -> None:
    img = Image.open(photo)
    # Slight desaturate so type pops
    img = ImageEnhance.Color(img).enhance(0.88)
    img = ImageEnhance.Brightness(img).enhance(0.94)
    canvas = cover_crop(img, W, H)
    draw_scrim(canvas)

    draw = ImageDraw.Draw(canvas)
    pad_x = 64
    max_text_w = int(W * 0.58)

    brand_font = load_font(28, prefer_black=True)
    draw.text((pad_x, 48), "SMASH", font=brand_font, fill=ACCENT)
    draw.rectangle((pad_x, 88, pad_x + 56, 94), fill=ACCENT)

    display = clean_title(title).upper()
    title_font, lines = fit_title(draw, display, max_text_w)
    line_gap = int(title_font.size * 0.92)
    block_h = line_gap * len(lines)
    y = (H - block_h) // 2 + 10
    # No box/bar — readable type via soft multi-offset shadow only
    for line in lines:
        for dx, dy in ((-2, 0), (2, 0), (0, -2), (0, 2), (3, 3), (-1, 2)):
            draw.text((pad_x + dx, y + dy), line, font=title_font, fill=(0, 0, 0))
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
    usage: dict[str, int] = {}
    ok = 0
    for post in posts:
        slug = post["slug"]
        title = post["title"]
        keyword = post.get("primary_keyword") or ""
        photo = pick_photo(slug, title, keyword, pool, usage)
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
