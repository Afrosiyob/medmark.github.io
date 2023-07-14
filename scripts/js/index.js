$(document).ready(function () {
  let vid = document.getElementById("myVideo");
  vid.autoplay = true;
  vid.load();

  new Swiper(".swiper__partner", {
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper__button__next__custom__news",
      prevEl: ".swiper__button__prev__custom__news",
    },
    loop: true,
    spaceBetween: 32,
    // Responsive breakpoints
    breakpoints: {
      260: {
        slidesPerView: 1,
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  const scrollPosition = $(window).scrollTop();

  $(window).scroll(function () {
    const scrollPosition = $(this).scrollTop();

    if (scrollPosition > 149) {
      $("#mainNavbar").css({
        position: "fixed",
      });
    } else {
      $("#mainNavbar").css({
        position: "relative",
      });
    }
  });

  if (scrollPosition > 149) {
    $("#mainNavbar").css({
      position: "fixed",
    });
  } else {
    $("#mainNavbar").css({
      position: "relative",
    });
  }

  $("#menuBarsOpen").click(function (e) {
    $("#sidebar").css({
      right: "0",
    });
  });

  $("#menuBarsClose").click(function (e) {
    $("#sidebar").css({
      right: "-300px",
    });
  });

  const subMenu = $(".menu__sidebar__menu__item");

  $(".menu__sidebar__menu__item").click(function (e) {
    $(this).next(".menu__sidebar__menu__li__sub__ul").slideToggle();
    subMenu.not(this).next(".menu__sidebar__menu__li__sub__ul").slideUp();
  });
});
