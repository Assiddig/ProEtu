document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    var email = document.getElementById('emails');
    var password = document.getElementById('passwords');
    var errorMsg = document.getElementById('error-msg');

    // Exemple de validation simple
    if (email.value === '' || password.value === '') {
        email.classList.add('invalid');
        password.classList.add('invalid');
        errorMsg.style.display = 'block';
    } else {
        email.classList.remove('invalid');
        password.classList.remove('invalid');
        errorMsg.style.display = 'none';
        // Ici, vous pouvez ajouter la logique pour vérifier les identifiants de l'utilisateur
    }
});
