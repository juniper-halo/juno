# juno – portfolio website

Single-page academic portfolio for **Madhav (Juno) Tripathi**, built on a heavily simplified fork of the al-folio Jekyll theme.

- **Live site**: `https://juniper-halo.github.io/juno/`
- **Tech**: Jekyll 4, Liquid, SCSS, Docker, GitHub Pages

This repo is intentionally minimal and only contains what’s needed to render the current portfolio.

## What the site includes

- **Single scroll page at `/`** (`_pages/about.md`, layout `about`):
  - About / hero section (name, short bio, avatar).
  - **Experience** section rendered as a vertical timeline.
  - **Projects** section (wired, but currently empty until you add projects).
  - **Publications** section backed by `_bibliography/papers.bib` (currently empty).
  - **Currently reading** section from `_data/currently_reading.yml`.
  - Social links and contact note from `_data/socials.yml`.
- **Assets**:
  - Images: only `assets/img/profile.svg` and a small set of your own photos.
  - PDFs: only `assets/pdf/resume_juno_latest.pdf` (your CV).

No blog, labs, courses, community gallery, or other theme demo content remains.

## Local development

Use Docker (recommended) from the repo root:

```bash
docker compose pull
docker compose up          # dev server at http://localhost:8080
```

While this is running, edits to:

- `_pages/about.md`
- `_data/socials.yml`, `_data/currently_reading.yml`
- `_sass/*.scss`
- `_layouts/about.liquid`, `_includes/*`
- `assets/img/*`, `assets/pdf/*`

will trigger an automatic rebuild. Stop with `Ctrl+C` and `docker compose down` if needed.

To rebuild the image after dependency changes (e.g. `Gemfile`, `package.json`):

```bash
docker compose up --build
```

## Deployment (GitHub Pages)

This repo is a **project site**:

- Repo: `juniper-halo/juno`
- URL: `https://juniper-halo.github.io/juno/`
- `_config.yml`:
  - `url: https://juniper-halo.github.io`
  - `baseurl: /juno`

Deployment is handled by GitHub Actions (`.github/workflows/deploy.yml`):

1. Enable Actions on the repo and give workflows **read and write** permissions (Settings → Actions → General).
2. Push changes to `main` to trigger the **Deploy** workflow.
3. In **Settings → Pages**, set the source to branch `gh-pages`.

Every push to `main` should then rebuild and publish the site automatically.

## Editing content

- **About / hero**: `_pages/about.md`
  - Bio text.
  - Experience timeline (`.experience-timeline` block).
  - Section headings.
- **Experience**:
  - Structured as HTML inside `_pages/about.md` using `.experience-timeline` / `.experience-item`.
  - Styling is in `_sass/_components.scss`.
- **Projects**:
  - Add markdown files to `_projects/` with front matter like:

    ```yaml
    ---
    layout: page
    title: My Project
    description: Short one-line description
    importance: 1
    category: work
    ---
    ```

  - They will appear in the Projects grid on the home page.

- **Publications**:
  - Add BibTeX entries to `_bibliography/papers.bib`.
  - The Publications section on the home page uses `{% bibliography %}` via Jekyll Scholar.
- **Currently reading**:
  - Edit `_data/currently_reading.yml`.
- **Socials & CV**:
  - Edit `_data/socials.yml` (email, GitHub, LinkedIn, `cv_pdf` path).

## Styling

- Global theme colors and light/dark variables:
  - `_sass/_themes.scss` (uses CSS custom properties like `--global-theme-color`).
- Typography and layout:
  - `_sass/_typography.scss`, `_sass/_layout.scss`.
- Components:
  - `_sass/_components.scss` (cards, projects grid, experience timeline, in-page nav pills, socials).

Changes in these files are picked up automatically by the Jekyll build.

## Upstream theme and license

This site is based on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme, but almost all demo content has been removed and the structure simplified to a single-page portfolio.

- **License**: MIT (see `LICENSE` in this repo).
  - al-folio itself is MIT-licensed and originally based on the [`*folio` theme](https://github.com/bogoli/-folio).

If you want to reintroduce features like a blog, teaching pages, or a full CV page, copy the relevant pieces from the upstream al-folio repository and wire them in following the patterns already present here.
