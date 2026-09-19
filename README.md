# Portfolio — Davyd Shcherba

Personal portfolio site. Plain HTML, CSS and JavaScript — no build step, no dependencies.

## Structure

```
index.html        the whole page
css/style.css     styles (CSS custom properties, dark + light themes)
js/main.js        theme toggle, scroll reveal
assets/img/       photos and project screenshots
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

## Still to add

- A photo in `assets/img/` and an `<img>` in the hero.
- A CV PDF in `assets/` linked from the contacts list.
- LinkedIn, once the profile exists.
