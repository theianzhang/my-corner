export const seEuropeTrip = {
  // Hero Section
  heroImage: "/img/travel/se-europe/balkan-mountains-hero.webp",
  heroVideo: null,
  
  // Basic Info
  title: "Southeast Europe Discovery", 
  shortTitle: "SE Europe",
  slug: "se-europe",
  summary: "An incredible journey through the Balkans - from Belgrade's vibrant nightlife to Sarajevo's complex history, Montenegro's dramatic coastlines, Albania's hidden gems, and North Macedonia's cultural treasures. Twelve days exploring Europe's most fascinating and complex region.",
  
  // Trip Details
  year: 2025,
  duration: 12, // days
  season: "spring",
  travelStyle: "solo",
  budget: "budget",
  
  // Countries & Cities
  countries: [
    {
      name: "Serbia",
      flag: "🇷🇸",
      cities: [
        {
          name: "Belgrade",
          days: 3,
          highlights: ["Kafana culture", "Fortress views", "Danube riverfront", "Local history"]
        }
      ]
    },
    {
      name: "Bosnia and Herzegovina",
      flag: "🇧🇦", 
      cities: [
        {
          name: "Sarajevo",
          days: 3,
          highlights: ["Siege history", "Ottoman old town", "Coffee culture", "Bridge symbolism"]
        }
      ]
    },
    {
      name: "Montenegro",
      flag: "🇲🇪",
      cities: [
        {
          name: "Kotor",
          days: 2,
          highlights: ["Bay of Kotor", "Medieval old town", "Mountain hiking", "Adriatic coast"]
        }
      ]
    },
    {
      name: "Albania", 
      flag: "🇦🇱",
      cities: [
        {
          name: "Tirana",
          days: 2,
          highlights: ["Colorful architecture", "Communist history", "Mountain day trips", "Albanian hospitality"]
        }
      ]
    },
    {
      name: "North Macedonia",
      flag: "🇲🇰",
      cities: [
        {
          name: "Skopje",
          days: 2,
          highlights: ["Statue park", "Ottoman bazaar", "Fortress views", "Cultural diversity"]
        }
      ]
    }
  ],

  // Stories & Experiences  
  stories: {
    balkanComplexity: {
      title: "Understanding Balkan History and Identity",
      image: "/img/travel/se-europe/sarajevo-bridge.webp",
      content: `
        [Story to be written when trip happens]
        
        The complex layers of history in every city...
        How recent conflicts still shape daily life...
        The incredible resilience and hospitality of people...
      `
    },
    
    hiddenGems: {
      title: "Discovering Europe's Hidden Corner",
      image: "/img/travel/se-europe/albanian-coast.webp",
      content: `
        [Story to be written when trip happens]
        
        Finding incredible landscapes without crowds...
        The surprising diversity across small distances...
        Budget travel in regions off the typical tourist trail...
      `
    }
  },

  // Personal Moments & Reflections
  personalMoments: {
    historyLessons: "Learning about recent European conflicts from people who lived through them - a perspective rarely shared in Western media.",
    
    culturalBridge: "Discovering the intersection of Ottoman, Austro-Hungarian, and Slavic influences in a small geographic area.",
    
    budgetTravel: "Proving that incredible experiences don't require big budgets - the Balkans offer amazing value for adventurous travelers."
  },

  // Practical Info & Recommendations  
  recommendations: {
    bestTime: "April-June or September-October for mild weather and fewer crowds",
    budget: "$25-40/day - incredible value compared to Western Europe",
    
    mustDo: [
      "Take time to understand local history in each country",
      "Try traditional foods - each country has distinct cuisine", 
      "Use overland transport to see countryside changes",
      "Visit at least one UNESCO site per country",
      "Engage with locals about recent history and current life"
    ]
  },

  // Photos & Media
  gallery: [
    {
      src: "/img/travel/se-europe/belgrade-fortress.webp",
      caption: "Belgrade Fortress overlooking the Danube confluence",
      location: "Belgrade, Serbia"
    },
    {
      src: "/img/travel/se-europe/sarajevo-old-town.webp", 
      caption: "Ottoman architecture in Sarajevo's historic center",
      location: "Sarajevo, Bosnia and Herzegovina"
    },
    {
      src: "/img/travel/se-europe/kotor-bay.webp",
      caption: "The stunning Bay of Kotor from the fortress walls", 
      location: "Kotor, Montenegro"
    }
  ],

  // Tags for filtering/search
  tags: [
    "balkans",
    "history", 
    "budget travel",
    "cultural immersion",
    "off-the-beaten-path",
    "recent history",
    "solo travel"
  ]
}

export type TripStory = typeof seEuropeTrip; 