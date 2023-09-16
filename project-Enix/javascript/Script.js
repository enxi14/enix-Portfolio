const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
    }
});



const slider = document.querySelector('.slider');
let imageIndex = 0;
const images = document.querySelectorAll('.slider img');

function nextSlide() {
    imageIndex = (imageIndex + 1) % images.length;
    updateSlider();
}

function previousSlide() {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    updateSlider();
}

function updateSlider() {
    const translateX = -imageIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}


setInterval(nextSlide, 3000); 

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

if (prevButton && nextButton) {
    prevButton.addEventListener('click', previousSlide);
    nextButton.addEventListener('click', nextSlide);
}

const slider = document.querySelector('.slider');
let imageIndex = 0;
const images = document.querySelectorAll('.slider img');

function nextSlide() {
    imageIndex = (imageIndex + 1) % images.length;
    updateSlider();
}

function previousSlide() {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    updateSlider();
}

function updateSlider() {
    const translateX = -imageIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

setInterval(nextSlide, 3000); 


const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

if (prevButton && nextButton) {
    prevButton.addEventListener('click', previousSlide);
    nextButton.addEventListener('click', nextSlide);
}

