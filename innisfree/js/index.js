$(function(){
    /*메인슬라이더*/
    $('.slide').slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true
    })
    /*전체메뉴 열기*/
    $('.btnAllMenu a').on('click',function(){           
        $('.allMenuMask').css({width:'100%',height:'100%'})
        $('.allMenu').animate({left:0})
    })
     /*전체메뉴 닫기*/
    $('.allMenuClose a').on('click',function(){           
        $('.allMenuMask').css({width:'0%',height:'0%'})
        $('.allMenu').animate({left:'-100%'})
    })
    
    /*전체메뉴안의 탭 구현*/
    $('.tab_title>ul>li').on('click',function(){
        var index=$(this).index();
        $('.tab_content').eq(index).show();
        $('.tab_content').eq(index).siblings().hide();
        $(this).siblings().removeClass('on')
        $(this).addClass('on')
        
    })
      /*depth2 아코디언 메뉴 구현*/
    $('.depth1>li').on('click',function(){
        
        
       $('.depth2').slideUp();
        $(this).siblings().find('span').removeClass('open');
        $(this).find('span').toggleClass('open');
        var a =$('.depth1 span').hasClass('open');

        if(a){
            var index=$(this).index();
            $('.depth2').eq(index).slideDown();
        }
        else {
            $('.depth2').slideUp();
        }
    })
    $('.barcord').on('click',function(){
        $('.full_barcord').show();
    })
    $('.close_btn').on('click',function(){
        $('.full_barcord').hide();
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