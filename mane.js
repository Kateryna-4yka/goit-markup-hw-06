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


// ========================свайпер
document.addEventListener("DOMContentLoaded", function () {
    let swiperInstance = null;
  
    function checkSwiper() {
      const teamSwiper = document.querySelector(".team-swiper");
  
      if (window.innerWidth < 1157) {
        if (!swiperInstance) {
          swiperInstance = new Swiper(teamSwiper, {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              768: { slidesPerView: 2 },
            },
          });
        }
      } else {
        if (swiperInstance) {
          swiperInstance.destroy(true, true);
          swiperInstance = null;
        }
      }
    }
  
    checkSwiper();
    window.addEventListener("resize", checkSwiper);
  });
  

  


  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
  
    // Перевіряємо, чи вже є клас "current" на одній з лінок при завантаженні сторінки
    navLinks.forEach(link => {
      if (link.classList.contains("current")) {
        link.classList.add("current"); // Переконуємось, що клас "current" збережений
      }
    });
  
    // Додаємо слухач подій на кожну лінку
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Скасовуємо стандартну поведінку переходу за посиланням
  
        // Видаляємо клас "current" з усіх лінок
        navLinks.forEach(l => l.classList.remove("current"));
  
        // Додаємо клас "current" до натиснутої лінки
        link.classList.add("current");
      });
    });
  });

