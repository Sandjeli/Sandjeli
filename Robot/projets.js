// Tableau de projets
const Basics = [
  {
    titre: "Titre",
    description: "Description",
    image: "./images/reserve.jpg"
  }
];

const Intermediaires = [
  {
    titre: "Titre",
    description: "Description",
    image: "./images/reserve.jpg"
  }
];

const Avances = [
  {
    titre: "Titre",
    description: "Description",
    image: "./images/reserve.jpg"
  }
];

// Fonction pour générer les cartes
function afficherProjets(liste, containerId) {
  const container = document.getElementById(containerId);

  liste.forEach(projet => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${projet.image}" class="card-img-top" alt="${projet.titre}">
        <div class="card-body">
          <h5 class="card-title">${projet.titre}</h5>
          <p class="card-text">${projet.description}</p>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

// Appel pour chaque catégorie
afficherProjets(Basics, "projets-containerBasic");
afficherProjets(Intermediaires, "projets-containerIntermediaire");
afficherProjets(Avances, "projets-containerAvancés");
