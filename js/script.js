$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        navText: ["<img src='./img/left.png'>", "<img src='./img/right.png'>"],
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
});

$(document).ready(function (){
    $(window).scroll(function () {
        if($(window).scrollTop() > 300){
            $('i').css({
                "opacity":"1", "pointer-events":"auto"
            });
        }else{
            $('i').css({
                "opacity":"0", "pointer-events":"none"
            });
        }
    });
    $('i').click(function () {
        $('html').animate({scrollTop:0}, 500);
    });
});