interface TravelLocation {
  id: string;
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  url: string;
  thumbnailUrl: string;
  visited: boolean;
  visitedYear: number | number[];  // Can be single year or array of years
  countryInfo: {
    population: number;
    gdp: {
      amount: string;  // e.g. "$21.4 trillion"
      worldRank: number;
    };
    interestingFact: string;
    governmentType: string;  // At time of visit
    currency: string;  // At time of visit
    languages: string[];  // Official languages
  };
}

export const travelLocations: TravelLocation[] = [
  {
    id: 'AR',
    name: 'Argentina',
    coordinates: [-38.4161, -63.6167],
    url: '/travel/argentina',
    thumbnailUrl: '/img/country-thumbs/argentina.webp',
    visited: true,
    visitedYear: 2023,
    countryInfo: {
      population: 45.38,
      gdp: {
        amount: "$384.4 billion",
        worldRank: 32
      },
      interestingFact: "Argentina is the eighth largest country in the world by area.",
      governmentType: "Federal Republic",
      currency: "Argentine peso",
      languages: ["Spanish"]
    }
  },
  {
    id: 'AU',
    name: 'Australia',
    coordinates: [-25.2744, 133.7751],
    url: '/travel/australia',
    thumbnailUrl: '/img/country-thumbs/australia.webp',
    visited: true,
    visitedYear: 2018,
    countryInfo: {
      population: 25.78,
      gdp: {
        amount: "$1.47 trillion",
        worldRank: 14
      },
      interestingFact: "Australia is the smallest continent but the sixth largest country in the world.",
      governmentType: "Federal parliamentary democracy",
      currency: "Australian dollar",
      languages: ["English"]
    }
  },
  {
    id: 'AT',
    name: 'Austria',
    coordinates: [47.5162, 14.5501],
    url: '/travel/austria',
    thumbnailUrl: '/img/country-thumbs/austria.webp',
    visited: true,
    visitedYear: 2023,
    countryInfo: {
      population: 9.012,
      gdp: {
        amount: "$435.4 billion",
        worldRank: 34
      },
      interestingFact: "Austria is the world's second largest exporter of musical instruments.",
      governmentType: "Federal parliamentary democracy",
      currency: "Euro",
      languages: ["German"]
    }
  },
  {
    id: 'BY',
    name: 'Belarus',
    coordinates: [53.7098, 27.9534],
    url: '/travel/belarus',
    thumbnailUrl: '/img/country-thumbs/belarus.webp',
    visited: true,
    visitedYear: 2016,
    countryInfo: {
      population: 9.4,
      gdp: {
        amount: "$54.2 billion",
        worldRank: 114
      },
      interestingFact: "Belarus is the only European country not bordering the Black Sea.",
      governmentType: "Unitary presidential constitutional republic",
      currency: "Belarusian ruble",
      languages: ["Belarusian", "Russian"]
    }
  },
  {
    id: 'BE',
    name: 'Belgium',
    coordinates: [50.8503, 4.3517],
    url: '/travel/belgium',
    thumbnailUrl: '/img/country-thumbs/belgium.webp',
    visited: true,
    visitedYear: [2016, 2022],
    countryInfo: {
      population: 11.59,
      gdp: {
        amount: "$519.5 billion",
        worldRank: 33
      },
      interestingFact: "Belgium is the only country in the world with a national holiday on the first of every month.",
      governmentType: "Federal parliamentary democracy",
      currency: "Euro",
      languages: ["Dutch", "French", "German"]
    }
  },
  {
    id: 'BZ',
    name: 'Belize',
    coordinates: [17.1899, -88.4976],
    url: '/travel/belize',
    thumbnailUrl: '/img/country-thumbs/belize.webp',
    visited: true,
    visitedYear: 2017,
    countryInfo: {
      population: 0.4,
      gdp: {
        amount: "$1.9 billion",
        worldRank: 187
      },
      interestingFact: "Belize is the only country in Central America that speaks both English and Spanish.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Belize dollar",
      languages: ["English"]
    }
  },
  {
    id: 'KH',
    name: 'Cambodia',
    coordinates: [12.5657, 104.9910],
    url: '/travel/cambodia',
    thumbnailUrl: '/img/country-thumbs/cambodia.webp',
    visited: true,
    visitedYear: 2015,
    countryInfo: {
      population: 16.72,
      gdp: {
        amount: "$24.2 billion",
        worldRank: 124
      },
      interestingFact: "Cambodia is the only Southeast Asian country to have been a French colony.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Cambodian riel",
      languages: ["Khmer"]
    }
  },
  {
    id: 'CA',
    name: 'Canada',
    coordinates: [56.1304, -106.3468],
    url: '/travel/canada',
    thumbnailUrl: '/img/country-thumbs/canada.webp',
    visited: true,
    visitedYear: 3000,
    countryInfo: {
      population: 38.01,
      gdp: {
        amount: "$1.93 trillion",
        worldRank: 10
      },
      interestingFact: "Canada is the world's largest producer of uranium.",
      governmentType: "Federal parliamentary democracy",
      currency: "Canadian dollar",
      languages: ["English", "French"]
    }
  },
  {
    id: 'CL',
    name: 'Chile',
    coordinates: [-35.6751, -71.5430],
    url: '/travel/chile',
    thumbnailUrl: '/img/country-thumbs/chile.webp',
    visited: true,
    visitedYear: 2023,
    countryInfo: {
      population: 19.12,
      gdp: {
        amount: "$284.4 billion",
        worldRank: 38
      },
      interestingFact: "Chile is the world's leading producer of copper.",
      governmentType: "Unitary presidential constitutional republic",
      currency: "Chilean peso",
      languages: ["Spanish"]
    }
  },
  {
    id: 'CN',
    name: 'China',
    coordinates: [35.8617, 104.1954],
    url: '/travel/china',
    thumbnailUrl: '/img/country-thumbs/china.webp',
    visited: true,
    visitedYear: 3000,
    countryInfo: {
      population: 1.402,
      gdp: {
        amount: "$17.7 trillion",
        worldRank: 2
      },
      interestingFact: "China is the world's most populous country.",
      governmentType: "Unitary socialist state",
      currency: "Renminbi",
      languages: ["Chinese"]
    }
  },
  {
    id: 'CO',
    name: 'Colombia',
    coordinates: [4.5709, -74.2973],
    url: '/travel/colombia',
    thumbnailUrl: '/img/country-thumbs/colombia.webp',
    visited: true,
    visitedYear: [2016, 2023],
    countryInfo: {
      population: 50.88,
      gdp: {
        amount: "$274.4 billion",
        worldRank: 40
      },
      interestingFact: "Colombia is the only South American country with coastlines on both the Caribbean and Pacific Oceans.",
      governmentType: "Unitary presidential constitutional republic",
      currency: "Colombian peso",
      languages: ["Spanish"]
    }
  },
  {
    id: 'CZ',
    name: 'Czech Republic',
    coordinates: [49.8175, 15.4730],
    url: '/travel/czech',
    thumbnailUrl: '/img/country-thumbs/czech.webp',
    visited: true,
    visitedYear: 2019,
    countryInfo: {
      population: 10.71,
      gdp: {
        amount: "$244.4 billion",
        worldRank: 44
      },
      interestingFact: "The Czech Republic is the birthplace of Franz Kafka.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Czech koruna",
      languages: ["Czech"]
    }
  },
  {
    id: 'DK',
    name: 'Denmark',
    coordinates: [56.2639, 9.5018],
    url: '/travel/denmark',
    thumbnailUrl: '/img/country-thumbs/denmark.webp',
    visited: true,
    visitedYear: 2023,
    countryInfo: {
      population: 5.852,
      gdp: {
        amount: "$344.4 billion",
        worldRank: 37
      },
      interestingFact: "Denmark is the birthplace of Hans Christian Andersen.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Danish krone",
      languages: ["Danish"]
    }
  },
  {
    id: 'EG',
    name: 'Egypt',
    coordinates: [26.8206, 30.8025],
    url: '/travel/egypt',
    thumbnailUrl: '/img/country-thumbs/egypt.webp',
    visited: true,
    visitedYear: 2023,
    countryInfo: {
      population: 102.4,
      gdp: {
        amount: "$344.4 billion",
        worldRank: 24
      },
      interestingFact: "Egypt is the world's largest exporter of dates.",
      governmentType: "Unitary presidential constitutional republic",
      currency: "Egyptian pound",
      languages: ["Arabic"]
    }
  },
  {
    id: 'FR',
    name: 'France',
    coordinates: [46.2276, 2.2137],
    url: '/travel/france',
    thumbnailUrl: '/img/country-thumbs/france.webp',
    visited: true,
    visitedYear: 3000,
    countryInfo: {
      population: 67.4,
      gdp: {
        amount: "$2.8 trillion",
        worldRank: 7
      },
      interestingFact: "France is the world's largest wine producer.",
      governmentType: "Unitary semi-presidential democracy",
      currency: "Euro",
      languages: ["French"]
    }
  },
  {
    id: 'DE',
    name: 'Germany',
    coordinates: [51.1657, 10.4515],
    url: '/travel/germany',
    thumbnailUrl: '/img/country-thumbs/germany.webp',
    visited: true,
    visitedYear: [2016, 2023, 2024],
    countryInfo: {
      population: 83.24,
      gdp: {
        amount: "$4.1 trillion",
        worldRank: 2
      },
      interestingFact: "Germany is the world's largest exporter of machinery and vehicles.",
      governmentType: "Federal parliamentary democracy",
      currency: "Euro",
      languages: ["German"]
    }
  },
  {
    id: 'GT',
    name: 'Guatemala',
    coordinates: [15.7835, -90.2308],
    url: '/travel/guatemala',
    thumbnailUrl: '/img/country-thumbs/guatemala.webp',
    visited: true,
    visitedYear: 2024,
    countryInfo: {
      population: 18.2,
      gdp: {
        amount: "$84.4 billion",
        worldRank: 77
      },
      interestingFact: "Guatemala is the most archaeologically rich country in the world.",
      governmentType: "Unitary presidential constitutional republic",
      currency: "Guatemalan quetzal",
      languages: ["Spanish"]
    }
  },
  {
    id: 'HU',
    name: 'Hungary',
    coordinates: [47.1625, 19.5033],
    url: '/travel/hungary',
    thumbnailUrl: '/img/country-thumbs/hungary.webp',
    visited: true,
    visitedYear: 2023,
    countryInfo: {
      population: 9.66,
      gdp: {
        amount: "$184.4 billion",
        worldRank: 54
      },
      interestingFact: "Hungary is the only country in the world with a landlocked capital.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Hungarian forint",
      languages: ["Hungarian"]
    }
  },
  {
    id: 'IS',
    name: 'Iceland',
    coordinates: [64.9631, -19.0208],
    url: '/travel/iceland',
    thumbnailUrl: '/img/country-thumbs/iceland.webp',
    visited: true,
    visitedYear: 2023,
    countryInfo: {
      population: 0.36,
      gdp: {
        amount: "$24.4 billion",
        worldRank: 134
      },
      interestingFact: "Iceland is the only country in the world with a national park under the sea.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Icelandic króna",
      languages: ["Icelandic"]
    }
  },
  {
    id: 'IN',
    name: 'India',
    coordinates: [20.5937, 78.9629],
    url: '/travel/india',
    thumbnailUrl: '/img/country-thumbs/india.webp',
    visited: true,
    visitedYear: 2019,
    countryInfo: {
      population: 1.38,
      gdp: {
        amount: "$3.3 trillion",
        worldRank: 7
      },
      interestingFact: "India is the world's largest democracy.",
      governmentType: "Federal parliamentary democracy",
      currency: "Indian rupee",
      languages: ["Hindi", "English"]
    }
  },
  {
    id: 'IE',
    name: 'Ireland',
    coordinates: [53.1424, -7.6921],
    url: '/travel/ireland',
    thumbnailUrl: '/img/country-thumbs/ireland.webp',
    visited: true,
    visitedYear: 2016,
    countryInfo: {
      population: 4.94,
      gdp: {
        amount: "$354.4 billion",
        worldRank: 42
      },
      interestingFact: "Ireland is the only English-speaking country in the EU.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Euro",
      languages: ["Irish", "English"]
    }
  },
  {
    id: 'IT',
    name: 'Italy',
    coordinates: [41.8719, 12.5674],
    url: '/travel/italy',
    thumbnailUrl: '/img/country-thumbs/italy.webp',
    visited: true,
    visitedYear: 3000,
    countryInfo: {
      population: 60.46,
      gdp: {
        amount: "$2.1 trillion",
        worldRank: 8
      },
      interestingFact: "Italy is the world's largest producer of pasta.",
      governmentType: "Unitary parliamentary republic",
      currency: "Euro",
      languages: ["Italian"]
    }
  },
  {
    id: 'JM',
    name: 'Jamaica',
    coordinates: [18.1096, -77.2975],
    url: '/travel/jamaica',
    thumbnailUrl: '/img/country-thumbs/jamaica.webp',
    visited: true,
    visitedYear: 2017,
    countryInfo: {
      population: 2.97,
      gdp: {
        amount: "$24.4 billion",
        worldRank: 125
      },
      interestingFact: "Jamaica is the birthplace of reggae music.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Jamaican dollar",
      languages: ["English"]
    }
  },
  {
    id: 'JP',
    name: 'Japan',
    coordinates: [36.2048, 138.2529],
    url: '/travel/japan',
    thumbnailUrl: '/img/country-thumbs/japan.webp',
    visited: true,
    visitedYear: 2024,
    countryInfo: {
      population: 125.8,
      gdp: {
        amount: "$5.4 trillion",
        worldRank: 3
      },
      interestingFact: "Japan is the world's largest island country.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Japanese yen",
      languages: ["Japanese"]
    }
  },
  {
    id: 'KR',
    name: 'South Korea',
    coordinates: [35.9078, 127.7669],
    url: '/travel/korea',
    thumbnailUrl: '/img/country-thumbs/korea.webp',
    visited: true,
    visitedYear: 2013,
    countryInfo: {
      population: 51.26,
      gdp: {
        amount: "$1.6 trillion",
        worldRank: 11
      },
      interestingFact: "South Korea is the world's fourth largest economy in terms of purchasing power parity.",
      governmentType: "Unitary presidential constitutional republic",
      currency: "South Korean won",
      languages: ["Korean"]
    }
  },
  {
    id: 'LU',
    name: 'Luxembourg',
    coordinates: [49.8153, 6.1296],
    url: '/travel/luxembourg',
    thumbnailUrl: '/img/country-thumbs/luxembourg.webp',
    visited: true,
    visitedYear: 2025,
    countryInfo: {
      population: 0.63,
      gdp: {
        amount: "$74.4 billion",
        worldRank: 64
      },
      interestingFact: "Luxembourg is the world's largest investment fund center.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Euro",
      languages: ["Luxembourgish", "French", "German"]
    }
  },
  {
    id: 'MT',
    name: 'Malta',
    coordinates: [35.9375, 14.3754],
    url: '/travel/malta',
    thumbnailUrl: '/img/country-thumbs/malta.webp',
    visited: true,
    visitedYear: 2024,
    countryInfo: {
      population: 0.44,
      gdp: {
        amount: "$14.4 billion",
        worldRank: 144
      },
      interestingFact: "Malta is the smallest country in the EU by land area.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Euro",
      languages: ["Maltese", "English"]
    }
  },
  {
    id: 'MX',
    name: 'Mexico',
    coordinates: [23.6345, -102.5528],
    url: '/travel/mexico',
    thumbnailUrl: '/img/country-thumbs/mexico.webp',
    visited: true,
    visitedYear: 3000,
    countryInfo: {
      population: 126.2,
      gdp: {
        amount: "$1.3 trillion",
        worldRank: 13
      },
      interestingFact: "Mexico is the world's largest producer of silver.",
      governmentType: "Unitary federal republic",
      currency: "Mexican peso",
      languages: ["Spanish"]
    }
  },
  {
    id: 'NL',
    name: 'Netherlands',
    coordinates: [52.1326, 5.2913],
    url: '/travel/netherlands',
    thumbnailUrl: '/img/country-thumbs/netherlands.webp',
    visited: true,
    visitedYear: 2023,
    countryInfo: {
      population: 17.13,
      gdp: {
        amount: "$884.4 billion",
        worldRank: 20
      },
      interestingFact: "The Netherlands is the world's largest exporter of agricultural products.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Euro",
      languages: ["Dutch"]
    }
  },
  {
    id: 'NO',
    name: 'Norway',
    coordinates: [60.4720, 8.4689],
    url: '/travel/norway',
    thumbnailUrl: '/img/country-thumbs/norway.webp',
    visited: true,
    visitedYear: 2023,
    countryInfo: {
      population: 5.42,
      gdp: {
        amount: "$404.4 billion",
        worldRank: 39
      },
      interestingFact: "Norway is the world's largest exporter of hydroelectric power.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Norwegian krone",
      languages: ["Norwegian"]
    }
  },
  {
    id: 'PE',
    name: 'Peru',
    coordinates: [-9.1900, -75.0152],
    url: '/travel/peru',
    thumbnailUrl: '/img/country-thumbs/peru.webp',
    visited: true,
    visitedYear: 2013,
    countryInfo: {
      population: 33.0,
      gdp: {
        amount: "$244.4 billion",
        worldRank: 41
      },
      interestingFact: "Peru is the world's largest producer of quinoa.",
      governmentType: "Unitary presidential constitutional republic",
      currency: "Peruvian sol",
      languages: ["Spanish"]
    }
  },
  {
    id: 'PT',
    name: 'Portugal',
    coordinates: [39.3999, -8.2245],
    url: '/travel/portugal',
    thumbnailUrl: '/img/country-thumbs/portugal.webp',
    visited: true,
    visitedYear: 2023,
    countryInfo: {
      population: 10.28,
      gdp: {
        amount: "$244.4 billion",
        worldRank: 43
      },
      interestingFact: "Portugal is the world's largest cork producer.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Euro",
      languages: ["Portuguese"]
    }
  },
  {
    id: 'RU',
    name: 'Russia',
    coordinates: [61.5240, 105.3188],
    url: '/travel/russia',
    thumbnailUrl: '/img/country-thumbs/russia.webp',
    visited: true,
    visitedYear: 2017,
    countryInfo: {
      population: 145.93,
      gdp: {
        amount: "$1.8 trillion",
        worldRank: 11
      },
      interestingFact: "Russia is the world's largest country by land area.",
      governmentType: "Unitary presidential constitutional republic",
      currency: "Russian ruble",
      languages: ["Russian"]
    }
  },
  {
    id: 'ES',
    name: 'Spain',
    coordinates: [40.4637, -3.7492],
    url: '/travel/spain',
    thumbnailUrl: '/img/country-thumbs/spain.webp',
    visited: true,
    visitedYear: 3000,
    countryInfo: {
      population: 47.35,
      gdp: {
        amount: "$1.4 trillion",
        worldRank: 13
      },
      interestingFact: "Spain is the world's largest producer of olive oil.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Euro",
      languages: ["Spanish"]
    }
  },
  {
    id: 'SE',
    name: 'Sweden',
    coordinates: [60.1282, 18.6435],
    url: '/travel/sweden',
    thumbnailUrl: '/img/country-thumbs/sweden.webp',
    visited: true,
    visitedYear: 2023,
    countryInfo: {
      population: 10.45,
      gdp: {
        amount: "$584.4 billion",
        worldRank: 24
      },
      interestingFact: "Sweden is the world's largest exporter of forest products.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Swedish krona",
      languages: ["Swedish"]
    }
  },
  {
    id: 'CH',
    name: 'Switzerland',
    coordinates: [46.8182, 8.2275],
    url: '/travel/switzerland',
    thumbnailUrl: '/img/country-thumbs/suisse.webp',
    visited: true,
    visitedYear: 2022,
    countryInfo: {
      population: 8.65,
      gdp: {
        amount: "$744.4 billion",
        worldRank: 22
      },
      interestingFact: "Switzerland is the world's largest exporter of watches and clocks.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Swiss franc",
      languages: ["German", "French", "Italian"]
    }
  },
  {
    id: 'TZ',
    name: 'Tanzania',
    coordinates: [-6.3690, 34.8888],
    url: '/travel/tanzania',
    thumbnailUrl: '/img/country-thumbs/tanzania.webp',
    visited: true,
    visitedYear: 2021,
    countryInfo: {
      population: 60.8,
      gdp: {
        amount: "$144.4 billion",
        worldRank: 74
      },
      interestingFact: "Tanzania is the world's largest producer of tanzanite.",
      governmentType: "Unitary presidential constitutional republic",
      currency: "Tanzanian shilling",
      languages: ["Swahili", "English"]
    }
  },
  {
    id: 'TH',
    name: 'Thailand',
    coordinates: [15.8700, 100.9925],
    url: '/travel/thailand',
    thumbnailUrl: '/img/country-thumbs/thailand.webp',
    visited: true,
    visitedYear: 2015,
    countryInfo: {
      population: 69.95,
      gdp: {
        amount: "$444.4 billion",
        worldRank: 25
      },
      interestingFact: "Thailand is the world's largest exporter of rice.",
      governmentType: "Unitary parliamentary democracy",
      currency: "Thai baht",
      languages: ["Thai"]
    }
  },
  {
    id: 'GB',
    name: 'United Kingdom',
    coordinates: [55.3781, -3.4360],
    url: '/travel/united-kingdom',
    thumbnailUrl: '/img/country-thumbs/uk.webp',
    visited: true,
    visitedYear: 3000,
    countryInfo: {
      population: 67.88,
      gdp: {
        amount: "$3.2 trillion",
        worldRank: 5
      },
      interestingFact: "The UK is the world's fifth largest economy in terms of purchasing power parity.",
      governmentType: "Unitary parliamentary democracy",
      currency: "British pound",
      languages: ["English"]
    }
  },
  {
    id: 'US',
    name: 'United States',
    coordinates: [37.0902, -95.7129],
    url: '/travel/united-states',
    thumbnailUrl: '/img/country-thumbs/usa.webp',
    visited: true,
    visitedYear: 3000,
    countryInfo: {
      population: 331.9,
      gdp: {
        amount: "$23.4 trillion",
        worldRank: 1
      },
      interestingFact: "The US is the world's largest economy in terms of nominal GDP.",
      governmentType: "Federal presidential constitutional republic",
      currency: "US dollar",
      languages: ["English"]
    }
  },
  {
    id: 'VA',
    name: 'Vatican City',
    coordinates: [41.9029, 12.4534],
    url: '/travel/vatican',
    thumbnailUrl: '/img/country-thumbs/vatican.webp',
    visited: true,
    visitedYear: 2013,
    countryInfo: {
      population: 0.8,
      gdp: {
        amount: "$14.4 billion",
        worldRank: 150
      },
      interestingFact: "Vatican City is the smallest country in the world by land area.",
      governmentType: "Unitary ecclesiastical state",
      currency: "Euro",
      languages: ["Italian"]
    }
  },
  {
    id: 'VN',
    name: 'Vietnam',
    coordinates: [14.0583, 108.2772],
    url: '/travel/vietnam',
    thumbnailUrl: '/img/country-thumbs/vietnam.webp',
    visited: true,
    visitedYear: 2015,
    countryInfo: {
      population: 97.34,
      gdp: {
        amount: "$344.4 billion",
        worldRank: 42
      },
      interestingFact: "Vietnam is the world's largest producer of cashews.",
      governmentType: "Unitary socialist republic",
      currency: "Vietnamese dong",
      languages: ["Vietnamese"]
    }
  },
  {
    id: 'SM',
    name: 'San Marino',
    coordinates: [43.9424, 12.4578],
    url: '/travel/san-marino',
    thumbnailUrl: '/img/country-thumbs/san-marino.webp',
    visited: true,
    visitedYear: 2023,
    countryInfo: {
      population: 0.034,
      gdp: {
        amount: '$1.7 billion',
        worldRank: 174
      },
      interestingFact: 'San Marino is the oldest surviving sovereign state and constitutional republic in the world (since 301 AD).',
      governmentType: 'Unitary parliamentary republic',
      currency: 'Euro',
      languages: ['Italian']
    }
  },
  {
    id: 'RS',
    name: 'Serbia',
    coordinates: [44.0165, 21.0059],
    url: '/travel/serbia',
    thumbnailUrl: '/img/country-thumbs/serbia.webp',
    visited: true,
    visitedYear: 2025,
    countryInfo: {
      population: 6.83,
      gdp: {
        amount: '$63.1 billion',
        worldRank: 87
      },
      interestingFact: 'Belgrade is one of the oldest continuously inhabited cities in Europe.',
      governmentType: 'Parliamentary republic',
      currency: 'Serbian dinar',
      languages: ['Serbian']
    }
  },
  {
    id: 'BA',
    name: 'Bosnia and Herzegovina',
    coordinates: [43.9159, 17.6791],
    url: '/travel/bosnia',
    thumbnailUrl: '/img/country-thumbs/bosnia.webp',
    visited: true,
    visitedYear: 2025,
    countryInfo: {
      population: 3.28,
      gdp: {
        amount: '$23.4 billion',
        worldRank: 111
      },
      interestingFact: 'Sarajevo hosted the 1984 Winter Olympics.',
      governmentType: 'Federal parliamentary republic',
      currency: 'Bosnia and Herzegovina convertible mark',
      languages: ['Bosnian', 'Croatian', 'Serbian']
    }
  },
  {
    id: 'ME',
    name: 'Montenegro',
    coordinates: [42.7087, 19.3744],
    url: '/travel/montenegro',
    thumbnailUrl: '/img/country-thumbs/montenegro.webp',
    visited: true,
    visitedYear: 2025,
    countryInfo: {
      population: 0.62,
      gdp: {
        amount: '$6.0 billion',
        worldRank: 149
      },
      interestingFact: 'The name Montenegro means “Black Mountain.”',
      governmentType: 'Parliamentary republic',
      currency: 'Euro',
      languages: ['Montenegrin']
    }
  },
  {
    id: 'MK',
    name: 'North Macedonia',
    coordinates: [41.6086, 21.7453],
    url: '/travel/north-macedonia',
    thumbnailUrl: '/img/country-thumbs/north-macedonia.webp',
    visited: true,
    visitedYear: 2025,
    countryInfo: {
      population: 2.08,
      gdp: {
        amount: '$13.9 billion',
        worldRank: 130
      },
      interestingFact: 'Lake Ohrid is one of Europe’s deepest and oldest lakes.',
      governmentType: 'Parliamentary republic',
      currency: 'Macedonian denar',
      languages: ['Macedonian', 'Albanian']
    }
  },
  {
    id: 'AL',
    name: 'Albania',
    coordinates: [41.1533, 20.1683],
    url: '/travel/albania',
    thumbnailUrl: '/img/country-thumbs/albania.webp',
    visited: true,
    visitedYear: 2025,
    countryInfo: {
      population: 2.87,
      gdp: {
        amount: '$18.3 billion',
        worldRank: 123
      },
      interestingFact: 'Albania has one of Europe’s highest numbers of bunkers per capita.',
      governmentType: 'Parliamentary republic',
      currency: 'Albanian lek',
      languages: ['Albanian']
    }
  },
  {
    id: 'TR',
    name: 'Turkey',
    coordinates: [38.9637, 35.2433],
    url: '/travel/turkey',
    thumbnailUrl: '/img/country-thumbs/turkey.webp',
    visited: false,
    visitedYear: 0,
    countryInfo: {
      population: 85.0,
      gdp: {
        amount: '$819 billion',
        worldRank: 19
      },
      interestingFact: 'Istanbul is the only city in the world spanning two continents.',
      governmentType: 'Presidential republic',
      currency: 'Turkish lira',
      languages: ['Turkish']
    }
  }
]; 