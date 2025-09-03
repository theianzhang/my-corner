// Epic Journey Data Structure for Travel Timeline River
// This is separate from travelLocations.ts as it focuses on story-worthy adventures
// rather than comprehensive country data

// Import rich trip stories from individual files
import { seAsiaTrip } from './trips/se-asia'
import { scandinaviaTrip } from './trips/scandinavia'
import { sevenSummitsTrip } from './trips/7-summits'
import { russiaTrip } from './trips/russia'
import { seEuropeTrip } from './trips/se-europe'
import { pacific101Trip } from './trips/pacific-101'

export interface EpicJourney {
  id: string
  title: string
  shortTitle?: string
  subtitle?: string
  startDate?: string
  endDate?: string
  duration?: number | string // days or custom string like "100+"
  year?: number | string
  season?: 'spring' | 'summer' | 'fall' | 'winter' | 'year-round'
  travelStyle?: 'solo' | 'couple' | 'family' | 'friends' | string
  countries?: JourneyCountry[]
  story?: {
    summary?: string
    keyMoments?: string[]
    personalReflections?: string[]
    culturalInsights?: string[]
  }
  highlights?: string[]
  photos?: string[]
  tags?: string[]
}

export interface JourneyCountry {
  name: string
  code: string // ISO country code
  coordinates: [number, number] // [lat, lng] for thread positioning
  cities: JourneyCity[]
  isStart?: boolean
  isEnd?: boolean
  daysSpent: number
}

export interface JourneyCity {
  name: string
  coordinates: [number, number] // [lat, lng]
  activities: string[]
  highlights: string[]
  personalMoments?: string[]
  isStart?: boolean
  isEnd?: boolean
}

// Helper function to convert TripStory format to EpicJourney format
function convertTripToJourney(trip: any): EpicJourney {
  return {
    id: trip.slug,
    title: trip.title,
    shortTitle: trip.shortTitle ?? (trip.title.split(' ')[0] + (trip.title.split(' ')[1] ? ' ' + trip.title.split(' ')[1] : '')),
    subtitle: trip.summary.substring(0, 100) + '...',
    startDate: `${trip.year}-01-01`, // Simplified for now
    endDate: `${trip.year}-12-31`,
    duration: trip.duration,
    year: typeof trip.year === 'number' ? trip.year : trip.year,
    season: trip.season,
    travelStyle: trip.travelStyle,
    countries: trip.countries.map((country: any) => ({
      name: country.name,
      code: country.name.substring(0, 2).toUpperCase(), // Simplified
      coordinates: [0, 0] as [number, number], // Would need proper coordinates
      daysSpent: country.cities.reduce((total: number, city: any) => total + city.days, 0),
      cities: country.cities.map((city: any) => ({
        name: city.name,
        coordinates: [0, 0] as [number, number], // Would need proper coordinates
        activities: city.highlights,
        highlights: city.highlights,
        personalMoments: []
      }))
    })),
    story: {
      summary: trip.summary,
      keyMoments: Object.values(trip.stories).map((story: any) => story.title),
      personalReflections: Object.values(trip.personalMoments || {}),
      culturalInsights: trip.recommendations?.culturalTips || []
    },
    highlights: trip.tags,
    photos: trip.gallery?.map((item: any) => item.src) || [],
    tags: trip.tags
  }
}

// Epic journeys extracted from trip files
export const epicJourneys: EpicJourney[] = [
  convertTripToJourney(seAsiaTrip),
  convertTripToJourney(scandinaviaTrip),
  convertTripToJourney(sevenSummitsTrip),
  convertTripToJourney(russiaTrip),
  convertTripToJourney(seEuropeTrip),
  convertTripToJourney(pacific101Trip)
]

// Export the original trip stories for detailed blog pages
export const tripStories = {
  'se-asia': seAsiaTrip,
  'scandinavia': scandinaviaTrip,
  '7-summits': sevenSummitsTrip,
  'russia': russiaTrip,
  'se-europe': seEuropeTrip,
  'pacific-101': pacific101Trip
}

// Helper functions for the timeline river
export const getJourneyColor = (year: number): string => {
  const colors = {
    2013: '#FF6B6B', // Warm red
    2015: '#FF8E53', // Orange
    2016: '#FF9F43', // Light orange
    2017: '#FFA726', // Amber
    2018: '#FFCA28', // Yellow
    2019: '#66BB6A', // Light green
    2021: '#42A5F5', // Light blue
    2022: '#5C6BC0', // Indigo
    2023: '#AB47BC', // Purple
    2024: '#EC407A', // Pink
    2025: '#26A69A'  // Teal
  }
  return colors[year as keyof typeof colors] || '#9E9E9E'
}

export const getSeasonColor = (season: string): string => {
  const colors = {
    spring: '#66BB6A', // Fresh green
    summer: '#FFA726', // Warm orange
    fall: '#D32F2F',   // Rich red
    winter: '#1976D2'  // Cool blue
  }
  return colors[season as keyof typeof colors] || '#9E9E9E'
}

export const getTravelStyleIcon = (style: string): string => {
  const icons = {
    solo: '🎒',
    couple: '💕',
    family: '👨‍👩‍👧‍👦',
    friends: '👥'
  }
  return icons[style as keyof typeof icons] || '✈️'
}

// Calculate thread path between cities for visualization
export const calculateThreadPath = (cities: JourneyCity[]): string => {
  if (cities.length < 2) return ''
  
  const pathCommands = cities.map((city, index) => {
    const x = 20 + index * 60 // Spacing for SVG
    const y = 40 + (index % 2) * 10 // Slight vertical variation
    return index === 0 ? `M ${x} ${y}` : `Q ${x - 30} ${y - 10} ${x} ${y}`
  })
  
  return pathCommands.join(' ')
}
