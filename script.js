const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');


function text() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', text);

const imgInput = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');

function image(imagem) {
  const arquivo = imagem.target.files.item(0);
  const endereco = new FileReader();
  endereco.onloadend = function() {
    memeImage.setAttribute('src', endereco.result);
  };
  endereco.readAsDataURL(arquivo);
}

imgInput.addEventListener("change", image);
