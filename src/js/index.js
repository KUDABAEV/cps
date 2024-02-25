import '../scss/index.scss'
import { initSliderBrands } from './sliders.js'
import { initSliderTypes } from './typesSlider.js'
import { initSpoler } from './spoler.js'
import { debounce } from './utils.js'
import { initNavigation } from './navigation.js'
import { initSliderServices } from './servicesSlider.js'

function init() {
  initSliderBrands()
  initSliderTypes()
  initSliderServices()
  initSpoler()
  initNavigation()
}

init()
window.addEventListener('resize', debounce(init))
