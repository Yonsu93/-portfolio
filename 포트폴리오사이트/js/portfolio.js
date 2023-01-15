
$(function(){
    $('#fullpage').fullpage({
          licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
          anchors: ['page1', 'page2', 'page3','page4','page5'],
	      menu: '#gnb',
          afterLoad: function(origin, destination, direction){
             var num=destination.index;
            if(num>0 && 4>num){
                 $('.bg_box').addClass('on')  
              }else{
                 $('.bg_box').removeClass('on') 
             }
              if(num==1){
                 $('.skill-percent').each(function(index){
                    var ps=$(this).attr('data-percent');
                $(this).delay(index*1000).animate({width:ps},2000,'easeInOutBack',function(){
                    $(this).children('span').show().text(ps);
                    })
                })
            }else{
                 $('.skill-percent').css({width:0})
                $('.skill-percent').children('span').hide();
             }
            if(num==2){
             
                
              }else{
             
             }
             if(num==3){
                for(var i=0;i<5;i++){
                 $('.section4 ul li').eq(i).delay(i*150).animate({top:0,opacity:1})
                }
                $('#design li a').fancybox();
             }else{
                 $('.section4 ul li').css({top:'50px',opacity:0})
             }
         }//콜백 
    })//fullpage
    //
        $('.work_btn .modal_btn a').on('click',function(e){
            e.preventDefault()
            $('.sub_all').fadeIn();
            var imgSrc=$(this).attr('data-img');
            var imgTitle=$(this).attr('data-title');
                console.log(imgTitle +  imgSrc);
            $('.sub_all .work_title p').text(imgTitle);
            $('.sub_view img').attr({src:imgSrc});
            $('body').css({overflow:'hidden'});
            fullpage_api.setAllowScrolling(false, 'down, up');
        }); 
      //sub_all 팝업닫기 
      $('.close_btn').on('click',function(e){
          e.preventDefault()
          $('.sub_all').fadeOut();
          $('body').css({overflow:'none'})
          fullpage_api.setAllowScrolling(true, 'down, up');
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



})//jQ






