const input = document.getElementById('text-input');
const memePlace = document.getElementById('meme-image-container');
const h2 = document.getElementById('meme-text');
const selectedImage = document.getElementById('meme-image');
const chooseImage = document.getElementById('meme-insert');


function showMemeText(){
h2.innerText = input.value;
}

input.addEventListener('keyup', showMemeText);

function insertImage(event){
   const selectedFile = event.target.files[0];
console.log(selectedFile);
   const addressFile = new FileReader();
   addressFile.onloadend = function(){
       selectedImage.setAttribute('src', addressFile.result);
   }
   addressFile.readAsDataURL(selectedFile);
  
}
    


chooseImage.addEventListener('change', insertImage);