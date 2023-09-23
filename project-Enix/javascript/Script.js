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

    // Initial check when the page loads
    checkFadeSlide();

    // Check on scroll
    window.addEventListener("scroll", checkFadeSlide);
});

