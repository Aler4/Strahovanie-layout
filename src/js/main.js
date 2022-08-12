
import {addBurger} from "./modules/burger.js";
import {changeText} from "./modules/banner.js";
import {Slider} from "./modules/slider.js";

let slider = new Slider(2000);
addBurger();
changeText();

window.addEventListener('resize', addBurger);
window.addEventListener('resize', changeText);
