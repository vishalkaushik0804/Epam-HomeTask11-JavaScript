const form = document.getElementById('register-form')
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submit = document.getElementById('submit')
const validationMessageContainer = document.getElementById('validateMessage')

//submit form
const submitForm = (event) => {
    event.preventDefault();

    validationMessageContainer.innerText = '';
    validationMessageContainer.classList.remove('invalidForm');
    validationMessageContainer.classList.remove('validForm');

    if (username.classList.contains('success') &&
        email.classList.contains('success') &&
        password.classList.contains('success') &&
        confirmPassword.classList.contains('success')) {
            validationMessageContainer.innerText = 'Sign Up Successfully';
            validationMessageContainer.classList.add('validForm');
    } else {
        validationMessageContainer.innerText = 'Please fill out all fields.';
        validationMessageContainer.classList.add('invalidForm');
    }
}

const handleSuccess = (target) => {
    target.classList.remove('error');
    target.classList.add('success');
    target.nextElementSibling.innerText = '';
}

const checkInput = (event) => {
    event.target.classList.remove('error');
    event.target.classList.remove('success');        
    
    const usernameErrorMsg = 'UserName must be at least 3 characters';
    const emailErrorMsg = 'Please enter a valid email';
    const passwordErrorMsg = 'Password must be at least 6 characters';
    const confirmPasswordErrorMsg = 'Passwords do not match';
    switch (event.target.id) {
        case 'username':
            if (event.target.value.length < 3 ) {
                event.target.classList.add('error');
                event.target.nextElementSibling.innerText = usernameErrorMsg;
            } else {
                handleSuccess(event.target)
            }
            break;
        case 'email':
            if (!(/^[^@]+@[^@]{2,}\.[^@]{2,4}$/.test(event.target.value))) {
                event.target.classList.add('error');
                event.target.nextElementSibling.innerText = emailErrorMsg;
            } else {
                handleSuccess(event.target)
            }
            break;
        case 'password':
            if (event.target.value.length < 6 ) {
                event.target.classList.add('error');
                event.target.nextElementSibling.innerText = passwordErrorMsg;
            } else {
                handleSuccess(event.target)
            }
            break;
        case 'confirmPassword':
            if (event.target.value !== document.getElementById('password').value ) {
                event.target.classList.add('error');
                event.target.nextElementSibling.innerText = confirmPasswordErrorMsg;
            } else {
                handleSuccess(event.target)
            }
            break;
        default:
            event.target.nextElementSibling.innerText = '';
    }
}
submit.addEventListener('click', submitForm);
username.addEventListener('keyup', checkInput)
email.addEventListener('keyup', checkInput)
password.addEventListener('keyup', checkInput)
confirmPassword.addEventListener('keyup', checkInput)
