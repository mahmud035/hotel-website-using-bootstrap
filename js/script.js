'use strict';

// Header Scroll
let nav = document.querySelector('.navbar');
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add('header-scrolled');
  } else {
    nav.classList.remove('header-scrolled');
  }
};

// Nav Hide

// Swiper Slider
var swiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3500,
  },
});

// Counter Design

// Our Partners
