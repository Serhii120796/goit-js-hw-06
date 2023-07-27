function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
    changeButton: document.querySelector('.change-color'),
    currentColor: document.querySelector('.color')
}

elements.changeButton.addEventListener('click', onClick);

function onClick() {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  elements.currentColor.textContent = `${getRandomHexColor()}`
}


