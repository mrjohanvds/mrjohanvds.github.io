collapsing();
stickyNavBar();
timeline();
//hideTimeline();

function collapsing()
{
    var coll = document.getElementsByClassName("collapsible");
    var skills = document.getElementsByClassName("skill");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                var j;
                for(j =0; j < skills.length; j++){
                    skills[i].classList.remove("skill-active");
                }
            } else {
                content.style.maxHeight = content.scrollHeight+"px";
                var j;
                for(j =0; j < skills.length; j++){
                    skills[i].classList.add("skill-active");
                }
            }
        });
    }
}

function stickyNavBar()
{
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("navbar");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

function timeline()
{
    var $element=$('.each-event, .title');
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

function expend(id)
{
    var element = document.getElementById(id);
    if(element.classList.contains("extended")){
        element.classList.remove("extended");
    }
    else{
        element.classList.add("extended")
    }
}

function overlayOff(){
    document.getElementById("overlay").style.display = "none";
}