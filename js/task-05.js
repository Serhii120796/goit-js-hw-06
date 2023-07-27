const userName = document.querySelector('#name-input');
userName.addEventListener('input', logName);
const nameOutput = document.querySelector('#name-output');


function logName(evt) {
    const name = evt.currentTarget.value;
    if (name) {
        nameOutput.textContent = name;
    }
}
