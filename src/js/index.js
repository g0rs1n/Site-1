import mobileNav from './modules/mobile-nav.js';
mobileNav();

import Swiper from './modules/swiper-section-2.js';
Swiper();

// import Tabs from './modules/tabs.js';
// Tabs();


// const items = Array.from(document.querySelectorAll(".item"));
    
// items.forEach((item) => {
//     item.addEventListener("click", itemHandler);
// })

// function itemHandler(e) {
//     e.preventDefault();
//     let currentItem = e.target.closest(".item");
//     let currentContent = e.target.nextElementSibling;
//     currentItem.classList.toggle("active");
//     if (currentItem.classList.contains("active")) {
//         currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
//     } else {
//         currentContent.style.maxHeight = 0;
//     }
// }


// const tabsTitle = document.querySelectorAll('.discover-item');
// const tabsContent = document.querySelectorAll('.discover-cards');

// tabsTitle.forEach(item => item.addEventListener('click', event => {
//     const tabsTitleTarget = event.target.getAttribute('data-tab');
//     tabsTitle.forEach(element => element.classList.remove('active-tab'));
//     tabsContent.forEach(element => element.classList.add('hidden-card-tab'));
//     item.classList.add('active-tab');
//     document.getElementByld(tabsTitleTarget).classList.remove('hidden-card-tab');
// }))

// document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
// document.querySelector('#tab-1').classList.remove('hidden-card-tab');