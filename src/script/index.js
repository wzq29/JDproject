//  定位选项卡
 fn1();
 function fn1(){
    var point = document.querySelector("#point");
    var area = document.querySelector("#area");
    var f2 = document.querySelector("#f2");
    var f3 = document.querySelector("#f3");
    var f4 = document.querySelector("#f4");
    var f5 = document.querySelector("#f5");
    // var list = document.querySelectorAll("li.list");
    point.addEventListener("mouseenter",show);
    area.addEventListener("mouseleave",hidden);
    // list.addEventListener("mouseover",sty);
    // list.addEventListener("mouseout",def);


function show(){
    area.style.display = "block";
    area.style.backgroundColor = "#fff"
    f1.style.borderTop = "none";
    point.style.border = "solid 1px #ddd";
    point.style.borderBottom = "none";
    point.style.backgroundColor = "#fff";
    f2.style.borderTop = "solid 1px #ddd";
    f3.style.borderTop = "solid 1px #ddd";
    f4.style.borderTop = "solid 1px #ddd";
    f5.style.borderTop = "solid 1px #ddd";
}
function hidden(){
    area.style.display = "none";
    point.style.border = "none";
    point.style.backgroundColor = "#E3E4E5";
    f2.style.borderTop = "none";
    f3.style.borderTop = "none";
    f4.style.borderTop = "none";
    f5.style.borderTop = "none";
}

}
    

// banner轮播图
//左侧
    var mySwiper = new Swiper ('.swiper1', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 2500,//2.5秒切换一次
          },
        // 分页器
        pagination: {
            el: '.swiper-pagination',
         
          clickable :true,
        },
        // 前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
      for(i=0;i<mySwiper.pagination.bullets.length;i++){
        mySwiper.pagination.bullets[i].onmouseover=function(){
          this.click();
        };
    }
//右侧
    var mySwiper = new Swiper ('.swiper2',{
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 5000,//5秒切换一次
          },
        // 前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
      for(i=0;i<mySwiper.pagination.bullets.length;i++){
        mySwiper.pagination.bullets[i].onmouseover=function(){
          this.click();
        };
    }

