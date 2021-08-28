const memeImgContainer = document.querySelector('#meme-image-container');
const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const inputFile = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');
const buttonFile = document.querySelector('#fileSelect');
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');
const buttonsMemes = document.querySelectorAll('.box');
const buttonUpText = document.querySelector('#legUp');
const buttonDownText = document.querySelector('#legDown');

function addEventInput() {
  inputText.addEventListener('keyup', () => {
    memeText.innerHTML = inputText.value;
  });

  inputFile.addEventListener('change', () => {
    const img = URL.createObjectURL(this.files[0]);
    memeImg.src = img;
  });

  buttonFile.addEventListener('click', () => {
    inputFile.click();
  });
}

function addEventBorders() {
  buttonFire.addEventListener('click', () => {
    memeImgContainer.style.border = '3px dashed red';
  });

  buttonWater.addEventListener('click', () => {
    memeImgContainer.style.border = '5px double blue';
  });

  buttonEarth.addEventListener('click', () => {
    memeImgContainer.style.border = '6px groove green';
  });
}

function addEventMemes() {
  buttonsMemes[0].addEventListener('click', () => {
    memeImg.src = 'imgs/meme1.png';
  });

  buttonsMemes[1].addEventListener('click', () => {
    memeImg.src = 'imgs/meme2.png';
  });

  buttonsMemes[2].addEventListener('click', () => {
    memeImg.src = 'imgs/meme3.png';
  });

  buttonsMemes[3].addEventListener('click', () => {
    memeImg.src = 'imgs/meme4.png';
  });
}

function addEventTextPosition() {
  buttonDownText.addEventListener('click', () => {
    memeText.style.alignSelf = 'flex-end';
  });

  buttonUpText.addEventListener('click', () => {
    memeText.style.alignSelf = 'flex-start';
  });
}

window.onload = () => {
  addEventInput();
  addEventBorders();
  addEventMemes();
  addEventTextPosition();
};
