const menu = document.getElementById("contenedor-menu");
const claseActiva = document.querySelector(".head");

menu.addEventListener("click", () => {
  claseActiva.classList.toggle("active");
});
