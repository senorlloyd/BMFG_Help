# 🔥 LaserReady

**Illustrator-ready laser files — cut, scratch and engrave, done right the first time.**

LaserReady is a browser-based tool that sets up SVG files for our laser cutters with the correct colors, line weights and units, so the file opens cleanly in Adobe Illustrator and runs on the laser without manual cleanup.

> Built for the student manufacturing program at Westview High School ([Beaverton MFG](https://beavertonmfg.com)).

---

## ✨ Features

- **Correct operations automatically** – every element is tagged as Cut, Scratch or Engrave
- **Inches, always** – documents are set up and exported in inches
- **Vector + raster in one file** – combine photos/images with vector cuts so a job can engrave first, then cut
- **Illustrator-compatible SVG** – opens in Adobe Illustrator with colors and strokes intact
- **Familiar tools** – same tool layout as [ArcRight](https://github.com/senorlloyd/arcright), so students only learn one interface
- **No accounts, no installs** – runs entirely in the browser

## 🎨 Color & Line Spec

| Operation   | Stroke / Fill       | RGB           | Line weight | What it does                    |
|-------------|---------------------|---------------|-------------|---------------------------------|
| **Cut**     | Red stroke          | `255, 0, 0`   | `0.001"`    | Cuts all the way through        |
| **Scratch** | Blue stroke         | `0, 0, 255`   | `0.001"`    | Scores a vector line, no cut-through |
| **Engrave** | Black               | `0, 0, 0`     | —           | Raster engraves (everything else) |

> ⚠️ Don't change these colors in Illustrator — the laser uses them to decide what each line does.

## 🚀 Quick Start

1. Open LaserReady in your browser: **https://senorlloyd.github.io/laserready** <!-- update if hosted elsewhere -->
2. Import an SVG or image, or draw with the built-in tools.
3. Assign each part as **Cut**, **Scratch** or **Engrave**.
4. Click **Export SVG**.
5. Open the file in **Adobe Illustrator**, check the size, and send it to the laser.

## 🛠️ Running Locally

LaserReady is a static web app — no build step required.

```bash
git clone https://github.com/senorlloyd/laserready.git
cd laserready
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 🧯 Troubleshooting

| Problem | Fix |
|---------|-----|
| A line engraved instead of cutting | Check it's pure red `255, 0, 0` at `0.001"`; thicker strokes are treated as engraving. |
| Design is the wrong size in Illustrator | Confirm Illustrator's units are set to inches and the artboard wasn't scaled on import. |
| Laser cuts before engraving | Set the job order so engrave runs first, then scratch, then cut. |

## 🗺️ Roadmap

- [ ] More built-in shapes and text tools
- [ ] Material presets
- [ ] Kerf / offset options

## 🔗 Related Projects

- **[ArcRight](https://github.com/senorlloyd/arcright)** – DXF files for CNC plasma
- **[RouteReady](https://github.com/senorlloyd/routeready)** – 2D design and ShopBot toolpaths
- **[KissCut](https://github.com/senorlloyd/kisscut)** – print-and-cut EPS for the Roland BN-40

## 📄 License

<!-- Choose a license, e.g. MIT -->
MIT © Beaverton MFG
