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

// Slide-Main
var swiper = new Swiper(".slide-main", {
  autoplay: {
    delay: 20000,
  },
  loop: true,
});
