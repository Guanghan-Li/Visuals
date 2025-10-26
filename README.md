# Graphics Timelines

A small collection of hand-crafted timeline visuals (HTML/CSS only) for quick status exports. Use these pages to present the high-level milestones for the installation → results effort or to tweak the visual to fit adjacent projects.

## Contents
- `Timeline/main.html` + `Timeline/main.css` — single-page roadmap highlighting Installation (Week 0), Review & Tweaking (Week 2), and Results (Week 4). Card layout is print-friendly and tuned for export to PNG/PDF.
- `Gantt/gantt-visualization.html` — polished Gantt grid for the BSF feeder project, including legend blocks, avatar chips, and ready-to-edit tasks.
- `Gantt/simple.*` — lightweight playground (HTML/CSS/JS) for experimenting with custom data or different color palettes.

## Usage
1. Open any HTML file directly in a browser (double-click or drag into a tab). No build or server required.
2. Adjust copy or colors in the paired CSS/HTML files as needed—everything is plain text.
3. To export a PNG or PDF, use the browser’s **Print → Save as PDF** flow or capture a full-page screenshot. Chrome’s “Save as PDF” yields crisp, vector output; macOS/iOS screenshot tools work well for PNG.

## Tips
- Update the inline `--position` / `--width` custom properties on `.phase` blocks in `Timeline/main.html` to shift milestone placement without touching CSS.
- For the Gantt view, change `--day-width` and `--row-height` in `Gantt/gantt-visualization.html` to scale the grid to your target resolution.
- Keep assets versioned in Git so design tweaks and copy changes stay reviewable.
