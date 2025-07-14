// Активация гамбургер-меню
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('active');
  });
});
