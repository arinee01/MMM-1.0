// === MUSEUM MAP JAVASCRIPT ===

// Инициализация мобильного меню
document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.querySelectorAll('.nav-links a');
  const navMenu = document.querySelector('.nav-links');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const body = document.body;
  
  // Добавляем обработчик для бургер-меню
  if (burgerMenu) {
    burgerMenu.addEventListener('click', function() {
      burgerMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      if (overlay) {
        overlay.classList.toggle('active');
      }
      
      // Блокируем скролл при открытом меню
      if (navMenu.classList.contains('active')) {
        body.classList.add('menu-open');
      } else {
        body.classList.remove('menu-open');
      }
    });
  }
  
  // Добавляем обработчики для ссылок навигации
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Закрываем мобильное меню
      burgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
      if (overlay) {
        overlay.classList.remove('active');
      }
      body.classList.remove('menu-open');
    });
  });
  
  // Закрытие меню при клике на оверлей
  if (overlay) {
    overlay.addEventListener('click', function() {
      burgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('menu-open');
    });
  }
  
  // Закрытие меню при нажатии Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      burgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
      if (overlay) {
        overlay.classList.remove('active');
      }
      body.classList.remove('menu-open');
    }
  });
});

let currentFloor = 0;
const totalFloors = 3;
let floors = [];

function updateFloors() {
  floors.forEach((f, i) => f.classList.toggle("hidden", i !== currentFloor));
}

function prevFloor() {
  currentFloor = (currentFloor - 1 + totalFloors) % totalFloors;
  updateFloors();
}

function nextFloor() {
  currentFloor = (currentFloor + 1) % totalFloors;
  updateFloors();
}

// Make functions globally available
window.prevFloor = prevFloor;
window.nextFloor = nextFloor;

// === ARTIFACT DATA ===
const artifacts = [
  { 
    title: "Ægishjálmr (Helm of Awe)", 
    image: "images/objects/aegishjalmr.jpg", 
    era: "Renaissance", 
    location: "Primo Piano",
    identifier: "AEGISH-001",
    culture: "Icelandic",
    type: "Magical Symbol",
    narrativePaths: ["Chronological", "Cross-Cultural"]
  },
  { 
    title: "Bantu Tribal Fetish", 
    image: "images/objects/bantu_fetish.jpg", 
    era: "Modern", 
    location: "Primo Piano",
    identifier: "BANTU-001",
    culture: "African",
    type: "Spiritual Object",
    narrativePaths: ["Chronological", "Cross-Cultural"]
  },
  { 
    title: "Korean Shamanic Knife", 
    image: "images/objects/korean_knife.jpg", 
    era: "Modern", 
    location: "Primo Piano",
    identifier: "KOREAN-001",
    culture: "Korean",
    type: "Ritual Tool",
    narrativePaths: ["Chronological", "Cross-Cultural"]
  },
  { 
    title: "NFT Digital Amulet", 
    image: "images/objects/nft_qr.jpg", 
    era: "Modern", 
    location: "Primo Piano",
    identifier: "NFT-001",
    culture: "Digital",
    type: "Modern Artifact",
    narrativePaths: ["Chronological", "Modern Magic"]
  },
  { 
    title: "Japanese Omamori", 
    image: "images/objects/omamori.jpg", 
    era: "Modern", 
    location: "Primo Piano",
    identifier: "OMAMORI-001",
    culture: "Japanese",
    type: "Protective Charm",
    narrativePaths: ["Chronological", "Cross-Cultural"]
  },
  { 
    title: "Mexican Ojo de Venado", 
    image: "images/objects/ojo_venado.jpg", 
    era: "Renaissance", 
    location: "Secondo Piano",
    identifier: "OJO-001",
    culture: "Nahua-Mexican",
    type: "Protective Amulet",
    narrativePaths: ["Chronological", "Cross-Cultural"]
  },
  { 
    title: "RPG Magic Amulet", 
    image: "images/objects/rpg_amulet.jpg", 
    era: "Modern", 
    location: "Secondo Piano",
    identifier: "RPG-001",
    culture: "Gaming Culture",
    type: "Virtual Artifact",
    narrativePaths: ["Chronological", "Modern Magic"]
  },
  { 
    title: "Slavic Protective Doll", 
    image: "images/objects/slavic_doll.jpg", 
    era: "Medieval", 
    location: "Secondo Piano",
    identifier: "MOTANKA-001",
    culture: "Slavic",
    type: "Protective Doll",
    narrativePaths: ["Chronological", "Cross-Cultural"]
  },
  { 
    title: "St. Benedict Medal", 
    image: "images/objects/st_benedict.jpg", 
    era: "Renaissance", 
    location: "Secondo Piano",
    identifier: "BENEDICT-001",
    culture: "Christian",
    type: "Protective Medal",
    narrativePaths: ["Chronological", "Cross-Cultural"]
  },
  { 
    title: "Egyptian Scarab", 
    image: "images/objects/scarab.jpg", 
    era: "Ancient", 
    location: "Secondo Piano",
    identifier: "SCARAB-001",
    culture: "Ancient Egyptian",
    type: "Protective Symbol",
    narrativePaths: ["Chronological", "Cross-Cultural"]
  },
  { 
    title: "Victorian Crystal Ball", 
    image: "images/amulets/amulet3.webp", 
    era: "Victorian", 
    location: "Secondo Piano",
    identifier: "VICTORIAN-001",
    culture: "British",
    type: "Divination Tool",
    narrativePaths: ["Chronological", "Cross-Cultural"]
  },
  { 
    title: "Art Deco Amulet", 
    image: "images/amulets/amulet1.webp", 
    era: "Art Deco", 
    location: "Primo Piano",
    identifier: "ARTDECO-001",
    culture: "International",
    type: "Decorative Amulet",
    narrativePaths: ["Chronological", "Modern Magic"]
  },
  { 
    title: "Turkish Evil Eye (Nazar)", 
    image: "images/amulets/amulet2.webp", 
    era: "Traditional", 
    location: "Secondo Piano",
    identifier: "AMULET-TURKISH-001",
    culture: "Turkish",
    type: "Protective Amulet",
    narrativePaths: ["Chronological", "Cross-Cultural", "Modern Magic"]
  }
];

function generateQRCode(index, artifact) {
  const qrContainer = document.getElementById(`qr-${index}`);
  const qrLink = document.getElementById(`qr-link-${index}`);
  
  if (!qrContainer || !qrLink) return;
  
  // Generate adaptive QR URL that works on any hosting
  const base = window.location.origin;
  const pathname = window.location.pathname;
  
  // Determine base path for repository
  let basePath = '';
  if (pathname.includes('/MMM-1.0/')) {
    basePath = '/MMM-1.0';
  } else if (pathname.includes('/MMM-main/')) {
    basePath = '/MMM-main';
  }
  
  const url = `${base}${basePath}/qr.html?id=${artifact.identifier}`;
  
  // Update link
  qrLink.textContent = url;
  qrLink.href = url;
  
  // Clear previous QR code completely
  qrContainer.innerHTML = '';
  
  // Add timestamp to force refresh
  const timestamp = Date.now();
  const urlWithTimestamp = `${url}?t=${timestamp}`;
  
  // Generate new QR code
  new QRCode(qrContainer, {
    text: url, // Use clean URL without timestamp for QR code
    width: 120, 
    height: 120,
    colorDark : "#111111",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H // максимальная коррекция
  });
  
  console.log(`Generated QR for ${artifact.identifier}: ${url}`);
}

function showPopup(index) {
  if (typeof artifacts !== 'undefined' && artifacts[index]) {
    const artifact = artifacts[index];
    const content = `
      <h3>${artifact.title}</h3>
      <p style="color: var(--text-soft); margin: 1rem 0;">
        <strong>Location:</strong> ${artifact.location}<br>
        <strong>Era:</strong> ${artifact.era}<br>
        <strong>Identifier:</strong> ${artifact.identifier}
      </p>
      <img src="${artifact.image}" style="max-width:100%; margin-top: 0.5rem;" />
      
      <!-- QR Code Section -->
      <div style="margin-top: 1rem; text-align: center;">
        <h4 style="color: var(--gold); margin-bottom: 0.5rem;">Scan QR Code</h4>
        <div id="qr-${index}" style="margin: 0 auto; width: 120px; height: 120px;"></div>
        <p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--text-soft);">
          Scan to open on your phone
        </p>
        <p style="font-size: 0.8rem; margin-top: 0.3rem; color: var(--text-soft);">
          Or visit: <a href="#" id="qr-link-${index}" style="color: var(--accent);">link</a>
        </p>
        

      </div>
    `;
    document.getElementById("popup-content").innerHTML = content;
    document.getElementById("popup").style.display = "block";
    
    // Generate QR code after popup is shown
    setTimeout(() => {
      generateQRCode(index, artifact);
    }, 100);
  }
}

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', function() {
  // Initialize floors
  floors = [
    document.getElementById("floor-0"),
    document.getElementById("floor-1"),
    document.getElementById("floor-2"),
  ];
  
  updateFloors();
  
  // === DOT CLICK HANDLERS ===
  const dots = document.querySelectorAll('.dot');
  
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const index = dot.dataset.index;
      showPopup(index);
    });
  });
  
  const popupClose = document.getElementById("popup-close");
  if (popupClose) {
    popupClose.onclick = () => {
      document.getElementById("popup").style.display = "none";
    };
  } else {
    console.error('Popup close button not found');
  }
  
  // === MAP DOT THUMBNAILS ===
  document.querySelectorAll('.dot, .map-dot').forEach(dot => {
    dot.addEventListener('mouseenter', function() {
      const effects = document.querySelector('.map-dot-effects');
      if (!effects) return;
      const rect = dot.getBoundingClientRect();
      const parentRect = effects.parentElement.getBoundingClientRect();
      const dotCenterX = rect.left + rect.width / 2 - parentRect.left;
      const dotCenterY = rect.top + rect.height / 2 - parentRect.top;
      const thumbX = dotCenterX + 50;
      const thumbY = dotCenterY - 20;
      const thumb = document.createElement('div');
      thumb.className = 'map-dot-thumb';
      thumb.style.left = thumbX - 35 + 'px';
      thumb.style.top = thumbY - 35 + 'px';
      const imgName = dot.getAttribute('data-img');
      let imgSrc = '';
      if (imgName && imgName.endsWith('.webp')) imgSrc = 'images/amulets/' + imgName;
      else if (imgName) imgSrc = 'images/objects/' + imgName;
      if (imgSrc) {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = '';
        thumb.appendChild(img);
      }
      effects.appendChild(thumb);
    });
    dot.addEventListener('mouseleave', function() {
      const effects = document.querySelector('.map-dot-effects');
      if (effects) effects.innerHTML = '';
    });
  });
  
  // Force refresh all QR codes on page load
  setTimeout(() => {
    if (typeof artifacts !== 'undefined') {
      artifacts.forEach((artifact, index) => {
        generateQRCode(index, artifact);
      });
    }
  }, 100);
  
  // === ТЕМА ТЕПЕРЬ УПРАВЛЯЕТСЯ theme-switcher.js ===
});

// === НАВИГАЦИЯ С СОХРАНЕНИЕМ ТЕМЫ ===
// Функция navigateWithTheme теперь в theme-switcher.js 