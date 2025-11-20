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

document.addEventListener("DOMContentLoaded", () => {
  // 🧿 Amulet Text Data
  const amuletData = {
    1: {
      short: "This stone keeps you safe, like a magical shield from bad vibes.",
      full: `Dark and ancient, this amulet is carved from volcanic stone — a material born in fire, forged in pressure, and cooled by time. For millennia, mystics, warriors, and wanderers wore it as a barrier between their spirit and the chaos of the world.
 
  In early Mesopotamian and North African cultures, lava rock was seen as a keeper of Earth's earliest memories. Shamans claimed it could "drink" emotional noise from a person's energy field, absorbing anxiety, envy, or confusion like a sponge. Before battles or long voyages, the stone would be anointed with oils and placed over the heart to calm the nerves and anchor the soul.
 
  Today, in a world humming with digital overstimulation, it offers the same silent strength. Whether worn as a ring, clasped in a pocket, or set beside your laptop, its dense texture serves as a psychic buffer — grounding your thoughts, shielding your emotional core, and helping you filter what truly deserves your energy.`,
      use: `Volcanic stone — also known as basalt or lava rock — has long been revered as a grounding force. In ancient Mediterranean and East African rituals, it was believed to carry the Earth's primal memory. Warriors placed it in their sandals, healers wore it on their chest, and shamans placed it at the base of sacred fires.
 
  Its porous texture absorbs emotional residue — anger, doubt, confusion — and its dark color symbolizes both absorption and the mystery of the unseen. In the modern world, where overstimulation is constant (notifications, bright screens, emotional content), this amulet serves as a buffering agent.
 
  Worn near the body or placed near digital devices, it is said to create a psychic firewall, allowing the wearer to move through digital noise without losing their center.`,

      // Metadata for Amulet 1
      metadata: {
        identifier: "AMULET-001",
        period: "Ancient",
        culture: "Universal",
        origin: "Volcanic Regions",
        material: "Volcanic Stone",
        technique: "Carved, Polished",
        function: "Protection, Grounding",
        context: "Spiritual, Personal"
      }
    },

    2: {
      short: "This eye sees for you — it reflects envy and shields your shine.",
      full: `Crafted in the form of a watchful blue eye, this amulet has guarded the luminous for centuries. From Istanbul to Athens, from Cairo to Belgrade, it's worn by those who draw attention — not by choice, but by nature.
 
  In Ottoman courts and coastal villages alike, artisans would fire glass into concentric rings of white, blue, and black — meant to mimic the human gaze. The belief: when envy is near, the amulet "catches" it, cracking or shattering to absorb what was meant for the wearer.
 
  Stories tell of a musician whose nazar shattered mid-performance — and later learned of a jealous rival who had cursed him. Another tale speaks of twins who were never sick a day in childhood — their grandmother had sewn a tiny eye-bead into each hem.
 
  Today, it still guards creators, children, influencers, performers — anyone who shines. Not through aggression, but through deflection. It does not attack. It watches, and it shields.`,
      use: `The blue eye — often called "nazar" — is found in homes, bracelets, doorways, and rear-view mirrors across the Mediterranean and Middle East. It's not just a superstition — it's a **signal** to the unseen: "I see you. Your energy stops here."
 
  Placed on phones, worn as jewelry, or pinned to clothing, the amulet is believed to **mirror back** jealousy, gossip, and unconscious projections. It's especially powerful when worn during high-visibility moments — launches, performances, first dates, or interviews.
 
  In digital life, it works symbolically: protecting your attention, your confidence, and your glow. The eye reminds you — your light doesn't need shrinking. It only needs shielding.`,

      // Metadata for Amulet 2
      metadata: {
        identifier: "AMULET-002",
        period: "Traditional",
        culture: "Mediterranean",
        origin: "Turkey",
        material: "Glass, Metal",
        technique: "Glass Blowing, Metalwork",
        function: "Protection, Evil Eye",
        context: "Personal, Domestic"
      }
    },

    3: {
      short: "Like a magic feather! It helps you move fast and be brave.",
      full: `This feather-shaped token was once worn by dancers and warriors. It channels energy for movement, risk-taking, and forward leaps — the kind you take before you're ready.
 
  There's an old story from the steppes of Central Asia, of a sky-runner named Ilan who could cross entire regions in a single night. People whispered that he didn't run — he flew — carried by a feather amulet gifted by a cloud spirit. His enemies never caught him; his lovers never forgot him. Before his final journey, he buried the talisman in a cliffside nest and said, "Only the next brave soul will find it."
 
  This myth lives on in symbols: wings tattooed on ankles, feathers tied to backpacks, charms on phone cases. Wherever people prepare to leap — into new jobs, cities, identities — the feather quietly flutters with them, reminding: speed is not rush, it's trust in your next step.`,
      use: `Crafted from obsidian-dyed birdbone or brass etched with aerial runes, this amulet was a favorite of nomadic dancers and messengers in early Silk Road cultures. Known as "Wing of the Invisible," it was believed to grant the wearer not just speed of body, but clarity in decisive motion — both physical and emotional.
 
  Before battles or performances, wearers would whisper personal intentions into the token. Archaeologists have found similar items near riverbeds and cliffside camps, often engraved with directional glyphs or paired with boots worn thin by long journeys.
 
  Today, the feather has returned in symbolic form on tattoos, logos, and charms worn by creators, freelancers, and digital nomads — anyone who needs to leap before they're sure. It's not just a token of action, but of **momentum** in uncertain terrain.`,

      // Metadata for Amulet 3
      metadata: {
        identifier: "AMULET-003",
        period: "Ancient",
        culture: "Central Asian",
        origin: "Silk Road",
        material: "Birdbone, Brass",
        technique: "Carved, Etched",
        function: "Speed, Courage",
        context: "Warrior, Dancer"
      }
    },

    4: {
      short: "Digital talisman that protects your virtual identity and online presence.",
      full: `The NFT amulet represents the modern evolution of protective magic in the digital realm. Unlike traditional amulets carved from stone or metal, this ethereal token exists as a unique digital signature on the blockchain — a permanent, unchangeable record of your digital essence.
 
  In ancient times, shamans would create talismans to protect the soul. Today, in our interconnected digital world, we need protection for our virtual selves. The NFT amulet serves as a guardian of your online identity, your digital footprint, and your creative work in the vast expanse of the internet.
 
  Each NFT amulet is unique, carrying its own magical properties and protective energies. Some are designed to shield against digital negativity, others to amplify creative energy, and some to attract abundance in the virtual marketplace. They represent the bridge between ancient mystical practices and modern technological innovation.`,
      use: `NFT amulets work by creating a sacred digital space around your online presence. When you own an NFT amulet, you're not just holding a digital asset — you're carrying a piece of protective magic that travels with you through the digital realm.
 
  These amulets amulets can be displayed in your digital wallet, used as profile pictures, or integrated into your online platforms. They serve as reminders of your digital sovereignty and protect your creative energy from being drained by the constant demands of online life.
 
  In the modern world of social media, content creation, and digital commerce, the NFT amulet represents a new form of spiritual protection — one that understands the unique challenges and opportunities of our digital age.`,

      // Metadata for Amulet 4
      metadata: {
        identifier: "AMULET-004",
        period: "Digital Age",
        culture: "Digital",
        origin: "Blockchain",
        material: "Cryptographic Data",
        technique: "Smart Contract",
        function: "Digital Protection",
        context: "Online, Virtual"
      }
    },

    5: {
      short: "Gaming charm that enhances your virtual adventures and digital quests.",
      full: `The RPG amulet is a modern talisman designed for the digital adventurer. It represents the fusion of ancient magical traditions with the immersive worlds of role-playing games and virtual reality. This amulet doesn't just protect — it enhances, empowers, and guides you through your digital journeys.
 
  In traditional RPGs, players would carry lucky charms or magical items to boost their characters' abilities. The RPG amulet brings this concept into reality, serving as a physical reminder of your gaming prowess and a talisman for your digital adventures. It's designed for gamers, streamers, developers, and anyone who spends significant time in virtual worlds.
 
  The amulet channels the energy of countless digital quests, battles, and achievements. It's imbued with the spirit of exploration, strategy, and the thrill of discovery that makes gaming such a powerful and engaging experience.`,
      use: `The RPG amulet works by creating a connection between your physical reality and your digital experiences. When you wear or carry this amulet, you're not just accessing a piece of jewelry — you're tapping into a reservoir of gaming energy and digital wisdom.
 
  This amulet is particularly powerful for content creators, streamers, and competitive gamers. It can help maintain focus during long gaming sessions, enhance strategic thinking, and provide protection against the negative aspects of online gaming culture.
 
  In the modern world where virtual and physical realities increasingly overlap, the RPG amulet serves as a bridge between these realms, helping you navigate both with confidence and magical protection.`,

      // Metadata for Amulet 5
      metadata: {
        identifier: "AMULET-005",
        period: "Modern",
        culture: "Gaming",
        origin: "Digital Culture",
        material: "Mixed Media",
        technique: "Digital Design",
        function: "Gaming Enhancement",
        context: "Entertainment, Virtual"
      }
    }
  };

  // === Новый блок амулетов ===
  const amuletCards = document.querySelectorAll('.amulet-card');
  const amuletDescBox = document.querySelector('.amulet-description-box');
  const amuletTabs = document.querySelectorAll('.amulet-tab');
  const amuletDescText = document.querySelector('.amulet-description-text');

  let currentAmuletId = null;
  let currentTab = 'short';

  // === НОВАЯ ЛОГИКА ВЫБОРА АМУЛЕТОВ ===

  // Функция для выбора амулета
  function selectAmulet(amuletId) {
    if (!amuletData[amuletId]) return;

    console.log('Выбран амулет:', amuletId);
    console.log('Текущий уровень пользователя:', localStorage.getItem('magicUserType'));

    currentAmuletId = amuletId;
    amuletCards.forEach(card => card.classList.remove('selected'));
    const selectedCard = document.querySelector(`[data-id="${amuletId}"]`);
    if (selectedCard) selectedCard.classList.add('selected');

    // Обновляем описание
    if (amuletDescBox) {
      amuletDescBox.classList.add('active');
      amuletDescBox.style.display = '';
    }

    // Обновляем вкладки
    const userType = localStorage.getItem('magicUserType') || 'beginner';
    let amuletType = 'short';
    if (userType === 'casual') amuletType = 'full';
    if (userType === 'expert') amuletType = 'use';

    currentTab = amuletType;
    amuletTabs.forEach(tab => tab.classList.remove('active'));
    const activeTab = document.querySelector(`.amulet-tab[data-type="${amuletType}"]`);
    if (activeTab) {
      activeTab.classList.add('active');
      console.log('Установлена активная вкладка:', amuletType, 'для уровня:', userType);
    }

    // Обновляем текст в соответствии с активной вкладкой
    if (amuletDescText) {
      amuletDescText.textContent = amuletData[currentAmuletId][amuletType] || '✨ No details available.';
      console.log('Обновлен текст для вкладки:', amuletType);
    }

    // Принудительно обновляем текст для уровня пользователя
    updateTextForUserLevel();

    // Обновляем метаданные если панель открыта
    const metadataSection = document.getElementById('amulet-metadata-section');
    if (metadataSection && metadataSection.classList.contains('open')) {
      updateAmuletMetadata(currentAmuletId);
    }
  }

  // Проверяем параметры в URL (поддерживаем как 'id', так и 'artifact' для обратной совместимости)
  const urlParams = new URLSearchParams(window.location.search);
  const artifactId = urlParams.get('id') || urlParams.get('artifact');
  const userTypeFromUrl = urlParams.get('userType');
  const src = urlParams.get('src');

  // Логируем аналитику, если пользователь пришел через QR-код
  if (src === 'qr' && artifactId) {
    console.log(`QR Analytics: User accessed ${artifactId} via QR code`);
  }

  // Если есть параметр userType в URL, устанавливаем его
  if (userTypeFromUrl) {
    localStorage.setItem('magicUserType', userTypeFromUrl);
    console.log('Уровень пользователя установлен из URL:', userTypeFromUrl);
  }

  if (artifactId) {
    // Есть параметр artifact - выбираем нужный амулет
    const artifactToCardMap = {
      'VICTORIAN-001': '3',                    // Victorian Crystal Ball -> amulet3
      'ARTDECO-001': '1',                      // Art Deco Amulet -> amulet1
      'AMULET-TURKISH-001': '2',               // Turkish Evil Eye -> amulet2
      'AMULET-ROSE-QUARTZ-001': '1',           // Rose Quartz -> amulet1
      'AMULET-BLACK-STONE-001': '1'            // Black Stone -> amulet1
    };

    const cardId = artifactToCardMap[artifactId];
    if (cardId) {
      // Используем setTimeout чтобы убедиться что DOM загружен
      setTimeout(() => {
        selectAmulet(cardId);
      }, 50);
    }
  } else {
    // Нет параметра - выбираем первый амулет
    setTimeout(() => {
      selectAmulet('1');
      // Дополнительно обновляем текст после выбора амулета
      setTimeout(updateTextForUserLevel, 150);
    }, 100);
  }

  // Обработчики кликов по карточкам
  amuletCards.forEach(card => {
    card.addEventListener('click', () => {
      const cardId = card.getAttribute('data-id');
      selectAmulet(cardId);
    });
  });

  // === Инициализация приветственного текста ===
  if (amuletDescText) amuletDescText.textContent = '🧿 Choose an amulet to reveal its energy...';

  // Функция для принудительного обновления текста в соответствии с уровнем пользователя
  function updateTextForUserLevel() {
    if (!currentAmuletId || !amuletDescText) return;

    const userType = localStorage.getItem('magicUserType') || 'beginner';
    let amuletType = 'short';
    if (userType === 'casual') amuletType = 'full';
    if (userType === 'expert') amuletType = 'use';

    const text = amuletData[currentAmuletId][amuletType];
    if (text) {
      amuletDescText.textContent = text;
      console.log('Принудительно обновлен текст для уровня:', userType, 'вкладка:', amuletType);
    }
  }

  amuletTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (!currentAmuletId) return;
      amuletTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.getAttribute('data-type');

      // Сохраняем выбранный уровень в localStorage
      let userType = 'beginner';
      if (currentTab === 'full') userType = 'casual';
      if (currentTab === 'use') userType = 'expert';
      localStorage.setItem('magicUserType', userType);

      console.log('Переключена вкладка:', currentTab, 'уровень пользователя:', userType);

      amuletDescText.textContent = amuletData[currentAmuletId][currentTab] || '✨ No details available.';
    });
  });

  // === Лупа для амулетов ===
  let zoomEnabled = false;
  let currentZoomCard = null;

  amuletCards.forEach(card => {
    const lens = card.querySelector('.zoom-lens');
    const img = card.querySelector('img');
    if (!lens || !img) return;

    card.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      // Только для выбранной карточки
      if (!card.classList.contains('selected')) return;
      zoomEnabled = !zoomEnabled;
      lens.style.display = zoomEnabled ? 'block' : 'none';
      if (zoomEnabled) {
        lens.style.backgroundImage = `url('${img.src}')`;
        lens.style.backgroundSize = `${img.width * 2}px ${img.height * 2}px`;
        currentZoomCard = card;
      } else {
        currentZoomCard = null;
      }
    });

    card.addEventListener('mousemove', e => {
      if (!zoomEnabled || currentZoomCard !== card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      lens.style.left = `${x - lens.offsetWidth / 2}px`;
      lens.style.top = `${y - lens.offsetHeight / 2}px`;
      lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
    });

    card.addEventListener('mouseleave', () => {
      if (zoomEnabled && currentZoomCard === card) lens.style.display = 'none';
    });

    card.addEventListener('mouseenter', () => {
      if (zoomEnabled && currentZoomCard === card) lens.style.display = 'block';
    });
  });

  document.addEventListener('click', () => {
    // Отключаем лупу при клике вне карточки
    if (zoomEnabled) {
      zoomEnabled = false;
      document.querySelectorAll('.zoom-lens').forEach(lens => lens.style.display = 'none');
      currentZoomCard = null;
    }
  });

  // 🔮 Tarot
  const tarotCards = document.querySelectorAll(".tarot-card");
  const resultBox = document.getElementById("tarot-result");
  const drawnCards = [];

  const defaultMessages = [
    "Trust the timing — something hidden is forming beneath the surface.",
    "Your intuition knows the answer — listen before you act.",
    "This cycle repeats for a reason. What lesson still needs learning?",
    "Your energy is shifting — what you desire is also moving toward you.",
    "Let go of the need to control everything. Space allows magic.",
    "Uncertainty is sacred space. Stay open.",
    "A dream long shelved may be ready to come back to life.",
    "Silence reveals what noise hides. Make time for stillness.",
    "The path ahead is unfamiliar — and that’s exactly why it’s powerful.",
    "Softness is not weakness. Try it and see."
  ];
  const predictions = {
    "11_12": "A new cycle is beginning — balance inner and outer goals. It might be time to talk to someone close — they have something important to share.",
    "12_13": "Now is the time to make the leap you've been avoiding. You don't need to feel ready to begin.",
    "12_15": "A message you've been waiting for will arrive soon. But only if you're quiet enough to hear it.",
    "13_15": "Passion will guide your next bold move. Is there a creative idea you've been ignoring?",
    "14_17": "Emotional clarity is arriving — let go of fear. Maybe it's time to say what you've been holding back.",
    "11_14": "Past choices are echoing forward — listen closely. Someone from your past may still carry a piece of your present.",
    "15_16": "You're being protected more than you realize. But it's also time to learn how to protect your boundaries yourself.",
    "16_11": "Healing begins with telling yourself the truth. What are you avoiding that actually wants to heal you?",
    "13_16": "Your creativity holds the solution to a practical problem. It feels like your life needs more art, music, or play right now.",
    "12_16": "You must release control to find real momentum. Rest is not quitting — it's trusting timing.",
    "14_15": "Relationships deepen when vulnerability is shared. It might be time to reach out — not with answers, but with presence.",
    "15_17": "Timing is everything — wait for the door to open. There's no need to rush what's quietly forming.",
    "11_17": "Something hidden is ready to reveal itself. Are you giving it enough space to surface?",
    "13_14": "Let go of comparison — your path is entirely your own. No one else has your rhythm.",
    "16_12": "You're carrying too much that isn't yours. Ground yourself and leave the tough decision for later — clarity will come.",
    "14_16": "Patterns repeat until they're understood. This is your moment to choose differently.",
    "12_17": "It feels like you're missing a spark — have you considered bringing something playful into your life? Maybe… a guinea pig?",
    "1_16": "Your body may be asking for rest — listen. You're not a machine, you're a cycle.",
    "3_17": "You might be underestimating how strong your intuition is. Start trusting those nudges — they're not random.",
    "4_12": "You've been holding space for others — but what about you? It might be time to set a gentle boundary.",
    "1_2": "A new cycle is beginning — balance inner and outer goals. It might be time to talk to someone close — they have something important to share.",
    "2_3": "Now is the time to make the leap you've been avoiding. You don't need to feel ready to begin.",
    "2_5": "A message you've been waiting for will arrive soon. But only if you're quiet enough to hear it.",
    "3_5": "Passion will guide your next bold move. Is there a creative idea you've been ignoring?",
    "4_7": "Emotional clarity is arriving — let go of fear. Maybe it's time to say what you've been holding back.",
    "1_4": "Past choices are echoing forward — listen closely. Someone from your past may still carry a piece of your present.",
    "5_6": "You're being protected more than you realize. But it's also time to learn how to protect your boundaries yourself.",
    "6_1": "Healing begins with telling yourself the truth. What are you avoiding that actually wants to heal you?",
    "3_6": "Your creativity holds the solution to a practical problem. It feels like your life needs more art, music, or play right now.",
    "2_6": "You must release control to find real momentum. Rest is not quitting — it's trusting timing.",
    "4_5": "Relationships deepen when vulnerability is shared. It might be time to reach out — not with answers, but with presence.",
    "5_7": "Timing is everything — wait for the door to open. There's no need to rush what's quietly forming.",
    "1_7": "Something hidden is ready to reveal itself. Are you giving it enough space to surface?",
    "3_4": "Let go of comparison — your path is entirely your own. No one else has your rhythm.",
    "6_2": "You're carrying too much that isn't yours. Ground yourself and leave the tough decision for later — clarity will come.",
    "4_6": "Patterns repeat until they're understood. This is your moment to choose differently.",
    "2_7": "It feels like you're missing a spark — have you considered bringing something playful into your life? Maybe… a guinea pig?",
    "11_6": "Your body may be asking for rest — listen. You're not a machine, you're a cycle.",
    "13_7": "You might be underestimating how strong your intuition is. Start trusting those nudges — they're not random.",
    "14_2": "You've been holding space for others — but what about you? It might be time to set a gentle boundary.",

    // Дополнительные соединения для большего разнообразия
    "1_3": "Wisdom comes from unexpected places today. Keep your heart open to new perspectives.",
    "1_5": "A long-awaited breakthrough is near. Trust the process that's been unfolding.",
    "1_6": "Your inner strength is greater than you know. This is a time to stand firm in your truth.",
    "2_4": "Creativity flows freely now. Express yourself without holding back.",
    "2_8": "A journey begins with a single step. What small action can you take today?",
    "3_8": "Your voice has power. Speak your truth with confidence and compassion.",
    "4_8": "Balance is the key to harmony. Find the middle path between extremes.",
    "5_8": "Opportunity knocks softly. Listen for the gentle whispers of possibility.",
    "6_8": "Transformation is happening within. Embrace the changes that are emerging.",
    "7_8": "Your dreams are closer than they appear. Keep moving forward with faith.",
    "8_9": "A cycle is completing. Celebrate your achievements and prepare for what's next.",
    "9_10": "New beginnings are on the horizon. Trust the fresh energy that's arriving.",
    "10_11": "Your intuition is sharp today. Follow those inner knowing feelings.",
    "11_13": "Magic happens in the spaces between. Find time for stillness and reflection.",
    "13_17": "Your creativity is a gift to the world. Share it generously.",
    "14_18": "Love surrounds you in unexpected ways. Open your heart to receive it.",
    "15_18": "Your wisdom is needed. Someone is looking to you for guidance.",
    "16_17": "Healing comes through connection. Reach out to those who care about you.",
    "17_18": "A door is opening. Walk through it with courage and curiosity.",
    "18_19": "Your potential is limitless. Dream bigger than you ever have before.",
    "19_20": "The universe is conspiring in your favor. Trust the synchronicities.",
    "20_21": "Your story is still being written. What chapter do you want to create next?",
    "21_22": "Transformation is your superpower. Embrace the changes that are calling you.",

    // Специальные соединения для магических карт
    "1_11": "Ancient wisdom speaks through you today. Trust the knowledge that flows naturally.",
    "2_12": "Your intuition is a compass. Follow it without question.",
    "3_13": "Creative energy surges through you. Channel it into something beautiful.",
    "4_14": "Emotional healing is available. Be gentle with yourself and others.",
    "5_15": "Protection surrounds you. You are safe to explore and grow.",
    "6_16": "Your boundaries are sacred. Honor them with love and firmness.",
    "7_17": "Timing is perfect. Trust the rhythm of your own unfolding.",
    "8_18": "Your dreams are valid. Pursue them with passion and persistence.",
    "9_19": "New chapters await. Turn the page with excitement and hope.",
    "10_20": "Your journey is unique. No one else can walk your path.",
    "11_21": "Magic is real. Believe in the impossible and watch it manifest.",
    "12_22": "Your potential is infinite. There are no limits to what you can become.",

    // Соединения для карт масти кубков (чаши)
    "1_4": "Love flows freely in your life. Open your heart to receive it.",
    "4_7": "Emotional clarity brings peace. Trust your feelings and intuition.",
    "7_10": "Your relationships deepen through vulnerability. Share your truth.",
    "10_13": "Spiritual growth accelerates. Your soul is expanding rapidly.",
    "13_16": "Healing happens through connection. Reach out to loved ones.",
    "16_19": "Your compassion heals others. Your kindness matters.",
    "19_22": "Love is the answer to every question. Choose love in all things.",

    // Соединения для карт масти мечей
    "2_5": "Your mind is sharp and clear. Trust your intellectual insights.",
    "5_8": "Communication flows easily. Speak your truth with confidence.",
    "8_11": "Your thoughts create your reality. Choose them wisely.",
    "11_14": "Mental clarity brings breakthroughs. Trust your reasoning.",
    "14_17": "Your words have power. Use them to uplift and inspire.",
    "17_20": "Intellectual growth is rapid. Your mind is expanding.",
    "20_23": "Wisdom comes through study and reflection. Keep learning.",

    // Соединения для карт масти пентаклей
    "3_6": "Abundance flows to you naturally. Trust in prosperity.",
    "6_9": "Your material needs are met. Focus on gratitude.",
    "9_12": "Financial wisdom grows. Trust your practical instincts.",
    "12_15": "Your resources multiply. Share your abundance generously.",
    "15_18": "Success is inevitable. Keep moving forward with confidence.",
    "18_21": "Your wealth includes more than money. Count your blessings.",
    "21_24": "Prosperity surrounds you. Open your arms to receive it.",

    // Соединения для карт масти жезлов
    "4_7": "Your energy is boundless. Channel it into creative projects.",
    "7_10": "Passion drives your success. Follow what excites you.",
    "10_13": "Your creativity knows no limits. Express yourself fully.",
    "13_16": "Inspiration flows constantly. Trust your creative impulses.",
    "16_19": "Your enthusiasm is contagious. Spread your positive energy.",
    "19_22": "Your fire never goes out. Keep it burning bright.",
    "22_25": "Transformation is your gift. Embrace the changes you create."
  };

  // Fallback messages for combinations not explicitly defined
  const fallbackMessages = [
    "The cards suggest a time of quiet reflection. Answers will come in silence.",
    "Two forces are merging in your life. Watch for synchronicities.",
    "What you are seeking is already seeking you. Be patient.",
    "A surprise is on the horizon. Keep your heart open to the unexpected.",
    "Balance is key right now. Don't rush into a decision.",
    "Your intuition is your best guide. Trust the first feeling you had.",
    "Old patterns are breaking. A new path is clearing for you.",
    "Energy flows where intention goes. Focus on what you want to create.",
    "The universe whispers when we listen. Pay attention to your dreams.",
    "Strength comes from within. You have more power than you realize."
  ];

  function getFallbackPrediction(id1, id2) {
    // Use the card IDs to deterministically select a fallback message
    // This ensures the same pair always gets the same 'random' message
    const sum = parseInt(id1) + parseInt(id2);
    const index = sum % fallbackMessages.length;
    return fallbackMessages[index];
  }

  tarotCards.forEach(card => {
    card.addEventListener("click", () => {
      if (card.classList.contains("flipped") || drawnCards.length >= 2) return;
      card.classList.add("flipped");
      drawnCards.push(card.dataset.card);

      if (drawnCards.length === 2) {
        const [a, b] = drawnCards;
        const key1 = `${a}_${b}`;
        const key2 = `${b}_${a}`;

        // Try to find specific prediction, otherwise use fallback
        let result = predictions[key1] || predictions[key2];

        if (!result) {
          console.log(`No specific prediction for ${key1}, using fallback.`);
          result = getFallbackPrediction(a, b);
        }

        setTimeout(() => {
          if (resultBox) {
            resultBox.textContent = result;
            resultBox.style.display = "block";
          }

          // Показываем кнопку сброса только если есть результат
          const resetBtn = document.getElementById('tarot-reset-btn');
          if (resetBtn && result) {
            resetBtn.style.display = 'inline-block';
            // Добавляем небольшую задержку для плавной анимации
            setTimeout(() => {
              resetBtn.classList.add('show');
            }, 100);
          }
        }, 500);
      }
    });
  });

  // Обработчик для кнопки сброса гадания
  const resetBtn = document.getElementById('tarot-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      // Сбрасываем все карты
      tarotCards.forEach(card => card.classList.remove("flipped"));

      // Очищаем массив выбранных карт
      drawnCards.length = 0;

      // Скрываем результат
      if (resultBox) {
        resultBox.textContent = "";
        resultBox.style.display = "none";
      }

      // Скрываем кнопку сброса с анимацией
      resetBtn.classList.remove('show');
      setTimeout(() => {
        resetBtn.style.display = 'none';
      }, 300);
    });
  }

  window.addEventListener("beforeunload", () => {
    drawnCards.length = 0;
    tarotCards.forEach(card => card.classList.remove("flipped"));
    if (resultBox) {
      resultBox.textContent = "";
      resultBox.style.display = "none";
    }

    // Скрываем кнопку сброса
    const resetBtn = document.getElementById('tarot-reset-btn');
    if (resetBtn) {
      resetBtn.classList.remove('show');
      resetBtn.style.display = 'none';
    }
  });

  // 📖 Tarot Text Toggle
  const tarotText = {
    basic: `A long time ago, in a land of stars and dreams, there lived a wise owl named Orla who had a magical deck of picture cards. Each morning, animals from the forest would visit her tree to ask for advice. The cards spoke in pictures — a lion for courage, a cup for love, a star for hope. Orla didn't tell the future, but helped her friends see what was in their hearts.
 
  Tarot is a bit like that magical story! It's a set of special cards, each with a unique picture. People use them to think about their feelings, their dreams, and their day. Some cards show happy suns or brave knights. Others show mysteries like the Moon or the Tower.
 
  Tarot is loved in many places! In France and Italy, people collect beautiful old Tarot decks. In Japan, there are Tarot cards with cute anime characters. In the United States and Brazil, people use Tarot to explore their imagination. It's like opening a door to a world of stories and colors, where every card is part of your own fairy tale.`,

    more: `Tarot isn’t just fortune telling — it’s more like a conversation with your deeper self. Each of the 78 cards represents emotions, symbols, and life situations: from joy to challenge, from mystery to clarity. People often draw a few cards to think about a question or reflect on their lives. Many use Tarot for mindfulness, journaling, or even therapy.
 
  Some fascinating facts about Tarot:
  – The oldest known Tarot deck comes from Italy in the 1400s, made for nobility.
  – The famous Rider–Waite deck (created in 1909) was illustrated by a Black British artist, Pamela Colman Smith.
  – Tarot cards weren’t originally for mysticism — they started as a game called Tarocchi!
 
  Around the world, Tarot is becoming more popular than ever:
  – In the U.S., especially in California and New York, Tarot is used in coaching, healing, and creativity workshops.
  – In the U.K. and Germany, Tarot is found in bookshops and art galleries.
  – In Brazil, Mexico, and Argentina, Tarot is deeply tied to local spirituality.
  – In South Korea, Japan, and Taiwan, young people use Tarot in cafes, apps, and even for dating advice.
 
  Tarot today is about asking better questions, not just getting answers. It’s a blend of art, emotion, and story — and it belongs to everyone.`,

    full: `Tarot is a multifaceted symbolic system composed of 78 cards: 22 Major Arcana and 56 Minor Arcana. While historically originating in 15th-century Italy as a card game (tarocchi), Tarot evolved into an esoteric tool in the 18th–19th centuries, influenced by Hermeticism, Kabbalah, Renaissance Neoplatonism, alchemy, and later Jungian psychology.
 
  Modern academic and psychological approaches to Tarot highlight its role in:
  – Archetypal projection: aligning with Jungian theory, the cards serve as mirrors of the collective unconscious.
  – Narrative therapy: card readings help clients construct personal meaning through symbolic story-making.
  – Cognitive stimulation: randomized imagery challenges fixed thinking and stimulates nonlinear reflection.
  – Art history and semiotics: Tarot decks are rich sources for iconographic and comparative cultural study.
 
  Cross-cultural usage includes:
  – France and Italy: Home to Marseille and Visconti-Sforza traditions, where Tarot is respected as cultural heritage.
  – The U.K.: The Golden Dawn, Aleister Crowley, and modern occult revivals shaped English-speaking Tarot.
  – United States: Tarot has blended with psychological tools, feminist spirituality, and New Age practices.
  – Eastern Europe: Esoteric communities in Russia, Poland, and Romania link Tarot to folk mysticism and academic occultism.
  – East Asia: Particularly in South Korea, Japan, and Taiwan, Tarot is part of the growing wellness/self-care movement and is adapted into pop culture, mobile apps, and design.
 
  Despite skepticism in some scientific circles, Tarot is increasingly studied as a cultural artifact, psychological tool, and art form — intersecting intuition, narrative, and symbolic logic.`
  };


  const tarotButtons = document.querySelectorAll(".tarot-toggle-btn");
  const output = document.getElementById("tarot-text-output");

  tarotButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type;
      if (output && tarotText[type]) {
        output.innerHTML = tarotText[type];
      }
    });
  });

  // === TikTok Cover Preview ===
  document.querySelectorAll('.tiktok-placeholder').forEach(placeholder => {
    const cover = placeholder.getAttribute('data-cover');
    if (cover) {
      placeholder.style.backgroundImage = `url('${cover}')`;
    }
  });
  // === TikTok Play Button Lazy Load ===
  document.querySelectorAll('.tiktok-placeholder').forEach(placeholder => {
    const playBtn = placeholder.querySelector('.tiktok-play-btn');
    playBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const src = placeholder.getAttribute('data-src');
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.setAttribute('allowfullscreen', '');
      iframe.style.position = 'absolute';
      iframe.style.top = '4.5%';
      iframe.style.left = '4.5%';
      iframe.style.width = '91%';
      iframe.style.height = '92%';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '28px';
      iframe.style.boxShadow = '0 0 8px rgba(0,0,0,0.12)';
      iframe.style.background = '#000';
      iframe.style.zIndex = '1';
      placeholder.parentNode.appendChild(iframe);
      placeholder.remove();
    });
  });

  // === МЕТАДАННЫЕ АМУЛЕТОВ ===
  function displayAmuletMetadata(amuletId) {
    const amulet = amuletData[amuletId];

    if (!amulet) {
      return `
        <div class="metadata-error">
          <p>No amulet found for ID: ${amuletId}</p>
          <p>Available IDs: ${Object.keys(amuletData).join(', ')}</p>
        </div>
      `;
    }

    if (!amulet.metadata) {
      return `
        <div class="metadata-error">
          <p>Amulet found but no metadata available.</p>
          <p>Amulet keys: ${Object.keys(amulet).join(', ')}</p>
        </div>
      `;
    }

    const metadata = amulet.metadata;

    const metadataHTML = `
      <div class="metadata-grid">
        <div class="metadata-item">
          <span class="metadata-label">Identifier:</span>
          <span class="metadata-value">${metadata.identifier || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Period:</span>
          <span class="metadata-value">${metadata.period || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Culture:</span>
          <span class="metadata-value">${metadata.culture || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Origin:</span>
          <span class="metadata-value">${metadata.origin || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Material:</span>
          <span class="metadata-value">${metadata.material || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Technique:</span>
          <span class="metadata-value">${metadata.technique || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Function:</span>
          <span class="metadata-value">${metadata.function || 'N/A'}</span>
        </div>
        <div class="metadata-item">
          <span class="metadata-label">Context:</span>
          <span class="metadata-value">${metadata.context || 'N/A'}</span>
        </div>
      </div>
    `;

    return metadataHTML;
  }

  function updateAmuletMetadata(amuletId) {
    const metadataContainer = document.getElementById('amulet-metadata');

    if (metadataContainer) {
      // Show loading state briefly for smooth transition
      metadataContainer.innerHTML = '<div class="metadata-loading">Loading metadata...</div>';

      // Small delay for smooth animation
      setTimeout(() => {
        const metadataHTML = displayAmuletMetadata(amuletId);
        metadataContainer.innerHTML = metadataHTML;


      }, 100);
    } else {
      console.error('Metadata container not found!');
    }
  }

  function toggleAmuletMetadataSection() {
    const section = document.getElementById('amulet-metadata-section');
    const toggleBtn = document.getElementById('amulet-metadata-toggle');

    if (section.classList.contains('open')) {
      // Close section
      section.classList.remove('open');
      toggleBtn.classList.remove('active');
    } else {
      // Open section
      section.classList.add('open');
      toggleBtn.classList.add('active');

      // Update metadata for current amulet
      if (currentAmuletId) {
        updateAmuletMetadata(currentAmuletId);
      } else {
        // Show message if no amulet is selected
        const metadataContainer = document.getElementById('amulet-metadata');
        if (metadataContainer) {
          metadataContainer.innerHTML = `
            <div class="metadata-error">
              <p>Please select an amulet first to view its metadata.</p>
            </div>
          `;
        }
      }
    }
  }

  // === ОБРАБОТЧИКИ СОБЫТИЙ ДЛЯ МЕТАДАННЫХ ===
  const metadataToggle = document.getElementById('amulet-metadata-toggle');
  if (metadataToggle) {
    metadataToggle.addEventListener('click', toggleAmuletMetadataSection);
  }
});

// === Автоподстановка режима Таро по выбору пользователя ===
window.addEventListener('DOMContentLoaded', () => {
  const userType = localStorage.getItem('magicUserType');
  if (userType) {
    let tarotType = 'basic';
    if (userType === 'casual') tarotType = 'more';
    if (userType === 'expert') tarotType = 'full';
    const btn = document.querySelector(`.tarot-toggle-btn[data-type="${tarotType}"]`);
    if (btn) btn.click();
  }
});

// === Автоподстановка режима для блока амулетов по выбору пользователя ===
window.addEventListener('DOMContentLoaded', () => {
  const userType = localStorage.getItem('magicUserType');
  if (userType) {
    // Автоматически выбираем первый амулет
    const firstCard = document.querySelector('.amulet-card');
    if (firstCard) {
      firstCard.click();
    }
  }
});

// === Тема теперь управляется theme-switcher.js ===

// === МЕТАДАННЫЕ АМУЛЕТОВ ===
// Функции объявлены внутри DOMContentLoaded выше