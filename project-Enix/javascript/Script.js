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
const modeIcon = document.getElementById('modeIcon');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        modeIcon.classList.add('fa-moon'); // If you're using Font Awesome, add moon icon class
        modeIcon.classList.remove('fa-sun'); // Remove sun icon class
    } else {
        body.classList.remove('dark-mode');
        modeIcon.classList.add('fa-sun'); // Add sun icon class
        modeIcon.classList.remove('fa-moon'); // Remove moon icon class
    }
});

// Initialize mode based on user's preference (you can use local storage for this)
if (localStorage.getItem('darkMode') === 'enabled') {
    darkModeToggle.checked = true;
    body.classList.add('dark-mode');
    modeIcon.classList.add('fa-moon'); // If you're using Font Awesome, add moon icon class
    modeIcon.classList.remove('fa-sun'); // Remove sun icon class
} else {
    body.classList.remove('dark-mode');
    modeIcon.classList.add('fa-sun'); // Add sun icon class
    modeIcon.classList.remove('fa-moon'); // Remove moon icon class
}

// Save user's preference in local storage
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
