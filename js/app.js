const hamburger = document.querySelector('.menu');
const navMenu = document.querySelector('.flex-nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navMenu.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});