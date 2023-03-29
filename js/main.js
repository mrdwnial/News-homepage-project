const $ = document;

// change menu icon function in moblie
let menuProcess = false;
const mobileMenu = $.querySelector(".side-menu-content");
const darkenElement = $.querySelector(".screen-darken");

function changeMenuStatus(icon) {
  if (!menuProcess) {
    menuProcess = true;
    icon.classList.toggle("change");
    darkenElement.classList.remove("d-none");
    let isOpenMenu = icon.classList.contains("change");
    if (isOpenMenu) {
      mobileMenu.classList.remove("d-none");
    } else {
      setTimeout(function () {
        mobileMenu.classList.add("d-none");
        darkenElement.classList.add("d-none");
      }, 900);
    }
    setTimeout(function () {
      menuProcess = false;
    }, 900);
  }
}