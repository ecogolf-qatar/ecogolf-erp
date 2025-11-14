document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const login = document.getElementById("login");
  const dashboard = document.getElementById("dashboard");
  const loginBtn = document.getElementById("loginBtn");

  // Splash auto-transition after 3 seconds
  setTimeout(() => {
    splash.classList.add("hidden");
    login.classList.remove("hidden");
  }, 3000);

  // Simulated login
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      login.classList.add("hidden");
      dashboard.classList.remove("hidden");
    });
  }

  // Sidebar navigation (for demo only)
  document.querySelectorAll(".sidebar li").forEach(item => {
    item.addEventListener("click", () => {
      alert(`You clicked: ${item.textContent.trim()}`);
    });
  });
});
