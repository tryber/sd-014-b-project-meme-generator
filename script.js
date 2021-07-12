function addText(event) {
    if (event.target.id === 'text-input') {
      memeText.innerHTML = event.target.value;
    } else {
      memeBottomText.innerHTML = event.target.value;
    }
  }