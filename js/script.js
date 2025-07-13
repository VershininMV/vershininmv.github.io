// Мобильное меню
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('active');
});

// Плавная прокрутка для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Фиксированная шапка при прокрутке
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
