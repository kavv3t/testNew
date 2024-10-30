const element = document.querySelector('.container > section');
const balise = document.querySelector('.contImg > p');

const valeur = ["Projet 1", "Projet 2", "Projet 3", "Projet 4", "Projet 5", "Projet 6", "Projet 7", "Projet 8", "Projet 9"];

element.addEventListener('mouseenter', function() {
  balise.innerHTML = "Voir";
});

element.addEventListener('mouseleave', function() {
  balise.innerHTML = valeur[0];
});
