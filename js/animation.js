// animation.js
document.addEventListener("DOMContentLoaded", () => {

  // simple fade-in on scroll using intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".hero-inner, .card, .about-text, .about-highlights .glass, .contact-form, .services .card").forEach(el => {
    el.classList.add("fade-on-scroll");
    observer.observe(el);
  });

  // animate progress bars in About section
  const progEls = document.querySelectorAll(".progress");
  const progObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const value = el.getAttribute("data-value") || el.dataset.value;
        const span = el.querySelector("span");
        if (span) span.style.width = value + "%";
      }
    });
  }, { threshold: 0.35 });

  progEls.forEach(p => progObserver.observe(p));

});
