const input = document.getElementById('text-input');
const memePlace = document.getElementById('meme-image-container');
const h2 = document.getElementById('meme-text');

function showMemeText(){
h2.innerText = input.value;
}

input.addEventListener('keyup', showMemeText);