
import {addBurger} from "./modules/burger.js";
import {changeText} from "./modules/banner.js";
import {Slider} from "./modules/slider.js";
import {createReviewSlider} from  "./modules/rewiew-slider.js";
import {createDocumentsSlider} from  "./modules/documents-slider.js";
import {dropdown} from "./modules/dropdown.js";
import {inpBehavior} from "./modules/input-date.js";
import {createPicker} from "./modules/data-picker.js";

window.onload = (function() {
    if (document.querySelector('.questions-list')){
        document.querySelector('.questions-list').addEventListener('mousedown',dropdown);
    }
    if(document.querySelector('.documents')){
        createDocumentsSlider();
    }
    let slider = new Slider();
    createPicker();
    createReviewSlider();
    addBurger();
    changeText();
    inpBehavior();
    window.addEventListener('resize', addBurger);
    window.addEventListener('resize', changeText);

})();


