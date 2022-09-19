$(window).on("load", function () {
  jQuery(".loader").fadeOut(1000);
});

const food_swiper = new Swiper(".featured_food_slider", {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  speed: 400,
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".custom_pagination",
    // type: "bullets",
    type: "custom",
    renderCustom: function (food_swiper, current, total) {
      return ("0" + current).slice(-2) + " of " + ("0" + total).slice(-2);
    },
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});


const manas_swiper = new Swiper(".manas_slider", {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  speed: 400,
  slidesPerView: 4,
  spaceBetween: 0,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
    },
  },
});
