let inputText = document.querySelector('#text-input');
let memeText = document.querySelector('#meme-text')

inputText.addEventListener('keyup', () => {
  memeText.innerText = inputText.value;
});