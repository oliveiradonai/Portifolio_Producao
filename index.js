$(document).ready(function() {
    CheckIfMobile(); 
})

$(window).resize(function () {
    CheckIfMobile();
});

function CheckIfMobile(){  
    var windowWidth = $(window).width();
    if (windowWidth > 1580) {
        $('.carousel').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
    else{
        $('.carousel').slick('unslick');
    }
};