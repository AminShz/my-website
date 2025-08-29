/*document.getElementById("myButton").addEventListener("click", function() {
  document.getElementById("message").textContent = "PhD (2020 - 2025) \n Masters (2018 - 2020)";
});*/
document.querySelectorAll(".toggle-btn").forEach(function(button) {
  button.addEventListener("click", function() {
    const details = this.nextElementSibling;
    if (details.style.display === "none") {
      details.style.display = "block";
      this.textContent = "Hide Details";
    } else {
      details.style.display = "none";
      this.textContent = "Latest Version";
    }
  });
});
