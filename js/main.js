// ============================
// EcoGolf ERP v1.0 - main.js
// ============================

// Wait for everything to load first
document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const login = document.getElementById("login");
  const dashboard = document.getElementById("dashboard");
  const loginBtn = document.getElementById("loginBtn");

  // Splash screen - show for 3 seconds then go to login
  setTimeout(() => {
    splash.classList.add("fade-out");
    setTimeout(() => {
      splash.classList.add("hidden");
      login.classList.remove("hidden");
      login.classList.add("fade-in");
    }, 500);
  }, 3000);

  // Login button click -> show dashboard
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      login.classList.add("fade-out");
      setTimeout(() => {
        login.classList.add("hidden");
        dashboard.classList.remove("hidden");
        dashboard.classList.add("fade-in");
      }, 500);
    });
  }
});
