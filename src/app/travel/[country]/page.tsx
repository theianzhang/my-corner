import Image from 'next/image'
import styles from '@/styles/shared/country-page.module.css'
import QuickLook from '@/components/Country/QuickLook'
import JournalEntry from '@/components/Country/JournalEntry'
import { travelLocations } from '@/data/travelLocations'
import { getGovernmentDefinition } from '@/data/governmentTypes'
import { notFound } from 'next/navigation'

// Define the types for the RESOLVED params and searchParams
type ResolvedParams = {
  country: string;
};
type ResolvedSearchParams = {
  [key: string]: string | string[] | undefined
};

// Define the props type according to Next.js 15 for async pages
// Note: params and searchParams are now Promises
type CountryPageProps = {
  params: Promise<ResolvedParams>;
  searchParams: Promise<ResolvedSearchParams>; // Type it even if not used immediately
};

export function generateStaticParams() {
  // This function remains the same - it returns the actual param values, not promises
  return travelLocations.map((location) => ({
    country: location.url.split('/').pop()!, // Add non-null assertion if sure
  }));
}

// Change the function signature to accept a single props object
export default async function CountryPage(props: CountryPageProps) {
  // --- Await the props ---
  const params = await props.params;
  // const searchParams = await props.searchParams; // Await if you need searchParams

  // --- Now use the resolved params ---
  const countryData = travelLocations.find(
    location => location.url === `/travel/${params.country}`
  );

  if (!countryData) {
    notFound();
  }

  // Format visited years
  const formattedYears = Array.isArray(countryData.visitedYear)
    ? countryData.visitedYear.join(', ')
    : countryData.visitedYear.toString();

  // Format population in millions with 2 decimal places
  // Ensure countryData.countryInfo.population is a number before calling toFixed
  const populationValue = typeof countryData.countryInfo.population === 'number'
    ? countryData.countryInfo.population
    : parseFloat(countryData.countryInfo.population as string); // Or handle error/default

  const formattedPopulation = !isNaN(populationValue) ? populationValue.toFixed(2) : 'N/A';


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
      value: countryData.countryInfo.governmentType,
      tooltip: getGovernmentDefinition(countryData.countryInfo.governmentType)
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
      label: "Ian's Fun Fact",
      value: countryData.countryInfo.interestingFact
    }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <Image
          src={countryData.thumbnailUrl}
          alt={`${countryData.name} landscape`}
          className={styles.heroImage}
          fill
          priority // Keep priority for LCP
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.title}>{countryData.name}</h1>
          <h2 className={styles.subtitle}>{formattedYears}</h2>
        </div>
      </section>

      <div className={styles.content}>
        <QuickLook facts={facts} />

        <JournalEntry
          journal={countryData.journal}
          countryName={countryData.name}
        />
      </div>
    </div>
  );
}