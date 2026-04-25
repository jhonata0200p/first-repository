const menu = document.getElementById("contenedor-menu");
const nombre_header = document.querySelector(".nombre_header");
const nav_a = document.querySelector(".navegacion");
const claseActiva = document.querySelector(".head");

menu.addEventListener("click", () => {
  claseActiva.classList.toggle("active");
});

nav_a.addEventListener("click", () => {
  claseActiva.classList.remove("active");
});

nombre_header.addEventListener("click", () => {
  claseActiva.classList.toggle("active");
});
