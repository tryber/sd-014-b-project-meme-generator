const input = document.getElementById('text-input');
const memePlace = document.getElementById('meme-image-container');
const h2 = document.getElementById('meme-text');
const selectedImage = document.getElementById('meme-image');
const chooseImage = document.getElementById('meme-insert');
const preMemes = document.querySelector('#imgs').children;
const btn = document.querySelectorAll("button");

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


function changeBorderContainer(event){
    if(event.target.id === 'fire'){
        memePlace.style.border = '3px dashed red';
    }else if(event.target.id === 'water'){
        memePlace.style.border = '5px double blue';
    }else if(event.target.id === 'earth'){
        memePlace.style.border = '6px groove green';
    }
}

function addEventOnButtons(){
    for(let key of btn){
        key.addEventListener('click', changeBorderContainer);
    }

}
addEventOnButtons();


function changeMemeWithPreMemes(event){
    selectedImage.src = event.target.src;
}

function addEventInMemes(){
    for(let key of preMemes){
        key.addEventListener('click', changeMemeWithPreMemes);

    }

}

addEventInMemes();

