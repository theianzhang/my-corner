export const pacific101Trip = {
  // Hero Section
  heroImage: "/img/travel/pacific-101/big-sur-hero.webp",
  heroVideo: null,
  
  // Basic Info
  title: "Pacific 1",
  slug: "pacific-101", 
  summary: "The ultimate American road trip - seven days cruising from Seattle to San Diego on the legendary Pacific Coast Highway. From Washington's rugged coastlines to California's iconic beaches, discovering hidden gems and classic stops along one of the world's most scenic drives.",
  
  // Trip Details
  year: "20XX", // Future/template trip
  duration: 7, // days
  season: "summer",
  travelStyle: "road trip",
  budget: "mid-range",
  
  // States & Cities
  countries: [
    {
      name: "United States",
      flag: "🇺🇸",
      cities: [
        {
          name: "Seattle, WA",
          days: 1,
          highlights: ["Pike Place Market", "Space Needle views", "Coffee culture", "Ferry rides"]
        },
        {
          name: "Portland, OR", 
          days: 1,
          highlights: ["Food truck scene", "Powell's Books", "Brewery tours", "Quirky culture"]
        },
        {
          name: "Humboldt County, CA",
          days: 1,
          highlights: ["Redwood forests", "Avenue of Giants", "Lost Coast", "Small town charm"]
        },
        {
          name: "San Francisco, CA",
          days: 1,
          highlights: ["Golden Gate Bridge", "Alcatraz", "Lombard Street", "Fisherman's Wharf"]
        },
        {
          name: "Big Sur, CA",
          days: 1,
          highlights: ["McWay Falls", "Bixby Bridge", "Coastal camping", "Dramatic cliffs"]
        },
        {
          name: "Los Angeles, CA",
          days: 1,
          highlights: ["Venice Beach", "Hollywood", "Griffith Observatory", "Beach culture"]
        },
        {
          name: "San Diego, CA",
          days: 1,
          highlights: ["Balboa Park", "Sunset Cliffs", "Gaslamp Quarter", "Perfect weather"]
        }
      ]
    }
  ],

  // Stories & Experiences  
  stories: {
    roadTripFreedom: {
      title: "The Freedom of the Open Road",
      image: "/img/travel/pacific-101/highway-1-drive.webp",
      content: `
        [Story to be written when trip happens]
        
        The pure joy of driving with no schedule except your own...
        Discovering unexpected stops and roadside attractions...
        How the landscape changes dramatically every few hours...
      `
    },
    
    redwoodAwe: {
      title: "Walking Among Giants in the Redwood Forests",
      image: "/img/travel/pacific-101/redwood-cathedral.webp",
      content: `
        [Story to be written when trip happens]
        
        The humbling experience of standing next to 2000-year-old trees...
        The cathedral-like silence of the ancient forest...
        Understanding the scale of nature's time versus human time...
      `
    },

    bigSurMagic: {
      title: "Big Sur - Where Mountains Meet the Sea",
      image: "/img/travel/pacific-101/mcway-falls.webp",
      content: `
        [Story to be written when trip happens]
        
        The most dramatic coastline in America...
        Camping under stars with waves crashing below...
        Why this stretch of coast inspired generations of artists and writers...
      `
    }
  },

  // Personal Moments & Reflections
  personalMoments: {
    solitude: "Finding peace in the rhythm of the road and the constant presence of the ocean.",
    
    americanDream: "Experiencing the classic American road trip - a rite of passage that connects you to generations of travelers.",
    
    naturalConnection: "Being reminded of the incredible natural diversity within one country - from rainforests to deserts to dramatic coastlines.",
    
    simplicity: "Learning that some of the best travel experiences come from simple pleasures: good music, beautiful views, and the open road."
  },

  // Practical Info & Recommendations
  recommendations: {
    bestTime: "May-September for best weather, avoid winter storms on coastal roads",
    budget: "$100-150/day including car rental, gas, food, and accommodation",
    
    mustDo: [
      "Drive the full Highway 1 from San Francisco to San Diego at least once",
      "Stop at every scenic overlook - you'll regret the ones you skip",
      "Camp at least one night along the coast for the full experience", 
      "Allow extra time for traffic in major cities",
      "Download offline maps - cell service can be spotty on remote stretches"
    ],
    
    roadTripTips: [
      "Book coastal accommodations well in advance, especially in summer",
      "Keep your gas tank full - stations can be far apart on Highway 1",
      "Pack layers - coastal weather changes dramatically throughout the day",
      "Bring a good camera or phone with extra battery - photo ops are constant"
    ],
    
    hiddenGems: [
      "Cannon Beach, OR - iconic haystack rocks",
      "Mendocino, CA - Victorian village on dramatic bluffs",
      "Hearst Castle - opulent mansion with incredible history",
      "Pismo Beach - sand dunes and classic beach town vibes"
    ]
  },

  // Photos & Media
  gallery: [
    {
      src: "/img/travel/pacific-101/seattle-space-needle.webp",
      caption: "Starting the journey in Seattle with views from the Space Needle",
      location: "Seattle, Washington"
    },
    {
      src: "/img/travel/pacific-101/redwood-avenue-giants.webp", 
      caption: "Driving through cathedral-like redwood forests",
      location: "Humboldt County, California"
    },
    {
      src: "/img/travel/pacific-101/golden-gate-fog.webp",
      caption: "The Golden Gate Bridge emerging from San Francisco fog", 
      location: "San Francisco, California"
    },
    {
      src: "/img/travel/pacific-101/big-sur-sunset.webp",
      caption: "Sunset over the dramatic Big Sur coastline", 
      location: "Big Sur, California"
    }
  ],

  // Route Planning
  route: {
    totalMiles: 1200,
    drivingTime: "20+ hours total driving time",
    bestStops: [
      "Pike Place Market, Seattle",
      "Multnomah Falls, Oregon", 
      "Avenue of the Giants, California",
      "Golden Gate Bridge, San Francisco",
      "Bixby Creek Bridge, Big Sur",
      "Santa Monica Pier, Los Angeles",
      "Sunset Cliffs, San Diego"
    ]
  },

  // Tags for filtering/search
  tags: [
    "road trip",
    "pacific coast", 
    "american west",
    "coastal drive",
    "national parks",
    "beach culture",
    "scenic drives",
    "classic americana"
  ]
}

export type TripStory = typeof pacific101Trip; 