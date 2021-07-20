window.onload = function () {

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

  inputText.addEventListener('keyup', function () {
    memeText.innerHTML = inputText.value;
  });

  inputFile.addEventListener('change', function () {
    let img = URL.createObjectURL(this.files[0]);
    memeImg.src = img;
  });

  buttonFile.addEventListener('click', function () {
    inputFile.click();
  });

  /* Mudando a borda com os botões */

  buttonFire.addEventListener('click', function () {
    memeImgContainer.style.border = '3px dashed red';
  });

  buttonWater.addEventListener('click', function () {
    memeImgContainer.style.border = '5px double blue';
  });

  buttonEarth.addEventListener('click', function () {
    memeImgContainer.style.border = '6px groove green';
  });

  buttonsMemes[0].addEventListener('click', function () {
    memeImg.src = 'imgs/meme1.png';
  })

  buttonsMemes[1].addEventListener('click', function () {
    memeImg.src = 'imgs/meme2.png';
  })

  buttonsMemes[2].addEventListener('click', function () {
    memeImg.src = 'imgs/meme3.png';
  })

  buttonsMemes[3].addEventListener('click', function () {
    memeImg.src = 'imgs/meme4.png';
  })

  buttonDownText.addEventListener('click', function () {
    memeText.style.alignSelf = 'flex-end';
  })

  buttonUpText.addEventListener('click', function () {
    memeText.style.alignSelf = 'flex-start';
  })

}
