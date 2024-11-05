document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var locationInput = document.getElementById('locationInput');
    var searchButton = document.getElementById('searchButton');

    // Pré-remplir le champ de recherche "Que cherchez-vous ?" avec "Barbiers"
    searchInput.value = "Manucure";

    // Gestionnaire d'événements pour les animations de sortie des liens
    document.querySelectorAll('a').forEach(function(link) {
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

    // Gère le clic sur le bouton Rechercher
    searchButton.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le formulaire de se soumettre réellement

        // Vérifie si le champ "Où?" est vide
        if (!locationInput.value.trim()) {
            alert('Veuillez indiquer un lieu.');
            locationInput.focus(); // Place le curseur dans la barre de recherche de lieu
            return;
        }
        
        // déclencher la recherche...
    });

    // Gestionnaire d'événements pour les cartes de ville
    document.querySelectorAll('.city-card').forEach(function(card) {
        card.addEventListener('click', function() {
            var location = this.getAttribute('data-location');
            locationInput.value = location;
    
            if (!searchInput.value.trim()) {
                // Afficher un message d'erreur
                searchError.textContent = 'Veuillez indiquer le type de coiffeur.';
                searchError.style.display = 'block';
    
                // Faites défiler jusqu'à l'élément searchInput si celui-ci n'est pas visible
                searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
                // Placez le focus sur searchInput pour que l'utilisateur puisse entrer la recherche
                searchInput.focus();
            } else {
                searchError.style.display = 'none'; // Cache le message d'erreur si tout est bon
                searchButton.click(); // Déclenche le clic sur le bouton de recherche
            }
        });
    });
});