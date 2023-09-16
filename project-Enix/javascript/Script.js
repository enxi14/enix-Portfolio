
const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
    body.classList.toggle('dark-mode');

    const modeMessage = body.classList.contains('dark-mode') ?
        'Dark Mode'
        : "Light Mode"

    modeStatus.innerText = "Currently in " + modeMessage;
}

modeToggle.addEventListener('click', toggleMode);

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
