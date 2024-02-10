function initSpoler() {
    const elementSpolers = document.querySelectorAll('.spoler');
    
    elementSpolers.forEach(spoler => {
        const btn = spoler.querySelector('.spoler__btn');
        const content = spoler.querySelector('.spoler__content');

        function spolerHandler() {
            content.classList.toggle('hide')
        }

        btn.addEventListener('click', spolerHandler)
    })
}



export { initSpoler };