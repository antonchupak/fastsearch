$( document ).ready(function() {
	$('.top-banner.js-parallax').parallax({imageSrc: 'img/ny-city-bg.jpg'});
	$('.help.js-parallax').parallax({imageSrc: 'img/ny-people-bg.jpg'});

	//owl
	$('.carousel').owlCarousel({
		items: 4,
		margin: 20,
		loop: true,
		pagination: false,
		nav: true,
		navText: ['<div class="arrow is-left"></div>','<div class="arrow is-right"></div>']
	});
});