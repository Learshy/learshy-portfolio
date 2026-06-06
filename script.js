const cards = document.querySelectorAll(".services article, .work-card, .system-list div");

const reveal = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        reveal.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.18 }
);

cards.forEach((card) => {
  card.classList.add("reveal");
  reveal.observe(card);
});
