const hamMenu = document.querySelector(".hamburger");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

offScreenMenu.addEventListener("click", () => {
  hamMenu.classList.remove("active");

  offScreenMenu.classList.remove("active");
});
