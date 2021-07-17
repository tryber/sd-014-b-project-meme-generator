const textInput = document.getElementById('text-input');
const memeImageContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');

function getText() {
  let get = textInput.value;
  if (textInput.textContent !== null) {
    memeText.innerHTML = textInput.value;
  }
}

textInput.addEventListener('keyup', getText);