const value = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]')

decrementButton.addEventListener('click', addValues);
incrementButton.addEventListener('click', addValues);

let counterValue = 0;

function addValues(evt) {
    counterValue += Number(evt.currentTarget.textContent);
    value.textContent = counterValue;
}


