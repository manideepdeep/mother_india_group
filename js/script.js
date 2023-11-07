document.getElementById("hamburger").onclick = function () {
  this.classList.toggle("is-active");
};

const button = document.querySelector("#hamburger");

button.addEventListener("click", (e) => {
  document.querySelector(".show-nav").classList.toggle("header__nav");
});





// script.js
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1, // Change the number of items to display as needed
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000, // Set autoplay interval in milliseconds
        responsive: {
            0: {
                items: 1 // Number of items to display on small screens
            },
            768: {
                items: 1 // Number of items to display on medium screens
            },
            992: {
                items: 1 // Number of items to display on large screens
            }
        }
    });
});

/**
 * hero tab button
 */

// Get all tab buttons with the "data-tab-btn" attribute
const tabBtns = document.querySelectorAll("[data-tab-btn]");

// Initialize the lastClickedTabBtn with the first tab button
let lastClickedTabBtn = tabBtns[0];

// Function to handle tab button click
const changeTab = function () {
  // Remove the "active" class from the previously clicked tab button
  lastClickedTabBtn.classList.remove("active");

  // Add the "active" class to the currently clicked tab button
  this.classList.add("active");

  // Update the lastClickedTabBtn to the current tab button
  lastClickedTabBtn = this;
};

// Attach click event listeners to all tab buttons
tabBtns.forEach(function (tabBtn) {
  tabBtn.addEventListener("click", changeTab);
});



// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });



  // Get the current URL path (e.g., "/about.html")
const currentPath = window.location.pathname;

// Get all navigation links
const navLinks = document.querySelectorAll('.header__nav-link');

// Loop through each navigation link
navLinks.forEach(link => {
    // Get the href attribute of the link (e.g., "/about.html")
    const linkPath = link.getAttribute('href');

    // Check if the current path matches the link's href
    if (currentPath === linkPath) {
        // Add the "active" class to the link
        link.classList.add('active');
    }
});








/* projects c */



/* projects c */

/* properties */



/* properties */


/* numbers */

let newValueDisplays = document.querySelectorAll(".num2"); // Updated class name
let interval = 4000;

newValueDisplays.forEach((valueDisplay) => { // Updated variable name
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

/* numbers */











/* testimonials */

(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();

/* testimonials */


/* New Property */

const prtyNext = document.querySelector('#prty-next');
const prtyPrev = document.querySelector('#prty-prev');
const prtyCardContainer = document.querySelector('.prty-card-container');

let scrollAmount = 0;

prtyNext.addEventListener('click', () => {
  scrollAmount += 350; // Adjust the scrolling amount as needed
  if (scrollAmount > prtyCardContainer.scrollWidth - prtyCardContainer.clientWidth) {
    scrollAmount = prtyCardContainer.scrollWidth - prtyCardContainer.clientWidth;
  }
  prtyCardContainer.scrollTo({
    left: scrollAmount,
    behavior: 'smooth',
  });
});

prtyPrev.addEventListener('click', () => {
  scrollAmount -= 350; // Adjust the scrolling amount as needed
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
  prtyCardContainer.scrollTo({
    left: scrollAmount,
    behavior: 'smooth',
  });
});

/* New Property */












const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)










(function($) {
  $(document).ready(function() {
    var slides = $('.slider .slide');
    var currentSlide = 0;

    function showSlide(index) {
      slides.hide();
      slides.eq(index).fadeIn(500);
    }

    showSlide(currentSlide);

    $('.slide-prev').on('click', function(e) {
      e.preventDefault();
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    $('.slide-next').on('click', function(e) {
      e.preventDefault();
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  });
})(jQuery);













$(document).ready(function() {
  const propertyCards = document.querySelectorAll('.property-cat-card');

// Get all filter buttons
const filterButtons = document.querySelectorAll('.property-filter button');

// Add click event listeners to the filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the data-category attribute of the clicked button
    const category = button.getAttribute('data-category');

    // Loop through all property cards
    propertyCards.forEach(card => {
      // Get the data-category attribute of the card
      const cardCategory = card.getAttribute('data-category');

      // If the category is "all" or matches the selected category, display the card; otherwise, hide it
      if (category === 'all' || category === cardCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
});




















// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
	    "<i class='fa fa-angle-left'></i>",
	    "<i class='fa fa-angle-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});



$(document).ready(function () {
  $('#category-filter').on('change', function () {
    var selectedCategory = $(this).val();

    // Hide all new-box elements
    $('.new-box').removeClass('active');

    if (selectedCategory === 'all') {
      // Show all new-box elements when 'All' is selected
      $('.new-box').addClass('active');
    } else {
      // Show new-box elements with the selected category
      $('.new-box[data-category="' + selectedCategory + '"]').addClass('active');
    }
  });
});












/* property-details */

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "#002e63";
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.style.backgroundColor = "#002147 ";
}

document.getElementById("section2").querySelector(".tablinks").click();


/* property-details */





document.getElementById('visit-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get form data
  const formData = new FormData(document.getElementById('visit-form'));

  // Convert form data to a plain object
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Send form data to the server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'server-script.php'); // Replace 'server-script.php' with the actual server-side script
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));

  // Handle the server's response
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Successfully submitted the form
        alert('Form submitted successfully.');
      } else {
        // Handle errors
        alert('Error submitting the form. Please try again.');
      }
    }
  };
});



// Add this script to make links clickable
document.querySelectorAll('.project-info a').forEach(function(link) {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      // Handle the link click here, e.g., show a message or trigger an action.
      alert('Link clicked: ' + link.textContent);
  });
});









