const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeContainer = document.querySelector('#meme-image-container');
const fireBtn = document.querySelector('#fire');
const waterBtn = document.querySelector('#water');
const earthBtn = document.querySelector('#earth');
const memesProntos = document.querySelectorAll('.meme-pronto');
const mainImg = document.querySelector('#meme-image');
const memeInsert = document.querySelector('#meme-insert');

if (memeInsert.value) {
  mainImg.src = memeInsert.value;
}

inputText.addEventListener('keyup', () => {
  memeText.innerText = inputText.value;
});

fireBtn.style.backgroundColor = 'red';
fireBtn.addEventListener('click', () => {
  memeContainer.style.border = '3px dashed red';
});

waterBtn.style.backgroundColor = 'blue';
waterBtn.addEventListener('click', () => {
  memeContainer.style.border = '5px double blue';
});

earthBtn.style.backgroundColor = 'green';
earthBtn.addEventListener('click', () => {
  memeContainer.style.border = '6px groove green';
});

for (let index = 0; index < memesProntos.length; index += 1) {
  memesProntos[index].addEventListener('click', (event) => {
    mainImg.src = event.target.src;
  });
}