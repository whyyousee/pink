$(document).ready(function () {

	$('.js-toggleMenu').click(function() {
    	$('.mobileMenu').slideToggle(300);
    	$(".headerStatic").toggleClass("headerActive");
    	$(".header-menu-mobile").toggleClass("header-menu-close");
  	});

	$('.js-slick-reviews').slick({
	  arrows: false,
	  dots: true,
	  slidesToShow: 1,
	  variableHeight: true,
	  infinite: true
	});

	$('.js-slick-prices').slick({
	  arrows: false,
	  dots: true,
	  slidesToShow: 1,
	  variableHeight: true,
	  infinite: false,
	  centerMode: true,
	  initialSlide: 1
	});

});
