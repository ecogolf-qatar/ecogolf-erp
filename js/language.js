document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("langToggle");
  const savedLang = localStorage.getItem("lang") || "en";

  // Apply saved language
  if (savedLang === "ar") {
    document.body.setAttribute("dir", "rtl");
    langToggle.textContent = "EN";
  }

  langToggle.addEventListener("click", () => {
    const isArabic = document.body.getAttribute("dir") === "rtl";
    if (isArabic) {
      document.body.removeAttribute("dir");
      langToggle.textContent = "AR";
      localStorage.setItem("lang", "en");
    } else {
      document.body.setAttribute("dir", "rtl");
      langToggle.textContent = "EN";
      localStorage.setItem("lang", "ar");
    }
  });
});
