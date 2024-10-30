document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.querySelector(".menu_hamburger");
    const navLinks = document.querySelector(".nav-links");

    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
