const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const container = document.querySelector('#meme-image-container');

function text() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', text);

const imgInput = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');

function image(imagem) {
  const arquivo = imagem.target.files.item(0);
  const endereco = new FileReader();
  endereco.onloadend = function() {
    memeImage.setAttribute('src', endereco.result);
  };
  endereco.readAsDataURL(arquivo);
}

imgInput.addEventListener("change", image);


function borda1() {
  container.style.border = 'dashed red 3px';
}

const buton1 = document.querySelector('#fire');
buton1.addEventListener('click', borda1);

function borda2() {
  container.style.border = 'double blue 5px';
}

const buton2 = document.querySelector('#water');
buton2.addEventListener('click', borda2);

function borda3() {
  container.style.border = 'groove green 6px';
}

const buton3 = document.querySelector('#earth');
buton3.addEventListener('click', borda3);
