var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		900: {
			slidesPerView: 3,
			spaceBetween: 40
		}
	}
});


document.querySelector('.menu').onclick = function (event) {
	if (event.target.nodeName !== 'SPAN') return;
	closeAllSubMenu(event.target.nextElementSibling);
	event.target.nextElementSibling.classList.toggle('active')
};

function closeAllSubMenu(current = null) {
	const subMenu = document.querySelectorAll('.menu .tab-content');
	Array.from(subMenu).forEach(item => {
		if (item != current) item.classList.remove('active');
	});
}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu__list-active');
});






const faq_list = document.querySelectorAll('.faq__info-button');
for (let faqListIndex = 0; faqListIndex < faq_list.length; faqListIndex++) {
	faq_list[faqListIndex].addEventListener('click', () => {
		let faqContent = faq_list[faqListIndex].parentElement.querySelector('.faq__info-text');
		let isFaqContentActive = faqContent.classList.contains('active')
		closeAllFaq();
		if(!isFaqContentActive){
			faqContent.classList.add('active');
		}
	});
}

function closeAllFaq() {
	const faq_list = document.querySelectorAll('.faq__info-text');
	for (let faqListIndex = 0; faqListIndex < faq_list.length; faqListIndex++) {
		faq_list[faqListIndex].classList.remove('active');
	}
}