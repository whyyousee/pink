$(document).ready(function () {

	$('.js-slick').slick({
	  arrows: false,
	  dots: true,
	  slidesToShow: 1,
	  swipe: false,
	  variableHeight: true,
	  infinite: true
	});

	$(function() {
	  	// Owl Carousel
	  	var owl = $(".owl-carousel");
	  	owl.owlCarousel({
		    items:1.4,
		    // margin: 10, 
		    autoWidth: true,
		    startPosition: 1,
		    center:true,
		    dots: true,
		   	mouseDrag: false,
        	touchDrag: false,
		    nav: false
	 	});
	});

});
