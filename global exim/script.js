var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

// Select the cursor element
var cursor = document.getElementById("cursor");

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    // Adjust cursor style for mouseenter
    cursor.style.transform = "scale(3)";
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    // Adjust cursor style for mouseleave
    cursor.style.transform = "scale(1)";
    cursor.style.border = "0px solid #95C11E";
    cursor.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});





document.getElementById('burger-menu').addEventListener('click', function () {
  var nav = document.getElementById('nav');
  nav.classList.toggle('open');
});

// JavaScript to toggle the menu's visibility smoothly
document.getElementById('burger-menu').addEventListener('click', function() {
  var menu = document.getElementById('nav-items');
  var overlay = document.getElementById('overlay');
  
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    overlay.style.display = 'none';
  } else {
    menu.classList.add('open');
    overlay.style.display = 'block';
  }
});







gsap.to("#main", {
  backgroundColor: "#ffffff",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});








function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle card reveal animations
function handleCardReveal() {
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach((card) => {
      if (isInViewport(card)) {
          card.classList.add('reveal');
      }
  });
}

// Event listener for scrolling
window.addEventListener('scroll', handleCardReveal);

// Initial reveal check when the page loads
handleCardReveal();




$(document).ready(function(){
  $('.country-icons').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      },
      {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});







const productCards = document.querySelectorAll('.product-card');

function checkScroll() {
    productCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 150) {
            card.classList.add('reveal');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Initial check









/* Team Members */

const teamMembers = document.querySelectorAll('.team-member');

function revealOnHover() {
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'translateY(-10px)';
        });

        member.addEventListener('mouseleave', () => {
            member.style.transform = 'translateY(0)';
        });
    });
}

revealOnHover();

/* Team Members */









