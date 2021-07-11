let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');

function textAplly() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', textAplly);
