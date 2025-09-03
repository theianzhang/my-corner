export const sevenSummitsTrip = {
  // Hero Section
  heroImage: "/img/travel/trips/7-summits/aconcagua-summit.jpg",
  heroVideo: null,
  
  // Basic Info
  title: "The 7 Summits Challenge",
  shortTitle: "7 Summits",
  slug: "7-summits", 
  summary: "An adventure challenge to climb the highest peak on every continent.",
  
  // Trip Details
  year: "2021+",
  duration: "30+",
  season: "year-round",
  travelStyle: "solo",
  budget: "$$$$",
  
  // Countries & Cities
  countries: [
    {
      name: "Tanzania",
      flag: "🇹🇿",
      cities: [
        {
          name: "Arusha",
          days: 10,
          highlights: ["Kilimanjaro base camp", "Acclimatization", "Local guide team"]
        }
      ]
    },
    {
      name: "Argentina", 
      flag: "🇦🇷",
      cities: [
        {
          name: "Mendoza",
          days: 15,
          highlights: ["Aconcagua base camp", "Wine country", "Altitude preparation"]
        }
      ]
    },
    {
      name: "United States",
      flag: "🇺🇸",
      cities: [
        {
          name: "Talkeetna, Alaska",
          days: 20,
          highlights: ["Denali base camp", "Bush plane flights", "Extreme cold training"]
        }
      ]
    },
    {
      name: "Russia",
      flag: "🇷🇺",
      cities: [
        {
          name: "Elbrus",
          days: 10,
          highlights: ["Elbrus base camp", "Russian culture", "Mountains of the Caucasus"]
        }
      ]
    },
    {
      name: "Antarctica",
      flag: "🇦🇶",
      cities: [
        {
          name: "Vinson",
          days: 10,
          highlights: ["Vinson base camp", "Antarctic culture", "Mountains of the Antarctic Peninsula"]
        }
      ]
    },
    {
      name: "Indonesia",
      flag: "🇮🇩",
      cities: [
        {
          name: "Puncak Jaya",
          days: 10,
          highlights: ["Carstensz base camp", "Indonesian culture", "Mountains of the Papua region"]
        }
      ]
    },
    {
      name: "Nepal",
      flag: "🇳🇵",
      cities: [
        {
          name: "Everest",
          days: 30,
          highlights: ["Everest base camp", "Nepalese culture", "Mountains of the Himalayas"]
        }
      ]
    }
  ],

  // Stories & Experiences  
  stories: {
    theChallenge: {
      title: "Why the 7 Summits?",
      image: "/img/travel/7-summits/mountain-collage.webp",
      content: `
      Why? Probably the most common question I get. 
      `
    },
    
    kilimanjaro: {
      title: "Kilimanjaro - The Roof of Africa",
      image: "/img/travel/7-summits/kilimanjaro-summit.webp",
      content: `
        
        The approach through different climate zones, from tropical base to arctic summit...
        The mental challenge of the final summit push...
        Sunrise from Uhuru Peak and the view across Africa...
      `
    },

    aconcagua: {
      title: "Aconcagua - The Stone Sentinel", 
      image: "/img/travel/7-summits/aconcagua-basecamp.webp",
      content: `
        
        The technical challenges of South America's highest peak...
        Dealing with extreme altitude and weather changes...
        The satisfaction of conquering the highest peak outside of Asia...
      `
    }
  },

  // Practical Info & Recommendations
  recommendations: {
    bestTime: "Varies by mountain - requires careful planning around weather windows for each continent",
    budget: "$15,000-30,000+ per summit depending on location and guide services",
    
    mustDo: [
      "Start with Kilimanjaro - great introduction to high altitude",
      "Build technical skills on local mountains before attempting technical peaks",
      "Invest in high-quality gear - your life depends on it",
      "Train consistently for at least 6 months before each major climb",
      "Consider hiring experienced guides for technical summits"
    ],
    
    training: [
      "Cardiovascular endurance - running, cycling, hiking with heavy pack",
      "Strength training focused on legs, core, and functional movements", 
      "Practice hiking with full mountaineering gear",
      "Altitude training if possible - or at least understand the effects"
    ],
    
    gear: [
      "Professional mountaineering boots rated for extreme cold",
      "Layering system for temperature ranges from tropical to arctic",
      "High-altitude tent and sleeping system",
      "Navigation and safety equipment for each specific mountain"
    ]
  },

  // Current Status
  status: {
    completed: [], // Will be updated as summits are achieved
    planned: [
      { name: "Kilimanjaro", continent: "Africa", complete: "2022" },
      { name: "Aconcagua", continent: "South America", complete: "2023" },
      { name: "Denali", continent: "North America", planned: "2023" },
      { name: "Carstensz Pyramid", continent: "Oceania", planned: "2026" },
      { name: "Everest", continent: "Asia", planned: "2028" },
      { name: "Vinson", continent: "Antarctica", planned: "2029" },
      { name: "Elbrus", continent: "Europe", planned: "????" }
    ]
  },
}

export type TripStory = typeof sevenSummitsTrip; 