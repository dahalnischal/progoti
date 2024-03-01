// SLIDER
$(document).ready(function () {
  $(window).on("scroll", function () {
    // Header Sticky JS
    if ($(this).scrollTop() > 10) {
      $(".navbar").addClass("small");
    } else {
      $(".navbar").removeClass("small");
    }
  });
  //   BANNER SWIPER
  var swiper = new Swiper(".banner-swiper", {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
