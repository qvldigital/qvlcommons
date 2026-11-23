"""Rendert alle Illustrations-SVGs zu PNG (1200 px, transparent), baut overview.png
und spiegelt alles nach brand-kit/illustrations/. Optional: Namen als Argumente."""
import asyncio, json, os, shutil, sys
from playwright.async_api import async_playwright
from PIL import Image, ImageDraw

root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..')
d = os.path.join(root, 'design-system', 'assets', 'illustrations')
kit = os.path.join(root, 'brand-kit', 'illustrations')
idx = json.load(open(os.path.join(d, 'index.json')))
only = sys.argv[1:]

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={'width': 600, 'height': 600}, device_scale_factor=2)
        for n in idx:
            if only and n not in only: continue
            await pg.goto('file://' + os.path.abspath(os.path.join(d, f'qvl-illu-{n}.svg')))
            await pg.screenshot(path=os.path.join(d, f'qvl-illu-{n}.png'), omit_background=True)
        await b.close()
asyncio.run(main())

names, cols, cell = list(idx), 6, 300
sheet = Image.new('RGB', (cols * cell, -(-len(names) // cols) * (cell + 30)), 'white')
dr = ImageDraw.Draw(sheet)
for i, n in enumerate(names):
    im = Image.open(os.path.join(d, f'qvl-illu-{n}.png')).resize((cell, cell))
    x, y = (i % cols) * cell, (i // cols) * (cell + 30)
    sheet.paste(im, (x, y), im); dr.text((x + 10, y + cell + 6), n, fill='#1a1a1a')
sheet.save(os.path.join(d, 'overview.png'))

os.makedirs(kit, exist_ok=True)
for f in os.listdir(d):
    if f.startswith('qvl-illu-'): shutil.copy(os.path.join(d, f), kit)
print(len(names), 'illustrations')
