//<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
$(function() {
    $('nav a').bind('click',function(event){
        var $anchor = $(this);
        /*
        if you want to use one of the easing effects:
        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1500,'easeInOutExpo');
         */
        $('body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1000);
        event.preventDefault();
    });
});