var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var mobile = window.matchMedia("(max-width: 767px)");
  var tablet = window.matchMedia("(max-width: 959px)");
  var desktop = window.matchMedia("(max-width: 1199px)");
  var larger = window.matchMedia("(min-width: 1200px)");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  function responsive() {
  if (mobile.matches || tablet.matches) {
      slides[slideIndex-1].style.display = "inline-block";  
      dots[slideIndex-1].className += " active";
    } else if (desktop.matches) {
      slides[slideIndex-1].style.display = "inline-block";  
      dots[slideIndex-1].className += " active";
      slides[slideIndex].style.display = "inline-block";  
    } else if (larger.matches) {
      slides[slideIndex-1].style.display = "inline-block";  
      dots[slideIndex-1].className += " active";
      slides[slideIndex].style.display = "inline-block"; 
      slides[slideIndex+1].style.display = "inline-block";
    }
  };
 
  responsive();
}

window.onload = showSlides;