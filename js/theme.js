// theme.js - Shared Theme Logic

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme") || "dark";

    // Set initial theme
    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
        if (themeToggle) themeToggle.textContent = "☀️";
    } else {
        document.body.classList.remove("light-mode");
        if (themeToggle) themeToggle.textContent = "🌙";
    }

    // Toggle theme on click
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            const isLight = document.body.classList.contains("light-mode");

            themeToggle.textContent = isLight ? "☀️" : "🌙";
            localStorage.setItem("theme", isLight ? "light" : "dark");
        });
    }
});
