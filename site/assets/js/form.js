const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    let isValid = true;

    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    const name = document.getElementById('name');
    if (name.value.trim().length < 3) {
        isValid = false;
        document.getElementById('name-error').textContent = 'Le nom doit contenir au moins 3 caractères.';
    }

    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Veuillez entrer une adresse email valide.';
    }

    const message = document.getElementById('message');
    if (message.value.trim().length < 10) {
        isValid = false;
        document.getElementById('message-error').textContent = 'Le message doit contenir au moins 10 caractères.';
    }

    if (!isValid) {
        event.preventDefault();
    }
});