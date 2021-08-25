const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const inputImg = document.getElementById('meme-image');
const memeContainer = document.getElementById('meme-image-container')

inputText.addEventListener('keyup', () => {
  memeText.innerText = inputText.value;
});

inputImg.addEventListener('change', () => {
  const img = document.createElement('img');
  img.src = './img/20210604_110822.jpg';
  img.style.width = '400px';
  img.style.height = '400px';
  memeContainer.appendChild(img);
  console.log(inputImg.value);
});
