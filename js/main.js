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

	$('input[type="tel"]').inputmask({mask: "+7 (999) 999-9999"});


	$.validator.methods.email = function(value, element) {
        return this.optional(element) || /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]+/.test(value);
	};

	$.validator.methods.tel = function(value, element) {
        return this.optional(element) || /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value);
	};

		$('.js-validForm').validate({
		  rules: {
		    userEmail: {
		    email: true,
		    required: true
		    }
		  },
		  messages: {
		    userEmail: {
		    email: "Please enter your email",
		    required: "*"
		    }
		  }
		});

});

