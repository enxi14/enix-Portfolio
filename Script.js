// Get the dark mode toggle button, the <body> element, and the #page-content element
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.getElementById("body");
const pageContent = document.getElementById("page-content");

// Function to toggle between light and dark mode
function toggleDarkMode() {
    if (body.classList.contains("dark-mode")) {
        // If currently in dark mode, switch to light mode
        body.classList.remove("dark-mode");
        pageContent.classList.remove("dark-mode");
        darkModeToggle.textContent = "Dark Mode";
    } else {
        // If currently in light mode, switch to dark mode
        body.classList.add("dark-mode");
        pageContent.classList.add("dark-mode");
        darkModeToggle.textContent = "Light Mode";
    }
}

// Event listener for the dark mode toggle button
darkModeToggle.addEventListener("click", toggleDarkMode);

// Initialize dark mode based on user preference
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkMode.matches) {
    body.classList.add("dark-mode");
    pageContent.classList.add("dark-mode");
    darkModeToggle.textContent = "Light Mode";
}
