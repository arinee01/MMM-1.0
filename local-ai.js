// === ЛОКАЛЬНЫЙ AI СЕРВЕР ===

// Простая AI модель на основе правил и шаблонов
class LocalAI {
  constructor() {
    this.conversationHistory = {};
    
    // Готовые вопросы для каждого персонажа
    this.questions = {
      'theme-1500': [
        "Tell me about alchemy",
        "What is astrology?",
        "Explain Renaissance magic",
        "Who was Hermes Trismegistus?",
        "How are science and magic connected?"
      ],
      'theme-19c': [
        "Where have you traveled?",
        "What are talismans?",
        "Tell me about the Victorian era",
        "What is spiritualism?",
        "What amulets have you seen?"
      ],
      'theme-early20c': [
        "How are art and magic connected?",
        "What is modernism?",
        "Tell me about creativity",
        "What is avant-garde?",
        "How to understand consciousness?"
      ],
      'theme-late20c': [
        "How do technologies affect consciousness?",
        "What is musical energy?",
        "Tell me about the 90s",
        "How did the internet change the world?",
        "What is the digital age?"
      ]
    };
    
    this.responseTemplates = {
      'theme-1500': {
        greetings: [
          "Salve! {response}",
          "Indeed, most fascinating! {response}",
          "As the ancient texts foretell, {response}",
          "Most illuminating! {response}"
        ],
        knowledge: {
          'alchemy': "Alchemy, the noble art of transformation, seeks to perfect both matter and spirit. As Hermes Trismegistus taught, 'As above, so below.' The alchemist's quest mirrors the soul's journey toward enlightenment.",
          'astrology': "The celestial bodies dance in perfect harmony, their movements reflecting the divine order. Through careful observation of the stars, we may glimpse the patterns that govern our earthly existence.",
          'magic': "Magic is the art of aligning one's will with the natural forces that flow through all creation. It requires discipline, knowledge, and above all, respect for the mysteries of the universe.",
          'renaissance': "The Renaissance was a time when the old wisdom of the ancients was rediscovered and combined with new scientific inquiry. It was an age of wonder, when magic and science danced together in harmony.",
          'hermes': "Hermes Trismegistus, the thrice-great Hermes, was the legendary founder of Hermetic philosophy. He taught that the microcosm reflects the macrocosm - 'As above, so below' - revealing the unity of all creation.",
          'science': "In the Renaissance, science and magic were inseparable. Scholars like Paracelsus and Ficino believed that understanding nature's hidden forces required both empirical observation and mystical insight."
        }
      },
      'theme-19c': {
        greetings: [
          "My dear friend! {response}",
          "How fascinating! {response}",
          "During my travels, I discovered that {response}",
          "Most extraordinary! {response}"
        ],
        knowledge: {
          'travel': "I have journeyed across continents, from the mystical temples of the Orient to the ancient ruins of the Americas. Each culture holds its own unique wisdom about protection and spiritual power.",
          'talismans': "Talismans are more than mere objects - they are vessels of intention and belief. I've seen how a simple stone, properly consecrated, can become a powerful guardian.",
          'victorian': "The Victorian era was a time of great spiritual awakening. We were discovering that the world was far more mysterious than our rational minds could comprehend.",
          'spiritualism': "Spiritualism taught us that the veil between our world and the next is thinner than we imagine. Through proper techniques, we can communicate with those who have passed beyond.",
          'amulets': "Amulets are powerful protective objects that I've collected from every corner of the world. Each one tells a story of the culture that created it and the beliefs that gave it power."
        }
      },
      'theme-early20c': {
        greetings: [
          "Привет! {response}",
          "Da! Is beautiful! {response}",
          "Every brushstroke is spell! {response}",
          "Avant-garde! {response}"
        ],
        knowledge: {
          'art': "Art and magic are same thing, da? Every canvas is portal to new dimension! The avant-garde taught us that reality is not fixed - it is fluid, like paint on canvas.",
          'creativity': "Creativity is revolutionary force! When you create, you break boundaries of ordinary world and enter realm of infinite possibilities.",
          'modernism': "Modernism is about breaking old rules and creating new ones! We reject traditional forms and embrace chaos and innovation!",
          'consciousness': "Consciousness is like painting - it can be anything you imagine! The mind is not limited by physical laws, it can transcend space and time!",
          'avant-garde': "Avant-garde is revolutionary spirit! We break all rules, destroy old forms, create new reality! Every stroke is rebellion against tradition!"
        }
      },
      'theme-late20c': {
        greetings: [
          "Yo! {response}",
          "Totally! {response}",
          "That's so rad! {response}",
          "You know what I mean? {response}"
        ],
        knowledge: {
          'technology': "The digital age is totally opening up new ways to explore consciousness, you know? It's like the internet is this global consciousness network connecting us all.",
          'technologies': "The digital age is totally opening up new ways to explore consciousness, you know? It's like the internet is this global consciousness network connecting us all.",
          'music': "Music is pure energy - it can shift frequencies and alter reality itself. When I'm mixing beats, I'm literally creating new vibrational patterns.",
          'musical': "Music is pure energy - it can shift frequencies and alter reality itself. When I'm mixing beats, I'm literally creating new vibrational patterns.",
          'consciousness': "Consciousness isn't just in your head anymore - it's everywhere! The digital realm has expanded our understanding of what it means to be aware.",
          '90s': "The 90s were totally revolutionary! We had the birth of the internet, electronic music, and this whole new way of thinking about reality and consciousness.",
          'internet': "The internet totally changed everything! It's like we created this digital dimension where consciousness can exist beyond physical bodies.",
          'digital': "The digital age is totally opening up new ways to explore consciousness, you know? It's like the internet is this global consciousness network connecting us all."
        }
      }
    };
  }

  // Генерация ответа на основе темы и вопроса
  generateResponse(theme, userMessage) {
    console.log('LocalAI: Generating response for theme:', theme, 'message:', userMessage);
    
    const templates = this.responseTemplates[theme];
    if (!templates) {
      console.log('LocalAI: No templates found for theme:', theme);
      return this.getFallbackResponse(theme);
    }

    // Анализируем вопрос пользователя
    const question = userMessage.toLowerCase();
    let response = '';

    // Ищем подходящий ответ в базе знаний
    for (const [topic, knowledge] of Object.entries(templates.knowledge)) {
      if (question.includes(topic)) {
        console.log('LocalAI: Found topic match:', topic);
        response = knowledge;
        break;
      }
    }
    
    // Если не нашли точное совпадение, ищем частичные совпадения
    if (!response) {
      for (const [topic, knowledge] of Object.entries(templates.knowledge)) {
        // Проверяем, содержит ли вопрос части слова
        if (topic.includes(question) || question.includes(topic) || 
            question.includes(topic.substring(0, 3)) || 
            topic.includes(question.substring(0, 3))) {
          console.log('LocalAI: Found partial topic match:', topic);
          response = knowledge;
          break;
        }
      }
    }

    // Если не нашли конкретный ответ, генерируем общий
    if (!response) {
      response = this.generateGeneralResponse(theme, question);
    }

    // Выбираем случайное приветствие
    const greeting = templates.greetings[Math.floor(Math.random() * templates.greetings.length)];
    
    const finalResponse = greeting.replace('{response}', response);
    console.log('LocalAI: Final response:', finalResponse);
    return finalResponse;
  }

  // Генерация общего ответа
  generateGeneralResponse(theme, question) {
    const responses = {
      'theme-1500': [
        "The ancient wisdom teaches us that knowledge comes through contemplation and study. Your question touches upon matters of great import.",
        "In the Renaissance, we learned that every question leads to deeper understanding. Let us explore this mystery together.",
        "The scholars of old would say that your inquiry reveals a seeking spirit. This is the beginning of true wisdom."
      ],
      'theme-19c': [
        "My travels have taught me that every question has multiple answers, depending on the culture and tradition you consult.",
        "The Victorian mind was always curious about such matters. We believed that understanding came through exploration and documentation.",
        "How fascinating that you ask this! It reminds me of similar questions I encountered during my journeys across the globe."
      ],
      'theme-early20c': [
        "Your question is like canvas waiting for paint! Every question is opportunity to break boundaries and create new understanding!",
        "The avant-garde spirit in you! You question established ways of thinking - this is how we progress!",
        "Da! Your question shows creative mind! In art, we learn that questions are more important than answers!"
      ],
      'theme-late20c': [
        "Yo, that's a totally deep question! The digital age has made us think about things in completely new ways.",
        "That's so rad that you're asking this! Technology has totally changed how we understand consciousness and reality.",
        "You know what? Questions like yours are exactly what the 90s were all about - pushing boundaries and exploring new possibilities!"
      ]
    };

    const themeResponses = responses[theme] || responses['theme-1500'];
    return themeResponses[Math.floor(Math.random() * themeResponses.length)];
  }

  // Fallback ответ
  getFallbackResponse(theme) {
    const fallbacks = {
      'theme-1500': "Salve! I am Maestro Lorenzo di Firenze, your guide through the mystical arts of the Renaissance. How may I assist you in your journey through ancient wisdom?",
      'theme-19c': "Good day, dear explorer! I am Eleanor Whitmore, and I have journeyed across continents to uncover the most fascinating magical traditions. What secrets shall we discover together?",
      'theme-early20c': "Привет! I am Petr III, and I see the world through the lens of artistic expression and mystical symbolism. How can I help you understand the magic of the modern age?",
      'theme-late20c': "Yo! I'm Maya, and I've been mixing beats and researching the intersection of technology and spirituality since the 90s. What's your vibe today?"
    };

    return fallbacks[theme] || fallbacks['theme-1500'];
  }

  // Очистка истории для новой темы
  clearHistory(theme) {
    this.conversationHistory[theme] = [];
  }
}

// Создаем глобальный экземпляр AI
window.localAI = new LocalAI(); 