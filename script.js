document.getElementById("myElement").addEventListener("mouseover", function() {
    this.style.color = "blue";
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      document.getElementById("myInput").style.border = "2px solid green";
    }
  });

  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("myForm").elements["name"].value;
    if (name === "") {
      document.getElementById("myForm").style.border = "2px solid red";
    }
  });
  