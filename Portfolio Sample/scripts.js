
// Skill Circle Animation
document.querySelectorAll(".skill-circle").forEach((circle) => {
  const level = circle.getAttribute("data-level");
  gsap.to(circle, {
    background: `conic-gradient(#2ecc71 ${level}%, #ddd ${level}%)`,
    delay: 0.3,
    duration: 1.5,
  });
});

// Scroll Trigger Animations
gsap.utils.toArray(".section-box").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
});

// Smooth Scrolling for Links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
