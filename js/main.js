document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-text");
    setTimeout(() => {
        heroText.classList.add("visible");
    }, 400);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-text");
    setTimeout(() => {
        heroText.classList.add("visible");
    }, 400);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const filterButtons = document.querySelectorAll(".projects-filter button");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projects.forEach(project => {
            if (filter === "all" || project.getAttribute("data-category") === filter) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".about-text, .hero-text");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight - 100) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

// Menu hamburguer
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const elements = document.querySelectorAll('.about-text, .hero-text, .project-card, .skill-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

const backToTop = document.getElementById("backToTop");

// Mostrar botão ao rolar
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});