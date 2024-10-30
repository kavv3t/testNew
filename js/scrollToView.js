function scrollToSection(target) {
  const targetSection = document.getElementById(target);
  targetSection.scrollIntoView({ behavior: 'smooth' });
}