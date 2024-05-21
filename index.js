$(document).ready(function () {
    $('.fa-bars').click(function () { 
        $(this).toggleClass('fa-times');
        $('.nav-bar').toggleClass('nav-toggle')
    });   
    $(window).on("scroll load", function () {
        $(this).removeClass('fa-times');
        $('.nav-bar').removeClass('nav-toggle')

        if($(window).scrollTop()>30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
    }); 
});
