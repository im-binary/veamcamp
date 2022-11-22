const menuButton = document.querySelector(".nav-button_mobile");

const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("menu_open");
});
