;(function($,doc) {

	var $doc = $(document);

	$doc.ready(function() {
		// CODE ...

		// Carousle
		var $mainCarousel = $('.owl-carousel');
		$mainCarousel.owlCarousel({
			items: 1,
			loop: true,
			center: true,
			startPosition: 2,
			autoplay: true,
			autoplayTimeout: 6000,
			smartSpeed: 1000,
			nav: true,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>',
					  '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			responsive : {
			    // breakpoint from 0 up
			    0 : {
			        items: 1,
			    },
			    // breakpoint from 480 up
			    480 : {
			        items: 2,
					center: false,
			    },
			    // breakpoint from 768 up
			    768 : {
			        items: 1,
			    }
			}
		});
	});

})(jQuery, document);