const $image = document.querySelectorAll('.art')
const $container = document.querySelector('.contents-container')
const winWidth = $container.offsetWidth
const winHeight = window.innerHeight

$image.forEach(image => {
  randomTop = getRandomNumber(0, winHeight)
  randomLeft = getRandomNumber(0, winWidth)
  image.style.top = randomTop +"px"
  image.style.left = randomLeft +"px"
})

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min
}
