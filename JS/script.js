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
function checkEmail(input) {
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.value.match(validRegex))
        showSuccess(input);
    else
        showError(input, `Email is not valid`)
}

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `Passwords do not match`)
    }
}

//
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less ${max} characters`);
    } else {
        showSuccess(input);
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});
