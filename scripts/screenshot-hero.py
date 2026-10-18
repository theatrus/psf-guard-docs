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
    ('4  Review the images', 'hero-california-grid.jpg', (0, 0, 1744, 1088)),
    ('5  Inspect the color stack', 'stack-foraxx-california.jpg', None),
]
canvas = Image.new('RGB', (2400, 1860), '#111820')
draw = ImageDraw.Draw(canvas)
font_path = Path('/System/Library/Fonts/Supplemental/Arial Bold.ttf')
font = ImageFont.truetype(str(font_path), 34) if font_path.exists() else ImageFont.load_default(size=34)
for i, (label, name, crop) in enumerate(shots):
    x = 24 + (i % 2) * 1188
    y = 24 if i < 2 else 1000
    draw.rounded_rectangle((x, y, x + 1164, y + 714), radius=16, fill='#20272f')
    draw.text((x + 22, y + 16), label, fill='#98d8ef', font=font)
    source = Image.open(root / 'assets' / name).convert('RGB')
    if crop:
        source = source.crop(crop)
    image = ImageOps.contain(source, (1136, 634), Image.Resampling.LANCZOS)
    canvas.paste(image, (x + (1164-image.width)//2, y + 66 + (634-image.height)//2))
# A diagram, not a simulated N.I.N.A. screenshot: telescope, mount and computer.
accent = '#98d8ef'
text = '#e6edf3'
muted = '#b5c2cf'
small = ImageFont.truetype(str(font_path), 28) if font_path.exists() else ImageFont.load_default(size=28)
draw.rounded_rectangle((24, 760, 2376, 976), radius=16, fill='#20272f')
# Telescope tube points up and left; the mount sits on a tripod.
draw.polygon([(104, 812), (122, 780), (258, 849), (240, 883)], fill=accent)
draw.line((109, 801, 95, 827), fill=text, width=8)
draw.line((206, 864, 206, 907), fill=text, width=9)
draw.ellipse((194, 868, 218, 892), fill=accent)
draw.line((206, 902, 157, 955), fill=muted, width=7)
draw.line((206, 902, 255, 955), fill=muted, width=7)
draw.line((206, 902, 206, 955), fill=muted, width=7)
# The monitor is explicitly a labelled illustration.
draw.rounded_rectangle((300, 806, 504, 922), radius=10, outline=accent, width=4)
draw.text((334, 843), 'N.I.N.A.', fill=text, font=small)
draw.line((402, 923, 402, 944), fill=muted, width=6)
draw.line((363, 946, 441, 946), fill=muted, width=6)
draw.text((558, 790), '3  Capture at the telescope with N.I.N.A.', fill=accent, font=font)
draw.text((558, 846), 'Target Scheduler runs the plan.', fill=text, font=small)
draw.text((558, 892), 'PSF Guard Sync transfers capture records and, optionally, image files.', fill=muted, font=small)
# Connect the planning row to capture, then capture to image review.
for x, y in [(1788, 744), (606, 980)]:
    draw.polygon([(x-10, y), (x+10, y), (x, y+14)], fill=accent)
# Review and stacking form a two-way loop, not a one-off final step.
draw.rounded_rectangle((24, 1736, 2376, 1836), radius=16, fill='#20272f')
draw.line((830, 1770, 1570, 1770), fill=accent, width=3)
draw.polygon([(1570, 1770), (1555, 1762), (1555, 1778)], fill=accent)
draw.line((1570, 1807, 830, 1807), fill=accent, width=3)
draw.polygon([(830, 1807), (845, 1799), (845, 1815)], fill=accent)
draw.text((58, 1768), 'Review grades and processing', fill=text, font=small)
draw.text((1610, 1768), 'Rebuild and inspect the stack', fill=text, font=small)
canvas.save(root / 'assets/hero-flow.jpg', quality=95, subsampling=0)
