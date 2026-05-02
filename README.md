<!-- SPDX-FileCopyrightText: 2026 Pedro Miraldo -->
<!-- SPDX-License-Identifier: MIT -->

# Pedro Miraldo Website

Personal academic website for Pedro Miraldo, served via GitHub Pages.

Live site: https://pmiraldo.github.io/

## Tech Stack

- Static HTML pages
- SCSS/CSS styling (`app/scss`)
- Vanilla JavaScript for shared navbar behavior (`app/js/nav.js`)
- Static assets (images, PDFs, videos, project media)

## Project Structure

```text
.
├── index.html
├── publications.html
├── students.html
├── nav.html
├── app/
│   ├── js/nav.js
│   └── scss/
│       ├── style.scss
│       ├── style.css
│       └── _*.scss
├── projects/
│   ├── bansac/bansac.html
│   ├── ref_line_intersect/line_intersect.html
│   └── regnet/regnet.html
└── figures/, people/, project_gif/, pub/, videos/, ...
```


## How Navigation Works

- Each page includes:
  - `<body id="body_id">`
  - page flags (`project`, `merl`, `ist`)
  - `<script id="replace_with_navbar" src="/app/js/nav.js"></script>`
- `app/js/nav.js` fetches `nav.html` and injects it into each page.
- Active menu highlighting is based on `window.location.pathname`.
- Project page highlighting is controlled by `projectLinkByPath` in `app/js/nav.js`.

If you add a new project page, update:

1. `nav.html` (add the link in the project dropdown)
2. `app/js/nav.js` (add path-to-link mapping in `projectLinkByPath`)


## Run Locally

Because the navbar is loaded with `fetch("/nav.html")`, use a local web server (do not open files directly with `file://`).

```bash
cd /path/to/pmiraldo.github.io
python3 -m http.server 8000
```

Open: `http://localhost:8000`

## Tooling Configuration

This repository includes:

- `mise.toml` for runtime + task management
- `pyproject.toml` for Python tooling dependencies
- `package.json` for npm tooling dependencies (`sass`, `prettier`, `htmlhint`, `eslint`)
- `.pre-commit-config.yaml` for git hooks
- `.htmlhintrc` for HTML lint rules
- `mise` adds `node_modules/.bin` to `PATH` (`[env]._.path`) so local npm CLIs can be called directly.

### One-time setup

```bash
mise trust
mise install
mise run precommit_install
```

### Run checks

Run project checks:

```bash
mise run lint_html
npm run lint:js
mise run precommit_run
```

It's highly recommended to run pre-commit directly, and make sure that all issues are fixed:

```bash
pre-commit run --all-files
```

### HTMLHint configuration

- Rules are defined in `.htmlhintrc`.
- To adjust lint strictness, enable/disable rules in that file.
- The pre-commit hook runs `htmlhint --config .htmlhintrc`.

### JavaScript formatting and linting

- JS formatting is handled by Prettier (`prettier-js` pre-commit hook).
- JS non-format checks are handled by ESLint (`eslint-js` pre-commit hook).
- Both hooks apply to files under `app/js/**/*.js`.

## Styling Notes

- SCSS entrypoint: `app/scss/style.scss`
- Compiled stylesheet used by pages: `app/scss/style.css`

If you use Sass locally:

```bash
mise run sass_build
# or directly: sass app/scss/style.scss app/scss/style.css
```

Or watch mode:

```bash
mise run sass_watch
# or directly: sass --watch app/scss/style.scss:app/scss/style.css
```


## Content Update Checklist

- Update homepage highlights in `index.html`.
- Update publication list in `publications.html`.
- Update student/intern entries in `students.html`.
- Keep project pages under `projects/` consistent with nav links.

## License

MIT. See [LICENSE](LICENSE).
