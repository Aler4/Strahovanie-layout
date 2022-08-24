
import {addBurger} from "./modules/burger.js";
import {changeText} from "./modules/banner.js";
import {Slider} from "./modules/slider.js";
import Swiper, {Navigation, Pagination} from 'swiper';
window.onload = (function() {
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
    let drp = document.querySelector('.questions-list');
    drp.addEventListener('click', (e) => {
        if (e.target.classList.contains("question-dropdown")) {
            e.target.closest('.question').classList.toggle('open');
        }
    })
})();


