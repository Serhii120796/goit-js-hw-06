const elements = {
    text: document.querySelector('#text'),
    rangeInput: document.querySelector('#font-size-control')
}

elements.rangeInput.addEventListener('input', changeFontSize);

function changeFontSize(evt) {
    const currentRange = evt.currentTarget.value;
    elements.text.style.fontSize = `${currentRange}px`;
    }
