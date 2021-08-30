const textInput = document.getElementById('text-input');
const memeImageContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const allMemes = document.querySelectorAll('.all-memes');

function getText() {
  const get = textInput.value;
  if (textInput.textContent !== null) {
    memeText.innerHTML = get;
  }
}

// Fonte keyup: https://www.w3schools.com/jsref/event_onkeyup.asp
textInput.addEventListener('keyup', getText);

// Fonte this function: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
function getImage(event) {
  const takeImage = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    memeImage.src = reader.result;
  };
  reader.readAsDataURL(takeImage);
}
memeInsert.addEventListener('change', getImage);

function borderFire() {
  const getBorderFire = window.getComputedStyle(fire).getPropertyValue('border');
  memeImageContainer.style.border = getBorderFire;
}

fire.addEventListener('click', borderFire);

function borderWater() {
  const getBorderWater = window.getComputedStyle(water).getPropertyValue('border');
  memeImageContainer.style.border = getBorderWater;
}

water.addEventListener('click', borderWater);

function borderEarth() {
  const getBorderEarth = window.getComputedStyle(earth).getPropertyValue('border');
  memeImageContainer.style.border = getBorderEarth;
}

earth.addEventListener('click', borderEarth);

for (let index = 0; index < allMemes.length; index += 1) {
  allMemes[index].addEventListener('click', (event) => {
    memeImage.src = event.target.src;
  });
}
