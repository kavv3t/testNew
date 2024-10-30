scroll(".first");
scroll(".second");
scroll(".third");
scroll(".partie3");

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
          balisage.style.transform = "translateY(0)"; // Translate le texte vers le centre
          balisage.style.opacity = 1; // Augmente l'opacité
          // Marquer que l'animation s'est déroulée
          // hasAnimated = true;
      } else if (balise === ".partie3" && animationRect.top < windowHeight + 200) { // && animationRect.bottom > 200 ne fonctionne pas apparemment
        balisage.style.transform = "translateY(0)"; // Translate le texte vers le centre
        balisage.style.opacity = 1; 
      } else {
            if (balise === ".second"){
                balisage.style.transform = "translateY(20%)"; // Décale le texte hors de la vue
                balisage.style.opacity = 0; // Réduit l'opacité
            } else if (balise === ".partie3") {
                balisage.style.transform = "translateY(50%)";
                balisage.style.opacity = 0;
            } else {
                balisage.style.transform = "translateY(-30%)"; // Décale le texte hors de la vue
                balisage.style.opacity = 0; // Réduit l'opacité
            }
      
    }
  };
  
  window.addEventListener("scroll", handleScroll);
  
}