
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body; 

function toggleDarkMode() {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        darkModeToggle.textContent = "Dark Mode";
    } else {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "Light Mode";
    }
}

darkModeToggle.addEventListener("click", toggleDarkMode);


const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkMode.matches) {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "Light Mode";
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

setInterval(nextSlide, 3000); // Auto slide every 3 seconds

// Optionally, you can add buttons or other controls to manually navigate the slider.
// Here's an example of adding previous and next buttons:
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

if (prevButton && nextButton) {
    prevButton.addEventListener('click', previousSlide);
    nextButton.addEventListener('click', nextSlide);
}
