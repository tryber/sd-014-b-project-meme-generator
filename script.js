const textInput = document.getElementById('text-input');
const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
// const textInput = document.getElementById('');

function inputMemeText () {
    const text = textInput.value;
    memeText.innerText = text;
}
textInput.addEventListener('keyup', inputMemeText);