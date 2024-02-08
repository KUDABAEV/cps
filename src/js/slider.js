const brandsSlider = document.querySelector('.slider')

function initSlider() {
    if (brandsSlider) {
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



export { initSlider }