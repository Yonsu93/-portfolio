$(function(){
    /*클릭시 바뀌는이벤트*/
    $('li.menu_box').on('click',function(e){
        e.preventDefault();
         $('li.menu_box').removeClass('on');
        $(this).addClass('on');
        var index = $('li.menu_box').index(this);
        $('.info_box').removeClass('on');
        $('.info_box').eq(index).addClass('on');
    });
    /*사이즈바뀔때 변하는 이벤트*/
    $(window).on('resize load',function (){
        var _window = $(window).width();
         var a=window.location.href;
        var b=a.split('?')
        console.log(b);
        $('.menu_box').hide();
        $('.menu_box[data-type='+b[1]+']').show();
        $('.menu_gnb li').siblings().removeClass('menu_on'); 
        $('.menu_gnb li a[data-name='+b[1]+']').parent().addClass('menu_on');
    
        /*디저트부분 서브타이틀 show&hide*/
            if($('#all').hasClass('menu_on')){
            $('.sub_title').show();
            $('.menu_box').show();
            var sub_title=$('#all a').attr('data-subtitle');
            $('.sub-title').text(sub_title);
        }else if($('#dessert').hasClass('menu_on')){
            $('.sub_title').hide(); 
            $('.dessert_sub').show();
            var sub_title=$('#dessert a').attr('data-subtitle');
            $('.sub-title').text(sub_title);
        }else if($('#drink').hasClass('menu_on')){
        /*드링크부분 서브타이틀 show&hide*/
             $('.sub_title').hide(); 
            $('.drink_sub').show();
            var sub_title=$('#drink a').attr('data-subtitle');
            $('.sub-title').text(sub_title);
        }else if($('#gift').hasClass('menu_on')){
        /*선물포장부분 서브타이틀 show&hide*/
            $('.sub_title').hide(); 
            $('.gift_sub').show();
             var sub_title=$('#gift a').attr('data-subtitle');
            $('.sub-title').text(sub_title);
        }
        
        /*사이즈변할떄*/
        if(_window>768){
                
                var index = $('li.menu_box.on').index('li.menu_box');
                $('.menu_bg_img').css({
                        "background-image": "url(img/menu/bg_img"+index+".png)" 
                    });
                $('li.menu_box').on('click',function(){
                    var index = $('li.menu_box').index(this);
                    $('.menu_bg_img').css({
                        "background-image": "url(img/menu/bg_img"+index+".png)" 
                    });
                });

            }else if(_window>=480){
                var index = $('li.menu_box.on').index('li.menu_box');
                $('.menu_bg_img').css({
                        "background-image": "url(img/menu/bg_tablet_img"+index+".png)" 
                    });
                 $('li.menu_box').on('click',function(){
                    var index = $('li.menu_box').index(this);
                    $('.menu_bg_img').css({
                        "background-image": "url(img/menu/bg_tablet_img"+index+".png)" 
                     });
                 });            
            }else{
                var index = $('li.menu_box.on').index('li.menu_box');
                $('.menu_bg_img').css({
                        "background-image": "url(img/menu/bg_phone_img"+index+".png)"
                    });
                $('li.menu_box').on('click',function(){
                    var index = $('li.menu_box').index(this);
                    $('.menu_bg_img').css({
                        "background-image": "url(img/menu/bg_phone_img"+index+".png)" 
                     });
                 });
                }
    });
        /*카테고리선택시 이벤트*/
     $('.menu_gnb li a').on('click',function(e){
         e.preventDefault()
        var list_name=$(this).attr('data-name');
        $('.menu_box').hide();
        $('.menu_box[data-type='+list_name+']').show();
        $(this).parent().addClass('menu_on');
        $(this).parent().siblings().removeClass('menu_on');
        var sub_title=$(this).attr('data-subtitle');
        $('.sub-title').text(sub_title);
         /*디저트부분 서브타이틀 show&hide*/
            if($('#all').hasClass('menu_on')){
            $('.sub_title').show();
            $('.menu_box').show();
            var sub_title=$('#all a').attr('data-subtitle');
            $('.sub-title').text(sub_title);
        }else if($('#dessert').hasClass('menu_on')){
            $('.sub_title').hide(); 
            $('.dessert_sub').show();
            var sub_title=$('#dessert a').attr('data-subtitle');
            $('.sub-title').text(sub_title);
        }else if($('#drink').hasClass('menu_on')){
        /*드링크부분 서브타이틀 show&hide*/
             $('.sub_title').hide(); 
            $('.drink_sub').show();
            var sub_title=$('#drink a').attr('data-subtitle');
            $('.sub-title').text(sub_title);
        }else if($('#gift').hasClass('menu_on')){
        /*선물포장부분 서브타이틀 show&hide*/
            $('.sub_title').hide(); 
            $('.gift_sub').show();
             var sub_title=$('#gift a').attr('data-subtitle');
            $('.sub-title').text(sub_title);
        }
         
    })
    
})