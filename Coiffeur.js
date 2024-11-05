document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var locationInput = document.getElementById('locationInput');
    var suggestions = document.getElementById('suggestions');
    var searchButton = document.getElementById('searchButton');
    var searchError = document.getElementById('searchError');
    const links = document.querySelectorAll('a');

    searchInput.value = "Coiffures";

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
    var options = ["Coiffures", "Coiffures femmes", "Coiffures hommes", "Coiffures afro", "Coiffures de mariages", "Coiffures d'anniversaire"];
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
    
    // Cachez le message d'erreur lorsque l'utilisateur commence à taper
    searchInput.addEventListener('input', function() {
        searchError.style.display = 'none';
    // Cachez le message d'erreur lorsque l'utilisateur clique sur le champ de recherche "Que cherchez-vous ?"
    searchInput.addEventListener('click', function(e) {
        searchError.style.display = 'none';
        e.stopPropagation();
    }); 
  });