# 🖊️ PenBot

**The friendliest first step into CNC: draw on a sheet of paper with the ShopBot.**

PenBot is a browser app that teaches the basics of CNC, then turns a student's Onshape DXF (or an SVG) into a plain G-code `.nc` file that draws the design with a pen on 8.5 × 11 in paper.

> Built for the student manufacturing program at Westview High School ([Beaverton MFG](https://beavertonmfg.com)).

---

## 🎓 Lessons (the splash screens)

PenBot opens with six short, animated lessons. Students can skip them, and the **Learn CNC** button brings them back.

1. **What is CNC?** A gantry machine draws a star while the X / Y / Z readout counts.
2. **X, Y and Z.** The origin, axis directions (Onshape colors: X red, Y green, Z blue) and a side view of the pen lifting.
3. **Feed rate.** A real-time race: PenBot at 70 in/min vs. a speed the student picks.
4. **Depth & passes.** A side view with sliders for cut depth and depth per pass, comparing PenBot (1 pass) to a router example (0.5 ÷ 0.125 = 4 passes).
5. **G-code.** A 12-line program draws a house, highlighting each line as it runs.
6. **Your file.** Onshape export steps and a drop zone.

## ✏️ How it works

- **Paper:** always 8.5 × 11 in, portrait. **Origin (X0 Y0) is the bottom-left corner**, where PenBot's googly-eyed pen head waits.
- **Import:** DXF (LINE, ARC, CIRCLE, LWPOLYLINE/POLYLINE with bulges, SPLINE, ELLIPSE, blocks) or SVG. Separate lines that touch are joined into one shape so the pen lifts less.
- **Units:** DXF files in millimeters are converted to inches automatically, with a reminder to set Onshape to inches next time.
- **Placement:** the sketch origin lands on the paper's origin if the drawing fits; otherwise it's centered. Students can drag it, type X/Y, center it or turn it 90°.
- **Off the paper?** The drawing turns red and download is disabled until it fits.
- **G-code panel (right ¼ of the screen):** every line is color-coded (setup, pen up, travel, pen down, draw), with X/Y/Z/F in their axis colors. Hover or tap a line for a plain-English explanation and to highlight that move on the paper.
- **Simulation:** play, scrub and change speed (real speed up to 25×). The current G-code line lights up and follows along, with a live X/Y/Z readout.

## ⚙️ Locked settings

| Setting | Value |
|---|---|
| Feed rate | 70 in/min |
| Plunge rate | 70 in/min |
| Cut depth | 0.010 in |
| Depth per pass | 0.010 in (1 pass) |
| Pen-up (safe) height | 0.150 in |

They live in the `PEN` object at the top of the script if they ever need to change.

## 📄 Output

A generic `.nc` file, the same style RouteReady/CarveReady write before ShopBot lines are added:

```
G20
G90
G0 Z0.1500
G0 X1.0000 Y1.0000
G1 Z-0.0100 F70.0
G1 X4.0000 Y1.0000 F70.0
...
G0 Z0.1500
G0 X0.0000 Y0.0000
G4 P0.1
```

## 🧰 At the machine

1. Tape the paper flat and square to the table.
2. Jog to the paper's bottom-left corner and zero X and Y.
3. Lower the pen until it just touches the paper and zero Z.
4. Cap off!
