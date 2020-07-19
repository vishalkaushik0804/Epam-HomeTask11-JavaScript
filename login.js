const form = document.getElementById('register-form')
const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('submit')
const validationMessageContainer = document.getElementById('validateMessage')

//submit form
const submitForm = (event) => {
    event.preventDefault();

    validationMessageContainer.innerText = '';
    validationMessageContainer.classList.remove('invalidForm');
    validationMessageContainer.classList.remove('validForm');

    if (username.classList.contains('success') &&
        password.classList.contains('success')) {
            validationMessageContainer.innerText = 'Login Successfully';
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
    
    const usernameErrorMsg = 'Username must be at least 3 characters';
    const passwordErrorMsg = 'Password must be at least 6 characters';
    switch (event.target.id) {
        case 'username':
            if (event.target.value.length < 3 ) {
                event.target.classList.add('error');
                event.target.nextElementSibling.innerText = usernameErrorMsg;
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
        default:
            event.target.nextElementSibling.innerText = '';
    }
}
submit.addEventListener('click', submitForm);
username.addEventListener('keyup', checkInput)
password.addEventListener('keyup', checkInput)