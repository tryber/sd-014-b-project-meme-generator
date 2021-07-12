let input = document.getElementById('text-input');
let textWrite = document.getElementById('meme-text');
let image = document.getElementById('meme-insert');
let imageInput = document.getElementById('meme-image');
let botaoEnviar = document.getElementById('atualiza-imagem')


/* Requisito #1 */
input.addEventListener('keyup', () => { 
    if (input.value !== '') {
        let texto = input.value
        textWrite.innerText = texto
    }
})


/* Requisito #2 */
image.addEventListener('change', recebeImagem);
function recebeImagem () {
    let leitorDaImagem = new FileReader()
    let imagemRecebida = image.files[0]
    leitorDaImagem.readAsDataURL(imagemRecebida);
        leitorDaImagem.addEventListener('loadend', (load) => {
            imageInput.src = load.target.result
        })
        
}
