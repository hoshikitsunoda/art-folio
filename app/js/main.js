const $image = document.querySelectorAll('img')
const $detail = document.querySelector('#detail')

for(let i = 0; i < $image.length; i++) {
  $image[i].addEventListener('mouseover', function(event) {
    event.target.classList.add('image-hover')
  })
  $image[i].addEventListener('click', function() {
    $detail.classList.add('overlay')
  })
  $image[i].addEventListener('mouseleave', function(event) {
    event.target.classList.remove('image-hover')
  })
}

document.addEventListener('click', function(event) {
  event.target.classList.remove('overlay')
})
