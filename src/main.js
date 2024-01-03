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