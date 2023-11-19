import mobileNav from './modules/mobile-nav.js';
mobileNav();

import Swiper from './modules/swiper-section-2.js';
Swiper();

// const accordeon = document.querySelector('.accordeon');
// const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

//     accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
//         accordeonTitle.addEvenListener('click', function() {

//             const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

//             accordeonTitle.classList.toggle('accordeon__title-active');
//             currentText.classList.toggle('accordeon__text-visible');

//             if (currentText.classList.conteins('accordeon__text-visible')) {
//                 currentText.style.maxHeight = currentText.scrollHeight + 'px'
//             } else {
//                 currentText.style.maxHeight = null
//             }
//         })
//     });