const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// input error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check email
function isValidEmail(email) {
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.match(validRegex))
        return true;
    else
        return false;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }
    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }
    if (password2.value === '') {
        showError(password2, 'Password confirmation is required');
    } else {
        showSuccess(password2);
    }
});
