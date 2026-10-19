# ⚡ ARCRIGHT

**Plasma-ready DXF files, done right.**

ArcRight is a browser-based tool that turns an imported SVG — or a simple drawing made right in the app — into a clean DXF for our CNC plasma cutter, with the correct units, layers and origin already set.

> Built for the student manufacturing program at Westview High School ([Beaverton MFG](https://beavertonmfg.com)).

---

## ✨ Features

- **Import or draw** – bring in an SVG or sketch with the built-in shape tools
- **Automatic layer sorting** – interior cutouts go on `Inside`, outer profiles go on `Outside`
- **Inches, always** – DXFs are exported in inches
- **Bottom-left origin** – the design's extreme bottom-left corner is placed at `0,0` to match the plasma table
- **No accounts, no installs** – runs entirely in the browser

## 📐 DXF Output Spec

| Setting        | Value                                              |
|----------------|----------------------------------------------------|
| File type      | DXF                                                |
| Units          | Inches                                             |
| Origin         | Bottom-left of design at `(0, 0)`                  |
| Layer `Inside` | All interior cutouts (holes, letter centers, etc.) |
| Layer `Outside`| Outer profile(s) of each part                      |

> Keeping inside and outside cuts on separate layers lets the plasma software cut the holes first, so the part doesn't drop or shift before its interior features are done.

## 🚀 Quick Start

1. Open ArcRight in your browser: **https://senorlloyd.github.io/arcright** <!-- update if hosted elsewhere -->
2. Import an SVG or draw your part.
3. Check the preview — inside cuts and outside cuts are shown in different colors.
4. Set the final size in inches.
5. Click **Export DXF** and load the file into the plasma cutter's software.

## 🛠️ Running Locally

ArcRight is a static web app — no build step required.

```bash
git clone https://github.com/senorlloyd/arcright.git
cd arcright
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 🧯 Troubleshooting

| Problem | Fix |
|---------|-----|
| Part is tiny or huge on the table | The DXF is in inches — make sure the plasma software isn't importing it as millimeters. |
| A hole landed on `Outside` | Make sure the shape is fully closed and actually sits inside the outer profile. |
| Part is placed away from the origin | Re-export; ArcRight moves the bottom-left corner to `0,0` on every export. |
| Open paths / gaps | Close all paths in your SVG before importing — the plasma needs closed loops. |

## 🔗 Related Projects

- **[LaserReady](https://github.com/senorlloyd/laserready)** – Illustrator-ready SVGs for laser cutters
- **[RouteReady](https://github.com/senorlloyd/routeready)** – 2D design and ShopBot toolpaths
- **[KissCut](https://github.com/senorlloyd/kisscut)** – print-and-cut EPS for the Roland BN-40

## 📄 License

<!-- Choose a license, e.g. MIT -->
MIT © Beaverton MFG
