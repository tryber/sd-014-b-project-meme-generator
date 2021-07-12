function apareceLetras(params) {
paragrafo.innerText = input.value;
}
// adicionar texto no paragrafo
const paragrafo = document.getElementById('meme-text');
const input = document.getElementById('text-input');
input.addEventListener('keyup', apareceLetras);