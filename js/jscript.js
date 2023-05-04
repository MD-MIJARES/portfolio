$(document).ready(function(){

    $('.menubar .menu-content .menu  li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.burgerbtn').click(function(){
        $('.menu-content').toggleClass("active");
        $('.burgerbtn img').toggleClass("active");
    });

    $('.burgerbtn').click(function(){
        $('.menu li a').toggleClass("active");
    });
});