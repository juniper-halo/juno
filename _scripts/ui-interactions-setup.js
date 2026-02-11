---
permalink: /assets/js/ui-interactions-setup.js
---
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateScrollState = () => {
  document.body.dataset.scrolled = window.scrollY > 10 ? "true" : "false";
};

updateScrollState();
window.addEventListener("scroll", updateScrollState, { passive: true });

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll(".reveal-on-scroll").forEach((el) => el.classList.add("is-visible"));
}
