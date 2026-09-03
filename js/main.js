// Renders the home page from SITE, SERIES and PROJECTS (js/data.js).

(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const href = (p) => "project.html?p=" + encodeURIComponent(p.slug);
  const isDrawing = (src) => /\.svg$/i.test(src) && !/placeholder/.test(src);

  document.getElementById("intro").textContent = SITE.tagline || "";

  // Work, grouped by series
  const groups = SERIES.map((s) => ({ ...s, items: PROJECTS.filter((p) => p.series === s.id) })).filter((g) => g.items.length);
  const ungrouped = PROJECTS.filter((p) => !SERIES.some((s) => s.id === p.series));
  if (ungrouped.length) groups.push({ id: "other", title: "Other work", items: ungrouped });

  document.getElementById("groups").innerHTML = groups.map((g) => `
    <div class="group">
      <h2>${esc(g.title)}</h2>
      <div class="grid${g.wide ? " wide" : ""}">
        ${g.items.map((p) => {
          const cover = p.cover || p.drawing;
          return `
          <figure class="tile">
            <a href="${href(p)}">
              <div class="frame${isDrawing(cover) ? " drawing" : ""}"><img src="${esc(cover)}" alt="${esc(p.title)}"></div>
              <figcaption>${esc(p.title)}${p.location ? `<span>${esc(p.location)}${p.year ? ", " + esc(p.year) : ""}</span>` : ""}</figcaption>
            </a>
          </figure>`;
        }).join("")}
      </div>
    </div>`).join("");

  // On site
  const onSite = document.getElementById("onsite");
  const photos = (SITE.onSite && SITE.onSite.photos) || [];
  if (!photos.length) onSite.hidden = true;
  else {
    document.getElementById("onsite-text").textContent = SITE.onSite.text || "";
    document.getElementById("onsite-photos").innerHTML = photos.map((ph) => `
      <figure><div class="photo"><img src="${esc(ph.src)}" alt="${esc(ph.caption || "")}" loading="lazy"></div>
      ${ph.caption ? `<figcaption>${esc(ph.caption)}</figcaption>` : ""}</figure>`).join("");
  }

  // About
  document.getElementById("about-text").innerHTML = SITE.intro.map((t) => `<p>${esc(t)}</p>`).join("");
  document.getElementById("cv").innerHTML = SITE.cv.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");

  // Contact
  const mail = document.getElementById("mail");
  mail.href = "mailto:" + SITE.email;
  mail.textContent = SITE.email;
  const links = [];
  if (SITE.instagram) links.push(`<a href="${esc(SITE.instagram)}" rel="me">Instagram</a>`);
  document.getElementById("links").innerHTML = links.join("");

  document.getElementById("copyright").textContent = "© " + SITE.issued + " " + SITE.name;
})();
