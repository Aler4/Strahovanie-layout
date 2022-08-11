
import {addBurger} from "./modules/burger.js";
import {changeText} from "./modules/banner.js";
import {Slider} from "./modules/slider.js";

addBurger();
changeText();
// let slider = new Slider(2000);
// window.onresize = () => {
//     slider.BackToInitState();
// };
window.addEventListener('resize', addBurger);
window.addEventListener('resize', changeText);
