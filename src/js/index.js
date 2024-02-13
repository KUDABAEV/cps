import { initSliderBrands } from "./sliders.js";
import { initSpoler } from "./spoler.js";
import { debounce } from "./utils.js";


function init() {
    initSliderBrands();
    initSpoler();
}

init();
window.addEventListener('resize', debounce(init));
