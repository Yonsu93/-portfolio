$(function(){
 var mySwiper1 = new Swiper ('.banner .swiper-container ',{
    autoplay: {
    delay: 5000,
    },
    effect: 'fade',
     speed: 2000,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        
  })
  var mySwiper2 = new Swiper ('.sobo_info .swiper-container',{
    autoplay: {
    delay: 6000,
    },
    effect: 'fade',
    speed: 2000,
    loop: true,
     pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },
  })
   var mySwiper3 = new Swiper ('.store .swiper-container',{
    autoplay: {
    delay: 6000,
    },
    speed: 2000,
    effect: 'fade',
    loop: true,
     pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
  })


    //쿠키생성
    $('#pop_chk').on('click',function(){
        $.cookie('yonsu_pop', '1115', { expires: 1, path: '/' });
    })
    //pop닫기
    $('.closebtn').on('click',function(){
        $('#popwin').fadeOut();
    })
        
    //쿠키가 존재하는지검사
    if($.cookie('yonsu_pop')=='1115'){
        $('#popwin').hide();
    }

})