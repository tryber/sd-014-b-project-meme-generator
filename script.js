const textInput = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');
textInput.addEventListener('keyup', () => { textMeme.innerText = textInput.value; });

const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');

const imageContainer = document.getElementById('meme-image-container');

btnFire.addEventListener('click', () => { imageContainer.style.border = '3px dashed red'; });
btnWater.addEventListener('click', () => { imageContainer.style.border = '5px double blue'; });
btnEarth.addEventListener('click', () => { imageContainer.style.border = '6px groove green'; });

const imageMeme = document.getElementById('meme-image');
const imgInput = document.getElementById('meme-insert');
const memes = document.querySelectorAll('.memes');

if (imgInput.value) {
  imageMeme.src = imgInput.value;
}

for (let i = 0; i < memes.length; i += 1) {
  memes[i].addEventListener('click', (event) => {
    imageMeme.src = event.target.src;
  });
}

imgInput.onchange = evt => {
  const [file] = imgInput.files;
  if (file) {
    imageMeme.src = URL.createObjectURL(file);
  }
};
