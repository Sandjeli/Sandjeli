let oc = 0; // Compteur de bonnes réponses

function Valider() {
    const correctAnswers = [
        'C', 'A', 'A', 'A', 'A', // Réponses pour les questions 1 à 5
        'C', 'A', 'A', 'B', 'B', // Réponses pour les questions 6 à 10
        'B', 'C', 'B', 'A', 'B', // Réponses pour les questions 11 à 15
        'A', 'B', 'A', 'A', 'C'  // Réponses pour les questions 16 à 20
    ];

    const affichageclass = document.querySelector('p'); // Récupère l'élément pour afficher le résultat
    oc = 0; // Réinitialise le compteur à chaque validation

    // Vérification des réponses
    correctAnswers.forEach((answer, index) => {
        const input = document.getElementById(`input${index + 1}`);
        if (input && input.value.toUpperCase() === answer) {
            oc++;
        }
    });

    // Affichage du résultat
    if (oc < 10) {
        affichageclass.classList.add("alert-warning");
        document.getElementById('divalert').innerHTML = `Vous avez obtenu une moyenne de <span style="color:red;">${oc}/20, c'est insuffisant</span>. Revoyez le cours si nécessaire pour reprendre le Quiz.`;
        document.getElementById('forme').innerHTML = `
            <button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="Quiz7.html">Refaire le Quiz</a></button>
            <button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="chapitre7.html">Revoir le Cours</a></button>`;
    } else if (oc >= 10 && oc <= 15) {
        affichageclass.classList.add("alert-secondary");
        document.getElementById('divalert').innerHTML = `Vous avez obtenu une moyenne de <span style="color:blue;">${oc}/20, c'est bien</span>. Vous pouvez passer au chapitre suivant.`;
        document.getElementById('forme').innerHTML = `
            <button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="chapitre7.html">Revoir le Cours</a></button>
            <button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="Quiz7.html">Refaire le Quiz</a></button>
            <button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="Exercices/exercice.html">Voir les Exercices</a></button><br><br>Vous pouvez le refaire autant de fois que vous le souhaitez.`;
    } else {
        affichageclass.classList.add("alert-success");
        document.getElementById('divalert').innerHTML = `Vous avez obtenu une moyenne de <span style="color:green;">${oc}/20, c'est très bien</span>. Vous pouvez passer au chapitre suivant.`;
        document.getElementById('forme').innerHTML = `
            <button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="chapitre7.html">Revoir le Cours</a></button>
            <button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="Quiz7.html">Refaire le Quiz</a></button>
            <button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="mémento.html">Voir le mémento</a></button>
            <button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="indexe.html">Voir les Exercices</a></button><br><br>Vous pouvez le refaire autant de fois que vous le souhaitez.`;
    }
}
