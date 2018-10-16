$(document).ready(function(){
    var $window = $(window);
    
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this);
        
        $(window).scroll(function(){
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50%' + yPos + 'px';
            $bgobj.css({ backgroundPosition: coords});
        });                                     
    });
});
    
function scrollDown(){
        $('html, body').animate({scrollTop:$(document).height()}, 1100, "swing");
}

fade();

function fade()
{
    var $element=$('.wsButton');
    var $window = $(window);
    $window.on('scroll resize', check_for_fade);
    $window.trigger('scroll');
    function check_for_fade() { 
        var window_height = $window.height();
    
        $.each($element, function (event) {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_offset = $element.offset().top;
            space = window_height - (element_height + element_offset -$(window).scrollTop());
            if (space < 60) {
                if(!$element.hasClass("focus")){
                $element.addClass("non-focus");
                }
            } else {
                $element.removeClass("non-focus");
                $element.addClass("focus");
            }
 
        });
    };
}