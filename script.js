const input = document.getElementById('text-input');
const meme = document.getElementById('meme-image');
const imgInsert = document.getElementById('meme-insert');

// function createText() {
//   const textElement = document.createElement('p');
//   textElement.classList.add('meme-text');
//   textContainer.appendChild(textElement);
// }

// window.onload = createText;

function insertMemeText() {
  const text = document.querySelector('#meme-text');
  if (input.textContent !== null) {
    text.innerHTML = input.value;
  }
}

input.addEventListener('input', insertMemeText);

function renderImage() {
  const imgInput = document.getElementById('meme-insert').files[0];
  const reader = new FileReader();
  if (imgInput) {
    reader.readAsDataURL(imgInput);
  }
  reader.onloadend = function () {
    meme.src = reader.result;
  };
}

imgInsert.addEventListener('input', renderImage);
