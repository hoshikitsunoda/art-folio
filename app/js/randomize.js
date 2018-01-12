const $image = document.querySelectorAll('.art')
const $container = document.querySelector('.contents-container')
const winWidth = $container.offsetWidth
const winHeight = window.innerHeight + 600

$image.forEach(image => {
  const imgWidth = image.offsetWidth
  randomTop = getRandomNumber(0, winHeight)
  randomLeft = getRandomNumber(0, winWidth)
  randomSize = getRandomNumber(120, imgWidth + 50)
  image.style.top = randomTop + "px"
  image.style.left = randomLeft + "px"
  image.style.width = randomSize + "px"
})

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min
}
