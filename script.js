// texto input para texto meme
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function textAplly() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', textAplly);

// funções para aplicação de bordas
const container = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

function redBorder() {
  container.style.border = 'dashed red 3px';
}

function blueBorder() {
  container.style.border = 'double blue 5px';
}
function greenBorder() {
  container.style.border = 'groove green 6px';
}

fireButton.addEventListener('click', redBorder);
waterButton.addEventListener('click', blueBorder);
earthButton.addEventListener('click', greenBorder);

// função para a aplicação do meme pré fabricado
function preLoaded(event) {
  const memePronto = event.target.getAttribute('src');
  document.querySelector('#meme-image').setAttribute('src', memePronto);
}
const divPrePronto = document.querySelector('#sectionDosMemes');
divPrePronto.addEventListener('click', preLoaded);

// função para mostar a foto no meme
// api FileReader permite ler arquivos, conhecimento adquirido em: https://www.youtube.com/watch?v=a-OHDPt-DPA e https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader

const campoUpLoadDaImagem = document.querySelector('#meme-insert');

function leitorDeImagem(event) {
  const imagemUpada = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(imagemUpada);
  reader.onloadend = () => {
    document.querySelector('#meme-image').setAttribute('src', reader.result);
  };
}

campoUpLoadDaImagem.addEventListener('change', leitorDeImagem);
