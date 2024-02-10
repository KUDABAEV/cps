import { initSliderBrands } from "./sliders.js";
import { initSpoler } from "./spoler.js";


initSliderBrands();
initSpoler();

window.addEventListener('resize', initSliderBrands);

