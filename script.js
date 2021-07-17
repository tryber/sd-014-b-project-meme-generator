const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text')
const memeContainer = document.querySelector('#meme-image-container');
const fireBtn = document.querySelector('#fire');
const waterBtn = document.querySelector('#water');
const earthBtn = document.querySelector('#earth');

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