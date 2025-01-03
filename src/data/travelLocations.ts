interface TravelLocation {
  id: string;
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  url: string;
  visited: boolean;
}

export const travelLocations: TravelLocation[] = [
  {
    id: 'AR',
    name: 'Argentina',
    coordinates: [-38.4161, -63.6167],
    url: '/travel/argentina',
    visited: true
  },
  {
    id: 'AU',
    name: 'Australia',
    coordinates: [-25.2744, 133.7751],
    url: '/travel/australia',
    visited: true
  },
  {
    id: 'AT',
    name: 'Austria',
    coordinates: [47.5162, 14.5501],
    url: '/travel/austria',
    visited: true
  },
  {
    id: 'BY',
    name: 'Belarus',
    coordinates: [53.7098, 27.9534],
    url: '/travel/belarus',
    visited: true
  },
  {
    id: 'BE',
    name: 'Belgium',
    coordinates: [50.8503, 4.3517],
    url: '/travel/belgium',
    visited: true
  },
  {
    id: 'BZ',
    name: 'Belize',
    coordinates: [17.1899, -88.4976],
    url: '/travel/belize',
    visited: true
  },
  {
    id: 'KH',
    name: 'Cambodia',
    coordinates: [12.5657, 104.9910],
    url: '/travel/cambodia',
    visited: true
  },
  {
    id: 'CA',
    name: 'Canada',
    coordinates: [56.1304, -106.3468],
    url: '/travel/canada',
    visited: true
  },
  {
    id: 'CL',
    name: 'Chile',
    coordinates: [-35.6751, -71.5430],
    url: '/travel/chile',
    visited: true
  },
  {
    id: 'CN',
    name: 'China',
    coordinates: [35.8617, 104.1954],
    url: '/travel/china',
    visited: true
  },
  {
    id: 'CO',
    name: 'Colombia',
    coordinates: [4.5709, -74.2973],
    url: '/travel/colombia',
    visited: true
  },
  {
    id: 'CZ',
    name: 'Czech Republic',
    coordinates: [49.8175, 15.4730],
    url: '/travel/czech',
    visited: true
  },
  {
    id: 'DK',
    name: 'Denmark',
    coordinates: [56.2639, 9.5018],
    url: '/travel/denmark',
    visited: true
  },
  {
    id: 'EG',
    name: 'Egypt',
    coordinates: [26.8206, 30.8025],
    url: '/travel/egypt',
    visited: true
  },
  {
    id: 'FR',
    name: 'France',
    coordinates: [46.2276, 2.2137],
    url: '/travel/france',
    visited: true
  },
  {
    id: 'DE',
    name: 'Germany',
    coordinates: [51.1657, 10.4515],
    url: '/travel/germany',
    visited: true
  },
  {
    id: 'GT',
    name: 'Guatemala',
    coordinates: [15.7835, -90.2308],
    url: '/travel/guatemala',
    visited: true
  },
  {
    id: 'HU',
    name: 'Hungary',
    coordinates: [47.1625, 19.5033],
    url: '/travel/hungary',
    visited: true
  },
  {
    id: 'IS',
    name: 'Iceland',
    coordinates: [64.9631, -19.0208],
    url: '/travel/iceland',
    visited: true
  },
  {
    id: 'IN',
    name: 'India',
    coordinates: [20.5937, 78.9629],
    url: '/travel/india',
    visited: true
  },
  {
    id: 'IE',
    name: 'Ireland',
    coordinates: [53.1424, -7.6921],
    url: '/travel/ireland',
    visited: true
  },
  {
    id: 'IT',
    name: 'Italy',
    coordinates: [41.8719, 12.5674],
    url: '/travel/italy',
    visited: true
  },
  {
    id: 'JM',
    name: 'Jamaica',
    coordinates: [18.1096, -77.2975],
    url: '/travel/jamaica',
    visited: true
  },
  {
    id: 'JP',
    name: 'Japan',
    coordinates: [36.2048, 138.2529],
    url: '/travel/japan',
    visited: true
  },
  {
    id: 'KR',
    name: 'South Korea',
    coordinates: [35.9078, 127.7669],
    url: '/travel/korea',
    visited: true
  },
  {
    id: 'LU',
    name: 'Luxembourg',
    coordinates: [49.8153, 6.1296],
    url: '/travel/luxembourg',
    visited: true
  },
  {
    id: 'MT',
    name: 'Malta',
    coordinates: [35.9375, 14.3754],
    url: '/travel/malta',
    visited: true
  },
  {
    id: 'MX',
    name: 'Mexico',
    coordinates: [23.6345, -102.5528],
    url: '/travel/mexico',
    visited: true
  },
  {
    id: 'NL',
    name: 'Netherlands',
    coordinates: [52.1326, 5.2913],
    url: '/travel/netherlands',
    visited: true
  },
  {
    id: 'NO',
    name: 'Norway',
    coordinates: [60.4720, 8.4689],
    url: '/travel/norway',
    visited: true
  },
  {
    id: 'PE',
    name: 'Peru',
    coordinates: [-9.1900, -75.0152],
    url: '/travel/peru',
    visited: true
  },
  {
    id: 'PT',
    name: 'Portugal',
    coordinates: [39.3999, -8.2245],
    url: '/travel/portugal',
    visited: true
  },
  {
    id: 'RU',
    name: 'Russia',
    coordinates: [61.5240, 105.3188],
    url: '/travel/russia',
    visited: true
  },
  {
    id: 'ES',
    name: 'Spain',
    coordinates: [40.4637, -3.7492],
    url: '/travel/spain',
    visited: true
  },
  {
    id: 'SE',
    name: 'Sweden',
    coordinates: [60.1282, 18.6435],
    url: '/travel/sweden',
    visited: true
  },
  {
    id: 'CH',
    name: 'Switzerland',
    coordinates: [46.8182, 8.2275],
    url: '/travel/switzerland',
    visited: true
  },
  {
    id: 'TZ',
    name: 'Tanzania',
    coordinates: [-6.3690, 34.8888],
    url: '/travel/tanzania',
    visited: true
  },
  {
    id: 'TH',
    name: 'Thailand',
    coordinates: [15.8700, 100.9925],
    url: '/travel/thailand',
    visited: true
  },
  {
    id: 'GB',
    name: 'United Kingdom',
    coordinates: [55.3781, -3.4360],
    url: '/travel/united-kingdom',
    visited: true
  },
  {
    id: 'US',
    name: 'United States',
    coordinates: [37.0902, -95.7129],
    url: '/travel/united-states',
    visited: true
  },
  {
    id: 'VA',
    name: 'Vatican City',
    coordinates: [41.9029, 12.4534],
    url: '/travel/vatican',
    visited: true
  },
  {
    id: 'VN',
    name: 'Vietnam',
    coordinates: [14.0583, 108.2772],
    url: '/travel/vietnam',
    visited: true
  }
]; 