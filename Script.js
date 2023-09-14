
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body; // Corrected selection to target the body element

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

// Check for user's preferred color scheme and apply dark mode if needed
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkMode.matches) {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "Light Mode";
}
