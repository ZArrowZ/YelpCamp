// remove top header
const close = document.getElementById("close");
const header = document.querySelector(".info");
const menu = document.querySelector(".menu__container");
const info = document.querySelector(".info");

close.addEventListener("click", (e) => {
  header.style.display = "none";
  menu.style.top = 0;
});

// hamburger menu
const burger = document.querySelector(".menu");
const closeMenu = document.querySelector(".close__menu");
let media = window.matchMedia("(min-width: 1180px)");
let isOpen = false;

burger.addEventListener("click", () => {
  menu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
});

// logout
const logout = document.querySelectorAll(".logout");
const loggedInside = document.querySelector(".logged__inside");
const loggedOutside = document.querySelector(".logged__outside");
const notLogged = document.querySelector(".notLogged");
const burgerLinks = document.querySelector(".burger__links");

logout.forEach((log) => {
  log.addEventListener("click", () => {
    loggedInside.style.display = "none";
    loggedOutside.style.display = "none";
    notLogged.style.display = "block";
    burgerLinks.style.display = "block";
  });
});

window.addEventListener("resize", () => {
  let width = document.body.getBoundingClientRect().width;
  if (width < 1199) {
    menu.style.display = "none";
  }
});
