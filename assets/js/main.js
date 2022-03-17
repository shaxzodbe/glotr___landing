/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: "auto",
    centeredSlides: true,
    
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        992: {
          spaceBetween: 80,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const themeLogo = document.getElementById('logo')
const themeLogoFooter = document.getElementById('logo__footer')
const themeDarkLogoSrc = 'assets/img/glotr-logo-white-last.svg'
const themeWhiteLogoSrc = 'assets/img/glotr-logo.svg'
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const selectedLogo = localStorage.getItem('selected-logo')
const selectedLogoFooter = localStorage.getItem('selected-logo-footer')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

const getCurrentLogo = () => document.body.classList.contains(darkTheme) ? themeLogo.setAttribute("src", themeDarkLogoSrc) : themeLogo.setAttribute("src", themeWhiteLogoSrc)

const getCurrentLogoFooter = () => document.body.classList.contains(darkTheme) ? themeLogoFooter.setAttribute("src", themeDarkLogoSrc) : themeLogoFooter.setAttribute("src", themeWhiteLogoSrc)

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)

  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)

  document.body.classList.contains(darkTheme) ? themeLogo.setAttribute("src", themeDarkLogoSrc) : themeLogo.setAttribute("src", themeWhiteLogoSrc)

  document.body.classList.contains(darkTheme) ? themeLogoFooter.setAttribute("src", themeDarkLogoSrc) : themeLogoFooter.setAttribute("src", themeWhiteLogoSrc)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    document.body.classList.contains(darkTheme) ? themeLogo.setAttribute("src", themeDarkLogoSrc) : themeLogo.setAttribute("src", themeWhiteLogoSrc)
  document.body.classList.contains(darkTheme) ? themeLogoFooter.setAttribute("src", themeDarkLogoSrc) : themeLogoFooter.setAttribute("src", themeWhiteLogoSrc)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    localStorage.setItem('selected-icon', getCurrentLogo())
    localStorage.setItem('selected-icon', getCurrentLogoFooter())
})

/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.accordion__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.accordion__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')
        
        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.accordion__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 900,
  delay: 200,
  // reset: true
})

sr.reveal(`.home__img, .new__container, .footer__container`)
sr.reveal(`.home__data`, {delay: 300})
sr.reveal(`.giving__content, .gift__card`,{interval: 70})
sr.reveal(`.celebrate__data, .message__form, .accordion__container, .footer__img1`,{origin: 'left'})
sr.reveal(`.celebrate__img, .message__img, .footer__img2`,{origin: 'right'})