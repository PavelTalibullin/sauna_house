$(document).ready(function(){
	$('.header-burger').click(function(event) {
		$('.header-burger,.header__container-menu__list').toggleClass('active');
	});
});



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


var isMobile = {
	Android: function () {
		 return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		 return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		 return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		 return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		 return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		 return (
					isMobile.Android()
					|| isMobile.BlackBerry()
					|| isMobile.iOS()
					|| isMobile.Opera()
					|| isMobile.Windows()
					);
	}
};

let body=document.querySelector('body');
if(isMobile.any()){
	body.classList.add('touch');
}else{
	body.classList.add('mouse');
}

