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

	$.validator.methods.email = function(value, element) {
        return this.optional(element) || /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]+/.test(value);
	};
	$.validator.methods.tel = function(value, element) {
        return this.optional(element) || /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value);
	};
	$('.js-validForm').each(function() {
		var self = $(this);

		self.validate({
			errorPlacement: function(error, element) {
				return false;
			},
			submitHandler: function() {
				alert('Форма отправлена.');
			}
		});
	});

	$('input[type="tel"]').inputmask({mask: "+7 (999) 999-9999"});

});

