document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var locationInput = document.getElementById('locationInput');
    var suggestions = document.getElementById('suggestions');
    var searchButton = document.getElementById('searchButton');
    var searchError = document.getElementById('searchError');
    const links = document.querySelectorAll('a');

    link.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche la navigation immédiate
        const href = this.href; // Stocke l'URL de destination

        // Applique l'effet de fondu de sortie
        document.body.style.animation = 'fadeOut 1s ease forwards';

        // Retarde la navigation jusqu'à la fin de l'animation
        setTimeout(function() {
            window.location.href = href;
        }, 500); // Correspond à la durée de l'animation
    });
    });


    // Ajoute des suggestions
    var options = ["Coiffures", "Barbiers", "Manucure"];
    options.forEach(function(option) {
        var link = document.createElement('a');
        link.textContent = option;
        link.href = "#";
        link.addEventListener('click', function(e) {
            e.preventDefault();
            searchInput.value = option; // Remplit la barre de recherche avec l'option
            locationInput.focus(); // Place le curseur dans la barre de recherche de lieu
            suggestions.classList.remove('active'); // Cache les suggestions
        });
        suggestions.appendChild(link);
    });

    // Affiche les suggestions lorsqu'on clique sur la barre de recherche
    searchInput.addEventListener('click', function(e) {
        e.stopPropagation(); // Empêche l'événement de se propager au document
        suggestions.classList.add('active');
    });

    // Cache les suggestions lorsqu'on clique ailleurs
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
            suggestions.classList.remove('active');
        }
    });

    // Gère le clic sur le bouton Rechercher
    searchButton.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le formulaire de se soumettre réellement

        // Vérifie si le champ "Que cherchez-vous?" est vide
        if (!searchInput.value.trim()) {
            alert('Veuillez choisir le type de coiffeur.');
            searchInput.focus(); // Place le curseur dans la barre de recherche
            return;
        }
        
        // Vérifie si le champ "Où?" est vide
        if (!locationInput.value.trim()) {
            alert('Veuillez indiquer un lieu.');
            locationInput.focus(); // Place le curseur dans la barre de recherche de lieu
            return;
        }
        
        // Ici je dois mettre le truc pour déclencher la recherche...
    });