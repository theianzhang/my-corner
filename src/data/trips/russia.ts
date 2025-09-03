export const russiaTrip = {
  // Hero Section
  heroImage: "/img/travel/russia/red-square-hero.webp",
  heroVideo: null,
  
  // Basic Info
  title: "Russia Explorer",
  shortTitle: "Russia",
  slug: "russia", 
  summary: "A fascinating journey through Russia's imperial capitals and countryside - from Moscow's Red Square to St. Petersburg's palaces, with a meaningful detour through Vladimir Oblast to explore rural Russian culture and family connections.",
  
  // Trip Details
  year: 2016,
  duration: 10, // days
  season: "summer",
  travelStyle: "solo",
  budget: "mid-range",
  
  // Countries & Cities
  countries: [
    {
      name: "Russia",
      flag: "🇷🇺",
      cities: [
        {
          name: "Moscow",
          days: 4,
          highlights: ["Red Square exploration", "Kremlin tours", "Metro system art", "Soviet history"]
        },
        {
          name: "Vladimir Oblast",
          days: 3,
          highlights: ["Rural countryside", "Traditional villages", "Local family connections", "Authentic Russian culture"]
        },
        {
          name: "St. Petersburg",
          days: 3,
          highlights: ["Hermitage Museum", "Palace tours", "White nights", "Imperial architecture"]
        }
      ]
    }
  ],

  // Stories & Experiences  
  stories: {
    redSquareImpression: {
      title: "First Impressions of Red Square",
      image: "/img/travel/russia/red-square-first-view.webp",
      content: `
        [Story to be written]
        
        Walking into Red Square for the first time...
        The scale and grandeur of St. Basil's Cathedral...
        Understanding Russian history through architecture...
      `
    },
    
    vladimirCountryside: {
      title: "Discovering Rural Russia in Vladimir Oblast",
      image: "/img/travel/russia/vladimir-countryside.webp",
      content: `
        [Story to be written]
        
        The contrast between Moscow and rural Russia...
        Meeting local families and experiencing daily life...
        Traditional Russian hospitality and culture...
      `
    },

    stPetersburgPalaces: {
      title: "Imperial Grandeur in St. Petersburg",
      image: "/img/travel/russia/hermitage-halls.webp",
      content: `
        [Story to be written]
        
        The overwhelming scale of the Hermitage Museum...
        Catherine Palace and the Amber Room recreation...
        White nights and the never-setting summer sun...
      `
    }
  },

  // Personal Moments & Reflections
  personalMoments: {
    culturalBridge: "Understanding Russia beyond political headlines - connecting with the warmth and complexity of Russian people and culture.",
    
    historyLessons: "Walking through places where major world events unfolded, gaining perspective on the human side of historical narratives.",
    
    languageChallenge: "Navigating with minimal Russian language skills taught patience and the universal language of kindness.",
    
    ruralConnection: "Experiencing authentic rural Russian life provided insights into values and traditions beyond the urban centers."
  },

  // Practical Info & Recommendations
  recommendations: {
    bestTime: "May-September for warmest weather, June-July for White Nights in St. Petersburg",
    budget: "$60-80/day for mid-range travel including accommodation and meals",
    
    mustDo: [
      "Red Square and Kremlin tour in Moscow",
      "Hermitage Museum in St. Petersburg (book advance tickets)",
      "Moscow Metro tour - each station is an art gallery",
      "At least one rural excursion outside major cities",
      "Traditional Russian banya (bathhouse) experience"
    ]
  },

  // Photos & Media
  gallery: [
    {
      src: "/img/travel/russia/red-square-overview.webp",
      caption: "The iconic Red Square with St. Basil's Cathedral",
      location: "Moscow, Russia"
    },
    {
      src: "/img/travel/russia/vladimir-rural-life.webp", 
      caption: "Rural life in Vladimir Oblast countryside",
      location: "Vladimir Oblast, Russia"
    },
    {
      src: "/img/travel/russia/hermitage-grandeur.webp",
      caption: "The overwhelming grandeur of the Hermitage Museum", 
      location: "St. Petersburg, Russia"
    }
  ],

  // Tags for filtering/search
  tags: [
    "cultural immersion",
    "history", 
    "imperial architecture",
    "rural exploration",
    "solo travel",
    "museums",
    "traditional culture"
  ]
}

export type TripStory = typeof russiaTrip; 