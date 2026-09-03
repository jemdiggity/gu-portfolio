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

- `SITE` holds the name, intro line, contact address, the about paragraphs, the education list, the portrait and the on-site photos.
- `SERIES` defines the groups in the index (built work, academic work, furniture and cabinetry).
- `PROJECTS` is the list of projects. Add, remove or reorder entries there; the home page and project pages update on their own. Each project has a `cover` image used on the home page and at the top of its page.

Fields the owner has not supplied yet are marked `fill in` in that file. Leave a field as `""` to hide it.

### Photos

Photos live under `images/`, one folder per project, and are referenced from `js/data.js`. A project can list:

- `cover`: the image on the home page and at the top of its page.
- `photos`: finished work, shown two across at their natural proportions.
- `beforeAfter`: pairs of `before` and `after` paths, shown side by side. Use matching views.
- `before`: photos of the building before the work, for views that have no matching after.
- `process`: photos taken during the work.
- `drawings`: drawings, renders or design views, shown full width with captions.

`SITE.onSite.photos` are the photos of Gu on site on the home page, and `SITE.portrait` is the picture in About.

Photos are 1280 px on the long side, re-encoded at JPEG quality 74 with `sips`. To replace one, drop the new file in under the same name.

## Deploy

The site is static. On GitHub, enable Pages for the repository and point it at the `main` branch root; the site will be served from `index.html`. Any other static host (Netlify, Cloudflare Pages, a plain web server) works the same way.
