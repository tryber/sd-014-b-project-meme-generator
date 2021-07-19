const textInput = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');
textInput.addEventListener('keyup', () => { textMeme.innerText = textInput.value; });
