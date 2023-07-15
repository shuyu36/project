$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 400,
    minSlides: 1,
    maxSlides:3,
    slideMargin: 30
  });
  
  $(".bx-wrapper").css({Width: "auto", margin: "0 auto","-webkit-box-shadow":"none"});

});


//利用querySelectorAll語法計算照片長度跑迴圈
window.addEventListener('DOMContentLoaded', function() {
  var imgCount = document.querySelectorAll('.banner2-pic img').length;
  var currentIndex = 0;
  document.querySelectorAll('.banner2-pic img')[currentIndex].classList.add('active');
  setInterval(function() {
    currentIndex++;
    if (currentIndex === imgCount) {
      currentIndex = 0;
    }
    var images = document.querySelectorAll('.banner2-pic img');
    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove('active');
    }
    images[currentIndex].classList.add('active');
  }, 5000);
});
