// $(".banner2-pic img").each(function () {
//   // if (window.screen.width < 428)
//   // {
//   let slideImgs = $(this).find(".banner2-pic img"),
//     slideImgsCount = slideImgs.length,
//     currentIndex = 0;
//   slideImgs.eq(currentIndex).fadeIn();
//   setInterval(showNextSlide, 1000);

//   function showNextSlide() {
//     let nextIndex = (currentIndex + 1) % slideImgsCount;
//     slideImgs.eq(currentIndex).fadeOut();
//     slideImgs.eq(nextIndex).fadeIn();
//     currentIndex = nextIndex;
//     // }
//   }
// });

$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 400,
    minSlides: 1,
    maxSlides:3,
    slideMargin: 30
  });
  
  $(".bx-wrapper").css({Width: "auto", margin: "0 auto","-webkit-box-shadow":"none"});

});