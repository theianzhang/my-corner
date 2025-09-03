'use client'

import React, { useEffect, useState } from 'react'
import ThreeGlobe from 'three-globe'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { travelLocations } from '@/data/travelLocations'
import * as THREE from 'three'

const GEOJSON_URL = 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson'

interface GeoJSONFeature {
  type: string;
  properties: {
    sovereignt: string;
  };
  geometry: {
    type: string;
    coordinates: number[][][];
  };
}

interface GeoJSONData extends GeoJSONFeature {
  isVisited: boolean;
}

type GlobeInstance = ThreeGlobe & {
  globeMaterial: () => THREE.Material;
}

export default function Globe3D() {
  const [geoData, setGeoData] = useState<GeoJSONData[]>([])
  const [globe, setGlobe] = useState<GlobeInstance | null>(null)

  // Initialize globe
  useEffect(() => {
    const globeInstance = (new ThreeGlobe() as GlobeInstance)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-day.jpg')
      .polygonAltitude(0.01)
      .polygonCapColor((d: object) => {
        const data = d as GeoJSONData;
        // Don't render polygons for Antarctica
        if (data.properties.sovereignt === 'Antarctica') return 'transparent';
        return data.isVisited ? 'transparent' : '#666666';
      })
      .polygonSideColor((d: object) => {
        const data = d as GeoJSONData;
        if (data.properties.sovereignt === 'Antarctica') return 'transparent';
        return data.isVisited ? 'transparent' : '#666666';
      });

    const material = globeInstance.globeMaterial() as THREE.MeshPhongMaterial;
    material.color = new THREE.Color('#1A1A1A');

    setGlobe(globeInstance)

    // Fetch country data
    fetch(GEOJSON_URL)
      .then(res => res.json())
      .then(data => {
        // Normalize GEOJSON sovereignt names so they can match our travelLocations names
        const nameAliases: Record<string, string> = {
          'United States of America': 'United States',
          'United Republic of Tanzania': 'Tanzania',
          'Czechia': 'Czech Republic',
          'Korea, Republic of': 'South Korea',
          'Russian Federation': 'Russia',
          'Viet Nam': 'Vietnam',
          'United Kingdom': 'United Kingdom',
          'Holy See': 'Vatican City',
          'Lao PDR': 'Laos',
          'Bosnia and Herz.': 'Bosnia and Herzegovina',
          'Côte d’Ivoire': 'Ivory Coast',
          'Cote d\'Ivoire': 'Ivory Coast',
          'Bolivia (Plurinational State of)': 'Bolivia',
          'Venezuela (Bolivarian Republic of)': 'Venezuela',
          'Iran (Islamic Republic of)': 'Iran',
          'Syrian Arab Republic': 'Syria',
          'Kyrgyz Republic': 'Kyrgyzstan',
          'Dem. Rep. Congo': 'Democratic Republic of the Congo',
          'Congo': 'Republic of the Congo',
          'Cabo Verde': 'Cape Verde',
          'Eswatini': 'Swaziland',
        }

        const normalize = (name: string): string => nameAliases[name] ?? name

        const allCountries = data.features.map((feature: GeoJSONFeature) => {
          const sovereign = normalize(feature.properties.sovereignt)
          const isVisited = travelLocations.some(loc => loc.name === sovereign)
          return { ...feature, properties: { ...feature.properties, sovereignt: sovereign }, isVisited }
        })
        setGeoData(allCountries)
      })
  }, [])

  // Update globe when data changes
  useEffect(() => {
    if (globe && geoData.length > 0) {
      globe.polygonsData(geoData)
    }
  }, [globe, geoData])

  if (!globe) return null

  return (
    <Canvas 
      camera={{ 
        position: [2000, 1200, 0], 
        fov: 60 // Slightly tighter field of view for better fit
      }}
      style={{ 
        width: '100%', 
        height: '100%',
        borderRadius: '50%' // Ensure canvas is circular
      }}
    >
      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <primitive object={globe} />
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={-0.25}
        minDistance={120} // Slightly closer min distance
        maxDistance={300} // Allow zooming out more
        // Prevent scroll conflicts
        enableDamping={true}
        dampingFactor={0.05}
        // Limit vertical rotation to prevent weird angles
        maxPolarAngle={Math.PI * 0.8}
        minPolarAngle={Math.PI * 0.2}
      />
    </Canvas>
  )
} 