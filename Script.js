
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.getElementById("body");
const pageContent = document.getElementById("page-content");


    if (body.classList.contains("dark-mode")) {
        
        body.classList.remove("dark-mode");
        pageContent.classList.remove("dark-mode");
        darkModeToggle.textContent = "Dark Mode";
    } else {
        
        body.classList.add("dark-mode");
        pageContent.classList.add("dark-mode");
        darkModeToggle.textContent = "Light Mode";
    }



darkModeToggle.addEventListener("click", toggleDarkMode);


const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkMode.matches) {
    body.classList.add("dark-mode");
    pageContent.classList.add("dark-mode");
    darkModeToggle.textContent = "Light Mode";
}
