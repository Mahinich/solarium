document.addEventListener('DOMContentLoaded', () => {
  // const basicSliderWrap = document.querySelector('.basic-slider__wrap');
  // const basicSliderImgs = document.querySelectorAll('.basic-slider__img');
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    autoplay: {
      delay: 3000,
    },
    effect: 'fade',
  });

  const basicSliderImg = document.querySelector('.basic-slider__img');
  const langSwitch = document.querySelector('.header__lang-switcher')
  const allLangs = ['en', 'ua'];

  const images = [
    // 'images/basic-slider/basic_slider-0.jpg',
    'images/basic-slider/basic_slider-1.jpg',
    'images/basic-slider/basic_slider-2.jpg'
  ];

  let activeIndex = 0;
  /* SLider Start */
/*   function sliderImgAnim() {

    basicSliderImg.src = images[activeIndex];
    activeIndex++;

    if (activeIndex == 2) {
      activeIndex = 0;
    }

  }
  setInterval(sliderImgAnim, 2500) */
  /* Slider End */

  /* Lang Switcher Start */
  langSwitch.addEventListener('change', changeLangURL);

  function changeLangURL() {
    let lang = langSwitch.value;
    location.href = `${window.location.pathname}#${lang}`
    location.reload();
  }

  function changeLang() {
    let hash = window.location.hash;
    hash = hash.substring(1);

    if (!allLangs.includes(hash)) {
      location.href = `${window.location.pathname}#en`;
      location.reload();
    }
    langSwitch.value = hash;


    for (key in translations) {
      let element = document.querySelector(`.lang-${key}`); 
      element.textContent = translations[key][hash];

      if (key === 'message') {
        element.textContent = '';
      }
      
      if (key == 'name' || key === 'email' || key === 'message') {
        element.placeholder = translations[key][hash];
      }

    }
  }
  changeLang()
  /* Lang Switcher End */

  window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    if (window.scrollY > 1) {
        header.style.position = 'fixed';
        header.style.top = 0 + 'px';
        header.style.left = 0;
        header.style.right = 0;
        header.style.zIndex = 1;
    } else {
        header.style.position = 'relative'; // or your preferred default position
    }
  });

  document.querySelector('.basic-slider')

})