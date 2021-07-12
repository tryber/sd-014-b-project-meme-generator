let input = document.getElementById('text-input');
let textWrite = document.getElementById('meme-text');


/* Requisito #1 */
input.addEventListener('keyup', () => { 
    if (input.value !== '') {
        let texto = input.value
        textWrite.innerText = texto
    }
})


/* Requisito #2 */
