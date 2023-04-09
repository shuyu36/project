$(".banner2-pic img").each(function () {
  // if (window.screen.width < 428)
  // {
  let slideImgs = $(this).find(".banner2-pic img"),
    slideImgsCount = slideImgs.length,
    currentIndex = 0;
  slideImgs.eq(currentIndex).fadeIn();
  setInterval(showNextSlide, 1000);

  function showNextSlide() {
    let nextIndex = (currentIndex + 1) % slideImgsCount;
    slideImgs.eq(currentIndex).fadeOut();
    slideImgs.eq(nextIndex).fadeIn();
    currentIndex = nextIndex;
    // }
  }
});

// $(document).ready(function () {
//   $(".bxslider").bxSlider({
//     auto: true,
//     pause: 5000,
//     speed: 1000,
//   });
//   $(".bxslider").css({ maxWidth: "80vw", margin: "0 auto" });
//   // $(".bx-wrapper").css({ maxWidth: "80vw",margin:"0 auto" });
// });

$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 440,
    minSlides: 3,
    maxSlides: 3,
    slideMargin: 10
  });
  
  $(".bx-wrapper").css({maxWidth: "auto", margin: "0 auto","-webkit-box-shadow":"none"});
  $(".slide-mid").css({marginTop: "20px" ,});
  $(".bx-viewport").css({height:"auto"});
});


// .bx-wrapper{
//   -webkit-box-shadow:none;
//   box-shadow: none;
//   border:none;
//   background: none;
// }