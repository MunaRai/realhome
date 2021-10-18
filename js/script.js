$(document).ready(function() {
    $('#banner-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
    });

    $('#agent-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
    });

    $('#testimonial-slider').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
        autoplayspeed: 1500,
        fade: true,
        fadespeed: 1000
    });

    $('#client-slider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        Infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplayspeed: 50
    });

});


