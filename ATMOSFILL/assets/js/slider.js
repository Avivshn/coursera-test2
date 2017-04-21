
// ===========Down-TAB==============

function openDiv() {
	$('#myDIV').removeClass('animated slideOutDown');
    var y = document.getElementById('newDIV');
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
      	 y.style.display = 'none';
         x.style.display = 'block';
    	 $('#myDIV').addClass('animated slideInUp'); 

    } else {
    	 y.style.display = 'none';
         x.style.display = 'block';
         $('#myDIV').addClass('animated slideInUp'); 
    	 
    }
}


function closeDiv() {
	var y = document.getElementById('newDIV');
    var x = document.getElementById('myDIV');
	$('#myDIV').addClass('animated slideOutDown');

     y.style.display = 'block'
     $('#newDIV').addClass('animated slideInUp');


     var delayMillis = 400; //1 second

   setTimeout(function() {
    $("#myDIV").removeAttr("style").hide();
  }, delayMillis);
     

}


// ===========================================================

		
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
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
   

}

