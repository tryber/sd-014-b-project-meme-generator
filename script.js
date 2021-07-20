window.onload = function () {

  let inputText = document.querySelector('#text-input');
  let memeText = document.querySelector('#meme-text');
  let inputFile = document.querySelector('#meme-insert');
  let memeImg = document.querySelector('#meme-image');
  let buttonFile = document.querySelector('#fileSelect');

  inputText.addEventListener('keyup', function () {
    memeText.innerHTML = inputText.value;
  });

  inputFile.addEventListener('change', function () {
    let img = URL.createObjectURL(this.files[0]);
    document.querySelector('#no-image').style.display = 'none';
    memeImg.style.backgroundImage = 'url(' + img +')';
  });

  buttonFile.addEventListener('click', function () {
    inputFile.click();
  })

}
