
import {addBurger} from "./modules/burger.js";
import {changeText} from "./modules/banner.js";
import {Slider} from "./modules/slider.js";
import Swiper, {Navigation, Pagination} from 'swiper';

    let slider = new Slider(2000);
    addBurger();
    changeText();
    window.addEventListener('resize', addBurger);
    window.addEventListener('resize', changeText);
    const swiper = new Swiper('.swiper', {

        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: true,
        spaceBetween: window.innerWidth < 768 ? 15 : 30,
        slidesPerView: window.innerWidth < 768 ? 1 : 3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


