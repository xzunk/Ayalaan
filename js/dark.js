// Function to toggle dark mode
function manuallyDarkModeToggle() {
  let element = document.body;
  let isDarkModeEnabled = element.classList.toggle("dark");
  localStorage.setItem("darkmode", isDarkModeEnabled.toString()); // Save to localStorage
}

// Function to set theme on page load
(function() {
  let onpageLoad = localStorage.getItem("darkmode") === "true" ? "dark" : "light"; // Use "darkmode" key
  let element = document.body;
  element.classList.add(onpageLoad);
  document.getElementById("theme").textContent = onpageLoad;
})();

// Function to toggle theme
function themeToggle() {
  let element = document.body;
  element.classList.toggle("dark");

  let isDarkModeEnabled = element.classList.contains("dark");
  localStorage.setItem("darkmode", isDarkModeEnabled.toString()); // Use "darkmode" key

  document.getElementById("theme").textContent = isDarkModeEnabled ? "dark" : "light";
}

// On page load, set the dark mode based on user preference
(function() {
  let element = document.body;

  // Detect the OS's preferred color scheme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    element.classList.add("dark");
    localStorage.setItem("darkmode", "true");
  } else {
    let darkModeLocalStorage = localStorage.getItem("darkmode") || "false"; // Default to false if not found
    element.classList.toggle("dark", darkModeLocalStorage === "true");
  }
})();
