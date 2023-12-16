import mobileNav from './modules/mobile-nav.js';
mobileNav();

import Swiper from './modules/swiper-section-2.js';
Swiper();

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
