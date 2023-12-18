document.addEventListener('DOMContentLoaded', () => {
  // const basicSliderWrap = document.querySelector('.basic-slider__wrap');
  // const basicSliderImgs = document.querySelectorAll('.basic-slider__img');
  const basicSliderImg = document.querySelector('.basic-slider__img');
  const langSwitch = document.querySelector('.header__lang-switcher')
  const allLangs = ['en', 'ua', 'sp'];

  const images = [
    // 'images/basic-slider/basic_slider-0.jpg',
    'images/basic-slider/basic_slider-1.jpg',
    'images/basic-slider/basic_slider-2.jpg'
  ];

  let activeIndex = 0;
  /* SLider Start */
  function sliderImgAnim() {

    basicSliderImg.src = images[activeIndex];
    activeIndex++;

    if (activeIndex == 2) {
      activeIndex = 0;
    }

  }
  setInterval(sliderImgAnim, 5500)
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
    // console.log(hash);

    if (!allLangs.includes.hash) {
      location.href = `${window.location.pathname}#en`;
      // location.reload();
    }
    langSwitch.value = hash;
  }
  changeLang()
  /* Lang Switcher End */


})

/* function changeImage() {
    basicSliderImgs[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % basicSliderImgs.length;
    basicSliderImgs[activeIndex].classList.add('active');
  }
  
  setInterval(changeImage, 3000); */