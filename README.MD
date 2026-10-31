# InternBoard — Responsive Internship Board

A responsive, accessible internship discovery interface built with semantic HTML, CSS, and vanilla JavaScript. This project follows EdVyro Full Stack Development Task-1 and uses the supplied fictional internship dataset.

## Features

- Responsive layout for mobile, tablet, and desktop.
- Internship cards rendered dynamically from `data/internships.json`.
- Live search across role title, domain, location, work mode, and skills.
- Domain, location, and work-mode filters with a clear-filters action.
- Loading, empty-results, and dataset-error states with retry support.
- Keyboard-friendly controls, visible focus indicators, accessible form labels, and live result announcements.
- Save/bookmark interaction and application handoff to the existing `Apply.html` page.
- Mobile navigation menu.
- Dark slate, electric violet, cyan, and emerald visual theme.

## Run locally

Because the board loads JSON with `fetch()`, run it through a local HTTP server rather than opening the HTML file directly.

### Python

```bash
python -m http.server 8000
```

Open `http://localhost:8000/pages/Browse.html`.

### VS Code

Install the Live Server extension, right-click `pages/Browse.html`, and choose **Open with Live Server**.

## Dataset

`data/internships.json` contains the fictional records supplied for the EdVyro task. Update the `internships` array to add or edit opportunities. Each record supports `id`, `title`, `domain`, `mode`, `location`, `skills`, and `openings`.

## Responsive test record

| Viewport | Expected result | Status |
| --- | --- | --- |
| 360px | Single-column cards, stacked filters, compact navigation | Ready for manual verification |
| 768px | Two-column cards where space permits, mobile navigation | Ready for manual verification |
| Desktop (1280px+) | Three-column cards, full navigation, inline search | Ready for manual verification |

## Accessibility checklist

- Semantic header, navigation, main, section, and article elements.
- Explicit accessible names for search and filter controls.
- `aria-live` result announcements and `role="alert"` for loading errors.
- Keyboard-operable buttons and visible `:focus-visible` styling.
- Mobile navigation exposes its expanded state with `aria-expanded`.

## Project structure

```text
InternBoard/
├── assets/
├── data/
│   └── internships.json
├── functionality/
├── pages/
│   └── Browse.html
├── styles/
│   └── Browse.css
├── index.html
└── README.MD
```

## Note

The project retains its original multi-page HTML/CSS/JavaScript architecture and existing authentication, profile, and application pages. No frontend framework or backend service is required for this beginner-level task.
