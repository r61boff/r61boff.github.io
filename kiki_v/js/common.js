$(function() {
	$('.my-slick__items').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		      }
		    }
		]
	});

	// Custom JS
	$(window).scroll(function(){
		if ($(this).scrollTop() > 135) {
			$('.header').addClass('header--dark');
		} else {
			$('.header').removeClass('header--dark');
		}
	});
	$('.to-top').click(function(){
		$('html, body').animate({scrollTop:0}, 1000);
	});
});
