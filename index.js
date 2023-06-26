$(document).ready(function() {
    TransitionCarousel();
    CheckIfMobile();
    MyAge();
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

function TransitionCarousel(){
    $('.projects').removeClass('d-none');
    $('.projects').addClass('d-block');
}

function MyAge() {
    var today = new Date();
    var myBirthDate = new Date('1999-01-16');
  
    var myAge = today.getFullYear() - myBirthDate.getFullYear();
    var month = today.getMonth() - myBirthDate.getMonth();
  
    if (month < 0 || (month === 0 && today.getDate() < myBirthDate.getDate())) {
        myAge--;
    }
  
    $('.age').text(myAge.toString())
}