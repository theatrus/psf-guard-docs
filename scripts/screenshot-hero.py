#!/usr/bin/env python3
"""Render the homepage collage from recorded UI captures (requires Pillow).

Keep source pixels unchanged apart from scaling. The grid crop removes a
partial row at the bottom; the activation dialog remains complete.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

root = Path(__file__).resolve().parents[1]
shots = [
    ('1  Frame California Nebula', 'hero-california-planning.jpg', None),
    ('2  Review what N.I.N.A. will shoot', 'hero-california-activation.jpg', (424, 190, 1320, 953)),
    ('3  Review the images', 'hero-california-grid.jpg', (0, 0, 1744, 1088)),
    ('4  Preview California in Foraxx SHO', 'stack-foraxx-california.jpg', None),
]
canvas = Image.new('RGB', (2400, 1500), '#111820')
draw = ImageDraw.Draw(canvas)
font_path = Path('/System/Library/Fonts/Supplemental/Arial Bold.ttf')
font = ImageFont.truetype(str(font_path), 34) if font_path.exists() else ImageFont.load_default(size=34)
for i, (label, name, crop) in enumerate(shots):
    x = 24 + (i % 2) * 1188
    y = 24 + (i // 2) * 738
    draw.rounded_rectangle((x, y, x + 1164, y + 714), radius=16, fill='#20272f')
    draw.text((x + 22, y + 16), label, fill='#98d8ef', font=font)
    source = Image.open(root / 'assets' / name).convert('RGB')
    if crop:
        source = source.crop(crop)
    image = ImageOps.contain(source, (1136, 634), Image.Resampling.LANCZOS)
    canvas.paste(image, (x + (1164-image.width)//2, y + 66 + (634-image.height)//2))
canvas.save(root / 'assets/hero-flow.jpg', quality=95, subsampling=0)
