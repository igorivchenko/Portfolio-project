// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
// import 'swiper/css/navigation';

// init Swiper:
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  // Optional parameters
  direction: 'horizontal',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
  },

  slidesPerView: 1,
  spaceBetween: 32,

  //   breakpoints: {
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 32,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 32,
  //     },
  //     1280: {
  //       slidesPerView: 4,
  //       spaceBetween: 32,
  //     },
  //   },

  //   breakpoints: {
  //     640: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     768: {
  //       slidesPerView: 4,
  //       spaceBetween: 40,
  //     },
  //     1024: {
  //       slidesPerView: 5,
  //       spaceBetween: 50,
  //     },
  //   },
});
