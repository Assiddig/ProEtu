document.addEventListener('DOMContentLoaded', function() {
    const prestations = [
        { name: "Coupe de cheveux", price: "20€" },
        { name: "Coloration", price: "35€" },
        { name: "Manucure", price: "18€" },
        { name: "Barbe", price: "15€" }
    ];

    const container = document.querySelector('.prestations-container');

    prestations.forEach(prestation => {
        const item = document.createElement('div');
        item.className = 'prestation-item';

        const name = document.createElement('span');
        name.className = 'prestation-name';
        name.textContent = `${prestation.name} - ${prestation.price}`;

        const chooseButton = document.createElement('button');
        chooseButton.className = 'choose-button';
        chooseButton.textContent = 'Choisir';
        chooseButton.addEventListener('click', function() {
            console.log(`Vous avez choisi: ${prestation.name}`);
        });

        item.appendChild(name);
        item.appendChild(chooseButton);
        container.appendChild(item);
    });
});
