$(document).ready(function(){

	// navbar toggle js
	$('.navbar_toggler').click(function(){
		$('body').toggleClass('no_scroll');
		$(this).toggleClass('open_menu');
		$(this).next("nav").toggleClass('navbar_animate');
	});

	// got to page top js
	$(window).on('load scroll',function(){
		var	windowTop = $(window).scrollTop();
		if(windowTop > 600) {
			$('.pagetop').fadeIn();
		} else {
			$('.pagetop').fadeOut();
		}
	});
	$('.pagetop').on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0,
		}, 800);
	});
});

$('.management_slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerMode: true,
	centerPadding: '0',
	prevArrow: '<button class="slick-next slick-arrow" type="button"><img src="images/prev-icon.png" /></button>',
	nextArrow: '<button class="slick-prev slick-arrow" type="button"><img src="images/next-icon.png" /></button>',
});