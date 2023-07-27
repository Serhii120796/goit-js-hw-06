const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', validationInput);

function validationInput(evt) {
    const textInput = evt.currentTarget;
    const inputLength = textInput.value.length;
    if (inputLength === 6) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid')
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid')
    }
}

