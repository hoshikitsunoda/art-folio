const $image = document.querySelectorAll('.art')
const $gallery = document.querySelectorAll('.gallery')
const $painting = document.querySelectorAll('.painting')
const $drawing = document.querySelectorAll('.drawing')
const $digital = document.querySelectorAll('.digital')
const $detail = document.querySelector('#detail')
const $bigImage = document.querySelector('#big-image')
const $overlay = document.querySelector('.overlay')
const $description = document.querySelector('#art-description')

for(let i =0; i < $image.length; i++) {
  $image[i].setAttribute('src', artData[i].url)
}

for(let i =0; i < $painting.length; i++) {
  $painting[i].setAttribute('src', paintingData[i].url)
}

for(let i =0; i < $drawing.length; i++) {
  $drawing[i].setAttribute('src', drawingData[i].url)
}

for(let i =0; i < $digital.length; i++) {
  $digital[i].setAttribute('src', digitalWorkData[i].url)
}

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
    const imgSource = event.target.getAttribute('src')
    $bigImage.setAttribute('src', imgSource)
  })
  image.addEventListener('click', function(event) {
    const imgId = event.target.getAttribute('id')
    artData.filter(art => {
      if(art.id === imgId) {
        $description.textContent = art.title + ', ' + art.year
      }
    })
  })
})

$gallery.forEach(image => {
  image.addEventListener('click', function() {
    $detail.classList.remove('hidden')
  })
  image.addEventListener('click', function(event) {
    const imgSource = event.target.getAttribute('src')
    $bigImage.setAttribute('src', imgSource)
  })
})

$overlay.addEventListener('click', function(event) {
  $detail.classList.add('hidden')
})
