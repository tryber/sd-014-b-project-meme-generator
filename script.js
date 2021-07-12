const textInput = document.getElementById('text-input');
const memeImage = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');

function text() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', text);
