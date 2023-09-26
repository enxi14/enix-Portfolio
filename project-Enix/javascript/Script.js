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




  // Function to set dark mode
    function setDarkMode(isDarkMode) {
    const body = document.body;
    if (isDarkMode) {
        body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    } else {
        body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    }
}

    // Function to toggle dark mode
    function toggleDarkMode() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    setDarkMode(darkModeToggle.checked);
}

    // Check local storage for user preference
    const isDarkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.checked = isDarkModeEnabled;
    setDarkMode(isDarkModeEnabled);

    // Add event listener for the dark mode toggle
    darkModeToggle.addEventListener("change", toggleDarkMode);

