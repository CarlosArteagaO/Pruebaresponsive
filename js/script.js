// Menú responsive
const btn_menu = document.getElementById("btn_menu");
const nav = document.getElementById("nav");
const back_menu = document.getElementById("back_menu");

btn_menu.addEventListener("click", () => {
  nav.style.right = "0px";
  back_menu.style.display = "block";
});

back_menu.addEventListener("click", () => {
  nav.style.right = "-250px";
  back_menu.style.display = "none";
});
