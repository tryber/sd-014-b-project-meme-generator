const input = document.getElementById('text-input');
const meme = document.getElementById('meme-image');
const imgInsert = document.getElementById('meme-insert');
const btnFilter = document.querySelectorAll('#custom-btn-container button');
const imgContainer = document.getElementById('meme-image-container');
const memeReady = document.querySelectorAll('#meme-book-container img');

// window.onload = imgContainer.style.border = '1px black solid';

function insertMemeText() {
  const text = document.querySelector('#meme-text');
  if (input.textContent !== null) {
    text.innerHTML = input.value;
  }
}

input.addEventListener('input', insertMemeText);

function renderImage() {
  const imgInput = document.getElementById('meme-insert').files[0];
  const reader = new FileReader();
  if (imgInput) {
    reader.readAsDataURL(imgInput);
    reader.onloadend = function render() {
      meme.src = reader.result;
    };
  }
}

imgInsert.addEventListener('input', renderImage);

function changeFilter(event) {
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
  btnFilter[index].addEventListener('click', changeFilter);
}

function memeChange(event) {
  meme.src = event.target.src;
}

for (let index = 0; index < memeReady.length; index += 1) {
  memeReady[index].addEventListener('click', memeChange);
}
