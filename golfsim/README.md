# ⛳ GolfSim

**Design a mini golf hole in Onshape. Play it in your browser.**

GolfSim is a browser-based mini golf game built for CAD classes. Students model a mini golf hole in Onshape, export it, drop the file into GolfSim, and putt their own design with real physics. It runs on Chromebooks with nothing to install.

> Built for the high school CAD students in the Westview High School manufacturing program ([Beaverton MFG](https://beavertonmfg.com)).

---

## ✨ Features

- **Drop-in CAD import**: load an exported Onshape model of your hole and play it right away
- **Real physics**: ball rolling, bouncing and collisions powered by [Rapier](https://rapier.rs)
- **3D rendering**: built on [three.js](https://threejs.org) and runs in any modern browser
- **Chromebook-friendly**: no installs, plugins or accounts
- **Forgiving import**: GolfSim tries to handle imperfect student models, so students only have to focus on the CAD
- **Course Builder (teacher only)**: combine multiple student holes into one playable multi-hole course
- **Class high score**: a running leaderboard for the course

## 🚀 Quick Start (Students)

1. **Model your hole in Onshape.** Include a green, walls/bumpers, a tee area, and a cup.
2. **Export your model** from Onshape. <!-- update with the exact format and settings, e.g. STL or GLTF, units in inches -->
3. **Open GolfSim**: **https://senorlloyd.github.io/golfsim** <!-- update if hosted elsewhere -->
4. **Drop your file** onto the page.
5. **Play your hole!** Aim, set your power, and putt.

## 📐 Hole Design Guidelines

To make sure your hole plays well:

| Guideline | Why it matters |
|-----------|----------------|
| Keep walls tall enough to contain the ball | Low walls let the ball fly off the course |
| Make sure the cup is a real hole the ball can drop into | The game needs to detect when you sink the putt |
| Avoid tiny gaps and paper-thin parts | Small gaps can trap the ball or cause physics glitches |
| Keep the playing surface mostly smooth | Sharp bumps and seams make the ball bounce unpredictably |
| Build the hole as one connected model | Loose floating parts may not import correctly |

<!-- Add exact size limits, cup diameter, and tee/cup markers once finalized -->

## 🧑‍🏫 Teacher Tools

### Course Builder
Collect student hole files and arrange them into a multi-hole course. Students then play the full course as one round.

### Class High Score
GolfSim keeps a running high score for the class course so students can compete across periods.

> Course Builder is available only to teachers.

## 🛠️ Tech Stack

| Part | Tool |
|------|------|
| Rendering | [three.js](https://threejs.org) |
| Physics | [Rapier](https://rapier.rs) |
| Hosting | GitHub Pages |

## 💻 Running Locally

```bash
git clone https://github.com/senorlloyd/golfsim.git
cd golfsim
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 🧯 Troubleshooting

| Problem | Fix |
|---------|-----|
| Model looks huge or tiny | Check the units you exported with in Onshape. |
| Ball falls through the floor | Look for gaps or missing faces in your model and re-export. |
| Ball gets stuck | Widen narrow channels and remove tiny ledges or seams. |
| Ball won't go in the cup | Make sure the cup is deep and wide enough for the ball. |
| Nothing happens when I drop the file | Make sure it's the correct export file type. |

## 🗺️ Roadmap

- [x] Browser-based play with three.js + Rapier
- [x] Hosted on GitHub Pages
- [ ] Teacher Course Builder
- [ ] Class high score leaderboard
- [ ] Sharing with other CAD teachers

## 🔗 Related Projects

- **[RouteReady](https://github.com/senorlloyd/routeready)**: 2D design and ShopBot toolpaths
- **[LaserReady](https://github.com/senorlloyd/laserready)**: Illustrator-ready SVGs for laser cutters
- **[ArcRight](https://github.com/senorlloyd/arcright)**: DXF files for CNC plasma
- **[KissCut](https://github.com/senorlloyd/kisscut)**: print-and-cut EPS for the Roland BN-40

## 📄 License

<!-- Choose a license. If you plan to sell GolfSim to other teachers, consider a more restrictive license than MIT. -->
© Beaverton MFG. All rights reserved.
