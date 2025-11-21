function ButtonSwitchDark() {
  document.getElementById("dark").style.display = "none";
  document.getElementById("light").style.display = "block";
  document.body.classList.add("dark-mode");

  localStorage.setItem("theme", "dark");
}

function ButtonSwitchLight() {
  document.getElementById("light").style.display = "none";
  document.getElementById("dark").style.display = "block";
  document.body.classList.remove("dark-mode");

  localStorage.setItem("theme", "light");
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    ButtonSwitchDark();
  } else {
    ButtonSwitchLight();
  }
});
