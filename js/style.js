/*nav*/

$(function () {
  if (window.screen.width < 500) {
    //一開始讓選單縮上去
    $("nav ul").slideUp();
    // 典籍後顯示
    $(".burGar_btn").click(function () {
      $("nav ul").slideToggle();
    });
  }
});