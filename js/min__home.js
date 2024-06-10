var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
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


const showMore = document.querySelector('.btn__show');
const productsLength = document.querySelector('.partners__img').length;
let items = 6;

showMore.addEventListener('click', () => {
  items += 4;
  const array = Array.from(document.querySelector('.partners__container').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is__visible'));

  if (visItems.length === productsLength) {
		showMore.style.display = "none";
	}
});   