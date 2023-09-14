
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

/
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkMode.matches) {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "Light Mode";
}
