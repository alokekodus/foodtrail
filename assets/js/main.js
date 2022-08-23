$(window).on("load", function () {
  jQuery(".loader").fadeOut(1000);
});

const swiper = new Swiper(".swiper", {
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
    renderCustom: function (swiper, current, total) {
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
