# 🪵 RouteReady

**Design 2D cuts in the browser and send them straight to the ShopBot.**

RouteReady is a browser-based, Easel-style design tool for 2D CNC router work. Students draw or import a design, set up their cuts, and export a file ready for our ShopBots — no outside accounts, no trial limits, and no separate conversion step.

> Built for the student manufacturing program at Westview High School ([Beaverton MFG](https://beavertonmfg.com)).

---

## 💡 Why RouteReady?

Our old workflow was:

1. Design in Easel (account required; Pro features expire after the trial)
2. Export `.nc` G-code
3. Convert it to ShopBot `.sbp` with [CNC-Tutorial](https://senorlloyd.github.io/CNC-Tutorial)

RouteReady collapses that into **one app** with direct ShopBot output.

## ✨ Features

- **2D design tools** – shapes, text and SVG import
- **Common cut types** – profile (outside / inside / on-line), pockets and engraving lines
- **Simple presets** – a short list of speed/feed presets instead of a giant bit library
- **Live preview** – see toolpaths before you cut
- **ShopBot export** – files ready to load on the school's ShopBots
- **No accounts, no installs** – runs entirely in the browser

> 3D carving is not supported yet — RouteReady is 2D only for now.

## 🚀 Quick Start

1. Open RouteReady in your browser: **https://senorlloyd.github.io/routeready** <!-- update if hosted elsewhere -->
2. Set your material size and thickness.
3. Draw or import your design.
4. Choose a cut type, depth and preset for each shape.
5. Check the toolpath preview.
6. Click **Export** and load the file on the ShopBot.

The spindle stops automatically at the end of the job.

## ✅ Before You Cut

- [ ] Material is clamped/screwed down and the size matches the app
- [ ] Correct bit is installed and matches the preset you chose
- [ ] X/Y zero matches the origin in RouteReady
- [ ] Z zeroed to the top of the material
- [ ] Safety glasses on, dust collection running

## 🛠️ Running Locally

RouteReady is a static web app — no build step required.

```bash
git clone https://github.com/senorlloyd/routeready.git
cd routeready
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 🗺️ Roadmap

- [x] ShopBot-only output (Shark CNC support dropped)
- [ ] Finalize speed/feed presets
- [ ] Tabs for holding parts in place
- [ ] 3D carving

## 🔗 Related Projects

- **[CNC-Tutorial](https://senorlloyd.github.io/CNC-Tutorial)** – the original Easel `.nc` → ShopBot `.sbp` converter
- **[LaserReady](https://github.com/senorlloyd/laserready)** – Illustrator-ready SVGs for laser cutters
- **[ArcRight](https://github.com/senorlloyd/arcright)** – DXF files for CNC plasma
- **[KissCut](https://github.com/senorlloyd/kisscut)** – print-and-cut EPS for the Roland BN-40

## 📄 License

<!-- Choose a license, e.g. MIT -->
MIT © Beaverton MFG
