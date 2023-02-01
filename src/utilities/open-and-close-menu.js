console.log('Hello, world')

const buttonOpenMenu = document.querySelector('.header__menu--open');
const menu = document.querySelector('.header__menu__container');
const buttonCloseMenu = document.querySelector('.header__menu--close');

function openAndCloseMenu() {
    menu.classList.toggle('active');
}

buttonOpenMenu.addEventListener('click', openAndCloseMenu);
buttonCloseMenu.addEventListener('click', openAndCloseMenu);