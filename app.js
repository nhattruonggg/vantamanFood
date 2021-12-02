window.addEventListener("load", function(){
    const slider = document.querySelector('.slider');
    const sliderMain = document.querySelector('.slider-main');
    const sliderItems = document.querySelectorAll('.slider-item');
    const nextBtn =  document.querySelector('.slider-next');
    const prevBtn =  document.querySelector('.slider-prev');
    const dotsItem = document.querySelectorAll('.slider-dot-item');
    const sliderLength = sliderItems.length;
    sliderMain.style.width = `${sliderLength * sliderItemsWidth} px`
    const sliderItemsWidth = sliderItems[0].offsetWidth;
})
console.log('xin chao')