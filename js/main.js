$(document).ready(function () {

	$('.js-toggleMenu').on('click', () => {
    	$('.mobileMenu').fadeToggle(300);
    	$('.header-menu-mobile').fadeIn(300);
    	$('header').toggleClass('headerActive');
    	$(".header-menu-mobile").toggleClass("header-menu-close");
  	});


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
