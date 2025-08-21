// Tableau de projets Basics
const Basics = [
  {
    titre: "Titre",
    description: "Description",
    image: "Images/reserve.jpg"
  },
];

// Tableau de projets Intermédiaires
const Intermediaires = [
  {
    titre: "Titre",
    description: "Description",
    image: ".Images/reserve.jpg"
  }
];

// Tableau de projets Avancés
const Avancés = [
  {
    titre: "Titre",
    description: "Description",
    image: ".Images/reserve.jpg"
  }
];

// Sélection des conteneurs
const containerBasic = document.getElementById("projets-containerBasic");
const containerIntermediaire = document.getElementById("projets-containerIntermediaire");
const containerAvancés = document.getElementById("projets-containerAvancés");

// Fonction pour générer une carte projet
function creerCarte(projet) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow-sm">
        <img src="${projet.image}" class="card-img-top" alt="${projet.titre}">
        <div class="card-body">
          <h5 class="card-title">${projet.titre}</h5>
          <p class="card-text">${projet.description}</p>
        </div>
      </div>
    </div>
  `;
}

// Remplissage automatique des conteneurs
Basics.forEach(projet => {
  containerBasic.innerHTML += creerCarte(projet);
});

Intermediaires.forEach(projet => {
  containerIntermediaire.innerHTML += creerCarte(projet);
});

Avancés.forEach(projet => {
  containerAvancés.innerHTML += creerCarte(projet);
});
