$(function(){
            
     /*메뉴 열기 닫기*/
            
    $('.main').on('mouseenter',function(){
        $('.sub').stop().slideDown();
        $('.sub_wrap').stop().slideDown();
    });
    $('.main').on('mouseleave',function(){
        $('.sub').stop().slideUp();
        $('.sub_wrap').stop().slideUp();
    });
     /*주소_로드*/
        $(window).on('load',function(){
            var a=window.location.href;
            var b=a.split('?')
            var c=b[1];
             console.log(c);
            if(c=='all'){
                $('.brand_list li').show();
                $('.icon_list .icon_list_all').addClass('brand_on');
            }else{
            $('.brand_list li').hide();
            $('.brand_list li[data-type='+c+']').show();
            $('.icon_list li').siblings().removeClass('brand_on'); 
            $('.icon_list li[data-name='+c+']').addClass('brand_on'); }        
        });
    
    /*메뉴선택시*/
        $('.brand_main a').on('click',function(e){
        e.preventDefault()
         var list_name=$(this).attr('data-name');
         window.location.href='brand.html?'+list_name;
        });
    
       
        
   

})