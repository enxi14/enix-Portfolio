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



document.addEventListener("DOMContentLoaded", function () {
    
});
    const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    darkModeToggle.addEventListener('change', () => {
        if (localStorage.getItem('darkMode') !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});
