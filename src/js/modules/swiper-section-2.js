import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 3.3,
    spaceBetween: 24,
    breakpoints: {
        350:{
            slidesPerView: 1.1,
            spaceBetween: 10,
        },
        370:{
            slidesPerView: 1.2,
            spaceBetween: 16,
        },
        400:{
            slidesPerView: 1.3,
            spaceBetween: 16,
        },
        430:{
            slidesPerView: 1.4,
            spaceBetween: 16,
        },
        470:{
            slidesPerView: 1.5,
            spaceBetween: 16,
        },
        534:{
            slidesPerView: 1.5,
            spaceBetween: 25,
        },
        620:{
            slidesPerView: 1.6,
            spaceBetween: 25,
        },
        685:{
            slidesPerView: 1.7,
            spaceBetween: 25,
        },
        725:{
            slidesPerView: 1.8,
            spaceBetween: 25,
        },
        760:{
            slidesPerView: 1.9,
            spaceBetween: 25,
        },
        800:{
            slidesPerView: 2,
            spaceBetween: 25,
        },
        825:{
            slidesPerView: 2.1,
            spaceBetween: 25,
        },
        885:{
            slidesPerView: 2.2,
            spaceBetween: 25,
        },
        935:{
            slidesPerView: 2.3,
            spaceBetween: 25,
        },
        985:{
            slidesPerView: 2.4,
            spaceBetween: 25,
        },
        1010:{
            slidesPerView: 2.5,
            spaceBetween: 25,
        },
        1050:{
            slidesPerView: 2.6,
            spaceBetween: 25,
        },
        1090:{
            slidesPerView: 2.7,
            spaceBetween: 25,
        },
        1150:{
            slidesPerView: 2.8,
            spaceBetween: 25,
        },
        1175:{
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1215:{
            slidesPerView: 3.1,
            spaceBetween: 25,
        },
        1250:{
            slidesPerView: 3.2,
            spaceBetween: 25,
        },
        1300:{
            slidesPerView: 3.3,
            spaceBetween: 25,
        }
    },
});

export default Swiper;   