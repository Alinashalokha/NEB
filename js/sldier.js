const swiper = new Swiper('.period-swiper', {
  loop: true,

  slidesPerView: 3,

  spaceBetween: 0,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.obr-swiper', {
  slidesPerView: 4,
  spaceBetween: 0,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});