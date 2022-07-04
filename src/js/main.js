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



// Input mask for credit card

if (document.querySelectorAll('.cc-number-input').length > 0) {
  let ccNumberInput = document.querySelector('.cc-number-input'),
    ccNumberPattern = /^\d{0,16}$/g,
    ccNumberSeparator = " ",
    ccNumberInputOldValue,
    ccNumberInputOldCursor,

    ccExpiryInput = document.querySelector('.cc-expiry-input'),
    ccExpiryPattern = /^\d{0,4}$/g,
    ccExpirySeparator = "/",
    ccExpiryInputOldValue,
    ccExpiryInputOldCursor,

    ccCVCInput = document.querySelector('.cc-cvc-input'),
    ccCVCPattern = /^\d{0,3}$/g,

    mask = (value, limit, separator) => {
      var output = [];
      for (let i = 0; i < value.length; i++) {
        if (i !== 0 && i % limit === 0) {
          output.push(separator);
        }

        output.push(value[i]);
      }

      return output.join("");
    },
    unmask = (value) => value.replace(/[^\d]/g, ''),
    checkSeparator = (position, interval) => Math.floor(position / (interval + 1)),
    ccNumberInputKeyDownHandler = (e) => {
      let el = e.target;
      ccNumberInputOldValue = el.value;
      ccNumberInputOldCursor = el.selectionEnd;
    },
    ccNumberInputInputHandler = (e) => {
      let el = e.target,
        newValue = unmask(el.value),
        newCursorPosition;

      if (newValue.match(ccNumberPattern)) {
        newValue = mask(newValue, 4, ccNumberSeparator);

        newCursorPosition =
          ccNumberInputOldCursor - checkSeparator(ccNumberInputOldCursor, 4) +
          checkSeparator(ccNumberInputOldCursor + (newValue.length - ccNumberInputOldValue.length), 4) +
          (unmask(newValue).length - unmask(ccNumberInputOldValue).length);

        el.value = (newValue !== "") ? newValue : "";
      } else {
        el.value = ccNumberInputOldValue;
        newCursorPosition = ccNumberInputOldCursor;
      }

      el.setSelectionRange(newCursorPosition, newCursorPosition);

      highlightCC(el.value);
    },
    highlightCC = (ccValue) => {
      let ccCardType = '',
        ccCardTypePatterns = {
          amex: /^3/,
          visa: /^4/,
          mastercard: /^5/,
          disc: /^6/,

          genric: /(^1|^2|^7|^8|^9|^0)/,
        };

      for (const cardType in ccCardTypePatterns) {
        if (ccCardTypePatterns[cardType].test(ccValue)) {
          ccCardType = cardType;
          break;
        }
      }

      let activeCC = document.querySelector('.cc-types__img--active'),
        newActiveCC = document.querySelector(`.cc-types__img--${ccCardType}`);

      if (activeCC) activeCC.classList.remove('cc-types__img--active');
      if (newActiveCC) newActiveCC.classList.add('cc-types__img--active');
    },
    ccExpiryInputKeyDownHandler = (e) => {
      let el = e.target;
      ccExpiryInputOldValue = el.value;
      ccExpiryInputOldCursor = el.selectionEnd;
    },
    ccExpiryInputInputHandler = (e) => {
      let el = e.target,
        newValue = el.value;

      newValue = unmask(newValue);
      if (newValue.match(ccExpiryPattern)) {
        newValue = mask(newValue, 2, ccExpirySeparator);
        el.value = newValue;
      } else {
        el.value = ccExpiryInputOldValue;
      }
    };

  ccNumberInput.addEventListener('keydown', ccNumberInputKeyDownHandler);
  ccNumberInput.addEventListener('input', ccNumberInputInputHandler);

  ccExpiryInput.addEventListener('keydown', ccExpiryInputKeyDownHandler);
  ccExpiryInput.addEventListener('input', ccExpiryInputInputHandler);
}



// Open Submenu
if (document.querySelectorAll('.header-profile__prof').length > 0) {
  let userName = document.querySelector('.header-profile__prof'),
    submenu = document.querySelector('.header-profile__list');

  userName.addEventListener('click', () => {
    submenu.classList.toggle('open');
    userName.classList.toggle('open');
  })
}





// Tabs

if (document.querySelectorAll('.tabs__header').length > 0) {
  let tabs = document.querySelectorAll('.tabs__header'),
    tabsItem = document.querySelectorAll('.tabs__item'),
    tabsInfo = document.querySelectorAll('.tabs__info');

  //tabs.addEventListener('click', fTabs);

  for (let i = 0; tabs.length > i; i++) {
    tabs[i].addEventListener('click', fTabs);
  }

  function fTabs(event) {
    if (event.target.className == "tabs__item") {
      //let dataTab = event.target.getAttribute('data-tab');
      let currentDataTab = event.target.dataset.tab;
      //console.log(currentDataTab);
      for (let i = 0; i < tabsItem.length; i++) {
        tabsItem[i].classList.remove('active');
      }
      event.target.classList.add('active');
      for (let i = 0; i < tabsInfo.length; i++) {
        if (currentDataTab == i) {
          tabsInfo[i].classList.add('active');
        } else {
          tabsInfo[i].classList.remove('active');
        }
      }
    }
  }
}

// Accodrion ind recipes

if (document.querySelectorAll('.accordion__list').length > 0) {
  const accordions = document.querySelectorAll('.accordion__list');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {

      const self = e.currentTarget;

      const control = self.querySelector('.accordion__content'),
        icon = self.querySelector('.accordion__icon')

      control.classList.toggle('open');
      icon.classList.toggle('open');
      if (control.classList.contains('open')) {
        control.style.maxHeight = control.scrollHeight + 'px';
      } else {
        control.style.maxHeight = null;
      }
    });
  });
}


// Choices select

if (document.querySelectorAll('.filter__select').length > 0) {

  const defaultSelect = () => {
    const element = document.querySelectorAll('.filter__select');
    element.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        shouldSortItems: false,
      });
    })

  }

  defaultSelect();
}

if (document.querySelectorAll('.teacher__slider').length > 0) {
  if (document.querySelectorAll('.teacher__slider .swiper-slide').length <= 4) {
    document.querySelector('.teacher__slider .swiper-wrapper').style.justifyContent = 'center';
  } else {
    document.querySelector('.teacher__slider .swiper-wrapper').style.justifyContent = 'flex-start';
  }
}



// Filter

if (document.querySelectorAll('.box').length > 0) {
  const filterBox = document.querySelectorAll('.box');
  document.querySelector('.nav-filter').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];
    filterBox.forEach(elem => {
      elem.classList.remove('hide');
      if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
        elem.classList.add('hide')
      }
    })
  });

  const btnContainer = document.querySelector('.nav-list-filter');

  let items = btnContainer.querySelectorAll('li');

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function (e) {
      if (!e.target.classList.contains('active')) {
        items.forEach((elem) => {
          elem.classList.remove('active');
        })
        e.target.classList.add('active');
      } else {
      }
    });
  }
}
