// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
}

// Toggle dark mode when the button is clicked
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Check initial dark mode state based on user preference
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
    enableDarkMode();
}
