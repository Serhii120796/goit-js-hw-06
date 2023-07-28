const userName = document.querySelector('#name-input');
userName.addEventListener('input', logName);
const nameOutput = document.querySelector('#name-output');

const initialText = nameOutput.textContent;

function logName(evt) {
    const name = evt.currentTarget.value;
       
    nameOutput.textContent = name ? name : initialText;
}
