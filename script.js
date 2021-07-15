const input = document.getElementById('text-input');
const memeContainer = document.querySelector('#meme-image-container');

function createText() {
  const textElement = document.createElement('p');
  textElement.classList.add('meme-text');
  memeContainer.appendChild(textElement);
}

window.onload = createText;

function insertMemeText() {
  const text = document.querySelector('#meme-image-container p');
  if (input.textContent !== null) {
    text.innerHTML = input.value;
  }
}

input.addEventListener('input', insertMemeText);
