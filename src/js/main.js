
import {addBurger} from "./modules/burger.js";
import {changeText} from "./modules/banner.js";
import {setProgress} from "./modules/slider.js";

addBurger();
changeText();
setProgress()
window.onload = () => setInterval(setProgress,200)
window.addEventListener('resize', addBurger);
window.addEventListener('resize', changeText);
