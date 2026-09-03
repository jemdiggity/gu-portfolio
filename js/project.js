// Renders project.html?p=<slug> from PROJECTS (js/data.js).

(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const slug = new URLSearchParams(location.search).get("p");
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  const head = document.getElementById("project-head");
  const content = document.getElementById("project-content");
  const pager = document.getElementById("pager");

  document.querySelectorAll(".tb-role").forEach((el) => {
    el.textContent = SITE.role + (SITE.city ? ", " + SITE.city : "");
  });
  document.getElementById("tb-meta").innerHTML =
    `<div>Issued ${esc(SITE.issued)}</div><div><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></div>`;

  if (i < 0) {
    document.title = "Sheet not found, " + SITE.name;
    head.innerHTML = "<h1>Sheet not found</h1>";
    document.getElementById("tb-sheet").textContent = "A-000";
    document.getElementById("tb-sheet-title").textContent = "Index of drawings";
    content.innerHTML = `<p class="notfound">There is no project at this address. <a href="index.html#work">See the index of drawings.</a></p>`;
    pager.hidden = true;
    return;
  }

  const p = PROJECTS[i];
  document.title = p.title + ", " + SITE.name;
  document.getElementById("tb-sheet").textContent = p.sheet;
  document.getElementById("tb-sheet-title").textContent = p.title;

  const where = [p.location, p.year].filter(Boolean).join(", ");
  head.innerHTML = `
    <h1>${esc(p.title)}</h1>
    ${where ? `<p class="where">${esc(where)}</p>` : ""}
    ${p.summary ? `<p class="summary">${esc(p.summary)}</p>` : ""}`;

  const facts = [["Type", p.type], ["Area", p.area], ["Status", p.status], ["Role", p.role], ["Sheet", p.sheet]]
    .filter(([, v]) => v);

  content.innerHTML = `
    <div class="project-main">
      <div class="project-body">${(p.body || []).map((t) => `<p>${esc(t)}</p>`).join("")}</div>
      <dl class="facts">${facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
    </div>
    <div class="figures">
      ${(p.drawings || []).map((d, n) => `
        <figure>
          <div class="plate-frame"><img src="${esc(d.src)}" alt="${esc(p.title)}, ${esc(d.caption || "drawing")}"></div>
          <figcaption><span>${esc(d.caption || "")}</span><span>${esc(p.sheet)}.${n + 1}</span></figcaption>
        </figure>`).join("")}
    </div>
    ${(p.beforeAfter || []).length ? `
    <section class="section" aria-labelledby="ba-heading">
      <div class="section-head"><h2 id="ba-heading">Before and after</h2></div>
      <div class="pairs">
        ${p.beforeAfter.map((pair) => `
          <div class="pair">
            <figure><div class="photo"><img src="${esc(pair.before)}" alt="${esc(p.title)}, before" loading="lazy"></div><figcaption><b>Before</b></figcaption></figure>
            <figure><div class="photo"><img src="${esc(pair.after)}" alt="${esc(p.title)}, after" loading="lazy"></div><figcaption><b>After</b>${pair.caption ? `, ${esc(pair.caption)}` : ""}</figcaption></figure>
          </div>`).join("")}
      </div>
    </section>` : ""}
    ${(p.process || []).length ? `
    <section class="section" aria-labelledby="process-heading">
      <div class="section-head"><h2 id="process-heading">On site</h2></div>
      <div class="strip">
        ${p.process.map((ph) => `
          <figure><div class="photo"><img src="${esc(ph.src)}" alt="${esc(ph.caption || p.title + ", during the work")}" loading="lazy"></div>
          ${ph.caption ? `<figcaption>${esc(ph.caption)}</figcaption>` : ""}</figure>`).join("")}
      </div>
    </section>` : ""}`;

  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  pager.innerHTML = `
    <a class="prev" href="project.html?p=${encodeURIComponent(prev.slug)}"><small>Previous sheet, ${esc(prev.sheet)}</small><span>${esc(prev.title)}</span></a>
    <a class="next" href="project.html?p=${encodeURIComponent(next.slug)}"><small>Next sheet, ${esc(next.sheet)}</small><span>${esc(next.title)}</span></a>`;
})();
