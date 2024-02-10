import { checkMobile } from "./utils.js";

function initSliderBrands() {
    const isMobile = checkMobile()

    const content = document.querySelector('.brands__content')
    const wrapper = document.querySelector('.brands-wrapper')
    const items = document.querySelectorAll('.brands__item-wrap')

    if (isMobile) {
        content.classList.remove('brands__desktop')
        wrapper.classList.remove('brands__list')

        content.classList.add('slider')
        wrapper.classList.add('swiper-wrapper')

        items.forEach(item => {
            item.classList.add('swiper-slide')
        })
    } else {
        content.classList.remove('slider')
        wrapper.classList.remove('swiper-wrapper')

        content.classList.add('brands__desktop')
        wrapper.classList.add('brands__list')

        items.forEach(item => {
            item.classList.remove('swiper-slide')
        })
    }

    if (isMobile) {
        new Swiper('.slider', {
            // Optional parameters
            loop: true,
            slidesPerView: 2,
            spaceBetween: 20,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        });
    }


}



export { initSliderBrands }