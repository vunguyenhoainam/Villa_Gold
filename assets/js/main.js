$(document).ready(function () {
  // Handle Popup
  $(".header-bottom-menu").animate({
    opacity: 0,
    marginLeft: -999,
  });

  // Show-popup
  $(".menu-mobile").click(function (e) {
    e.preventDefault();
    $(".header-bottom-menu").animate({
      opacity: 1,
      marginLeft: 0,
    });
    $(".effect-page").addClass("effect-page-appear");
  });

  // Hidden-popup
  $(".effect-page").click(function (e) {
    e.preventDefault();
    $(".header-bottom-menu").animate({
      opacity: 0,
      marginLeft: -999,
    });
    $(".effect-page").removeClass("effect-page-appear");
  });
});

// Handle-Header
document.onscroll = () => {
  var location = window.scrollY;
  if (location > 50) {
    document.querySelector(".header").classList.add("fixed-nav");
  } else {
    document.querySelector(".header").classList.remove("fixed-nav");
  }
};

// Handle-Slide-Main
new Swiper(".slide-main", {
  autoplay: {
    delay: 20000,
  },
  loop: true,
});

// Handle-Customer
new Swiper(".customer-feedback", {
  slidesPerView: 1,
  spaceBetween: 40,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  navigation: {
    nextEl: ".btn-right",
    prevEl: ".btn-left",
  },
});

// Handle-Policy
new Swiper(".policy", {
  slidesPerView: 2,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  breakpoints: {
    575: {
      slidesPerView: 4,
      loop: false,
    },
  },
});

// Handle-List-Video
var swiper = new Swiper(".list-video", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".video-large", {
  spaceBetween: 20,
  thumbs: {
    swiper: swiper,
  },
});

// Back-top
$(".backtop").click(function (e) {
  e.preventDefault();
  $("html").animate({ scrollTop: 0 }, 1200);
});
