# FoldReady

**Laser cut-and-score files for posterboard boxes and product displays.**

FoldReady is a browser app. Pick a box or display style, type the size you need, and download a file for the laser cutter with the cut and score lines already on separate layers. A folded 3D preview shows what you'll get, and green panels mark where artwork goes.

> Built for the student manufacturing program at Westview High School ([Beaverton MFG](https://beavertonmfg.com)).

Live at **[bmfg.help/foldready](https://bmfg.help/foldready/)**.

## Styles

**Boxes**

| Style | What it is |
|---|---|
| Straight tuck | The classic product box. Lid and bottom both tuck in from the back panel. |
| Reverse tuck | Same as the straight tuck, but the bottom tucks from the front. Nests tighter on a sheet when you cut several. |
| Open tray | A shallow open-top tray with glued corners. |
| Lid and base | A two-piece gift box. The lid is drawn slightly larger so it slides over the base. |
| Drawer box | A matchbox-style tray that slides inside a sleeve. |
| Pillow box | A curved pouch-style box that ships flat, for jewelry, stickers and small flat items. |

**Displays**

| Style | What it is |
|---|---|
| Header tray | An open tray with a tall, double-folded back panel for a sign or product photo. |
| Counter bin | A countertop display with a low front, sloped sides and a header for the sign. |
| Table tent | A three-sided sign for prices, a product name or a QR code. |
| Easel card | A standing card with a glue-on leg. Can add rows of holes to hang earrings, pins or keychains. |
| Pocket holder | A leaning stand for flat items such as stickers, cards or coasters. |
| Step riser | A small staircase that lifts items in the back row so everything can be seen. |
| Bag topper | A folded header card with a hang hole, stapled over a bagged product. |

## How to use it

1. **Style:** choose Boxes or Displays, then pick a style.
2. **Size:** type the dimensions in inches (decimals or fractions) or millimeters.
3. **Material and sheet:** set the material thickness, glue flap width, sheet size and how many pieces to fit on the sheet. You can rotate the layout 90°.
4. Check the folded preview (drag to turn it) and the **Putting it together** steps.
5. Click **Download SVG** or **Download DXF** and send it to the laser.

## File output

| Layer | Color | Line |
|---|---|---|
| Cut | Red, RGB 255/0/0 | 0.001 in |
| Score | Blue, RGB 0/0/255 | 0.001 in (dashed in the preview, solid in the file) |
| Artwork guide (optional) | Green | Outlines of the artwork panels |

Files are always saved at real size in inches, even if you typed the size in millimeters.

## Running locally

It's a single `index.html` with no build step. Open it in a browser, or serve the repo folder with any static web server.
