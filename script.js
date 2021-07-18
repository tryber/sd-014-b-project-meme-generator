const getInputText = document.querySelector('#text-input');
const getParagraphText = document.querySelector('#meme-text');

function setText() {
  getParagraphText.innerHTML = getInputText.value;
}

getInputText.addEventListener('input', setText);
