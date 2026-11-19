# BMFG_Help

Web apps for the **Beaverton MFG** student manufacturing program at Westview High School, live at **[bmfg.help](https://bmfg.help)**.

Every app runs in the browser with nothing to install, so it works on school computers. Each one is a single `index.html` in its own folder, and the landing page (`index.html` at the top level) links to all of them.

## Apps

| App | Machine | What it does |
|---|---|---|
| [PenBot](https://bmfg.help/penbot/) | Intro to CNC | Start here: learn how CNC works, then turn an Onshape DXF into G-code that draws on a sheet of paper. |
| [RouteReady](https://bmfg.help/routeready/) | CNC router | Design 2D router cuts and export ready-to-run files for the ShopBots. |
| [InlayReady](https://bmfg.help/inlayready/) | CNC router | V-carve inlays: a pocket in one board and a plug that fits it, cut on the ShopBots. |
| [CarveReady](https://bmfg.help/carveready/) | CNC router | Turn an STL or OBJ into 3D carving files for the ShopBots, including two-sided flip carves. |
| [GlowLine](https://bmfg.help/glowline/) | CNC router | Easy neon sign maker: type your sign, pick a single-line font, and get ShopBot groove and hole files plus a wiring plan for LED neon flex. |
| [TurnReady](https://bmfg.help/turnready/) | CNC lathe · HX710 | Draw or import a part profile, simulate the cuts, and get G-code for the desktop CNC lathe. Includes a touch-off helper and lathe basics. |
| [ArcRight](https://bmfg.help/arcright/) | CNC plasma | Turn an SVG or a quick drawing into a clean DXF for the plasma table. |
| [LaserReady](https://bmfg.help/laserready/) | Laser cutter | Build cut, score and engrave SVGs that drop straight into Illustrator. |
| [FoldReady](https://bmfg.help/foldready/) | Laser cutter | Pick a box or product display, type the size, and get a laser file with cut and score layers for posterboard. |
| [KissCut](https://bmfg.help/kisscut/) | Roland BN-40 | Add a contour cut line to artwork and export print-and-cut EPS for VersaWorks. |
| [NeedlePath](https://bmfg.help/needlepath/) | Embroidery | Auto-digitize clean vector art and text into PES and DST stitch files. |
| [WreSTL](https://bmfg.help/wrestl/) | 3D printer | Resize, crop and slice STL files, with auto-repair, and save a solid, print-ready model. |
| [CAD Mini Golf](https://bmfg.help/golfsim/) | Onshape game | Drop in an Onshape model of a mini golf hole and play it in 3D. |
| [SiegeReady](https://bmfg.help/siegeready/) | Onshape game | Rig your Onshape marble launcher, then launch a flaming marble for distance, accuracy, or to knock down a castle. |

### Also

- [CutContour Checker](https://bmfg.help/CutContourChecker.html): checks Illustrator EPS files for the Roland BN-40 print-and-cut workflow.
- [GlowLine fonts](glowline/fonts/): 11 single-line fonts (TTF + JSON) for CNC and neon signs.

## Repo layout

```
index.html          landing page with a card for every app
Style.css           shared styles
js/                 shared scripts
<app>/index.html    one folder per app
glowline/fonts/     GlowLine's single-line fonts
CNAME               custom domain (bmfg.help)
```

## Adding an app

1. Make a new folder named after the app (lowercase) and save the app inside it as `index.html`.
2. Add a card for it to the top-level `index.html`.
3. Add a row to the table above.

## License

GPL-3.0. See [LICENSE](LICENSE).
