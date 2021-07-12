const inputText = document.getElementById('text-input');
const inputFontSize = document.getElementById('font-size');

// Dentro do elemento de container, você deve criar um outro elemento para mostrar o texto digitado.
// https://www.w3schools.com/jsref/event_oninput.asp
// Referencia usada para entender a funcao input.

inputText.addEventListener('input', () => {
  const inputTextValue = inputText.value;
  const textImage = document.getElementById('meme-text');

  textImage.innerText = inputTextValue;
});

inputFontSize.addEventListener('click', () => {
  const inputFontSizeValue = parseInt(inputFontSize.value, 10);
  const textImage = document.getElementById('meme-text');
  textImage.style.fontSize = `${inputFontSizeValue}px`;
});
