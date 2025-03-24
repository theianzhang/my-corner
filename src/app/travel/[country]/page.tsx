import Image from 'next/image'
import styles from '@/styles/shared/country-page.module.css'
import QuickLook from '@/components/Country/QuickLook'
import { travelLocations } from '@/data/travelLocations'
import { notFound } from 'next/navigation'

interface CountryPageProps {
  params: {
    country: string;
  }
}

export function generateStaticParams() {
  return travelLocations.map((location) => ({
    country: location.url.split('/').pop()
  }))
}

export default function CountryPage({ params }: CountryPageProps) {
  // Find the country data
  const countryData = travelLocations.find(
    location => location.url === `/travel/${params.country}`
  )

  if (!countryData) {
    notFound()
  }

  // Format visited years
  const formattedYears = Array.isArray(countryData.visitedYear) 
    ? countryData.visitedYear.join(', ') 
    : countryData.visitedYear.toString()

  // Format population in millions with 2 decimal places
  const formattedPopulation = (countryData.countryInfo.population).toFixed(2)

  const facts = [
    { 
      label: 'Population', 
      value: `${formattedPopulation} million` 
    },
    { 
      label: 'GDP', 
      value: `${countryData.countryInfo.gdp.amount} (Rank: ${countryData.countryInfo.gdp.worldRank})` 
    },
    { 
      label: 'Government Type', 
      value: countryData.countryInfo.governmentType 
    },
    { 
      label: 'Currency', 
      value: countryData.countryInfo.currency 
    },
    { 
      label: 'Languages', 
      value: countryData.countryInfo.languages.join(', ') 
    },
    { 
      label: 'Fun Fact', 
      value: countryData.countryInfo.interestingFact 
    }
  ]

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <Image
          src={countryData.thumbnailUrl}
          alt={`${countryData.name} landscape`}
          className={styles.heroImage}
          fill
          priority
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.title}>{countryData.name}</h1>
          <h2 className={styles.subtitle}>{formattedYears}</h2>
        </div>
      </section>

      <div className={styles.content}>
        <QuickLook facts={facts} />
        
        <article className={styles.journalEntry}>
          <p>
            Your travel journal entry will go here. This is a placeholder text that
            will be replaced with your actual experiences, stories, and memories from
            your visit to {countryData.name}.
          </p>
          <p>
            You can include multiple paragraphs, photos, and other content to bring
            your journey to life.
          </p>
        </article>
      </div>
    </div>
  )
} 