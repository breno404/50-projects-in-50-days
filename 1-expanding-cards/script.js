const panels = document.querySelectorAll(".panel");

panels.forEach((p) => {
  p.addEventListener("click", () => {
    if (p.classList.contains("active")) {
      removeActiveClasses();
    } else {
      removeActiveClasses();
      p.classList.add("active");
    }
  });
});

function removeActiveClasses() {
  panels.forEach((p) => {
    p.classList.remove("active");
  });
}
