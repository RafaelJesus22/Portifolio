// toggle menu 
const toggleMenu = (toggledId, navId) => {
  const toggle = document.getElementById(toggledId);
  nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
      console.log('toggled')
    })
  }
}
toggleMenu('nav-toggle','nav-menu')

// active and remove menu 
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  // active link 
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  // remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll reveal animation 
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

// home 
sr.reveal('.home__title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home__img', { delay: 400 })
sr.reveal('.home__social-icon', { interval: 200 })

// about 
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', { delay: 200 })
sr.reveal('.about__text', { delay: 400 })

// skills 
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', { delay: 200 })
sr.reveal('.skills__data', { inteval: 200 })
sr.reveal('.skills__img', { delay: 400 })

// work
sr.reveal('.work__img', { inteval: 200 })

// contact
sr.reveal('.contact__input', { inteval: 200 })
