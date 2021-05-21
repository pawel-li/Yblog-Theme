function debounce(func, wait = 2, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};




function checkSlide(e){


  const headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
  const slideInAt = window.scrollY + headerHeight * 0.4;
  console.log(window.scrollY);
  const makeAnimation = slideInAt > headerHeight;
  const header = document.querySelectorAll('.header-text')[0];

  let style = 'opacity:'+(1-window.scrollY*0.005)+'; transform:translateY('+window.scrollY*0.4+'px);';
  console.log(style);
  header.setAttribute("style", style);
  if(makeAnimation){
  }else{
    header.classList.remove("active");
  }
}

window.addEventListener('scroll', debounce(checkSlide));


//QUOTES script

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // 4s
}
//DROPDOWN MENU ON PHONE
