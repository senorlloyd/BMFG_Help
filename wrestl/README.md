# WreSTL

**Have you ever had a hard STL file that you needed to edit?** WreSTL is a free web app that lets you wrestle any 3D model into shape for your 3D printer. No CAD program, no install, no account. Open it in a browser and go.

Part of the [BMFG Help](../) collection of shop tools for the Beaverton MFG program at Westview High School.

## What it does

| Tool | What it's for |
| --- | --- |
| **Open** | Drag an STL onto the page or click **Open STL**. Binary and text STL files both work. |
| **Auto-repair** | Broken files get patched the moment you open them: holes are filled, backward and duplicate triangles are fixed, tiny cracks are closed, and inside-out models are flipped right side out. Press **Undo** to see the file as it came in. |
| **Scale** | Type an exact size in millimeters (with or without locked proportions), use a percent, fix files saved in inches, or press **Fit to printer**. |
| **Size check** | If a model is bigger than your printer (200 × 200 × 200 mm by default, editable under *Printer*), WreSTL offers to shrink it. If it's tiny, it asks whether the file was saved in inches or meters. |
| **Crop box** | Set a box size (for example 20 × 20 mm) and keep only what's inside it. Drag the arrows in the 3D view to move the box and the red squares to resize a side, or type numbers. |
| **Plane cut** | Slice the model across X, Y or Z at any height, tilt the plane up to 90°, and pick which side to keep. Drag the arrow in the 3D view or use the slider. |
| **Orient** | Rotate 90° around any axis, or mirror. The model always drops back onto the bed, centered. |
| **Export** | Download a binary STL in millimeters, ready for your slicer. |

Every crop and cut fills in the open side so the part stays **watertight** (solid and printable). New faces show in gold so you can see exactly what changed. A badge in the *Model size* panel tells you whether the current mesh is watertight.

## How to use it

1. **Open it.** Drag an STL file onto the screen, or click **Open STL**.
2. **Size it.** Make it bigger or smaller. Too big for your printer? Click **Fit to printer**.
3. **Trim it.** Use the **Crop** box to keep one part, or **Cut** to slice it. The cut side gets filled in.
4. **Save it.** Click **Download STL** and send the file to your slicer like normal.

Click **?** in the top bar any time to see the welcome screen again. **Undo** (Ctrl+Z), **Redo** (Ctrl+Y) and **Reset** are always available.

## Good to know

- STL files don't store units. WreSTL assumes millimeters, like almost every slicer.
- Auto-repair can't fix models made of separate parts that overlap each other. If that's the case, WreSTL tells you how many bad edges are left. Scaling still works fine, but a filled face could have gaps where a cut crosses a bad spot.
- Very large files (around a million triangles) take a few seconds to open.
- Inside the Claude artifact viewer, downloads arrive as a `.zip` containing the STL, because that viewer doesn't allow `.stl` downloads directly. The GitHub Pages version downloads a plain `.stl`.

## Files

- `index.html` is the whole app: one self-contained page. It loads [three.js](https://threejs.org/) r147 from the jsDelivr CDN for the 3D view; everything else (STL reading, cutting, capping, repair, export) is built in.
- `icon.svg` / `icon.png` is the luchador mask used on the BMFG Help landing page.

## How the cutting works (for the curious)

Each cut splits every triangle the plane passes through, keeps the pieces on the chosen side, then traces the outline where the plane met the model. Those outlines become flat polygons (holes included, like the middle of a donut) that are triangulated and stitched to the cut edge using the same points, so no gaps can form. A crop box is just six of these cuts in a row.
