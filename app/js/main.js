const $image = document.querySelectorAll('.art')
const $detail = document.querySelector('#detail')
const $bigImage = document.querySelector('#big-image')
const $overlay = document.querySelector('.overlay')

for(let i = 0; i < $image.length; i++) {
  $image[i].addEventListener('mouseover', function(event) {
    event.target.classList.add('image-hover')
  })
  $image[i].addEventListener('mouseleave', function(event) {
    event.target.classList.remove('image-hover')
  })
}
