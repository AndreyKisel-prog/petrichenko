let sliderItems = document.querySelectorAll('.slider-item');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let dotsWrap = document.querySelector('.slider-dots');
let dots = document.querySelectorAll('.dot');
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {

    if (n > sliderItems.length) {
        slideIndex = n = 1;
    } else if (n < 1) {
        slideIndex = n = sliderItems.length;
    }

    sliderItems.forEach((item) => {
        (item == sliderItems[n - 1]) ?
            item.style.display = 'block'
            : item.style.display = 'none';
    });
    dots.forEach((item) => {
        (dots[n - 1] == item) ?
            item.classList.add('dot-active')
            : item.classList.remove('dot-active');
    });
}

next.addEventListener('click', () => {
    showSlides(++slideIndex);
})

prev.addEventListener('click', () => {
     showSlides(--slideIndex);
})

dotsWrap.addEventListener('click', (event) => {
    for (let i = 0; i < dots.length; i++) {
        if (dots[i] == event.target) {
            showSlides(i + 1);
        }
    }
})

setInterval( () => {showSlides(++slideIndex)} , 5000 ); 


