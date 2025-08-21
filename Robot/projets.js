// Tableau de projets
const Basics = [
  {
    titre: "🚨 Alarme incendie avec capteur de flamme",
    description: "Détecteur de flamme + buzzer qui alerte en cas d'incendie.",
    image: "./images/flamme.jpg"
  },
  {
    titre: "💡 Allumer une LED avec un bouton",
    description: "Projet simple pour comprendre les entrées/sorties Arduino.",
    image: "./images/led.jpg"
  }
];

const Intermediaires = [
  {
    titre: "🌡️ Station météo",
    description: "Mesurer température et humidité avec DHT11.",
    image: "./images/meteo.jpg"
  }
];

const Avances = [
  {
    titre: "🤖 Robot éviteur d'obstacles",
    description: "Un robot mobile qui détecte et évite les obstacles avec des capteurs ultrason.",
    image: "./images/robot.jpg"
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
