scroll(".first");
scroll(".second");
scroll(".third");

function scroll(balise) {
  const balisage = document.querySelector(balise);
  const mainAnimation = document.querySelector(balise);
  // let hasAnimated = false;
  
  // Fonction pour ajuster la translation et l'opacité en fonction du défilement
  const handleScroll = () => {
      // if (hasAnimated) return; // Si l'animation s'est déjà déroulée, on sort de la fonction
  
      const animationRect = mainAnimation.getBoundingClientRect(); // Position de la section dans le viewport
      const windowHeight = window.innerHeight; // Hauteur de la fenêtre
  
      // Vérifie si la section est visible dans la fenêtre de visualisation
      if (animationRect.top < windowHeight && animationRect.bottom > 0) {
          // Déclenche l'animation une fois que la section est visible
          balisage.style.transform = "translateX(0)"; // Translate le texte vers le centre
          balisage.style.opacity = 1; // Augmente l'opacité
          // Marquer que l'animation s'est déroulée
          // hasAnimated = true;
      } else {
        // Si l'élément n'est plus visible, on réinitialise les styles
        balisage.style.transform = "translateX(-100%)"; // Décale le texte hors de la vue
        balisage.style.opacity = 0; // Réduit l'opacité
    }
  };
  
  window.addEventListener("scroll", handleScroll);
  
}