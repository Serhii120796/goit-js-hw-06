function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  inputNumber: document.querySelector('[type="number"]'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
};

elements.createButton.addEventListener('click', () => {
  createBoxes(elements.inputNumber.value);
});
elements.destroyButton.addEventListener('click', () => {
  elements.divBoxes.innerHTML = '';
});

function createBoxes(amount) {
  const marcup = [];
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    marcup.push(`<div style="width: ${boxSize}px; 
    height: ${boxSize}px; background-color: ${getRandomHexColor()};">
    </div>`);
    boxSize += 10;
  }
  elements.divBoxes.innerHTML = marcup.join('');
}
