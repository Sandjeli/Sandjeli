// Tableau de projets

// Debut Basics
const Basics = [
 {
  titre: "Contrôle d'accès RFID",
  description: "Système RFID pour allumer une LED selon l'UID d'une carte.",
  image: "./images/RFID.png",
  longDescription: "Ce projet met en œuvre un système de contrôle d'accès utilisant un module RFID MFRC522 et un Arduino. Lorsqu'une carte RFID est approchée, son UID est lu et comparé à un UID autorisé. Si la carte est reconnue, une LED verte s'allume pour indiquer l'accès autorisé ; sinon, une LED rouge signale un accès refusé. Ce projet illustre la lecture de cartes RFID, la comparaison de données, et le contrôle de sorties électroniques via Arduino. Il constitue une base pédagogique pour les applications de sécurité, les systèmes de porte automatisés et l'apprentissage de l'intégration matériel-logiciel.",
  technos: ["Arduino UNO", "Module RFID MFRC522", "LED RGB", "Résistances 220Ω", "Câbles de connexion"],
  github: "./Fichiers/RFID_LED_Code.pdf",
  video: "./Fichiers/RFID_LED_Demo.mp4"
}
];

// Debut Intermediaire
const Intermediaires = [
  {
    titre: "Bras Robotique",
    description: "Bras Robotique contrôlé par joystick.",
    image: "./images/Bras.JPG",
    longDescription: "Ce bras robotique est conçu pour être manipulé facilement grâce à un joystick, offrant une interface intuitive pour contrôler ses mouvements. Il permet de réaliser des tâches de précision comme saisir, déplacer ou orienter des objets. Sa conception met en avant la mécanique articulée et la fluidité des gestes, ce qui en fait un outil idéal pour l’apprentissage de la robotique, les démonstrations pédagogiques ou les projets de prototypage. Compact et robuste, il illustre parfaitement l’intégration entre électronique, programmation et contrôle manuel.",
    technos: ["01 Arduino uno", "04 Servos moteurs SG90", "01 Moteur pas à pas 28BYJ-48","Un joystick","Câble de connexion"],
    github: "./Fichiers/Brascode.pdf",
    video: "./Fichiers/Bras robotique.mp4"
  }
];


// Debut Avances
const Avances = [
  {
    titre: "Robot éviteur d’obstacles",
    description: "Un robot autonome qui évite les obstacles.",
    image: "./images/Xion1.jpg",
    longDescription: "Grâce à des capteurs ultrason, ce robot détecte et évite les obstacles. Un projet avancé en électronique et programmation.",
    technos: ["Arduino Uno", "Capteurs ultrason", "Moteurs DC + Roues", "Driver L298N","Servo Moteur SG90","Câble de connexion"],
    github: "./Fichiers/Xion2code.pdf",
    video: "./Fichiers/VXION2.mp4"
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
          <a href="projet.html?titre=${encodeURIComponent(projet.titre)}" class="btn btn-primary">Voir le projet</a>
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
