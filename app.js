
// 
let filterBtns = document.querySelectorAll('.filter-btn');
let filterCards = document.querySelectorAll('.filter-cards .card');

filterBtns.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        filterBtns.forEach((btn)=>{
            btn.classList.remove('active')
        })
        filterBtns[i].classList.add('active')
        let dataSet = btn.getAttribute('data-set');
        showCategory(dataSet)
    })
})
function showCategory(dataSet){
    filterCards.forEach((card)=>{
        card.classList.add('all')
        if(card.classList.contains(dataSet)){
            card.classList.remove('hide')
            card.classList.add('show')
        }else{
            card.classList.add('hide')
            card.classList.remove('show')
        }
    })
}
filterCards.forEach((card)=>{
    card.addEventListener('click',(e)=>{
        showImage(e.target.parentElement)
    })
})

let prevImageSection = document.querySelector(".preview-image");
let previewImage = document.querySelector(".preview-image img");
let previewTimes = document.querySelector(".preview-image i");
previewTimes.addEventListener('click',()=>{
    prevImageSection.classList.remove('active')
})
function showImage(card){
    let img = card.querySelector('img').src
    prevImageSection.classList.add('active')
    previewImage.src = img
}