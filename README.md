# Gu Jungun, portfolio

A static portfolio site for Gu Jungun: architecture, renovation and furniture. Plain HTML, CSS and JavaScript, no build step.

## Run it locally

Any static file server works. For example:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Edit the content

Everything shown on the site comes from one file: `js/data.js`.

- `SITE` holds the name, role line, contact address, the intro paragraphs, the education list, the on-site photos and an optional hero photo.
- `SERIES` defines the groups in the index (built work, academic work, furniture and cabinetry).
- `PROJECTS` is the list of projects. Add, remove or reorder entries there; the home page and project pages update on their own. Each project has a `cover` image used on the home page and at the top of its page.

Fields the owner has not supplied yet are marked `fill in` in that file. Leave a field as `""` to hide it.

### Adding photos

1. Put image files under `images/`, for example `images/tampopo-1/before-01.jpg`. JPEGs around 1600 px wide are plenty.
2. Point the entries in `js/data.js` at them:
   - `beforeAfter` on a project: pairs of `before` and `after` paths, shown side by side. Use matching views.
   - `process` on a project: photos taken during the work.
   - `SITE.onSite.photos`: photos of Gu on site, shown on the home page.
   - `drawings` on a project: drawings or renders, shown with captions.
   - `SITE.heroImage`: a photo for the top of the home page. When it is empty the line drawing is shown instead.
3. Delete the `images/placeholder-*.svg` references once real photos are in.

The files in `drawings/` are placeholder line drawings and can be replaced with real drawings (SVG, PNG or JPEG) by changing the paths in `js/data.js`.

## Deploy

The site is static. On GitHub, enable Pages for the repository and point it at the `main` branch root; the site will be served from `index.html`. Any other static host (Netlify, Cloudflare Pages, a plain web server) works the same way.
