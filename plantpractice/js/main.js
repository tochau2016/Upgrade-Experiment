/** @format */

// ================ SHOW MENU ==================
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//   ============ MENU SHOW ===========
// Kiểm tra biến có tồn tại không
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ============== MENU HIDDEN ============
// Kiểm tra biến có tồn tại không
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ============= REMOVE MENU MOBILE ================
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // Khi click vào mỗi nav__link, xóa class show-menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ============ CHANGE BACKGROUND HEADER ==============
function scrollHeader() {
  const header = document.getElementById("header");
  // Khi scroll hơn 100 đơn vị chiều CacheStorage, thêm class scroll-header vào header tag
  if (this.scrollY >= 100) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
