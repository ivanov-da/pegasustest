const toggle = document.querySelector(".header__toggle");
const menuElements = document.querySelectorAll(".header__menu-item");

/* Toggle mobile menu */
function toggleMenu() {
  for (elem of menuElements) {
    if (elem.classList.contains("header__menu-item_active")) {
      elem.classList.remove("header__menu-item_active");

      // adds the menu (hamburger) icon
      toggle.querySelector(".header__burger").innerHTML = "dehaze";
    } else {
      elem.classList.add("header__menu-item_active");

      // adds the close (x) icon
      toggle.querySelector(".header__burger").innerHTML = "clear";
    }
  }

}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);