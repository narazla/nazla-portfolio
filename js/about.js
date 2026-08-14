// Fade-in animasi untuk timeline Experience & Education di about.html
// Kartu muncul satu per satu saat masuk area layar ketika discroll.

(function () {
  const cards = document.querySelectorAll(".tl-card");
  if (cards.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    cards.forEach(function (card) {
      card.classList.add("tl-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("tl-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });
})();
