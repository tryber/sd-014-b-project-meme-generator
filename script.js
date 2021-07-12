window.onload = function() {

  const input = document.getElementById('text-input');
  input.addEventListener('keyup', insert);

  function insert() {
    let string = document.getElementById('text-input').value;
    let container = document.getElementById('meme-text');
    container.innerText = string;
  }
}
