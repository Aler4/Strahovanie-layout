
import {addBurger} from "./modules/burger.js";
import {changeText} from "./modules/banner.js";


addBurger();
changeText();
window.addEventListener('resize', addBurger);
window.addEventListener('resize', changeText);
