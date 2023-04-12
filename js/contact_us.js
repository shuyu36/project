document.addEventListener("DOMContentLoaded", function () {
  var mapList = document.querySelectorAll(".map-content li");
  var mapImg = document.querySelector(".world_map img");
  var phoneList = document.querySelectorAll(".company-phone ul");

  for (let i = 0; i < mapList.length; i++) {
    mapList[i].addEventListener("click", function () {
      // 切換地圖圖片
      mapImg.src = "img/world_map" + i + ".jpg";

      // 設定國家的背景色
      for (let j = 0; j < mapList.length; j++) {
        if (j === i) {
          mapList[j].style.backgroundColor = "#3864ff";
          mapList[j].style.color = "#ffffff";
        } else {
          mapList[j].style.backgroundColor = "";
          mapList[j].style.color = "";
        }
      }

      // 設定電話區塊的樣式
      var mapPhone = document.querySelector(".company-phone" + i);
      console.log(mapPhone);
      for (let j = 0; j < mapList.length; j++) {
        var phone = document.querySelector(".company-phone" + j);
        if (j === i) {
          phone.style.backgroundColor = "#3864ff";
          phone.style.color = "#ffffff";
        } else {
          phone.style.backgroundColor = "";
          phone.style.color = "";
        }
      }
    });
  }

  //按下面電話時也可以切換
  for (let i = 0; i < phoneList.length; i++) {
    phoneList[i].addEventListener("click", function () {
      // 切換地圖圖片
      mapImg.src = "img/world_map" + i + ".jpg";

      // 設定點擊電話的背景色
      for (let j = 0; j < phoneList.length; j++) {
        if (j === i) {
          phoneList[j].style.backgroundColor = "#3864ff";
          phoneList[j].style.color = "#ffffff";
        } else {
          phoneList[j].style.backgroundColor = "";
          phoneList[j].style.color = "";
        }
      }

      // 設定國家樣式
      for (let j = 0; j < mapList.length; j++) {
        var map = mapList[j];
        if (j === i) {
          map.style.backgroundColor = "#3864ff";
          map.style.color = "#ffffff";
        } else {
          map.style.backgroundColor = "";
          map.style.color = "";
        }
      }
    });
  }
});

