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





    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if dark mode is enabled or disabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    // Toggle dark mode when the switch is clicked
    darkModeToggle.addEventListener('change', () => {
        if (localStorage.getItem('darkMode') !== 'enabled') {
        enableDarkMode();
        } else {
        disableDarkMode();
        }
    });

    // Function to enable dark mode
    function enableDarkMode() {
        body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    }

    // Function to disable dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
    }
