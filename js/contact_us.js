document.addEventListener('DOMContentLoaded', function() {
  var mapList = document.querySelectorAll('.map-content li');
  var mapImg = document.querySelector('.world_map img');

  for (let i = 0; i < mapList.length; i++) {
    mapList[i].addEventListener('click', function() {
      var className = this.className;
      mapImg.src = 'img/world_map'+i+'.jpg';
      
          // // 添加 active 类
          // for (let j = 0; j < mapList.length; j++) {
          //   mapList[j].classList.remove('.map-content li:hover');
          // }
          // this.classList.add('active');
      

    });
  }
});
