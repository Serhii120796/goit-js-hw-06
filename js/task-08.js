const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;

    if (email.value && password.value) {
        const formValues = {
            email: email.value,
            password: password.value            
        }
        console.log(formValues);
        evt.currentTarget.reset()
    } else {
        alert('Please fill in all the fields!')
    }
      
}
