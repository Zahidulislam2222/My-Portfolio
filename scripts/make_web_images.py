"""Generate the derived web images for every project cover in src/config/studio.config.ts.

- public/og/<project-id>.jpg      1200x630 social preview (JPEG works on every preview crawler)
- public/studio/<cover>-720.webp  720px-wide card image for phones and small grids

Run after adding or changing a cover:  python scripts/make_web_images.py
Originals are never modified. Outputs are overwritten, so the script is safe to rerun.
"""
import io
import re
import sys
import time
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
CONFIG = ROOT / "src" / "config" / "studio.config.ts"
PUBLIC = ROOT / "public"
OG_SIZE = (1200, 630)
CARD_WIDTH = 720
BACKGROUND = (9, 12, 11)  # --s-bg, used when a cover has transparency
# Drawn covers carry the same visible tag on social previews as on the site.
TAGS = {"illustration": "ILLUSTRATION", "reference": "TECHNICAL REFERENCE"}


def project_images():
    """Return (id, cover, imageKind) for each project with a cover, in config order."""
    projects = []
    for match in re.finditer(r'"(id|image|imageKind)":\s*"([^"]+)"', CONFIG.read_text(encoding="utf-8")):
        key, value = match.groups()
        if key == "id":
            projects.append({"id": value})
        elif projects:
            projects[-1].setdefault(key, value)
    return [(p["id"], p["image"], p.get("imageKind", "screenshot")) for p in projects if "image" in p]


def tag(image, text):
    draw = ImageDraw.Draw(image)
    font = ImageFont.load_default(size=17)
    left, top, right, bottom = draw.textbbox((0, 0), text, font=font)
    pad = 9
    x, y = OG_SIZE[0] - 14 - (right - left) - pad * 2, 14
    draw.rectangle((x, y, x + right - left + pad * 2, y + bottom - top + pad * 2), fill=BACKGROUND, outline=(60, 72, 66))
    draw.text((x + pad - left, y + pad - top), text, font=font, fill=(217, 232, 222))
    return image


def save(image, target, fmt, **options):
    """Encode in memory, then write; Windows scanners briefly lock fresh files on this drive."""
    buffer = io.BytesIO()
    image.save(buffer, fmt, **options)
    for attempt in range(5):
        try:
            target.write_bytes(buffer.getvalue())
            return
        except OSError:
            if attempt == 4:
                raise
            time.sleep(0.5)


def flatten(image):
    if image.mode in ("RGBA", "LA", "P"):
        image = image.convert("RGBA")
        canvas = Image.new("RGB", image.size, BACKGROUND)
        canvas.paste(image, mask=image.split()[-1])
        return canvas
    return image.convert("RGB")


def og_image(source, target, kind):
    image = flatten(Image.open(source))
    ratio = OG_SIZE[0] / OG_SIZE[1]
    width, height = image.size
    if width / height > ratio:
        crop_w = round(height * ratio)
        left = (width - crop_w) // 2
        box = (left, 0, left + crop_w, height)
    else:
        crop_h = round(width / ratio)
        # Screenshots carry their headline near the top; keep it in frame.
        top = min((height - crop_h) // 4, height - crop_h)
        box = (0, top, width, top + crop_h)
    image = image.crop(box).resize(OG_SIZE, Image.LANCZOS)
    if kind in TAGS:
        image = tag(image, TAGS[kind])
    save(image, target, "JPEG", quality=84, optimize=True, progressive=True)


def card_image(source, target):
    image = Image.open(source)
    image = image.convert("RGBA") if image.mode in ("RGBA", "LA", "P") else image.convert("RGB")
    width, height = image.size
    if width > CARD_WIDTH:
        image = image.resize((CARD_WIDTH, round(height * CARD_WIDTH / width)), Image.LANCZOS)
    save(image, target, "WEBP", quality=80, method=6)


def main():
    (PUBLIC / "og").mkdir(exist_ok=True)
    pairs = project_images()
    if not pairs:
        sys.exit("no project covers found in studio.config.ts")
    for project_id, image_path, kind in pairs:
        source = PUBLIC / image_path.lstrip("/")
        if not source.is_file():
            sys.exit(f"missing cover for {project_id}: {source}")
        og_image(source, PUBLIC / "og" / f"{project_id}.jpg", kind)
        card_image(source, source.with_name(f"{source.stem}-720.webp"))
    print(f"wrote {len(pairs)} social previews and {len(pairs)} card images")


if __name__ == "__main__":
    main()
