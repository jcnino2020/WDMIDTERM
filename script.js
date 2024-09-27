let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let slideContainer = document.querySelector(".slideshow-container");
let direction = 1;

function setupSlideshow() {
  let wrapper = document.createElement('div');
  wrapper.className = 'slides-wrapper';
  
  while(slideContainer.firstChild) {
    wrapper.appendChild(slideContainer.firstChild);
  }
  
  slideContainer.appendChild(wrapper);
}

function showSlides(n) {
  let wrapper = document.querySelector('.slides-wrapper');
  if (n >= slides.length) {
    slideIndex = slides.length - 1;
    direction = -1;
  } else if (n < 0) {
    slideIndex = 0;
    direction = 1;
  } else {
    slideIndex = n;
  }
  
  wrapper.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function plusSlides(n) {
  showSlides(slideIndex + n);
}

function autoSlide() {
  plusSlides(direction);
}

document.addEventListener("DOMContentLoaded", function() {
  setupSlideshow();
  showSlides(slideIndex);
  setInterval(autoSlide, 3000);
});



// Modal
var modals = document.querySelectorAll(".modal");
var btns = document.getElementsByClassName("modal-button");
var spans = document.getElementsByClassName("close");

for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    var modalId = this.getAttribute("data-target");
    var modal = document.querySelector(modalId);
    modal.style.display = "block";
  }
}

for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    var modal = this.parentNode.parentNode;
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  for (var i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
}