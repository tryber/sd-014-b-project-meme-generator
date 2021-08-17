const imgInsert = document.getElementById('meme-insert');
const btnMeme = document.querySelectorAll('#btn-container button');
const imgContainer = document.getElementById('img-meme-container');
const memeReady = document.querySelectorAll('#meme-container img');
const input = document.getElementById('text-input');
const meme = document.getElementById('meme-image');

function insertText() {
  const textMeme = document.querySelector('#meme-text');
  if (input.textContent !== null) {
    textMeme.innerHTML = input.value;
  }
}

input.addEventListener('input', insertText);

function renderizationMeme() {
  const inputMeme = document.getElementById('meme-insert').files[0];
  const memeReader = new FileReader();
  if (inputMeme) {
    memeReader.readAsDataURL(inputMeme);
    memeReader.onloadend = function renderization() {
      meme.src = memeReader.result;
    };
  }
}

imgInsert.addEventListener('input', renderizationMeme);

function memeFilter(event) {
  imgContainer.style.border = '';
  if (event.target.id === 'fire') {
    imgContainer.style.border = '3px dashed red';
  } else if (event.target.id === 'water') {
    imgContainer.style.border = '5px double blue';
  } else {
    imgContainer.style.border = '6px groove green';
  }
}

for (let index = 0; index < btnFilter.length; index += 1) {
  btnFilter[index].addEventListener('click', memeFilter);
}

function inputChange(event) {
  meme.src = event.target.src;
}

for (let index = 0; index < memeReader.length; index += 1) {
  memeReader[index].addEventListener('click', inputChange);
}