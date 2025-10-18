const menuToggle = document.getElementById('menu-toggle');
const navbarRight = document.getElementById('navbar-right');

menuToggle.addEventListener('click', () => {
  navbarRight.classList.toggle('active');
});
