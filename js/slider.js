new Swiper ('.image-slider',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,

		grabCursor:true,
	},

	keyboard: {
		pageUpDown: true,
	},
	 
	slidesPerView: 3,

	spaceBetween: 80,

	breakpoints: {
		479: {
			slidesPerView: 1,
		},
		991: {
			slidesPerView: 2,
		},
		1192: {
			slidesPerView: 2,
		},
		1440: {
			slidesPerView: 3,
		},
	}
});
