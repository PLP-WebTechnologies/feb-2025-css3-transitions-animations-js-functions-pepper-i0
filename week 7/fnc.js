const themeSelect = document.getElementById("themeSelect");
const saveBtn = document.getElementById("saveBtn");
const animatedImg = document.getElementById("animatedImg");
const greeting = document.getElementById("greeting");

// Apply saved theme from localStorage
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
    themeSelect.value = savedTheme;
    greeting.textContent = `Hello Pepper! (${savedTheme} mode)`;
  }
};

// Save theme preference to localStorage
saveBtn.addEventListener("click", () => {
  const selectedTheme = themeSelect.value;
  document.body.className = selectedTheme;
  localStorage.setItem("theme", selectedTheme);
  greeting.textContent = `Preference saved! (${selectedTheme} mode)`;

  // Trigger image animation
  animatedImg.classList.remove("bounce");
  void animatedImg.offsetWidth; // Restart animation
  animatedImg.classList.add("bounce");
});
