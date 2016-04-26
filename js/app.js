$(".definition-bubble").hide();

$(".bible-translations").hide();

$(".word-studies").hide();

$(".bible-dive").hide();

$(".left-menu, .menu-close-left").animate({
    "left": "-=500"
}, "fast");


$("#discerned").click(function (event) {
    event.preventDefault();
    $("#def-discerned").show(300);
    event.stopPropagation();
});


$('div').on('click', function (e) {
    $(".definition-bubble").hide(300);
    event.stopPropagation();
});

$("#intellectual").click(function (event) {
    event.preventDefault();
    $("#def-intellectual").show(300);
    event.stopPropagation();
})

$("#scholarly").click(function (event) {
    event.preventDefault();
    $("#def-scholarly").slideToggle(300);
    event.stopPropagation();
});

$("#portal").click(function (event) {
    event.preventDefault();
    $("#def-portal").slideToggle(300);
    event.stopPropagation();
});

$("#conventionality").click(function (event) {
    event.preventDefault();
    $("#def-conventionality").slideToggle(300);
    event.stopPropagation();
});


$("#suppositional").click(function (event) {
    event.preventDefault();
    $("#def-suppositional").slideToggle(300);
    event.stopPropagation();
});

$("#morsel").click(function (event) {
    event.preventDefault();
    $("#def-morsel").slideToggle(300);
    event.stopPropagation();
});

$("#dress").click(function (event) {
    event.preventDefault();
    $("#def-dress").slideToggle(300);
    event.stopPropagation();
});

$("#age").click(function (event) {
    event.preventDefault();
    $("#def-age").slideToggle(300);
    event.stopPropagation();
});

$("#ponder").click(function (event) {
    event.preventDefault();
    $("#def-ponder").slideToggle(300);
    event.stopPropagation();
});

$("#fulfilled").click(function (event) {
    event.preventDefault();
    $("#def-fulfilled").slideToggle(300);
    event.stopPropagation();
});

$("#press").click(function (event) {
    event.preventDefault();
    $("#def-press").slideToggle(300);
    event.stopPropagation();
});

$("#stature").click(function (event) {
    event.preventDefault();
    $("#def-stature").slideToggle(300);
    event.stopPropagation();
});

$("#sycomore").click(function (event) {
    event.preventDefault();
    $("#def-sycomore").slideToggle(300);
    event.stopPropagation();
});

$("#creed").click(function (event) {
    event.preventDefault();
    $("#def-creed").slideToggle(300);
    event.stopPropagation();
});

$("#jehovah").click(function (event) {
    event.preventDefault();
    $("#def-jehovah").slideToggle(300);
    event.stopPropagation();
});

$("#jot").click(function (event) {
    event.preventDefault();
    $("#def-jot").slideToggle(300);
    event.stopPropagation();
});

$("#cliques").click(function (event) {
    event.preventDefault();
    $("#def-cliques").slideToggle(300);
    event.stopPropagation();
});

$(".ps-91-3").click(function (event) {
    event.preventDefault();
    $("#ps-91-3").slideToggle(300);
    $(".ps-91-3").hide();
});

$('.close').click(function (event) {
    event.preventDefault();
    $('.bible-translations').hide();
    $('.translate').show();

});

$(".elijah").click(function (event) {
    event.preventDefault();
    $("#elijah").slideToggle(300);
    $(".elijah").hide();
});

$('.word-close').click(function (event) {
    event.preventDefault();
    $('.word-studies').hide();
    $('.word').show();

});

$(".sustain").click(function (event) {
    event.preventDefault();
    $("#sustain").slideToggle(300);
    $(this).hide();
});

$(".cake").click(function (event) {
    event.preventDefault();
    $("#cake").slideToggle(300);
    $(this).hide();
});

$('.dive-close').click(function (event) {
    event.preventDefault();
    $('.bible-dive').hide();
    $('.dive').show();

});

$(".publicans").click(function (event) {
    event.preventDefault();
    $("#publicans").slideToggle(300);
    $(this).hide();
});


$(".hb-10-22").click(function (event) {
    event.preventDefault();
    $("#hb-10-22").slideToggle(300);
    $(".hb-10-22").hide();
});

$(".switch").click(function (event) {
    event.preventDefault();
    $(".translate, .illustration, .word, .dive, .map, .goverse").toggle();
    $(".switch").toggleClass('switch-off');
});


var hm = $(".header-hamburger");
var hms = $(".header-hamburger-scrolled");

$(window).scroll(function () {
    if ($(this).scrollTop() > 55) {
        $(".header-hamburger").css("position", "fixed");
        $(".header-hamburger").css("top", "0");
        $(".header-hamburger").css("z-index", "9000");
        $(".left-menu").css("z-index", "900000000000000000");
    } else {
        $(".header-hamburger").css("position", "static");
        $(".header-hamburger").css("z-index", "0");
    }
});

$(".btn-hamburger").click(function (event) {
    event.preventDefault();
    $(".left-menu, .menu-close-left").animate({
        "left": "+=500"
    }, "fast");
});

$(".menu-close-left").click(function (event) {
    event.preventDefault();
    $(".left-menu, .menu-close-left").animate({
        "left": "-=500"
    }, "fast");
});


$(".lesson-section-name").click(function (event) {
    event.preventDefault();
    $(".nav").animate({
        "left": "-=500"
    }, "fast");
});

$(".right-close-nav").click(function (event) {
    event.preventDefault();
    $(".nav").animate({
        "left": "+=500"
    }, "fast");
});

//Dynamically changing section name

var indicatortext = $(".lesson-section-name");

mytop = $(window).scrollTop();

s1pos = $(".bible-1").offset().top;
rrpos = $(".responsive-reading").offset().top;
s2pos = $(".section-2").offset().top;

rrheight = $('.responsive-reading').height();
s1height = $(".bible-1").height();
s2height = $(".section-2").height();

s2start = 6305;
s2end = 9881;

$(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height > 0 && height < 709) {
        $('.section-name-actual').hide();
        indicatortext.html('GT<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>');
        $('.section-name-actual').hide();
    }
    if (height > 855 && height < 2003) {
        $('.section-name-actual').hide();
        indicatortext.html('RR<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>');
    }
    if (height > 2045 && height < 6359) {
        indicatortext.html('1<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>');
        $('.section-name-actual').show();
    }
    if (height > 5920 && height < 10083) {
        indicatortext.html('2<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>');
        $('.section-name-actual').show();
    }
    if (height > 9868) {
        indicatortext.html('3<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>');
        $('.section-name-actual').show();
    }
    /*
    if(height  < rrpos + rrheight) {
       indicatortext.html("RR");
    } else if (height > rrpos + rrheight && height > s1pos) 
    { indicatortext.html("1");} else if 
    (height == s2start && height < s2end) { indicatortext.html("2");}
    */
});

/*
$(window).scroll(function(){
if (mytop < rrpos) {
    indicatortext.html("RR");
    } 
});*/



$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        $(".nav").animate({
            "left": "+=500"
        }, "fast");
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});