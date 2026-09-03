// Renders project.html?p=<slug> from PROJECTS (js/data.js).

(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const isDrawing = (src) => /\.svg$/i.test(src) && !/placeholder/.test(src);
  const slug = new URLSearchParams(location.search).get("p");
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  const head = document.getElementById("project-head");
  const content = document.getElementById("project-content");
  const pager = document.getElementById("pager");
  document.getElementById("copyright").textContent = "© " + SITE.issued + " " + SITE.name;

  if (i < 0) {
    document.title = "Not found, " + SITE.name;
    head.innerHTML = "<h1>Project not found</h1>";
    content.innerHTML = `<p class="notfound">There is no project at this address. <a href="index.html#work">See all work.</a></p>`;
    pager.hidden = true;
    return;
  }

  const p = PROJECTS[i];
  document.title = p.title + ", " + SITE.name;

  const where = [p.location, p.year].filter(Boolean).join(", ");
  head.innerHTML = `
    <h1>${esc(p.title)}</h1>
    ${where ? `<p class="where">${esc(where)}</p>` : ""}
    ${p.summary ? `<p class="summary">${esc(p.summary)}</p>` : ""}`;

  const cover = p.cover || p.drawing;
  const facts = [["Type", p.type], ["Area", p.area], ["Status", p.status], ["Role", p.role]].filter(([, v]) => v);
  const photo = (src, alt) => `<div class="photo"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></div>`;

  content.innerHTML = `
    ${cover ? `<div class="lead${isDrawing(cover) ? " drawing" : ""}"><img src="${esc(cover)}" alt="${esc(p.title)}"></div>` : ""}
    <div class="project-main">
      <div class="project-body">${(p.body || []).map((t) => `<p>${esc(t)}</p>`).join("")}</div>
      <dl class="list facts">${facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
    </div>
    ${(p.beforeAfter || []).length ? `
    <section class="block" aria-labelledby="ba-heading">
      <h2 id="ba-heading">Before and after</h2>
      <div class="pairs">${p.beforeAfter.map((pair) => `
        <div class="pair">
          <figure>${photo(pair.before, p.title + ", before")}<figcaption><b>Before</b></figcaption></figure>
          <figure>${photo(pair.after, p.title + ", after")}<figcaption><b>After</b>${pair.caption ? `, ${esc(pair.caption)}` : ""}</figcaption></figure>
        </div>`).join("")}</div>
    </section>` : ""}
    ${(p.process || []).length ? `
    <section class="block" aria-labelledby="process-heading">
      <h2 id="process-heading">On site</h2>
      <div class="strip">${p.process.map((ph) => `
        <figure>${photo(ph.src, ph.caption || p.title + ", during the work")}${ph.caption ? `<figcaption>${esc(ph.caption)}</figcaption>` : ""}</figure>`).join("")}</div>
    </section>` : ""}
    ${(p.drawings || []).some((d) => d.src !== cover) ? `
    <section class="block" aria-labelledby="drawings-heading">
      <h2 id="drawings-heading">Drawings</h2>
      <div class="figures">${p.drawings.filter((d) => d.src !== cover).map((d) => `
        <figure><div class="lead${isDrawing(d.src) ? " drawing" : ""}"><img src="${esc(d.src)}" alt="${esc(p.title)}, ${esc(d.caption || "drawing")}" loading="lazy"></div>
        ${d.caption ? `<figcaption>${esc(d.caption)}</figcaption>` : ""}</figure>`).join("")}</div>
    </section>` : ""}`;

  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  pager.innerHTML = `
    <a class="prev" href="project.html?p=${encodeURIComponent(prev.slug)}"><small>Previous</small><span>${esc(prev.title)}</span></a>
    <a class="next" href="project.html?p=${encodeURIComponent(next.slug)}"><small>Next</small><span>${esc(next.title)}</span></a>`;
})();
