$(document).ready(function() {
var stickyNavTop = $('.mbl_main_nav').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.nav').addClass('sticky');
} else {
    $('.nav').removeClass('sticky'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
    stickyNav();
});
});