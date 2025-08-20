// Charger les projets depuis le fichier JSON
fetch('projets.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projets-container');

    data.forEach(projet => {
      // Création du bloc projet
      const card = document.createElement('div');
      card.classList.add('projet-card');

      card.innerHTML = `
        <img src="${projet.image}" alt="${projet.titre}">
        <h2>${projet.titre}</h2>
        <p>${projet.description}</p>
        <a href="${projet.lien}" class="btn">Voir plus</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Erreur de chargement des projets :", error));
