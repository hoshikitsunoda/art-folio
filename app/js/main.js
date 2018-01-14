const $image = document.querySelectorAll('.art')
const $gallery = document.querySelectorAll('.gallery')
const $detail = document.querySelector('#detail')
const $bigImage = document.querySelector('#big-image')
const $overlay = document.querySelector('.overlay')
const $description = document.querySelector('#art-description')

for(let i =0; i < $image.length; i++) {
  $image[i].setAttribute('src', artData[i].url)
}

for(let i =0; i < $gallery.length; i++) {
  console.log(artData[i].url);
  $gallery[i].setAttribute('src', paintingData[i].url)
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

$overlay.addEventListener('click', function(event) {
  $detail.classList.add('hidden')
})
