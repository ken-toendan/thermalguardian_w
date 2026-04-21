// Smooth-scroll for same-page anchors, mobile menu toggle, and scroll-reveal.
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ─── Smooth scroll + mobile menu ──────────────────────
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  function closeMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    nav.classList.remove("site-nav--open");
  }

  function openMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    nav.classList.add("site-nav--open");
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      closeMenu();
    });
  });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) closeMenu();
      else openMenu();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // ─── Scroll reveal ────────────────────────────────────
  const revealSelector = [
    ".section-head",
    ".hero__headline",
    ".hero__sub",
    ".hero__ctas",
    ".hero__meta",
    ".hero .kicker",
    ".stat-row li",
    ".risk-card",
    ".wedge-card",
    ".wedge-close",
    ".hardware-shot",
    ".hardware-callout",
    ".diagram-wrap",
    ".how-steps li",
    ".tech-card",
    ".novelty",
    ".validation-item",
    ".resource-card",
    ".team-card",
    ".pullquote",
    ".contact__actions",
    ".contact__intro",
  ].join(", ");

  const targets = document.querySelectorAll(revealSelector);
  targets.forEach((el) => el.classList.add("reveal"));

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
})();
