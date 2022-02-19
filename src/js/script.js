$(function() {
    $('.gallery__slider').slick({
        slidesToShow: 1,
        arrows: true,
        dots: true,
        waitForAnimate: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 426,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});