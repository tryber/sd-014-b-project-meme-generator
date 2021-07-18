const textValue = document.querySelector('#text-input');
const h1Text = document.querySelector('#meme-text');
const btnText = document.querySelector('#btn-text');
const btnReset = document.querySelector('#btn-reset');
const inputImg = document.querySelector('#meme-insert');
const imagem = document.getElementById('meme-image');
const memeBoard = document.querySelector('#meme-image-container');
const btnFire= document.getElementById('fire');
const btnWater= document.getElementById('water');
const btnEarth= document.getElementById('earth');

function inputText() {
  let input = textValue.value;
  h1Text.innerText = input;
}
function resetText() {
  h1Text.innerText = '';
}

function image(event) {
  const fileReader = event.target.files[0];
  const file = new FileReader();
  file.onloadend = function () {
    imagem.setAttribute('src', file.result);
  };
  file.readAsDataURL(fileReader);
}

inputImg.addEventListener('change', image);
btnText.addEventListener('click', inputText);
btnReset.addEventListener('click', resetText);
btnFire.addEventListener('click', function(){
  memeBoard.style.border ='3px dashed red';
})
btnWater.addEventListener('click', function(){
  memeBoard.style.border ='5px double blue';
})
btnEarth.addEventListener('click', function(){
  memeBoard.style.border ='6px groove green'
})

