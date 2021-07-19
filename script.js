const textInput = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');
textInput.addEventListener('keyup', () => { textMeme.innerText = textInput.value; });

const imageMeme = document.getElementById('meme-image');
const imgInput = document.getElementById('meme-insert');
const memes = document.querySelectorAll('.memes');

// Referência: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
imgInput.onchange = evt => {
  const [file] = imgInput.files;
  if (file) {
    imageMeme.src = URL.createObjectURL(file);
  }
};

// Requisito 6
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');

const imageContainer = document.getElementById('meme-image-container');

btnFire.addEventListener('click', () => { imageContainer.style.border = '3px dashed red'; });
btnWater.addEventListener('click', () => { imageContainer.style.border = '5px double blue'; });
btnEarth.addEventListener('click', () => { imageContainer.style.border = '6px groove green'; });

// Requisito 7
for (let i = 0; i < memes.length; i += 1) {
  memes[i].addEventListener('click', (event) => {
    imageMeme.src = event.target.src;
  });
}
