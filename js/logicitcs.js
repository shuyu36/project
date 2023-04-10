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

  $(".b1-slider ul").bxSlider({
    // // slideWidth: 500,
    // // minSlides: 2,
    // // maxSlides: ,
    // slideMargin: 10,
    // startSlide: 0,
  });

  $(".bx-viewport").css({ height: "auto" ,weight:"70%"});


  $(".out-pic_off").bxSlider({
    minSlides: 10,
    maxSlides: 10,
    slideWidth: "auto",
    slideMargin: 1,
    ticker: true,
    speed: 30000,
  });

  $(".bx-wrapper").css({maxWidth: "auto",margin: "60px auto","-webkit-box-shadow": "none",});
});

