window.onload = function() {

  const input = document.getElementById('text-input');
  input.addEventListener('change', insert);

  function insert() {
    const string = document.getElementById('text-input').value;
    const container = document.getElementById('meme-text');
    container.innerText = string;
  }
};
