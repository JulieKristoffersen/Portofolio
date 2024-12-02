import { setupHamburgerMenu } from './ui/hamburger-menu.js';

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

setupHamburgerMenu(hamburger, navLinks);