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