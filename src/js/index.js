import '../scss/index.scss'
import { initSliderBrands } from "./sliders.js";
import { initSpoler } from "./spoler.js";
import { debounce } from "./utils.js";
import { addOverlay, initPage, removeOverlay } from './page.js';


function init() {
    initSliderBrands();
    initSpoler();
}

init();
window.addEventListener('resize', debounce(init));

const btn1 = document.querySelector('#b1');
const btn2 = document.querySelector('#b2');


btn1.addEventListener('click', addOverlay)
btn2.addEventListener('click', removeOverlay)
