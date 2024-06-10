var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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