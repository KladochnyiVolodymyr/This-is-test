$(document).ready(function() {
    function animation_completed(){
        $(this).addClass('animation-completed');
    }
    if ($(window).width() > 993 ) {
        $('.header-content_right').animate({left:'60%', opacity: 1},1500);
        $('.header-content_left').animate({right:'40%', opacity: 1},1500);
    }
    else if($(window).width() < 993 ) {
        $('.header-content_right').animate({left:'50%', opacity: 1},1500);
        $('.header-content_left').animate({right:'50%', opacity: 1},1500);
    }
    /*
    else if($(window).width() < 769 ) {
        $('.header-title_right').animate({left:'50%', opacity: 1},1500);
        $('.header-title_left').animate({right:'50%', opacity: 1},1500);
    }*/


        /* Every time the window is scrolled ... */
        $(window).scroll( function(){
            /* Check the location of each desired element */
            $('.form').each( function(i){
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object ){
                    $(this).animate({'opacity':'1'},500);       
                }            
            }); 
        }); 
    });
$( ".form__button").click(function() {
    var $block = $(".form__button_sending");
    $block.css({visibility:"visible"});
});
