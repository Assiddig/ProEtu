function receiveCode() {
    // Valider l'email et simuler l'envoi du code
    var email = document.getElementById('email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Veuillez entrer une adresse mail valide.', 'emailError');
    } else {
        // Simuler la vérification de l'existence du compte et l'envoi du code
        document.getElementById('verificationCode').disabled = false;
        document.getElementById('submitCode').disabled = false;
    }
}

function submitCode() {
    // Simuler la vérification du code
    // Si le code est correct, débloquer les champs pour le nouveau mot de passe
    document.getElementById('newPassword').disabled = false;
    document.getElementById('confirmPassword').disabled = false;
    document.getElementById('validate').disabled = false;
    // Afficher un message si le code est incorrect
}

document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    if (!email) {
        // Afficher un message d'erreur si le champ email est vide
        showError('Veuillez renseigner votre adresse mail.', 'emailError');
    } else {
        // Continuez avec la soumission du formulaire ou la logique de réinitialisation du mot de passe
    }
    // Implémenter la logique de validation et de réinitialisation du mot de passe ici
    // Vérifier que les mots de passe correspondent et respectent les critères
    // Afficher le message de succès si tout est valide
});

function showError(message, elementId) {
    const errorDiv = document.getElementById(elementId);
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000); // Fait disparaître le message après 5 secondes
}
