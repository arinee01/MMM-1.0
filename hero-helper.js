// === ВИРТУАЛЬНЫЙ ПОМОЩНИК ===

// Сообщения для каждого героя
const heroMessages = {
  'theme-1500': {
    name: 'Maestro Lorenzo di Firenze',
    role: 'Renaissance Scholar',
    welcome: 'Salve! I am Maestro Lorenzo di Firenze, your guide through the mystical arts of the Renaissance. How may I assist you in your journey through ancient wisdom?',
    responses: [
      'Ah, the ancient texts speak of powerful rituals that connect us to the divine.',
      'The Renaissance was a time when magic and science danced together in harmony.',
      'Let me share with you the secrets of the alchemists and their quest for knowledge.',
      'The stars align in ways that reveal the hidden patterns of the universe.'
    ]
  },
  'theme-19c': {
    name: 'Eleanor Whitmore',
    role: 'Victorian Traveler',
    welcome: 'Good day, dear explorer! I am Eleanor Whitmore, and I have journeyed across continents to uncover the most fascinating magical traditions. What secrets shall we discover together?',
    responses: [
      'During my travels in the Orient, I learned of ancient talismans that protect the wearer.',
      'The Victorian era was a time of great spiritual awakening and exploration.',
      'I have documented rituals from cultures that span the entire globe.',
      'The power of intention and belief can transform the ordinary into the extraordinary.'
    ]
  },
  'theme-early20c': {
    name: 'Petr III',
    role: 'Modernist Artist',
    welcome: 'Привет! I am Petr III, and I see the world through the lens of artistic expression and mystical symbolism. How can I help you understand the magic of the modern age?',
    responses: [
      'Art and magic are inseparable - both seek to reveal the hidden truths of existence.',
      'The early 20th century was a time of breaking boundaries and exploring new possibilities.',
      'Every brushstroke can be a spell, every canvas a portal to another dimension.',
      'The avant-garde movement taught us that reality is more fluid than we imagine.'
    ]
  },
  'theme-late20c': {
    name: 'Maya',
    role: '90s DJ & Researcher',
    welcome: 'Yo! I\'m Maya, and I\'ve been mixing beats and researching the intersection of technology and spirituality since the 90s. What\'s your vibe today?',
    responses: [
      'The digital age has opened up new ways to explore consciousness and magic.',
      'Music is pure energy - it can shift frequencies and alter reality itself.',
      'The internet is like a global consciousness network, connecting us all.',
      'Retro tech has a certain magic that modern devices just can\'t replicate.'
    ]
  }
};

// Создание виртуального помощника
function createHeroHelper() {
  // Создаем кнопку помощника
  const helperBtn = document.createElement('div');
  helperBtn.className = 'hero-helper-btn';
  helperBtn.title = 'Chat with your hero guide';
  helperBtn.innerHTML = '<img src="images/heroes/Maestro Lorenzo di Firenze.png" alt="Hero Helper">';
  
  // Создаем панель чата
  const helperPanel = document.createElement('div');
  helperPanel.className = 'hero-helper-panel';
  helperPanel.innerHTML = `
    <div class="hero-helper-header">
      <img class="hero-helper-avatar" src="images/heroes/Maestro Lorenzo di Firenze.png" alt="Hero">
      <div>
        <h3 class="hero-helper-name">Maestro Lorenzo di Firenze</h3>
        <p class="hero-helper-role">Renaissance Scholar</p>
      </div>
    </div>
    <div class="hero-helper-chat">
      <div class="hero-helper-message">Salve! I am Maestro Lorenzo di Firenze, your guide through the mystical arts of the Renaissance. How may I assist you in your journey through ancient wisdom?</div>
    </div>
    <div class="hero-questions">
      <!-- Кнопки с вопросами будут добавлены динамически -->
    </div>
  `;
  
  // Создаем контейнер
  const helperContainer = document.createElement('div');
  helperContainer.className = 'hero-helper';
  helperContainer.appendChild(helperBtn);
  helperContainer.appendChild(helperPanel);
  
  document.body.appendChild(helperContainer);
  
  // Обработчики событий
  helperBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    helperPanel.classList.toggle('active');
    
    // Проверяем границы экрана при открытии
    if (helperPanel.classList.contains('active')) {
      checkPanelBounds(helperPanel);
    }
  });
  
  // Закрытие при клике вне панели
  document.addEventListener('click', function(e) {
    if (!helperPanel.contains(e.target) && e.target !== helperBtn) {
      helperPanel.classList.remove('active');
    }
  });
  

  
  // Создаем кнопки с вопросами для начальной темы
  setTimeout(() => {
    const currentTheme = document.body.className.match(/theme-\w+/)?.[0] || 'theme-1500';
    createQuestionButtons(currentTheme);
  }, 100);
  
  return helperContainer;
}

// Добавление сообщения пользователя
function addUserMessage(message) {
  const chat = document.querySelector('.hero-helper-chat');
  const userMsg = document.createElement('div');
  userMsg.className = 'hero-helper-message';
  userMsg.style.textAlign = 'right';
  userMsg.style.color = 'var(--gold)';
  userMsg.textContent = message;
  chat.appendChild(userMsg);
  chat.scrollTop = chat.scrollHeight;
}

// Добавление ответа героя
async function addHeroResponse(userMessage = '') {
  const chat = document.querySelector('.hero-helper-chat');
  
  // Получаем текущую тему из body класса
  const currentTheme = document.body.className.match(/theme-\w+/)?.[0] || 'theme-1500';
  
  console.log('Current theme for AI response:', currentTheme);
  console.log('Body classes:', document.body.className);
  
  // Показываем индикатор загрузки
  const loadingMsg = document.createElement('div');
  loadingMsg.className = 'hero-helper-message';
  loadingMsg.innerHTML = '<span class="typing-indicator">...</span>';
  chat.appendChild(loadingMsg);
  chat.scrollTop = chat.scrollHeight;
  
  try {
    // Пытаемся получить AI ответ
    const aiResponse = await getAIResponse(userMessage, currentTheme);
    
    // Убираем индикатор загрузки
    loadingMsg.remove();
    
    // Добавляем AI ответ
    const heroMsg = document.createElement('div');
    heroMsg.className = 'hero-helper-message';
    heroMsg.textContent = aiResponse;
    chat.appendChild(heroMsg);
    
  } catch (error) {
    console.error('AI Error:', error);
    
    // Убираем индикатор загрузки
    loadingMsg.remove();
    
    // Fallback на статические ответы
    const hero = heroMessages[currentTheme];
    const responses = hero.responses;
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    const heroMsg = document.createElement('div');
    heroMsg.className = 'hero-helper-message';
    heroMsg.textContent = randomResponse;
    chat.appendChild(heroMsg);
  }
  
  chat.scrollTop = chat.scrollHeight;
}

// Получение ответа от AI
async function getAIResponse(userMessage, theme) {
  try {
    // Используем локальный AI
    if (window.localAI) {
      const response = window.localAI.generateResponse(theme, userMessage);
      return response;
    }
    
    // Fallback на статические ответы
    throw new Error('Local AI not available');
    
  } catch (error) {
    console.error('AI Error:', error);
    throw error;
  }
}

// Создание кнопок с готовыми вопросами
function createQuestionButtons(theme) {
  const questionsContainer = document.querySelector('.hero-questions');
  if (!questionsContainer || !window.localAI) return;
  
  const questions = window.localAI.questions[theme] || [];
  
  questionsContainer.innerHTML = questions.map(question => 
    `<button class="hero-question-btn" data-question="${question}">${question}</button>`
  ).join('');
  
  // Добавляем обработчики для кнопок
  questionsContainer.querySelectorAll('.hero-question-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const question = this.dataset.question;
      addUserMessage(question);
      setTimeout(() => addHeroResponse(question), 500);
    });
  });
}

// Обновление героя при смене темы
function updateHeroForTheme(theme) {
  console.log('Updating hero for theme:', theme);
  
  const hero = heroMessages[theme];
  if (!hero) {
    console.log('No hero found for theme:', theme);
    return;
  }
  
  const avatar = document.querySelector('.hero-helper-avatar');
  const name = document.querySelector('.hero-helper-name');
  const role = document.querySelector('.hero-helper-role');
  const welcome = document.querySelector('.hero-helper-message');
  const btnImg = document.querySelector('.hero-helper-btn img');
  
  // Обновляем изображение кнопки
  if (btnImg) {
    btnImg.src = `images/heroes/${theme === 'theme-1500' ? 'Maestro Lorenzo di Firenze.png' : 
                                  theme === 'theme-19c' ? 'Eleanor Whitmore.png' : 
                                  theme === 'theme-early20c' ? 'Petr III.png' : 'maya.png'}`;
  }
  
  // Обновляем аватар в панели
  if (avatar) {
    avatar.src = `images/heroes/${theme === 'theme-1500' ? 'Maestro Lorenzo di Firenze.png' : 
                                theme === 'theme-19c' ? 'Eleanor Whitmore.png' : 
                                theme === 'theme-early20c' ? 'Petr III.png' : 'maya.png'}`;
  }
  
  if (name) name.textContent = hero.name;
  if (role) role.textContent = hero.role;
  if (welcome) welcome.textContent = hero.welcome;
  
  // Очищаем чат при смене темы
  const chat = document.querySelector('.hero-helper-chat');
  if (chat) {
    chat.innerHTML = `<div class="hero-helper-message">${hero.welcome}</div>`;
  }
  
  // Создаем кнопки с вопросами для новой темы
  createQuestionButtons(theme);
  
  // Очищаем историю AI для новой темы
  if (window.localAI) {
    window.localAI.clearHistory(theme);
  }
  
  console.log('Hero updated successfully for theme:', theme);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  createHeroHelper();
  
  // Ждем немного, чтобы theme-switcher.js успел инициализироваться
  setTimeout(() => {
    // Получаем текущую тему
    const currentTheme = document.body.className.match(/theme-\w+/)?.[0] || 'theme-1500';
    console.log('Initial theme:', currentTheme);
    updateHeroForTheme(currentTheme);
    
    // Слушаем изменения темы
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          console.log('Body class changed to:', document.body.className);
          const theme = document.body.className.match(/theme-\w+/)?.[0];
          console.log('Extracted theme:', theme);
          if (theme) {
            updateHeroForTheme(theme);
          }
        }
      });
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  }, 100);
});

// Функция для проверки границ экрана и корректировки позиционирования
function checkPanelBounds(panel) {
  const rect = panel.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  
  // Проверяем верхнюю границу
  if (rect.top < 20) {
    panel.style.top = '20px';
    panel.style.bottom = 'auto';
  }
  
  // Проверяем нижнюю границу
  if (rect.bottom > viewportHeight - 20) {
    panel.style.bottom = '100px';
    panel.style.top = 'auto';
  }
  
  // Проверяем левую границу
  if (rect.left < 20) {
    panel.style.left = '20px';
  }
  
  // Проверяем правую границу
  if (rect.right > viewportWidth - 20) {
    panel.style.left = 'auto';
    panel.style.right = '20px';
  }
} 