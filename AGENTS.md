# Agent Guide for this Portfolio

This repository is now a **single-page academic portfolio** built on a stripped-down al-folio theme. This file is the **only master reference for agents**; ignore any removed upstream docs that may be mentioned in history.

## 1. What the site includes

- **Single long-scroll home page** (route `/`):
  - File: `_pages/about.md` with layout `about` (`_layouts/about.liquid`).
  - Sections (in scroll order): hero/about, **experience timeline**, **projects**, **publications**, **currently reading**, social links.
- **Content sources**:
  - `_pages/about.md` – all written content for the page, including the experience timeline markup.
  - `_projects/` – currently **empty**; user will add their own project `.md` files here later.
  - `_bibliography/papers.bib` – currently **empty**; user will add their own BibTeX entries for publications.
  - `_data/socials.yml` – email, GitHub, LinkedIn, CV PDF path.
  - `_data/currently_reading.yml` – currently reading list used on the home page.
- **Assets**:
  - `assets/img/profile.svg` – avatar used on the about page.
  - `assets/img/prof_pic.jpg`, `prof_pic_color.png`, `20231110_184139_Original.jpeg` – user photos only.
  - `assets/pdf/resume_ml_updated.pdf` – user’s CV; linked from `socials.yml`.
  - No demo images, PDFs, or JSON resumes remain.

## 2. Tech stack (current scope)

- **Jekyll 4.x**, **Liquid**, **YAML**, **Markdown**, **SCSS**, and small JS includes (already wired up).
- **No blog, news, books, or teaching collections are active**:
  - `_news/`, `_books/`, `_teachings/`, `_posts/` and their demo items were removed.
- **Configuration**:
  - `_config.yml` controls site title, author info, URLs, feature flags, and third-party libraries.
  - `url: https://juniper-halo.github.io`
  - `baseurl: /juno`
  - Jekyll Scholar still points to `_bibliography/papers.bib` but that file is empty by design.

## 3. Local development (Docker)

Preferred workflow is Docker-only:

```bash
# From repo root
docker compose pull
docker compose up            # dev server at http://localhost:8080

# Rebuild image after Gem/Node changes
docker compose up --build

# Stop containers
docker compose down
```

While `docker compose up` is running:

- Edits to `_pages/`, `_data/`, `_sass/`, `_layouts/`, `_includes/`, `_scripts/`, `assets/` will trigger an automatic rebuild.
- The generated site lives in `_site/` (ignored by git).

Manual build without Docker (rarely needed):

```bash
bundle exec jekyll build
```

## 4. GitHub Pages deployment (project site)

This repo is configured as a **GitHub Pages project site**:

- Repository: `juniper-halo/juno`
- Public URL: `https://juniper-halo.github.io/juno/`
- `_config.yml` is already set correctly:
  - `url: https://juniper-halo.github.io`
  - `baseurl: /juno`

### Automatic deployment

The deploy workflow lives at `.github/workflows/deploy.yml` and builds the site into a `gh-pages` branch.

To (re)enable or repair deployment:

1. Enable GitHub Actions in the repo’s **Actions** tab (if disabled).
2. In **Settings → Actions → General → Workflow permissions**, set **Read and write permissions**.
3. Push to `main`. This should trigger the **Deploy** workflow.
4. In **Settings → Pages**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages`

From then on, **every push to `main`** should redeploy the portfolio.

## 5. Repository layout (only what exists now)

- `_pages/about.md` – single-page content.
- `_layouts/about.liquid` – layout that:
  - renders the about content;
  - injects in-page nav pills (`About / Experience / Projects / Publications`);
  - inlines projects and publications on the same page;
  - shows currently reading and socials.
- `_sass/` – theme SCSS:
  - `_themes.scss` – light/dark theme variables and global CSS variables (colors, etc.).
  - `_layout.scss` – body layout, smooth scrolling, background gradient.
  - `_components.scss` – cards, projects grid, **experience timeline**, in-page nav pills, socials, etc.
  - Other partials (`_navbar.scss`, `_typography.scss`, etc.) are still used by the theme.
- `_includes/` – core includes used by the current site:
  - `head.liquid`, `header.liquid`, `footer.liquid`, `metadata.liquid`, `scripts.liquid`.
  - `currently_reading.liquid`, `news.liquid` (news currently disabled on about page).
  - `projects.liquid`, `selected_papers.liquid`, `citation.liquid`, `bib_search.liquid`, etc.
- `_data/`:
  - `socials.yml` – your social / contact info and CV link.
  - `currently_reading.yml` – your reading list.
  - `venues.yml` – still present; can be used if/when you add publications.
  - All Einstein/demo data files (`cv.yml`, `citations.yml`, `coauthors.yml`, `repositories.yml`) were removed.
- `_bibliography/papers.bib` – intentionally empty; safe to populate only with your own work.
- `_projects/` – empty; intended for your own project markdown files.
- `assets/`:
  - `img/` – only your photos + `profile.svg`.
  - `pdf/` – only your CV (`resume_ml_updated.pdf`).
  - `css/`, `js/` – shared theme assets; keep as-is.
- `.github/`:
  - `workflows/` – deployment, accessibility checks, etc. Keep unless explicitly simplifying CI.
  - `instructions/` and `copilot-instructions.md` – can be used as extended reference but may mention deleted upstream features.

## 6. Removed upstream/demo pieces

To keep the portfolio strictly your own, the following were removed:

- All demo pages for blog, news, books, teaching, CV, repositories, profiles, and Einstein examples.
- All demo collections and posts:
  - `_news/`, `_teachings/`, `_books/`, `_posts/` (and their contents).
  - All `_projects/*_project.md` demo files.
- All demo publications and CV data:
  - Einstein entries in `_bibliography/papers.bib` (file is now empty).
  - `_data/cv.yml`, `_data/citations.yml`, `_data/coauthors.yml`, `_data/repositories.yml`.
- Demo assets:
  - Numerically named images, book covers, publication previews, rhino/template images.
  - Example/demo PDFs and Einstein CV outputs.
  - JSON resume and related `jekyll_get_json` config.
- Root-level upstream docs and tooling that don’t apply to this portfolio:
  - `ANALYTICS.md`, `CONTRIBUTING.md`, `CUSTOMIZE.md`, `FAQ.md`, `QUICKSTART.md`, `SEO.md`, `TROUBLESHOOTING.md`, `INSTALL.md`.
  - Various dotfiles and dev container/pre-commit configs that were only for the theme’s own development.

If you ever want to restore any of these features (blog, teaching pages, richer CV, etc.), copy the relevant files and configuration from the upstream al-folio repo and reintroduce them following the patterns already in this codebase.

## 7. Agent rules (for future changes)

- **Stay within current scope**:
  - Default to editing `_pages/about.md`, `_sass/*.scss`, `_config.yml`, `_data/socials.yml`, `_data/currently_reading.yml`, and the assets folder.
  - Use `_projects/` and `_bibliography/papers.bib` only for **user-supplied** content.
- **Don’t reintroduce demo or Einstein content.**
- **Use Docker for build/test**; don’t rely on local Ruby setup unless the user explicitly requests it.
- **Keep the single-page structure** (no new header nav links to separate pages unless the user asks for multi-page navigation).

## Removed demo components (single-page portfolio mode)

This repository is now configured as a **single long-scroll portfolio**. Only these sections are kept and expected to be used:

- **Main webpage**: home `/` (`_pages/about.md`, layout `about`)
- **Work experience**: rendered as a timeline section on the home page (markdown in `_pages/about.md` + styles in `_sass/_components.scss`)
- **Projects**: collection in `_projects/`, rendered inline on the home page (see `_layouts/about.liquid`)
- **Currently reading**: data in `_data/currently_reading.yml`, rendered via `currently_reading.liquid` include on the home page
- **Publications**: BibTeX entries in `_bibliography/`, rendered inline on the home page via `{% bibliography %}` in `_layouts/about.liquid`

The following **demo components were removed** because they are not part of this single-page flow:

- Standalone pages: `_pages/dropdown.md`, `teaching.md`, `repositories.md`, `publications.md`, `projects.md`, `profiles.md`, `news.md`, `cv.md`, `books.md`, `blog.md`, `about_einstein.md`
- Demo collections content: `_news/*`, `_teachings/*`, `_books/*`
- Theme demo blog posts: all files in `_posts/`

Top-level **folders that only supported those demos** have also been removed to keep the project root clean:

- `_books/`, `_news/`, `_teachings/`, `_posts/` – collection roots for removed Books/News/Teaching/Blog features.
- `_site/` – build output (Jekyll will recreate this as needed).
- `lighthouse_results/`, `readme_preview/` – theme preview and Lighthouse report artifacts.

Additional **root-level docs** from the original al-folio theme that are not required for this portfolio have been removed to simplify the project root. These included:

- `ANALYTICS.md`, `CONTRIBUTING.md`, `CUSTOMIZE.md`, `FAQ.md`, `QUICKSTART.md`, `SEO.md`, `TROUBLESHOOTING.md`

If you need those references again, fetch the latest copies from the upstream al-folio repository and drop them back into the root as needed.

Additional **tooling / cache dotfiles** removed from the project root (not needed for running the portfolio):

- `.all-contributorsrc` – all-contributors bot config.
- `.git-blame-ignore-revs` – git blame ignore list for upstream formatting commits.
- `.lycheeignore` – config for the lychee link checker tool.
- `.devcontainer/` – VS Code dev container config for the original theme.
- `.jekyll-cache/` – Jekyll build cache (will be recreated by Jekyll as needed).
- `.pre-commit-config.yaml` – pre-commit hook config used in upstream project.
- `.prettierignore`, `.prettierrc` – Prettier formatting config/ignore files.
- `.ruby-lsp` – Ruby language server metadata.
- `.tweet-cache` – cache used by the Twitter plugin.
- `.DS_Store` – macOS Finder metadata.

These cleanups keep the repo focused on what’s required to run and edit the portfolio, while leaving `.dockerignore`, `.gitignore`, `.gitattributes`, and `.github/` in place for Docker, git hygiene, and CI/GitHub configuration.

### Demo content removed inside collections/data

To ensure the content is strictly your own, all remaining theme demo data has been stripped:

- `_projects/` now has **no demo project markdown files**; add your own files there (see al-folio docs for front matter format) to populate the Projects section.
- `_bibliography/papers.bib` has been cleared of Einstein/sample entries so Publications will be empty until you add your own BibTeX.
- `_data/cv.yml`, `_data/citations.yml`, `_data/coauthors.yml`, `_data/repositories.yml` have been removed; they contained Einstein-era demo CV, citation, coauthor, and GitHub repo data.

The only data files kept under `_data/` are those that reflect your own information, such as:

- `socials.yml` – your email, GitHub, LinkedIn, CV PDF path.
- `currently_reading.yml` – your current reading list used on the home page.

## GitHub Pages & deployment notes

This portfolio is set up as a **project site** on GitHub Pages:

- Repository name: `juno` (not `<user>.github.io`).
- `_config.yml` is configured as:
  - `url: https://juniper-halo.github.io`
  - `baseurl: /juno`
- The published site will be served at: `https://juniper-halo.github.io/juno/`.

### Automatic deployment with GitHub Actions

The upstream al-folio workflow is already configured under `.github/workflows/deploy.yml`. To (re)enable automatic deployment:

1. In your repo on GitHub, open the **Actions** tab and enable GitHub Actions.
2. Go to **Settings → Actions → General → Workflow permissions** and give **Read and write permissions** to workflows.
3. Commit and push changes to the `main` branch. This triggers the **Deploy** workflow, which builds the site and publishes it to the `gh-pages` branch.
4. In **Settings → Pages**, set the publishing source to the `gh-pages` branch (not `main`).

After that, any push to `main` will rebuild and redeploy the portfolio automatically.

### Local development summary (Docker)

For local work, use Docker (no need to install Ruby/Jekyll directly):

```bash
docker compose pull
docker compose up        # or: docker compose -f docker-compose-slim.yml up
```

- Visit `http://localhost:8080` to view the site.
- Changes under `_pages/`, `_projects/`, `_data/`, `_sass/`, etc. are rebuilt automatically while the container is running.

To rebuild the Docker image after dependency changes (e.g., `Gemfile`, `package.json`):

```bash
docker compose up --build
```

For manual builds without Docker (if ever needed):

```bash
bundle exec jekyll build
```

This generates the static site into `_site/`, which can be uploaded to any static host (or used by GitHub Pages when built via CI).

### How to restore a removed component

- **Blog**  
  - Re-create a blog index page at `_pages/blog.md` (layout `page`, `permalink: /blog/`, `nav: true`) and add posts under `_posts/` following standard Jekyll conventions.  
  - Optionally re-enable the blog link in the navbar by adding `nav: true` and `nav_order` to the blog page front matter and re-introducing page links into `_includes/header.liquid` (see al-folio upstream for the original header template).

- **Teaching / courses**  
  - Add course markdown files back into `_teachings/` and create a page like `_pages/teaching.md` with `layout: page`, `permalink: /teaching/`, `nav: true`.  
  - Use the existing includes `courses.liquid` / `course_schedule.liquid` as shown in the upstream al-folio example.

- **News / announcements**  
  - Add news items under `_news/` and create `_pages/news.md` (layout `page`, `permalink: /news/`, `nav: true`) that loops over `site.news`.  
  - Re-add a nav link (as above) if you want it visible in the top bar.

- **Books / profiles / CV / repositories**  
  - Copy the corresponding example page from the upstream al-folio repository into `_pages/` and adjust front matter (`layout`, `permalink`, `nav`, `nav_order`).  
  - Keep existing layouts/partials: `_layouts/book-shelf.liquid`, `_layouts/profiles.liquid`, `_layouts/cv.liquid`, repository includes under `_includes/repository/` are still present and can be reused.

In short: **layouts, includes, and styles are left intact**, so restoring any removed feature is a matter of:

1. Re-creating the relevant markdown page(s) under `_pages/` or collection items under `_news/`, `_teachings/`, `_books/`, `_posts/`.  
2. Giving them correct front matter (`layout`, `permalink`, `nav`, `nav_order`).  
3. Optionally re-enabling header navigation by restoring the full page list logic in `_includes/header.liquid` (check the al-folio upstream version for the original snippet).

## What NOT to Commit

**Always obey [`.gitignore`](.gitignore).** It prevents accidental commits of:

- Build outputs (`_site/`, `.jekyll-cache/`, etc.)
- Dependencies (`node_modules/`, `Gemfile.lock`, `vendor/`)
- OS files (`.DS_store`)
- Editor temp files (`.idea/`, `.swp`, `.swo`)
- Secrets and API keys (never commit credentials)

If you create new files, ensure they follow the patterns in `.gitignore`.
