jQuery(document).ready(function($) {
	// Questions accordion
	$('.question h4').click(function() {
		if ( !$(this).closest('.question').hasClass('opened') ) {
			$(this).closest('.question').addClass('opened');
		} else {
			$(this).closest('.question').removeClass('opened');
		}
	})

	// Scroll to second block
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// Open block when scroll to it
	$('.what-happens').click(function() {
		$('#what-happens').addClass('opened')
	});
});

$(document).ready(function() {
    $('.has-photo a').lightBox();
});