const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeContainer = document.getElementById('meme-image-container');
const imgContainer = document.getElementById('meme-image');
const uploadImg = document.getElementById('meme-insert');

uploadImg.addEventListener('change', () => {
  imgContainer.src = `${uploadImg.value}`;
});

const btnFire = document.getElementById('fire');
btnFire.addEventListener('click', () => {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
});

const btnWater = document.getElementById('water');
btnWater.addEventListener('click', () => {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
});

const btnEarth = document.getElementById('earth');
btnEarth.addEventListener('click', () => {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
});

inputText.addEventListener('keyup', () => {
  memeText.innerText = inputText.value;
});

const img1 = document.getElementById('meme-1');
img1.addEventListener('click', () => {
  imgContainer.src = './imgs/meme1.png';
});

const img2 = document.getElementById('meme-2');
img2.addEventListener('click', () => {
  imgContainer.src = './imgs/meme2.png';
});

const img3 = document.getElementById('meme-3');
img3.addEventListener('click', () => {
  imgContainer.src = './imgs/meme3.png';
});

const img4 = document.getElementById('meme-4');
img4.addEventListener('click', () => {
  imgContainer.src = './imgs/meme4.png';
});
