

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Property filter
        --------------------*/
        $('.property-controls li').on('click', function () {
            $('.property-controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.property-filter').length > 0) {
            var containerEl = document.querySelector('.property-filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*------------------
		Navigation
	--------------------*/
    $(".nav-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Team Slider
    --------------------*/
    $(".fp-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 2,
        dots: false,
        nav: true,
        navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".lc-slider").owlCarousel({
        loop: true,
        margin: 115,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });

    /*------------------------
        Property pic slider
    -------------------------*/
    $(".property-pic-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    

    /*------------------------
        Agent slider
    -------------------------*/
    $(".as-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Nice Select
    --------------------*/
    $('select').niceSelect();

    /*-------------------
		Radio Btn
	--------------------- */
    $(".cb-item label").on('click', function () {
        $(".cb-item label").removeClass('active');
        $(this).addClass('active');
    });

    /*-------------------
		Range Wrap
	--------------------- */

    //room size
    $("#roomsize-range").slider({
        range: true,
        min: 0,
        max: 2100,
        step: 300,
        values: [300, 1200],
        slide: function (event, ui) {
            $("#roomsizeRange").val("[" + ui.values[0] + "-" + ui.values[1] + "]" + "sqft");
        }
    });
    $("#roomsizeRange").val("[" + $("#roomsize-range").slider("values", 0) + "-" + $("#roomsize-range").slider("values", 1) + "]" + "sqft");

    //price range
    $("#price-range").slider({
        range: true,
        min: 0,
        max: 15000000,
        step: 100,
        values: [100000, 1000000],
        slide: function (event, ui) {
            $("#priceRange").val("[ " + ui.values[0] + " - " + ui.values[1] + " ]" + "₹");
        }
    });
    $("#priceRange").val("[ " + $("#price-range").slider("values", 0) + " - " + $("#price-range").slider("values", 1) + " ]" + "₹");

     //Text editor
    $('.texteditor-content').richText();

    $('.texteditor-switch').on('click', function () {
        if(!$(this).hasClass('active')) {
            $(".richText-btn[data-command='toggleCode']").click();
        }
    });

     //Drag Upload
    $('.feature-image-content').imageUploader();

})(jQuery);

        // Initialize datepicker
        flatpickr("#datepicker", {
            dateFormat: "Y-m-d",
            maxDate: "today"
        });

    

        document.addEventListener("DOMContentLoaded", function() {
            var carousel = document.querySelector("#carouselExampleCaptions");
            var captions = carousel.querySelectorAll(".carousel-caption");
        
            carousel.addEventListener("slid.bs.carousel", function(event) {
                var activeSlide = event.relatedTarget;
                captions.forEach(function(caption) {
                    caption.style.opacity = 0;
                });
        
                var activeCaption = activeSlide.querySelector(".carousel-caption");
                activeCaption.style.opacity = 1;
            });
        });


        function test(){
            var tabsNewAnim = $('#navbarSupportedContent');
            var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
            var activeItemNewAnim = tabsNewAnim.find('.active');
            var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
            var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
            var itemPosNewAnimTop = activeItemNewAnim.position();
            var itemPosNewAnimLeft = activeItemNewAnim.position();
            $(".hori-selector").css({
                "top":itemPosNewAnimTop.top + "px", 
                "left":itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
            $("#navbarSupportedContent").on("click","li",function(e){
                $('#navbarSupportedContent ul li').removeClass("active");
                $(this).addClass('active');
                var activeWidthNewAnimHeight = $(this).innerHeight();
                var activeWidthNewAnimWidth = $(this).innerWidth();
                var itemPosNewAnimTop = $(this).position();
                var itemPosNewAnimLeft = $(this).position();
                $(".hori-selector").css({
                    "top":itemPosNewAnimTop.top + "px", 
                    "left":itemPosNewAnimLeft.left + "px",
                    "height": activeWidthNewAnimHeight + "px",
                    "width": activeWidthNewAnimWidth + "px"
                });
            });
        }
        $(document).ready(function(){
            setTimeout(function(){ test(); });
        });
        $(window).on('resize', function(){
            setTimeout(function(){ test(); }, 500);
        });
        $(".navbar-toggler").click(function(){
            $(".navbar-collapse").slideToggle(300);
            setTimeout(function(){ test(); });
        });
        
        
        
        // --------------add active class-on another-page move----------
        jQuery(document).ready(function($){
            // Get current path and find target link
            var path = window.location.pathname.split("/").pop();
        
            // Account for home page with empty path
            if ( path == '' ) {
                path = 'index.html';
            }
        
            var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
            // Add active class to target link
            target.parent().addClass('active');
        });

