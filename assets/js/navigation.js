const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("is-open");
    }
  });
}

const pageHeroTitle = document.querySelector(".page-hero-title");

if (pageHeroTitle) {
  let logoVisibilityFrame;

  const updateNavLogo = () => {
    logoVisibilityFrame = undefined;
    const titleIsBehindNavbar = pageHeroTitle.getBoundingClientRect().bottom <= 76;
    document.body.classList.toggle("nav-logo-visible", titleIsBehindNavbar);
  };

  const requestNavLogoUpdate = () => {
    if (logoVisibilityFrame !== undefined) return;
    logoVisibilityFrame = requestAnimationFrame(updateNavLogo);
  };

  window.addEventListener("scroll", requestNavLogoUpdate, { passive: true });
  window.addEventListener("resize", requestNavLogoUpdate);
  updateNavLogo();
}

document.querySelectorAll(".faq-question").forEach((button, index) => {
  const answer = button.parentElement.querySelector(".faq-answer");
  if (answer) {
    answer.id = `faq-antwoord-${index + 1}`;
    button.setAttribute("aria-controls", answer.id);
  }
  button.setAttribute("aria-expanded", "false");

  button.addEventListener("click", () => {
    const faqItem = button.closest(".faq-item");
    const isOpen = faqItem.classList.toggle("active");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});
