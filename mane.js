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
  

  // це перемикання кнопок зверху у вікні
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
  
     navLinks.forEach(link => {
      if (link.classList.contains("current")) {
        link.classList.add("current"); 
      }
    });
  
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); 
  
         navLinks.forEach(l => l.classList.remove("current"));
  
        link.classList.add("current");
      });
    });
  });

//==================================== кнопка для прокрутки вікна===================

const scrollButton = document.querySelector('.icon-arrow');

function checkScrollPosition() {
    if (window.scrollY > 100) { 
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
}

window.addEventListener('scroll', checkScrollPosition);

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});