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
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".visible-menu").addClass("small");
    } else {
      $(".visible-menu").removeClass("small");
    }
  });
  // HAMBURGER
  $(".menuindividual").click(function () {
    $(".menucontents").removeClass("active");
  });
  $(".ham-icon").click(function () {
    $(".menucontents").toggleClass("active");
  });
  $(".cross-icon").click(function () {
    $(".menucontents").toggleClass("active");
  });

  // ACCORDION
  var $titleTab = $(".click-div");
  $(".acc-wrap:first-child")
    .find(".click-div")
    .addClass("active")
    .next()
    .stop()
    .slideDown(300);
  $(".acc-wrap:first-child").find(".inner_content").find("p").addClass("show");
  $titleTab.on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next().stop().slideUp(500);
      $(this).next().find("p").removeClass("show");
    } else {
      $(this).addClass("active");
      $(this).next().stop().slideDown(500);
      $(this).parent().siblings().children(".click-div").removeClass("active");
      $(this).parent().siblings().children(".inner_content").slideUp(500);
      $(this)
        .parent()
        .siblings()
        .children(".inner_content")
        .find("p")
        .removeClass("show");
      $(this).next().find("p").addClass("show");
    }
  });
  $description = $(".description");

  $(".enabled").hover(
    function () {
      // Fetching the data-name attribute. For SVG elements, use .attr() instead of .data()
      var dataName = $(this).attr("data-name");

      // Adding the active class to the description and setting its content
      $description.addClass("active").html(dataName);
    },
    function () {
      // Removing the active class from the description when not hovering
      $description.removeClass("active");
    }
  );

  $(document).on("mousemove", function (e) {
    // Adjust the tooltip's position to follow the mouse cursor
    $description.css({
      left: e.pageX,
      top: e.pageY, // Adjust this value as needed to position the tooltip
    });
  });
  $("#country_selector").countrySelect({
    // defaultCountry: "jp",
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    // responsiveDropdown: true,
    preferredCountries: ["ca", "gb", "us"],
  });
  $("#country_selector1").countrySelect({
    // defaultCountry: "jp",
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    // responsiveDropdown: true,
    preferredCountries: ["ca", "gb", "us"],
  });
});

// POPUP-VIDEO START

$(document).ready(function () {
  $(".popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
});
// POPUP-VIDEO END
document.addEventListener("DOMContentLoaded", function () {
  var text = "PROGOTI EXCHANGE";
  var index = 0;
  var loadingText = document.getElementById("loadingText");

  function typeWriter() {
    if (index < text.length) {
      loadingText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 150); // Adjust typing speed
    } else {
      // After typing effect is complete
      setTimeout(function () {
        // Hide the loader
        document.getElementById("loader").style.display = "none";
        // Show the site content
        document.getElementById("siteContent").style.display = "block";
        // Re-initialize AOS to ensure it works with newly visible elements
        AOS.init();
      }, 500); // Adjust this delay as needed to match with your site's UX
    }
  }

  typeWriter();
});

// ACCORDIAN section
var btns = document.querySelectorAll(".menuaccordians");
// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");
  // the acc-content
  var content = this.nextElementSibling;
  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}
// event
btns.forEach((el) => el.addEventListener("click", accordion));

// PARTNERS

var swiper = new Swiper(".moneySwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  // margin:20,
  loop: true,
  speed: 4000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    860: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1110: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
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
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// TESTIMONIAL
var swiper = new Swiper(".tesSwiper", {
  slidesPerView: 2,
  spaceBetween: 60,
  // margin:20,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    // when window width is >= 640px
    860: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    1010: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
  },
});
// Blog
var swiper = new Swiper(".blogSwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  // margin:20,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    // when window width is >= 640px
    860: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1010: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
// Blog
var swiper = new Swiper(".mapSwiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  // margin:20,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    860: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1010: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
// PARTNERS

var swiper = new Swiper(".partnersSwiper", {
  slidesPerView: 4,
  spaceBetween: 60,
  // margin:20,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    860: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1110: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
