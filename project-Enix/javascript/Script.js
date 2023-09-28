document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade");
    const slideElements = document.querySelectorAll(".slide");

    function checkFadeSlide() {
        fadeElements.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.style.opacity = 1;
            }
        });

        slideElements.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.style.transform = "translateY(0)";
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

checkFadeSlide();

    
    window.addEventListener("scroll", checkFadeSlide);
});

const modeToggle = document.getElementById('mode-toggle');




// Get the sun and moon icons
const sunIcon = document.querySelector('.fa-sun');
const moonIcon = document.querySelector('.fa-moon');

// Toggle dark/light mode when the checkbox is clicked
darkModeToggle.addEventListener('change', () => {
    if (body.classList.contains('dark-mode')) {
        // If dark mode is currently enabled, switch to light mode
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    } else {
        // If light mode is currently enabled, switch to dark mode
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    }
});
