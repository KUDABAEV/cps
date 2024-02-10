function checkMobile() {
    const width = window.innerWidth;
    if(width < 768 ) {
        return true;
    }else {
        return false;
    }
}


export { checkMobile };