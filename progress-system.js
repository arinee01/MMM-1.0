// === СИСТЕМА ПРОГРЕССА И ДОСТИЖЕНИЙ ===
// 
// ИСПРАВЛЕННАЯ ЛОГИКА ПРОГРЕССА:
// 🔰 СТАРТ:
// - При первом заходе: 0 монет, 0/100 сосуда знаний
// - Тема по умолчанию (theme-1500) ставится автоматически и НЕ даёт монет
// 
// 🪙 СИСТЕМА МОНЕТ:
// - Вехи в путях: +8 монет каждые 4 значимых действия в пути
// - Завершение пути: +50 монет один раз за каждый путь
// - Новые темы: +8 монет за ПЕРВОЕ ручное открытие каждой новой темы через панель
//   (theme-19c, theme-early20c, theme-late20c). Базовая тема theme-1500 никогда
//   не даёт монеты, чтобы при первом входе не было автобонуса.
// - Виртуальный помощник: +8 монет за каждый НОВЫЙ вопрос/тип взаимодействия
//   (монета начисляется только один раз на уникальный вопрос)
//
// 🏺 СОСУД ЗНАНИЙ:
// - До 40% прогресса — за завершённые пути
//   (доля завершённых путей от общего количества * 40)
// - До 60% прогресса — за заработанные монеты
//   (coins * 0.4, но не больше 60)
// - Итоговое значение ограничено 100 (maxVesselCapacity)
// 
// 🛤️ ТРЕБОВАНИЯ ДЛЯ ЗАВЕРШЕНИЯ ПУТЕЙ:
// - Chrono: 12 действий
// - Magic: 15 действий
// - Cross-cultural: 10 действий
// - Museum Map: 8 действий
// 
// ✅ ОСОБЕННОСТИ СИСТЕМЫ:
// - Нет скрытых стартовых бонусов — пользователь всегда начинает с 0
// - Монеты за темы не начисляются автоматически при загрузке страницы
// - Каждая награда даётся либо за чёткие вехи пути, либо за первое реальное действие пользователя
// - Прогресс сосуда знаний растёт постепенно и логично, сочетая монеты и завершённые пути

class ProgressSystem {
  constructor() {
    this.progress = this.loadProgress();
    this.initializeProgress();
    this.createProgressUI();
    this.setupEventListeners();
  }

  // Загрузка прогресса из localStorage
  loadProgress() {
    const saved = localStorage.getItem('museumProgress');
    if (saved) {
      return JSON.parse(saved);
    } else {
      // Первое посещение - стартуем с нулевого баланса
      return {
        coins: 0,
        vesselProgress: 0,
        maxVesselCapacity: 100,
        exploredPaths: {
          chrono: false,
          magic: false,
          crosscultural: false,
          museumMap: false
        },
        pathProgress: {
          chrono: 0,
          magic: 0,
          crosscultural: 0,
          museumMap: 0
        },
        exploredThemes: {},
        exploredQuestions: {},
        achievements: [],
        totalActions: 0,
        certificateEarned: false,
        userName: ''
      };
    }
  }

  // Сохранение прогресса в localStorage
  saveProgress() {
    localStorage.setItem('museumProgress', JSON.stringify(this.progress));
  }

  // Инициализация прогресса для текущей страницы
  initializeProgress() {
    const currentPath = this.getCurrentPath();
    if (currentPath && !this.progress.pathProgress[currentPath]) {
      this.progress.pathProgress[currentPath] = 0;
    }
    
    // Принудительно обновляем сосуд знаний при инициализации
    this.updateVesselProgress();
    
    console.log('Progress System Initialized:', {
      currentPath,
      totalActions: this.progress.totalActions,
      vesselProgress: this.progress.vesselProgress,
      exploredPaths: this.progress.exploredPaths
    });
  }

  // Определение текущего пути
  getCurrentPath() {
    const path = window.location.pathname;
    if (path.includes('chrono')) return 'chrono';
    if (path.includes('magic')) return 'magic';
    if (path.includes('crosscultural')) return 'crosscultural';
    if (path.includes('museum-map')) return 'museumMap';
    return null;
  }

  // Создание UI для отображения прогресса
  createProgressUI() {
    // Создаем контейнер прогресса
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    progressContainer.innerHTML = `
      <div class="progress-header">
        <div class="progress-title">🏛️ Museum Progress</div>
        <div class="progress-close">×</div>
      </div>
      <div class="progress-content">
        <div class="progress-section">
          <div class="progress-label">💰 Coins Earned</div>
          <div class="progress-value coins-display">${this.progress.coins}</div>
        </div>
        <div class="progress-section">
          <div class="progress-label">🏺 Knowledge Vessel</div>
          <div class="vessel-container">
            <div class="vessel-fill" style="height: ${(this.progress.vesselProgress / this.progress.maxVesselCapacity) * 100}%"></div>
            <div class="vessel-text">${this.progress.vesselProgress}/${this.progress.maxVesselCapacity}</div>
          </div>
        </div>
        <div class="progress-section">
          <div class="progress-label">Explored Paths</div>
          <div class="paths-grid">
            ${Object.entries(this.progress.exploredPaths).map(([path, explored]) => `
              <div class="path-item ${explored ? 'explored' : ''}" data-path="${path}">
                <span class="path-icon"></span>
                <div class="path-name">${path}</div>
                <div class="path-status">${explored ? 'Explored' : 'Not Explored'}</div>
              </div>
            `).join('')}
          </div>
        </div>
        ${this.progress.certificateEarned ? `
        <div class="progress-section">
          <div class="progress-label">🎭 Certificate</div>
          <div class="certificate-info">
            <p>✅ Certificate earned!</p>
            <p>Name: ${this.progress.userName}</p>
            <button class="btn-view-certificate" onclick="window.progressSystem.showCertificate('${this.progress.userName}')">👁️ View</button>
          </div>
        </div>
        ` : ''}
        <div class="progress-section">
          <div class="progress-label">🧪 Debug Tools</div>
          <button class="debug-btn" onclick="window.progressSystem.testProgress()">Test Progress</button>
          <button class="btn-generate-certificate" onclick="window.progressSystem.showCertificateModal()">🎭 Get Certificate</button>
          <button class="debug-btn" onclick="window.progressSystem.resetProgress()">Reset Progress</button>
        </div>
      </div>
    `;

    // Создаем кнопку прогресса
    const progressBtn = document.createElement('div');
    progressBtn.className = 'progress-btn';
    progressBtn.title = 'Your coins and progress';
    progressBtn.innerHTML = `
      <div class="progress-btn-icon">🏛️</div>
      <div class="progress-btn-coins">${this.progress.coins}</div>
    `;

    // Добавляем на страницу
    document.body.appendChild(progressContainer);
    document.body.appendChild(progressBtn);

    // Обработчики событий
    progressBtn.addEventListener('click', () => this.toggleProgressPanel());
    progressContainer.querySelector('.progress-close').addEventListener('click', () => this.toggleProgressPanel());
  }

  // Переключение панели прогресса
  toggleProgressPanel() {
    const container = document.querySelector('.progress-container');
    container.classList.toggle('active');
  }

  // Начисление монет
  addCoins(amount, reason = '') {
    this.progress.coins += amount;
    this.progress.totalActions++;
    
    console.log('Coins added:', {
      amount,
      reason,
      totalCoins: this.progress.coins,
      totalActions: this.progress.totalActions
    });
    
    // Обновляем отображение
    this.updateCoinsDisplay();
    
    // Показываем уведомление
    this.showNotification(`+${amount} coins earned! ${reason}`);
    
    // Обновляем сосуд знаний при каждом действии
    this.updateVesselProgress();
    
    // Сохраняем прогресс
    this.saveProgress();
    
    // Проверяем достижения
    this.checkAchievements();
  }
  
  // Система начисления монет:
  // - За вехи в путях: 8 монет каждые 4 действия
  // - За завершение пути: 50 монет
  // - За новую тему: 8 монет (только при первом открытии)
  // - За исследование темы: 8 монет (только при первом посещении)
  // - За новые вопросы: 8 монет (только при первом использовании)

  // Проверка достижений
  checkAchievements() {
    // Достижение за первую монету
    if (this.progress.coins === 1 && !this.progress.achievements.some(a => a.title === '💰 First coin earned!')) {
      this.addAchievement('💰 First coin earned!', 'Earned your first coin!');
    }
    
    // Достижение за 10 монет
    if (this.progress.coins >= 10 && !this.progress.achievements.some(a => a.title === '💰 Coin collector!')) {
      this.addAchievement('💰 Coin collector!', 'Collected 10 coins!');
    }
    
    // Достижение за 50 монет
    if (this.progress.coins >= 50 && !this.progress.achievements.some(a => a.title === '💰 Wealthy explorer!')) {
      this.addAchievement('💰 Wealthy explorer!', 'Collected 50 coins!');
    }
    
    // Достижение за первое действие
    if (this.progress.totalActions === 1 && !this.progress.achievements.some(a => a.title === '🎯 First step taken!')) {
      this.addAchievement('🎯 First step taken!', 'Took your first action!');
    }
    
    // Достижение за 10 действий
    if (this.progress.totalActions >= 10 && !this.progress.achievements.some(a => a.title === '🎯 Active explorer!')) {
      this.addAchievement('🎯 Active explorer!', 'Took 10 actions!');
    }
  }

  // Обновление прогресса пути
  updatePathProgress(path, action) {
    if (!this.progress.pathProgress[path]) {
      this.progress.pathProgress[path] = 0;
    }
    
    this.progress.pathProgress[path]++;
    
    console.log('Path Progress Update:', {
      path,
      action,
      currentProgress: this.progress.pathProgress[path],
      requiredActions: this.getPathRequiredActions(path)
    });
    
    // Начисляем монеты только за значимые действия (каждые 4-5 действий)
    if (this.progress.pathProgress[path] % 4 === 0) {
      this.addCoins(8, `Milestone in ${path}`); // Уменьшил с 10 до 8
    }
    
    // Проверяем, завершен ли путь
    this.checkPathCompletion(path);
    
    // Обновляем сосуд знаний
    this.updateVesselProgress();
    
    // Сохраняем прогресс
    this.saveProgress();
  }

  // Проверка завершения пути
  checkPathCompletion(path) {
    const pathActions = this.getPathRequiredActions(path);
    const currentProgress = this.progress.pathProgress[path];
    
    if (currentProgress >= pathActions && !this.progress.exploredPaths[path]) {
      this.progress.exploredPaths[path] = true;
      this.addCoins(50, `Path ${path} completed!`);
      this.addAchievement(`Completed ${path} path!`);
      this.showNotification(`🎉 Path ${path} fully explored! +50 coins bonus!`);
      
      // Обновляем UI
      this.updatePathsDisplay();
    }
  }

  // Получение количества необходимых действий для завершения пути
  getPathRequiredActions(path) {
    const requirements = {
      chrono: 12,      // 12 действий для завершения хронологического пути (уменьшил с 15)
      magic: 15,       // 15 действий для завершения пути магии (уменьшил с 20)
      crosscultural: 10, // 10 действий для кросс-культурного пути (уменьшил с 12)
      museumMap: 8     // 8 действий для карты музея (оставил как есть)
    };
    return requirements[path] || 10;
  }

  // Обновление прогресса сосуда знаний
  updateVesselProgress() {
    const totalPaths = Object.keys(this.progress.exploredPaths).length;
    const completedPaths = Object.values(this.progress.exploredPaths).filter(Boolean).length;
    
    // Прогресс сосуда теперь более сбалансирован
    const pathProgress = (completedPaths / totalPaths) * 40; // 40% от путей (увеличил с 30%)
    const coinProgress = Math.min(this.progress.coins * 0.4, 60); // 60% от монет (уменьшил с 70%)
    
    this.progress.vesselProgress = Math.min(
      this.progress.maxVesselCapacity,
      Math.round(pathProgress + coinProgress)
    );
    
    console.log('Vessel Progress Update:', {
      completedPaths,
      totalPaths,
      pathProgress: Math.round(pathProgress),
      coinProgress: Math.round(coinProgress),
      totalProgress: this.progress.vesselProgress
    });
    
    // Обновляем отображение сосуда
    this.updateVesselDisplay();
    
    // Проверяем, заполнился ли сосуд полностью
    if (this.progress.vesselProgress >= this.progress.maxVesselCapacity && !this.progress.certificateEarned) {
      this.showCertificateModal();
    }
  }

  // Добавление достижения
  addAchievement(achievement, description = '') {
    const achievementObj = {
      title: achievement,
      description: description || achievement
    };
    
    this.progress.achievements.push(achievementObj);
    if (this.progress.achievements.length > 10) {
      this.progress.achievements.shift(); // Оставляем только последние 10
    }
    
    // Обновляем отображение достижений
    this.updateAchievementsDisplay();
    
    console.log('Achievement added:', achievementObj);
  }

  // Обновление отображения монет
  updateCoinsDisplay() {
    const coinsDisplay = document.querySelector('.coins-display');
    const progressBtnCoins = document.querySelector('.progress-btn-coins');
    
    if (coinsDisplay) coinsDisplay.textContent = this.progress.coins;
    if (progressBtnCoins) progressBtnCoins.textContent = this.progress.coins;
  }

  // Обновление отображения сосуда
  updateVesselDisplay() {
    const vesselFill = document.querySelector('.vessel-fill');
    const vesselText = document.querySelector('.vessel-text');
    
    if (vesselFill) {
      vesselFill.style.height = `${(this.progress.vesselProgress / this.progress.maxVesselCapacity) * 100}%`;
    }
    if (vesselText) {
      vesselText.textContent = `${this.progress.vesselProgress}/${this.progress.maxVesselCapacity}`;
    }
  }

  // Обновление отображения путей
  updatePathsDisplay() {
    const pathItems = document.querySelectorAll('.path-item');
    pathItems.forEach(item => {
      const path = item.dataset.path;
      if (this.progress.exploredPaths[path]) {
        item.classList.add('explored');
        item.querySelector('.path-status').textContent = 'Explored';
      }
    });
  }

  // Обновление отображения достижений
  updateAchievementsDisplay() {
    const achievementsList = document.querySelector('.achievements-list');
    if (achievementsList) {
      achievementsList.innerHTML = this.progress.achievements.slice(-3).map(achievement => {
        if (typeof achievement === 'string') {
          return `<div class="achievement-item">${achievement}</div>`;
        } else {
          return `<div class="achievement-item">
            <span class="achievement-icon">${achievement.title.split(' ')[0]}</span>
            <div class="achievement-info">
              <div class="achievement-title">${achievement.title}</div>
              <div class="achievement-description">${achievement.description}</div>
            </div>
          </div>`;
        }
      }).join('');
    }
  }

  // Показ уведомления
  showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'progress-notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Анимация появления
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Автоматическое скрытие
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Настройка слушателей событий для отслеживания действий
  setupEventListeners() {
    // Флаг, чтобы не начислять монеты за автоматическую установку темы при первом заходе
    this.initialThemeApplied = false;
    // Отслеживаем клики по кнопкам
    document.addEventListener('click', (e) => {
      const target = e.target;
      
      // Кнопки навигации
      if (target.matches('.nav-btn, .arrow-button, .path-btn')) {
        this.updatePathProgress(this.getCurrentPath(), 'navigation');
      }
      
      // Кнопки тем (монеты только при первом открытии КАЖДОЙ новой темы, кроме базовой 1500)
      if (target.matches('.theme-panel button')) {
        const themeId = target.dataset.theme; // например, "theme-1500", "theme-19c"
        const themeKey = 'theme_' + (themeId || target.textContent.toLowerCase().replace(/[^a-z0-9]/g, ''));
        if (!this.progress.exploredThemes) this.progress.exploredThemes = {};
        if (!this.progress.exploredThemes[themeKey]) {
          // Помечаем тему как исследованную
          this.progress.exploredThemes[themeKey] = true;

          // Награда за ПЕРВОЕ открытие новых тем (19c, early20c, late20c),
          // но не за базовую тему theme-1500, чтобы при первом входе не было бонуса
          if (themeId && themeId !== 'theme-1500') {
            this.addCoins(8, 'New theme discovered');
          }

          this.saveProgress();
          
        }
      }
      
      // Кнопки амулетов
      if (target.matches('.amulet-card, .amulet-tab')) {
        this.updatePathProgress(this.getCurrentPath(), 'amulet_interaction');
      }
      
      // Карты таро
      if (target.matches('.tarot-card, .tarot-toggle-btn')) {
        this.updatePathProgress(this.getCurrentPath(), 'tarot_interaction');
      }
      
      // Взаимодействие с виртуальным помощником (монеты только за первые вопросы)
      if (target.matches('.hero-question-btn, .hero-helper-input')) {
        const questionKey = 'question_' + (target.textContent || 'input').toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 10);
        if (!this.progress.exploredQuestions) this.progress.exploredQuestions = {};
        if (!this.progress.exploredQuestions[questionKey]) {
          this.progress.exploredQuestions[questionKey] = true;
          this.addCoins(8, 'New question explored'); // Уменьшил с 15 до 8
        }
      }
      
      // Артефакты в хронологическом пути
      if (target.matches('.artifact-item, .text-controls button')) {
        this.updatePathProgress('chrono', 'artifact_interaction');
      }
    });

    // Отслеживаем изменения темы
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const theme = document.body.className.match(/theme-\w+/)?.[0];
          if (theme) {
            // Первый вызов — это автоматическая установка темы при загрузке, его не считаем как исследование
            if (!this.initialThemeApplied) {
              this.initialThemeApplied = true;
              return;
            }

            // Отслеживаем посещённые темы, но больше не начисляем за это монеты,
            // чтобы не было автоприбавки при загрузке страницы
            const themeKey = 'visited_' + theme;
            if (!this.progress.exploredThemes) this.progress.exploredThemes = {};
            if (!this.progress.exploredThemes[themeKey]) {
              this.progress.exploredThemes[themeKey] = true;
              this.saveProgress();
            }
          }
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  // Получение статистики прогресса
  getProgressStats() {
    return {
      totalCoins: this.progress.coins,
      vesselPercentage: (this.progress.vesselProgress / this.progress.maxVesselCapacity) * 100,
      exploredPaths: Object.values(this.progress.exploredPaths).filter(Boolean).length,
      totalPaths: Object.keys(this.progress.exploredPaths).length,
      totalActions: this.progress.totalActions
    };
  }

  // Сброс прогресса (для тестирования)
  resetProgress() {
    this.progress = {
      coins: 0,
      vesselProgress: 0,
      maxVesselCapacity: 100,
      exploredPaths: {
        chrono: false,
        magic: false,
        crosscultural: false,
        museumMap: false
      },
      pathProgress: {
        chrono: 0,
        magic: 0,
        crosscultural: 0,
        museumMap: 0
      },
      exploredThemes: {},
      exploredQuestions: {},
      achievements: [],
      totalActions: 0,
      certificateEarned: false,
      userName: ''
    };
    
    this.saveProgress();
    this.updateCoinsDisplay();
    this.updateVesselDisplay();
    this.updatePathsDisplay();
    this.updateAchievementsDisplay();
  }

  // Тестирование прогресса (для отладки)
  testProgress() {
    console.log('Testing Progress System...');
    
    // Добавляем тестовые монеты
    this.addCoins(25, 'Test milestone');
    
    // Обновляем прогресс пути несколько раз
    for (let i = 0; i < 6; i++) {
      this.updatePathProgress('chrono', 'test_action');
    }
    
    // Показываем текущую статистику
    const stats = this.getProgressStats();
    console.log('Current Progress Stats:', stats);
    
    // Обновляем сосуд знаний
    this.updateVesselProgress();
    
    alert(`Progress Test Complete!\nCoins: ${this.progress.coins}\nVessel: ${this.progress.vesselProgress}/100\nActions: ${this.progress.totalActions}\n\nUpdated system: More balanced coin distribution and vessel filling!`);
  }
  
  // Показ модального окна сертификата
  showCertificateModal() {
    console.log('Opening certificate modal...');
    
    const modal = document.createElement('div');
    modal.className = 'certificate-modal';
    modal.innerHTML = `
      <div class="certificate-content">
        <div class="certificate-header">
          <h2>🎉 Congratulations! 🎉</h2>
          <p>You have successfully completed the online exhibition!</p>
        </div>
        <div class="certificate-form">
          <label for="userName">Enter your name for the certificate:</label>
          <input type="text" id="userName" name="userName" placeholder="Your name" maxlength="50" autocomplete="off">
          <div class="certificate-buttons">
            <button class="btn-generate" id="generateBtn">Generate Certificate</button>
            <button class="btn-close" id="closeBtn">Close</button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Фокус на поле ввода с задержкой
    setTimeout(() => {
      const input = modal.querySelector('#userName');
      if (input) {
        input.focus();
        input.select();
        console.log('Input focused and selected');
        
        // Добавляем обработчики событий для отладки
        input.addEventListener('input', (e) => {
          console.log('Input value changed:', e.target.value);
        });
        
        input.addEventListener('focus', () => {
          console.log('Input focused');
        });
        
        input.addEventListener('blur', () => {
          console.log('Input blurred');
        });
        
        input.addEventListener('click', () => {
          console.log('Input clicked');
        });
        
      } else {
        console.error('Input not found');
      }
    }, 200);
    
    // Добавляем обработчики для кнопок
    setTimeout(() => {
      const generateBtn = modal.querySelector('#generateBtn');
      const closeBtn = modal.querySelector('#closeBtn');
      
      if (generateBtn) {
        generateBtn.addEventListener('click', (e) => {
          console.log('Generate button clicked');
          e.preventDefault();
          this.generateCertificate();
        });
        
        generateBtn.addEventListener('mouseenter', () => {
          console.log('Generate button hovered');
        });
        
        console.log('Generate button event listeners added');
      } else {
        console.error('Generate button not found');
      }
      
      if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
          console.log('Close button clicked');
          e.preventDefault();
          this.closeCertificateModal();
        });
        
        console.log('Close button event listeners added');
      } else {
        console.error('Close button event listeners added');
      }
    }, 300);
    
    console.log('Certificate modal opened');
  }
  
  // Закрытие модального окна сертификата
  closeCertificateModal() {
    const modal = document.querySelector('.certificate-modal');
    if (modal) {
      modal.remove();
    }
  }
  
  // Генерация сертификата
  generateCertificate() {
    console.log('generateCertificate called');
    
    const userNameInput = document.getElementById('userName');
    if (!userNameInput) {
      console.error('userName input not found');
      return;
    }
    
    const userName = userNameInput.value.trim();
    console.log('User name:', userName);
    
    if (!userName) {
      alert('Please enter your name!');
      return;
    }
    
    // Сохраняем имя пользователя
    this.progress.userName = userName;
    this.progress.certificateEarned = true;
    this.saveProgress();
    
    console.log('Progress saved, closing modal...');
    
    // Закрываем модальное окно
    this.closeCertificateModal();
    
    // Показываем сертификат
    this.showCertificate(userName);
    
    // Добавляем достижение
    this.addAchievement('Master Explorer', 'Certificate of completion earned!');
    
    console.log('Certificate generated for:', userName);
    
    // Показываем уведомление об успехе
    this.showNotification('🎉 Certificate generated successfully!');
  }
  
  // Показ сертификата
  showCertificate(userName) {
    const certificate = document.createElement('div');
    certificate.className = 'certificate-display';
    certificate.innerHTML = `
      <div class="certificate-paper">
        <div class="certificate-border">
          <div class="certificate-header">
            <h1>CERTIFICATE</h1>
            <h2>OF COMPLETION</h2>
          </div>
          <div class="certificate-body">
            <p>This is to certify that</p>
            <div class="user-name">${userName}</div>
            <p>has successfully completed the online exhibition "Mysticism & Magic", exploring all exhibits and themes with dedication and curiosity.</p>
            <div class="certificate-stats">
              <p>Coins Earned: ${this.progress.coins}</p>
              <p>Paths Explored: ${Object.values(this.progress.exploredPaths).filter(Boolean).length}/${Object.keys(this.progress.exploredPaths).length}</p>
              <p>Date: ${new Date().toLocaleDateString('en-US')}</p>
            </div>
          </div>
          <div class="certificate-footer">
            <p>Congratulations on your successful completion!</p>
          </div>
        </div>
      </div>
      <div class="certificate-controls">
        <div class="certificate-hint">
          <p>Tip: Right-click on the certificate and "Save image as..." for manual download</p>
        </div>
        <button class="btn-download" onclick="window.progressSystem.downloadCertificate()">Download</button>
        <button class="btn-close" onclick="window.progressSystem.closeCertificate()">Close</button>
      </div>
    `;
    
    document.body.appendChild(certificate);
  }
  
  // Закрытие сертификата
  closeCertificate() {
    const certificate = document.querySelector('.certificate-display');
    if (certificate) {
      certificate.remove();
    }
  }
  
  // Скачивание сертификата
  downloadCertificate() {
    console.log('Downloading certificate...');
    
    // Создаем временный элемент для рендеринга сертификата
    const tempContainer = document.createElement('div');
    tempContainer.className = 'certificate-download-container';
    tempContainer.style.cssText = `
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: 1200px;
      height: 800px;
      background: #000;
      z-index: -1;
      overflow: hidden;
    `;
    
    // Копируем содержимое сертификата
    const certificateContent = document.querySelector('.certificate-paper').cloneNode(true);
    tempContainer.appendChild(certificateContent);
    document.body.appendChild(tempContainer);
    
    // Используем html2canvas для создания изображения
    if (typeof html2canvas !== 'undefined') {
      html2canvas(tempContainer, {
        backgroundColor: '#000',
        scale: 2,
        width: 1200,
        height: 800,
        useCORS: true,
        allowTaint: true
      }).then(canvas => {
        // Создаем ссылку для скачивания
        const link = document.createElement('a');
        link.download = `certificate_${this.progress.userName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.png`;
        link.href = canvas.toDataURL('image/png');
        
        // Автоматически скачиваем файл
        link.click();
        
        // Очищаем временные элементы
        document.body.removeChild(tempContainer);
        
        // Показываем уведомление об успехе
        this.showNotification('Certificate downloaded successfully!');
        
        console.log('Certificate downloaded as PNG');
      }).catch(error => {
        console.error('Error generating certificate image:', error);
        this.showNotification('❌ Error downloading certificate');
        document.body.removeChild(tempContainer);
      });
    } else {
      // Fallback: если html2canvas не доступен, предлагаем альтернативу
      this.showNotification('📱 Right-click on certificate and "Save image as..."');
      document.body.removeChild(tempContainer);
    }
  }
}

// Создаем глобальный экземпляр системы прогресса
window.progressSystem = new ProgressSystem(); 
