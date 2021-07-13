window.onload = function() {

  const inputText = document.getElementById('text-input');
  const inputFile = document.getElementById('meme-insert');
  const textDisplay = document.getElementById('meme-text');
  const imageDisplay = document.getElementById('meme-image');
  const buttonSend = document.getElementById('send-file');
  const fireButton = document.getElementById('fire');
  const waterButton = document.getElementById('water');
  const earthButton = document.getElementById('earth');

  function insert() {
    let string = inputText.value;
    textDisplay.innerText = string;
  }
  inputText.addEventListener('change', insert);

  function imageFile() {
    let reader = new FileReader();
    let file = inputFile.files[0];
    reader.readAsDataURL(file);
    reader.addEventListener('loadend', (load) => {
      imageDisplay.innerHTML += '<img src=' + load.target.result + ' />';
    }) 
  }
  buttonSend.addEventListener('click', imageFile);

  function beFire() {
    imageDisplay.classList.remove('earth');
    imageDisplay.classList.remove('water');
    imageDisplay.classList.add('fire');
  }
  fireButton.addEventListener('click', beFire)

  function beWater() {
    imageDisplay.classList.remove('fire');
    imageDisplay.classList.remove('earth');
    imageDisplay.classList.add('water');
  }
  waterButton.addEventListener('click', beWater)

  function beEarth() {
    imageDisplay.classList.remove('fire');
    imageDisplay.classList.remove('water');
    imageDisplay.classList.add('earth');
  }
  earthButton.addEventListener('click', beEarth)
};
