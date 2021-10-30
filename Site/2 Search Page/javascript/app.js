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

// search bar
// get search input
const search = document.getElementById("filter");

search.addEventListener("keyup", (e) => {
  // get the value from user
  const value = e.target.value.toLowerCase();

  // get ul
  const ul = document.querySelector("ul");
  // get li
  const listItems = ul.querySelectorAll("li.camp");

  // loop for each li
  for (listItem of listItems) {
    // get our camp names
    const h3 = listItem.querySelectorAll("h3")[0];

    // if my camp name matched with user input
    if (h3.innerHTML.toLowerCase().indexOf(value) > -1) {
      listItem.style.display = "";
    } else {
      listItem.style.display = "none";
    }
  }
});
