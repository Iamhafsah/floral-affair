const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const track = document.querySelector('.track');
let carouselWidth = document.querySelector('.carousel-container').offsetWidth;
let index = 0;

next.addEventListener('click', ()=>{
    index ++;
    prev.classList.add('prev-show');
    track.style.transform = `translateX(-${index * carouselWidth}px)`;
    if(track.offsetWidth - (index * carouselWidth) < carouselWidth){
        next.classList.add('next-hide');
    }
})
prev.addEventListener('click', ()=>{
    index --;
    next.classList.remove('next-hide');
    if(index == 0){
        prev.classList.remove('prev-show')
    }
    track.style.transform = `translateX(-${index * carouselWidth}px)`;
    // track.style.transform = `translateX(-${0}px)`;
})
window.add('resize',()=>{
    carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})


