const inputText = document.getElementById('text-input'); // <input> containing text
const memeText = document.getElementById('meme-text'); // <div> that should get text

function memefy(evento) {
  memeText.textContent = evento.target.value;
}

inputText.addEventListener('keyup', memefy);

const imgContainer = document.querySelector('#meme-image');
const inputImg = document.querySelector('#meme-insert');

function imgLoader(image) {
  const loaded = image.target.files[0];
  const reader = new FileReader();
  reader.onloadend = function() {
    imgContainer.setAttribute('src', reader.result);
  }; // não sei porque mas só funcionou colocando essa nested anonima
  reader.readAsDataURL(loaded);
}

function loadTrigger() {
  inputImg.addEventListener('change', imgLoader);
}

document.addEventListener('DOMContentLoaded', loadTrigger);

// Pela documentação não rolou:
// link = https://developer.mozilla.org/es/docs/Web/API/FileReader/readAsDataURL
/* function preview() {
  const imgContainer = document.querySelector('#meme-image-container');
  const file = document.querySelector('#input-img').files[0];
  const reader = new FileReader();

  reader.onloadend = function() {
    imgContainer.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    imgContainer.src = '';
  }
}

inputImg.addEventListener('loadend', preview); */
