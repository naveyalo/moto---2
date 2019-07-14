$(function() {
    var menuLink = $('.header-link');
    var menu = $('.header-menu');
    var close = $('.close-btn');



    menuLink.click(function() {
        menu.toggleClass('active-menu');
    });
    close.click(function() {
        menu.toggleClass('active-menu');
    });

});

