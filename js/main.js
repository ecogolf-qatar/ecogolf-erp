// EcoGolf ERP v1.0 - main.js
document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const logo = splash.querySelector("img");
  const login = document.getElementById("login");
  const dashboard = document.getElementById("dashboard");
  const loginBtn = document.getElementById("loginBtn");
  const sidebarLinks = document.querySelectorAll(".sidebar li");
  const mainContent = document.querySelector(".main-content");

  // Splash animation
  logo.classList.add("zoom-in");
  setTimeout(() => {
    splash.style.opacity = 0;
    setTimeout(() => {
      splash.classList.add("hidden");
      login.classList.remove("hidden");
      login.style.opacity = 1;
    }, 500);
  }, 3000);

  // Login → Dashboard
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

  // Navigation between modules
  sidebarLinks.forEach((item) => {
    item.addEventListener("click", () => {
      const page = item.getAttribute("data-page");
      if (page && mainContent) {
        fetch(`modules/${page}.html`)
          .then((res) => {
            if (!res.ok) throw new Error("Module not found");
            return res.text();
          })
          .then((html) => {
            mainContent.innerHTML = html;
          })
          .catch(() => {
            mainContent.innerHTML = `<p style="color:red;text-align:center;">⚠️ Unable to load ${page}.html</p>`;
          });
      }
    });
  });
});
