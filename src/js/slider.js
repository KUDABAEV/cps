
function initSlider() {
    new Swiper('.brands__slider', {
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



export { initSlider }