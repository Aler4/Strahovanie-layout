// @ts-ignore
import Swiper, { Navigation } from "swiper";
export const createReviewSlider = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            560: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1140: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};
