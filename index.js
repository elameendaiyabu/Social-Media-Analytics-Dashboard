const toggle = document.getElementById("toggle");

toggle.addEventListener("change", function () {
  if (this.checked) {
    console.log("checked");
    document.body.classList.add("darkMode");
  } else {
    console.log("not checked");
    document.body.classList.remove("darkMode");
  }
});
