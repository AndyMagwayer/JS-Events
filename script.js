window.addEventListener("load", function() {
  document.getElementById("myElement").innerHTML = "Page Loaded";
});

document.getElementById("myElement").addEventListener("touchstart", function() {
  this.style.opacity = "0.5";
});
