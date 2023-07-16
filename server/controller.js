module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your JavaScript skills are stellar."
    ];

    const randomIndex = Math.floor(Math.random() * compliments.length);
    const randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A pleasant surprise is waiting for you.",
      "You will have a great day filled with happiness.",
      "Your hard work will pay off soon.",
      "Opportunities are coming your way. Seize them!",
      "Your creativity will lead to success."
    ];

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];

    res.status(200).json({ fortune: randomFortune });
  },

  getQuote: (req, res) => {
    const quotes = [
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "It does not matter how slowly you go as long as you do not stop. - Confucius"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    res.status(200).json({ quote });
  },

  getAffirmation: (req, res) => {
    const affirmations = [
      "You are capable of great things!",
      "Believe in yourself, and you will achieve success!",
      "Every day is a new opportunity to grow and learn!",
      "You have the power to make a positive impact!",
      "You are worthy of love and happiness!",
    ];

    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];

    res.status(200).send(affirmation);
  },

  createEntry: (req, res) => {
    const entry = req.body.entry;
    // Save to any database but that requires extra steps
    
    res.status(200).json({ message: "Entry created successfully" });
  },
};