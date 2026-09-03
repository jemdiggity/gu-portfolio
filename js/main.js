// Renders the home page from SITE, SERIES and PROJECTS (js/data.js).

(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const href = (p) => "project.html?p=" + encodeURIComponent(p.slug);

  // Index table, grouped by series
  const rows = document.getElementById("index-rows");
  const groups = SERIES.map((s) => ({ ...s, items: PROJECTS.filter((p) => p.series === s.id) }))
    .filter((g) => g.items.length);
  const ungrouped = PROJECTS.filter((p) => !SERIES.some((s) => s.id === p.series));
  if (ungrouped.length) groups.push({ id: "other", title: "Other work", items: ungrouped });

  rows.innerHTML = groups.map((g) => `
    <tr class="group"><th scope="rowgroup" colspan="5">${esc(g.title)}</th></tr>
    ${g.items.map((p) => `
      <tr>
        <td class="sheet">${esc(p.sheet)}</td>
        <td class="title"><a href="${href(p)}">${esc(p.title)}</a></td>
        <td>${esc(p.location)}</td>
        <td class="year">${esc(p.year)}</td>
        <td class="status">${esc(p.status)}</td>
      </tr>`).join("")}
  `).join("");

  document.getElementById("work-count").textContent =
    PROJECTS.length + (PROJECTS.length === 1 ? " sheet" : " sheets");

  // Plates
  document.getElementById("plates").innerHTML = PROJECTS.map((p) => `
    <figure class="plate">
      <a href="${href(p)}">
        <div class="plate-frame"><img src="${esc(p.drawing)}" alt="${esc(p.title)}, drawing"></div>
        <figcaption>
          <span>${esc(p.title)}${p.location ? ", " + esc(p.location) : ""}${p.year ? " " + esc(p.year) : ""}</span>
          <span class="sheet">${esc(p.sheet)}</span>
        </figcaption>
      </a>
    </figure>`).join("");

  document.getElementById("tagline").textContent = SITE.tagline || "";

  // Row click: the whole index row leads to the sheet
  rows.addEventListener("click", (e) => {
    if (e.target.closest("a") || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const link = e.target.closest("tr")?.querySelector("a");
    if (link) location.href = link.href;
  });

  // Hero: a photo if one is given, otherwise the line drawing
  if (SITE.heroImage) {
    const svg = document.querySelector(".hero-drawing");
    const img = document.createElement("img");
    img.className = "hero-photo";
    img.src = SITE.heroImage;
    img.alt = SITE.heroImageAlt || "";
    svg.replaceWith(img);
  }

  // On site
  const onSite = document.getElementById("onsite");
  const photos = (SITE.onSite && SITE.onSite.photos) || [];
  if (!photos.length) onSite.hidden = true;
  else {
    document.getElementById("onsite-text").innerHTML = SITE.onSite.text ? `<p>${esc(SITE.onSite.text)}</p>` : "";
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

  // Title block and footer
  document.getElementById("tb-meta").innerHTML =
    `<div>Issued ${esc(SITE.issued)}</div><div><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></div>`;
  document.getElementById("copyright").textContent = "© " + SITE.issued + " " + SITE.name;

  // Role line under the name and in the title block
  document.querySelectorAll(".tb-role").forEach((el) => {
    el.textContent = SITE.role + (SITE.city ? ", " + SITE.city : "");
  });
})();
