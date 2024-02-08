import { initSlider } from "./slider.js";
import { isMobile } from "./utils.js";

const content = document.querySelector('.brands__content')
const wrapper = document.querySelector('.brands-wrapper')


function resizeHandler() {
    if (isMobile()) {
        content.classList.add('slider')
        wrapper.classList.add('swiper-wrapper')

        initSlider();
    }
}

resizeHandler();

document.addEventListener('resize', resizeHandler);