const menuButton = document.querySelector('.burger-icon'); 
const closeButton = document.querySelector('.mobile-menu-close'); 
const menu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', () => {
  menu.classList.add('is-open'); 
  document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
    menu.classList.remove('is-open'); 
    document.body.style.overflow = ''; 
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
  });

  menu.addEventListener('click', (event) => {
    if (event.target === menu) {
        menu.classList.remove('is-open');
        document.body.style.overflow = '';}
});

  let touchStartX = 0;

menu.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

menu.addEventListener('touchend', (e) => {
  let touchEndX = e.changedTouches[0].clientX;
  if (touchStartX - touchEndX > 50) {menu.classList.remove('open');
  }
});


const sendButton = document.querySelector('.button'); 
const closeBtn = document.querySelector('.modal-close-batton'); 
const form = document.querySelector('.modal-window');


sendButton.addEventListener('click', () => {
    form.classList.add('is-open'); 
    document.body.style.overflow = 'hidden';
});
  
closeBtn.addEventListener('click', () => {
    form.classList.remove('is-open'); 
    document.body.style.overflow = '';
});

form.addEventListener('click', (event) => {
    if (event.target === form) {
        form.classList.remove('is-open');
        document.body.style.overflow = '';}
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && form.classList.contains('is-open')) {
        form.classList.remove('is-open');
        document.body.style.overflow = '';    
    }
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        document.body.style.overflow = '';    
    }
});