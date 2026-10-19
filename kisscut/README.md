# ✂️ KissCut

**Print-and-cut files for the Roland BN-40 — no Illustrator required.**

KissCut is a browser-based editor that takes almost any image, wraps it in a clean contour cut line, and exports an EPS that VersaWorks reads as a ready-to-run print-and-cut job.

> Built for the student manufacturing program at Westview High School ([Beaverton MFG](https://beavertonmfg.com)), so students can make stickers and decals without an Adobe license.

---

## ✨ Features

- **Import anything** – SVG, PNG, JPG and other common image formats
- **Automatic contour** – generates a single closed cut path around the visible graphic (transparent areas are ignored)
- **VersaWorks-ready export** – EPS with the cut line on its own top layer as a `CutContour` spot-color stroke
- **CMYK output** – artwork is exported in CMYK so it prints the way VersaWorks expects
- **No accounts, no installs** – runs entirely in the browser

## 🚀 Quick Start

1. Open KissCut in your browser: **https://senorlloyd.github.io/kisscut** <!-- update if hosted elsewhere -->
2. Drop in your image.
3. Adjust the contour offset until the cut line sits where you want it.
4. Click **Export EPS**.
5. Open the file in **VersaWorks**, confirm the `CutContour` line is detected, and send it to the BN-40.

## 🖨️ Output Spec

| Element      | Setting                                           |
|--------------|---------------------------------------------------|
| File type    | EPS                                               |
| Color mode   | CMYK                                              |
| Cut line     | Spot color named `CutContour` (C0 M100 Y0 K0)     |
| Cut layer    | Top layer, above the printed artwork              |
| Cut path     | Single closed path around the graphic            |

## 🛠️ Running Locally

KissCut is a static web app — no build step required.

```bash
git clone https://github.com/senorlloyd/kisscut.git
cd kisscut
# open index.html in your browser, or serve the folder:
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 🧯 Troubleshooting

| Problem | Fix |
|---------|-----|
| VersaWorks doesn't see a cut line | Make sure you opened the EPS (not a PNG export) and that the spot color is still named exactly `CutContour`. |
| Cut line hugs the art too tightly | Increase the contour offset before exporting. |
| Contour traces the white background | Use a PNG with a transparent background, or remove the background first. |

## 🔗 Related Projects

- **[LaserReady](https://github.com/senorlloyd/laserready)** – Illustrator-ready SVGs for laser cutters
- **[ArcRight](https://github.com/senorlloyd/arcright)** – DXF files for CNC plasma
- **[RouteReady](https://github.com/senorlloyd/routeready)** – 2D design and ShopBot toolpaths

## 📄 License

<!-- Choose a license, e.g. MIT -->
MIT © Beaverton MFG
