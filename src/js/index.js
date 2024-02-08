import { initSlider } from "./slider.js";
import { isMobile } from "./utils.js";

const content = document.querySelector('.brands__content')
const wrapper = document.querySelector('.brands-wrapper')
const items = document.querySelectorAll('.item')


function resizeHandler() {
    if (isMobile()) {
        content.classList.remove('brands__desktop')
        wrapper.classList.remove('brands__list')

        content.classList.add('slider')
        wrapper.classList.add('swiper-wrapper')

        items.forEach(item => {
            item.classList.add('swiper-slide')
        })

        initSlider();
    } else {
        content.classList.remove('slider')
        wrapper.classList.remove('swiper-wrapper')

        content.classList.add('brands__desktop')
        wrapper.classList.add('brands__list')
        items.forEach(item => {
            item.classList.remove('swiper-slide')
        })
    }
}

resizeHandler()

