document.addEventListener('DOMContentLoaded', () => {
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

  const langSwitch = document.querySelector('.header__lang-switcher')
  const allLangs = ['en', 'ua'];

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


  /* Sticky Header Start */
  window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    if (window.scrollY > 1) {
        header.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        box-shadow: inset 0 0 15px 3px rgba(0,0,0,1);
      `
    } else {
        header.style.position = 'relative'; // or your preferred default position
    }
  });

  document.querySelector('.basic-slider')
  /* Sticky Header End */

  /* Hamburger Menu Start */
  const hamburger = document.querySelector('.header__nav-hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    const menuList = document.querySelector('.header__nav-items-list');
    menuList.classList.toggle('hidden');

  })

  /* Hamburger Menu End */

  const gameLinks = document.querySelectorAll('.games__item-link');

  gameLinks.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
    })
  });
})