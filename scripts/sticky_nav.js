$(window).scroll(function(){
    $("#mbl_main_nav").css("top",Math.max(0,400-$(this).scrollTop()));
});