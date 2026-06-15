// Manual dark-mode toggle. Site defaults to light; choice is remembered per browser.
(function () {
  // Apply saved theme as early as possible to reduce flash.
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }

  function applyButtonLabel(btn) {
    var isDark = document.documentElement.classList.contains("dark");
    btn.textContent = isDark ? "☀ Light" : "🌙 Dark";
    btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector("nav");
    if (!nav) return;

    var btn = document.createElement("button");
    btn.className = "theme-toggle";
    btn.type = "button";
    applyButtonLabel(btn);

    btn.addEventListener("click", function () {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
      applyButtonLabel(btn);
    });

    nav.appendChild(btn);
  });
})();