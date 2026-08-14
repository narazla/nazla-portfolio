const heroSpace = document.getElementById("heroSpace");
const nameFloat = document.getElementById("nameFloat");
const heroPanel = document.getElementById("heroPanel");

const heroArrow = document.getElementById("heroArrow");           // wrapper (posisi)
const heroArrowInner = document.getElementById("heroArrowInner"); // inner (floating)

const siteHeader = document.getElementById("siteHeader");
const nameTarget = document.getElementById("nameTarget");

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

function getTargetCenter() {
  if (!nameTarget) return { x: window.innerWidth * 0.5, y: 32 };
  const r = nameTarget.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

function animate() {
  if (!heroSpace || !nameFloat) return;

  const heroH = heroSpace.offsetHeight || window.innerHeight;
  const scrollY = window.scrollY;

  const tRaw = scrollY / (heroH * 0.85);
  const t = clamp(tRaw, 0, 1);
  const ease = smoothstep(t);

  // NAME move
  const startX = window.innerWidth * 0.5;
  const startY = window.innerHeight * 0.30;

  const target = getTargetCenter();
  const endX = target.x;
  const endY = target.y + 4;

  const x = lerp(startX, endX, ease);
  const y = lerp(startY, endY, ease);

  const scale = lerp(1, 0.34, ease);

  nameFloat.style.transform =
    `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0) scale(${scale})`;

  // ARROW follow name
  if (heroArrow) {
    const nameRect = nameFloat.getBoundingClientRect();
    const arrowX = nameRect.left + nameRect.width / 2;
    const arrowY = nameRect.bottom + 16;

    heroArrow.style.transform =
      `translate3d(${arrowX}px, ${arrowY}px, 0) translate3d(-50%, 0, 0)`;
  }

  // floating only at start
  if (heroArrowInner) {
    if (t > 0.05) heroArrowInner.classList.remove("arrow-float");
    else heroArrowInner.classList.add("arrow-float");
  }

  // PANEL fade
  const panelFadeStart = 0.10;
  const panelFadeEnd = 0.48;
  const panelT = clamp((t - panelFadeStart) / (panelFadeEnd - panelFadeStart), 0, 1);
  const panelEase = smoothstep(panelT);

  if (heroPanel) heroPanel.style.opacity = String(1 - panelEase);

  // ARROW fade
  if (heroArrow) {
    const arrowFadeStart = 0.18;
    const arrowFadeEnd = 0.55;
    const arrowT = clamp((t - arrowFadeStart) / (arrowFadeEnd - arrowFadeStart), 0, 1);
    const arrowEase = smoothstep(arrowT);
    heroArrow.style.opacity = String(1 - arrowEase);
  }

  // HEADER show
  const headerOn = t > 0.78;
  if (siteHeader) {
    if (headerOn) siteHeader.classList.add("header-active");
    else siteHeader.classList.remove("header-active");
  }

  // STARS fade out — extended beyond intro
  const starsContainer = document.getElementById("starsContainer");
  if (starsContainer) {
    const fadeStart = window.innerHeight * 1.2; // mulai fade
    const fadeEnd   = window.innerHeight * 2.0; // hilang total

    if (scrollY < fadeStart) {
      starsContainer.style.opacity = "1";
    } else if (scrollY > fadeEnd) {
      starsContainer.style.opacity = "0";
    } else {
      const t = (scrollY - fadeStart) / (fadeEnd - fadeStart);
      starsContainer.style.opacity = String(1 - t);
    }
  }
}

let ticking = false;
function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      animate();
      ticking = false;
    });
    ticking = true;
  }
}

animate();
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", animate);

// Scroll scale effect for "A Couple More Things"
const scrollTitle = document.getElementById("scrollTitle");

function animateScrollTitle() {
  if (!scrollTitle) return;

  const rect = scrollTitle.getBoundingClientRect();
  const windowH = window.innerHeight;

  // Zona aktif animasi
  const start = windowH * 0.85; // mulai membesar
  const end   = windowH * 0.35; // STOP di sini

  // Hitung progress hanya di zona ini
  const rawProgress = (start - rect.top) / (start - end);
  const progress = clamp(rawProgress, 0, 1);

  const minScale = 0.9;
  const maxScale = 1.15;

  const eased = smoothstep(progress);
  const scale = lerp(minScale, maxScale, eased);

  scrollTitle.style.transform = `scale(${scale})`;
}

window.addEventListener("scroll", animateScrollTitle, { passive: true });
window.addEventListener("resize", animateScrollTitle);
animateScrollTitle();

// Hitung ulang setelah halaman dan font selesai dimuat.
// Perlu saat halaman dibuka langsung di posisi #works.
function recalcAll() {
  animate();
  animateScrollTitle();
}

window.addEventListener("load", function () {
  recalcAll();
  setTimeout(recalcAll, 600);
});

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(recalcAll);
}