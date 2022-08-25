
import {addBurger} from "./modules/burger.js";
import {changeText} from "./modules/banner.js";
import {Slider} from "./modules/slider.js";
import Swiper, {Navigation, Pagination} from 'swiper';
import { dropdown } from './modules/dropdown.js';
window.onload = (function() {
    if (document.querySelector('.questions-list')){
        document.querySelector('.questions-list').addEventListener('mousedown',dropdown);
    }
    let slider = new Slider();
    addBurger();
    changeText();
    window.addEventListener('resize', addBurger);
    window.addEventListener('resize', changeText);
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
})();


