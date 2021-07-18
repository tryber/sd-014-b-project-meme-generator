const textValue = document.querySelector('#text-input');
const h1Text = document.querySelector('#meme-text');
const btnText = document.querySelector('#btn-text');
const btnReset = document.querySelector('#btn-reset');
const inputImg= document.querySelector('#meme-insert');
const imagem = document.getElementById('meme-image');

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
  file.onloadend = function(){
    imagem.setAttribute('src', file.result);
  }
  file.readAsDataURL(fileReader);
}



inputImg.addEventListener('change', image);
btnText.addEventListener('click', inputText);
btnReset.addEventListener('click', resetText);