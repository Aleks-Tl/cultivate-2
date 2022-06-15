import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('header').classList.add('backgroundWhite');
  } else {
    document.querySelector('header').classList.remove('backgroundWhite');
  }
}

// Swiper for home page

const swiper = new Swiper(".members__slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});


const swiperTeacher = new Swiper(".teacher__slider", {
  //loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  //centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});


const sliderTecher = document.querySelector('.teacher__slider');


if (sliderTecher.querySelectorAll('.swiper-slide').length <= 4) {
  sliderTecher.querySelector('.swiper-wrapper').style.justifyContent = 'center';
} else {
  sliderTecher.querySelector('.swiper-wrapper').style.justifyContent = 'flex-start';
}





