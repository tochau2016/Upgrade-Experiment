// ============== SHOW MENU =============
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//  ============== MENU SHOW =============
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ============ MENU HIDDEN =============
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ============== CHANGE BACKGROUND HEADER ============
function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 100) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

// ============= TESTTIMONIAL SWIPER ==============
let testimonialSwiper = new Swiper(".testimonial-swiper", {
  spaceBetween: 30,
  loop: "true",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ========== NEW SWIPER ============
let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: "true",

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// ============ SCROLL SECTIONS ACTIVE LINK ===============
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// =========== SHOW SCROLL UP ============
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

// =========== DARK LIGHT THEME ============
const themeButton = document.getElementById("theme-button"),
  darkTheme = "dark-theme",
  iconTheme = "bx-sun";

// Kiểm tra trong local có dữ liệu hay chưa
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("select-icon");

// Kiểm tra đang tồn tại class dark hay lightm và icon
const getCurrentTheme = () => {
  document.body.classList.contains(darkTheme) ? "dark" : "light";
};
const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";
};

// Kiểm tra chủ đề người dùng chọn trước đó
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// ============== SHOW CART =============
const cart = document.getElementById("cart"),
  cartShop = document.getElementById("cart-shop"),
  cartClose = document.getElementById("cart-close");

//  ============== CART SHOW =============
if (cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add("show-cart");
    console.log("a");
  });
}

// ============ MENU HIDDEN =============
if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove("show-cart");
  });
}
