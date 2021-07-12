
const input = document.querySelector('.input-text'); // seleciona o local de append child
const inputText = document.createElement('input');
inputText.type = 'text';
inputText.id = 'text-input';
inputText.placeholder = '  Adicione aqui seu texto';
input.appendChild(inputText);

const textArea = document.querySelector('#meme-text');
const inputValue = inputText.value;
textArea.innerHTML = inputValue;
textArea.appendChild(inputValue)