// Hero Section



// Hero Section

$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });

  


  jQuery(document).ready(function ($) {
	var feedbackSlider = $(".feedback-slider");
	feedbackSlider.owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		autoplay: true,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		navText: [
			"<i class='fa fa-long-arrow-left'></i>",
			"<i class='fa fa-long-arrow-right'></i>"
		],
		responsive: {
			// breakpoint from 767 up
			767: {
				nav: true,
				dots: false
			}
		}
	});

	feedbackSlider.on("translate.owl.carousel", function () {
		$(".feedback-slider-item h3")
			.removeClass("animated fadeIn")
			.css("opacity", "0");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
			.removeClass("animated zoomIn")
			.css("opacity", "0");
	});

	feedbackSlider.on("translated.owl.carousel", function () {
		$(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
			.addClass("animated zoomIn")
			.css("opacity", "1");
	});
	feedbackSlider.on("changed.owl.carousel", function (property) {
		var current = property.item.index;
		var prevThumb = $(property.target)
			.find(".owl-item")
			.eq(current)
			.prev()
			.find("img")
			.attr("src");
		var nextThumb = $(property.target)
			.find(".owl-item")
			.eq(current)
			.next()
			.find("img")
			.attr("src");
		var prevRating = $(property.target)
			.find(".owl-item")
			.eq(current)
			.prev()
			.find("span")
			.attr("data-rating");
		var nextRating = $(property.target)
			.find(".owl-item")
			.eq(current)
			.next()
			.find("span")
			.attr("data-rating");
		$(".thumb-prev").find("img").attr("src", prevThumb);
		$(".thumb-next").find("img").attr("src", nextThumb);
		$(".thumb-prev")
			.find("span")
			.next()
			.html(prevRating + '<i class="fa fa-star"></i>');
		$(".thumb-next")
			.find("span")
			.next()
			.html(nextRating + '<i class="fa fa-star"></i>');
	});
	$(".thumb-next").on("click", function () {
		feedbackSlider.trigger("next.owl.carousel", [300]);
		return false;
	});
	$(".thumb-prev").on("click", function () {
		feedbackSlider.trigger("prev.owl.carousel", [300]);
		return false;
	});
}); //end ready


var testimonialItems = document.querySelectorAll(".item label");
var timer;
function cycleTestimonials(index) {
   timer = setTimeout(function() {
    var evt;
    if (document.createEvent){
      //If browser = IE, then polyfill
      evt = document.createEvent('MouseEvent');
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    } else {
      //If Browser = modern, then create new MouseEvent
      evt = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 20
          });
    }
    var ele = "." + testimonialItems[index].className;
    var ele2 = document.querySelector(ele)
    ele2.dispatchEvent(evt);
    index++; // Increment the index
    if (index >= testimonialItems.length) {
      index = 0; // Set it back to `0` when it reaches `3`
    }
    cycleTestimonials(index); // recursively call `cycleTestimonials()`
    document.querySelector(".testimonials").addEventListener("click", function() {
      clearTimeout(timer); //stop the carousel when someone clicks on the div
    });
  }, 2000); //adjust scroll speed in miliseconds
}
//run the function
cycleTestimonials(0);











/*global $, jQuery, console, alert, prompt */
// Loading =====================================================================
$(document).ready(function () {
  "use strict";
  
  var body        = $('body'),
      slider      = $(".slider"),
      sliderUl    = slider.find("ul"),
      sliderUlLi  = sliderUl.find("li"),
      sliderOl    = slider.find("ol"),
      sliderOlLi  = sliderOl.find("li"),
      controlFa   = $(".control .fa"),
      sliderTime  = 1000,
      sliderWait  = 3000,
      clickHere   = "yes click",
      autoPlay;

  // All Functions =====================================================================
  sliderUl.append("<li>" + sliderUlLi.first().html() + "</li>");
  sliderUl.prepend("<li>" + sliderUlLi.last().html() + "</li>");
  
  function runSlider() {
      if (clickHere === "yes click") {
          clickHere = "no click";
          sliderUl.animate({
              marginLeft: -sliderUlLi.width() * ($(".slider .active").index() + 1)
          }, sliderTime, function () { clickHere = "yes click"; });
      }
  }
  function addActive(param) {
      if (clickHere === "yes click") {
          param.addClass("active").siblings("li").removeClass("active");
      }
  }

  // Click Point =======================================================================
  sliderOlLi.on("click", function () {
      addActive($(this));
      runSlider();
  });

  // Click Arrow Left
  controlFa.first().on("click", function () {
      if ($(".slider .active").is(":first-of-type")) {
          addActive(sliderOlLi.last());
          if (clickHere === "yes click") {
              clickHere = "no click";
              sliderUl.animate({
                  marginLeft: "+=" + sliderUlLi.first().width()
              }, sliderTime, function () {
                  sliderUl.css("margin-left", -sliderUlLi.width() * ($(".slider .active").index() + 1));
                  clickHere = "yes click";
              });
          }
      } else {
          addActive($(".slider .active").prev("li"));
          runSlider();
      }
  });

  // Click Arrow Right
  controlFa.last().on("click", function () {
      if ($(".slider .active").is(":last-of-type")) {
          addActive(sliderOlLi.first());
          if (clickHere === "yes click") {
              clickHere = "no click";
              sliderUl.animate({
                  marginLeft: "-=" + sliderUlLi.first().width()
              }, sliderTime, function () {
                  sliderUl.css("margin-left", -sliderUlLi.width() * ($(".slider .active").index() + 1));
                  clickHere = "yes click";
              });
          }
      } else {
          addActive($(".slider .active").next("li"));
          runSlider();
      }
  });
              
  // Start Set =======================================================================
  sliderOlLi.first().click();
  
  // Keyboard ========================================================================
  $("body").keydown(function (e) {
      if (e.keyCode === 37) { // left
          controlFa.first().click();
      } else if (e.keyCode === 39) { // right
          controlFa.last().click();
      }
  });
  // Data Show =======================================================================
  function dataShow() {
      var isClick = 'no';
      $('[data-show]').on('mouseenter', function () {
          if (isClick === 'no') {
              isClick = 'yes';
              $('.big-slider .show ul li:not(' + $(this).data('show') + ')').hide();
              $($(this).data('show')).fadeIn();
              setTimeout(function () {isClick = 'no'; }, 500);
          }
      });
  }
  dataShow();
});






//Start Slider
var slider =$(".parent .slider");

$(".parent > .fa:first-of-type").addClass("active");

$(".parent").each(function (){
 
$(this).find("> .fa").on('click',function (){
  
 if($(this).hasClass("first")){
  slider.animate({
    scrollLeft : "-=" + $(".parent").find(".manager > div").width() 
  },500)
   $(this).addClass('active').siblings(".fa").removeClass("active");
 }
   if($(this).hasClass("last")){
   slider.animate({
   scrollLeft:  '+=' + $(this).parent().find('.manager > div').width()
}, 500);
  $(this).addClass('active').siblings(".fa").removeClass("active");
}
 });
});
//our Auto Slider
(function autoSlider(){
 
$('.parent').each(function(){
  
if($(this).find("> .first").hasClass("active")){
 
  slider.delay(2000);
  slider.animate({
    scrollLeft : "-=" + $(".parent").find(".manager > div").width() 
  },1000,function(){
  $(this).parent().find("> .active").delay(1000).removeClass('active').next().addClass('active');
  autoSlider();
  });
}else{
  slider.delay(2000);
  slider.animate({
   scrollLeft:  '+=' + $(this).parent().find('.manager > div').width()
   }, 1000,function(){
    $(this).parent().find("> .active").delay(1000).removeClass('active').prev().addClass('active');
     autoSlider();
    });
  }
});
}());



