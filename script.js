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
// Requisito 4 
// feito no CSS
// Requisito 5
// limite do input no index
// Requisito 6
const memeContainer = document.querySelector('#meme-image-container'); // acessa e amarzena a div onde está contido o meme

const buttonFire = document.querySelector('#fire'); // acessa e armazena o valor do botão criado no index
function addColorFire() {
  memeContainer.style.border = '3px dashed red';
}
buttonFire.addEventListener('click', addColorFire);


const buttonWater = document.querySelector('#water'); // acessa e armazena o valor do botão criado no index
function addColorWater() {
  memeContainer.style.border = '5px double blue';
}
buttonWater.addEventListener('click', addColorWater); // adiciona o evento de click no button e a função a ser realizada ao clicar

const buttonEarth = document.querySelector('#earth');
function addColorEarth() {
  memeContainer.style.border = '6px groove green';
}
  buttonEarth.addEventListener('click', addColorEarth); // adiciona o evento de click no button e a função a ser realizada ao clicar

// Requisito 7
const memesBase = document.querySelectorAll('.meme-base'); // seleciona todos os elementos da classe meme-base

function insertBaseMeme() {
  const inputImage = document.querySelector('#meme-image'); // aqui seleciona e amarzena a image que é inserida na div do meme (meme-section)
  for (const meme of memesBase) {// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects
    meme.addEventListener('click', inputBaseMeme); // On each iteration a value of a different property is assigned to variable
    function inputBaseMeme() { // o evento de click será em cada imagem de base
      inputImage.src = meme.src; // traz de volta o valor de input da imagem do início e adiciona a fonte dela para a imagem base clicada
    } // o loop do for of interage
  }
}
insertBaseMeme();
