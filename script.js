const inputText = document.getElementById('text-input');
const textContainer = document.getElementById('meme-text');

inputText.addEventListener('keyup', () => {
  textContainer.innerText = inputText.value;
});
