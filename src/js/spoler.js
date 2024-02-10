function initSpoler() {
    const elementSpolers = document.querySelectorAll('.spoler');

    elementSpolers.forEach(spoler => {
        const btn = spoler.querySelector('.spoler__btn');
        const content = spoler.querySelector('.spoler__content');
        let isHidden;

        function spolerHandler() {
            if (isHidden) {
                isHidden = false
                content.classList.add('hide')
                btn.classList.add('hide')
                btn.innerText = 'Показать все'
            } else {
                isHidden = true
                btn.innerText = 'Скрыть'
                content.classList.remove('hide')
                btn.classList.remove('hide')
            }
        }


        btn.addEventListener('click', spolerHandler);
    })
}

export { initSpoler };