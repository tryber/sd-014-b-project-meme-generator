const input = document.querySelector('#text-input');

input.addEventListener('keyup', () => {
  const text = input.value;
  document.querySelector('#meme-text').innerText = text;
});
