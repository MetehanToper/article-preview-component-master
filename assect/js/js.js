const shareİcon = document.querySelector(".share-icon");
const shareHidden = document.querySelector(".share-hidden");
const container = document.querySelector(`.container`);


shareİcon.addEventListener(`click`, function(){
  shareHidden.classList.remove(`hidden`);
})

shareHidden.addEventListener(`click`, function(){
    shareHidden.classList.add(`hidden`);
})

document.addEventListener(`keydown`, function(e){
    if (e.key ===`Escape` && !shareHidden.classList.contains(`hidden`)){
        shareHidden.classList.add(`hidden`);
    }
})