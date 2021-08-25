const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const inputImg = document.getElementById('meme-image');
const memeContainer = document.getElementById('meme-image-container');

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

inputImg.addEventListener('change', () => {
  const img = document.createElement('img');
  img.src = './img/20210604_110822.jpg';
  img.style.width = '400px';
  img.style.height = '400px';
  memeContainer.appendChild(img);
  console.log(inputImg.value);
});
