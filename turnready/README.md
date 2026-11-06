# 🔩 TurnReady

**Lathe profile → G-code for the HX710 Turning Center (UGS / GRBL).**

TurnReady is a browser app for the program's desktop CNC lathe. Students draw a part profile (or import one), the app plans facing, roughing and finishing passes, simulates the cut with the real insert shape, and exports a `.nc` file in the same format as the Fusion programs that already run on the HX710.

> Built for the student manufacturing program at Westview High School ([Beaverton MFG](https://beavertonmfg.com)).

---

## 🧙 New part wizard
Opens on load (and from **New part**): material → bar diameter (standard sizes or a caliper reading in inches/mm) → how much bar sticks out of the chuck → starting shape (plain cylinder, DXF/SVG import, rook, wood test piece).

## ✏️ Designing the profile
- **Z** is measured from the front of the finished part (0, then negative toward the chuck). **Ø** is diameter.
- Each segment is a straight line or an arc (convex bead or concave cove). Drag points in the view, double-click to add one.
- **Import:** DXF (LINE, ARC, CIRCLE, LWPOLYLINE/POLYLINE with bulges, SPLINE, ELLIPSE) or SVG. The top outline of the drawing becomes the profile. Choose which end is the face and whether the drawing is a half profile or a full outline.

## ⚙️ Toolpaths
- **Facing** from the raw end (Z0 = raw stock face) down to the finished face, past center to X = −nose radius.
- **Roughing** passes at the chosen depth per side, following the profile into valleys and up shoulders, with a 45° pull-out.
- **Finishing** pass with nose-radius compensation (output is the tool's imaginary tip, so normal touch-off works).
- Curves are written as short G1 moves, so there is no G2/G3 arc-direction risk.

## 🧪 Checks
Simulation with the actual insert (35° / 55° / 80°) flags gouges, rapids into material, chuck clearance, slopes too steep for the insert, unreachable material, not enough bar out of the chuck and long/thin stick-out.

## 🪵 Material presets (starting points)
| Material | RPM | Rough DOC/side | Rough feed | Finish feed |
|---|---|---|---|---|
| Wood | 2500 | 0.5 mm | 300 | 150 |
| Delrin | 3500 | 0.5 mm | 350 | 175 |
| Nylon / HDPE | 3000 | 0.5 mm | 300 | 150 |
| Aluminum 6061 | 4000 | 0.3 mm | 320 | 160 |
| Brass 360 | 3000 | 0.3 mm | 210 | 105 |
| Mild steel | 1800 | 0.2 mm | 125 | 75 |

Feeds are mm/min. RPM is capped by "Max RPM for students" (default 4000).

## 🎯 Touch-off helper
Skim the OD, type the caliper reading, and it gives the exact `G10 L20 P1 X…` (radius) and `G10 L20 P1 Z0` lines for UGS, plus an air-cut option that runs the whole program 20 mm in front of the stock.

## 📘 Lathe basics
A diagram of the HX710 axes (front tool post, +X toward the operator, X = radius, Z0 at the bar end) and illustrated cards for facing, turning, profiling, tapers, grooving, parting, threading, drilling, boring and knurling.

## 🖥️ Machine output format
Metric, `G90 G94 G18 G21`, `M0` tool check, `T4`, `G54`, then a park move to 5 mm outside the stock (X = stock radius + 5, then Z5) before the spindle starts (tick "Use G28 homing instead" for `G28`), optional `M8`, `S… M3`, N-numbered lines, ends with `M30`. Parting is by hand. The program ends parked at the same spot.
