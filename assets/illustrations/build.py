"""QVL-Illustrationen: freistehende Motive ohne Insel.

Stil: flache CI-Farben, Petrol-Kontur 6 px, harter Petrol-Block-Schatten (+12/+12),
45°-Fasen oben rechts / unten links, Akzente in Gelb, Orange, Pink.
Text wird mit fontTools aus Bebas Neue in Pfade umgewandelt (SVG ohne Schrift).
Ausgabe: design-system/assets/illustrations/qvl-illu-<name>.svg (+ index.json).
Danach PNGs und Übersicht mit render.py erzeugen; brand-kit/illustrations/ ist eine Kopie.

  python3 assets/illustrations/build.py && python3 assets/illustrations/render.py
Braucht: pip install fonttools brotli playwright pillow
"""
import os
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

P, PM, PP = '#006666', '#4c9393', '#cce0e0'          # Petrol, Petrol-Mid, Petrol-Pale
O, OP = '#ff6600', '#ffc199'                         # Orange, Orange-Pale
Y = '#ffff00'                                         # Gelb (nie hinter Text)
K, KP = '#b74585', '#f6dcea'                          # Pink, Pink-Pale
W, G, GL, I = '#ffffff', '#cccccc', '#e5e5e5', '#1a1a1a'
SW = 6        # Konturstärke
SH = 12       # Schattenversatz

# ---------- Schrift als Pfad ----------
FONT = TTFont(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'fonts', 'bebas-neue-latin-400-normal.woff2'))
GS, CMAP, UPM = FONT.getGlyphSet(), FONT.getBestCmap(), FONT['head'].unitsPerEm

def tx(t, x, y, size, fill=I, anchor='start', track=0):
    sc = size / UPM
    ws = [GS[CMAP[ord(c)]].width * sc + track for c in t]
    cx = x - (sum(ws) - track) / 2 if anchor == 'middle' else x
    d = ''
    for c, w in zip(t, ws):
        pen = SVGPathPen(GS)
        GS[CMAP[ord(c)]].draw(TransformPen(pen, (sc, 0, 0, -sc, cx, y)))
        d += pen.getCommands(); cx += w
    return f'<path d="{d}" fill="{fill}"/>'

# ---------- Primitive ----------
def _sh(svg, sh):
    """Block-Schatten: dieselbe Form in Petrol, versetzt."""
    if not sh: return svg
    import re
    s = re.sub(r'fill="[^"]+"', f'fill="{P}"', svg, count=1)
    return f'<g transform="translate({SH} {SH})">{s}</g>' + svg

def chd(x, y, w, h, c):
    return (f'M{x} {y}H{x+w-c}L{x+w} {y+c}V{y+h}H{x+c}L{x} {y+h-c}Z' if c
            else f'M{x} {y}H{x+w}V{y+h}H{x}Z')

def R(x, y, w, h, fill, c=0, sh=False, stroke=P, sw=SW):
    return _sh(f'<path d="{chd(x,y,w,h,c)}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>', sh)

def F(x, y, w, h, fill):                       # Fläche ohne Kontur
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}"/>'

def C(cx, cy, r, fill, sh=False, stroke=P, sw=SW):
    return _sh(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>', sh)

def PA(d, fill, sh=False, stroke=P, sw=SW, extra=''):
    lj = '' if 'stroke-linejoin' in extra else 'stroke-linejoin="miter"'
    return _sh(f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" {lj} {extra}/>', sh)

def LN(d, stroke=P, sw=SW, cap='square'):
    return f'<path d="{d}" fill="none" stroke="{stroke}" stroke-width="{sw}" stroke-linecap="{cap}"/>'

def lines(x, y, rows, color=K, h=10):     # Bewegungs-/Akzentstriche
    return ''.join(F(x + dx, y + i * (h + 12), w, h, color) for i, (dx, w) in enumerate(rows))

def text_lines(x, y, widths, color=G, h=10, gap=18):
    return ''.join(F(x, y + i * gap, w, h, color) for i, w in enumerate(widths))

def ball(cx, cy, r, sh=False):
    """Volleyball: drei gebogene Nähte vom Zentrum, je eine Parallelnaht."""
    import math
    w = max(2.5, r / 11)
    seams = ''
    for a in (-90, 30, 150):
        for k, f in ((0, 1.0), (1, 0.55)):
            a0 = math.radians(a + k * 38)
            a1 = math.radians(a + 70 + k * 38)
            sx, sy = cx + r * 0.12 * k * math.cos(a0 + 1.2), cy + r * 0.12 * k * math.sin(a0 + 1.2)
            sx, sy = (cx, cy) if k == 0 else (cx + r * 0.42 * math.cos(math.radians(a + 60)), cy + r * 0.42 * math.sin(math.radians(a + 60)))
            ex, ey = cx + r * math.cos(a1), cy + r * math.sin(a1)
            qx, qy = cx + r * 0.75 * math.cos(math.radians(a + 20 + k * 30)), cy + r * 0.75 * math.sin(math.radians(a + 20 + k * 30))
            seams += f'M{sx:.1f} {sy:.1f}Q{qx:.1f} {qy:.1f} {ex:.1f} {ey:.1f}'
    b = (f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{Y}"/>'
         f'<path d="{seams}" fill="none" stroke="{I}" stroke-width="{w:.1f}" stroke-linecap="round"/>'
         f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{I}" stroke-width="{max(3, r/9):.1f}"/>')
    return (f'<circle cx="{cx+SH*0.8}" cy="{cy+SH*0.8}" r="{r}" fill="{P}"/>' if sh else '') + b

def person(cx, top, r, fill):
    bot = top + 4.4 * r
    return (f'<circle cx="{cx}" cy="{top+r}" r="{r}" fill="{fill}"/>'
            f'<path d="M{cx-1.45*r} {bot}V{top+3.4*r}Q{cx-1.45*r} {top+2.3*r} {cx} {top+2.3*r}'
            f'Q{cx+1.45*r} {top+2.3*r} {cx+1.45*r} {top+3.4*r}V{bot}Z" fill="{fill}"/>')

def tag(x, y, w, h, fill, inner='', c=14):     # gefaste Badge-Kachel mit Ink-Schatten
    return (f'<path d="{chd(x+6,y+6,w,h,c)}" fill="{I}"/>'
            f'<path d="{chd(x,y,w,h,c)}" fill="{fill}"/>' + inner)

def check(x, y, s=1, color=I, sw=None):
    return LN(f'M{x} {y} l{14*s} {14*s} l{28*s} {-30*s}', color, sw or 7*s, 'butt')

def envelope(x, y, w, h, flap=PP, sh=True, sw=SW):
    s = R(x, y, w, h, W, sh=sh, sw=sw)
    s += LN(f'M{x} {y+h}L{x+w*0.42} {y+h*0.52}M{x+w} {y+h}L{x+w*0.58} {y+h*0.52}', P, sw * 0.7)
    s += PA(f'M{x} {y}H{x+w}L{x+w/2} {y+h*0.58}Z', flap, sw=sw, extra='stroke-linejoin="bevel"')
    return s

def phone(x, y, w, h, screen=W, sh=True):
    s = R(x, y, w, h, P, c=18, sh=sh)
    s += f'<path d="{chd(x+14,y+40,w-28,h-80,10)}" fill="{screen}"/>'
    s += F(x + w/2 - 22, y + 18, 44, 8, PM) + F(x + w/2 - 30, y + h - 26, 60, 8, PM)
    return s

def ticket(x, y, w, h, fill, tear, notches=True, sw=SW):
    c, r = 16, 14
    d = (f'M{x} {y}H{tear-r}a{r} {r} 0 0 0 {2*r} 0H{x+w-c}L{x+w} {y+c}V{y+h}'
         f'H{tear+r}a{r} {r} 0 0 0 {-2*r} 0H{x+c}L{x} {y+h-c}Z') if notches else chd(x, y, w, h, 16)
    return f'<path d="{d}" fill="{fill}" stroke="{P}" stroke-width="{sw}"/>'

# ---------- Motive ----------
M = {}
def motif(group, name, label):
    def deco(fn):
        M[name] = (group, label, fn)
        return fn
    return deco

# ===== Volleyball & Liga =====
@motif('liga', 'ball', 'Volleyball')
def _():
    return lines(96, 236, [(30, 70), (0, 100), (30, 70)], K, 12) + ball(330, 300, 150, sh=True)

@motif('liga', 'net', 'Netz mit Ball')
def _():
    s = R(110, 180, 20, 290, PM, sh=True) + R(470, 180, 20, 290, PM, sh=True)
    s += F(130, 196, 340, 18, W) + LN('M130 196H470M130 214H470', P, 5)
    s += ''.join(LN(f'M{x} 214V330', P, 3) for x in range(150, 470, 22))
    s += ''.join(LN(f'M130 {y}H470', P, 3) for y in range(236, 334, 22))
    s += LN('M130 330H470', P, 5)
    s += LN('M150 120 Q260 40 360 104', O, 6, 'round').replace('fill="none"', 'fill="none" stroke-dasharray="2 18"')
    return s + ball(410, 132, 46)

@motif('liga', 'court', 'Spielfeld')
def _():
    s = R(130, 90, 340, 430, OP, c=24, sh=True)
    s += LN('M160 120H440V490H160Z', W, 6) + LN('M160 245H440M160 365H440', W, 5)
    s += F(130, 300, 340, 10, P) + C(130, 305, 9, W, sw=5) + C(470, 305, 9, W, sw=5)
    return s + ball(380, 190, 30)

@motif('liga', 'whistle', 'Pfeife')
def _():
    s = LN('M210 236 Q150 150 232 92', P, 10, 'round')
    s += PA('M300 240H470V320H360Z', W, sh=True)
    s += C(270, 330, 120, W, sh=True) + C(270, 330, 44, PP)
    s += F(372, 212, 40, 30, P)
    s += ''.join(f'<rect x="{x}" y="{y}" width="{w}" height="16" fill="{Y}" transform="rotate({a} {x} {y})"/>'
                 for x, y, w, a in [(420, 180, 60, -35), (460, 214, 66, -10)])
    return s

@motif('liga', 'scoreboard', 'Anzeigetafel')
def _():
    s = LN('M210 150L250 80M390 150L350 80', P, 8) + F(240, 72, 120, 12, P)
    s += R(100, 150, 400, 260, P, c=24, sh=True)
    s += f'<path d="{chd(128,178,150,150,12)}" fill="{I}"/><path d="{chd(322,178,150,150,12)}" fill="{I}"/>'
    s += tx('2', 203, 300, 120, Y, 'middle') + tx('1', 397, 300, 120, Y, 'middle')
    s += F(290, 222, 20, 20, O) + F(290, 268, 20, 20, O)
    s += F(128, 350, 150, 26, W) + F(322, 350, 150, 26, W)
    s += F(140, 358, 90, 10, P) + F(334, 358, 70, 10, K)
    return s

@motif('liga', 'trophy', 'Pokal')
def _():
    s = LN('M188 170 Q110 180 128 250 Q140 300 214 300M412 170 Q490 180 472 250 Q460 300 386 300', P, 14)
    s += PA('M180 120H420V210Q420 350 300 360Q180 350 180 210Z', O, sh=True)
    s += F(276, 360, 48, 60, P) + R(200, 420, 200, 44, P, c=12, sh=True) + R(170, 464, 260, 40, PM, c=12)
    return s + ball(300, 225, 52)

@motif('liga', 'medal', 'Medaille')
def _():
    s = PA('M200 70H280L330 230H250Z', K, sw=5) + PA('M400 70H320L270 230H350Z', P, sw=5)
    s += C(300, 340, 130, Y, sh=True, stroke=P) + C(300, 340, 96, W)
    s += PA('M300 270L320 318L372 320L332 352L346 402L300 374L254 402L268 352L228 320L280 318Z', O, stroke=O, sw=2)
    return s

@motif('liga', 'jersey', 'Trikot')
def _():
    d = 'M220 110L170 130L90 220L150 280L190 240V500H410V240L450 280L510 220L430 130L380 110Q300 170 220 110Z'
    s = PA(d, P, sh=True)
    s += LN('M220 110Q300 170 380 110', Y, 10, 'butt')
    s += F(190, 440, 220, 18, PM)
    return s + tx('7', 300, 400, 190, W, 'middle')

@motif('liga', 'kneepads', 'Knieschoner')
def _():
    s = ''
    for x in (120, 320):
        s += R(x, 140, 160, 320, W, c=30, sh=True)
        s += PA(f'M{x+20} 230H{x+140}V350Q{x+80} 390 {x+20} 350Z', P, sw=0)
        s += F(x, 160, 160, 16, PM) + F(x, 424, 160, 16, PM)
        s += ''.join(F(x + 44 + i * 26, 270, 10, 60, PP) for i in range(3))
    return s

@motif('liga', 'lineup', 'Aufstellung')
def _():
    s = R(130, 110, 340, 400, W, c=24, sh=True) + R(240, 90, 120, 44, P, c=10)
    s += F(280, 102, 40, 10, Y)
    s += LN('M170 170H430V470H170Z', PM, 4) + F(170, 160, 260, 12, P)
    pos = [(370, 420, '1'), (370, 260, '2'), (300, 220, '3'), (230, 260, '4'), (230, 420, '5'), (300, 360, '6')]
    for x, y, n in pos:
        s += C(x, y, 28, O if n == '1' else PP, sw=4) + tx(n, x, y + 14, 38, I, 'middle')
    s += LN('M372 384 Q400 330 380 296', K, 6, 'butt') + LN('M368 306 L380 290 L394 306', K, 6, 'butt')
    return s

@motif('liga', 'standings', 'Tabelle')
def _():
    s = R(100, 120, 400, 380, W, c=24, sh=True) + F(103, 123, 380, 56, P)
    s += ''.join(F(x, 144, w, 14, W) for x, w in [(130, 40), (200, 140), (390, 70)])
    for i in range(4):
        y = 190 + i * 74
        s += F(103, y, 394, 70, GL if i % 2 else W)
        s += tx(str(i + 1), 150, y + 52, 46, P, 'middle')
        s += F(200, y + 26, [150, 120, 160, 100][i], 16, I if i == 0 else G)
        s += F(400, y + 26, 50, 16, P if i == 0 else G)
    s += F(103, 190, 8, 70, O)
    s += tag(430, 70, 90, 80, O, LN('M475 132V92M458 108L475 90L492 108', I, 8, 'butt'))
    return s

@motif('liga', 'matchday', 'Spieltag')
def _():
    s = R(110, 140, 380, 340, W, c=24, sh=True) + F(113, 143, 374, 62, P)
    s += R(180, 100, 24, 72, I, sw=0) + R(396, 100, 24, 72, I, sw=0)
    for r in range(3):
        for c in range(5):
            x, y = 146 + c * 64, 232 + r * 76
            hit = (r, c) == (1, 3)
            s += F(x, y, 46, 50, P if hit else GL)
            if hit: s += ball(x + 23, y + 25, 19)
    return s

@motif('liga', 'team', 'Team')
def _():
    s = f'<g transform="translate({SH} {SH})">' + person(185, 190, 38, P) + person(415, 190, 38, P) + person(300, 150, 48, P) + '</g>'
    s += person(185, 190, 38, PM) + person(415, 190, 38, PM) + person(300, 150, 48, W)
    s += f'<circle cx="300" cy="198" r="48" fill="none" stroke="{P}" stroke-width="6"/>'
    s += f'<path d="M230 361V304Q230 251 300 251Q370 251 370 304V361" fill="none" stroke="{P}" stroke-width="6"/>'
    s += F(110, 360, 380, 16, P)
    return s + ball(470, 140, 34)

@motif('liga', 'stopwatch', 'Auszeit')
def _():
    s = R(270, 70, 60, 40, P, sw=0) + F(240, 96, 120, 22, P) + LN('M420 150L450 120', P, 14)
    s += C(300, 320, 170, W, sh=True) + C(300, 320, 140, PP, sw=0)
    s += PA('M300 320L300 180A140 140 0 0 1 421 250Z', O, sw=0)
    s += LN('M300 320L360 230', I, 10) + C(300, 320, 14, I, sw=0)
    return s

# ===== Kontaktwege =====
@motif('kontakt', 'website', 'Website')
def _():
    s = R(90, 120, 420, 320, W, c=24, sh=True) + F(93, 123, 396, 44, P)
    s += ''.join(F(x, 139, 12, 12, c) for x, c in [(112, Y), (132, O), (152, W)])
    s += F(280, 137, 190, 16, PM)
    s += f'<path d="{chd(120,190,360,110,12)}" fill="{O}"/>' + ball(420, 245, 36)
    s += F(144, 220, 160, 14, I) + F(144, 246, 110, 12, I)
    s += text_lines(120, 324, [360, 300, 330])
    s += f'<path d="{chd(120,384,130,30,8)}" fill="{K}"/>'
    s += R(250, 440, 100, 50, P, sw=0) + R(200, 488, 200, 18, P, sw=0)
    return s

@motif('kontakt', 'mail', 'Mail')
def _():
    s = lines(70, 250, [(20, 60), (40, 40), (0, 80)], K)
    s += envelope(150, 200, 320, 220)
    s += tag(400, 104, 110, 110, O,
             f'<circle cx="455" cy="159" r="16" fill="none" stroke="{I}" stroke-width="9"/>'
             f'<path d="M471 146v22q0 12 11 12q11 0 11 -21a38 38 0 1 0 -16 31" fill="none" stroke="{I}" stroke-width="9"/>')
    return s

@motif('kontakt', 'newsletter', 'Newsletter')
def _():
    s = R(110, 90, 250, 400, W, c=24, sh=True) + F(113, 93, 228, 60, P) + F(136, 114, 100, 18, Y)
    s += f'<path d="{chd(136,174,200,90,10)}" fill="{O}"/>' + ball(300, 219, 28)
    s += F(152, 196, 100, 12, I) + F(152, 218, 70, 10, I)
    s += text_lines(136, 290, [200, 160, 186, 130])
    s += f'<path d="{chd(136,380,90,28,8)}" fill="{K}"/>'
    for x, y, a, f in [(380, 120, -14, PP), (410, 240, -4, W), (380, 360, 10, PP)]:
        s += f'<g transform="rotate({a} {x+50} {y+34})">{envelope(x, y, 100, 68, f, sh=False, sw=5)}</g>'
    return s

@motif('kontakt', 'community', 'Community-Chat')
def _():
    def bubble(x, y, w, h, fill, left=True):
        tx_ = x + 40 if left else x + w - 70
        tail = f'M{tx_} {y+h}H{tx_+30}L{tx_ + (0 if left else 30)} {y+h+40}Z'
        return (_sh(f'<path d="{chd(x,y,w,h,22)}" fill="{fill}" stroke="{P}" stroke-width="{SW}"/>', True)
                + _sh(f'<path d="{tail}" fill="{fill}" stroke="{P}" stroke-width="{SW}" stroke-linejoin="bevel"/>', True)
                + F(tx_ + 3, y + h - 4, 24, 8, fill))
    s = bubble(80, 100, 280, 190, PP)
    s += person(150, 140, 22, PM) + person(270, 140, 22, PM) + person(210, 128, 27, P)
    s += bubble(250, 250, 270, 160, W, left=False)
    s += F(282, 288, 190, 14, I) + text_lines(282, 318, [150, 170])
    s += f'<path d="{chd(282,368,90,20,6)}" fill="{O}"/>'
    s += tag(420, 80, 100, 64, Y, ''.join(C(x, 112, 8, I, sw=0) for x in (446, 470, 494)))
    return s

@motif('kontakt', 'push', 'Push-Nachricht')
def _():
    s = phone(190, 70, 220, 450, GL)
    s += f'<path d="{chd(220,180,160,60,8)}" fill="{W}"/>' + F(232, 196, 90, 10, G) + F(232, 214, 120, 10, G)
    s += lines(90, 200, [(30, 50), (0, 80)], K)
    s += R(120, 270, 360, 100, W, c=14, sh=True) + R(140, 290, 60, 60, O, c=8, sw=0)
    s += ball(170, 320, 20) + F(220, 296, 160, 14, I) + F(220, 322, 220, 10, G) + F(220, 340, 180, 10, G)
    s += tag(430, 236, 56, 56, K, tx('3', 458, 280, 40, W, 'middle'), c=10)
    return s

@motif('kontakt', 'social', 'Social Media')
def _():
    s = phone(170, 70, 240, 460, W)
    for r in range(3):
        for c in range(3):
            x, y = 196 + c * 64, 130 + r * 64
            s += F(x, y, 58, 58, [PP, OP, P, KP, PM, PP, OP, PP, P][r * 3 + c])
    s += ball(292, 224, 22)
    s += text_lines(196, 340, [180, 140, 160])
    s += tag(370, 120, 120, 90, K,
             '<path d="M430 192 L400 162 A16 16 0 0 1 430 140 A16 16 0 0 1 460 162 Z" fill="#ffffff"/>')
    s += F(110, 300, 50, 12, O) + F(90, 324, 70, 12, O)
    return s

@motif('kontakt', 'livestream', 'Livestream')
def _():
    s = R(80, 110, 440, 290, P, c=24, sh=True) + F(104, 134, 392, 242, I)
    s += f'<path d="{chd(104,134,392,242,0)}" fill="{PM}"/>'
    s += person(220, 200, 34, PP) + person(380, 200, 34, PP) + F(150, 330, 300, 24, P)
    s += C(300, 255, 50, W, sw=0) + PA('M286 230L330 255L286 280Z', P, sw=0)
    s += tag(116, 148, 100, 40, K, C(136, 168, 7, W, sw=0) + tx('LIVE', 180, 182, 30, W, 'middle'), c=8)
    s += R(260, 400, 80, 50, P, sw=0) + R(190, 448, 220, 20, P, sw=0)
    return s

@motif('kontakt', 'videocall', 'Videocall')
def _():
    s = R(80, 100, 440, 330, W, c=24, sh=True)
    tiles = [(104, 124, PP, PM), (306, 124, OP, O), (104, 272, KP, K), (306, 272, PP, P)]
    for x, y, bg, fg in tiles:
        s += F(x, y, 190, 136, bg) + person(x + 95, y + 30, 24, fg)
    s += R(200, 452, 200, 56, P, c=12, sw=0)
    s += C(250, 480, 16, PP, sw=0) + C(300, 480, 16, PP, sw=0) + C(350, 480, 16, K, sw=0)
    return s

@motif('kontakt', 'qr-code', 'QR-Code')
def _():
    s = R(140, 120, 320, 320, W, c=24, sh=True)
    import random
    random.seed(7)
    for r in range(11):
        for c in range(11):
            corner = (r < 3 and c < 3) or (r < 3 and c > 7) or (r > 7 and c < 3)
            if not corner and random.random() < 0.48:
                s += F(178 + c * 22, 158 + r * 22, 20, 20, I)
    for x, y in [(178, 158), (376, 158), (178, 356)]:
        s += F(x, y, 64, 64, I) + F(x + 10, y + 10, 44, 44, W) + F(x + 20, y + 20, 24, 24, I)
    s += f'<rect x="268" y="248" width="64" height="64" fill="{Y}" stroke="{I}" stroke-width="4"/>' + ball(300, 280, 22)
    s += LN('M110 170V90H190M410 90H490V170M490 390V470H410M190 470H110V390', O, 12, 'butt')
    return s

@motif('kontakt', 'cloud', 'Cloud & Dateien')
def _():
    s = ''
    for i, (x, y) in enumerate([(140, 200), (170, 230)]):
        s += _sh(f'<path d="M{x} {y}H{x+150}L{x+190} {y+40}V{y+230}H{x}Z" fill="{GL if i == 0 else W}" stroke="{P}" stroke-width="{SW}"/>', i == 1)
    s += PA('M320 230V270H360Z', PP, extra='stroke-linejoin="bevel"')
    s += text_lines(196, 300, [130, 100, 130, 80])
    s += f'<path d="{chd(196,396,70,30,8)}" fill="{P}"/>' + F(208, 407, 46, 8, W)
    cl = [(380, 150, 46), (434, 126, 60), (488, 160, 40)]
    s += ''.join(f'<circle cx="{x+10}" cy="{y+10}" r="{r+6}" fill="{P}"/>' for x, y, r in cl) + F(384, 160, 114, 56, P)
    s += ''.join(f'<circle cx="{x}" cy="{y}" r="{r+6}" fill="{P}"/>' for x, y, r in cl) + F(374, 150, 114, 56, P)
    s += ''.join(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{W}"/>' for x, y, r in cl) + F(380, 150, 104, 50, W)
    s += LN('M330 200 Q330 150 366 140', O, 8) + LN('M352 128L368 140L352 154', O, 8, 'butt')
    s += LN('M440 230 Q446 290 404 330', K, 8) + LN('M398 312L402 334L424 330', K, 8, 'butt')
    return s

@motif('kontakt', 'forms', 'Formular')
def _():
    s = R(150, 120, 260, 360, W, c=24, sh=True) + R(225, 92, 110, 48, P, c=10) + F(266, 104, 30, 12, Y)
    for i, y in enumerate([170, 230, 290, 350]):
        on = i < 2
        s += R(180, y, 36, 36, P if on else W, sw=4)
        if on: s += check(186, y + 16, 0.75, Y, 6)
        s += F(236, y + 6, 140 - i * 14, 12, I if on else G) + F(236, y + 26, 100, 8, G)
    s += f'<g transform="rotate(35 430 300)">' + R(414, 140, 34, 190, K, sw=4) + F(414, 140, 34, 30, P) + \
         PA('M414 330H448L431 366Z', Y, stroke=I, sw=3) + PA('M425 354H437L431 366Z', I, sw=0) + '</g>'
    s += LN('M220 430 q22 -28 44 0 t44 -4', O, 6)
    return s

@motif('kontakt', 'magic-link', 'Magic Link')
def _():
    s = envelope(110, 230, 300, 210)
    s += f'<g transform="rotate(-30 400 200)">' + C(400, 150, 56, Y, sh=True, stroke=I) + C(400, 150, 20, W, stroke=I, sw=5) + \
         R(386, 200, 28, 170, Y, stroke=I) + F(414, 300, 36, 20, I) + F(414, 336, 26, 20, I) + '</g>'
    s += ''.join(PA(f'M{x} {y-18}L{x+6} {y-6}L{x+18} {y}L{x+6} {y+6}L{x} {y+18}L{x-6} {y+6}L{x-18} {y}L{x-6} {y-6}Z', O, sw=0)
                 for x, y in [(480, 300), (500, 220), (150, 170)])
    return s

# ===== Organisation =====
@motif('organisation', 'tickets-50', 'Tickets -50 %')
def _():
    return _tickets('-50 %', 'AUF TICKETS', '%', 76)

@motif('organisation', 'tickets-10-free', '10 Free Tickets')
def _():
    return _tickets('10 ×', 'FREE TICKETS', '0 €', 62)

def _tickets(big, small, badge, bsize):
    s = f'<g transform="rotate(-9 300 250)">{ticket(150,150,300,160,PP,370)}</g>'
    s += f'<g transform="translate({SH} {SH})"><path d="{chd(120,212,340,176,16)}" fill="{P}"/></g>'
    s += ticket(120, 212, 340, 176, W, 384)
    s += ''.join(F(382, y, 5, 12, P) for y in range(238, 372, 22))
    s += ball(423, 300, 22) + tx(big, 146, 312, 96, P) + tx(small, 148, 356, 34, K, track=2)
    s += tag(384, 78, 124, 100, O, tx(badge, 446, 128 + bsize * 0.36, bsize, I, 'middle'), c=16)
    return s

@motif('organisation', 'vote', 'Abstimmung')
def _():
    s = f'<g transform="rotate(-8 300 200)">' + R(220, 80, 160, 190, W, c=16, sh=True) + check(260, 160, 1.4, P, 12) + F(250, 230, 100, 10, G) + '</g>'
    s += R(120, 260, 360, 240, P, c=24, sh=True) + F(200, 270, 200, 16, I)
    s += F(150, 330, 300, 60, PM) + tx('DV', 300, 378, 56, W, 'middle')
    s += F(150, 420, 120, 14, PP)
    return s

@motif('organisation', 'agenda', 'Tagesordnung')
def _():
    s = R(140, 90, 320, 420, W, c=24, sh=True) + F(143, 93, 298, 70, P)
    s += tx('TOP', 170, 146, 48, Y)
    for i in range(5):
        y = 190 + i * 60
        s += R(170, y, 40, 40, O if i == 2 else PP, c=6, sw=0) + tx(str(i + 1), 190, y + 32, 32, I, 'middle')
        s += F(228, y + 8, [170, 140, 190, 120, 160][i], 12, I if i == 2 else G) + F(228, y + 26, 90, 8, G)
    return s

@motif('organisation', 'statute', 'Satzung')
def _():
    s = R(170, 90, 250, 350, W, c=24, sh=True)
    s += R(140, 120, 250, 350, W, c=24, sh=True) + F(170, 152, 120, 22, P)
    s += text_lines(170, 196, [190, 160, 186, 140, 180, 120], G, 10, 22)
    s += PA('M330 420L310 510L345 490L370 520L380 430Z', K, sw=0)
    s += C(355, 410, 52, O, stroke=I, sw=5) + C(355, 410, 34, O, stroke=I, sw=3)
    s += PA('M355 384L362 402L382 403L366 415L372 434L355 423L338 434L344 415L328 403L348 402Z', I, sw=0)
    return s

@motif('organisation', 'finance', 'Finanzen')
def _():
    s = ''
    for i in range(5):
        y = 430 - i * 34
        s += _sh(f'<ellipse cx="220" cy="{y}" rx="100" ry="30" fill="{O}" stroke="{P}" stroke-width="{SW}"/>', i == 0)
        s += F(120, y - 2, 200, 4, O) if i else ''
    s += C(390, 270, 110, Y, sh=True, stroke=P)
    s += C(390, 270, 84, Y, stroke=I, sw=4)
    s += tx('€', 390, 310, 120, I, 'middle')
    s += LN('M110 170L190 110L240 150L320 80', K, 10) + LN('M290 78H322V110', K, 10, 'butt')
    return s

@motif('organisation', 'receipt', 'Auslagen')
def _():
    zig = ''.join(f'L{x} {500 if (x // 30) % 2 else 484}' for x in range(150, 391, 30))
    s = PA(f'M150 100H390V490{zig[::-1] if False else ""}L390 500' + ''.join(f'L{x} {500 if i % 2 else 484}' for i, x in enumerate(range(360, 149, -30))) + 'Z', W, sh=True)
    s += F(180, 140, 120, 18, P) + text_lines(180, 190, [180, 150, 170], G, 10, 26)
    s += LN('M180 290H360', P, 4).replace('fill="none"', 'fill="none" stroke-dasharray="10 8"')
    s += tx('SUMME', 180, 350, 34, P) + tx('42 €', 330, 350, 34, I, 'middle')
    s += tag(372, 392, 116, 116, O, check(400, 452, 1.4, I, 11), c=16)
    return s

@motif('organisation', 'membership', 'Mitgliedsausweis')
def _():
    s = R(80, 150, 440, 290, W, c=28, sh=True) + F(83, 153, 414, 64, P)
    s += F(110, 176, 160, 18, W) + ball(456, 185, 22)
    s += R(110, 246, 120, 150, PP, c=10, sw=0) + person(170, 266, 26, PM)
    s += F(260, 256, 200, 16, I) + text_lines(260, 290, [150, 180, 110], G, 10, 22)
    s += f'<path d="{chd(260,370,110,26,8)}" fill="{K}"/>'
    return s

@motif('organisation', 'megaphone', 'Ankündigung')
def _():
    s = PA('M150 240H230L420 130V450L230 340H150Z', O, sh=True)
    s += R(110, 240, 60, 100, P, c=10) + PA('M200 340L230 340L260 450H220Z', P)
    s += R(410, 120, 40, 340, P, c=10)
    s += ''.join(f'<rect x="{x}" y="{y}" width="{w}" height="14" fill="{c}" transform="rotate({a} {x} {y})"/>'
                 for x, y, w, a, c in [(480, 210, 70, -28, K), (490, 286, 80, 0, Y), (480, 370, 70, 28, K)])
    return s

@motif('organisation', 'press', 'Presse')
def _():
    s = R(160, 130, 340, 380, PP, c=24, sh=True)
    s += R(100, 90, 340, 380, W, c=24, sh=True)
    s += F(130, 122, 280, 34, P) + tx('QUEER LEAGUE', 270, 150, 30, W, 'middle')
    s += F(130, 170, 280, 6, P)
    s += f'<path d="{chd(130,192,130,120,10)}" fill="{O}"/>' + ball(195, 252, 36)
    s += text_lines(276, 196, [134, 110, 134, 90, 120], G, 10, 22)
    s += text_lines(130, 336, [280, 240, 270, 200, 250], G, 10, 22)
    return s

@motif('organisation', 'safe-space', 'Safe Space')
def _():
    s = PA('M300 80L480 140V280Q480 420 300 510Q120 420 120 280V140Z', P, sh=True)
    s += PA('M300 120L444 168V284Q444 394 300 468Q156 394 156 284V168Z', PP, sw=0)
    s += LN('M250 270V230Q250 180 300 180Q350 180 350 230V270', I, 16, 'butt')
    s += R(226, 266, 148, 120, Y, c=12, stroke=I, sw=5) + C(300, 316, 14, I, sw=0) + F(294, 316, 12, 40, I)
    return s

@motif('organisation', 'location-private', 'Ort geschützt')
def _():
    s = PA('M260 520Q140 360 140 250A120 120 0 0 1 380 250Q380 360 260 520Z', O, sh=True)
    s += C(260, 250, 52, W)
    s += LN('M110 470L470 110', W, 26, 'butt') + LN('M110 470L470 110', K, 14, 'butt')
    s += R(370, 340, 130, 110, Y, c=12, stroke=I, sw=5)
    s += LN('M400 340V312Q400 280 435 280Q470 280 470 312V340', I, 12, 'butt') + C(435, 392, 12, I, sw=0)
    return s

@motif('organisation', 'stats', 'Statistik')
def _():
    s = R(90, 110, 420, 380, W, c=24, sh=True)
    s += LN('M140 160V440H470', P, 6)
    for i, (h, c) in enumerate([(80, PP), (130, PM), (110, PP), (190, P), (240, O)]):
        s += F(170 + i * 60, 440 - h, 40, h, c)
    s += LN('M190 340L250 290L310 316L370 220L430 170', K, 8, 'round')
    s += C(430, 170, 12, K, sw=0)
    return s

@motif('organisation', 'folder', 'Ablage')
def _():
    s = R(170, 110, 220, 170, W, c=12) + text_lines(196, 140, [150, 120, 160], G)
    s += R(210, 90, 220, 170, PP, c=12)
    s += PA('M90 200H230L260 230H510V470H90Z', P, sh=True)
    s += PA('M90 260H510V470H90Z', PM, sw=0)
    s += f'<path d="{chd(250,330,100,40,8)}" fill="{Y}"/>' + F(270, 345, 60, 10, I)
    return s

@motif('organisation', 'checklist', 'Checkliste')
def _():
    s = R(130, 100, 340, 400, W, c=24, sh=True)
    for i in range(5):
        y = 140 + i * 68
        done = i < 3
        s += R(162, y, 40, 40, P if done else W, c=6, sw=4)
        if done: s += check(168, y + 18, 0.8, Y, 7)
        s += F(222, y + 8, [180, 150, 200, 140, 170][i], 14, G if done else I)
        if done: s += F(222, y + 14, [180, 150, 200, 140, 170][i], 3, P)
    s += F(130, 470, 340, 14, GL) + F(130, 470, 204, 14, O)
    return s

@motif('organisation', 'volunteer', 'Ehrenamt')
def _():
    s = PA('M300 500L120 320A100 100 0 0 1 300 170A100 100 0 0 1 480 320Z', K, sh=True)
    s += PA('M300 456L160 316A74 74 0 0 1 300 210A74 74 0 0 1 440 316Z', KP, sw=0)
    star = lambda x, y, r, c: PA(f'M{x} {y-r}L{x+r*0.3} {y-r*0.3}L{x+r} {y}L{x+r*0.3} {y+r*0.3}L{x} {y+r}L{x-r*0.3} {y+r*0.3}L{x-r} {y}L{x-r*0.3} {y-r*0.3}Z', c, sw=0)
    s += star(130, 150, 30, O) + star(490, 120, 22, Y) + star(510, 440, 26, O)
    return s + ball(300, 320, 62)


@motif('organisation', 'costs-rising', 'Steigende Kosten')
def _():
    s = LN('M175 205 Q110 150 150 100', P, 6, 'round')
    s += PA('M120 160H340L500 320L320 500L140 320Z', O, sh=True)
    s += C(190, 220, 20, W)
    s += tx('€', 320, 400, 150, I, 'middle')
    s += LN('M450 220V90M412 128L450 90L488 128', K, 16, 'butt')
    return s


def build(outdir):
    os.makedirs(outdir, exist_ok=True)
    for name, (group, label, fn) in M.items():
        svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">{fn()}</svg>'
        open(os.path.join(outdir, f'qvl-illu-{name}.svg'), 'w').write(svg)
    return M

if __name__ == '__main__':
    import json, sys
    root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..')
    out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(root, 'design-system', 'assets', 'illustrations')
    m = build(out)
    json.dump({k: [v[0], v[1]] for k, v in m.items()}, open(os.path.join(out, 'index.json'), 'w'), ensure_ascii=False, indent=1)
    print(len(m), 'motifs')
