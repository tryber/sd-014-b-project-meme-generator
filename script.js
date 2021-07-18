const takeMemeText = document.querySelector('#meme-text');
const takeTextInput = document.querySelector('#text-input');

function writeText() {
  takeMemeText.innerText = takeTextInput.value;
}

takeTextInput.addEventListener('keyup', writeText);
