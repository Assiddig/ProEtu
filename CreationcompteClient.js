//Pour gerer le formulaire de la creation de compte client

document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire par défaut

    // Définition de la fonction showError
    function showError(message, elementId) {
        const errorDiv = document.getElementById(elementId);
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    
        setTimeout(() => {
            errorDiv.style.display = 'none';
        }, 5000); // Fait disparaître le message après 5 secondes
    }
    
    // Récupération des valeurs des champs
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var dateNaissance = document.getElementById('dateNaissance').value;
    var NumeroTelephone = document.getElementById('NumeroTelephone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validation de la date de naissance
    var dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
    if (!dateRegex.test(dateNaissance)) {
        showError('Date de naissance incorrecte. Veuillez entrer le format JJ/MM/AAAA.', 'datedenaissanceError');
        return;
    }

    // Validation du numéro de téléphone
    var phoneRegex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
    if (!phoneRegex.test(NumeroTelephone)) {
        showError('Numéro de téléphone incorrect. Veuillez entrer un numéro de téléphone valide.', 'number_error');
        return;
    }



    // Validation de l'adresse mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Veuillez entrer une adresse mail valide.', 'emailError');
        return;
    }

    // Validation du mot de passe
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        showError('Votre mot de passe doit contenir au minimum 8 caractères, une majuscule, un chiffre et un caractère spécial.', 'passwordError');
        return;
    }

   

    // Si tout est valide, afficher le message de succès et éventuellement rediriger
    document.getElementById('successMsg').style.display = 'block'; // Afficher le message de succès
    // Redirection ou autres actions après la création du compte
    // window.location.href = 'connexion.html'; // Redirection vers la page de connexion
});
//ici je gere le p'tit oeil pour montrer le password
document.getElementById('togglePassword').addEventListener('mousedown', function (e) {
    e.preventDefault(); // Prévenir l'action par défaut
    document.getElementById('password').type = 'text'; // Changer le type en text
});

document.getElementById('togglePassword').addEventListener('mouseup', function (e) {
    e.preventDefault(); // Prévenir l'action par défaut
    document.getElementById('password').type = 'password'; // Revenir au type password
});

document.getElementById('togglePassword').addEventListener('mouseleave', function (e) {
    e.preventDefault(); // Prévenir l'action par défaut
    document.getElementById('password').type = 'password'; // Revenir au type password
});


//gerer les bouttons
const button = document.getElementById('btnchoixdecompte');
const form = document.getElementById('Choixdecompte');

button.addEventListener('click', () => {
  form.classList.remove('hidden'); 
});

const button2 = document.getElementById('btnconnexion');
const form2 = document.getElementById('Connexion');

button2.addEventListener('click', () => {
    form2.classList.remove('hidden');
});