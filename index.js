// === JS из index.html ===

// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
  const body = document.body;
  
  console.log('DOM загружен, элементы:', {
    mobileMenuToggle: mobileMenuToggle,
    mobileNav: mobileNav,
    mobileNavClose: mobileNavClose
  });
  
  // Открытие мобильного меню
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Открытие мобильного меню');
      
      mobileMenuToggle.classList.add('active');
      mobileNav.classList.add('active');
      body.classList.add('menu-open');
    });
  }
  
  // Закрытие мобильного меню по кнопке
  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Закрытие мобильного меню по кнопке');
      
      closeMobileMenu();
    });
  }
  
  // Закрытие мобильного меню по клику на ссылку
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log('Клик по ссылке мобильного меню');
      closeMobileMenu();
    });
  });
  
  // Закрытие мобильного меню по клику вне меню
  mobileNav.addEventListener('click', function(e) {
    if (e.target === mobileNav) {
      console.log('Клик вне мобильного меню');
      closeMobileMenu();
    }
  });
  
  // Закрытие мобильного меню по Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      console.log('Нажата клавиша Escape');
      closeMobileMenu();
    }
  });
  
  // Функция закрытия мобильного меню
  function closeMobileMenu() {
    mobileMenuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
    body.classList.remove('menu-open');
    console.log('Мобильное меню закрыто');
  }
});

function selectUser(user) {
  const cards = document.querySelectorAll(".user-card");
  const sections = document.querySelectorAll(".user-content");
  
  // Убираем активный класс со всех карточек
  cards.forEach(card => card.classList.remove("active-user"));
  
  // Скрываем все секции контента
  sections.forEach(section => section.style.display = "none");
  
  // Показываем нужную секцию (если она существует)
  const targetSection = document.querySelector(`#${user}-content`);
  if (targetSection) {
    targetSection.style.display = "block";
  }
  
  // Добавляем активный класс к выбранной карточке
  const selectedCard = document.querySelector(`.user-card[data-user="${user}"]`);
  if (selectedCard) {
    selectedCard.classList.add("active-user");
  }
  
  // Сохраняем выбранный уровень в localStorage
  localStorage.setItem('magicUserType', user);
  console.log('Выбран уровень пользователя:', user);
}

function flipCard(card) {
  card.classList.add('flipped');
  setTimeout(() => {
    card.classList.remove('flipped');
  }, 1500);
}

function autoFlipCards() {
  const cards = document.querySelectorAll(".tarot-card");
  cards.forEach((card, index) => {
    setInterval(() => {
      flipCard(card);
    }, 4000 + index * 1000);
  });
}

window.onload = () => {
  // Загружаем сохраненного пользователя или устанавливаем beginner по умолчанию
  const savedUser = localStorage.getItem('magicUserType') || 'beginner';
  selectUser(savedUser);
  autoFlipCards();
};

const userCards = document.querySelectorAll('.user-card');
userCards.forEach(card => {
  card.addEventListener('click', function() {
    const user = card.getAttribute('data-user');
    if (user) {
      localStorage.setItem('magicUserType', user);
      console.log('Уровень пользователя сохранен:', user);
    }
  });
});

// === Тема теперь управляется theme-switcher.js ===

// === Тема теперь управляется theme-switcher.js === 
// === Тема теперь управляется theme-switcher.js === 