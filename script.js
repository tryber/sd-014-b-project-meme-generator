// const secaoPrincipal = document.querySelector('#meme-image-container');
//  Armazena a seção principal em uma constante.
const textInput = document.querySelector('#text-input');
//  Armazena o input de texto em uma constante.
const memeText = document.querySelector('#meme-text');
//  Armazena o elemento <p> em uma variável.
// const memeInsert = document.querySelector('#meme-insert');
// const memeImage = document.querySelector('#meme-image');

//  Requisito 1 -
textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});

//  Requisito 2 -

// Código do Wellington Fonseca para eu entender depois + referência que ele usou https://www.youtube.com/watch?v=Py-VzBUQwBE&ab_channel=TIsofia
//function insertImage(event){
// const selectedFile = event.target.files[0];
// console.log(selectedFile);
// const addressFile = new FileReader();
// addressFile.onloadend = function(){
// selectedImage.setAttribute('src', addressFile.result);
// }
// addressFile.readAsDataURL(selectedFile);
// } 