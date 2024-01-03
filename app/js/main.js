(() => {
	const headerBurgerBtn = document.querySelector('.header__box-burger')
	const headerNavigation = document.querySelector('.header__nav')
	const headerCloseBtn = document.querySelector('.header__nav-close')

	headerBurgerBtn.addEventListener('click', () => {
		headerNavigation.classList.add('active')
	})

	headerCloseBtn.addEventListener('click', () => {
		headerNavigation.classList.remove('active')
	})
})();
(() => {
	const tabsItems = document.querySelectorAll('.header__nav-item')
	const contentsItems = document.querySelectorAll('.header__nav-link')

	tabsItems.forEach((tab, index) => {
		tab.addEventListener('click', e => {
			contentsItems.forEach(content => {
				content.classList.remove('active')
			})
			tabsItems.forEach(tab => {
				tab.classList.remove('active')
			})
			tabsItems[index].classList.add('active')
			contentsItems[index].classList.add('active')
		})
	})
})();

(() => {
	const linksScroll = document.querySelectorAll('.links__scroll')
	const contentsItems = document.querySelectorAll('.tabs__contents-item')

	tabsItems.forEach((tab, index) => {
		tab.addEventListener('click', e => {
			contentsItems.forEach(content => {
				content.classList.remove('active')
			})
			tabsItems.forEach(tab => {
				tab.classList.remove('active')
			})
			tabsItems[index].classList.add('active')
			contentsItems[index].classList.add('active')
		})
	})
})();

const teamSwiper = new Swiper('.team__swiper', {
	spaceBetween: 70,	
	loop: true,
	autoplay: false,
	autoHeight: false,
	direction: 'horizontal',
	pagination: {
	  el: '.team__swiper-pagination',
	},
  });
  
  const aboutSwiper = new Swiper('.about__swiper', {
	spaceBetween: 30,	
	loop: true,
	autoplay: false,
	autoHeight: false,
	direction: 'horizontal',
	pagination: {
	  el: '.about__swiper-pagination',
	},
	breakpoints: {
		// when window width is >= 320px
		375: {
			slidesPerView: 1,
			spaceBetween: 40,
			slideToClickedSlide: true,
		},
		// when window width is >= 480px
		768: {
			slidesPerView: 4,
			spaceBetween: 40,
			slideToClickedSlide: true,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4,
			spaceBetween: 0,
			slideToClickedSlide: true,
		}
	}
  });

