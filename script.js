const input = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

function linkMemeText() {
    memeText.innerHTML = input.value;
}

input.addEventListener('keyup', linkMemeText);
