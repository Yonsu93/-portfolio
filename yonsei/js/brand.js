$(function(){

    $('.icon_list li a').on('click',function(e){
         e.preventDefault();
        var list_name=$(this).parent('li').attr('data-name');
         window.location.href='brand.html?'+list_name;
    })
    
    $('.icon_list_all a').on('click',function(){
        $('.brand_list li:lt(10)').show();
        $('.more_on').show();
    })
     var num=10;
    $('.more_on').on('click',function(e){
        e.preventDefault();
        num+=10;
        console.log(num)
         if(num>=40){
            $(this).hide();
        }
        $('.brand_list li:lt('+num+')').show();
    })
    
    
})
