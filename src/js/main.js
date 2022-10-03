
import {addBurger} from "./modules/burger.js";
import {changeText} from "./modules/banner.js";
import {Slider} from "./modules/slider.js";
import {createReviewSlider} from  "./modules/rewiew-slider.js";
import {createDocumentsSlider} from  "./modules/documents-slider.js";
import {dropdown} from "./modules/dropdown.js";
import {createPicker} from "./modules/data-picker.js";
import {createSelector} from "./modules/selector.js";
import {inputsBihevior} from "./modules/inputsBihevior.js";


window.onload = (function() {
    if(document.querySelector('form')) {
        createSelector();
        inputsBihevior();
        createPicker();
    }
    if (document.querySelector('.questions-list')){
        document.querySelector('.questions-list').addEventListener('mousedown',dropdown);
    }
    if(document.querySelector('.documents')){
        createDocumentsSlider();
    }
    
    if(document.querySelector('.slider-section')) {
        let slider = new Slider();
    }
    if(document.querySelector('.review-section')) {
        createReviewSlider();
    }
    addBurger();
    changeText();
    window.addEventListener('resize', addBurger);
    window.addEventListener('resize', changeText);

})();


