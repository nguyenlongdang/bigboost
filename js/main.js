$(function() {
    // Wow js
    new WOW().init();

    // wistlist
    $('.header__top-openNav').on('click', function() {
        $('#wishlist').addClass('section__wishlist-active');
        $('.overplay').addClass('overplay__active');
    })

    $('.closeNav, .overplay').on('click', function() {
        $('#wishlist').removeClass('section__wishlist-active');
        $('.overplay').removeClass('overplay__active');
    })

    // cart
    $('.header__top-openNavCart').on('click', function() {
        $('#cart').addClass('section__wishlist-active');
        $('.overplay').addClass('overplay__active');
    })

    $('.closeNav, .overplay').on('click', function() {
        $('#cart').removeClass('section__wishlist-active');
        $('.overplay').removeClass('overplay__active');
    })

    // searching
    $('.header__top-openSearch').on('click', function() {
        $('.section__searching').addClass('animate__animated animate__zoomIn active');
        $('.section__searching').removeClass('animate__zoomOut');
        $('.overplay').addClass('overplay__active');
    })

    $('.closeNav').on('click', function() {
        $('.section__searching').addClass('animate__animated animate__zoomOut');
        $('.section__searching').removeClass('animate__zoomIn active');
        $('.overplay').removeClass('overplay__active');
    })

    // menu
    $('.header__top-openMenu').on('click', function() {
        $('.section__menu').addClass('active');
        $('.overplay').addClass('overplay__active');
    })

    $('.closeNav, .overplay').on('click', function() {
        $('.section__menu').removeClass('active');
        $('.overplay').removeClass('overplay__active');
    })

    // login
    $('.header__top-openLogin').on('click', function() {
        $('.section__login').addClass('active');
        $('.overplay').addClass('overplay__active');
    })

    $('.closeNav, .overplay').on('click', function() {
        $('.section__login').removeClass('active');
        $('.overplay').removeClass('overplay__active');
    })
    // end login

    // slider
    $('.section__slider').slick({
        arrows: false,
        dots: true
    });
    // end lider

    // Slick Product
    $('.section__product-slider').slick({
        arrows: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 5,
        infinite: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    })
})