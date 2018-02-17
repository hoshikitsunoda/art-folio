const $navBar = document.querySelector('.navbar-toggle')
const $navBarNav = document.querySelector('.navbar-nav')

$navBar.addEventListener('click', function(event) {
  $navBarNav.classList.toggle('active')
})
