let hamb = document.querySelector(".hamb");
let menu = document.querySelector(".menu");
hamb.addEventListener("click", (showMenu) => {
  menu.classList.toggle("show");
});
menu.addEventListener("click", (e) => {
  menu.classList.remove("show");
  console.log("H");
});
