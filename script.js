const textInput = document.getElementById('text-input');
// const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');
const enviar = document.getElementById('enviar');

function inputMemeText() {
  const text = textInput.value;
  memeText.innerText = text;
}
textInput.addEventListener('keyup', inputMemeText);

// https://codepen.io/vanessametonini/pen/zLmzNY
const leitorDeArquivos = new FileReader();
function inputImageInsert() {
  const src = memeInsert.files[0];
  leitorDeArquivos.readAsDataURL(src);
  // console.log(leitorDeArquivos, 'leitorDeArquivos.readAsDataURL(src)');
  leitorDeArquivos.addEventListener('loadend', (load) => {
    // console.log(load.target);
    memeImage.src = load.target.result;
  });
}
enviar.addEventListener('click', inputImageInsert);
memeInsert.addEventListener('change', inputImageInsert);
