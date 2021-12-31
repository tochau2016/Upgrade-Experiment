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
  console.log(this);
}
window.addEventListener("scroll", scrollHeader);

// ============ QUESTIONS ACCORDION ============
const accordionItems = document.querySelectorAll(".question__item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".questions__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

function toggleItem(item) {
  const accordionContent = item.querySelector(".questions__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
}

// ============== SCROLL SECTIONS ACTIVE LINK ===============
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

// ============ SHOW SCROLL UP ==============
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // Khi scroll hon 200 don vi chieu cao, them class show-scroll
  if (this.scrollY >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

// ========== DARK LIGHT THEME ===========
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Trước khi chọn chủ đề (nếu người dùng đã chọn)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("select-icon");

// Ta có được giao diện hiện tại do giao diện đang xác thực lớp dark-thêm
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// Ta kiểm tra nếu trước đó người dùng đã chọn chủ đề
if (selectedTheme) {
  // Nếu kiểm tra hoàn tất, xem xét vấn đề để biết rõ đã bật hay tắt darkmode
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Bật/Tắt theme với giao diện
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Lưu theme và icon hiện tại mà người dùng chọn
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// =========== SCROLL REVEAL ANIMATION ===========
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.home__data`);
sr.reveal(`.home__img`, { delay: 500 });
sr.reveal(`.home__social`, { delay: 600 });
sr.reveal(`.about__img, .contact__box`, { origin: "left" });
sr.reveal(`.about__data, .contact__form`, { origin: "right" });
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`, {
  interval: "100",
});
