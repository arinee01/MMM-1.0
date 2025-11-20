// === JS из chrono.html ===

// Инициализация мобильного меню
document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.querySelectorAll('.nav-links a');
  const navMenu = document.querySelector('.nav-links');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const body = document.body;

  // Добавляем обработчик для бургер-меню
  if (burgerMenu) {
    burgerMenu.addEventListener('click', function () {
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
    link.addEventListener('click', function (e) {
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
    overlay.addEventListener('click', function () {
      burgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('menu-open');
    });
  }

  // Закрытие меню при нажатии Escape
  document.addEventListener('keydown', function (e) {
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

// Тематические тексты для intro-text
const themeTexts = {
  'theme-1500': {
    introText: "Follow the evolution of magical beliefs — from ancient Egypt to modern technology."
  },
  'theme-19c': {
    introText: "Journey through the mystical traditions — from ancient civilizations to contemporary spirituality."
  },
  'theme-early20c': {
    introText: "Explore the magical evolution — from ancient wisdom to modern interpretations."
  },
  'theme-late20c': {
    introText: "Navigate through digital magic — from ancient artifacts to modern technology."
  }
};

const artifacts = [
  {
    // Dublin Core Metadata
    title: "Egyptian Scarab Amulet",
    creator: "Ancient Egyptian Artisans",
    date: "2000 BCE",
    type: "Protective Amulet",
    format: "Faience",
    identifier: "SCARAB-001",

    // CIDOC-CRM Metadata
    period: "Middle Kingdom",
    culture: "Ancient Egyptian",
    origin: "Egypt",
    material: "Faience, Stone",
    technique: "Carved, Inscribed",
    function: "Protection, Rebirth",
    context: "Funerary",

    // Narrative Path Classification
    narrativePaths: ["Chronological", "Cross-Cultural"],

    // Display Properties
    image: "../images/objects/scarab.jpg",
    audio: "../audio/scarab.mp3",
    background: "../images/backgrounds/bg_scarab.webp",
    era: "ancient",
    eraPeriod: "Ancient Egypt (2000 BCE)",
    eraDescription: "Mysticism and Symbolism of the Ancient World",

    // Three-tier Content System
    texts: {
      brief: "Long ago, in the land of golden sand and mighty pyramids, Egyptian children would find beetle-shaped charms placed in tombs and treasure boxes. These were magical scarabs! They believed the scarab could roll the sun through the sky and help people be reborn like the morning light.",
      medium: "Did you know the scarab beetle was like a superhero in ancient Egypt? People thought it had magical powers to protect the soul after death. Scarabs were carved with special symbols and placed with mummies to help them in the afterlife. One fun fact: the beetle was linked to a sun god named Khepri, who was believed to roll the sun across the sky every day!",
      long: "The scarab (Scarabaeus sacer) holds significant importance in the spiritual and cultural life of ancient Egypt. Frequently used in funerary contexts during the Middle Kingdom, these amulets symbolized the cosmic cycle of rebirth. The scarab was linked to the solar deity Khepri, associated with dawn and transformation. Many of these artifacts were crafted in faience and inscribed with prayers, names, or spells to assist the soul in its journey through the Duat (underworld). Archaeological findings show that scarabs were traded across regions, indicating their wide cultural influence beyond Egypt."
    }
  },
  {
    // Dublin Core Metadata
    title: "Slavic Protective Doll (Motanka)",
    creator: "Slavic Folk Artisans",
    date: "1000 CE",
    type: "Protective Doll",
    format: "Textile",
    identifier: "MOTANKA-001",

    // CIDOC-CRM Metadata
    period: "Medieval",
    culture: "Slavic",
    origin: "Eastern Europe",
    material: "Cloth, Thread, Natural Materials",
    technique: "Hand-sewn, Knotted",
    function: "Protection, Fertility",
    context: "Domestic, Ritual",

    // Narrative Path Classification
    narrativePaths: ["Chronological", "Cross-Cultural"],

    // Display Properties
    image: "../images/objects/slavic_doll.jpg",
    audio: "../audio/slavic.mp3",
    background: "../images/backgrounds/slavic.webp",
    era: "medieval",
    eraPeriod: "Medieval Europe (1000 CE)",
    eraDescription: "Folk Magic and Protective Traditions",

    // Three-tier Content System
    texts: {
      brief: "In an old Slavic village, grandmothers would make dolls from cloth with no faces. They told children that if a doll had a face, a spirit might sneak inside! So, these faceless dolls became special guardians, protecting families from bad dreams and scary things.",
      medium: "This doll, called a 'motanka,' wasn't just a toy—it was a magical charm! Women would tie it with colorful threads and fill it with good wishes for health and happiness. The doll had no face because people believed this kept evil spirits away. Fun fact: motanki were often given to brides or babies for protection and luck.",
      long: "Motanki dolls are deeply embedded in Slavic folk practice, particularly in Eastern European cultures. These hand-made figures were constructed without needles, using natural materials and symbolic knots. Ethnographic studies show that their use spanned birth rituals, seasonal celebrations, and domestic life. Scholars interpret the absence of facial features as both a protective measure and a reflection of spiritual anonymity. The motanka embodies a fusion of matrilineal heritage, apotropaic belief, and ritual performance."
    }
  },
  {
    // Dublin Core Metadata
    title: "Mexican Ojo de Venado",
    creator: "Nahua Indigenous Artisans",
    date: "1600 CE",
    type: "Protective Amulet",
    format: "Seed, Thread",
    identifier: "OJO-001",

    // CIDOC-CRM Metadata
    period: "Colonial",
    culture: "Nahua-Mexican",
    origin: "Mesoamerica",
    material: "Mucuna pruriens seed, Red yarn",
    technique: "Strung, Woven",
    function: "Protection, Evil Eye",
    context: "Personal, Domestic",

    // Narrative Path Classification
    narrativePaths: ["Chronological", "Cross-Cultural"],

    // Display Properties
    image: "../images/objects/ojo_venado.jpg",
    audio: "../audio/mexico.mp3",
    background: "../images/backgrounds/ojo_venado.webp",
    era: "renaissance",
    eraPeriod: "Renaissance Era (1600 CE)",
    eraDescription: "Mysticism and Symbolism of the Renaissance Era",

    // Three-tier Content System
    texts: {
      brief: "A long time ago in Mexico, children wore bracelets with a little brown bean and red thread. It was called the 'deer's eye' and it could protect you from bad looks! They said it could sense jealousy and bounce it away like magic.",
      medium: "The 'ojo de venado' is made from a seed that looks like an eye—called the deer's eye. It's worn by children and even adults to protect from the evil eye, a belief shared across many cultures. The bright red thread is said to confuse bad energy and keep you safe! This charm is still popular in Mexico today.",
      long: "The 'ojo de venado' is a syncretic folk object combining indigenous Nahua traditions and Catholic protective practices. Anthropological surveys in rural Mexico document its widespread use among families as a tool of spiritual hygiene. Typically composed of the Mucuna pruriens seed and red yarn, the amulet operates within the framework of mal de ojo (evil eye) belief. Recent studies in ethnobotany also point to the symbolic properties of the seed, linking it to fertility and vitality."
    }
  },
  {
    // Dublin Core Metadata
    title: "Ægishjálmr (Helm of Awe)",
    creator: "Icelandic Folk Magicians",
    date: "1700 CE",
    type: "Magical Symbol",
    format: "Manuscript, Carved",
    identifier: "AEGISH-001",

    // CIDOC-CRM Metadata
    period: "Early Modern",
    culture: "Icelandic",
    origin: "Iceland",
    material: "Parchment, Wood, Metal",
    technique: "Drawn, Carved, Inscribed",
    function: "Protection, Intimidation",
    context: "Magical, Martial",

    // Narrative Path Classification
    narrativePaths: ["Chronological", "Cross-Cultural"],

    // Display Properties
    image: "../images/objects/aegishjalmr.jpg",
    audio: "../audio/helm.mp3",
    background: "../images/backgrounds/aegishjalmr.webp",
    era: "renaissance",
    eraPeriod: "Renaissance Era (1700 CE)",
    eraDescription: "Mysticism and Symbolism of the Renaissance Era",

    // Three-tier Content System
    texts: {
      brief: "Long ago, Norse warriors painted mysterious symbols on their helmets. They believed these shapes gave them the strength of giants and scared away their enemies! The most famous one was the Helm of Awe—it looked like a snowflake with power inside.",
      medium: "The Helm of Awe, or Ægishjálmr, is a magical symbol from Norse mythology. It was drawn or worn by warriors to feel brave and protected. People believed it gave the wearer the power to strike fear in enemies. Fun fact: it appears in ancient spellbooks called grimoires!",
      long: "Ægishjálmr is an Icelandic magical stave with symmetrical radial arms, often interpreted as a mental and magical defense mechanism. It appears in texts like the Galdrabók, a 17th-century grimoire that documents Icelandic folk magic. The symbol may not be Viking in origin but reflects post-medieval magical synthesis. Psychological interpretations link it to empowerment through symbolic visualization, while scholars trace its form to solar and directional motifs."
    }
  },
  {
    // Dublin Core Metadata
    title: "St. Benedict Medal",
    creator: "Benedictine Monks",
    date: "1800 CE",
    type: "Protective Medal",
    format: "Metal",
    identifier: "BENEDICT-001",

    // CIDOC-CRM Metadata
    period: "Early Modern",
    culture: "Christian",
    origin: "Europe",
    material: "Silver, Bronze",
    technique: "Stamped, Inscribed",
    function: "Protection, Exorcism",
    context: "Religious, Personal",

    // Narrative Path Classification
    narrativePaths: ["Chronological", "Cross-Cultural"],

    // Display Properties
    image: "../images/objects/st_benedict.jpg",
    audio: "../audio/benedict.mp3",
    background: "../images/backgrounds/st_benedict.webp",
    era: "renaissance",
    eraPeriod: "Renaissance Era (1800 CE)",
    eraDescription: "Mysticism and Symbolism of the Renaissance Era",

    // Three-tier Content System
    texts: {
      brief: "Imagine a shiny coin with secret letters and a kind monk's picture. That's the St. Benedict Medal! People wore it to stay safe, like having a guardian angel in their pocket to chase away scary things.",
      medium: "This medal shows Saint Benedict and has Latin letters that stand for powerful prayers. People keep it at home or wear it to feel protected from harm. Fun fact: it's also used during blessings to keep away sickness or danger!",
      long: "The St. Benedict Medal encapsulates centuries of Christian symbology, bearing abbreviations of Latin prayers designed to protect against evil. Its inscriptions originate from the Benedictine tradition, emphasizing exorcism and divine protection. The medal is used in sacramental contexts approved by the Catholic Church and has been subject to theological analysis concerning its fusion of text, image, and function in ritual space."
    }
  },
  {
    // Dublin Core Metadata
    title: "Japanese Omamori",
    creator: "Shinto and Buddhist Priests",
    date: "1900 CE",
    type: "Protective Amulet",
    format: "Silk, Paper",
    identifier: "OMAMORI-001",

    // CIDOC-CRM Metadata
    period: "Modern",
    culture: "Japanese",
    origin: "Japan",
    material: "Silk, Paper, Thread",
    technique: "Hand-sewn, Inscribed",
    function: "Protection, Blessing",
    context: "Religious, Personal",

    // Narrative Path Classification
    narrativePaths: ["Chronological", "Cross-Cultural"],

    // Display Properties
    image: "../images/objects/omamori.jpg",
    audio: "../audio/japan.mp3",
    background: "../images/backgrounds/omamori.webp",
    era: "modern",
    eraPeriod: "Modern Era (1900 CE)",
    eraDescription: "Contemporary Spirituality and Digital Age",

    // Three-tier Content System
    texts: {
      brief: "In Japan, kids visit temples and get tiny colorful pouches called omamori. Inside is a secret wish or prayer that helps you do well in school, stay healthy, or be safe on trips. But don't open it—or the magic might disappear!",
      medium: "Omamori are little silk pouches sold at temples. Each one has a special prayer for things like love, safety, or success. They're changed every year to keep their power strong. Did you know there are omamori for pets and cell phones too?",
      long: "Omamori are Japanese amulets rooted in both Shinto and Buddhist traditions. Typically sealed in silk brocade, these objects contain ofuda—written prayers or invocations to specific kami (spirits) or buddhas. Their production and sale support temple economies and spiritual outreach. Ethnographic research reveals their adaptation to modern contexts, including charms for electronics and corporate success. Scholars study them as living examples of syncretic religion and ritual commodification."
    }
  },
  {
    // Dublin Core Metadata
    title: "Bantu Tribal Fetish",
    creator: "Bantu Artisans",
    date: "1950 CE",
    type: "Ritual Object",
    format: "Mixed Media",
    identifier: "BANTU-001",

    // CIDOC-CRM Metadata
    period: "Modern",
    culture: "Bantu",
    origin: "Central Africa",
    material: "Wood, Metal, Feathers, Shells",
    technique: "Carved, Assembled",
    function: "Healing, Justice, Protection",
    context: "Ritual, Community",

    // Narrative Path Classification
    narrativePaths: ["Chronological", "Cross-Cultural"],

    // Display Properties
    image: "../images/objects/bantu_fetish.jpg",
    audio: "../audio/bantu.mp3",
    background: "../images/backgrounds/bantu_fetish.webp",
    era: "modern",
    eraPeriod: "Modern Era (1950 CE)",
    eraDescription: "Contemporary Spirituality and Digital Age",

    // Three-tier Content System
    texts: {
      brief: "Imagine a little wooden statue with feathers and shells. In some African villages, children believed these figures could talk to ancestors and protect people from harm. If you listened closely, maybe you'd hear whispers of ancient magic.",
      medium: "This ritual object, called a fetish, was used by Bantu-speaking peoples in Central Africa. It was believed to carry spirits and was used in healing and justice. Fun fact: some fetishes had nails hammered into them to 'activate' their powers!",
      long: "Bantu fetishes, known as nkisi or minkisi, are ritual artifacts believed to be inhabited by spiritual forces. Constructed from organic and inorganic materials—wood, metal, feathers—they act as containers for power (nkonda). Their function spans healing, dispute resolution, and community protection. Anthropological literature, especially in the Kongo and Luba regions, highlights their role in mediating ancestral relationships and enforcing social contracts through ritual activation."
    }
  },
  {
    // Dublin Core Metadata
    title: "Korean Shamanic Knife",
    creator: "Korean Metalworkers",
    date: "1970 CE",
    type: "Ritual Tool",
    format: "Metal",
    identifier: "KOREAN-001",

    // CIDOC-CRM Metadata
    period: "Modern",
    culture: "Korean",
    origin: "Korea",
    material: "Steel, Brass",
    technique: "Forged, Polished",
    function: "Purification, Spirit Communication",
    context: "Shamanic, Ritual",

    // Narrative Path Classification
    narrativePaths: ["Chronological", "Cross-Cultural"],

    // Display Properties
    image: "../images/objects/korean_knife.jpg",
    audio: "../audio/korean.mp3",
    background: "../images/backgrounds/korean_knife.webp",
    era: "modern",
    eraPeriod: "Modern Era (1970 CE)",
    eraDescription: "Contemporary Spirituality and Digital Age",

    // Three-tier Content System
    texts: {
      brief: "In Korean fairy tales, brave shamans hold shiny knives that cut away bad spirits. They dance and sing while waving the blade like a wand to protect people from darkness.",
      medium: "This ritual knife, called a kal, is used by shamans (mudang) during ceremonies. They wave it in the air to clear away negative energy and call on the spirits. These ceremonies are called 'gut' and include dancing, singing, and offerings!",
      long: "The shamanic knife in Korean gut rituals serves as a symbolic tool of purification and authority. Typically used by female shamans (mudang), it plays a central role in spiritual negotiations, separating illness or misfortune from the afflicted. Ethnographic accounts document its use across regional traditions, linking its function to the cosmological structure of the Korean spirit world and to the performative aspects of ritual embodiment."
    }
  },
  {
    // Dublin Core Metadata
    title: "RPG Magic Amulet",
    creator: "Game Developers",
    date: "2005 CE",
    type: "Digital Artifact",
    format: "Game Asset",
    identifier: "RPG-001",

    // CIDOC-CRM Metadata
    period: "Digital Age",
    culture: "Gaming",
    origin: "Virtual World",
    material: "Digital Data",
    technique: "3D Modeling, Programming",
    function: "Gameplay Enhancement, Immersion",
    context: "Entertainment, Virtual",

    // Narrative Path Classification
    narrativePaths: ["Chronological", "Modern Magic"],

    // Display Properties
    image: "../images/objects/rpg_amulet.jpg",
    audio: "../audio/rdf.mp3",
    background: "../images/backgrounds/rpg_amulet.webp",
    era: "modern",
    eraPeriod: "Modern Era (2005 CE)",
    eraDescription: "Contemporary Spirituality and Digital Age",

    // Three-tier Content System
    texts: {
      brief: "In video games, magic amulets sparkle and glow. When your character wears one, they might jump higher, fight better, or become invisible! It's like a digital treasure full of hidden powers.",
      medium: "Magic amulets in RPG games help characters become stronger or safer. They're based on myths and legends but turned into game rewards. Did you know many of them are inspired by real historical charms?",
      long: "Digital amulets in role-playing games (RPGs) simulate the symbolic function of real-world magical objects. They often draw from mythological sources and folklore to embed meaning into gameplay mechanics. Game designers use these items to support player immersion, storytelling, and symbolic agency. Scholars in ludology and game studies examine their role as digital ritual tools in interactive narrative structures."
    }
  },
  {
    // Dublin Core Metadata
    title: "NFT Digital Amulet",
    creator: "Digital Artists",
    date: "2023 CE",
    type: "Digital Artifact",
    format: "Blockchain Token",
    identifier: "NFT-001",

    // CIDOC-CRM Metadata
    period: "Digital Age",
    culture: "Digital",
    origin: "Internet",
    material: "Cryptographic Data",
    technique: "Blockchain Minting",
    function: "Digital Ownership, Status",
    context: "Online, Virtual",

    // Narrative Path Classification
    narrativePaths: ["Chronological", "Modern Magic"],

    // Display Properties
    image: "../images/objects/nft_qr.jpg",
    audio: "../audio/nft.mp3",
    background: "../images/backgrounds/nft_qr.webp",
    era: "modern",
    eraPeriod: "Modern Era (2023 CE)",
    eraDescription: "Contemporary Spirituality and Digital Age",

    // Three-tier Content System
    texts: {
      brief: "Imagine a magical picture that lives on the internet! People buy and sell these digital treasures called NFTs. Some believe they bring good luck or special powers, just like ancient amulets, but in the digital world.",
      medium: "NFTs (Non-Fungible Tokens) are unique digital items stored on the blockchain. Some people treat them like modern amulets, believing they bring luck or represent special meaning. They can be art, music, or even virtual land!",
      long: "NFTs represent a contemporary reimagining of amuletic function within digital economies. As unique cryptographic tokens on blockchain networks, they embody scarcity and ownership in virtual spaces. Their cultural significance extends beyond financial speculation to include identity expression, community membership, and symbolic value. Scholars in digital anthropology examine how these objects fulfill traditional amuletic functions—protection, status, and meaning—in online environments."
    }
  }
];

let currentIndex = 0;
let currentTextLength = 'brief';
let audioPlayer = null;

// === TIMELINE FUNCTIONS ===
function updateTimeline() {
  const artifact = artifacts[currentIndex];
  const indicator = document.getElementById('timeline-indicator');
  const markers = document.querySelectorAll('.timeline-marker');
  const eraPositions = { 'ancient': '0%', 'medieval': '33.33%', 'renaissance': '66.66%', 'modern': '100%' };

  if (indicator && artifact.era) {
    indicator.style.left = eraPositions[artifact.era];
  }

  markers.forEach(marker => {
    marker.classList.remove('active');
    if (marker.dataset.era === artifact.era) {
      marker.classList.add('active');
    }
  });

  const eraPeriod = document.querySelector('.era-period');

  if (eraPeriod) {
    eraPeriod.textContent = artifact.eraPeriod;
  }
}

function updateThemeTexts() {
  const currentTheme = document.body.className.match(/theme-\w+/);
  if (currentTheme) {
    const themeKey = currentTheme[0];
    const themeData = themeTexts[themeKey];

    if (themeData) {
      // Обновляем intro-text
      const introText = document.querySelector('.intro-text');
      if (introText) {
        introText.textContent = themeData.introText;
      }
    }
  }
}

// === METADATA DISPLAY FUNCTIONS ===
function displayArtifactMetadata(artifact) {

  // Проверяем, есть ли у артефакта метаданные
  if (!artifact.identifier && !artifact.period && !artifact.culture) {
    console.warn('Artifact missing metadata fields:', artifact);
    return `
        <div class="metadata-error">
          <p>Metadata not available for this artifact.</p>
          <p>Please check the artifact configuration.</p>
        </div>
      `;
  }

  const metadataHTML = `
      <div class="metadata-grid">
        <div class="metadata-item">
          <span class="metadata-label">Identifier:</span>
          <span class="metadata-value">${artifact.identifier || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Period:</span>
          <span class="metadata-value">${artifact.period || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Culture:</span>
          <span class="metadata-value">${artifact.culture || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Origin:</span>
          <span class="metadata-value">${artifact.origin || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Material:</span>
          <span class="metadata-value">${artifact.material || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Technique:</span>
          <span class="metadata-value">${artifact.technique || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Function:</span>
          <span class="metadata-value">${artifact.function || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Context:</span>
          <span class="metadata-value">${artifact.context || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Narrative Paths:</span>
          <span class="metadata-value">${artifact.narrativePaths ? artifact.narrativePaths.join(', ') : 'N/A'}</span>
        </div>
      </div>
    `;

  return metadataHTML;
}

// === METADATA SECTION FUNCTIONS ===
function toggleMetadataSection() {
  const section = document.getElementById('metadata-section');
  const toggleBtn = document.getElementById('metadata-toggle');

  if (section.classList.contains('open')) {
    // Close section
    section.classList.remove('open');
    toggleBtn.classList.remove('active');
  } else {
    // Open section
    section.classList.add('open');
    toggleBtn.classList.add('active');

    // Проверяем, есть ли метаданные для текущего артефакта
    const currentArtifact = artifacts[currentIndex];

    if (currentArtifact) {
      updateMetadataDisplay(currentArtifact);
    }
  }
}

// === ARTIFACT DISPLAY FUNCTIONS ===
function updateArtifactDisplay() {
  // Check if we have an artifact parameter in URL (support both 'id' and 'artifact' for backward compatibility)
  const urlParams = new URLSearchParams(window.location.search);
  const artifactId = urlParams.get('id') || urlParams.get('artifact');
  const src = urlParams.get('src');

  // Log analytics if user came from QR code
  if (src === 'qr' && artifactId) {
    console.log(`QR Analytics: User accessed ${artifactId} via QR code`);
  }

  // If artifact parameter exists, find and show that artifact
  if (artifactId) {
    const artifactIndex = artifacts.findIndex(artifact => artifact.identifier === artifactId);
    if (artifactIndex !== -1) {
      currentIndex = artifactIndex;
    } else {
      console.warn(`Artifact with ID "${artifactId}" not found`);
    }
  }

  const artifact = artifacts[currentIndex];
  const artifactImage = document.getElementById('artifact-image');
  const artifactBackground = document.getElementById('artifact-background');
  const artifactTitle = document.getElementById('artifact-title');
  const audio = document.getElementById('artifact-audio');

  if (artifactImage) {
    artifactImage.src = artifact.image;
    artifactImage.alt = artifact.title;
  }

  if (artifactBackground) {
    artifactBackground.style.backgroundImage = `url('${artifact.background}')`;
  }

  if (artifactTitle) {
    artifactTitle.textContent = artifact.title;
  }

  if (audio && artifact.audio) {
    audio.src = artifact.audio;
    audio.load();
  }



  // Update metadata display
  updateMetadataDisplay(artifact);

  // Update timeline
  updateTimeline();
  updateText();
}

function updateMetadataDisplay(artifact) {
  const metadataContainer = document.getElementById('artifact-metadata');

  if (metadataContainer) {
    // Show loading state briefly for smooth transition
    metadataContainer.innerHTML = '<div class="metadata-loading">Loading metadata...</div>';

    // Small delay for smooth animation
    setTimeout(() => {
      const metadataHTML = displayArtifactMetadata(artifact);
      metadataContainer.innerHTML = metadataHTML;
    }, 100);
  } else {
    console.error('Metadata container not found!');
  }
}

// === AUDIO FUNCTIONS ===
function initializeAudio() {
  const audio = document.getElementById("artifact-audio");
  const audioLabel = document.getElementById("audio-label");
  const playBtn = document.getElementById("play-audio-btn");

  if (audio && audioLabel && playBtn) {
    audioPlayer = audio;
    audioLabel.textContent = "Play";

    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();

        // Отслеживаем прогресс для системы достижений
        if (window.progressSystem) {
          window.progressSystem.updatePathProgress('chrono', 'audio_interaction');
        }
      } else {
        audio.pause();
      }
    });

    audio.addEventListener("play", () => {
      audioLabel.textContent = "Pause";
    });

    audio.addEventListener("pause", () => {
      audioLabel.textContent = "Play";
    });

    audio.addEventListener("ended", () => {
      audioLabel.textContent = "Play";
    });
  }
}

// === TEXT FUNCTIONS ===
function updateText() {
  const artifact = artifacts[currentIndex];
  const textBlock = document.getElementById("text-block");
  if (textBlock) {
    textBlock.textContent = artifact.texts?.[currentTextLength] || "";
  }
}

// === EVENT LISTENERS ===
// Metadata section toggle
document.getElementById("metadata-toggle").addEventListener("click", () => {
  toggleMetadataSection();

  // Отслеживаем прогресс для системы достижений
  if (window.progressSystem) {
    window.progressSystem.updatePathProgress('chrono', 'metadata_interaction');
  }
});

document.getElementById("artifact-image").addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.classList.toggle("enlarged");

  // Отслеживаем прогресс для системы достижений
  if (window.progressSystem) {
    window.progressSystem.updatePathProgress('chrono', 'artifact_interaction');
  }
});

// === TIMELINE EVENT LISTENERS ===
document.querySelectorAll('.timeline-marker').forEach(marker => {
  marker.addEventListener('click', () => {
    const era = marker.dataset.era;
    currentIndex = artifacts.findIndex(artifact => artifact.era === era);
    updateArtifactDisplay();
    updateText();

    // Отслеживаем прогресс для системы достижений
    if (window.progressSystem) {
      window.progressSystem.updatePathProgress('chrono', 'timeline_interaction');
    }
  });
});

// === TEXT LENGTH CONTROL ===
document.querySelectorAll('.text-controls button').forEach(btn => {
  btn.addEventListener('click', () => {
    const length = btn.textContent.toLowerCase().includes('basic') ? 'brief' :
      btn.textContent.toLowerCase().includes('more') ? 'medium' : 'long';
    currentTextLength = length;
    updateText();

    // Отслеживаем прогресс для системы достижений
    if (window.progressSystem) {
      window.progressSystem.updatePathProgress('chrono', 'text_interaction');
    }
  });
});

// === INITIALIZATION ===
initializeAudio();
updateArtifactDisplay();
updateText();

// === NAVIGATION BUTTONS ===
document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + artifacts.length) % artifacts.length;
  updateArtifactDisplay();

  // Отслеживаем прогресс для системы достижений
  if (window.progressSystem) {
    window.progressSystem.updatePathProgress('chrono', 'navigation');
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % artifacts.length;
  updateArtifactDisplay();

  // Отслеживаем прогресс для системы достижений
  if (window.progressSystem) {
    window.progressSystem.updatePathProgress('chrono', 'navigation');
  }
});

// === GLOBAL FUNCTIONS ===
window.setTextLength = function (length) {
  currentTextLength = length;
  updateText();

  // Update QR code when text length changes
  if (window.generateQRCode) {
    window.generateQRCode();
  }

  // Отслеживаем прогресс для системы достижений
  if (window.progressSystem) {
    window.progressSystem.updatePathProgress('chrono', 'text_interaction');
  }
};

// === Theme Preservation ===
document.addEventListener('DOMContentLoaded', function () {
  const userType = localStorage.getItem('magicUserType');
  if (userType) {
    let textLength = 'brief';
    if (userType === 'casual') textLength = 'medium';
    if (userType === 'expert') textLength = 'long';
    currentTextLength = textLength;
    updateText();
  }
});

// === Тема теперь управляется theme-switcher.js ===

// === Тема теперь управляется theme-switcher.js ===
// Но нужно обновлять тематические тексты при смене темы
document.addEventListener('DOMContentLoaded', function () {
  // Слушаем изменения темы от theme-switcher.js
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        updateThemeTexts(); // Обновляем тематические тексты при смене темы
      }
    });
  });

  // Наблюдаем за изменениями классов body
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
  });
}); 