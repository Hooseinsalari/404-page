const showMenu = document.querySelector('#nav-toggle');
const closeMenu = document.querySelector('#nav-close');
const menu = document.querySelector('#nav-menu');
const menuItems = document.querySelectorAll('.nav__item');

showMenu.addEventListener('click', () => {
    menu.classList.add('active')
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active')
})

menuItems.forEach((e) => e.addEventListener('click', () => {
    menu.classList.remove('active')
}))
console.log(menuItems)

// ============= scrollreveal ===============
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})

sr.reveal('.home__data', {origin: 'top', delay: 400})
sr.reveal('.home__image', {origin: 'bottom', delay: 600})
sr.reveal('.home__footer', {origin: 'bottom', delay: 800})