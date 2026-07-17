/*==================================================
            ANIMACIONES SCROLL
==================================================*/

const elements = document.querySelectorAll(
  ".service-card, .project-card, .testimonial-card, .info-card, .service-box",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

elements.forEach((element) => {
  observer.observe(element);
});

/*==================================================
            NAVBAR CAMBIO AL SCROLL
==================================================*/

const header = document.querySelector(".header");

console.log(header);

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/*==================================================
        BOTÓN VOLVER ARRIBA
==================================================*/

const scrollTopBtn = document.querySelector(".scroll-top");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollTopBtn.style.opacity = "1";
      scrollTopBtn.style.pointerEvents = "auto";
      scrollTopBtn.style.transform = "translateY(0)";
    } else {
      scrollTopBtn.style.opacity = "0";
      scrollTopBtn.style.pointerEvents = "none";
      scrollTopBtn.style.transform = "translateY(20px)";
    }
  });
}

/*==================================================
            ANIMACIÓN DE SKILLS
==================================================*/

const bars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.5,
  },
);

bars.forEach((bar) => {
  skillObserver.observe(bar);
});
