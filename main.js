window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
showNavOnScroll()
showBackToTopButtonOnScroll()
showmeBackToTopButtonOnScroll()
}

function showNavOnScroll() {  
  if(scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {  
  if(scrollY > 900) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function showmeBackToTopButtonOnScroll() {  
  if(scrollY > 3515) {
    backToTopButton.classList.add('showme')
  } else {
    backToTopButton.classList.remove('showme')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home,
#home img, 
#home .stats,
#services,
#services header,
#services .card`);