const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (window.innerWidth >= 480) {
      // Desktop: solo un panel activo
      removeActiveClasses();
      panel.classList.add("active");
    } else {
      // Móvil: toggle activo/inactivo
      if (panel.classList.contains("active")) {
        panel.classList.remove("active");
      } else {
        removeActiveClasses();
        panel.classList.add("active");
      }
    }
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
