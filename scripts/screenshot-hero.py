#!/usr/bin/env python3
"""Rebuild the guide's four-step collage from recorded, unaltered UI captures.

Requires Pillow. Images are scaled to fit; their contents are not cropped.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
shots = [
    ('1  Frame the mosaic', 'plan-workspace.jpg'),
    ('2  Review activation', 'activation-preview.png'),
    ('3  Review the session', 'sequence-session.jpg'),
    ('4  Preview the color stack', 'stack-foraxx-card.jpg'),
]
canvas = Image.new('RGB', (2400, 1800), '#111820')
draw = ImageDraw.Draw(canvas)
font_path = Path('/System/Library/Fonts/Supplemental/Arial Bold.ttf')
font = ImageFont.truetype(str(font_path), 32) if font_path.exists() else ImageFont.load_default(size=32)
for i, (label, name) in enumerate(shots):
    x = 28 + (i % 2) * 1186
    y = 28 + (i // 2) * 886
    draw.rounded_rectangle((x, y, x + 1158, y + 858), radius=16, fill='#20272f')
    draw.text((x + 22, y + 16), label, fill='#98d8ef', font=font)
    image = Image.open(root / 'assets' / name).convert('RGB')
    image.thumbnail((1130, 780), Image.Resampling.LANCZOS)
    canvas.paste(image, (x + (1158-image.width)//2, y + 66 + (780-image.height)//2))
canvas.save(root / 'assets/hero-flow.jpg', quality=95, subsampling=0)
