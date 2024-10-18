const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'none' || navMenu.style.display === '' ? 'block' : 'none';
});
