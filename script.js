const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector(".header");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 180;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => link.classList.remove("active"));

            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });

    header.classList.toggle("sticky", window.scrollY > 60);
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

ScrollReveal({
    distance: "70px",
    duration: 1400,
    delay: 120,
    easing: "cubic-bezier(0.2, 0.8, 0.2, 1)"
});

ScrollReveal().reveal(".hero-copy, .section-title", { origin: "top" });
ScrollReveal().reveal(".hero-visual, .project-card, .contact-card", { origin: "bottom", interval: 120 });
ScrollReveal().reveal(".about-card, .panel", { origin: "left", interval: 100 });
ScrollReveal().reveal(".focus-card", { origin: "right", interval: 120 });

new Typed(".multiple-text", {
    strings: [
        "a final-year CSE student",
        "a machine learning enthusiast",
        "a backend and mobile developer",
        "a competitive programmer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1200,
    loop: true
});
