$(function(){
    $('.main').on('mouseenter',function(){
        var _window=$(window).width();
        if(_window<=480){
            return;
        }
        $('.sub').stop().slideDown();    
        $('.gnb_bg').stop().slideDown();    
    })
    $('.main').on('mouseleave',function(){
        var _window=$(window).width();
        if(_window<=480){
            return;
        }
        $('.sub').stop().slideUp();    
        $('.gnb_bg').stop().slideUp();    
    })
   
    


    /*카테고리에서 메뉴선택시*/
     $('#menu li a').on('click',function(e){
         e.preventDefault()
        var list_name=$(this).attr('data-name');
        window.location.href='menu.html?'+list_name;
        $('.menu_box[data-type='+list_name+']').show();
         var menu_index = $('#menu li a').index(this); 
         menu_index++
        $('.menu_gnb li').siblings().removeClass('menu_on'); 
        $('.menu_gnb li:eq('+menu_index+')').addClass('menu_on');

    })
    
    /*모바일 메뉴 아코디언*/
   $('.main').on('click',function(){
       var _window=$(window).width();
    if(_window>=480){
        return;//pc화면에서 480해상도 이상에서  함수종료
    }
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    $(this).children('.sub').slideToggle();
    $(this).siblings().children('.sub').slideUp();
      $('.main a').on('click',function(e){
           e.preventDefault();
        })
       
   })
    
   
    
      /*메뉴 on & off*/
	$('.menu_btn').on('click', function(e){
        var _window=$(window).width();
        if(_window>=480){
            return
        }
		e.preventDefault();
		$(this).toggleClass('active');
        $('.gnb_wrap_bg').toggleClass('on');
        
        var state=$('gnb_wrap_bg').hasClass('on');
        if(state){
          
        }else{
          $('.sub').hide();
          $('.main').removeClass('on');
        }
    })
    
 
  
})