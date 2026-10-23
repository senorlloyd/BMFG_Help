# InlayReady

**V-carve inlays for the ShopBot: a pocket in one board and a plug that fits it from another.**

InlayReady is RouteReady's inlay sibling. Students draw or import a design, and the app makes the ShopBot files for both halves of a V-carve inlay. That's the same process as Vectric's V-Carve Inlay toolpaths and Easel's inlay feature, with no accounts and no Pro limits.

> Built for the student manufacturing program at Westview High School ([Beaverton MFG](https://beavertonmfg.com)).

---

## How a V-carve inlay works

1. A V-bit carves a **pocket** in the base board (say maple). Its walls slope out at the bit's angle, and a flat floor sits at the pocket depth.
2. The same V-bit carves a **plug** from a second board (say walnut). The plug is mirrored, with the same sloped walls, standing up out of its board.
3. You flip the plug board over and glue it into the pocket. The sloped walls wedge together tight, even in sharp corners a straight bit could never reach.
4. Saw the plug board off through the gap between the boards, then plane or sand it flush.

The three numbers on the **Fit** card control it:

| Setting | Default | What it does |
|---|---|---|
| Pocket depth | 0.2 in | How deep the pocket goes |
| Glue gap | 0.03 in | Space left under the plug for glue (the plug goes in 0.17 in) |
| Top gap | 0.1 in | Space between the two boards after glue-up, where you saw the plug board off |
| Plug border | 0.25 in | Extra wood cleared around the plug |

## Features

- **RouteReady's workbench:** the same drawing tools, SVG/DXF import, sizing and alignment, undo, and project files
- **Pocket and plug toolpaths** from one design. The plug is mirrored for you.
- **Two bits:** an end mill clears the bulk in terraced steps, then the V-bit cuts the walls and sharp corners. V-bit-only works for small lettering.
- **Flat-tip V-bits:** enter the tip width and the plug is adjusted so it still seats at the right depth
- **3D preview of both boards**, with the carve simulation
- **ShopBot files** in the same format RouteReady uses (start code, then G-code). Choose four files (one per bit) or two files (one per board, pausing for the bit change).
- **Take-it-to-the-shop steps** for the pocket, the plug, and the glue-up

## Quick start

1. Open InlayReady from the BMFG Help page.
2. Do the guided setup: board size, thickness, bits, zero point.
3. Draw or import your design. Every closed shape is inlaid, and holes in letters stay holes.
4. Check the Pocket and Plug previews.
5. Click **Export files**, save them to Google Drive, and follow the steps in the shop.

## Before you cut

- [ ] Use the **same V-bit** for the pocket and the plug
- [ ] Zero Z on top of the wood **every time you change bits**
- [ ] Don't move X/Y zero between bits on the same board
- [ ] The plug board is thicker than "Plug is carved … in deep" on the Fit card
- [ ] Try a test inlay in scrap before the real one

## Running locally

It's a single static page, so there's no build step. Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

## Notes for teachers

- Shop steps are in `SHOP_TEXT` near the bottom of `index.html`. Edit them to match your shop.
- The ShopBot start code and bit-change code can be edited in the app under **Bits → ShopBot start, end and bit-change code**.
- **Test "one file per board" on scrap first.** It pauses mid-file for the bit change, and you need to confirm your ShopBot lets you zero Z while a file is paused. "One file per bit" (the default) avoids the question.

## License

MIT © Beaverton MFG
