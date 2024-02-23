import '../scss/index.scss'
import { initSliderBrands } from "./sliders.js";
import { initSpoler } from "./spoler.js";
import { debounce } from "./utils.js";
import { initNavigation } from './navigation.js';

function init() {
    initSliderBrands();
    initSpoler();
    initNavigation();
}

init();
window.addEventListener('resize', debounce(init));

