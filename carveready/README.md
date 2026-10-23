# 🪵 CarveReady

**Turn a 3D model into carving files for the ShopBot, including two-sided flip carves.**

CarveReady is RouteReady's 3D sibling. Students import an STL or OBJ, place it in the stock, and get numbered `.sbp` files plus a step-by-step job sheet. Two-sided carves use a **center zero** and **dowel-pin registration**, so side B lines up with side A without re-finding X/Y.

> Built for the student manufacturing program at Westview High School ([Beaverton MFG](https://beavertonmfg.com)).

---

## ✨ Features

- **STL / OBJ import** with mm/inch units, uniform resizing, 90° turns, "Fit to stock" and "Size stock to model"
- **One side or two sides** (flip left↔right or front↔back). One-sided jobs have no flip and no dowel holes.
- **Auto parting line**: finds the height where both sides can reach the most of the model, and tells you how much (if any) is hidden from both sides
- **Dowel pin registration**: two holes on the flip line, drilled through the stock into the spoilboard. Any dowel size, plus an "extra for fit" allowance
- **No-pin option** for two-sided jobs: line side B up with fence strips (or a traced outline) against the board's edges instead
- **Holding tabs** at the parting line so the part stays in the frame until you cut it free
- **Roughing** (flat end mill, layer by layer, leaves stock for finishing) and **finishing** (ball nose). Each can run left ↔ right, front ↔ back, or as a spiral that starts in the middle and works outward
- **Any bit size**: presets from 1/32 to 3/8 in, or type any diameter (`1/32`, `0.04`, `1mm`). The calculation detail follows the smallest bit
- **3D shop view**: setup view (model, parting plane, tabs, pins), carve preview of what will actually come out, toolpaths, and an animated flip
- **Job sheet**: every file in order with bit changes, zeroing and flip instructions; printable
- **No accounts, no installs**: runs in the browser; the heavy math runs in a background worker

## 🔁 How a two-sided job runs

| # | File | Bit | Notes |
|---|------|-----|-------|
| – | Setup | – | Screw the board down outside the carve area. Zero **X/Y at the center**, **Z on top**. |
| 1 | `_dowel_holes.sbp` | flat | Drills two holes on the flip line into the spoilboard. Tap dowels in. (Skipped with "No pins".) |
| 2 | `_A1_rough.sbp` | flat | |
| 3 | `_A2_finish.sbp` | ball | Re-zero **Z only**, on the uncut frame. |
| – | Flip | – | Lift the board off the pins, flip it, drop it back on the same pins. **Do not touch X/Y zero.** Re-zero Z on the new top. |
| 4 | `_B1_rough.sbp` | flat | |
| 5 | `_B2_finish.sbp` | ball | Cuts through to the parting line; tabs hold the part. |

Why this works: X/Y zero sits on the flip line, and the pins sit on the flip line too. Flipping over the pins puts the board back exactly where it was, so side B's files are just side A's coordinates mirrored across that line.

## ✅ Before You Cut

- [ ] Stock thickness measured with calipers and typed in (side B depends on it)
- [ ] Screws are outside the dashed carve area and off the flip line
- [ ] Bit matches the file (each file says which bit in its first lines)
- [ ] Bit's cutting length is longer than the carve depth shown in the app
- [ ] Safety glasses on, dust collection running

## 📄 Output

Same `.sbp` format as RouteReady (header with `SO,1,1` / spindle speed / pause, then G20/G90 moves). Inches, Z = 0 at the top of whichever side is facing up. The header can be edited under **Bits → More**.

## 🛠️ Running Locally

Static web app, no build step:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/carveready/`.

## 🗺️ Roadmap

- [ ] Finalize speed/feed presets with the shop's real numbers
- [ ] Drag tabs to custom spots
- [ ] Optional cut-out profile for one-sided carves

MIT © Beaverton MFG
