const textInput = document.querySelector('#text-input'); // acessa o valor do input
const memeText = document.querySelector('#meme-text'); // acessa o container (div) onde o texto será(está) inserido
function addText() {
  memeText.innerText = textInput.value;
}
textInput.addEventListener('keyup', addText); // The keyup event is fired when a key is released.
// este evento será disparado toda vez que uma tecla for digitada no teclado escrevendo o texto e o evento ocorre dentro do valor do input