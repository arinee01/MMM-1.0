// === QR-коды для музейного проекта ===
// Единая система ссылок и генерации QR-кодов

/**
 * Генерирует QR-ссылку для артефакта (короткая ссылка для печати)
 * @param {string} artifactId - ID артефакта (например, "AMULET-TURKISH-001")
 * @returns {string} Короткая ссылка вида /qr/[artifactId]
 */
function qrTarget(artifactId) {
  return `/qr/${artifactId}`;
}

/**
 * Генерирует полную QR-ссылку для артефакта (для GitHub Pages)
 * @param {string} artifactId - ID артефакта (например, "AMULET-TURKISH-001")
 * @returns {string} Полная ссылка с доменом
 */
function qrTargetFull(artifactId) {
  const baseUrl = window.location.origin;
  return `${baseUrl}/qr/${artifactId}`;
}

/**
 * Определяет целевую страницу для артефакта
 * @param {string} artifactId - ID артефакта
 * @returns {string} Полная ссылка на страницу артефакта
 */
function getArtifactUrl(artifactId) {
  // Специальные случаи для амулетов, которые идут на magic.html
  const magicAmulets = [
    'AMULET-TURKISH-001',      // Turkish Evil Eye
    'AMULET-ROSE-QUARTZ-001',  // Rose Quartz  
    'AMULET-BLACK-STONE-001'   // Black Stone
  ];
  
  if (magicAmulets.includes(artifactId)) {
    return `/magic.html?id=${artifactId}&src=qr`;
  }
  
  // Все остальные амулеты и артефакты идут на chrono.html
  return `/chrono.html?id=${artifactId}&src=qr`;
}

/**
 * Генерирует QR-код для артефакта
 * @param {string} containerId - ID контейнера для QR-кода
 * @param {string} artifactId - ID артефакта
 * @param {Object} options - Опции для QR-кода
 * @param {boolean} useFullUrl - Использовать полный URL (для GitHub Pages) или короткий
 */
function generateQRCode(containerId, artifactId, options = {}, useFullUrl = true) {
  const defaultOptions = {
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  };
  
  const finalOptions = { ...defaultOptions, ...options };
  const qrUrl = useFullUrl ? qrTargetFull(artifactId) : qrTarget(artifactId);
  
  // Проверяем, что библиотека QRCode доступна
  if (typeof QRCode === 'undefined') {
    console.error('QRCode library not loaded');
    return;
  }
  
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found`);
    return;
  }
  
  // Очищаем контейнер
  container.innerHTML = '';
  
  // Генерируем QR-код
  new QRCode(container, {
    text: qrUrl,
    ...finalOptions
  });
}

/**
 * Получает параметры из URL
 * @returns {Object} Объект с параметрами URL
 */
function getUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    id: urlParams.get('id'),
    artifact: urlParams.get('artifact'), // для обратной совместимости
    src: urlParams.get('src'),
    userType: urlParams.get('userType')
  };
}

/**
 * Обрабатывает параметр ID из URL (поддерживает старый формат artifact)
 * @returns {string|null} ID артефакта
 */
function getArtifactIdFromUrl() {
  const params = getUrlParams();
  return params.id || params.artifact;
}

/**
 * Проверяет, пришел ли пользователь через QR-код
 * @returns {boolean} true, если пользователь пришел через QR
 */
function isFromQR() {
  const params = getUrlParams();
  return params.src === 'qr';
}

/**
 * Логирует аналитику перехода через QR
 * @param {string} artifactId - ID артефакта
 */
function logQRAnalytics(artifactId) {
  if (isFromQR()) {
    console.log(`QR Analytics: User accessed ${artifactId} via QR code`);
    // Здесь можно добавить отправку данных в аналитическую систему
    // Например: analytics.track('qr_access', { artifact: artifactId });
  }
}

// Экспортируем функции для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    qrTarget,
    qrTargetFull,
    getArtifactUrl,
    generateQRCode,
    getUrlParams,
    getArtifactIdFromUrl,
    isFromQR,
    logQRAnalytics
  };
}
