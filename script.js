// getting elements from html
let menuIcon = document.getElementById("menu-icon");
let navBar = document.getElementById("navbar-mobile");
let closeIcon = document.getElementById("close-icon");
// listening to events/event listeners

menuIcon.addEventListener("click", OpenMenu);
closeIcon.addEventListener("click", closeMenu);

function OpenMenu() {
  //   console.log("Menu is clicked");
  navBar.classList.add("active");
}

function closeMenu() {
  navBar.classList.remove("active");
}

let name = "Ebrima";
