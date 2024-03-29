import Swiper, { Navigation } from "swiper";
export const createDocumentsSlider = () => {
    const swiper = new Swiper('.documents', {
        modules: [Navigation],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
            760: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1140: {
                spaceBetween: 30,
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};
