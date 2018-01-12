const $detail = document.querySelector('#detail')
const $bigImage = document.querySelector('#big-image')
const $overlay = document.querySelector('.overlay')

$image.forEach(image => {
  image.addEventListener('mouseover', function(event) {
    event.target.classList.add('image-hover')
  })
  image.addEventListener('click', function() {
    $detail.classList.remove('hidden')
  })
  image.addEventListener('mouseleave', function(event) {
    event.target.classList.remove('image-hover')
  })
  image.addEventListener('click', function(event) {
    const a = event.target.getAttribute('src')
    $bigImage.setAttribute('src', a)
  })
})

$overlay.addEventListener('click', function(event) {
  $detail.classList.add('hidden')
})
