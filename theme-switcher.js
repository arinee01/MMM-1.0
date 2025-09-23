// === ЕДИНЫЙ ПЕРЕКЛЮЧАТЕЛЬ ТЕМ ДЛЯ ВСЕХ СТРАНИЦ ===

// Функция установки темы
function setTheme(theme) {
  document.body.classList.remove('theme-1500', 'theme-19c', 'theme-early20c', 'theme-late20c');
  document.body.classList.add(theme);
  localStorage.setItem('museumTheme', theme);
}

// Делаем функцию доступной глобально
window.setTheme = setTheme;

// Инициализация переключателя тем
document.addEventListener('DOMContentLoaded', function() {
  // Создаем иконку переключателя
  const fab = document.createElement('div');
  fab.className = 'theme-fab';
  fab.title = 'Change theme';
  fab.innerHTML = '🎨';
  document.body.appendChild(fab);
  
  // Создаем панель с темами
  const panel = document.createElement('div');
  panel.className = 'theme-panel';
  panel.innerHTML = `
    <div class="theme-panel-title">Choose theme</div>
    <button data-theme="theme-1500">1500–1800</button>
    <button data-theme="theme-19c">XIX Century</button>
    <button data-theme="theme-early20c">Early XX</button>
    <button data-theme="theme-late20c">2035</button>
  `;
  document.body.appendChild(panel);
  
  // Восстанавливаем тему из localStorage
  const saved = localStorage.getItem('museumTheme');
  if (saved) setTheme(saved);
  else setTheme('theme-1500');
  
  // Функция обновления активной кнопки
  function updateActiveBtn() {
    document.querySelectorAll('.theme-panel button').forEach(btn => {
      btn.classList.toggle('active', document.body.classList.contains(btn.dataset.theme));
    });
  }
  updateActiveBtn();
  
  // Обработчики кликов по кнопкам тем
  document.querySelectorAll('.theme-panel button').forEach(btn => {
    btn.onclick = function() {
      setTheme(btn.dataset.theme);
      updateActiveBtn();
    };
  });
  
  // Открытие/закрытие панели
  fab.onclick = function(e) {
    e.stopPropagation();
    panel.classList.toggle('active');
  };
  
  // Закрытие панели при клике вне её
  document.addEventListener('click', function(e) {
    if (!panel.contains(e.target) && e.target !== fab) {
      panel.classList.remove('active');
    }
  });
});

// Функция навигации с сохранением темы
function navigateWithTheme(url) {
  const currentTheme = localStorage.getItem('museumTheme') || 'theme-1500';
  const currentUserType = localStorage.getItem('magicUserType') || 'beginner';
  
  // Сохраняем текущую тему
  localStorage.setItem('museumTheme', currentTheme);
  
  // Добавляем параметр пользователя к URL если это страница magic.html
  if (url.includes('magic.html')) {
    const separator = url.includes('?') ? '&' : '?';
    url += `${separator}userType=${currentUserType}`;
  }
  
  window.location.href = url;
}

// Делаем функцию доступной глобально
window.navigateWithTheme = navigateWithTheme; 