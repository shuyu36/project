$(document).ready(function () {
  $(".slider1").bxSlider({
    slideWidth: 400,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 30,
  });

  $(".bx-wrapper").css({
    maxWidth: "auto",
    margin: "120px auto",
    "-webkit-box-shadow": "none",
  });

  //logo 輪播

  $(".out-pic_off").bxSlider({
    minSlides: 10,
    maxSlides: 10,
    slideWidth: "auto",
    slideMargin: 1,
    ticker: true,
    speed: 30000,
  });

  $(".bx-wrapper").css({
    maxWidth: "auto",
    margin: "60px auto",
    "-webkit-box-shadow": "none",
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // $(".owl-carousel .owl-item img").css({
  //   width: "55%",
  //   height:"auto"
  // });
});

$(document).ready(function() {
  if ($(window).width() >= 1000) {
    $(".owl-carousel .owl-item img").css({
      width: "55%",
    });
  }
});
