$(function() {

	// Custom JS
	 $(document).ready(function(){
	      $('.slick-slider').slick();
	    });
	    $('.services').slick({
	    	  arrows: false,
			  dots: true,
			  dotsClass: 'services-control centered-block',
			  infinite: false,
			  speed: 300,
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  responsive: [
			    {
			      breakpoint: 1920,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 4,
			        infinite: false,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: false,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]
			});

});
