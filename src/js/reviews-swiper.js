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

  breakpoints: {
    1280: {
      slidesPerView: 2,
    },
  },
});
