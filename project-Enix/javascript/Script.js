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


// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the user's preference in local storage
    const isDarkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkModeEnabled);
}

// Check if the user has a preference for dark mode from previous visits
const savedDarkMode = localStorage.getItem('dark-mode');
if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
}

// Add event listener to the toggle switch
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('change', toggleDarkMode);

