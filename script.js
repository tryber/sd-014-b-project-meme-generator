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
