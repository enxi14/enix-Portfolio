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

// Get the dark mode toggle button and store it in a variable
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check if dark mode preference is stored in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
}

// Toggle dark mode when the button is clicked
darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Set initial dark mode state based on user preference
if (isDarkMode) {
    enableDarkMode();

