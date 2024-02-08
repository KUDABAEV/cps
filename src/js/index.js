import { initSlider } from "./slider.js";
import { isMobile } from "./utils.js";

document.addEventListener('resize', resizeHandler);

function resizeHandler() {
    if(isMobile()) {
        initSlider();
    }
}

resizeHandler();