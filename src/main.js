'use strict';

// When you scroll below the header page, it apply dark styling.
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
if(window.scrollY > headerHeight ) {
    header.classList.add('header--dark');
} else {
    header.classList.remove('header--dark');
}
});

// When you scroll below the home section, it becomes transparent.
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
home.style.opacity = 1 - window.scrollY / homeHeight;
});

// // When you scoll below the Arrow up button, it becomes transparent.
const arrowUp = document.querySelector('.arrow_up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    }
    else {
        arrowUp.style.opacity = 0;
    }
    });

//Navbar toggle click button.
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

//When you click the navbar, the munu going to be close automatically.
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
});