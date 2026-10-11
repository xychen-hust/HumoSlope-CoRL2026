# HumoSlope Project Homepage

Official project homepage for **HumoSlope: Physics-Guided Biomechanical Gait Adaptation for Humanoid Locomotion on Extreme Sloped Terrains** (CoRL 2026).

The page presents the project overview video, method, simulation results, biomechanical analysis, ablation study, and arXiv citation.

## Local preview

Run the following command from the repository root:

```bash
python -m http.server 8000
```

Then open <http://127.0.0.1:8000/>. VS Code Live Server can also serve `index.html` directly.

## Project structure

- `index.html` — page content and semantic structure
- `static/css/index.css` — visual design and responsive layout
- `static/js/index.js` — navigation and BibTeX copy interaction
- `static/images/` — web-ready figures, logos, poster, and favicon
- `static/videos/` — compressed project overview video

Raw paper figures and editable source assets are kept locally and excluded from the deployed repository.

## Publication

The static site is designed for GitHub Pages and uses repository-relative asset paths. Updates can be published by committing and pushing changes to the default branch.

## Credits

Based on the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), whose website content is licensed under CC BY-SA 4.0. Parts of that template were adopted from the Nerfies project page.
