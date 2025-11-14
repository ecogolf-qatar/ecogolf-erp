// EcoGolf ERP v1.0 - main.js
document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const logo = splash.querySelector("img");
  const login = document.getElementById("login");
  const dashboard = document.getElementById("dashboard");
  const loginBtn = document.getElementById("loginBtn");

  // Animate logo zoom-in
  logo.classList.add("zoom-in");

  // Splash transition after 3 seconds
  setTimeout(() => {
    splash.style.opacity = 0;
    setTimeout(() => {
      splash.classList.add("hidden");
      login.classList.remove("hidden");
      login.style.opacity = 1;
    }, 500);
  }, 3000);

  // Login button → Dashboard
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      login.style.opacity = 0;
      setTimeout(() => {
        login.classList.add("hidden");
        dashboard.classList.remove("hidden");
        dashboard.style.opacity = 1;
      }, 500);
    });
  }
});
