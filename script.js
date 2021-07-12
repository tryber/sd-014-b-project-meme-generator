const textInput = document.getElementById('text-input');
const memeInput = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');
const imagensExemplo = document.getElementById('exemplos-container');

// Requisito #1
function alteraTexto() {
  memeText.innerText = textInput.value;
}
textInput.addEventListener('keyup', alteraTexto);

// Requisito #2
// Source: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
function escolherImg(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}
memeInput.addEventListener('change', escolherImg);

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

// Requisito #7
function imgSelecionada(event) {
  memeImage.src = event.target.src;
}
imagensExemplo.addEventListener('click', imgSelecionada);
