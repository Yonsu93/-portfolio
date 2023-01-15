$(function(){
    $('#fullpage').fullpage({
		//options here
        licenseKey : 'OPEN-SOURCE-GPLV3-LICENSE',
		autoScrolling:true,
		scrollHorizontally: true,
	sectionsColor: ['#fff', '#fff', '#fee130', '#fff'],  
    });
    /*메인배너*/

     var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      effect: 'fade',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }
      
    });
  
    
    
    
    
   /*사진 슬라이드중앙이미지 확대*/ 
    
    $('.center_slider').slick({
      centerMode: true,
      centerPadding: '150px',
      slidesToShow: 5,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint:1700,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 5
          }
        },
        {
          breakpoint: 0,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
        }
      ]
    });
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


