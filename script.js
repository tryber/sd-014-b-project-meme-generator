// Requisito 1
const textInput = document.querySelector('#text-input'); // acessa o valor do input
const memeText = document.querySelector('#meme-text'); // acessa o container (div) onde o texto será(está) inserido
function addText() {
  memeText.innerText = textInput.value; // associa valor do texto a ser exibido com a entrada
}
textInput.addEventListener('keyup', addText); // The keyup event is fired when a key is released.
// este evento será disparado toda vez que uma tecla for digitada no teclado escrevendo o texto e o evento ocorre dentro do valor do input

// Requisito 2 referencia: https://github.com/tryber/sd-012-project-meme-generator/blob/patrick-dack-meme-generator-project/script.js
const fileToLoad = document.querySelector('#meme-insert'); // acessa o input file
function loadFile(event) {
  const image = document.querySelector('#meme-image'); // acessa onde está localizada a tag img no html (no documento)
  image.src = URL.createObjectURL(event.target.files[0]); // The URL.createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter
} // acessa uma imagem por vez nesse evento, acessa o primeiro arquivo
fileToLoad.addEventListener('change', loadFile);
// essa função criará uma image cuja a fonte será a partir do load da pessoa. O 'createObject' cria uma string para servir de source baseado no arquivo de entrada
// The change event is fired for <input>, <select>, and <textarea> elements when an alteration to the element's value is committed by the user
// ou seja, quando há alguma alteração na file(input) o evento é disparado e troca a fonte da imagem

// Requisito 3
// feito no CSS