const textInput = document.querySelector('#text-input');
const insertMeme = document.querySelector('#meme-insert');
const memeContainer = document.getElementById('meme-image-container');
const memeImg = document.getElementById('meme-image');
const memeTxt = document.getElementById('meme-text');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const btnInsertTxt = document.getElementById('button-insert');

function verifyTextMeme() {
  const inputValue = textInput.value;
  if (inputValue === '') {
    alert('Seu meme precisa ter um texto!');
  }
  
}

function addMemeText() {
  const inputValue = textInput.value;
  verifyTextMeme();
  if (memeTxt.innerText === '') {
    memeTxt.innerText = inputValue;
    textInput.value = '';
  } else {
    memeTxt.innerText = '';
    memeTxt.innerText = inputValue;
  }
}


btnInsertTxt.addEventListener('click', addMemeText);

function captureImg() {
  const cptrImg = insertMeme.files;
  // memeImg.
}

function fireBorder() {

}

function fwaterBorder() {

}

function earthBorder() {

}

btnFire.addEventListener('click', fireBorder);
