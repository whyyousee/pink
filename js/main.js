$(document).ready(function () {

	$('.js-slick-reviews').slick({
	  arrows: false,
	  dots: true,
	  slidesToShow: 1,
	  swipe: false,
	  variableHeight: true,
	  infinite: true
	});

	$('.js-slick-prices').slick({
	  arrows: false,
	  dots: true,
	  slidesToShow: 1,
	  swipe: false,
	  variableHeight: true,
	  infinite: false,
	  centerMode: true,
	  initialSlide: 1
	});

});
