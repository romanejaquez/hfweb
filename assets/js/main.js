$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navbar-area").removeClass("sticky");
        } else{
            $(".navbar-area").addClass("sticky");
        }
    });
    
     //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function(){
        $(this).toggleClass("active");
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });    
    
    
    //===== Sidebar

    $('[href="#side-menu-right"], .overlay-right').on('click', function (event) {
        $('.sidebar-right, .overlay-right').addClass('open');
    });

    $('[href="#close"], .overlay-right').on('click', function (event) {
        $('.sidebar-right, .overlay-right').removeClass('open');
    });
    
    
    
    //===== Isotope Project 3

    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
            // options
            transitionDuration: '1s'
        });

        // filter items on button click
        $('.portfolio-menu ul').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $('.portfolio-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    
    
    //  Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Slick

    $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
    
    
    //===== Slick

    $('.testimonial-active-2').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
    
    
    //===== Slick

    $('.client-active').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ]
    });
    
    
    //===== Slick

    $('.testimonial-active-4').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 800,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

        
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    //=====  AOS
    
    new WOW().init();
    
    
    //===== 
    
    // FORM VALIDATION

    // initially disable it
    $(".main-btn").attr('disabled', 'disabled');

    $(".hf_name").on('keyup', function(e) {
        checkValidation();
    });

    $(".hf_msg").on('keyup', function(e) {
        checkValidation();
    });

    $(".hf_email").on('keyup', function(e) {
        checkValidation();
    });

    // hide the contact msg success
    $(".contact-form-success-msg").hide();
    $(".contact-form-error").hide();

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function checkValidation() {

        var enableBtn = false;

        // validate first name
        enableBtn = $(".hf_name").val().trim().length > 0 && 
        $(".hf_msg").val().trim().length > 0 && isEmail($(".hf_email").val().trim())

        if (enableBtn) {
            $(".main-btn").removeAttr('disabled');
        }
        else {
            $('.main-btn').attr('disabled', 'disabled');
        }
    };

    $('form').on('submit', function (e) {

        // hide always initially
        $(".contact-form-error").hide();

        var serializedForm = $('form').serialize();
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'https://hfauditoriasmedicas.000webhostapp.com/contact.php',
            data: serializedForm,
            success: function () {
                $(".contact-form-success-msg").show();
                $(".contact-form").hide();
            },
            error: function() {
                $(".contact-form-error").show();
            }
        });
     });
    
     // HACK TO REMOVE THE web host banner
     $("a").each(function(i, f) {
         if ($(f).attr('title') === 'Hosted on free web hosting 000webhost.com. Host your own website for FREE.') {
             $(f).remove(); 
         }
     });
    
    
    
    
    
    
    
    
    
    
    
    
    
});