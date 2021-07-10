const textInput = document.getElementById('text-input');
const memeInput = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');

function alteraTexto() {
  memeInput.innerText = textInput.value;
}
textInput.addEventListener('keyup',alteraTexto);
