function checkOrientation() {
  const warning = document.getElementById("rotate-warning");
  if (window.innerHeight > window.innerWidth) {
    // Portrait
    warning.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    // Landscape
    warning.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("load", checkOrientation);