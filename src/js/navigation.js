import { addOverlay, removeOverlay } from './page'
import { debounce } from './utils'

const navigation = document.querySelector('.navigation')
const burgerAll = document.querySelectorAll('.burger')

let isNavigationActive = false

export function openNavigation() {
  isNavigationActive = true
  navigation.classList.add('navigation_open')
  addOverlay()
}

export function closeNavigation() {
  isNavigationActive = false
  navigation.classList.remove('navigation_open')
  removeOverlay()
}

export function toggleNavigation() {
  const images = document.querySelectorAll('.burger img')

  if (isNavigationActive) {
    closeNavigation()
    images.forEach((img) => {
      img.src = './img/burger-open.svg'
    })
  } else {
    openNavigation()
    images.forEach((img) => {
      img.src = './img/burger.svg'
    })
  }
}

function updateFloating() {
  const width = window.innerWidth

  if (width < 1120) {
    navigation.classList.add('navigation_floating')
  } else {
    navigation.classList.remove('navigation_floating')
    closeNavigation()
  }
}

export function initNavigation() {
  burgerAll.forEach((item) => {
    item.addEventListener('click', toggleNavigation)
  })

  updateFloating()

  window.addEventListener('resize', debounce(updateFloating))
}
