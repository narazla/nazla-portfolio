/* =========================================================
   RENDER HALAMAN DETAIL PROJECT
   Membaca ?id=<slug> dari URL lalu mengisi project.html
   dari data di js/projects.js
   ========================================================= */

(function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("id");

  const index = PROJECTS.findIndex(function (p) {
    return p.slug === slug;
  });

  const notFound = document.getElementById("notFound");
  const root = document.getElementById("projectRoot");

  if (index === -1) {
    notFound.classList.remove("hidden");
    return;
  }

  const project = PROJECTS[index];
  root.classList.remove("hidden");

  const base = "./assets/project/" + project.slug + "/";

  /* ---------- judul, tagline, cover ---------- */

  document.title = project.name + " — Nazla Azzahra";
  document.getElementById("pName").textContent = project.name;

  const taglineEl = document.getElementById("pTagline");
  if (project.tagline) {
    taglineEl.textContent = project.tagline;
    taglineEl.style.marginTop = (20 + (project.taglineGap || 0)) + "px";
  } else {
    taglineEl.classList.add("hidden");
  }

  const coverEl = document.getElementById("pCover");
  coverEl.src = base + "cover.png";
  coverEl.alt = "Cover " + project.name;
  coverEl.addEventListener("error", function () {
    coverEl.classList.add("hidden");
  });

  /* ---------- overview ---------- */

  const overviewEl = document.getElementById("pOverview");
  if (project.overview) {
    overviewEl.textContent = project.overview;
  } else {
    overviewEl.classList.add("hidden");
  }

  /* ---------- spec card ---------- */

  const specEl = document.getElementById("pSpec");

  function addRow(label, build) {
    const row = document.createElement("div");
    row.className = "spec-row";

    const dt = document.createElement("dt");
    dt.className = "spec-label";
    dt.textContent = label;

    const dd = document.createElement("dd");
    dd.className = "spec-value";
    build(dd);

    row.appendChild(dt);
    row.appendChild(dd);
    specEl.appendChild(row);
  }

  if (project.role) {
    addRow("Role", function (dd) {
      dd.textContent = project.role;
    });
  }

  const techList = Array.isArray(project.tech)
    ? project.tech
    : project.tech
    ? [project.tech]
    : [];

  if (techList.length > 0) {
    addRow("Tech", function (dd) {
      const ul = document.createElement("ul");
      ul.className = "tech-list";
      techList.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      dd.appendChild(ul);
    });
  }

  if (project.year) {
    addRow("Year", function (dd) {
      dd.textContent = project.year;
    });
  }

  const linkList = Array.isArray(project.link)
    ? project.link
    : project.link
    ? [{ label: "", url: project.link }]
    : [];

  if (linkList.length > 0) {
    addRow("Link", function (dd) {
      const ul = document.createElement("ul");
      ul.className = "tech-list";
      linkList.forEach(function (item) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.className = "underline underline-offset-4 hover:opacity-70 transition";
        a.textContent = item.label
          ? item.label
          : item.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
        li.appendChild(a);
        ul.appendChild(li);
      });
      dd.appendChild(ul);
    });
  }

  /* ---------- carousel ---------- */

  const carousel = document.getElementById("pCarousel");
  const holder = document.getElementById("slideHolder");
  const dotsEl = document.getElementById("slideDots");
  const prevBtn = document.getElementById("prevSlide");
  const nextBtn = document.getElementById("nextSlide");

  const slides = project.slides || [];
  let current = 0;

  function isMobileShot(name) {
    return name.indexOf("-mobile") !== -1;
  }

  function buildSlide(name) {
    const img = document.createElement("img");
    img.src = base + name + ".png";
    img.alt = project.name + " screenshot";
    img.loading = "lazy";

    if (isMobileShot(name)) {
      const phone = document.createElement("div");
      phone.className = "phone-frame";
      phone.appendChild(img);
      return phone;
    }

    const browser = document.createElement("div");
    browser.className = "browser-frame";

    const bar = document.createElement("div");
    bar.className = "browser-bar";
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("span");
      dot.className = "browser-dot";
      bar.appendChild(dot);
    }

    browser.appendChild(bar);
    browser.appendChild(img);
    return browser;
  }

  function showSlide(i) {
    current = (i + slides.length) % slides.length;
    holder.innerHTML = "";
    holder.appendChild(buildSlide(slides[current]));

    Array.prototype.forEach.call(dotsEl.children, function (dot, di) {
      dot.classList.toggle("is-active", di === current);
    });
  }

  if (slides.length === 0) {
    carousel.classList.add("hidden");
  } else {
    slides.forEach(function (_, i) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slide-dot";
      dot.setAttribute("aria-label", "Slide " + (i + 1));
      dot.addEventListener("click", function () {
        showSlide(i);
      });
      dotsEl.appendChild(dot);
    });

    prevBtn.addEventListener("click", function () {
      showSlide(current - 1);
    });
    nextBtn.addEventListener("click", function () {
      showSlide(current + 1);
    });

    if (slides.length === 1) {
      prevBtn.classList.add("invisible");
      nextBtn.classList.add("invisible");
      dotsEl.classList.add("hidden");
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") showSlide(current - 1);
      if (e.key === "ArrowRight") showSlide(current + 1);
    });

    showSlide(0);
  }

  /* ---------- nav project sebelumnya / berikutnya ---------- */

  const prevProject = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  const prevLink = document.getElementById("prevProject");
  const nextLink = document.getElementById("nextProject");

  prevLink.href = "project.html?id=" + prevProject.slug;
  prevLink.textContent = "\u2190 " + prevProject.name;

  nextLink.href = "project.html?id=" + nextProject.slug;
  nextLink.textContent = nextProject.name + " \u2192";
})();
