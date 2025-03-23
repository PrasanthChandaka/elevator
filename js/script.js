// swiper slide carousel

var swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// video playback

const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("play", function () {
    videos.forEach((v) => {
      if (v !== video) {
        v.pause();
      }
    });
  });
});

// nav toggle functionality

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const mobileNav = document.getElementById("mobile-nav");
  const closeBtn = document.getElementById("close-btn");
  const menuItems = document.querySelectorAll(".mobile-menu li a");
  const body = document.body;

  function openMenu() {
    mobileNav.classList.add("open");
    body.classList.add("no-scroll");
  }

  function closeMenu() {
    mobileNav.classList.remove("open");
    body.classList.remove("no-scroll");
  }

  hamburgerMenu.addEventListener("click", openMenu);

  closeBtn.addEventListener("click", closeMenu);

  menuItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
});

// aos animation

AOS.init({
  duration: 1000,
  offset: 100,
});
