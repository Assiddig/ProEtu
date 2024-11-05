document.addEventListener('DOMContentLoaded', function() {
    const salons = [
        {
            name: "Salon Belle Chevelure",
            city: "Marseille",
            days: "du lundi au vendredi",
            imageUrl: "images/salon1.jpg",
            rating: "★★★★☆",
            availableTimes: "9h00 - 18h00"
        },
        {
            name: "Les Ciseaux d'Or",
            city: "Marseille",
            days: "du lundi au vendredi",
            imageUrl: "images/salon2.jpg",
            rating: "★★★★★",
            availableTimes: "10h00 - 19h00"
        },
        {
            name: "Hair and Style",
            city: "Marseille",
            days: "du lundi au vendredi",
            imageUrl: "images/salon3.jpg",
            rating: "★★★☆☆",
            availableTimes: "8h00 - 16h00"
        }
    ];
    
    const salonList = document.getElementById('salon-list');

    salons.forEach(salon => {
        const salonItem = document.createElement('div');
        salonItem.className = 'salon-item';

        const salonImage = document.createElement('img');
        salonImage.src = salon.imageUrl;
        salonImage.className = 'salon-image';
        salonImage.alt = `Image de ${salon.name}`;

        const salonDetails = document.createElement('div');
        salonDetails.className = 'salon-details';

        const salonName = document.createElement('div');
        salonName.className = 'salon-name';
        salonName.textContent = salon.name;

        const salonCity = document.createElement('div');
        salonCity.className = 'salon-city';
        salonCity.textContent = `Ville: ${salon.city}`;

        const salonDays = document.createElement('div');
        salonDays.className = 'salon-days';
        salonDays.textContent = `Jours: ${salon.days}`;

        const salonRating = document.createElement('div');
        salonRating.className = 'salon-rating';
        salonRating.textContent = salon.rating;

        const salonTiming = document.createElement('div');
        salonTiming.className = 'salon-timing';
        salonTiming.textContent = `Horaires: ${salon.availableTimes}`;

        const bookAppointmentButton = document.createElement('button');
        bookAppointmentButton.textContent = "Prendre un rendez-vous";
        bookAppointmentButton.className = 'book-appointment-button';
        bookAppointmentButton.addEventListener('click', function() {
            window.location.href = 'prestation.html'; // Redirection vers la page de prestation
        });

        salonDetails.appendChild(salonName);
        salonDetails.appendChild(salonCity);
        salonDetails.appendChild(salonDays);
        salonDetails.appendChild(salonRating);
        salonDetails.appendChild(salonTiming);
        salonDetails.appendChild(bookAppointmentButton);

        salonItem.appendChild(salonImage);
        salonItem.appendChild(salonDetails);

        salonList.appendChild(salonItem);
    });
});
