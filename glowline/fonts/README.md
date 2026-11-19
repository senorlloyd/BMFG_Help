# GlowLine single-line fonts

Eleven single-line fonts made for CNC routing and LED neon flex signs, used by [GlowLine](../index.html).
Every letter is one centerline built from straight lines, arcs and smooth curves, with no outlines and no fill.

| Font | Style |
|---|---|
| Shop Line | Tall rounded-rectangle caps and numbers (capitals only) |
| Glowline Tube | Narrow sans with squared-off tube bends |
| Glowline Round | Wide geometric sans with true circles |
| Glowline Deco | Tall, narrow Art Deco letters with a high waist |
| Glowline Wide | Extra-wide letters with chunky squared-off bends |
| Glowline Arcade | Grid-drawn letters with rounded 45° corners |
| Glowline Soft | Friendly rounded sans |
| Glowline Speed | Slanted tube italic |
| Glowline Typewriter | Monospace with slab serifs |
| Glowline Square | Squared-off techno letters |
| Glowline Marker | Hand-lettered print with a gentle bounce |

Each Glowline font has A–Z, a–z and 0–9. `Glowline-specimen.png` shows every character.

## Files

- **`*-Regular.ttf`**: install like any font. Each stroke is stored as a zero-width line, so give text a **stroke and no fill** (Illustrator, Inkscape) or it will look invisible.
- **`*.json`**: raw centerlines for apps. Each glyph has an `advance` and a list of `strokes`. A stroke has a `start` point and `segments`: `["L", x, y]` is a line and `["C", x1, y1, x2, y2, x, y]` is a cubic curve. Units are 1000 per em, Y is up and the baseline is 0.
- **`Glowline-Fonts.zip`**: everything above in one download.

These fonts were drawn for the Beaverton MFG program and are free for students and teachers to use.
