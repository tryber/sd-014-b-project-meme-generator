const textInput = document.getElementById('text-input');
const memeInput = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');

// Requisito #1
function alteraTexto() {
  memeInput.innerText = textInput.value;
}
textInput.addEventListener('keyup', alteraTexto);

// Requisito #6
function butFire() {
  container.style.border = 'dashed 3px red';
}
buttonFire.addEventListener('click', butFire);

function butWater() {
  container.style.border = 'double 5px blue';
}
buttonWater.addEventListener('click', butWater);

function butEarth() {
  container.style.border = 'groove 6px green';
}
buttonEarth.addEventListener('click', butEarth);
