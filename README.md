# Portfolio — Davyd Shcherba

Personal portfolio site. Plain HTML, CSS and JavaScript — no build step, no dependencies.

## Structure

```
index.html        the whole page
css/style.css     styles (CSS custom properties, dark + light themes)
js/main.js        theme toggle, scroll reveal
assets/img/       photos and project screenshots
assets/og-card.html   source for the social preview image
```

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` directly in a browser also works.

## Editing content

All copy lives in `index.html`. The pieces you will change most often:

- **Hero** — `.hero__tagline`, and the `status` line in `.hero__meta`.
- **Projects** — copy the whole `<article class="project">` block for each new project.
  Keep `.project__desc` to what it does and `.project__role` to what you built.
- **Skills** — the `<li>` items inside each `.skills__group`.
- **Contacts** — the `.contacts` list, plus the three links in `.hero__links`.

Colours are defined once at the top of `css/style.css`, in `:root` (dark) and
`:root[data-theme="light"]` (light). Change `--accent` to restyle every highlight.

## Deploy

**GitHub Pages** — push to `main`, then Settings → Pages → Source: `main` / `/ (root)`.

**Netlify / Vercel** — connect the repo; no build command, publish directory `.`.

All paths are relative, so the site works from any subdirectory.

## Social preview

`index.html` points `og:image` at `assets/img/og.png` (1200×630), which does not exist yet.
To create it, screenshot `assets/og-card.html` at 1200×630 — with headless Chrome:

```bash
chrome --headless --screenshot=assets/img/og.png --window-size=1200,630 assets/og-card.html
```

The absolute URLs in the `og:*` and `twitter:*` tags assume GitHub Pages at
`https://davydshcherba.github.io/Portfolio/`. Change them if the site moves to
another domain — social scrapers ignore relative image paths.

## Still to add

- The `og.png` above, so shared links show a card instead of a grey box.
- Screenshots or a short demo for Vision and Tally, under the project cards.
- Live links for Vision and Tally once they are deployed.
- A photo in `assets/img/` and an `<img>` in the hero.
- A CV PDF in `assets/` linked from the contacts list.
- LinkedIn, once the profile exists.
